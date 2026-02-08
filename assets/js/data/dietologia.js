import { Question } from "../models/Question.js";

export const DietologiaTest = {
  questions: [

        new Question("Qual è il numero di porzioni giornaliere consigliate di frutta e verdura per l’anziano?",
            [
                ["5 porzioni", 1],
                ["2 porzioni", 0],
                ["7 porzioni", 0],
                ["3 porzioni", 0]
            ],
            "Le linee guida riportano 5 porzioni al giorno."
        ),

        new Question("Quale alimento contribuisce a ridurre il rischio di carie grazie al calcio e alla caseina?",
            [
                ["Carne bianca", 0],
                ["Latte e derivati", 1],
                ["Frutta secca", 0],
                ["Cereali integrali", 0]
            ],
            "Calcio e caseina del latte proteggono i denti."
        ),

        new Question("Perché le diete ricche di cereali integrali proteggono la bocca?",
            [
                ["Aumentano la saliva", 0],
                ["Contengono vitamina C", 0],
                ["Riducono l’assorbimento degli zuccheri", 1],
                ["Forniscono fluoro", 0]
            ],
            "Le fibre rallentano l’assorbimento degli zuccheri."
        ),

        new Question("Quale vitamina protegge i tessuti di supporto dei denti?",
            [
                ["Vitamina A", 0],
                ["Vitamina D", 0],
                ["Vitamina B12", 0],
                ["Vitamina C", 1]
            ],
            "La vitamina C mantiene sani i tessuti di sostegno dentale."
        ),

        new Question("Nell’anziano la massa grassa tende a",
            [
                ["aumentare", 1],
                ["diminuire", 0],
                ["rimanere invariata", 0],
                ["variare di molto", 0]
            ],
            "Nell'anziano il tessuto adiposo in media aumenta del 35%."
        ),

        new Question("Nell’anziano l’acqua corporea totale",
            [
                ["aumenta del 20%", 0],
                ["diminuisce del 17%", 1],
                ["rimane stabile", 0],
                ["diminuisce del 5%", 0]
            ],
            "L’acqua totale corporea cala del 17%."
        ),

        new Question("La sarcopenia è definita come",
            [
                ["aumento della massa muscolare", 0],
                ["aumento della massa grassa", 0],
                ["perdita di massa muscolare", 1],
                ["aumento dell’acqua corporea", 0]
            ],
            "La sarcopenia è la riduzione della massa muscolare."
        ),

        new Question("Una conseguenza della malnutrizione per difetto è",
            [
                ["aumento della massa ossea", 0],
                ["aumento del metabolismo basale", 0],
                ["miglioramento cognitivo", 0],
                ["ridotta immunocompetenza", 1]
            ],
            "La malnutrizione riduce la capacità immunitaria."
        ),

        new Question("La malnutrizione può causare",
            [
                ["ridotta efficienza muscolare", 1],
                ["aumento della forza", 0],
                ["ipertrofia muscolare", 0],
                ["aumento della temperatura corporea", 0]
            ],
            "La perdita di massa muscolare riduce la forza."
        ),

        new Question("Quale indicazione nutrizionale è corretta per l’anziano?",
            [
                ["Preferire pasti pesanti", 0],
                ["Frazionare i pasti", 1],
                ["Mangiare una sola volta al giorno", 0],
                ["Evitare frutta e verdura", 0]
            ],
            "I pasti frazionati facilitano digestione e apporto calorico."
        ),

        new Question("Per facilitare la digestione è consigliato",
            [
                ["mangiare carne dura", 0],
                ["evitare minestre", 0],
                ["tritare le carni e schiacciare la frutta", 1],
                ["usare solo cibi confezionati", 0]
            ],
            "Le consistenze morbide aiutano la masticazione e digestione."
        ),

        new Question("La perdita di efficienza masticatoria può essere causata da",
            [
                ["iperidratazione", 0],
                ["aumento della massa muscolare", 0],
                ["eccesso di vitamina C", 0],
                ["edentulia", 1]
            ],
            "L’edentulia compromette la masticazione."
        ),

        new Question("La ridotta immunocompetenza nell’anziano malnutrito comporta",
            [
                ["aumento del rischio di infezioni", 1],
                ["maggiore resistenza alle infezioni", 0],
                ["nessun cambiamento", 0],
                ["aumento della massa muscolare", 0]
            ],
            "Un sistema immunitario debole espone a più infezioni."
        ),

        new Question("Quale indicazione nutrizionale nell'anziano è corretta?",
            [
                ["Preferire pasti freddi e precucinati", 0],
                ["Preparare minestre e frullati", 1],
                ["Evitare di tritare gli alimenti", 0],
                ["Evitare il pesce", 0]
            ],
            "Le consistenze morbide facilitano la digestione."
        ),

        new Question("Qual è la distribuzione consigliata dei macronutrienti?",
            [
                ["70% carboidrati, 10% proteine, 20% lipidi", 0],
                ["30% carboidrati, 40% proteine, 30% lipidi", 0],
                ["50/60% carboidrati, 15/20% proteine, 25/30% lipidi", 1],
                ["20% carboidrati, 20% proteine, 60% lipidi", 0]
            ],
            "È la ripartizione ottimale di nutrienti a pasto."
        ),

        new Question("Perché è importante consumare frutta e ortaggi ogni giorno?",
            [
                ["Aumentano la massa grassa", 0],
                ["Riducono la salivazione", 0],
                ["Aumentano la pressione arteriosa", 0],
                ["Favoriscono la digestione e apportano micronutrienti", 1]
            ],
            "Frutta e verdura sono fondamentali per vitamine e fibre."
        ),

        new Question("Quale indicazione della piramide alimentare riguarda gli alimenti da consumare solo in piccole quantità?",
            [
                ["Dolci e snack", 1],
                ["Verdura", 0],
                ["Legumi", 0],
                ["Cereali", 0]
            ],
            "La piramide indica che i cibi molto calorici vanno consumati in piccole quantità."
        ),

        new Question("Quale fattore aumenta il rischio cardiovascolare?",
            [
                ["Età avanzata", 0],
                ["Tutte le risposte", 1],
                ["Fumo", 0],
                ["Ipercolesterolemia", 0]
            ],
            "Età, fumo, colesterolo alto, diabete, alimentazione sregolata, stress, scarsa attività fisica sono tutti fattori di rischio."
        ),

        new Question("Quale tra questi è un fattore di rischio cardiovascolare indipendente?",
            [
                ["Obesità addominale", 0],
                ["Inattività fisica", 0],
                ["Fumo di sigaretta", 1],
                ["Fattori psicosociali", 0]
            ],
            "Il fumo è tra i fattori indipendenti principali."
        ),

        new Question("Quale condizione fa parte della sindrome metabolica?",
            [
                ["Ipotensione", 0],
                ["Glicemia bassa", 0],
                ["Iperidratazione", 0],
                ["Obesità addominale", 1]
            ],
            "La sindrome metabolica include obesità addominale, ipertensione e dislipidemia."
        ),

        new Question("L’insulino-resistenza è definita come",
            [
                ["incapacità delle cellule di rispondere all’insulina", 1],
                ["carenza di glucagone", 0],
                ["aumento della glicemia per iperattività cellulare", 0],
                ["scarsa produzione di insulina", 0]
            ],
            "Le cellule non rispondono adeguatamente all’insulina."
        ),

        new Question("Quale tra questi NON è un fattore che favorisce l’insulino-resistenza?",
            [
                ["Obesità", 0],
                ["Dieta ricca di fibre", 1],
                ["Scarsa attività fisica", 0],
                ["Diete ipercaloriche", 0]
            ],
            "Le fibre migliorano la sensibilità insulinica."
        ),

        new Question("Qual è il valore di glicemia che indica iperglicemia?",
            [
                ["70–100 mg/dl", 0],
                ["≤69 mg/dl", 0],
                ["100–125 mg/dl", 0],
                ["≥126 mg/dl", 1]
            ],
            "Valori ≥126 mg/dl indicano iperglicemia e rischio diabete."
        ),

        new Question("Quale valore di glicemia può indicare rischio pre-diabete?",
            [
                ["50–69 mg/dl", 0],
                ["≥200 mg/dl", 0],
                ["100–125 mg/dl", 1],
                ["70–100 mg/dl", 0]
            ],
            "La fascia 100–125 mg/dl è classificata come pre-diabete."
        ),

        new Question("Quale metodo diagnostico può confermare il diabete?",
            [
                ["Emoglobina glicata", 1],
                ["Esame delle urine", 0],
                ["Test della vista", 0],
                ["Misurazione della pressione", 0]
            ],
            "L’HbA1c è uno dei criteri diagnostici ufficiali."
        ),

        new Question("Quale valore glicemico casuale, associato a sintomi, permette la diagnosi di diabete?",
            [
                ["100 mg/dl", 0],
                ["≥200 mg/dl", 1],
                ["150 mg/dl", 0],
                ["180 mg/dl", 0]
            ],
            "Una glicemia ≥200 mg/dl con sintomi è diagnostica."
        ),

        new Question("Quale tra questi è un sintomo del diabete?",
            [
                ["Riduzione della minzione", 0],
                ["Aumento della massa muscolare", 0],
                ["Visione offuscata", 1],
                ["Ipotermia", 0]
            ],
            "La visione offuscata è un sintomo tipico dell’iperglicemia."
        ),

        new Question("Quale complicanza a lungo termine è associata al diabete?",
            [
                ["Dermatite", 0],
                ["Gastrite", 0],
                ["Otite", 0],
                ["Ictus cerebrale", 1]
            ],
            "Il diabete aumenta il rischio di eventi cerebrovascolari."
        ),

        new Question("Quale misura preventiva contro il diabete è corretta?",
            [
                ["Aumentare il consumo di fibre", 1],
                ["Aumentare il consumo di alcol", 0],
                ["Ridurre l’attività fisica", 0],
                ["Aumentare i grassi animali", 0]
            ],
            "Le fibre migliorano il metabolismo glucidico."
        ),

        new Question("Il colesterolo è",
            [
                ["una sostanza tossica", 0],
                ["una sostanza grassa necessaria all’organismo", 1],
                ["un minerale", 0],
                ["una vitamina", 0]
            ],
            "È fondamentale per ormoni, vitamina D e membrane cellulari."
        ),

        new Question("Quale valore di colesterolo totale definisce ipercolesterolemia?",
            [
                [">150 mg/dl", 0],
                [">180 mg/dl", 0],
                [">200 mg/dl", 1],
                [">250 mg/dl", 0]
            ],
            "Le linee guida indicano come soglia >200 mg/dl."
        ),

        new Question("Quale lipoproteina riporta il colesterolo in eccesso al fegato?",
            [
                ["VLDL", 0],
                ["IDL", 0],
                ["LDL", 0],
                ["HDL", 1],
            ],
            "Le HDL trasportano il coloesterolo dalla periferia al fegato."
        ),

        new Question("Le VLDL trasportano principalmente",
            [
                ["trigliceridi", 1],
                ["vitamine", 0],
                ["minerali", 0],
                ["proteine", 0]
            ],
            "Le VLDL sono ricche di trigliceridi."
        ),

        new Question("Quale farmaco è utilizzato per ridurre la produzione epatica di colesterolo?",
            [
                ["Cortisonici", 0],
                ["Statine", 1],
                ["Diuretici", 0],
                ["Beta-bloccanti", 0]
            ],
            "Le statine inibiscono la sintesi epatica di colesterolo."
        ),

        new Question("L’aterosclerosi è causata da",
            [
                ["carenza di calcio", 0],
                ["carenza di acqua", 0],
                ["eccesso di lipidi", 1],
                ["eccesso di vitamina C", 0]
            ],
            "Le placche lipidiche ostruiscono i vasi sanguigni."
        ),

        new Question("Quale evento può derivare dall’aterosclerosi?",
            [
                ["Gastrite", 0],
                ["Otite", 0],
                ["Dermatite", 0],
                ["Ictus", 1],
            ],
            "L’ostruzione vascolare può causare ictus o infarto."
        ),

        new Question("Quale bevanda NON apporta nutrienti utili all'organismo?",
            [
                ["Alcol", 1],
                ["Latte", 0],
                ["Tè", 0],
                ["Succo di frutta", 0]
            ],
            "L’alcol non fornisce nutrienti utili."
        ),

        new Question("Quale fattore è una causa dell’obesità?",
            [
                ["Sonno adeguato", 0],
                ["Squilibrio tra apporto e consumo energetico", 1],
                ["Attività fisica regolare", 0],
                ["Dieta equilibrata", 0]
            ],
            "L’obesità deriva da un bilancio energetico positivo."
        ),

        new Question("L’obesità viscerale è particolarmente pericolosa perché",
            [
                ["riduce la massa muscolare", 0],
                ["riduce la pressione arteriosa", 0],
                ["aumenta il rischio di sindrome metabolica", 1],
                ["migliora la sensibilità insulinica", 0]
            ],
            "Il grasso addominale è associato a rischio metabolico elevato."
        ),

        new Question("Quale percentuale della popolazione italiana adulta è in sovrappeso?",
            [
                ["10%", 0],
                ["20%", 0],
                ["50%", 0],
                ["35%", 1]
            ],
            "Circa un adulto su tre è sovrappeso e la percentuale sta aumentando."
        ),

        new Question("Quale percentuale della popolazione italiana è obesa?",
            [
                ["9,8%", 1],
                ["3%", 0],
                ["20%", 0],
                ["30%", 0]
            ],
            "Quasi una persona su dieci è obesa."
        ),

        new Question("La sindrome metabolica include",
            [
                ["ipertensione e dislipidemia", 1],
                ["ipotensione", 0],
                ["glicemia bassa", 0],
                ["aumento della massa muscolare", 0]
            ],
            "Ipertensione, obesità addominale e dislipidemia sono caratteristiche tipiche."
        ),

        new Question("L’insulina è prodotta da",
            [
                ["cellule alfa del pancreas", 0],
                ["cellule beta del pancreas", 1],
                ["fegato", 0],
                ["muscolo scheletrico", 0]
            ],
            "Le cellule beta pancreatiche rilasciano insulina."
        ),

        new Question("Il glucagone viene rilasciato quando",
            [
                ["la glicemia è alta", 0],
                ["dopo pasti ricchi di grassi", 0],
                ["durante il sonno", 0],
                ["la glicemia è bassa", 1]
            ],
            "Il glucagone aumenta la glicemia rilasciando glucosio dal fegato."
        ),

        new Question("Quale complicanza del diabete riguarda gli occhi?",
            [
                ["Retinopatia", 1],
                ["Neuropatia", 0],
                ["Nefropatia", 0],
                ["Arteriopatia", 0]
            ],
            "La retinopatia diabetica è una complicanza oculare."
        ),

        new Question("Quale lipoproteina porta il colesterolo ai tessuti?",
            [
                ["HDL", 0],
                ["LDL", 1],
                ["VLDL", 0],
                ["Chilomicroni", 0]
            ],
            "Le LDL trasportano colesterolo dal fegato ai tessuti."
        ),

        new Question("Quale lipoproteina deriva dalla trasformazione delle VLDL?",
            [
                ["HDL", 0],
                ["Chilomicroni", 0],
                ["IDL", 1],
                ["ApoA1", 0]
            ],
            "Le VLDL diventano IDL dopo aver ceduto trigliceridi."
        ),

        new Question("Quale unità alcolica corrisponde a un bicchiere di vino?",
            [
                ["40 ml", 0],
                ["80 ml", 0],
                ["330 ml", 0],
                ["125 ml", 1]
            ],
            "125 ml di vino equivalgono a 1 unità alcolica."
        ),

        new Question("Quale percentuale di carboidrati è prevista in una dieta bilanciata?",
            [
                ["58%", 1],
                ["30%", 0],
                ["12%", 0],
                ["45%", 0]
            ],
            "La dieta bilanciata prevede circa il 58% di carboidrati."
        ),

        new Question("Quante kcal forniscono 1 grammo di lipidi?",
            [
                ["4.1 kcal", 0],
                ["9.3 kcal", 1],
                ["7.1 kcal", 0],
                ["2.8 kcal", 0]
            ],
            "I lipidi forniscono circa 9.3 kcal per grammo."
        ),

        new Question("Quale macronutriente ha il costo energetico più elevato nella termogenesi indotta dalla dieta?",
            [
                ["Carboidrati", 0],
                ["Grassi", 0],
                ["Proteine", 1],
                ["Alcol", 0]
            ],
            "Le proteine richiedono il 25–30% del loro contenuto energetico."
        ),

        new Question("Quale componente rappresenta la quota maggiore della spesa energetica quotidiana?",
            [
                ["Termogenesi indotta dalla dieta", 0],
                ["Attività fisica", 0],
                ["NEAT", 0],
                ["Metabolismo basale", 1]
            ],
            "Il metabolismo basale rappresenta il 60–70% della spesa energetica."
        ),

        new Question("Quale fascia d’età presenta il metabolismo basale più elevato?",
            [
                ["Neonati", 1],
                ["Adulti 30–59 anni", 0],
                ["Anziani >75 anni", 0],
                ["Adolescenti 10–17 anni", 0]
            ],
            "Il metabolismo basale è massimo nel neonato."
        ),

        new Question("Quale fattore aumenta il metabolismo basale?",
            [
                ["Ipotermia", 0],
                ["Gravidanza", 1],
                ["Sedentarietà", 0],
                ["Ridotta massa muscolare", 0]
            ],
            "Gravidanza, febbre e ipertiroidismo aumentano il metabolismo basale."
        ),

        new Question("Quale tessuto consuma più energia a riposo?",
            [
                ["Tessuto adiposo", 0],
                ["Tessuto osseo", 0],
                ["Tessuto muscolare", 1],
                ["Tessuto connettivo", 0]
            ],
            "Il muscolo consuma circa 18 kcal/kg a riposo, molto più di altri."
        ),

        new Question("Quale attività rientra nel NEAT?",
            [
                ["Nuotare 30 minuti", 0],
                ["Sollevare pesi", 0],
                ["Fare jogging", 0],
                ["Tamburellare le dita", 1]
            ],
            "Il NEAT comprende movimenti involontari o quotidiani non sportivi."
        ),

        new Question("Quale percentuale della spesa energetica è attribuibile alla termogenesi indotta dalla dieta?",
            [
                ["10%", 1],
                ["<1%", 0],
                ["4–5%", 0],
                ["25–30%", 0]
            ],
            "In media la TID rappresenta circa il 10% della spesa energetica."
        ),

        new Question("Quale macronutriente ha il minor costo energetico nella digestione?",
            [
                ["Carboidrati", 0],
                ["Grassi", 1],
                ["Proteine", 0],
                ["Alcol", 0]
            ],
            "I grassi costano solo il 2–3% del loro contenuto energetico."
        ),

        new Question("Quale condizione fisiologica aumenta il metabolismo basale?",
            [
                ["Ipotensione", 0],
                ["Ipotiroidismo", 0],
                ["Febbre", 1],
                ["Ridotto peso corporeo", 0]
            ],
            "La febbre aumenta il metabolismo basale."
        ),

        new Question("Quale valore energetico ha l’alcol etilico?",
            [
                ["4.1 kcal/g", 0],
                ["9.3 kcal/g", 0],
                ["3 kcal/g", 0],
                ["7.1 kcal/g", 1]
            ],
            "L’alcol etilico fornisce circa 7.1 kcal per grammo."
        ),

        new Question("Quale macronutriente ha un costo energetico del 4–5% durante la digestione?",
            [
                ["Carboidrati", 1],
                ["Proteine", 0],
                ["Grassi", 0],
                ["Alcol", 0]
            ],
            "I carboidrati richiedono circa il 4–5% del loro contenuto energetico."
        ),

        new Question("Quale macronutriente ha il valore calorico più elevato?",
            [
                ["Proteine", 0],
                ["Lipidi", 1],
                ["Carboidrati", 0],
                ["Acidi organici", 0]
            ],
            "I lipidi forniscono 9.3 kcal/g, il valore più alto tra i macronutrienti."
        ),

        new Question("Quale macronutriente fornisce 4 kcal per grammo?",
            [
                ["Lipidi", 0],
                ["Alcol", 0],
                ["Proteine", 1],
                ["Acidi organici", 0]
            ],
            "Proteine e glucidi forniscono circa 4 kcal/g."
        ),

        new Question("Quale affermazione descrive correttamente il vegetarianesimo?",
            [
                ["Esclude solo gli alimenti di origine vegetale", 0],
                ["Esclude tutti gli alimenti di origine animale", 0],
                ["Non permette latte, uova e derivati", 0],
                ["Esclude alimenti derivanti dall’uccisione animale", 1]
            ],
            "Il vegetarianesimo esclude gli alimenti derivanti dall’uccisione animale, ma permette latte e uova."
        ),

        new Question("Quale affermazione descrive correttamente il veganesimo?",
            [
                ["Esclude tutti gli alimenti di origine animale", 1],
                ["Esclude solo carne e pesce", 0],
                ["Permette latte e uova", 0],
                ["Permette solo pesce", 0]
            ],
            "Il veganesimo esclude tutti gli alimenti di origine animale."
        ),

        new Question("Quale tra questi è un vantaggio della dieta vegetariana?",
            [
                ["Maggiore apporto di grassi saturi", 0],
                ["Maggiore apporto di fibre e antiossidanti", 1],
                ["Maggiore apporto di colesterolo", 0],
                ["Minore apporto di fibre", 0]
            ],
            "La dieta vegetariana è ricca di fibre e sostanze protettive."
        ),

        new Question("Quale condizione è più frequente nei vegetariani rispetto agli onnivori?",
            [
                ["Maggiore rischio cardiovascolare", 0],
                ["Maggiore colesterolemia", 0],
                ["Indice di massa corporea inferiore", 1],
                ["Maggiore trigliceridemia", 0]
            ],
            "I vegetariani hanno mediamente un BMI più basso."
        ),

        new Question("Quale categoria è particolarmente a rischio di carenze nutrizionali con dieta vegana?",
            [
                ["Adulti sportivi", 0],
                ["Persone sedentarie", 0],
                ["Uomini giovani", 0],
                ["Gravide, bambini e anziani", 1]
            ],
            "Le fasce delicate sono più esposte a carenze nutrizionali."
        ),

        new Question("Quale nutriente può risultare carente nelle diete vegetariane e vegane?",
            [
                ["Vitamina B12", 1],
                ["Vitamina C", 0],
                ["Magnesio", 0],
                ["Potassio", 0]
            ],
            "La vitamina B12 è di esclusiva origine animale."
        ),

        new Question("Quale strategia permette di migliorare la qualità delle proteine vegetali?",
            [
                ["Consumare solo cereali", 0],
                ["Combinare fonti proteiche diverse", 1],
                ["Aumentare i grassi saturi", 0],
                ["Ridurre l’apporto proteico", 0]
            ],
            "Combinare legumi e cereali migliora il profilo amminoacidico."
        ),

        new Question("Quale nutriente è coperto per l’80% dall’esposizione solare?",
            [
                ["Vitamina C", 0],
                ["Vitamina B6", 0],
                ["Vitamina D", 1],
                ["Vitamina K", 0]
            ],
            "La vitamina D deriva principalmente dall’esposizione solare."
        ),

        new Question("Quale vitamina è di esclusiva origine animale?",
            [
                ["Vitamina A", 0],
                ["Vitamina C", 0],
                ["Vitamina D", 0],
                ["Vitamina B12", 1]
            ],
            "La vitamina B12 è presente solo negli alimenti animali."
        ),

        new Question("Quale sintomo può indicare carenza di vitamina B12?",
            [
                ["Visione offuscata", 1],
                ["Ipotensione", 0],
                ["Aumento della forza muscolare", 0],
                ["Riduzione della salivazione", 0]
            ],
            "La carenza di B12 può causare disturbi visivi."
        ),

        new Question("Quale tra questi è un segno di carenza di vitamina B12?",
            [
                ["Iperattività", 0],
                ["Glossite", 1],
                ["Aumento dell’appetito", 0],
                ["Ipertensione", 0]
            ],
            "La glossite è un segno tipico della carenza di B12."
        ),

        new Question("Quale condizione può derivare da carenza di vitamina B12?",
            [
                ["Iperglicemia", 0],
                ["Ipercolesterolemia", 0],
                ["Anemia macrocitica", 1],
                ["Anemia microcitica", 0]
            ],
            "La carenza di B12 causa anemia macrocitica."
        ),

        new Question("Quale acido grasso può risultare carente nelle diete vegane?",
            [
                ["Omega 6", 0],
                ["Omega 9", 0],
                ["Acido oleico", 0],
                ["Omega 3", 1]
            ],
            "Gli omega 3 vegetali sono meno attivi di quelli animali."
        ),

        new Question("Quale nutriente vegetale ha bassa biodisponibilità rispetto alla sua controparte animale?",
            [
                ["Ferro", 1],
                ["Vitamina C", 0],
                ["Potassio", 0],
                ["Sodio", 0]
            ],
            "Il ferro vegetale è meno assorbibile rispetto a quello animale."
        ),

        new Question("Quale sostanza facilita l’assorbimento del ferro?",
            [
                ["Caffeina", 0],
                ["Vitamina C", 1],
                ["Tannini", 0],
                ["Teina", 0]
            ],
            "La vitamina C aumenta l’assorbimento del ferro."
        ),

        new Question("Quale sintomo è tipico della carenza di ferro?",
            [
                ["Iperattività", 0],
                ["Aumento della temperatura corporea", 0],
                ["Unghie fragili", 1],
                ["Aumento della massa muscolare", 0]
            ],
            "Le unghie fragili sono un sintomo comune della carenza di ferro."
        ),

        new Question("Quale tra questi è un disturbo neuropsichiatrico associato a carenza di vitamina B12?",
            [
                ["Iperattività", 0],
                ["Euforia marcata", 0],
                ["Aumento della memoria", 0],
                ["Depressione", 1]
            ],
            "La carenza di B12 può causare ansia, depressione e psicosi."
        ),

        new Question("Quale sintomo neurologico può comparire in caso di carenza di vitamina B12?",
            [
                ["Parestesie", 1],
                ["Aumento della forza muscolare", 0],
                ["Iperriflessia", 0],
                ["Riduzione della vista notturna", 0]
            ],
            "La carenza di B12 può causare parestesie e disturbi della deambulazione."
        ),

        new Question("Quale sostanza ostacola l’assorbimento del ferro?",
            [
                ["Vitamina C", 0],
                ["Tè e caffè", 1],
                ["Fruttosio", 0],
                ["Aminoacidi", 0]
            ],
            "Tè e caffè riducono l’assorbimento del ferro."
        ),

        new Question("Quale nutriente è fondamentale per l’assorbimento del calcio?",
            [
                ["Vitamina C", 0],
                ["Vitamina K", 0],
                ["Vitamina D", 1],
                ["Vitamina A", 0]
            ],
            "La vitamina D favorisce l’assorbimento del calcio."
        ),

        new Question("Quale esame è utile per valutare una possibile anemia sideropenica?",
            [
                ["Trigliceridi", 0],
                ["Colesterolo HDL", 0],
                ["Magnesio", 0],
                ["Ferritina", 1]
            ],
            "La ferritina è un indicatore delle riserve di ferro."
        ),

        new Question("Quale funzione principale svolge l’apparato digerente?",
            [
                ["Assumere, elaborare e assorbire i cibi", 1],
                ["Eliminare i globuli rossi", 0],
                ["Produrre ormoni tiroidei", 0],
                ["Regolare la temperatura corporea", 0]
            ],
            "L’apparato digerente è deputato all’assunzione, elaborazione e assorbimento dei cibi."
        ),

        new Question("Quanto è lungo circa l’esofago?",
            [
                ["10 cm", 0],
                ["25 cm", 1],
                ["50 cm", 0],
                ["5 cm", 0]
            ],
            "L’esofago è un tubo muscolare lungo circa 25 cm."
        ),

        new Question("Quale struttura collega faringe e stomaco?",
            [
                ["Intestino tenue", 0],
                ["Cardias", 0],
                ["Esofago", 1],
                ["Piloro", 0]
            ],
            "L’esofago collega la faringe allo stomaco."
        ),

        new Question("Come si chiama la porta di ingresso dello stomaco?",
            [
                ["Piloro", 0],
                ["Duodeno", 0],
                ["Fondo", 0],
                ["Cardias", 1]
            ],
            "Il cardias è la porta di ingresso dello stomaco."
        ),

        new Question("Quale disturbo è caratterizzato dalla risalita di contenuto acido in esofago?",
            [
                ["Reflusso gastroesofageo", 1],
                ["Gastrite", 0],
                ["Ulcera duodenale", 0],
                ["Stipsi", 0]
            ],
            "Il reflusso gastroesofageo comporta risalita di materiale acido dallo stomaco."
        ),

        new Question("Quale condizione può favorire il reflusso gastroesofageo?",
            [
                ["Peso corporeo basso", 0],
                ["Obesità", 1],
                ["Ipotensione", 0],
                ["Ridotta attività fisica", 0]
            ],
            "Obesità e sovrappeso aumentano la pressione addominale favorendo il reflusso."
        ),

        new Question("Quale complicanza può derivare dal reflusso severo?",
            [
                ["Appendicite", 0],
                ["Colecistite", 0],
                ["Esofagite", 1],
                ["Pancreatite", 0]
            ],
            "Il reflusso severo può causare esofagite erosiva."
        ),

        new Question("Quale alimento può peggiorare il reflusso?",
            [
                ["Verdure bollite", 0],
                ["Riso bianco", 0],
                ["Carni bianche", 0],
                ["Cioccolato", 1]
            ],
            "Cioccolato, caffè, alcol e cibi fritti peggiorano il reflusso."
        ),

        new Question("Quale farmaco è utilizzato per trattare il reflusso?",
            [
                ["Inibitori di pompa protonica", 1],
                ["Antistaminici", 0],
                ["Antibiotici", 0],
                ["Anticoagulanti", 0]
            ],
            "Gli IPP riducono la produzione di acido gastrico."
        ),

        new Question("Che cos’è la gastrite?",
            [
                ["Infiammazione dell’esofago", 0],
                ["Infiammazione della mucosa gastrica", 1],
                ["Infiammazione del colon", 0],
                ["Infiammazione del pancreas", 0]
            ],
            "La gastrite è un’infiammazione della mucosa dello stomaco."
        ),

        new Question("Quale condizione epatica è reversibile?",
            [
                ["Cirrosi epatica", 0],
                ["Epatite autoimmune", 0],
                ["Steatosi epatica", 1],
                ["Fibrosi avanzata", 0]
            ],
            "La steatosi epatica è reversibile se trattata."
        ),

        new Question("Quale sintomo è tipico della steatosi epatica?",
            [
                ["Aumento della temperatura corporea", 0],
                ["Tachicardia", 0],
                ["Iperidrosi", 0],
                ["Epatomegalia", 1]
            ],
            "La steatosi può presentare epatomegalia alla palpazione."
        ),

        new Question("Quale causa può favorire la stipsi?",
            [
                ["Scarsa idratazione", 1],
                ["Dieta ricca di fibre", 0],
                ["Idratazione adeguata", 0],
                ["Attività fisica regolare", 0]
            ],
            "Scarsa idratazione e dieta povera di fibre favoriscono la stipsi."
        ),

        new Question("Che cos’è il fecaloma?",
            [
                ["Un’infezione intestinale", 0],
                ["Una massa fecale disidratata e dura", 1],
                ["Una forma di gastrite", 0],
                ["Una stenosi esofagea", 0]
            ],
            "Il fecaloma è una massa fecale dura che può causare occlusione."
        ),

        new Question("Quale sintomo è tipico del diabete?",
            [
                ["Ipotermia", 0],
                ["Iperattività", 0],
                ["Polidipsia", 1],
                ["Calo della vista notturna", 0]
            ],
            "Polidipsia, poliuria e perdita di peso sono sintomi tipici del diabete."
        ),

        new Question("Quale valore di glicemia a digiuno indica diabete?",
            [
                ["70–100 mg/dl", 0],
                ["100–125 mg/dl", 0],
                ["50–69 mg/dl", 0],
                ["≥126 mg/dl", 1]
            ],
            "Il diabete è diagnosticato con glicemia a digiuno ≥126 mg/dl."
        ),

        new Question("Quale organo può essere danneggiato dal diabete?",
            [
                ["Reni", 1],
                ["Milza", 0],
                ["Tiroide", 0],
                ["Appendice", 0]
            ],
            "Il diabete può danneggiare i reni fino all’insufficienza renale."
        ),

        new Question("Quale complicanza vascolare può insorgere nel diabete?",
            [
                ["Varicocele", 0],
                ["Piede diabetico", 1],
                ["Trombosi venosa superficiale", 0],
                ["Emorroidi", 0]
            ],
            "Il piede diabetico può portare fino all’amputazione."
        ),

        new Question("Quale terapia è indispensabile nel diabete di tipo 1?",
            [
                ["Dieta ipocalorica", 0],
                ["Attività fisica", 0],
                ["Insulina", 1],
                ["Integratori vitaminici", 0]
            ],
            "Il diabete tipo 1 richiede insulina per tutta la vita."
        ),

        new Question("Qual è la terapia iniziale nel diabete di tipo 2?",
            [
                ["Insulina immediata", 0],
                ["Farmaci ipoglicemizzanti", 0],
                ["Chemioterapia", 0],
                ["Dieta e attività fisica", 1]
            ],
            "La terapia iniziale del diabete tipo 2 è dieta e attività fisica."
        ),

        new Question("Quale farmaco può essere utilizzato nel diabete tipo 2 se dieta e attività fisica non bastano?",
            [
                ["Ipoglicemizzanti orali", 1],
                ["Antibiotici", 0],
                ["Anticoagulanti", 0],
                ["Antistaminici", 0]
            ],
            "Gli ipoglicemizzanti orali sono usati nel diabete tipo 2."
        ),

        new Question("Quale condizione può aumentare il rischio cardiovascolare nel paziente diabetico?",
            [
                ["Ipotermia", 0],
                ["Colesterolo elevato", 1],
                ["Bassi trigliceridi", 0],
                ["Peso corporeo basso", 0]
            ],
            "Colesterolo, trigliceridi e ipertensione aumentano il rischio cardiovascolare."
        ),

        new Question("Quale sintomo è comune sia nel diabete tipo 1 che tipo 2?",
            [
                ["Ipotensione", 0],
                ["Iperattività", 0],
                ["Poliuria", 1],
                ["Aumento della massa muscolare", 0]
            ],
            "Poliuria e polidipsia sono comuni in entrambe le forme."
        ),

        new Question("Quale condizione può comparire nel diabete non controllato?",
            [
                ["Aumento della vista", 0],
                ["Iperattività", 0],
                ["Riduzione della glicemia", 0],
                ["Ferite che non si rimarginano", 1]
            ],
            "La cattiva cicatrizzazione è tipica del diabete non controllato."
        ),

        new Question("Quale valore di glicemia indica ipoglicemia?",
            [
                ["<70 mg/dl", 1],
                ["100 mg/dl", 0],
                ["126 mg/dl", 0],
                ["200 mg/dl", 0]
            ],
            "Una glicemia <70 mg/dl indica ipoglicemia."
        ),

        new Question("Quale sintomo può indicare ipoglicemia?",
            [
                ["Aumento della sete", 0],
                ["Sudorazione e tremori", 1],
                ["Minzione frequente", 0],
                ["Aumento dell’appetito", 0]
            ],
            "Sudorazione, tremori e confusione sono tipici dell’ipoglicemia."
        ),

        new Question("Quale condizione è tipica del diabete gestazionale?",
            [
                ["Carenza assoluta di insulina", 0],
                ["Esordio in età infantile", 0],
                ["Alterazioni simili al diabete tipo 2", 1],
                ["Ipotensione cronica", 0]
            ],
            "Il diabete gestazionale presenta difetti simili al diabete tipo 2."
        )


    ],

  getFeedback(score) {
    if (score >= 0 && score <= 20) return "/20";
    return "";
  }
};
