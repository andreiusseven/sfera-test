import { Question } from "../models/Question.js";

export const Patologia2Test = {
  questions: [

        new Question("Che cosa provoca la BPCO?",
            [
                ["Un'ostruzione del flusso d'aria in uscita", 1],
                ["Un aumento della produzione di globuli rossi", 0],
                ["Un'ostruzione del flusso d'aria in entrata", 0],
                ["Una riduzione del battito cardiaco", 0]
            ],
            "La BPCO provoca ostruzione del flusso d'aria che esce dalle vie respiratorie."
        ),

        new Question("Qual è la causa più frequente della BPCO?",
            [
                ["Allergie stagionali", 0],
                ["Fumo di sigaretta", 1],
                ["Carenza di vitamina D", 0],
                ["Sedentarietà", 0]
            ],
            "La causa più frequente è l'esposizione a lungo termine a gas irritanti, soprattutto il fumo di sigaretta."
        ),

        new Question("Le due condizioni comuni che concorrono insieme a determinare la BPCO sono",
            [
                ["la bronchiolite e la pleurite", 0],
                ["l'emotorace e il pneumotorace", 0],
                ["la bronchite cronica e l'enfisema", 1],
                ["la rinite e la laringite", 0]
            ],
            "La bronchite cronica (infiammazione cronica dei bronchi) e l'enfisema (distruzione della struttura degli alveoli) determinano la BPCO."
        ),

        new Question("Qual è la caratteristica principale della bronchite cronica?",
            [
                ["Febbre persistente", 0],
                ["Distruzione degli alveoli", 0],
                ["Dolore toracico acuto", 0],
                ["Tosse giornaliera con muco per almeno 6 mesi", 1]
            ],
            "La bronchite cronica è definita da tosse e produzione di muco per almeno 6 mesi."
        ),

        new Question("Che cosa caratterizza l'enfisema?",
            [
                ["Distruzione degli alveoli", 1],
                ["Produzione eccessiva di saliva", 0],
                ["Infiammazione dei bronchi", 0],
                ["Riduzione della frequenza respiratoria", 0]
            ],
            "L'enfisema comporta la distruzione degli alveoli a causa di esposizione a fumo e irritanti."
        ),

        new Question("Quale sintomo è tipico della BPCO?",
            [
                ["Aumento dell'appetito", 0],
                ["Dispnea da sforzo", 1],
                ["Bradicardia", 0],
                ["Dolore addominale", 0]
            ],
            "La dispnea da sforzo è uno dei sintomi principali."
        ),

        new Question("Quale tra questi può essere un segno di peggioramento della BPCO?",
            [
                ["Aumento di peso", 0],
                ["Riduzione della sudorazione", 0],
                ["Edema delle caviglie", 1],
                ["Aumento della diuresi", 0]
            ],
            "Il peggioramento della BPCO causa spesso problemi di scompenso cardiaco e quindi edemi."
        ),

        new Question("Quale complicanza può insorgere nei pazienti con BPCO?",
            [
                ["Gastrite cronica", 0],
                ["Calcoli renali", 0],
                ["Dermatite atopica", 0],
                ["Ipertensione polmonare", 1]
            ],
            "L'ipertensione polmonare, polmoniti acute e problemi cardiaci sono possibili complicanze."
        ),

        new Question("La BPCO aumenta il rischio di quale tumore?",
            [
                ["Adenocarcinoma polmonare", 1],
                ["Tumore della tiroide", 0],
                ["Tumore del colon", 0],
                ["Melanoma", 0]
            ],
            "L'infiammazione cronica del tessuto polmonare facilita l'insorgere di tumori."
        ),

        new Question("Quale esame NON viene solitamente eseguito per valutare il grado di severità di BPCO?",
            [
                ["ETT", 0],
                ["EEG", 1],
                ["RX", 0],
                ["ECG", 0]
            ],
            "ElettroCardioGramma, EcocardioTransToracico e Radiografia sono utili per la valutazione. L'ElettroEncefaloGramma non serve."
        ),

        new Question("Quale esame misura la capacità inspiratoria ed espiratoria dei polmoni?",
            [
                ["Elettrocardiogramma", 0],
                ["Spirometria", 0],
                ["TAC addome", 1],
                ["Ecografia", 0]
            ],
            "La spirometria valuta la funzionalità respiratoria."
        ),

        new Question("Quale esame può valutare i livelli di ossigeno e anidride carbonica nel sangue?",
            [
                ["Test da sforzo", 0],
                ["Elettromiografia", 0],
                ["Holter pressorio", 0],
                ["Emogasanalisi", 1]
            ],
            "L'emogasanalisi misura i gas nel sangue arterioso."
        ),

        new Question("Qual è l'obiettivo della terapia nella BPCO?",
            [
                ["Rallentare la progressione e alleviare i sintomi", 1],
                ["Ridurre la temperatura corporea", 0],
                ["Guarire completamente la malattia", 0],
                ["Aumentare la frequenza cardiaca", 0]
            ],
            "La terapia mira a rallentare la progressione e ridurre i sintomi."
        ),

        new Question("Quale farmaco viene usato per trattare la BPCO?",
            [
                ["Corticosteroidi", 0],
                ["Broncodilatatori", 0],
                ["Mucolitici", 0],
                ["Tutte le precedenti", 1]
            ],
            "I broncodilatatori dilatano le vie aeree e si assumono per inalazione./nI mucolitici sciolgono il muco nei bronchi./nI corticosteroidi aiutano a ridurre i processi infiammatori."
        ),

        new Question("Quale sintomo è tipico dell'asma?",
            [
                ["Dolore addominale", 0],
                ["Ipertensione", 0],
                ["Respiro sibilante", 1],
                ["Aumento dell'appetito", 0]
            ],
            "Tosse, costrizione al petto, respiro sibilante e dispnea sono segni caratteristici dell'asma bronchiale."
        ),

        new Question("Quali cellule partecipano all'infiammazione bronchiale nell'asma?",
            [
                ["Neuroblasti e fibroblasti", 0],
                ["Mastociti, eosinofili e linfociti T", 1],
                ["Eritrociti e piastrine", 0],
                ["Cellule beta pancreatiche", 0]
            ],
            "Leucociti attivati dall'infiammazione causano contrazione della muscolatura liscia bronchiale."
        ),

        new Question("Che cosa comporta l'iper-reattività bronchiale?",
            [
                ["Risposta eccessiva a stimoli irritanti", 1],
                ["Aumento della produzione del muco", 0],
                ["Aumento della pressione arteriosa", 0],
                ["Aumento della frequenza respiratoria", 0]
            ],
            "L'iper-reattività rende i bronchi più sensibili agli stimoli."
        ),

        new Question("Quale tra questi è un fattore genetico associato all'asma?",
            [
                ["Emofilia", 0],
                ["Atopia", 1],
                ["Celiachia", 0],
                ["Diabete", 0]
            ],
            "L'atopia comprende dermatite atopica, rinite allergica e asma."
        ),

        new Question("Quale fattore può scatenare l'asma?",
            [
                ["Carenza di ferro", 0],
                ["Ipotermia", 0],
                ["Allergeni", 1],
                ["Iperidrosi", 0]
            ],
            "Gli allergeni, inquinanti ambientali e fumo costituiscono fattori scatenanti."
        ),

        new Question("Quale esame valuta la reattività delle vie respiratorie?",
            [
                ["TAC addome", 0],
                ["Elettrocardiogramma", 0],
                ["Holter pressorio", 0],
                ["Test di reattività bronchiale", 1]
            ],
            "Il test di reattività valuta la risposta delle vie aeree."
        ),

        new Question("Quale parametro misurato nell'aria espirata è utile nella valutazione dell'asma?",
            [
                ["Ossido nitrico", 1],
                ["Corpi chetonici", 0],
                ["Azoto", 0],
                ["Anidride carbonica", 0]
            ],
            "L'ossido nitrico è indice di attività eosinofila."
        ),

        new Question("Quale categoria di farmaci è usata come terapia d'emergenza nel trattamento delle BPCO?",
            [
                ["Antileucotrienici", 0],
                ["Broncodilatatori", 1],
                ["Antistaminici", 0],
                ["Antibiotici", 0]
            ],
            "I broncodilatatori sono usati nelle crisi acute."
        ),

        new Question("Che cosa caratterizza l'insufficienza respiratoria?",
            [
                ["Aumento dell'ossigeno nel sangue", 0],
                ["Aumento della temperatura corporea", 0],
                ["Incapacità di mantenere un adeguato scambio gassoso", 1],
                ["Riduzione della frequenza cardiaca", 0]
            ],
            "L'insufficienza respiratoria compromette lo scambio di ossigeno e anidride carbonica."
        ),

        new Question("Qual è la forma più comune di insufficienza respiratoria?",
            [
                ["Cronica", 0],
                ["Ipercapnica", 0],
                ["Acuta", 0],
                ["Ipossiemica", 1]
            ],
            "La forma ipossiemica (con bassi livelli di ossigeno nel sangue) è la più comune."
        ),

        new Question("Qual è il valore di PaO₂ nell'insufficienza respiratoria ipossiemica?",
            [
                ["< 60 mmHg", 1],
                ["> 100 mmHg", 0],
                ["= 80 mmHg", 0],
                ["< 20 mmHg", 0]
            ],
            "L'insufficienza ipossiemica è definita da PaO₂ < 60 mmHg."
        ),

        new Question("Qual è il valore di PaCO₂ nell'insufficienza respiratoria ipercapnica?",
            [
                ["< 20 mmHg", 0],
                ["> 50 mmHg", 1],
                ["< 40 mmHg", 0],
                ["= 30 mmHg", 0]
            ],
            "L'insufficienza ipercapnica è definita da PaCO₂ > 50 mmHg."
        ),

        new Question("Quale sintomo indica una scarsa ossigenazione del sangue?",
            [
                ["Pallore", 0],
                ["Polidipsia", 0],
                ["Cianosi", 1],
                ["Diaforesi", 0]
            ],
            "La cianosi, cioè la colorazione blu di pelle, labbra e unghie, è segno di ipossia."
        ),

        new Question("Quale esame è fondamentale per valutare i livelli di ossigeno e CO₂ nel sangue?",
            [
                ["Spirometria", 0],
                ["Ecografia addominale", 0],
                ["Elettrocardiogramma", 0],
                ["Emogasanalisi", 1]
            ],
            "L'emogasanalisi misura i gas nel sangue arterioso."
        ),

        new Question("Quale indagine permette di visualizzare eventuali alterazioni strutturali del torace?",
            [
                ["TAC del torace", 1],
                ["Spirometria", 0],
                ["Elettroencefalogramma", 0],
                ["Holter cardiaco", 0]
            ],
            "La TAC del torace consente di osservare dettagliatamente i polmoni e le strutture toraciche."
        ),

        new Question("Cosa può essere necessario nei casi più gravi di insufficienza respiratoria?",
            [
                ["Terapia ormonale", 0],
                ["Supporto respiratorio", 1],
                ["Terapia anticoagulante", 0],
                ["Massaggio cardiaco", 0]
            ],
            "Supporti respiratori come parte della terapia."
        ),

        new Question("Qual è la via di trasmissione dell'epatite A?",
            [
                ["Sessuale", 0],
                ["Parenterale", 0],
                ["Oro-fecale", 1],
                ["Respiratoria", 0]
            ],
            "L'epatite A si trasmette per via oro-fecale."
        ),

        new Question("Quale alimento è associato alla trasmissione dell'epatite E?",
            [
                ["Legumi", 0],
                ["Latte pastorizzato", 0],
                ["Pasta integrale", 0],
                ["Carne cruda o poco cotta", 1]
            ],
            "La trasmissione è alimentare, spesso legata a carne cruda o poco cotta."
        ),

        new Question("In quale condizione l'epatite E può diventare pericolosa?",
            [
                ["Durante la gravidanza", 1],
                ["Nell'infanzia", 0],
                ["Negli anziani", 0],
                ["Nei soggetti non vaccinati", 0]
            ],
            "L'epatite fulminante è rara, ma più frequente in gravidanza."
        ),

        new Question("Qual è il tipo di patogeno responsabile dell'epatite B?",
            [
                ["Virus a RNA", 0],
                ["Virus a DNA", 1],
                ["Batterio intracellulare", 0],
                ["Protozoo", 0]
            ],
            "L'HBV è un virus a DNA."
        ),

        new Question("Qual è il tipo di patogeno responsabile dell'epatite C?",
            [
                ["Virus a DNA", 0],
                ["Protozoo", 0],
                ["Virus a RNA", 1],
                ["Batterio intracellulare", 0]
            ],
            "L'HCV è un virus a RNA."
        ),

        new Question("Quale modalità NON è tipica di trasmissione dell'epatite B?",
            [
                ["Microlesioni cutanee", 0],
                ["Trasmissione sessuale", 0],
                ["Punture accidentali", 0],
                ["Trasmissione oro-fecale", 1]
            ],
            "La trasmissione è ematica, sessuale e tramite microlesioni."
        ),

        new Question("Quale forma di epatite B ha mortalità più elevata?",
            [
                ["Fulminante", 1],
                ["Cronica inattiva", 0],
                ["Asintomatica", 0],
                ["Acuta", 0]
            ],
            "L'epatite B fulminante è rara ma spesso fatale."
        ),

        new Question("Qual è la via principale di trasmissione dell'epatite C?",
            [
                ["Oro-fecale", 0],
                ["Parenterale", 1],
                ["Respiratoria", 0],
                ["Sessuale esclusiva", 0]
            ],
            "La trasmissione è prevalentemente parenterale."
        ),

        new Question("Qual è la percentuale di persone che sviluppa epatite C cronica?",
            [
                ["5–10%", 0],
                ["20–30%", 0],
                ["75–85%", 1],
                ["95-99%", 0]
            ],
            "La maggior parte evolve in forma cronica."
        ),

        new Question("Che cosa caratterizza la cirrosi epatica?",
            [
                ["Riduzione del volume epatico", 0],
                ["Formazione di tessuto necrotico", 0],
                ["Aumento della produzione di bile", 0],
                ["Formazione di tessuto fibroso", 1]
            ],
            "Le cellule epatiche danneggiate da infiammazione cronica formano cicatrici."
        ),

        new Question("Qual è l'unico trattamento risolutivo per la cirrosi avanzata?",
            [
                ["Trapianto di fegato", 1],
                ["Antibiotici", 0],
                ["Chemioterapia", 0],
                ["Corticosteroidi", 0]
            ],
            "Non esiste cura definitiva, solo trapianto."
        ),

        new Question("La cirrosi rappresenta",
            [
                ["una patologia acuta", 0],
                ["lo stadio finale di patologie croniche", 1],
                ["una malattia autoimmune", 0],
                ["una forma lieve di epatite", 0]
            ],
            "È lo stadio terminale di molte malattie epatiche."
        ),

        new Question("Qual è una causa frequente di cirrosi?",
            [
                ["Allergie stagionali", 0],
                ["Carenza di ferro", 0],
                ["Consumo cronico di alcool", 1],
                ["Ipotensione", 0]
            ],
            "L'alcool è una delle cause principali."
        ),

        new Question("Quale sintomo è tipico della cirrosi?",
            [
                ["Bradicardia", 0],
                ["Aumento dell'appetito", 0],
                ["Iperidrosi", 0],
                ["Ascite", 1]
            ],
            "L'ascite (accumulo di liquidi in cavità addominale) è un segno caratteristico."
        ),

        new Question("Quale complicanza deriva dall'ipertensione portale?",
            [
                ["Ascite", 1],
                ["Ipertensione arteriosa", 0],
                ["Gastrite", 0],
                ["Tachicardia", 0]
            ],
            "L'ascite (accumulo di liquidi in cavità addominale) è causata dall'ipertensione portale."
        ),

        new Question("Quale intervento è consigliato nella cirrosi?",
            [
                ["Digiuno intermittente", 0],
                ["Dieta iperproteica e iposodica", 1],
                ["Aumento dell'attività fisica intensa", 0],
                ["Dieta ricca di sale", 0]
            ],
            "La dieta deve essere ricca di proteine e povera di sodio."
        ),

        new Question("Perché è importante monitorare la cute nei pazienti cirrotici?",
            [
                ["Per rischio di tumori della pelle", 0],
                ["Per rischio di allergie autoimmuni", 0],
                ["Per maggiore suscettibilità a infezioni e lesioni", 1],
                ["Per prevenire la psoriasi", 0]
            ],
            "La cute di un soggetto cirrotico è più fragile e soggetta a infezioni."
        ),

        new Question("Che cosa accade nel diabete di tipo 1?",
            [
                ["Aumenta la produzione di insulina", 0],
                ["I tessuti diventano resistenti all'insulina", 0],
                ["Il fegato produce più glucosio", 0],
                ["Le cellule beta vengono distrutte", 1]
            ],
            "Il sistema immunitario distrugge le cellule beta del pancreas responsabili della produzione di insulina."
        ),

        new Question("Qual è l'unico trattamento per il diabete tipo 1?",
            [
                ["Insulina", 1],
                ["Metformina", 0],
                ["Dieta ipocalorica", 0],
                ["Sulfaniluree", 0]
            ],
            "Il pancreas non produce più insulina quindi va assunta."
        ),

        new Question("Quale sintomo è tipico del diabete tipo 1?",
            [
                ["Aumento di peso", 0],
                ["Poliuria", 1],
                ["Bradicardia", 0],
                ["Ipertensione", 0]
            ],
            "La poliuria è un sintomo classico."
        ),

        new Question("Quale sintomo è tipico della chetoacidosi diabetica?",
            [
                ["Diaforesi", 0],
                ["Bradicardia", 0],
                ["Odore fruttato dell'alito", 1],
                ["Aumento della diuresi", 0]
            ],
            "I corpi chetonici dal caratteristico odore dolciastro vengono espulsi a livello polmonare con l'espirazione."
        ),

        new Question("Il coma iperosmolare è tipico di",
            [
                ["epatite C", 0],
                ["diabete tipo 1", 0],
                ["cirrosi", 0],
                ["diabete tipo 2", 1]
            ],
            "È una complicanza del diabete tipo 2."
        ),

        new Question("Quale di questi valori di glicemia a digiuno può essere indice di diabete?",
            [
                ["130 mg/dl o più", 1],
                ["110 mg/dl", 0],
                ["90 mg/dl", 0],
                ["60 mg/dl", 0]
            ],
            "La soglia diagnostica è >125 mg/dl."
        ),

        new Question("Un eccesso di insulina può causare",
            [
                ["Disidratazione", 0],
                ["Ipoglicemia", 1],
                ["Chetoacidosi", 0],
                ["Iperglicemia", 0]
            ],
            "Troppa insulina abbassa rapidamente la glicemia."
        ),

        new Question("Quale meccanismo è tipico del diabete tipo 2?",
            [
                ["Assenza totale di insulina", 0],
                ["Distruzione autoimmune delle cellule beta", 0],
                ["Insulino-resistenza", 1],
                ["Iperproduzione di glucagone", 0]
            ],
            "I tessuti diventano resistenti all'insulina."
        ),

        new Question("Il diabete tipo 2 è più frequente",
            [
                ["nei bambini", 0],
                ["negli atleti", 0],
                ["nei neonati", 0],
                ["negli adulti", 1]
            ],
            "È la forma più comune negli adulti."
        ),

        new Question("Quale tra questi è un fattore di rischio per diabete tipo 2?",
            [
                ["Obesità", 1],
                ["Alta massa muscolare", 0],
                ["Peso corporeo basso", 0],
                ["Ipotensione", 0]
            ],
            "L'obesità è uno dei principali fattori."
        ),

        new Question("Quale condizione lipidica aumenta il rischio?",
            [
                ["Colesterolo totale basso", 0],
                ["HDL basso", 1],
                ["Trigliceridi bassi", 0],
                ["LDL basso", 0]
            ],
            "HDL basso è un fattore di rischio."
        ),

        new Question("Il diabete tipo 2 si sviluppa",
            [
                ["improvvisamente", 0],
                ["solo in età pediatrica", 0],
                ["lentamente", 1],
                ["solo in gravidanza", 0]
            ],
            "L'instaurazione è graduale e la diagnosi è spesso tardiva."
        ),

        new Question("Quale valore di glicemia, misurato in qualsiasi momento della giornata, indica diabete?",
            [
                ["100 mg/dl", 0],
                ["150 mg/dl", 0],
                ["180 mg/dl", 0],
                ["200 mg/dl o superiore", 1]
            ],
            "Una glicemia casuale ≥200 mg/dl è diagnostica."
        ),

        new Question("Qual è il primo intervento terapeutico nel diabete di tipo 2?",
            [
                ["Dieta ed esercizio fisico", 1],
                ["Terapia insulinica", 0],
                ["Chemioterapia", 0],
                ["Trasfusioni", 0]
            ],
            "La terapia inizia sempre con modifiche dello stile di vita."
        ),

        new Question("Quale tra questi è un farmaco utilizzato nel diabete tipo 2?",
            [
                ["Diazepam", 0],
                ["Metformina", 1],
                ["Cortisone", 0],
                ["Amoxicillina", 0]
            ],
            "La metformina è il farmaco di prima scelta nel diabete tipo 2."
        ),

        new Question("Che cosa indica il termine neoplasia?",
            [
                ["Una cicatrice del tessuto", 0],
                ["Un aumento del volume di un organo", 0],
                ["Una nuova formazione cellulare", 1],
                ["Una reazione infiammatoria", 0]
            ],
            "Neoplasia deriva da neos e plasis e significa nuova formazione."
        ),

        new Question("Qual è la caratteristica principale delle cellule neoplastiche?",
            [
                ["Si riproducono lentamente", 0],
                ["Non si riproducono", 0],
                ["Si riproducono in modo controllato", 0],
                ["Si riproducono in modo incontrollato e disordinato", 1]
            ],
            "Le cellule tumorali proliferano senza controllo, formando masse che invadono i tessuti."
        ),

        new Question("Qual è uno dei principali fattori che aumenta il rischio di neoplasie con l'avanzare dell'età?",
            [
                ["Accumulo di errori nel DNA", 1],
                ["Aumento della massa muscolare", 0],
                ["Riduzione dell'appetito", 0],
                ["Aumento della temperatura corporea", 0]
            ],
            "Gli agenti oncogeni agiscono nel tempo e gli errori nel DNA si accumulano."
        ),

        new Question("Quale tra questi è un noto fattore di rischio per lo sviluppo di tumori?",
            [
                ["Attività fisica regolare", 0],
                ["Fumo", 1],
                ["Sonno prolungato", 0],
                ["Dieta ricca di fibre", 0]
            ],
            "Il fumo è uno dei principali fattori oncogeni."
        ),

        new Question("Quale agente fisico può favorire lo sviluppo di neoplasie?",
            [
                ["Rumore", 0],
                ["Campi magnetici deboli", 0],
                ["Radiazioni ionizzanti", 1],
                ["Vibrazioni", 0]
            ],
            "Le radiazioni ionizzanti sono un noto fattore cancerogeno."
        ),

        new Question("Come vengono classificati i tumori in base al comportamento biologico?",
            [
                ["Acuti e cronici", 0],
                ["Primari e secondari", 0],
                ["Locali e sistemici", 0],
                ["Benigni e maligni", 1]
            ],
            "La classificazione principale distingue tumori benigni e maligni."
        ),

        new Question("Quale sistema viene utilizzato per la stadiazione dei tumori?",
            [
                ["TNM", 1],
                ["ABC", 0],
                ["TMNT", 0],
                ["GFR", 0]
            ],
            "Il sistema TNM valuta tumore, linfonodi e metastasi."
        ),

        new Question("Quale caratteristica distingue un tumore benigno?",
            [
                ["Infiltra i tessuti circostanti", 0],
                ["È ben delimitato", 1],
                ["Produce metastasi", 0],
                ["Cresce molto rapidamente", 0]
            ],
            "I tumori benigni formano masse ben delimitate e non invasive."
        ),

        new Question("Quale problema può derivare da un tumore benigno?",
            [
                ["Distruzione dei tessuti", 0],
                ["Immunodeficienza", 0],
                ["Iperproduzione ormonale", 1],
                ["Metastasi diffuse", 0]
            ],
            "I tumori benigni delle ghiandole possono produrre ormoni in eccesso."
        ),

        new Question("Qual è una caratteristica tipica dei tumori maligni?",
            [
                ["Assenza di infiltrazione", 0],
                ["Crescita lenta e regolare", 0],
                ["Produzione di anticorpi", 0],
                ["Capacità di formare metastasi", 1]
            ],
            "I tumori maligni possono diffondersi a distanza."
        ),

        new Question("Perché i tumori maligni sono più pericolosi dei benigni?",
            [
                ["Perché infiltrano e distruggono i tessuti", 1],
                ["Perché sono sempre piccoli", 0],
                ["Perché crescono", 0],
                ["Perché non causano sintomi", 0]
            ],
            "La loro invasività danneggia organi e strutture vitali."
        ),

        new Question("Da cosa originano tutte le cellule cancerose?",
            [
                ["Da cellule diverse", 0],
                ["Da una singola cellula madre mutata", 1],
                ["Da cellule muscolari", 0],
                ["Da cellule nervose", 0]
            ],
            "Tutte le cellule tumorali discendono da una cellula iniziale mutata."
        ),

        new Question("La progressione tumorale è dovuta a",
            [
                ["aumento della differenziazione", 0],
                ["riduzione della replicazione cellulare", 0],
                ["danni al sistema di controllo della riproduzione", 1],
                ["aumento dell'apoptosi", 0]
            ],
            "La progressione deriva da danni ai meccanismi genetici di controllo."
        ),

        new Question("Le cellule tumorali durante la trasformazione neoplastica perdono la capacità di",
            [
                ["nutrirsi", 0],
                ["replicarsi", 0],
                ["aderire", 0],
                ["differenziarsi", 1]
            ],
            "Perdono la capacità di differenziarsi e di andare incontro ad apoptosi."
        ),

        new Question("Cosa indica la lettera N nel sistema TNM?",
            [
                ["Stato dei linfonodi regionali", 1],
                ["Nutrizione del tumore", 0],
                ["Numero di metastasi", 0],
                ["Natura del tumore", 0]
            ],
            "N valuta il coinvolgimento linfonodale."
        ),

        new Question("Cosa indica M1 nella stadiazione TNM?",
            [
                ["Tumore benigno", 0],
                ["Presenza di metastasi", 1],
                ["Tumore in situ", 0],
                ["Assenza di metastasi", 0]
            ],
            "M1 significa presenza di metastasi a distanza."
        ),

        new Question("Quale grado indica un tumore ben differenziato?",
            [
                ["G1", 1],
                ["G2", 0],
                ["G3", 0],
                ["G4", 0]
            ],
            "G1 indica cellule simili a quelle normali."
        ),

        new Question("Quale grado indica cellule completamente indifferenziate?",
            [
                ["G1", 0],
                ["G2", 0],
                ["G3", 0],
                ["G4", 1]
            ],
            "G4 rappresenta il massimo grado di indifferenziazione."
        ),

        new Question("Qual è il trattamento di elezione per le neoplasie benigne?",
            [
                ["Radioterapia", 0],
                ["Chemioterapia", 0],
                ["Chirurgia", 1],
                ["Immunoterapia", 0]
            ],
            "La chirurgia è il trattamento principale per i tumori benigni."
        ),

        new Question("Quale ruolo ha la chirurgia nella diagnosi tumorale?",
            [
                ["Permette la biopsia", 0],
                ["Sostituisce la radioterapia", 1],
                ["Serve solo per metastasi", 0],
                ["Nessuno", 0]
            ],
            "La biopsia è fondamentale per la diagnosi."
        ),

        new Question("Qual è un limite della chemioterapia?",
            [
                ["Non può essere combinata con altri trattamenti", 0],
                ["Non è efficace nei tumori solidi", 0],
                ["Ha alta tossicità", 1],
                ["Ha bassa diffusione", 0]
            ],
            "L'efficacia è spesso limitata dagli effetti collaterali."
        ),

        new Question("Perché la radioterapia è efficace contro i tumori?",
            [
                ["Aumenta la risposta immunitaria", 0],
                ["Aumenta la crescita cellulare", 0],
                ["Aumenta la temperatura corporea", 0],
                ["Le cellule tumorali sono molto sensibili alle radiazioni", 1]
            ],
            "Le cellule neoplastiche sono più radiosensibili."
        ),

        new Question("In quale situazione la radioterapia può essere usata da sola?",
            [
                ["Tumori precoci del capo-collo", 1],
                ["Tumori avanzati del fegato", 0],
                ["Tumori benigni del colon", 0],
                ["Tumori infiltrati della pelle", 0]
            ],
            "Tumori precoci e localizzati sono suscettibili alla radioterapia."
        ),

        new Question("Qual è l'obiettivo dello screening oncologico?",
            [
                ["Curare i tumori avanzati", 0],
                ["Individuare precocemente la malattia o i suoi precursori", 1],
                ["Ridurre il numero di biopsie", 0],
                ["Sostituire la terapia", 0]
            ],
            "Lo screening serve a identificare tumori o lesioni precancerose prima dei sintomi."
        ),

        new Question("Lo screening viene effettuato",
            [
                ["solo sui pazienti sintomatici", 0],
                ["solo in ospedale", 0],
                ["su una fascia ampia della popolazione", 1],
                ["solo su richiesta del paziente", 0]
            ],
            "È un programma rivolto a gruppi di popolazione definiti."
        ),

        new Question("Quali sono i due principali tipi di dolore secondo la classificazione fisiopatogenetica?",
            [
                ["Acuto e cronico", 0],
                ["Somatico e viscerale", 0],
                ["Centrale e periferico", 0],
                ["Nocicettivo e neuropatico", 1]
            ],
            "Dolore nocicettivo da attivazione dei nocicettori e neuropatico da danno dei nervi somatosensoriali."
        ),

        new Question("Perché è utile distinguere tra dolore nocicettivo e neuropatico?",
            [
                ["Per scegliere il corretto approccio terapeutico", 1],
                ["Per valutare l'effettiva soglia del dolore", 0],
                ["Per stabilire la durata del dolore", 0],
                ["Per confrontare il dolore con altri parametri", 0]
            ],
            "La distinzione è utile perché richiede trattamenti diversi."
        ),

        new Question("Da cosa è generato il dolore nocicettivo?",
            [
                ["Da una lesione del sistema nervoso centrale", 0],
                ["Da uno stimolo come trauma, ustione o infiammazione", 1],
                ["Da un danno ai nocicettori", 0],
                ["Da un disturbo psichiatrico", 0]
            ],
            "Il dolore nocicettivo deriva dall'attivazione dei nocicettori da parte di stimoli lesivi come traumi, ustioni e ferite."
        ),

        new Question("Dove si trovano i nocicettori?",
            [
                ["Solo nel cervello", 0],
                ["Solo nei muscoli", 0],
                ["Nella cute, articolazioni e parete degli organi", 1],
                ["Solo nei visceri", 0]
            ],
            "I nocicettori sono neuroni specializzati presenti in cute, articolazioni e organi."
        ),

        new Question("Il dolore somatico deriva dalla stimolazione di nocicettori situati",
            [
                ["nel midollo spinale", 0],
                ["negli organi interni", 0],
                ["nel cervello", 0],
                ["nella cute, ossa, articolazioni e muscoli", 1]
            ],
            "Il dolore somatico può essere superficiale (cute e mucose) o profondo (ossa, articolazioni e muscoli)."
        ),

        new Question("Il dolore viscerale può essere causato da",
            [
                ["distensione o compressione degli organi interni", 1],
                ["lesioni cutanee", 0],
                ["fratture ossee", 0],
                ["contratture muscolari", 0]
            ],
            "Il dolore viscerale deriva da stimoli sui nocicettori degli organi interni."
        ),

        new Question("Qual è la fase in cui i nocicettori trasformano lo stimolo in corrente elettrica?",
            [
                ["Trasmissione", 0],
                ["Trasduzione", 1],
                ["Modulazione", 0],
                ["Percezione", 0]
            ],
            "La trasduzione è la conversione dello stimolo in segnale elettrico."
        ),

        new Question("In quale fase l'impulso elettrico del dolore è trasportato lungo gli assoni?",
            [
                ["Trasduzione", 0],
                ["Trasporto", 0],
                ["Conduzione", 1],
                ["Trasmissione", 0]
            ],
            "La conduzione è il trasporto del dolore lungo l'assone dalla periferia al midollo."
        ),

        new Question("Durante quale fase del dolore si ha il rilascio di neurotrasmettitori lungo il midollo spinale?",
            [
                ["Modulazione", 0],
                ["Presinaptica", 0],
                ["Percezione", 0],
                ["Trasmissione", 1]
            ],
            "La trasmissione permette il rilascio di neurotrasmettitori lungo il midollo spinale per portare lo stimolo doloroso al cervello."
        ),

        new Question("In quale fase il cervello interpreta lo stimolo come dolore?",
            [
                ["Percezione", 1],
                ["Conduzione", 0],
                ["Modulazione", 0],
                ["Trasmissione", 0]
            ],
            "La percezione è il momento in cui il cervello riconosce il dolore."
        ),

        new Question("Qual è l'ultima fase del dolore nocicettivo?",
            [
                ["Soppressione", 0],
                ["Modulazione", 1],
                ["Arco riflesso", 0],
                ["Trasduzione", 0]
            ],
            "La modulazione è la risposta allo stimolo che il cervello manda in periferia lungo il midollo spinale."
        ),

        new Question("Da cosa è causato il dolore neuropatico?",
            [
                ["Da una carenza vitaminica", 0],
                ["Da un'infiammazione dei visceri", 0],
                ["Da una lesione o malattia del sistema somatosensoriale", 1],
                ["Da un trauma muscolare", 0]
            ],
            "Il dolore neuropatico deriva da un danno diretto ai nervi."
        ),

        new Question("Il dolore neuropatico si distingue in",
            [
                ["centrale e periferico", 1],
                ["spinale ed encefalico", 0],
                ["somatico e viscerale", 0],
                ["nessuna delle precedenti", 0]
            ],
            "Periferico = lesione o patologia a carico del sistema nervoso periferico./nCentrale = lesione o patologia a carico del sistema nervoso centrale."
        ),

        new Question("Quale tra questi è un fattore che può causare dolore neuropatico?",
            [
                ["Gastrite", 0],
                ["Distorsione della caviglia", 0],
                ["Carenza di ferro", 0],
                ["Diabete mellito", 1]
            ],
            "Il diabete è una causa frequente di neuropatia."
        ),

        new Question("Che cosa danneggia i nervi nella neuropatia diabetica?",
            [
                ["Carenza di vitamina D", 0],
                ["Valori elevati di glicemia", 1],
                ["Ipotensione", 0],
                ["Ipercolesterolemia", 0]
            ],
            "L'iperglicemia cronica danneggia i nervi."
        ),

        new Question("Qual è la forma più comune di neuropatia diabetica?",
            [
                ["Neuropatia prossimale", 0],
                ["Neuropatia cranica", 0],
                ["Polineuropatia simmetrica distale", 1],
                ["Neuropatia focale", 0]
            ],
            "È la forma che inizia da piedi, gambe e mani."
        )
    ],

  getFeedback(score) {
    if (score >= 0 && score <= 20) return "/20";
    return "";
  }
};
