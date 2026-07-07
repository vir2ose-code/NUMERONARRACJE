const fs = require('fs');

const BODY_QUIZ_PL = {
  questions: [
    {
      q: "1. Gdy otwierasz rano oczy i myślisz o nadchodzącym dniu, Twoje pierwsze odczucie to...",
      a: [
        { text: "„Wszystko jest w porządku, dam sobie radę”. Czuję spokój i ciekawość.", profile: 1 },
        { text: "„Muszę to natychmiast zwalczyć lub kontrolować!”. Czuję irytację.", profile: 2 },
        { text: "„Muszę natychmiast biec, goni mnie czas!”. Czuję pośpiech i lęk.", profile: 3 },
        { text: "Mechanicznie wstaję i robię to, co trzeba. Pod maską czuję pustkę.", profile: 4 },
        { text: "„To wszystko jest zbyt trudne, jaki to ma sens?”. Chcę tylko zasnąć.", profile: 5 }
      ]
    },
    {
      q: "2. Zatrzymaj się na ułamek sekundy i skieruj uwagę do wewnątrz. Co najbardziej mówi do Ciebie z Twojego ciała?",
      a: [
        { text: "Przyjemne odprężenie, ugruntowanie i swobodny, głęboki oddech.", profile: 1 },
        { text: "Zaciskające się szczęki, spięte kopyta/pięści i uderzenie gorąca.", profile: 2 },
        { text: "Przyspieszone bicie serca, płytki, rwący oddech i wewnętrzne rozedrganie.", profile: 3 },
        { text: "Brak wyraźnych sygnałów, jakby moje ciało było za szklaną szybą.", profile: 4 },
        { text: "Ogromna ociężałość, odrętwienie rąk i nóg oraz przejmujący chłód.", profile: 5 }
      ]
    },
    {
      q: "3. Jakie przekonanie lub myśl najgłośniej rezonuje dzisiaj w Twoim umyśle?",
      a: [
        { text: "„Mam wystarczająco dużo czasu. Mogę i potrafię to zrobić z lekkością”.", profile: 1 },
        { text: "„Muszę postawić na swoim, nikt nie zrobi tego lepiej ani nie narzuci mi zdania!”.", profile: 2 },
        { text: "„Nie mam nad tym kontroli, zaraz coś się stanie, muszę uciekać!”.", profile: 3 },
        { text: "„Jestem zupełnie sama z tym wszystkim, nikt mnie naprawdę nie rozumie”.", profile: 4 },
        { text: "„To nie ma znaczenia, nikogo to nie obchodzi, nic się nigdy nie zmieni”.", profile: 5 }
      ]
    },
    {
      q: "4. Kiedy myślisz dzisiaj o kontakcie z ludźmi, podświadomie czujesz, że...",
      a: [
        { text: "Masz w sobie otwartość, ciekawość i pragnienie ciepłego połączenia.", profile: 1 },
        { text: "Ludzie niezwykle mnie irytują, mam ochotę na kłótnię lub stawianie oporu.", profile: 2 },
        { text: "Czuję napięcie w relacjach, czuję się osaczona i chcę się wycofać.", profile: 3 },
        { text: "Rozmawiasz normalnie, ale czujesz się za tą maską zupełnie samotna.", profile: 4 },
        { text: "Chcesz się całkowicie odizolować i unikać jakichkolwiek rozmów.", profile: 5 }
      ]
    },
    {
      q: "5. Wyobraź sobie, że masz teraz dłuższą chwilę wolnego czasu tylko dla siebie. Co się dzieje?",
      a: [
        { text: "Odpoczywasz lub robisz przerwę bez najmniejszego poczucia winy.", profile: 1 },
        { text: "Zaczynasz nerwowo coś przestawiać lub sprzątać, rozładowując złość.", profile: 2 },
        { text: "Nie potrafisz się zatrzymać, robisz sto rzeczy naraz, myśli potwornie pędzą.", profile: 3 },
        { text: "Automatycznie uciekasz w telefon lub mechaniczną rutynę, byle odrętwieć.", profile: 4 },
        { text: "Trwasz w bezruchu, czujesz totalny brak energii i odcięcie od prądu.", profile: 5 }
      ]
    },
    {
      q: "6. Kiedy stajesz przed niespodziewanym problemem lub zmianą planów, Twoja pierwsza automatyczna reakcja to...",
      a: [
        { text: "Akceptacja. Biorę oddech i szukam spokojnego rozwiązania.", profile: 1 },
        { text: "Atak. Pojawia się we mnie frustracja, szukanie winnych i bunt.", profile: 2 },
        { text: "Chaos. Czuję niepokój, chcę natychmiast od tego uciec i schować głowę w piasek.", profile: 3 },
        { text: "Zamrożenie. Robię dobrą minę do złej gry, chociaż w środku cała sztywnieję.", profile: 4 },
        { text: "Rezygnacja. Od razu opuszczam ręce, tracę resztki sił i poddaję się.", profile: 5 }
      ]
    },
    {
      q: "7. Gdyby Twoje ciało miało dzisiaj wysłać Ci jedną najważniejszą wiadomość, brzmiałaby ona:",
      a: [
        { text: "„Jestem bezpieczne, mogę swobodnie czerpać z moich talentów”.", profile: 1 },
        { text: "„Mam w sobie za dużo stłumionej złości i walki, muszę to rozładować”.", profile: 2 },
        { text: "„Biegnę tak szybko, że zaraz zgubię siebie. Pomóż mi się zatrzymać”.", profile: 3 },
        { text: "„Chowam się za grubym pancerzem, bo boję się pokazać swoją kruchość”.", profile: 4 },
        { text: "„Jestem skrajnie wyczerpane, odłączone i pilnie potrzebuję jaskini”.", profile: 5 }
      ]
    }
  ],
  profiles: {
    "1": {
      "id": 1,
      "title": "Twój stan na dziś: Słońce w Sercu",
      "description": "Dzisiaj Twoja energia znajduje się w przepięknej, naturalnej harmonii i pełnej równowadze. W Twoim ciele gości odprężenie, ugruntowanie i stabilność, a Twój oddech płynie swobodnie, spokojnie i głęboko. Towarzyszy Ci poczucie bezpieczeństwa, miłości oraz radosna ciekawość świata i ludzi. To właśnie tutaj masz najczystszy dostęp do swojej intuicji i wrodzonej wibracji urodzenia.",
      "audioTitle": "Taniec Złotego Liścia",
      "audioDesc": "Przygotowałam dla Ciebie opowiadanie audio: „Taniec Złotego Liścia”. Ta przepiękna historia pozwoli Ci w pełni celebrować Twoją wewnętrzną wolność, spokój i radość życia.",
      "audioFile": "./Quiz_Co opowiada Twoje Ciało/AUDIO MP3/1. Taniec Złotego Liścia.mp3",
      "practiceTitle": "Pomóż sobie teraz: Codzienna praktyka celebracji i ugruntowania",
      "practiceIntro": "Twoja energia jest dziś w przepięknej harmonii, a w ciele gości naturalny spokój i otwartość. Aby zatrzymać to wspaniałe uczucie i czerpać z niego przez cały dzień, podaruj sobie 5–10 minut świadomej obecności:",
      "practiceSteps": [
        "<b>Rozpoznanie:</b> Skieruj uwagę do wewnątrz i pław się w uczuciu przyjemnego odprężenia, stabilności i swobodnego oddechu.",
        "<b>Kotwiczenie w ciele (2-3 min):</b> Wykonaj kilka spokojnych, pełnych gracji ruchów – rozciągnij ramiona do słońca, zrób parę głębokich wdechów i poczuj, jak stabilnie Twoje stopy łączą się z ziemią.",
        "<b>Świadomy oddech:</b> Weź głęboki wdech nosem, zatrzymaj go na sekundę z uśmiechem i wypuść łagodnie ustami, czując wdzięczność za ten moment.",
        "<b>Ukojenie:</b> Połóż dłonie na sercu i powiedz sobie z czułością: „Jestem bezpieczna, jestem połączona ze światem. Rozwijam swoje talenty z pełną lekkością”."
      ],
      "reminderTitle": "Ważne przypomnienie od serca",
      "reminderText": "Ten quiz oraz praktyki somatyczne są wspaniałym narzędziem do codziennego mapowania stanów emocjonalnych i energetycznych. Pamiętaj, że aplikacja służy samopoznaniu i nie zastępuje profesjonalnej porady medycznej ani psychologicznej. Ciesz się swoim dzisiejszym pięknym stanem, a gdyby w przyszłości Twoje samopoczucie uległo zmianie i potrzebowałabyś głębszego wsparcia, zawsze warto pamiętać o możliwości konsultacji ze specjalistą.",
      "ctaText": "Skorzystaj z tej harmonijnej energii i odkryj pełną mapę swojego urodzeniowego potencjału."
    },
    "2": {
      "id": 2,
      "title": "Twój stan na dziś: Ogień w Ciele",
      "description": "Dzisiaj Twoja energia płonie silnym, ale bardzo niespokojnym i obronnym płomieniem. Możesz odczuwać wewnętrzną irytację, złość, napięcie w szczękach lub potrzebę natychmiastowego zwalczenia chaosu wokół Ciebie. Twój układ nerwowy wszedł w tryb pełnej mobilizacji, bo podświadomie wykrył zagrożenie i próbuje Cię chronić przed utratą kontroli. Ten ogień można jednak bezpiecznie uziemić i zamienić w twórczą siłę.",
      "audioTitle": "Tkaczka i Ognisty Pegaz",
      "audioDesc": "Przygotowałam dla Ciebie opowiadanie audio: „Tkaczka i Ognisty Pegaz”. To głęboka, uziemiająca historia, która pomoże Ci okiełznać ten wewnętrzny pożar, ściągnąć energię z huczącej głowy i zamienić ją w bezpieczną moc wizjonera.",
      "audioFile": "./Quiz_Co opowiada Twoje Ciało/AUDIO MP3/2. Tkaczka i Ognisty Pegaz.mp3",
      "practiceTitle": "Pomóż sobie teraz: Codzienna praktyka uziemienia",
      "practiceIntro": "Gdy czujesz złość i napięcie, Twój układ potrzebuje bezpiecznego upustu energii. Podaruj sobie 5–10 minut:",
      "practiceSteps": [
        "<b>Rozpoznanie:</b> Zauważ, gdzie w ciele trzymasz napięcie (szczęka, ramiona, pięści).",
        "<b>Wyładowanie (2-3 min):</b> Energetycznie otrzepuj dłonie i stopy lub potup mocno o podłogę. Możesz uderzyć pięściami w poduszkę.",
        "<b>Oddech i ruch:</b> Pochyl się luźno do przodu (pozycja wodospadu), pozwól głowie zwisać i zrób długi wydech ustami.",
        "<b>Ukojenie:</b> Połóż rękę na sercu i brzuchu. Odetchnij głęboko i powiedz: „Jestem bezpieczna. Już nie muszę walczyć”."
      ],
      "reminderTitle": "Ważne przypomnienie od serca",
      "reminderText": "Te ćwiczenia oraz audio wspierają codzienną samoregulację i nie zastępują terapii ani porady lekarskiej. Jeśli stan ciągłej walki i irytacji towarzyszy Ci od dłuższego czasu i utrudnia codzienne życie, zaopiekuj się sobą w pełni i skonsultuj się ze specjalistą (psychologiem lub terapeutą).",
      "ctaText": "Odkryj swój pełny profil numerologiczny, aby uwolnić zblokowane emocje i przestać walczyć ze światem."
    },
    "3": {
      "id": 3,
      "title": "Twój stan na dziś: Wichura i Pośpiech",
      "description": "Dzisiaj Twoim ciałem i umysłem zawładnął szalony wiatr. Odczuwasz ogromny wewnętrzny pęd, niepokój, lęk przed brakiem czasu oraz przyspieszone bicie serca i rwący oddech. W Twojej głowie wiruje tysiąc myśli naraz, a alarmujący głos powtarza: „Muszę uciekać, muszę biec, nie mogę się teraz zatrzymać!”. Twój układ nerwowy próbuje uciec przed przytłoczeniem. Twój organizm nie potrzebuje teraz kolejnych zadań, ale bezpiecznego zatrzymania.",
      "audioTitle": "Iskierka i Melodia Wiatru",
      "audioDesc": "Przygotowałam dla Ciebie specjalne, nowo nagrane opowiadanie audio: „Iskierka i Melodia Wiatru”. To głęboka, kojąca opowieść o uciszaniu życiowej wichury, odrzucaniu lęku przed oceną i powrocie do bezpiecznego rytmu własnego serca. Znajdziesz ją w zakładce Audio – oprzyj stopy mocno na ziemi i posłuchaj.",
      "audioFile": "./Quiz_Co opowiada Twoje Ciało/AUDIO MP3/3. Iskierka i Melodia Wiatru.mp3",
      "practiceTitle": "Pomóż sobie teraz: Codzienna praktyka ugruntowania",
      "practiceIntro": "Kiedy w głowie szaleje wichura myśli, potrzebujesz bezpiecznego zatrzymania w ciele. Podaruj sobie 5–10 minut:",
      "practiceSteps": [
        "<b>Rozpoznanie:</b> Zauważ gonitwę myśli i wewnętrzne rozedrganie, zwłaszcza w nogach.",
        "<b>Uziemienie (2-3 min):</b> Świadomie stąpaj całą stopą po podłodze i opukuj dłońmi swoje uda oraz łydki.",
        "<b>Ruch:</b> Stań szeroko, płynnie przenoś ciężar z nogi na nogę i łagodnie krąż miednicą.",
        "<b>Ukojenie:</b> Oprzyj dłonie na brzuchu i sercu. Poczuj grunt pod stopami i powiedz: „Nie muszę już uciekać. Jestem tu bezpieczna”."
      ],
      "reminderTitle": "Ważne przypomnienie od serca",
      "reminderText": "Prezentowane treści mają charakter samopomocowy i nie zastępują profesjonalnego wsparcia medycznego ani psychologicznego. Jeśli nieustanny lęk, presja czasu i wewnętrzny kołowrotek myśli są zbyt przytłaczające, by nieść je w pojedynkę, proszę, skonsultuj się z psychologiem lub psychoterapeutą.",
      "ctaText": "Zrozumienie własnej matrycy numerologicznej pomoże Ci zatrzymać bieg presji i odzyskać wewnętrzny spokój."
    },
    "4": {
      "id": 4,
      "title": "Twój stan na dziś: Światło za Szklaną Szybą",
      "description": "Na zewnątrz wszystko wygląda bez zarzutu – działasz, rozmawiasz z ludźmi i wzorowo wykonujesz swoje obowiązki. Nosisz jednak niewidzialną maskę z napisem: „Radzę sobie”. Kiedy zwalniasz bieg, w ciele pojawia się sztywność, odrętwienie i poczucie głębokiej, wewnętrznej samotności. Choć wokół są ludzie, czujesz się jak osobna wyspa. Twój umysł, chcąc chronić Cię przed zranieniem, zamroził Twoje autentyczne emocje pod ochronnym pancerzem samowystarczalności.",
      "audioTitle": "Strażniczka Szklanego Zamku",
      "audioDesc": "Przygotowałam dla Ciebie opowiadanie audio: „Strażniczka Szklanego Zamku”. To poruszająca, głęboka historia dla dorosłych, która przypomni Twojej duszy, jak wielką odwagą jest zrzucenie maski, stopienie szklanych ścian i pozwolenie sobie na bycie kruchą.",
      "audioFile": "./Quiz_Co opowiada Twoje Ciało/AUDIO MP3/4. Strażniczka Szklanego Zamku.mp3",
      "practiceTitle": "Pomóż sobie teraz: Codzienne budzenie zmysłów",
      "practiceIntro": "Gdy emocje chowają się za pancerzem samowystarczalności, ciało może wydawać się odrętwiałe. Podaruj sobie 5–10 minut na powrót do czucia:",
      "practiceSteps": [
        "<b>Rozpoznanie:</b> Przyznaj przed sobą: „Czuję odcięcie i sztywność, schowałam się za maską”.",
        "<b>Bezpieczny dotyk (2-3 min):</b> Zastosuj uścisk somatyczny (jedna dłoń pod pachę, druga na ramię) i łagodnie gładź swoje ręce.",
        "<b>Rozbudzanie:</b> Delikatnie pomasuj uszy i twarz, wykonaj kilka miękkich krążeń barkami.",
        "<b>Ukojenie:</b> Obejmij siebie czule i powiedz swojemu wewnętrznemu dziecku: „Teraz mogę już bezpiecznie czuć. Jestem przy Tobie”."
      ],
      "reminderTitle": "Ważne przypomnienie od serca",
      "reminderText": "Codzienne praktyki somatyczne są formą wsparcia w samopoznaniu i nie zastępują psychoterapii. Jeśli poczucie odizolowania, emocjonalna pustka i sztywność ciała towarzyszą Ci stale i blokują Twój potencjał, z pełnym zaufaniem poszukaj profesjonalnej pomocy u wykwalifikowanego psychoterapeuty.",
      "ctaText": "Poznanie pełnego potencjału urodzeniowego pozwoli Ci zdjąć pancerz obronny i bezpiecznie otwierać się na świat."
    },
    "5": {
      "id": 5,
      "title": "Twój stan na dziś: Zimowa Mgła",
      "description": "Dzisiaj Twoje ciało i dusza otuliły się gęstą, chłodną mgłą, a układ nerwowy całkowicie wyłączył zasilanie. Możesz czuć przejmujące, ołowiane zmęczenie, bezruch i pustkę. Cichy głos szepcze: „To wszystko jest zbyt trudne, chcę tylko zasnąć”. Pamiętaj: to nie jest lenistwo. Twoje ciało po prostu schowało się głęboko do jaskini, bo stres okazał się zbyt destrukcyjny. Masz pełne prawo dziś po prostu leżeć i regenerować siły.",
      "audioTitle": "Niedźwiedź, który zasnął w środku wiosny",
      "audioDesc": "Przygotowałam dla Ciebie niezwykle delikatne opowiadanie audio: „Niedźwiedź, który zasnął w środku wiosny”. Ta otulająca historia pozwoli Ci bez cienia poczucia winy odpocząć w swojej jaskini i łagodnie powrócić do ciała w Twoim własnym, bezpiecznym tempie.",
      "audioFile": "./Quiz_Co opowiada Twoje Ciało/AUDIO MP3/5. Niedźwiedź, który zasnął w środku wiosny.mp3",
      "practiceTitle": "Pomóż sobie teraz: Delikatne otulenie w jaskini",
      "practiceIntro": "Gdy ciało całkowicie odcięło zasilanie, potrzebujesz regeneracji bez cienia poczucia winy. Podaruj sobie 5–10 minut bardzo subtelnej obecności:",
      "practiceSteps": [
        "<b>Rozpoznanie:</b> Zaakceptuj ołowiane zmęczenie. Masz pełne prawo teraz po prostu leżeć.",
        "<b>Mikro-ruch (2-3 min):</b> Leżąc, zacznij od mikroskopijnego, miękkiego poruszania barkami i palcami.",
        "<b>Czuły dotyk:</b> Obejmij się delikatnie ramionami (uścisk somatyczny) i pomasuj płatki uszu.",
        "<b>Ukojenie:</b> Zrób głęboki wdech nosem, wypuść powietrze z głośnym westchnieniem „haaah” i powiedz: „Odpoczywam. Jestem bezpieczna”."
      ],
      "reminderTitle": "Ważne przypomnienie od serca",
      "reminderText": "Ten stan to sygnał skrajnego wyczerpania stress-testem życia. Pamiętaj, że aplikacja nie zastępuje opieki medycznej ani psychiatrycznej. Jeśli głęboka apatia, chroniczny brak sił i odcięcie od świata trwają od wielu tygodni i utrudniają funkcjonowanie, skonsultuj się z lekarzem lub psychoterapeutą.",
      "ctaText": "Gdy poczujesz na to przestrzeń, odkryj swoją matrycę urodzenia, aby łagodnie odbudować kontakt z własną energią."
    }
  }
};

