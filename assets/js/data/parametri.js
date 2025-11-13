import { Question } from "../models/Question.js";

export const ParametriTest = {
  questions: [

        new Question("Quali tra queste affermazioni sui parametri vitali NON è corretta?",
            [
                ["Permettono di diagnosticare una malattia", 1],
                ["Indicano il grado di salute di una persona", 0],
                ["Una loro alterazione segnala che qualcosa nell’organismo non funziona", 0],
                ["Consentono di valutare l’evoluzione dello stato clinico", 0]
            ],
            "Non basta un parametro vitale alterato per la diagnosi di una malattia, ma può certamente essere un punto di partenza per esami più approfonditi."
        ),

        new Question("Qual è lo scopo principale della rilevazione dei parametri vitali?",
            [
                ["Valutare la dieta del paziente", 0],
                ["Monitorare lo stato di salute", 1],
                ["Misurare la forza muscolare", 0],
                ["Controllare il livello di stress", 0]
            ],
            "I parametri vitali indicano lo stato di salute generale di una persona."
        ),

        new Question("Un parametro vitale alterato",
            [
                ["necessita di un intervento chirurgico", 0],
                ["è indice di una malattia cardiaca", 0],
                ["suggerisce che qualcosa non funziona nell'organismo", 1],
                ["è da considerare solo in caso di infezione", 0]
            ],
            "L'alterazione di uno o più parametri vitali è la prima reazione dell'organismo in caso di uno sbilanciamento dell'omeostasi."
        ),

        new Question("Quale tra questi NON è un parametro vitale?",
            [
                ["Temperatura corporea", 0],
                ["Frequenza respiratoria", 0],
                ["Glicemia", 0],
                ["Poliuria", 1]
            ],
            "La poliuria (minzione frequente e/o eccessiva) è spesso un sintomo di accompagnamento di altre alterazioni in atto."
        ),

        new Question("La rilevazione dei parametri vitali deve essere",
            [
                ["eseguita con tecniche corrette", 1],
                ["eseguita solo dal medico", 0],
                ["eseguita una volta al giorno", 0],
                ["eseguita solo in emergenza", 0]
            ],
            "La corretta esecuzione delle tecniche di acquisizione dei parametri vitali è essenziale per non incorrere in errori durante la rilevazione."
        ),

        new Question("In caso di valore alterato, cosa si deve fare?",
            [
                ["Ignorarlo", 0],
                ["Registrarlo e riferirlo al personale infermieristico", 1],
                ["Aumentare la dose di farmaci somministrati", 0],
                ["Aspettare che si normalizzi", 0]
            ],
            "In caso di valori alterati bisogna informare subito l'infermiere o il medico di riferimento senza prendere iniziative."
        ),

        new Question("Quale parametro indica la quantità di ossigeno nel sangue?",
            [
                ["FC", 0],
                ["PA", 0],
                ["SPO2", 1],
                ["DXT", 0]
            ],
            "SPO2 è la sigla di saturazione periferica di ossigeno."
        ),

        new Question("Quale parametro indica il numero di contrazioni cardiache al minuto?",
            [
                ["HGT", 0],
                ["FR", 0],
                ["TC", 0],
                ["FC", 1]
            ],
            "FC è la sigla di frequenza cardiaca."
        ),

        new Question("Quale parametro indica il numero di atti respiratori al minuto?",
            [
                ["FR", 1],
                ["PA", 0],
                ["TC", 0],
                ["SPO2", 0]
            ],
            "FR è la sigla di frequenza respiratoria."
        ),

        new Question("Quale parametro indica la presenza o meno di febbre?",
            [
                ["FR", 0],
                ["TC", 1],
                ["PA", 0],
                ["Dolore", 0]
            ],
            "TC è la sigla di temperatura corporea."
        ),

        new Question("Quale parametro indica i livelli pressori di una persona?",
            [
                ["DXT", 0],
                ["Dolore", 0],
                ["PA", 1],
                ["FC", 0]
            ],
            "PA è la sigla di pressione arteriosa."
        ),

        new Question("Quale parametro indica i livelli di zuccheri nel sangue?",
            [
                ["SPO2", 0],
                ["TC", 0],
                ["FR", 0],
                ["HGT", 1]
            ],
            "HGT (HemoGlucoTest) o DXT (DestroStix) è il test per la valutazione della glicemia."
        ),

        new Question("I segni e sintomi riferiti dal paziente",
            [
                ["vanno monitorati nel tempo", 1],
                ["sono sempre oggettivi", 0],
                ["vanno ignorati se non confermati da esami", 0],
                ["non sono rilevanti", 0]
            ],
            "Chiedere al paziente di riferire l'andamento soggettivo di segni e sintomi è essenziale per valutare globalmente l'efficacia di una terapia (ad esempio il livello di dolore percepito in caso di somministrazione di analgesici)."
        ),

        new Question("Il dolore è considerato",
            [
                ["un sintomo di malattia", 0],
                ["un parametro vitale", 1],
                ["un segno clinico", 0],
                ["un effetto collaterale", 0]
            ],
            "Il dolore è utile per valutare il grato di salute di un paziente ed è pertanto considerabile come parametro vitale a tutti gli effetti."
        ),

        new Question("Il peso corporeo è utile per",
            [
                ["valutare la pressione arteriosa", 0],
                ["misurare la glicemia", 0],
                ["calcolare il dosaggio dei farmaci", 1],
                ["stimare la temperatura", 0]
            ],
            "Il peso di una persona influisce sulla distribuzione e sul metabolismo dei farmaci ed è perciò fondamentale che la quantità di farmaco somministrata sia rapportata al peso corporeo."
        ),

        new Question("In caso di emergenza i parametri vitali",
            [
                ["non vanno rilevati", 0],
                ["vanno rilevati solo se richiesto", 0],
                ["vanno rilevato solo dal medico", 0],
                ["vanno rilevati immediatamente", 1]
            ],
            "La rilevazione dei parametri vitali è il primo step fondamentale per la valutazione iniziale delle condizioni del paziente."
        ),

        new Question("I parametri vitali vanno registrati",
            [
                ["sempre, anche se normali", 1],
                ["solo se alterati", 0],
                ["solo su richiesta del medico o dell'infermiere", 0],
                ["solo se il paziente ha subito un intervento chirurgico", 0]
            ],
            "I parametri vitali vanno periodicamente rilevati e devono sempre essere registrati sulla cartella clinica del paziente."
        ),

        new Question("Cosa si utilizza per rilevare la PA?",
            [
                ["Saturimetro", 0],
                ["Sfigmomanometro", 1],
                ["Glucometro", 0],
                ["Termometro", 0]
            ],
            ""
        ),

        new Question("Come si rileva la FC di un paziente con polso irregolare?",
            [
                ["Si contano i battiti per 10 secondi, poi si moltiplicano per 3", 0],
                ["Si contano i battiti per 30 secondi, poi si moltiplica per 2", 0],
                ["Si contano i battiti per 60 secondi", 1],
                ["Si contano i battiti fino alla prima pulsazione anomala", 0]
            ],
            "In caso di polso irregolare, la FC deve essere rilevata contando i battiti percepiti per un minuto intero. In caso di polso regolare, si può raddoppiare il numero di battiti contati in 30 secondi."
        ),

        new Question("Quale delle seguenti affermazioni sulla rilevazione della glicemia è corretta?",
            [
                ["Deve essere rilevata esclusivamente dopo i pasti", 0],
                ["Deve essere rilevata solamente al mattino", 0],
                ["Si possono usare dispositivi personali del paziente", 0],
                ["Deve essere rilevata sulla seconda goccia di sangue prelevata", 1]
            ],
            "Quando si punge il dito del paziente per la rilevazione della glicemia, la prima goccia di sangue deve essere rimossa con una garza e solo la seconda  può essere depositata sullo striscio del HGT/DXT."
        ),

        new Question("Qual è la temperatura media del nucleo corporeo interno?",
            [
                ["35.0 °C", 0],
                ["36.0 °C", 0],
                ["37.0 °C", 1],
                ["38.0 °C", 0]
            ],
            "La temperatura corporea interna è circa 37.0 °C, mentre cala a circa 36.5 °C sulla zona esterna (cute, tronco, arti)."
        ),

        new Question("Quale meccanismo produce calore corporeo?",
            [
                ["Termodispersione", 0],
                ["Termogenesi", 1],
                ["Evaporazione", 0],
                ["Conduzione", 0]
            ],
            "Termo = calore	Genesi = produzione"
        ),

        new Question("Quale tra questi è un meccanismo fisiologico di produzione del calore?",
            [
                ["Brividi", 1],
                ["Sudorazione", 0],
                ["Vasodilatazione", 0],
                ["Evaporazione", 0]
            ],
            "Il brivido consiste nella rapida e involontaria contrazione della muscolatura striata. Ciò permette al corpo di sviluppare calore."
        ),

        new Question("Quale tra questi è un comportamento che favorisce la produzione di calore?",
            [
                ["Rimuovere gli abiti", 0],
                ["Bere liquidi freddi", 0],
                ["Fare una doccia fredda", 0],
                ["Spostarsi in un ambiente più caldo", 1]
            ],
            "Il passaggio in un ambiente caldo aiuta ad aumentare la TC."
        ),

        new Question("Quale tra questi è un meccanismo fisiologico di perdita di calore?",
            [
                ["Sudorazione", 1],
                ["Vasocostrizione", 0],
                ["Aumento dell'appetito", 0],
                ["Brividi", 0]
            ],
            "Con la sudorazione il nostro corpo espelle liquidi attraverso la pelle e consente alla cute di raffreddarsi."
        ),

        new Question("Quale strumento misura la temperatura corporea?",
            [
                ["Barometro", 0],
                ["Termometro clinico", 1],
                ["Fonendoscopio", 0],
                ["Sfigmomanometro", 0]
            ],
            ""
        ),

        new Question("Quale valore di TC indica ipotermia?",
            [
                [">38.0 °C", 0],
                ["Tra 37.0 °C e 38.0 °C", 0],
                ["<35.0 °C", 1],
                ["Tra 35.0 °C e 37.0 °C", 0]
            ],
            ""
        ),

        new Question("Quale sintomo è tipico della fase di insorgenza della febbre?",
            [
                ["Cute calda", 0],
                ["Allucinazioni", 0],
                ["Sonnolenza", 0],
                ["Brividi", 1]
            ],
            "La fase di insorgenza della febbre si caratterizza per cute pallida e fredda, brividi, orripilazione, astenia, cefalea, tachicardia, tachipnea."
        ),

        new Question("Quale dei seguenti sintomi NON è tipico della fase febbrile?",
            [
                ["Sudorazione intensa", 1],
                ["Cute arrossata e calda", 0],
                ["Astenia", 0],
                ["Sonnolenza", 0]
            ],
            "La sudorazione intensa causa un abbassamento della temperatura ed è tipica della fase di defervescenza."
        ),

        new Question("Cosa accade durante la fase di defervescenza?",
            [
                ["Compare sintomatologia dolorosa", 0],
                ["Vi è una intensa sudorazione", 1],
                ["La temperatura corporea si alza", 0],
                ["Si manifestano deliri e allucinazioni", 0]
            ],
            "La fase di defervescenza è la coda della sintomatologia febbrile e l'intensa sudorazione favorisce l'abbassamento della TC."
        ),

        new Question("Quale delle seguenti NON è una sede per la rilevazione della TC?",
            [
                ["Timpanica", 0],
                ["Ascellare", 0],
                ["Ombelicale", 1],
                ["Rettale", 0]
            ],
            "La TC può essere rilevata a livello timpanico, orale, ascellare o rettale utilizzando i termometri idonei."
        ),

        new Question("Quale valore di TC è indice di febbricola o febbre leggera?",
            [
                [">38.0 °C", 0],
                ["Tra 35.0 °C e 37.0 °C", 0],
                ["<35.0 °C", 0],
                ["Tra 37.0 °C e 38.0 °C", 1]
            ],
            ""
        ),

        new Question("Quale tra questi è un intervento in caso di ipotermia?",
            [
                ["Applicazione di termoforo", 1],
                ["Spugnature con acqua fredda", 0],
                ["Rimozione degli abiti", 0],
                ["Somministrazione di liquidi freddi", 0]
            ],
            "In caso di ipotermia è importante tenere il paziente al caldo vestendolo con abiti o coperte pesanti, aumentando la temperatura della stanza (quando possibile) o mediante l'uso di dispositivi di calore."
        ),

        new Question("Quale tra questi è un effetto della vasocostrizione?",
            [
                ["Rossore cutaneo", 0],
                ["Pallore cutaneo", 1],
                ["Sudorazione", 0],
                ["Dolore", 0]
            ],
            "Il restringimento del calibro dei capillari riduce l'afflusso di sangue nei distretti periferici causando pallore."
        ),

        new Question("La descrizione del tipo di respirazione di un individuo deve comprendere",
            [
                ["frequenza, rumori respiratori, cadenza", 0],
                ["espansione toracica, espansione addominale, escursione del diaframma", 0],
                ["frequenza, profondità, ritmo, sforzo", 1],
                ["dolore alla respirazione, fischi, umidità del soffio, ritmicità", 0]
            ],
            ""
        ),

        new Question("Cos'è la frequenza respiratoria?",
            [
                ["Il numero di atti respiratori nell'arco della giornata", 0],
                ["La velocità di inspirazione ed espirazione", 0],
                ["La differenza di volume tra aria inspirata e aria espirata", 0],
                ["Il numero di atti respiratori nell'arco di un minuto", 1]
            ],
            ""
        ),

        new Question("Cosa si intende per ritmo respiratorio?",
            [
                ["La cadenza dei movimenti alternati di inspirazione ed espirazione", 1],
                ["Il numero di atti respiratori nell'arco di un minuto", 0],
                ["Lo sforzo che l'individuo compie durante il respiro", 0],
                ["La differenza tra massima e minima espansione toracica durante il respiro", 0]
            ],
            ""
        ),

        new Question("Cos'è la profondità del respiro?",
            [
                ["La quantità di aria maggiore possibile che un soggetto riesce ad inspirare", 0],
                ["La quantità di aria che viene inspirata ed espirata durante la respirazione", 1],
                ["La presenza di rumori respiratori cupi, bassi e gravi", 0],
                ["I suoni polmonari auscultati con l'ausilio del fonendoscopio", 0]
            ],
            ""
        ),

        new Question("Cosa si intende per sforzo respiratorio?",
            [
                ["Il dolore che il paziente riferisce alla respirazione", 0],
                ["La presenza di suoni acuti in fase di respirazione", 0],
                ["La fatica eseguita dal paziente per compiere un atto respiratorio", 1],
                ["L'aumento della frequenza respiratoria durante un'attività fisica intensa", 0]
            ],
            ""
        ),

        new Question("Qual è la caratteristica di un atto respiratorio in condizioni fisiologiche?",
            [
                ["Regolarità", 0],
                ["Ritmicità", 0],
                ["Equidistanza", 0],
                ["Tutte le risposte precedenti", 1]
            ],
            "In condizioni fisiologiche, la frequenza respiratoria non varia significativamente da un minuto all'altro (regolarità), mantiene una cadenza costante (ritmicità) e i respiri sono uniformemente distanziati (equidistanza)."
        ),

        new Question("La frequenza respiratoria è",
            [
                ["inversamente proporzionale all'età", 1],
                ["direttamente proporzionale all'età", 0],
                ["invariata con l'età", 0],
                ["estremamente varia da individuo a individuo", 0]
            ],
            "Da un punto di vista quantitativo possiamo affermare che la FR diminuisce con l'aumentare dell'età."
        ),

        new Question("Qual è la funzione principale della respirazione?",
            [
                ["Favorire la motilità del tratto oro-faringeo", 0],
                ["Garantire lo scambio di ossigeno e anidride carbonica fra l'aria atmosferica e il sangue", 1],
                ["Espellere microbi dalle vie aeree", 0],
                ["Regolare la temperatura corporea", 0]
            ],
            "L'aria che entra nei polmoni raggiunge gli alveoli dove avviene lo scambio di gas con il flusso sanguigno."
        ),

        new Question("Il processo della respirazione",
            [
                ["è strettamente volontario", 0],
                ["non subisce influenze dallo stato di salute", 0],
                ["è influenzato da numerosi fattori", 1],
                ["si altera solo in caso di malattia", 0]
            ],
            "Posizione del corpo, esercizio fisico, età, gravidanza, peso corporeo, stress e sesso sono tutti fattori che influenzano il processo respiratorio."
        ),

        new Question("Per rilevare correttamente la frequenza respiratoria NON è necessario",
            [
                ["contare gli atti respiratori in un minuto", 0],
                ["osservare le escursioni toraciche", 0],
                ["verificare la regolarità del respiro", 0],
                ["chiedere al paziente di respirare con la bocca", 1]
            ],
            ""
        ),

        new Question("Una FR di 12-18 atti respiratori al minuto è definita",
            [
                ["eupnea", 1],
                ["tachipnea", 0],
                ["polipnea", 0],
                ["bradipnea", 0]
            ],
            "Eupnea è respirazione normale fisiologica."
        ),

        new Question("Una FR superiore ai 24 atti respiratori al minuto è definita",
            [
                ["polipnea", 0],
                ["tachipnea", 1],
                ["eupnea", 0],
                ["apnea", 0]
            ],
            "Tachipnea è frequenza respiratoria aumentata."
        ),

        new Question("Una FR inferiore ai 10 atti respiratori al minuto e definita",
            [
                ["tachipnea", 0],
                ["polipnea", 0],
                ["bradipnea", 1],
                ["eupnea", 0]
            ],
            "Bradipnea è una riduzione della frequenza del respiro."
        ),

        new Question("Un'assenza di atti respiratori è definita",
            [
                ["polipnea", 0],
                ["eupnea", 0],
                ["bradipnea", 0],
                ["apnea", 1]
            ],
            ""
        ),

        new Question("Cosa misura un pulsossimetro?",
            [
                ["La saturazione emoglobinica arteriosa", 1],
                ["La frequenza respiratoria", 0],
                ["Le pulsazioni cardiache", 0],
                ["La glicemia", 0]
            ],
            "Il pulsossimetro o saturimetro esprime in percentuale quanta emoglobina è saturata con l'ossigeno."
        ),

        new Question("Quali sono i normali valori fisiologici di SPO2?",
            [
                ["Tra 85% e 95%", 0],
                ["Tra 95% e 100%", 1],
                [">100%", 0],
                ["Non è possibile specificare un range poiché ogni individuo ha variabilità", 0]
            ],
            "Il valore normale di SPO2 ovvero la percentuale di emoglobina legata all'ossigeno nel circolo arterioso è maggiore del 95%."
        ),

        new Question("Qual è la principale funzione del muco?",
            [
                ["Idratare gli organi", 0],
                ["Aumentare la viscosità", 0],
                ["Invischiare piccole particelle", 1],
                ["Ridurre stati infiammatori", 0]
            ],
            "Il muco ingloba particelle e microbi introdotti involontariamente durante la respirazione ed impedisce che questi raggiungano le vie più interne dell'albero respiratorio."
        ),

        new Question("Per agevolare l'espettorazione il personale che svolge assistenza clinica NON deve",
            [
                ["controllare che i pazienti cambino spesso posizione", 0],
                ["mobilizzare i pazienti dipendenti o parzialmente autosufficienti", 0],
                ["sollecitare i pazienti con secrezioni bronchiali abbondanti a tossire", 0],
                ["limitare l'ingestione di liquidi per addensare il muco", 1]
            ],
            "La mobilizzazione favorisce lo spostamento del muco all'interno delle vie respiratorie, agevolando la tosse e quindi l'espettorazione. La stasi e la compattazione del muco nei polmoni può favorire la colonizzazione e l'insorgenza di polmoniti."
        ),

        new Question("La dispnea",
            [
                ["può comparire improvvisamente durante una respirazione normale", 1],
                ["non si presenta mai a riposo", 0],
                ["è indice di un eccessivo tasso di ossigeno nel sangue", 0],
                ["affligge soltanto persone anziane", 0]
            ],
            "La dispnea o fame d'aria è la difficolta nel prendere aria e può essere causato da alto tasso di anidride carbonica nel sangue e/o basso tasso si ossigeno nel sangue."
        ),

        new Question("Quale tra queste NON è una classificazione della dispnea?",
            [
                ["Dispnea da sforzo", 0],
                ["Dispnea cardiologica", 1],
                ["Dispnea continua", 0],
                ["Dispnea parossistica", 0]
            ],
            "Dispnea da sforzo: compare durante l'attività fisica, come camminare.\nDispnea continua: una sensazione di mancanza d'aria che non scompare, anche a riposo o durante l'intera giornata.\nDispnea parossistica: si manifesta con attacchi improvvisi, spesso durante il sonno, e può essere un sintomo grave."
        ),

        new Question("Cosa si intende per cianosi?",
            [
                ["La difficoltà respiratoria in persone con broncopneumopatie", 0],
                ["L'improvviso arrossamento del viso che segnala un problema respiratorio", 0],
                ["Una colorazione bluastra della cute causata da una diminuzione della quantità di ossigeno nel sangue", 1],
                ["Il momento che precede la perdita di coscienza durante un ictus", 0]
            ],
            ""
        ),

        new Question("La cianosi può essere classificata in",
            [
                ["assiale e appendicolare", 0],
                ["silente e manifesta", 0],
                ["continua e intermittente", 0],
                ["centrale e periferica", 1]
            ],
            "Cianosi centrale: si apprezza nelle membrane mucose degli occhi e della bocca.\nCianosi periferica: colorazione bluastra delle punte delle dita e letto ungueale, lobi delle orecchie, della punta del naso e delle labbra"
        ),

        new Question("L'emissione di abbondante quantità di sangue rosso vivo dall’albero respiratorio è detta",
            [
                ["emottisi", 1],
                ["emoftoe", 0],
                ["emoftalmo", 0],
                ["emotorace", 0]
            ],
            ""
        ),

        new Question("L'emissione di scarsa quantità di sangue rosso vivo dall’albero respiratorio è detta",
            [
                ["emottisi", 0],
                ["emoftoe", 1],
                ["emoftalmo", 0],
                ["emotorace", 0]
            ],
            ""
        ),

        new Question("Quale delle seguenti affermazioni riguardo la tosse è falsa?",
            [
                ["È il risultato di un’irritazione della mucosa respiratoria", 0],
                ["Si manifesta con un’inspirazione profonda ed un’espirazione rapida a glottide chiusa", 0],
                ["Si manifesta solo in caso di ostruzione delle vie aeree", 1],
                ["È il principale meccanismo di difesa della persone contro l’accumulo di secrezioni", 0]
            ],
            ""
        ),

        new Question("La tosse cianotizzante",
            [
                ["è segno di stenosi laringea", 0],
                ["è una tosse secca con colpi numerosi", 0],
                ["è accompagnata da espettorazione", 0],
                ["provoca uno stato di cianosi transitoria", 1]
            ],
            ""
        ),

        new Question("La tosse stridula",
            [
                ["è segno di stenosi laringea", 1],
                ["è una tosse secca con colpi numerosi", 0],
                ["è accompagnata da espettorazione", 0],
                ["provoca uno stato di cianosi transitoria", 0]
            ],
            ""
        ),

        new Question("La tosse stizzosa",
            [
                ["è segno di stenosi laringea", 0],
                ["è una tosse secca con colpi numerosi", 1],
                ["è accompagnata da espettorazione", 0],
                ["provoca uno stato di cianosi transitoria", 0]
            ],
            ""
        ),

        new Question("La tosse umida",
            [
                ["è segno di stenosi laringea", 0],
                ["è una tosse secca con colpi numerosi", 0],
                ["è accompagnata da espettorazione", 1],
                ["provoca uno stato di cianosi transitoria", 0]
            ],
            ""
        ),

        new Question("Quale tra i seguenti dispositivi è utilizzato per somministrare ossigeno ad alto flusso?",
            [
                ["Cannule nasali", 0],
                ["Maschera facciale", 0],
                ["Maschera Venturi", 0],
                ["Maschera reservoir", 1]
            ],
            "Le cannule nasali erogano un basso flusso di ossigeno.\nLa maschera facciale eroga un medio flusso di ossigeno.\nLa maschera Venturi permette una erogazione controllata dell'ossigeno.\nLa maschera reservoir conesente l'erogazione di un flusso di ossigeno elevato."
        ),

        new Question("La rilevazione del peso corporeo di un paziente",
            [
                ["va effettuata all'ingresso in ospedale e tutti i giorni, possibilmente alla stessa ora", 1],
                ["va effettuata solamente all'ingresso in ospedale e alla dimissione", 0],
                ["va effettuata solo in pazienti di chirurgia bariatrica", 0],
                ["va effettuata sempre dopo che il paziente si è scaricato", 0]
            ],
            ""
        ),

        new Question("Durante la rilevazione del peso corporeo è importante",
            [
                ["che il paziente rimanga in piedi, in posizione eretta", 0],
                ["controllare che la persona non si appoggi da nessuna parte", 1],
                ["che sia utilizzata una bilancia digitale per una più corretta lettura", 0],
                ["che il paziente non abbia alcun vestito addosso", 0]
            ],
            "Se il paziente si appoggia scarica parte del peso sulla superficie di appoggio e ciò falserà il risultato della misurazione."
        ),

        new Question("Dove si trova il pancreas?",
            [
                ["Nella parte inferiore dell’addome", 0],
                ["Dietro il cuore", 0],
                ["Nella parte superiore dell’addome, tra stomaco e colonna vertebrale", 1],
                ["Accanto ai reni", 0]
            ],
            ""
        ),

        new Question("Quale ormone ha azione ipoglicemizzante?",
            [
                ["Glucagone", 0],
                ["Cortisolo", 0],
                ["Adrenalina", 0],
                ["Insulina", 1]
            ],
            ""
        ),

        new Question("Qual è la funzione del glucagone?",
            [
                ["Aumentare la glicemia", 1],
                ["Favorire la digestione", 0],
                ["Ridurre la glicemia", 0],
                ["Stimolare la produzione di insulina", 0]
            ],
            ""
        ),

        new Question("Qual è il valore di glicemia considerato normale?",
            [
                ["<60 mg/dl", 0],
                ["60–99 mg/dl", 1],
                ["100–125 mg/dl", 0],
                ["≥126 mg/dl", 0]
            ],
            ""
        ),

        new Question("Quale tra questi è un sintomo di ipoglicemia?",
            [
                ["Polidipsia", 0],
                ["Poliuria", 0],
                ["Sudorazione", 1],
                ["Cefalea", 0]
            ],
            ""
        ),

        new Question("Quale tra questi è un sintomo di iperglicemia?",
            [
                ["Tachicardia", 0],
                ["Fame", 0],
                ["Ipotensione", 0],
                ["Polidipsia", 1]
            ],
            ""
        ),

        new Question("Qual è la regola del 15 per trattare l’ipoglicemia?",
            [
                ["Somministrare 15 g di zuccheri semplici e controllare dopo 15 minuti", 1],
                ["Somministrare 15 unità di insulina e controllare dopo 15 minuti", 0],
                ["Attendere 15 minuti e rilevare nuovamente la glicemia", 0],
                ["Somministrare 15 g di proteine e dopo 15 minuti somministrare 15 g di zuccheri", 0]
            ],
            ""
        ),

        new Question("Quale dispositivo si usa per rilevare la glicemia?",
            [
                ["Sfigmomanometro", 0],
                ["Glucometro", 1],
                ["Termometro", 0],
                ["Saturimetro", 0]
            ],
            ""
        ),

        new Question("Qual è il primo passo prima di rilevare la glicemia?",
            [
                ["Indossare i DPI", 0],
                ["Accendere il glucometro", 0],
                ["Lavare le mani", 1],
                ["Inserire la striscia reattiva", 0]
            ],
            ""
        ),

        new Question("Perché si asciuga la prima goccia di sangue durante un DXT/HGT?",
            [
                ["Per evitare infezioni", 0],
                ["Per migliorare la circolazione", 0],
                ["Per facilitare la fuoriuscita di sangue", 0],
                ["Per evitare una lettura falsata", 1]
            ],
            ""
        ),

        new Question("Quale valore indica ipoglicemia?",
            [
                ["<60 mg/dl", 1],
                ["60–99 mg/dl", 0],
                ["100–125 mg/dl", 0],
                ["≥126 mg/dl", 0]
            ],
            ""
        ),

        new Question("Quale tra questi fattori può causare iperglicemia?",
            [
                ["Digiuno prolungato", 0],
                ["Intervento chirurgico", 1],
                ["Eccessivo esercizio fisico", 0],
                ["Elevata sudorazione", 0]
            ],
            ""
        ),

        new Question("Quale tra questi fattori può causare ipoglicemia?",
            [
                ["Stress", 0],
                ["Disidratazione", 0],
                ["Digiuno prolungato", 1],
                ["Patologie croniche", 0]
            ],
            ""
        ),

        new Question("L'unita di misura della pressione arteriosa è",
            [
                ["Pascal", 0],
                ["atmosfere", 0],
                ["bar", 0],
                ["mmHg", 1]
            ],
            ""
        ),

        new Question("La pressione arteriosa massima corrisponde",
            [
                ["alla sistole cardiaca", 1],
                ["alla diastole cardiaca", 0],
                ["alla massima inspirazione polmonare", 0],
                ["alla minima inspirazione polmonare", 0]
            ],
            ""
        ),

        new Question("La pressione arteriosa minima corrisponde",
            [
                ["alla sistole cardiaca", 0],
                ["alla diastole cardiaca", 1],
                ["alla massima inspirazione polmonare", 0],
                ["alla minima inspirazione polmonare", 0]
            ],
            ""
        ),

        new Question("Quali strumenti servono per rilevare la pressione arteriosa?",
            [
                ["Termometro e fonendoscopio", 0],
                ["Barometro e elettrocardiografo", 0],
                ["Fonendoscopio e sfigmomanometro", 1],
                ["Barometro e saturimetro", 0]
            ],
            ""
        ),

        new Question("Prima della misurazione della PA è importante",
            [
                ["stringere il più possibile il manicotto", 0],
                ["mantenere il paziente in posizione eretta", 0],
                ["rilevare la temperatura corporea", 0],
                ["assicurarsi che la cuffia sia di dimensioni appropriate", 1]
            ],
            "La dimensione della cuffia è scelta sulla base della circonferenza dell'arto utilizzato. L'utilizzo di cuffie di taglie inappropriate può dare errori di lettura."
        ),

        new Question("A cosa è importante fare attenzione durante la rilevazione della PA?",
            [
                ["All'appropriato posizionamento dello strumento", 1],
                ["All'età del paziente", 0],
                ["Alla presenza o meno di un catetere vescicale", 0],
                ["Tutte e tre le risposte", 0]
            ],
            "La cuffia deve essere applicata aderente attorno all'arto superiore con la parte gonfiabile posta sopra l'arteria e deve essere posizionata all'altezza del cuore."
        ),

        new Question("A cosa corrisponde il primo tono di Korotkoff?",
            [
                ["Alla diastole dei ventricoli", 0],
                ["Alla sistole dei ventricoli", 1],
                ["All'escursione diaframmatica", 0],
                ["All'atto respiratorio", 0]
            ],
            "I toni di Korotkoff sono i colpi chiari e ritmici che corrispondono alla frequenza del polso."
        ),

        new Question("Quanti toni di Korotkoff sono solitamente udibili?",
            [
                ["3", 0],
                ["4", 0],
                ["5", 1],
                ["6", 0]
            ],
            ""
        ),

        new Question("Quali valori di PA indicano ipertensione?",
            [
                ["<100/60 mmHg", 0],
                ["Tra 100/60 e 120/75 mmHg", 0],
                ["Tra 120/75 e 140/90 mmHg", 0],
                [">140/90 mmHg", 1]
            ],
            ""
        ),

        new Question("Quali valori di PA indicano ipotensione?",
            [
                ["<100/60 mmHg", 1],
                ["Tra 100/60 e 120/75 mmHg", 0],
                ["Tra 120/75 e 140/90 mmHg", 0],
                [">140/90 mmHg", 0]
            ],
            ""
        ),

        new Question("Cosa è l'ipotensione ortostatica?",
            [
                ["L'aumento della pressione arteriosa nel passaggio dalla posizione seduta o sdraiata a quella eretta", 0],
                ["La diminuzione della pressione arteriosa nel passaggio dalla posizione seduta o sdraiata a quella eretta", 1],
                ["L'aumento della pressione arteriosa nel passaggio dalla posizione eretta a quella seduta o sdraiata", 0],
                ["La diminuzione della pressione arteriosa nel passaggio dalla posizione eretta a quella seduta o sdraiata", 0]
            ],
            ""
        ),

        new Question("L'ipotensione ortostatica favorisce",
            [
                ["sindromi neurodegenerative", 0],
                ["l'insorgenza di ictus", 0],
                ["il rischio di cadute", 1],
                ["perdite di memoria transitorie", 0]
            ],
            ""
        ),

        new Question("Il polso arterioso è causato da",
            [
                ["la pressione del diaframma sull'aorta", 0],
                ["il rilassamento delle pareti delle arterie", 0],
                ["la tonicità delle pareti delle arterie", 0],
                ["la dilatazione della parete delle arterie", 1]
            ],
            ""
        ),

        new Question("Quale delle seguenti NON è una caratteristica del polso arterioso?",
            [
                ["Profondità", 1],
                ["Frequenza", 0],
                ["Ritmo", 0],
                ["Qualità", 0]
            ],
            "Frequenza: definisce il numero di pulsazioni in un minuto.\nRitmo: definisce la regolarità con cui si verifica la pulsazione.\nQualità: definisce la forza della pulsazione percepita dal dito del rilevatore."
        ),

        new Question("Quale FC è considerata normale negli adulti?",
            [
                ["<60 bpm", 0],
                ["Tra 60 e 100 bpm", 1],
                ["Tra 50 e 150 bpm", 0],
                [">100 bpm", 0]
            ],
            ""
        ),

        new Question("Per tachicardia si intende una FC",
            [
                ["<60 bpm", 0],
                ["Tra 60 e 100 bpm", 0],
                ["Tra 50 e 150 bpm", 0],
                [">100 bpm", 1]
            ],
            ""
        ),

        new Question("Per bradicardia si intende una FC",
            [
                ["<60 bpm", 1],
                ["Tra 60 e 100 bpm", 0],
                ["Tra 50 e 150 bpm", 0],
                [">100 bpm", 0]
            ],
            ""
        ),

        new Question("Quale delle seguenti affermazioni sulla FC è vera?",
            [
                ["Diminuisce con l'aumentare dell'età", 1],
                ["Aumenta con l'aumentare dell'età", 0],
                ["Rimane costante durante tutto l'arco della vita", 0],
                ["Diminuisce dopo uno sforzo", 0]
            ],
            "Neonati: 120-160 bpm.\nBambini: 90-140 bpm.\nEtà prescolastica: 80-110 bpm.\nEtà scolastica: 75-100 bpm.\nAdolescenti: 60-90 bpm.\nAdulti: 65-85 bpm."
        ),

        new Question("Il polso arterioso viene rilevato",
            [
                ["soltanto lungo l'arteria radiale", 0],
                ["palpando una qualsiasi arteria superficiale", 1],
                ["solo se il paziente è sotto stress", 0],
                ["su qualsiasi punto del corpo", 0]
            ],
            "Ovunque vi sia facile accesso a un'arteria è possibile rilevare il polso arterioso. Sedi più comuni sono le arterie temporale (tempie), carotide (collo), brachiale (braccio), radiale (avambraccio), poplitea (dietro il ginocchio), dorsale (del piede) e tibiale (dietro il malleolo mediale)."
        )

    ],

  getFeedback(score) {
    if (score >= 0 && score <= 20) return "/20";
    return "";
  }
};
