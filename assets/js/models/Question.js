export class Question {
  constructor(text, answers, explanation = "", imageResId = null) {
    this.text = text;
    this.answers = answers; // Array di coppie [string, number]
    this.explanation = explanation;
    // In web usa URL o path relativo per immagini
    this.imageResId = imageResId; // es. "assets/img/immagine1.webp"
  }
}