const BODY_QUIZ_DE = {
  questions: [
    {
      q: "1. Wenn du morgens die Augen öffnest und an den kommenden Tag denkst, ist dein erstes Gefühl...",
      a: [
        { text: "„Alles ist in Ordnung, ich schaffe das”. Ich fühle Ruhe und Neugier.", profile: 1 },
        { text: "„Ich muss das sofort bekämpfen oder kontrollieren!”. Ich fühle Reizbarkeit.", profile: 2 },
        { text: "„Ich muss sofort losrennen, die Zeit rennt mir davon!”. Ich spüre Eile und Angst.", profile: 3 },
        { text: "Mechanisch stehe ich auf und tue, was getan werden muss. Unter der Maske spüre ich Leere.", profile: 4 },
        { text: "„Das ist alles zu schwer, welchen Sinn hat das?”. Ich will nur schlafen.", profile: 5 }
      ]
    },
    {
      q: "2. Halte für einen Bruchteil einer Sekunde inne und richte deine Aufmerksamkeit nach innen. Was spricht am meisten aus deinem Körper zu dir?",
      a: [
        { text: "Angenehme Entspannung, Erdung und ein freier, tiefer Atem.", profile: 1 },
        { text: "Zusammengepresste Kiefer, geballte Fäuste und eine Hitzewallung.", profile: 2 },
        { text: "Beschleunigter Herzschlag, flacher, abgehackter Atem und inneres Zittern.", profile: 3 },
        { text: "Keine klaren Signale, als ob mein Körper hinter einer Glasscheibe wäre.", profile: 4 },
        { text: "Enorme Schwere, Taubheit in Händen und Beinen sowie durchdringende Kälte.", profile: 5 }
      ]
    },
    {
      q: "3. Welcher Glaube oder Gedanke schwingt heute am lautesten in deinem Geist?",
      a: [
        { text: "„Ich habe genug Zeit. Ich kann und werde es mit Leichtigkeit tun”.", profile: 1 },
        { text: "„Ich muss mich durchsetzen, niemand macht es besser oder drängt mir seine Meinung auf!”.", profile: 2 },
        { text: "„Ich habe keine Kontrolle darüber, gleich passiert etwas, ich muss fliehen!”.", profile: 3 },
        { text: "„Ich bin mit all dem völlig allein, niemand versteht mich wirklich”.", profile: 4 },
        { text: "„Es spielt keine Rolle, niemanden interessiert es, nichts wird sich jemals ändern”.", profile: 5 }
      ]
    },
    {
      q: "4. Wenn du heute an den Kontakt mit Menschen denkst, fühlst du unterbewusst, dass...",
      a: [
        { text: "Du hast Offenheit, Neugier und den Wunsch nach einer warmen Verbindung in dir.", profile: 1 },
        { text: "Menschen irritieren mich extrem, ich habe Lust auf Streit oder Widerstand.", profile: 2 },
        { text: "Ich spüre Spannung in Beziehungen, fühle mich in die Enge getrieben und möchte mich zurückziehen.", profile: 3 },
        { text: "Du unterhältst dich normal, fühlst dich aber hinter dieser Maske völlig einsam.", profile: 4 },
        { text: "Du möchtest dich völlig isolieren und jegliche Gespräche vermeiden.", profile: 5 }
      ]
    },
    {
      q: "5. Stell dir vor, du hast jetzt einen längeren Moment Freizeit nur für dich. Was passiert?",
      a: [
        { text: "Du ruhst dich aus oder machst eine Pause ohne das geringste Schuldgefühl.", profile: 1 },
        { text: "Du fängst an, nervös Dinge umzustellen oder aufzuräumen, um Wut abzubauen.", profile: 2 },
        { text: "Du kannst nicht innehalten, machst hundert Dinge gleichzeitig, die Gedanken rasen schrecklich.", profile: 3 },
        { text: "Du flüchtest automatisch ins Handy oder in eine mechanische Routine, nur um taub zu werden.", profile: 4 },
        { text: "Du verharrst in Bewegungslosigkeit, fühlst totale Energielosigkeit und bist wie vom Strom getrennt.", profile: 5 }
      ]
    },
    {
      q: "6. Wenn du vor einem unerwarteten Problem oder einer Planänderung stehst, ist deine erste automatische Reaktion...",
      a: [
        { text: "Akzeptanz. Ich atme durch und suche nach einer ruhigen Lösung.", profile: 1 },
        { text: "Angriff. Es kommt Frustration, die Suche nach Schuldigen und Rebellion in mir auf.", profile: 2 },
        { text: "Chaos. Ich spüre Unruhe, möchte sofort davor fliehen und den Kopf in den Sand stecken.", profile: 3 },
        { text: "Erstarren. Ich mache gute Miene zum bösen Spiel, obwohl ich innerlich ganz steif werde.", profile: 4 },
        { text: "Resignation. Ich lasse sofort die Hände sinken, verliere meine restlichen Kräfte und gebe auf.", profile: 5 }
      ]
    },
    {
      q: "7. Wenn dein Körper dir heute eine wichtigste Nachricht senden müsste, würde sie lauten:",
      a: [
        { text: "„Ich bin sicher, ich kann frei aus meinen Talenten schöpfen”.", profile: 1 },
        { text: "„Ich habe zu viel unterdrückte Wut und Kampf in mir, das muss ich abbauen”.", profile: 2 },
        { text: "„Ich renne so schnell, dass ich mich bald selbst verliere. Hilf mir, anzuhalten”.", profile: 3 },
        { text: "„Ich verstecke mich hinter einem dicken Panzer, weil ich Angst habe, meine Zerbrechlichkeit zu zeigen”.", profile: 4 },
        { text: "„Ich bin extrem erschöpft, getrennt und brauche dringend eine Höhle”.", profile: 5 }
      ]
    }
  ],
  profiles: {
    "1": {
      "id": 1,
      "title": "Dein Zustand heute: Sonne im Herzen",
      "description": "Heute befindet sich deine Energie in einer wunderschönen, natürlichen Harmonie und vollem Gleichgewicht. In deinem Körper herrschen Entspannung, Erdung und Stabilität, und dein Atem fließt frei, ruhig und tief. Du wirst von einem Gefühl der Sicherheit, der Liebe sowie einer freudigen Neugier auf die Welt und die Menschen begleitet. Genau hier hast du den reinsten Zugang zu deiner Intuition und deiner angeborenen Geburtsfibration.",
      "audioTitle": "Tanz des Goldenen Blattes",
      "audioDesc": "Ich habe eine Audio-Geschichte für dich vorbereitet: „Tanz des Goldenen Blattes”. Diese wunderschöne Geschichte wird es dir ermöglichen, deine innere Freiheit, Ruhe und Lebensfreude voll und ganz zu feiern.",
      "audioFile": "./Quiz_Co opowiada Twoje Ciało/AUDIO MP3/1. Taniec Złotego Liścia.mp3",
      "practiceTitle": "Hilf dir jetzt: Tägliche Praxis der Feier und Erdung",
      "practiceIntro": "Deine Energie ist heute in einer wunderschönen Harmonie, und in deinem Körper herrschen natürliche Ruhe und Offenheit. Um dieses großartige Gefühl festzuhalten und den ganzen Tag daraus zu schöpfen, gönne dir 5–10 Minuten bewusster Präsenz:",
      "practiceSteps": [
        "<b>Erkennen:</b> Richte deine Aufmerksamkeit nach innen und bade in dem Gefühl der angenehmen Entspannung, Stabilität und des freien Atems.",
        "<b>Körperverankerung (2-3 Min):</b> Führe einige ruhige, anmutige Bewegungen aus – strecke die Arme zur Sonne, nimm ein paar tiefe Atemzüge und spüre, wie stabil deine Füße mit der Erde verbunden sind.",
        "<b>Bewusster Atem:</b> Atme tief durch die Nase ein, halte den Atem für eine Sekunde mit einem Lächeln an und atme sanft durch den Mund aus, wobei du Dankbarkeit für diesen Moment empfindest.",
        "<b>Beruhigung:</b> Lege deine Hände auf dein Herz und sage sanft zu dir selbst: „Ich bin sicher, ich bin mit der Welt verbunden. Ich entfalte meine Talente mit voller Leichtigkeit”."
      ],
      "reminderTitle": "Wichtige Erinnerung von Herzen",
      "reminderText": "Dieses Quiz und die somatischen Praktiken sind ein großartiges Werkzeug zur täglichen Erfassung von emotionalen und energetischen Zuständen. Denke daran, dass die App zur Selbsterkenntnis dient und keine professionelle medizinische oder psychologische Beratung ersetzt. Genieße deinen heutigen schönen Zustand, und falls sich dein Wohlbefinden in Zukunft ändern sollte und du tiefere Unterstützung benötigst, ist es immer gut, sich an die Möglichkeit einer Beratung mit einem Spezialisten zu erinnern.",
      "ctaText": "Nutze diese harmonische Energie und entdecke die vollständige Karte deines Geburtspotenzials."
    },
    "2": {
      "id": 2,
      "title": "Dein Zustand heute: Feuer im Körper",
      "description": "Heute brennt deine Energie mit einer starken, aber sehr unruhigen und defensiven Flamme. Möglicherweise spürst du innere Reizbarkeit, Wut, Spannung im Kiefer oder das Bedürfnis, das Chaos um dich herum sofort zu bekämpfen. Dein Nervensystem ist in den Modus der vollen Mobilisierung übergegangen, da es unterbewusst eine Bedrohung erkannt hat und versucht, dich vor dem Verlust der Kontrolle zu schützen. Dieses Feuer kann jedoch sicher geerdet und in kreative Kraft verwandelt werden.",
      "audioTitle": "Die Weberin und der Feurige Pegasus",
      "audioDesc": "Ich habe eine Audio-Geschichte für dich vorbereitet: „Die Weberin und der Feurige Pegasus”. Es ist eine tiefe, erdende Geschichte, die dir helfen wird, dieses innere Feuer zu bändigen, die Energie aus dem dröhnenden Kopf abzuleiten und sie in die sichere Kraft eines Visionärs zu verwandeln.",
      "audioFile": "./Quiz_Co opowiada Twoje Ciało/AUDIO MP3/2. Tkaczka i Ognisty Pegaz.mp3",
      "practiceTitle": "Hilf dir jetzt: Tägliche Erdungspraxis",
      "practiceIntro": "Wenn du Wut und Spannung spürst, braucht dein System eine sichere Entladung der Energie. Gönne dir 5–10 Minuten:",
      "practiceSteps": [
        "<b>Erkennen:</b> Bemerke, wo du Spannung im Körper hältst (Kiefer, Schultern, Fäuste).",
        "<b>Entladung (2-3 Min):</b> Schüttle energisch Hände und Füße aus oder stampfe kräftig auf den Boden. Du kannst auch mit den Fäusten in ein Kissen schlagen.",
        "<b>Atem und Bewegung:</b> Beuge dich locker nach vorne (Wasserfall-Position), lass den Kopf hängen und mache ein langes Ausatmen durch den Mund.",
        "<b>Beruhigung:</b> Lege eine Hand auf Herz und Bauch. Atme tief durch und sage: „Ich bin sicher. Ich muss nicht mehr kämpfen”."
      ],
      "reminderTitle": "Wichtige Erinnerung von Herzen",
      "reminderText": "Diese Übungen und Audio-Inhalte unterstützen die tägliche Selbstregulierung und ersetzen keine Therapie oder ärztliche Beratung. Wenn der Zustand ständigen Kampfes und ständiger Irritation dich schon länger begleitet und dein tägliches Leben erschwert, kümmere dich umfassend um dich selbst und konsultiere einen Spezialisten (Psychologen oder Therapeuten).",
      "ctaText": "Entdecke dein vollständiges numerologisches Profil, um blockierte Emotionen zu lösen und nicht mehr gegen die Welt anzukämpfen."
    },
    "3": {
      "id": 3,
      "title": "Dein Zustand heute: Sturm und Eile",
      "description": "Heute hat ein wilder Wind von deinem Körper und Geist Besitz ergriffen. Du spürst einen enormen inneren Drang, Unruhe, Angst vor Zeitmangel sowie einen beschleunigten Herzschlag und flachen Atem. In deinem Kopf kreisen tausend Gedanken gleichzeitig, und eine alarmierende Stimme wiederholt: „Ich muss fliehen, ich muss rennen, ich kann jetzt nicht anhalten!”. Dein Nervensystem versucht, der Überforderung zu entkommen. Dein Organismus braucht jetzt keine weiteren Aufgaben, sondern ein sicheres Anhalten.",
      "audioTitle": "Das Fünkchen und die Melodie des Windes",
      "audioDesc": "Ich habe eine spezielle, neu aufgenommene Audio-Geschichte für dich vorbereitet: „Das Fünkchen und die Melodie des Windes”. Es ist eine tiefe, beruhigende Geschichte über die Besänftigung des Lebenssturms, das Ablegen der Angst vor Beurteilung und die Rückkehr in den sicheren Rhythmus des eigenen Herzens. Du findest sie im Audio-Reiter – stelle deine Füße fest auf den Boden und höre zu.",
      "audioFile": "./Quiz_Co opowiada Twoje Ciało/AUDIO MP3/3. Iskierka i Melodia Wiatru.mp3",
      "practiceTitle": "Hilf dir jetzt: Tägliche Praxis der Erdung",
      "practiceIntro": "Wenn ein Sturm von Gedanken in deinem Kopf tobt, brauchst du ein sicheres Anhalten in deinem Körper. Gönne dir 5–10 Minuten:",
      "practiceSteps": [
        "<b>Erkennen:</b> Bemerke das Gedankenkarussell und das innere Zittern, besonders in den Beinen.",
        "<b>Erdung (2-3 Min):</b> Tritt bewusst mit dem ganzen Fuß auf den Boden und klopfe mit den Händen auf deine Oberschenkel und Waden.",
        "<b>Bewegung:</b> Stehe breitbeinig, verlagere das Gewicht fließend von einem Bein aufs andere und kreise sanft mit dem Becken.",
        "<b>Beruhigung:</b> Lege die Hände auf Bauch und Herz. Spüre den Boden unter den Füßen und sage: „Ich muss nicht mehr fliehen. Ich bin hier sicher”."
      ],
      "reminderTitle": "Wichtige Erinnerung von Herzen",
      "reminderText": "Die präsentierten Inhalte haben den Charakter der Selbsthilfe und ersetzen keine professionelle medizinische oder psychologische Unterstützung. Wenn ständige Angst, Zeitdruck und das innere Gedankenkarussell zu überwältigend sind, um sie allein zu tragen, konsultiere bitte einen Psychologen oder Psychotherapeuten.",
      "ctaText": "Das Verständnis deiner numerologischen Matrix wird dir helfen, den Druck zu stoppen und den inneren Frieden zurückzugewinnen."
    },
    "4": {
      "id": 4,
      "title": "Dein Zustand heute: Licht hinter einer Glasscheibe",
      "description": "Äußerlich sieht alles einwandfrei aus – du funktionierst, unterhältst dich mit Menschen und erfüllst deine Aufgaben vorbildlich. Doch du trägst eine unsichtbare Maske mit der Aufschrift: „Ich komme klar”. Wenn du langsamer wirst, spürst du im Körper Steifheit, Taubheit und ein Gefühl von tiefer, innerer Einsamkeit. Obwohl Menschen um dich herum sind, fühlst du dich wie eine einsame Insel. Um dich vor Verletzungen zu schützen, hat dein Verstand deine authentischen Emotionen unter dem schützenden Panzer der Selbstgenügsamkeit eingefroren.",
      "audioTitle": "Die Wächterin des Glasschlosses",
      "audioDesc": "Ich habe eine Audio-Geschichte für dich vorbereitet: „Die Wächterin des Glasschlosses”. Dies ist eine bewegende, tiefgründige Geschichte für Erwachsene, die deine Seele daran erinnern wird, wie mutig es ist, die Maske fallen zu lassen, die Glaswände zum Schmelzen zu bringen und sich zu erlauben, verletzlich zu sein.",
      "audioFile": "./Quiz_Co opowiada Twoje Ciało/AUDIO MP3/4. Strażniczka Szklanego Zamku.mp3",
      "practiceTitle": "Hilf dir jetzt: Tägliches Erwecken der Sinne",
      "practiceIntro": "Wenn sich Emotionen hinter einem Panzer der Selbstgenügsamkeit verstecken, kann sich der Körper taub anfühlen. Gönne dir 5–10 Minuten, um das Spüren zurückzugewinnen:",
      "practiceSteps": [
        "<b>Erkennen:</b> Gib vor dir selbst zu: „Ich fühle mich abgetrennt und steif, ich habe mich hinter einer Maske versteckt”.",
        "<b>Sichere Berührung (2-3 Min):</b> Wende eine somatische Umarmung an (eine Hand unter die Achsel, die andere auf die Schulter) und streichle sanft deine Arme.",
        "<b>Erwecken:</b> Massiere sanft Ohren und Gesicht, mache einige weiche Schulterkreise.",
        "<b>Beruhigung:</b> Umarme dich zärtlich und sage zu deinem inneren Kind: „Jetzt darf ich sicher spüren. Ich bin bei dir”."
      ],
      "reminderTitle": "Wichtige Erinnerung von Herzen",
      "reminderText": "Tägliche somatische Praktiken sind eine Form der Unterstützung bei der Selbsterkenntnis und ersetzen keine Psychotherapie. Wenn das Gefühl der Isolation, die emotionale Leere und die Steifheit des Körpers dich ständig begleiten und dein Potenzial blockieren, suche vertrauensvoll professionelle Hilfe bei einem qualifizierten Psychotherapeuten.",
      "ctaText": "Das Erkennen deines vollen Geburtspotenzials wird es dir ermöglichen, die Abwehrpanzerung abzulegen und dich sicher der Welt zu öffnen."
    },
    "5": {
      "id": 5,
      "title": "Dein Zustand heute: Winternebel",
      "description": "Heute haben sich dein Körper und deine Seele in einen dichten, kalten Nebel gehüllt, und das Nervensystem hat den Strom vollständig abgeschaltet. Du spürst vielleicht eine durchdringende, bleierne Müdigkeit, Bewegungslosigkeit und Leere. Eine leise Stimme flüstert: „Das ist alles zu schwer, ich will nur schlafen”. Denk daran: Das ist keine Faulheit. Dein Körper hat sich einfach tief in eine Höhle zurückgezogen, weil der Stress zu destruktiv war. Du hast heute das absolute Recht, einfach nur zu liegen und neue Kräfte zu sammeln.",
      "audioTitle": "Der Bär, der mitten im Frühling einschlief",
      "audioDesc": "Ich habe eine extrem sanfte Audio-Geschichte für dich vorbereitet: „Der Bär, der mitten im Frühling einschlief”. Diese umhüllende Geschichte wird dir erlauben, ohne den geringsten Anflug von Schuldgefühlen in deiner Höhle auszuruhen und in deinem eigenen, sicheren Tempo sanft in den Körper zurückzukehren.",
      "audioFile": "./Quiz_Co opowiada Twoje Ciało/AUDIO MP3/5. Niedźwiedź, który zasnął w środku wiosny.mp3",
      "practiceTitle": "Hilf dir jetzt: Sanftes Einhüllen in der Höhle",
      "practiceIntro": "Wenn der Körper den Strom komplett abgeschaltet hat, brauchst du Regeneration ohne jeden Anflug von Schuldgefühl. Gönne dir 5–10 Minuten sehr feinfühliger Präsenz:",
      "practiceSteps": [
        "<b>Erkennen:</b> Akzeptiere die bleierne Müdigkeit. Du hast jetzt das absolute Recht, einfach nur zu liegen.",
        "<b>Mikro-Bewegung (2-3 Min):</b> Beginne im Liegen mit einer mikroskopischen, weichen Bewegung der Schultern und Finger.",
        "<b>Zärtliche Berührung:</b> Umarme dich sanft an den Schultern (somatische Umarmung) und massiere deine Ohrläppchen.",
        "<b>Beruhigung:</b> Atme tief durch die Nase ein, lass die Luft mit einem lauten Seufzer „haaah” entweichen und sage: „Ich ruhe mich aus. Ich bin sicher”."
      ],
      "reminderTitle": "Wichtige Erinnerung von Herzen",
      "reminderText": "Dieser Zustand ist ein Signal extremer Erschöpfung durch den Stresstest des Lebens. Denk daran, dass die App keine medizinische oder psychiatrische Betreuung ersetzt. Wenn tiefe Apathie, chronischer Energiemangel und die Trennung von der Welt viele Wochen andauern und das Funktionieren erschweren, konsultiere einen Arzt oder Psychotherapeuten.",
      "ctaText": "Wenn du dich bereit fühlst, entdecke deine Geburtsmatrix, um sanft den Kontakt zu deiner eigenen Energie wiederherzustellen."
    }
  }
};

const scriptCode = `window.BODY_QUIZ_PL = ${JSON.stringify(BODY_QUIZ_PL, null, 2)};\n\nwindow.BODY_QUIZ_DE = ${JSON.stringify(BODY_QUIZ_DE, null, 2)};\n`;

fs.writeFileSync('body_quiz_data.js', scriptCode);
