import { Question } from "../models/Question.js";

export const FisiatriaTest = {
  questions: [

        new Question("Qual è la funzione del midollo rosso?",
          [
            ["Produrre calcio", 0],
            ["Produrre cellule nervose", 0],
            ["Produrre cellule del sangue", 1],
            ["Produrre liquido sinoviale", 0]
          ],
            "Il midollo rosso è contenuto nel tessuto spugnoso di tutte le ossa ed è una riserva di cellule progenitrici di globuli rossi, globuli bianchi e piastrine."
        ),

        new Question("Il periostio è",
          [
            ["una cartilagine articolare", 0],
            ["una membrana che riveste l'osso", 1],
            ["un tipo di muscolo", 0],
            ["il midollo osseo giallo", 0]
          ],
            "Ogni osso è rivestito da una guaina di tessuto connettivo (periostio) dove scorrono vasi sanguigni, vasi linfatici e nervi che poi penetrano nell’osso stesso per trasportare nutrimento e innervarlo."
        ),

        new Question("Il liquido sinoviale serve a",
          [
            ["nutrire i muscoli", 0],
            ["lubrificare l'articolazione", 1],
            ["produrre calcio", 0],
            ["proteggere i nervi", 0]
          ],
            "Il liquido sinoviale riempie la membrana sinoviale posta tra due ossa in una diartrosi (articolazione mobile) fungendo da cuscinetto per evitare sfregamenti diretti tra le epifisi."
        ),

        new Question("Quale tra queste è un'articolazione mobile?",
          [
            ["Sutura cranica", 0],
            ["Colonna vertebrale", 0],
            ["Sinfisi pubica", 0],
            ["Gomito", 1]
          ],
            "L’articolazione del gomito (tra omero, radio e ulna) permette un ampio range di movimento ed è quindi una diartrosi (articolazione mobile).\nLe suture craniche (tra le ossa del cranio) non permettono nessun movimento e sono pertanto sinartrosi (articolazioni fisse).\nLe articolazioni tra le vertebre e tra le due ossa pubiche permettono piccoli movimenti e sono perciò anfiartrosi (articolazioni semi-mobili)."
        ),

        new Question("Le ossa piatte sono costituite da",
          [
            ["solo tessuto spugnoso", 0],
            ["tessuto spugnoso rivestito da tessuto compatto", 1],
            ["solo tessuto compatto", 0],
            ["tessuto cartilagineo", 0]
          ],
            "Tutte le ossa sono composte nel medesimo modo: una massa di tessuto osseo spugnoso rivestita da tessuto osseo compatto e periostio. Fanno eccezione le ossa lunghe dove il periostio lascia spazio a tessuto cartilagineo a livello delle epifisi (dove si innesta la capsula articolare) mentre all’interno della diafisi vi è una cavità riempita di midollo giallo (tessuto adiposo)."
        ),

        new Question("Quante falangi ha l'alluce?",
          [
            ["1", 0],
            ["2", 1],
            ["3", 0],
            ["4", 0]
          ],
            "Le dita delle mani e dei piedi hanno la stessa struttura: 3 falangi (ossa brevi) per ogni dito ad eccezione di pollici e alluci che ne hanno solo 2."
        ),

        new Question("Le coste si articolano con",
          [
            ["le vertebre toraciche", 1],
            ["le vertebre cervicali", 0],
            ["il bacino", 0],
            ["le vertebre lombari", 0]
          ],
            "Le coste compongono la gabbia toracica (che protegge cuore e polmoni e dà sostengo al torace) e si articolano posteriormente con i processi trasversi delle vertebre toraciche e anteriormente con lo sterno (le vertebre toraciche sono 1]2 come le coppie di coste)."
        ),

        new Question("Il bacino è formato da",
          [
            ["il sacro e le vertebre lombari", 0],
            ["il pube e la rotula", 0],
            ["due femori e il sacro", 0],
            ["ischio, ileo e pube", 1]
          ],
            "Due ischi, due ilei e due ossa pubiche compongono il bacino."
        ),

        new Question("Le articolazioni sterno-costali sono principalmente",
          [
            ["sinartrosi", 0],
            ["anfiartrosi", 1],
            ["diartrosi", 0],
            ["sinoviali", 0]
          ],
            "Le coste non permettono grandi movimenti, ma consentono alla gabbia toracica di espandersi durante la respirazione per favorire l’espansione dei polmoni. Sono quindi anfiartrosi o articolazioni semi-mobili."
        ),

        new Question("L'osteoporosi è",
          [
            ["una malattia muscolare", 0],
            ["una malattia articolare", 0],
            ["una malattia del sistema nervoso", 0],
            ["una malattia del sistema scheletrico", 1]
          ],
            "L’osteoporosi è una progressiva riduzione della concentrazione di calcio nelle ossa che compare in età avanzata con una incidenza maggiore nelle donne rispetto agli uomini (a causa degli squilibri ormonali dovuti alla menopausa). Le ossa risultano così indebolite e più soggette a fratture."
        ),

        new Question("Dove posso trovare muscolatura liscia?",
          [
            ["Nelle falangi", 0],
            ["Nel cuore", 0],
            ["Nell'aorta addominale", 1],
            ["Nell'epidermide", 0]
          ],
            "L’aorta (e tutti gli altri vasi) hanno una componente di tessuto muscolare liscio (tonaca muscolare o media) che permette loro di espandersi in modo elastico e di sopportare la pressione sanguigna durante la diastole (contrazione dei ventricoli)."
        ),

        new Question("Quale proprietà consente al muscolo di mantenere una tensione anche a riposo?",
          [
            ["Contrattilità", 0],
            ["Elasticità", 0],
            ["Tonicità", 1],
            ["Eccitabilità", 0]
          ],
            "I muscoli (soprattutto quelli che ci permettono di mantenere la postura) non sono mai completamente a riposo: devono mantenere una minima contrazione per evitare che il nostro corpo cada “vittima” della forza di gravità (tono muscolare)."
        ),

        new Question("Il deambulatore antibrachiale",
          [
            ["scarica il peso sulle ascelle", 0],
            ["scarica il peso sugli avambracci", 1],
            ["è fisso", 0],
            ["non ha ruote", 0]
          ],
            "Anti (avanti) + brachiale (braccio) = avambraccio"
        ),

        new Question("I tendini collegano",
          [
            ["un osso a un osso", 0],
            ["un muscolo a un muscolo", 0],
            ["un muscolo a un osso", 1],
            ["un nervo a un muscolo", 0]
          ],
            "I tendini sono un prolungamento dell’epimisio (membrana di tessuto connettivo che riveste il muscolo) e permettono l’inserzione del muscolo sull’osso."
        ),

        new Question("Quante ossa ha lo scheletro umano?",
          [
            ["180", 0],
            ["206", 1],
            ["220", 0],
            ["250", 0]
          ],
            "Il corpo umano ha circa: 206 ossa, 350 articolazioni, 650 muscoli."
        ),

        new Question("Il sarcomero è",
          [
            ["un tipo di osso", 0],
            ["una fibra nervosa", 0],
            ["una cartilagine", 0],
            ["un'unità contrattile del muscolo", 1]
          ],
            "Il sarcomero è l’unità contrattile più piccola in cui si può dividere il muscolo. Esso è formato da un filamento di miosina le cui estremità sono legate a diversi filamenti di actina. Quando la miosina “tira” verso di sé le fibre di actina, il muscolo si contrae e si accorcia."
        ),

        new Question("L'endoprotesi",
          [
            ["sostituisce la testa del femore", 1],
            ["sostituisce l'articolazione coxofemorale", 0],
            ["è sconsigliata nei pazienti con osteoporosi", 0],
            ["è effettuata solo bilateralmente", 0]
          ],
            "L’intervento di endoprotesi, spesso effettuato in caso di frattura lungo il collo del femore, sostituisce la testa del femore per permettere all’osso di muoversi nell’acetabolo."
        ),

        new Question("La contrazione isometrica",
          [
            ["accorcia il muscolo", 0],
            ["allunga il muscolo", 0],
            ["non modifica la lunghezza del muscolo", 1],
            ["è tipica dei muscoli lisci", 0]
          ],
            "Iso = uguale	Metrica = lunghezza\nAvviene quando il muscolo si contrae (genera forza) senza né allungarsi né accorciarsi."
        ),

        new Question("I muscoli antigravitari",
          [
            ["sono muscoli lisci", 0],
            ["mantengono la postura", 1],
            ["sono solo negli arti inferiori", 0],
            ["sono muscoli viscerali", 0]
          ],
            "Sono muscoli che, mantenendo un tono anche a riposo, permettono di vincere la forza di gravità e di far mantenere al corpo una postura."
        ),

        new Question("La contrazione eccentrica",
          [
            ["accorcia il muscolo", 0],
            ["allunga il muscolo prima di contrarlo", 1],
            ["non produce movimento", 0],
            ["è tipica dei muscoli lisci", 0]
          ],
            "Il muscolo esercita una forza, ma lo fa aumentando la sua lunghezza, agendo come un freno per controllare il movimento."
        ),

        new Question("I muscoli volontari sono",
          [
            ["viscerali", 0],
            ["coinvolti solo nella digestione", 0],
            ["striati", 1],
            ["presenti solo negli arti", 0]
          ],
            "La muscolatura striata (o scheletrica) è volontaria. La muscolatura liscia (o viscerale) è involontaria."
        ),

        new Question("Il trapezio è",
          [
            ["un muscolo", 1],
            ["un osso", 0],
            ["un'articolazione", 0],
            ["un tendine", 0]
          ],
            "Origina dalla terza vertebra cervicale fino alla dodicesima vertebra toracica e si inserisce sul terzo laterale della clavicola e sulla spina della scapola. Permette alcuni movimenti della testa, della colonna cervicale e della scapola."
        ),

        new Question("I muscoli viscerali sono",
          [
            ["volontari", 0],
            ["involontari", 1],
            ["striati", 0],
            ["scheletrici", 0]
          ],
            "La muscolatura striata (o scheletrica) è volontaria. La muscolatura liscia (o viscerale) è involontaria."
        ),

        new Question("Quale delle seguenti NON è una complicanza in seguito ad allettamento prolungato?",
          [
            ["Polmonite", 0],
            ["Ipotrofia muscolare", 0],
            ["Piaghe da decubito", 0],
            ["Fascite plantare", 1]
          ],
            "Una polmonite può verificarsi perché l’allettamento prolungato favorisce il deposito di secreto nei polmoni.\nL’ipotrofia muscolare consiste nella riduzione della massa della muscolatura scheletrica ed è causata da lunghi periodi di inattività.\nLe piaghe da decubito possono manifestarsi nel caso in cui il paziente allettato non cambi spesso posizione, andando quindi a premere col proprio peso per periodi prolungati sempre sulle stesse porzioni del corpo.\nLa fascite plantare è una infiammazione delle fasce muscolari della pianta del piede e può verificarsi in caso di attività fisica eccessiva (non è quindi il caso per persone allettate)."
        ),

        new Question("Le ossa lunghe sono caratterizzate da",
          [
            ["una forma piatta e sottile", 0],
            ["una struttura irregolare", 0],
            ["una diafisi e due epifisi", 1],
            ["una cavità piena di liquido sinoviale", 0]
          ],
            "La diafisi è la parte centrale delle ossa lunghe ed è rivestita da periostio. Le epifisi sono le due estremità dove il periostio lascia spazio a tessuto cartilagineo per meglio innestare la membrana sinoviale dell’articolazione."
        ),

        new Question("L’intervento chirurgico per frattura del femore",
          [
            ["è sempre evitabile", 0],
            ["serve a ridurre l'immobilizzazione", 1],
            ["è consigliato solo se la persona non presenta patologie pregresse", 0],
            ["non previene complicanze", 0]
          ],
            "L’intervento chirurgico per la frattura del femore, soprattutto nei pazienti anziani, è fortemente raccomandato per ridurre i tempi di immobilizzazione e favorire una ripresa più rapida della mobilità. Questo approccio riduce significativamente il rischio di complicanze legate all’allettamento prolungato."
        ),

        new Question("Se calcio un pallone eseguo un movimento di",
          [
            ["intrarotazione", 0],
            ["flessoestensione", 1],
            ["anteroabduzione", 0],
            ["avvicinamento al piano sagittale", 0]
          ],
            "Quando si calcia un pallone, il movimento principale coinvolto è quello di flessione ed estensione dell’anca e del ginocchio. Questo tipo di movimento consente di portare la gamba indietro (flessione) e poi in avanti con forza (estensione)."
        ),

        new Question("La lussazione all’anca post-operatoria può avvenire",
          [
            ["se si cammina troppo", 0],
            ["se si dorme sul fianco", 1],
            ["se si salgono le scale", 0],
            ["se si usa il bastone", 0]
          ],
            "La lussazione consiste nella fuoriuscita dell’osso dalla sua sede articolare. Nel caso dell’anca (articolazione coxofemorale) questo può avvenire se il paziente assume posizioni scorrette, in particolare dormendo sul fianco senza adeguato supporto. Questa posizione può causare movimenti di rotazione o adduzione eccessiva, aumentando il rischio di fuoriuscita della testa femorale dalla cavità acetabolare."
        ),

        new Question("L'acetabolo è",
          [
            ["il punto di inserzione della testa dell'omero", 0],
            ["la parte più compromessa nelle fratture di femore", 0],
            ["diverso negli uomini e nelle donne", 0],
            ["composto da tre ossa", 1]
          ],
            "La cavità acetabolare è il punto di unione delle tre ossa che compongono il bacino: l’ileo, l’ischio e il pube."
        ),

        new Question("La posizione prona è",
          [
            ["seduta", 0],
            ["distesa con l'addome verso il basso", 1],
            ["laterale", 0],
            ["distesa con l'addome verso l'alto", 0]
          ],
            "Prono = disteso sulla Pancia\nSupino = disteso sulla Schiena"
        ),

        new Question("Le epifisi si trovano",
          [
            ["al centro delle ossa lunghe", 0],
            ["solo nelle ossa piatte", 0],
            ["nelle ossa corte", 0],
            ["alle estremità delle ossa lunghe", 1]
          ],
            "Le epifisi sono le porzioni terminali delle ossa lunghe, come il femore, l’omero o la tibia. Sono costituite da tessuto osseo spugnoso e rivestite da cartilagine articolare, che consente il movimento fluido nelle articolazioni."
        ),

        new Question("La posizione anatomica prevede",
          [
            ["braccia incrociate", 0],
            ["gambe piegate", 0],
            ["palmi rivolti in avanti", 1],
            ["testa inclinata", 0]
          ],
            "Una persona in posizione anatomica si trova in piedi, in posizione eretta con la testa eretta, sguardo e palmi delle mani rivolti in avanti, braccia lungo i fianchi e dita delle mani estese, piedi in avanti e perpendicolari al corpo."
        ),

        new Question("Quale tra questi è un osso lungo?",
          [
            ["Scapola", 0],
            ["Rotula", 0],
            ["Femore", 1],
            ["Vertebra", 0]
          ],
            "La scapola è un osso piatto. La rotula è un osso sesamoide. La vertebra è un osso irregolare."
        ),

        new Question("Quale tipo di contrazione muscolare comporta un accorciamento del muscolo?",
          [
            ["Isometrica", 0],
            ["Isotonica concentrica", 1],
            ["Eccentrica", 0],
            ["Isotonica centrale", 0]
          ],
            "La contrazione isotonica concentrica avviene quando il muscolo si accorcia mentre sviluppa tensione, come nel sollevamento di un peso."
        ),

        new Question("Il posizionamento corretto del paziente serve a",
          [
            ["favorire il sonno", 0],
            ["migliorare la digestione", 0],
            ["evitare ulcere da pressione", 1],
            ["ridurre la febbre", 0]
          ],
            "Il corretto posizionamento del paziente è fondamentale per prevenire le piaghe da decubito, che si sviluppano a causa della pressione prolungata su specifiche aree del corpo, soprattutto nei pazienti allettati."
        ),

        new Question("La posizione di Fowler",
          [
            ["è sconsigliata nei pazienti con protesi d'anca", 0],
            ["prevede il paziente semiseduto tra 30° e 60°", 1],
            ["deve essere effettuata da almeno due operatori", 0],
            ["non può essere effettuata se il paziente ha un catetere vescicale", 0]
          ],
            "La posizione di Fowler è una posizione semiseduta, con il busto sollevato tra 30° e 60°, utile per favorire la respirazione e la digestione, spesso utilizzata in ambito post-operatorio o nei pazienti con problemi respiratori."
        ),

        new Question("L'epimisio avvolge",
          [
            ["la testa del femore", 0],
            ["il ventre muscolare", 1],
            ["la diafisi delle ossa lunghe", 0],
            ["i nervi cranici", 0]
          ],
            "L’epimisio è il rivestimento più esterno del muscolo scheletrico e circonda l’intero muscolo (ventre muscolare). È composto da tessuto connettivo e si continua con i tendini."
        ),

        new Question("Quale ausilio per la deambulazione offre maggiore stabilità?",
          [
            ["Bastone", 0],
            ["Stampella canadese", 0],
            ["Tripode", 0],
            ["Deambulatore", 1]
          ],
            "Il deambulatore è l’ausilio che garantisce la massima stabilità, grazie ai suoi quattro punti d’appoggio. Può avere quattro appoggi fissi, due appoggi fissi e due ruote o quattro ruote. È particolarmente indicato per persone con equilibrio compromesso o debolezza muscolare."
        ),

        new Question("Le stampelle canadesi servono a",
          [
            ["migliorare la postura", 0],
            ["scaricare il peso da un arto", 1],
            ["rafforzare i muscoli", 0],
            ["sostituire il deambulatore nei luoghi chiusi", 0]
          ],
            "Le stampelle canadesi permettono di alleggerire il carico su un arto inferiore in caso di infortunio o intervento chirurgico, facilitando la deambulazione e il recupero motorio."
        ),

        new Question("I movimenti di rotazione si effettuano sul piano",
          [
            ["sagittale", 0],
            ["mediale", 0],
            ["frontale", 0],
            ["trasversale", 1]
          ],
            "I movimenti di rotazione (intrarotazione ed extrarotazione) avvengono sul piano trasversale, che divide il corpo in parte superiore e inferiore."
        ),

        new Question("Quale delle seguenti NON è una funzione dell’apparato scheletrico?",
          [
            ["Sostegno del corpo", 0],
            ["Produzione di ormoni", 1],
            ["Protezione degli organi interni", 0],
            ["Produzione di cellule del sangue", 0]
          ],
            "L’apparato scheletrico svolge funzioni come sostegno, protezione degli organi interni, movimento, produzione di cellule del sangue (emopoiesi nel midollo osseo), e riserva di minerali. La produzione di ormoni è funzione principale delle ghiandole del sistema endocrino."
        ),

        new Question("I tripodi e i quadripodi",
          [
            ["non sono regolabili", 0],
            ["sono instabili", 0],
            ["hanno una base di appoggio maggiore delle canadesi", 1],
            ["possono essere usati solo in presenza di un operatore", 0]
          ],
            "I tripodi e quadripodi sono ausili per la deambulazione con tre o quattro punti di appoggio, offrendo maggiore stabilità rispetto alle stampelle canadesi, che hanno un solo punto di contatto con il suolo."
        ),

        new Question("La frattura del collo del femore è frequente",
          [
            ["negli sportivi", 0],
            ["nei bambini", 0],
            ["negli anziani", 1],
            ["nelle persone diabetiche", 0]
          ],
            "La frattura del collo del femore è molto comune negli anziani, soprattutto a causa dell’osteoporosi e della ridotta stabilità posturale, che aumentano il rischio di cadute."
        ),

        new Question("Il cambio di posizione del paziente allettato andrebbe fatto",
          [
            ["ogni 2 ore", 1],
            ["ogni cambio turno", 0],
            ["una volta al giorno", 0],
            ["solo se ha subito un intervento chirurgico", 0]
          ],
            "Per prevenire le ulcere da pressione, è raccomandato cambiare posizione ogni 2 ore nei pazienti allettati. Questo favorisce la circolazione e riduce la pressione su aree vulnerabili come sacro, talloni e scapole."
        ),

        new Question("Per salire le scale dopo protesi d’anca",
          [
            ["è meglio evitare le scale dopo l’operazione", 0],
            ["si usa prima la gamba operata", 0],
            ["si usa prima la gamba sana", 1],
            ["si usano indifferentemente entrambe le gambe", 0]
          ],
            "Durante la salita delle scale, si inizia con la gamba sana per evitare di sovraccaricare l’arto operato. Nella discesa, invece, si scende prima con la gamba operata."
        ),

        new Question("Il bastone deve essere usato",
          [
            ["sempre sul lato operato", 0],
            ["sempre sul lato sano", 1],
            ["solo in casa", 0],
            ["solo dopo un intervento", 0]
          ],
            "Il bastone si usa sul lato opposto all’arto operato o debole per migliorare l’equilibrio e ridurre il carico sull’arto compromesso."
        ),

        new Question("Il piano frontale divide il corpo",
          [
            ["in alto e basso", 0],
            ["in destra e sinistra", 0],
            ["in anteriore e posteriore", 1],
            ["in diagonale rispetto alla linea mediana", 0]
          ],
            "Piano frontale = anteriore/posteriore\nPiano sagittale = destra/sinistra\nPiano trasversale = alto/basso"
        ),

        new Question("La contrazione isotonica concentrica",
          [
            ["allunga il muscolo", 0],
            ["accorcia il muscolo", 1],
            ["non produce movimento", 0],
            ["è tipica dei muscoli involontari", 0]
          ],
            "Durante una contrazione concentrica, il muscolo si accorcia mentre sviluppa forza, come nel sollevare un peso."
        ),

        new Question("Le ossa del carpo sono",
          [
            ["lunghe", 0],
            ["piatte", 0],
            ["irregolari", 1],
            ["sesamoidi", 0]
          ],
            "Le ossa del carpo (polso) sono irregolari. La loro forma permette alla mano di eseguire movimenti complessi lungo i piani del corpo."
        ),

        new Question("Gli ausili per la deambulazione",
          [
            ["migliorano la vista", 0],
            ["rafforzano i muscoli", 0],
            ["evitano il sovraccarico sugli arti inferiori", 1],
            ["sostituiscono la fisioterapia", 0]
          ],
            "Ausili come bastoni, stampelle e deambulatori ridistribuiscono il peso corporeo, riducendo il carico su articolazioni e muscoli debilitati."
        )

    ],

  getFeedback(score) {
    if (score >= 0 && score <= 20) return "/20";
    return "";
  }
};
