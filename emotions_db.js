// ── PWA EMOTIONS DATABASE (PL & DE) ──

window.ALL_TRUDNE_PL = [
  'agresja', 'antypatia', 'apatia', 'awersja', 'bezradność', 'bezsilność',
  'bezwartościowy', 'bierność', 'ból', 'brak', 'brutalnie potraktowany',
  'cierpienie', 'depresja', 'duma', 'dyskomfort', 'dyskryminacja',
  'fobia', 'frustracja', 'furia', 'gniew', 'gorycz', 'groza',
  'ignorowany', 'irytacja', 'konflikt wewnętrzny', 'konsternacja',
  'kontrolowany', 'lekceważony', 'lenistwo', 'lęk', 'litość',
  'melancholia', 'męka', 'napięcie', 'nerwowość', 'niechęć',
  'niemoc', 'nienawiść', 'niepocieszony', 'niesmak', 'niespokojny',
  'nieszczęśliwy', 'nieufność', 'nieważny', 'niezadowolony',
  'niezaspokojony', 'nuda', 'obawa', 'obrzydzenie', 'oburzenie',
  'odrętwiały', 'oklapnięty', 'otępiały', 'onieśmielenie',
  'osowiały', 'ostrożność', 'oszołomienie', 'oszukany', 'panika',
  'paraliż', 'podenerwowany', 'podminowany', 'pogarda', 'poirytowany',
  'pomieszanie', 'pominięty', 'poniżenie', 'powściągliwość',
  'przerażony', 'przestraszony', 'przybity', 'przygnębienie',
  'przykrość', 'przytłoczony', 'rozczarowany', 'rozdrażniony',
  'rozdygotany', 'rozgoryczony', 'rozpacz', 'roztrzęsiony',
  'rozwścieczony', 'rozzłoszczony', 'rozżalony', 'samotność',
  'sfrustrowany', 'skompromitowany', 'skrępowany', 'słabość',
  'smutek', 'spanikowany', 'speszony', 'spięty', 'sponiewierany',
  'sprzeciw', 'strach', 'stres', 'tęsknota', 'udręka', 'upokorzenie',
  'winny', 'wkurzony', 'wrogość', 'wstręt', 'wstrząśnięty',
  'wstyd', 'wściekły', 'wykorzystany', 'wzburzony', 'zakłopotanie',
  'załamany', 'zaniepokojony', 'zaskoczony', 'zasmucony',
  'zatroskany', 'zawiść', 'zazdrość', 'zażenowanie', 'zbulwersowany',
  'zdegustowany', 'zdenerwowany', 'zdesperowany', 'zdezorientowany',
  'zdruzgotany', 'zdziwiony', 'zestresowanie', 'zgaszony',
  'zgorszenie', 'zgroza', 'zimno', 'zirytowany', 'złość',
  'zły', 'zmartwiony', 'zmęczony', 'zmieszany', 'zniechęcony',
  'zniecierpliwiony', 'zniesmaczony', 'znieważony', 'zniewolony',
  'zranienie', 'zrozpaczony', 'zszokowany', 'żal'
];

