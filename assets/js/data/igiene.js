import { Question } from "../models/Question.js";

export const IgieneTest = {
  questions: [

        new Question("Secondo l’OMS, la salute è",
            [
                ["stato di benessere fisico, psichico e sociale", 1],
                ["assenza di malattia", 0],
                ["equilibrio tra corpo e mente", 0],
                ["assenza di dolore", 0]
            ],
            "L’OMS definisce la salute come benessere completo, non solo assenza di malattia."
        ),

        new Question("Quali sono le tre dimensioni principali della salute?",
            [
                ["Biologica, chimica, fisiologica", 0],
                ["Fisica, psichica, sociale", 1],
                ["Mentale, sociale, economica", 0],
                ["Fisica, lavorativa, economica", 0]
            ],
            "La salute si fonda su equilibrio tra corpo, mente e ambiente sociale."
        ),

        new Question("L’articolo 32 della Costituzione italiana tutela",
            [
                ["il diritto al lavoro", 0],
                ["la libertà di cura privata", 0],
                ["la salute come diritto fondamentale", 1],
                ["la salubrità dell'ambiente", 0]
            ],
            "La Costituzione garantisce la salute come diritto dell’individuo e interesse collettivo."
        ),

        new Question("Quale modello considera la malattia come alterazione fisiologica?",
            [
                ["Olistico", 0],
                ["Antropologico", 0],
                ["Armonico", 0],
                ["Biomedico", 1]
            ],
            "Il modello biomedico vede la malattia come disequilibrio fisiologico quantitativo e/o qualitativo (DISEASE)."
        ),

        new Question("Il modello olistico della malattia si concentra su",
            [
                ["sofferenza soggettiva", 1],
                ["alterazioni genetiche", 0],
                ["ambiente sociale", 0],
                ["terapie farmacologiche", 0]
            ],
            "Il modello olistico vede la malattia come percezione individuale della sofferenza (ILLNESS)."
        ),

        new Question("Il concetto di SICKNESS è alla base del modello",
            [
                ["ambientale", 0],
                ["armonico", 1],
                ["ecologico", 0],
                ["ospedaliero", 0]
            ],
            "Il modello armonico vede la malattia come alterazione dell'equilibrio tra il corpo umano e l'ambiente esterno (SICKNESS)."
        ),

        new Question("Cosa influisce sullo stato di salute o di malattia?",
            [
                ["Fattori comportamentali", 0],
                ["Fattori genetici", 0],
                ["Fattori ambientali", 0],
                ["Tutte le precedenti", 1]
            ],
            "L'omeostasi può alterarsi per molteplici cause quali fattori comportamentali, genetici e ambientali."
        ),

        new Question("L’educazione sanitaria ha obiettivi",
            [
                ["tecnici, pratici, teorici", 0],
                ["economici, politici, sociali", 0],
                ["cognitivi, affettivi, comportamentali", 1],
                ["spirituali, religiosi, culturali", 0]
            ],
            "L'educazione sanitaria mira a migliorare sapere, atteggiamenti e comportamenti delle persone per prevenire danni alla salute."
        ),

        new Question("Quali sono i principali fondamenti dell'educazione sanitaria?",
            [
                ["Sapere, saper essere, saper fare", 1],
                ["Istruirsi, istruire, diffondere", 0],
                ["Saper far fare, far sapere, sapere di saper fare", 0],
                ["Dire, fare, essere", 0]
            ],
            "Migliorare le conoscenze e le informazioni dell’individuo e del gruppo (sapere), mutare atteggiamenti o valori di un individuo (saper essere), mutare un individuo nelle sue abitudini, nei suoi atteggiamenti e nelle sue abilità (saper fare)."
        ),

        new Question("Per raggiungere gli obiettivi richiesti da una corretta educazione sanitaria, bisogna",
            [
                ["dire e delegare", 0],
                ["informare e formare", 1],
                ["fare e rifare", 0],
                ["dare e avere", 0]
            ],
            "Una corretta educazione sanitaria si basa sull'informare su un corretto mantenimento dell'igiene e sul formare sull'utilizzo delle tecniche migliori."
        ),

        new Question("Quali sono le due modalità di educazione alla salute?",
            [
                ["Individuale e collettiva", 0],
                ["Scolastica e lavorativa", 0],
                ["Formale e informale", 1],
                ["Sanitaria e sociale", 0]
            ],
            "Formale (o esplicita): si realizza ogni volta che la persona insegna ad un altro cosa sapere e come comportarsi per tutelare la sua salute. Esempio: insegnante o operatore sanitario che illustrano ad una classe l’importante del mangiare un tipo di cibo rispetto ad un altro. O il rapporto tra genitore e figlio.\nInformale (o implicita): il messaggio passa attraverso le relazioni quotidiane, discorsi di tutti i giorni, osservazione del comportamento altrui. Esempio: un genitore che non usa cinture di sicurezza, amici che non usano il casco in moto."
        ),

        new Question("Quale approccio nell'educazione sanitaria è il più primitivo?",
            [
                ["Educativo", 0],
                ["Centrato sul destinatario", 0],
                ["Sociale", 0],
                ["Direttivo", 1]
            ],
            "L’approccio direttivo impone regole dall’alto, con posizione asimmetrica."
        ),

        new Question("L'approccio educativo nell'educazione sanitaria",
            [
                ["aiuta l'utente nella comprensione dei problemi di salute", 1],
                ["si usa solo nelle scuole", 0],
                ["non consente autonomia decisionale", 0],
                ["è di tipo direttivo", 0]
            ],
            "L'approccio educativo vuole fornire conoscenze e assicurare la comprensione dei problemi di salute per aiutare l’utente ad analizzare autonomamente i propri comportamenti e a prendere decisioni utili alla sua salute."
        ),

        new Question("L’approccio centrato sul destinatario in educazione sanitaria si basa su",
            [
                ["gerarchia medica", 0],
                ["bisogni e valori dell’utente", 1],
                ["obiettivi istituzionali", 0],
                ["norme legislative", 0]
            ],
            "L’utente sceglie temi e bisogni da affrontare per favorire scelte autonome e consapevoli."
        ),

        new Question("L'approccio volto al cambiamento sociale in educazione sanitaria",
            [
                ["ha come obiettivo il singolo cittadino", 0],
                ["deve essere condotto da amministrativi comunali", 0],
                ["non si rivolge direttamente all'utente", 1],
                ["prevede un approccio agli studenti nelle scuole", 0]
            ],
            "L'approccio sociale cambia l’ambiente per permettere o rendere più agevoli le scelte per una vita più sana."
        ),

        new Question("Qual è la prima fase della programmazione di un intervento di educazione sanitaria?",
            [
                ["Identificazione dei destinatari", 0],
                ["Selezione dei metodi", 0],
                ["Valutazione dei risultati", 0],
                ["Identificazione dei bisogni", 1]
            ],
            "La programmazione si compone di 8 fasi: identificazione dei bisogni, identificazione dei destinatari, definizione delle finalità educative, formulazione degli obiettivi, selezione di metodi e sussidi, definizione delle risorse necessarie, realizzazione dell'intervento e valutazione dei risultati."
        ),

        new Question("L’educazione sanitaria formale si realizza",
            [
                ["con insegnamenti espliciti da parte di operatori", 1],
                ["attraverso osservazione quotidiana", 0],
                ["tramite comportamenti degli amici", 0],
                ["solo in ospedale", 0]
            ],
            "È esplicita, come lezioni o consigli diretti."
        ),

        new Question("L’educazione sanitaria informale avviene",
            [
                ["in classe", 0],
                ["attraverso relazioni quotidiane", 1],
                ["con opuscoli", 0],
                ["con conferenze", 0]
            ],
            "È implicita, basata su esempi e osservazioni."
        ),

        new Question("L’igiene è una branca della medicina che si occupa di",
            [
                ["curare le malattie", 0],
                ["studiare solo i microrganismi patogeni", 0],
                ["promuovere e proteggere la salute", 1],
                ["analizzare esclusivamente i fattori ambientali", 0]
            ],
            "L’igiene mira a promuovere e proteggere la salute, prevenendo le malattie e potenziando i fattori di benessere."
        ),

        new Question("Come vengono classificate le malattie?",
            [
                ["Biologiche e ambientali", 0],
                ["Batteriche e virali", 0],
                ["Organiche e inorganiche", 0],
                ["Infettive e cronico-degenerative", 1]
            ],
            ""
        ),

        new Question("Le malattie cronico-degenerative sono caratterizzate principalmente da",
            [
                ["fattori di rischio", 1],
                ["agenti chimici", 0],
                ["virus ad alta contagiosità", 0],
                ["batteri opportunisti", 0]
            ],
            "Sono legate a fattori di rischio (ereditarie, ambientali, comportamentali) più che ad agenti infettivi."
        ),

        new Question("Quali sono le fasi di una malattia cronico-degenerativa?",
            [
                ["Infezione, cronicizzazione, degenerazione", 0],
                ["Latenza, preclinica, conclamata", 1],
                ["Esposizione, decorso, esito", 0],
                ["Sintomatologia, diagnosi, terapia", 0]
            ],
            "Latenza: assenza di segni clinici di malattia.\nPreclinica: la malattia è in azione, ma il soggetto non avverte sintomi.\nConclamata: ogni trattamento non è risolutivo e si conclude con exitus."
        ),

        new Question("Quali sono le fasi di una malattia infettiva?",
            [
                ["Esposizione, diagnosi, trattamento, esito finale", 0],
                ["Incubazione, contagio, fase acuta, guarigione", 0],
                ["Incubazione, fase prodromica, malattia conclamata, esito finale", 1],
                ["Contaminazione, fase acuta, fase cronica, exitus", 0]
            ],
            "Incubazione: momento in cui il soggetto non accusa sintomi.\nFase prodromica: comparsa di sintomi aspecifici e si può essere fonte di contagio.\nMalattia conclamata: si manifesta la sintomatologia clinica specifica.\nEsito finale: guarigione, morte, cronicizzazione."
        ),

        new Question("Da cosa sono causate le infezioni?",
            [
                ["Agenti chimici che causano danni alle cellule", 0],
                ["Fattori biologici che causano squilibrio nell'omeostasi", 0],
                ["Tossine ambientali generate da microrganismi", 0],
                ["Agenti microbici capaci di moltiplicarsi nell'organismo ospite", 1]
            ],
            ""
        ),

        new Question("Quale tra queste NON è una caratteristica dei microrganismi saprofiti?",
            [
                ["Tossicità", 1],
                ["Virulenza", 0],
                ["Contagiosità", 0],
                ["Invasività", 0]
            ],
            "Caratteristiche dei saprofiti sono l’invasività (capacità di invadere l’organismo), la virulenza (capacità aggressiva del microrganismo), l’infettività (capacità di penetrare, attecchire e moltiplicarsi nell’ospite), la contagiosità (capacità all’esterno di passare da un ospite all’altro)."
        ),

        new Question("I microrganismi commensali",
            [
                ["provocano sempre danni", 0],
                ["vivono sulla pelle e mucose senza danno", 1],
                ["sono sempre patogeni invasivi", 0],
                ["sono responsabili della tubercolosi", 0]
            ],
            "I commensali convivono con l’ospite senza causare danni, come Escherichia Coli."
        ),

        new Question("Quali microrganismi hanno la capacità di aggredire l'ospite moltiplicandosi nei tessuti e causando un danno?",
            [
                ["Commensali", 0],
                ["Saprofagi", 0],
                ["Parassiti", 1],
                ["Saprofiti", 0]
            ],
            "I microrganismi parassiti sono definiti patogeni e provocano lesioni e alterazioni a livello cellulare dei tessuti e organi con meccanismi diversi."
        ),

        new Question("I patogeni non invasivi",
            [
                ["non causano mai danno", 0],
                ["colonizzano l'intero organismo", 0],
                ["non attaccano l'organismo", 0],
                ["possono determinare lesioni localizzate o generali", 1]
            ],
            "I patogeni non invasivi rimangono in un luogo circoscritto dove si moltiplicano. Possono determinare lesioni localizzate (es. rhinovirus) o generali (es. tossina del tetano)."
        ),

        new Question("I patogeni capaci di invadere tutto l'organismo sono chiamati",
            [
                ["invasivi", 1],
                ["sistemici", 0],
                ["ambientali", 0],
                ["immunostimolanti", 0]
            ],
            "I patogeni invasivi sono microrganismi (batteri, virus, funghi) con la capacità di penetrare le difese naturali dell'organismo, moltiplicarsi nei tessuti e raggiungere siti altrimenti sterili, causando malattie gravi come sepsi, meningiti e polmoniti."
        ),

        new Question("I patogeni opportunisti causano infezioni",
            [
                ["sempre", 0],
                ["se l’ospite ha difese immunitarie basse", 1],
                ["quando entrano nel circolo sanguigno", 0],
                ["localizzate e circoscritte", 0]
            ],
            "Sono microrganismi ambientali o commensali che possono dar luogo a infezioni quando c’è un calo delle difese dell’ospite."
        ),

        new Question("La prevenzione ha come obiettivo principale",
            [
                ["curare i malati", 0],
                ["studiare i microrganismi commensali", 0],
                ["preservare l’individuo e proteggere la comunità", 1],
                ["identificare i portatori sani", 0]
            ],
            "Mira a proteggere sia il singolo individuo che la collettività."
        ),

        new Question("Un’infezione latente è",
            [
                ["una malattia cronico-degenerativa", 0],
                ["sintomatica", 0],
                ["sempre contagiosa", 0],
                ["asintomatica", 1]
            ],
            "Il microrganismo è insediato nell’ospite ben nascosto dalle immunità senza alcun segno fino a quando non si ha la rottura dell’equilibrio."
        ),

        new Question("Quale delle seguenti affermazioni sulle infezioni NON è corretta?",
            [
                ["Causano sempre malattia", 1],
                ["Provocano sempre una risposta immunitaria", 0],
                ["Sono influenzate dalla patogenicità del microrganismo", 0],
                ["Nessuna delle precedenti", 0]
            ],
            "Non tutti i soggetti infetti si ammalano. Questo dipende da diversi fattori legati sia al microrganismo (come la sua capacità di causare danno) sia all'ospite (l'efficacia del suo sistema immunitario, malattie croniche, costituzione, età, razza, sesso, abitudini di vita e altro)."
        ),

        new Question("Per sorgente di infezione si intende",
            [
                ["il luogo colonizzato dal patogeno", 0],
                ["un soggetto che trasmette un patogeno", 1],
                ["il paziente che ha contratto la malattia", 0],
                ["i liquidi biologici infetti", 0]
            ],
            "La sorgente d’infezione è il soggetto che trasmette un patogeno ad un altro ospite recettivo e può essere rappresentato da un malato o da un portatore, uomo o animale."
        ),

        new Question("I portatori di microrganismi patogeni si dividono in",
            [
                ["sani e convalescenti", 0],
                ["precoci e cronici", 0],
                ["tutte le precedenti", 1],
                ["nessuna delle precedenti", 0]
            ],
            "Portatori sani: soggetti in cui l’infezione non si manifesta con sintomi clinicamente rilevanti (epatite B).\nPortatori precoci: cominciano ad eliminare l’agente patogeno prima della manifestazione dei sintomi della malattia. (es. rosolia).\nPortatori convalescenti: continuano ad eliminare il microrganismo anche dopo la guarigione per diversi giorni o qualche settimana. (es. rosolia).\n Portatori cronici: l’eliminazione continua per anni o tutta la vita. (es. tifo)."
        ),

        new Question("Un serbatoio di infezione è",
            [
                ["sempre un essere umano con malattia manifesta", 0],
                ["solo l'ambiente esterno colonizzato", 0],
                ["pericoloso soltanto per contatto diretto", 0],
                ["semplicemente l'habitat dove il patogeno vive e si moltiplica", 1]
            ],
            "I serbatoi d’infezione sono il luogo dove i patogeni trovano favorevole vivere e moltiplicarsi. Possono essere l'uomo (serbatoio e sorgente coincidono), animali (ad esempio nel caso della salmonella) e l'ambiente esterno (come ortaggi per la legionella, polvere o gocce d’acqua)."
        ),

        new Question("Si parla di zoonosi quando",
            [
                ["la malattia si trasmette all'uomo dall'animale", 1],
                ["la malattia si manifesta nell'animale", 0],
                ["la malattia si trasmette all'animale dall'uomo", 0],
                ["la malattia si trasmette da un animale a un altro", 0]
            ],
            ""
        ),

        new Question("Quali sono le vie principali di espulsione di microrganismi da una persona infetta?",
            [
                ["Muco ed espettorato", 0],
                ["Escreti e secreti", 1],
                ["Solo sangue", 0],
                ["Saliva, sudore, lacrime", 0]
            ],
            "L'espulsione dei microrganismi può avvenire tramite feci, urine, secrezioni nasali, essudato faringeo, espettorato, secrezioni vaginali, secrezioni purulente. Nel caso del malato l’espulsione può durare anche per tutta la malattia o oltre."
        ),

        new Question("Qual è la via di penetrazione abituale dei microrganismi patogeni?",
            [
                ["Cute", 0],
                ["Aria", 0],
                ["Mucose", 1],
                ["Sangue", 0]
            ],
            "Le mucose sono la via abituale di penetrazione e possono essere sede di infezioni locali o ingresso per infezioni sistemiche."
        ),

        new Question("Un patogeno può penetrare attraverso la cute",
            [
                ["solo se è un virus", 0],
                ["attraverso la sudorazione", 0],
                ["mediante contatto con cute intatta", 0],
                ["tramite soluzione di continuità e inoculazione", 1]
            ],
            "Gli agenti patogeni possono superare la barriera cutanea in caso di ferite o per via diretta tramite inoculazione nel flusso ematico (ad esempio la puntura di un insetto)."
        ),

        new Question("Quali sono le modalità di trasmissione di un microrganismo?",
            [
                ["Per contatto, diretta, indiretta", 1],
                ["Via aerea, via mucosale, via ematica", 0],
                ["Trasmissione verticale e orizzontale", 0],
                ["Trasporto attivo, passivo, intrinseco", 0]
            ],
            "Diretta per contatto: infezioni trasmissibili per via sessuale.\nDiretta: può non avvenire per contatto tra sorgente e recettore, ma ad esempio per via aerea tramite le goccioline di Flügge, espulse con starnuto e tosse.\nIndiretta: avviene per mezzo di veicoli (substrati inerti come acqua, alimenti, aria, oggetti contaminati) e vettori (organismi animali, soprattutto insetti, che mettono in azione un trasporto attivo dei patogeni)."
        ),

        new Question("Quando nella stessa popolazione vi è la presenza di più casi della stessa malattia aventi una comune origine si parla di",
            [
                ["endemia", 0],
                ["epidemia", 1],
                ["malattia sporadica", 0],
                ["pandemia", 0]
            ],
            ""
        ),

        new Question("Quando una malattia si diffonde su larga scala a più paesi e/o continenti si parla di",
            [
                ["malattia sporadica", 0],
                ["epidemia", 0],
                ["pandemia", 1],
                ["endemia", 0]
            ],
            ""
        ),

        new Question("Quando un microrganismo patogeno è stabilmente presente su un territorio e circola nella popolazione provocando casi uniformemente distribuiti nel tempo si parla di",
            [
                ["epidemia", 0],
                ["malattia sporadica", 0],
                ["pandemia", 0],
                ["endemia", 1]
            ],
            ""
        ),

        new Question("Quando una malattia non normalmente presente in una popolazione si manifesta si parla di",
            [
                ["malattia sporadica", 1],
                ["epidemia", 0],
                ["endemia", 0],
                ["pandemia", 0]
            ],
            ""
        ),

        new Question("Come viene chiamato il primo caso che si presenta durante una epidemia?",
            [
                ["Caso secondario", 0],
                ["Caso indice", 1],
                ["Caso esterno", 0],
                ["Caso endemico", 0]
            ],
            "Il primo caso di malattia conclamata che si presenta in una epidemia viene chiamato caso indice. I successivi casi rilevati sono detti casi secondari."
        ),

        new Question("In caso venga rilevata una malattia sporadica",
            [
                ["si attende una maggiore diffusione per poter meglio intervenire", 0],
                ["si inizia subito una terapia antibiotica", 0],
                ["si isola il paziente", 1],
                ["viene raccomandato al paziente di stare all'aperto il più possibile", 0]
            ],
            "Nel caso di una malattia sporadica (non solitamente presente e quindi introdotta dall'esterno) si evita il contagio nella popolazione con l'isolamento."
        ),

        new Question("Chi segnala un caso sospetto o diagnosticato di malattia infettiva secondo procedura?",
            [
                ["Il paziente", 0],
                ["L'ATS di competenza", 0],
                ["Il laboratorio di analisi", 0],
                ["Il medico", 1]
            ],
            "Il medico che diagnostica o sospetta un caso di malattia infettiva deve segnalarlo all’ATS di competenza tramite un sistema di notifica informatizzato SMI (Sorveglianza Malattie Infettive)."
        ),

        new Question("Oltre alla notifica all'ATS, quale azione deve essere intrapresa successivamente per scopi clinici ed epidemiologici in caso di rilevazione di una malattia infettiva?",
            [
                ["Confermare la diagnosi tramite accertamenti di laboratorio", 1],
                ["Visitare il paziente a domicilio entro 24 ore", 0],
                ["Richiedere un secondo parere medico", 0],
                ["Inserire i dati nel fascicolo sanitario elettronico", 0]
            ],
            "In particolare, la tempistica di presa in carico delle segnalazioni prevede: una presa in carico entro 24 ore nel caso di malattie infettive che generano allerta (come antrace, Dengue, TBC) ed entro 7 giorni per le restanti malattie infettive (varicella, morbillo etc.)."
        ),

        new Question("La notifica obbligatoria delle malattie infettive deve essere fatta",
            [
                ["solo se la malattia è grave", 0],
                ["sempre", 1],
                ["solo per le zoonosi", 0],
                ["solo per le malattie croniche", 0]
            ],
            "Alcune malattie richiedono notifica entro 24 ore (es. tubercolosi), altre entro 7 giorni (es. varicella)."
        ),

        new Question("Qual è uno degli obiettivi principali della prevenzione?",
            [
                ["Curare le malattie croniche", 0],
                ["Sviluppare nuovi farmaci", 0],
                ["Proteggere la comunità dalla diffusione di microrganismi patogeni", 1],
                ["Fornire assistenza personalizzata", 0]
            ],
            "La prevenzione ha due obiettivi principali: preservare l'individuo dal contrarre malattie e proteggere la comunità dalla diffusione di microrganismi patogeni."
        ),

        new Question("Gli interventi di prevenzioni si classificano in",
            [
                ["domiciliare, ospedaliera e comunale", 0],
                ["sociale, sanitaria e istituzionale", 0],
                ["individuale, territoriale e nazionale", 0],
                ["primaria, secondaria e terziaria", 1]
            ],
            ""
        ),

        new Question("Quali sono i mezzi più efficaci per diffondere una cultura della prevenzione?",
            [
                ["L'informazione e la formazione sanitaria", 1],
                ["La terapia e la riabilitazione", 0],
                ["La contumacia e l'isolamento", 0],
                ["Lo screening e la diagnosi precoce", 0]
            ],
            "Formare e informare sono alla base per una corretta educazione sanitaria."
        ),

        new Question("La prevenzione primaria ha come obiettivo principale quello di",
            [
                ["curare i sintomi delle malattie", 0],
                ["impedire l'insorgenza della malattia", 1],
                ["limitare gli esiti invalidanti", 0],
                ["eseguire diagnosi precoci", 0]
            ],
            "La prevenzione primaria ha come obiettivi l'inattivazione delle sorgenti e dei serbatoi di microrganismi patogeni, l'interruzione delle catene di trasmissione e il suscitare resistenza specifica all’infezione nella popolazione."
        ),

        new Question("Quale dei seguenti interventi è applicato nella prevenzione secondaria?",
            [
                ["Vaccinazioni", 0],
                ["Indagini colturali", 0],
                ["Screening", 1],
                ["Sorveglianza sanitaria", 0]
            ],
            "La prevenzione secondaria ha lo scopo di ostacolare l'aumento del numero dei casi di una certa malattia nella popolazione. L'intervento fondamentale è perciò la diagnosi precoce."
        ),

        new Question("Il monitoraggio delle malattie cronico-degenerative al fine di limitare la comparsa di complicanze è l'obiettivo della",
            [
                ["prevenzione secondaria", 0],
                ["diagnosi", 0],
                ["prevenzione primaria", 0],
                ["prevenzione terziaria", 1]
            ],
            "La prevenzione terziaria si affida a strumenti quali la terapia, l'assistenza e la riabilitazione per ridurre al minimo la comparsa di complicanze funzionali ed esiti invalidanti nel caso di malattia non guaribile."
        ),

        new Question("La sorveglianza sanitaria implica",
            [
                ["l'obbligo di sottoporsi a controlli periodici dell'autorità sanitaria", 1],
                ["l'obbligo di rimanere in un determinato luogo", 0],
                ["la distruzione dei microbi patogeni nell'ambiente", 0],
                ["la separazione del soggetto da tutte le altre persone", 0]
            ],
            ""
        ),

        new Question("La diagnosi delle malattie infettive può essere",
            [
                ["silente o manifesta", 0],
                ["diretta o indiretta", 1],
                ["primaria, secondaria o terziaria", 0],
                ["sintomatica o asintomatica", 0]
            ],
            "Diagnosi diretta: mira ad identificare gli agenti microbici tramite osservazioni al microscopio ottico, a fluorescenza o elettronico, indagini colturali (copro-urocoltura, espettorato ecc.)\nDiagnosi indiretta: metodiche che evidenziano una risposta immunologica, come la ricerca di antigeni delle diverse classi e nei liquidi biologici o i test sierologici (Ig)."
        ),

        new Question("Le goccioline di Flügge sono responsabili di",
            [
                ["trasmissione indiretta tramite acqua", 0],
                ["trasmissione tramite vettori passivi", 0],
                ["trasmissione diretta per via aerea", 1],
                ["trasmissione tramite alimenti", 0]
            ],
            "Sono goccioline espulse con tosse o starnuto che trasmettono direttamente i patogeni (droplets)."
        ),

        new Question("Quando si parla di infezione ospedaliera?",
            [
                ["Quando è presente al momento del ricovero", 0],
                ["Quando compare entro 24 ore dal ricovero", 0],
                ["Solo se riguarda il sito chirurgico", 0],
                ["Quando compare dopo 48 ore dal ricovero o dalla dimissione", 1]
            ],
            "Le infezioni ospedaliere si manifestano dopo 48 ore dal ricovero o dalla dimissione."
        ),

        new Question("Qual è un fattore che favorisce l’aumento delle infezioni ospedaliere?",
            [
                ["Terapie immunosoppressive", 1],
                ["Uso ridotto di antibiotici", 0],
                ["Giovane età dei pazienti", 0],
                ["Ambienti ben sanificati", 0]
            ],
            "L'uso di metodiche diagnostiche invasive, l'invecchiamento della popolazione, l'abuso di antibiotici, l'aumentata ospedalizzazione, terapie immunosoppressive, un ambiente ospedaliero non adeguatamente strutturato e un personale sanitario non adeguatamente preparato sono fattori di rischio per infezioni ospedaliere."
        ),

        new Question("Le infezioni ospedaliere possono essere di origine",
            [
                ["intra ed extra ospedaliera", 0],
                ["endogena primaria e secondaria, esogena", 1],
                ["animata (da persone) e inanimata (da oggetti)", 0],
                ["batterica, virale e fungina", 0]
            ],
            "Origine endogena primaria: ha origine dalla flora batterica già presente nel paziente.\nOrigine endogena secondaria: microrganismo proveniente da un'altra zona del corpo del paziente.\nOrigine esogena: microrganismi provenienti dall'esterno."
        ),

        new Question("Quale modalità di trasmissione è la più frequente in ambito sanitario?",
            [
                ["Via aerea", 0],
                ["Vettori", 0],
                ["Contatto", 1],
                ["Veicoli", 0]
            ],
            "La trasmissione per contatto, soprattutto tramite le mani del personale, è la più comune."
        ),

        new Question("Le modalità di trasmissione di una infezione ospedaliera sono",
            [
                ["contatto, contaminazione, liquidi biologici, droplets", 0],
                ["trasporto attivo, trasporto passivo, via aerea, via diretta", 0],
                ["diretta, indiretta, primaria, secondaria", 0],
                ["contatto, via aerea, veicoli, vettori", 1]
            ],
            ""
        ),

        new Question("Il droplet è considerato trasmissione da contatto perché",
            [
                ["richiede distanza limitata tra soggetti", 1],
                ["è invisibile", 0],
                ["rimane sospeso a lungo nell’aria", 0],
                ["è trasmesso da vettori", 0]
            ],
            "Le goccioline respiratorie hanno bisogno di vicinanza tra persone (distanza inferiore a 1 metro) per poter essere intercettate."
        ),

        new Question("Quale percentuale di infezioni ospedaliere è prevenibile con sorveglianza selettiva?",
            [
                ["10%", 0],
                ["20%", 1],
                ["50%", 0],
                ["70%", 0]
            ],
            "Circa il 20% delle infezioni nosocomiali può essere prevenuto."
        ),

        new Question("Quale anello della catena epidemiologica è più semplice da controllare?",
            [
                ["Agente infettivo", 0],
                ["Ospite suscettibile", 0],
                ["Vie di trasmissione", 1],
                ["Porta d’ingresso", 0]
            ],
            "Le vie di trasmissione si controllano con igiene delle mani, disinfezione e sterilizzazione."
        ),

        new Question("Quale percentuale di pazienti ricoverati nei Paesi ad alto reddito contrae un’infezione ospedaliera?",
            [
                ["3%", 0],
                ["7%", 1],
                ["15%", 0],
                ["20%", 0],
            ],
            "Circa 7 su 100 pazienti ricoverati contraggono un’infezione ospedaliera."
        ),

        new Question("Quale misura è fondamentale per prevenire infezioni urinarie da catetere?",
            [
                ["Posizionare la sacca di raccolta sotto il livello della vescica", 1],
                ["Irrigazioni frequenti con antibiotici", 0],
                ["Evitare lavaggio delle mani", 0],
                ["Sostituire i cateteri ogni giorno", 0]
            ],
            "La posizione corretta della sacca evita il reflusso e riduce il rischio di infezione."
        ),

        new Question("Quale inclinazione del busto è raccomandata per prevenire infezioni respiratorie?",
            [
                ["10°", 0],
                ["20°", 0],
                ["30-45°", 1],
                ["90°", 0]
            ],
            "Posizionare il busto a 30-45° (posizione di Fowler) riduce il rischio di polmonite da aspirazione."
        ),

        new Question("Quale percentuale di microrganismi isolati nelle ICA è resistente ad almeno una classe di antibiotici?",
            [
                ["50%", 0],
                ["25%", 0],
                ["10%", 1],
                ["5%", 0]
            ],
            "Secondo ECDC, circa il 10% dei microrganismi coinvolti nelle infezioni correlate all'assistenza ha sviluppato una resistenza ad una categoria di antibiotici."
        ),

        new Question("Con il termine microclima si intendono i parametri ambientali che influenzano",
            [
                ["esclusivamente l'attività metabolica di base del soggetto", 0],
                ["solo la sudorazione del soggetto", 0],
                ["unicamente la contaminazione batterica dell'aria", 0],
                ["gli scambi termici tra il soggetto e l’ambiente", 1]
            ],
            ""
        ),

        new Question("La sudorazione è un meccanismo fisiologico di scambio termico che permette la dispersione di calore attraverso",
            [
                ["l’evaporazione", 1],
                ["la respirazione", 0],
                ["l'irraggiamento", 0],
                ["la conduzione", 0]
            ],
            ""
        ),

        new Question("L’impianto di condizionamento, pur garantendo comfort termico, può essere causa di problemi legati a",
            [
                ["esclusivamente al peso del paziente", 0],
                ["contaminazione batterica, inquinamento idrico, ionizzazione dell'aria", 1],
                ["temperature corporee interne costanti", 0],
                ["scambi termici per irraggiamento inefficaci", 0]
            ],
            ""
        ),

        new Question("Per prevenire i problemi legati agli impianti di condizionamento in ambiente sanitario, si deve eseguire",
            [
                ["un aumento dell'umidità ambientale", 0],
                ["la disattivazione completa del sistema", 0],
                ["una controllata manutenzione degli impianti e dei sistemi di filtraggio e deumidificazione", 1],
                ["la pulizia superficiale delle unità interne", 0]
            ],
            ""
        ),

        new Question("Cos’è l’isolamento in ambito sanitario?",
            [
                ["Separazione dei pazienti per motivi amministrativi", 0],
                ["Uso esclusivo di dispositivi di protezione individuale", 0],
                ["Limitazione dei visitatori per motivi organizzativi", 0],
                ["Separazione di un soggetto infetto per prevenire la trasmissione", 1]
            ],
            "L’isolamento è la separazione di un soggetto infetto per prevenire la diffusione dell’agente patogeno ed è una delle procedure principali per prevenire e controllare le malattie infettive."
        ),

        new Question("Quale tra questi NON è una tipologia di isolamento?",
            [
                ["In ambito scolastico", 1],
                ["A domicilio", 0],
                ["In comunità", 0],
                ["In ambiente sanitario", 0]
            ],
            "L’isolamento può avvenire in: comunità (quando il soggetto viene confinato in un determinato luogo e avvicinato solo dal personale d’assistenza), domicilio (quando il paziente viene allontanato dalla comunità e avvicinato solo dai familiari), ambiente sanitario (paziente in ospedale)."
        ),

        new Question("Le precauzioni universali introdotte con la diffusione dell’HIV si basano su",
            [
                ["segregazione fisica dei pazienti infetti", 0],
                ["isolamento dei liquidi biologici di tutti i pazienti", 1],
                ["vaccinazione obbligatoria degli operatori", 0],
                ["uso esclusivo di stanze a pressione negativa", 0]
            ],
            "Con l’HIV si passa dal concetto di isolamento fisico del paziente a quello di precauzioni mirate ad evitare il contatto con liquidi biologici infetti."
        ),

        new Question("Le precauzioni standard si applicano",
            [
                ["solo ai pazienti con infezioni respiratorie", 0],
                ["solo ai pazienti immunocompromessi", 0],
                ["a tutti i pazienti ricoverati", 1],
                ["ai pazienti con patogeni multiresistenti", 0]
            ],
            "Le precauzioni standard sono misure che vanno applicate a tutti i pazienti che ricevono assistenza in ospedale e partono dal presupposto che tutti i liquidi biologici siano potenzialmente infetti."
        ),

        new Question("Quale dei seguenti non rientra tra le precauzioni standard da adottare nel contatto con un paziente?",
            [
                ["Lavaggio mani", 0],
                ["Eliminazione di rifiuti biologici", 0],
                ["Uso di DPI", 0],
                ["Distanza di sicurezza", 1]
            ],
            "Lavaggio mani, uso di guanti, di camici, maschere, occhiali, schermi protettivi, collocazione del paziente, strumentario e materiale d’assistenza, biancheria, eliminazione di aghi e di taglienti, e rifiuti biologici sono sistemi barriera volti a salvaguardare il paziente e l'operatore."
        ),

        new Question("Cosa sono le precauzioni aggiuntive?",
            [
                ["Precauzioni che si basano sulla modalità di contagio", 1],
                ["Precauzioni redatte dall'ospedale e che variano in base alla struttura", 0],
                ["Precauzioni individuali che l'operatore malato adotta per evitare il contagio", 0],
                ["Precauzioni entrate in vigore con una Legge Regionale sul territorio", 0]
            ],
            "Sono precauzioni da adottare in base alla modalità di trasmissione del patogeno, ad esempio l'uso di mascherine in caso di patogeni a trasmissione aerea o il mantenimento di almeno un metro di distanza per patogeni trasmessi tramite droplets."
        ),

        new Question("Quale tipo di flora batterica sulle mani è facilmente eliminabile con il lavaggio?",
            [
                ["Flora residente", 0],
                ["Flora transitoria", 1],
                ["Flora fungina", 0],
                ["Flora permanente", 0]
            ],
            "La flora transitoria colonizza gli strati superficiali ed è facilmente rimossa con il lavaggio."
        ),

        new Question("Quale tipo di lavaggio delle mani dura circa 20-30 secondi?",
            [
                ["Lavaggio antisettico", 0],
                ["Lavaggio chirurgico", 0],
                ["Lavaggio con soluzione alcolica", 1],
                ["Lavaggio sociale", 0]
            ],
            "Il lavaggio con soluzione alcolica è quello routinario, indicato per la maggior parte delle attività dell’OSS."
        ),

        new Question("Quale lavaggio delle mani è indicato per procedure assistenziali specifiche?",
            [
                ["Lavaggio sociale", 0],
                ["Lavaggio chirurgico", 0],
                ["Frizione alcolica", 0],
                ["Lavaggio antisettico", 1]
            ],
            "Il lavaggio antisettico dura 40-60 secondi ed è indicato per procedure che richiedono maggiore asepsi."
        ),

        new Question("Quale flora batterica è costituita da microrganismi residenti sotto lo strato corneo?",
            [
                ["Flora residente", 1],
                ["Flora transitoria", 0],
                ["Flora permanente", 0],
                ["Flora fungina", 0]
            ],
            "La flora residente è stabile e difficilmente eliminabile, con funzione protettiva."
        ),

        new Question("Quale condizione rende inefficace la frizione alcolica per l’igiene delle mani?",
            [
                ["Mani asciutte", 0],
                ["Mani visibilmente sporche o contaminate", 1],
                ["Uso di guanti sterili", 0],
                ["Contatto con superfici", 0]
            ],
            "La frizione alcolica non è indicata se le mani sono sporche o contaminate da fluidi biologici."
        ),

        new Question("Quale dispositivo è necessario per chiudere il rubinetto dopo il lavaggio delle mani?",
            [
                ["Guanti monouso", 0],
                ["Camice sterile", 0],
                ["Salvietta monouso", 1],
                ["Mascherina chirurgica", 0]
            ],
            "La salvietta monouso evita la ricontaminazione delle mani pulite."
        ),

        new Question("Quale DPI è indicato per proteggere da schizzi di liquidi organici durante manovre invasive?",
            [
                ["Maschera chirurgica", 0],
                ["Guanti in vinile", 0],
                ["Camice sterile", 0],
                ["Occhiali protettivi", 1]
            ],
            "Gli occhiali proteggono da schizzi e devono garantire buona visione e comodità."
        ),

        new Question("Quale funzione ha la divisa sanitaria?",
            [
                ["Rappresentare l’azienda", 0],
                ["Distinguere l’identità professionale", 0],
                ["Proteggere il dipendente", 0],
                ["Tutte le precedenti", 1]
            ],
            "La divisa ha funzioni di riconoscimento, protezione e rappresentanza."
        )

    ],

  getFeedback(score) {
    if (score >= 0 && score <= 20) return "/20";
    return "";
  }
};
