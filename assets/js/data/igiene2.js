import { Question } from "../models/Question.js";

export const Igiene2Test = {
  questions: [

        new Question("Qual è la funzione principale dell’ospedale?",
            [
                ["Essere un luogo di accoglienza, assistenza e promozione della salute", 1],
                ["Fornire cure specialistiche", 0],
                ["Ospitare pazienti in lungodegenza", 0],
                ["Gestire emergenze territoriali", 0]
            ],
            "L’ospedale è definito come luogo di accoglienza e promozione della salute."
        ),

        new Question("Perché è importante separare i percorsi puliti e sporchi?",
            [
                ["Per ridurre i costi", 0],
                ["Per evitare contaminazioni", 1],
                ["Per velocizzare il trasporto", 0],
                ["Per facilitare il lavoro degli operatori", 0]
            ],
            "La separazione evita incroci tra materiali puliti e contaminati."
        ),

        new Question("Quale materiale viaggia nei percorsi puliti?",
            [
                ["Materiale da smaltire", 0],
                ["Biancheria sporca", 0],
                ["Materiale sterilizzato", 1],
                ["Rifiuti sanitari", 0]
            ],
            "I percorsi puliti trasportano materiale sterile e biancheria pulita."
        ),

        new Question("Con quale frequenza devono essere ritirati i rifiuti sanitari a rischio infettivo?",
            [
                ["Solo quando pieni", 0],
                ["Mensile", 0],
                ["Settimanale", 0],
                ["Giornaliera", 1]
            ],
            "Il ritiro deve essere garantito ogni giorno."
        ),

        new Question("Quale caratteristica deve avere il letto di degenza?",
            [
                ["Essere regolabile e resistente ai detergenti", 1],
                ["Essere privo di sponde", 0],
                ["Essere in legno", 0],
                ["Essere fisso", 0]
            ],
            "Deve adattarsi alle condizioni del paziente e resistere alla sanificazione."
        ),

        new Question("Quante volte va pulita la camera di degenza?",
            [
                ["Una volta al giorno", 0],
                ["Due volte al giorno", 1],
                ["Tre volte al giorno", 0],
                ["Solo al cambio paziente", 0]
            ],
            "La normativa prevede due pulizie quotidiane."
        ),

        new Question("Che cos’è la sanificazione?",
            [
                ["Sterilizzazione totale", 0],
                ["Applicazione di disinfettanti ad alta concentrazione", 0],
                ["Rimozione meccanica dello sporco", 1],
                ["Eliminazione delle spore", 0]
            ],
            "È la rimozione dello sporco tramite acqua e detergenti."
        ),

        new Question("Quale area è considerata ad alto rischio?",
            [
                ["Corridoi", 0],
                ["Ambulatori", 0],
                ["Uffici", 0],
                ["Sale operatorie", 1]
            ],
            "Le sale operatorie richiedono massima riduzione della carica microbica."
        ),

        new Question("Quale fattore NON influisce sulla scelta della metodologia di sanificazione?",
            [
                ["Colore delle pareti", 1],
                ["Frequenza degli interventi", 0],
                ["Tipo di superficie", 0],
                ["Livello di rischio", 0]
            ],
            "Il colore non ha alcuna rilevanza igienica."
        ),

        new Question("Che cosa si intende per decontaminazione?",
            [
                ["Rimozione della polvere", 0],
                ["Rendere sicuro un materiale contaminato", 1],
                ["Lavaggio con acqua calda", 0],
                ["Applicazione di detergenti", 0]
            ],
            "La decontaminazione rende sicuro il materiale prima della sterilizzazione."
        ),

        new Question("Qual è la concentrazione ottimale dell’alcool etilico per disinfezione?",
            [
                ["30%", 0],
                ["50%", 0],
                ["70%", 1],
                ["95%", 0]
            ],
            "L’alcool è più efficace al 70%."
        ),

        new Question("Quale area rientra nel rischio medio?",
            [
                ["Atrio", 0],
                ["Sala operatoria", 0],
                ["Uffici", 0],
                ["Laboratori analisi", 1]
            ],
            "I laboratori analisi sono classificati come aree a medio rischio."
        ),

        new Question("La scopatura ad umido serve a",
            [
                ["eliminare la polvere senza disperderla", 1],
                ["disinfettare le superfici", 0],
                ["lucidare i pavimenti", 0],
                ["sollevare la polvere", 0]
            ],
            "La scopatura ad umido evita la dispersione della polvere nell’aria."
        ),

        new Question("Quale strumento NON è consigliato in area assistenziale?",
            [
                ["Panni umidi", 0],
                ["Aspirapolvere", 1],
                ["Veline TNT", 0],
                ["Scopa a trapezio", 0]
            ],
            "L’aspirapolvere può sollevare polvere e microrganismi."
        ),

        new Question("La detersione consiste in",
            [
                ["eliminare le spore", 0],
                ["sterilizzare strumenti", 0],
                ["rimuovere lo sporco con detergenti", 1],
                ["applicare disinfettanti", 0]
            ],
            "La detersione usa detergenti per rimuovere lo sporco."
        ),

        new Question("L’acqua calda è più efficace nelle operazioni di pulizia perché",
            [
                ["può essere utilizzata senza detergenti", 0],
                ["aiuta a mantenere la temperatura della stanza", 0],
                ["evapora più velocemente", 0],
                ["aumenta l’efficacia dei tensioattivi", 1]
            ],
            "I tensioattivi agiscono meglio con acqua calda."
        ),

        new Question("Lo iodopovidone è utilizzato per",
            [
                ["antisepsi preoperatoria", 1],
                ["disinfezione di superfici metalliche", 0],
                ["pulizia dei pavimenti", 0],
                ["lavaggio dei vetri", 0]
            ],
            "È un antisettico molto usato sulla cute (betadine)."
        ),

        new Question("Quale disinfettante è efficace anche sulle spore?",
            [
                ["Clorexidina", 0],
                ["Acido peracetico", 1],
                ["Alcool etilico", 0],
                ["Tensioattivi", 0]
            ],
            "L’acido peracetico ha spettro d’azione molto ampio, incluse le spore."
        ),

        new Question("La glutaraldeide è un",
            [
                ["detergente", 0],
                ["solvente", 0],
                ["disinfettante ad alto livello", 1],
                ["tensioattivo", 0]
            ],
            "È usata per disinfettare strumenti termosensibili."
        ),

        new Question("Le aree a basso rischio includono",
            [
                ["sale operatorie", 0],
                ["terapie intensive", 0],
                ["laboratori analisi", 0],
                ["atri e corridoi", 1]
            ],
            "Zone ad alto traffico di utenti sono considerate a basso rischio."
        ),

        new Question("Quale tra questi è un intervento di mantenimento?",
            [
                ["Pulizia giornaliera", 1],
                ["Sanificazione straordinaria", 0],
                ["Sterilizzazione", 0],
                ["Decontaminazione strumenti", 0]
            ],
            "Gli interventi di mantenimento servono a mantenere pulito l’ambiente quotidianamente."
        ),

        new Question("La spolveratura deve essere eseguita preferibilmente",
            [
                ["a secco", 0],
                ["con panni umidi o antistatici", 1],
                ["con aria compressa", 0],
                ["con aspirapolvere", 0]
            ],
            "La spolveratura ad umido evita la dispersione della polvere."
        ),

        new Question("La scopatura con scopa a trapezio prevede movimenti",
            [
                ["avanti e indietro", 0],
                ["circolari", 0],
                ["ad S senza sollevare la scopa", 1],
                ["rapidi e brevi", 0]
            ],
            "La tecnica corretta evita la dispersione della polvere."
        ),

        new Question("Quale fattore aumenta l’efficacia dei tensioattivi?",
            [
                ["Aria calda", 0],
                ["Acqua fredda", 0],
                ["Umidità bassa", 0],
                ["Acqua calda", 1]
            ],
            "L’acqua calda potenzia l’azione dei tensioattivi."
        ),

        new Question("La sanificazione straordinaria si esegue",
            [
                ["dopo un paziente ad alto rischio infettivo", 1],
                ["ogni giorno", 0],
                ["solo su richiesta del paziente", 0],
                ["ogni settimana", 0]
            ],
            "Serve a eliminare rischi dopo casi infettivi."
        ),

        new Question("Quale tra questi è un disinfettante ad ampio spettro?",
            [
                ["Acqua ossigenata diluita", 0],
                ["Ipoclorito di sodio", 1],
                ["Sapone neutro", 0],
                ["Tensioattivi non ionici", 0]
            ],
            "L’ipoclorito di sodio (candeggina) ha un ampio spettro d’azione."
        ),

        new Question("Le soluzioni idroalcoliche sono efficaci contro",
            [
                ["spore", 0],
                ["protozoi", 0],
                ["batteri Gram+ e Gram-", 1],
                ["muffe", 0]
            ],
            "Gli alcoli agiscono su batteri e alcuni virus."
        ),

        new Question("La clorexidina è poco efficace contro",
            [
                ["virus lipofili", 0],
                ["batteri Gram+", 0],
                ["miceti", 0],
                ["batteri Gram-", 1]
            ],
            "La clorexidina ha scarsa efficacia sui Gram-."
        ),

        new Question("I derivati fenolici sono utilizzati per",
            [
                ["lavaggio antisettico delle mani", 1],
                ["pulizia dei vetri", 0],
                ["sterilizzazione strumenti", 0],
                ["pulizia dei tessuti", 0]
            ],
            "Sono presenti in soluzioni detergenti-antisettiche."
        ),

        new Question("I sali di ammonio quaternario hanno",
            [
                ["ampio spettro", 0],
                ["spettro limitato", 1],
                ["nessuna attività biocida", 0],
                ["solo azione detergente", 0]
            ],
            "Hanno spettro limitato e sono facilmente inattivati."
        ),

        new Question("Quale tra questi è un tensioattivo non ionico?",
            [
                ["Rill vetri", 0],
                ["Sterx", 0],
                ["Amakal", 1],
                ["Presept", 0]
            ],
            "Amakal è un detergente non ionico pronto all’uso."
        ),

        new Question("Quale prodotto NON deve essere usato su superfici metalliche?",
            [
                ["Rill vetri", 0],
                ["Fenplus", 0],
                ["Scric crema", 0],
                ["Ipoclorito", 1]
            ],
            "L’ipoclorito è corrosivo sui metalli."
        ),

        new Question("La sanificazione crociata prevede",
            [
                ["alternanza mensile di disinfettanti diversi", 1],
                ["uso dello stesso disinfettante sempre", 0],
                ["solo acqua calda", 0],
                ["solo detergenti neutri", 0]
            ],
            "Si alternano prodotti a base di cloro e fenolo."
        ),

        new Question("Le comode devono essere pulite",
            [
                ["una volta al giorno", 0],
                ["dopo ogni utilizzo", 1],
                ["solo se sporche", 0],
                ["ogni settimana", 0]
            ],
            "Devono essere lavate e disinfettate dopo ogni uso."
        ),

        new Question("La spolveratura meccanica richiede",
            [
                ["panni umidi", 0],
                ["aria compressa", 0],
                ["aspirapolvere con microfiltro", 1],
                ["scope a setole rigide", 0]
            ],
            "Il microfiltro evita la dispersione di microrganismi."
        ),

        new Question("La scopatura con aliante richiede",
            [
                ["nessun accessorio", 0],
                ["panni asciutti", 0],
                ["aria calda", 0],
                ["panni a frangia pre-umidificati", 1]
            ],
            "L’aliante usa frange pre-umidificate."
        ),

        new Question("La preparazione delle soluzioni richiede",
            [
                ["misurazioni precise", 1],
                ["solo acqua calda", 0],
                ["diluizioni casuali", 0],
                ["nessuna attenzione", 0]
            ],
            "Le diluizioni devono essere esatte per garantire efficacia."
        ),

        new Question("Una soluzione allo 0,5% richiede",
            [
                ["50 ml per litro", 0],
                ["5 ml per litro", 1],
                ["10 ml per litro", 0],
                ["25 ml per litro", 0]
            ],
            "0,5% = 5 ml per litro."
        ),

        new Question("L’acido peracetico è efficace contro",
            [
                ["solo batteri", 0],
                ["solo funghi", 0],
                ["batteri, virus, micobatteri e spore", 1],
                ["solo virus", 0]
            ],
            "Ha uno spettro molto ampio."
        ),

        new Question("L’ipoclorito è inattivato da",
            [
                ["acqua", 0],
                ["luce", 0],
                ["aria", 0],
                ["materiale organico", 1]
            ],
            "Il materiale organico riduce la sua efficacia."
        ),

        new Question("Le aree a bassa carica microbica includono",
            [
                ["sala operatoria", 1],
                ["deposito sporco", 0],
                ["sala risveglio", 0],
                ["laboratorio analisi", 0]
            ],
            "La sala operatoria richiede bassissima carica microbica."
        ),

        new Question("Il piano di pulizia definisce",
            [
                ["solo i prodotti da usare", 0],
                ["tutte le operazioni, frequenze e metodi", 1],
                ["solo gli orari di lavoro", 0],
                ["solo il numero di operatori", 0]
            ],
            "Il piano di pulizia dettaglia operazioni, frequenze e metodologie."
        ),

        new Question("Cosa si intende per dispositivo medico?",
            [
                ["Un farmaco utilizzato per curare malattie", 0],
                ["Un alimento destinato a fini medici speciali", 0],
                ["Uno strumento o apparecchio destinato all’uso umano per diagnosi, prevenzione o terapia", 1],
                ["Un prodotto cosmetico per uso esterno", 0]
            ],
            "Il dispositivo medico è definito come uno strumento o apparecchio destinato a diagnosi, prevenzione, controllo o terapia."
        ),

        new Question("Quale classe di rischio comprende i dispositivi a basso rischio infettivo?",
            [
                ["Classe IV", 0],
                ["Classe III", 0],
                ["Classe II", 0],
                ["Classe I", 1]
            ],
            "La Classe I è quella a minor rischio infettivo e comprende dispositivi poco critici."
        ),

        new Question("Le superfici che entrano in contatto solo con cute integra sono definite",
            [
                ["non critiche", 1],
                ["semi-critiche", 0],
                ["critiche", 0],
                ["sterili", 0]
            ],
            "Le superfici non critiche toccano solo cute integra e richiedono disinfezione di basso livello."
        ),

        new Question("La disinfezione di livello alto agisce anche su",
            [
                ["solo funghi", 0],
                ["spore", 1],
                ["virus con envelope", 0],
                ["batteri in forma vegetativa", 0]
            ],
            "La disinfezione ad alto livello è efficace anche sulle spore."
        ),

        new Question("La sterilità in ambito sanitario corrisponde a una probabilità di contaminazione pari a",
            [
                ["1 su 100", 0],
                ["1 su 10.000", 0],
                ["1 su 1.000.000", 1],
                ["1 su 100.000.000", 0]
            ],
            "Un materiale è considerato sterile se ha una probabilità di contaminazione pari a 10⁻⁶."
        ),

        new Question("Quale normativa definisce i requisiti per indicare un dispositivo come sterile?",
            [
                ["EN ISO 17665-1", 0],
                ["UNI/EN 14971", 0],
                ["DL 81/2008", 0],
                ["UNI/EN 556-1", 1]
            ],
            "La UNI/EN 556-1 stabilisce i requisiti per l’indicazione sterile."
        ),

        new Question("Dove si trova solitamente la centrale di sterilizzazione?",
            [
                ["Vicino alle sale operatorie", 1],
                ["All’ingresso principale", 0],
                ["Vicino al pronto soccorso", 0],
                ["Nel reparto di radiologia", 0]
            ],
            "La centrale è collocata vicino alle sale operatorie per ottimizzare i flussi."
        ),

        new Question("Quale percorso comprende le fasi di accettazione, smistamento e lavaggio?",
            [
                ["Percorso sterile", 0],
                ["Percorso sporco", 1],
                ["Percorso misto", 0],
                ["Percorso pulito", 0]
            ],
            "Le prime tre fasi appartengono al percorso sporco."
        ),

        new Question("La stufa di Pasteur utilizza",
            [
                ["calore umido", 0],
                ["raggi gamma", 0],
                ["calore secco", 1],
                ["ossido di etilene", 0]
            ],
            "La stufa di Pasteur sterilizza tramite calore secco."
        ),

        new Question("Quale temperatura/tempo è corretta per la sterilizzazione a calore secco?",
            [
                ["100°C per 30 min", 0],
                ["120°C per 90 min", 0],
                ["140°C per 60 min", 0],
                ["160°C per 120 min", 1]
            ],
            "160°C per 120 minuti è uno dei cicli standard della sterilizzazione con calore secco."
        ),

        new Question("L’autoclave a vuoto frazionato",
            [
                ["ripete cicli di vuoto per eliminare l’aria residua", 1],
                ["non rimuove l’aria", 0],
                ["è inadatta ai materiali porosi", 0],
                ["non può essere programmata", 0]
            ],
            "Il vuoto frazionato ripete più cicli di vuoto per migliorare la penetrazione del vapore."
        ),

        new Question("Il vapore saturo deve contenere",
            [
                ["solo vapore senza acqua", 0],
                ["97% vapore e 3% acqua", 1],
                ["80% vapore e 20% acqua", 0],
                ["50% vapore e 50% acqua", 0]
            ],
            "Il vapore saturo efficace è composto da 97% vapore e 3% fase liquida."
        ),

        new Question("L’ossido di etilene è indicato per",
            [
                ["teleria chirurgica", 0],
                ["materiali termoresistenti", 0],
                ["materiali plastici e termolabili", 1],
                ["strumenti in acciaio inox", 0]
            ],
            "L’ETO è usato per materiali sensibili al calore."
        ),

        new Question("La sterilizzazione con perossido d’idrogeno vaporizzato avviene a",
            [
                ["80°C", 0],
                ["37°C", 0],
                ["100°C", 0],
                ["45–50°C", 1]
            ],
            "Il gas plasma opera a basse temperature, circa 45–50°C."
        ),

        new Question("Quale zona appartiene al percorso pulito?",
            [
                ["Preparazione e confezionamento", 1],
                ["Smistamento", 0],
                ["Lavaggio", 0],
                ["Accettazione dispositivi contaminati", 0]
            ],
            "La preparazione e confezionamento segue il lavaggio ed è parte del percorso pulito."
        ),

        new Question("Qual è il principale vantaggio del vapore rispetto al calore secco?",
            [
                ["Minor conducibilità termica", 0],
                ["Maggiore penetrazione nei materiali porosi", 1],
                ["Costo ridotto", 0],
                ["Assenza di umidità", 0]
            ],
            "Il vapore penetra meglio nei materiali porosi."
        ),

        new Question("Quale autoclave è la più moderna ed efficiente?",
            [
                ["Autoclave a vuoto semplice", 0],
                ["Autoclave a pressione atmosferica", 0],
                ["Autoclave a vuoto frazionato", 1],
                ["Autoclave a gravità", 0]
            ],
            "Il vuoto frazionato garantisce la migliore rimozione dell’aria."
        ),

        new Question("Quale fase NON appartiene al ciclo di sterilizzazione a vapore?",
            [
                ["Rimozione dell’aria", 0],
                ["Esposizione al vapore", 0],
                ["Immissione del vapore", 0],
                ["Irraggiamento gamma", 1]
            ],
            "L’irraggiamento gamma è un metodo diverso, non parte del ciclo a vapore."
        ),

        new Question("Quale materiale è tipicamente sterilizzato con raggi gamma?",
            [
                ["Siringhe monouso", 1],
                ["Teleria", 0],
                ["Ferramenta chirurgica complessa", 0],
                ["Strumenti metallici", 0]
            ],
            "I raggi gamma sono usati soprattutto per grandi quantità di materiale monouso."
        ),

        new Question("Quale parametro NON influenza la sterilizzazione con ossido di etilene?",
            [
                ["Temperatura", 0],
                ["Tipo di detergente usato nel lavaggio", 1],
                ["Concentrazione del gas", 0],
                ["Umidità", 0]
            ],
            "Il detergente usato nel lavaggio non influisce sul ciclo ETO."
        ),

        new Question("Per quanto tempo devono essere aerati i materiali sterilizzati con ETO?",
            [
                ["2 ore", 0],
                ["24 ore", 0],
                ["48 ore", 1],
                ["Non necessitano di essere aerati", 0]
            ],
            "L’ETO richiede almeno 48 ore di aerazione per eliminare residui tossici."
        ),

        new Question("Quale tra questi è un metodo fisico di sterilizzazione?",
            [
                ["Perossido d’idrogeno", 0],
                ["Ossido di etilene", 0],
                ["Acido peracetico", 0],
                ["Raggi gamma", 1]
            ],
            "I raggi gamma sono un metodo fisico di sterilizzazione a freddo."
        ),

        new Question("Quale parametro è fondamentale per la sterilizzazione a calore secco?",
            [
                ["Tempo e temperatura", 1],
                ["Umidità", 0],
                ["Concentrazione del gas", 0],
                ["Pressione", 0]
            ],
            "Il calore secco si basa esclusivamente su tempo e temperatura."
        ),

        new Question("Quale apparecchiatura è inadatta per materiali porosi?",
            [
                ["Autoclave a vuoto semplice", 0],
                ["Autoclave a gravità", 1],
                ["Sterilizzatore a gas plasma", 0],
                ["Autoclave a vuoto frazionato", 0]
            ],
            "L’autoclave a gravità non rimuove bene l’aria dai materiali porosi."
        ),

        new Question("Quale fase del ciclo a vapore garantisce la penetrazione del vapore nel carico?",
            [
                ["Asciugatura", 0],
                ["Introduzione dell’aria filtrata", 0],
                ["Rimozione dell’aria", 1],
                ["Raffreddamento", 0]
            ],
            "La rimozione dell’aria è essenziale per permettere al vapore di penetrare."
        ),

        new Question("Quale tra questi NON è un vantaggio del vapore saturo?",
            [
                ["Elevata conducibilità", 0],
                ["Basso costo", 0],
                ["Assenza di residui tossici", 0],
                ["Possibilità di sterilizzare materiali termolabili", 1]
            ],
            "Il vapore non è adatto ai materiali termolabili."
        ),

        new Question("Quale test viene eseguito quotidianamente nelle autoclavi a vuoto frazionato?",
            [
                ["Test Bowie-Dick", 1],
                ["Test di densità", 0],
                ["Test di pressione atmosferica", 0],
                ["Test di conducibilità", 0]
            ],
            "Il Bowie-Dick verifica l’efficacia della rimozione dell’aria."
        ),

        new Question("Quale temperatura è tipica della sterilizzazione con formaldeide?",
            [
                ["45-50°C", 0],
                ["60–80°C", 1],
                ["100°C", 0],
                ["121°C", 0]
            ],
            "La formaldeide viene utilizzata in cicli a 60–65°C o 80°C."
        ),

        new Question("Quale sostanza è altamente ossidante e sporicida?",
            [
                ["Ossido di etilene", 0],
                ["Formaldeide", 0],
                ["Acido peracetico", 1],
                ["Alcol etilico", 0]
            ],
            "L’acido peracetico è un forte ossidante e agisce anche sulle spore."
        ),

        new Question("Quale fase NON appartiene al ciclo con acido peracetico?",
            [
                ["Preparazione della miscela", 0],
                ["Esposizione per 12 minuti", 0],
                ["Risciacquo in quattro fasi", 0],
                ["Aerazione di 48 ore", 1]
            ],
            "L’aerazione prolungata è tipica dell’ETO, non dell’acido peracetico."
        ),

        new Question("Quale apparecchiatura utilizza un campo elettromagnetico per generare radicali liberi?",
            [
                ["Sterilizzatore a gas plasma", 1],
                ["Autoclave a gravità", 0],
                ["Sterilizzatore a formaldeide", 0],
                ["Stufa di Pasteur", 0]
            ],
            "Il gas plasma si basa sulla ionizzazione del perossido d’idrogeno."
        ),

        new Question("Quale tra questi materiali può essere sterilizzato con acido peracetico?",
            [
                ["Materiali che non tollerano l’umidità", 0],
                ["Strumenti totalmente immergibili", 1],
                ["Teleria chirurgica", 0],
                ["Strumenti non immergibili", 0]
            ],
            "L’acido peracetico richiede strumenti completamente immersi nella soluzione."
        ),

        new Question("Quale tra questi è un limite della sterilizzazione con raggi gamma?",
            [
                ["Elevata tossicità", 0],
                ["Lentezza del processo", 0],
                ["Necessità di impianti costosi", 1],
                ["Residui chimici", 0]
            ],
            "Gli impianti per raggi gamma sono molto costosi e di grandi dimensioni."
        ),

        new Question("Quale tra questi NON è un metodo chimico di sterilizzazione?",
            [
                ["Ossido di etilene", 0],
                ["Formaldeide", 0],
                ["Perossido d’idrogeno", 0],
                ["Calore secco", 1]
            ],
            "Il calore secco è un metodo fisico, non chimico."
        ),

        new Question("Quale apparecchiatura richiede la verifica settimanale delle guarnizioni?",
            [
                ["Autoclave", 0],
                ["Sterilizzatore a gas plasma", 0],
                ["Stufa di Pasteur", 0],
                ["Tutte le apparecchiature", 1]
            ],
            "La manutenzione ordinaria riguarda tutte le apparecchiature di sterilizzazione."
        ),

        new Question("Quale tra questi è un vantaggio del gas plasma?",
            [
                ["Può sterilizzare liquidi", 0],
                ["Non è tossico e non lascia residui", 1],
                ["È economico", 0],
                ["È adatto a materiali porosi", 0]
            ],
            "Il gas plasma non lascia residui tossici ed è sicuro."
        ),

        new Question("Quale tra questi materiali NON può essere sterilizzato con vapore?",
            [
                ["Ferri chirurgici", 0],
                ["Teleria", 0],
                ["Endoscopi flessibili", 1],
                ["Strumenti metallici", 0]
            ],
            "Gli endoscopi flessibili non tollerano le alte temperature e l’umidità del vapore."
        ),

        new Question("Qual è lo scopo principale del processo di sterilizzazione dei dispositivi medici?",
            [
                ["Migliorare l’estetica dello strumento", 0],
                ["Ridurre i costi sanitari", 0],
                ["Aumentare la durata del dispositivo", 0],
                ["Eliminare la carica microbica e prevenire infezioni", 1]
            ],
            "La sterilizzazione serve a eliminare la carica microbica e prevenire la trasmissione di infezioni."
        ),

        new Question("Le procedure manuali di sterilizzazione devono essere",
            [
                ["tracciate", 1],
                ["eseguite solo da personale medico", 0],
                ["eseguite senza DPI", 0],
                ["evitate sempre", 0]
            ],
            "Le procedure manuali devono essere tracciate per garantire sicurezza e controllo."
        ),

        new Question("I dispositivi monouso devono essere",
            [
                ["sterilizzati una volta", 0],
                ["non sterilizzati", 1],
                ["sterilizzati solo se contaminati", 0],
                ["sterilizzati ogni 24 ore", 0]
            ],
            "I dispositivi monouso non vanno mai sterilizzati."
        ),

        new Question("Quale DPI è obbligatorio nella decontaminazione manuale?",
            [
                ["Mascherina chirurgica", 0],
                ["Occhiali", 0],
                ["Guanti rinforzati anti-taglio", 1],
                ["Camice monouso", 0]
            ],
            "I guanti rinforzati proteggono da tagli e contaminazioni."
        ),

        new Question("Il lavaggio meccanico garantisce",
            [
                ["minori rischi per l'operatore", 0],
                ["tracciabilità", 0],
                ["detersione e disinfezione più accurate", 0],
                ["nessuna delle risposte", 1]
            ],
            "Il lavaggio meccanico è più sicuro e più efficace."
        ),

        new Question("Quale tipo di acqua è consigliata per il lavaggio meccanico?",
            [
                ["Acqua demineralizzata", 1],
                ["Acqua di rubinetto", 0],
                ["Acqua bidistillata", 0],
                ["Tutte le risposte", 0]
            ],
            "L’acqua demineralizzata evita residui e migliora la qualità del lavaggio."
        ),

        new Question("Il lavaggio manuale si utilizza quando",
            [
                ["lo strumento è troppo grande", 0],
                ["lo strumento non può essere lavato automaticamente", 1],
                ["l’autoclave è piena", 0],
                ["l’operatore preferisce farlo", 0]
            ],
            "Alcuni strumenti cavi o piccoli richiedono lavaggio manuale."
        ),

        new Question("Il risciacquo serve a",
            [
                ["raffreddare lo strumento", 0],
                ["aumentare la sterilità", 0],
                ["eliminare tracce di disinfettante", 1],
                ["rimuovere la ruggine", 0]
            ],
            "Il risciacquo elimina residui di detergenti o disinfettanti."
        ),

        new Question("L’asciugatura è fondamentale perché",
            [
                ["aumenta la temperatura", 0],
                ["disidrata i batteri", 0],
                ["rimuove i microrganismi", 0],
                ["evita che l’acqua interferisca con la sterilizzazione", 1]
            ],
            "L’umidità può compromettere la sterilizzazione."
        ),

        new Question("Prima del confezionamento bisogna verificare che il DM sia",
            [
                ["integro e funzionante", 1],
                ["etichettato correttamente", 0],
                ["sterilizzato", 0],
                ["lubrificato con silicone", 0]
            ],
            "Il controllo qualità verifica integrità e funzionalità."
        ),

        new Question("I lubrificanti utilizzati in fase di sterelizzazione devono essere",
            [
                ["a base di silicone", 0],
                ["idrosolubili", 1],
                ["oleosi", 0],
                ["a base alcolica", 0]
            ],
            "I lubrificanti idrosolubili non interferiscono con la sterilizzazione."
        ),

        new Question("Il confezionamento deve permettere",
            [
                ["la fuoriuscita di fibre", 0],
                ["l’ingresso di aria esterna", 0],
                ["la penetrazione dell’agente sterilizzante", 1],
                ["la perforazione facile", 0]
            ],
            "Il confezionamento deve facilitare la sterilizzazione."
        ),

        new Question("La carta medicale per sterilizzazione a vapore ha uno stoccaggio massimo di",
            [
                ["2 giorni", 0],
                ["10 giorni", 0],
                ["20 giorni", 0],
                ["30 giorni", 1]
            ],
            "La carta medicale mantiene la sterilità per 30 giorni."
        ),

        new Question("I container pluriuso hanno un tempo di stoccaggio di",
            [
                ["30 giorni", 1],
                ["90 giorni", 0],
                ["10 giorni", 0],
                ["20 giorni", 0]
            ],
            "I container mantengono la sterilità per 30 giorni."
        ),

        new Question("Le buste carta-film in doppia busta permettono uno stoccaggio di",
            [
                ["120 giorni", 0],
                ["60 giorni", 1],
                ["30 giorni", 0],
                ["10 giorni", 0]
            ],
            "La doppia busta estende la durata a 60 giorni."
        ),

        new Question("La termosaldatura delle buste carta-polipropilene richiede una temperatura di",
            [
                ["50–80°C", 0],
                ["100–120°C", 0],
                ["160–190°C", 1],
                ["200–250°C", 0]
            ],
            "Le buste carta-polipropilene richiedono 160–190°C."
        ),

        new Question("Nel carico dell’autoclave, gli strumenti più leggeri vanno posizionati",
            [
                ["è indifferente", 0],
                ["in basso", 0],
                ["al centro", 0],
                ["in alto", 1]
            ],
            "I materiali leggeri vanno sul piano superiore."
        ),

        new Question("Il test del vuoto verifica",
            [
                ["la tenuta del vuoto", 1],
                ["la temperatura dell’autoclave", 0],
                ["la pressione atmosferica", 0],
                ["la qualità dell’acqua", 0]
            ],
            "Serve a verificare che il vuoto sia mantenuto correttamente."
        ),

        new Question("Il test Bowie-Dick verifica",
            [
                ["la qualità dell’acqua", 0],
                ["la penetrazione del vapore", 1],
                ["la temperatura della camera", 0],
                ["la durata del ciclo", 0]
            ],
            "Serve a verificare la rimozione dell’aria e la penetrazione del vapore."
        ),

        new Question("L’Helix test è utilizzato per",
            [
                ["strumenti monoblocco", 0],
                ["strumenti monouso", 0],
                ["strumenti cavi", 1],
                ["strumenti piatti", 0]
            ],
            "L’Helix test verifica la penetrazione del vapore nei corpi cavi."
        ),

        new Question("Il trasporto del materiale sterile deve avvenire con",
            [
                ["qualsiasi contenitore disponibile", 0],
                ["carrelli aperti", 0],
                ["sacchetti di plastica", 0],
                ["carrelli chiusi", 1]
            ],
            "I carrelli chiusi riducono il rischio di contaminazione."
        ),

        new Question("Le confezioni devono essere stoccate in base a",
            [
                ["data di scadenza", 1],
                ["colore", 0],
                ["dimensione", 0],
                ["peso", 0]
            ],
            "Lo stoccaggio segue l’ordine cronologico di scadenza."
        ),

        new Question("Un fattore che compromette la barriera sterile è",
            [
                ["trasparenza della confezione", 0],
                ["presenza di polvere", 1],
                ["forma del DM", 0],
                ["detergente usato", 0]
            ],
            "Polvere e umidità compromettono la sterilità."
        ),

        new Question("La verifica finale del processo di sterilizzazione include",
            [
                ["il colore del DM", 0],
                ["il peso del DM", 0],
                ["la data di scadenza", 1],
                ["la marca del DM", 0]
            ],
            "La verifica finale controlla scadenza, integrità e indicatori."
        ),

        new Question("La tracciabilità permette di",
            [
                ["ridurre i costi", 0],
                ["non perdere il DM", 0],
                ["sapere il numero di DM disponibili", 0],
                ["identificare il DM in ogni fase", 1]
            ],
            "La tracciabilità segue il DM in tutto il processo."
        ),

        new Question("Il ciclo di sterilizzazione termina con",
            [
                ["vuoto frazionato", 1],
                ["risciacquo", 0],
                ["inizializzazione", 0],
                ["lubrificazione", 0]
            ],
            "Il ciclo si conclude con un vuoto frazionato."
        ),

        new Question("Il materiale processato deve risultare",
            [
                ["umido", 0],
                ["asciutto e integro", 1],
                ["freddo", 0],
                ["caldo", 0]
            ],
            "L’umidità compromette la sterilità."
        ),

        new Question("Il test Bowie-Dick si esegue",
            [
                ["ogni mese", 0],
                ["ogni anno", 0],
                ["ogni giorno", 1],
                ["ogni settimana", 0]
            ],
            "È un test giornaliero."
        ),

        new Question("Il confezionamento deve essere",
            [
                ["fragile", 0],
                ["tossico", 0],
                ["difficile da aprire", 0],
                ["resistente agli strappi", 1]
            ],
            "Il confezionamento deve proteggere il DM"
        ),

        new Question("Le buste Tyvek sono utilizzate per",
            [
                ["sterilizzazione a basse temperature", 1],
                ["sterilizzazione a vapore", 0],
                ["sterilizzazione a secco", 0],
                ["nessuna sterilizzazione", 0]
            ],
            "Vengono utilizzate nella sterelizzazione con plasma."
        ),

        new Question("Il carico dell’autoclave deve essere",
            [
                ["ammassato in fretta per ridurre i tempi di attesa", 0],
                ["distribuito uniformemente", 1],
                ["posizionato casualmente", 0],
                ["appoggiato alle pareti", 0]
            ],
            "La distribuzione uniforme favorisce la penetrazione del vapore."
        ),

        new Question("Il confezionamento non deve",
            [
                ["essere economico", 0],
                ["essere resistente", 0],
                ["rilasciare fibre", 1],
                ["essere pratico", 0]
            ],
            "Le fibre possono contaminare il DM."
        ),

        new Question("Qual è uno degli obiettivi principali della gestione dei rifiuti sanitari?",
            [
                ["Ridurre i costi ospedalieri", 0],
                ["Aumentare la produzione di rifiuti", 0],
                ["Favorire il riciclo dei farmaci", 0],
                ["Prevenire le infezioni e gli infortuni", 1]
            ],
            "La gestione dei rifiuti sanitari mira a prevenire infezioni e infortuni."
        ),

        new Question("I farmaci scaduti rientrano tra i rifiuti sanitari",
            [
                ["non pericolosi", 1],
                ["pericolosi infettivi", 0],
                ["assimilati agli urbani", 0],
                ["radioattivi", 0]
            ],
            "I farmaci scaduti sono classificati come rifiuti sanitari non pericolosi."
        ),

        new Question("I rifiuti assimilati agli urbani possono essere smaltiti tramite",
            [
                ["termodistruzione obbligatoria", 0],
                ["discarica o termovalorizzatore", 1],
                ["compostaggio", 0],
                ["smaltimento radioattivo", 0]
            ],
            "Possono essere avviati in discarica o al termovalorizzatore."
        ),

        new Question("I medicinali citotossici e citostatici sono rifiuti",
            [
                ["non pericolosi", 0],
                ["assimilati agli urbani", 0],
                ["pericolosi non infettivi", 1],
                ["radioattivi", 0]
            ],
            "Sono rifiuti sanitari pericolosi non a rischio infettivo."
        ),

        new Question("I rifiuti venuti a contatto con materiale biologico infetto sono classificati come",
            [
                ["radioattivi", 0],
                ["non pericolosi", 0],
                ["assimilati agli urbani", 0],
                ["pericolosi a rischio infettivo", 1]
            ],
            "Il contatto con materiale infetto li rende rifiuti pericolosi infettivi."
        ),

        new Question("I contenitori per taglienti devono essere",
            [
                ["rigidi e resistenti", 1],
                ["in cartone", 0],
                ["morbidi e flessibili", 0],
                ["trasparenti", 0]
            ],
            "Devono impedire perforazioni e tagli."
        ),

        new Question("I contenitori per taglienti devono riportare",
            [
                ["solo il nome del produttore", 0],
                ["rischio, tipo di rifiuto, produttore e data", 1],
                ["solo la data", 0],
                ["nessuna etichetta", 0]
            ],
            "L’etichetta deve identificare chiaramente il contenuto e il rischio."
        ),

        new Question("I rifiuti pericolosi infettivi vengono smaltiti tramite",
            [
                ["compostaggio", 0],
                ["riciclo", 0],
                ["termodistruzione", 1],
                ["discarica", 0]
            ],
            "La termodistruzione è obbligatoria per i rifiuti infettivi."
        ),

        new Question("Le parti anatomiche riconoscibili richiedono smaltimento",
            [
                ["in termovalorizzatore", 0],
                ["in compostaggio", 0],
                ["in discarica", 0],
                ["con cremazione o inumazione", 1]
            ],
            "Sono rifiuti che richiedono procedure particolari."
        ),

        new Question("La gestione dei rifiuti radioattivi dipende da",
            [
                ["tipo di isotopo e tempo di dimezzamento", 1],
                ["colore del contenitore", 0],
                ["quantità prodotta", 0],
                ["tipo di reparto", 0]
            ],
            "Il tempo di dimezzamento determina la modalità di smaltimento."
        ),

        new Question("I rifiuti radioattivi con tempo di dimezzamento breve possono essere",
            [
                ["smaltiti subito", 0],
                ["conservati fino al decadimento", 1],
                ["bruciati", 0],
                ["gettati negli scarichi", 0]
            ],
            "Vengono mantenuti in deposito temporaneo fino al decadimento."
        ),

        new Question("I rifiuti liquidi vengono smaltiti tramite",
            [
                ["incenerimento", 0],
                ["termodistruzione", 0],
                ["rete fognaria", 1],
                ["compostaggio", 0]
            ],
            "I rifiuti liquidi vengono eliminati tramite condotte di scarico."
        ),

        new Question("Le lava-padelle servono per",
            [
                ["sterilizzare strumenti chirurgici", 0],
                ["smaltire farmaci", 0],
                ["conservare campioni", 0],
                ["diluire e allontanare rifiuti liquidi", 1]
            ],
            "Sono apparecchiature per la gestione dei rifiuti liquidi."
        ),

        new Question("I contenitori monouso devono essere",
            [
                ["standardizzati con codice colore", 1],
                ["tutti dello stesso colore", 0],
                ["trasparenti", 0],
                ["senza etichetta", 0]
            ],
            "La standardizzazione facilita la corretta gestione dei rifiuti."
        ),

        new Question("I sacchi dei rifiuti devono essere riempiti fino a",
            [
                ["metà della capacità massima", 0],
                ["3/4 della capacità massima", 1],
                ["1/4 della capacità massima", 0],
                ["100% della capacità massima", 0]
            ],
            "Riempirli oltre può comprometterne la chiusura e la sicurezza."
        ),

        new Question("I contenitori per la raccolta dei rifiuti devono essere collocati",
            [
                ["lontano dalle aree di lavoro", 0],
                ["in magazzino", 0],
                ["vicino ai luoghi di lavoro", 1],
                ["solo all’ingresso del reparto", 0]
            ],
            "La vicinanza riduce il rischio di incidenti."
        ),

        new Question("I rifiuti taglienti devono essere gettati",
            [
                ["alla fine del turno", 0],
                ["solo se pieni", 0],
                ["dopo disinfezione", 0],
                ["immediatamente", 1]
            ],
            "Ritardare aumenta il rischio di punture accidentali."
        ),

        new Question("I contenitori riutilizzabili per rifiuti devono essere",
            [
                ["con coperchio apribile a pedale", 1],
                ["trasparenti", 0],
                ["senza coperchio", 0],
                ["in legno", 0]
            ],
            "Il pedale evita il contatto manuale."
        ),

        new Question("I rifiuti di amalgama odontoiatrica sono",
            [
                ["non pericolosi", 0],
                ["pericolosi non infettivi", 1],
                ["assimilati agli urbani", 0],
                ["radioattivi", 0]
            ],
            "Contengono sostanze chimiche pericolose."
        ),

        new Question("Le pellicole radiografiche sono rifiuti",
            [
                ["non pericolosi", 0],
                ["radioattivi", 0],
                ["pericolosi non infettivi", 1],
                ["urbani", 0]
            ],
            "Contengono sostanze chimiche da smaltire correttamente."
        ),

        new Question("I pannoloni dei pazienti non infetti sono",
            [
                ["pericolosi infettivi", 0],
                ["non smaltibili", 0],
                ["radioattivi", 0],
                ["assimilati agli urbani", 1]
            ],
            "Sono rifiuti assimilati agli urbani."
        ),

        new Question("I contenitori per non taglienti devono avere",
            [
                ["sacco termosaldato", 1],
                ["apertura larga", 0],
                ["nessuna chiusura", 0],
                ["volore rosso", 0]
            ],
            "Il sacco termosaldato garantisce tenuta e sicurezza."
        ),

        new Question("I simboli sui contenitori servono per",
            [
                ["decorazione", 0],
                ["identificazione del rischio", 1],
                ["indicare la data", 0],
                ["indicare il reparto", 0]
            ],
            "I simboli segnalano il tipo di rischio presente."
        ),

        new Question("I rifiuti radioattivi liquidi devono essere posti in",
            [
                ["sacchi neri", 0],
                ["contenitori di cartone", 0],
                ["depositi a doppia vasca", 1],
                ["contenitori per taglienti", 0]
            ],
            "Le doppie vasche evitano contaminazioni."
        ),

        new Question("I rifiuti radioattivi con tempo di dimezzamento >80 giorni sono",
            [
                ["bruciati", 0],
                ["smaltiti subito", 0],
                ["gettati negli scarichi", 0],
                ["conservati in contenitori metallici", 1]
            ],
            "Richiedono contenitori metallici per lo smaltimento."
        ),

        new Question("I rifiuti infettivi raccolti fuori da strutture sanitarie devono essere",
            [
                ["conferiti alla struttura sanitaria", 1],
                ["gettati nei rifiuti urbani", 0],
                ["smaltiti dal cittadino", 0],
                ["bruciati in casa", 0]
            ],
            "L’operatore è responsabile del corretto conferimento."
        ),

        new Question("I contenitori devono essere scelti in base a",
            [
                ["colore preferito", 0],
                ["dimensione del rifiuto", 1],
                ["numero di operatori", 0],
                ["disponibilità del reparto", 0]
            ],
            "La dimensione del rifiuto determina il contenitore adeguato."
        ),

        new Question("La spazzatura delle cucine ospedaliere è",
            [
                ["pericolosa infettiva", 0],
                ["non pericolosa", 0],
                ["assimilata agli urbani", 1],
                ["compostabile", 0]
            ],
            "È considerata rifiuto assimilato agli urbani."
        ),

        new Question("I gessi ortopedici sono rifiuti",
            [
                ["pericolosi infettivi", 0],
                ["non pericolosi", 0],
                ["radioattivi", 0],
                ["assimilati agli urbani", 1]
            ],
            "Sono rifiuti assimilati agli urbani."
        )

    ],

  getFeedback(score) {
    if (score >= 0 && score <= 20) return "/20";
    return "";
  }
};
