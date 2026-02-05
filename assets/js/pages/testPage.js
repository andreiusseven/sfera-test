import { FisiatriaTest } from "../data/fisiatria.js";
import { AnimazioneTest } from "../data/animazione.js";
import { ParametriTest } from "../data/parametri.js";
import { IgieneTest } from "../data/igiene.js";
import { GeriatriaTest } from "../data/geriatria.js";
import { AnatomiaTest } from "../data/anatomia.js";
import { AppAssTest } from "../data/appass.js";
import { Igiene2Test } from "../data/igiene2.js";
import { PatologiaTest } from "../data/patologia.js";
import { el } from "../utils/dom.js";

const params = new URLSearchParams(window.location.search);
const topic = (params.get("topic") || "").toLowerCase();

const questionsContainer = document.getElementById("questionsContainer");
const resultText = document.getElementById("resultText");
const backButton = document.getElementById("backButton");

let questions = [];
const selectedAnswers = new Map();
const forms = [];

// Carica domande in base al topic
switch (topic) {
  case "fisiatria":
    questions = shuffle(FisiatriaTest.questions).slice(0, 20);
    break;
  case "animazione":
    questions = shuffle(AnimazioneTest.questions).slice(0, 20);
    break;
  case "parametri":
    questions = shuffle(ParametriTest.questions).slice(0, 20);
    break;
  case "igiene":
    questions = shuffle(IgieneTest.questions).slice(0, 20);
    break;
  case "geriatria":
    questions = shuffle(GeriatriaTest.questions).slice(0, 20);
    break;
  case "anatomia":
    questions = shuffle(AnatomiaTest.questions).slice(0, 20);
    break;
  case "appass":
    questions = shuffle(AppAssTest.questions).slice(0, 20);
    break;
  case "igiene2":
    questions = shuffle(Igiene2Test.questions).slice(0, 20);
    break;
  case "patologia":
    questions = shuffle(PatologiaTest.questions).slice(0, 20);
    break;
  default:
    alert("Test non valido");
    window.location.href = "test_selection.html";
    break;
}

// Mostra tutte le domande
questions.forEach((question, index) => {
  if (question.imageResId) {
    const img = el("img", { className: "img-question" });
    img.src = question.imageResId;
    img.alt = "Immagine domanda";
    questionsContainer.appendChild(img);
  }

  const qText = el("p", { className: "question-text", text: question.text });
  questionsContainer.appendChild(qText);

  const form = el("form", { className: "answers", attrs: { "data-index": index } });
  question.answers.forEach(([answerText], answerIndex) => {
    const label = el("label");
    const radio = el("input", { attrs: { type: "radio", name: "q" + index, value: String(answerIndex) } });
    radio.addEventListener("change", () => selectedAnswers.set(index, answerIndex));
    label.appendChild(radio);
    label.append(document.createTextNode(" " + answerText));
    form.appendChild(label);
    form.appendChild(el("br"));
  });
  questionsContainer.appendChild(form);
  forms.push(form);
});

// Bottone invia (dinamico)
const submitButton = el("button", { className: "btn", text: "Invia" });
submitButton.style.marginTop = "32px";
questionsContainer.appendChild(submitButton);

submitButton.addEventListener("click", () => {
  const allAnswered = questions.every((_, i) => selectedAnswers.has(i));
  if (!allAnswered) {
    alert("Rispondi a tutte le domande prima di inviare");
    return;
  }

  let totalScore = 0;

  questions.forEach((question, index) => {
    const selectedId = selectedAnswers.get(index);
    totalScore += question.answers[selectedId][1];

    const correctIndex = question.answers.findIndex(ans => ans[1] === 1);
    const labels = forms[index].querySelectorAll("label");

    labels.forEach((label, i) => {
      const text = label.textContent.trim();
      if (i === selectedId) {
        if (i === correctIndex) {
          label.classList.add("answer-correct");
          label.textContent = "✅ " + text;
        } else {
          label.classList.add("answer-wrong");
          label.textContent = "❌ " + text;
        }
      }
      if (i === correctIndex && i !== selectedId) {
        label.classList.add("answer-correct");
        label.textContent = "✅ " + text;
      }
      // Disabilita i radio dopo l'invio
      const input = label.querySelector("input");
      if (input) input.disabled = true;
    });

    // Spiegazione se sbagliata
    if (selectedId !== correctIndex && question.explanation) {
      const expl = el("p", { className: "explanation", text: "💡 " + question.explanation });
      forms[index].after(expl);
    }
  });

  // Feedback finale
 const feedback =
  topic === "fisiatria" ? FisiatriaTest.getFeedback(totalScore) :
  topic === "animazione" ? AnimazioneTest.getFeedback(totalScore) :
  topic === "parametri" ? ParametriTest.getFeedback(totalScore) :
  topic === "igiene" ? IgieneTest.getFeedback(totalScore) :
  topic === "geriatria" ? GeriatriaTest.getFeedback(totalScore) :
  topic === "anatomia" ? AnatomiaTest.getFeedback(totalScore) :
  topic === "appass" ? AppAssTest.getFeedback(totalScore) :
  topic === "igiene2" ? Igiene2Test.getFeedback(totalScore) :
  topic === "patologia" ? PatologiaTest.getFeedback(totalScore) :
  "";
  resultText.textContent = `Punteggio totale: ${totalScore} ${feedback}`;

  submitButton.textContent = "Ricalcola punteggio";
  backButton.style.display = "inline-block";
});

// Bottone back
backButton.addEventListener("click", () => {
  window.location.href = "test_selection.html";
});

// Utility shuffle
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
