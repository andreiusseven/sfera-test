import { Question } from "../models/Question.js";

export const AppAssTest = {
  questions: [

        new Question("In quale ambito può avvenire l’accoglienza del paziente?",
            [
                ["Solo in hospice", 0],
                ["Solo in reparto ospedaliero", 0],
                ["Solo in pronto soccorso", 0],
                ["Nessuna delle risposte precedenti", 1]
            ],
            "L’accoglienza può avvenire in diversi contesti sanitari (ospedale, day hospital, RSA, domicilio, hospice)."
        ),

        new Question("Quale delle seguenti affermazioni sull'assistenza NON è corretta?",
            [
                ["L'assistenza deve essere personalizzata", 0],
                ["Bisogna focalizzarsi esclusivamente sui bisogni fisici", 1],
                ["La persona è al centro dell'azione professionale", 0],
                ["La persona va vista in modo olistico", 0]
            ],
            "La persona deve essere assistita con un approccio a 360° valutando ogni suo aspetto e non soddisfacendo solo i bisogni di base."
        ),

        new Question("Quale fase NON appartiene al processo assistenziale?",
            [
                ["Raccolta dati", 0],
                ["Valutazione", 0],
                ["Pubblicazione scientifica", 1],
                ["Pianificazione degli interventi", 0]
            ],
            "La pubblicazione non fa parte del processo assistenziale standard."
        ),

        new Question("L’accoglienza va intesa come",
            [
                ["l'atto di ospitare e ricevere una persona", 1],
                ["l'atto burocratico di accettare una persona in struttura", 0],
                ["la compilazione dei moduli per l'ingresso in struttura", 0],
                ["tutte e tre le risposte", 0]
            ],
            "È l’atto di accettare, ospitare, ricevere presso di sé una persona, con atteggiamento cordiale e affidabile."
        ),

        new Question("L'obiettivo dell’accoglienza è",
            [
                ["mantenere l’integrità della persona", 1],
                ["diminuire i costi", 0],
                ["velocizzare le procedure burocratiche", 0],
                ["garantire prestazioni tecniche", 0]
            ],
            "L’accoglienza mira a preservare l’integrità psicofisica della persona."
        ),

        new Question("Il protocollo di accoglienza serve a",
            [
                ["ridurre il personale necessario", 0],
                ["standardizzare e programmare le azioni", 1],
                ["evitare errori burocratici", 0],
                ["ridurre al minimo il bisogno di comunicazione", 0]
            ],
            "Seguire un protocollo garantisce l'uniformità della prestazione e la sicurezza della sua esecuzione."
        ),

        new Question("In emergenza, il personale deve",
            [
                ["limitarsi a seguire solo protocolli scritti", 0],
                ["discutere a lungo prima di prendere una decisione", 0],
                ["essere dinamico, flessibile e professionale", 1],
                ["essere rigido e inflessibile", 0]
            ],
            "In situazioni di emergenza il personale deve possedere: capacità di adattamento, atteggiamento dinamico e flessibile, tolleranza ad alti livelli di tensione, professionalità ed esperienza."
        ),

        new Question("Quale ostacolo può emergere durante la fase di accoglimento?",
            [
                ["Presenza di volontari", 0],
                ["Urgenze", 0],
                ["Presenza di più pazienti", 0],
                ["Tutte le risposte precedenti", 1]
            ],
            "Tutti questi fattori possono ostacolare un’accoglienza efficace."
        ),

        new Question("L'osservazione è importante perché",
            [
                ["permette di raccogliere informazioni significative", 1],
                ["consente di non perdere di vista il paziente", 0],
                ["rassicura il paziente che così si sente visto", 0],
                ["tutte le precedenti", 0]
            ],
            "L'osservazione permette di rilevare segni e sintomi utili per una prima valutazione delle condizioni di salute."
        ),

        new Question("I segni sono",
            [
                ["puramente soggettivi", 0],
                ["rilevabili e misurabili", 1],
                ["riferiti dal paziente", 0],
                ["disturbi del comportamento", 0]
            ],
            "I segni sono ciò che l'operatore vede, ascolta, odora e rileva con l'ausilio di strumenti."
        ),

        new Question("I sintomi sono",
            [
                ["lievi, moderati e gravi", 0],
                ["presi in considerazione solo se hanno un riscontro da parte dell'operatore", 0],
                ["oggettivi e soggettivi", 1],
                ["indicatori di un infezione", 0]
            ],
            "I sintomi oggettivi sono quelli rilevati dall'operatore (es. febbre) mentre quelli soggettivi sono riferiti dal paziente (es. dolore)."
        ),

        new Question("Dove vengono segnati i dati raccolti?",
            [
                ["Archivio medico", 0],
                ["Registro ospedaliero", 0],
                ["Agenda dell'OSS", 0],
                ["Cartella infermieristica", 1]
            ],
            "La cartella infermieristica contiene tutti i dati raccolti sul paziente ed è uno strumento importante per garantire un percorso di cura adeguato."
        ),

        new Question("Durante la visita medica, l'OSS",
            [
                ["collabora con medico e infermiere", 1],
                ["si limita ad osservare", 0],
                ["non partecipa", 0],
                ["si occupa della compilazione dei referti", 0]
            ],
            "L'OSS ha un ruolo di collaborazione e integrazione con figure professionali quali medico, infermiere, educatori, volontari e altri."
        ),

        new Question("La scala di Norton valuta",
            [
                ["l'autonomia del paziente", 0],
                ["il rischio di lesioni da pressione", 1],
                ["il dolore", 0],
                ["le capacità cognitive", 0]
            ],
            "La scala Norton è una scala specifica per il calcolo del rischio di sviluppo di piaghe da decubito."
        ),

        new Question("La scala di Barthel misura",
            [
                ["il dolore", 0],
                ["il rischio di cadute", 0],
                ["l'autonomia del paziente", 1],
                ["lo stato psichico", 0]
            ],
            "La scala Barthel è una scala specifica per il calcolo del grado di autonomia del paziente."
        ),

        new Question("La scala ADL valuta",
            [
                ["lo stato psichico", 0],
                ["i parametri vitali", 0],
                ["il rischio di cadute", 0],
                ["la dipendenza nelle attività quotidiane", 1]
            ],
            "La scala ADL è una scala specifica per il calcolo dell'autonomia nelle attività di base."
        ),

        new Question("Il Mini Mental serve a valutare",
            [
                ["le capacità cognitive", 1],
                ["l'autonomia nella deambulazione", 0],
                ["lo stato psichico", 0],
                ["il rischio di lesioni da pressione", 0]
            ],
            "Il Mini Mental è una scala specifica per il calcolo delle capacità cognitive."
        ),

        new Question("L'OSS deve lavorare",
            [
                ["solo con l'infermiere", 0],
                ["in equipe multidisciplinare", 1],
                ["solo con il medico", 0],
                ["in modo isolato e autonomo", 0]
            ],
            "L'OSS deve svolgere il proprio lavoro collaborando con più figure professionali."
        ),

        new Question("Qual è la funzione principale dell’apparato urinario e intestinale?",
            [
                ["Regolare la temperatura corporea", 0],
                ["Produrre energia", 0],
                ["Eliminare scorie e sostanze dannose", 1],
                ["Trasportare ossigeno", 0]
            ],
            "L’apparato urinario e intestinale hanno il compito di liberare l’organismo da scorie e materiali in eccesso."
        ),

        new Question("Qual è la diuresi normale in un adulto nelle 24 ore?",
            [
                ["200–500 ml", 0],
                ["3000–4000 ml", 0],
                ["100–300 ml", 0],
                ["800–2000 ml", 1]
            ],
            "La diuresi fisiologica nell’adulto varia tra 800 e 2000 ml al giorno."
        ),

        new Question("Quale condizione indica ematuria?",
            [
                ["Presenza di sangue", 1],
                ["Presenza di muco", 0],
                ["Presenza di proteine", 0],
                ["Presenza di leucociti", 0]
            ],
            "L'ematuria è la presenza visibile di sangue nelle urine."
        ),

        new Question("Qual è il pH normale delle urine?",
            [
                ["2", 0],
                ["6", 1],
                ["9", 0],
                ["12", 0]
            ],
            "Il pH fisiologico delle urine è circa 6, con variazioni tra 4.5 e 7.5."
        ),

        new Question("Quale condizione indica oliguria?",
            [
                ["Produzione di urine >2000 ml/24h", 0],
                ["Produzione di urine maleodoranti", 0],
                ["Produzione di urine <500 ml/24h", 1],
                ["Produzione di urine assente", 0]
            ],
            "L’oliguria è definita come produzione di urina inferiore a 500 ml nelle 24 ore."
        ),

        new Question("Quale condizione indica poliuria?",
            [
                ["Produzione di urine assente ", 0],
                ["Produzione di urine <500 ml/24h", 0],
                ["Produzione di urine normale", 0],
                ["Produzione di urine >2000 ml/24h", 1]
            ],
            "La poliuria è l’eliminazione di più di 2000 ml di urina nelle 24 ore."
        ),

        new Question("Quale condizione indica anuria?",
            [
                ["Produzione di urine assente", 1],
                ["Produzione di urine >2000 ml/24h", 0],
                ["Produzione di urine aumentata di notte", 0],
                ["Produzione di urine non colorate", 0]
            ],
            "L’anuria è la mancata produzione di urina."
        ),

        new Question("Quale condizione indica nicturia?",
            [
                ["Produzione di urine scure", 0],
                ["Produzione di urine aumentata di notte", 1],
                ["Produzione di urine incolori", 0],
                ["Produzione di urine assente", 0]
            ],
            "La nicturia è l’aumentata produzione di urine durante la notte."
        ),

        new Question("Quale termine indica minzioni frequenti con piccole quantità?",
            [
                ["Enuresi", 0],
                ["Stranguria", 0],
                ["Pollachiuria", 1],
                ["Ematuria", 0]
            ],
            "La pollachiuria è caratterizzata da minzioni frequenti con piccole quantità di urina."
        ),

        new Question("Quale termine indica minzione dolorosa?",
            [
                ["Anuria", 0],
                ["Cistite", 0],
                ["Piuria", 0],
                ["Stranguria", 1]
            ],
            "La stranguria è la minzione dolorosa, tipica di patologie delle vie urinarie."
        ),

        new Question("Quale termine indica incontinenza urinaria involontaria?",
            [
                ["Enuresi", 1],
                ["Pollachiuria", 0],
                ["Anuria", 0],
                ["Nicturia", 0]
            ],
            "L’enuresi è l’incapacità di trattenere l’urina, spesso presente nei bambini o in condizioni patologiche."
        ),

        new Question("Quale dispositivo esterno può essere usato negli uomini per raccogliere urine?",
            [
                ["Foley", 0],
                ["Condom", 1],
                ["Arcella", 0],
                ["Tutte le precedenti", 0]
            ],
            "Il condom (Texas) è un dispositivo esterno che raccoglie le urine senza ricorrere a pannoloni o cateteri."
        ),

        new Question("Quale catetere è usato per cateterizzazione intermittente?",
            [
                ["Foley", 0],
                ["Texas", 0],
                ["Nelaton", 1],
                ["Tutte le precedenti", 0]
            ],
            "Il catetere Nelaton è utilizzato per cateterizzazione estemporanea o intermittente."
        ),

        new Question("Quale catetere è usato per cateterizzazione permanente?",
            [
                ["Foley", 1],
                ["Arcella", 0],
                ["Nelaton", 0],
                ["Nessuna delle precedenti", 0]
            ],
            ""
        ),

        new Question("Quale rischio è associato alla cateterizzazione?",
            [
                ["Disagio psicologico", 0],
                ["Trauma tessutale", 0],
                ["Infezioni urinarie", 0],
                ["Tutti i precedenti", 1]
            ],
            "La cateterizzazione può comportare infezioni, traumi e disagio psicologico."
        ),

        new Question("Quale intervento favorisce la minzione in caso di ritenzione?",
            [
                ["Posizione supina", 0],
                ["Posizione seduta o in piedi", 1],
                ["Posizione a testa in giù", 0],
                ["Immobilizzazione", 0]
            ],
            "La posizione naturale (in piedi per l’uomo, seduta per la donna) facilita la minzione."
        ),

        new Question("Quale materiale è più indicato per cateteri a lunga permanenza?",
            [
                ["Lattice", 0],
                ["Acciaio", 0],
                ["Silicone", 1],
                ["Plastica rigida", 0]
            ],
            "I cateteri in silicone possono essere mantenuti fino a 30-40 giorni."
        ),

        new Question("Quale intervento previene il reflusso urinario nei pazienti cateterizzati?",
            [
                ["Tenere la sacca sopra la vescica", 0],
                ["Non svuotare mai la sacca", 0],
                ["Chiudere sempre il catetere", 0],
                ["Tenere la sacca sotto il livello della vescica", 1]
            ],
            "La forza di gravità deve favorire il deflusso; la sacca va tenuta sotto la vescica."
        ),

        new Question("Quale sostanza nelle urine indica diabete mellito?",
            [
                ["Glucosio", 1],
                ["Proteine", 0],
                ["Chetoni", 0],
                ["Emoglobina", 0]
            ],
            "La glicosuria (presenza di glucosio nelle urine) è tipica del diabete mellito."
        ),

        new Question("La leucocituria è un probabile segno di",
            [
                ["iperproteinemia", 0],
                ["infezione urinaria", 1],
                ["emorragia interna", 0],
                ["leucemia", 0]
            ],
            "La leucocituria è la presenza di globuli bianchi nelle urine ed è un probabile segno di infezione alle vie urinarie."
        ),

        new Question("Quale intervento assistenziale riduce il disagio psicologico da incontinenza?",
            [
                ["Immobilizzare il paziente", 0],
                ["Limitare l’assunzione di liquidi", 0],
                ["Garantire la privacy", 1],
                ["Usare sempre pannoloni", 0]
            ],
            "Rassicurare il paziente garantendogli privacy durante la minzione aiuta a ridurre il disagio e favorisce l'evacuazione."
        ),

        new Question("Quale complicanza può derivare dall’uso improprio del condom?",
            [
                ["Dolore lombare", 0],
                ["Infezioni intestinali", 0],
                ["Disidratazione", 0],
                ["Lesioni al pene", 1]
            ],
            "Se fissato troppo stretto, il condom può causare lesioni e problemi circolatori al pene."
        ),

        new Question("Quale intervento è fondamentale prima della cateterizzazione?",
            [
                ["Garantire la privacy e igiene intima", 1],
                ["Limitare i liquidi", 0],
                ["Somministrare antibiotici", 0],
                ["Immobilizzare il paziente", 0]
            ],
            "La cateterizzazione richiede ambiente igienico e rispetto della privacy."
        ),

        new Question("Quale intervento previene le infezioni nei pazienti cateterizzati?",
            [
                ["Uso di guanti sterili", 0],
                ["Lavaggio sociale delle mani", 0],
                ["Sistema di drenaggio chiuso", 0],
                ["Tutti i precedenti", 1]
            ],
            "Tutti questi interventi riducono il rischio di infezioni."
        ),

        new Question("La componente principale delle feci è",
            [
                ["bile", 0],
                ["prodotti della digestione", 0],
                ["acqua", 1],
                ["scarto solido", 0]
            ],
            "Le feci sono normalmente costituite per circa il 75% da acqua e il restante 25% da materiale solido di scarto."
        ),

        new Question("Quale colore normale hanno le feci nell’adulto?",
            [
                ["Bianco", 0],
                ["Marrone", 1],
                ["Verde", 0],
                ["Nero", 0]
            ],
            "Le feci normali sono marroni a causa della digestione degli sali biliari."
        ),

        new Question("Una colorazione delle feci nera indica",
            [
                ["emorragia alta del tratto digerente", 1],
                ["assenza di succhi biliari e pancreatici", 0],
                ["emorragia bassa del tratto digerente", 0],
                ["alimentazione ricca di fibre", 0]
            ],
            "Le feci nere e maleodoranti (melena) indicano la presenza di sangue digerito proveniente dalle alte vie digerenti (solitamente varici esofagee o ulcere gastriche)."
        ),

        new Question("Una colorazione delle feci rosso vivo indica",
            [
                ["carenza di frutta e verdura nell'alimentazione", 0],
                ["emorragia bassa del tratto digerente", 1],
                ["la presenza di un fecaloma", 0],
                ["emorragia alta del tratto digerente", 0]
            ],
            "Feci rosse sono indice di un sanguinamento delle basse vie digerenti, solitamente a livello del colon o del retto (emorroidi)."
        ),

        new Question("L'assenza di pigmenti biliari causa feci",
            [
                ["ipercromiche", 0],
                ["a fettuccina", 0],
                ["acoliche", 1],
                ["caprine", 0]
            ],
            "La bile è ciò che dà colore alle feci e un'assenza di pigmenti biliari rende le feci biancastre."
        ),

        new Question("La steatorrea indica",
            [
                ["un eccesso di carboidrati nella dieta", 0],
                ["emorragia delle basse vie digerenti", 0],
                ["presenza di un ostruzione a livello del colon", 0],
                ["malassorbimento dei grassi", 1]
            ],
            "La steatorrea (feci grasse) si presenta con feci chiare, lucide e voluminose con un'elevata presenza di grassi (che non sono stati completamente assorbiti nel tratto intestinale)."
        ),

        new Question("Quale termine indica aumento del numero di scariche intestinali?",
            [
                ["Diarrea", 1],
                ["Stipsi", 0],
                ["Tenesmo", 0],
                ["Nessuna delle precedenti", 0]
            ],
            "La diarrea è caratterizzata da aumento del numero di scariche e consistenza liquida delle feci."
        ),

        new Question("Quale termine indica diminuzione della frequenza evacuativa?",
            [
                ["Tenesmo", 0],
                ["Stipsi", 1],
                ["Alvo", 0],
                ["Incontinenza", 0]
            ],
            "La stipsi è la diminuzione della frequenza evacuativa, con feci dure e difficili da espellere."
        ),

        new Question("Con il termine tenesmo si intende",
            [
                ["sanguinamento alla defecazione", 0],
                ["presenza di tenie nelle feci", 0],
                ["dolore alla defecazione", 1],
                ["incontinenza alla defecazione", 0]
            ],
            "Il tenesmo è lo stimolo doloroso alla defecazione, solitamente accompagnato da una emissione scarsa o assente."
        ),

        new Question("Quale quantità normale di feci viene prodotta al giorno?",
            [
                ["500–1000 g", 0],
                ["50–100 g", 0],
                ["10–20 g", 0],
                ["120–300 g", 1]
            ],
            "La quantità normale di feci è di circa 120–300 g al giorno."
        ),

        new Question("Quale termine indica il complesso delle funzioni intestinali?",
            [
                ["Alvo", 1],
                ["Evacuazione", 0],
                ["Stipsi", 0],
                ["Tenesmo", 0]
            ],
            "Con alvo si indica il complesso delle funzioni intestinali (regolare, diarroico, stitico)."
        ),

        new Question("Le prime feci del neonato sono dette",
            [
                ["meningococco", 0],
                ["meconio", 1],
                ["mesentere", 0],
                ["menarca", 0]
            ],
            "Il meconio sono le prime feci del neonato, una sostanza densa, viscosa e di colore verde scuro o bruno-verdastro, composta da materiale assorbito nell'intestino fetale prima della nascita."
        ),

        new Question("Il fecaloma è",
            [
                ["un tumore del basso tratto digerente", 0],
                ["morbido e facilmente rimovibile", 0],
                ["conseguente alla stipsi", 1],
                ["formato nell'intestino tenue", 0]
            ],
            "Il fecaloma è una massa dura e compatta di feci che si forma nell'ultimo tratto del colon in conseguenza di stipsi prolungata."
        ),

        new Question("Quale strumento permette di rilevare alterazioni nelle urine in modo immediato?",
            [
                ["Sacca di raccolta del catetere", 0],
                ["Siringa sterile", 0],
                ["Termometro", 0],
                ["Stick ad immersione", 1]
            ],
            "Gli stick ad immersione hanno la proprietà di cambiare colore in presenza di determinate sostanze presenti nell'urina (es. sangue, proteine, glucosio) non visibili a occhio nudo."
        ),

        new Question("Qual è il primo passo da seguire per la raccolta di urina fresca da mitto spontaneo?",
            [
                ["Indossare i guanti", 1],
                ["Riempire la provetta", 0],
                ["Miscelare le urine", 0],
                ["Registrare la raccolta", 0]
            ],
            "La protezione dell’operatore è sempre il primo passo."
        ),

        new Question("Quanti cc di urina si prelevano da catetere vescicale per un campione fresco?",
            [
                ["5 cc", 0],
                ["10-15 cc", 1],
                ["50 cc", 0],
                ["100 cc", 0]
            ],
            "La quantità standard è 10-15 cc."
        ),

        new Question("Nella raccolta delle 24 ore, cosa si fa con la prima minzione del mattino?",
            [
                ["Si conserva", 0],
                ["Si diluisce", 0],
                ["Si scarta", 1],
                ["Si invia subito al laboratorio", 0]
            ],
            "La prima minzione va scartata, poi si raccolgono tutte le urine successive."
        ),

        new Question("Per l’urinocoltura da mitto spontaneo si raccoglie",
            [
                ["l’ultima parte della minzione", 0],
                ["il primo getto", 0],
                ["tutta la minzione", 0],
                ["il mitto intermedio", 1]
            ],
            "Il primo getto elimina i microrganismi uretrali, il mitto intermedio è più rappresentativo."
        ),

        new Question("L’urinocoltura serve a",
            [
                ["evidenziare microrganismi", 1],
                ["determinare il corretto funzionamento dei reni", 0],
                ["misurare la glicemia", 0],
                ["valutare la funzionalità epatica", 0]
            ],
            "È un esame microbiologico delle urine per valutare la presenza di microrganismi e la carica batterica."
        ),

        new Question("Un esame spesso associato all'urinocoltura è",
            [
                ["la coprocoltura", 0],
                ["l'antibiogramma", 1],
                ["l'elettrocardiogramma", 0],
                ["l'ecografia vescicale", 0]
            ],
            "L'antibiogramma specifica quale tipologia di farmaco è più efficacie nel combattere quello specifico patogeno rilevato dall'urinocoltura."
        ),

        new Question("In assenza di dispositivo di prelievo sul sacchetto, quando si raccoglie l’urina?",
            [
                ["Durante la notte", 0],
                ["Dopo la prima minzione", 0],
                ["Al momento della sostituzione della sacca", 1],
                ["Dopo 24 ore", 0]
            ],
            "È il momento più sicuro per evitare contaminazioni."
        ),

        new Question("Qual è lo scopo della raccolta di feci?",
            [
                ["Assicurarsi che la peristalsi sia buona", 0],
                ["Verificare che il paziente segua una dieta corretta", 0],
                ["Garantire un alvo regolare", 0],
                ["Ricercare anomalie", 1]
            ],
            "Le feci prelevate vengono inviate in laboratorio per la ricerca di elementi anomali come microrganismi, sangue o parassiti."
        ),

        new Question("In presenza di muco o sangue nelle feci",
            [
                ["si include nel campione", 1],
                ["si prelevano in un secondo momento", 0],
                ["si raccoglie l'intero corpo di feci", 0],
                ["si ripete il prelievo cercando feci non contaminate", 0]
            ],
            "In caso siano visibili anomalie nelle feci si deve prelevare un campione comprendente muco, sangue o altro per l'analisi."
        ),

        new Question("L’escreato è prodotto da",
            [
                ["cellule renali", 0],
                ["cellule della mucosa bronchiale", 1],
                ["cellule intestinali", 0],
                ["cellule epatiche", 0]
            ],
            "L'escreato sono le secrezioni provenienti dalle vie respiratorie ed emesse attraverso il meccanismo della tosse."
        ),

        new Question("Prima della raccolta di escreato il paziente deve",
            [
                ["aver fatto attività fisica per favorire le secrezioni bronchiali", 0],
                ["sospendere qualsiasi terapia farmacologica", 0],
                ["essere a digiuno da almeno due ore", 1],
                ["rimanere a letto sdraiato evitando sforzi", 0]
            ],
            "Il digiuno riduce al minimo il rischio di contaminazioni orali."
        ),

        new Question("Prima della raccolta di escreato si deve",
            [
                ["battere forte sulla schiena del paziente per favorire la tosse", 0],
                ["far bere il paziente per idratarlo", 0],
                ["auscultare il torace del paziente", 0],
                ["eseguire un lavaggio del cavo orale del paziente", 1]
            ],
            "Il lavaggio del cavo orale riduce il rischio di contaminazione da microrganismi normalmente presenti nella bocca."
        ),

        new Question("Per raccogliere escreato, il paziente deve",
            [
                ["tossire efficacemente dopo respiri profondi", 1],
                ["sdraiarsi in decubito laterale", 0],
                ["bere molta acqua", 0],
                ["usare un sondino nasofaringeo", 0]
            ],
            "La tosse profonda favorisce la fuoriuscita di secrezioni."
        ),

        new Question("Quale liquido biologico è normalmente sterile?",
            [
                ["Feci", 0],
                ["Urine", 1],
                ["Sangue", 0],
                ["Escreato", 0]
            ],
            "In condizioni fisiologiche le urine sono sterili, la presenza di batteri indica infezione."
        ),

        new Question("Per la raccolta di urina da catetere vescicale a permanenza, cosa si fa prima del prelievo?",
            [
                ["Si invita il paziente a urinare", 0],
                ["Si fa igiene orale", 0],
                ["Si chiude il tubo di drenaggio per 30 minuti", 1],
                ["Si fa camminare il paziente per stimolare la diuresi", 0]
            ],
            "Chiudere il catetere per 30 minuti permette l'accumulo di urina in vescica e facilita la sua raccolta."
        ),

        new Question("Dopo la raccolta di un campione biologico si deve sempre",
            [
                ["misurare la pressione", 0],
                ["far bere il paziente", 0],
                ["sterilizzare il contenitore utilizzato", 0],
                ["registrare l'avvenuta esecuzione", 1]
            ],
            "La registrazione documenta che il prelievo sia avvenuto in maniera corretta rispettando le procedure."
        ),

        new Question("Il vomito è",
            [
                ["l'espulsione rapida e forzata del contenuto gastrico", 1],
                ["l'espulsione di aria dallo stomaco", 0],
                ["l'espulsione lenta del contenuto gastrico", 0],
                ["l'espulsione di saliva dalla bocca", 0]
            ],
            "Il vomito è una rapida e forzata espulsione del contenuto gastrico attraverso esofago e bocca."
        ),

        new Question("Quale muscolo è coinvolto nel meccanismo del vomito?",
            [
                ["Muscoli addominali", 0],
                ["Diaframma", 0],
                ["Muscolatura esofagea", 0],
                ["Tutti i precedenti", 1]
            ],
            "Il vomito è determinato dall’azione combinata di muscoli addominali, diaframma ed esofago."
        ),

        new Question("Il vomito può essere",
            [
                ["solido o liquido", 0],
                ["autonomo o indotto", 0],
                ["centrale o periferico", 1],
                ["sintomatico o asintomatico", 0]
            ],
            "Il vomito centrale si manifesta improvvisamente senza alcun sintomo come nausea o dolore. Il vomito periferico è legato alla stimolazione dei nervi sensitivi che collegano lo stomaco al centro del vomito."
        ),

        new Question("Il vomito centrale si manifesta",
            [
                ["solo in bambini e neonati", 0],
                ["a getto, senza nausea", 1],
                ["solo dopo i pasti", 0],
                ["sempre con nausea", 0]
            ],
            "Il vomito centrale è caratterizzato da espulsione a getto del contenuto gastrico senza nausea, legato a stimolazione diretta del centro del vomito."
        ),

        new Question("Il vomito periferico è legato a",
            [
                ["stimolazione del nervo vago", 1],
                ["stimolazione del fegato", 0],
                ["stimolazione del midollo spinale", 0],
                ["stimolazione del cuore", 0]
            ],
            "Il nervo vago porta gli stimoli dallo stomaco al centro del vomito."
        ),

        new Question("Quale condizione può causare vomito centrale?",
            [
                ["Odori sgradevoli", 0],
                ["Trauma cranico", 1],
                ["Coliche addominali", 0],
                ["Mal d’auto", 0]
            ],
            "Il vomito centrale è legato a traumi cranici, tumori cerebrali, emorragie cerebrali e altre condizioni che colpiscono direttamente il centro del vomito nell'encefalo."
        ),

        new Question("Quale fase del vomito periferico è caratterizzata da nausea e conati?",
            [
                ["Fase eiettiva", 0],
                ["Fase post-eiettiva", 0],
                ["Fase pre-eiettiva", 1],
                ["Tutte e tre le risposte", 0]
            ],
            "La fase pre-eiettiva include nausea, pallore, tachicardia e conati."
        ),

        new Question("Il vomito può essere causato da",
            [
                ["forti shock emotivi", 0],
                ["gravidanza", 0],
                ["stimolazione manuale", 0],
                ["tutte le precedenti", 1]
            ],
            "Tossinfezioni da alimenti avariati o contaminati, eccessiva quantità di cibo ingerito, infezioni batteriche o virali, intolleranze alimentari, somministrazione della chemioterapia, forti shock emotivi, l’ansia e lo stress, vomito indotto da stimolazione manuale, vomito abituale nel lattante e iperemesi gravidica sono tutte possibili cause."
        ),

        new Question("Durante la fase eiettiva del vomito",
            [
                ["vi è l'espulsione del contenuto gastrico", 1],
                ["si tossisce persistentemente", 0],
                ["si ha rilassamento della muscolatura gastrica", 0],
                ["insorge la nausea", 0]
            ],
            "È la fase in cui avviene l’espulsione del vomito grazie alla contrazione della muscolatura addominale, gastrica ed esofagea."
        ),

        new Question("Nella fase post-eiettiva del vomito la muscolatura coinvolta",
            [
                ["si contrae", 0],
                ["si rilassa", 1],
                ["si infiamma", 0],
                ["nessuna delle precedenti", 0]
            ],
            "Nella fase successiva all'espulsione del vomito subentra rilassamento muscolare e stanchezza fisica."
        ),

        new Question("L'ematemesi indica",
            [
                ["presenza di sangue nelle feci", 0],
                ["presenza di sangue venoso e arterioso mischiati", 0],
                ["presenza di sangue nel vomito", 1],
                ["presenza di sangue nelle urine", 0]
            ],
            "L'ematemesi è l'espulsione di sangue durante il vomito."
        ),

        new Question("Quale complicanza può derivare dal vomito persistente?",
            [
                ["Squilibri elettrolitici", 0],
                ["Polmonite ab-ingestis", 0],
                ["Disidratazione", 0],
                ["Tutte le precedenti", 1]
            ],
            "Il vomito persistente può portare a tutte queste complicanze."
        ),

        new Question("Il vomito caffeano indica",
            [
                ["emorragia gastrica con sangue digerito", 1],
                ["presenza di un fecaloma", 0],
                ["emorragia gastrica con sangue fresco", 0],
                ["presenza di una gastroenterite", 0]
            ],
            "Ha l’aspetto di posa di caffè ed è legato a sangue digerito."
        ),

        new Question("Il vomito biliare si presenta di colore",
            [
                ["rosso", 0],
                ["verde", 1],
                ["bianco", 0],
                ["marrone", 0]
            ],
            "La colorazione verdastra è dovuta alla bile espulsa con il vomito."
        ),

        new Question("Quale colorazione indica sangue non digerito nel vomito?",
            [
                ["Rosso scuro", 0],
                ["Marrone-nero", 0],
                ["Rosso vivo", 1],
                ["Verde-giallo", 0]
            ],
            "Il sangue non digerito appare rosso vivo e indica una recente emorragia dell'alto tratto digerente."
        ),

        new Question("Quale tipo di vomito contiene materiale semiliquido respiratorio?",
            [
                ["Vomito mucoso", 0],
                ["Vomito biliare", 0],
                ["Vomito fecaloide", 0],
                ["Vomica", 1]
            ],
            "La vomica contiene materiale proveniente dall’albero respiratorio."
        ),

        new Question("Il vomito fecaloide ha",
            [
                ["odore di feci", 1],
                ["aspetto mucoso", 0],
                ["odore di caffè", 0],
                ["colore verde", 0]
            ],
            "È marrone scuro e ha odore fecale."
        ),

        new Question("Il vomito mucoso contiene",
            [
                ["bile", 0],
                ["muco e succhi gastrici", 1],
                ["feci", 0],
                ["sangue digerito", 0]
            ],
            "È ricco di muco e acidi gastrici."
        ),

        new Question("Quale posizione è consigliata per prevenire l'inalazione di vomito?",
            [
                ["Seduta", 0],
                ["Prona", 0],
                ["Laterale di sicurezza", 1],
                ["Supina", 0]
            ],
            "La posizione laterale di sicurezza evita inalazione del vomito."
        ),

        new Question("Quale fattore aumenta il rischio di inalazione del vomito?",
            [
                ["Bambini piccoli", 0],
                ["Età avanzata", 0],
                ["Stato di incoscienza", 0],
                ["Tutti i precedenti", 1]
            ],
            "Bambini e anziani, oltre ai pazienti incoscienti, hanno rischio maggiore."
        ),

        new Question("Quale azione NON deve fare l’OSS mentre assiste un paziente che vomita?",
            [
                ["Posizionare il paziente supino", 1],
                ["Rimuovere la dentiera se presente", 0],
                ["Favorire il vomito", 0],
                ["Osservare le caratteristiche del vomito", 0]
            ],
            "La posizione supina aumenta il rischio di inalazione."
        ),

        new Question("Dopo il vomito, l’OSS deve sempre",
            [
                ["far camminare il paziente", 0],
                ["pulire il cavo orale del paziente", 1],
                ["somministrare farmaci al paziente", 0],
                ["dare acqua e zucchero al paziente", 0]
            ],
            "L’igiene orale è fondamentale per il comfort e la prevenzione di infezioni."
        ),

        new Question("Quale complicanza può derivare dall’inalazione del vomito?",
            [
                ["Gastrite", 0],
                ["Colite", 0],
                ["Polmonite ab-ingestis", 1],
                ["Ulcera", 0]
            ],
            "L’inalazione del vomito può causare polmonite da aspirazione."
        ),

        new Question("Dopo il vomito, l’OSS deve",
            [
                ["pulire il cavo orale", 0],
                ["cambiare biancheria se necessario", 0],
                ["aerare la stanza", 0],
                ["tutti i precedenti", 1]
            ],
            "Sono tutte azioni assistenziali post-vomito."
        ),

        new Question("Quale tipo di vomito è tipico nei lattanti?",
            [
                ["Vomito abituale", 1],
                ["Vomito biliare", 0],
                ["Vomito caffeano", 0],
                ["Vomito fecaloide", 0]
            ],
            "Nei lattanti può esserci vomito abituale."
        ),

        new Question("L’iperemesi gravidica è",
            [
                ["vomito da stress", 0],
                ["vomito persistente in gravidanza", 1],
                ["vomito da infezione virale", 0],
                ["vomito da chemioterapia", 0]
            ],
            "È una forma grave e persistente di vomito in gravidanza."
        ),

        new Question("Quale segnale clinico deve essere monitorato in caso di vomito frequente?",
            [
                ["Stato emotivo", 0],
                ["Frequenza respiratoria", 0],
                ["Peso corporeo", 1],
                ["Capacità di parlare", 0]
            ],
            "Il monitoraggio del peso corporeo è importante per valutare eventuale denutrizione o disidratazione."
        )
    
    ],
  
  getFeedback(score) {
    if (score >= 0 && score <= 20) return "/20";
    return "";
  }
};