window.ALL_TRUDNE_DE = [
  'aggression', 'antipathie', 'apathie', 'aversion', 'hilflosigkeit', 'machtlosigkeit',
  'wertlos', 'passivität', 'schmerz', 'mangel', 'brutal behandelt',
  'leiden', 'depression', 'stolz', 'unbehagen', 'diskriminierung',
  'phobie', 'frustration', 'raserei', 'zorn', 'bitterkeit', 'horror',
  'ignoriert', 'irritation', 'innerer konflikt', 'bestürzung',
  'kontrolliert', 'missachtet', 'faulheit', 'angst', 'mitleid',
  'melancholie', 'qual', 'anspannung', 'nervosität', 'abneigung',
  'ohnmacht', 'hass', 'trostlos', 'abscheu', 'unruhig',
  'unglücklich', 'misstrauen', 'unwichtig', 'unzufrieden',
  'unbefriedigt', 'langeweile', 'befürchtung', 'ekel', 'empörung',
  'taub', 'schlapp', 'benommen', 'einschüchterung',
  'trübsinnig', 'vorsicht', 'benommenheit', 'betrogen', 'panik',
  'lähmung', 'nervös', 'gereizt', 'verachtung', 'verärgert',
  'verwirrung', 'übergangen', 'demütigung', 'zurückhaltung',
  'entsetzt', 'erschrocken', 'niedergeschlagen', 'bedrückung',
  'kränkung', 'überwältigt', 'enttäuscht', 'irritiert',
  'zittrig', 'verbittert', 'verzweiflung', 'erschüttert',
  'wütend', 'zornig', 'grollend', 'einsamkeit',
  'frustriert', 'kompromittiert', 'befangen', 'schwächelnd',
  'traurigkeit', 'panisch', 'verlegen', 'angespannt', 'misshandelt',
  'protest', 'furcht', 'stress', 'sehnsucht', 'qualen', 'erniedrigung',
  'schuldig', 'sauer', 'feindseligkeit', 'schockiert',
  'scham', 'wütend', 'ausgenutzt', 'erregt', 'verlegenheit',
  'gebrochen', 'besorgt', 'überrascht', 'betrübt',
  'besorgt', 'neid', 'eifersucht', 'peinlichkeit', 'schockiert',
  'angewidert', 'aufgeregt', 'verzweifelt', 'verwirrt', 'erschüttert',
  'verwundert', 'gestresst', 'erloschen', 'skandalisiert', 'entsetzen',
  'kalt', 'genervt', 'ärger', 'böse', 'besorgt',
  'müde', 'verwirrt', 'entmutigt', 'ungeduldig', 'angewidert',
  'beleidigt', 'gefangen', 'verletzt', 'verzweifelt', 'schockiert', 'bedauern'
];

