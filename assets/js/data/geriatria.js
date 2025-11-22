import { Question } from "../models/Question.js";

export const GeriatriaTest = {
  questions: [

        new Question("Cosa studia la geriatria?",
          [
            ["Le malattie nell'anziano e le loro conseguenze", 1],
            ["Il rapporto tra persone anziane e giovani in una popolazione", 0],
            ["Le problematiche fisiche in ex lavoratori ora pensionati", 0],
            ["L'implementazione di strutture territoriali per persone in età avanzata", 0]
          ],
            "Geriatria deriva dal greco γέρων (geron), 'vecchio, anziano' e ἰατρεία (iatreia), 'cura'."
        ),

        new Question("Quale tra queste NON è un obiettivo della medicina geriatrica?",
          [
            ["Mantenere l'autosufficienza", 0],
            ["Ridurre i costi sanitari", 1],
            ["Ritardare il declino funzionale e mentale", 0],
            ["Migliorare la qualità di vita", 0]
          ],
            "La geriatria mira a garantire benessere e autonomia nelle persone anziane."
        ),

        new Question("Quale problematica è messa in evidenza dall'attuale andamento demografico della popolazione?",
          [
            ["Incremento della natalità", 0],
            ["Peggioramento dell'aspettativa di vita", 0],
            ["Declino della qualità di vita", 1],
            ["Aumento dell'età pensionabile", 0]
          ],
            "Con il progressivo aumento dell'età media della popolazione si rileva una sempre maggiore difficoltà per le persone anziane a mantenere un buon livello di benessere."
        ),

        new Question("Dove sarebbe meglio trattare la persona anziana?",
          [
            ["In hospice", 0],
            ["In ospedale", 0],
            ["In RSA", 0],
            ["Al proprio domicilio", 1]
          ],
            "Sarebbe preferibile riuscire a trattare la persona anziana al domicilio per mantenerlo in un ambiente familiare."
        ),

        new Question("Tra le problematiche che affliggono la popolazione anziana NON è contemplata",
          [
            ["l'aumento dell'appetito", 1],
            ["la perdita dell'autonomia", 0],
            ["lo sviluppo di malattie croniche", 0],
            ["la depressione", 0]
          ],
            "Perdita di autonomia, depressione, necessità di abbandonare il domicilio, malattie croniche, fragilità e minor risposta dell'organismo alle malattie acute sono fattori che incidono sulla qualità di vita della persona anziana."
        ),

        new Question("Quale test è utile per valutare lo stato emotivo della persona anziana?",
          [
            ["IADL", 0],
            ["GDS", 1],
            ["MMSE", 0],
            ["GCS", 0]
          ],
            "La Geriatric Depression Scale è uno strumento utile per avere una prima valutazione sulla presenza o meno di una possibile depressione."
        ),

        new Question("Quale tra le seguenti è una delle cause di diminuzione dell'autonomia nell'anziano?",
          [
            ["Maggiore tempo libero", 0],
            ["Accesso al centro diurno", 0],
            ["Necessità di gestione di dispositivi", 1],
            ["Controlli sanitari periodici", 0]
          ],
            "Gestire dispositivi medici come cateteri vescicali o medicazioni può essere causa di una diminuzione dell'autonomia assieme ad altri fattori quali il decadimento cognitivo, l'ipotonia muscolare, l'osteoporosi e problematiche psichiatriche."
        ),

        new Question("L'anziano fragile",
          [
            ["non è differente da un anziano non fragile", 0],
            ["necessita sempre di ospedalizzazione", 0],
            ["deve essere sempre sostenuto da un caregiver", 0],
            ["è più a rischio di dipendenza in seguito a un fattore di stress", 1]
          ],
            "La fragilità rende la persona anziana più suscettibile a problematiche fisiche e psichiche e costituisce un aumentato rischio di sviluppare dipendenza a seguito di un ospedalizzazione."
        ),

        new Question("Cosa si intende con speranza di vita?",
          [
            ["Il numero medio di anni che ogni neonato ha la probabilità di vivere", 1],
            ["La differenza tra l'età della persona e l'età media della popolazione", 0],
            ["La capacità di una persona di sperimentare un umore positivo", 0],
            ["Il miglioramento di una patologia cronica", 0]
          ],
            "La speranza di vita è un indicatore statistico che esprime il numero medio di anni della vita di un essere vivente a partire da una certa età, all'interno della popolazione indicizzata."
        ),

        new Question("Cosa comporta la fragilità nell'anziano?",
          [
            ["La scarsa adattabilità a stimoli emozionali", 0],
            ["Una condizione di rischio elevato", 1],
            ["La perdita di resistenza ossea", 0],
            ["L'exitus imminente", 0]
          ],
            "La fragilità è un insieme di fattori (scarsa autonomia funzionale, polifarmacoterapia, comorbilità...) che aumentano il rischio di sviluppare problematiche e la necessità di ospedalizzazione."
        ),

        new Question("Chi gestisce principalmente l’assistenza domiciliare semplice?",
          [
            ["Solo enti privati", 0],
            ["Famiglie degli assistiti", 0],
            ["Comuni, ASL e Circoscrizioni", 1],
            ["Ospedali", 0]
          ],
            "È un servizio pubblico gestito da Comuni, ASL e Circoscrizioni, spesso con supporto di volontariato."
        ),

        new Question("Dove l'anziano può ricevere assistenza?",
          [
            ["Nelle residenze per anziani", 0],
            ["Al proprio domicilio", 0],
            ["Nei centri diurni", 0],
            ["Tutte le risposte precedenti", 1]
          ],
            "L'assistenza all'anziano può avvenire in casa (con l'assistenza domiciliare o l'utilizzo di ausili) e fuori casa (nei CD, nelle residenze e nelle cliniche di riabilitazione)."
        ),

        new Question("A chi è rivolta l’assistenza domiciliare?",
          [
            ["A chiunque abbia difficoltà temporanee o permanenti", 1],
            ["Solo agli anziani oltre 80 anni", 0],
            ["Solo ai malati oncologici", 0],
            ["Solo ai disabili gravi", 0]
          ],
            "È rivolta a tutti coloro si trovino in situazioni di bisogno, come anziani, persone con handicap o in stato di isolamento sociale."
        ),

        new Question("L’assistenza domiciliare integrata (ora C-DOM) semplice comprende",
          [
            ["cure oncologiche complesse", 0],
            ["medicazioni, gestione catetere, prelievi", 1],
            ["solo supporto psicologico", 0],
            ["terapie intensive", 0]
          ],
            "Si tratta di servizi infermieristici di base come la gestione di cateteri, le medicazioni di lesioni cutanee e i prelievi del sangue."
        ),

        new Question("Chi invia la richiesta per l'assistenza domiciliare integrata (ora C-DOM)?",
          [
            ["Il comune", 0],
            ["Le forze dell'ordine", 0],
            ["Il medico di base", 1],
            ["Il servizio sociale professionale", 0]
          ],
            "L'assistito che ne avesse necessità si rivolge al proprio medico di base ed egli comunicherà poi la richiesta al Distretto Sanitario."
        ),

        new Question("L'assistenza domiciliare integrata (ora C-DOM) complessa",
          [
            ["è identica a quella semplice, ma è più costosa", 0],
            ["deve essere approvata da un giudice", 0],
            ["si adotta solo se ci sono più pazienti allo stesso domicilio", 0],
            ["si sviluppa su più livelli", 1]
          ],
            "Affianca alle cure infermieristiche anche quelle mediche e riabilitative ed è una forma di assistenza rivolta ai pazienti affetti da gravi malattie (patologie oncologiche, neurologiche, respiratorie...)."
        ),

        new Question("Chi valuta la richiesta di assistenza domiciliare integrata (ora C-DOM) complessa?",
          [
            ["Una commissione multidisciplinare", 1],
            ["Il medico di base", 0],
            ["Il sindaco", 0],
            ["Una struttura ospedaliera", 0]
          ],
            "La richiesta è soggetta al vaglio di un'apposita commissione che comprende medici, rappresentanti dei Servizi Sociali del comune di riferimento e altri specialisti ove necessario."
        ),

        new Question("Nell’ospedalizzazione domiciliare la responsabilità della cura dell'assistito è",
          [
            ["dei familiari", 0],
            ["della divisione ospedaliera di riferimento", 1],
            ["del medico di base", 0],
            ["del comune", 0]
          ],
            "La divisione ospedaliera ha la presa in carico e la responsabilità della cura del paziente."
        ),

        new Question("Quali ausili sono richiesti per la mobilizzazione?",
          [
            ["Cateteri", 0],
            ["Pannoloni", 0],
            ["Letti ortopedici", 1],
            ["Traverse", 0]
          ],
            "Tra i presidi per la mobilizzazione figurano letti ortopedici, carrozzine, deambulatori e sollevatori."
        ),

        new Question("Quale vantaggio offre l’ospedalizzazione domiciliare?",
          [
            ["Migliore qualità di vita", 0],
            ["Minori costi per il SSN", 0],
            ["Un contatto continuo con il personale specialistico", 0],
            ["Tutte le precedenti", 1]
          ],
            "L'ospedalizzazione domiciliare garantisce la presenza di personale infermieristico per due ore al giorno, una visita giornaliera di un medico di riferimento, la possibilità di raggiungere telefonicamente n qualsiasi momento lo staff medico dell'ospedale, di ricevere visite specialistiche e di gravare meno sul SSN."
        ),

        new Question("Quale NON è un ausilio per l'incontinenza?",
          [
            ["Supporto per WC", 1],
            ["Traverse", 0],
            ["Pannoloni", 0],
            ["Catetere vescicale", 0]
          ],
            "Il supporto WC non aiuta nell'incontinenza, ma aiuta la mobilizzazione del paziente sul gabinetto."
        ),

        new Question("I servizi sociali per anziani sono gestiti da",
          [
            ["ATS", 0],
            ["comuni", 1],
            ["volontari", 0],
            ["farmacie", 0]
          ],
            "I servizi sociali rientrano nelle competenze comunali."
        ),

        new Question("I centri diurni devono essere",
          [
            ["in zone isolate", 0],
            ["accessibili solo con mezzi privati", 0],
            ["privi di barriere architettoniche", 1],
            ["divisi per sesso dei residenti", 0]
          ],
            "I CD devono garantire l'accessibilità e l'inclusione."
        ),

        new Question("Nei centri diurni operano",
          [
            ["solo volontari", 0],
            ["amministrativi comunali", 0],
            ["solo medici", 0],
            ["infermieri, fisioterapisti, animatori", 1]
          ],
            "Nei CD operano figure professionali che aiutano a salvaguardare la salute e il benessere psicofisico degli anziani."
        ),

        new Question("Le RSA accolgono anziani",
          [
            ["non autosufficienti", 1],
            ["malati terminali", 0],
            ["con difficoltà economiche", 0],
            ["autosufficienti", 0]
          ],
            "Le RSA sono strutture volte alla tutela dell'anziano che non è più in grado di vivere al proprio domicilio."
        ),

        new Question("Una quota dei posti RSA è riservata a",
          [
            ["pazienti con bambini", 0],
            ["pazienti con demenza", 1],
            ["familiari", 0],
            ["malati oncologici", 0]
          ],
            "In alcune strutture sono attivi dei Nuclei Alzheimer riservati a ospiti affetti da sindromi degenerative che compromettono le capacità cognitive e comportamentali."
        ),

        new Question("Le case protette prevedono",
          [
            ["prettamente assistenza economica", 0],
            ["solo servizi assistenziali", 0],
            ["servizi sanitari, riabilitativi e socio-assistenziali", 1],
            ["soltanto personale per supporto psicologico", 0]
          ],
            "Destinate ad anziani non autosufficienti, le case protette assicurano la presenza di personale medico, infermieristico e terapisti per realizzare attività di stampo sanitario-riabilitativo e socio-assistenziale."
        ),

        new Question("A chi sono rivolte le case albergo?",
          [
            ["Pazienti oncologici", 0],
            ["Anziani disabili", 0],
            ["Malati terminali", 0],
            ["Pensionati autonomi", 1]
          ],
            "Sono strutture pensate per utenti pensionati che non necessitano di forme specifiche di assistenza, ma che desiderano vivere in un ambiente di comunità."
        ),

        new Question("Le case albergo prevedono",
          [
            ["appartamenti autonomi e spazi comuni", 1],
            ["solo stanze ospedaliere", 0],
            ["assistenza intensiva", 0],
            ["poca socializzazione", 0]
          ],
            "Sono strutture pensate per utenti pensionati che non necessitano di forme specifiche di assistenza, ma che desiderano vivere in un ambiente di comunità."
        ),

        new Question("A chi sono rivolti i servizi dell'hospice?",
          [
            ["Pensionati con disabilità", 0],
            ["Malati terminali", 1],
            ["Anziani autosufficienti", 0],
            ["Persone con reddito basso", 0]
          ],
            "L'hospice è una struttura dove il paziente malato terminale che non è più in grado di ricevere una adeguata assistenza a domicilio viene accompagnato nelle ultime fasi della sua vita con un appropriato sostegno medico, psicologico e spirituale."
        ),

        new Question("Quale struttura è destinata specificamente ai malati terminali?",
          [
            ["RSA", 0],
            ["Centro diurno", 0],
            ["Hospice", 1],
            ["Casa albergo", 0]
          ],
            "L’Hospice è una struttura residenziale socio-sanitaria dedicata ai malati terminali."
        ),

        new Question("Quale obiettivo principale hanno le RSA?",
          [
            ["Offrire cure psicologiche", 0],
            ["Fornire vitto e alloggio", 0],
            ["Offrire cure farmacologiche", 0],
            ["Garantire assistenza personalizzata e socializzazione agli anziani non autosufficienti", 1]
          ],
            "Le RSA mirano a tutelare il benessere generale dell’anziano, favorendo autonomia e socializzazione."
        ),

        new Question("Quale tra le seguenti definizioni si riferisce alla contenzione fisica?",
          [
            ["Mezzi fisici applicati al corpo", 1],
            ["Uso di sedativi", 0],
            ["Limitazione indiretta della libertà", 0],
            ["Ascolto empatico del paziente", 0]
          ],
            "La contenzione fisica implica l'applicazione, con o senza il consenso della persona e/o dei familiari, di strumenti o barriere che limitano i movimenti."
        ),

        new Question("Quale dei seguenti NON rientra tra i tipi di contenzione?",
          [
            ["Chimica", 0],
            ["Alimentare", 1],
            ["Fisica", 0],
            ["Ambientale", 0]
          ],
            "Le tipologie di contenzioni sono contenzione fisica, chimica, ambientale e psicologica/relazionale."
        ),

        new Question("Se la contenzione provoca la morte, quale reato può configurarsi?",
          [
            ["Violenza privata", 0],
            ["Maltrattamento", 0],
            ["Omicidio colposo", 1],
            ["Sequestro di persona", 0]
          ],
            "La morte conseguente a contenzione ingiustificata rientra nell’omicidio colposo."
        ),

        new Question("Se il paziente è orientato e vigile, le spondine",
          [
            ["devono essere usate sempre", 0],
            ["devono essere usate con cautela", 0],
            ["devono essere usate solo su richiesta dei familiari", 0],
            ["non devono essere utilizzate", 1]
          ],
            "Il paziente orientato e vigile non deve essere limitato in alcun modo."
        ),

        new Question("Quando le spondine NON sono considerate contenzione?",
          [
            ["Se usate per prevenire cadute accidentali", 1],
            ["Se contrastano il wandering", 0],
            ["Se impediscono al paziente di alzarsi", 0],
            ["Se limitano la libertà di movimento", 0]
          ],
            "Le spondine sono dispositivi di sicurezza se usate per prevenire cadute."
        ),

        new Question("Perché si può applicare la contenzione in stato di necessità?",
          [
            ["Per evitare aggressività", 0],
            ["Per non incorrere nel reato di abbandono di incapace", 1],
            ["Per motivi architettonici", 0],
            ["Per richiesta dei familiari", 0]
          ],
            "Lo stato di necessità tutela l’operatore dal reato di abbandono."
        ),

        new Question("Quale motivazione è impropria per la contenzione?",
          [
            ["Prevenire cadute", 0],
            ["Contenere aggressività", 0],
            ["Carenza di personale", 1],
            ["Supporto posturale", 0]
          ],
            "La carenza di personale non giustifica l’uso della contenzione."
        ),

        new Question("Cosa si intende per contenzione chimica?",
          [
            ["L'uso di farmaci per sedare il paziente", 1],
            ["L'uso di sostanze stupefacenti che creano uno stato di dipendenza", 0],
            ["L'uso di farmaci per curare il paziente", 0],
            ["L'uso di sostanze chimiche per far perdere conoscenza al paziente", 0]
          ],
            "La contenzione chimica è un intervento realizzato con la somministrazione di farmaci con l'obiettivo di sedare il paziente."
        ),

        new Question("Quale dei seguenti NON è un farmaco utilizzato negli interventi di contenzione chimica?",
          [
            ["Ipnoinduttori", 0],
            ["Lassativi", 1],
            ["Anestetici sedativi", 0],
            ["Anticonvulsivanti", 0]
          ],
            "Ansiolitici, ipnotici, anticonvulsivanti e anestetici sedativi fanno parte della categoria delle benzodiazepine."
        ),

        new Question("Quale azione rientra nella contenzione ambientale?",
          [
            ["Ascolto empatico", 0],
            ["Somministrare benzodiazepine", 0],
            ["Isolare un individuo in una stanza chiusa", 1],
            ["Applicare polsiere e cavigliere", 0]
          ],
            "La contenzione ambientale limita fisicamente la possibilità di lasciare uno spazio (ad esempio la mancanza di un ascensore per contenere una persona in carrozzina)."
        ),

        new Question("Quale obiettivo ha la contenzione psicologica?",
          [
            ["Bloccare accessi ambientali", 0],
            ["Somministrare psicofarmaci", 0],
            ["Limitare i movimenti", 0],
            ["Ridurre aggressività rassicurando il soggetto", 1]
          ],
            "Si basa su ascolto e osservazione empatica."
        ),

        new Question("Quale misura ambientale è utile per il wandering?",
          [
            ["Dispositivi di allarme", 1],
            ["Benzodiazepine", 0],
            ["Polsiere", 0],
            ["Pettorina", 0]
          ],
            "Le porte allarmate aiutano a monitorare il wandering."
        ),

        new Question("La VMD è",
          [
            ["un esame radiologico", 0],
            ["una valutazione multidisciplinare", 1],
            ["un test di memoria", 0],
            ["una terapia farmacologica", 0]
          ],
            "La VMD coinvolge più professionisti e analizza diversi aspetti della salute dell’anziano."
        ),

        new Question("Tra gli obiettivi della VMD troviamo",
          [
            ["ridurre la spesa sanitaria", 0],
            ["eliminare tutte le patologie", 0],
            ["migliorare la funzionalità e qualità della vita", 1],
            ["aumentare il numero di ricoveri", 0]
          ],
            "La VMD punta a migliorare la qualità della vita e la funzionalità dell’anziano."
        ),

        new Question("Quale sintomo gli anziani tendono a considerare normale, causando ritardo diagnostico?",
          [
            ["Tosse persistente", 0],
            ["Dolore acuto improvviso", 0],
            ["Febbre alta", 0],
            ["Perdita della memoria", 1]
          ],
            "La perdita di memoria, i dolori articolari, l'affaticamento e la dispnea sono sintomi spesso sottovalutati e interpretati come normale invecchiamento."
        ),

        new Question("Perché è importante conoscere lo stato funzionale dell’anziano?",
          [
            ["È un fattore prognostico", 1],
            ["Per stabilire la dieta", 0],
            ["Per scegliere la terapia farmacologica", 0],
            ["Per valutare la vista", 0]
          ],
            "Lo stato funzionale è un indicatore prognostico e di autonomia della persona e si basa sulla somministrazione di scale di valutazione che verranno poi interpretate."
        ),

        new Question("L’Unità di Valutazione Geriatrica è",
          [
            ["un test psicologico", 0],
            ["un'équipe multidisciplinare", 1],
            ["un singolo medico", 0],
            ["un laboratorio di analisi", 0]
          ],
            "È composta da medico del distretto, medico di medicina generale dell'utente, medico geriatra, infermiere e assistente sociale."
        ),

        new Question("La VMD è particolarmente utile perché",
          [
            ["sostituisce la terapia farmacologica", 0],
            ["elimina tutte le patologie", 0],
            ["evidenzia problemi clinici e sociali misconosciuti", 1],
            ["permette di trasferire l'anziano in unità ospedaliera", 0]
          ],
            "La VMD porta alla luce problemi spesso non riconosciuti e potenzialmente reversibili."
        ),

        new Question("Quale caratteristica distingue il delirium dalla demenza?",
          [
            ["Deficit di memoria remota", 0],
            ["Decorso graduale", 0],
            ["Afasia persistente", 0],
            ["Decorso fluttuante", 1]
          ],
            "Il delirium ha un decorso acuto e fluttuante, a differenza della demenza che si instaura gradualmente e cronicamente."
        ),

        new Question("Quale funzione cognitiva è principalmente compromessa nel delirium?",
          [
            ["Memoria remota", 0],
            ["Attenzione", 1],
            ["Funzioni esecutive", 0],
            ["Nessuna delle risposte precedenti", 0]
          ],
            "La principale funzione che viene compromessa è la capacità di mantenere o spostare l'attenzione."
        ),

        new Question("La durata tipica del delirium è",
          [
            ["ore o giorni", 1],
            ["mesi", 0],
            ["anni", 0],
            ["decenni", 0]
          ],
            "Il delirium è transitorio e solitamente dura meno di un mese."
        ),

        new Question("La coscienza nel delirium è",
          [
            ["iperattiva", 0],
            ["espansa", 0],
            ["ridotta", 1],
            ["normale", 0]
          ],
            "Il delirium comporta alterazione dello stato di coscienza."
        ),

        new Question("La memoria compromessa nel delirium riguarda",
          [
            ["solo la semantica", 0],
            ["procedurale", 0],
            ["solo la remota", 0],
            ["recente e immediata", 1]
          ],
            "Il delirium causa un peggioramento della memoria recente e immediata."
        ),

        new Question("Quali sono le tipologie di delirium riscontrabili?",
          [
            ["Ipocinetico, ipercinetico, misto", 1],
            ["Apatico, ipersensibile", 0],
            ["Maniacale, depressivo, intermedio", 0],
            ["Ipervigile, soporoso", 0]
          ],
            "Ipocinetico: letargia, ipoattività, rallentamento ideomotorio.\nIpercinetico: ansia, iperattività, aggressività.\nMisto: alternanza tra le due condizioni precedenti."
        ),

        new Question("Quale tipo di delirium è caratterizzato da letargia e ipoattività?",
          [
            ["Cronico", 0],
            ["Ipocinetico", 1],
            ["Misto", 0],
            ["Ipercinetico", 0]
          ],
            "Il delirium ipocinetico si manifesta con rallentamento ideomotorio."
        ),

        new Question("Quale tipo di delirium è caratterizzato da ansia e aggressività?",
          [
            ["Misto", 0],
            ["Subcronico", 0],
            ["Ipercinetico", 1],
            ["Ipocinetico", 0]
          ],
            "Il delirium ipercinetico si manifesta con iperattività e agitazione."
        ),

        new Question ("Quale tipo di delirium alterna ipoattività e iperattività?",
          [
            ["Ipocinetico", 0],
            ["Persistente", 0],
            ["Ipercinetico", 0],
            ["Misto", 1]
          ],
            "Il delirium misto alterna i due quadri clinici."
        ),

        new Question("Il delirium incidente è",
          [
            ["sviluppato durante la degenza", 1],
            ["riscontrato solo in pazienti oncologici", 0],
            ["presente all’ammissione", 0],
            ["rilevato dopo la dimissione", 0]
          ],
            "Il delirium incidente insorge nel corso della degenza."
        ),

        new Question("Il delirium prevalente è",
          [
            ["riscontrato soltanto in terapia intensiva", 0],
            ["presente all’ammissione", 1],
            ["scatenato successivamente alle dimissioni", 0],
            ["rilevato durante la degenze", 0]
          ],
            "Il delirium prevalente si osserva già al ricovero."
        ),

        new Question("Quale percentuale di persone anziane ricoverate in ospedale sviluppa delirium?",
          [
            ["5%", 0],
            ["25%", 0],
            ["50%", 1],
            ["75%", 0]
          ],
            "Un paziente anziano su due, soprattutto se già affetto da una preesistente demenza, è colpito da delirium durante la degenza."
        ),

        new Question("Quale fattore precipitante può indurre delirium?",
          [
            ["Farmaci psicoattivi", 0],
            ["Dolore", 0],
            ["Deprivazione del sonno", 0],
            ["Tutte le precedenti", 1]
          ],
            "Tutto ciò che è diverso per il paziente rispetto alla sua comfort zone può essere fattore scatenante di delirium."
        ),

        new Question("Quale tra i seguenti NON è un tipo di invecchiamento?",
          [
            ["Muscolare", 1],
            ["Fisiologico", 0],
            ["Patologico", 0],
            ["Di successo", 0]
          ],
            "Patologico: caratterizzato da malattia e disabilità\nFisiologico: caratterizzato dall’assenza di una patologia evidente ma dalla presenza di un declino funzionale\nDi successo: con poca o nessuna perdita fisiologica e assenza di malattia."
        ),

        new Question("L’invecchiamento inizia biologicamente intorno ai",
          [
            ["20 anni", 0],
            ["30 anni", 1],
            ["40 anni", 0],
            ["50 anni", 0]
          ],
            "Il processo di invecchiamento parte già dai 30 anni."
        ),

        new Question("L'invecchiamento comporta una tendenza generale a cosa?",
          [
            ["Ipertrofia", 0],
            ["Elasticità", 0],
            ["Atrofia", 1],
            ["Iperattività", 0]
          ],
            "L'invecchiamento dell'organismo porta a una diminuzione del peso e del volume degli organi, una riduzione della vascolarizzazione capillare, una riduzione del contenuto idrico dei tessuti, una ritardata crescita cellulare e una alterazione e diminuzioni dei tessuti."
        ),

        new Question("Il decadimento cognitivo lieve è",
          [
            ["associato ad una perdita di autonomia nello svolgimento delle attività quotidiane", 0],
            ["un segno conclamato di demenza", 0],
            ["una condizione clinica non correlata alla demenza", 0],
            ["un disturbo che precede la demenza", 1]
          ],
            "Il Mild Cognitive Impairment (MCI) è una condizione che precede la comparsa di demenza. Si caratterizza per turbe della memoria, declino cognitivo e disturbi d'ansia, ma senza la compromissione nell'espletamento delle attività quotidiane."
        ),

        new Question("Il decadimento cognitivo maggiore è",
          [
            ["la demenza", 1],
            ["curabile con terapia farmacologica", 0],
            ["un deficit che coinvolge meno di due aree cognitive", 0],
            ["interessato solo da disturbi nel linguaggio", 0]
          ],
            "La demenza o disturbo cognitivo maggiore si diagnostica quando alla perdita di memoria si associa un deficit altre due o più aree cognitive quali l'orientamento, l'attenzione, il linguaggio, le funzioni visuo-spaziali, le funzioni esecutive, il controllo motorio e la prassia."
        ),

        new Question("Le demenze sono distinte in",
          [
            ["Alzheimer-correlate e Parkinson-correlate", 0],
            ["primarie e secondarie", 1],
            ["cognitive e degenerative", 0],
            ["genetiche e ambientali", 0]
          ],
            "Le demenze primarie costituiscono le patologie non direttamente associabili ad una singola causa scatenante. Le demenze secondarie hanno una causa ben definita."
        ),

        new Question("Quale tra queste è una demenza primaria?",
          [
            ["Meningoencefalite", 0],
            ["Demenza vascolare", 0],
            ["Alzheimer", 1],
            ["Sclerosi multipla", 0]
          ],
            "La malattia di Alzheimer è una demenza primaria poiché si manifesta a seguito di diversi fattori scatenanti."
        ),

        new Question("Quale tra queste è una demenza secondaria?",
          [
            ["Corea di Huntington", 0],
            ["Malattia di Alzheimer", 0],
            ["Demenza a corpi di Lewy", 0],
            ["Demenza vascolare ischemica", 1]
          ],
            "Le demenza secondarie, a differenza delle primarie, possono essere ricondotte ad una causa ben definita."
        ),

        new Question("Cosa indica il termine comorbilità?",
          [
            ["La presenza di una patologia aggiuntiva rispetto a una malattia indice", 1],
            ["La presenza di una sola malattia cronica", 0],
            ["La fragilità dell’anziano", 0],
            ["La disabilità motoria", 0]
          ],
            "Comorbilità significa avere altre patologie oltre a quella principale (malattia indice)."
        ),

        new Question("Un paziente ricoverato che presenta comorbilità",
          [
            ["avrà le stesse probabilità di sopravvivenza di un paziente senza comorbilità", 0],
            ["avrà meno probabilità di sopravvivenza", 1],
            ["avrà più probabilità di sopravvivenza", 0],
            ["deve essere dimesso subito e trasferito in una RSA", 0]
          ],
            "Le statistiche indicano che maggiore è il numero di comorbilità presenti, minore è la percentuale di sopravvivenza del paziente."
        ),

        new Question("Quale condizione aumenta il rischio di disabilità e morte anche per eventi minimi?",
          [
            ["Comorbilità", 0],
            ["Malnutrizione", 0],
            ["Fragilità", 1],
            ["Stato ansioso-depressivo", 0]
          ],
            "La fragilità riduce la capacità di resistere agli stress e aumenta il rischio di sviluppare complicanze gravi anche per eventi di minima entità."
        ),

        new Question("La fragilità consiste principalmente in",
          [
            ["una condizione terminale", 0],
            ["una disabilità sensoriale", 0],
            ["una singola malattia cronica", 0],
            ["una ridotta resistenza a fattori di stress", 1]
          ],
            "La fragilità è caratterizzata da ridotta riserva fisiologica e minore capacità di adattamento con conseguente aumento del rischio di disabilità ed exitus."
        ),

        new Question("Quale intervento è utile nella prevenzione della fragilità?",
          [
            ["Attività fisica regolare", 1],
            ["Terapie farmacologiche specifiche", 0],
            ["Riposo prolungato", 0],
            ["Isolamento sociale", 0]
          ],
            "L'attività fisica regolare e una nutrizione equilibrata sono importanti per prevenire episodi di fragilità in soggetti anziani."
        ),

        new Question("Qual è la caratteristica principale dell’osteoporosi?",
          [
            ["Calcificazione delle articolazioni", 0],
            ["Diminuzione della densità ossea", 1],
            ["Ispessimento delle cartilagini", 0],
            ["Rottura dei legamenti", 0]
          ],
            "L’osteoporosi comporta una riduzione della densità ossea e quindi maggiore suscettibilità a fratture."
        ),

        new Question("Qual è il rischio maggiore dell’osteoporosi?",
          [
            ["Deformazioni articolari", 0],
            ["Perdita di elasticità", 0],
            ["Fratture", 1],
            ["Dolore cronico", 0]
          ],
            "La fragilità ossea aumenta il rischio di fratture."
        ),

        new Question("Per disabilità si intende",
          [
            ["la perdita di uno o più dei cinque sensi", 0],
            ["l'impossibilità di camminare autonomamente", 0],
            ["l'utilizzo di protesi sostitutive", 0],
            ["tutte le precedenti", 1]
          ],
            "L'OMS e il NIHS definiscono la disabilità come l’incapacità a compiere una o più funzioni della vita quotidiana o la limitazione nelle attività di base a seguito di malattie croniche o la necessità di usare speciali strumenti protesici per effettuarle."
        ),

        new Question("Quale esame diagnostico è più specifico per l’osteoporosi?",
          [
            ["MOC", 1],
            ["TAC", 0],
            ["RMN", 0],
            ["PET", 0]
          ],
            "La MOC (Mineralometria Ossea Computerizzata) misura la densità minerale ossea."
        ),

        new Question("La prevenzione dell’osteoporosi si basa sull'assunzione di",
          [
            ["acido folico e vitamina C", 0],
            ["calcio e vitamina D", 1],
            ["zinco e vitamina K", 0],
            ["ferro e vitamina B12", 0]
          ],
            "Calcio e vitamina D sono fondamentali per la salute ossea."
        ),

        new Question("L’artrosi è una malattia che colpisce",
          [
            ["i tendini", 0],
            ["il midollo osseo", 0],
            ["la cartilagine articolare", 1],
            ["il tessuto muscolare", 0]
          ],
            "È una patologia degenerativa della cartilagine articolare."
        ),

        new Question("Quali articolazioni sono più colpite dall’artrosi?",
          [
            ["Bacino e zona sacrale", 0],
            ["Polsi e gomiti", 0],
            ["Spalle e caviglie", 0],
            ["Colonna vertebrale, anche, ginocchia", 1]
          ],
            "Le sedi più soggette a degenerazione sono quelle sottoposte a un maggiore stress da carico."
        ),

        new Question("La diagnosi di artrosi si effettua con",
          [
            ["RX", 1],
            ["RMN", 0],
            ["EEG", 0],
            ["TAC", 0]
          ],
            "Una radiografia è sufficiente per evidenziare una riduzione dello spazio articolare."
        ),

        new Question("Un sintomo tipico dell’artrosi è",
          [
            ["febbre alta", 0],
            ["dolore cronico al risveglio", 1],
            ["tosse persistente", 0],
            ["perdita di peso", 0]
          ],
            "Dolori cronici al risveglio (dopo prolungata immobilità articolare), versamento di liquidi nell'articolazione e deformazione delle stesse sono manifestazioni tipiche della malattia."
        ),

        new Question("La coxartrosi si manifesta con dolore",
          [
            ["alla spalla", 0],
            ["alla mano", 0],
            ["alla caviglia", 0],
            ["alla natica o all’inguine", 1]
          ],
            "La coxartrosi è l'artrosi dell'articolazione coxofemorale, ovvero dell'anca."
        ),

        new Question("La depressione nell’anziano può derivare da",
          [
            ["fattori psicosociali", 0],
            ["fattori biologici", 0],
            ["tutte le risposte precedenti", 1],
            ["nessuna delle precedenti", 0]
          ],
            "La disregolazione di neurotrasmettitori e dei ritmi circadiani (biologici) e eventi stressogeni in ambito familiare, affettivo, lavorativo (psicosociali) concorrono allo sviluppo della malattia."
        ),

        new Question("Qual è il sintomo principale della depressione?",
          [
            ["Anedonia", 1],
            ["Anemia", 0],
            ["Afasia", 0],
            ["Atassia", 0]
          ],
            "L'anedonia è la diminuzione della capacità di provare o prevedere un piacere."
        ),

        new Question("Quale terapia è più efficace per la depressione?",
          [
            ["Psicoterapia", 0],
            ["Combinazione di farmaci e psicoterapia", 1],
            ["Farmaci", 0],
            ["Nessuna terapia specifica", 0]
          ],
            "Studi hanno evidenziato come circa il 70% dei pazienti trattati o solo con farmacoterapia o solo con psicoterapia ha riscontrato benefici contro oltre il 90% di coloro che hanno combinato entrambe le terapie."
        )

    ],

  getFeedback(score) {
    if (score >= 0 && score <= 20) return "/20";
    return "";
  }
};
