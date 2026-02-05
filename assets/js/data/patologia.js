import { Question } from "../models/Question.js";

export const PatologiaTest = {
  questions: [

        new Question("Secondo l’OMS (1948), la salute è",
            [
                ["completo benessere fisico, mentale e sociale", 1],
                ["assenza di malattia", 0],
                ["capacità di lavorare senza limitazioni", 0],
                ["benessere fisico e mentale", 0]
            ],
            "L’OMS definisce la salute come completo benessere, non solo assenza di malattia."
        ),

        new Question("L’omeostasi è",
            [
                ["la capacità di guarire rapidamente", 0],
                ["la capacità di mantenere costante l’ambiente interno", 1],
                ["la capacità di adattarsi socialmente", 0],
                ["la capacità di produrre anticorpi", 0]
            ],
            "L’omeostasi è l’equilibrio dinamico dei parametri interni."
        ),

        new Question("Quale sistema regola principalmente l’omeostasi?",
            [
                ["Sistema scheletrico", 0],
                ["Sistema muscolare", 0],
                ["Sistema nervoso neurovegetativo ed endocrino", 1],
                ["Sistema linfatico", 0]
            ],
            "Omeostasi = regolazione nervosa autonoma + ormoni."
        ),

        new Question("La dimensione fisica della salute riguarda",
            [
                ["le relazioni sociali", 0],
                ["le emozioni", 0],
                ["i valori spirituali", 0],
                ["il funzionamento dell’organismo", 1]
            ],
            "È la parte più tangibile legata al corpo."
        ),

        new Question("La dimensione emotiva riguarda",
            [
                ["la capacità di gestire le emozioni", 1],
                ["la capacità di elaborare pensieri", 0],
                ["la capacità di comunicare", 0],
                ["la capacità di muoversi", 0]
            ],
            "È la gestione equilibrata delle emozioni."
        ),

        new Question("La malattia è definita come",
            [
                ["una condizione sempre irreversibile", 0],
                ["una perdita dell’omeostasi", 1],
                ["una condizione esclusivamente infettiva", 0],
                ["una condizione mentale", 0]
            ],
            "La malattia è perdita dell’equilibrio interno."
        ),

        new Question("La sindrome è",
            [
                ["una malattia genetica", 0],
                ["una malattia infettiva", 0],
                ["un insieme di segni e sintomi", 1],
                ["una malattia cronica", 0]
            ],
            "La sindrome è un insieme di manifestazioni cliniche."
        ),

        new Question("L’eziologia studia",
            [
                ["i sintomi", 0],
                ["le terapie", 0],
                ["la riabilitazione", 0],
                ["le cause delle malattie", 1]
            ],
            "L’eziologia è lo studio delle cause delle malattie."
        ),

        new Question("Le malattie infettive sono causate da",
            [
                ["virus, batteri, funghi, protozoi", 1],
                ["stress", 0],
                ["carenze vitaminiche", 0],
                ["traumi", 0]
            ],
            "Sono agenti patogeni biologici."
        ),

        new Question("Le malattie professionali derivano da",
            [
                ["virus", 0],
                ["condizioni lavorative", 1],
                ["carenze nutrizionali", 0],
                ["stress emotivo", 0]
            ],
            "Sono legate all’ambiente di lavoro."
        ),

        new Question("Le malattie autoimmuni sono caratterizzate da",
            [
                ["infezioni ricorrenti", 0],
                ["carenza di anticorpi", 0],
                ["attacco del sistema immunitario ai tessuti sani", 1],
                ["eccesso di globuli rossi", 0]
            ],
            "Il sistema immunitario attacca il proprio corpo."
        ),

        new Question("Le malattie congenite sono",
            [
                ["sempre ereditarie", 0],
                ["acquisite dopo la nascita", 0],
                ["sempre infettive", 0],
                ["presenti alla nascita", 1]
            ],
            "Sono presenti già al parto."
        ),

        new Question("La patogenesi studia",
            [
                ["i meccanismi con cui la malattia si sviluppa", 1],
                ["le cause", 0],
                ["i sintomi", 0],
                ["le terapie", 0]
            ],
            "È il processo di sviluppo della malattia."
        ),

        new Question("L’artrite reumatoide è un esempio di malattia",
            [
                ["infettiva", 0],
                ["autoimmune", 1],
                ["congenita", 0],
                ["professionale", 0]
            ],
            "Il sistema immunitario attacca la sinovia."
        ),

        new Question("Una malattia acuta ha decorso",
            [
                ["lento", 0],
                ["asintomatico", 0],
                ["rapido", 1],
                ["sempre grave", 0]
            ],
            "Le malattie acute insorgono rapidamente."
        ),

        new Question("Una malattia subacuta ha decorso",
            [
                ["asintomatico", 0],
                ["rapidissimo", 0],
                ["cronico", 0],
                ["prolungato ma meno intenso", 1]
            ],
            "È intermedia tra acuta e cronica."
        ),

        new Question("Le malattie croniche sono",
            [
                ["di lunga durata e lenta progressione", 1],
                ["sempre mortali", 0],
                ["trasmissibili", 0],
                ["sempre ereditarie", 0]
            ],
            "Le croniche durano a lungo e progrediscono lentamente."
        ),

        new Question("La prevenzione primaria mira a",
            [
                ["curare la malattia", 0],
                ["evitare che la malattia insorga", 1],
                ["limitare le complicanze", 0],
                ["riabilitare il paziente", 0]
            ],
            "Agisce prima che la malattia compaia."
        ),

        new Question("Un esempio di prevenzione primaria è",
            [
                ["mammografia", 0],
                ["riabilitazione post-ictus", 0],
                ["vaccinazione", 1],
                ["controllo glicemico nel diabetico", 0]
            ],
            "I vaccini prevengono l’insorgenza della malattia."
        ),

        new Question("La prevenzione secondaria mira a",
            [
                ["eliminare i fattori di rischio", 0],
                ["riabilitare", 0],
                ["evitare complicanze", 0],
                ["diagnosticare precocemente", 1]
            ],
            "Intercetta la malattia nelle fasi iniziali."
        ),

        new Question("Un esempio di prevenzione secondaria è",
            [
                ["screening mammografico", 1],
                ["vaccinazione", 0],
                ["educazione alimentare", 0],
                ["fisioterapia post-ictus", 0]
            ],
            "La mammografia rileva precocemente il tumore."
        ),

        new Question("La prevenzione terziaria mira a",
            [
                ["evitare l’insorgenza della malattia", 0],
                ["prevenire complicanze", 1],
                ["eliminare i fattori ambientali", 0],
                ["diagnosticare precocemente", 0]
            ],
            "Agisce su malattie già presenti."
        ),

        new Question("Un esempio di prevenzione terziaria nel diabete è",
            [
                ["vaccinazione", 0],
                ["screening colon-retto", 0],
                ["monitoraggio glicemico", 1],
                ["educazione scolastica", 0]
            ],
            "Serve a prevenire complicanze cardiovascolari."
        ),

        new Question("La ricerca del sangue occulto fecale è",
            [
                ["terapia", 0],
                ["prevenzione terziaria", 0],
                ["prevenzione primaria", 0],
                ["prevenzione secondaria", 1]
            ],
            "È uno screening precoce del tumore del colon."
        ),

        new Question("Il tracciamento dei contatti nelle infezioni sessuali è",
            [
                ["prevenzione secondaria", 1],
                ["prevenzione terziaria", 0],
                ["prevenzione primaria", 0],
                ["nessuna delle precedenti", 0]
            ],
            "Serve a limitare la diffusione e trattare precocemente."
        ),

        new Question("La riabilitazione post-ictus è",
            [
                ["prevenzione secondaria", 0],
                ["prevenzione terziaria", 1],
                ["diagnosi", 0],
                ["prevenzione primaria", 0]
            ],
            "Mira a ridurre complicanze e migliorare la qualità di vita."
        ),

        new Question("La perdita dell’omeostasi può essere",
            [
                ["solo permanente", 0],
                ["solo transitoria", 0],
                ["transitoria o permanente", 1],
                ["sempre grave", 0]
            ],
            "Può essere temporanea o duratura."
        ),

        new Question("La patologia è",
            [
                ["lo studio dei sintomi", 0],
                ["la riabilitazione", 0],
                ["la cura delle malattie", 0],
                ["lo studio delle cause e dei meccanismi delle malattie", 1]
            ],
            "Patologia = eziologia + patogenesi."
        ),

        new Question("La sindrome metabolica è",
            [
                ["un insieme di fattori di rischio metabolici", 1],
                ["una malattia congenita", 0],
                ["una malattia autoimmune", 0],
                ["una malattia infettiva", 0]
            ],
            "È un insieme di condizioni che aumentano il rischio cardiovascolare."
        ),

        new Question("L’infiammazione è",
            [
                ["una malattia autoimmune", 0],
                ["un meccanismo di difesa non specifico innato", 1],
                ["una reazione allergica", 0],
                ["un meccanismo di difesa specifico", 0]
            ],
            "L’infiammazione è una risposta innata e non specifica."
        ),

        new Question("Una delle funzioni dell’infiammazione è",
            [
                ["produrre anticorpi", 0],
                ["aumentare la temperatura corporea", 0],
                ["eliminare la causa del danno cellulare", 1],
                ["aumentare la pressione arteriosa", 0]
            ],
            "L’infiammazione mira a rimuovere l’agente lesivo."
        ),

        new Question("Tra le cause dell’infiammazione troviamo",
            [
                ["solo agenti fisici", 0],
                ["solo agenti infettivi", 0],
                ["solo reazioni immunitarie", 0],
                ["agenti fisici, chimici, infettivi e immunitari", 1]
            ],
            "Le cause sono molteplici e diverse."
        ),

        new Question("Il rubor è",
            [
                ["eritema", 1],
                ["calore", 0],
                ["tumefazione", 0],
                ["dolore", 0]
            ],
            "Rubor = arrossamento."
        ),

        new Question("Il tumor è",
            [
                ["calore", 0],
                ["gonfiore", 1],
                ["dolore", 0],
                ["perdita di funzione", 0]
            ],
            "Tumor = tumefazione."
        ),

        new Question("Il calor è dovuto a",
            [
                ["vasocostrizione", 0],
                ["necrosi", 0],
                ["vasodilatazione", 1],
                ["chemiotassi", 0]
            ],
            "La vasodilatazione aumenta il flusso sanguigno."
        ),

        new Question("Il dolor è causato da",
            [
                ["riduzione del flusso sanguigno", 0],
                ["aumento dei globuli rossi", 0],
                ["vasocostrizione", 0],
                ["mediatori chimici", 1]
            ],
            "L’edema e i mediatori irritano le terminazioni nervose."
        ),

        new Question("La functio laesa indica",
            [
                ["alterazione funzionale", 1],
                ["aumento dei globuli bianchi", 0],
                ["aumento della funzione", 0],
                ["aumento della temperatura", 0]
            ],
            "È la perdita o riduzione della funzione."
        ),

        new Question("La risposta vascolare dell’infiammazione include",
            [
                ["aumento della pressione arteriosa", 0],
                ["vasodilatazione e aumento permeabilità", 1],
                ["riduzione del flusso sanguigno", 0],
                ["vasocostrizione", 0]
            ],
            "È la prima fase della risposta infiammatoria."
        ),

        new Question("L’essudato è",
            [
                ["un liquido sterile senza cellule", 0],
                ["solo plasma", 0],
                ["un liquido infiammatorio ricco di cellule e proteine", 1],
                ["solo fibrina", 0]
            ],
            "Contiene liquido, cellule e detriti."
        ),

        new Question("La marginazione dei leucociti consiste in",
            [
                ["passaggio attraverso l’endotelio", 0],
                ["distruzione dei patogeni", 0],
                ["produzione di anticorpi", 0],
                ["spostamento verso la parete del capillare", 1]
            ],
            "I leucociti si avvicinano all’endotelio."
        ),

        new Question("Il rotolamento (rolling) è",
            [
                ["movimento lento e instabile dei leucociti sull’endotelio", 1],
                ["distruzione dei patogeni da parte dei leucociti", 0],
                ["ancoraggio stabile dei leucociti all'endotelio", 0],
                ["passaggio dei leucociti tra le cellule endoteliali", 0]
            ],
            "È un legame debole e transitorio."
        ),

        new Question("L’adesione leucocitaria è",
            [
                ["la produzione di citochine", 0],
                ["un legame stabile con l’endotelio", 1],
                ["la fagocitosi", 0],
                ["il passaggio nel tessuto", 0]
            ],
            "È necessaria per la diapedesi."
        ),

        new Question("La diapedesi è",
            [
                ["la produzione di anticorpi", 0],
                ["la vasodilatazione", 0],
                ["il passaggio dei leucociti attraverso l’endotelio", 1],
                ["la distruzione dei patogeni", 0]
            ],
            "I leucociti attraversano la parete vascolare."
        ),

        new Question("La chemiotassi è",
            [
                ["la vasodilatazione", 0],
                ["la produzione di citochine", 0],
                ["la formazione di pus", 0],
                ["la migrazione dei leucociti verso la lesione", 1]
            ],
            "I leucociti seguono un gradiente chimico."
        ),

        new Question("La fagocitosi comprende",
            [
                ["captazione", 0],
                ["inglobamento", 0],
                ["digestione", 0],
                ["tutte le precedenti", 1]
            ],
            "È un processo in tre fasi."
        ),

        new Question("L’istamina provoca",
            [
                ["riduzione del flusso sanguigno", 0],
                ["vasodilatazione e aumento permeabilità", 1],
                ["aumento della glicemia", 0],
                ["vasocostrizione", 0]
            ],
            "È un potente mediatore infiammatorio."
        ),

        new Question("La cascata del complemento",
            [
                ["riduce la permeabilità", 0],
                ["blocca l’infiammazione", 0],
                ["promuove chemiotassi e fagocitosi", 1],
                ["riduce la chemiotassi", 0]
            ],
            "Attiva e amplifica la risposta infiammatoria."
        ),

        new Question("Le citochine sono",
            [
                ["polipeptidi", 1],
                ["lipidi", 0],
                ["ormoni", 0],
                ["carboidrati", 0],
            ],
            "Regolano la comunicazione tra cellule immunitarie."
        ),

        new Question("Nell’infiammazione acuta prevalgono",
            [
                ["neutrofili", 1],
                ["plasmacellule", 0],
                ["linfociti", 0],
                ["fibroblasti", 0]
            ],
            "I neutrofili sono le prime cellule a intervenire."
        ),

        new Question("Nell’infiammazione cronica prevalgono",
            [
                ["piastrine", 0],
                ["linfociti e macrofagi", 1],
                ["eritrociti", 0],
                ["neutrofili", 0]
            ],
            "Sono cellule tipiche della risposta prolungata."
        ),

        new Question("L’essudato sieroso è ricco di",
            [
                ["pus", 0],
                ["fibrina", 0],
                ["acqua", 1],
                ["muco", 0]
            ],
            "È un essudato povero di cellule."
        ),

        new Question("L’essudato catarrale è ricco di",
            [
                ["fibrina", 0],
                ["sangue", 0],
                ["pus", 0],
                ["mucopolisaccaridi", 1]
            ],
            "È tipico delle mucose."
        ),

        new Question("L’essudato purulento contiene",
            [
                ["neutrofili e detriti", 1],
                ["liquido", 0],
                ["muco", 0],
                ["fibrina", 0]
            ],
            "È il classico pus."
        ),

        new Question("L’ascesso è un essudato",
            [
                ["emorragico", 0],
                ["in cavità neoformata", 1],
                ["sieroso", 0],
                ["in cavità preformata", 0]
            ],
            "L’ascesso crea una nuova cavità."
        ),

        new Question("L’empiema è",
            [
                ["pus in cavità neoformata", 0],
                ["essudato sieroso", 0],
                ["pus in cavità preformata", 1],
                ["essudato fibrinoso", 0]
            ],
            "È pus in cavità già esistenti."
        ),

        new Question("Il flemmone è",
            [
                ["essudato catarrale", 0],
                ["pus ben delimitato", 0],
                ["essudato sieroso", 0],
                ["pus diffuso nei tessuti", 1]
            ],
            "È un’infezione purulenta diffusa."
        ),

        new Question("L’essudato emorragico indica",
            [
                ["danno vascolare con erosione dei vasi", 1],
                ["solo edema", 0],
                ["nessun danno vascolare", 0],
                ["solo vasodilatazione", 0]
            ],
            "Il sangue fuoriesce per danno ai vasi."
        ),

        new Question("Un possibile esito dell’infiammazione è",
            [
                ["solo cronicizzazione", 0],
                ["risoluzione, cicatrizzazione o cronicizzazione", 1],
                ["solo cicatrizzazione", 0],
                ["nessun esito", 0]
            ],
            "Sono i tre esiti principali."
        ),

        new Question("Nell’infiammazione cronica troviamo",
            [
                ["piastrine", 0],
                ["eritrociti", 0],
                ["linfociti e macrofagi", 1],
                ["neutrofili", 0]
            ],
            "Sono le cellule predominanti."
        ),

        new Question("L’angiogenesi è",
            [
                ["produzione di fibrina", 0],
                ["distruzione dei vasi", 0],
                ["produzione di anticorpi", 0],
                ["formazione di nuovi vasi", 1]
            ],
            "È tipica della riparazione tissutale."
        ),

        new Question("La fibrosi è un accumulo di",
            [
                ["tessuto connettivo", 1],
                ["pus", 0],
                ["muco", 0],
                ["sangue", 0]
            ],
            "È un esito dell’infiammazione cronica."
        ),

        new Question("L’infiammazione granulomatosa è caratterizzata da",
            [
                ["neutrofili", 0],
                ["granulomi", 1],
                ["pus", 0],
                ["muco", 0]
            ],
            "I granulomi sono aggregati di cellule immunitarie."
        ),

        new Question("Quali possono diventare cellule epitelioidi?",
            [
                ["Piastrine", 0],
                ["Neutrofili", 0],
                ["Macrofagi", 1],
                ["Eritrociti", 0]
            ],
            "Sono macrofagi attivati tipici dei granulomi."
        ),

        new Question("Un esempio di infiammazione granulomatosa è",
            [
                ["otite", 0],
                ["gastrite acuta", 0],
                ["influenza", 0],
                ["tubercolosi", 1]
            ],
            "La tubercolosi forma granulomi tipici."
        ),

        new Question("Le reazioni immunitarie possono essere",
            [
                ["causa di infiammazione", 1],
                ["sempre croniche", 0],
                ["solo protettive", 0],
                ["sempre dannose", 0]
            ],
            "Possono generare infiammazione (ipersensibilità)."
        ),

        new Question("I corpi estranei possono",
            [
                ["causare solo infiammazione acuta", 0],
                ["causare infiammazione granulomatosa", 1],
                ["causare solo infiammazione sierosa", 0],
                ["nessuna delle precedenti", 0]
            ],
            "I granulomi si formano contro materiali non degradabili."
        ),

        new Question("La pressione sistolica rappresenta",
            [
                ["il cuore a riposo", 0],
                ["la pressione polmonare", 0],
                ["il cuore in contrazione", 1],
                ["la pressione venosa", 0]
            ],
            "La sistolica è la massima, quando il cuore si contrae."
        ),

        new Question("La pressione diastolica rappresenta",
            [
                ["la pressione polmonare", 0],
                ["il cuore in contrazione", 0],
                ["la pressione venosa", 0],
                ["il cuore in rilassamento", 1]
            ],
            "La diastolica è la minima, quando il cuore si rilassa."
        ),

        new Question("L’ipertensione interessa circa",
            [
                ["30% della popolazione", 1],
                ["10% della popolazione", 0],
                ["70% della popolazione", 0],
                ["5% della popolazione", 0]
            ],
            "Colpisce circa un terzo degli adulti."
        ),

        new Question("L’ipertensione è un fattore di rischio per",
            [
                ["gastrite", 0],
                ["ictus e infarto", 1],
                ["dermatiti", 0],
                ["asma", 0]
            ],
            "Aumenta il rischio cardiovascolare."
        ),

        new Question("L’ipertensione primaria rappresenta il",
            [
                ["100% dei casi", 0],
                ["5% dei casi", 0],
                ["95% dei casi", 1],
                ["50% dei casi", 0]
            ],
            "È la forma più comune e senza causa specifica."
        ),

        new Question("L’ipertensione secondaria è causata da",
            [
                ["alimentazione ricca di fibre", 0],
                ["stress", 0],
                ["attività fisica", 0],
                ["malattie renali o endocrine", 1]
            ],
            "È dovuta a patologie specifiche."
        ),

        new Question("Un sintomo possibile dell’ipertensione è",
            [
                ["mal di testa", 1],
                ["tosse secca", 0],
                ["dolore addominale", 0],
                ["febbre", 0]
            ],
            "È un sintomo tipico ma non specifico."
        ),

        new Question("La diagnosi di ipertensione si fa con",
            [
                ["analisi del sangue", 0],
                ["misurazione periodica della pressione", 1],
                ["ecografia", 0],
                ["radiografia", 0]
            ],
            "L’unico modo è misurare la pressione."
        ),

        new Question("Il trattamento dell’ipertensione include",
            [
                ["solo dieta", 0],
                ["solo chirurgia", 0],
                ["stile di vita e farmaci", 1],
                ["solo farmaci", 0]
            ],
            "Serve un approccio combinato."
        ),

        new Question("L’aterosclerosi colpisce",
            [
                ["linfonodi", 0],
                ["capillari", 0],
                ["vene", 0],
                ["arterie", 1]
            ],
            "È una malattia delle arterie."
        ),

        new Question("L’ateroma è composto da",
            [
                ["colesterolo, cellule muscolari lisce e infiammatorie", 1],
                ["acqua", 0],
                ["sangue", 0],
                ["fibrina", 0]
            ],
            "È una placca complessa."
        ),

        new Question("La rottura dell’ateroma può causare",
            [
                ["ipotensione", 0],
                ["trombosi", 1],
                ["febbre", 0],
                ["allergia", 0]
            ],
            "La rottura manda in circolo un frammento della placca."
        ),

        new Question("L’aterosclerosi è favorita da",
            [
                ["HDL elevate", 0],
                ["dieta povera di grassi", 0],
                ["LDL elevate", 1],
                ["tutte le precedenti", 0]
            ],
            "Le LDL sono aterogene."
        ),

        new Question("Un sintomo dell’aterosclerosi coronarica è",
            [
                ["tosse", 0],
                ["diarrea", 0],
                ["febbre", 0],
                ["angina", 1]
            ],
            "L’ischemia coronarica causa dolore toracico."
        ),

        new Question("La diagnosi di aterosclerosi può includere",
            [
                ["ecocolordoppler", 1],
                ["spirometria", 0],
                ["TAC polmonare", 0],
                ["test allergologici", 0]
            ],
            "L’ecodoppler valuta il flusso arterioso."
        ),

        new Question("Il trattamento dell’aterosclerosi include",
            [
                ["antibiotici", 0],
                ["stile di vita e farmaci", 1],
                ["cortisone", 0],
                ["antistaminici", 0]
            ],
            "Serve ridurre i fattori di rischio."
        ),

        new Question("L’angioplastica consiste in",
            [
                ["rimozione chirurgica del cuore", 0],
                ["somministrazione di antibiotici", 0],
                ["dilatazione dell’arteria con palloncino e stent", 1],
                ["rimozione di vene", 0]
            ],
            "È una procedura per riaprire le arterie."
        ),

        new Question("L’arteriopatia obliterante colpisce soprattutto",
            [
                ["cervello", 0],
                ["arti superiori", 0],
                ["polmoni", 0],
                ["arti inferiori", 1]
            ],
            "È più frequente nelle gambe."
        ),

        new Question("La claudicatio intermittens indica dolore",
            [
                ["che compare con lo sforzo e migliora col riposo", 1],
                ["continuo", 0],
                ["notturno", 0],
                ["a riposo", 0]
            ],
            "È il sintomo tipico dell’arteriopatia."
        ),

        new Question("L’ischemia critica è una forma",
            [
                ["lieve", 0],
                ["grave con rischio di gangrena", 1],
                ["asintomatica", 0],
                ["infettiva", 0]
            ],
            "È una condizione grave e urgente."
        ),

        new Question("La trombosi venosa superficiale è",
            [
                ["fatale", 0],
                ["asintomatica", 0],
                ["non preoccupante", 1],
                ["grave", 0]
            ],
            "Di solito è benigna."
        ),

        new Question("La trombosi venosa profonda (TVP) è",
            [
                ["una malattia infettiva", 0],
                ["poco pericolosa", 0],
                ["sempre asintomatica", 0],
                ["potenzialmente grave", 1]
            ],
            "Può causare embolia polmonare."
        ),

        new Question("Un sintomo della TVP è",
            [
                ["dolore e gonfiore dell’arto", 1],
                ["tosse", 0],
                ["prurito", 0],
                ["mal di testa", 0]
            ],
            "L’arto colpito è caldo, gonfio e dolente."
        ),

        new Question("La diagnosi di TVP si fa con",
            [
                ["ECG", 0],
                ["ecocolordoppler", 1],
                ["spirometria", 0],
                ["radiografia", 0]
            ],
            "È l’esame di riferimento."
        ),

        new Question("La terapia della TVP include",
            [
                ["antibiotici", 0],
                ["antistaminici", 0],
                ["anticoagulanti", 1],
                ["antinfiammatori", 0]
            ],
            "Gli anticoagulanti prevengono l’estensione del trombo."
        ),

        new Question("L’angina pectoris cosa indica?",
            [
                ["Necrosi del cuore", 0],
                ["Infiammazione del cuore", 0],
                ["Infezione cardiaca", 0],
                ["Ischemia temporanea", 1]
            ],
            "È una riduzione temporanea del flusso coronarico."
        ),

        new Question("Quando compare l'angina stabile?",
            [
                ["Con sforzo o emozioni", 1],
                ["Solo dopo i pasti", 0],
                ["A riposo", 0],
                ["Solo di notte", 0]
            ],
            "È prevedibile e correlata allo sforzo."
        ),

        new Question("L’angina instabile è",
            [
                ["meno pericolosa", 0],
                ["un’emergenza", 1],
                ["sempre asintomatica", 0],
                ["una forma cronica", 0]
            ],
            "Può evolvere in infarto."
        ),

        new Question("L’infarto miocardico è",
            [
                ["infiammazione del cuore", 0],
                ["ischemia temporanea", 0],
                ["necrosi del muscolo cardiaco", 1],
                ["aritmia", 0]
            ],
            "È la morte di una parte del cuore."
        ),

        new Question("Lo STEMI richiede",
            [
                ["nessun trattamento", 0],
                ["rivascolarizzazione entro 72 ore", 0],
                ["solo terapia orale", 0],
                ["rivascolarizzazione immediata", 1]
            ],
            "È un’emergenza assoluta."
        ),

        new Question("L’NSTEMI richiede",
            [
                ["rivascolarizzazione entro 72 ore", 1],
                ["solo riposo", 0],
                ["nessun trattamento", 0],
                ["solo antibiotici", 0]
            ],
            "È meno urgente dello STEMI."
        ),

        new Question("Un sintomo tipico dell’infarto è dolore",
            [
                ["che migliora con il movimento", 0],
                ["oppressivo al petto", 1],
                ["che peggiora con la respirazione", 0],
                ["solo addominale", 0]
            ],
            "Il dolore è oppressivo e non cambia con il respiro."
        ),

        new Question("La diagnosi di infarto include",
            [
                ["spirometria", 0],
                ["test allergologici", 0],
                ["ECG", 1],
                ["radiografia del femore", 0]
            ],
            "L’ECG è fondamentale."
        ),

        new Question("Lo scompenso cardiaco è",
            [
                ["un’infezione", 0],
                ["una malattia autoimmune", 0],
                ["una malattia congenita", 0],
                ["l’incapacità del cuore di pompare adeguatamente", 1]
            ],
            "Il cuore non soddisfa le richieste dell’organismo."
        ),

        new Question("Lo scompenso causa",
            [
                ["accumulo di liquidi", 1],
                ["aumento del flusso sanguigno", 0],
                ["aumento della forza muscolare", 0],
                ["ipotermia", 0]
            ],
            "Il sangue ristagna e causa edema."
        ),

        new Question("La dispnea da scompenso peggiora",
            [
                ["in piedi", 0],
                ["da sdraiati", 1],
                ["dopo i pasti", 0],
                ["con il freddo", 0]
            ],
            "Da sdraiati aumenta il ritorno venoso."
        ),

        new Question("Gli edemi declivi sono edemi",
            [
                ["al volto", 0],
                ["lle braccia", 0],
                ["alle zone più basse del corpo", 1],
                ["alle mani", 0]
            ],
            "Si accumulano nelle parti più basse."
        ),

        new Question("La fovea è",
            [
                ["una cicatrice", 0],
                ["una lesione cutanea", 0],
                ["un’ulcera", 0],
                ["un’impronta lasciata dalla pressione sull’edema", 1]
            ],
            "È tipica degli edemi da scompenso."
        ),

        new Question("La classificazione NYHA valuta",
            [
                ["la capacità funzionale", 1],
                ["la pressione", 0],
                ["la frequenza cardiaca", 0],
                ["la saturazione", 0]
            ],
            "Classifica la gravità dello scompenso."
        ),

        new Question("Un farmaco usato nello scompenso è",
            [
                ["antibiotico", 0],
                ["diuretico", 1],
                ["antistaminico", 0],
                ["cortisone", 0]
            ],
            "I diuretici riducono i liquidi in eccesso."
        ),

        new Question("Lo shock cardiogeno è",
            [
                ["una forma lieve di scompenso", 0],
                ["una malattia infettiva", 0],
                ["un’emergenza medica", 1],
                ["una forma di ipertensione", 0]
            ],
            "È una condizione gravissima."
        ),

        new Question("Lo shock cardiogeno è causato da",
            [
                ["dermatiti", 0],
                ["gastrite", 0],
                ["allergie", 0],
                ["aritmie e infarto", 1]
            ],
            "Il cuore non pompa più sangue a sufficienza."
        ),

        new Question("Un sintomo dello shock cardiogeno è",
            [
                ["ipotensione", 1],
                ["pressione alta", 0],
                ["sudorazione assente", 0],
                ["aumento dell’appetito", 0]
            ],
            "La pressione crolla."
        ),

        new Question("La cute nello shock appare",
            [
                ["calda e arrossata", 0],
                ["fredda e marezzata", 1],
                ["secca", 0],
                ["abbronzata", 0]
            ],
            "La scarsa perfusione rende la cute fredda."
        ),

        new Question("Il trattamento dello shock cardiogeno include",
            [
                ["antistaminici", 0],
                ["cortisone", 0],
                ["inotropi e vasopressori", 1],
                ["antibiotici", 0]
            ],
            "Servono farmaci che sostengono la funzione cardiaca."
        ),

        new Question("Il TIA è",
            [
                ["un ictus emorragico", 0],
                ["una forma di epilessia", 0],
                ["un ictus ischemico grave", 0],
                ["un attacco ischemico transitorio", 1]
            ],
            "Il TIA è un’ischemia transitoria con sintomi che si risolvono entro 24 ore."
        ),

        new Question("La maggior parte degli ictus è",
            [
                ["ischemica", 1],
                ["infettiva", 0],
                ["emorragica", 0],
                ["autoimmune", 0]
            ],
            "Circa il 90% degli ictus è ischemico."
        ),

        new Question("L’ictus emorragico rappresenta circa",
            [
                ["5% dei casi", 0],
                ["10% dei casi", 1],
                ["50% dei casi", 0],
                ["90% dei casi", 0]
            ],
            "Solo il 10% circa è emorragico."
        ),

        new Question("I sintomi dell’ictus sono",
            [
                ["graduali", 0],
                ["solo notturni", 0],
                ["improvvisi", 1],
                ["sempre lievi", 0]
            ],
            "L’ictus si manifesta in modo improvviso."
        ),

        new Question("L’afasia è",
            [
                ["perdita della vista", 0],
                ["paralisi di un arto", 0],
                ["perdita di equilibrio", 0],
                ["difficoltà nel linguaggio", 1]
            ],
            "L’afasia riguarda la produzione o comprensione del linguaggio."
        ),

        new Question("L’emiplegia è",
            [
                ["paralisi di metà corpo", 1],
                ["paralisi di entrambi gli arti inferiori", 0],
                ["paralisi di un solo arto", 0],
                ["paralisi completa", 0]
            ],
            "Colpisce un lato del corpo."
        ),

        new Question("L’emiparesi è",
            [
                ["paralisi completa", 0],
                ["deficit motorio parziale di un lato del corpo", 1],
                ["paralisi degli arti inferiori", 0],
                ["paralisi degli arti superiori", 0]
            ],
            "È una forma più lieve rispetto all’emiplegia."
        ),

        new Question("L’emianopsia è",
            [
                ["perdita totale della vista", 0],
                ["cecità notturna", 0],
                ["perdita di metà del campo visivo", 1],
                ["visione doppia", 0]
            ],
            "È la perdita di metà campo visivo."
        ),

        new Question("La diagnosi di ictus si basa su",
            [
                ["radiografia", 0],
                ["spirometria", 0],
                ["ecografia addominale", 0],
                ["TAC o RMN", 1]
            ],
            "TAC e RMN documentano la lesione cerebrale."
        ),

        new Question("La trombolisi deve essere effettuata entro",
            [
                ["4.5 ore", 1],
                ["2 ore", 0],
                ["12 ore", 0],
                ["1 ora", 0]
            ],
            "È efficace solo entro 4.5 ore dall’esordio."
        ),

        new Question("La sclerosi multipla è una malattia",
            [
                ["infettiva", 0],
                ["autoimmune", 1],
                ["genetica", 0],
                ["vascolare", 0]
            ],
            "Il sistema immunitario attacca la mielina."
        ),

        new Question("La mielina serve a",
            [
                ["proteggere i muscoli", 0],
                ["produrre ormoni", 0],
                ["trasmettere rapidamente gli impulsi nervosi", 1],
                ["regolare la temperatura", 0]
            ],
            "La mielina isola e velocizza la trasmissione nervosa."
        ),

        new Question("La sclerosi multipla colpisce più spesso",
            [
                ["uomini anziani", 0],
                ["bambini", 0],
                ["uomini tra 20 e 30 anni", 0],
                ["donne tra 20 e 40 anni", 1]
            ],
            "È più frequente nelle giovani donne."
        ),

        new Question("Un sintomo sensitivo della SM è",
            [
                ["formicolii", 1],
                ["tosse", 0],
                ["febbre", 0],
                ["dolore addominale", 0]
            ],
            "I sintomi sensitivi sono molto comuni."
        ),

        new Question("Un sintomo motorio della SM è",
            [
                ["nausea", 0],
                ["tremori", 1],
                ["sudorazione", 0],
                ["diarrea", 0]
            ],
            "La SM può causare tremori e spasticità."
        ),

        new Question("La SM è caratterizzata da",
            [
                ["decorso solo acuto", 0],
                ["decorso sempre stabile", 0],
                ["episodi di peggioramento e miglioramento", 1],
                ["decorso solo cronico", 0]
            ],
            "È tipica la presenza di ricadute."
        ),

        new Question("La terapia delle fasi acute della SM prevede",
            [
                ["antistaminici", 0],
                ["antibiotici", 0],
                ["diuretici", 0],
                ["cortisone", 1]
            ],
            "Il cortisone riduce l’infiammazione."
        ),

        new Question("L’emiplegia è causata da un danno",
            [
                ["cerebrale controlaterale", 1],
                ["periferico", 0],
                ["cerebrale ipsilaterale", 0],
                ["midollare", 0]
            ],
            "Il cervello controlla il lato opposto del corpo."
        ),

        new Question("La paraplegia interessa",
            [
                ["un lato del corpo", 0],
                ["la parte inferiore del corpo", 1],
                ["gli arti superiori", 0],
                ["tutto il corpo", 0]
            ],
            "Colpisce gli arti inferiori e il tronco inferiore."
        ),

        new Question("La paraplegia è causata da lesioni",
            [
                ["sopra T1", 0],
                ["a livello del cranio", 0],
                ["sotto T1", 1],
                ["a livello cervicale", 0]
            ],
            "Lesioni sotto T1 causano paraplegia."
        ),

        new Question("La tetraplegia deriva da lesioni",
            [
                ["solo lombari", 0],
                ["sotto T1", 0],
                ["solo sacrali", 0],
                ["sopra T1", 1]
            ],
            "Lesioni cervicali causano tetraplegia."
        ),

        new Question("Il dolore nocicettivo deriva da",
            [
                ["attivazione dei nocicettori", 1],
                ["lesione del nervo", 0],
                ["problemi psicologici", 0],
                ["disturbi ormonali", 0]
            ],
            "È dovuto a stimoli che attivano i recettori del dolore."
        ),

        new Question("Il dolore neuropatico deriva da",
            [
                ["infiammazione dei muscoli", 0],
                ["lesione del sistema somatosensoriale", 1],
                ["distorsioni articolari", 0],
                ["traumi cutanei", 0]
            ],
            "È causato da danni ai nervi."
        ),

        new Question("La trasduzione del dolore è",
            [
                ["percezione del dolore", 0],
                ["trasmissione al cervello", 0],
                ["conversione dello stimolo in impulso elettrico", 1],
                ["risposta motoria", 0]
            ],
            "È la prima fase del dolore nocicettivo."
        ),

        new Question("La conduzione del dolore avviene",
            [
                ["nei nocicettori", 0],
                ["nel fegato", 0],
                ["nel cuore", 0],
                ["negli assoni verso il midollo", 1]
            ],
            "L’impulso viaggia lungo i nervi."
        ),

        new Question("La percezione del dolore avviene nel",
            [
                ["cervello", 1],
                ["fegato", 0],
                ["midollo spinale", 0],
                ["cuore", 0]
            ],
            "Il cervello interpreta lo stimolo come dolore."
        ),

        new Question("La modulazione del dolore è",
            [
                ["la trasmissione al midollo", 0],
                ["la risposta del cervello che modifica lo stimolo", 1],
                ["la percezione", 0],
                ["la conduzione", 0]
            ],
            "Il cervello può amplificare o ridurre il dolore."
        ),

        new Question("Una causa di dolore neuropatico è",
            [
                ["distorsione", 0],
                ["ustione", 0],
                ["diabete", 1],
                ["contusione", 0]
            ],
            "Il diabete danneggia i nervi."
        ),

        new Question("La neuropatia diabetica colpisce",
            [
                ["solo le mani", 0],
                ["solo il viso", 0],
                ["solo la schiena", 0],
                ["piedi, gambe e mani", 1]
            ],
            "È una polineuropatia distale simmetrica."
        ),

        new Question("La neuropatia diabetica causa",
            [
                ["perdita della sensibilità", 1],
                ["solo dolore acuto", 0],
                ["aumento della sensibilità", 0],
                ["solo prurito", 0]
            ],
            "I nervi danneggiati non trasmettono correttamente."
        ),

        new Question("La neuropatia autonomica cardiaca causa",
            [
                ["bradicardia costante", 0],
                ["vertigini alzandosi", 1],
                ["aumento della forza muscolare", 0],
                ["aumento della vista", 0]
            ],
            "I nervi autonomici non regolano bene la pressione."
        ),

        new Question("La neuropatia autonomica digestiva causa",
            [
                ["aumento della sudorazione", 0],
                ["tachicardia", 0],
                ["difficoltà a deglutire", 1],
                ["aumento della diuresi", 0]
            ],
            "Colpisce i nervi che controllano l’apparato digerente."
        ),

        new Question("La neuropatia autonomica urinaria causa",
            [
                ["aumento della vista", 0],
                ["polidipsia", 0],
                ["aumento della forza", 0],
                ["ritenzione o incontinenza", 1]
            ],
            "I nervi autonomici controllano la vescica."
        ),

        new Question("La neuropatia autonomica oculare causa",
            [
                ["difficoltà di adattamento luce/buio", 1],
                ["cecità", 0],
                ["astigmatismo", 0],
                ["miopia", 0]
            ],
            "I nervi autonomici regolano la pupilla."
        ),

        new Question("La neuropatia autonomica delle ghiandole sudoripare causa",
            [
                ["sudorazione normale", 0],
                ["assenza o eccesso di sudore", 1],
                ["sudorazione solo ai piedi", 0],
                ["sudorazione solo alle mani", 0]
            ],
            "I nervi autonomici regolano la sudorazione."
        ),

        new Question("Un sintomo dell’ictus è",
            [
                ["dolore addominale", 0],
                ["tosse", 0],
                ["paralisi di un lato del corpo", 1],
                ["febbre", 0]
            ],
            "L’ictus causa deficit neurologici focali."
        ),

        new Question("L’ictus ischemico è causato da",
            [
                ["infezione", 0],
                ["rottura di un vaso", 0],
                ["trauma cranico", 0],
                ["riduzione del flusso sanguigno", 1]
            ],
            "L’ischemia deriva da occlusione vascolare."
        ),

        new Question("L’ictus emorragico è causato da",
            [
                ["rottura di un vaso", 1],
                ["trombosi", 0],
                ["tumore", 0],
                ["embolia", 0]
            ],
            "Il sangue fuoriesce nel tessuto cerebrale."
        ),

        new Question("La causa più frequente di ictus emorragico è",
            [
                ["diabete", 0],
                ["ipertensione", 1],
                ["fumo", 0],
                ["stress", 0]
            ],
            "L’ipertensione danneggia i vasi cerebrali."
        ),

        new Question("Un sintomo del TIA è",
            [
                ["sintomi permanenti", 0],
                ["sintomi che durano più di 24 ore", 0],
                ["sintomi che si risolvono entro 24 ore", 1],
                ["solo mal di testa", 0]
            ],
            "Il TIA è transitorio."
        ),

        new Question("La disartria è",
            [
                ["difficoltà a comprendere", 0],
                ["perdita della memoria", 0],
                ["perdita della vista", 0],
                ["difficoltà a pronunciare correttamente le parole", 1]
            ],
            "È un disturbo motorio della parola."
        ),

        new Question("La spasticità è",
            [
                ["rigidità muscolare", 1],
                ["debolezza muscolare", 0],
                ["perdita di sensibilità", 0],
                ["tremore", 0]
            ],
            "È tipica della SM e delle lesioni neurologiche."
        ),

        new Question("La perdita di equilibrio può essere causata da",
            [
                ["gastrite", 0],
                ["ictus", 1],
                ["otite", 0],
                ["dermatite", 0]
            ],
            "L’ictus può colpire aree cerebellari o vestibolari."
        ),

        new Question("La paralisi da lesione midollare cervicale è",
            [
                ["paraplegia", 0],
                ["emiplegia", 0],
                ["tetraplegia", 1],
                ["emiparesi", 0]
            ],
            "Le lesioni sopra T1 causano tetraplegia."
        ),

        new Question("La riabilitazione nella SM è",
            [
                ["inutile", 0],
                ["facoltativa", 0],
                ["controindicata", 0],
                ["molto importante", 1]
            ],
            "Aiuta a mantenere funzionalità e autonomia."
        )


    ],

  getFeedback(score) {
    if (score >= 0 && score <= 20) return "/20";
    return "";
  }
};