window.EMOTIONS_MAP = {
  // Polish keys
  "agresja": "anger", "antypatia": "discontent", "apatia": "fatigue", "awersja": "anger",
  "bezradność": "fatigue", "bezsilność": "fatigue", "bezwartościowy": "discontent", "bierność": "fatigue",
  "ból": "discontent", "brak": "discontent", "brutalnie potraktowany": "loneliness", "cierpienie": "sadness",
  "depresja": "sadness", "duma": "discontent", "dyskomfort": "discontent", "dyskryminacja": "discontent",
  "fobia": "fear", "frustracja": "anger", "furia": "anger", "gniew": "anger",
  "gorycz": "loneliness", "groza": "fear", "ignorowany": "loneliness", "irytacja": "anger",
  "konflikt wewnętrzny": "confusion", "konsternacja": "confusion", "kontrolowany": "loneliness", "lekceważony": "loneliness",
  "lenistwo": "fatigue", "lęk": "fear", "litość": "sadness", "melancholia": "sadness",
  "męka": "sadness", "napięcie": "fear", "nerwowość": "fear", "niechęć": "discontent",
  "niemoc": "fatigue", "nienawiść": "discontent", "niepocieszony": "sadness", "niesmak": "discontent",
  "niespokojny": "fear", "nieszczęśliwy": "sadness", "nieufność": "discontent", "nieważny": "loneliness",
  "niezadowolony": "discontent", "niezaspokojony": "discontent", "nuda": "discontent", "obawa": "fear",
  "obrzydzenie": "discontent", "oburzenie": "anger", "odrętwiały": "fatigue", "oklapnięty": "fatigue",
  "otępiały": "fatigue", "onieśmielenie": "fear", "osowiały": "fatigue", "ostrożność": "discontent",
  "oszołomienie": "confusion", "oszukany": "discontent", "panika": "fear", "paraliż": "fatigue",
  "podenerwowany": "anger", "podminowany": "anger", "pogarda": "anger", "poirytowany": "anger",
  "pomieszanie": "confusion", "pominięty": "loneliness", "poniżenie": "loneliness", "powściągliwość": "discontent",
  "przerażony": "fear", "przestraszony": "fear", "przybity": "sadness", "przygnębienie": "sadness",
  "przykrość": "sadness", "przytłoczony": "confusion", "rozczarowany": "sadness", "rozdrażniony": "anger",
  "rozdygotany": "confusion", "rozgoryczony": "loneliness", "rozpacz": "sadness", "roztrzęsiony": "sadness",
  "rozwścieczony": "anger", "rozzłoszczony": "anger", "rozżalony": "sadness", "samotność": "loneliness",
  "sfrustrowany": "anger", "skompromitowany": "discontent", "skrępowany": "discontent", "słabość": "fatigue",
  "smutek": "sadness", "spanikowany": "fear", "speszony": "discontent", "spięty": "fear",
  "sponiewierany": "loneliness", "sprzeciw": "anger", "strach": "fear", "stres": "fear",
  "tęsknota": "sadness", "udręka": "sadness", "upokorzenie": "wstyd", "winny": "wstyd",
  "wkurzony": "anger", "wrogość": "anger", "wstręt": "anger", "wstrząśnięty": "wstyd",
  "wstyd": "wstyd", "wściekły": "anger", "wykorzystany": "loneliness", "wzburzony": "anger",
  "zakłopotanie": "confusion", "załamany": "sadness", "zaniepokojony": "fear", "zaskoczony": "confusion",
  "zasmucony": "sadness", "zatroskany": "confusion", "zawiść": "discontent", "zazdrość": "discontent",
  "zażenowanie": "wstyd", "zbulwersowany": "wstyd", "zdegustowany": "discontent", "zdenerwowany": "confusion",
  "zdesperowany": "fear", "zdezorientowany": "confusion", "zdruzgotany": "confusion", "zdziwiony": "confusion",
  "zestresowanie": "fear", "zgaszony": "fatigue", "zgorszenie": "discontent", "zgroza": "fear",
  "zimno": "discontent", "zirytowany": "anger", "złość": "anger", "zły": "anger",
  "zmartwiony": "sadness", "zmęczony": "fatigue", "zmieszany": "confusion", "zniechęcony": "fatigue",
  "zniecierpliwiony": "fatigue", "zniesmaczony": "discontent", "znieważony": "loneliness", "zniewolony": "discontent",
  "zranienie": "loneliness", "zrozpaczony": "sadness", "zszokowany": "confusion", "żal": "sadness",

  // German keys
  "aggression": "anger", "antipathie": "discontent", "apathie": "fatigue", "aversion": "anger",
  "hilflosigkeit": "fatigue", "machtlosigkeit": "fatigue", "wertlos": "discontent", "passivität": "fatigue",
  "schmerz": "discontent", "mangel": "discontent", "brutal behandelt": "loneliness", "leiden": "sadness",
  "depression": "sadness", "stolz": "discontent", "unbehagen": "discontent", "diskriminierung": "discontent",
  "phobie": "fear", "frustration": "anger", "raserei": "anger", "wut": "anger", "zorn": "anger",
  "bitterkeit": "loneliness", "horror": "fear", "schrecken": "fear", "ignoriert": "loneliness", "irritation": "anger",
  "innerer konflikt": "confusion", "bestürzung": "confusion", "kontrolliert": "loneliness", "missachtet": "loneliness",
  "faulheit": "fatigue", "angst": "fear", "mitleid": "sadness", "melancholie": "sadness",
  "qual": "sadness", "anspannung": "fear", "nervosität": "fear", "abneigung": "discontent",
  "ohnmacht": "fatigue", "hass": "discontent", "trostlos": "sadness", "abscheu": "discontent",
  "unruhig": "fear", "unglücklich": "sadness", "misstrauen": "discontent", "unwichtig": "loneliness",
  "unzufrieden": "discontent", "unbefriedigt": "discontent", "langeweile": "discontent", "befürchtung": "fear",
  "ekel": "discontent", "empörung": "anger", "taub": "fatigue", "erstarrt": "fatigue",
  "schlapp": "fatigue", "benommen": "fatigue", "einschüchterung": "fear", "trübsinnig": "fatigue",
  "vorsicht": "discontent", "benommenheit": "confusion", "betrogen": "discontent", "panik": "fear",
  "lähmung": "fatigue", "nervös": "anger", "gereizt": "anger", "verachtung": "anger",
  "verärgert": "anger", "verwirrung": "confusion", "übergangen": "loneliness", "demütigung": "loneliness",
  "zurückhaltung": "discontent", "entsetzt": "fear", "erschrocken": "fear", "niedergeschlagen": "sadness",
  "bedrückung": "sadness", "kränkung": "sadness", "überwältigt": "confusion", "enttäuscht": "sadness",
  "irritiert": "anger", "zittrig": "confusion", "verbittert": "loneliness", "verzweiflung": "sadness",
  "erschüttert": "sadness", "wütend": "anger", "zornig": "anger", "grollend": "sadness",
  "einsamkeit": "loneliness", "frustriert": "anger", "kompromittiert": "discontent", "befangen": "discontent",
  "schwächelnd": "fatigue", "traurigkeit": "sadness", "panisch": "fear", "verlegen": "discontent",
  "angespannt": "fear", "misshandelt": "loneliness", "protest": "anger", "furcht": "fear",
  "stress": "fear", "sehnsucht": "sadness", "qualen": "sadness", "erniedrigung": "wstyd",
  "schuldig": "wstyd", "sauer": "anger", "feindseligkeit": "anger", "schockiert": "wstyd",
  "scham": "wstyd", "ausgenutzt": "loneliness", "erregt": "anger", "verlegenheit": "confusion",
  "gebrochen": "sadness", "besorgt": "fear", "überrascht": "confusion", "betrübt": "sadness",
  "neid": "discontent", "eifersucht": "discontent", "peinlichkeit": "wstyd", "angewidert": "discontent",
  "aufgeregt": "confusion", "verzweifelt": "fear", "verwundert": "confusion", "gestresst": "fear",
  "erloschen": "fatigue", "skandalisiert": "discontent", "entsetzen": "fear", "kalt": "discontent",
  "genervt": "anger", "ärger": "anger", "böse": "anger", "müde": "fatigue",
  "entmutigt": "fatigue", "ungeduldig": "fatigue", "beleidigt": "loneliness", "gefangen": "discontent",
  "verletzt": "loneliness", "bedauern": "sadness"
};

