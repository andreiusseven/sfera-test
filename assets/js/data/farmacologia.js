import { Question } from "../models/Question.js";

export const FarmacologiaTest = {
  questions: [

        new Question("Cosa è la farmacologia?",
          [
            ["Scienza che studia le interazioni di una sostanza chimica con l’organismo", 1],
            ["Scienza che si occupa della sintesi chimica dei farmaci", 0],
            ["Disciplina che analizza esclusivamente gli effetti tossici delle sostanze", 0],
            ["Scienza che studia la struttura dei recettori cellulari", 0]
          ],
            "La farmacologia studia le interazioni tra sostanze chimiche e organismo."
        ),

        new Question("La scienza che studia le interazioni di una sostanza chimica con l'organismo è",
          [
            ["farmacocinetica", 0],
            ["farmacologia", 1],
            ["farmacografia", 0],
            ["farmacodinamica", 0]
          ],
            "La farmacologia studia le interazioni tra sostanze chimiche e organismo."
        ),

        new Question("Come viene definito un farmaco?",
          [
            ["Una sostanza che produce effetti benefici sull'organismo", 0],
            ["Una molecola in grado di eliminare patogeni", 0],
            ["Una sostanza che modifica funzioni biologiche", 1],
            ["Una molecola di origine sintetica", 0]
          ],
            "Un farmaco induce modifiche nelle funzioni biologiche tramite azioni chimiche."
        ),

        new Question("Un farmaco solitamente agisce su",
          [
            ["mitocondri", 0],
            ["enzimi", 0],
            ["ormoni", 0],
            ["nessuna delle precedenti", 1]
          ],
            "I farmaci interagiscono con molecole presenti sulla superficie delle membrane cellulari chiamate recettori."
        ),

        new Question("Quando una sostanza viene definita tossina o veleno?",
          [
            ["Quando induce modificazioni dannose", 1],
            ["Quando è somministrata per via endovenosa", 0],
            ["Quando non produce alcun effetto", 0],
            ["Quando agisce troppo lentamente", 0]
          ],
            "Se l’effetto di una molecola è dannoso, la sostanza è considerata tossina o veleno."
        ),

        new Question("Quale dei seguenti è considerabile un farmaco?",
          [
            ["Tossina", 0],
            ["Medicamento", 0],
            ["Veleno", 0],
            ["Tutte le precedenti", 1]
          ],
            "Un farmaco è qualsiasi sostanza in grado di produrre modifiche biologiche."
        ),

        new Question("Da cosa dipendono essenzialmente gli effetti dei farmaci?",
          [
            ["Dalla velocità di assorbimento", 0],
            ["Dal momento della giornata", 0],
            ["Dalla dose somministrata", 1],
            ["Dalla via di assunzione", 0]
          ],
            "Gli effetti di un farmaco dipendono principalmente dalla dose somministrata."
        ),

        new Question("Con finestra terapeutica si indica",
          [
            ["il tempo di assorbimento di un farmaco", 0],
            ["l’intervallo tra dose minima efficace e dose massima tollerata di un farmaco", 1],
            ["il tempo necessario affinché un farmaco manifesti gli effetti benefici", 0],
            ["l'intervallo di tempo tra l'assunzione di un farmaco e la sua eliminazione", 0]
          ],
            "La finestra terapeutica è l'intervallo di concentrazione di un farmaco tra la dose terapeutica e la dose tossica."
        ),

        new Question("Se la dose di un farmaco è troppo bassa",
          [
            ["si producono risposte inadeguate", 1],
            ["il farmaco diventa più potente", 0],
            ["si verifica tossicità", 0],
            ["si ottiene l’effetto terapeutico massimo", 0]
          ],
            "Dosi troppo basse producono risposte inadeguate."
        ),

        new Question("Se la dose di un farmaco supera la finestra terapeutica",
          [
            ["non si ha nessun effetto", 0],
            ["si manifestano effetti tossici", 1],
            ["aumenta la disponibilità di farmaco nell'organismo", 0],
            ["si produce l'effetto ottimale", 0]
          ],
            "Una dose troppo alta porta a effetti tossici."
        ),

        new Question("Che cosa indica la potenza di un farmaco?",
          [
            ["La capacità del farmaco di legarsi ai recettori", 0],
            ["La velocità con cui il farmaco viene eliminato", 0],
            ["La dose necessaria per raggiungere l’effetto massimo", 1],
            ["La capacità di un farmaco di produrre effetti tossici", 0]
          ],
            "Un farmaco è più potente se raggiunge l’effetto massimo con una dose minore."
        ),

        new Question("L’indice terapeutico è",
          [
            ["la velocità di assorbimento", 0],
            ["la capacità del farmaco di attraversare le membrane", 0],
            ["un indicatore della biodisponibilità", 0],
            ["un indicatore della sicurezza del farmaco", 1]
          ],
            "L’indice terapeutico misura quanto un farmaco è sicuro."
        ),

        new Question("Gli effetti collaterali sono",
          [
            ["un effetto non ricercato ma legato al meccanismo d’azione", 1],
            ["un effetto ricercato dal medico", 0],
            ["un effetto sempre utile", 0],
            ["un effetto sempre tossico", 0]
          ],
            "Gli effetti collaterali derivano dallo stesso meccanismo dell’effetto terapeutico, ma non sono ricercati."
        ),

        new Question("Che cosa studia la farmacodinamica?",
          [
            ["La velocità di eliminazione", 0],
            ["Gli effetti molecolari e cellulari del farmaco", 1],
            ["Il percorso del farmaco nell’organismo", 0],
            ["La distribuzione nei tessuti", 0]
          ],
            "La farmacodinamica studia i meccanismi d’azione del farmaco e come il farmaco agisce a livello molecolare, cellulare e tissutale.."
        ),

        new Question("Affinché un farmaco possa agire, deve essere",
          [
            ["liposolubile", 0],
            ["eliminato rapidamente", 0],
            ["legato a un recettore", 1],
            ["somministrato per via endovenosa", 0]
          ],
            "Il legame con un recettore è essenziale per l’effetto."
        ),

        new Question("Che cosa studia la farmacocinetica?",
          [
            ["Gli effetti molecolari del farmaco", 0],
            ["La selettività del recettore", 0],
            ["La potenza del farmaco", 0],
            ["Il percorso del farmaco nell’organismo", 1]
          ],
            "La farmacocinetica descrive assorbimento, distribuzione, metabolismo ed eliminazione (ADME)."
        ),

        new Question("Quali sono le quattro fasi della farmacocinetica?",
          [
            ["Assorbimento, distribuzione, metabolismo, eliminazione", 1],
            ["Assunzione, degradazione, miscelazione, escrezione", 0],
            ["Assorbimento, digestione, metabolismo, espulsione", 0],
            ["Assimilazione, distribuzione, minzione, escrezione", 0]
          ],
            "ADME = Assorbimento, Distribuzione, Metabolismo, Eliminazione."
        ),

        new Question("Quale tra questi è un vantaggio della via orale?",
          [
            ["Effetto immediato", 0],
            ["Semplice ed economica", 1],
            ["Utile in pazienti incoscienti", 0],
            ["Nessuna interazione con il cibo", 0]
          ],
            "La via orale è semplice, economica e ben accettata."
        ),

        new Question("Quale tra questi è uno svantaggio della via orale?",
          [
            ["Effetto troppo rapido", 0],
            ["Non adatta a terapie croniche", 0],
            ["Interazione con il cibo", 1],
            ["Nessuna possibilità di intervento in caso di errore", 0]
          ],
            "La via orale può essere influenzata dal cibo."
        ),

        new Question("Quale tra questi è un vantaggio della via sublinguale?",
          [
            ["Adatta per uso prolungato", 0],
            ["Assorbimento lento", 0],
            ["Nessuna irritazione della mucosa", 0],
            ["Passaggio diretto nella circolazione sanguigna", 1]
          ],
            "La via sublinguale permette un passaggio diretto nel circolo sanguigno e un effetto rapido."
        ),

        new Question("Quale tra questi è uno svantaggio della via sublinguale?",
          [
            ["Quantità assorbite scarse", 1],
            ["Effetto troppo rapido", 0],
            ["Necessità di apparecchiature specifiche", 0],
            ["Effetto sistemico eccessivo", 0]
          ],
            "La superficie assorbente è piccola e il tempo di contatto breve."
        ),

        new Question("Quale tra questi è un vantaggio della via rettale?",
          [
            ["Effetto immediato", 0],
            ["Utile in caso di vomito", 1],
            ["Nessuna irritazione locale", 0],
            ["Assorbimento completo", 0]
          ],
            "La via rettale è utile quando il paziente vomita o non può assumere farmaci per via orale."
        ),

        new Question("Quale tra questi è uno svantaggio della via rettale?",
          [
            ["Nessuna azione locale", 0],
            ["Effetto troppo rapido", 0],
            ["Irritazione locale", 1],
            ["Assorbimento eccessivo", 0]
          ],
            "La via rettale può causare irritazione e l’assorbimento può essere incompleto."
        ),

        new Question("Qual è lo scopo principale della via cutanea?",
          [
            ["Evitare il metabolismo epatico", 0],
            ["Effetto sistemico rapido", 0],
            ["Somministrare grandi volumi", 0],
            ["Effetto topico limitato alla zona di applicazione", 1]
          ],
            "La via cutanea è usata soprattutto per ottenere un effetto locale."
        ),

        new Question("Quale tra questi è un vantaggio della via inalatoria?",
          [
            ["Evita il filtro epatico", 1],
            ["Assorbimento lento", 0],
            ["Non richiede apparecchiature", 0],
            ["Nessuna irritazione locale", 0]
          ],
            "La via inalatoria evita il primo passaggio epatico e garantisce un assorbimento rapido."
        ),

        new Question("Quale tra questi è uno svantaggio della via inalatoria?",
          [
            ["Nessun effetto locale", 0],
            ["Necessità di apparecchiature specifiche", 1],
            ["Scarso assorbimento", 0],
            ["Effetto troppo lento", 0]
          ],
            "La somministrazione inalatoria richiede dispositivi specifici."
        ),

        new Question("Quale tra questi è un vantaggio della via endovenosa?",
          [
            ["Assorbimento imprevedibile", 0],
            ["Possibilità di auto-somministrazione", 0],
            ["Azione rapida", 1],
            ["Nessun rischio di effetti avversi", 0]
          ],
            "La via endovenosa garantisce un effetto immediato ed è utile nelle emergenze."
        ),

        new Question("Quale tra questi è uno svantaggio della via endovenosa?",
          [
            ["Assorbimento lento", 0],
            ["Volume somministrabile molto limitato", 0],
            ["Non adatta ai pazienti incoscienti", 0],
            ["Effetti avversi maggiori", 1]
          ],
            "La via EV può causare shock anafilattico, embolia, flebite."
        ),

        new Question("Quale tra questi è un vantaggio della via intramuscolare?",
          [
            ["Assorbimento rapido", 1],
            ["Nessun dolore in sede", 0],
            ["Adatta a grandi volumi", 0],
            ["Nessun rischio di reazioni tessutali", 0]
          ],
            "La via intramuscolare permette un assorbimento rapido ed è adatta anche a preparati deposito."
        ),

        new Question("La struttura fisiologica che ostacola il passaggio dei farmaci al sistema nervoso centrale è la barriera",
          [
            ["intestinale", 0],
            ["ematoencefalica", 1],
            ["alveolare", 0],
            ["placentare", 0]
          ],
            "La BEE filtra efficacemente le sostanze chimiche presenti nel sangue."
        ),

        new Question("La struttura fisiologica che ostacola il passaggio dei farmaci dalla madre al feto è la barriera",
          [
            ["ematoencefalica", 0],
            ["alveolare", 0],
            ["placentare", 1],
            ["intestinale", 0]
          ],
            "La barriera placentare limita il passaggio dei farmaci al feto."
        ),

        new Question("Qual è lo scopo principale del metabolismo dei farmaci?",
          [
            ["Aumentare la durata d’azione", 0],
            ["Rendere i farmaci più liposolubili", 0],
            ["Aumentare la potenza del farmaco", 0],
            ["Trasformare i farmaci in composti idrosolubili", 1]
          ],
            "Il metabolismo rende i farmaci più idrosolubili per facilitarne l’eliminazione."
        ),

        new Question("Qual è l’organo principale responsabile del metabolismo dei farmaci?",
          [
            ["Fegato", 1],
            ["Rene", 0],
            ["Polmone", 0],
            ["Intestino", 0]
          ],
            "Il fegato è il principale organo deputato alla biotrasformazione dei farmaci."
        ),

        new Question("Perché il metabolismo dei farmaci è ridotto nel neonato?",
          [
            ["Per insufficienza renale", 0],
            ["Per immaturità dei sistemi enzimatici", 1],
            ["Per eccesso di massa epatica", 0],
            ["Per aumento del flusso sanguigno epatico", 0]
          ],
            "Nei neonati gli enzimi epatici non sono ancora completamente sviluppati."
        ),

        new Question("Quale tra questi può essere un risultato della biotrasformazione di un farmaco?",
          [
            ["Solo metaboliti inattivi", 0],
            ["Solo metaboliti tossici", 0],
            ["Metaboliti inattivi, attivi o tossici", 1],
            ["Nessuna modifica chimica", 0]
          ],
            "Il metabolismo può generare metaboliti inattivi, attivi o tossici."
        ),

        new Question("Perché è importante studiare il metabolismo dei farmaci?",
          [
            ["Per migliorare il sapore del farmaco", 0],
            ["Per aumentare la durata di conservazione", 0],
            ["Per ridurre i costi di produzione", 0],
            ["Per stabilire la dose corretta e prevedere interazioni", 1]
          ],
            "Conoscere il metabolismo permette di adattare la dose e prevedere interferenze con altri farmaci."
        ),

        new Question("Quali sono le principali vie di eliminazione dei farmaci?",
          [
            ["Renale e biliare", 1],
            ["Salivare e lacrimale", 0],
            ["Cutanea e mammaria", 0],
            ["Polmonare e sudoripara", 0]
          ],
            "Le vie principali sono renale (urine) ed epatica (bile)."
        ),

        new Question("Perché il rene è fondamentale nell’eliminazione dei farmaci?",
          [
            ["Perché produce enzimi metabolici", 0],
            ["Perché riceve il 25% della gittata cardiaca", 1],
            ["Perché aumenta la loro potenza", 0],
            ["Perché immagazzina i farmaci", 0]
          ],
            "L’elevata perfusione renale permette un’efficace filtrazione del sangue."
        ),

        new Question("Qual è la funzione principale della via biliare nell’eliminazione?",
          [
            ["Aumentare la biodisponibilità", 0],
            ["Digerire i farmaci", 0],
            ["Eliminare farmaci e metaboliti attraverso le feci", 1],
            ["Ridurre la solubilità dei farmaci", 0]
          ],
            "La bile trasporta farmaci e metaboliti nell’intestino, da cui vengono eliminati con le feci."
        ),

        new Question("Quale tra queste è una via di eliminazione secondaria dei farmaci?",
          [
            ["Via gastrica", 0],
            ["Via pancreatica", 0],
            ["Via ossea", 0],
            ["Via polmonare", 1]
          ],
            "L’espirazione polmonare è una via secondaria di eliminazione."
        ),

        new Question("Quale tra questi è un requisito fondamentale per l’effetto placebo?",
          [
            ["Autosuggestione del paziente", 1],
            ["Assunzione di un farmaco attivo", 0],
            ["Effetto immediato", 0],
            ["Somministrazione endovenosa", 0]
          ],
            "Il paziente deve convincersi che la cura sia efficace."
        ),

        new Question("In quali condizioni l’effetto placebo è più frequente?",
          [
            ["Malattie genetiche", 0],
            ["Patologie psicosomatiche", 1],
            ["Infezioni batteriche gravi", 0],
            ["Tumori solidi", 0]
          ],
            "Emicrania, ansia, insonnia e colon irritabile rispondono spesso al placebo."
        ),

        new Question("Quale tra questi elementi non diminuisce l’effetto placebo?",
          [
            ["Scarsa fiducia nel medico", 0],
            ["Ambiente ostile", 0],
            ["Terapista rassicurante", 1],
            ["Assenza di aspettative", 0]
          ],
            "La fiducia nel terapeuta amplifica la risposta placebo."
        ),

        new Question("Cosa comporta la tolleranza ai farmaci?",
          [
            ["Diminuzione degli effetti collaterali", 0],
            ["Aumento della potenza del farmaco", 0],
            ["Riduzione della dipendenza", 0],
            ["Necessità di dosi maggiori per ottenere lo stesso effetto", 1]
          ],
            "Con l’uso prolungato, la stessa dose diventa meno efficace."
        ),

        new Question("Cosa causa la resistenza batterica ai farmaci?",
          [
            ["Mutazioni genetiche nei batteri", 1],
            ["Riduzione della dose terapeutica", 0],
            ["Aumento della potenza dell’antibiotico", 0],
            ["Aumento della temperatura corporea", 0]
          ],
            "Le mutazioni rendono alcuni batteri insensibili agli antibiotici."
        ),

        new Question("Quale comportamento favorisce la resistenza agli antibiotici?",
          [
            ["Completare la terapia prescritta", 0],
            ["Sospendere la terapia troppo presto", 1],
            ["Usare antibiotici solo quando necessari", 0],
            ["Eseguire un antibiogramma", 0]
          ],
            "Interrompere la terapia permette ai batteri resistenti di sopravvivere e proliferare."
        ),

        new Question("Cosa caratterizza la tossicità selettiva degli antibiotici?",
          [
            ["Sono tossici solo per le cellule umane", 0],
            ["Sono tossici per virus e batteri", 0],
            ["Sono tossici solo per i microrganismi", 1],
            ["Sono tossici per tutte le cellule", 0]
          ],
            "La tossicità selettiva permette agli antibiotici di colpire i batteri senza danneggiare le cellule umane."
        ),

        new Question("Perché i disinfettanti non possono essere usati come antibiotici sistemici?",
          [
            ["Perché sono troppo costosi", 0],
            ["Perché non sono abbastanza potenti", 0],
            ["Perché non uccidono i batteri", 0],
            ["Perché non hanno tossicità selettiva", 1]
          ],
            "I disinfettanti danneggiano anche le cellule umane, quindi non sono selettivi."
        ),

        new Question("Cos’è la resistenza acquisita agli antibiotici?",
          [
            ["Una mutazione che rende i batteri insensibili al farmaco", 1],
            ["Una caratteristica presente dalla nascita", 0],
            ["Una riduzione della potenza dell’antibiotico", 0],
            ["Un effetto collaterale del trattamento", 0]
          ],
            "La resistenza acquisita deriva da mutazioni che rendono inefficace il farmaco."
        ),

        new Question("Quale comportamento favorisce la resistenza acquisita?",
          [
            ["Uso corretto degli antibiotici", 0],
            ["Uso non necessario degli antibiotici in agricoltura", 1],
            ["Terapia prolungata oltre la scomparsa dei sintomi", 0],
            ["Esecuzione dell’antibiogramma", 0]
          ],
            "L’uso improprio in agricoltura è una delle principali cause di resistenza."
        ),

        new Question("Cosa caratterizza le reazioni idiosincrasiche ai farmaci?",
          [
            ["Sono prevedibili", 0],
            ["Sono dose-dipendenti", 0],
            ["Sono reazioni anomale non correlate alla dose", 1],
            ["Sono sempre di origine genetica", 0]
          ],
            "Le reazioni idiosincrasiche non dipendono dalla dose e spesso non hanno causa nota."
        ),

        new Question("Quale tra queste classi di farmaci è utilizzata per ridurre la colesterolemia LDL?",
          [
            ["Antidepressivi", 0],
            ["Antibiotici", 0],
            ["Antipertensivi", 0],
            ["Ipolipemizzanti", 1]
          ],
            "Gli ipolipemizzanti, come le statine, riducono il colesterolo LDL."
        )

    ],

  getFeedback(score) {
    if (score >= 0 && score <= 20) return "/20";
    return "";
  }
};
