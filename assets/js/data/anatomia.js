import { Question } from "../models/Question.js";

export const AnatomiaTest = {
  questions: [

        new Question("Qual è l’unità morfologico-funzionale degli organismi viventi?",
            [
                ["La cellula", 1],
                ["Il tessuto", 0],
                ["L’organo", 0],
                ["L’apparato", 0]
            ],
            "La cellula è la più piccola struttura classificabile come vivente e rappresenta l’unità di base di tutti gli organismi."
        ),

        new Question("Le cellule",
            [
                ["hanno tutte la stessa forma", 0],
                ["hanno tutte forme variabili", 1],
                ["svolgono tutte la stessa funzione all'interno di un organismo", 0],
                ["formano un organismo solo quando sono più di una", 0]
            ],
            "La forma di una cellula cambia in base al tipo e alla funzione che essa svolge."
        ),

        new Question("La cellula eucariote",
            [
                ["è un virus", 0],
                ["ha il materiale genetico libero nel citoplasma", 0],
                ["ha un nucleo", 1],
                ["è composta da più cellule fuse insieme", 0]
            ],
            "La cellula eucariote ha una membrana interna che ingloba il materiale genetico e lo separa dal resto dell'ambiente cellulare."
        ),

        new Question("Il nucleo della cellula contiene",
            [
                ["IL-α", 0],
                ["RNA", 0],
                ["IgG", 0],
                ["DNA", 1]
            ],
            "Il nucleo è l'elemento che ingloba il patrimonio genetico della cellula in una doppia membrana nucleare fosfolipidica."
        ),

        new Question("Cosa sono gli organuli?",
            [
                ["Strutture presenti all'interno della cellula eucariote", 1],
                ["Piccoli insiemi di cellule che formato tessuti e organi", 0],
                ["Vescicole intracellulari", 0],
                ["Le cellule che compongono un organo", 0]
            ],
            "Gli organuli svolgono all'interno della cellula differenti funzioni necessarie alla sua sopravvivenza e compongono il citoplasma insieme al citosol (la parte liquida)."
        ),

        new Question("Il reticolo endoplasmatico",
            [
                ["fornisce una struttura rigida alla cellula", 0],
                ["è in continuità con la membrana nucleare", 1],
                ["forma la membrana esterna della cellula", 0],
                ["è il luogo di sintesi del codice genetico", 0]
            ],
            "La membrana nucleare continua con il reticolo endoplasmatico e quest'ultimo si divide in rugoso e liscio."
        ),

        new Question("La funzione del reticolo endoplasmatico liscio è principalmente",
            [
                ["la formazione dei ribosomi", 0],
                ["lo stoccaggio delle proteine", 0],
                ["la sintesi dei lipidi", 1],
                ["il trasporto del materiale genetico", 0]
            ],
            "Nel REL avviene la sintesi di ormoni steroidei (formati a partire dal colesterolo) e di lipidi come quelli costituenti la membrana cellulare."
        ),

        new Question("Il reticolo endoplasmatico rugoso",
            [
                ["è collegato direttamente alla membrana nucleare", 0],
                ["è la sede dei ribosomi", 0],
                ["è il luogo di sintesi delle proteine", 0],
                ["tutte le precedenti", 1]
            ],
            "Nel RER sono presenti i ribosomi, strutture in grado di sintetizzare proteine partendo dal mRNA proveniente dal nucleo."
        ),

        new Question("Cosa sintetizzano i ribosomi?",
            [
                ["Proteine", 1],
                ["Carboidrati", 0],
                ["RNA", 0],
                ["Lipidi", 0]
            ],
            "I ribosomi sono ancorati al RER e sono responsabili della sintesi proteica."
        ),

        new Question("Quale particolarità distingue i mitocondri?",
            [
                ["Possono non essere presenti in una cellula eucariote", 0],
                ["Sono dotati di un codice genetico proprio", 1],
                ["Occupano la quasi totalità dello spazio interno della cellula", 0],
                ["Sono sempre in numero pari", 0]
            ],
            "I mitocondri posseggono un proprio DNA diverso da quello della cellula."
        ),

        new Question("I mitocondri sono",
            [
                ["molecole di trasporto delle proteine", 0],
                ["di forma allungata e composti da una singola membrana", 0],
                ["organelli dedicati alla respirazione cellulare", 1],
                ["posizionati sulla superficie della membrana cellulare", 0]
            ],
            "I mitocondri sono le vere e proprie centrali energetiche della cellula e la loro funzione è la produzione di energia attraverso la respirazione cellulare."
        ),

        new Question("Cosa avviene nell'apparato di Golgi?",
            [
                ["La digestione intracellulare", 0],
                ["La formazione di organuli", 0],
                ["La respirazione cellulare", 0],
                ["Il trasporto di molecole", 1]
            ],
            "L'apparato di Golgi è un insieme di cisterne membranose appiattite impilate le une sulle altre dove si formano le vescicole che trasportano le molecole nel citoplasma."
        ),

        new Question("Quale organulo è il sistema digerente della cellula?",
            [
                ["Lisosoma", 1],
                ["Mitocondrio", 0],
                ["Ribosoma", 0],
                ["Perossisoma", 0]
            ],
            "I lisosomi degradano molecole estranee o danneggiati."
        ),

        new Question("Quale organulo ossida sostanze tossiche?",
            [
                ["Lisosoma", 0],
                ["Perossisoma", 1],
                ["Nucleo", 0],
                ["Ribosoma", 0]
            ],
            "I perossisomi svolgono ossidazioni metaboliche."
        ),

        new Question("Quale struttura regola gli scambi tra interno ed esterno della cellula?",
            [
                ["Citoscheletro", 0],
                ["Nucleo", 0],
                ["Membrana cellulare", 1],
                ["Apparato di Golgi", 0]
            ],
            "La membrana cellulare è semipermeabile e controlla il passaggio di sostanze."
        ),

        new Question("Quale struttura dà forma e movimento alla cellula?",
            [
                ["Apparato di Golgi", 0],
                ["Nucleo", 0],
                ["Lisosoma", 0],
                ["Citoscheletro", 1]
            ],
            "Il citoscheletro è formato da microtubuli e filamenti che si estendono nel citoplasma e forniscono supporto e movimento alla cellula."
        ),

        new Question("Qual funzione NON svolge il tessuto epiteliale?",
            [
                ["Degradazione", 1],
                ["Secrezione", 0],
                ["Rivestimento", 0],
                ["Protezione", 0]
            ],
            "L'epitelio è principalmente il tessuto di rivestimento della pelle (epidermide) e degli organi interni (mucose)."
        ),

        new Question("I tre tipi di epitelio sono",
            [
                ["epidermide, derma, ipoderma", 0],
                ["di rivestimento, ghiandolari, sensoriali", 1],
                ["appendicolare, assiale, viscerale", 0],
                ["tegumento, mucose, matrice", 0]
            ],
            "L'epitelio di rivestimento copre pelle, organi, vasi e parti interne di apparati respiratorio, digerente e urogenitale.\nL'epitelio ghiandolare è composto da cellule che producono secreti.\nL'epitelio sensoriale è percorso da nervi sensitivi specializzati, come l'epitelio pigmentato della retina, l'olfattivo del naso e le cellule gustative sulla lingua."
        ),

        new Question("Quale tessuto ha abbondante matrice extracellulare?",
            [
                ["Epiteliale", 0],
                ["Muscolare", 0],
                ["Connettivo", 1],
                ["Nervoso", 0]
            ],
            "Il tessuto connettivo collega e sostiene altri tessuti grazie alla matrice extracellulare."
        ),

        new Question("Quale NON è un tessuto connettivo?",
            [
                ["Osseo", 0],
                ["Sangue", 0],
                ["Adiposo", 0],
                ["Nervoso", 1]
            ],
            "I tessuti connettivi connettono sia strutturalmente che funzionalmente, gli altri tessuti e organi."
        ),

        new Question("Quale tessuto immagazzina trigliceridi?",
            [
                ["Adiposo", 1],
                ["Nervoso", 0],
                ["Muscolare", 0],
                ["Cartilagineo", 0]
            ],
            "Il tessuto adiposo è formato da adipociti che accumulano grasso come riserva energetica."
        ),

        new Question("Quale tessuto ha una matrice mineralizzata?",
            [
                ["Cartilagineo", 0],
                ["Osseo", 1],
                ["Nervoso", 0],
                ["Muscolare", 0]
            ],
            "La matrice dell'osso è composta da cristalli salini del calcio quali fosfati, carbonati e fluoruri."
        ),

        new Question("I condrociti sono cellule",
            [
                ["del sistema nervoso", 0],
                ["delle ossa", 0],
                ["delle cartilagini", 1],
                ["del sistema endocrino", 0]
            ],
            "Il tessuto cartilagineo è composto da cellule disperse in abbondante matrice extracellulare gelatinosa."
        ),

        new Question("Quale NON è un tipo di cartilagine?",
            [
                ["Fibrosa", 0],
                ["Ialina", 0],
                ["Elastica", 0],
                ["Ossea", 1]
            ],
            "Cartilagine ialina: articolazioni.\nCartilagine fibrosa: tendini, dischi intervertebrali.\nCartilagine elastica: orecchio, epiglottide."
        ),

        new Question("Quale tessuto muscolare è involontario e privo di striature?",
            [
                ["Viscerale", 1],
                ["Scheletrico", 0],
                ["Cardiaco", 0],
                ["Volontario", 0]
            ],
            "Il muscolo viscerale (liscio) è controllato dal sistema nervoso autonomo e non presenta sarcomeri."
        ),

        new Question("Tra le caratteristiche del tessuto nervoso troviamo",
            [
                ["contrattilità e lassità", 0],
                ["eccitabilità e conducibilità", 1],
                ["elasticità e rigidità", 0],
                ["connettività e trasmissibilità", 0]
            ],
            "La cellula nervosa è in grado di reagire a stimoli esterni (eccitabilità) e di trasmettere l'impulso insorto alle altre cellule (conducibilità)."
        ),

        new Question("I neuroni sono sostenuti da cellule",
            [
                ["epiteliali", 0],
                ["muscolari", 0],
                ["gliali", 1],
                ["adipose", 0]
            ],
            "Le cellula della glia sono un gruppo di cellule che avvolgono le cellule del sistema nervoso e forniscono protezione e struttura ai neuroni."
        ),

        new Question("Due o più tessuti che svolgono una funzione comune formano",
            [
                ["apparato", 0],
                ["organismo", 0],
                ["sistema", 0],
                ["organo", 1]
            ],
            "L’organo è costituito da tessuti diversi che collaborano a una funzione specifica."
        ),

        new Question("Quale parte dell’organo svolge la funzione principale?",
            [
                ["Parenchima", 1],
                ["Stroma", 0],
                ["Tonaca", 0],
                ["Capsula", 0]
            ],
            "Il parenchima è il tessuto funzionale dell’organo, mentre lo stroma è di sostegno."
        ),

        new Question("Come possono essere suddivisi gli organi?",
            [
                ["Grandi e piccoli", 0],
                ["Cavi e pieni", 1],
                ["Volontari e involontari", 0],
                ["Endogeni ed esogeni", 0]
            ],
            "Gli organi pieni (o parenchimatosi) hanno una struttura riempita da tessuto. Gli organi cavi hanno una parete che delimita un lume."
        ),

        new Question("Quale tonaca riveste internamente gli organi cavi?",
            [
                ["Muscolare", 0],
                ["Avventizia", 0],
                ["Mucosa", 1],
                ["Sierosa", 0]
            ],
            "La tonaca mucosa è lo strato interno che riveste cavità e visceri."
        ),

        new Question("In riferimento gli organi cavi, partendo dalla cavità e procedendo verso l'esterno troviamo nell'ordine",
            [
                ["tonaca mucosa, lume, tonaca media, tonaca avventizia", 0],
                ["tonaca avventizia, tonaca muscolare, tonaca mucosa, lume", 0],
                ["lume, tonaca avventizia, tonaca muscolare, tonaca mucosa", 0],
                ["lume, tonaca mucosa, tonaca muscolare, tonaca avventizia", 1]
            ],
            "La tonaca mucosa si affaccia sul lume ed è composta da epitelio di rivestimento adagiato su un sottile strato di tessuto connettivo (lamina propria) e uno strato di tessuto muscolare liscio (muscolaris mucosae).\nLa tonaca muscolare composta da fasci di fibre muscolari diversamente orientate innervate dal sistema nervoso simpatico che permettono movimenti peristaltici.\nLa tonaca avventizia è tessuto connettivo denso che avvolge esternamente gli organi cavi."
        ),

        new Question("La differenza tra un apparato e un sistema è",
            [
                ["l'origine dei tessuti e degli organi che lo compongono", 1],
                ["il numero di organi e tessuti che lo compongono", 0],
                ["lo spazio occupato dagli organi e dai tessuti che lo compongono", 0],
                ["la funzione dei tessuti e degli organi che lo compongono", 0]
            ],
            "Un apparato è composto da organi e tessuti con diversa origine (es. apparato digerente). Un sistema è composto da organi e tessuti con stessa origine (es. sistema scheletrico)."
        ),

        new Question("Quale termine indica l’equilibrio interno dell’organismo?",
            [
                ["Metabolismo", 0],
                ["Omeostasi", 1],
                ["Respirazione", 0],
                ["Digestione", 0]
            ],
            "L’omeostasi mantiene costanti le condizioni interne (es. pH, temperatura, pressione)."
        ),

        new Question("Qual è l’apparato più esteso del corpo umano?",
            [
                ["Apparato respiratorio", 0],
                ["Apparato digerente", 0],
                ["Apparato tegumentario", 1],
                ["Apparato muscolare", 0]
            ],
            "Il tegumento copre una superficie di circa 2 m² e ha un peso di circa 15 kg."
        ),

        new Question("Quale NON è una funzione della pelle?",
            [
                ["Sensoriale", 0],
                ["Termoregolatrice", 0],
                ["Protettiva", 0],
                ["Digestiva", 1]
            ],
            "La pelle non ha funzione digestiva."
        ),

        new Question("Tra gli strati della pelle NON troviamo",
            [
                ["periderma", 1],
                ["derma", 0],
                ["epidermide", 0],
                ["ipoderma", 0]
            ],
            "Partendo dallo strato più esterno e proseguendo verso l'interno troviamo l'epidermide, il derma e l'ipoderma."
        ),

        new Question("Cellule epiteliali in proliferazione continua si trovano",
            [
                ["nell'ipoderma", 0],
                ["nell'epidermide", 1],
                ["nel derma", 0],
                ["in tutti e tre gli strati", 0]
            ],
            "Nell'epidermide, più precisamente nello strato basale, vi sono cellule epiteliali cubiche in continua proliferazione."
        ),

        new Question("Quale tipo di tessuto costituisce il derma?",
            [
                ["Muscolare", 0],
                ["Epiteliale", 0],
                ["Connettivo", 1],
                ["Nervoso", 0]
            ],
            "Il derma è tessuto connettivo ricco di fibre e vasi e dà sostegno e nutrimento all'epidermide."
        ),

        new Question("Nell'ipoderma troviamo",
            [
                ["bulbi piliferi e ghiandole", 0],
                ["terminazioni nervose", 0],
                ["vasi sanguigni e linfatici", 0],
                ["tessuto adiposo", 1]
            ],
            "Nello strato più profondo del tegumento vi è il pannicolo adiposo sottocutaneo."
        ),

        new Question("Nell'apparato tegumentario NON troviamo ghiandole",
            [
                ["endocrine", 1],
                ["sebacee", 0],
                ["mammarie", 0],
                ["sudoripare", 0]
            ],
            "Le ghiandole endocrine secernono il loro contenuto direttamente nel flusso sanguigno."
        ),

        new Question("Dove sono più abbondanti le ghiandole sebacee?",
            [
                ["Piedi", 0],
                ["Testa", 1],
                ["Mani", 0],
                ["Torace", 0]
            ],
            "Sono associate ai follicoli piliferi, soprattutto in viso e cuoio capelluto."
        ),

        new Question("Quale funzione principale ha il sudore?",
            [
                ["Idratazione", 0],
                ["Eliminazione di tossine", 0],
                ["Termoregolazione", 1],
                ["Produzione di melanina", 0]
            ],
            "Il sudore regola la temperatura corporea."
        ),

        new Question("Le unghie sono composte da",
            [
                ["cellule morte", 1],
                ["matrice ossea", 0],
                ["tessuto connettivo", 0],
                ["nessuna delle precedenti", 0]
            ],
            "Le unghie sono composte da più strati di cellule morte piene di cheratina che conferisce loro la durezza."
        ),

        new Question("Nel follicolo pilifero troviamo",
            [
                ["ghiandola sebacea", 0],
                ["bulbo pilifero", 0],
                ["muscolo orripilatore", 0],
                ["tutte le risposte", 1]
            ],
            "Il bulbo pilifero produce le cellule morte piene di cheratina che costituiscono il pelo, la ghiandola sebacea produce il sebo che mantiene unite le scaglie della cuticola e il muscolo orripilatore (erettore del pelo) permette la mobilizzazione del pelo (pelle d'oca)."
        ),

        new Question("La melanina è responsabile di",
            [
                ["regolazione del ciclo sonno-veglia", 0],
                ["colorazione di pelle e capelli", 1],
                ["formazione delle unghie", 0],
                ["metabolismo di zuccheri semplici", 0]
            ],
            "La melanina viene prodotta dai melanociti quando vengono esposti alla luce e producono il pigmento scuro protegge dalle radiazioni ultraviolette."
        ),

        new Question("Qual è lo spessore medio della pelle?",
            [
                ["0.1-0.2 mm", 0],
                ["10-20 mm", 0],
                ["0.4-4 mm", 1],
                ["5-10 mm", 0]
            ],
            "Lo spessore varia da 0.4 a 4 mm."
        ),

        new Question("Quanto dura mediamente il ciclo di rinnovamento cellulare dell’epidermide?",
            [
                ["5-7 giorni", 0],
                ["60-90 giorni", 0],
                ["10-12 giorni", 0],
                ["15-30 giorni", 1]
            ],
            "Le cellule basali impiegano circa 15-30 giorni per arrivare allo strato corneo."
        ),

        new Question("Quale cellula produce sostanze responsabili dell'elasticità e resistenza della pelle?",
            [
                ["Fibroblasti", 1],
                ["Mastociti", 0],
                ["Cheratinociti", 0],
                ["Melanociti", 0]
            ],
            "I fibroblasti sintetizzano la matrice extracellulare composta da proteine come collagene ed elastina."
        ),

        new Question("Quale funzione principale svolge l’ipoderma?",
            [
                ["Produzione di melanina", 0],
                ["Riserva energetica", 1],
                ["Produzione di cheratina", 0],
                ["Sensibilità tattile", 0]
            ],
            "L’ipoderma contiene tessuto adiposo che funge da riserva energetica e da isolante termico."
        ),

        new Question("La temperatura corporea è regolata da",
            [
                ["il cervelletto", 0],
                ["il midollo spinale", 0],
                ["l'ipotalamo", 1],
                ["la corteccia cerebrale", 0]
            ],
            "L’ipotalamo controlla la termoregolazione."
        ),

        new Question("Quale delle seguenti NON è una funzione dell’apparato digerente?",
            [
                ["Assorbimento", 0],
                ["Assunzione cibo", 0],
                ["Digestione", 0],
                ["Respirazione", 1]
            ],
            "La respirazione appartiene all’apparato respiratorio, non al digerente."
        ),

        new Question("Qual è la lunghezza media del tubo digerente?",
            [
                ["12 m", 1],
                ["6 m", 0],
                ["20 m", 0],
                ["3 m", 0]
            ],
            "Il tubo digerente misura circa 12 metri dalla bocca all’ano."
        ),

        new Question("Dove si forma il bolo alimentare?",
            [
                ["Esofago", 0],
                ["Bocca", 1],
                ["Stomaco", 0],
                ["Faringe", 0]
            ],
            "Il bolo è l'impasto di cibo e saliva che si forma in bocca grazie alla masticazione."
        ),

        new Question("Dove si forma il chimo?",
            [
                ["Bocca", 0],
                ["Esofago", 0],
                ["Stomaco", 1],
                ["Faringe", 0]
            ],
            "Il chimo è il bolo mischiato e impastato con i succhi gastrici all'interno dello stomaco."
        ),

        new Question("Quali sono le ghiandole salivari maggiori?",
            [
                ["Gastriche, epatiche, pancreatiche", 0],
                ["Sottomandibolari, intestinali, gastriche", 0],
                ["Sublinguali, renali, parotidee", 0],
                ["Parotidi, sottomandibolari, sottolinguali", 1]
            ],
            "Le tre ghiandole salivari principali sono parotidi, sottomandibolari e sottolinguali."
        ),

        new Question("Quale sfintere regola il passaggio tra esofago e stomaco?",
            [
                ["Cardias", 1],
                ["Piloro", 0],
                ["Sfintere di Oddi", 0],
                ["Valvola ileo-cecale", 0]
            ],
            "Il cardias è lo sfintere esofageo inferiore."
        ),

        new Question("Quale sfintere regola il passaggio tra stomaco e duodeno?",
            [
                ["Cardias", 0],
                ["Piloro", 1],
                ["Valvola ileo-cecale", 0],
                ["Sfintere di Oddi", 0]
            ],
            "Il piloro regola il passaggio del chimo nello stomaco."
        ),

        new Question("L'esofago collega",
            [
                ["bocca e stomaco", 0],
                ["faringe e laringe", 0],
                ["faringe e stomaco", 1],
                ["bocca e laringe", 0]
            ],
            "L'esofago è un condotto muscolo-membranoso di 25-30 cm che collega faringe e stomaco."
        ),

        new Question("Quali sono le tre porzioni dello stomaco?",
            [
                ["Corpo, cieco, retto", 0],
                ["Fondo, colon, sigma", 0],
                ["Piloro, duodeno, digiuno", 0],
                ["Fondo, corpo, antro", 1]
            ],
            "Lo stomaco è suddiviso in fondo (parte superiore), corpo (parte centrale) e antro (parte inferiore)."
        ),

        new Question("Quale funzione NON è tipica dello stomaco?",
            [
                ["Funzione assorbente", 1],
                ["Funzione motoria", 0],
                ["Funzione digestiva", 0],
                ["Funzione contenitore", 0]
            ],
            "Lo stomaco ha capacità digestiva ma scarsa capacità assorbente."
        ),

        new Question("Quali sono le tre parti dell’intestino tenue?",
            [
                ["Colon, sigma, retto", 0],
                ["Duodeno, digiuno, ileo", 1],
                ["Digiuno, cieco, retto", 0],
                ["Duodeno, colon, sigma", 0]
            ],
            "L’intestino tenue è un tubo lungo circa 7 m ed è suddiviso in duodeno, digiuno e ileo."
        ),

        new Question("Quali strutture aumentano la superficie assorbente dell’intestino tenue?",
            [
                ["Papille", 0],
                ["Ciglia", 0],
                ["Villi", 1],
                ["Tenie", 0]
            ],
            "I villi intestinali aumentano la superficie assorbente."
        ),

        new Question("Quali sono le tre parti dell’intestino crasso?",
            [
                ["Colon, sigma, ileo", 0],
                ["Duodeno, colon, sigma", 0],
                ["Colon, digiuno, retto", 0],
                ["Cieco, colon, retto", 1]
            ],
            "L’intestino crasso è un tubo lungo circa 3 m ed è suddiviso in cieco, colon e retto."
        ),

        new Question("Tra le ghiandole collegate all'apparato digerente NON troviamo",
            [
                ["la tiroide", 1],
                ["il fegato", 0],
                ["le ghiandole salivari", 0],
                ["il pancreas", 0]
            ],
            "La tiroide non è una ghiandola dell'apparato digerente, ma del sistema endocrino."
        ),

        new Question("Quale organo produce la bile?",
            [
                ["Colecisti", 0],
                ["Fegato", 1],
                ["Stomaco", 0],
                ["Pancreas", 0]
            ],
            "La bile è prodotta dal fegato e si accumula nella colecisti (o cistifellea)."
        ),

        new Question("Dove viene immagazzinata la bile?",
            [
                ["Pancreas", 0],
                ["Stomaco", 0],
                ["Colecisti", 1],
                ["Duodeno", 0]
            ],
            "La bile è prodotta dal fegato e si accumula nella colecisti (o cistifellea)."
        ),

        new Question("Quale funzione NON è tipica del fegato di un adulto?",
            [
                ["Metabolismo glucidico", 0],
                ["Produzione fattori coagulazione", 0],
                ["Funzione detossificante", 0],
                ["Funzione ematopoietica", 1]
            ],
            "La funzione ematopoietica del fegato è solo fetale."
        ),

        new Question("Quale funzione metabolica svolge il fegato sui lipidi?",
            [
                ["Li sintetizza, immagazzina ed elimina", 1],
                ["Li assorbe trasformati in zuccheri", 0],
                ["Li digerisce", 0],
                ["Li trasforma in saliva", 0]
            ],
            "Il fegato sintetizza colesterolo, fosfolipidi e acidi grassi, li immagazzina ed elimina."
        ),

        new Question("Quale funzione svolge la bile?",
            [
                ["Digestione dei carboidrati", 0],
                ["Emulsionare i grassi", 1],
                ["Produzione di saliva", 0],
                ["Sintesi proteica", 0]
            ],
            "La bile emulsiona i grassi facilitando l’azione degli enzimi prodotti dal pancreas che li rompono per facilitarne l'assorbimento."
        ),

        new Question("Il pancreas esocrino produce",
            [
                ["insulina", 0],
                ["bile", 0],
                ["enzimi digestivi", 1],
                ["saliva", 0]
            ],
            "La parte esocrina del pancreas produce enzimi digestivi."
        ),

        new Question("La parte endocrina del pancreas produce",
            [
                ["pepsina", 0],
                ["saliva", 0],
                ["bile", 0],
                ["insulina e glucagone", 1]
            ],
            "Insulina e glucagone vengono prodotti nelle isole di Langerhans nel pancreas."
        ),

        new Question("Dove avviene l'assorbimento della maggior parte dei nutrienti?",
            [
                ["Intestino tenue", 1],
                ["Stomaco", 0],
                ["Intestino crasso", 0],
                ["Fegato", 0]
            ],
            "L’intestino tenue assorbe carboidrati, proteine, grassi, vitamine e sali minerali."
        ),

        new Question("Quale struttura chiude l’orifizio laringeo durante la deglutizione?",
            [
                ["Ugola", 0],
                ["Epiglottide", 1],
                ["Piloro", 0],
                ["Cardias", 0]
            ],
            "L’epiglottide impedisce al cibo di entrare nella trachea e nelle vie aeree."
        ),

        new Question("I reni",
            [
                ["regolano la temperatura corporea", 0],
                ["producono globuli rossi", 0],
                ["filtrano il sangue", 1],
                ["producono ormoni sessuali", 0]
            ],
            "I reni filtrano il sangue eliminando i cataboliti e producono urina."
        ),

        new Question("Qual è l’unità funzionale del rene?",
            [
                ["Nefrite", 0],
                ["Nefrosi", 0],
                ["Nefertiti", 0],
                ["Nefrone", 1]
            ],
            "Il nefrone è l’unità funzionale del rene e ce ne sono circa 1 milione per rene."
        ),

        new Question("Quale struttura raccoglie l’urina dai dotti del rene?",
            [
                ["Calici renali", 1],
                ["Vescica", 0],
                ["Capsula di Bowman", 0],
                ["Uretra", 0]
            ],
            "I calici convogliano l’urina verso la pelvi renale."
        ),

        new Question("Quale sostanza NON dovrebbe essere presente nell’urina normale?",
            [
                ["Creatinina", 0],
                ["Glucosio", 1],
                ["Urea", 0],
                ["Sali minerali", 0]
            ],
            "La presenza di glucosio indica patologia (es. diabete)."
        ),

        new Question("Quale struttura collega il rene alla vescica?",
            [
                ["Uretra", 0],
                ["Pelvi renale", 0],
                ["Uretere", 1],
                ["Calici renali", 0]
            ],
            "Gli ureteri trasportano l’urina dai reni alla vescica."
        ),

        new Question("Quanta urina è in grado di contenere la vescica in media?",
            [
                ["2 L", 0],
                ["50 mL", 0],
                ["1 L", 0],
                ["300 mL", 1]
            ],
            "La vescica si riempie con circa 300 mL di urina prima che venga percepito lo stimolo urinario."
        ),

        new Question("Quale organo è la centralina del sistema circolatorio?",
            [
                ["Cuore", 1],
                ["Fegato", 0],
                ["Milza", 0],
                ["Polmoni", 0]
            ],
            "Il cuore pompa il sangue in tutto l’organismo."
        ),

        new Question("L'apparato cardiocircolatorio si divide in circolazione",
            [
                ["intracardiaca ed extracardiaca", 0],
                ["grande e piccola", 1],
                ["sanguigna e linfatica", 0],
                ["superiore e inferiore", 0]
            ],
            "La grande circolazione è la circolazione sistemica, la piccola circolazione è la circolazione polmonare."
        ),

        new Question("Le arterie",
            [
                ["arrivano al cuore", 0],
                ["trasportano sangue ricco di ossigeno", 0],
                ["partono dal cuore", 1],
                ["trasportano sangue ricco di anidride carbonica", 0]
            ],
            "Le arterie sono i vasi sanguigni che originano dal cuore."
        ),

        new Question("Le vene",
            [
                ["trasportano sangue ricco di anidride carbonica", 0],
                ["partono dal cuore", 0],
                ["trasportano sangue ricco di ossigeno", 0],
                ["arrivano al cuore", 1]
            ],
            "Le vene sono i vasi sanguigni che raggiungono il cuore."
        ),

        new Question("La circolazione sanguigna umana è detta doppia e completa perché",
            [
                ["il sangue passa due volte dal cuore e non si mescola", 1],
                ["coinvolge anche la linfa", 0],
                ["il sangue cede gas due volte in un singolo ciclo", 0],
                ["attraversa l'intero corpo due volte", 0]
            ],
            "Il sangue parte dal cuore, arriva ai tessuti, arriva al cuore, raggiunge ai polmoni e torna al cuore per ricominciare il ciclo."
        ),

        new Question("La grande circolazione inizia da",
            [
                ["atrio destro", 0],
                ["ventricolo sinistro", 1],
                ["atrio sinistro", 0],
                ["ventricolo destro", 0]
            ],
            "Il ventricolo sinistro pompa sangue ossigenato nell’aorta e da lì alla periferia."
        ),

        new Question("La piccola circolazione ha origine da",
            [
                ["ventricolo sinistro", 0],
                ["atrio sinistro", 0],
                ["ventricolo destro", 1],
                ["atrio destro", 0]
            ],
            "Dal ventricolo destro parte l’arteria polmonare verso i polmoni."
        ),

        new Question("Le vene polmonari trasportano",
            [
                ["sangue povero di ossigeno", 0],
                ["linfa", 0],
                ["solo anidride carbonica", 0],
                ["sangue ossigenato", 1]
            ],
            "Sono le uniche vene che portano sangue ossigenato."
        ),

        new Question("Lo scambio di ossigeno e anidride carbonica avviene",
            [
                ["nei capillari", 1],
                ["nelle vene", 0],
                ["nelle arterie", 0],
                ["nei vasi linfatici", 0]
            ],
            "Nei capillari i gas possono attraversare le pareti dei vasi ed essere scambiati con l'ambiente esterno."
        ),

        new Question("Le vene e le arterie",
            [
                ["sono unite insieme a coppie", 0],
                ["hanno diverso spessore", 1],
                ["sono strutturalmente uguali", 0],
                ["possono scambiarsi il sangue tra loro", 0]
            ],
            "Le arterie hanno una tonaca muscolare più spessa delle vene poiché devono sopportare la pressione diretta della pompa cardiaca."
        ),

        new Question("Quali strutture presenti nelle vene impediscono al sangue di fluire per gravità verso il basso?",
            [
                ["Valvole tricuspide e mitrale", 0],
                ["Valvole di Heimlich", 0],
                ["Valvole a nido di rondine", 1],
                ["Valvole aortiche", 0]
            ],
            "Le valvole a nido di rondine sono strutture presenti nelle vene che si aprono soltanto in una direzione e impediscono al sangue di retrocedere nel percorso del vaso."
        ),

        new Question("I capillari hanno parete formata da",
            [
                ["tre tonache", 0],
                ["muscolatura liscia", 0],
                ["tessuto connettivo", 0],
                ["solo endotelio", 1]
            ],
            "I capillari hanno una parete sottilissima per favorire gli scambi metabolici."
        ),

        new Question("La valvola mitrale collega",
            [
                ["atrio sinistro e ventricolo sinistro", 1],
                ["atrio destro e ventricolo destro", 0],
                ["ventricolo sinistro e arteria aorta", 0],
                ["atrio destro e atrio sinistro", 0]
            ],
            "La valvola mitrale (o bicuspide) permette il passaggio del sangue dall'atrio sinistro al ventricolo sinistro."
        ),

        new Question("La valvola polmonare collega",
            [
                ["atrio destro e arteria polmonare", 0],
                ["ventricolo destro e piccola circolazione", 1],
                ["atrio destro e ventricolo sinistro", 0],
                ["vena polmonare e atrio sinistro", 0]
            ],
            "La valvola polmonare regola il flusso di sangue dal ventricolo destro all’arteria polmonare."
        ),

        new Question("La valvola tricuspide collega",
            [
                ["ventricolo destro e ventricolo sinistro", 0],
                ["vena cava e atrio destro", 0],
                ["atrio destro e ventricolo destro", 1],
                ["ventricolo destro e arteria polmonare", 0]
            ],
            "La valvola tricuspide mette in comunicazione l'atrio e il ventricolo sinistri."
        ),

        new Question("La valvola aortica collega",
            [
                ["atrio sinistro e ventricolo sinistro", 0],
                ["arteria aorta e atrio sinistro", 0],
                ["vena cava e atrio destro", 0],
                ["ventricolo sinistro e arteria aorta", 1]
            ],
            "La valvola aortica si trova tra il ventricolo sinistro e l'aorta."
        ),

        new Question("A riposo quanto sangue riesce a pompare il cuore in un minuto?",
            [
                ["circa 5 litri", 1],
                ["circa 0,5 litri", 0],
                ["circa 10 litri", 0],
                ["circa 2 litri", 0]
            ],
            "Il cuore riesce in un minuto a muovere l'intera riserva sanguigna di un essere umano adulto, ovvero circa 5 litri (in assenza di sforzi fisici)."
        ),

        new Question("Quale delle seguenti NON è una funzione del sistema linfatico?",
            [
                ["Drenaggio dei liquidi dai tessuti", 0],
                ["Trasporto di sostanze nutritive", 1],
                ["Accumulo di linfociti", 0],
                ["Assorbimento dei lipidi dall'intestino", 0]
            ],
            "Le sostanze nutritive vengono trasportate dal sangue."
        ),

        new Question("I linfonodi servono a",
            [
                ["pompare sangue", 0],
                ["produrre ossigeno", 0],
                ["filtrare la linfa", 1],
                ["trasportare nutrienti", 0]
            ],
            "Sono stazioni di filtraggio e produzione linfocitaria."
        ),

        new Question("I tre tipi di respirazione sono",
            [
                ["tracheale, bronchiale, polmonare", 0],
                ["nasale, buccale, mista", 0],
                ["ambientale, polmonare, sanguigna", 0],
                ["esterna, interna, cellulare", 1]
            ],
            "Respirazione esterna: inspiriamo ed espiriamo aria nelle vie aeree.\nRespirazione interna: a livello degli alveoli polmonari dove avvengono gli scambi respiratori.\nRespirazione cellulare: respirazione di tutte le cellule del corpo."
        ),

        new Question("Qual è la porta principale di ingresso dell’aria nei polmoni?",
            [
                ["Naso", 1],
                ["Orecchio", 0],
                ["Bocca", 0],
                ["Pelle", 0]
            ],
            "Attraverso la cavità nasale l'aria viene riscaldata, umidificata e filtrata."
        ),

        new Question("Quali organi sono comuni sia all'apparato respiratorio che a quello digerente?",
            [
                ["Naso e faringe", 0],
                ["Bocca e faringe", 1],
                ["Naso ed esofago", 0],
                ["Bocca e laringe", 0]
            ],
            "Bocca e faringe fanno parte sia dell'apparato digerente che respiratorio."
        ),

        new Question("La laringe è l’organo",
            [
                ["della digestione", 0],
                ["dell’olfatto", 0],
                ["della fonazione", 1],
                ["della circolazione", 0]
            ],
            "Nella laringe troviamo le corde vocali."
        ),

        new Question("Quale struttura impedisce al cibo di entrare nelle vie respiratorie?",
            [
                ["Vibrisse", 0],
                ["Turbinati", 0],
                ["Ugola", 0],
                ["Epiglottide", 1]
            ],
            "L’epiglottide chiude la laringe durante la deglutizione."
        ),

        new Question("La trachea è formata da",
            [
                ["cartilagine", 1],
                ["ossa", 0],
                ["muscoli", 0],
                ["epitelio", 0]
            ],
            "La trachea è formata da 16-20 anelli cartilaginei rigidi che la mantengono sempre aperta."
        ),

        new Question("Perché gli anelli della trachea sono incompleti?",
            [
                ["Per permettere il passaggio dell’aria", 0],
                ["Per consentire l’espansione dell’esofago durante la deglutizione", 1],
                ["Per favorire la fonazione", 0],
                ["Per ridurre la pressione sulla gola", 0]
            ],
            "La trachea è posizionata davanti all'esofago e nel punto di contatto dei due organi non vi è la cartilagine degli anelli in modo da permettere all'esofago di non venire compresso dalla trachea in fase di deglutizione."
        ),

        new Question("Dove avvengono gli scambi gassosi tra il sangue e l'ambiente esterno?",
            [
                ["Bronchi", 0],
                ["Polmoni", 0],
                ["Alveoli", 1],
                ["Pleure", 0]
            ],
            "Gli alveoli sono strutture ad acino dove l'aria esterna entra in contatto indiretto con il flusso sanguigno."
        ),

        new Question("La superficie alveolare totale è circa",
            [
                ["7 m²", 0],
                ["150 m²", 0],
                ["20 m²", 0],
                ["75 m²", 1]
            ],
            "Gli alveoli massimizzano la superficie per favorire gli scambi gassosi."
        ),

        new Question("Le pleure sono",
            [
                ["membrane che rivestono i polmoni", 1],
                ["cartilagini della trachea", 0],
                ["muscoli respiratori", 0],
                ["legamenti di sostegno degli alveoli", 0]
            ],
            "Le pleure sono membrane che rivestono i polmoni e facilitano lo scivolamento di questi organi contro la parete toracica durante la loro espansione."
        ),

        new Question("L’inspirazione avviene grazie a",
            [
                ["contrazione dei muscoli intercostali", 0],
                ["contrazione del diaframma", 1],
                ["allargamento della trachea", 0],
                ["rilassamento del diaframma", 0]
            ],
            "La contrazione del diaframma lo abbassa e permette ai polmoni di espandersi."
        ),

        new Question("I muscoli addominali intervengono soprattutto",
            [
                ["nell’inspirazione normale", 0],
                ["nella fonazione", 0],
                ["nell’espirazione forzata", 1],
                ["nella deglutizione", 0]
            ],
            "La contrazione dei muscoli addominali spinge il diaframma verso l’alto e forza lo svuotamento dei polmoni."
        ),

        new Question("Quale funzione principale svolge il sistema nervoso centrale?",
            [
                ["Generare cellule gliali", 0],
                ["Trasmettere impulsi ai muscoli", 0],
                ["Solo regolare la frequenza cardiaca e respiratoria", 0],
                ["Elaborare informazioni e produrre risposte", 1]
            ],
            "Il SNC integra stimoli interni ed esterni e produce risposte appropriate."
        ),

        new Question("Il sistema nervoso si suddivide in",
            [
                ["centrale, periferico, autonomo", 1],
                ["muscolare, respiratorio, cardiaco", 0],
                ["encefalico, spinale, periferico", 0],
                ["cognitivo, sensoriale, inconscio", 0]
            ],
            "SNC: encefalo e midollo spinale.\nSNP: radici, plessi e tronchi nervosi che collegano il SNC ai muscoli.\nSNA: gangli e nervi che collegano il SNC agli organi."
        ),

        new Question("Quale cellula è l’unità funzionale del sistema nervoso?",
            [
                ["Eritrocita", 0],
                ["Neurone", 1],
                ["Cellula gliale", 0],
                ["Fibroblasto", 0]
            ],
            "Il neurone è la cellula specializzata nella trasmissione dell’impulso nervoso."
        ),

        new Question("Quale parte del neurone riceve informazioni?",
            [
                ["Soma", 0],
                ["Assone", 0],
                ["Dendriti", 1],
                ["Bottoni sinaptici", 0]
            ],
            "I dendriti raccolgono segnali provenienti da altri neuroni."
        ),

        new Question("Le sinapsi sono",
            [
                ["sostanze chimiche che trasmettono informazioni", 0],
                ["gli spazi tra neuroni e cellule della glia", 0],
                ["gli stimoli elettrici che viaggiano lungo i neuroni", 0],
                ["il punto di contatto tra due neuroni", 1]
            ],
            "Le sinapsi sono i siti di contatto funzionale tra due neuroni."
        ),

        new Question("Le sinapsi possono essere di tipo",
            [
                ["elettrico e chimico", 1],
                ["chimico e biologico", 0],
                ["elettrico e fisiologico", 0],
                ["solo elettrico", 0]
            ],
            "Nelle sinapsi elettriche l'impulso nervoso è istantanea grazie al passaggio diretto di corrente da una cellula all'altra. Nelle sinapsi chimiche il segnale viene inviato tramite il rilascio di un mediatore detto neurotrasmettitore."
        ),

        new Question("Quali sono le tre meningi?",
            [
                ["Epinevrio, perinevrio, endonevrio", 0],
                ["Dura madre, aracnoide, pia madre", 1],
                ["Encefalica, midollare, spinale", 0],
                ["Telencefalo, diencefalo, mesencefalo", 0]
            ],
            "Le meningi sono membrane che rivestono e proteggono il cervello."
        ),

        new Question("Il liquido cefalorachidiano",
            [
                ["nutre le cellule cerebrali", 0],
                ["impedisce il passaggio di microrganismi", 0],
                ["protegge l'encefalo da insulti meccanici", 1],
                ["tutte e tre le risposte", 0]
            ],
            "Il LCR o liquor assorbe l'energia di impatti e protegge il cervello dagli urti."
        ),

        new Question("La barriera ematoencefalica",
            [
                ["è totalmente permeabile", 0],
                ["impedisce il passaggio di qualsiasi sostanza nell'encefalo", 0],
                ["permette solo il passaggio di ossigeno", 0],
                ["è semipermeabile e selettiva", 1]
            ],
            "Protegge il cervello da sostanze nocive ma lascia passare nutrienti e gas."
        ),

        new Question("Quale struttura collega i due emisferi cerebrali?",
            [
                ["Corpo calloso", 1],
                ["Tronco encefalico", 0],
                ["Midollo spinale", 0],
                ["Cervelletto", 0]
            ],
            "Il corpo calloso è un fascio di fibre di connessione che permette lo scambio di informazioni tra i due emisferi."
        ),

        new Question("Dove si trova il centro di coordinazione dei movimenti?",
            [
                ["Tronco encefalico", 0],
                ["Cervelletto", 1],
                ["Midollo spinale", 0],
                ["Cervello", 0]
            ],
            "Il cervelletto coordina i movimenti volontari."
        ),

        new Question("Il sistema ortosimpatico provoca",
            [
                ["contrazione pupillare", 0],
                ["rallentamento cardiaco", 0],
                ["aumento frequenza cardiaca", 1],
                ["digestione attiva", 0]
            ],
            "Il sistema nervoso autonomo (orto)simpatico prepara l’organismo alla lotta o fuga."
        ),

        new Question("Il sistema parasimpatico",
            [
                ["aumenta la glicogenolisi", 0],
                ["dilata i bronchi", 0],
                ["stimola adrenalina", 0],
                ["stimola la secrezione gastrica", 1]
            ],
            "Il sistema nervoso autonomo parasimpatico è preposto alle attività di riposo."
        ),

        new Question("Quale effetto ha il sistema ortosimpatico sul cuore?",
            [
                ["Aumenta frequenza", 1],
                ["Rallenta i battiti", 0],
                ["Riduce la pressione arteriosa", 0],
                ["Nessuna delle risposte", 0]
            ],
            "Il simpatico accelera l’attività cardiaca (lotta o fuggi)."
        ),

        new Question("Quale effetto ha il sistema parasimpatico sul cuore?",
            [
                ["Stimola adrenalina", 0],
                ["Riduce la frequenza", 1],
                ["Aumenta la forza di contrazione", 0],
                ["Aumenta la frequenza", 0]
            ],
            "Il parasimpatico rallenta l'attività cardiaca."
        ),

        new Question("Quale parte dell’encefalo è la più primitiva?",
            [
                ["Corpo calloso", 0],
                ["Cervello", 0],
                ["Tronco encefalico", 1],
                ["Cervelletto", 0]
            ],
            "Il tronco encefalico si occupa di funzioni vitali di base come la frequenza cardiaca e la respirazione."
        ),

        new Question("Qual è la funzione principale del sistema endocrino?",
            [
                ["Trasporto di ossigeno", 0],
                ["Produzione di anticorpi", 0],
                ["Digestione dei nutrienti", 0],
                ["Produzione di ormoni", 1]
            ],
            "Il sistema endocrino regola funzioni vitali tramite ormoni secreti nel sangue."
        ),

        new Question("Gli ormoni agiscono su",
            [
                ["cellule specifiche", 1],
                ["solo sul cuore", 0],
                ["tutte le cellule indiscriminatamente", 0],
                ["solo sulle cellule nervose", 0]
            ],
            "Ogni ormone agisce su recettori specifici delle cellule bersaglio."
        ),

        new Question("Quale organo NON fa parte del sistema endocrino?",
            [
                ["Rene", 0],
                ["Polmoni", 1],
                ["Pelle", 0],
                ["Tiroide", 0]
            ],
            "Le ghiandole del sistema endocrino sono: ipofisi, tiroide, paratiroidi, ghiandole surrenali, pancreas, epifisi, ovaie, testicoli, rene, miocardio, timo, placenta, fegato, pelle."
        ),

        new Question("Dove si trova l’ipofisi?",
            [
                ["Nella cavità toracica", 0],
                ["Nel midollo spinale", 0],
                ["Alla base del diencefalo", 1],
                ["Nel fegato", 0]
            ],
            "L’ipofisi è situata nella scatola cranica, in una depressione dell'osso sfenoide chiamata sella turcica."
        ),

        new Question("Quale ruolo svolge l'ipofisi?",
            [
                ["Regola la trasmissione degli impulsi neuronali", 0],
                ["Assorbe iodio", 0],
                ["Produce globuli bianchi", 0],
                ["Regola l'attività di altre ghiandole", 1]
            ],
            "L'ipofisi secerne nove ormoni che stimolano o inibiscono l'attività delle altre ghiandole del sistema endocrino."
        ),

        new Question("Quali ormoni produce la tiroide?",
            [
                ["T3, T4 e calcitonina", 1],
                ["Insulina e glucagone", 0],
                ["Cortisolo e aldosterone", 0],
                ["Adrenalina e noradrenalina", 0]
            ],
            "La tiroide rilascia T3 e T4, che aumentano il metabolismo dell'organismo, e calcitonina che abbassa i livelli di calcio nel sangue favorendone il deposito a livello osseo."
        ),

        new Question("Un segno di ipertiroidismo è",
            [
                ["ipotermia", 0],
                ["tachicardia", 1],
                ["obesità", 0],
                ["bradicardia", 0]
            ],
            "Gli ormoni T3 e T4 prodotti dalla tiroide accelerano il metabolismo dell'organismo e quindi causano tachicardia."
        ),

        new Question("Un segno di ipotiroidismo è",
            [
                ["ipertensione", 0],
                ["tachicardia", 0],
                ["ipercolesterolemia", 1],
                ["diarrea", 0]
            ],
            "La scarsa produzione di T3 e T4 (che provocano un aumentato metabolismo) tende ad aumentare i livelli di colesterolo nel sangue."
        ),

        new Question("Le paratiroidi producono",
            [
                ["LH", 0],
                ["ACTH", 0],
                ["FSH", 0],
                ["PTH", 1]
            ],
            "Il paratormone (PTH) prodotto dalle paratiroidi ha un'azione opposta alla calcitonina prodotta dalla tiroide (quindi aumenta i livelli di calcio nel sangue)."
        ),

        new Question("Dove si trovano le ghiandole surrenali?",
            [
                ["Sopra il rene", 1],
                ["Sotto il rene", 0],
                ["A lato del rene", 0],
                ["Dentro il rene", 0]
            ],
            "Sono due ghiandole di forma piramidale situate sopra il rene da cui sono separate da tessuto adiposo."
        ),

        new Question("Gli ormoni prodotti dai surreni",
            [
                ["hanno attività androgenica", 0],
                ["regolano la pressione arteriosa", 0],
                ["aumentano la glicemia", 0],
                ["tutte le precedenti", 1]
            ],
            "Le ghiandole surrenali producono: aldosterone che regola la pressione aumentando il riassorbimento di sodio e l'escrezione del potassio nei tubuli renali; glucocorticoidi che aumentano la glicemia e stimolano la sintesi di glucosio e glicogeno; androgeni che regolano il desiderio sessuale, la secrezione sebacea e lo sviluppo di peli pubici e ascellari."
        ),

        new Question("Quale ormone abbassa la glicemia?",
            [
                ["Adrenalina", 0],
                ["Cortisolo", 0],
                ["Insulina", 1],
                ["Glucagone", 0]
            ],
            "L’insulina favorisce la conversione del glucosio in glicogeno e il suo accumulo nel fegato."
        ),

        new Question("Il glucagone stimola",
            [
                ["deposito di calcio", 0],
                ["glicogenolisi", 1],
                ["sintesi proteica", 0],
                ["glicogenosintesi", 0]
            ],
            "Il glucagone aumenta la glicemia stimolando la degradazione del glicogeno a glucosio."
        ),

        new Question("L’epifisi produce",
            [
                ["melatonina", 1],
                ["ormone della crescita", 0],
                ["cortisolo", 0],
                ["ormone antidiuretico", 0]
            ],
            "L'epifisi è preposta alla sintesi dell'ormone melatonina."
        ),

        new Question("La melatonina regola",
            [
                ["la produzione di latte nella ghiandola mammaria", 0],
                ["il ritmo sonno-veglia", 1],
                ["la pigmentazione della pelle", 0],
                ["la glicemia", 0]
            ],
            "La melatonina viene prodotta durante la notte (in assenza di luce) e regola il ritmo circadiano di sonno-veglia."
        ),

        new Question("Quale struttura collega sistema nervoso ed endocrino?",
            [
                ["Midollo spinale", 0],
                ["Cervelletto", 0],
                ["Ipotalamo", 1],
                ["Corteccia cerebrale", 0]
            ],
            "L’ipotalamo è il ponte tra SNC e sistema endocrino."
        )

    ],
    
  getFeedback(score) {
    if (score >= 0 && score <= 20) return "/20";
    return "";
  }
};