window.EMOTIONS_CLUSTERS = {
  pl: {
    anger: {
      title: "{emotion} · Uwolnienie zablokowanej energii",
      desc: "Odczuwanie stanu, jakim jest {emotion}, to sygnał, że Twoje osobiste granice zostały naruszone lub nagromadziło się w Tobie zbyt wiele stłumionego napięcia. Pamiętaj, że ta emocja niesie w sobie ogromną siłę życiową – nie tłum jej, ale skieruj ją na konstruktywne, bezpieczne działanie.",
      isSevere: true,
      actionPlan: {
        step1: "🏃 **Ruch i rozładowanie:** Pozwól temu napięciu opuścić ciało poprzez bezpieczną aktywność fizyczną (szybki spacer, sport, a nawet krzyk w poduszkę).",
        step2: "🔍 **Zidentyfikuj granicę:** Zastanów się na chłodno, jaka Twoja potrzeba lub granica została naruszona i jak możesz ją asertywnie zakomunikować.",
        step3: "🩺 **Profesjonalne wsparcie (Informacja):** Pamiętaj, że ta aplikacja ma charakter wyłącznie rozrywkowy i poprawiający samopoczucie. Jeśli złość lub frustracja utrudniają Ci codzienne funkcjonowanie i relacje z bliskimi, skonsultuj się z psychoterapeutą."
      }
    },
    fear: {
      title: "{emotion} · Próg wewnętrznej transformacji",
      desc: "Stan, jakim jest {emotion}, wskazuje, że stajesz twarzą w twarz z nieznanym lub Twoja podświadomość próbuje Cię chronić przed domniemanym zagrożeniem. Zamiast uciekać, spróbuj oswoić ten stan poprzez spokojny oddech. Jesteś bezpieczny.",
      isSevere: true,
      actionPlan: {
        step1: "🧘 **Oddech 4-7-8:** Weź głęboki wdech przez 4 sekundy, zatrzymaj na 7 sekund i wypuszczaj powietrze przez 8 sekund. To wyciszy Twój układ nerwowy.",
        step2: "✍  **Rozbrojenie lęku:** Zapisz na kartce najgorszy scenariusz i zobacz, czy jest on realny, czy to tylko projekcja Twojego umysłu.",
        step3: "🩺 **Profesjonalne wsparcie (Informacja):** Ta aplikacja służy wyłącznie rozrywce i motywacji. W przypadku silnego lęku utrudniającego codzienne funkcjonowanie, skonsultuj się z lekarzem lub terapeutą."
      }
    },
    sadness: {
      title: "{emotion} · Czas regeneracji i puszczenia",
      desc: "Odczuwany przez Ciebie stan ({emotion}) to naturalny proces oczyszczania pola energetycznego. Sygnalizuje, że nadszedł czas na pożegnanie tego, co już Ci nie służy, lub na odpoczynek w ciszy. Daj sobie na to pełne przyzwolenie.",
      isSevere: true,
      actionPlan: {
        step1: "✍️ **Zapisz swoje uczucia:** Przelej swoje myśli na papier, pozwalając sobie na łzy, które są naturalnym sposobem na uwalnianie napięcia.",
        step2: "🫂 **Bądź dla siebie łagodny:** Zrób dzisiaj coś miłego dla siebie — ciepła kąpiel, ulubiona herbata lub chwila pod kocykiem.",
        step3: "🩺 **Profesjonalne wsparcie (Informacja):** Aplikacja ma charakter wyłącznie rozrywkowy. Jeśli obniżony nastrój i smutek trwają dłużej i przechodzą w apatię, skonsultuj się ze specjalistą."
      }
    },
    fatigue: {
      title: "{emotion} · Sygnał do głębokiego odpoczynku",
      desc: "Kiedy pojawia się {emotion}, Twoje ciało i umysł wysyłają wyraźne ostrzeżenie: bateria jest wyczerpana. To nie jest czas na działanie ani analizę. Potrzebujesz regeneracji i odcięcia od nadmiaru bodźców.",
      isSevere: true,
      actionPlan: {
        step1: "🔌 **Cyfrowy detoks:** Wyłącz telefon i komputer na co najmniej 2 godziny. Daj swojemu układowi nerwowemu odpocząć od ciągłych powiadomień.",
        step2: "💤 **Sen lub relaksacja:** Daj sobie prawo do drzemki lub po prostu poleż bez żadnego konkretnego celu, słuchając kojącej muzyki.",
        step3: "🩺 **Profesjonalne wsparcie (Informacja):** Jeśli chroniczne zmęczenie lub poczucie bezsilności nie mijają mimo odpoczynku, skonsultuj się z lekarzem w celu zbadania stanu zdrowia."
      }
    },
    confusion: {
      title: "{emotion} · Poszukiwanie wewnętrznej jasności",
      desc: "Odczuwanie stanu, jakim jest {emotion}, oznacza, że w Twoim życiu nagromadziło się zbyt wiele sprzecznych informacji lub stoisz na rozdrożu. Nie musisz znać wszystkich odpowiedzi już teraz. Pozwól sobie na niewiedzę.",
      isSevere: true,
      actionPlan: {
        step1: "🛑 **Zatrzymaj analizę:** Przestań na parę godzin myśleć o problemie. Rozwiązania często przychodzą wtedy, gdy dajemy umysłowi odpocząć.",
        step2: "🌲 **Kontakt z naturą:** Idź na spacer do lasu lub parku. Ziemia i drzewa pomogą Ci się uziemić i odzyskać trzeźwość myślenia.",
        step3: "🩺 **Profesjonalne wsparcie (Informacja):** Ta aplikacja ma charakter rozrywkowy. W przypadku długotrwałego uczucia dezorientacji wywołującego silny niepokój, skonsultuj się ze specjalistą."
      }
    },
    wstyd: {
      title: "{emotion} · Lekcja samowspółczucia",
      desc: "Stan, jakim jest {emotion}, często wynika z surowej oceny samego siebie i nierealistycznych oczekiwań, które sobie stawiasz. Pamiętaj, że każdy popełnia błędy i ma prawo do słabości. Spójrz na siebie z czułością.",
      isSevere: true,
      actionPlan: {
        step1: "🗣️ **Mów do siebie jak do przyjaciela:** Zauważ swój wewnętrzny krytyczny głos i zastąp go słowami: 'Zrobiłam najlepiej, jak potrafiłam w tamtym momencie'.",
        step2: "✍️ **Zapisz i uwolnij:** Zapisz to, co wywołuje w Tobie to uczucie, a potem wybacz sobie. Jesteś tylko człowiekiem.",
        step3: "🩺 **Profesjonalne wsparcie (Informacja):** Wstyd i poczucie winy bywają głęboko zakorzenione. Psychoterapia jest odpowiednim miejscem do pracy nad tymi stanami."
      }
    },
    loneliness: {
      title: "{emotion} · Tęsknota za połączeniem",
      desc: "Odczuwanie stanu, jakim jest {emotion}, wskazuje na głęboką potrzebę bliskości i bycia widzianym. Czasami to także zaproszenie do tego, by najpierw odbudować połączenie z samą sobą i zaopiekować się własnymi potrzebami.",
      isSevere: true,
      actionPlan: {
        step1: "🧒 **Zaopiekuj się sobą:** Zapytaj siebie: 'Czego teraz potrzebuję, aby poczuć się bezpiecznie i dobrze?'. Zrób to dla siebie.",
        step2: "📞 **Zrób mały krok do ludzi:** Wyślij krótką wiadomość do kogoś bliskiego lub wyjdź w miejsce, gdzie są ludzie (kawiarnia, park), by poczuć ich obecność.",
        step3: "🩺 **Profesjonalne wsparcie (Informacja):** Aplikacja ma charakter rozrywkowy. Jeśli poczucie samotności jest przewlekłe i bolesne, nie wahaj się poszukać wsparcia u psychologa lub terapeuty."
      }
    },
    discontent: {
      title: "{emotion} · Wskazówka dotycząca ukrytych pragnień",
      desc: "Stan, jakim jest {emotion}, choć bywa nieprzyjemny, niesie cenną informację. Pokazuje Ci obszary, w których czujesz niedosyt lub które podświadomie pragniesz rozwinąć w swoim życiu. Wykorzystaj to jako drogowskaz.",
      isSevere: true,
      actionPlan: {
        step1: "🔍 **Przekieruj uwagę:** Zamiast skupiać się na braku lub innych ludziach, zapytaj siebie: 'Co ta emocja mówi o moich własnych, głębokich potrzebach?'.",
        step2: "📝 **Zapisz swoje cele:** Przekształć zawiść lub niezadowolenie w listę celów i małych kroków, które możesz podjąć, by je zrealizować.",
        step3: "🩺 **Profesjonalne wsparcie (Informacja):** Aplikacja służy celom rozrywkowym. W przypadku paraliżującej zawiści lub ciągłego niezadowolenia skonsultuj się ze specjalistą."
      }
    }
  },
  de: {
    anger: {
      title: "{emotion} · Freisetzung blockierter Energie",
      desc: "Das Erleben von {emotion} ist ein Signal, dass deine persönlichen Grenzen verletzt wurden oder sich zu viel aufgestaute Spannung in dir angesammelt hat. Denke daran, dass diese Emotion eine enorme Lebenskraft in sich trägt – unterdrücke sie nicht, sondern lenke sie in konstruktives, sicheres Handeln.",
      isSevere: true,
      actionPlan: {
        step1: "🏃 **Bewegung und Entlastung:** Erlaube dieser Spannung, deinen Körper durch körperliche Aktivität (schnelles Gehen, Sport, Schreien in ein Kissen) sicher zu verlassen.",
        step2: "🔍 **Grenze identifizieren:** Überlege in Ruhe, welches Bedürfnis oder welche Grenze verletzt wurde und wie du dies selbstbewusst kommunizieren kannst.",
        step3: "🩺 **Professionelle Unterstützung (Info):** Diese App dient ausschließlich Unterhaltungszwecken. Wenn Wut oder Frustration deine Beziehungen belasten, wende dich an einen Psychotherapeuten."
      }
    },
    fear: {
      title: "{emotion} · Schwelle der inneren Transformation",
      desc: "Der Zustand von {emotion} deutet darauf hin, dass du dem Unbekannten gegenüberstehst oder dein Unterbewusstsein versucht, dich vor einer vermeintlichen Bedrohung zu schützen. Versuche, diesen Zustand durch ruhiges Atmen zu beruhigen. Du bist in Sicherheit.",
      isSevere: true,
      actionPlan: {
        step1: "🧘 **4-7-8 Atmung:** Atme 4 Sekunden lang tief ein, halte den Atem für 7 Sekunden an und atme 8 Sekunden lang aus. Dies beruhigt dein Nervensystem.",
        step2: "✍️ **Angst entschärfen:** Schreibe das schlimmste Szenario auf und prüfe, ob es realistisch ist oder nur eine Projektion deines Verstandes.",
        step3: "🩺 **Professionelle Unterstützung (Info):** Diese App dient der Unterhaltung und Motivation. Konsultiere bei anhaltender Angst, die deinen Alltag beeinträchtigt, einen Arzt oder Therapeuten."
      }
    },
    sadness: {
      title: "{emotion} · Zeit der Regeneration und des Loslassens",
      desc: "Der von dir empfundene Zustand ({emotion}) ist ein natürlicher Reinigungsprozess des Energiefeldes. Er signalisiert, dass es Zeit ist, sich von dem zu verabschieden, was dir nicht mehr dient, oder in Stille auszuruhen. Erlaube es dir ganz.",
      isSevere: true,
      actionPlan: {
        step1: "✍️ **Gefühle aufschreiben:** Schreibe deine Gedanken auf Papier und erlaube dir Tränen, die ein natürlicher Weg sind, um Spannungen abzubauen.",
        step2: "🫂 **Sei sanft zu dir:** Tu dir heute etwas Gutes – ein warmes Bad, dein Lieblingstee oder eine Decke.",
        step3: "🩺 **Professionelle Unterstützung (Info):** Die App dient ausschließlich der Unterhaltung. Wenn gedrückte Stimmung und Traurigkeit in Apathie übergehen, konsultiere einen Fachmann."
      }
    },
    fatigue: {
      title: "{emotion} · Signal für tiefe Erholung",
      desc: "Wenn {emotion} auftaucht, senden dein Körper und dein Geist eine klare Warnung: Die Batterie ist leer. Dies ist nicht die Zeit für Action oder Analyse. Du brauchst Regeneration.",
      isSevere: true,
      actionPlan: {
        step1: "🔌 **Digitaler Detox:** Schalte Telefon und Computer für mindestens 2 Stunden aus. Gönne deinem Nervensystem eine Pause.",
        step2: "💤 **Schlaf oder Entspannung:** Gönne dir ein Nickerchen oder liege einfach ohne bestimmtes Ziel da und höre beruhigende Musik.",
        step3: "🩺 **Professionelle Unterstützung (Info):** Wenn chronische Müdigkeit oder Hilflosigkeit trotz Ruhe anhalten, konsultiere einen Arzt, um deine Gesundheit zu überprüfen."
      }
    },
    confusion: {
      title: "{emotion} · Suche nach innerer Klarheit",
      desc: "Das Erleben von {emotion} bedeutet, dass sich zu viele widersprüchliche Informationen in deinem Leben angesammelt haben oder du an einem Scheideweg stehst. Du musst nicht jetzt alle Antworten wissen.",
      isSevere: true,
      actionPlan: {
        step1: "🛑 **Analyse stoppen:** Höre für ein paar Stunden auf, über das Problem nachzudenken. Lösungen kommen oft, wenn wir dem Geist eine Pause gönnen.",
        step2: "🌲 **Kontakt mit der Natur:** Gehe im Wald oder Park spazieren. Die Erde hilft dir, dich zu erden und wieder klar zu denken.",
        step3: "🩺 **Professionelle Unterstützung (Info):** Diese App dient der Unterhaltung. Bei anhaltender Verwirrung, die starke Angst hervorruft, konsultiere einen Fachmann."
      }
    },
    wstyd: {
      title: "{emotion} · Lektion im Selbstmitgefühl",
      desc: "Der Zustand von {emotion} resultiert oft aus einer strengen Selbstbeurteilung und unrealistischen Erwartungen an dich selbst. Denke daran, dass jeder Fehler macht. Schaue mit Zärtlichkeit auf dich selbst.",
      isSevere: true,
      actionPlan: {
        step1: "🗣️ **Sprich wie mit einem Freund:** Ersetze den inneren Kritiker durch die Worte: 'Ich habe in diesem Moment mein Bestes getan'.",
        step2: "✍️ **Aufschreiben und Loslassen:** Schreibe auf, was dieses Gefühl in dir auslöst, und vergib dir selbst. Du bist nur ein Mensch.",
        step3: "🩺 **Professionelle Unterstützung (Info):** Scham und Schuldgefühle sitzen oft tief. Eine Psychotherapie ist der geeignete Ort, um daran zu arbeiten."
      }
    },
    loneliness: {
      title: "{emotion} · Sehnsucht nach Verbindung",
      desc: "Das Erleben von {emotion} deutet auf ein tiefes Bedürfnis nach Nähe und dem Gesehenwerden hin. Manchmal ist es auch eine Einladung, zuerst die Verbindung zu sich selbst wieder aufzubauen und für deine Bedürfnisse zu sorgen.",
      isSevere: true,
      actionPlan: {
        step1: "🧒 **Sorge für dich selbst:** Frage dich: 'Was brauche ich jetzt, um mich sicher und wohl zu fühlen?'. Tu dies für dich.",
        step2: "📞 **Kleiner Schritt auf Menschen zu:** Sende eine kurze Nachricht an einen geliebten Menschen oder gehe an einen Ort, an dem Menschen sind.",
        step3: "🩺 **Professionelle Unterstützung (Info):** Die App dient der Unterhaltung. Wenn das Gefühl der Einsamkeit chronisch und schmerzhaft ist, wende dich an einen Psychologen."
      }
    },
    discontent: {
      title: "{emotion} · Hinweis auf verborgene Wünsche",
      desc: "Der Zustand von {emotion} trägt eine wertvolle Information in sich. Er zeigt dir Bereiche auf, in denen du Mangel verspürst oder die du unbewusst in deinem Leben entwickeln möchtest. Nutze dies als Wegweiser.",
      isSevere: true,
      actionPlan: {
        step1: "🔍 **Fokus umlenken:** Frage dich: 'Was sagt diese Emotion über meine eigenen Bedürfnisse aus?', anstatt dich auf den Mangel zu konzentrieren.",
        step2: "📝 **Ziele aufschreiben:** Verwandle Neid oder Unzufriedenheit in eine Liste von Zielen und kleinen Schritten, die du unternehmen kannst.",
        step3: "🩺 **Professionelle Unterstützung (Info):** Diese App dient der Unterhaltung. Wende dich bei lähmendem Neid oder ständiger Unzufriedenheit an einen Fachmann."
      }
    }
  }
};
