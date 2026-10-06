const FORECAST_DATA = {
  "pl": {
    "3-21": {
      "z": "Baran",
      "l": 8,
      "e": "Ósemka w dniu równonocy wiosennej to potężna energia manifestacji, która zachęca do zasiewania intencji sukcesu i obfitości. Twoja wewnętrzna moc budzi się teraz do życia wraz z całą naturą, dając Ci siłę do realizacji najbardziej ambitnych planów.",
      "r": "Podejmij konkretne działania mające na celu stabilizację Twoich finansów oraz pozycji zawodowej. Zaufaj swojej sprawczości i buduj trwałe struktury, które będą służyć Ci przez kolejne miesiące.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Wystrzegaj się lęku przed porażką oraz braku wiary we własne, niemal nieograniczone możliwości. Nie pozwól, by chwilowe trudności osłabiły Twój entuzjazm i determinację w dążeniu do celu.",
      "s": "Pytanie jest ważniejsze niż odpowiedź",
      "fun": "Masz dziś w sobie tyle determinacji, że nawet wiosenne porządki wykonujesz z precyzją dyrektora generalnego."
    },
    "3-22": {
      "z": "Baran",
      "l": 9,
      "e": "Dziewiątka przypomina, że aby móc w pełni przyjąć nową energię wiosny, należy najpierw pożegnać to, co stare i niepotrzebne. To czas wielkiego oczyszczenia duszy, który przynosi ulgę i przygotowuje grunt pod nowe, fascynujące doświadczenia.",
      "r": "Wybacz dawnym urazom i puść wolno relacje, które przestały wnosić światło do Twojej codzienności. Podziękuj sobie za dotychczasową drogę, uznając każde doświadczenie za cenny element Twojej mądrości.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Nie trzymaj się kurczowo przeszłości, ponieważ blokuje to Twój naturalny proces odrodzenia i transformacji. Unikaj smutku po tym, co mija, bo każde zakończenie jest obietnicą lepszego jutra.",
      "s": "Moc służy, nie dominuje",
      "fun": "Twoje dzisiejsze porządki są tak radykalne, że nawet kurz boi się osiadać na półkach w Twojej obecności."
    },
    "3-23": {
      "z": "Baran",
      "l": 1,
      "e": "Jedynka to potężny impuls do nowego początku, który sprawia, że czujesz się autentyczną architektką własnego losu. To idealny moment, abyś zainicjowała projekt, o którym do tej pory bałaś się nawet głośno marzyć.",
      "r": "Postaw na siebie i podejmij samodzielną decyzję, która zmieni Twój dotychczasowy sposób patrzenia na życie. Zaufaj swojej intuicji pionierki i nie bój się przecierać nowych, nieodkrytych jeszcze szlaków.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Wystrzegaj się czekania na pozwolenie ze strony innych, ponieważ tylko Ty wiesz, co jest dla Ciebie najlepsze. Nie pozwól, by bierność zgasiła ogień inicjatywy, który dzisiaj płonie w Twoim sercu wyjątkowo mocno.",
      "s": "Zamknij z gracją — otwórz z wdzięcznością",
      "fun": "Twój entuzjazm jest dziś tak zaraźliwy, że mogłabyś poprowadzić tłumy, idąc po prostu po poranne pieczywo."
    },
    "3-24": {
      "z": "Baran",
      "l": 2,
      "e": "Dwójka uczy nas, że największa siła drzemie w umiejętności słuchania oraz budowania harmonijnych relacji z otoczeniem. Twoja dyplomacja stanie się dziś kluczem, który otworzy przed Tobą drzwi do serc i umysłów ważnych dla Ciebie ludzi.",
      "r": "Szukaj porozumienia i buduj mosty tam, gdzie do tej pory panowały chłód, dystans lub niepotrzebne uprzedzenia. Pielęgnuj swoją intuicję, ponieważ ona najlepiej podpowie Ci, jak zachować równowagę w kontaktach z innymi.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Unikaj konfliktów oraz narzucania swojej woli, co mogłoby zburzyć kruchą atmosferę dzisiejszej zgody. Nie bój się prosić o wsparcie, ponieważ współpraca przyniesie Ci znacznie więcej korzyści niż samotne działanie.",
      "s": "Twoja droga, Twój rytm",
      "fun": "Jesteś dziś tak wyczulona na nastroje innych, że rozumiesz nawet to, co Twój kot próbuje przekazać Ci swoim mruczeniem."
    },
    "3-25": {
      "z": "Baran",
      "l": 3,
      "e": "Trójka to radosna celebracja życia, która zamienia każdy zwykły moment w barwną opowieść pełną inspiracji. Pozwól sobie na śmiech i lekkie podejście do wyzwań, ponieważ radość jest najpotężniejszym narzędziem kreacji, jakie posiadasz.",
      "r": "Wyraź siebie poprzez sztukę, słowo lub po prostu radosną rozmowę z kimś, kto potrzebuje dziś wsparcia. Dziel się swoim optymizmem i zainspiruj innych do dostrzegania piękna w najmniejszych detalach rzeczywistości.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Wystrzegaj się nadmiernej powagi oraz zamartwiania się sprawami, na które nie masz dzisiaj realnego wpływu. Nie tłum swojej kreatywności w obawie przed oceną, ponieważ świat potrzebuje Twojego unikalnego blasku.",
      "s": "Delikatność to siła",
      "fun": "Twoja aura jest dziś tak radosna, że nawet Twoja kawa wydaje się smakować bardziej słońcem niż kofeiną."
    },
    "3-26": {
      "z": "Baran",
      "l": 4,
      "e": "Czwórka przypomina o wartości solidnych fundamentów, na których budujemy poczucie własnego bezpieczeństwa i stabilizacji. Twoja dzisiejsza systematyczność zostanie doceniona, przynosząc Ci wewnętrzny spokój i satysfakcję z dobrze wykonanej pracy.",
      "r": "Skup się na dokończeniu rozpoczętych projektów i zadbaj o porządek w sprawach, które wymagają rzetelnego podejścia. Buduj swoją przyszłość krok po kroku, ufając, że każda mała czynność przybliża Cię do wielkiego sukcesu.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Unikaj chaosu oraz podejmowania zbyt wielu wyzwań jednocześnie, co mogłoby niepotrzebnie rozproszyć Twoją uwagę. Nie lekceważ zasad, które chronią Twoją stabilność i pomagają Ci zachować kontrolę nad życiem.",
      "s": "Lżej znaczy dalej",
      "fun": "Twoja dzisiejsza miłość do porządku sprawia, że nawet spinacze w Twoim biurku ułożyły się w idealne szeregi."
    },
    "3-27": {
      "z": "Baran",
      "l": 5,
      "e": "Piątka przynosi powiew świeżości i zachęca do wyjścia poza bezpieczną, ale czasem zbyt przewidywalną strefę komfortu. To doskonały dzień, abyś odważyła się na zmianę, która wprowadzi do Twojej codzienności nową, ożywczą energię.",
      "r": "Otwórz się na spontaniczne propozycje i pozwól sobie na odrobinę przygody, która odświeży Twój umysł. Zaryzykuj i sprawdź nowe możliwości rozwoju, które pojawiają się na Twoim horyzoncie właśnie dzisiaj.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Wystrzegaj się nudy oraz stagnacji, które mogą działać na Ciebie wyjątkowo frustrująco i odbierać Ci siły. Nie bój się porzucić starych schematów, ponieważ to właśnie w zmianie drzemie największy potencjał Twojego wzrostu.",
      "s": "Solidność to poezja",
      "fun": "Twoja potrzeba wolności jest dziś tak duża, że nawet spacer do lokalnego sklepu wydaje się początkiem wielkiej wyprawy."
    },
    "3-28": {
      "z": "Baran",
      "l": 6,
      "e": "Szóstka zaprasza Cię do świata harmonii, gdzie miłość, troska i piękno stanowią najważniejsze drogowskazy dnia. Zadbaj o to, by Twoje działania płynęły prosto z serca i niosły ukojenie zarówno Tobie, jak i Twoim najbliższym.",
      "r": "Stwórz w swoim domu atmosferę pełną ciepła i spędź czas z osobami, które są Ci najbliższe. Skup się na tworzeniu pięknych chwil, które wzmocnią Twoje więzi i dadzą Ci poczucie bycia kochaną.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Unikaj brania na swoje barki zbyt wielu cudzych problemów, ponieważ każdy musi przejść swoją drogę samodzielnie. Nie szukaj perfekcji tam, gdzie wystarczy po prostu szczera obecność i dobre, wspierające słowo.",
      "s": "Wolność jest decyzją",
      "fun": "Twoja chęć opiekowania się światem sprawia, że nawet Twoje kwiaty doniczkowe czują się dziś wyjątkowo rozpieszczane."
    },
    "3-29": {
      "z": "Baran",
      "l": 7,
      "e": "Siódemka to czas introspekcji, w którym cisza staje się Twoim najbardziej lojalnym i mądrym sprzymierzeńcem. Pozwól sobie na luksus bycia sama na sam ze swoimi myślami, aby odnaleźć odpowiedzi na najważniejsze pytania duszy.",
      "r": "Znajdź chwilę na medytację lub spokojną lekturę, która pozwoli Ci pogłębić wiedzę o sobie samej. Zaufaj swojej intuicji, ponieważ w dzisiejszym wyciszeniu jej głos będzie słyszalny wyjątkowo wyraźnie.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Stroń od zgiełku i powierzchownych rozrywek, które mogą rozproszyć Twoją cenną uwagę i zabrać spokój. Nie bój się pytań o sens życia, gdyż konfrontacja z nimi przyniesie Ci upragnioną wolność ducha.",
      "s": "Piękno jest aktem odwagi",
      "fun": "Twoje milczenie jest dziś tak wymowne, że Twoi bliscy zastanawiają się, czy właśnie nie odkryłaś nowej galaktyki."
    },
    "3-30": {
      "z": "Baran",
      "l": 8,
      "e": "Ósemka wzywa Cię do wykazania się siłą charakteru oraz odwagą w zarządzaniu własnymi zasobami i energią. Twoja sprawczość jest dziś na najwyższym poziomie, co pozwala Ci skutecznie domykać nawet najbardziej skomplikowane projekty finansowe.",
      "r": "Podejmij inicjatywę w sprawach zawodowych i nie bój się sięgać po należne Ci nagrody oraz uznanie. Buduj swój autorytet na fundamentach uczciwości i rzetelności, które zawsze były Twoją mocną stroną.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Nie podejmuj decyzji w pośpiechu ani pod wpływem negatywnych emocji, które mogłyby zamglić Twój osąd. Wystrzegaj się arogancji, pamiętając, że prawdziwa moc przejawia się w spokoju i pewności podejmowanych działań.",
      "s": "Pytanie jest ważniejsze niż odpowiedź",
      "fun": "Masz dziś spojrzenie liderki, przed którą ustępują nawet największe przeciwności losu i kolejki na poczcie."
    },
    "3-31": {
      "z": "Baran",
      "l": 9,
      "e": "Dziewiątka zamyka marzec w tonie mądrości i podsumowań, pozwalając Ci spojrzeć na minione tygodnie z właściwym dystansem. To doskonały moment na wyciągnięcie wniosków i zrobienie miejsca na nową energię, którą przyniesie kolejny miesiąc.",
      "r": "Dokończ wszystkie rozpoczęte sprawy i z wdzięcznością pożegnaj to, co w Twoim życiu już się dopełniło. Podaruj sobie chwilę na podziękowanie losowi za wszystkie lekcje, które odebrałaś w ciągu minionego kwartału.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Nie trzymaj się kurczowo spraw, które już nie służą Twojemu rozwojowi, lecz otwórz dłonie, by przyjąć nowe dary. Unikaj smutku po tym, co odchodzi, ponieważ każda zmiana jest koniecznym krokiem ku lepszemu życiu.",
      "s": "Moc służy, nie dominuje",
      "fun": "Jesteś dziś jak mądra sowa kończąca ważny rozdział, gotowa na zupełnie nową i fascynującą przygodę."
    },
    "4-1": {
      "z": "Baran",
      "l": 6,
      "e": "Szóstka w dniu 1 kwietnia wnosi energię odpowiedzialności i głębokiej troski, która chroni nas przed powierzchownością primaaprilisowych żartów. To doskonały czas na budowanie harmonii w relacjach z najbliższymi oraz dbanie o to, by w Twoim domu zapanował spokój i wzajemne zaufanie.",
      "r": "Skup się na potrzebach swojej rodziny i stwórz dla nich atmosferę pełną ciepła. Zrób coś pięknego dla siebie lub swojego otoczenia, co wzmocni Twoje poczucie wewnętrznej równowagi.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Wystrzegaj się brania na siebie zbyt wielu cudzych problemów, bo może to przytłoczyć Twoją własną radość życia. Nie pozwól, by drobne uszczypliwości zburzyły harmonię, którą tak starannie pielęgnujesz.",
      "s": "Dom to miejsce gdzie serce oddycha",
      "fun": "Twoje dzisiejsze żarty są tak pełne empatii, że nikt nawet nie czuje się nabrany, a raczej wyjątkowo zaopiekowany."
    },
    "4-2": {
      "z": "Baran",
      "l": 7,
      "e": "Siódemka zaprasza Cię dziś do wycofania się z hałaśliwego świata i poszukiwania odpowiedzi w głębokiej, wewnętrznej ciszy. To czas kontemplacji, w którym Twoja intuicja podpowie Ci rozwiązania niedostępne dla chłodnej, logicznej analizy.",
      "r": "Znajdź chwilę na medytację lub spokojną lekturę, która pozwoli Ci odnaleźć duchową ścieżkę. Zaufaj ciszy, ponieważ to właśnie w niej rodzą się najbardziej wartościowe i trwałe przemyślenia.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Unikaj zbędnego zgiełku oraz powierzchownych rozmów, które mogą rozproszyć Twoją cenną uwagę. Nie spiesz się z podejmowaniem decyzji, zanim nie poczujesz pełnej zgodności ze swoim wnętrzem.",
      "s": "W ciszy mieszka mądrość",
      "fun": "Twoja dzisiejsza aura tajemniczości jest tak silna, że nawet Twoja poranna kawa wydaje się parować w jakimś mistycznym rytmie."
    },
    "4-3": {
      "z": "Baran",
      "l": 8,
      "e": "Ósemka to potężna energia manifestacji, która pozwala Ci realnie wpłynąć na strukturę Twojego życia zawodowego i finansowego. Twoja determinacja staje się dziś narzędziem sukcesu, o ile tylko pozostaniesz wierna swoim najwyższym wartościom.",
      "r": "Podejmij konkretne działania w stronę realizacji ambitnych celów i zaufaj swojej sprawczej mocy. Buduj swoją obfitość na fundamentach uczciwości, co zapewni Ci trwałe i satysfakcjonujące rezultaty.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Wystrzegaj się lęku przed ryzykiem oraz braku wiary w swoje niemal nieograniczone możliwości. Nie podejmuj decyzji w oparciu o chwilowe emocje, lecz kieruj się długofalową wizją rozwoju.",
      "s": "Siła z wartości, nie z ego",
      "fun": "Masz dziś spojrzenie liderki, która potrafi wynegocjować lepszą cenę nawet przy zakupie bułek w lokalnym sklepie."
    },
    "4-4": {
      "z": "Baran",
      "l": 9,
      "e": "Dziewiątka symbolizuje domykanie pewnego cyklu doświadczeń, co pozwala Ci z wdzięcznością spojrzeć na przebytą do tej pory drogę. To czas wielkiej transformacji i uwalniania się od tego, co już dawno przestało służyć Twojemu najwyższemu dobru.",
      "r": "Wybacz dawnym urazom i puść wolno relacje, które blokują Twoją naturalną, życiową ekspansję. Podziękuj przeszłości za wszystkie odebrane lekcje i zrób w swoim sercu miejsce na nowe dary.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Nie trzymaj się kurczowo tego, co już mija, ponieważ każde zakończenie jest obietnicą nowego świtu. Unikaj smutku po tym, co odchodzi, uznając to za konieczny etap Twojego duchowego wzrostu.",
      "s": "Koniec to też dar",
      "fun": "Robisz dziś takie porządki emocjonalne, że nawet stare paragony w Twoim portfelu same proszą o godną utylizację."
    },
    "4-5": {
      "z": "Baran",
      "l": 1,
      "e": "Jedynka po fali oczyszczenia przynosi iskrę nowej inicjatywy i zachęca do stanięcia w pełnym blasku własnej autentyczności. To dzień, w którym każda Twoja odważna myśl ma moc stania się początkiem nowej, niezwykłej historii.",
      "r": "Postaw na siebie i zainicjuj projekt, o którym do tej pory bałaś się nawet głośno marzyć. Zaufaj swojej sile przebicia i bądź pierwszą osobą, która z pełnym przekonaniem uwierzy w Twoje zwycięstwo.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Wystrzegaj się oglądania na opinie innych ludzi, ponieważ tylko Ty znasz kierunek, w którym pragniesz podążać. Nie zwlekaj z działaniem, gdyż dzisiejsza energia sprzyja tym, którzy odważnie ruszają w nieznane.",
      "s": "Pierwsza linia należy do Ciebie",
      "fun": "Twój entuzjazm jest dziś tak wielki, że mogłabyś zainicjować nową modę, idąc po prostu do pracy w jednym bucie."
    },
    "4-6": {
      "z": "Baran",
      "l": 2,
      "e": "Dwójka uczy nas, że największa siła często drzemie w łagodności oraz umiejętności współistnienia z drugim człowiekiem. Twoja dyplomacja stanie się dziś kluczem, który otworzy przed Tobą drzwi do serc i umysłów ważnych dla Ciebie osób.",
      "r": "Szukaj porozumienia i buduj mosty tam, gdzie do tej pory panował chłód lub niepotrzebny dystans. Pielęgnuj swoją intuicję, ponieważ ona najlepiej podpowie Ci, jak zachować równowagę w relacjach.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Unikaj rywalizacji oraz narzucania swojej woli, co mogłoby zburzyć kruchą atmosferę dzisiejszej zgody. Nie bój się prosić o wsparcie, ponieważ współpraca przyniesie Ci dziś znacznie więcej korzyści.",
      "s": "W ciszy słychać więcej",
      "fun": "Jesteś dziś tak wyczulona na nastroje innych, że wiesz dokładnie, o czym marzą Twoi bliscy, zanim sami o tym pomyślą."
    },
    "4-7": {
      "z": "Baran",
      "l": 3,
      "e": "Trójka to radosny taniec kreatywności, który zamienia każdy zwykły obowiązek w fascynującą przygodę pełną inspiracji. Pozwól sobie na śmiech i lekkie podejście do życia, ponieważ radość jest najkrótszą drogą do spełnienia marzeń.",
      "r": "Wyraź swoje emocje poprzez barwy, słowa lub gesty, które niosą ze sobą powiew świeżości. Dziel się swoim optymizmem, bo Twój szczery uśmiech ma dziś moc zarażania innych dobrą energią.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Nadmiernego analizowania swoich potknięć, co mogłoby niepotrzebnie stłumić Twój naturalny entuzjazm. Nie pozwól, by pesymizm otoczenia zgasił Twój wewnętrzny, radosny blask, który dziś tak mocno świeci.",
      "s": "Śmiech to najkrótsza droga do serca",
      "fun": "Twoja energia jest dziś tak słoneczna, że nawet kwiaty w wazonie wydają się nachylać w Twoją stronę."
    },
    "4-8": {
      "z": "Baran",
      "l": 4,
      "e": "Czwórka przypomina o wartości solidnych fundamentów, na których budujemy poczucie własnego bezpieczeństwa i stabilizacji. Twoja systematyczność zostanie dziś doceniona, przynosząc Ci spokój i satysfakcję z rzetelnie wykonanej pracy.",
      "r": "Skup się na dokończeniu rozpoczętych projektów i zadbaj o porządek w sprawach wymagających uwagi. Buduj swoją przyszłość krok po kroku, ufając, że każda mała czynność przybliża Cię do wielkiego sukcesu.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Unikaj chaosu oraz podejmowania zbyt wielu wyzwań jednocześnie, co mogłoby rozproszyć Twoją uwagę. Nie lekceważ zasad, które chronią Twoją stabilność i pomagają zachować kontrolę nad rzeczywistością.",
      "s": "Fundament nie hałasuje — ale wszystko na nim stoi",
      "fun": "Twoja dzisiejsza miłość do porządku sprawia, że nawet spinacze w Twoim biurku ułożyły się w idealne szeregi."
    },
    "4-9": {
      "z": "Baran",
      "l": 5,
      "e": "Piątka przynosi powiew wolności i zachęca do wyjścia poza bezpieczną, ale czasem zbyt przewidywalną strefę komfortu. To doskonały dzień, abyś odważyła się na zmianę, która wprowadzi do Twojej codzienności nową energię.",
      "r": "Otwórz się na spontaniczne propozycje i pozwól sobie na odrobinę przygody, która odświeży Twój umysł. Zaryzykuj i sprawdź nowe możliwości rozwoju, które pojawiają się na horyzoncie właśnie dzisiaj.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Wystrzegaj się nudy oraz stagnacji, które mogą działać na Ciebie wyjątkowo frustrująco i odbierać siły. Nie bój się porzucić starych schematów, ponieważ to właśnie w zmianie drzemie Twój największy potencjał.",
      "s": "Wiatr nie pyta — on po prostu wieje",
      "fun": "Twoja potrzeba zmian jest dziś tak duża, że wyjście na spacer może skończyć się rezerwacją biletów na koniec świata."
    },
    "4-10": {
      "z": "Baran",
      "l": 6,
      "e": "Szóstka ponownie zaprasza Cię do świata harmonii, gdzie miłość, troska i piękno stanowią najważniejsze drogowskazy. Zadbaj o to, by Twoje działania płynęły prosto z serca i niosły ukojenie zarówno Tobie, jak i bliskim.",
      "r": "Stwórz w swoim domu atmosferę pełną ciepła i spędź czas z osobami, które są dla Ciebie najważniejsze. Skup się na tworzeniu pięknych chwil, które wzmocnią Twoje więzi i dadzą Ci poczucie bezpieczeństwa.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Unikaj brania na swoje barki zbyt wielu cudzych problemów, ponieważ każdy musi przejść swoją drogę samodzielnie. Nie szukaj perfekcji tam, gdzie wystarczy po prostu szczera obecność i dobre, wspierające słowo.",
      "s": "Dom to miejsce gdzie serce oddycha",
      "fun": "Twoja chęć opiekowania się światem sprawia, że nawet Twoje kwiaty doniczkowe czują się dziś wyjątkowo rozpieszczane."
    },
    "4-11": {
      "z": "Baran",
      "l": 7,
      "e": "Siódemka otwiera przed Tobą przestrzeń do głębokich studiów nad własną naturą oraz sensem podejmowanych działań. To dzień, w którym intelekt harmonijnie spotyka się z duchowością, tworząc idealne warunki do odkrywania nieoczywistych prawd o świecie.",
      "r": "Poświęć czas na rozwijanie swoich pasji oraz poszukiwanie odpowiedzi w ciszy własnego umysłu. Zaufaj intuicji, ponieważ to właśnie w wyciszeniu rodzą się najbardziej wartościowe i trwałe pomysły na przyszłość.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Wystrzegaj się powierzchowności oraz ulegania presji otoczenia, która zmusza do udzielania szybkich i nieprzemyślanych odpowiedzi. Nie uciekaj od trudnych pytań, gdyż konfrontacja z nimi przyniesie Ci upragnioną wolność ducha.",
      "s": "W ciszy mieszka mądrość",
      "fun": "Twoja aura tajemniczości jest dziś tak silna, że nawet Twoja ulubiona książka wydaje się otwierać na właściwej stronie sama z siebie."
    },
    "4-12": {
      "z": "Baran",
      "l": 8,
      "e": "Ósemka wzywa Cię do wykazania się odwagą w zarządzaniu własnym życiem oraz zasobami, którymi dysponujesz na co dzień. Twoja sprawczość znajduje się dziś na najwyższym poziomie, co pozwala Ci skutecznie domykać nawet najbardziej skomplikowane projekty.",
      "r": "Podejmij odważną inicjatywę w sprawach zawodowych i nie bój się sięgać po należne Ci uznanie oraz sukces. Buduj swój autorytet na fundamentach uczciwości, ponieważ tylko rzetelne działania przynoszą trwałe i godne owoce.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Nie podejmuj decyzji w pośpiechu ani pod wpływem negatywnych emocji, które mogłyby na chwilę zamglić Twój osąd. Wystrzegaj się arogancji, pamiętając, że prawdziwa moc nie potrzebuje krzyku, by zostać zauważoną przez innych.",
      "s": "Siła z wartości, nie z ego",
      "fun": "Masz dziś spojrzenie liderki, przed którą ustępują nawet największe przeciwności losu i biurokratyczne przeszkody w urzędach."
    },
    "4-13": {
      "z": "Baran",
      "l": 9,
      "e": "Dziewiątka zaprasza do wielkiego sprzątania – nie tylko w przestrzeni fizycznej, ale przede wszystkim w sferze Twoich emocji. To doskonały czas na podsumowanie dotychczasowych lekcji i przygotowanie się do wielkiego otwarcia na nowe, wiosenne dary.",
      "r": "Dokończ wszystkie rozpoczęte sprawy i z wdzięcznością zamknij te rozdziały, które nie wnoszą już światła do Twojej codzienności. Okaż sercu przebaczenie, uznając każde dotychczasowe doświadczenie za cenny element Twojej unikalnej mądrości.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Nie trzymaj się kurczowo przeszłości oraz relacji, które swoją obecnością jedynie blokują Twój naturalny i piękny rozwój. Unikaj smutku po tym, co odchodzi, bo każde zakończenie jest konieczną obietnicą zupełnie nowego świtu.",
      "s": "Koniec to też dar",
      "fun": "Masz dziś taki rozmach w domykaniu spraw, że nawet kurz ucieka z Twojego domu, zanim zdążysz o nim pomyśleć."
    },
    "4-14": {
      "z": "Baran",
      "l": 1,
      "e": "Jedynka to świeży powiew energii, który sprawia, że znów czujesz się autentyczną architektką własnego losu. Każdy Twój dzisiejszy wybór ma moc zmieniania rzeczywistości na lepszą i bardziej zgodną z Twoim wewnętrznym głosem.",
      "r": "Postaw na oryginalność i nie bój się zaprezentować światu swoich najbardziej śmiałych oraz innowacyjnych projektów. Zaufaj swojej sile i bądź pierwszą osobą, która z pełnym przekonaniem uwierzy w powodzenie dzisiejszych działań.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Wystrzegaj się naśladownictwa oraz szukania dróg na skróty, które mogłyby niepotrzebnie osłabić Twoją autentyczność. Nie bój się działać samodzielnie, ponieważ pionierzy często muszą przecierać szlaki bez oglądania się na innych.",
      "s": "Pierwsza linia należy do Ciebie",
      "fun": "Jesteś dziś taką dawką czystej energii, że mogłabyś zastąpić poranne espresso dla całego swojego biura lub bliskich."
    },
    "4-15": {
      "z": "Baran",
      "l": 2,
      "e": "Dwójka uczy nas, że największe sukcesy osiągamy wtedy, gdy potrafimy połączyć siły z innymi w duchu wzajemnego szacunku. Twoja dyplomacja oraz wyjątkowe wyczucie nastrojów pozwolą Ci dziś rozładować każdą, nawet najbardziej napiętą sytuację.",
      "r": "Słuchaj uważnie tego, co mówią inni i szukaj punktów wspólnych, które staną się solidnym fundamentem zgody. Pielęgnuj swoją intuicję, ponieważ ona podpowie Ci dzisiaj, komu warto zaufać i powierzyć swoje cenne sekrety.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Unikaj izolacji oraz chowania się w cieniu, gdy Twoja łagodna obecność może przynieść ulgę potrzebującym osobom. Nie bój się wyrażać własnego zdania, nawet jeśli Twoim nadrzędnym celem jest dziś budowanie powszechnej harmonii.",
      "s": "W ciszy słychać więcej",
      "fun": "Jesteś dziś tak dobrym słuchaczem, że nawet Twoje kwiaty doniczkowe wydają się nachylać w Twoją stronę podczas rozmowy."
    },
    "4-16": {
      "z": "Baran",
      "l": 3,
      "e": "Trójka to radosny manifest Twojej twórczej duszy, która pragnie ekspresji i celebracji każdej pięknej, kwietniowej chwili. Świat potrzebuje dzisiaj Twojego uśmiechu oraz lekkości, którą wnosisz w życie wszystkich napotkanych na drodze osób.",
      "r": "Pozwól sobie na zabawę słowem i formą, inspirując innych do radosnego patrzenia na wyzwania codzienności. Dziel się swoim entuzjazmem i nie bój się być w centrum uwagi, jeśli służy to szerzeniu dobrej energii.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Wystrzegaj się plotek oraz marnowania czasu na jałowe dyskusje, które nie przynoszą nikomu realnego pożytku. Nie pozwól, by drobne uszczypliwości ze strony otoczenia zgasiły Twój wewnętrzny, radosny blask, który dziś promieniuje.",
      "s": "Śmiech to najkrótsza droga do serca",
      "fun": "Twoja kreatywność nie zna dziś granic, więc nawet zwykła sałatka na obiad może wyglądać jak dzieło sztuki nowoczesnej."
    },
    "4-17": {
      "z": "Baran",
      "l": 4,
      "e": "Czwórka przypomina, że prawdziwa wolność wyrasta z poczucia bezpieczeństwa i solidnie zbudowanych podstaw codziennego życia. Twoja dzisiejsza systematyczność zostanie doceniona i przyniesie Ci spokój, o którym od dawna marzyłaś w głębi serca.",
      "r": "Zadbaj o porządek w dokumentach i dopracuj szczegóły, które do tej pory wydawały Ci się mało istotne. Buduj swoją przyszłość cegła po cegle, pamiętając, że pośpiech jest zazwyczaj złym doradcą przy stawianiu fundamentów.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Unikaj chaosu oraz podejmowania zbyt wielu wyzwań jednocześnie, co mogłoby niepotrzebnie rozproszyć Twoją cenną uwagę. Nie lekceważ procedur i zasad, które służą ochronie Twoich interesów oraz zapewnieniu trwałości Twoich dokonań.",
      "s": "Fundament nie hałasuje — ale wszystko na nim stoi",
      "fun": "Twój dzisiejszy poziom zorganizowania sprawia, że nawet czas płynie dokładnie tak, jak zaplanowałaś to w swoim kalendarzu."
    },
    "4-18": {
      "z": "Baran",
      "l": 5,
      "e": "Piątka przynosi dynamiczne zmiany, które wymagają od Ciebie elastyczności oraz gotowości do szybkiego podejmowania nowych decyzji. To dzień pełen niespodzianek, które mogą całkowicie odmienić Twoje dotychczasowe postrzeganie wielu ważnych spraw.",
      "r": "Zaakceptuj pojawiające się okazje i bądź gotowa na zmianę kierunku, jeśli poczujesz, że nowa droga jest lepsza. Wyjdź do ludzi i otwórz się na wymianę myśli, która może zainspirować Cię do podjęcia śmiałych czynów.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Wystrzegaj się lęku przed nieznanym oraz trzymania się kurczowo planów, które już przestały być w pełni aktualne. Nie bój się zaryzykować, ponieważ dziś szczęście sprzyja tym, którzy mają odwagę łamać dotychczasowe schematy.",
      "s": "Wiatr nie pyta — on po prostu wieje",
      "fun": "Masz dziś w sobie tyle pasji podróżnika, że nawet wyjście do lokalnego sklepu wydaje się początkiem wielkiej wyprawy."
    },
    "4-19": {
      "z": "Baran",
      "l": 6,
      "e": "Szóstka zaprasza Cię do budowania mostów miłości i troski, które łączą serca Twoich najbliższych w jedną harmonijną całość. Twoja wrażliwość na piękno sprawi, że każde dzisiejsze spotkanie stanie się okazją do wzmocnienia wzajemnych więzi.",
      "r": "Zadbaj o estetykę swojego bezpośredniego otoczenia i pozwól, by harmonia zagościła w Twoim domu na stałe. Okaż czułość osobom, które kochasz, ponieważ proste gesty mają dziś wielką moc uzdrawiania dawnych, drobnych ran.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Unikaj brania na swoje barki zbyt wielu cudzych problemów, ponieważ każdy musi przejść swoją drogę samodzielnie. Nie szukaj perfekcji tam, gdzie wystarczy po prostu szczera obecność i dobre, wspierające słowo płynące z serca.",
      "s": "Dom to miejsce gdzie serce oddycha",
      "fun": "Twoje poczucie harmonii jest dziś tak wielkie, że nawet poduszki na kanapie same układają się w idealną linię."
    },
    "4-20": {
      "z": "Byk",
      "l": 7,
      "e": "Siódemka zamyka tę dekadę w tonie kontemplacji, zachęcając do głębokiego podsumowania dotychczasowych kwietniowych doświadczeń. To czas, w którym wiedza intuicyjna staje się Twoim najcenniejszym kapitałem i drogowskazem na nadchodzące dni.",
      "r": "Znajdź chwilę na zapisanie swoich przemyśleń i wsłuchaj się w rytm natury, która właśnie w pełni rozkwita. Zaufaj procesom dojrzewania, które dzieją się w Twoim wnętrzu, i daj sobie czas na przygotowanie do nowych wyzwań.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Wystrzegaj się hałasu oraz niepotrzebnego pośpiechu w planowaniu kolejnych kroków zawodowych czy osobistych. Nie lekceważ snów i drobnych znaków, które dziś mogą być dla Ciebie wyjątkowo czytelne oraz istotne.",
      "s": "W ciszy mieszka mądrość",
      "fun": "Jesteś dziś jak mądra sowa, która z boku obserwuje świat, zachowując przy tym stoicki spokój oraz właściwy dystans."
    },
    "4-21": {
      "z": "Byk",
      "l": 8,
      "e": "Ósemka to potężna fala energii, która sprzyja manifestowaniu Twoich najśmielszych wizji w świecie materii. To dzień, w którym Twoja wewnętrzna siła spotyka się z odpowiednimi okolicznościami, pozwalając Ci na odważne sięgnięcie po to, na co rzetelnie zapracowałaś.",
      "r": "Podejmij kluczowe decyzje finansowe i wykaż się determinacją w realizacji zawodowych założeń. Zaufaj swojej sprawczej mocy, która dziś działa wyjątkowo skutecznie i precyzyjnie.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Wystrzegaj się lęku przed sukcesem oraz niepewności, która mogłaby podkopać Twój autorytet w oczach innych. Nie ulegaj pokusie dominacji za wszelką cenę, pamiętając, że prawdziwa moc płynie z wewnętrznego spokoju.",
      "s": "Siła z wartości, nie z ego",
      "fun": "Twoja dzisiejsza pewność siebie sprawia, że nawet najtrudniejsze zadania na liście „do zrobienia” wykonują się niemal same."
    },
    "4-22": {
      "z": "Byk",
      "l": 9,
      "e": "Dziewiątka przypomina, że mądrość polega na umiejętności domykania etapów, które wypełniły już swoje przeznaczenie. To czas wielkiego, wiosennego oczyszczenia duszy, które przygotowuje Cię na przyjęcie zupełnie nowych, fascynujących impulsów od losu.",
      "r": "Podziękuj przeszłości za wszystkie odebrane lekcje i z pełną świadomością puść wolno to, co Cię ogranicza. Zrób w swoim sercu przestrzeń na nowe doświadczenia, które pojawią się wraz z nadchodzącym majem.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Nie trzymaj się kurczowo relacji i spraw, które przestały wnosić światło do Twojej codzienności. Unikaj rozpamiętywania strat, ponieważ każde zakończenie jest obietnicą nowego, wspaniałego świtu.",
      "s": "Koniec to też dar",
      "fun": "Masz dziś taki rozmach w domykaniu spraw, że nawet kurz w zakamarkach szafy czuje się poważnie zagrożony eksmisją."
    },
    "4-23": {
      "z": "Byk",
      "l": 1,
      "e": "Jedynka po raz kolejny rozpala iskrę nowej inicjatywy, zachęcając Cię do stanięcia w pełnym blasku własnych możliwości. To dzień, w którym każda Twoja odważna myśl może stać się fundamentem dla nowej, niezwykłej historii, którą napiszesz sama.",
      "r": "Wykaż się samodzielnością i zainicjuj projekt, o którym do tej pory bałaś się nawet głośno marzyć. Zaufaj swojej sile przebicia i bądź pierwszą osobą, która z pełnym przekonaniem uwierzy w Twoje dzisiejsze zwycięstwo.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Wystrzegaj się oglądania na opinie innych ludzi, ponieważ tylko Ty znasz kierunek, w którym pragniesz podążać. Nie zwlekaj z działaniem, gdyż dzisiejsza energia sprzyja tym, którzy odważnie i bez wahania ruszają w nieznane.",
      "s": "Pierwsza linia należy do Ciebie",
      "fun": "Twój entuzjazm jest dziś tak wielki, że mogłabyś zainicjować nową modę, idąc po prostu do pracy w jednym bucie i z wielkim uśmiechem."
    },
    "4-24": {
      "z": "Byk",
      "l": 2,
      "e": "Dwójka uczy nas, że największa siła często drzemie w łagodności oraz umiejętności budowania harmonijnych relacji. Twoja dyplomacja stanie się dziś kluczem, który otworzy przed Tobą drzwi do serc i umysłów ważnych dla Ciebie osób.",
      "r": "Szukaj porozumienia i buduj mosty porozumienia tam, gdzie do tej pory panował chłodny dystans. Pielęgnuj swoją intuicję, ponieważ ona najlepiej podpowie Ci, jak zachować równowagę w kontaktach z innymi.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Unikaj rywalizacji oraz narzucania swojej woli, co mogłoby zburzyć kruchą atmosferę dzisiejszej zgody. Nie bój się prosić o wsparcie, ponieważ współpraca przyniesie Ci dziś znacznie więcej korzyści niż samotne działanie.",
      "s": "W ciszy słychać więcej",
      "fun": "Jesteś dziś tak wyczulona na nastroje innych, że wiesz dokładnie, o czym marzą Twoi bliscy, zanim sami o tym pomyślą."
    },
    "4-25": {
      "z": "Byk",
      "l": 3,
      "e": "Trójka to radosny taniec kreatywności, który zamienia każdy zwykły obowiązek w fascynującą przygodę pełną inspiracji. Pozwól sobie na śmiech i lekkie podejście do życia, ponieważ radość jest najkrótszą drogą do spełnienia Twoich marzeń.",
      "r": "Wyraź swoje emocje poprzez barwy, słowa lub gesty, które niosą ze sobą powiew wiosennej świeżości. Dziel się swoim optymizmem, bo Twój szczery uśmiech ma dziś moc zarażania innych wyjątkowo dobrą energią.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Nadmiernego analizowania swoich potknięć, co mogłoby niepotrzebnie stłumić Twój naturalny, dziecięcy entuzjazm. Nie pozwól, by pesymizm otoczenia zgasił Twój wewnętrzny blask, który dziś promieniuje wyjątkowo mocno.",
      "s": "Śmiech to najkrótsza droga do serca",
      "fun": "Twoja energia jest dziś tak słoneczna, że nawet kwiaty w wazonie wydają się nachylać w Twoją stronę, szukając blasku."
    },
    "4-26": {
      "z": "Byk",
      "l": 4,
      "e": "Czwórka przypomina o wartości solidnych fundamentów, na których budujemy poczucie własnego bezpieczeństwa i życiowej stabilizacji. Twoja systematyczność zostanie dziś doceniona, przynosząc Ci spokój oraz wielką satysfakcję z rzetelnie wykonanej pracy.",
      "r": "Skup się na dokończeniu rozpoczętych projektów i zadbaj o wzorowy porządek w sprawach wymagających uwagi. Buduj swoją przyszłość krok po kroku, ufając, że każda mała czynność przybliża Cię do wielkiego sukcesu.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Unikaj chaosu oraz podejmowania zbyt wielu wyzwań jednocześnie, co mogłoby niepotrzebnie rozproszyć Twoją cenną uwagę. Nie lekceważ zasad, które chronią Twoją stabilność i pomagają zachować pełną kontrolę nad rzeczywistością.",
      "s": "Fundament nie hałasuje — ale wszystko na nim stoi",
      "fun": "Twoja dzisiejsza miłość do porządku sprawia, że nawet spinacze w Twoim biurku ułożyły się w idealne, równe szeregi."
    },
    "4-27": {
      "z": "Byk",
      "l": 5,
      "e": "Piątka przynosi ożywczy powiew wolności i zachęca do wyjścia poza bezpieczną, ale czasem zbyt przewidywalną strefę komfortu. To doskonały dzień, abyś odważyła się na zmianę, która wprowadzi do Twojej codzienności nową, stymulującą energię.",
      "r": "Otwórz się na spontaniczne propozycje i pozwól sobie na odrobinę przygody, która odświeży Twój umysł. Zaryzykuj i sprawdź nowe możliwości rozwoju, które pojawiają się na horyzoncie właśnie dzisiejszego dnia.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Wystrzegaj się nudy oraz stagnacji, które mogą działać na Ciebie frustrująco i niepotrzebnie odbierać Ci siły witalne. Nie bój się porzucić starych schematów, ponieważ to właśnie w zmianie drzemie Twój największy potencjał wzrostu.",
      "s": "Wiatr nie pyta — on po prostu wieje",
      "fun": "Twoja potrzeba zmian jest dziś tak duża, że wyjście na zwykły spacer może skończyć się rezerwacją biletów na koniec świata."
    },
    "4-28": {
      "z": "Byk",
      "l": 6,
      "e": "Szóstka ponownie zaprasza Cię do świata harmonii, gdzie miłość, troska i piękno stanowią najważniejsze drogowskazy dla serca. Zadbaj o to, by Twoje działania płynęły prosto z wnętrza i niosły ukojenie zarówno Tobie, jak i wszystkim bliskim.",
      "r": "Stwórz w swoim domu atmosferę pełną ciepła i spędź czas z osobami, które są dla Ciebie najważniejsze. Skup się na tworzeniu pięknych chwil, które wzmocnią Twoje więzi i dadzą Ci poczucie głębokiego bezpieczeństwa.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Unikaj brania na swoje barki zbyt wielu cudzych problemów, ponieważ każdy musi przejść swoją życiową drogę samodzielnie. Nie szukaj perfekcji tam, gdzie wystarczy po prostu szczera obecność i dobre, wspierające słowo płynące z duszy.",
      "s": "Dom to miejsce gdzie serce oddycha",
      "fun": "Twoja chęć opiekowania się światem sprawia, że nawet Twoje kwiaty doniczkowe czują się dziś wyjątkowo rozpieszczane i kochane."
    },
    "4-29": {
      "z": "Byk",
      "l": 7,
      "e": "Siódemka to czas głębokiej introspekcji, kiedy cisza staje się Twoim najbardziej lojalnym nauczycielem życiowej mądrości. Wyciszenie zewnętrznych bodźców pozwoli Ci usłyszeć odpowiedzi, których od dawna poszukiwałaś w świecie zewnętrznym.",
      "r": "Znajdź chwilę na medytację lub spokojną lekturę, która wzbogaci Twoje wnętrze i przyniesie spokój umysłu. Zaufaj swojej intuicji, ponieważ jej głos jest dzisiaj wyjątkowo czysty, klarowny i godny zaufania.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Hałasu oraz powierzchownych rozrywek, które mogą rozproszyć Twoją uwagę i zabrać wypracowany z trudem spokój. Nie bój się pytań o sens własnej drogi, gdyż konfrontacja z nimi przynosi prawdziwe wyzwolenie i duchowy wzrost.",
      "s": "W ciszy mieszka mądrość",
      "fun": "Twoja aura tajemniczości sprawia, że bliscy zastanawiają się, czy właśnie nie odnalazłaś odpowiedzi na wszystkie zagadki wszechświata."
    },
    "4-30": {
      "z": "Byk",
      "l": 8,
      "e": "Ósemka zamyka kwiecień mocnym akcentem sprawczości, przypominając Ci o Twojej zdolności do panowania nad materią i własnym losem. To dzień, w którym możesz z dumą podsumować swoje osiągnięcia i przygotować fundamenty pod nadchodzącą energię maja.",
      "r": "Skoncentruj się na domykaniu spraw zawodowych i finansowych, wykazując się przy tym dużą dozą profesjonalizmu. Zamanifestuj swoją obfitość i z ufnością spójrz w przyszłość, wiedząc, że masz w ręku wszystkie niezbędne asy.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Niepewności oraz osiadania na laurach, ponieważ Twoja energia sukcesu potrzebuje ciągłego, świadomego podtrzymywania. Wystrzegaj się lęku przed wielkością, gdyż jesteś w pełni gotowa na owoce, które właśnie dojrzewają w Twoim ogrodzie.",
      "s": "Siła z wartości, nie z ego",
      "fun": "Twój portfel czuje dziś przed Tobą taki respekt, że nawet paragony układają się w nim w idealnym porządku alfabetycznym."
    },
    "5-1": {
      "z": "Byk",
      "l": 7,
      "e": "Siódemka to czas introspekcji, w którym cisza staje się Twoim najbardziej lojalnym i mądrym sprzymierzeńcem. Pozwól sobie na luksus bycia sama na sam ze swoimi myślami, aby odnaleźć odpowiedzi na najważniejsze pytania duszy.",
      "r": "Znajdź chwilę na medytację lub spokojną lekturę, która pozwoli Ci pogłębić wiedzę o sobie samej. Zaufaj swojej intuicji, ponieważ w dzisiejszym wyciszeniu jej głos będzie słyszalny wyjątkowo wyraźnie.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Stroń od zgiełku i powierzchownych rozrywek, które mogą rozproszyć Twoją cenną uwagę i zabrać spokój. Nie bój się pytań o sens życia, gdyż konfrontacja z nimi przyniesie Ci upragnioną wolność ducha.",
      "s": "Głębiej niż widać",
      "fun": "Twoje milczenie jest dziś tak wymowne, że Twoi bliscy zastanawiają się, czy właśnie nie odkryłaś nowej galaktyki."
    },
    "5-2": {
      "z": "Byk",
      "l": 8,
      "e": "Ósemka to potężna manifestacja siły i sprawczości, która doskonale współgra z energią świętowania i dumy. Masz dziś w ręku wszystkie narzędzia, aby Twoje działania nabrały rozmachu i przyniosły wymierne, materialne owoce.",
      "r": "Podejmij odważną inicjatywę i zaufaj swojej zdolności do panowania nad skomplikowanymi procesami. Buduj swoją pozycję na fundamencie uczciwości, co zapewni Ci szacunek otoczenia i trwałość osiągniętych sukcesów.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Wystrzegaj się podejmowania decyzji pod wpływem lęku, zamiast czerpać siłę z poczucia własnej, ogromnej wartości. Nie ulegaj arogancji, pamiętając, że prawdziwa moc zawsze idzie w parze z wewnętrznym opanowaniem.",
      "s": "Budujesz — i to zostaje",
      "fun": "Masz dziś spojrzenie liderki, przed którą ustępują nawet największe korki na trasach majówkowych wycieczek."
    },
    "5-3": {
      "z": "Byk",
      "l": 9,
      "e": "Dziewiątka przypomina, że każde zakończenie jest koniecznym etapem, który przygotowuje nas na nadejście czegoś zupełnie nowego. To czas wielkiej transformacji i uwalniania się od ciężarów przeszłości, aby z lekkim sercem ruszyć dalej.",
      "r": "Wybacz dawnym urazom i podziękuj przeszłości za wszystkie lekcje, które Cię ukształtowały. Zrób w swoim życiu miejsce na nowe idee, które już teraz zaczynają kiełkować w Twojej wyobraźni.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Nie trzymaj się kurczowo spraw, które wypełniły już swoje przeznaczenie i przestały wspierać Twój wzrost. Unikaj żalu po tym, co odchodzi, ponieważ każda zmiana jest obietnicą lepszej i mądrzejszej przyszłości.",
      "s": "Mądrość boli zanim wyzwala",
      "fun": "Robisz dziś takie porządki emocjonalne, że nawet stare paragony w portfelu same proszą o godną i szybką utylizację."
    },
    "5-4": {
      "z": "Byk",
      "l": 1,
      "e": "Jedynka po raz kolejny rozpala iskrę nowej inicjatywy, zachęcając Cię do bycia pionierką we własnym, codziennym życiu. To dzień, w którym każda Twoja odważna myśl ma moc stania się początkiem fascynującej, nowej przygody.",
      "r": "Postaw na siebie i zainicjuj projekt, o którym do tej pory bałaś się głośno opowiadać innym. Zaufaj swojej sile przebicia i bądź pierwszą osobą, która z pełnym przekonaniem uwierzy w Twoje dzisiejsze zwycięstwo.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Wystrzegaj się oglądania na opinie innych ludzi, ponieważ tylko Ty znasz właściwy kierunek swojej podróży. Nie zwlekaj z działaniem, gdyż dzisiejsza energia sprzyja tym, którzy odważnie i zdecydowanie ruszają w nieznane.",
      "s": "Zacznij — reszta przyjdzie",
      "fun": "Twój entuzjazm jest dziś tak wielki, że mogłabyś zainicjować nową modę, idąc po prostu do pracy w jednym bucie."
    },
    "5-5": {
      "z": "Byk",
      "l": 2,
      "e": "Dwójka uczy nas, że największa siła często drzemie w łagodności oraz umiejętności słuchania drugiego człowieka. Twoja dyplomacja stanie się dziś kluczem, który otworzy przed Tobą drzwi do serc i umysłów ważnych dla Ciebie osób.",
      "r": "Szukaj porozumienia i buduj mosty tam, gdzie do tej pory panował chłodny, nieprzyjemny dystans. Pielęgnuj swoją intuicję, ponieważ ona najlepiej podpowie Ci, jak zachować równowagę w kontaktach z otoczeniem.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Unikaj rywalizacji oraz narzucania swojej woli, co mogłoby zburzyć kruchą atmosferę dzisiejszej zgody. Nie bój się prosić o wsparcie, ponieważ współpraca przyniesie Ci dziś znacznie więcej korzyści niż samotne działanie.",
      "s": "Dwie dusze, jedna harmonia",
      "fun": "Jesteś dziś tak wyczulona na nastroje innych, że wiesz dokładnie, o czym marzą Twoi bliscy, zanim sami o tym pomyślą."
    },
    "5-6": {
      "z": "Byk",
      "l": 3,
      "e": "Trójka to radosny taniec kreatywności, który zamienia każdy zwykły obowiązek w barwną opowieść pełną inspiracji. Pozwól sobie na śmiech i lekkie podejście do życia, ponieważ radość jest najkrótszą drogą do spełnienia marzeń.",
      "r": "Wyraź swoje emocje poprzez barwy, słowa lub gesty, które niosą ze sobą powiew wiosennej świeżości. Dziel się swoim optymizmem, bo Twój szczery uśmiech ma dziś moc zarażania innych wyjątkowo dobrą energią.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Nadmiernego analizowania swoich potknięć, co mogłoby niepotrzebnie stłumić Twój naturalny, radosny entuzjazm. Nie pozwól, by pesymizm otoczenia zgasił Twój wewnętrzny blask, który dziś promieniuje wyjątkowo mocno.",
      "s": "Twórz, bo świat tego potrzebuje",
      "fun": "Twoja energia jest dziś tak słoneczna, że nawet kwiaty w wazonie wydają się nachylać w Twoją stronę."
    },
    "5-7": {
      "z": "Byk",
      "l": 4,
      "e": "Czwórka przypomina o wartości solidnych fundamentów, na których budujemy poczucie własnego bezpieczeństwa i stabilizacji. Twoja systematyczność zostanie dziś doceniona, przynosząc Ci spokój oraz satysfakcję z rzetelnie wykonanej pracy.",
      "r": "Skup się na dokończeniu rozpoczętych projektów i zadbaj o porządek w sprawach wymagających uwagi. Buduj swoją przyszłość krok po kroku, ufając, że każda mała czynność przybliża Cię do wielkiego sukcesu.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Unikaj chaosu oraz podejmowania zbyt wielu wyzwań jednocześnie, co mogłoby niepotrzebnie rozproszyć Twoją uwagę. Nie lekceważ zasad, które chronią Twoją stabilność i pomagają zachować kontrolę nad rzeczywistością.",
      "s": "Małe kroki, trwałe ślady",
      "fun": "Twoja dzisiejsza miłość do porządku sprawia, że nawet spinacze w Twoim biurku ułożyły się w idealne szeregi."
    },
    "5-8": {
      "z": "Byk",
      "l": 5,
      "e": "Piątka przynosi powiew wolności i zachęca do wyjścia poza bezpieczną, ale czasem zbyt przewidywalną strefę komfortu. To doskonały dzień, abyś odważyła się na zmianę, która wprowadzi do Twojej codzienności nową energię.",
      "r": "Otwórz się na spontaniczne propozycje i pozwól sobie na odrobinę przygody, która odświeży Twój umysł. Zaryzykuj i sprawdź nowe możliwości rozwoju, które pojawiają się na horyzoncie właśnie dzisiaj.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Wystrzegaj się nudy oraz stagnacji, które mogą działać na Ciebie frustrująco i odbierać siły. Nie bój się porzucić starych schematów, ponieważ to właśnie w zmianie drzemie Twój największy potencjał.",
      "s": "Każda zmiana to zaproszenie",
      "fun": "Twoja potrzeba zmian jest dziś tak duża, że wyjście na spacer może skończyć się rezerwacją biletów na koniec świata."
    },
    "5-9": {
      "z": "Byk",
      "l": 6,
      "e": "Szóstka ponownie zaprasza Cię do świata harmonii, gdzie miłość, troska i piękno stanowią najważniejsze drogowskazy. Zadbaj o to, by Twoje działania płynęły prosto z serca i niosły ukojenie zarówno Tobie, jak i bliskim.",
      "r": "Stwórz w swoim domu atmosferę pełną ciepła i spędź czas z osobami, które są dla Ciebie najważniejsze. Skup się na tworzeniu pięknych chwil, które wzmocnią Twoje więzi i dadzą Ci poczucie bezpieczeństwa.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Unikaj brania na swoje barki zbyt wielu cudzych problemów, ponieważ każdy musi przejść swoją drogę samodzielnie. Nie szukaj perfekcji tam, gdzie wystarczy po prostu szczera obecność i dobre, wspierające słowo.",
      "s": "Troska zmienia wszystko",
      "fun": "Twoja chęć opiekowania się światem sprawia, że nawet Twoje kwiaty doniczkowe czują się dziś wyjątkowo rozpieszczane."
    },
    "5-10": {
      "z": "Byk",
      "l": 7,
      "e": "Siódemka otwiera przed Tobą drzwi do wewnętrznej biblioteki wiedzy, gdzie odpowiedzi na najtrudniejsze pytania pojawiają się same w ciszy. To czas, w którym intelekt harmonijnie łączy się z intuicją, tworząc idealną przestrzeń do studiowania własnej duszy oraz otaczającego świata.",
      "r": "Poświęć czas na rozwijanie swoich pasji i poszukaj mądrości w ciszy, z dala od codziennego pośpiechu. Zaufaj wiedzy, która przychodzi w momentach wyciszenia, gdyż jest ona najcenniejszym drogowskazem na nadchodzące dni.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Wystrzegaj się powierzchowności oraz ulegania presji otoczenia, która zmusza do szybkich i nieprzemyślanych odpowiedzi. Nie bój się pytań o sens własnej drogi, gdyż konfrontacja z nimi przynosi prawdziwe wyzwolenie i duchowy wzrost.",
      "s": "Głębiej niż widać",
      "fun": "Twoja dzisiejsza aura tajemniczości jest tak silna, że nawet Twoja poranna kawa wydaje się parować w jakimś mistycznym, filozoficznym rytmie."
    },
    "5-11": {
      "z": "Byk",
      "l": 8,
      "e": "Ósemka to potężna energia sprawczości, która pozwala Ci realnie wpłynąć na strukturę Twojego życia zawodowego oraz finansowego. Masz w sobie wystarczająco dużo determinacji, aby zrealizować cele, które do tej pory wydawały się być jedynie odległymi marzeniami.",
      "r": "Podejmij konkretne działania mające na celu stabilizację Twoich finansów i zaufaj swojej wewnętrznej sile. Buduj swoją obfitość na fundamencie uczciwości, co zapewni Ci szacunek otoczenia oraz trwałe, satysfakcjonujące efekty.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Wystrzegaj się podejmowania decyzji pod wpływem lęku przed brakiem, zamiast czerpać siłę z poczucia własnej wielkości. Nie ulegaj arogancji, pamiętając, że prawdziwa moc zawsze idzie w parze z opanowaniem i szacunkiem do innych.",
      "s": "Budujesz — i to zostaje",
      "fun": "Masz dziś spojrzenie liderki, która potrafi wynegocjować lepsze warunki nawet podczas krótkiej rozmowy z losem o pogodę na popołudnie."
    },
    "5-12": {
      "z": "Byk",
      "l": 9,
      "e": "Dziewiątka symbolizuje mądrość płynącą z domykania etapów, które wypełniły już swoje zadanie w Twojej życiowej podróży. To czas wielkiej transformacji, który przygotowuje Cię na przyjęcie zupełnie nowych, fascynujących impulsów od losu.",
      "r": "Wybacz dawnym urazom i podziękuj przeszłości za wszystkie lekcje, które uczyniły Cię tak silną i świadomą osobą. Zrób w swoim sercu przestrzeń na nowe idee, które już teraz zaczynają kiełkować w Twojej bogatej wyobraźni.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Nie trzymaj się kurczowo spraw i relacji, które przestały wspierać Twój naturalny wzrost oraz poczucie szczęścia. Unikaj żalu po tym, co odchodzi, ponieważ każda zmiana jest obietnicą lepszej i bardziej świetlistej przyszłości.",
      "s": "Mądrość boli zanim wyzwala",
      "fun": "Robisz dziś takie porządki emocjonalne, że nawet stare paragony w Twoim portfelu same proszą o godną i szybką utylizację."
    },
    "5-13": {
      "z": "Byk",
      "l": 1,
      "e": "Jedynka to świeży powiew energii, który sprawia, że znów czujesz się autentyczną architektką własnego losu. Każdy Twój dzisiejszy wybór ma moc zmieniania rzeczywistości na lepszą i bardziej zgodną z Twoim wewnętrznym głosem.",
      "r": "Postaw na oryginalność i nie bój się zaprezentować światu swoich najbardziej śmiałych oraz innowacyjnych projektów. Zaufaj swojej sile i bądź pierwszą osobą, która z pełnym przekonaniem uwierzy w powodzenie Twoich dzisiejszych działań.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Wystrzegaj się naśladownictwa oraz szukania dróg na skróty, które mogłyby niepotrzebnie osłabić Twoją autentyczność. Nie bój się działać samodzielnie, ponieważ pionierzy często muszą przecierać szlaki bez oglądania się na opinie innych.",
      "s": "Zacznij — reszta przyjdzie",
      "fun": "Jesteś dziś taką dawką czystej energii, że mogłabyś zastąpić poranne espresso dla całego swojego biura lub bliskich domowników."
    },
    "5-14": {
      "z": "Byk",
      "l": 2,
      "e": "Dwójka uczy nas, że największa siła często drzemie w łagodności oraz umiejętności współistnienia z drugim człowiekiem. Twoja dyplomacja stanie się dziś kluczem, który otworzy przed Tobą drzwi do serc i umysłów ważnych dla Ciebie osób.",
      "r": "Szukaj porozumienia i buduj mosty tam, gdzie do tej pory panował chłodny, nieprzyjemny dystans. Pielęgnuj swoją intuicję, ponieważ ona najlepiej podpowie Ci, jak zachować równowagę w kontaktach z otoczeniem.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Unikaj rywalizacji oraz narzucania swojej woli, co mogłoby zburzyć kruchą atmosferę dzisiejszej zgody. Nie bój się prosić o wsparcie, ponieważ współpraca przyniesie Ci dziś znacznie więcej korzyści niż samotna walka z wyzwaniami.",
      "s": "Dwie dusze, jedna harmonia",
      "fun": "Jesteś dziś tak wyczulona na nastroje innych, że wiesz dokładnie, o czym marzą Twoi bliscy, zanim sami o tym pomyślą."
    },
    "5-15": {
      "z": "Byk",
      "l": 3,
      "e": "Trójka to radosna ekspresja, która zamienia każdy zwykły obowiązek w barwną przygodę pełną inspiracji. Pozwól sobie na śmiech i lekkie podejście do życia, ponieważ radość jest najkrótszą drogą do uzdrowienia każdej relacji.",
      "r": "Wyraź swoje emocje poprzez barwy, słowa lub gesty, które niosą ze sobą powiew wiosennej świeżości. Dziel się swoim optymizmem, bo Twój szczery uśmiech ma dziś moc zarażania innych wyjątkowo dobrą energią.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Nadmiernego analizowania swoich potknięć, co mogłoby niepotrzebnie stłumić Twój naturalny, radosny entuzjazm. Nie pozwól, by pesymizm otoczenia zgasił Twój wewnętrzny blask, który dziś promieniuje wyjątkowo mocno i jasno.",
      "s": "Twórz, bo świat tego potrzebuje",
      "fun": "Twoja energia jest dziś tak słoneczna, że nawet kwiaty w wazonie wydają się nachylać w Twoją stronę, szukając blasku."
    },
    "5-16": {
      "z": "Byk",
      "l": 4,
      "e": "Czwórka przypomina o wartości solidnych fundamentów, na których budujemy poczucie własnego bezpieczeństwa i stabilizacji. Twoja systematyczność zostanie dziś doceniona, przynosząc Ci spokój oraz wielką satysfakcję z rzetelnie wykonanej pracy.",
      "r": "Skup się na dokończeniu rozpoczętych projektów i zadbaj o wzorowy porządek w sprawach wymagających uwagi. Buduj swoją przyszłość krok po kroku, ufając, że każda mała czynność przybliża Cię do wielkiego sukcesu.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Unikaj chaosu oraz podejmowania zbyt wielu wyzwań jednocześnie, co mogłoby niepotrzebnie rozproszyć Twoją cenną uwagę. Nie lekceważ zasad, które chronią Twoją stabilność i pomagają zachować pełną kontrolę nad rzeczywistością.",
      "s": "Małe kroki, trwałe ślady",
      "fun": "Twoja dzisiejsza miłość do porządku sprawia, że nawet spinacze w Twoim biurku ułożyły się w idealne, równe szeregi."
    },
    "5-17": {
      "z": "Byk",
      "l": 5,
      "e": "Piątka przynosi powiew wolności i zachęca do wyjścia poza bezpieczną, ale czasem zbyt przewidywalną strefę komfortu. To doskonały dzień, abyś odważyła się na zmianę, która wprowadzi do Twojej codzienności nową, ożywczą energię.",
      "r": "Otwórz się na spontaniczne propozycje i pozwól sobie na odrobinę przygody, która odświeży Twój umysł. Zaryzykuj i sprawdź nowe możliwości rozwoju, które pojawiają się na horyzoncie właśnie dzisiejszego dnia.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Wystrzegaj się nudy oraz stagnacji, które mogą działać na Ciebie frustrująco i niepotrzebnie odbierać Ci siły witalne. Nie bój się porzucić starych schematów, ponieważ to właśnie w zmianie drzemie Twój największy potencjał wzrostu.",
      "s": "Każda zmiana to zaproszenie",
      "fun": "Twoja potrzeba zmian jest dziś tak duża, że wyjście na zwykły spacer może skończyć się rezerwacją biletów na koniec świata."
    },
    "5-18": {
      "z": "Byk",
      "l": 6,
      "e": "Szóstka ponownie zaprasza Cię do świata harmonii, gdzie miłość, troska i piękno stanowią najważniejsze drogowskazy dla serca. Zadbaj o to, by Twoje działania płynęły prosto z wnętrza i niosły ukojenie zarówno Tobie, jak i wszystkim bliskim.",
      "r": "Stwórz w swoim domu atmosferę pełną ciepła i spędź czas z osobami, które są dla Ciebie najważniejsze. Skup się na tworzeniu pięknych chwil, które wzmocnią Twoje więzi i dadzą Ci poczucie głębokiego bezpieczeństwa.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Unikaj brania na swoje barki zbyt wielu cudzych problemów, ponieważ każdy musi przejść swoją życiową drogę samodzielnie. Nie szukaj perfekcji tam, gdzie wystarczy po prostu szczera obecność i dobre, wspierające słowo płynące z duszy.",
      "s": "Troska zmienia wszystko",
      "fun": "Twoja chęć opiekowania się światem sprawia, że nawet Twoje kwiaty doniczkowe czują się dziś wyjątkowo rozpieszczane i kochane."
    },
    "5-19": {
      "z": "Byk",
      "l": 7,
      "e": "Czas głębokiej introspekcji i duchowej mądrości, w którym cisza staje się Twoim najwierniejszym doradcą. Wyciszenie zewnętrznych bodźców pozwoli Ci usłyszeć czysty głos własnej intuicji.",
      "r": "Znajdź chwilę na medytację lub spokojną lekturę, która wzbogaci Twoje wnętrze i przyniesie spokój umysłu. Zaufaj swojej intuicji, której głos jest dziś wyjątkowo klarowny.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Hałasu oraz powierzchownych rozrywek, które mogą rozproszyć Twoją uwagę i zabrać wypracowany ład wewnętrzny. Nie bój się pytań o głęboki sens własnej drogi.",
      "s": "Lekkość i skupienie",
      "fun": "Jesteś dziś jak mądra sowa obserwująca świat z dystansem – wiesz o otaczającej rzeczywistości znacznie więcej, niż decydujesz się wyjawić."
    },
    "5-20": {
      "z": "Byk",
      "l": 8,
      "e": "Ósemka to potężna fala sprawczości, która pozwala Ci realnie wpłynąć na strukturę Twojego życia zawodowego oraz finansowego. Twoja wewnętrzna siła staje się dziś narzędziem sukcesu, o ile tylko pozostaniesz wierna swoim najwyższym standardom etycznym.",
      "r": "Podejmij kluczowe decyzje biznesowe i zaufaj swojej zdolności do pomnażania dobra w świecie materii. Buduj swoją obfitość na fundamencie uczciwości, co zapewni Ci trwałe i satysfakcjonujące rezultaty.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Wystrzegaj się podejmowania działań pod wpływem lęku, zamiast czerpać siłę z poczucia własnej wielkości. Nie ulegaj arogancji, pamiętając, że prawdziwa moc zawsze idzie w parze z wewnętrznym opanowaniem.",
      "s": "Budujesz — i to zostaje",
      "fun": "Twoja dzisiejsza pewność siebie sprawia, że nawet najtrudniejsze zadania na liście „do zrobienia” wykonują się niemal same pod Twoim karcącym spojrzeniem."
    },
    "5-21": {
      "z": "Bliźnięta",
      "l": 9,
      "e": "Dziewiątka przypomina, że mądrość polega na umiejętności domykania etapów, które wypełniły już swoje zadanie w Twojej podróży. To czas wielkiej transformacji i uwalniania się od ciężarów przeszłości, aby z lekkim sercem przyjąć nadchodzące dary losu.",
      "r": "Wybacz dawnym urazom i podziękuj przeszłości za wszystkie lekcje, które uczyniły Cię tak świadomą osobą. Zrób w swoim sercu przestrzeń na nowe idee, które już teraz zaczynają kiełkować w Twojej wyobraźni.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Nie trzymaj się kurczowo spraw, które przestały wspierać Twój wzrost i poczucie wewnętrznego szczęścia. Unikaj żalu po tym, co odchodzi, ponieważ każda zmiana jest obietnicą lepszej i bardziej świetlistej przyszłości.",
      "s": "Mądrość boli zanim wyzwala",
      "fun": "Robisz dziś takie porządki emocjonalne, że nawet stare paragony w portfelu same proszą o godną utylizację, by nie zakłócać Twojego nowego ładu."
    },
    "5-22": {
      "z": "Bliźnięta",
      "l": 1,
      "e": "Jedynka to świeży powiew energii, który sprawia, że znów czujesz się autentyczną architektką własnego losu. Każdy Twój dzisiejszy wybór ma moc zmieniania rzeczywistości na lepszą i bardziej zgodną z Twoim wewnętrznym głosem.",
      "r": "Postaw na oryginalność i nie bój się zaprezentować światu swoich najbardziej śmiałych projektów. Zaufaj swojej sile przebicia i bądź pierwszą osobą, która z pełnym przekonaniem uwierzy w Twoje dzisiejsze zwycięstwo.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Wystrzegaj się naśladownictwa oraz szukania dróg na skróty, które mogłyby niepotrzebnie osłabić Twoją autentyczność. Nie bój się działać samodzielnie, ponieważ pionierzy często muszą przecierać szlaki bez oglądania się na opinie innych.",
      "s": "Zacznij — reszta przyjdzie",
      "fun": "Twój entuzjazm jest dziś tak wielki, że mogłabyś zainicjować nową modę, idąc po prostu do pracy w jednym bucie i z uśmiechem zwycięzcy."
    },
    "5-23": {
      "z": "Bliźnięta",
      "l": 2,
      "e": "Dwójka uczy nas, że największa siła często drzemie w łagodności oraz umiejętności budowania harmonijnych relacji. Twoja dyplomacja stanie się dziś kluczem, który otworzy przed Tobą drzwi do serc osób ważnych dla Twojego rozwoju.",
      "r": "Szukaj porozumienia i buduj mosty tam, gdzie do tej pory panował chłodny, nieprzyjemny dystans. Pielęgnuj swoją intuicję, ponieważ ona najlepiej podpowie Ci, jak zachować równowagę w kontaktach z otoczeniem.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Unikaj rywalizacji oraz narzucania swojej woli, co mogłoby zburzyć kruchą atmosferę dzisiejszej zgody. Nie bój się prosić o wsparcie, ponieważ współpraca przyniesie Ci dziś znacznie więcej korzyści niż samotna walka.",
      "s": "Dwie dusze, jedna harmonia",
      "fun": "Jesteś dziś tak wyczulona na nastroje innych, że wiesz dokładnie, o czym marzą Twoi bliscy, zanim sami zdążą o tym pomyśleć."
    },
    "5-24": {
      "z": "Bliźnięta",
      "l": 3,
      "e": "Trójka to radosna ekspresja, która zamienia każdy zwykły obowiązek w barwną przygodę pełną inspiracji. Pozwól sobie na śmiech i lekkie podejście do życia, ponieważ radość jest najkrótszą drogą do uzdrowienia każdej sytuacji.",
      "r": "Wyraź swoje emocje poprzez twórczość lub słowa, które niosą ze sobą powiew majowej świeżości. Dziel się swoim optymizmem, bo Twój szczery uśmiech ma dziś moc zarażania innych wyjątkowo dobrą energią.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Nadmiernego analizowania swoich potknięć, co mogłoby niepotrzebnie stłumić Twój naturalny, radosny entuzjazm. Nie pozwól, by pesymizm otoczenia zgasił Twój wewnętrzny blask, który dziś promieniuje wyjątkowo jasno.",
      "s": "Twórz, bo świat tego potrzebuje",
      "fun": "Twoja energia jest dziś tak słoneczna, że nawet kwiaty w wazonie wydają się nachylać w Twoją stronę, szukając źródła światła."
    },
    "5-25": {
      "z": "Bliźnięta",
      "l": 4,
      "e": "Czwórka przypomina o wartości solidnych fundamentów, na których budujemy poczucie własnego bezpieczeństwa i stabilizacji. Twoja systematyczność zostanie dziś doceniona, przynosząc Ci spokój oraz wielką satysfakcję z rzetelnie wykonanej pracy.",
      "r": "Skup się na dokończeniu rozpoczętych projektów i zadbaj o wzorowy porządek w sprawach wymagających uwagi. Buduj swoją przyszłość krok po kroku, ufając, że każda mała czynność przybliża Cię do wielkiego sukcesu.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Unikaj chaosu oraz podejmowania zbyt wielu wyzwań jednocześnie, co mogłoby rozproszyć Twoją cenną uwagę. Nie lekceważ zasad, które chronią Twoją stabilność i pomagają zachować pełną kontrolę nad rzeczywistością.",
      "s": "Małe kroki, trwałe ślady",
      "fun": "Twoja dzisiejsza miłość do porządku sprawia, że nawet spinacze w Twoim biurku ułożyły się w idealne, równe szeregi pod linijkę."
    },
    "5-26": {
      "z": "Bliźnięta",
      "l": 5,
      "e": "Piątka przynosi powiew wolności i zachęca do wyjścia poza bezpieczną, ale czasem zbyt przewidywalną strefę komfortu. To doskonały dzień, abyś odważyła się na zmianę, która wprowadzi do Twojej codzienności nową, ożywczą energię.",
      "r": "Otwórz się na spontaniczne propozycje i pozwól sobie na odrobinę przygody, która odświeży Twój umysł. Zaryzykuj i sprawdź nowe możliwości rozwoju, które pojawiają się na horyzoncie właśnie dzisiejszego dnia.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Wystrzegaj się nudy oraz stagnacji, które mogą działać na Ciebie frustrująco i niepotrzebnie odbierać Ci siły. Nie bój się porzucić starych schematów, ponieważ to właśnie w zmianie drzemie Twój największy potencjał wzrostu.",
      "s": "Każda zmiana to zaproszenie",
      "fun": "Twoja potrzeba zmian jest dziś tak duża, że wyjście na zwykły spacer może skończyć się rezerwacją biletów w zupełnie nieznanym kierunku."
    },
    "5-27": {
      "z": "Bliźnięta",
      "l": 6,
      "e": "Szóstka ponownie zaprasza Cię do świata harmonii, gdzie miłość, troska i piękno stanowią najważniejsze drogowskazy dla serca. Zadbaj o to, by Twoje działania płynęły prosto z wnętrza i niosły ukojenie zarówno Tobie, jak i wszystkim bliskim.",
      "r": "Stwórz w swoim domu atmosferę pełną ciepła i spędź czas z osobami, które są dla Ciebie najważniejsze. Skup się na tworzeniu pięknych chwil, które wzmocnią Twoje więzi i dadzą Ci poczucie głębokiego bezpieczeństwa.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Unikaj brania na swoje barki zbyt wielu cudzych problemów, ponieważ każdy musi przejść swoją życiową drogę samodzielnie. Nie szukaj perfekcji tam, gdzie wystarczy po prostu szczera obecność i dobre, wspierające słowo płynące z duszy.",
      "s": "Troska zmienia wszystko",
      "fun": "Twoja chęć opiekowania się światem sprawia, że nawet Twoje kwiaty doniczkowe czują się dziś wyjątkowo rozpieszczane i podlewane z miłością."
    },
    "5-28": {
      "z": "Bliźnięta",
      "l": 7,
      "e": "Siódemka to czas głębokiej introspekcji, kiedy cisza staje się Twoim najbardziej lojalnym nauczycielem życiowej mądrości. Wyciszenie zewnętrznych bodźców pozwoli Ci usłyszeć odpowiedzi, których od dawna poszukiwałaś w świecie zewnętrznym.",
      "r": "Znajdź chwilę na medytację lub spokojną lekturę, która wzbogaci Twoje wnętrze i przyniesie spokój umysłu. Zaufaj swojej intuicji, ponieważ jej głos jest dzisiaj wyjątkowo czysty, klarowny i godny pełnego zaufania.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Hałasu oraz powierzchownych rozrywek, które mogą rozproszyć Twoją uwagę i zabrać wypracowany z trudem spokój. Nie bój się pytań o sens własnej drogi, gdyż konfrontacja z nimi przynosi prawdziwe wyzwolenie i duchowy wzrost.",
      "s": "Głębiej niż widać",
      "fun": "Twoja aura tajemniczości sprawia, że bliscy zastanawiają się, czy właśnie nie odnalazłaś odpowiedzi na wszystkie zagadki wszechświata przy porannej herbacie."
    },
    "5-29": {
      "z": "Bliźnięta",
      "l": 8,
      "e": "Ósemka wzywa Cię do wykazania się siłą charakteru oraz odwagą w zarządzaniu własnymi zasobami i energią życiową. Twoja sprawczość jest dziś na najwyższym poziomie, co pozwala Ci skutecznie domykać nawet najbardziej skomplikowane projekty finansowe.",
      "r": "Podejmij inicjatywę w sprawach zawodowych i nie bój się sięgać po należne Ci nagrody oraz publiczne uznanie. Buduj swój autorytet na fundamentach uczciwości i rzetelności, które zawsze były Twoją najmocniejszą stroną.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Nie podejmuj decyzji w pośpiechu ani pod wpływem negatywnych emocji, które mogłyby na chwilę zamglić Twój osąd. Wystrzegaj się arogancji, pamiętając, że prawdziwa moc przejawia się w spokoju i pewności podejmowanych działań.",
      "s": "Budujesz — i to zostaje",
      "fun": "Masz dziś spojrzenie liderki, przed którą ustępują nawet największe przeciwności losu i kolejki w osiedlowym sklepie."
    },
    "5-30": {
      "z": "Bliźnięta",
      "l": 9,
      "e": "Dziewiątka zamyka maj w tonie mądrości i podsumowań, pozwalając Ci spojrzeć na minione tygodnie z właściwym dystansem i spokojem. To doskonały moment na wyciągnięcie wniosków i zrobienie miejsca na nową energię, którą przyniesie nadchodzący czerwiec.",
      "r": "Dokończ wszystkie rozpoczęte sprawy i z wdzięcznością pożegnaj to, co w Twoim życiu już się dopełniło. Podaruj sobie chwilę na podziękowanie losowi za wszystkie lekcje, które odebrałaś w ciągu minionego miesiąca.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Nie trzymaj się kurczowo spraw, które już nie służą Twojemu rozwojowi, lecz otwórz dłonie, by przyjąć nowe dary od losu. Unikaj smutku po tym, co odchodzi, ponieważ każda zmiana jest koniecznym krokiem ku lepszemu i pełniejszemu życiu.",
      "s": "Mądrość boli zanim wyzwala",
      "fun": "Jesteś dziś jak mądra sowa kończąca ważny rozdział swojej księgi, gotowa na zupełnie nową i fascynującą czerwcową przygodę."
    },
    "5-31": {
      "z": "Bliźnięta",
      "l": 1,
      "e": "Jedynka to potężny impuls do nowego początku, który sprawia, że czujesz się autentyczną architektką własnego losu. To idealny moment, abyś zainicjowała projekt, o którym do tej pory bałaś się nawet głośno marzyć.",
      "r": "Postaw na siebie i podejmij samodzielną decyzję, która zmieni Twój dotychczasowy sposób patrzenia na życie. Zaufaj swojej intuicji pionierki i nie bój się przecierać nowych, nieodkrytych jeszcze szlaków.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Wystrzegaj się czekania na pozwolenie ze strony innych, ponieważ tylko Ty wiesz, co jest dla Ciebie najlepsze. Nie pozwól, by bierność zgasiła ogień inicjatywy, który dzisiaj płonie w Twoim sercu wyjątkowo mocno.",
      "s": "Zacznij — reszta przyjdzie",
      "fun": "Twój entuzjazm jest dziś tak zaraźliwy, że mogłabyś poprowadzić tłumy, idąc po prostu po poranne pieczywo."
    },
    "6-1": {
      "z": "Bliźnięta",
      "l": 8,
      "e": "Ósemka w Dniu Dziecka przynosi energię sprawstwa, która uczy nas, że marzenia wymagają solidnej struktury, aby mogły stać się rzeczywistością. To doskonały moment, by zainwestować w radość i zabawę z taką samą powagą i zaangażowaniem, z jaką podchodzisz do najważniejszych projektów.",
      "r": "Zamanifestuj swoją siłę poprzez radosne działanie i przejmij inicjatywę w organizowaniu czasu bliskim. Zaufaj swojej skuteczności, która dziś pozwoli Ci połączyć obowiązki z czystą, dziecięcą frajdą.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Wystrzegaj się narzucania swojej woli innym, pamiętając, że prawdziwy autorytet buduje się na szacunku, a nie na dominacji. Nie pozwól, by lęk przed oceną powstrzymał Cię przed realizacją odważnych pomysłów.",
      "s": "Moc służy, nie dominuje",
      "fun": "Masz dziś spojrzenie liderki, która potrafi wynegocjować dodatkową gałkę lodów dla każdego, kto znajdzie się w Twoim otoczeniu."
    },
    "6-2": {
      "z": "Bliźnięta",
      "l": 9,
      "e": "Dziewiątka zaprasza Cię do głębokiego podsumowania i domknięcia spraw, które nie pasują już do nowej, letniej energii. To czas wielkoduszności i szerokiego spojrzenia na świat, w którym mądrość serca staje się Twoim najważniejszym drogowskazem.",
      "r": "Wybacz dawnym urazom i z wdzięcznością puść wolno to, co przestało wspierać Twój duchowy rozwój. Otwórz się na pomaganie innym, znajdując w tym głęboki sens i przygotowanie do nowego cyklu.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Nie trzymaj się kurczowo przeszłości, ponieważ blokuje to Twój naturalny przepływ i gotowość na nowe dary od losu. Unikaj smutku po tym, co odchodzi, uznając to za konieczne miejsce na nadchodzące zmiany.",
      "s": "Zamknij z gracją — otwórz z wdzięcznością",
      "fun": "Robisz dziś takie porządki, że nawet stare maile sprzed roku same zaczynają znikać, czując Twój determinujący nastrój transformacji."
    },
    "6-3": {
      "z": "Bliźnięta",
      "l": 1,
      "e": "Jedynka to świeża iskra inicjatywy, która po dniu domykania etapów pozwala Ci z nową siłą wyznaczyć kierunek działań. Jesteś dzisiaj pionierką, która nie potrzebuje mapy, ponieważ Twoja wewnętrzna odwaga wskazuje Ci najwłaściwszą drogę.",
      "r": "Postaw na siebie i zainicjuj działanie, o którym do tej pory bałaś się głośno opowiadać. Zaufaj własnej sile przebicia i bądź pierwszą osobą, która z pełnym przekonaniem uwierzy w sukces Twojej nowej wizji.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Wystrzegaj się oglądania na opinie innych ludzi, gdyż dzisiaj to Ty jesteś kapitanem tego okrętu. Nie zwlekaj z decyzją, ponieważ energia początku sprzyja tym, którzy odważnie ruszają naprzód.",
      "s": "Twoja droga, Twój rytm",
      "fun": "Twój entuzjazm jest dziś tak wielki, że mogłabyś zainicjować nową modę, idąc po bułki w jednym bucie i z uśmiechem zwycięzcy."
    },
    "6-4": {
      "z": "Bliźnięta",
      "l": 2,
      "e": "Dwójka uczy nas, że największa siła drzemie w łagodności oraz umiejętności budowania mostów między ludźmi. Twoja dyplomacja stanie się dziś kluczem, który otworzy przed Tobą drzwi do serc osób ważnych dla Twojego spokoju.",
      "r": "Szukaj porozumienia i pielęgnuj relacje oparte na zaufaniu oraz głębokim, intuicyjnym zrozumieniu potrzeb innych. Zaufaj swojej wrażliwości, która pozwoli Ci rozładować każde napięcie i wprowadzić harmonię w Twoje otoczenie.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Unikaj rywalizacji oraz narzucania swojej woli, co mogłoby zburzyć kruchą atmosferę dzisiejszej zgody. Nie bój się prosić o wsparcie, ponieważ współpraca przyniesie Ci dziś znacznie więcej korzyści niż samotność.",
      "s": "Delikatność to siła",
      "fun": "Jesteś dziś tak wyczulona na nastroje innych, że wiesz dokładnie, o czym marzą Twoi bliscy, zanim sami o tym pomyślą."
    },
    "6-5": {
      "z": "Bliźnięta",
      "l": 3,
      "e": "Trójka to radosny taniec kreatywności, który zamienia każdy zwykły obowiązek w fascynującą przygodę pełną inspiracji. Pozwól sobie na śmiech i lekkie podejście do życia, ponieważ radość jest najkrótszą drogą do uzdrowienia każdej sytuacji.",
      "r": "Wyraź siebie poprzez barwy, słowa lub gesty, które niosą ze sobą powiew czerwcowej świeżości. Dziel się swoim optymizmem, bo Twój szczery uśmiech ma dziś moc zarażania innych wyjątkowo dobrą energią.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Nadmiernego analizowania swoich potknięć, co mogłoby niepotrzebnie stłumić Twój naturalny, radosny entuzjazm. Nie pozwól, by pesymizm otoczenia zgasił Twój wewnętrzny blask, który dziś promieniuje wyjątkowo mocno.",
      "s": "Lżej znaczy dalej",
      "fun": "Twoja energia jest dziś tak słoneczna, że nawet kwiaty w wazonie wydają się nachylać w Twoją stronę, szukając blasku."
    },
    "6-6": {
      "z": "Bliźnięta",
      "l": 4,
      "e": "Czwórka przypomina o wartości solidnych fundamentów, na których budujemy poczucie własnego bezpieczeństwa i stabilizacji. Twoja systematyczność zostanie dziś doceniona, przynosząc Ci spokój oraz satysfakcję z rzetelnie wykonanej pracy.",
      "r": "Skup się na dokończeniu rozpoczętych projektów i zadbaj o wzorowy porządek w sprawach wymagających uwagi. Buduj swoją przyszłość krok po kroku, ufając, że każda mała czynność przybliża Cię do wielkiego sukcesu.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Unikaj chaosu oraz podejmowania zbyt wielu wyzwań jednocześnie, co mogłoby niepotrzebnie rozproszyć Twoją cenną uwagę. Nie lekceważ zasad, które chronią Twoją stabilność i pomagają zachować pełną kontrolę nad rzeczywistością.",
      "s": "Solidność to poezja",
      "fun": "Twoja dzisiejsza miłość do porządku sprawia, że nawet spinacze w Twoim biurku ułożyły się w idealne szeregi."
    },
    "6-7": {
      "z": "Bliźnięta",
      "l": 5,
      "e": "Piątka przynosi ożywczy powiew wolności i zachęca do wyjścia poza bezpieczną, ale czasem zbyt przewidywalną strefę komfortu. To doskonały dzień, abyś odważyła się na zmianę, która wprowadzi do Twojej codzienności nową, stymulującą energię.",
      "r": "Otwórz się na spontaniczne propozycje i pozwól sobie na odrobinę przygody, która odświeży Twój umysł. Zaryzykuj i sprawdź nowe możliwości rozwoju, które pojawiają się na horyzoncie właśnie dzisiejszego dnia.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Wystrzegaj się nudy oraz stagnacji, które mogą działać na Ciebie frustrująco i niepotrzebnie odbierać Ci siły. Nie bój się porzucić starych schematów, ponieważ to właśnie w zmianie drzemie Twój największy potencjał wzrostu.",
      "s": "Wolność jest decyzją",
      "fun": "Twoja potrzeba zmian jest dziś tak duża, że wyjście na zwykły spacer może skończyć się rezerwacją biletów w zupełnie nieznanym kierunku."
    },
    "6-8": {
      "z": "Bliźnięta",
      "l": 6,
      "e": "Szóstka ponownie zaprasza Cię do świata harmonii, gdzie miłość, troska i piękno stanowią najważniejsze drogowskazy dla serca. Zadbaj o to, by Twoje działania płynęły prosto z wnętrza i niosły ukojenie zarówno Tobie, jak i wszystkim bliskim.",
      "r": "Stwórz w swoim domu atmosferę pełną ciepła i spędź czas z osobami, które są dla Ciebie najważniejsze. Skup się na tworzeniu pięknych chwil, które wzmocnią Twoje więzi i dadzą Ci poczucie głębokiego bezpieczeństwa.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Unikaj brania na swoje barki zbyt wielu cudzych problemów, ponieważ każdy musi przejść swoją życiową drogę samodzielnie. Nie szukaj perfekcji tam, gdzie wystarczy po prostu szczera obecność i dobre, wspierające słowo.",
      "s": "Piękno jest aktem odwagi",
      "fun": "Twoja chęć opiekowania się światem sprawia, że nawet Twoje kwiaty doniczkowe czują się dziś wyjątkowo rozpieszczane."
    },
    "6-9": {
      "z": "Bliźnięta",
      "l": 7,
      "e": "Siódemka to czas głębokiej introspekcji, kiedy cisza staje się Twoim najbardziej lojalnym nauczycielem mądrości. Wyciszenie zewnętrznych bodźców pozwoli Ci usłyszeć odpowiedzi, których od dawna poszukiwałaś w świecie zewnętrznym.",
      "r": "Znajdź chwilę na medytację lub spokojną lekturę, która wzbogaci Twoje wnętrze i przyniesie spokój umysłu. Zaufaj swojej intuicji, ponieważ jej głos jest dzisiaj wyjątkowo czysty i klarowny.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Hałasu oraz powierzchownych rozrywek, które mogą rozproszyć Twoją uwagę i zabrać wypracowany z trudem spokój. Nie bój się pytań o sens własnej drogi, gdyż konfrontacja z nimi przynosi prawdziwe wyzwolenie i rozwój.",
      "s": "Pytanie jest ważniejsze niż odpowiedź",
      "fun": "Twoja aura tajemniczości sprawia, że bliscy zastanawiają się, czy właśnie nie odnalazłaś odpowiedzi na wszystkie zagadki wszechświata."
    },
    "6-10": {
      "z": "Bliźnięta",
      "l": 8,
      "e": "Ósemka powraca, by sprawdzić, jak radzisz sobie z manifestowaniem swojej siły w praktyce. Twoja sprawczość jest dziś na najwyższym poziomie, co pozwala Ci skutecznie domykać nawet najbardziej skomplikowane projekty finansowe.",
      "r": "Podejmij inicjatywę w sprawach zawodowych i nie bój się sięgać po należne Ci nagrody oraz publiczne uznanie. Buduj swój autorytet na fundamentach uczciwości i rzetelności, które zawsze były Twoją najmocniejszą stroną.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Nie podejmuj decyzji w pośpiechu ani pod wpływem negatywnych emocji, które mogłyby na chwilę zamglić Twój osąd. Wystrzegaj się arogancji, pamiętając, że prawdziwa moc przejawia się w spokoju i pewności działania.",
      "s": "Moc służy, nie dominuje",
      "fun": "Masz dziś spojrzenie liderki, przed którą ustępują nawet największe przeciwności losu i kolejki w osiedlowym sklepie."
    },
    "6-11": {
      "z": "Bliźnięta",
      "l": 9,
      "e": "Dziewiątka zaprasza Cię dzisiaj do szerokiego spojrzenia na swoje życie i domknięcia spraw, które wymagają ostatecznego uporządkowania. To czas wielkiej transformacji, w którym mądrość płynąca z doświadczenia pozwala Ci przygotować się na zupełnie nowe wyzwania.",
      "r": "Wybacz dawnym urazom i podziękuj przeszłości za wszystkie lekcje, które uczyniły Cię tak świadomą osobą. Podaruj sobie chwilę na podsumowanie dotychczasowych sukcesów i z wdzięcznością puść wolno to, co już Ci nie służy.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Nie trzymaj się kurczowo spraw, które przestały wspierać Twój naturalny wzrost oraz wewnętrzny spokój. Unikaj smutku po tym, co odchodzi, ponieważ każda zmiana jest konieczną obietnicą lepszej przyszłości.",
      "s": "Zamknij z gracją — otwórz z wdzięcznością",
      "fun": "Robisz dziś takie porządki emocjonalne, że nawet stare paragony w Twoim portfelu same proszą o godną i szybką utylizację."
    },
    "6-12": {
      "z": "Bliźnięta",
      "l": 1,
      "e": "Jedynka to świeża iskra inicjatywy, która po dniu podsumowań pozwala Ci z nową siłą wyznaczyć zupełnie nowy kierunek działań. Jesteś dzisiaj pionierką, która nie potrzebuje mapy, ponieważ Twoja wewnętrzna odwaga wskazuje Ci najwłaściwszą drogę.",
      "r": "Postaw na siebie i zainicjuj działanie, o którym do tej pory bałaś się głośno opowiadać innym. Zaufaj własnej sile przebicia i bądź pierwszą osobą, która z pełnym przekonaniem uwierzy w sukces Twojej nowej wizji.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Wystrzegaj się oglądania na opinie innych ludzi, ponieważ to Ty jesteś dzisiaj jedynym kapitanem swojego okrętu. Nie zwlekaj z decyzją, ponieważ energia początku sprzyja tym, którzy odważnie i bez wahania ruszają naprzód.",
      "s": "Twoja droga, Twój rytm",
      "fun": "Twój entuzjazm jest dziś tak wielki, że mogłabyś zainicjować nową modę, idąc po bułki w jednym bucie i z uśmiechem zwycięzcy."
    },
    "6-13": {
      "z": "Bliźnięta",
      "l": 2,
      "e": "Dwójka uczy nas, że największa siła drzemie w łagodności oraz umiejętności budowania trwałych mostów porozumienia między ludźmi. Twoja dyplomacja stanie się dziś kluczem, który otworzy przed Tobą drzwi do serc osób ważnych dla Twojego dobrostanu.",
      "r": "Szukaj porozumienia i pielęgnuj relacje oparte na zaufaniu oraz głębokim, intuicyjnym zrozumieniu potrzeb innych. Zaufaj swojej wrażliwości, która pozwoli Ci rozładować każde napięcie i wprowadzić harmonię w Twoje bezpośrednie otoczenie.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Unikaj rywalizacji oraz narzucania swojej woli, co mogłoby niepotrzebnie zburzyć kruchą atmosferę dzisiejszej zgody. Nie bój się prosić o wsparcie, ponieważ współpraca przyniesie Ci dzisiaj znacznie więcej korzyści niż samotna walka.",
      "s": "Delikatność to siła",
      "fun": "Jesteś dziś tak wyczulona na nastroje innych, że wiesz dokładnie, o czym marzą Twoi bliscy, zanim sami zdążą o tym pomyśleć."
    },
    "6-14": {
      "z": "Bliźnięta",
      "l": 3,
      "e": "Trójka to radosny taniec kreatywności, który zamienia każdy zwykły obowiązek w fascynującą przygodę pełną nowych inspiracji. Pozwól sobie na śmiech i lekkie podejście do życia, ponieważ radość jest najkrótszą drogą do uzdrowienia każdej sytuacji.",
      "r": "Wyraź siebie poprzez barwy, słowa lub gesty, które niosą ze sobą powiew czerwcowej, letniej świeżości. Dziel się swoim optymizmem, bo Twój szczery uśmiech ma dziś moc zarażania innych wyjątkowo dobrą energią.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Nadmiernego analizowania swoich ewentualnych potknięć, co mogłoby niepotrzebnie stłumić Twój naturalny, radosny entuzjazm. Nie pozwól, by pesymizm otoczenia zgasił Twój wewnętrzny blask, który dziś promieniuje wyjątkowo mocno.",
      "s": "Lżej znaczy dalej",
      "fun": "Twoja energia jest dziś tak słoneczna, że nawet kwiaty w wazonie wydają się nachylać w Twoją stronę, szukając źródła światła."
    },
    "6-15": {
      "z": "Bliźnięta",
      "l": 4,
      "e": "Czwórka przypomina o wartości solidnych fundamentów, na których budujemy poczucie własnego bezpieczeństwa oraz życiowej stabilizacji. Twoja systematyczność zostanie dziś doceniona, przynosząc Ci spokój oraz wielką satysfakcję z rzetelnie wykonanej pracy.",
      "r": "Skup się na dokończeniu rozpoczętych projektów i zadbaj o wzorowy porządek w sprawach wymagających Twojej uwagi. Buduj swoją przyszłość krok po kroku, ufając, że każda mała czynność przybliża Cię do wielkiego sukcesu.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Unikaj chaosu oraz podejmowania zbyt wielu wyzwań jednocześnie, co mogłoby niepotrzebnie rozproszyć Twoją cenną uwagę. Nie lekceważ zasad, które chronią Twoją stabilność i pomagają zachować pełną kontrolę nad rzeczywistością.",
      "s": "Solidność to poezja",
      "fun": "Twoja dzisiejsza miłość do porządku sprawia, że nawet spinacze w Twoim biurku ułożyły się w idealne, równe szeregi."
    },
    "6-16": {
      "z": "Bliźnięta",
      "l": 5,
      "e": "Piątka przynosi ożywczy powiew wolności i zachęca do wyjścia poza bezpieczną, ale czasem zbyt przewidywalną strefę komfortu. To doskonały dzień, abyś odważyła się na zmianę, która wprowadzi do Twojej codzienności nową, stymulującą energię.",
      "r": "Otwórz się na spontaniczne propozycje i pozwól sobie na odrobinę przygody, która odświeży Twój umysł. Zaryzykuj i sprawdź nowe możliwości rozwoju, które pojawiają się na horyzoncie właśnie dzisiejszego dnia.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Wystrzegaj się nudy oraz stagnacji, które mogą działać na Ciebie frustrująco i niepotrzebnie odbierać Ci siły witalne. Nie bój się porzucić starych schematów, ponieważ to właśnie w zmianie drzemie Twój największy potencjał wzrostu.",
      "s": "Wolność jest decyzją",
      "fun": "Twoja potrzeba zmian jest dziś tak duża, że wyjście na zwykły spacer może skończyć się rezerwacją biletów w zupełnie nieznanym kierunku."
    },
    "6-17": {
      "z": "Bliźnięta",
      "l": 6,
      "e": "Szóstka ponownie zaprasza Cię do świata harmonii, gdzie miłość, troska i piękno stanowią najważniejsze drogowskazy dla serca. Zadbaj o to, by Twoje działania płynęły prosto z wnętrza i niosły ukojenie zarówno Tobie, jak i wszystkim bliskim.",
      "r": "Stwórz w swoim domu atmosferę pełną ciepła i spędź czas z osobami, które są dla Ciebie najważniejsze. Skup się na tworzeniu pięknych chwil, które wzmocnią Twoje więzi i dadzą Ci poczucie głębokiego bezpieczeństwa.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Unikaj brania na swoje barki zbyt wielu cudzych problemów, ponieważ każdy musi przejść swoją życiową drogę samodzielnie. Nie szukaj perfekcji tam, gdzie wystarczy po prostu szczera obecność i dobre, wspierające słowo płynące z duszy.",
      "s": "Piękno jest aktem odwagi",
      "fun": "Twoja chęć opiekowania się światem sprawia, że nawet Twoje kwiaty doniczkowe czują się dziś wyjątkowo rozpieszczane i kochane."
    },
    "6-18": {
      "z": "Bliźnięta",
      "l": 7,
      "e": "Siódemka to czas głębokiej introspekcji, kiedy cisza staje się Twoim najbardziej lojalnym nauczycielem życiowej mądrości. Wyciszenie zewnętrznych bodźców pozwoli Ci usłyszeć odpowiedzi, których od dawna poszukiwałaś w świecie zewnętrznym.",
      "r": "Znajdź chwilę na medytację lub spokojną lekturę, która wzbogaci Twoje wnętrze i przyniesie spokój umysłu. Zaufaj swojej intuicji, ponieważ jej głos jest dzisiaj wyjątkowo czysty, klarowny i godny pełnego zaufania.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Hałasu oraz powierzchownych rozrywek, które mogą rozproszyć Twoją uwagę i zabrać wypracowany z trudem spokój. Nie bój się pytań o sens własnej drogi, gdyż konfrontacja z nimi przynosi prawdziwe wyzwolenie i rozwój.",
      "s": "Pytanie jest ważniejsze niż odpowiedź",
      "fun": "Twoia aura tajemniczości sprawia, że bliscy zastanawiają się, czy właśnie nie odnalazłaś odpowiedzi na wszystkie zagadki wszechświata przy porannej herbacie."
    },
    "6-19": {
      "z": "Bliźnięta",
      "l": 8,
      "e": "Ósemka wzywa Cię do wykazania się siłą charakteru oraz odwagą w zarządzaniu własnymi zasobami i energią życiową. Twoja sprawczość jest dziś na najwyższym poziomie, co pozwala Ci skutecznie domykać nawet najbardziej skomplikowane projekty.",
      "r": "Podejmij inicjatywę w sprawach zawodowych i nie bój się sięgać po należne Ci nagrody oraz publiczne uznanie. Buduj swój autorytet na fundamentach uczciwości i rzetelności, które zawsze były Twoją najmocniejszą stroną.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Nie podejmuj decyzji w pośpiechu ani pod wpływem negatywnych emocji, które mogłyby na chwilę zamglić Twój osąd. Wystrzegaj się arogancji, pamiętając, że prawdziwa moc przejawia się w spokoju i pewności podejmowanych działań.",
      "s": "Moc służy, nie dominuje",
      "fun": "Masz dziś spojrzenie liderki, przed którą ustępują nawet największe przeciwności losu i kolejki w osiedlowym sklepie."
    },
    "6-20": {
      "z": "Bliźnięta",
      "l": 9,
      "e": "Dziewiątka zamyka tę dekadę w tonie mądrości i przygotowania na nadchodzące przesilenie letnie. To doskonały moment na wyciągnięcie wniosków z minionych dni i zrobienie miejsca na nową energię, którą przyniesie najdłuższy dzień roku.",
      "r": "Dokończ wszystkie rozpoczęte sprawy i z wdzięcznością pożegnaj to, co w Twoim życiu już się dopełniło. Podaruj sobie chwilę na podziękowanie losowi za wszystkie lekcje, które odebrałaś w ciągu minionej dekady.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Nie trzymaj się kurczowo spraw, które już nie służą Twojemu rozwojowi, lecz otwórz dłonie, by przyjąć nowe dary od losu. Unikaj smutku po tym, co odchodzi, ponieważ każda zmiana jest koniecznym krokiem ku lepszemu i pełniejszemu życiu.",
      "s": "Zamknij z gracją — otwórz z wdzięcznością",
      "fun": "Jesteś dziś jak mądra sowa kończąca ważny rozdział swojej księgi, gotowa na zupełnie nową i fascynującą przygodę."
    },
    "6-21": {
      "z": "Rak",
      "l": 1,
      "e": "Przesilenie letnie wita Cię energią Jedynki, która jest jak najjaśniejszy promień słońca wskazujący nowy kierunek. To potężny moment, abyś z pełną odwagą zainicjowała zmiany, które od dawna kiełkowały w Twojej wyobraźni.",
      "r": "Postaw na siebie i podejmij samodzielną decyzję dotyczącą Twojej najbliższej przyszłości. Zaufaj swojej sile przebicia i stań się pionierką we własnym życiu, nie czekając na znaki z zewnątrz.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Wystrzegaj się bierności oraz szukania akceptacji u osób, które nie rozumieją Twojego wewnętrznego ognia. Nie bój się działać w pojedynkę, ponieważ to Ty jesteś dzisiaj autentycznym liderem własnego losu.",
      "s": "Twoja droga, Twój rytm",
      "fun": "Masz dziś w sobie tyle energii, że mogłabyś zasilić całą okolicę samą chęcią do działania."
    },
    "6-22": {
      "z": "Rak",
      "l": 2,
      "e": "Dwójka przynosi energię łagodności, która po dynamicznym przesileniu pomaga odnaleźć równowagę w relacjach. To czas, w którym Twoja intuicja staje się czułym radarem, pozwalającym bezbłędnie wyczuć nastroje i potrzeby innych ludzi.",
      "r": "Szukaj porozumienia i buduj mosty tam, gdzie do tej pory panował dystans lub niepotrzebne napięcie. Pielęgnuj współpracę i doceniaj drobne gesty, które budują poczucie wspólnoty i wzajemnego zaufania.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Unikaj rywalizacji oraz narzucania swojej woli, co mogłoby zburzyć kruchą atmosferę dzisiejszej zgody. Nie izoluj się od bliskich, ponieważ to właśnie w kontakcie z nimi odnajdziesz dzisiaj najwięcej spokoju.",
      "s": "Delikatność to siła",
      "fun": "Jesteś dziś tak empatyczna, że wiesz dokładnie, o czym marzy Twój partner, zanim on sam zdąży o tym pomyśleć."
    },
    "6-23": {
      "z": "Rak",
      "l": 3,
      "e": "Trójka w Dniu Ojca to radosna celebracja, która zamienia każde spotkanie w barwne i pełne inspiracji wydarzenie. Pozwól sobie na śmiech i lekkie podejście do życia, ponieważ radość jest najkrótszą drogą do serca drugiego człowieka.",
      "r": "Wyraź swoją wdzięczność poprzez słowa pełne ciepła lub radosny gest płynący prosto z wnętrza. Dziel się optymizmem i zainspiruj innych do dostrzegania piękna w najprostszych, codziennych chwilach.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Zamartwiania się na zapas sprawami, na które i tak nie masz dzisiaj realnego wpływu. Nie tłum swojej kreatywności i pozwól jej swobodnie rozkwitnąć w każdym działaniu, które dziś podejmiesz.",
      "s": "Lżej znaczy dalej",
      "fun": "Twoja radość życia jest dziś tak zaraźliwa, że nawet najbardziej poważne rozmowy kończą się wspólnym uśmiechem."
    },
    "6-24": {
      "z": "Rak",
      "l": 4,
      "e": "Czwórka przypomina, że stabilność to poezja konkretnego działania, które wymaga systematyczności i cierpliwości. Budowanie trwałych fundamentów pod Twoje letnie plany to proces, który właśnie teraz wymaga rzetelnego podejścia.",
      "r": "Skup się na domykaniu spraw urzędowych lub domowych, które wymagają szczególnej dbałości o szczegóły. Postaw na porządek w swoim otoczeniu, ponieważ zewnętrzny ład zawsze sprzyja klarowności Twoich myśli.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Nagłych i nieprzemyślanych zmian, które mogłyby niepotrzebnie naruszyć Twoje wypracowane poczucie bezpieczeństwa. Nie ulegaj chaosowi, gdyż rzetelność i konsekwencja są dziś Twoimi najsilniejszymi sprzymierzeńcami.",
      "s": "Solidność to poezja",
      "fun": "Twoja organizacja pracy jest dziś tak doskonała, że nawet czas wydaje się płynąć pod Twoje dyktando."
    },
    "6-25": {
      "z": "Rak",
      "l": 5,
      "e": "Piątka przynosi powiew wolności i zachęca do wyjścia poza ramy codziennych, czasem zbyt ciasnych schematów. To doskonały dzień, abyś odważyła się na odrobinę spontaniczności, która odświeży Twój umysł i serce.",
      "r": "Zaakceptuj pojawiające się propozycje zmian i otwórz się na nowe, fascynujące znajomości. Wybierz inną drogę do celu niż zwykle, aby poczuć dreszcz emocji płynący z odkrywania nieznanego.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Monotonii oraz lęku przed tym, co nowe i jeszcze nie do końca przez Ciebie oswojone. Nie trzymaj się kurczowo planów, jeśli życie podsuwa Ci dzisiaj znacznie ciekawsze i bardziej barwne alternatywy.",
      "s": "Wolność jest decyzją",
      "fun": "Twoja potrzeba wolności jest dziś tak silna, że wyjście po zakupy może skończyć się dłuższą wycieczką."
    },
    "6-26": {
      "z": "Rak",
      "l": 6,
      "e": "Szóstka zaprasza do budowania oazy harmonii, w której miłość i troska o bliskich stają się priorytetem dnia. Twój dom stanie się dzisiaj źródłem wielkiej siły, o ile tylko zadbasz o piękno i wzajemny szacunek domowników.",
      "r": "Stwórz w swoim otoczeniu atmosferę pełną ciepła i spędź wartościowy czas z osobami, które kochasz. Skup się na pielęgnowaniu więzi, które dają Ci poczucie bycia potrzebną i w pełni akceptowaną.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Brania na swoje barki zbyt wielu cudzych problemów, co mogłoby odebrać Ci radość z własnego spokoju. Wystrzegaj się perfekcjonizmu, ponieważ szczera obecność jest ważniejsza niż idealnie przygotowana kolacja.",
      "s": "Piękno jest aktem odwagi",
      "fun": "Twoja aura opiekuńczości jest dziś tak silna, że nawet kaktusy w Twoim domu czują się rozpieszczane."
    },
    "6-27": {
      "z": "Rak",
      "l": 7,
      "e": "Siódemka to czas głębokiej introspekcji, kiedy cisza staje się najbardziej lojalnym i mądrym doradcą Twojej duszy. Wyciszenie bodźców zewnętrznych pozwoli Ci usłyszeć odpowiedzi, których do tej pory bezskutecznie szukałaś w zgiełku.",
      "r": "Znajdź chwilę na medytację lub lekturę, która wzbogaci Twoje wnętrze i przyniesie upragniony spokój. Zaufaj intuicji, ponieważ jej głos jest dzisiaj wyjątkowo czysty i wolny od wszelkich zbędnych filtrów.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Hałasu oraz powierzchownych rozrywek, które mogą rozproszyć Twoją uwagę i zabrać wypracowany w ciszy ład. Nie uciekaj przed pytaniami o sens swojej drogi, gdyż konfrontacja z nimi przynosi prawdziwe wyzwolenie.",
      "s": "Pytanie jest ważniejsze niż odpowiedź",
      "fun": "Twoje spojrzenie jest dziś tak przenikliwe, że bliscy zastanawiają się, czy właśnie nie odkryłaś tajemnicy wszechświata."
    },
    "6-28": {
      "z": "Rak",
      "l": 8,
      "e": "Ósemka przynosi energię manifestacji siły, która pozwala realnie wpływać na Twoją sytuację materialną i zawodową. Twoja determinacja jest dziś wspierana przez sprawczość, co czyni Cię niezwykle skuteczną w każdym podjętym działaniu.",
      "r": "Podejmij konkretne kroki w stronę realizacji swoich ambicji i zaufaj swojemu wypracowanemu autorytetowi. Buduj swoją obfitość na fundamencie uczciwości, co zapewni Ci trwałe i satysfakcjonujące rezultaty na lata.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Podejmowania ważnych decyzji pod wpływem lęku przed brakiem, zamiast czerpać siłę z poczucia własnej wartości. Wystrzegaj się arogancji, pamiętając, że prawdziwa moc nie potrzebuje krzyku, by zostać w pełni zauważoną.",
      "s": "Moc służy, nie dominuje",
      "fun": "Masz dziś spojrzenie liderki, przed którą ustępują nawet największe przeciwności losu i biurokratyczne przeszkody."
    },
    "6-29": {
      "z": "Rak",
      "l": 9,
      "e": "Dziewiątka przypomina, że mądrość polega na umiejętności domykania etapów, które przestały służyć Twojemu wzrostowi. To czas wielkiej transformacji, który przygotowuje Cię na przyjęcie zupełnie nowych, fascynujących impulsów od losu.",
      "r": "Wybacz dawnym urazom i puść wolno wszystko, co blokuje Twoją naturalną, wewnętrzną wolność. Podziękuj przeszłości za wszystkie lekcje, uznając je za cenne paliwo dla Twojej dalszej, inspirującej drogi.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Kurczowego trzymania się tego, co już nieodwołalnie odeszło, ponieważ blokuje to Twój naturalny proces odrodzenia. Nie ulegaj smutkowi, bo każde zakończenie jest radosną obietnicą nowego, wspaniałego i świetlistego świtu.",
      "s": "Zamknij z gracją — otwórz z wdzięcznością",
      "fun": "Robisz dziś takie porządki emocjonalne, że nawet stare paragony w portfelu same proszą o godną utylizację."
    },
    "6-30": {
      "z": "Rak",
      "l": 1,
      "e": "Jedynka zamyka czerwiec mocnym akcentem nowej inicjatywy, zachęcając do stanięcia w pełnym blasku własnych możliwości. To dzień, w którym każda Twoja odważna myśl ma moc stania się początkiem nowej, wakacyjnej historii.",
      "r": "Wykaż się samodzielnością i podejmij ryzyko związane z realizacją autorskiego, śmiałego pomysłu. Zaufaj swojej sile przebicia i bądź pierwszą osobą, która bez wahania uwierzy w Twoje dzisiejsze zwycięstwo.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Oglądania się na opinie innych i czekania na ich zgodę, ponieważ to Ty jesteś kapitanem tego okrętu. Nie zwlekaj z działaniem, gdyż dzisiejsza energia sprzyja tym, którzy odważnie ruszają naprzód ku słońcu.",
      "s": "Twoja droga, Twój rytm",
      "fun": "Twój entuzjazm jest dziś tak wielki, że mogłabyś zainicjować nową modę, idąc po prostu w jednym bucie."
    },
    "7-1": {
      "z": "Rak",
      "l": 9,
      "e": "Dziewiątka otwiera lipiec energią domykania i głębokiego podsumowania, co pozwala z lekkim sercem wejść w drugą połowę roku. To czas wielkoduszności, w którym mądrość płynąca z doświadczenia staje się Twoim najcenniejszym kompasem.",
      "r": "Podziękuj za lekcje minionych miesięcy i z wdzięcznością puść wolno to, co już Ci nie służy. Otwórz się na pomaganie innym, znajdując w bezinteresowności spokój i przygotowanie do nowego cyklu.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Nie trzymaj się kurczowo przeszłości, ponieważ blokuje to Twój naturalny przepływ i gotowość na wakacyjne dary losu. Unikaj smutku po tym, co odchodzi, uznając to za konieczne miejsce na nadchodzące zmiany.",
      "s": "Koniec to też dar",
      "fun": "Robisz dziś takie porządki, że nawet stare zdjęcia z ubiegłorocznych wakacji same układają się w uporządkowane, sentymentalne albumy."
    },
    "7-2": {
      "z": "Rak",
      "l": 1,
      "e": "Jedynka to świeża iskra inicjatywy, która po dniu podsumowań pozwala Ci z nową siłą wyznaczyć wakacyjny kierunek działań. Jesteś dzisiaj pionierką, która nie potrzebuje mapy, ponieważ Twoja wewnętrzna odwaga wskazuje Ci najwłaściwszą drogę.",
      "r": "Postaw na siebie i zainicjuj działanie, o którym do tej pory bałaś się głośno opowiadać. Zaufaj własnej sile przebicia i bądź pierwszą osobą, która z pełnym przekonaniem uwierzy w sukces Twojej nowej wizji.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Wystrzegaj się oglądania na opinie innych ludzi, gdyż dzisiaj to Ty jesteś jedynym kapitanem tego okrętu. Nie zwlekaj z decyzją, ponieważ energia początku sprzyja tym, którzy odważnie i zdecydowanie ruszają naprzód.",
      "s": "Pierwsza linia należy do Ciebie",
      "fun": "Twój entuzjazm jest dziś tak wielki, że mogłabyś zainicjować nową modę na plażowanie, idąc po prostu po lody w jednym bucie i z uśmiechem zwycięzcy."
    },
    "7-3": {
      "z": "Rak",
      "l": 2,
      "e": "Dwójka uczy nas, że największa siła drzemie w łagodności oraz umiejętności budowania mostów między ludźmi. Twoja dyplomacja stanie się dziś kluczem, który otworzy przed Tobą drzwi do serc osób ważnych dla Twojego letniego spokoju.",
      "r": "Szukaj porozumienia i pielęgnuj relacje oparte na zaufaniu oraz głębokim, intuicyjnym zrozumieniu potrzeb innych. Zaufaj swojej wrażliwości, która pozwoli Ci rozładować każde napięcie i wprowadzić harmonię w Twoje otoczenie.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Unikaj rywalizacji oraz narzucania swojej woli, co mogłoby zburzyć kruchą atmosferę dzisiejszej zgody. Nie bój się prosić o wsparcie, ponieważ współpraca przyniesie Ci dziś znacznie więcej korzyści niż samotność.",
      "s": "W ciszy słychać więcej",
      "fun": "Jesteś dziś tak wyczulona na nastroje innych, że wiesz dokładnie, o jaki smak gofra poproszą Twoi bliscy, zanim sami o tym pomyślą."
    },
    "7-4": {
      "z": "Rak",
      "l": 3,
      "e": "Trójka to radosny taniec kreatywności, który zamienia każdy letni obowiązek w fascynującą przygodę pełną inspiracji. Pozwól sobie na śmiech i lekkie podejście do życia, ponieważ radość jest najkrótszą drogą do uzdrowienia każdej sytuacji.",
      "r": "Wyraź siebie poprzez barwy, słowa lub gesty, które niosą ze sobą powiew lipcowej świeżości. Dziel się swoim optymizmem, bo Twój szczery uśmiech ma dziś moc zarażania innych wyjątkowo dobrą energią.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Nadmiernego analizowania swoich potknięć, co mogłoby niepotrzebnie stłumić Twój naturalny, radosny entuzjazm. Nie pozwól, by pesymizm otoczenia zgasił Twój wewnętrzny blask, który dziś promieniuje wyjątkowo mocno.",
      "s": "Śmiech to najkrótsza droga do serca",
      "fun": "Twoja energia jest dziś tak słoneczna, że nawet słońce nad horyzontem wydaje się świecić specjalnie dla Ciebie i Twoich pomysłów."
    },
    "7-5": {
      "z": "Rak",
      "l": 4,
      "e": "Czwórka przypomina o wartości solidnych fundamentów, na których budujemy poczucie własnego bezpieczeństwa i stabilizacji. Twoja systematyczność zostanie dziś doceniona, przynosząc Ci spokój oraz satysfakcję z rzetelnie wykonanej pracy.",
      "r": "Skup się na dokończeniu rozpoczętych projektów i zadba o wzorowy porządek w sprawach wymagających uwagi. Buduj swoją przyszłość krok po kroku, ufając, że każda mała czynność przybliża Cię do wielkiego sukcesu.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Unikaj chaosu oraz podejmowania zbyt wielu wyzwań jednocześnie, co mogłoby niepotrzebnie rozproszyć Twoją cenną uwagę. Nie lekceważ zasad, które chronią Twoją stabilność i pomagają zachować pełną kontrolę nad rzeczywistością.",
      "s": "Fundament nie hałasuje — ale wszystko na nim stoi",
      "fun": "Twoja dzisiejsza miłość do porządku sprawia, że nawet kamyki na plaży chciałabyś ułożyć według rozmiaru i odcienia."
    },
    "7-6": {
      "z": "Rak",
      "l": 5,
      "e": "Piątka przynosi ożywczy powiew wolności i zachęca do wyjścia poza bezpieczną, ale czasem zbyt przewidywalną strefę komfortu. To doskonały dzień, abyś odważyła się na zmianę, która wprowadzi do Twojej codzienności nową, wakacyjną energię.",
      "r": "Otwórz się na spontaniczne propozycje i pozwól sobie na odrobinę przygody, która odświeży Twój umysł. Zaryzykuj i sprawdź nowe możliwości rozwoju, które pojawiają się na horyzoncie właśnie dzisiejszego dnia.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Wystrzegaj się nudy oraz stagnacji, które mogą działać na Ciebie frustrująco i niepotrzebnie odbierać Ci siły. Nie bój się porzucić starych schematów, ponieważ to właśnie w zmianie drzemie Twój największy potencjał wzrostu.",
      "s": "Wiatr nie pyta — on po prostu wieje",
      "fun": "Twoja potrzeba zmian jest dziś tak duża, że wyjście na spacer może skończyć się spontaniczną wycieczką w zupełnie nieznanym kierunku."
    },
    "7-7": {
      "z": "Rak",
      "l": 6,
      "e": "Szóstka ponownie zaprasza Cię do świata harmonii, gdzie miłość, troska i piękno stanowią najważniejsze drogowskazy dla serca. Zadbaj o to, by Twoje działania płynęły prosto z wnętrza i niosły ukojenie zarówno Tobie, jak i wszystkim bliskim.",
      "r": "Stwórz w swoim domu atmosferę pełną ciepła i spędź czas z osobami, które są dla Ciebie najważniejsze. Skup się na tworzeniu pięknych chwil, które wzmocnią Twoje więzi i dadzą Ci poczucie głębokiego bezpieczeństwa.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Unikaj brania na swoje barki zbyt wielu cudzych problemów, ponieważ każdy musi przejść swoją drogę samodzielnie. Nie szukaj perfekcji tam, gdzie wystarczy po prostu szczera obecność i dobre, wspierające słowo.",
      "s": "Dom to miejsce gdzie serce oddycha",
      "fun": "Twoja chęć opiekowania się światem sprawia, że nawet kwiaty w Twoim ogrodzie czują się dziś wyjątkowo rozpieszczane."
    },
    "7-8": {
      "z": "Rak",
      "l": 7,
      "e": "Siódemka to czas głębokiej introspekcji, kiedy cisza staje się Twoim najbardziej lojalnym nauczycielem mądrości. Wyciszenie zewnętrznych bodźców pozwoli Ci usłyszeć odpowiedzi, których od dawna poszukiwałaś w wakacyjnym zgiełku.",
      "r": "Znajdź chwilę na medytację lub spokojną lekturę, która wzbogaci Twoje wnętrze i przyniesie spokój umysłu. Zaufaj swojej intuicji, ponieważ jej głos jest dzisiaj wyjątkowo czysty i klarowny.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Hałasu oraz powierzchownych rozrywek, które mogą rozproszyć Twoją uwagę i zabrać wypracowany z trudem ład. Nie bój się pytań o sens własnej drogi, gdyż konfrontacja z nimi przynosi prawdziwe wyzwolenie.",
      "s": "W ciszy mieszka mądrość",
      "fun": "Twoja aura tajemniczości sprawia, że bliscy zastanawiają się, czy właśnie nie odkryłaś nowej definicji letniego wypoczynku."
    },
    "7-9": {
      "z": "Rak",
      "l": 8,
      "e": "Ósemka powraca, by sprawdzić, jak radzisz sobie z manifestowaniem swojej siły w praktyce. Twoja sprawczość jest dziś na najwyższym poziomie, co pozwala Ci skutecznie domykać nawet najbardziej skomplikowane projekty zawodowe.",
      "r": "Podejmij inicjatywę w sprawach istotnych i nie bój się sięgać po należne Ci nagrody oraz publiczne uznanie. Buduj swój autorytet na fundamentach uczciwości i rzetelności, które zawsze były Twoją najmocniejszą stroną.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Nie podejmuj decyzji w pośpiechu ani pod wpływem negatywnych emocji, które mogłyby na chwilę zamglić Twój osąd. Wystrzegaj się arogancji, pamiętając, że prawdziwa moc przejawia się w spokoju i pewności działania.",
      "s": "Siła z wartości, nie z ego",
      "fun": "Masz dziś spojrzenie liderki, przed którą ustępują nawet największe przeciwności losu i kolejki do letnich atrakcji."
    },
    "7-10": {
      "z": "Rak",
      "l": 9,
      "e": "Dziewiątka zamyka tę dekadę energią szerokiego spojrzenia i przygotowania na to, co przyniosą kolejne letnie dni. To czas transformacji, w którym mądrość płynąca z domykania etapów daje Ci poczucie wolności i spełnienia.",
      "r": "Dokończ wszystkie rozpoczęte sprawy i z wdzięcznością pożegnaj to, co w Twoim życiu już się dopełniło. Podaruj sobie chwilę na podziękowanie losowi za wszystkie lekcje, które odebrałaś w ciągu minionych dziesięciu dni.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Nie trzymaj się kurczowo spraw, które już nie służą Twojemu rozwojowi, lecz otwórz dłonie, by przyjąć nowe dary. Unikaj smutku po tym, co odchodzi, ponieważ każda zmiana jest koniecznym krokiem ku lepszemu życiu.",
      "s": "Koniec to też dar",
      "fun": "Jesteś dziś jak mądra sowa kończąca ważny rozdział, gotowa na zupełnie nową i fascynującą przygodę."
    },
    "7-11": {
      "z": "Rak",
      "l": 1,
      "e": "Jedynka po raz kolejny rozpala iskrę nowej inicjatywy, zachęcając Cię do odważnego wyjścia przed szereg i zamanifestowania swojej autentyczności. To dzień, w którym każda Twoja pionierska myśl ma moc stania się początkiem nowej, fascynującej drogi.",
      "r": "Postaw na siebie i podejmij samodzielną decyzję w sprawach, które dotąd budziły Twoje wahanie. Zaufaj własnej sile przebicia i bądź pierwszą osobą, która z pełnym przekonaniem uwierzy w sukces Twojej nowej wizji.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Wystrzegaj się oglądania na opinie innych ludzi, ponieważ tylko Ty znasz właściwy kierunek swojej podróży. Nie zwlekaj z działaniem, gdyż dzisiejsza energia sprzyja tym, którzy odważnie i zdecydowanie ruszają w nieznane.",
      "s": "Pierwsza linia należy do Ciebie",
      "fun": "Twój entuzjazm jest dziś tak wielki, że mogłabyś zainicjować nową modę, idąc po prostu po lody w jednym bucie i z uśmiechem zwycięzcy."
    },
    "7-12": {
      "z": "Rak",
      "l": 2,
      "e": "Dwójka uczy nas, że największa siła często drzemie w łagodności oraz umiejętności słuchania drugiego człowieka. Twoja dyplomacja stanie się dziś kluczem, który otworzy przed Tobą drzwi do serc osób ważnych dla Twojego spokoju.",
      "r": "Szukaj porozumienia i buduj mosty tam, gdzie do tej pory panował chłodny, nieprzyjemny dystans. Pielęgnuj swoją intuicję, ponieważ ona najlepiej podpowie Ci, jak zachować równowagę w kontaktach z otoczeniem.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Unikaj rywalizacji oraz narzucania swojej woli, co mogłoby zburzyć kruchą atmosferę dzisiejszej zgody. Nie bój się prosić o wsparcie, ponieważ współpraca przyniesie Ci dziś znacznie więcej korzyści niż samotna walka.",
      "s": "W ciszy słychać więcej",
      "fun": "Jesteś dziś tak wyczulona na nastroje innych, że wiesz dokładnie, o czym marzą Twoi bliscy, zanim sami o tym pomyślą."
    },
    "7-13": {
      "z": "Rak",
      "l": 3,
      "e": "Trójka to radosny taniec kreatywności, który zamienia każdy wakacyjny obowiązek w barwną przygodę pełną nowych inspiracji. Pozwól sobie na śmiech i lekkie podejście do życia, ponieważ radość jest najkrótszą drogą do uzdrowienia każdej sytuacji.",
      "r": "Wyraź swoje emocje poprzez barwy, słowa lub gesty, które niosą ze sobą powiew lipcowej świeżości. Dziel się swoim optymizmem, bo Twój szczery uśmiech ma dziś moc zarażania innych wyjątkowo dobrą energią.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Nadmiernego analizowania swoich ewentualnych potknięć, co mogłoby niepotrzebnie stłumić Twój naturalny, radosny entuzjazm. Nie pozwól, by pesymizm otoczenia zgasił Twój wewnętrzny blask, który dziś promieniuje wyjątkowo mocno.",
      "s": "Śmiech to najkrótsza droga do serca",
      "fun": "Twoja energia jest dziś tak słoneczna, że nawet słońce nad horyzontem wydaje się świecić specjalnie dla Twoich pomysłów."
    },
    "7-14": {
      "z": "Rak",
      "l": 4,
      "e": "Czwórka przypomina o wartości solidnych fundamentów, na których budujemy poczucie własnego bezpieczeństwa oraz stabilizacji. Twoja systematyczność zostanie dziś doceniona, przynosząc Ci spokój oraz wielką satysfakcję z rzetelnie wykonanej pracy.",
      "r": "Skup się na dokończeniu rozpoczętych projektów i zadbaj o wzorowy porządek w sprawach wymagających uwagi. Buduj swoją przyszłość krok po kroku, ufając, że każda mała czynność przybliża Cię do wielkiego sukcesu.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Unikaj chaosu oraz podejmowania zbyt wielu wyzwań jednocześnie, co mogłoby niepotrzebnie rozproszyć Twoją cenną uwagę. Nie lekceważ zasad, które chronią Twoją stabilność i pomagają zachować pełną kontrolę nad rzeczywistością.",
      "s": "Fundament nie hałasuje — ale wszystko na nim stoi",
      "fun": "Twoja dzisiejsza miłość do porządku sprawia, że nawet kamyki na plaży chciałabyś ułożyć według rozmiaru i odcienia."
    },
    "7-15": {
      "z": "Rak",
      "l": 5,
      "e": "Piątka przynosi powiew wolności i zachęca do wyjścia poza bezpieczną, ale czasem zbyt przewidywalną strefę komfortu. To doskonały dzień, abyś odważyła się na zmianę, która wprowadzi do Twojej codzienności nową, stymulującą energię.",
      "r": "Otwórz się na spontaniczne propozycje i pozwól sobie na odrobinę przygody, która odświeży Twój umysł. Zaryzykuj i sprawdź nowe możliwości rozwoju, które pojawiają się na horyzoncie właśnie dzisiejszego dnia.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Wystrzegaj się nudy oraz stagnacji, które mogą działać na Ciebie frustrująco i niepotrzebnie odbierać Ci siły. Nie bój się porzucić starych schematów, ponieważ to właśnie w zmianie drzemie Twój największy potencjał wzrostu.",
      "s": "Wiatr nie pyta — on po prostu wieje",
      "fun": "Twoja potrzeba zmian jest dziś tak duża, że wyjście na zwykły spacer może skończyć się rezerwacją biletów w zupełnie nieznanym kierunku."
    },
    "7-16": {
      "z": "Rak",
      "l": 6,
      "e": "Szóstka ponownie zaprasza Cię do świata harmonii, gdzie miłość, troska i piękno stanowią najważniejsze drogowskazy dla serca. Zadbaj o to, by Twoje działania płynęły prosto z wnętrza i niosły ukojenie zarówno Tobie, jak i wszystkim bliskim.",
      "r": "Stwórz w swoim domu atmosferę pełną ciepła i spędź czas z osobami, które są dla Ciebie najważniejsze. Skup się na tworzeniu pięknych chwil, które wzmocnią Twoje więzi i dadzą Ci poczucie głębokiego bezpieczeństwa.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Unikaj brania na swoje barki zbyt wielu cudzych problemów, ponieważ każdy musi przejść swoją życiową drogę samodzielnie. Nie szukaj perfekcji tam, gdzie wystarczy po prostu szczera obecność i dobre, wspierające słowo.",
      "s": "Dom to miejsce gdzie serce oddycha",
      "fun": "Twoja chęć opiekowania się światem sprawia, że nawet kwiaty w Twoim ogrodzie czują się dziś wyjątkowo rozpieszczane."
    },
    "7-17": {
      "z": "Rak",
      "l": 7,
      "e": "Siódemka to czas głębokiej introspekcji, kiedy cisza staje się Twoim najbardziej lojalnym nauczycielem życiowej mądrości. Wyciszenie zewnętrznych bodźców pozwoli Ci usłyszeć odpowiedzi, których od dawna poszukiwałaś w świecie zewnętrznym.",
      "r": "Znajdź chwilę na medytację lub spokojną lekturę, która wzbogaci Twoje wnętrze i przyniesie spokój umysłu. Zaufaj swojej intuicji, ponieważ jej głos jest dzisiaj wyjątkowo czysty, klarowny i godny pełnego zaufania.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Hałasu oraz powierzchownych rozrywek, które mogą rozproszyć Twoją uwagę i zabrać wypracowany z trudem spokój. Nie bój się pytań o sens własnej drogi, gdyż konfrontacja z nimi przynosi prawdziwe wyzwolenie i rozwój.",
      "s": "W ciszy mieszka mądrość",
      "fun": "Twoja aura tajemniczości sprawia, że bliscy zastanawiają się, czy właśnie nie odnalazłaś odpowiedzi na wszystkie zagadki wszechświata przy porannej herbacie."
    },
    "7-18": {
      "z": "Rak",
      "l": 8,
      "e": "Ósemka wzywa Cię do wykazania się siłą charakteru oraz odwagą w zarządzaniu własnymi zasobami i energią życiową. Twoja sprawczość jest dziś na najwyższym poziomie, co pozwala Ci skutecznie domykać nawet najbardziej skomplikowane projekty.",
      "r": "Podejmij inicjatywę w sprawach zawodowych i nie bój się sięgać po należne Ci nagrody oraz publiczne uznanie. Buduj swój autorytet na fundamentach uczciwości i rzetelności, które zawsze były Twoją najmocniejszą stroną.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Nie podejmuj decyzji w pośpiechu ani pod wpływem negatywnych emocji, które mogłyby na chwilę zamglić Twój osąd. Wystrzegaj się arogancji, pamiętając, że prawdziwa moc przejawia się w spokoju i pewności podejmowanych działań.",
      "s": "Siła z wartości, nie z ego",
      "fun": "Masz dziś spojrzenie liderki, przed którą ustępują nawet największe przeciwności losu i kolejki w osiedlowym sklepie."
    },
    "7-19": {
      "z": "Rak",
      "l": 9,
      "e": "Dziewiątka zamyka tę dekadę w tonie mądrości i przygotowania na to, co przyniosą kolejne letnie dni. To czas transformacji, w którym mądrość płynąca z domykania etapów daje Ci poczucie wolności i wielkiej ulgi.",
      "r": "Dokończ wszystkie rozpoczęte sprawy i z wdzięcznością pożegnaj to, co w Twoim życiu już się dopełniło. Podaruj sobie chwilę na podziękowanie losowi za wszystkie lekcje, które odebrałaś w ciągu minionej dekady.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Nie trzymaj się kurczowo spraw, które już nie służą Twojemu rozwojowi, lecz otwórz dłonie, by przyjąć nowe dary od losu. Unikaj smutku po tym, co odchodzi, ponieważ każda zmiana jest koniecznym krokiem ku lepszemu i pełniejszemu życiu.",
      "s": "Koniec to też dar",
      "fun": "Jesteś dziś jak mądra sowa kończąca ważny rozdział swojej księgi, gotowa na zupełnie nową i fascynującą przygodę."
    },
    "7-20": {
      "z": "Rak",
      "l": 1,
      "e": "Jedynka rozpoczyna nową fazę lipca, zachęcając Cię do bycia architektką własnego losu z jeszcze większą pewnością siebie. Każda Twoja odważna myśl ma dziś moc stania się początkiem nowej, fascynującej, letniej historii.",
      "r": "Postaw na oryginalność i nie bój się zaprezentować światu swoich najbardziej śmiałych projektów. Zaufaj swojej sile przebicia i bądź pierwszą osobą, która z pełnym przekonaniem uwierzy w Twoje dzisiejsze zwycięstwo.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Wystrzegaj się naśladownictwa oraz szukania dróg na skróty, które mogłyby niepotrzebnie osłabić Twoją autentyczność. Nie bój się działać samodzielnie, ponieważ pionierzy często muszą przecierać szlaki bez oglądania się na opinie innych.",
      "s": "Pierwsza linia należy do Ciebie",
      "fun": "Twoja dawką czystej energii jest dziś tak wielka, że mogłabyś zasilić mały festiwal muzyczny samą swoją obecnością."
    },
    "7-21": {
      "z": "Rak",
      "l": 2,
      "e": "Dwójka przynosi energię łagodności, która w środku lata pomaga odnaleźć balans w relacjach z innymi ludźmi. To czas, w którym Twoja intuicja staje się wyjątkowo czuła, pozwalając Ci bezbłędnie wyczuć nastroje i potrzeby Twoich bliskich.",
      "r": "Szukaj porozumienia i buduj mosty tam, gdzie do tej pory panował dystans lub niepotrzebne napięcie. Pielęgnuj współpracę, ponieważ wspólne działanie przyniesie Ci dziś znacznie więcej radości niż samotność.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Rywalizacji oraz narzucania swojej woli, co mogłoby zburzyć kruchą atmosferę dzisiejszej zgody. Nie izoluj się od ludzi, gdyż to właśnie w kontakcie z nimi odnajdziesz dziś najwięcej spokoju.",
      "s": "W ciszy słychać więcej",
      "fun": "Jesteś dziś tak empatyczna, że wiesz dokładnie, o czym marzy Twój partner, zanim on sam zdąży o tym pomyśleć."
    },
    "7-22": {
      "z": "Rak",
      "l": 3,
      "e": "Trójka to radosna celebracja, która zamienia każde letnie spotkanie w barwne i pełne inspiracji wydarzenie. Pozwól sobie na śmiech oraz lekkie podejście do życia, ponieważ radość jest najkrótszą drogą do serca drugiego człowieka.",
      "r": "Wyraź swoją wdzięczność poprzez słowa pełne ciepła lub radosny gest płynący prosto z wnętrza. Dziel się optymizmem i zainspiruj innych do dostrzegania piękna w najprostszych, codziennych chwilach.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Zamartwiania się na zapas sprawami, na które i tak nie masz dzisiaj realnego wpływu. Nie tłum swojej kreatywności i pozwól jej swobodnie rozkwitnąć w każdym działaniu, które dziś podejmiesz.",
      "s": "Śmiech to najkrótsza droga do serca",
      "fun": "Twoja radość życia jest dziś tak zaraźliwa, że nawet najbardziej poważne rozmowy kończą się wspólnym uśmiechem."
    },
    "7-23": {
      "z": "Lew",
      "l": 4,
      "e": "Czwórka przypomina, że stabilność to poezja konkretnego działania, które wymaga systematyczności oraz cierpliwości. Budowanie trwałych fundamentów pod Twoje wakacyjne plany to proces, który właśnie teraz wymaga rzetelnego podejścia.",
      "r": "Skup się na domykaniu spraw, które wymagają szczególnej dbałości o szczegóły i porządek. Postaw na strukturę swojego dnia, ponieważ zewnętrzny ład zawsze sprzyja klarowności Twoich myśli.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Nagłych i nieprzemyślanych zmian, które mogłyby niepotrzebnie naruszyć Twoje wypracowane poczucie bezpieczeństwa. Nie ulegaj chaosowi, gdyż rzetelność i konsekwencja są dziś Twoimi najsilniejszymi sprzymierzeńcami.",
      "s": "Fundament nie hałasuje — ale wszystko na nim stoi",
      "fun": "Twoja organizacja pracy jest dziś tak doskonała, że nawet czas wydaje się płynąć dokładnie pod Twoje dyktando."
    },
    "7-24": {
      "z": "Lew",
      "l": 5,
      "e": "Piątka przynosi powiew wolności i zachęca do wyjścia poza ramy codziennych, czasem zbyt ciasnych schematów. To doskonały dzień, abyś odważyła się na odrobinę spontaniczności, która odświeży Twój umysł i serce.",
      "r": "Zaakceptuj pojawiające się propozycje zmian i otwórz się na nowe, fascynujące znajomości. Wybierz inną drogę do celu niż zwykle, aby poczuć dreszcz emocji płynący z odkrywania nieznanego.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Monotonii oraz lęku przed tym, co nowe i jeszcze nie do końca przez Ciebie oswojone. Nie trzymaj się kurczowo planów, jeśli życie podsuwa Ci dzisiaj znacznie ciekawsze i bardziej barwne alternatywy.",
      "s": "Wiatr nie pyta — on po prostu wieje",
      "fun": "Twoja potrzeba wolności jest dziś tak silna, że wyjście po lody może skończyć się spontaniczną wycieczką nad jezioro."
    },
    "7-25": {
      "z": "Lew",
      "l": 6,
      "e": "Szóstka zaprasza do budowania oazy harmonii, w której miłość i troska o bliskich stają się absolutnym priorytetem dnia. Twój dom stanie się dzisiaj źródłem wielkiej siły, o ile tylko zadbasz o piękno i wzajemny szacunek.",
      "r": "Stwórz w swoim otoczeniu atmosferę pełną ciepła i spędź wartościowy czas z osobami, które kochasz. Skup się na pielęgnowaniu więzi, które dają Ci poczucie bycia potrzebną i w pełni akceptowaną.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Brania na swoje barki zbyt wielu cudzych problemów, co mogłoby odebrać Ci radość z własnego spokoju. Wystrzegaj się perfekcjonizmu, ponieważ szczera obecność jest ważniejsza niż idealnie przygotowane otoczenie.",
      "s": "Dom to miejsce gdzie serce oddycha",
      "fun": "Twoja aura opiekuńczości jest dziś tak silna, że nawet kaktusy w Twoim domu czują się rozpieszczane."
    },
    "7-26": {
      "z": "Lew",
      "l": 7,
      "e": "Siódemka to czas głębokiej introspekcji, kiedy cisza staje się najbardziej lojalnym i mądrym doradcą Twojej duszy. Wyciszenie bodźców zewnętrznych pozwoli Ci usłyszeć odpowiedzi, których do tej pory bezskutecznie szukałaś w zgiełku.",
      "r": "Znajdź chwilę na medytację lub lekturę, która wzbogaci Twoje wnętrze i przyniesie upragniony spokój. Zaufaj intuicji, ponieważ jej głos jest dzisiaj wyjątkowo czysty i wolny od zbędnego hałasu.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Hałasu oraz powierzchownych rozrywek, które mogą rozproszyć Twoją uwagę i zabrać wypracowany w ciszy ład. Nie uciekaj przed pytaniami o sens swojej drogi, gdyż konfrontacja z nimi przynosi prawdziwe wyzwolenie.",
      "s": "W ciszy mieszka mądrość",
      "fun": "Twoje spojrzenie jest dziś tak przenikliwe, że bliscy zastanawiają się, czy właśnie nie odkryłaś tajemnicy wszechświata."
    },
    "7-27": {
      "z": "Lew",
      "l": 8,
      "e": "Ósemka przynosi energię manifestacji siły, która pozwala realnie wpływać na Twoją sytuację materialną i życiową. Twoja determinacja jest dziś wspierana przez sprawczość, co czyni Cię niezwykle skuteczną w każdym podjętym działaniu.",
      "r": "Podejmij konkretne kroki w stronę realizacji swoich ambicji i zaufaj swojemu autorytetowi. Buduj swoją obfitość na fundamencie uczciwości, co zapewni Ci trwałe i satysfakcjonujące rezultaty na lata.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Podejmowania decyzji pod wpływem lęku przed brakiem, zamiast czerpać siłę z poczucia własnej wartości. Wystrzegaj się arogancji, pamiętając, że prawdziwa moc nie potrzebuje krzyku, by zostać zauważoną.",
      "s": "Siła z wartości, nie z ego",
      "fun": "Masz dziś spojrzenie liderki, przed którą ustępują nawet największe przeciwności losu i biurokratyczne przeszkody."
    },
    "7-28": {
      "z": "Lew",
      "l": 9,
      "e": "Dziewiątka przypomina, że mądrość polega na umiejętności domykania etapów, które przestały służyć Twojemu wzrostowi. To czas wielkiej transformacji, który przygotowuje Cię na przyjęcie zupełnie nowych impulsów od losu.",
      "r": "Wybacz dawnym urazom i puść wolno wszystko, co blokuje Twoją naturalną wolność. Podziękuj przeszłości za wszystkie lekcje, uznając je za cenne paliwo dla Twojej dalszej, inspirującej drogi.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Kurczowego trzymania się tego, co już odeszło, ponieważ blokuje to Twój naturalny proces odrodzenia. Nie ulegaj smutkowi, bo każde zakończenie jest radosną obietnicą nowego, wspaniałego świtu.",
      "s": "Koniec to też dar",
      "fun": "Robisz dziś takie porządki emocjonalne, że nawet stare paragony w portfelu same proszą o godną utylizację."
    },
    "7-29": {
      "z": "Lew",
      "l": 1,
      "e": "Jedynka rozpala iskrę nowej inicjatywy, zachęcając do stanięcia w pełnym blasku własnych możliwości i marzeń. To dzień, w którym każda Twoja odważna myśl ma moc stania się początkiem nowej, fascynującej opowieści.",
      "r": "Wykaż się samodzielnością i podejmij ryzyko związane z realizacją autorskiego, śmiałego pomysłu. Zaufaj swojej sile przebicia i bądź pierwszą osobą, która bez wahania uwierzy w Twoje dzisiejsze zwycięstwo.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Oglądania się na opinie innych i czekania na ich zgodę, ponieważ to Ty jesteś kapitanem tego okrętu. Nie zwlekaj z działaniem, gdyż dzisiejsza energia sprzyja tym, którzy odważnie ruszają naprzód.",
      "s": "Pierwsza linia należy do Ciebie",
      "fun": "Twój entuzjazm jest dziś tak wielki, że mogłabyś zainicjować nową modę, idąc po prostu w jednym bucie."
    },
    "7-30": {
      "z": "Lew",
      "l": 2,
      "e": "Dwójka uczy nas, że największa siła często drzemie w łagodności oraz umiejętności budowania harmonijnych relacji. Twoja dyplomacja stanie się dziś kluczem, który otworzy przed Tobą drzwi do serc ważnych dla Ciebie osób.",
      "r": "Szukaj porozumienia i buduj mosty tam, gdzie do tej pory panował chłód lub niepotrzebny dystans. Pielęgnuj współpracę i doceniaj drobne gesty, które budują poczucie wspólnoty i wzajemnego zaufania.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Rywalizacji oraz konfliktów, które mogłyby zburzyć kruchą atmosferę dzisiejszej, wakacyjnej zgody. Nie bój się prosić o wsparcie, ponieważ współpraca przyniesie Ci dziś znacznie więcej korzyści niż samotna walka.",
      "s": "W ciszy słychać więcej",
      "fun": "Jesteś dziś tak wyczulona na nastroje innych, że rozumiesz potrzeby bliskich bez użycia ani jednego słowa."
    },
    "7-31": {
      "z": "Lew",
      "l": 3,
      "e": "Trójka zamyka lipiec radosnym akcentem kreatywności, która zamienia ostatni dzień miesiąca w fascynującą przygodę. Pozwól sobie na celebrację życia, ponieważ Twoja dobra energia jest najlepszym podsumowaniem minionego czasu.",
      "r": "Wyraź siebie poprzez sztukę, słowo lub radosną rozmowę z kimś, kto potrzebuje dziś wsparcia. Dziel się optymizmem i zainspiruj innych do dostrzegania piękna w najmniejszych detalach rzeczywistości.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Nadmiernej powagi oraz zamartwiania się sprawami, na które nie masz dzisiaj realnego wpływu. Nie tłum swojej twórczej natury i pozwól jej swobodnie rozkwitnąć w każdym działaniu.",
      "s": "Śmiech to najkrótsza droga do serca",
      "fun": "Twoja dawką czystej energii jest dziś tak wielka, że mogłabyś zasilić mały festiwal muzyczny samą swoją obecnością."
    },
    "8-1": {
      "z": "Lew",
      "l": 1,
      "e": "Jedynka otwiera sierpień potężnym impulsem nowej energii, która zachęca do wyznaczenia odważnych celów na drugą część lata. To moment, w którym Twoja inicjatywa staje się iskrą rozpalającą ogień realnych i inspirujących zmian.",
      "r": "Postaw na autentyczność i podejmij samodzielną decyzję, która przybliży Cię do realizacji Twoich najskrytszych marzeń. Zaufaj własnej sile przebicia i stań się pionierką we własnym życiu, nie oglądając się na aprobatę otoczenia.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Wystrzegaj się bierności oraz czekania na „idealny moment”, ponieważ to Ty tworzysz okazje swoim zdecydowanym działaniem. Nie bój się iść pod prąd, jeśli czujesz, że wybrana przez Ciebie ścieżka jest zgodna z Twoją naturą.",
      "s": "Zacznij — reszta przyjdzie",
      "fun": "Masz dziś w sobie tyle zapału, że mogłabyś zorganizować wielką wyprawę, zanim reszta świata zdąży dopić poranną kawę."
    },
    "8-2": {
      "z": "Lew",
      "l": 2,
      "e": "Dwójka przynosi energię łagodności, która w upalne dni pomaga odnaleźć harmonię w relacjach z najbliższymi osobami. Twoja intuicja staje się dzisiaj czułym przewodnikiem, pozwalającym bezbłędnie wyczuć nastroje i niewypowiedziane potrzeby innych.",
      "r": "Szukaj porozumienia i buduj mosty porozumienia tam, gdzie do tej pory panował dystans lub niepotrzebne napięcie. Pielęgnuj współpracę i doceniaj drobne gesty, które budują poczucie bezpieczeństwa i wzajemnego zaufania.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Rywalizacji oraz narzucania swojej woli, co mogłoby zburzyć kruchą atmosferę niedzielnego spokoju i zgody. Nie izoluj się od ludzi, gdyż to właśnie w serdecznym kontakcie z nimi odnajdziesz dziś najwięcej ukojenia.",
      "s": "Dwie dusze, jedna harmonia",
      "fun": "Jesteś dziś tak empatyczna, że wiesz dokładnie, o jakich lodach marzy Twoja rodzina, zanim oni sami zajrzą do zamrażarki."
    },
    "8-3": {
      "z": "Lew",
      "l": 3,
      "e": "Trójka to radosny taniec kreatywności, który zamienia każdy wakacyjny poniedziałek w fascynującą przygodę pełną nowych inspiracji. Pozwól sobie na śmiech i lekkie podejście do obowiązków, ponieważ radość jest najkrótszą drogą do sukcesu.",
      "r": "Wyraź siebie poprzez barwy, słowa lub gesty, które niosą ze sobą powiew sierpniowej, słonecznej świeżości. Dziel się optymizmem i zainspiruj innych do dostrzegania piękna w najprostszych, codziennych sytuacjach.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Nadmiernej powagi oraz zamartwiania się sprawami, na które i tak nie masz dzisiaj realnego wpływu. Nie tłum swojej twórczej natury i pozwól jej swobodnie rozkwitnąć w każdym działaniu, jakie dziś podejmiesz.",
      "s": "Twórz, bo świat tego potrzebuje",
      "fun": "Twoja aura jest dziś tak radosna, że nawet Twoja kawa wydaje się smakować bardziej słońcem niż kofeiną."
    },
    "8-4": {
      "z": "Lew",
      "l": 4,
      "e": "Czwórka przypomina, że stabilność to poezja konkretnego działania, które wymaga systematyczności oraz dużej dozy cierpliwości. Budowanie trwałych fundamentów pod Twoje plany to proces, który właśnie teraz wymaga od Ciebie rzetelnego podejścia.",
      "r": "Skup się na domykaniu spraw, które wymagają szczególnej dbałości o szczegóły i wzorowy porządek w dokumentach. Postaw na strukturę swojego dnia, ponieważ zewnętrzny ład zawsze sprzyja klarowności i precyzji Twoich myśli.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Nagłych i nieprzemyślanych zmian, które mogłyby niepotrzebnie naruszyć Twoje wypracowane z trudem poczucie bezpieczeństwa. Nie ulegaj chaosowi, gdyż rzetelność i konsekwencja są dziś Twoimi najsilniejszymi, duchowymi sprzymierzeńcami.",
      "s": "Małe kroki, trwałe ślady",
      "fun": "Twoja organizacja pracy jest dziś tak doskonała, że nawet czas wydaje się płynąć pod Twoje dyktando."
    },
    "8-5": {
      "z": "Lew",
      "l": 5,
      "e": "Piątka przynosi powiew wolności i zachęca do wyjścia poza ramy codziennych, czasem zbyt ciasnych dla Twojej duszy schematów. To doskonały dzień, abyś odważyła się na odrobinę spontaniczności, która odświeży Twój umysł oraz serce.",
      "r": "Zaakceptuj pojawiające się propozycje zmian i otwórz się na nowe, fascynujące znajomości, które mogą Cię zainspirować. Wybierz inną drogę do celu niż zwykle, aby poczuć dreszcz emocji płynący z odkrywania tego, co nieznane.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Monotonii oraz lęku przed tym, co nowe i jeszcze nie do końca przez Ciebie oswojone w codzienności. Nie trzymaj się kurczowo planów, jeśli życie podsuwa Ci dzisiaj znacznie ciekawsze i bardziej barwne alternatywy.",
      "s": "Każda zmiana to zaproszenie",
      "fun": "Twoja potrzeba wolności jest dziś tak silna, że wyjście po gazecie może skończyć się spontaniczną wycieczką za miasto."
    },
    "8-6": {
      "z": "Lew",
      "l": 6,
      "e": "Szóstka zaprasza do budowania oazy harmonii, w której miłość i troska o bliskich stają się Twoim absolutnym priorytetem. Twój dom stanie się dzisiaj źródłem wielkiej siły, o ile tylko zadbasz o piękno i wzajemny szacunek domowników.",
      "r": "Stwórz w swoim otoczeniu atmosferę pełną ciepła i spędź wartościowy czas z osobami, które szczerze kochasz. Skup się na pielęgnowaniu więzi, które dają Ci poczucie bycia potrzebną i w pełni akceptowaną przez otoczenie.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Brania na swoje barki zbyt wielu cudzych problemów, co mogłoby niepotrzebnie odebrać Ci radość z własnego spokoju. Wystrzegaj się perfekcjonizmu, ponieważ szczera obecność jest znacznie ważniejsza niż idealnie przygotowane otoczenie.",
      "s": "Troska zmienia wszystko",
      "fun": "Twoja aura opiekuńczości jest dziś tak silna, że nawet kaktusy na parapecie czują się przez Ciebie dopieszczone."
    },
    "8-7": {
      "z": "Lew",
      "l": 7,
      "e": "Siódemka to czas głębokiej introspekcji, kiedy cisza staje się najbardziej lojalnym i mądrym doradcą Twojej duszy. Wyciszenie bodźców zewnętrznych pozwoli Ci usłyszeć odpowiedzi, których do tej pory bezskutecznie szukałaś w głośnym zgiełku.",
      "r": "Znajdź chwilę na medytację lub lekturę, która wzbogaci Twoje wnętrze i przyniesie upragniony spokój umysłu. Zaufaj intuicji, ponieważ jej głos jest dzisiaj wyjątkowo czysty i wolny od zbędnego hałasu otoczenia.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Hałasu oraz powierzchownych rozrywek, które mogą rozproszyć Twoją uwagę i zabrać wypracowany w ciszy ład. Nie uciekaj przed pytaniami o sens swojej drogi, gdyż konfrontacja z nimi przynosi prawdziwe wyzwolenie i mądrość.",
      "s": "Głębiej niż widać",
      "fun": "Jesteś dziś jak mądra sowa, która z gałęzi obserwuje świat, zastanawiając się, czy warto w ogóle przerywać tę piękną ciszę."
    },
    "8-8": {
      "z": "Lew",
      "l": 8,
      "e": "Ósemka przynosi energię manifestacji siły, która pozwala realnie wpływać na Twoją sytuację materialną i życiową pozycję. Twoja determinacja jest dziś wspierana przez sprawczość, co czyni Cię niezwykle skuteczną w każdym podjętym działaniu.",
      "r": "Podejmij konkretne kroki w stronę realizacji swoich ambicji i zaufaj swojemu wypracowanemu autorytetowi. Buduj swoją obfitość na fundamencie uczciwości, co zapewni Ci trwałe i satysfakcjonujące rezultaty na kolejne lata.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Podejmowania ważnych decyzji pod wpływem lęku przed brakiem, zamiast czerpać siłę z poczucia własnej wartości. Wystrzegaj się arogancji, pamiętając, że prawdziwa moc nie potrzebuje krzyku, by zostać w pełni zauważoną i docenioną.",
      "s": "Budujesz — i to zostaje",
      "fun": "Masz dziś spojrzenie liderki, przed którą ustępują nawet największe przeciwności losu i biurokratyczne przeszkody."
    },
    "8-9": {
      "z": "Lew",
      "l": 9,
      "e": "Dziewiątka przypomina, że mądrość polega na umiejętności domykania etapów, które przestały służyć Twojemu dalszemu wzrostowi. To czas wielkiej transformacji, który przygotowuje Cię na przyjęcie zupełnie nowych, fascynujących impulsów od losu.",
      "r": "Wybacz dawnym urazom i puść wolno wszystko, co blokuje Twoją naturalną, wewnętrzną wolność i radość. Podziękuj przeszłości za wszystkie lekcje, uznając je za cenne paliwo dla Twojej dalszej, inspirującej drogi życiowej.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Kurczowego trzymania się tego, co już nieodwołalnie odeszło, ponieważ blokuje to Twój naturalny proces odrodzenia. Nie ulegaj smutkowi, bo każde zakończenie jest radosną obietnicą nowego, wspaniałego i świetlistego świtu.",
      "s": "Mądrość boli zanim wyzwala",
      "fun": "Robisz dziś takie porządki emocjonalne, że nawet stare paragony w portfelu same proszą o godną utylizację."
    },
    "8-10": {
      "z": "Lew",
      "l": 1,
      "e": "Jedynka zamyka tę dekadę mocnym akcentem nowej inicjatywy, zachęcając do stanięcia w pełnym blasku własnych możliwości. To dzień, w którym każda Twoia odważna myśl ma moc stania się początkiem nowej, ekscytującej historii.",
      "r": "Wykaż się samodzielnością i podejmij ryzyko związane z realizacją autorskiego, śmiałego pomysłu. Zaufaj swojej sile przebicia i bądź pierwszą osobą, która bez wahania uwierzy w Twoje dzisiejsze zwycięstwo.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Oglądania się na opinie innych i czekania na ich zgodę, ponieważ to Ty jesteś jedynym kapitanem tego okrętu. Nie zwlekaj z działaniem, gdyż dzisiejsza energia sprzyja tym, którzy odważnie ruszają naprzód ku słońcu.",
      "s": "Zacznij — reszta przyjdzie",
      "fun": "Twój entuzjazm jest dziś tak wielki, że mogłabyś zainicjować nową modę, idąc po prostu w jednym bucie i z wielkim uśmiechem."
    },
    "8-11": {
      "z": "Lew",
      "l": 2,
      "e": "Dwójka przynosi energię łagodności, która pozwala na głębokie porozumienie z drugim człowiekiem bez zbędnych słów. To czas, w którym Twoja intuicja staje się czułym przewodnikiem, pomagającym budować mosty tam, gdzie do tej pory panował chłodny dystans.",
      "r": "Szukaj punktów wspólnych w relacjach i pielęgnuj współpracę opartą na wzajemnym zaufaniu. Pozwól sobie na empatię, która otworzy przed Tobą drzwi do serc osób ważnych dla Twojego spokoju.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Rywalizacji oraz narzucania swojej woli, co mogłoby zburzyć kruchą atmosferę dzisiejszej zgody. Nie izoluj się od bliskich, ponieważ to właśnie w kontakcie z nimi odnajdziesz dziś najwięcej ukojenia.",
      "s": "Dwie dusze, jedna harmonia",
      "fun": "Jesteś dziś tak wyczulona na nastroje innych, że wiesz dokładnie, o co poprosi partner, zanim on sam o tym pomyśli."
    },
    "8-12": {
      "z": "Lew",
      "l": 3,
      "e": "Trójka to radosny taniec kreatywności, który rozkwita w pełni sierpniowego słońca. Pozwól, by Twoja wyobraźnia nie znała granic i zamieniła każdy wakacyjny obowiązek w inspirującą przygodę.",
      "r": "Wyraź swoje emocje poprzez barwy, słowa lub gesty, które niosą ze sobą powiew świeżości. Dziel się swoim optymizmem, ponieważ Twój szczery uśmiech ma dziś moc zarażania innych wyjątkowo dobrą energią.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Nadmiernego analizowania swoich pomysłów, co mogłoby niepotrzebnie stłumić naturalny entuzjazm. Nie pozwól, by pesymizm otoczenia zgasił Twój wewnętrzny blask, który dziś promieniuje wyjątkowo mocno.",
      "s": "Twórz, bo świat tego potrzebuje",
      "fun": "Twoja energia jest dziś tak słoneczna, że nawet kwiatek na oknie zdaje się obracać w Twoją stronę, szukając blasku."
    },
    "8-13": {
      "z": "Lew",
      "l": 4,
      "e": "Czwórka przypomina, że stabilność to poezja konkretnego działania, które wymaga czasu oraz systematyczności. Budowanie trwałych fundamentów pod Twoje marzenia to proces, który właśnie teraz przynosi pierwsze, namacalne efekty.",
      "r": "Skup się na systematyczności i dokończ zadania, które wymagają rzetelnego, cierpliwego podejścia. Zadbaj o strukturę swojego dnia, aby zyskać poczucie pełnego panowania nad własną rzeczywistością.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Nagłych i nieprzemyślanych zmian, które mogłyby niepotrzebnie naruszyć Twoje wypracowane poczucie bezpieczeństwa. Nie ulegaj chaosowi, gdyż porządek i rzetelność są dziś Twoimi najlepszymi, duchowymi sprzymierzeńcami.",
      "s": "Małe kroki, trwałe ślady",
      "fun": "Twoja organizacja pracy jest dziś tak doskonała, że nawet czas wydaje się płynąć dokładnie według Twojego harmonogramu."
    },
    "8-14": {
      "z": "Lew",
      "l": 5,
      "e": "Piątka przynosi ożywczy wiatr zmian, który niesie ze sobą zapach wolności oraz nowych, ekscytujących możliwości. Odważ się wyjść poza utarte schematy, bo to właśnie w nieznanym kryje się dzisiaj największy potencjał Twojego rozwoju.",
      "r": "Zaakceptuj pojawiające się okazje do podróży lub spontanicznej zmiany dotychczasowych planów. Wyjdź naprzeciw nowym znajomościom, które mogą całkowicie odmienić Twoje dotychczasowe spojrzenie na otaczający świat.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Monotonii oraz lęku przed tym, co nowe i jeszcze nie do końca przez Ciebie oswojone. Nie trzymaj się kurczowo rutyny, która niepotrzebnie ogranicza Twoją naturalną potrzebę swobody i ekspansji.",
      "s": "Każda zmiana to zaproszenie",
      "fun": "Twoja spontaniczność jest dziś tak duża, że wyjście na spacer może skończyć się rezerwacją biletów na drugi koniec świata."
    },
    "8-15": {
      "z": "Lew",
      "l": 6,
      "e": "Szóstka zaprasza Cię do budowania oazy harmonii, w której miłość i troska o bliskich stają się najwyższymi wartościami dnia. Twój dom oraz relacje z ludźmi staną się dzisiaj źródłem niezwykłej siły oraz wewnętrznego ukojenia.",
      "r": "Stwórz w swoim otoczeniu atmosferę pełną ciepła i zadbaj o drobne gesty bezinteresownej życzliwości. Skup się na pielęgnowaniu więzi, które dają Ci poczucie bycia kochaną, potrzebną i w pełni akceptowaną.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Brania na siebie odpowiedzialności za cudze wybory, co mogłoby niepotrzebnie obciążyć Twoje serce. Wystrzegaj się perfekcjonizmu, który odbiera radość z naturalnego piękna prostych, niedoskonałych chwil.",
      "s": "Troska zmienia wszystko",
      "fun": "Jesteś dziś taką opiekunką domowego ogniska, że nawet kot wydaje się mruczeć dokładnie w rytmie Twojego serca."
    },
    "8-16": {
      "z": "Lew",
      "l": 7,
      "e": "Siódemka to czas głębokiej introspekcji, kiedy cisza staje się Twoim najbardziej lojalnym nauczycielem życiowej mądrości. Wyciszenie bodźców zewnętrznych pozwoli Ci usłyszeć odpowiedzi, których od dawna bezskutecznie szukałaś w świecie zewnętrznym.",
      "r": "Znajdź chwilę na medytację lub spokojną lekturę, która wzbogaci Twoje wnętrze o nowe wartości. Zaufaj swojej intuicji, ponieważ jej głos jest dzisiaj wyjątkowo czysty, klarowny i wolny od zgiełku.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Hałasu oraz powierzchownych rozrywek, które mogą rozproszyć Twoją uwagę i zabrać wypracowany w ciszy ład. Nie bój się pytań o sens własnej drogi, gdyż konfrontacja z nimi przynosi prawdziwe, duchowe wyzwolenie.",
      "s": "Głębiej niż widać",
      "fun": "Twoja aura tajemniczości sprawia, że bliscy zastanawiają się, czy właśnie nie odnalazłaś odpowiedzi na wszystkie zagadki wszechświata."
    },
    "8-17": {
      "z": "Lew",
      "l": 8,
      "e": "Ósemka to energia manifestacji siły, która pozwala Ci realnie wpływać na Twoją sytuację materialną oraz zawodową. Twoja determinacja jest dziś wspierana przez wyjątkową sprawczość, co czyni Cię niezwykle skuteczną w każdym działaniu.",
      "r": "Podejmij konkretne kroki w stronę realizacji swoich ambicji i zaufaj wypracowanemu przez lata autorytetowi. Buduj swoją obfitość na fundamentach uczciwości, co zapewni Ci trwałe i satysfakcjonujące rezultaty na przyszłość.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Podejmowania decyzji pod wpływem lęku przed brakiem, zamiast czerpać siłę z poczucia własnej wartości. Wystrzegaj się arogancji, pamiętając, że prawdziwa moc nie potrzebuje krzyku, by zostać w pełni zauważoną.",
      "s": "Budujesz — i to zostaje",
      "fun": "Masz dziś spojrzenie liderki, przed którą ustępują nawet największe przeciwności losu i biurokratyczne przeszkody."
    },
    "8-18": {
      "z": "Lew",
      "l": 9,
      "e": "Dziewiątka przypomina, że mądrość polega na umiejętności domykania etapów, które przestały już służyć Twojemu wzrostowi. To czas wielkiej transformacji, który przygotowuje Cię na przyjęcie zupełnie nowych, fascynujących impulsów od losu.",
      "r": "Wybacz dawnym urazom i puść wolno wszystko, co blokuje Twoją naturalną, wewnętrzną wolność. Podziękuj przeszłości za wszystkie lekcje, uznając je za cenne paliwo dla Twojej dalszej, pięknej drogi życia.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Kurczowego trzymania się tego, co już odeszło, ponieważ blokuje to Twój naturalny proces odrodzenia. Nie ulegaj smutkowi, bo każde zakończenie jest obietnicą nowego, wspaniałego i pełnego słońca świtu.",
      "s": "Mądrość boli zanim wyzwala",
      "fun": "Robisz dziś takie porządki emocjonalne, że nawet stare maile w Twojej skrzynce same proszą o godne przeniesienie do kosza."
    },
    "8-19": {
      "z": "Lew",
      "l": 1,
      "e": "Jedynka ponownie rozpala iskrę inicjatywy, zachęcając Cię do stanięcia w pełnym blasku własnych, nieodkrytych możliwości. To dzień, w którym każda Twoja odważna myśl ma moc stania się początkiem nowej, niezwykłej historii.",
      "r": "Wykaż się samodzielnością i podejmij ryzyko związane z realizacją autorskiego, śmiałego pomysłu. Zaufaj swojej sile przebicia i bądź pierwszą osobą, która bez wahania uwierzy w Twoje dzisiejsze zwycięstwo.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Oglądania się na innych i czekania na ich zgodę, ponieważ to Ty jesteś dzisiaj jedynym kapitanem swojego okrętu. Nie zwlekaj z działaniem, gdyż dzisiejsza energia sprzyja tym, którzy odważnie i zdecydowanie ruszają naprzód.",
      "s": "Zacznij — reszta przyjdzie",
      "fun": "Twój entuzjazm jest dziś tak wielki, że mogłabyś zainicjować nową modę, idąc po prostu do pracy w jednym bucie."
    },
    "8-20": {
      "z": "Lew",
      "l": 2,
      "e": "Dwójka uczy nas, że największa siła często drzemie w łagodności oraz umiejętności budowania harmonijnych relacji. Twoja dyplomacja stanie się dziś kluczem, który otworzy przed Tobą drzwi do serc osób ważnych dla Twojego rozwoju.",
      "r": "Szukaj porozumienia i buduj mosty tam, gdzie do tej pory panował dystans lub niepotrzebne napięcie. Pielęgnuj współpracę i doceniaj drobne gesty, które budują poczucie wspólnoty oraz wzajemnego zaufania.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Rywalizacji oraz konfliktów, które mogłyby zburzyć kruchą atmosferę dzisiejszej, letniej zgody. Nie bój się prosić o wsparcie, ponieważ współpraca przyniesie Ci dziś znacznie więcej korzyści niż samotna walka.",
      "s": "Dwie dusze, jedna harmonia",
      "fun": "Jesteś dziś tak wyczulona na nastroje innych, że rozumiesz potrzeby bliskich bez użycia ani jednego słowa."
    },
    "8-21": {
      "z": "Lew",
      "l": 3,
      "e": "Trójka wnosi w dzisiejszy dzień energię radosnej ekspresji, która zamienia zwykłą codzienność w barwną opowieść pełną inspiracji. Pozwól swojej kreatywności rozkwitnąć i nie bój się dzielić swoim optymizmem z każdym, kogo spotkasz na swojej drodze.",
      "r": "Wyraź siebie poprzez sztukę, słowo lub po prostu szczery uśmiech posłany drugiemu człowiekowi. Daj się ponieść pasji tworzenia, bo dzisiaj Twoja wyobraźnia nie zna żadnych granic.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Zamartwiania się na zapas oraz analizowania spraw, na które i tak nie masz dzisiaj realnego wpływu. Nie tłum swojej radosnej natury w obawie przed oceną innych osób.",
      "s": "Twórz, bo świat tego potrzebuje",
      "fun": "Twoja energia jest dziś tak zaraźliwa, że nawet słońce wydaje się świecić specjalnie dla Twoich pomysłów."
    },
    "8-22": {
      "z": "Lew",
      "l": 4,
      "e": "Czwórka przypomina o wartości solidnych fundamentów, na których budujemy poczucie własnego bezpieczeństwa i życiowej stabilizacji. Twoja systematyczność zostanie dziś doceniona, przynosząc Ci spokój oraz satysfakcję z rzetelnie wykonanej pracy.",
      "r": "Skup się na dokończeniu rozpoczętych projektów i zadbaj o wzorowy porządek w swoim najbliższym otoczeniu. Buduj swoją przyszłość krok po kroku, ufając, że każda mała czynność przybliża Cię do sukcesu.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Chaosu oraz podejmowania zbyt wielu wyzwań jednocześnie, co mogłoby niepotrzebnie rozproszyć Twoją uwagę. Nie lekceważ zasad, które chronią Twoją stabilność i pomagają zachować kontrolę nad rzeczywistością.",
      "s": "Małe kroki, trwałe ślady",
      "fun": "Twoja dzisiejsza miłość do porządku sprawia, że nawet spinacze w biurku ułożyły się w idealne szeregi."
    },
    "8-23": {
      "z": "Panna",
      "l": 5,
      "e": "Piątka przynosi ożywczy powiew wolności i zachęca do wyjścia poza bezpieczną, ale czasem zbyt przewidywalną strefę komfortu. To doskonały dzień, abyś odważyła się na zmianę, która wprowadzi do Twojej codzienności nową, stymulującą energię.",
      "r": "Otwórz się na spontaniczne propozycje i pozwól sobie na odrobinę przygody, która odświeży Twój umysł. Zaryzykuj i sprawdź nowe możliwości rozwoju, które pojawiają się na horyzoncie właśnie dzisiaj.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Monotonii oraz stagnacji, które mogą działać na Ciebie frustrująco i niepotrzebnie odbierać Ci siły witalne. Nie bój się porzucić starych schematów, ponieważ to właśnie w zmianie drzemie Twój potencjał wzrostu.",
      "s": "Każda zmiana to zaproszenie",
      "fun": "Twoja potrzeba wolności jest dziś tak duża, że wyjście po lody może skończyć się spontaniczną wycieczką."
    },
    "8-24": {
      "z": "Panna",
      "l": 6,
      "e": "Szóstka zaprasza Cię do świata harmonii, gdzie miłość, troska i piękno stanowią najważniejsze drogowskazy dla Twojego serca. Zadbaj o to, by Twoje działania płynęły prosto z wnętrza i niosły ukojenie zarówno Tobie, jak i wszystkim bliskim.",
      "r": "Stwórz w swoim domu atmosferę pełną ciepła i spędź czas z osobami, które są dla Ciebie najważniejsze. Skup się na tworzeniu pięknych chwil, które wzmocnią Twoje więzi i dadzą Ci poczucie bezpieczeństwa.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Brania na swoje barki zbyt wielu cudzych problemów, ponieważ każdy musi przejść swoją życiową drogę samodzielnie. Nie szukaj perfekcji tam, gdzie wystarczy po prostu szczera obecność i dobre słowo.",
      "s": "Troska zmienia wszystko",
      "fun": "Twoja aura opiekuńczości jest dziś tak silna, że nawet Twoje kwiaty doniczkowe czują się wyjątkowo rozpieszczane."
    },
    "8-25": {
      "z": "Panna",
      "l": 7,
      "e": "Siódemka to czas głębokiej introspekcji, kiedy cisza staje się Twoim najbardziej lojalnym nauczycielem życiowej mądrości. Wyciszenie zewnętrznych bodźców pozwoli Ci usłyszeć odpowiedzi, których od dawna poszukiwałaś w świecie zewnętrznym.",
      "r": "Znajdź chwilę na medytację lub spokojną lekturę, która wzbogaci Twoje wnętrze i przyniesie spokój umysłu. Zaufaj swojej intuicji, ponieważ jej głos jest dzisiaj wyjątkowo czysty, klarowny i godny zaufania.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Hałasu oraz powierzchownych rozrywek, które mogą rozproszyć Twoją uwagę i zabrać wypracowany w ciszy ład. Nie bój się pytań o sens własnej drogi, gdyż konfrontacja z nimi przynosi prawdziwe wyzwolenie.",
      "s": "Głębiej niż widać",
      "fun": "Jesteś dziś jak nasza ulubiona mądra sowa – obserwujesz świat z dystansem, wiedząc znacznie więcej, niż mówisz."
    },
    "8-26": {
      "z": "Panna",
      "l": 8,
      "e": "Ósemka wzywa Cię do wykazania się siłą charakteru oraz odwagą w zarządzaniu własnymi zasobami i energią życiową. Twoja sprawczość jest dziś na najwyższym poziomie, co pozwala Ci skutecznie domykać nawet najbardziej skomplikowane projekty.",
      "r": "Podejmij inicjatywę w sprawach zawodowych i nie bój się sięgać po należne Ci nagrody oraz publiczne uznanie. Buduj swój autorytet na fundamentach uczciwości, które zawsze były i pozostaną Twoją najmocniejszą stroną.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Podejmowania decyzji w pośpiechu ani pod wpływem negatywnych emocji, które mogłyby na chwilę zamglić Twój osąd. Wystrzegaj się arogancji, pamiętając, że prawdziwa moc przejawia się w spokoju i pewności działania.",
      "s": "Budujesz — i to zostaje",
      "fun": "Masz dziś spojrzenie liderki, przed którą ustępują nawet największe przeciwności losu i biurokratyczne przeszkody."
    },
    "8-27": {
      "z": "Panna",
      "l": 9,
      "e": "Dziewiątka przypomina, że mądrość polega na umiejętności domykania etapów, które wypełniły już swoje zadanie w Twojej podróży. To czas wielkiej transformacji, który przygotowuje Cię na przyjęcie zupełnie nowych, fascynujących impulsów od losu.",
      "r": "Wybacz dawnym urazom i podziękuj przeszłości za wszystkie lekcje, które uczyniły Cię tak świadomą osobą. Podaruj sobie chwilę na podsumowanie dotychczasowych sukcesów i z wdzięcznością puść wolno to, co już Ci nie służy.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Nie trzymaj się kurczowo spraw, które już nie wspierają Twojego rozwoju, lecz otwórz dłonie, by przyjąć nowe dary. Unikaj smutku po tym, co odchodzi, ponieważ każda zmiana jest obietnicą lepszej i mądrzejszej przyszłości.",
      "s": "Mądrość boli zanim wyzwala",
      "fun": "Robisz dziś takie porządki emocjonalne, że nawet stare paragony w portfelu same proszą o godną utylizację."
    },
    "8-28": {
      "z": "Panna",
      "l": 1,
      "e": "Jedynka rozpala iskrę nowej inicjatywy, zachęcając Cię do stanięcia w pełnym blasku własnych możliwości i marzeń. To dzień, w którym każda Twoja odważna myśl ma moc stania się początkiem nowej, niezwykłej historii.",
      "r": "Wykaż się samodzielnością i podejmij ryzyko związane z realizacją autorskiego, śmiałego pomysłu. Zaufaj swojej sile przebicia i bądź pierwszą osobą, która bez wahania uwierzy w Twoje dzisiejsze zwycięstwo.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Oglądania się na opinie innych i czekania na ich zgodę, ponieważ to Ty jesteś jedynym kapitanem swojego okrętu. Nie zwlekaj z działaniem, gdyż dzisiejsza energia sprzyja tym, którzy odważnie i zdecydowanie ruszają naprzód.",
      "s": "Zacznij — reszta przyjdzie",
      "fun": "Twój entuzjazm jest dziś tak wielki, że mogłabyś zainicjować nową modę, idąc po prostu do pracy w jednym bucie."
    },
    "8-29": {
      "z": "Panna",
      "l": 2,
      "e": "Dwójka uczy nas, że największa siła często drzemie w łagodności oraz umiejętności budowania harmonijnych relacji. Twoja dyplomacja stanie się dziś kluczem, który otworzy przed Tobą drzwi do serc osób ważnych dla Twojego spokoju.",
      "r": "Szukaj porozumienia i buduj mosty tam, gdzie do tej pory panował dystans lub niepotrzebne napięcie. Pielęgnuj współpracę i doceniaj drobne gesty, które budują poczucie wspólnoty oraz wzajemnego zaufania.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Rywalizacji oraz konfliktów, które mogłyby zburzyć kruchą atmosferę dzisiejszej zgody. Nie bój się prosić o wsparcie, ponieważ współpraca przyniesie Ci dziś znacznie więcej korzyści niż samotna walka.",
      "s": "Dwie dusze, jedna harmonia",
      "fun": "Jesteś dziś tak wyczulona na nastroje innych, że rozumiesz potrzeby bliskich bez użycia ani jednego słowa."
    },
    "8-30": {
      "z": "Panna",
      "l": 3,
      "e": "Trójka przynosi radosny taniec kreatywności, który zamienia przedostatni dzień miesiąca w fascynującą przygodę pełną nowych barw. Pozwól sobie na śmiech, ponieważ dobra energia jest najlepszym paliwem dla Twojej duszy i twórczych działań.",
      "r": "Wyraź siebie poprzez sztukę, słowo lub radosną rozmowę z kimś, kto potrzebuje dziś wsparcia. Dziel się swoim optymizmem i zainspiruj innych do dostrzegania piękna w najmniejszych detalach sierpniowej rzeczywistości.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Nadmiernej powagi oraz zamartwiania się sprawami, na które nie masz dzisiaj realnego wpływu. Nie tłum swojej twórczej natury i pozwól jej swobodnie rozkwitnąć w każdym działaniu, które dziś podejmiesz.",
      "s": "Twórz, bo świat tego potrzebuje",
      "fun": "Twoja dawką czystej energii jest dziś tak wielka, że mogłabyś rozświetlić całą okolicę samym swoim wejściem do pokoju."
    },
    "8-31": {
      "z": "Panna",
      "l": 4,
      "e": "Czwórka zamyka sierpień w tonie stabilizacji, przypominając o wartości solidnych fundamentów pod nadchodzącą jesień. Twoja dzisiejsza systematyczność przyniesie Ci spokój oraz wielką satysfakcję z rzetelnie uporządkowanych spraw całego miesiąca.",
      "r": "Skup się na dokończeniu projektów i zadbaj o wzorowy porządek w sprawach wymagających Twojej ostatecznej uwagi. Buduj swoją przyszłość z cierpliwością, wiedząc, że solidna praca zawsze przynosi najtrwalsze i najpiękniejsze owoce.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Nagłych i nieprzemyślanych zmian w planach, które mogłyby niepotrzebnie zburzyć Twój wypracowany ład. Nie ulegaj chaosowi ostatnich dni wakacji, lecz trzymaj się wyznaczonego harmonogramu działania.",
      "s": "Małe kroki, trwałe ślady",
      "fun": "Twoja dzisiejsza miłość do porządku sprawia, że nawet spinacze w Twoim biurku ułożyły się w idealnie równe, alfabetyczne szeregi."
    },
    "9-1": {
      "z": "Panna",
      "l": 2,
      "e": "Dwójka na rozpoczęcie roku szkolnego wnosi energię łagodności i współpracy, która idealnie koi stres związany z nowymi obowiązkami. To czas, w którym Twoja intuicja staje się czułym przewodnikiem, pomagającym budować mosty porozumienia w każdym nowym środowisku.",
      "r": "Szukaj punktów wspólnych w relacjach i pielęgnuj dialog oparty na wzajemnym zaufaniu. Pozwól sobie na empatię, która otworzy przed Tobą serca osób potrzebujących dzisiaj wsparcia i zrozumienia.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Rywalizacji oraz narzucania swojej woli, co mogłoby niepotrzebnie zburzyć kruchą atmosferę dzisiejszej zgody. Nie izoluj się od grupy, ponieważ to właśnie we współpracy odnajdziesz dziś najwięcej siły.",
      "s": "Delikatność to siła",
      "fun": "Jesteś dziś tak wyczulona na nastroje innych, że wiesz dokładnie, kto zapomniał drugiego śniadania, zanim ta osoba sama to poczuje."
    },
    "9-2": {
      "z": "Panna",
      "l": 3,
      "e": "Trójka to radosny taniec kreatywności, który zamienia pierwsze powakacyjne dni w inspirującą przygodę pełną nowych barw. Pozwól swojej wyobraźni nie znać granic i nie bój się dzielić swoim naturalnym optymizmem z każdym, kogo spotkasz.",
      "r": "Wyraź siebie poprzez sztukę, słowo lub po prostu szczery uśmiech posłany drugiemu człowiekowi. Daj się ponieść pasji tworzenia, bo dzisiaj Twoja ekspresja ma moc rozświetlania nawet najbardziej szarej codzienności.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Zamartwiania się na zapas oraz analizowania spraw, na które i tak nie masz dzisiaj realnego wpływu. Nie tłum swojej radosnej natury w obawie przed oceną osób, które zapomniały już, jak cieszyć się chwilą.",
      "s": "Lżej znaczy dalej",
      "fun": "Twoja dawką energii jest dziś tak wielka, że mogłabyś zastąpić słońce, gdyby tylko postanowiło schować się za chmury."
    },
    "9-3": {
      "z": "Panna",
      "l": 4,
      "e": "Czwórka przypomina o wartości solidnych fundamentów, na których budujemy poczucie bezpieczeństwa w nowym sezonie. Twoja systematyczność zostanie dziś doceniona, przynosząc Ci głęboki spokój oraz satysfakcję z rzetelnie uporządkowanych spraw.",
      "r": "Skup się na dokończeniu rozpoczętych projektów i zadbaj o wzorowy ład w swoim najbliższym otoczeniu. Buduj swoją przyszłość krok po kroku, wiedząc, że każda mała czynność przybliża Cię do trwałego sukcesu.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Chaosu oraz podejmowania zbyt wielu wyzwań jednocześnie, co mogłoby niepotrzebnie rozproszyć Twoją cenną uwagę. Nie lekceważ zasad i procedur, które chronią Twoją stabilność i pomagają zachować kontrolę nad rzeczywistością.",
      "s": "Solidność to poezja",
      "fun": "Twoja dzisiejsza miłość do porządku sprawia, że nawet długopisy w piórniku ułożyły się w idealne szeregi według stopnia zużycia wkładu."
    },
    "9-4": {
      "z": "Panna",
      "l": 5,
      "e": "Piątka przynosi ożywczy powiew wolności i zachęca do wyjścia poza ramy codziennych, czasem zbyt ciasnych schematów. To doskonały dzień, abyś odważyła się na zmianę, która wprowadzi do Twojej rutyny nową, stymulującą energię.",
      "r": "Otwórz się na spontaniczne propozycje i pozwól sobie na odrobinę przygody, która odświeży Twój umysł. Zaryzykuj i sprawdź nowe możliwości rozwoju, które pojawiają się na Twoim horyzoncie właśnie dzisiaj.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Monotonii oraz stagnacji, które mogą działać na Ciebie frustrująco i niepotrzebnie odbierać Ci siły witalne. Nie bój się porzucić starych przyzwyczajeń, ponieważ to właśnie w zmianie drzemie Twój największy potencjał wzrostu.",
      "s": "Wolność jest decyzją",
      "fun": "Twoja potrzeba wolności jest dziś tak duża, że wyjście do sklepu może niechcący zmienić się w daleką wyprawę w nieznane."
    },
    "9-5": {
      "z": "Panna",
      "l": 6,
      "e": "Szóstka zaprasza Cię do świata harmonii, gdzie miłość i troska o bliskich stają się Twoim najważniejszym drogowskazem. Zadbaj o to, by Twoje działania płynęły prosto z serca i niosły ukojenie zarówno Tobie, jak i wszystkim domownikom.",
      "r": "Stwórz w swoim domu atmosferę pełną ciepła i spędź wartościowy czas z osobami, które szczerze kochasz. Skup się na tworzeniu pięknych chwil, które wzmocnią Twoje więzi i dadzą Ci poczucie głębokiego bezpieczeństwa.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Brania na swoje barki zbyt wielu cudzych problemów, ponieważ każdy musi przejść swoją drogę samodzielnie. Nie szukaj perfekcji tam, gdzie wystarczy po prostu szczera obecność i dobre, wspierające słowo.",
      "s": "Piękno jest aktem odwagi",
      "fun": "Twoja aura opiekuńczości jest dziś tak silna, że nawet Twoje rośliny doniczkowe zdają się mruczeć z zadowolenia."
    },
    "9-6": {
      "z": "Panna",
      "l": 7,
      "e": "Siódemka to czas głębokiej introspekcji, kiedy cisza staje się Twoim najbardziej lojalnym nauczycielem życiowej mądrości. Wyciszenie bodźców zewnętrznych pozwoli Ci usłyszeć odpowiedzi, których od dawna poszukiwałaś w świecie zewnętrznym.",
      "r": "Znajdź chwilę na medytację lub spokojną lekturę, która wzbogaci Twoje wnętrze i przyniesie spokój umysłu. Zaufaj swojej intuicji, ponieważ jej głos jest dzisiaj wyjątkowo czysty, klarowny i godny pełnego zaufania.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Hałasu oraz powierzchownych rozrywek, które mogą rozproszyć Twoją uwagę i zabrać wypracowany w ciszy ład. Nie bój się pytań o sens własnej drogi, gdyż konfrontacja z nimi przynosi prawdziwe wyzwolenie i rozwój.",
      "s": "Pytanie jest ważniejsze niż odpowiedź",
      "fun": "Jesteś dziś jak mądra sowa – obserwujesz świat z dystansem i wiesz o nim znacznie więcej, niż decydujesz się powiedzieć."
    },
    "9-7": {
      "z": "Panna",
      "l": 8,
      "e": "Ósemka wzywa Cię do wykazania się siłą charakteru oraz odwagą w zarządzaniu własnymi zasobami i energią życiową. Twoja sprawczość znajduje się dziś na najwyższym poziomie, co pozwala Ci skutecznie domykać nawet najbardziej skomplikowane projekty.",
      "r": "Podejmij odważną inicjatywę w sprawach zawodowych i nie bój się sięgać po należne Ci uznanie oraz sukces. Buduj swój autorytet na fundamentach uczciwości, ponieważ tylko rzetelne działania przynoszą trwałe i godne owoce.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Podejmowania decyzji w pośpiechu ani pod wpływem negatywnych emocji, które mogłyby na chwilę zamglić Twój osąd. Wystrzegaj się arogancji, pamiętając, że prawdziwa moc nie potrzebuje krzyku, by zostać zauważoną.",
      "s": "Moc służy, nie dominuje",
      "fun": "Masz dziś spojrzenie liderki, przed którą ustępują nawet największe przeciwności losu i kolejki w osiedlowym sklepie."
    },
    "9-8": {
      "z": "Panna",
      "l": 9,
      "e": "Dziewiątka przypomina, że mądrość polega na umiejętności domykania etapów, które wypełniły już swoje zadanie w Twojej podróży. To czas wielkiej transformacji, który przygotowuje Cię na przyjęcie zupełnie nowych, jesiennych impulsów od losu.",
      "r": "Wybacz dawnym urazom i podziękuj przeszłości za wszystkie lekcje, które uczyniły Cię tak świadomą osobą. Podaruj sobie chwilę na podsumowanie dotychczasowych sukcesów i z wdzięcznością puść wolno to, co już Ci nie służy.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Nie trzymaj się kurczowo spraw, które przestały wspierać Twój wzrost oraz poczucie wewnętrznego szczęścia. Unikaj smutku po tym, co odchodzi, ponieważ każda zmiana jest konieczną obietnicą lepszej i mądrzejszej przyszłości.",
      "s": "Zamknij z gracją — otwórz z wdzięcznością",
      "fun": "Robisz dziś takie porządki emocjonalne, że nawet stare maile w skrzynce same proszą o godne przeniesienie do kosza."
    },
    "9-9": {
      "z": "Panna",
      "l": 1,
      "e": "Jedynka rozpala iskrę nowej inicjatywy, zachęcając Cię do stanięcia w pełnym blasku własnych możliwości i marzeń. To dzień, w którym każda Twoja odważna myśl ma moc stania się początkiem nowej, niezwykłej historii.",
      "r": "Wykaż się samodzielnością i podejmij ryzyko związane z realizacją autorskiego, śmiałego pomysłu. Zaufaj swojej sile przebicia i bądź pierwszą osobą, która bez wahania uwierzy w Twoje dzisiejsze zwycięstwo.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Oglądania się na opinie innych i czekania na ich zgodę, ponieważ to Ty jesteś dzisiaj jedynym kapitanem swojego okrętu. Nie zwlekaj z działaniem, gdyż dzisiejsza energia sprzyja tym, którzy odważnie i zdecydowanie ruszają naprzód.",
      "s": "Twoja droga, Twój rytm",
      "fun": "Twój entuzjazm jest dziś tak wielki, że mogłabyś zainicjować nową modę, idąc po prostu do pracy w jednym bucie i z wielkim uśmiechem."
    },
    "9-10": {
      "z": "Panna",
      "l": 2,
      "e": "Dwójka uczy nas, że największa siła często drzemie w łagodności oraz umiejętności budowania harmonijnych relacji. Twoja dyplomacja stanie się dziś kluczem, który otworzy przed Tobą drzwi do serc osób ważnych dla Twojego spokoju.",
      "r": "Szukaj porozumienia i buduj mosty tam, gdzie do tej pory panował dystans lub niepotrzebne napięcie. Pielęgnuj współpracę i doceniaj drobne gesty, które budują poczucie wspólnoty oraz wzajemnego zaufania.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Rywalizacji oraz konfliktów, które mogłyby zburzyć kruchą atmosferę dzisiejszej, wrześniowej zgody. Nie bój się prosić o wsparcie, ponieważ współpraca przyniesie Ci dziś znacznie więcej korzyści niż samotna walka.",
      "s": "Delikatność to siła",
      "fun": "Jesteś dziś tak wyczulona na nastroje innych, że rozumiesz potrzeby bliskich bez użycia ani jednego słowa."
    },
    "9-11": {
      "z": "Panna",
      "l": 3,
      "e": "Trójka wnosi w dzisiejszy dzień energię radosnej ekspresji, która pozwala dostrzec piękno w codziennych obowiązkach. To idealny moment, aby Twoja kreatywność stała się pomostem łączącym Twoje pasje z rzeczywistością zawodową.",
      "r": "Wyraź swoje emocje poprzez twórcze działanie lub inspirującą rozmowę z drugim człowiekiem. Dziel się swoim optymizmem, ponieważ Twoja dobra energia ma moc przyciągania wyjątkowych okazji.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Zamartwiania się na zapas sprawami, na które nie masz teraz realnego wpływu. Nie tłum swojego wewnętrznego dziecka, które pragnie radości i nieskrępowanej zabawy.",
      "s": "Lżej znaczy dalej",
      "fun": "Twoja dawką energii jest dziś tak wielka, że mogłabyś rozświetlić cały biurowiec samym swoim wejściem do windy."
    },
    "9-12": {
      "z": "Panna",
      "l": 4,
      "e": "Czwórka przypomina o wartości solidnych fundamentów, na których budujemy nasze długofalowe poczucie bezpieczeństwa. Dzisiejsza systematyczność przyniesie Ci spokój ducha oraz satysfakcję z rzetelnie i uczciwie wykonanej pracy.",
      "r": "Skup się na domykaniu projektów i zadbaj o wzorowy porządek w sprawach, które wymagają szczególnej uwagi. Buduj swoją przyszłość krok po kroku, wiedząc, że cierpliwość jest kluczem do trwałego sukcesu.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Chaosu oraz podejmowania zbyt wielu wyzwań jednocześnie, co mogłoby niepotrzebnie rozproszyć Twoje siły. Nie lekceważ zasad, które chronią Twoją stabilność i pomagają zachować kontrolę nad życiem.",
      "s": "Solidność to poezja",
      "fun": "Twoja dzisiejsza miłość do porządku sprawia, że nawet spinacze na biurku ułożyły się w idealne szeregi pod linijkę."
    },
    "9-13": {
      "z": "Panna",
      "l": 5,
      "e": "Piątka przynosi ożywczy powiew wolności i zachęca do wyjścia poza bezpieczną, ale czasem zbyt ciasną strefę komfortu. To doskonały dzień, abyś odważyła się na zmianę, która wprowadzi do Twojej codzienności nową, stymulującą energię.",
      "r": "Otwórz się na spontaniczne propozycje i pozwól sobie na odrobinę przygody, która odświeży Twój umysł. Zaryzykuj i sprawdź nowe możliwości rozwoju, które pojawiają się na Twoim horyzoncie właśnie dzisiaj.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Monotonii oraz stagnacji, które mogą działać na Ciebie frustrująco i niepotrzebnie odbierać Ci siły witalne. Nie bój się porzucić starych schematów, ponieważ to właśnie w zmianie drzemie Twój największy potencjał wzrostu.",
      "s": "Wolność jest decyzją",
      "fun": "Twoja potrzeba wolności jest dziś tak duża, że wyjście po lody może niechcący skończyć się spontaniczną wycieczką."
    },
    "9-14": {
      "z": "Panna",
      "l": 6,
      "e": "Szóstka zaprasza Cię do świata harmonii, gdzie miłość, troska i piękno stanowią najważniejsze drogowskazy dla serca. Zadbaj o to, by Twoje działania płynęły prosto z wnętrza i niosły ukojenie zarówno Tobie, jak i wszystkim bliskim.",
      "r": "Stwórz w swoim domu atmosferę pełną ciepła i spędź wartościowy czas z osobami, które są dla Ciebie najważniejsze. Skup się na pielęgnowaniu więzi, które dają Ci poczucie głębokiego bezpieczeństwa i bycia kochaną.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Brania na swoje barki zbyt wielu cudzych problemów, ponieważ każdy musi przejść swoją życiową drogę samodzielnie. Nie szukaj perfekcji tam, gdzie wystarczy po prostu szczera obecność i dobre, wspierające słowo.",
      "s": "Piękno jest aktem odwagi",
      "fun": "Twoja chęć opiekowania się światem sprawia, że nawet kwiaty doniczkowe czują się dziś wyjątkowo rozpieszczane."
    },
    "9-15": {
      "z": "Panna",
      "l": 7,
      "e": "Siódemka to czas głębokiej introspekcji, kiedy cisza staje się Twoim najbardziej lojalnym nauczycielem życiowej mądrości. Wyciszenie zewnętrznych bodźców pozwoli Ci usłyszeć odpowiedzi, których od dawna poszukiwałaś w świecie zewnętrznym.",
      "r": "Znajdź chwilę na medytację lub spokojną lekturę, która wzbogaci Twoje wnętrze i przyniesie spokój umysłu. Zaufaj swojej intuicji, ponieważ jej głos jest dzisiaj wyjątkowo czysty, klarowny i godny zaufania.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Hałasu oraz powierzchownych rozrywek, które mogą rozproszyć Twoją uwagę i zabrać wypracowany w ciszy ład. Nie bój się pytań o sens własnej drogi, gdyż konfrontacja z nimi przynosi prawdziwe wyzwolenie.",
      "s": "Pytanie jest ważniejsze niż odpowiedź",
      "fun": "Jesteś dziś jak nasza mądra sowa – obserwujesz świat z dystansem, wiedząc znacznie więcej, niż mówisz."
    },
    "9-16": {
      "z": "Panna",
      "l": 8,
      "e": "Ósemka wzywa Cię do wykazania się siłą charakteru oraz odwagą w zarządzaniu własnymi zasobami i energią życiową. Twoja sprawczość jest dziś na najwyższym poziomie, co pozwala Ci skutecznie domykać nawet najbardziej skomplikowane projekty.",
      "r": "Podejmij inicjatywę w sprawach zawodowych i nie bój się sięgać po należne Ci nagrody oraz publiczne uznanie. Buduj swój autorytet na fundamentach uczciwości i rzetelności, które zawsze były Twoją najmocniejszą stroną.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Podejmowania decyzji w pośpiechu ani pod wpływem negatywnych emocji, które mogłyby na chwilę zamglić Twój osąd. Wystrzegaj się arogancji, pamiętając, że prawdziwa moc przejawia się w spokoju i pewności działania.",
      "s": "Moc służy, nie dominuje",
      "fun": "Masz dziś spojrzenie liderki, przed którą ustępują nawet największe przeciwności losu i kolejki w osiedlowym sklepie."
    },
    "9-17": {
      "z": "Panna",
      "l": 9,
      "e": "Dziewiątka przypomina, że mądrość polega na umiejętności domykania etapów, które wypełniły już swoje zadanie w Twojej podróży. To czas wielkiej transformacji, który przygotowuje Cię na przyjęcie zupełnie nowych, fascynujących impulsów od losu.",
      "r": "Wybacz dawnym urazom i podziękuj przeszłości za wszystkie lekcje, które uczyniły Cię tak świadomą osobą. Podaruj sobie chwilę na podsumowanie dotychczasowych sukcesów i z wdzięcznością puść wolno to, co już Ci nie służy.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Nie trzymaj się kurczowo spraw, które już nie wspierają Twojego rozwoju, lecz otwórz dłonie, by przyjąć nowe dary od losu. Unikaj smutku po tym, co odchodzi, ponieważ każda zmiana jest obietnicą lepszej i mądrzejszej przyszłości.",
      "s": "Zamknij z gracją — otwórz z wdzięcznością",
      "fun": "Robisz dziś takie porządki emocjonalne, że nawet stare paragony w portfelu same proszą o godną utylizację."
    },
    "9-18": {
      "z": "Panna",
      "l": 1,
      "e": "Jedynka rozpala iskrę nowej inicjatywy, zachęcając Cię do stanięcia w pełnym blasku własnych możliwości i marzeń. To dzień, w którym każda Twoja odważna myśl ma moc stania się początkiem nowej, niezwykłej historii.",
      "r": "Wykaż się samodzielnością i podejmij ryzyko związane z realizacją autorskiego, śmiałego pomysłu. Zaufaj swojej sile przebicia i bądź pierwszą osobą, która bez wahania uwierzy w Twoje dzisiejsze zwycięstwo.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Oglądania się na opinie innych i czekania na ich zgodę, ponieważ to Ty jesteś jedynym kapitanem swojego okrętu. Nie zwlekaj z działaniem, gdyż dzisiejsza energia sprzyja tym, którzy odważnie i zdecydowanie ruszają naprzód.",
      "s": "Twoja droga, Twój rytm",
      "fun": "Twój entuzjazm jest dziś tak wielki, że mogłabyś zainicjować nową modę, idąc po prostu do pracy w jednym bucie."
    },
    "9-19": {
      "z": "Panna",
      "l": 2,
      "e": "Dwójka uczy nas, że największa siła często drzemie w łagodności oraz umiejętności budowania harmonijnych relacji. Twoja dyplomacja stanie się dziś kluczem, który otworzy przed Tobą drzwi do serc osób ważnych dla Twojego spokoju.",
      "r": "Szukaj porozumienia i buduj mosty tam, gdzie do tej pory panował dystans lub niepotrzebne napięcie. Pielęgnuj współpracę i doceniaj drobne gesty, które budują poczucie wspólnoty oraz wzajemnego zaufania.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Rywalizacji oraz konfliktów, które mogłyby zburzyć kruchą atmosferę dzisiejszej zgody. Nie bój się prosić o wsparcie, ponieważ współpraca przyniesie Ci dziś znacznie więcej korzyści niż samotna walka.",
      "s": "Delikatność to siła",
      "fun": "Jesteś dziś tak wyczulona na nastroje innych, że rozumiesz potrzeby bliskich bez użycia ani jednego słowa."
    },
    "9-20": {
      "z": "Panna",
      "l": 3,
      "e": "Trójka przynosi radosny taniec kreatywności, który zamienia koniec dekady w fascynującą przygodę pełną nowych barw. Pozwól sobie na śmiech, ponieważ dobra energia jest najlepszym paliwem dla Twojej duszy i twórczych działań na kolejny etap miesiąca.",
      "r": "Wyraź siebie poprzez sztukę, słowo lub radosną rozmowę z kimś, kto potrzebuje dziś wsparcia. Dziel się swoim optymizmem i zainspiruj innych do dostrzegania piękna w najmniejszych detalach wrześniowej rzeczywistości.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Nadmiernej powagi oraz zamartwiania się sprawami, na które nie masz dzisiaj realnego wpływu. Nie tłum swojej twórczej natury i pozwól jej swobodnie rozkwitnąć w każdym działaniu, które dziś podejmiesz.",
      "s": "Lżej znaczy dalej",
      "fun": "Twoja dawką czystej energii jest dziś tak wielka, że mogłabyś rozświetlić całą okolicę samym swoim uśmiechem."
    },
    "9-21": {
      "z": "Panna",
      "l": 4,
      "e": "Czwórka przypomina, że stabilność to poezja konkretnego działania, które wymaga systematyczności i cierpliwości. Budowanie trwałych fundamentów pod Twoje jesienne plany to proces, który właśnie teraz przynosi pierwsze, namacalne efekty.",
      "r": "Skup się na systematyczności i dokończ zadania, które wymagają rzetelnego, cierpliwego podejścia. Zadbaj o strukturę swojego dnia, aby zyskać poczucie pełnego panowania nad własną rzeczywistością.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Nagłych i nieprzemyślanych zmian, które mogłyby niepotrzebnie naruszyć Twoje wypracowane poczucie bezpieczeństwa. Nie ulegaj chaosowi, gdyż porządek i rzetelność są dziś Twoimi najlepszymi sprzymierzeńcami.",
      "s": "Solidność to poezja",
      "fun": "Twoja dzisiejsza miłość do porządku sprawia, że nawet spinacze w Twoim biurku ułożyły się w idealne szeregi pod linijkę."
    },
    "9-22": {
      "z": "Panna",
      "l": 5,
      "e": "Piątka przynosi ożywczy powiew wolności i zachęca do wyjścia poza bezpieczną, ale czasem zbyt przewidywalną strefę komfortu. To doskonały dzień, abyś odważyła się na zmianę, która wprowadzi do Twojej codzienności nową, stymulującą energię.",
      "r": "Otwórz się na spontaniczne propozycje i pozwól sobie na odrobinę przygody, która odświeży Twój umysł. Zaryzykuj i sprawdź nowe możliwości rozwoju, które pojawiają się na horyzoncie właśnie dzisiejszego dnia.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Wystrzegaj się nudy oraz stagnacji, które mogą działać na Ciebie frustrująco i odbierać siły witalne. Nie bój się porzucić starych schematów, ponieważ to właśnie w zmianie drzemie Twój największy potencjał wzrostu.",
      "s": "Wolność jest decyzją",
      "fun": "Twoja potrzeba wolności jest dziś tak duża, że wyjście na spacer może niechcący skończyć się spontaniczną wycieczką."
    },
    "9-23": {
      "z": "Waga",
      "l": 6,
      "e": "Szóstka w dniu Równonocy Jesiennej zaprasza Cię do świata harmonii, gdzie miłość i troska stanowią najważniejsze drogowskazy. Zadbaj o to, by Twoje działania niosły ukojenie zarówno Tobie, jak i wszystkim bliskim, tworząc oazę ciepła w Twoim domu.",
      "r": "Stwórz w swoim otoczeniu atmosferę pełną ciepła i spędź wartościowy czas z osobami, które są dla Ciebie najważniejsze. Skup się na pielęgnowaniu więzi, które dają Ci poczucie głębokiego bezpieczeństwa i bycia kochaną.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Brania na swoje barki zbyt wielu cudzych problemów, ponieważ każdy musi przejść swoją życiową drogę samodzielnie. Nie szukaj perfekcji tam, gdzie wystarczy po prostu szczera obecność i dobre, wspierające słowo.",
      "s": "Piękno jest aktem odwagi",
      "fun": "Twoja chęć opiekowania się światem sprawia, że nawet kwiaty doniczkowe czują się dziś wyjątkowo rozpieszczane."
    },
    "9-24": {
      "z": "Waga",
      "l": 7,
      "e": "Siódemka to czas głębokiej introspekcji, kiedy cisza staje się Twoim najbardziej lojalnym nauczycielem życiowej mądrości. Wyciszenie zewnętrznych bodźców pozwoli Ci usłyszeć odpowiedzi, których od dawna poszukiwałaś w świecie zewnętrznym.",
      "r": "Znajdź chwilę na medytację lub spokojną lekturę, która wzbogaci Twoje wnętrze i przyniesie spokój umysłu. Zaufaj swojej intuicji, ponieważ jej głos jest dzisiaj wyjątkowo czysty, klarowny i godny zaufania.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Hałasu oraz powierzchownych rozrywek, które mogą rozproszyć Twoją uwagę i zabrać wypracowany w ciszy ład. Nie bój się pytań o sens własnej drogi, gdyż konfrontacja z nimi przynosi prawdziwe wyzwolenie.",
      "s": "Pytanie jest ważniejsze niż odpowiedź",
      "fun": "Jesteś dziś jak nasza mądra sowa – obserwujesz świat z dystansem, wiedząc znacznie więcej, niż mówisz."
    },
    "9-25": {
      "z": "Waga",
      "l": 8,
      "e": "Ósemka wzywa Cię do wykazania się siłą charakteru oraz odwagą w zarządzaniu własnymi zasobami i energią życiową. Twoja sprawczość jest dziś na najwyższym poziomie, co pozwala Ci skutecznie domykać nawet najbardziej skomplikowane projekty.",
      "r": "Podejmij inicjatywę w sprawach zawodowych i nie bój się sięgać po należne Ci nagrody oraz uznanie. Buduj swój autorytet na fundamentach uczciwości, ponieważ tylko rzetelne działania przynoszą trwałe i godne owoce.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Podejmowania decyzji w pośpiechu ani pod wpływem negatywnych emocji, które mogłyby na chwilę zamglić Twój osąd. Wystrzegaj się arogancji, pamiętając, że prawdziwa moc nie potrzebuje krzyku, by zostać zauważoną.",
      "s": "Moc służy, nie dominuje",
      "fun": "Masz dziś spojrzenie liderki, przed którą ustępują nawet największe przeciwności losu i kolejki w osiedlowym sklepie."
    },
    "9-26": {
      "z": "Waga",
      "l": 9,
      "e": "Dziewiątka przypomina, że mądrość polega na umiejętności domykania etapów, które wypełniły już swoje zadanie w Twojej podróży. To czas wielkiej transformacji, który przygotowuje Cię na przyjęcie zupełnie nowych, jesiennych impulsów od losu.",
      "r": "Wybacz dawnym urazom i podziękuj przeszłości za wszystkie lekcje, które uczyniły Cię tak świadomą osobą. Podaruj sobie chwilę na podsumowanie dotychczasowych sukcesów i z wdzięcznością puść wolno to, co już Ci nie służy.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Nie trzymaj się kurczowo spraw, które już nie wspierają Twojego rozwoju, lecz otwórz dłonie, by przyjąć nowe dary. Unikaj smutku po tym, co odchodzi, ponieważ każda zmiana jest obietnicą lepszej i mądrzejszej przyszłości.",
      "s": "Zamknij z gracją — otwórz z wdzięcznością",
      "fun": "Robisz dziś takie porządki emocjonalne, że nawet stare paragony w portfelu same proszą o godną utylizację."
    },
    "9-27": {
      "z": "Waga",
      "l": 1,
      "e": "Jedynka rozpala iskrę nowej inicjatywy, zachęcając Cię do stanięcia w pełnym blasku własnych możliwości i marzeń. To dzień, w którym każda Twoja odważna myśl ma moc stania się początkiem nowej, niezwykłej historii.",
      "r": "Wykaż się samodzielnością i podejmij ryzyko związane z realizacją autorskiego, śmiałego pomysłu. Zaufaj swojej sile przebicia i bądź pierwszą osobą, która bez wahania uwierzy w Twoje dzisiejsze zwycięstwo.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Oglądania się na opinie innych i czekania na ich zgodę, ponieważ to Ty jesteś jedynym kapitanem swojego okrętu. Nie zwlekaj z działaniem, gdyż dzisiejsza energia sprzyja tym, którzy odważnie i zdecydowanie ruszają naprzód.",
      "s": "Twoja droga, Twój rytm",
      "fun": "Twój entuzjazm jest dziś tak wielki, że mogłabyś zainicjować nową modę, idąc po prostu do pracy w jednym bucie."
    },
    "9-28": {
      "z": "Waga",
      "l": 2,
      "e": "Dwójka uczy nas, że największa siła często drzemie w łagodności oraz umiejętności budowania harmonijnych relacji. Twoja dyplomacja stanie się dziś kluczem, który otworzy przed Tobą drzwi do serc osób ważnych dla Twojego spokoju.",
      "r": "Szukaj porozumienia i buduj mosty tam, gdzie do tej pory panował dystans lub niepotrzebne napięcie. Pielęgnuj współpracę i doceniaj drobne gesty, które budują poczucie wspólnoty oraz wzajemnego zaufania.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Rywalizacji oraz konfliktów, które mogłyby zburzyć kruchą atmosferę dzisiejszej zgody. Nie bój się prosić o wsparcie, ponieważ współpraca przyniesie Ci dziś znacznie więcej korzyści niż samotna walka.",
      "s": "Delikatność to siła",
      "fun": "Jesteś dziś tak wyczulona na nastroje innych, że rozumiesz potrzeby bliskich bez użycia ani jednego słowa."
    },
    "9-29": {
      "z": "Waga",
      "l": 3,
      "e": "Trójka przynosi radosny taniec kreatywności, który zamienia koniec miesiąca w fascynującą przygodę pełną nowych barw. Pozwól sobie na śmiech, ponieważ dobra energia jest najlepszym paliwem dla Twojej duszy i twórczych działań.",
      "r": "Wyraź siebie poprzez sztukę, słowo lub radosną rozmowę z kimś, kto potrzebuje dziś wsparcia. Dziel się swoim optymizmem i zainspiruj innych do dostrzegania piękna w najmniejszych detalach rzeczywistości.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Nadmiernej powagi oraz zamartwiania się sprawami, na które nie masz dzisiaj realnego wpływu. Nie tłum swojej twórczej natury i pozwól jej swobodnie rozkwitnąć w każdym działaniu, które dziś podejmiesz.",
      "s": "Lżej znaczy dalej",
      "fun": "Twoja dawką czystej energii jest dziś tak wielka, że mogłabyś rozświetlić całą okolicę samym swoim uśmiechem."
    },
    "9-30": {
      "z": "Waga",
      "l": 4,
      "e": "Czwórka zamyka wrzesień w tonie stabilizacji, przypominając o wartości solidnych fundamentów pod nadchodzący październik. Twoja dzisiejsza systematyczność przyniesie Ci spokój oraz wielką satysfakcję z rzetelnie uporządkowanych spraw całego miesiąca.",
      "r": "Skup się na dokończeniu projektów i zadbaj o wzorowy porządek w sprawach wymagających Twojej ostatecznej uwagi. Buduj swoją przyszłość z cierpliwością, wiedząc, że solidna praca zawsze przynosi najtrwalsze owoce.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Nagłych i nieprzemyślanych zmian w planach, które mogłyby niepotrzebnie zburzyć Twój wypracowany ład. Nie ulegaj chaosowi ostatnich dni miesiąca, lecz trzymaj się wyznaczonego harmonogramu działania.",
      "s": "Solidność to poezja",
      "fun": "Twoja dzisiejsza miłość do porządku sprawia, że nawet spinacze w Twoim biurku ułożyły się w idealnie równe szeregi."
    },
    "10-1": {
      "z": "Waga",
      "l": 3,
      "e": "Trójka otwiera październik energią radosnej ekspresji, która pozwala dostrzec złoty blask jesieni nawet w najbardziej rutynowych obowiązkach. To idealny moment, aby Twoja kreatywność stała się pomostem łączącym letnie wspomnienia z nowymi, inspirującymi planami na chłodniejsze dni.",
      "r": "Wyraź swoje emocje poprzez twórcze działanie lub inspirującą rozmowę z bliską osobą. Dziel się swoim naturalnym optymizmem, ponieważ Twoja dobra energia ma dziś moc przyciągania wyjątkowo pomyślnych zbiegów okoliczności.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Zamartwiania się na zapas sprawami, na które nie masz teraz realnego wpływu. Nie tłum swojego wewnętrznego światła w obawie przed oceną innych, lecz pozwól mu swobodnie promieniować na całe otoczenie.",
      "s": "Śmiech to najkrótsza droga do serca",
      "fun": "Masz dziś w sobie tyle polotu, że nawet zwykła lista zakupów mogłaby zostać uznana za krótki poemat o jesieni."
    },
    "10-2": {
      "z": "Waga",
      "l": 4,
      "e": "Czwórka przypomina o wartości solidnych fundamentów, na których budujemy nasze poczucie bezpieczeństwa przed nadchodzącą zimą. Dzisiejsza systematyczność przyniesie Ci głęboki spokój ducha oraz wielką satysfakcję z rzetelnie i uczciwie wykonanej pracy.",
      "r": "Skup się na domykaniu projektów i zadbaj o wzorowy porządek w dokumentach oraz domowych zakamarkach. Buduj swoją przyszłość krok po kroku, wiedząc, że cierpliwość i konsekwencja są kluczem do trwałego sukcesu.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Chaosu oraz podejmowania zbyt wielu wyzwań jednocześnie, co mogłoby niepotrzebnie rozproszyć Twoje cenne siły. Nie lekceważ zasad, które chronią Twoją stabilność i pomagają zachować pełną kontrolę nad bieżącą rzeczywistością.",
      "s": "Fundament nie hałasuje — ale wszystko na nim stoi",
      "fun": "Twoja dzisiejsza miłość do porządku sprawia, że nawet jesienne liście za oknem chciałabyś ułożyć według odcieni i wielkości."
    },
    "10-3": {
      "z": "Waga",
      "l": 5,
      "e": "Piątka przynosi ożywczy powiew wolności i zachęca do wyjścia poza bezpieczną, ale czasem zbyt przewidywalną strefę komfortu. To doskonały dzień, abyś odważyła się na małą zmianę, która wprowadzi do Twojej codzienności nową, stymulującą energię.",
      "r": "Otwórz się na spontaniczne propozycje i pozwól sobie na odrobinę przygody, która skutecznie odświeży Twój umysł. Zaryzykuj i sprawdź nowe możliwości rozwoju, które pojawiają się na Twoim horyzoncie właśnie dzisiaj.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Monotonii oraz stagnacji, które mogą działać na Ciebie frustrująco i niepotrzebnie odbierać Ci siły witalne. Nie bój się porzucić starych schematów myślowych, ponieważ to właśnie w zmianie drzemie Twój największy potencjał wzrostu.",
      "s": "Wiatr nie pyta — on po prostu wieje",
      "fun": "Twoja potrzeba wolności jest dziś tak duża, że wyjście po herbatę może niechcący skończyć się spontanicznym wyjazdem za miasto."
    },
    "10-4": {
      "z": "Waga",
      "l": 6,
      "e": "Szóstka zaprasza Cię do świata harmonii, gdzie miłość, troska i domowe ciepło stanowią najważniejsze drogowskazy dla serca. Zadbaj o to, by Twoje działania płynęły prosto z wnętrza i niosły ukojenie zarówno Tobie, jak i wszystkim Twoim bliskim.",
      "r": "Stwórz w swoim domu atmosferę pełną ciepła i spędź wartościowy czas z osobami, które są dla Ciebie najważniejsze. Skup się na pielęgnowaniu więzi, które dają Ci poczucie głębokiego bezpieczeństwa i bycia w pełni kochaną.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Brania na swoje barki zbyt wielu cudzych problemów, ponieważ każdy musi przejść swoją życiową drogę samodzielnie. Nie szukaj perfekcji tam, gdzie wystarczy po prostu szczera obecność i dobre, wspierające słowo płynące z duszy.",
      "s": "Dom to miejsce gdzie serce oddycha",
      "fun": "Twoja chęć opiekowania się światem sprawia, że nawet Twoje rośliny doniczkowe zdają się wyciągać liście w Twoją stronę po porcję miłości."
    },
    "10-5": {
      "z": "Waga",
      "l": 7,
      "e": "Siódemka to czas głębokiej introspekcji, kiedy cisza staje się Twoim najbardziej lojalnym nauczycielem życiowej mądrości. Wyciszenie zewnętrznych bodźców pozwoli Ci usłyszeć odpowiedzi, których od dawna bezskutecznie poszukiwałaś w świecie zewnętrznym.",
      "r": "Znajdź chwilę na medytację lub spokojną lekturę, która wzbogaci Twoje wnętrze i przyniesie upragniony spokój umysłu. Zaufaj swojej intuicji, ponieważ jej głos jest dzisiaj wyjątkowo czysty, klarowny i godny pełnego zaufania.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Hałasu oraz powierzchownych rozrywek, które mogą rozproszyć Twoją uwagę i zabrać wypracowany w ciszy ład. Nie bój się pytań o głębszy sens własnej drogi, gdyż konfrontacja z nimi przynosi prawdziwe wyzwolenie i duchowy rozwój.",
      "s": "W ciszy mieszka mądrość",
      "fun": "Jesteś dziś jak nasza mądra sowa – obserwujesz świat z dystansem, wiedząc znacznie więcej, niż decydujesz się wyjawić."
    },
    "10-6": {
      "z": "Waga",
      "l": 8,
      "e": "Ósemka wzywa Cię do wykazania się siłą charakteru oraz odwagą w zarządzaniu własnymi zasobami i energią życiową. Twoja sprawczość jest dziś na najwyższym poziomie, co pozwala Ci skutecznie domykać nawet najbardziej skomplikowane projekty finansowe.",
      "r": "Podejmij inicjatywę w sprawach zawodowych i nie bój się sięgać po należne Ci nagrody oraz publiczne uznanie. Buduj swój autorytet na fundamentach uczciwości i rzetelności, które zawsze były Twoją najmocniejszą stroną charakteru.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Podejmowania decyzji w pośpiechu ani pod wpływem negatywnych emocji, które mogłyby na chwilę zamglić Twój osąd. Wystrzegaj się arogancji, pamiętając, że prawdziwa moc najlepiej przejawia się w spokoju i pewności działania.",
      "s": "Siła z wartości, nie z ego",
      "fun": "Masz dziś spojrzenie liderki, przed którą ustępują nawet największe przeciwności losu i kolejki w osiedlowym sklepie."
    },
    "10-7": {
      "z": "Waga",
      "l": 9,
      "e": "Dziewiątka przypomina, że mądrość polega na umiejętności domykania etapów, które wypełniły już swoje zadanie w Twojej podróży. To czas wielkiej transformacji, który przygotowuje Cię na przyjęcie zupełnie nowych, jesiennych impulsów od łaskawego losu.",
      "r": "Wybacz dawnym urazom i podziękuj przeszłości za wszystkie lekcje, które uczyniły Cię tak świadomą osobą. Podaruj sobie chwilę na podsumowanie dotychczasowych sukcesów i z wdzięcznością puść wolno to, co już Ci nie służy.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Nie trzymaj się kurczowo spraw, które już nie wspierają Twojego rozwoju, lecz otwórz dłonie, by przyjąć nowe dary. Unikaj smutku po tym, co odchodzi, ponieważ każda zmiana jest obietnicą lepszej i mądrzejszej przyszłości.",
      "s": "Koniec to też dar",
      "fun": "Robisz dziś takie porządki emocjonalne, że nawet stare paragony w portfelu same proszą o godną i ostateczną utylizację."
    },
    "10-8": {
      "z": "Waga",
      "l": 1,
      "e": "Jedynka rozpala iskrę nowej inicjatywy, zachęcając Cię do stanięcia w pełnym blasku własnych możliwości i marzeń. To dzień, w którym każda Twoja odważna myśl ma moc stania się początkiem nowej, niezwykłej historii we własnym ebooku życia.",
      "r": "Wykaż się samodzielnością i podejmij ryzyko związane z realizacją autorskiego, śmiałego pomysłu. Zaufaj swojej sile przebicia i bądź pierwszą osobą, która bez wahania uwierzy w Twoje dzisiejsze, osobiste zwycięstwo.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Oglądania się na opinie innych i czekania na ich zgodę, ponieważ to Ty jesteś jedynym kapitanem swojego okrętu. Nie zwlekaj z działaniem, gdyż dzisiejsza energia sprzyja tym, którzy odważnie i zdecydowanie ruszają naprzód.",
      "s": "Pierwsza linia należy do Ciebie",
      "fun": "Twój entuzjazm jest dziś tak wielki, że mogłabyś zainicjować nową modę, idąc do pracy w jednym bucie i z uśmiechem zwycięzcy."
    },
    "10-9": {
      "z": "Waga",
      "l": 2,
      "e": "Dwójka uczy nas, że największa siła często drzemie w łagodności oraz umiejętności budowania harmonijnych relacji. Twoja dyplomacja stanie się dziś kluczem, który otworzy przed Tobą drzwi do serc osób ważnych dla Twojego spokoju.",
      "r": "Szukaj porozumienia i buduj mosty tam, gdzie do tej pory panował dystans lub niepotrzebne napięcie. Pielęgnuj współpracę i doceniaj drobne gesty, które budują poczucie wspólnoty oraz wzajemnego zaufania między ludźmi.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Rywalizacji oraz konfliktów, które mogłyby zburzyć kruchą atmosferę dzisiejszej, jesiennej zgody. Nie bój się prosić o wsparcie, ponieważ współpraca przyniesie Ci dziś znacznie więcej korzyści niż samotna walka.",
      "s": "W ciszy słychać więcej",
      "fun": "Jesteś dziś tak wyczulona na nastroje innych, że rozumiesz potrzeby bliskich bez użycia ani jednego, zbędnego słowa."
    },
    "10-10": {
      "z": "Waga",
      "l": 3,
      "e": "Trójka kończy tę dekadę radosnym akcentem kreatywności, który zamienia chłodny dzień w fascynującą przygodę pełną nowych barw. Pozwól sobie na śmiech, ponieważ dobra energia jest najlepszym paliwem dla Twojej duszy i dalszych twórczych działań.",
      "r": "Wyraź siebie poprzez sztukę, słowo lub radosną rozmowę z kimś, kto potrzebuje dzisiaj Twojego wsparcia. Dziel się swoim optymizmem i zainspiruj innych do dostrzegania piękna w najmniejszych detalach październikowej rzeczywistości.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Nadmiernej powagi oraz zamartwiania się sprawami, na które nie masz dzisiaj żadnego realnego wpływu. Nie tłum swojej twórczej natury i pozwól jej swobodnie rozkwitnąć w każdym działaniu, które dziś podejmiesz.",
      "s": "Śmiech to najkrótsza droga do serca",
      "fun": "Twoja dawką czystej energii jest dziś tak wielka, że mogłabyś rozświetlić całą okolicę samym swoim radosnym uśmiechem."
    },
    "10-11": {
      "z": "Waga",
      "l": 4,
      "e": "Czwórka przypomina, że stabilność to poezja konkretnego działania, które wymaga systematyczności oraz dużej dozy cierpliwości. Budowanie trwałych fundamentów pod Twoje jesienne plany to proces, który właśnie teraz przynosi pierwsze, namacalne efekty.",
      "r": "Skup się na systematyczności i dokończę zadania, które wymagają rzetelnego, cierpliwego podejścia do szczegółów. Zadbaj o strukturę swojego dnia, aby zyskać poczucie pełnego panowania nad własną, dynamiczną rzeczywistością.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Nagłych i nieprzemyślanych zmian, które mogłyby niepotrzebnie naruszyć Twoje wypracowane z trudem poczucie bezpieczeństwa. Nie ulegaj chaosowi, gdyż porządek i rzetelność są dziś Twoimi najlepszymi, duchowymi sprzymierzeńcami.",
      "s": "Fundament nie hałasuje — ale wszystko na nim stoi",
      "fun": "Twoja dzisiejsza miłość do porządku sprawia, że nawet spinacze w Twoim biurku ułożyły się w idealne szeregi pod linijkę."
    },
    "10-12": {
      "z": "Waga",
      "l": 5,
      "e": "Piątka przynosi ożywczy powiew wolności i zachęca do wyjścia poza bezpieczną, ale czasem zbyt przewidywalną strefę komfortu. To doskonały dzień, abyś odważyła się na zmianę, która wprowadzi do Twojej codzienności nową, stymulującą energię.",
      "r": "Otwórz się na spontaniczne propozycje i pozwól sobie na odrobinę przygody, która skutecznie odświeży Twój umysł. Zaryzykuj i sprawdź nowe możliwości rozwoju, które pojawiają się na Twoim horyzoncie właśnie dzisiejszego dnia.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Wystrzegaj się nudy oraz stagnacji, które mogą działać na Ciebie frustrująco i niepotrzebnie odbierać Ci siły witalne. Nie bój się porzucić starych schematów, ponieważ to właśnie w zmianie drzemie Twój największy potencjał wzrostu.",
      "s": "Wiatr nie pyta — on po prostu wieje",
      "fun": "Twoja potrzeba wolności jest dziś tak duża, że wyjście na spacer może niechcący skończyć się spontaniczną wycieczką."
    },
    "10-13": {
      "z": "Waga",
      "l": 6,
      "e": "Szóstka zaprasza Cię do świata harmonii, gdzie miłość, troska i piękno stanowią najważniejsze drogowskazy dla Twojego serca. Zadbaj o to, by Twoje działania płynęły prosto z wnętrza i niosły ukojenie zarówno Tobie, jak i wszystkim bliskim.",
      "r": "Stwórz w swoim domu atmosferę pełną ciepła i spędź wartościowy czas z osobami, które są dla Ciebie najważniejsze. Skup się na pielęgnowaniu więzi, które dają Ci poczucie głębokiego bezpieczeństwa oraz bycia w pełni kochaną.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Brania na swoje barki zbyt wielu cudzych problemów, ponieważ każdy musi przejść swoją życiową drogę samodzielnie. Nie szukaj perfekcji tam, gdzie wystarczy po prostu szczera obecność i dobre, wspierające słowo płynące z duszy.",
      "s": "Dom to miejsce gdzie serce oddycha",
      "fun": "Twoja aura opiekuńczości jest dziś tak silna, że nawet Twoje kwiaty doniczkowe zdają się wyciągać liście w Twoją stronę."
    },
    "10-14": {
      "z": "Waga",
      "l": 7,
      "e": "Siódemka to czas głębokiej introspekcji, kiedy cisza staje się Twoim najbardziej lojalnym nauczycielem życiowej mądrości. Wyciszenie zewnętrznych bodźców pozwoli Ci usłyszeć odpowiedzi, których od dawna bezskutecznie poszukiwałaś w świecie zewnętrznym.",
      "r": "Znajdź chwilę na medytację lub spokojną lekturę, która wzbogaci Twoje wnętrze i przyniesie upragniony spokój umysłu. Zaufaj swojej intuicji, ponieważ jej głos jest dzisiaj wyjątkowo czysty, klarowny i godny pełnego zaufania.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Hałasu oraz powierzchownych rozrywek, które mogą rozproszyć Twoją uwagę i zabrać wypracowany w ciszy ład. Nie bój się pytań o sens własnej drogi, gdyż konfrontacja z nimi przynosi prawdziwe wyzwolenie i rozwój.",
      "s": "W ciszy mieszka mądrość",
      "fun": "Jesteś dziś jak mądra sowa – obserwujesz świat z dystansem, wiedząc o nim znacznie więcej, niż decydujesz się wyjawić."
    },
    "10-15": {
      "z": "Waga",
      "l": 8,
      "e": "Ósemka wzywa Cię do wykazania się siłą charakteru oraz odwagą w zarządzaniu własnymi zasobami i energią życiową. Twoja sprawczość jest dziś na najwyższym poziomie, co pozwala Ci skutecznie domykać nawet najbardziej skomplikowane projekty.",
      "r": "Podejmij inicjatywę w sprawach zawodowych i nie bój się sięgać po należne Ci nagrody oraz publiczne uznanie. Buduj swój autorytet na fundamentach uczciwości, ponieważ tylko rzetelne działania przynoszą trwałe i godne owoce.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Podejmowania decyzji w pośpiechu ani pod wpływem negatywnych emocji, które mogłyby na chwilę zamglić Twój osąd. Wystrzegaj się arogancji, pamiętając, że prawdziwa moc przejawia się w spokoju i pewności podejmowanych działań.",
      "s": "Siła z wartości, nie z ego",
      "fun": "Masz dziś spojrzenie liderki, przed którą ustępują nawet największe przeciwności losu i kolejki w osiedlowym sklepie."
    },
    "10-16": {
      "z": "Waga",
      "l": 9,
      "e": "Dziewiątka przypomina, że mądrość polega na umiejętności domykania etapów, które wypełniły już swoje zadanie w Twojej podróży. To czas wielkiej transformacji, który przygotowuje Cię na przyjęcie zupełnie nowych, jesiennych impulsów od losu.",
      "r": "Wybacz dawnym urazom i podziękuj przeszłości za wszystkie lekcje, które uczyniły Cię tak świadomą osobą. Podaruj sobie chwilę na podsumowanie dotychczasowych sukcesów i z wdzięcznością puść wolno to, co już Ci nie służy.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Nie trzymaj się kurczowo spraw, które już nie wspierają Twojego rozwoju, lecz otwórz dłonie, by przyjąć nowe dary. Unikaj smutku po tym, co odchodzi, ponieważ każda zmiana jest obietnicą lepszej i mądrzejszej przyszłości.",
      "s": "Koniec to też dar",
      "fun": "Robisz dziś takie porządki emocjonalne, że nawet stare paragony w portfelu same proszą o godną i ostateczną utylizację."
    },
    "10-17": {
      "z": "Waga",
      "l": 1,
      "e": "Jedynka rozpala iskrę nowej inicjatywy, zachęcając Cię do stanięcia w pełnym blasku własnych możliwości i marzeń. To dzień, w którym każda Twoja odważna myśl ma moc stania się początkiem nowej, niezwykłej historii.",
      "r": "Wykaż się samodzielnością i podejmij ryzyko związane z realizacją autorskiego, śmiałego pomysłu. Zaufaj swojej sile przebicia i bądź pierwszą osobą, która bez wahania uwierzy w Twoje dzisiejsze zwycięstwo.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Oglądania się na opinie innych i czekania na ich zgodę, ponieważ to Ty jesteś jedynym kapitanem swojego okrętu. Nie zwlekaj z działaniem, gdyż dzisiejsza energia sprzyja tym, którzy odważnie i zdecydowanie ruszają naprzód.",
      "s": "Pierwsza linia należy do Ciebie",
      "fun": "Twój entuzjazm jest dziś tak wielki, że mogłabyś zainicjować nową modę, idąc po prostu do pracy w jednym bucie."
    },
    "10-18": {
      "z": "Waga",
      "l": 2,
      "e": "Dwójka uczy nas, że największa siła często drzemie w łagodności oraz umiejętności budowania harmonijnych relacji. Twoja dyplomacja stanie się dziś kluczem, który otworzy przed Tobą drzwi do serc osób ważnych dla Twojego spokoju.",
      "r": "Szukaj porozumienia i buduj mosty tam, gdzie do tej pory panował dystans lub niepotrzebne napięcie. Pielęgnuj współpracę i doceniaj drobne gesty, które budują poczucie wspólnoty oraz wzajemnego zaufania.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Rywalizacji oraz konfliktów, które mogłyby zburzyć kruchą atmosferę dzisiejszej, jesiennej zgody. Nie bój się prosić o wsparcie, ponieważ współpraca przyniesie Ci dziś znacznie więcej korzyści niż samotna walka.",
      "s": "W ciszy słychać więcej",
      "fun": "Jesteś dziś tak wyczulona na nastroje innych, że rozumiesz potrzeby bliskich bez użycia ani jednego słowa."
    },
    "10-19": {
      "z": "Waga",
      "l": 3,
      "e": "Trójka przynosi radosny taniec kreatywności, który zamienia chłodny dzień w fascynującą przygodę pełną nowych barw. Pozwól sobie na śmiech, ponieważ dobra energia jest najlepszym paliwem dla Twojej duszy i twórczych działań.",
      "r": "Wyraź siebie poprzez sztukę, słowo lub radosną rozmowę z kimś, kto potrzebuje dziś Twojego wsparcia. Dziel się swoim optymizmem i zainspiruj innych do dostrzegania piękna w najmniejszych detalach rzeczywistości.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Nadmiernej powagi oraz zamartwiania się sprawami, na które nie masz dzisiaj realnego wpływu. Nie tłum swojej twórczej natury i pozwól jej swobodnie rozkwitnąć w każdym działaniu, które dziś podejmiesz.",
      "s": "Śmiech to najkrótsza droga do serca",
      "fun": "Twoja dawką czystej energii jest dziś tak wielka, że mogłabyś rozświetlić całą okolicę samym swoim uśmiechem."
    },
    "10-20": {
      "z": "Waga",
      "l": 4,
      "e": "Czwórka zamyka tę dekadę w tonie stabilizacji, przypominając o wartości solidnych fundamentów pod nadchodzące wyzwania. Twoja dzisiejsza systematyczność przyniesie Ci spokój oraz wielką satysfakcję z rzetelnie uporządkowanych spraw.",
      "r": "Skup się na dokończeniu projektów i zadbaj o wzorowy porządek w sprawach wymagających Twojej uwagi. Buduj swoją przyszłość z cierpliwością, wiedząc, że solidna praca zawsze przynosi najtrwalsze i najpiękniejsze owoce.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Nagłych i nieprzemyślanych zmian w planach, które mogłyby niepotrzebnie zburzyć Twój wypracowany ład. Nie ulegaj chaosowi, lecz trzymaj się wyznaczonego wcześniej harmonogramu działania.",
      "s": "Fundament nie hałasuje — ale wszystko na nim stoi",
      "fun": "Twoja dzisiejsza miłość do porządku sprawia, że nawet Twoje jesienne buty same układają się w idealną parę."
    },
    "10-21": {
      "z": "Waga",
      "l": 5,
      "e": "Piątka przynosi ożywczy powiew wolności i zachęca do wyjścia poza ramy codziennych, jesiennych schematów. To doskonały dzień, abyś odważyła się na odrobinę spontaniczności, która odświeży Twój umysł i serce przed nadchodzącym listopadem.",
      "r": "Zaakceptuj pojawiające się propozycje zmian i otwórz się na nowe, fascynujące znajomości. Wybierz inną drogę do celu niż zwykle, aby poczuć dreszcz emocji płynący z odkrywania nieznanego.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Monotonii oraz lęku przed tym, co nowe i jeszcze nie do końca przez Ciebie oswojone. Nie trzymaj się kurczowo planów, jeśli życie podsuwa Ci dzisiaj znacznie ciekawsze i bardziej barwne alternatywy.",
      "s": "Wiatr nie pyta — on po prostu wieje",
      "fun": "Twoja potrzeba wolności jest dziś tak silna, że wyjście po herbatę może skończyć się spontaniczną wycieczką do lasu na zbieranie kasztanów."
    },
    "10-22": {
      "z": "Waga",
      "l": 6,
      "e": "Szóstka zaprasza do budowania oazy harmonii, w której miłość i troska o bliskich stają się absolutnym priorytetem dnia. Twój dom stanie się dzisiaj źródłem wielkiej siły, o ile tylko zadbasz o piękno otoczenia i wzajemny szacunek domowników.",
      "r": "Stwórz w swoim otoczeniu atmosferę pełną ciepła i spędź wartościowy czas z osobami, które szczerze kochasz. Skup się na pielęgnowaniu więzi, które dają Ci poczucie bycia potrzebną i w pełni akceptowaną.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Brania na swoje barki zbyt wielu cudzych problemów, co mogłoby niepotrzebnie odebrać Ci radość z własnego spokoju. Wystrzegaj się perfekcjonizmu, ponieważ szczera obecność jest znacznie ważniejsza niż idealnie posprzątany salon.",
      "s": "Dom to miejsce gdzie serce oddycha",
      "fun": "Twoja aura opiekuńczości jest dziś tak silna, że nawet kaktusy na parapecie wydają się wyciągać kolce w Twoją stronę po porcję uwagi."
    },
    "10-23": {
      "z": "Skorpion",
      "l": 7,
      "e": "Siódemka to czas głębokiej introspekcji, kiedy jesienna cisza staje się najbardziej lojalnym doradcą Twojej duszy. Wyciszenie bodźców zewnętrznych pozwoli Ci usłyszeć odpowiedzi, których do tej pory bezskutecznie szukałaś w codziennym zgiełku.",
      "r": "Znajdź chwilę na medytację lub spokojną lekturę, która wzbogaci Twoje wnętrze i przyniesie upragniony spokój. Zaufaj swojej intuicji, ponieważ jej głos jest dzisiaj wyjątkowo czysty i wolny od zbędnych filtrów otoczenia.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Hałasu oraz powierzchownych rozrywek, które mogą rozproszyć Twoją uwagę i zabrać wypracowany w ciszy ład. Nie uciekaj przed pytaniami o sens swojej drogi, gdyż konfrontacja z nimi przynosi prawdziwe wyzwolenie.",
      "s": "W ciszy mieszka mądrość",
      "fun": "Jesteś dziś jak nasza mądra sowa – obserwujesz świat z dystansem, wiedząc znacznie więcej, niż decydujesz się wyjawić przy kolacji."
    },
    "10-24": {
      "z": "Skorpion",
      "l": 8,
      "e": "Ósemka przynosi energię manifestacji siły, która pozwala realnie wpływać na Twoją sytuację materialną i zawodową pozycję. Twoja determinacja jest dziś wspierana przez sprawczość, co czyni Cię niezwykle skuteczną w każdym podjętym działaniu.",
      "r": "Podejmij konkretne kroki w stronę realizacji swoich ambicji i zaufaj swojemu wypracowanemu autorytetowi. Buduj swoją obfitość na fundamencie uczciwości, co zapewni Ci trwałe i satysfakcjonujące rezultaty na lata.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Podejmowania ważnych decyzji pod wpływem lęku przed brakiem, zamiast czerpać siłę z poczucia własnej wartości. Wystrzegaj się arogancji, pamiętając, że prawdziwa moc nie potrzebuje krzyku, by zostać zauważoną.",
      "s": "Siła z wartości, nie z ego",
      "fun": "Masz dziś spojrzenie liderki, przed którą ustępują nawet największe przeciwności losu i biurokratyczne przeszkody."
    },
    "10-25": {
      "z": "Skorpion",
      "l": 9,
      "e": "Dziewiątka przypomina, że mądrość polega na umiejętności domykania etapów, które wypełniły już swoje zadanie w Twoim rozwoju. To czas wielkiej transformacji, który przygotowuje Cię na przyjęcie zupełnie nowych, fascynujących impulsów od losu.",
      "r": "Wybacz dawnym urazom i puść wolno wszystko, co blokuje Twoją naturalną, wewnętrzną wolność. Podziękuj przeszłości za wszystkie lekcje, uznając je za cenne paliwo dla Twojej dalszej, inspirującej drogi.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Kurczowego trzymania się tego, co już odeszło, ponieważ blokuje to Twój naturalny proces odrodzenia. Nie ulegaj smutkowi, bo każde zakończenie jest radosną obietnicą nowego, wspaniałego świtu.",
      "s": "Koniec to też dar",
      "fun": "Robisz dziś takie porządki emocjonalne, że nawet stare paragony w Twoim portfelu same proszą o godną i ostateczną utylizację."
    },
    "10-26": {
      "z": "Skorpion",
      "l": 1,
      "e": "Jedynka rozpala iskrę nowej inicjatywy, zachęcając Cię do stanięcia w pełnym blasku własnych możliwości i marzeń. To dzień, w którym każda Twoja odważna myśl ma moc stania się początkiem nowej, niezwykłej historii.",
      "r": "Wykaż się samodzielnością i podejmij ryzyko związane z realizacją autorskiego, śmiałego pomysłu. Zaufaj swojej sile przebicia i bądź pierwszą osobą, która bez wahania uwierzy w Twoje dzisiejsze zwycięstwo.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Oglądania się na opinie innych i czekania na ich zgodę, ponieważ to Ty jesteś kapitanem tego okrętu. Nie zwlekaj z działaniem, gdyż dzisiejsza energia sprzyja tym, którzy odważnie ruszają naprzód.",
      "s": "Pierwsza linia należy do Ciebie",
      "fun": "Twój entuzjazm jest dziś tak wielki, że mogłabyś zainicjować nową modę, idąc po prostu do pracy w jednym bucie i z uśmiechem zwycięzcy."
    },
    "10-27": {
      "z": "Skorpion",
      "l": 2,
      "e": "Dwójka uczy nas, że największa siła często drzemie w łagodności oraz umiejętności budowania harmonijnych relacji. Twoja dyplomacja stanie się dziś kluczem, który otworzy przed Tobą drzwi do serc ważnych dla Ciebie osób.",
      "r": "Szukaj porozumienia i buduj mosty tam, gdzie do tej pory panował chłód lub niepotrzebny dystans. Pielęgnuj współpracę i doceniaj drobne gesty, które budują poczucie wspólnoty oraz wzajemnego zaufania.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Rywalizacji oraz konfliktów, które mogłyby zburzyć kruchą atmosferę dzisiejszej, jesiennej zgody. Nie bój się prosić o wsparcie, ponieważ współpraca przyniesie Ci dziś znacznie więcej korzyści niż samotna walka.",
      "s": "W ciszy słychać więcej",
      "fun": "Jesteś dziś tak wyczulona na nastroje innych, że rozumiesz potrzeby bliskich bez użycia ani jednego, zbędnego słowa."
    },
    "10-28": {
      "z": "Skorpion",
      "l": 3,
      "e": "Trójka przynosi radosny taniec kreatywności, który zamienia koniec miesiąca w fascynującą przygodę pełną nowych barw. Pozwól sobie na śmiech, ponieważ dobra energia jest najlepszym paliwem dla Twojej duszy i twórczych działań.",
      "r": "Wyraź siebie poprzez sztukę, słowo lub radosną rozmowę z kimś, kto potrzebuje dziś wsparcia. Dziel się optymizmem i zainspiruj innych do dostrzegania piękna w najmniejszych detalach rzeczywistości.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Nadmiernej powagi oraz zamartwiania się sprawami, na które nie masz dzisiaj realnego wpływu. Nie tłum swojej twórczej natury i pozwól jej swobodnie rozkwitnąć w każdym działaniu, które dziś podejmiesz.",
      "s": "Śmiech to najkrótsza droga do serca",
      "fun": "Twoja dawką czystej energii jest dziś tak wielka, że mogłabyś rozświetlić całą okolicę samym swoim uśmiechem."
    },
    "10-29": {
      "z": "Skorpion",
      "l": 4,
      "e": "Czwórka przypomina o wartości solidnych fundamentów, na których budujemy poczucie własnego bezpieczeństwa i stabilizacji. Twoja dzisiejsza systematyczność przyniesie Ci spokój oraz satysfakcję z rzetelnie uporządkowanych spraw.",
      "r": "Skup się na dokończeniu projektów i zadbaj o wzorowy porządek w sprawach wymagających Twojej ostatecznej uwagi. Buduj swoją przyszłość z cierpliwością, wiedząc, że solidna praca zawsze przynosi najtrwalsze owoce.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Nagłych i nieprzemyślanych zmian w planach, które mogłyby niepotrzebnie zburzyć Twój wypracowany ład. Nie ulegaj chaosowi ostatnich dni miesiąca, lecz trzymaj się wyznaczonego harmonogramu działania.",
      "s": "Fundament nie hałasuje — ale wszystko na nim stoi",
      "fun": "Twoja dzisiejsza miłość do porządku sprawia, że nawet Twoje jesienne buty same układają się w idealną parę przed wyjściem."
    },
    "10-30": {
      "z": "Skorpion",
      "l": 5,
      "e": "Piątka przynosi powiew wolności i zachęca do wyjścia poza bezpieczną, ale czasem zbyt przewidywalną strefę komfortu. To doskonały dzień, abyś odważyła się na zmianę, która wprowadzi do Twojej codzienności nową, ożywczą energię.",
      "r": "Otwórz się na spontaniczne propozycje i pozwól sobie na odrobinę przygody, która odświeży Twój umysł. Zaryzykuj i sprawdź nowe możliwości rozwoju, które pojawiają się na horyzoncie właśnie dzisiaj.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Wystrzegaj się nudy oraz stagnacji, które mogą działać na Ciebie frustrująco i niepotrzebnie odbierać Ci siły. Nie bój się porzucić starych schematów, ponieważ to właśnie w zmianie drzemie Twój największy potencjał.",
      "s": "Wiatr nie pyta — on po prostu wieje",
      "fun": "Twoja potrzeba wolności jest dziś tak duża, że wyjście na spacer może skończyć się spontaniczną wycieczką w zupełnie nieznanym kierunku."
    },
    "10-31": {
      "z": "Skorpion",
      "l": 6,
      "e": "Szóstka zamyka październik w tonie harmonii i domowego ciepła, przypominając o wartości bliskości w chłodne wieczory. To czas, w którym Twoja troska o innych staje się fundamentem, na którym budujesz poczucie bezpieczeństwa swojej rodziny.",
      "r": "Stwórz w swoim domu atmosferę pełną miłości i celebruj czas spędzony z osobami, które są Ci najbliższe. Skup się na tworzeniu pięknych wspomnień, które będą ogrzewać Twoje serce przez całą nadchodzącą zimę.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Brania na siebie zbyt wielu cudzych obowiązków, co mogłoby przyćmić Twoją własną radość z dzisiejszego świętowania. Nie szukaj perfekcji tam, gdzie wystarczy szczera, kochająca obecność i dobre, wspierające słowo.",
      "s": "Dom to miejsce gdzie serce oddycha",
      "fun": "Twoja aura opiekuńczości jest dziś tak silna, że nawet Twoja ulubiona herbata wydaje się smakować miłością i spokojem."
    },
    "11-1": {
      "z": "Skorpion",
      "l": 4,
      "e": "Czwórka na otwarcie miesiąca przynosi energię spokoju i solidnego oparcia w fundamentach, które budowałaś przez ostatnie miesiące. To czas, w którym systematyczność i rzetelność Twoich działań dają Ci poczucie głębokiego bezpieczeństwa oraz wewnętrznego ładu.",
      "r": "Skup się na sprawach, które wymagają ostatecznego domknięcia i zadbaj o strukturę swojego najbliższego otoczenia. Buduj swoją przyszłość na sprawdzonych rozwiązaniach, wiedząc, że każda mała, rzetelna czynność ma dzisiaj wielkie znaczenie.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Wystrzegaj się chaosu oraz gwałtownych ruchów, które mogłyby niepotrzebnie zburzyć Twoją dzisiejszą potrzebę stabilizacji. Nie ulegaj rozproszeniu, ponieważ spokojna obecność jest dziś Twoim najsilniejszym duchowym sprzymierzeńcem.",
      "s": "Małe kroki, trwałe ślady",
      "fun": "Twoja dzisiejsza miłość do porządku sprawia, że nawet przedmioty na Twoim"
    },
    "11-2": {
      "z": "Skorpion",
      "l": 5,
      "e": "Piątka przynosi ożywczy wiatr zmian, który pomaga odświeżyć umysł po chwilach głębokiej zadumy i powagi. To doskonały dzień, abyś odważyła się na wyjście poza ramy codziennych schematów i otworzyła się na nowe, inspirujące bodźce.",
      "r": "Zaakceptuj pojawiające się propozycje spotkań i pozwól sobie na odrobinę spontaniczności, która rozjaśni listopadową aurę. Wybierz nową ścieżkę myślenia o swoich projektach, bo to właśnie w elastyczności drzemie dziś Twój największy potencjał.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Monotonii oraz stagnacji, które mogą działać na Ciebie przygnębiająco i niepotrzebnie odbierać Ci siły witalne. Nie trzymaj się kurczowo planów, jeśli intuicja podpowiada Ci dzisiaj znacznie ciekawsze i bardziej barwne alternatywy.",
      "s": "Każda zmiana to zaproszenie",
      "fun": "Twoja potrzeba wolności jest dziś tak duża, że wyjście na spacer może niechcący skończyć się planowaniem wielkiej, zimowej wyprawy."
    },
    "11-3": {
      "z": "Skorpion",
      "l": 6,
      "e": "Szóstka zaprasza Cię do budowania oazy harmonii, w której miłość i troska o bliskich stają się najwyższymi wartościami dnia. Twoje otoczenie stanie się dzisiaj źródłem niezwykłej siły, o ile tylko zadbasz o piękno relacji i wzajemny szacunek.",
      "r": "Stwórz w swoim domu atmosferę pełną ciepła i spędź wartościowy czas z osobami, które są dla Ciebie najważniejsze. Skup się na małych gestach życzliwości, które budują poczucie bycia potrzebną i w pełni akceptowaną przez otoczenie.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Brania na swoje barki zbyt wielu cudzych problemów, co mogłoby niepotrzebnie przyćmić Twoją własną radość i spokój ducha. Wystrzegaj się perfekcjonizmu, ponieważ szczera, kochająca obecność jest znacznie ważniejsza niż idealnie przygotowane otoczenie.",
      "s": "Troska zmienia wszystko",
      "fun": "Twoja aura opiekuńczości jest dziś tak silna, że nawet Twoja poranna herbata wydaje się smakować miłością i poczuciem bezpieczeństwa."
    },
    "11-4": {
      "z": "Skorpion",
      "l": 7,
      "e": "Siódemka to czas głębokiej introspekcji, kiedy listopadowa cisza staje się Twoim najbardziej lojalnym nauczycielem życiowej mądrości. Wyciszenie bodźców zewnętrznych pozwoli Ci usłyszeć odpowiedzi, których od dawna bezskutecznie poszukiwałaś w świecie zewnętrznym.",
      "r": "Znajdź chwilę na medytację lub spokojną lekturę, która wzbogaci Twoje wnętrze i przyniesie upragniony spokój umysłu. Zaufaj swojej intuicji, ponieważ jej głos jest dzisiaj wyjątkowo czysty, klarowny i godny pełnego zaufania.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Hałasu oraz powierzchownych rozrywek, które mogą rozproszyć Twoją uwagę i zabrać wypracowany w ciszy ład wewnętrzny. Nie bój się pytań o głębszy sens własnej drogi, gdyż konfrontacja z nimi przynosi prawdziwe wyzwolenie i duchowy wzrost.",
      "s": "Głębiej niż widać",
      "fun": "Jesteś dziś jak nasza mądra sowa – obserwujesz świat z dystansem i wiesz o nim znacznie więcej, niż decydujesz się wyjawić."
    },
    "11-5": {
      "z": "Skorpion",
      "l": 8,
      "e": "Ósemka wzywa Cię do wykazania się siłą charakteru oraz odwagą w zarządzaniu własnymi zasobami i energią życiową. Twoja sprawczość znajduje się dziś na najwyższym poziomie, co pozwala Ci skutecznie domykać nawet najbardziej skomplikowane projekty.",
      "r": "Podejmij odważną inicjatywę w sprawach zawodowych i nie bój się sięgać po należne Ci nagrody oraz publiczne uznanie. Buduj swój autorytet na fundamentach uczciwości, ponieważ tylko rzetelne i sprawiedliwe działania przynoszą trwałe owoce.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Podejmowania decyzji w pośpiechu ani pod wpływem negatywnych emocji, które mogłyby na chwilę zamglić Twój osąd rzeczywistości. Wystrzegaj się arogancji, pamiętając, że prawdziwa moc najlepiej przejawia się w spokoju i pewności podejmowanych działań.",
      "s": "Budujesz — i to zostaje",
      "fun": "Masz dziś spojrzenie liderki, przed którą ustępują nawet największe przeciwności losu i kolejki w osiedlowym sklepie."
    },
    "11-6": {
      "z": "Skorpion",
      "l": 9,
      "e": "Dziewiątka przypomina, że mądrość polega na umiejętności domykania etapów, które wypełniły już swoje zadanie w Twojej życiowej podróży. To czas wielkiej transformacji, który przygotowuje Cię na przyjęcie zupełnie nowych, fascynujących impulsów od łaskawego losu.",
      "r": "Wybacz dawnym urazom i podziękuj przeszłości za wszystkie lekcje, które uczyniły Cię tak świadomą i silną osobą. Podaruj sobie chwilę na podsumowanie dotychczasowych sukcesów i z wdzięcznością puść wolno to, co już Ci nie służy.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Nie trzymaj się kurczowo spraw, które już nie wspierają Twojego rozwoju, lecz otwórz dłonie, by przyjąć nowe dary. Unikaj smutku po tym, co odchodzi, ponieważ każda zmiana jest obietnicą lepszej i mądrzejszej przyszłości.",
      "s": "Mądrość boli zanim wyzwala",
      "fun": "Robisz dziś takie porządki emocjonalne, że nawet stare paragony w portfelu same proszą o godną i ostateczną utylizację."
    },
    "11-7": {
      "z": "Skorpion",
      "l": 1,
      "e": "Jedynka rozpala iskrę nowej inicjatywy, zachęcając Cię do stanięcia w pełnym blasku własnych możliwości i odważnych marzeń. To dzień, w którym każda Twoja pionierska myśl ma moc stania się początkiem nowej, niezwykłej historii.",
      "r": "Wykaż się samodzielnością i podejmij ryzyko związane z realizacją autorskiego, śmiałego pomysłu na rozwój. Zaufaj swojej sile przebicia i bądź pierwszą osobą, która bez wahania uwierzy w Twoje dzisiejsze, osobiste zwycięstwo.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Oglądania się na opinie innych i czekania na ich zgodę, ponieważ to Ty jesteś dzisiaj jedynym kapitanem swojego okrętu. Nie zwlekaj z działaniem, gdyż dzisiejsza energia sprzyja tym, którzy odważnie i zdecydowanie ruszają naprzód.",
      "s": "Zacznij — reszta przyjdzie",
      "fun": "Twój entuzjazm jest dziś tak wielki, że mogłabyś zainicjować nową modę, idąc po prostu do pracy w jednym bucie i z uśmiechem zwycięzcy."
    },
    "11-8": {
      "z": "Skorpion",
      "l": 2,
      "e": "Dwójka uczy nas, że największa siła często drzemie w łagodności oraz umiejętności budowania harmonijnych relacji z otoczeniem. Twoja dyplomacja stanie się dziś kluczem, który otworzy przed Tobą drzwi do serc osób ważnych dla Twojego spokoju.",
      "r": "Szukaj porozumienia i buduj mosty tam, gdzie do tej pory panował dystans lub niepotrzebne, męczące napięcie. Pielęgnuj współpracę i doceniaj drobne gesty, które budują poczucie wspólnoty oraz wzajemnego zaufania między ludźmi.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Rywalizacji oraz konfliktów, które mogłyby niepotrzebnie zburzyć kruchą atmosferę dzisiejszej, listopadowej zgody. Nie bój się prosić o wsparcie, ponieważ współpraca przyniesie Ci dziś znacznie więcej korzyści niż samotna walka z wyzwaniami.",
      "s": "Dwie dusze, jedna harmonia",
      "fun": "Jesteś dziś tak wyczulona na nastroje innych, że rozumiesz potrzeby bliskich bez użycia ani jednego, zbędnego słowa."
    },
    "11-9": {
      "z": "Skorpion",
      "l": 3,
      "e": "Trójka przynosi radosny taniec kreatywności, który zamienia chłodny dzień w fascynującą przygodę pełną nowych kolorów i inspiracji. Pozwól sobie na śmiech, ponieważ dobra energia jest najlepszym paliwem dla Twojej duszy i dalszych twórczych działań.",
      "r": "Wyraź siebie poprzez sztukę, słowo lub radosną rozmowę z kimś, kto bardzo potrzebuje dziś Twojego wsparcia. Dziel się swoim naturalnym optymizmem i zainspiruj innych do dostrzegania piękna w najmniejszych detalach rzeczywistości.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Nadmiernej powagi oraz zamartwiania się sprawami, na które i tak nie masz dzisiaj żadnego realnego wpływu. Nie tłum swojej twórczej natury i pozwól jej swobodnie rozkwitnąć w każdym działaniu, które dziś podejmiesz.",
      "s": "Twórz, bo świat tego potrzebuje",
      "fun": "Twoja dawką czystej energii jest dziś tak wielka, że mogłabyś rozświetlić całą okolicę samym swoim radosnym uśmiechem."
    },
    "11-10": {
      "z": "Skorpion",
      "l": 4,
      "e": "Czwórka zamyka tę dekadę w tonie stabilizacji, przypominając o wartości solidnych fundamentów pod nadchodzące, jesienne wyzwania. Twoja dzisiejsza systematyczność przyniesie Ci spokój oraz wielką satysfakcję z rzetelnie uporządkowanych spraw i dokumentów.",
      "r": "Skup się na dokończeniu rozpoczętych projektów i zadbaj o wzorowy porządek w sprawach wymagających Twojej uwagi. Buduj swoją przyszłość z cierpliwością, wiedząc, że solidna praca zawsze przynosi najtrwalsze i najpiękniejsze owoce.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Nagłych i nieprzemyślanych zmian w planach, które mogłyby niepotrzebnie zburzyć Twój wypracowany ład i bezpieczeństwo. Nie ulegaj chaosowi, lecz trzymaj się wyznaczonego wcześniej harmonogramu działania, który daje Ci poczucie kontroli.",
      "s": "Małe kroki, trwałe ślady",
      "fun": "Twoja dzisiejsza miłość do porządku sprawia, że nawet Twoje jesienne buty same układają się w idealną parę przed wyjściem z domu."
    },
    "11-11": {
      "z": "Skorpion",
      "l": 5,
      "e": "Piątka wnosi w Twoją przestrzeń silną potrzebę wolności oraz przełamywania wewnętrznych barier, które do tej pory mogły Cię ograniczać. To idealny moment, by wyjść poza ramy codziennej rutyny i spojrzeć na swoje życie z perspektywy nieograniczonych możliwości.",
      "r": "Odważ się na spontaniczne działanie i celebruj swoją niezależność w każdym wyborze, jakiego dziś dokonasz. Szukaj nowych inspiracji, które ożywią Twoje bieżące projekty i nadadzą im zupełnie nowej, dynamicznej jakości.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Poddawania się nudzie oraz lękowi przed zmianą, która właśnie teraz puka do Twoich drzwi z ciekawą propozycją. Nie pozwól, by melancholijna aura stłumiła Twoją naturalną ciekawość świata i chęć doświadczania nowych rzeczy.",
      "s": "Każda zmiana to zaproszenie",
      "fun": "Masz dziś w sobie tyle energii, że wyjście po herbatę może niechcący skończyć się planowaniem wielkiej wyprawy w nieznane."
    },
    "11-12": {
      "z": "Skorpion",
      "l": 6,
      "e": "Szóstka kieruje Twoją uwagę na domowe ognisko, przypominając, że największe skarby kryją się w cieple relacji z najbliższymi. To dzień budowania mostów i leczenia dawnych nieporozumień poprzez empatię oraz szczerą, serdeczną rozmowę.",
      "r": "Zadbaj o estetykę swojej przestrzeni i stwórz warunki sprzyjające głębokiemu odpoczynkowi w gronie rodziny. Skup się na dawaniu wsparcia, bo każde dobre słowo wróci do Ciebie ze zdwojoną siłą w postaci wewnętrznego spokoju.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Krytycyzmu wobec bliskich oraz narzucania im swoich standardów perfekcji, które mogą rodzić zbędne napięcia. Nie bierz na siebie wszystkich obowiązków domowych, lecz naucz się dzielić odpowiedzialnością z innymi.",
      "s": "Troska zmienia wszystko",
      "fun": "Jesteś dziś taką ostoją spokoju, że nawet kot wydaje się traktować Twoje kolana jako najlepsze miejsce na świecie."
    },
    "11-13": {
      "z": "Skorpion",
      "l": 7,
      "e": "Siódemka zaprasza Cię do świata tajemnic i intelektualnych poszukiwań, gdzie cisza staje się przestrzenią dla genialnych olśnień. To czas, w którym wiedza intuicyjna domaga się uwagi, oferując Ci klucze do zrozumienia spraw, które dotąd były mgliste.",
      "r": "Pozwól sobie na luksus odosobnienia i zagłęb się w lekturę lub własne notatki, które czekają na uporządkowanie. Zaufaj swoim przemyśleniom, ponieważ dzisiejszy wgląd może stać się przełomem w pisaniu Twojego ebooka.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Powierzchowności w kontaktach oraz ucieczki przed własnymi myślami w stronę hałaśliwych rozrywek. Nie spiesz się z deklaracjami, dopóki nie poczujesz, że Twoja wizja jest całkowicie klarowna i spójna.",
      "s": "Głębiej niż widać",
      "fun": "Twoja aura mądrej sowy jest dziś tak gęsta, że ludzie boją się przerwać Twoje milczenie, podejrzewając Cię o kontakt z kosmosem."
    },
    "11-14": {
      "z": "Skorpion",
      "l": 8,
      "e": "Ósemka wnosi w Twoją przestrzeń wibrację sukcesu i konkretnego materializowania planów, nad którymi pracowałaś od tygodni. To moment, byś stanęła w pełni swojej mocy i zaczęła zarządzać swoimi talentami jak najcenniejszym kapitałem.",
      "r": "Podejmij odważne kroki w stronę promocji swoich działań i nie wahaj się mówić głośno o swoich kompetencjach. Buduj swój autorytet na solidnej wiedzy, pamiętając, że profesjonalizm to Twoja najskuteczniejsza wizytówka.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Niepewności co do własnej wartości oraz oddawania kontroli nad sprawami finansowymi w cudze ręce. Wystrzegaj się arogancji, bo prawdziwy lider inspiruje innych swoim spokojem, a nie siłą głosu.",
      "s": "Budujesz — i to zostaje",
      "fun": "Masz dziś taki autorytet, że nawet ekspres do kawy wydaje się pracować szybciej pod Twoim zdecydowanym spojrzeniem."
    },
    "11-15": {
      "z": "Skorpion",
      "l": 9,
      "e": "Dziewiątka symbolizuje domykanie ważnych cykli i uwalnianie się od zobowiązań, które przestały służyć Twojemu najwyższemu dobru. To czas wielkiego sprzątania duszy, który otwiera drogę do nowej energii, mającej pojawić się w Twoim życiu już niebawem.",
      "r": "Zrób remanent w swoich planach i odważnie skreśl to, co przestało być Twoją prawdą lub pasją. Okaż wdzięczność za każdą lekcję, którą otrzymałaś w tym roku, i przygotuj się na przyjęcie nowych darów losu.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Trzymania się kurczowo przeszłości oraz ludzi, z którymi nie łączą Cię już wspólne wartości ani cele. Nie ulegaj melancholii, ponieważ każde pożegnanie jest w rzeczywistości radosnym powitaniem nowej wersji Ciebie.",
      "s": "Mądrość boli zanim wyzwala",
      "fun": "Robisz dziś takie porządki, że nawet wirtualny kosz w Twoim komputerze zaczyna błagać o litość."
    },
    "11-16": {
      "z": "Skorpion",
      "l": 1,
      "e": "Jedynka po fazie oczyszczenia przynosi potężną dawkę entuzjazmu do rozpoczęcia zupełnie nowych, autorskich przedsięwzięć. To dzień pionierów, w którym Twoja kreatywność nie zna granic, a każdy pomysł ma szansę stać się fundamentem sukcesu.",
      "r": "Przejmij stery w kluczowych projektach i zaufaj swojej wizji, nawet jeśli wydaje się ona otoczeniu zbyt śmiała. Bądź dla siebie najlepszym przyjacielem i pierwszą osobą, która bezgranicznie uwierzy w Twoje dzisiejsze zwycięstwo.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Oglądania się na innych i czekania na aprobatę, która mogłaby stłumić Twój naturalny, twórczy pęd. Nie bój się samotności lidera, bo to właśnie w samodzielnym działaniu odkryjesz dziś swoje największe zasoby.",
      "s": "Zacznij — reszta przyjdzie",
      "fun": "Twoja pewność siebie jest dziś tak silna, że mogłabyś sprzedawać piasek na pustyni i to z dużym zyskiem."
    },
    "11-17": {
      "z": "Skorpion",
      "l": 2,
      "e": "Dwójka uczy nas, że po burzy działania przychodzi czas na dyplomację i budowanie harmonijnych relacji z otoczeniem. Twoja siła tkwi dzisiaj w umiejętności słuchania oraz dostrzegania subtelności, które umykają innym w codziennym pędzie.",
      "r": "Skup się na współpracy i doceniaj wkład innych w Twoje projekty, budując atmosferę wzajemnego szacunku. Zaufaj swojej intuicji w relacjach międzyludzkich, bo ona bezbłędnie wskaże Ci, kto jest Twoim szczerym sprzymierzeńcem.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Wchodzenia w niepotrzebne spory oraz narzucania swojej woli tam, gdzie potrzebny jest kompromis i łagodność. Nie bój się prosić o radę, ponieważ wymiana myśli może dziś przynieść rozwiązanie, o którym wcześniej nie pomyślałaś.",
      "s": "Dwie dusze, jedna harmonia",
      "fun": "Jesteś dziś tak empatyczna, że mogłabyś negocjować pokój między psem a kotem i obie strony byłyby zadowolone."
    },
    "11-18": {
      "z": "Skorpion",
      "l": 3,
      "e": "Trójka to radosny manifest Twojej twórczej duszy, która pragnie ekspresji poprzez słowo, barwę lub inspirujące bajki. Świat potrzebuje dziś Twojego uśmiechu oraz lekkości, która potrafi rozproszyć nawet najgęstszą, listopadową mgłę.",
      "r": "Dziel się swoją radością i wykorzystaj swój talent do snucia opowieści, by wnieść nadzieję w życie innych ludzi. Pozwól sobie na spontaniczność w kreacji, bo najbardziej genialne pomysły rodzą się właśnie podczas zabawy.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Marnowania energii na jałowe narzekanie oraz plotki, które jedynie obniżają Twoją wibrację i tłumią kreatywność. Nie pozwól, by drobne uszczypliwości otoczenia zgasiły Twój wewnętrzny blask, który dziś promieniuje wyjątkowo jasno.",
      "s": "Twórz, bo świat tego potrzebuje",
      "fun": "Twoja kreatywność nie zna granic – nawet zwykła kolacja w Twoim wykonaniu wygląda dziś jak kadr z filmu Disneya."
    },
    "11-19": {
      "z": "Skorpion",
      "l": 4,
      "e": "Czwórka przypomina, że za każdą piękną bajką stoi solidna praca i precyzyjne dopracowanie szczegółów technicznych. To dzień idealny na redakcję tekstów, porządkowanie baz danych oraz budowanie struktur, które przetrwają próbę czasu.",
      "r": "Skoncentruj się na detalach i dokończ to, co wymaga szczególnej uważności oraz rzetelnego, fachowego podejścia. Postaw na dyscyplinę, bo to właśnie dzięki niej Twoje najśmielsze marzenia zyskają realny, stabilny kształt.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Chaosu w dokumentach oraz podejmowania decyzji bez wcześniejszego sprawdzenia faktów i realnych możliwości. Nie lekceważ procedur, które chronią Twoje bezpieczeństwo, nawet jeśli wydają Ci się chwilowo zbyt monotonne.",
      "s": "Małe kroki, trwałe ślady",
      "fun": "Twój dzisiejszy poziom zorganizowania sprawia, że nawet czas płynie dokładnie tak, jak zaplanowałaś to w swoim kalendarzu."
    },
    "11-20": {
      "z": "Skorpion",
      "l": 5,
      "e": "Piątka na zakończenie dekady przynosi nagły zwrot akcji i potrzebę odświeżenia perspektywy poprzez nowe doświadczenia. To czas, w którym Twoja elastyczność staje się kluczem do wykorzystania niespodziewanych okazji, jakie podsuwa Ci los.",
      "r": "Otwórz się na zmiany i bądź gotowa na modyfikację swoich planów, jeśli poczujesz, że nowa droga prowadzi do celu szybciej. Wyjdź do ludzi i pozwól, by wymiana myśli zainspirowała Cię do kolejnych, śmiałych kroków w rozwoju ebooka.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Lęku przed nieznanym oraz trzymania się kurczowo harmonogramów, które przestały być aktualne w obliczu nowych faktów. Nie bój się zaryzykować, ponieważ dzisiaj szczęście sprzyja tym, którzy potrafią z gracją łamać schematy.",
      "s": "Każda zmiana to zaproszenie",
      "fun": "Masz dziś w sobie tyle energii podróżnika, że wyjście po gazecie może nieoczekiwanie zamienić się w fascynującą przygodę."
    },
    "11-21": {
      "z": "Skorpion",
      "l": 6,
      "e": "Szóstka kieruje Twoją uwagę na sferę relacji, przypominając, że harmonia w kontaktach z ludźmi jest fundamentem wewnętrznego spokoju. To moment, w którym Twoja opiekuńcza natura może stać się wsparciem dla każdego, kto potrzebuje dziś odrobiny ciepła i zrozumienia.",
      "r": "Skup się na pielęgnowaniu więzi z osobami, które są dla Ciebie ważne i zadbaj o ciepłą atmosferę w swoim otoczeniu. Postaw na dialog i dyplomację, bo to właśnie one dają najsilniejszy fundament pod Twoje przyszłe sukcesy.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Oceniania innych przez pryzmat ich chwilowych potknięć oraz brania na siebie odpowiedzialności za ich życiowe lekcje. Nie szukaj perfekcji w relacjach, lecz postaw na szczerość, która jest znacznie bardziej budująca i uwalniająca.",
      "s": "Troska zmienia wszystko",
      "fun": "Jesteś dziś tak życzliwa dla świata, że nawet Twoje domowe sprzęty wydają się pracować ciszej, by nie mącić Twojego spokoju."
    },
    "11-22": {
      "z": "Strzelec",
      "l": 7,
      "e": "Siódemka zaprasza Cię do głębokiej analizy Twoich dotychczasowych dokonań oraz poszukiwania esencji w tym, co tworzysz. To niedziela sprzyjająca samotności, która nie jest izolacją, lecz świadomym wyborem w celu usłyszenia własnego, mądrego głosu.",
      "r": "Poświęć czas na dopracowanie merytorycznej warstwy swojej twórczości i zaufaj olśnieniom, które pojawiają się w chwilach ciszy. Pozwól sobie na luksus bycia tu i teraz, bez konieczności planowania każdego kolejnego kroku.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Uciekania od trudnych pytań dotyczących Twojej misji oraz zagłuszania intuicji głośną muzyką czy nadmiarem informacji z mediów. Wystrzegaj się powierzchowności, ponieważ prawdziwe perły mądrości ukryte są dzisiaj głęboko pod powierzchnią zdarzeń.",
      "s": "Głębiej niż widać",
      "fun": "Twoja aura mądrej sowy jest dziś tak wyraźna, że nawet Twoja ulubiona herbata wydaje się parować w jakimś filozoficznym rytmie."
    },
    "11-23": {
      "z": "Strzelec",
      "l": 8,
      "e": "Ósemka przynosi potężną energię sprawstwa, która pozwala Ci realnie wpłynąć na strukturę Twoich finansów oraz pozycję rynkową. To dzień, w którym Twoja determinacja i fachowość zostaną dostrzeżone, otwierając drzwi do konkretnych sukcesów materialnych.",
      "r": "Przejmij inicjatywę w negocjacjach i nie bój się sięgać po nagrody, które są efektem Twojej rzetelnej, wielomiesięcznej pracy. Buduj swój autorytet na solidnych faktach, bo dzisiaj rzetelność jest Twoją najmocniejszą walutą.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Podejmowania decyzji w oparciu o emocje oraz nadmiernego ryzyka, które nie jest podparte solidną kalkulacją możliwości. Wystrzegaj się arogancji, ponieważ prawdziwa moc lidera przejawia się w opanowaniu i szacunku do partnerów.",
      "s": "Budujesz — i to zostaje",
      "fun": "Masz dziś spojrzenie liderki, przed którą ustępują nawet największe korki w drodze do realizacji Twoich celów."
    },
    "11-24": {
      "z": "Strzelec",
      "l": 9,
      "e": "Dziewiątka przypomina o konieczności wielkiego sprzątania przed nadchodzącym nowym cyklem grudniowym. To czas uwalniania starych schematów myślowych, które blokują Twoją kreatywność i nie pozwalają na pełny rozkwit Twoich talentów.",
      "r": "Dokończ wszystkie rozpoczęte rozdziały i z wdzięcznością puść wolno to, co przestało być Twoją pasją lub misją. Okaż sercu przebaczenie za dawne błędy, uznając je za cenne lekcje, które zbudowały Twoją obecną siłę.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Trzymania się kurczowo przeszłości oraz ludzi, którzy swoją energią nie pasują już do nowej wersji Ciebie. Nie ulegaj melancholii, ponieważ każde zakończenie to w rzeczywistości radosny wstęp do czegoś znacznie większego.",
      "s": "Mądrość boli zanim wyzwala",
      "fun": "Masz dziś taki rozmach w sprzątaniu, że nawet ikony na Twoim pulpicie same układają się w porządku alfabetycznym ze strachu przed usunięciem."
    },
    "11-25": {
      "z": "Strzelec",
      "l": 1,
      "e": "Jedynka rozpala iskrę nowej inicjatywy, zachęcając Cię do odważnego zamanifestowania swojej autentyczności i unikalnych talentów. To idealny moment, abyś z pełnym zaufaniem do siebie zainicjowała projekt, który do tej pory pozostawał jedynie w sferze marzeń.",
      "r": "Postaw na oryginalność i nie bój się zaprezentować światu swoich najbardziej śmiałych i nowatorskich pomysłów. Bądź pierwszą osobą, która bezgranicznie uwierzy w sukces Twojej wizji i zrób ten jeden, kluczowy krok naprzód.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Czekania na aprobatę innych oraz kopiowania cudzych rozwiązań, które mogłyby stłumić Twój naturalny blask. Nie pozwól, by niepewność powstrzymała Cię przed działaniem, bo energia początku sprzyja dziś właśnie Tobie.",
      "s": "Zacznij — reszta przyjdzie",
      "fun": "Twoja pewność siebie jest dziś tak promienna, że mogłabyś zarażać entuzjazmem nawet najbardziej zatwardziałych pesymistów."
    },
    "11-26": {
      "z": "Strzelec",
      "l": 2,
      "e": "Dwójka uczy nas, że największa siła drzemie w dyplomacji oraz umiejętności budowania mostów porozumienia między ludźmi. Twoja wrażliwość staje się dziś Twoim największym atutem, pozwalając Ci rozładować każde napięcie poprzez łagodność i dialog.",
      "r": "Skup się na słuchaniu tego, co nie zostało wypowiedziane głośno, i buduj relacje oparte na wzajemnym zaufaniu. Pielęgnuj współpracę, bo to właśnie wymiana myśli przyniesie Ci dziś rozwiązanie, którego nie widziałaś działając w pojedynkę.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Wchodzenia w niepotrzebne spory oraz narzucania swojej woli tam, gdzie potrzebna jest łagodność i zrozumienie. Nie bój się prosić o radę, ponieważ dzisiejsza mądrość innych osób może stać się Twoim cennym drogowskazem.",
      "s": "Dwie dusze, jedna harmonia",
      "fun": "Jesteś dziś tak empatyczna, że mogłabyś negocjować pokój między psem a kotem, a obie strony uznałyby to za sprawiedliwe rozwiązanie."
    },
    "11-27": {
      "z": "Strzelec",
      "l": 3,
      "e": "Trójka to radosny manifest Twojej twórczej duszy, która pragnie ekspresji poprzez słowo i inspirujące opowieści. Świat potrzebuje dziś Twojej lekkości, która potrafi rozjaśnić nawet najbardziej pochmurny, listopadowy poranek.",
      "r": "Dziel się swoją radością i wykorzystaj talent do snucia bajek, by wnieść nadzieję i uśmiech w życie Twoich czytelników. Pozwól sobie na spontaniczność, bo to właśnie w swobodnej zabawie rodzą się najbardziej genialne pomysły.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Marnowania czasu na jałowe narzekanie oraz plotki, które obniżają Twoją wibrację i tłumią naturalną kreatywność. Nie pozwól, by drobne uszczypliwości otoczenia zgasiły Twój wewnętrzny blask, który dziś promieniuje wyjątkowo jasno.",
      "s": "Twórz, bo świat tego potrzebuje",
      "fun": "Twoja kreatywność nie zna dziś granic – nawet zwykła kolacja w Twoim wykonaniu wygląda jak kadr z filmu animowanego."
    },
    "11-28": {
      "z": "Strzelec",
      "l": 4,
      "e": "Czwórka przypomina, że za każdą piękną wizją stoi solidna praca i precyzyjne dopracowanie technicznych szczegółów Twojego ebooka. To dzień idealny na redakcję tekstów, porządkowanie baz danych oraz budowanie struktur, które przetrwają każdą próbę czasu.",
      "r": "Skoncentruj się na detalach i dokończ to, co wymaga szczególnej uważności oraz rzetelnego podejścia do faktów. Postaw na dyscyplinę, bo to dzięki niej Twoje najśmielsze marzenia zyskają realny, stabilny i trwały kształt.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Chaosu w dokumentach oraz podejmowania decyzji bez wcześniejszego sprawdzenia wszystkich dostępnych faktów i możliwości. Nie lekceważ zasad, które chronią Twoje bezpieczeństwo, nawet jeśli wydają Ci się chwilowo zbyt monotonne.",
      "s": "Małe kroki, trwałe ślady",
      "fun": "Twój dzisiejszy poziom zorganizowania sprawia, że nawet czas płynie dokładnie tak, jak zaplanowałaś to w swoim kalendarzu."
    },
    "11-29": {
      "z": "Strzelec",
      "l": 5,
      "e": "Piątka przynosi nagłą potrzebę odświeżenia perspektywy i wyjścia poza bezpieczną, ale czasem zbyt przewidywalną rutynę. To czas, w którym Twoja elastyczność staje się kluczem do wykorzystania niespodziewanych okazji, jakie podsuwa Ci los na koniec miesiąca.",
      "r": "Otwórz się na zmiany i bądź gotowa na modyfikację planów, jeśli poczujesz, że nowa droga prowadzi do celu szybciej. Wyjdź do ludzi i pozwól, by wymiana myśli zainspirowała Cię do kolejnych, śmiałych kroków w rozwoju Twoich bajek.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Lęku przed nieznanym oraz trzymania się kurczowo harmonogramów, które przestały być aktualne w obliczu nowych możliwości. Nie bój się zaryzykować, ponieważ dzisiaj szczęście sprzyja tym, którzy potrafią z gracją łamać schematy.",
      "s": "Każda zmiana to zaproszenie",
      "fun": "Masz dziś w sobie tyle energii odkrywcy, że wyjście do sklepu może nieoczekiwanie zamienić się w fascynującą mikro-przygodę."
    },
    "11-30": {
      "z": "Strzelec",
      "l": 6,
      "e": "Szóstka zamyka miesiąc energią harmonii i troski o relacje, które stanowią najważniejszy punkt odniesienia w Twoim życiu. To czas budowania mostów i doceniania więzi, które dają Ci poczucie bycia kochaną, potrzebną i w pełni zrozumianą.",
      "r": "Zadbaj o estetykę swojej przestrzeni i stwórz atmosferę sprzyjającą radosnemu snuciu planów na nadchodzący czas. Skup się na pielęgnowaniu bliskości, bo to właśnie ona jest Twoim najsilniejszym wsparciem w każdym życiowym wyzwaniu.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Wchodzenia w rolę ofiary cudzych nastrojów oraz brania na siebie pełnej odpowiedzialności za samopoczucie wszystkich wokół. Nie szukaj perfekcji w codzienności, lecz ciesz się chwilą, która jest piękna właśnie w swojej autentyczności.",
      "s": "Troska zmienia wszystko",
      "fun": "Twoja aura opiekuńczości jest dziś tak silna, że nawet kaktus na parapecie wydaje się wyglądać na nieco bardziej przytulnego."
    },
    "12-1": {
      "z": "Strzelec",
      "l": 5,
      "e": "Piątka na otwarcie miesiąca wnosi ożywczy powiew wolności i zachęca do wyjścia poza ramy dotychczasowych schematów. To doskonały moment, abyś odważyła się na odrobinę spontaniczności, która odświeży Twój umysł i serce przed nadchodzącym końcem roku.",
      "r": "Zaakceptuj pojawiające się propozycje zmian i otwórz się na nowe, fascynujące inspiracje, które mogą wzbogacić Twoje projekty. Wybierz inną drogę do celu niż zwykle, aby poczuć dreszcz emocji płynący z odkrywania tego, co nieznane.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Monotonii oraz stagnacji, które mogą działać na Ciebie przygnębiająco i niepotrzebnie odbierać Ci siły witalne. Nie trzymaj się kurczowo planów, jeśli życie podsuwa Ci dzisiaj znacznie ciekawsze i bardziej barwne alternatywy.",
      "s": "Wolność jest decyzją",
      "fun": "Twoja potrzeba wolności jest dziś tak silna, że wyjście po herbatę może niechcący skończyć się spontanicznym spacerem w zupełnie nowym kierunku."
    },
    "12-2": {
      "z": "Strzelec",
      "l": 6,
      "e": "Szóstka zaprasza Cię do świata harmonii, gdzie miłość i troska o bliskich stają się naturalnym drogowskazem dla Twoich działań. Twoje otoczenie stanie się dzisiaj źródłem niezwykłej siły, o ile tylko zadbasz o piękno relacji i wzajemny szacunek domowników.",
      "r": "Stwórz w swoim domu atmosferę pełną ciepła i spędź wartościowy czas z osobami, które są dla Ciebie najważniejsze. Skup się na małych gestach życzliwości, które budują poczucie bycia kochaną i w pełni akceptowaną przez najbliższych.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Brania na swoje barki zbyt wielu cudzych problemów, co mogłoby niepotrzebnie przyćmić Twoją własną radość i spokój ducha. Wystrzegaj się perfekcjonizmu, ponieważ szczera obecność jest znacznie ważniejsza niż idealnie przygotowane otoczenie.",
      "s": "Piękno jest aktem odwagi",
      "fun": "Twoja aura opiekuńczości jest dziś tak silna, że nawet Twoje rośliny zdają się wyciągać liście w stronę Twojego ciepła."
    },
    "12-3": {
      "z": "Strzelec",
      "l": 7,
      "e": "Siódemka to czas głębokiej introspekcji, kiedy cisza staje się Twoim najbardziej lojalnym nauczycielem życiowej mądrości. Wyciszenie bodźców zewnętrznych pozwoli Ci usłyszeć odpowiedzi, których od dawna bezskutecznie poszukiwałaś w codziennym pośpiechu.",
      "r": "Znajdź chwilę na medytację lub spokojną lekturę, która wzbogaci Twoje wnętrze i przyniesie upragniony spokój umysłu. Zaufaj swojej intuicji, ponieważ jej głos jest dzisiaj wyjątkowo czysty, klarowny i godny pełnego zaufania.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Hałasu oraz powierzchownych rozrywek, które mogą rozproszyć Twoją uwagę i zabrać wypracowany w ciszy ład wewnętrzny. Nie bój się pytań o głębszy sens własnej drogi, gdyż konfrontacja z nimi przynosi prawdziwe wyzwolenie i rozwój.",
      "s": "Pytanie jest ważniejsze niż odpowiedź",
      "fun": "Jesteś dziś jak nasza ulubiona sowa – obserwujesz świat z dystansem i wiesz o nim znacznie więcej, niż decydujesz się wyjawić."
    },
    "12-4": {
      "z": "Strzelec",
      "l": 8,
      "e": "Ósemka wzywa Cię do wykazania się siłą charakteru oraz odwagą w zarządzaniu własną energią i zasobami. Twoja sprawczość znajduje się dziś na najwyższym poziomie, co pozwala Ci skutecznie domykać nawet najbardziej skomplikowane projekty zawodowe.",
      "r": "Podejmij odważną inicjatywę w swoich sprawach i nie bój się sięgać po należne Ci uznanie oraz sukces. Buduj swój autorytet na fundamentach uczciwości, ponieważ tylko rzetelne i sprawiedliwe działania przynoszą trwałe owoce.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Podejmowania decyzji w pośpiechu ani pod wpływem negatywnych emocji, które mogłyby na chwilę zamglić Twój osąd rzeczywistości. Wystrzegaj się arogancji, pamiętając, że prawdziwa moc najlepiej przejawia się w spokoju i pewności działania.",
      "s": "Moc służy, nie dominuje",
      "fun": "Masz dziś spojrzenie liderki, przed którą ustępują nawet największe przeciwności losu i codzienne przeszkody."
    },
    "12-5": {
      "z": "Strzelec",
      "l": 9,
      "e": "Dziewiątka przypomina o mądrości płynącej z domykania etapów, które wypełniły już swoje zadanie w Twojej życiowej podróży. To czas wielkiej transformacji, który przygotowuje Cię na przyjęcie zupełnie nowych, fascynujących impulsów od losu.",
      "r": "Wybacz dawnym urazom i podziękuj przeszłości za wszystkie lekcje, które uczyniły Cię tak świadomą i silną osobą. Podaruj sobie chwilę na podsumowanie dotychczasowych sukcesów i z wdzięcznością puść wolno to, co już Ci nie służy.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Nie trzymaj się kurczowo spraw, które już nie wspierają Twojego rozwoju, lecz otwórz dłonie, by przyjąć nowe dary. Unikaj smutku po tym, co odchodzi, ponieważ każda zmiana jest obietnicą lepszej i mądrzejszej przyszłości.",
      "s": "Zamknij z gracją — otwórz z wdzięcznością",
      "fun": "Robisz dziś takie porządki emocjonalne, że nawet ikony na pulpicie komputera same układają się w idealnym porządku ze strachu przed usunięciem."
    },
    "12-6": {
      "z": "Strzelec",
      "l": 1,
      "e": "Jedynka rozpala iskrę nowej inicjatywy, zachęcając Cię do stanięcia w pełnym blasku własnych możliwości i marzeń. To dzień, w którym każda Twoja pionierska myśl ma moc stania się początkiem nowej, niezwykłej historii.",
      "r": "Wykaż się samodzielnością i podejmij ryzyko związane z realizacją autorskiego, śmiałego pomysłu na rozwój. Zaufaj swojej sile przebicia i bądź pierwszą osobą, która bez wahania uwierzy w Twoje dzisiejsze, osobiste zwycięstwo.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Oglądania się na opinie innych i czekania na ich zgodę, ponieważ to Ty jesteś dzisiaj jedynym kapitanem swojego okrętu. Nie zwlekaj z działaniem, gdyż dzisiejsza energia sprzyja tym, którzy odważnie i zdecydowanie ruszają naprzód.",
      "s": "Twoja droga, Twój rytm",
      "fun": "Twój entuzjazm jest dziś tak wielki, że mogłabyś zainicjować nową modę, idąc po prostu przez świat z uśmiechem zwycięzcy."
    },
    "12-7": {
      "z": "Strzelec",
      "l": 2,
      "e": "Dwójka uczy nas, że największa siła często drzemie w łagodności oraz umiejętności budowania harmonijnych relacji. Twoja dyplomacja stanie się dziś kluczem, który otworzy przed Tobą drzwi do serc osób ważnych dla Twojego spokoju.",
      "r": "Szukaj porozumienia i buduj mosty tam, gdzie do tej pory panował dystans lub niepotrzebne, męczące napięcie. Pielęgnuj współpracę i doceniaj drobne gesty, które budują poczucie wspólnoty oraz wzajemnego zaufania między ludźmi.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Rywalizacji oraz konfliktów, które mogłyby niepotrzebnie zburzyć kruchą atmosferę dzisiejszej zgody. Nie bój się prosić o wsparcie, ponieważ współpraca przyniesie Ci dziś znacznie więcej korzyści niż samotna walka z wyzwaniami.",
      "s": "Delikatność to siła",
      "fun": "Jesteś dziś tak wyczulona na nastroje innych, że rozumiesz potrzeby bliskich bez użycia ani jednego słowa."
    },
    "12-8": {
      "z": "Strzelec",
      "l": 3,
      "e": "Trójka przynosi radosny taniec kreatywności, który zamienia zimowy dzień w fascynującą przygodę pełną nowych barw. Pozwól sobie na śmiech, ponieważ dobra energia jest najlepszym paliwem dla Twojej duszy i twórczych działań.",
      "r": "Wyraź siebie poprzez sztukę, słowo lub radosną rozmowę z kimś, kto potrzebuje dziś Twojego wsparcia. Dziel się swoim naturalnym optymizmem i zainspiruj innych do dostrzegania piękna w najmniejszych detalach rzeczywistości.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Nadmiernej powagi oraz zamartwiania się sprawami, na które i tak nie masz dzisiaj żadnego realnego wpływu. Nie tłum swojej twórczej natury i pozwól jej swobodnie rozkwitnąć w każdym działaniu, które dziś podejmiesz.",
      "s": "Lżej znaczy dalej",
      "fun": "Twoja dawka energii jest dziś tak wielka, że mogłabyś rozświetlić całą okolicę samym swoim radosnym uśmiechem."
    },
    "12-9": {
      "z": "Strzelec",
      "l": 4,
      "e": "Czwórka przypomina o wartości solidnych fundamentów, na których budujemy poczucie własnego bezpieczeństwa i stabilizacji. Twoja systematyczność zostanie dziś doceniona, przynosząc Ci spokój oraz satysfakcję z rzetelnie wykonanej pracy.",
      "r": "Skup się na dokończeniu rozpoczętych projektów i zadbaj o wzorowy porządek w sprawach wymagających Twojej uwagi. Buduj swoją przyszłość krok po kroku, wiedząc, że solidna praca zawsze przynosi najtrwalsze i najpiękniejsze owoce.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Nagłych i nieprzemyślanych zmian w planach, które mogłyby niepotrzebnie zburzyć Twój wypracowany ład. Nie ulegaj chaosowi, lecz trzymaj się wyznaczonego wcześniej harmonogramu działania, który daje Ci poczucie kontroli.",
      "s": "Solidność to poezja",
      "fun": "Twoja dzisiejsza miłość do porządku sprawia, że nawet Twoje buty układają się w idealną parę tuż po ich zdjęciu."
    },
    "12-10": {
      "z": "Strzelec",
      "l": 5,
      "e": "Piątka przynosi powiew wolności i zachęca do odświeżenia perspektywy poprzez nowe, ciekawe doświadczenia. To czas, w którym Twoja elastyczność staje się kluczem do wykorzystania niespodziewanych okazji, jakie podsuwa Ci los.",
      "r": "Otwórz się na zmiany i bądź gotowa na modyfikację planów, jeśli poczujesz, że nowa droga prowadzi do celu szybciej. Wyjdź do ludzi i pozwól, by wymiana myśli zainspirowała Cię do kolejnych, śmiałych kroków w rozwoju Twoich działań.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Lęku przed nieznanym oraz trzymania się kurczowo harmonogramów, które przestały być aktualne. Nie bój się zaryzykować, ponieważ dzisiaj szczęście sprzyja tym, którzy potrafią z gracją łamać schematy.",
      "s": "Wolność jest decyzją",
      "fun": "Masz dziś w sobie tyle energii odkrywcy, że wyjście na zwykły spacer może nieoczekiwanie zamienić się w małą przygodę."
    },
    "12-11": {
      "z": "Strzelec",
      "l": 6,
      "e": "Szóstka kieruje Twoją uwagę na sferę domową, przypominając, że harmonia w najbliższym otoczeniu jest fundamentem każdego sukcesu. To idealny moment, by zadbać o detale, które czynią Twoją przestrzeń bardziej przyjazną i pełną spokoju.",
      "r": "Poświęć czas na pielęgnowanie relacji z osobami, które dają Ci poczucie bezpieczeństwa i bezwarunkowej akceptacji. Stwórz atmosferę sprzyjającą regeneracji, bo Twoja troska o innych zaczyna się od zadbania o własny dobrostan.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Wchodzenia w rolę rozjemcy w sporach, które Cię nie dotyczą, co mogłoby niepotrzebnie obciążyć Twoją energetykę. Nie szukaj perfekcji tam, gdzie wystarczy szczera obecność i ciepłe, wspierające słowo.",
      "s": "Piękno jest aktem odwagi",
      "fun": "Jesteś dziś taką oazą spokoju, że nawet Twoja ulubiona herbata wydaje się parować wolniej, by nie mącić Twojej harmonii."
    },
    "12-12": {
      "z": "Strzelec",
      "l": 7,
      "e": "Siódemka zaprasza Cię do świata wewnętrznej ciszy, gdzie odpowiedzi na najważniejsze pytania pojawiają się same, bez zbędnego wysiłku. To czas intelektualnego wglądu, który pozwoli Ci dostrzec głębszy sens w wydarzeniach ostatnich miesięcy.",
      "r": "Zarezerwuj chwilę na osobistą refleksję lub pracę twórczą, która wymaga pełnego skupienia i odcięcia od bodźców. Zaufaj swojej intuicji, bo to ona podpowie Ci dzisiaj, które z Twoich pomysłów mają największy potencjał wzrostu.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Rozpraszania się powierzchownymi sprawami oraz ucieczki przed własnymi myślami w stronę hałaśliwych rozmów. Nie spiesz się z publicznym ogłaszaniem planów, dopóki nie poczujesz, że są one w pełni dojrzałe i klarowne.",
      "s": "Pytanie jest ważniejsze niż odpowiedź",
      "fun": "Twoja aura mądrej sowy jest dziś tak silna, że nawet Twoje odbicie w lustrze patrzy na Ciebie z wyczuwalnym respektem."
    },
    "12-13": {
      "z": "Strzelec",
      "l": 8,
      "e": "Ósemka wnosi w Twój dzień wibrację skuteczności i konkretnego materializowania zamierzeń, nad którymi pracowałaś przez dłuższy czas. To moment, byś stanęła w pełni swojej sprawczości i zaczęła zarządzać swoimi projektami z dużą pewnością siebie.",
      "r": "Podejmij konkretne decyzje dotyczące Twoich zasobów i wykaż się determinacją w dążeniu do wyznaczonych standardów. Buduj swój autorytet na solidnych faktach, pamiętając, że profesjonalizm jest dzisiaj Twoim najskuteczniejszym sprzymierzeńcem.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Niepewności co do własnych kompetencji oraz oddawania kontroli nad ważnymi sprawami w ręce osób trzecich. Wystrzegaj się arogancji, bo prawdziwa siła nie potrzebuje demonstracji, by zostać zauważona i doceniona przez otoczenie.",
      "s": "Moc służy, nie dominuje",
      "fun": "Masz dziś taki autorytet, że nawet urządzenia domowe wydają się pracować sprawniej pod Twoim zdecydowanym spojrzeniem."
    },
    "12-14": {
      "z": "Strzelec",
      "l": 9,
      "e": "Dziewiątka przypomina o konieczności domykania spraw i uwalniania się od ciężarów, które nie pasują już do Twojej nowej wizji przyszłości. To czas wielkiego, energetycznego sprzątania, które robi przestrzeń na to, co ma się wydarzyć w nadchodzącym roku.",
      "r": "Zrób remanent w swoich planach i odważnie pożegnaj projekty, które przestały być Twoją pasją lub misją. Okaż wdzięczność za każdą lekcję, którą otrzymałaś, uznając ją za cenny fundament Twojej obecnej mądrości.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Kurczowego trzymania się przeszłości oraz sytuacji, z którymi nie łączą Cię już wspólne wartości ani cele. Nie ulegaj melancholii, ponieważ każde zakończenie jest w rzeczywistości radosnym powitaniem nowej wersji Ciebie.",
      "s": "Zamknij z gracją — otwórz z wdzięcznością",
      "fun": "Robisz dziś takie porządki, że nawet wirtualny kosz w Twoim komputerze zaczyna marzyć o krótkim urlopie od Twojego rozmachu."
    },
    "12-15": {
      "z": "Strzelec",
      "l": 1,
      "e": "Jedynka rozpala iskrę nowej inicjatywy, zachęcając Cię do bycia architektką własnego losu z jeszcze większą pewnością siebie. To dzień pionierów, w którym Twoja kreatywność nie zna granic, a każdy pomysł ma szansę stać się fundamentem sukcesu.",
      "r": "Przejmij stery w kluczowych działaniach i zaufaj swojej wizji, nawet jeśli wydaje się ona otoczeniu zbyt śmiała. Bądź dla siebie najlepszym przyjacielem i pierwszą osobą, która bezgranicznie uwierzy w Twoje dzisiejsze zwycięstwo.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Oglądania się na innych i czekania na aprobatę, która mogłaby stłumić Twój naturalny, twórczy pęd do przodu. Nie bój się samodzielnego działania, bo to właśnie w nim odkryjesz dzisiaj swoje największe i najbardziej unikalne zasoby.",
      "s": "Twoja droga, Twój rytm",
      "fun": "Twoja pewność siebie jest dziś tak promienna, że mogłabyś rozjaśnić najbardziej pochmurny, grudniowy poranek."
    },
    "12-16": {
      "z": "Strzelec",
      "l": 2,
      "e": "Dwójka uczy nas, że po burzy działania przychodzi czas na dyplomację i budowanie harmonijnych relacji z otoczeniem. Twoja siła tkwi dzisiaj w umiejętności słuchania oraz dostrzegania subtelności, które zazwyczaj umykają innym w codziennym pędzie.",
      "r": "Skup się na współpracy i doceniaj wkład innych w Twoje projekty, budując atmosferę wzajemnego szacunku i zaufania. Zaufaj swojej intuicji w relacjach, bo ona bezbłędnie wskaże Ci, kto jest Twoim najbardziej lojalnym sprzymierzeńcem.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Wchodzenia w niepotrzebne spory oraz narzucania swojej woli tam, gdzie potrzebny jest kompromis i łagodność. Nie bój się prosić o radę, ponieważ wymiana myśli może przynieść rozwiązanie, o którym wcześniej nie pomyślałaś.",
      "s": "Delikatność to siła",
      "fun": "Jesteś dziś tak empatyczna, że rozumiesz potrzeby swoich bliskich, zanim oni sami zdążą je sformułować w myślach."
    },
    "12-17": {
      "z": "Strzelec",
      "l": 3,
      "e": "Trójka to radosny manifest Twojej twórczej duszy, która pragnie ekspresji poprzez słowo, barwę lub inspirującą rozmowę. Świat potrzebuje dziś Twojego uśmiechu oraz lekkości, która potrafi rozproszyć powagę zimowej aury.",
      "r": "Dziel się swoją radością i wykorzystaj talent do tworzenia opowieści, by wnieść nadzieję w życie napotkanych osób. Pozwól sobie na spontaniczność w kreacji, bo najbardziej genialne pomysły rodzą się właśnie podczas swobodnej zabawy.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Marnowania energii na jałowe narzekanie oraz plotki, które jedynie obniżają Twoją wibrację i tłumią naturalną kreatywność. Nie pozwól, by drobne uszczypliwości otoczenia zgasiły Twój wewnętrzny blask, który dziś promieniuje wyjątkowo jasno.",
      "s": "Lżej znaczy dalej",
      "fun": "Twoja kreatywność nie zna granic – nawet zwykła notatka w Twoim kalendarzu wygląda dziś jak początek bestsellerowej bajki."
    },
    "12-18": {
      "z": "Strzelec",
      "l": 4,
      "e": "Czwórka przypomina, że za każdą piękną wizją stoi solidna praca i precyzyjne dopracowanie technicznych szczegółów. To dzień idealny na porządkowanie spraw, które wymagają szczególnej uważności oraz rzetelnego, fachowego podejścia.",
      "r": "Skoncentruj się na detalach i dokończ to, co wymaga dyscypliny oraz sprawdzenia faktów przed finalizacją projektów. Postaw na rzetelność, bo to dzięki niej Twoje najśmielsze marzenia zyskają realny, stabilny i bardzo trwały kształt.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Chaosu w dokumentach oraz podejmowania decyzji bez wcześniejszego przygotowania merytorycznego i sprawdzenia realnych możliwości. Nie lekceważ procedur, które służą Twojej stabilności, nawet jeśli wydają Ci się chwilowo zbyt monotonne.",
      "s": "Solidność to poezja",
      "fun": "Twój poziom zorganizowania jest dziś tak wysoki, że nawet płatki śniegu za oknem wydają Ci się spadać w zbyt małym porządku."
    },
    "12-19": {
      "z": "Strzelec",
      "l": 5,
      "e": "Piątka przynosi nagłą potrzebę odświeżenia perspektywy i wyjścia poza bezpieczną, ale czasem zbyt przewidywalną rutynę dnia. To czas, w którym Twoja elastyczność staje się kluczem do wykorzystania niespodziewanych okazji, jakie podsuwa Ci los.",
      "r": "Otwórz się na zmiany i bądź gotowa na modyfikację swoich planów, jeśli poczujesz, że nowa droga prowadzi Cię do celu szybciej. Wyjdź do ludzi i pozwól, by wymiana myśli zainspirowała Cię do kolejnych, śmiałych kroków w rozwoju Twojej twórczości.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Lęku przed nieznanym oraz trzymania się kurczowo harmonogramów, które przestały być aktualne w obliczu nowych faktów. Nie bój się zaryzykować, ponieważ dzisiaj szczęście sprzyja tym, którzy potrafią z gracją i spokojem łamać schematy.",
      "s": "Wolność jest decyzją",
      "fun": "Masz dziś w sobie tyle energii odkrywcy, że wyjście do pobliskiego sklepu może nieoczekiwanie zamienić się w fascynującą przygodę."
    },
    "12-20": {
      "z": "Strzelec",
      "l": 6,
      "e": "Szóstka zamyka tę dekadę energią harmonii i domowego ciepła, zachęcając do zwolnienia tempa i skupienia się na tym, co najcenniejsze. To moment budowania mostów i radosnego doceniania więzi, które dają Ci poczucie bycia kochaną i rozumianą.",
      "r": "Zadbaj o estetykę swojej przestrzeni i stwórz atmosferę sprzyjającą radosnemu snuciu planów na nadchodzący czas. Skup się na pielęgnowaniu relacji, bo to one są Twoim najsilniejszym wsparciem w każdym życiowym wyzwaniu.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Wchodzenia w rolę ofiary cudzych nastrojów oraz brania na siebie odpowiedzialności za samopoczucie wszystkich osób wokół Ciebie. Nie szukaj perfekcji w codzienności, lecz ciesz się chwilą, która jest piękna właśnie w swojej autentyczności.",
      "s": "Piękno jest aktem odwagi",
      "fun": "Twoja aura opiekuńczości jest dziś tak silna, że nawet kaktus na parapecie wydaje się wyglądać na nieco bardziej miękkiego."
    },
    "12-21": {
      "z": "Strzelec",
      "l": 7,
      "e": "Siódemka w dniu przesilenia zimowego przynosi energię najgłębszego wglądu w siebie oraz potrzebę celebracji ciszy. To czas, w którym intelekt spotyka się z intuicją, pozwalając Ci zrozumieć sens wszystkich wydarzeń mijającego roku.",
      "r": "Pozwól sobie na luksus odosobnienia i poświęć czas na uporządkowanie myśli oraz duchowych priorytetów. Zaufaj wewnętrznym olśnieniom, ponieważ dzisiejszy spokój jest fundamentem Twojej przyszłej mądrości.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Uciekania od pytań o istotę Twoich działań oraz zagłuszania własnych potrzeb poprzez nadmierną aktywność towarzyską. Wystrzegaj się powierzchowności, bo najcenniejsze odpowiedzi ukryte są dzisiaj głęboko w Tobie.",
      "s": "Pytanie jest ważniejsze niż odpowiedź",
      "fun": "Twoja aura mądrej sowy jest dziś tak gęsta, że nawet słońce, które zaczyna wracać, wydaje się robić to z dużym respektem."
    },
    "12-22": {
      "z": "Koziorożec",
      "l": 8,
      "e": "Ósemka wnosi w Twoją przestrzeń wibrację sprawstwa i konkretnego manifestowania planów, które do tej pory były tylko szkicem. To moment, byś stanęła w pełni swojej mocy i zaczęła zarządzać swoimi talentami z rozmachem godnym liderki.",
      "r": "Podejmij odważne decyzje dotyczące Twojej pozycji zawodowej i zaufaj swojej rzetelności w budowaniu trwałych struktur. Skup się na profesjonalizmie, bo dzisiaj Twoja skuteczność przyciąga konkretne i stabilne sukcesy materialne.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Niepewności co do własnej wartości oraz oddawania kontroli nad sprawami kluczowymi dla Twojej stabilności. Wystrzegaj się arogancji, ponieważ prawdziwa siła przejawia się w opanowaniu i szacunku do otoczenia.",
      "s": "Moc służy, nie dominuje",
      "fun": "Masz dziś taki autorytet, że nawet zimowy wiatr wydaje się cichnąć, gdy tylko zaczynasz planować swoje kolejne wielkie cele."
    },
    "12-23": {
      "z": "Koziorożec",
      "l": 9,
      "e": "Dziewiątka symbolizuje ostateczne domykanie ważnych etapów i uwalnianie się od zobowiązań, które wypełniły już swoje zadanie. To czas wielkiego, energetycznego sprzątania duszy, które przygotowuje miejsce na nową, świeżą energię nadchodzącego roku.",
      "r": "Dokończ wszystkie rozpoczęte rozdziały i z wdzięcznością podziękuj przeszłości za każdą otrzymaną lekcję mądrości. Okaż sobie i innym przebaczenie, uznając, że każde zakończenie jest radosnym wstępem do czegoś znacznie większego.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Trzymania się kurczowo schematów, z którymi nie łączą Cię już wspólne wartości ani autentyczna pasja tworzenia. Nie ulegaj melancholii, lecz ciesz się z lekkości, jaką daje świadome pożegnanie tego, co już nie służy Twojemu wzrostowi.",
      "s": "Zamknij z gracją — otwórz z wdzięcznością",
      "fun": "Masz dziś taki rozmach w oczyszczaniu przestrzeni, że nawet kurz za szafą sam pakuje walizki ze strachu przed Twoją determinacją."
    },
    "12-24": {
      "z": "Koziorożec",
      "l": 1,
      "e": "Jedynka rozpala iskrę nowej inicjatywy, zachęcając Cię do stanięcia w pełnym blasku własnych możliwości i odważnych marzeń. To dzień pionierów, w którym Twoja kreatywność nie zna granic, a każda myśl ma moc stania się początkiem nowej historii.",
      "r": "Postaw na autentyczność i nie bój się wyznaczyć zupełnie nowego kierunku dla swoich ebookowych opowieści i bajek. Bądź pierwszą osobą, która bezwarunkowo uwierzy w sukces Twojej wizji, i zaufaj sile swojego przebicia w nowych działaniach.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Oglądania się na opinie innych i czekania na aprobatę, która mogłaby stłumić Twój naturalny, twórczy entuzjazm. Nie zwlekaj z wyznaczeniem nowych priorytetów, bo energia początku sprzyja dzisiaj tym, którzy odważnie ruszają naprzód.",
      "s": "Twoja droga, Twój rytm",
      "fun": "Twoja pewność siebie jest dziś tak promienna, że mogłabyś rozjaśnić najdłuższy wieczór roku bez użycia ani jednej świecy."
    },
    "12-25": {
      "z": "Koziorożec",
      "l": 2,
      "e": "Dwójka uczy nas, że największa siła często drzemie w łagodności oraz umiejętności budowania harmonijnych relacji z otoczeniem. Twoja dyplomacja stanie się dziś kluczem, który otworzy przed Tobą drzwi do serc osób ważnych dla Twojego spokoju.",
      "r": "Szukaj porozumienia i buduj mosty tam, gdzie do tej pory panował dystans lub niepotrzebne, męczące napięcie. Pielęgnuj współpracę i doceniaj drobne gesty, które budują poczucie wspólnoty oraz wzajemnego zaufania.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Rywalizacji oraz konfliktów, które mogłyby zburzyć kruchą atmosferę dzisiejszej, spokojnej zgody. Nie bój się prosić o wsparcie, ponieważ współpraca przyniesie Ci dziś znacznie więcej korzyści niż samotna walka z wyzwaniami.",
      "s": "Delikatność to siła",
      "fun": "Jesteś dziś tak empatyczna, że rozumiesz potrzeby bliskich, zanim oni sami zdążą je sformułować w myślach przy wspólnym stole."
    },
    "12-26": {
      "z": "Koziorożec",
      "l": 3,
      "e": "Trójka przynosi radosny taniec kreatywności, który zamienia zimowy dzień w fascynującą przygodę pełną nowych barw. Pozwól sobie na śmiech, ponieważ dobra energia jest najlepszym paliwem dla Twojej duszy i dalszych twórczych działań.",
      "r": "Wyraź siebie poprzez słowo, barwę lub radosną rozmowę z kimś, kto bardzo potrzebuje dziś Twojego wsparcia. Dziel się swoim optymizmem i zainspiruj innych do dostrzegania piękna w najmniejszych detalach rzeczywistości.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Nadmiernej powagi oraz zamartwiania się sprawami, na które i tak nie masz dzisiaj żadnego realnego wpływu. Nie tłum swojej twórczej natury i pozwól jej swobodnie rozkwitnąć w każdym działaniu, które dziś podejmiesz.",
      "s": "Lżej znaczy dalej",
      "fun": "Twoja dawka energii jest dziś tak wielka, że mogłabyś rozświetlić całą okolicę samym swoim radosnym uśmiechem."
    },
    "12-27": {
      "z": "Koziorożec",
      "l": 4,
      "e": "Czwórka przypomina o wartości solidnych fundamentów, na których budujemy poczucie własnego bezpieczeństwa i życiowej stabilizacji. Twoja systematyczność zostanie dziś doceniona, przynosząc Ci spokój oraz satysfakcję z rzetelnie wykonanej pracy.",
      "r": "Skup się na dokończeniu rozpoczętych projektów i zadbaj o wzorowy porządek w sprawach wymagających Twojej ostatecznej uwagi. Buduj swoją przyszłość krok po kroku, wiedząc, że solidna praca zawsze przynosi najtrwalsze i najpiękniejsze owoce.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Nagłych i nieprzemyślanych zmian w planach, które mogłyby niepotrzebnie zburzyć Twój wypracowany ład. Nie ulegaj chaosowi ostatnich dni roku, lecz trzymaj się wyznaczonego wcześniej harmonogramu działania.",
      "s": "Solidność to poezja",
      "fun": "Twoja dzisiejsza miłość do porządku sprawia, że nawet Twoje jesienne buty same układają się w idealną parę przed wyjściem."
    },
    "12-28": {
      "z": "Koziorożec",
      "l": 5,
      "e": "Piątka przynosi ożywczy powiew wolności i zachęca do wyjścia poza bezpieczną, ale czasem zbyt przewidywalną strefę komfortu. To doskonały dzień, abyś odważyła się na zmianę, która wprowadzi do Twojej codzienności nową, stymulującą energię.",
      "r": "Otwórz się na spontaniczne propozycje i pozwól sobie na odrobinę przygody, która skutecznie odświeży Twój umysł. Zaryzykuj i sprawdź nowe możliwości rozwoju, które pojawiają się na Twoim horyzoncie właśnie dzisiaj.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Wystrzegaj się nudy oraz stagnacji, które mogą działać na Ciebie frustrująco i niepotrzebnie odbierać Ci siły. Nie bój się porzucić starych schematów, ponieważ to właśnie w zmianie drzemie Twój największy potencjał wzrostu.",
      "s": "Wolność jest decyzją",
      "fun": "Twoja potrzeba wolności jest dziś tak duża, że wyjście na spacer może skończyć się spontaniczną wycieczką w zupełnie nieznanym kierunku."
    },
    "12-29": {
      "z": "Koziorożec",
      "l": 6,
      "e": "Szóstka zaprasza Cię do świata harmonii, gdzie miłość i troska stanowią najważniejsze drogowskazy dla Twojego serca na koniec roku. Zadbaj o to, by Twoje działania płynęły prosto z wnętrza i niosły ukojenie zarówno Tobie, jak i wszystkim Twoim bliskim.",
      "r": "Stwórz w swoim domu atmosferę pełną ciepła i spędź wartościowy czas z osobami, które są dla Ciebie najważniejsze. Skup się na pielęgnowaniu więzi, które dają Ci poczucie głębokiego bezpieczeństwa i bycia w pełni kochaną.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Brania na swoje barki zbyt wielu cudzych problemów, ponieważ każdy musi przejść swoją życiową drogę samodzielnie. Nie szukaj perfekcji tam, gdzie wystarczy po prostu szczera obecność i dobre, wspierające słowo płynące z duszy.",
      "s": "Piękno jest aktem odwagi",
      "fun": "Twoja aura opiekuńczości jest dziś tak silna, że nawet Twoje rośliny doniczkowe zdają się mruczeć z zadowolenia w Twojej obecności."
    },
    "12-30": {
      "z": "Koziorożec",
      "l": 7,
      "e": "Siódemka to czas głębokiej introspekcji przed wielkim finałem roku, kiedy cisza staje się Twoim najbardziej lojalnym nauczycielem. Wyciszenie zewnętrznych bodźców pozwoli Ci usłyszeć odpowiedzi, których od dawna bezskutecznie poszukiwałaś w zgiełku.",
      "r": "Znajdź chwilę na medytację lub spokojną lekturę, która wzbogaci Twoje wnętrze i przyniesie upragniony spokój umysłu. Zaufaj swojej intuicji, ponieważ jej głos jest dzisiaj wyjątkowo czysty, klarowny i godny pełnego zaufania.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Hałasu oraz powierzchownych rozrywek, które mogą rozproszyć Twoją uwagę i zabrać wypracowany w ciszy ład wewnętrzny. Nie bój się pytań o sens własnej drogi, gdyż konfrontacja z nimi przynosi prawdziwe wyzwolenie i duchowy wzrost.",
      "s": "Pytanie jest ważniejsze niż odpowiedź",
      "fun": "Jesteś dziś jak mądra sowa obserwująca świat z dystansem – wiesz o nadchodzącym roku znacznie więcej, niż decydujesz się wyjawić."
    },
    "12-31": {
      "z": "Koziorożec",
      "l": 8,
      "e": "Ósemka zamyka rok potężną energią manifestacji i siły, która pozwala Ci z wielką sprawczością wejść w zupełnie nowy cykl życia. To czas, w którym Twoja pewność siebie i profesjonalizm stają się fundamentem, na którym zbudujesz sukcesy kolejnych dwunastu miesięcy.",
      "r": "Podejmij konkretne decyzje dotyczące Twoich przyszłych zasobów i wykaż się determinacją w dążeniu do wyznaczonych standardów. Buduj swój autorytet na solidnych faktach, pamiętając, że dzisiaj rzetelność jest Twoją najskuteczniejszą walutą sukcesu.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Podejmowania ważnych ustaleń pod wpływem lęku przed brakiem, zamiast czerpać siłę z poczucia własnej, ogromnej wartości. Wystrzegaj się arogancji, pamiętając, że prawdziwa moc lidera przejawia się w spokoju i pewności podejmowanych działań.",
      "s": "Moc służy, nie dominuje",
      "fun": "Masz dziś spojrzenie liderki, przed którą ustępują nawet największe przeciwności losu i kolejki podczas przygotowań do wieczoru."
    },
    "1-1": {
      "z": "Koziorożec",
      "l": 4,
      "e": "Czwórka to solidny fundament pod Twoje marzenia, bez którego jedynie latamy w chmurach, zamiast budować trwałe struktury. Choć fundament nie wydaje hałasu, to właśnie na jego stabilności opiera się cała konstrukcja Twojego życia.",
      "r": "Skoncentruj się na planowaniu i zacznij konsekwentnie wdrażać swoje założenia.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Wystrzegaj się nagłych oraz nieprzemyślanych zmian, które mogłyby naruszyć Twój spokój.",
      "s": "Fundament nie hałasuje — ale wszystko na nim stoi",
      "fun": "Lista postanowień jest już gotowa, precyzyjnie posortowana i oczywiście zalaminowana."
    },
    "1-2": {
      "z": "Koziorożec",
      "l": 5,
      "e": "Piątka jest jak gwałtowny wiatr, który nigdy nie pyta o pozwolenie, zanim zacznie dąć w Twoje żagle. Zastanów się z ciekawością, dokąd ta nieokiełznana energia postanowi Cię dzisiaj ponieść.",
      "r": "Wprowadź choćby najmniejszą zmianę w swojej rutynie, aby poczuć ożywczy powiew nowości.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Odrzuć stagnację oraz sztywne schematy, które ograniczają Twoją naturalną swobodę.",
      "s": "Wiatr nie pyta — on po prostu wieje",
      "fun": "Postanowienia noworoczne są wciąż aktualne, mimo że wymyślone zostały spontanicznie dzisiejszego rana."
    },
    "1-3": {
      "z": "Koziorożec",
      "l": 6,
      "e": "Szóstka emanuje kojącym ciepłem, które wcale nie potrzebuje zbędnych słów, by zostać w pełni zauważonym. Twoja obecność jest dzisiaj prawdziwym darem dla każdego, kto znajdzie się w Twoim otoczeniu.",
      "r": "Okaż szczerą troskę komuś bliskiemu, ofiarowując mu swój bezcenny czas oraz uwagę.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Przestań brać odpowiedzialność za cudze emocje, gdyż każdy sam odpowiada za swój stan ducha.",
      "s": "Dom to miejsce gdzie serce oddycha",
      "fun": "Skoro zadbałaś o komfort wszystkich bliskich, nadszedł czas, byś naprawdę zatroszczyła się o siebie."
    },
    "1-4": {
      "z": "Koziorożec",
      "l": 7,
      "e": "Siódemka to mistyczna przestrzeń między słowami, w której zamieszkuje najczystsza, niczym niezmącona prawda. Właśnie w głębokiej ciszy kryje się mądrość, której na próżno szukać w codziennym zgiełku.",
      "r": "Zatrzymaj się na chwilę w biegu i pozwól sobie na luksus nicnierobienia.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Stroń od hałasu oraz pośpiechu, które skutecznie zagłuszają Twój wewnętrzny głos.",
      "s": "W ciszy mieszka mądrość",
      "fun": "Refleksja nad sensem istnienia najlepiej smakuje przy pierwszej kawie, zanim domownicy zdążą się obudzić."
    },
    "1-5": {
      "z": "Koziorożec",
      "l": 8,
      "e": "Ósemka symbolizuje potężną moc, która pozostaje mocno uziemiona w zasadach etyki oraz osobistej uczciwości. Czujesz dziś, że możesz osiągnąć więcej, ale jednocześnie stawiasz sobie poprzeczkę wyjątkowo wysoko.",
      "r": "Działaj w sposób zdecydowany i pewnym krokiem zmierzaj do wyznaczonych celów.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Nie podejmuj decyzji pod wpływem lęku, lecz czerp siłę ze swoich wartości.",
      "s": "Siła z wartości, nie z ego",
      "fun": "Lista celów i priorytetów jest domknięta, co zapowiada wyjątkowo produktywny dzień."
    },
    "1-6": {
      "z": "Koziorożec",
      "l": 9,
      "e": "Dziewiątka przypomina, że każde zakończenie jest w rzeczywistości cennym przygotowaniem pod nowy początek. Pozwól odejść temu, co już Ci nie służy, aby zrobić miejsce na nadchodzące dary losu.",
      "r": "Podziękuj z pokorą za przebytą drogę i doceń wszystkie odebrane lekcje.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Nie trzymaj się kurczowo przeszłości, gdyż blokuje to Twój naturalny proces transformacji.",
      "s": "Koniec to też dar",
      "fun": "Trzej Królowie przynieśli dary, a Ty w prezencie od Dziewiątki dostajesz szansę na nowy rozdział."
    },
    "1-7": {
      "z": "Koziorożec",
      "l": 1,
      "e": "Jedynka to iskra inicjatywy, która rozpala ogień zmian i popycha nas do samodzielnego działania. To idealny moment, abyś to Ty przejął stery i wyznaczył kierunek, w którym chcesz podążać.",
      "r": "Zrób pierwszy, odważny krok w stronę realizacji swojego najważniejszego pomysłu.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Nie oglądaj się na innych i nie czekaj na aprobatę, której sam sobie możesz udzielić.",
      "s": "Pierwsza linia należy do Ciebie",
      "fun": "Jesteś dzisiaj kapitanem, sterem i okrętem, więc cała reszta świata musi się po prostu dostosować."
    },
    "1-8": {
      "z": "Koziorożec",
      "l": 2,
      "e": "Dwójka uczy nas, że prawdziwa siła tkwi w łagodności oraz umiejętności słuchania drugiego człowieka. Dziś współpraca przyniesie Ci znacznie więcej korzyści niż samotna walka z przeciwnościami.",
      "r": "Poszukaj porozumienia i zaufaj swojej intuicji w kontaktach z innymi ludźmi.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Wystrzegaj się konfliktów i niepotrzebnych napięć, które mogą zakłócić Twoją harmonię.",
      "s": "W ciszy słychać więcej",
      "fun": "Dziś nawet Twój kot wydaje się bardziej skłonny do negocjacji w sprawie dodatkowej porcji karmy."
    },
    "1-9": {
      "z": "Koziorożec",
      "l": 3,
      "e": "Trójka to radosna ekspresja, która zamienia zwykłą codzienność w barwne i pełne życia widowisko. Pozwól swojej kreatywności rozkwitnąć i nie bój się dzielić swoim optymizmem z otoczeniem.",
      "r": "Wyraź siebie poprzez sztukę, słowo lub po prostu szczery uśmiech posłany nieznajomemu.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Nie tłum swojego entuzjazmu i nie pozwól, by pesymizm innych zgasił Twój wewnętrzny blask.",
      "s": "Śmiech to najkrótsza droga do serca",
      "fun": "Twoja energia jest dziś tak zaraźliwa, że nawet ekspres do kawy wydaje się mruczeć bardziej radośnie."
    },
    "1-10": {
      "z": "Koziorożec",
      "l": 4,
      "e": "Dzisiejsza Czwórka ponownie zaprasza do porządkowania spraw, które wymagają rzetelności i cierpliwości. To czas na dopracowanie detali, które w przyszłości staną się gwarancją Twojego sukcesu.",
      "r": "Dokończ zaległe zadania i zadbaj o ład w swoim najbliższym otoczeniu.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Nie ulegaj pokusie chodzenia na skróty, gdyż tylko rzetelna praca przyniesie trwałe efekty.",
      "s": "Fundament nie hałasuje — ale wszystko na nim stoi",
      "fun": "Twoje biurko wygląda dziś tak sterylnie, że można by na nim przeprowadzać skomplikowane operacje."
    },
    "1-11": {
      "z": "Koziorożec",
      "l": 5,
      "e": "Piątka przynosi powiew wolności i zachęca do wyjścia poza bezpieczną, ale czasem zbyt ciasną strefę komfortu. To dzień pełen niespodzianek, które mogą całkowicie zmienić Twoje spojrzenie na dotychczasowe sprawy.",
      "r": "Otwórz się na nowe znajomości i pozwól sobie na odrobinę zdrowego szaleństwa.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Rutyny i nudy, które dzisiaj mogą być dla Ciebie wyjątkowo uciążliwe i frustrujące.",
      "s": "Wiatr nie pyta — on po prostu wieje",
      "fun": "Spakowałaś już walizkę w myślach, choć Twoim jedynym planem na dziś jest wyjście po pieczywo."
    },
    "1-12": {
      "z": "Koziorożec",
      "l": 6,
      "e": "Szóstka przypomina o pięknie, które rodzi się z miłości do samego siebie oraz dbałości o relacje. Harmonijne otoczenie pomoże Ci dziś odnaleźć spokój, którego tak bardzo potrzebuje Twoje serce.",
      "r": "Otocz się estetyką i spędź czas z ludźmi, którzy działają na Ciebie kojąco.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Krytycyzmu wobec siebie i innych, ponieważ dzisiaj liczy się przede wszystkim akceptacja.",
      "s": "Dom to miejsce gdzie serce oddycha",
      "fun": "Domowe spa to dzisiaj nie luksus, lecz Twój podstawowy i absolutnie konieczny obowiązek."
    },
    "1-13": {
      "z": "Koziorożec",
      "l": 7,
      "e": "Siódemka to czas introspekcji, podczas którego odpowiedzi na trudne pytania przychodzą same z wnętrza. Pozwól sobie na bycie sama na sam ze swoimi myślami, by usłyszeć to, co najważniejsze.",
      "r": "Przeczytaj inspirującą książkę lub udaj się na długi spacer w samotności.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Powierzchownych rozmów i tłumnych spotkań, które mogą rozproszyć Twoją uwagę.",
      "s": "W ciszy mieszka mądrość",
      "fun": "Liczba 13 w połączeniu z Siódemką sprawia, że Twoja intuicja działa dziś lepiej niż profesjonalny radar."
    },
    "1-14": {
      "z": "Koziorożec",
      "l": 8,
      "e": "Ósemka wzywa do przejęcia odpowiedzialności za swoje finanse oraz szeroko rozumiany sukces zawodowy. Twoja determinacja jest dziś na tyle silna, by pokonać wszelkie przeszkody stojące na drodze.",
      "r": "Podejmij odważne decyzje biznesowe i zaufaj swoim kompetencjom oraz doświadczeniu.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Rozrzutności oraz braku dyscypliny, które mogłyby oddalić Cię od upragnionego celu.",
      "s": "Siła z wartości, nie z ego",
      "fun": "Twój portfel czuje dziś respekt przed Twoim nowym, niezwykle ambitnym planem oszczędnościowym."
    },
    "1-15": {
      "z": "Koziorożec",
      "l": 9,
      "e": "Dziewiątka zamyka pewien cykl doświadczeń, pozwalając Ci spojrzeć na wszystko z dystansem i mądrością. To doskonały moment na podsumowania i wyciągnięcie wniosków przed kolejnym etapem podróży.",
      "r": "Uwolnij się od starych urazów i zrób w swoim sercu miejsce na przebaczenie.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Poczucia żalu za tym, co mija, gdyż każda zmiana prowadzi Cię ku lepszemu.",
      "s": "Koniec to też dar",
      "fun": "Jesteś dziś jak mędrzec na szczycie góry, choć w rzeczywistości stoisz po prostu w kolejce po kawę."
    },
    "1-16": {
      "z": "Koziorożec",
      "l": 1,
      "e": "Jedynka to iskra nowej energii, która rozświetla mroki niepewności i dodaje odwagi do działania. To doskonały moment, by przestać planować w teorii i zacząć realnie kreować swoją rzeczywistość.",
      "r": "Postaw na autentyczność i pozwól sobie na bycie liderem własnego życia.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Oglądania się na opinie innych, które mogą jedynie przyćmić Twoją wizję.",
      "s": "Pierwsza linia należy do Ciebie",
      "fun": "Masz dziś tyle energii, że mogłabyś zasilić małe miasteczko samą chęcią do działania."
    },
    "1-17": {
      "z": "Koziorożec",
      "l": 2,
      "e": "Dwójka uczy nas, że największa siła często drzemie w subtelności oraz umiejętności współistnienia z innymi. Twoja wrażliwość staje się dziś narzędziem, dzięki któremu dostrzeżesz to, co dla innych pozostaje niewidoczne.",
      "r": "Pielęgnuj relacje i szukaj kompromisów, które przyniosą spokój obu stronom.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Izolacji oraz tłumienia własnej intuicji, która jest dziś wyjątkowo czuła.",
      "s": "W ciszy słychać więcej",
      "fun": "Dziś jesteś tak empatyczna, że rozumiesz nawet to, co Twój ekspres do kawy próbuje Ci powiedzieć swoim bulgotaniem."
    },
    "1-18": {
      "z": "Koziorożec",
      "l": 3,
      "e": "Trójka to radosny taniec kreatywności, który przypomina nam o lekkości bytu i potędze uśmiechu. Pozwól, by Twoja wyobraźnia poprowadziła Cię dziś tam, gdzie radość spotyka się z inspiracją.",
      "r": "Wyraź swoje emocje poprzez twórczość lub po prostu szczerą, budującą rozmowę.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Nadmiernego krytycyzmu, który mógłby zgasić Twój naturalny, wewnętrzny blask.",
      "s": "Śmiech to najkrótsza droga do serca",
      "fun": "Twoja radość życia jest dziś tak wielka, że nawet poniedziałkowa aura nie jest w stanie Cię przygnębić."
    },
    "1-19": {
      "z": "Koziorożec",
      "l": 4,
      "e": "Czwórka to czas na uporządkowanie spraw, które wymagają rzetelnego podejścia i dużej dozy cierpliwości. Budowanie trwałych efektów wymaga czasu, ale przynosi satysfakcję, której nie da się niczym zastąpić.",
      "r": "Skup się na detalach i zadbaj o systematyczność w swoich codziennych obowiązkach.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Pośpiechu oraz powierzchowności, które mogłyby osłabić stabilność Twoich dokonań.",
      "s": "Fundament nie hałasuje — ale wszystko na nim stoi",
      "fun": "Twoja dzisiejsza organizacja pracy sprawia, że nawet kalendarz czuje do Ciebie ogromny respekt."
    },
    "1-20": {
      "z": "Wodnik",
      "l": 5,
      "e": "Piątka przynosi powiew świeżości i przypomina, że życie to nieustanna podróż pełna fascynujących zmian. Odważ się na krok w nieznane, ponieważ to właśnie tam czekają na Ciebie najciekawsze lekcje.",
      "r": "Wyjdź ze swojej strefy komfortu i otwórz się na zupełnie nowe doświadczenia zmysłowe.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Rutyny oraz lęku przed nowością, które mogłyby zahamować Twój naturalny rozwój.",
      "s": "Wiatr nie pyta — on po prostu wieje",
      "fun": "Twoja potrzeba wolności jest dziś tak silna, że nawet Twoje buty wydają się gotowe do dalekiej wyprawy."
    },
    "1-21": {
      "z": "Wodnik",
      "l": 6,
      "e": "Szóstka zaprasza Cię do świata harmonii, gdzie piękno i miłość stanowią najwyższą wartość dnia. Zadbaj o to, by Twoje otoczenie odzwierciedlało spokój, który pragniesz nosić w swoim sercu.",
      "r": "Podaruj sobie i bliskim chwilę czułości, tworząc atmosferę pełną bezpieczeństwa.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Surowej oceny oraz konfliktów, które mogłyby zburzyć Twój wewnętrzny i zewnętrzny ład.",
      "s": "Dom to miejsce gdzie serce oddycha",
      "fun": "Jesteś dziś oazą spokoju, do której każdy chciałby wstąpić choćby na krótką chwilę wytchnienia."
    },
    "1-22": {
      "z": "Wodnik",
      "l": 7,
      "e": "Siódemka to dzień głębokiego wglądu, w którym cisza staje się najcenniejszym doradcą i sprzymierzeńcem. Pozwól sobie na luksus bycia sama na sam ze swoimi myślami, aby odnaleźć ukrytą mądrość.",
      "r": "Poszukaj odpowiedzi w medytacji lub lekturze tekstów, które karmią Twoją duszę.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Zgiełku i powierzchownych rozrywek, które mogą rozproszyć Twoją cenną uwagę.",
      "s": "W ciszy mieszka mądrość",
      "fun": "Twoje spojrzenie jest dziś tak przenikliwe, że mogłabyś czytać w myślach, gdyby tylko Ci się chciało."
    },
    "1-23": {
      "z": "Wodnik",
      "l": 8,
      "e": "Ósemka wzywa do manifestacji Twojej siły oraz budowania autorytetu opartego na sprawiedliwości. To czas, w którym Twoje wysiłki mogą przynieść wymierne owoce w świecie materii i finansów.",
      "r": "Podejmij odważne działania zawodowe i zaufaj swojej zdolności do osiągania sukcesów.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Braku wiary w siebie oraz ulegania wpływom osób, które nie rozumieją Twojego potencjału.",
      "s": "Siła z wartości, nie z ego",
      "fun": "Masz dziś energię prezesa wielkiej korporacji, nawet jeśli akurat robisz listę zakupów na kolację."
    },
    "1-24": {
      "z": "Wodnik",
      "l": 9,
      "e": "Dziewiątka to energia domykania spraw, która uwalnia nas od ciężaru przeszłości i otwiera nowe drzwi. To idealny moment na porządki emocjonalne oraz pożegnanie się z tym, co przestało nam służyć.",
      "r": "Wybacz dawnym urazom i spójrz na świat z perspektywy pełnej zrozumienia i miłości.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Rozpamiętywania strat, ponieważ każde zakończenie jest zapowiedzią czegoś znacznie lepszego.",
      "s": "Koniec to też dar",
      "fun": "Twoja mądrość życiowa osiągnęła dziś poziom mistrzowski, więc wszyscy wokół mogą prosić Cię o radę."
    },
    "1-25": {
      "z": "Wodnik",
      "l": 1,
      "e": "Jedynka ponownie inicjuje cykl, zachęcając do bycia pionierem na własnym, życiowym podwórku. Każda wielka zmiana zaczyna się od jednej, odważnej myśli, która kiełkuje dziś w Twojej głowie.",
      "r": "Zaufaj swojej intuicji i podejmij wyzwanie, które od dawna odkładałaś na później.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Zwlekania oraz szukania wymówek, które oddalają Cię od realizacji Twoich marzeń.",
      "s": "Pierwsza linia należy do Ciebie",
      "fun": "Dziś czujesz, że mogłabyś góry przenosić, o ile tylko znajdziesz do tego odpowiednie buty."
    },
    "1-26": {
      "z": "Wodnik",
      "l": 2,
      "e": "Dwójka przypomina nam, że współpraca jest fundamentem, na którym budujemy trwałe i piękne relacje. Twoja zdolność do słuchania staje się dziś kluczem do serc ludzi, których spotkasz na swojej drodze.",
      "r": "Buduj mosty porozumienia i dziel się swoją energią z tymi, którzy tego potrzebują.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Rywalizacji oraz narzucania swojej woli, co mogłoby zniszczyć kruchą atmosferę zgody.",
      "s": "W ciszy słychać więcej",
      "fun": "Twoja dyplomacja jest dziś na poziomie światowym, więc mogłabyś negocjować pokój w całym domu."
    },
    "1-27": {
      "z": "Wodnik",
      "l": 3,
      "e": "Trójka to eksplozja radości, która sprawia, że nawet najzwyklejsze czynności nabierają magicznego blasku. Wykorzystaj ten czas na zabawę i celebrowanie małych sukcesów, które składają się na Twoje szczęście.",
      "r": "Baw się formą, kolorem i słowem, pozwalając swojej duszy na nieskrępowaną ekspresję.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Zamartwiania się na zapas oraz analizowania rzeczy, na które nie masz dzisiaj wpływu.",
      "s": "Śmiech to najkrótsza droga do serca",
      "fun": "Jesteś dziś słońcem, które rozświetla pokój samym wejściem, nawet jeśli za oknem jest szaro."
    },
    "1-28": {
      "z": "Wodnik",
      "l": 4,
      "e": "Czwórka uczy nas szacunku do struktury oraz doceniania stabilności, którą daje nam rzetelna praca. Twoja konsekwencja zostanie nagrodzona poczuciem bezpieczeństwa i dobrze spełnionego obowiązku.",
      "r": "Postaw na systematyczność i dokończ projekty, które wymagają Twojej ostatecznej uwagi.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Rozproszenia oraz chaosu, które mogą zniweczyć Twoje dotychczasowe, ciężkie starania.",
      "s": "Fundament nie hałasuje — ale wszystko na nim stoi",
      "fun": "Twój dzisiejszy spokój jest tak solidny, że nic nie jest w stanie wyprowadzić Cię z równowagi."
    },
    "1-29": {
      "z": "Wodnik",
      "l": 5,
      "e": "Piątka to zaproszenie do tańca z losem, w którym jedyną stałą rzeczą jest nieustanna zmiana. Otwórz się na przygodę, która czai się tuż za rogiem i czeka, aż odważysz się ją przeżyć.",
      "r": "Zmień otoczenie lub spróbuj czegoś, czego nigdy wcześniej nie odważyłaś się zrobić.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Trzymania się starych nawyków, które działają na Ciebie jak ciężka i niepotrzebna kotwica.",
      "s": "Wiatr nie pyta — on po prostu wieje",
      "fun": "Twoja dzisiejsza spontaniczność może zaskoczyć nawet Ciebie, nie wspominając o Twoich bliskich."
    },
    "1-30": {
      "z": "Wodnik",
      "l": 6,
      "e": "Szóstka to energia troski, która przejawia się w dbałości o detale tworzące naszą codzienną domową przystań. Poczuj wdzięczność za ludzi, którzy Cię otaczają i za piękno, które wspólnie z nimi budujesz.",
      "r": "Stwórz coś pięknego własnymi rękami i podziel się tym owocem pracy z innymi.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Perfekcjonizmu, który mógłby odebrać Ci czystą radość z procesu tworzenia czegoś nowego.",
      "s": "Dom to miejsce gdzie serce oddycha",
      "fun": "Twoje poczucie estetyki jest dziś tak silne, że nawet kanapka musi wyglądać jak dzieło sztuki."
    },
    "1-31": {
      "z": "Wodnik",
      "l": 7,
      "e": "Siódemka kończy miesiąc akcentem refleksyjnym, zachęcając do podsumowania minionego czasu w spokoju. Wyciągnij wnioski z przeżytych chwil, aby z większą świadomością wkroczyć w kolejny miesiąc roku.",
      "r": "Znajdź chwilę na zapisanie swoich przemyśleń i podziękuj sobie za każdą odbytą lekcję.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Pośpiechu w planowaniu przyszłości, zanim w pełni nie zrozumiesz tego, co wydarzyło się teraz.",
      "s": "W ciszy mieszka mądrość",
      "fun": "Jesteś dziś jak mądra sowa, która z wysokości obserwuje świat, zachowując stoicki spokój."
    },
    "2-1": {
      "z": "Wodnik",
      "l": 5,
      "e": "Piątka przynosi energię zmiany, która niczym gwałtowny podmuch wiatru może przewietrzyć Twoje dotychczasowe przekonania. To czas, w którym wolność przestaje być tylko hasłem, a staje się realną potrzebą Twojego serca.",
      "r": "Zaakceptuj pojawiające się zmiany i otwórz się na nowe, nieznane dotąd możliwości.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Wystrzegaj się stagnacji oraz kurczowego trzymania się schematów, które już Ci nie służą.",
      "s": "Każda zmiana to zaproszenie",
      "fun": "Twoje plany na luty mogą zmieniać się tak szybko, że nawet kalendarz nie nadąży z aktualizacją."
    },
    "2-2": {
      "z": "Wodnik",
      "l": 6,
      "e": "Szóstka to energia głębokiej troski, która powinna objąć przede wszystkim Ciebie i Twoje najbliższe otoczenie. Piękno, które dziś stworzysz, stanie się dla innych bezpieczną przystanią w zimowe dni.",
      "r": "Zaproś do swojego życia bliskość i zadbaj o harmonię w domowym ognisku.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Przestań brać odpowiedzialność za cudze emocje, ponieważ każdy sam musi odnaleźć swój spokój.",
      "s": "Troska zmienia wszystko",
      "fun": "Dekoracje w Twoim domu wyglądają dziś jak z katalogu, choć domownicy boją się dotknąć czegokolwiek, by nie zburzyć tej idealnej kompozycji."
    },
    "2-3": {
      "z": "Wodnik",
      "l": 7,
      "e": "Siódemka przypomina, że cisza jest najgłośniejszym komunikatem, jaki możemy wysłać do własnej duszy. Właśnie w odosobnieniu odnajdziesz odpowiedzi, które do tej pory skutecznie zagłuszał codzienny zgiełk.",
      "r": "Zaufaj swojej intuicji i poświęć czas na pogłębioną, osobistą refleksję.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Stroń od hałasu oraz powierzchownych rozmów, które nie wnoszą niczego wartościowego do Twojego życia.",
      "s": "Głębiej niż widać",
      "fun": "Twoje dzisiejsze milczenie jest tak wymowne, że bliscy zastanawiają się, czy właśnie odkryłaś tajemnicę wszechświata."
    },
    "2-4": {
      "z": "Wodnik",
      "l": 8,
      "e": "Ósemka to potężna moc sprawcza, która pozwala przekuwać najśmielsze wizje w namacalną, materialną rzeczywistość. Sukces jest dziś na wyciągnięcie ręki, o ile tylko Twoje intencje pozostaną czyste i klarowne.",
      "r": "Sięgnij po swoją sprawczość i odważnie zamanifestuj swoje największe ambicje.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Nie podejmuj decyzji pod wpływem lęku, gdyż tylko pewność siebie doprowadzi Cię do celu.",
      "s": "Budujesz — i to zostaje",
      "fun": "Masz dziś spojrzenie lidera, przed którym ustępują nawet największe korki na drodze."
    },
    "2-5": {
      "z": "Wodnik",
      "l": 9,
      "e": "Dziewiątka symbolizuje mądrość płynącą z domykania cykli i uwalniania się od tego, co już dawno przeminęło. To czas wielkiej transformacji, która przygotowuje grunt pod zupełnie nowe, życiowe doświadczenia.",
      "r": "Odpuść to, co już nie służy Twojemu rozwojowi i zrób w sercu miejsce na nowe.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Nie trzymaj się kurczowo przeszłości, ponieważ blokuje to Twój naturalny ruch naprzód.",
      "s": "Mądrość boli zanim wyzwala",
      "fun": "Robisz dziś porządki z takim rozmachem, że nawet wspomnienia z przedszkola czują się nieco zagrożone eksmisją."
    },
    "2-6": {
      "z": "Wodnik",
      "l": 1,
      "e": "Jedynka to iskra inicjatywy, która rozpala ogień nowych pomysłów i zachęca do wyznaczania własnych granic. Jesteś dzisiaj pionierem, który nie potrzebuje mapy, by odnaleźć drogę do spełnienia.",
      "r": "Wykaż się inicjatywą i podejmij samodzielną decyzję w sprawach, które dotąd budziły Twoje wątpliwości.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Zależności od opinii innych osób, które mogą jedynie przyćmić Twój naturalny blask.",
      "s": "Zacznij — reszta przyjdzie",
      "fun": "Twój entuzjazm jest dziś tak wielki, że mogłabyś przekonać eskimosów do zakupu kostek lodu."
    },
    "2-7": {
      "z": "Wodnik",
      "l": 2,
      "e": "Dwójka uczy nas, że współpraca i empatia są fundamentami, na których buduje się najtrwalsze mosty porozumienia. Twoja intuicja podpowie Ci dzisiaj, jak stać się mediatorem w sytuacjach wymagających dużej delikatności.",
      "r": "Szukaj wsparcia u innych i bądź gotowa do dawania go tym, którzy go potrzebują.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Rywalizacji oraz konfliktów, które mogą niepotrzebnie zakłócić Twoją wewnętrzną równowagę.",
      "s": "Dwie dusze, jedna harmonia",
      "fun": "Jesteś dziś tak dyplomatyczna, że nawet kłótnia o to, kto ma wynieść śmieci, kończy się pokojowym traktatem."
    },
    "2-8": {
      "z": "Wodnik",
      "l": 3,
      "e": "Trójka to radosna ekspresja, która sprawia, że życie staje się barwną i niezwykle inspirującą opowieścią. Pozwól sobie na śmiech i lekkie podejście do spraw, które do tej pory wydawały Ci się zbyt poważne.",
      "r": "Wyraź swoją twórczą naturę i podziel się swoim optymizmem z napotkanymi ludźmi.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Zamartwiania się sprawami, na które i tak nie masz dzisiaj realnego wpływu.",
      "s": "Twórz, bo świat tego potrzebuje",
      "fun": "Twój uśmiech działa dziś lepiej niż najmocniejsza kawa, rozświetlając dzień każdemu, kogo spotkasz."
    },
    "2-9": {
      "z": "Wodnik",
      "l": 4,
      "e": "Czwórka przypomina o wartościach, jakimi są dyscyplina oraz rzetelne budowanie struktur dla własnego bezpieczeństwa. Każdy wykonany dziś krok przybliża Cię do stabilizacji, o jakiej marzyłaś od dłuższego czasu.",
      "r": "Postaw na porządek w swoich sprawach i zadbaj o detale, które budują całość.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Bałaganu i braku konsekwencji, które mogą wprowadzić niepotrzebny chaos w Twoje działania.",
      "s": "Małe kroki, trwałe ślady",
      "fun": "Segregujesz dziś skarpetki kolorami i stopniem zużycia, czerpiąc z tego niezwykłą satysfakcję."
    },
    "2-10": {
      "z": "Wodnik",
      "l": 5,
      "e": "Piątka to energia przygody, która nie znosi nudy i zachęca do porzucenia utartych, codziennych ścieżek. Pozwól sobie na odrobinę spontaniczności, bo to właśnie ona nadaje życiu najpiękniejszy smak.",
      "r": "Zrób coś zupełnie inaczej niż zwykle i ciesz się z płynącego z tego poczucia wolności.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Monotonii oraz ograniczających Cię zasad, które tłumią Twoją naturalną ciekawość świata.",
      "s": "Każda zmiana to zaproszenie",
      "fun": "Twoja dzisiejsza chęć do zmian sprawia, że nawet ustawienie mebli w salonie wydaje Ci się zbyt statyczne."
    },
    "2-11": {
      "z": "Wodnik",
      "l": 6,
      "e": "Szóstka to energia harmonii, która rozkwita najpełniej, gdy dbasz o drobne gesty i ciepło w relacjach. To doskonały czas, abyś stworzyła wokół siebie aurę spokoju, która ukoi Twoje serce i przyciągnie życzliwych ludzi.",
      "r": "Podaruj sobie chwilę estetycznej przyjemności i otocz się ludźmi, którzy Cię szczerze wspierają.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Wystrzegaj się nadmiernego krytycyzmu wobec siebie, ponieważ Twoja wartość nie zależy od perfekcji.",
      "s": "Troska zmienia wszystko",
      "fun": "Dziś nawet domowe obowiązki wykonujesz z taką gracją, jakbyś występowała na wielkiej scenie w roli idealnej gospodyni."
    },
    "2-12": {
      "z": "Wodnik",
      "l": 7,
      "e": "Siódemka zachęca do wycofania się z hałaśliwego świata i poszukiwania odpowiedzi w głębi własnego umysłu. Wyciszenie pozwoli Ci usłyszeć głos intuicji, który często zostaje zagłuszony przez codzienne sprawy i obowiązki.",
      "r": "Znajdź czas na samotny spacer lub lekturę, która pobudzi Twój intelekt do nowych odkryć.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Unikaj zbędnego pośpiechu oraz powierzchownych relacji, które mogą rozpraszać Twoją cenną uwagę.",
      "s": "Głębiej niż widać",
      "fun": "Twoja aura tajemniczości jest dziś tak silna, że sąsiedzi zastanawiają się, nad jakim wielkim projektem właśnie rozmyślasz."
    },
    "2-13": {
      "z": "Wodnik",
      "l": 8,
      "e": "Ósemka to czas manifestacji siły charakteru oraz budowania trwałej pozycji w świecie materii i finansów. Masz w sobie wystarczająco dużo determinacji, aby zrealizować cele, które dla innych wydają się nieosiągalne.",
      "r": "Skoncentruj się na sprawach zawodowych i podejmuj decyzje z odwagą godną lidera.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Rezygnacji z własnych marzeń pod wpływem chwilowego zmęczenia lub braku natychmiastowych efektów.",
      "s": "Budujesz — i to zostaje",
      "fun": "Twój portfel czuje dziś przed Tobą ogromny respekt, widząc Twoją niespotykaną dyscyplinę w zarządzaniu budżetem."
    },
    "2-14": {
      "z": "Wodnik",
      "l": 9,
      "e": "Dziewiątka uczy nas, że miłość to najwyższa forma mądrości, która potrafi wybaczać i rozumieć bez zbędnych słów. W dniu zakochanych ta energia zachęca Cię do objęcia czułością nie tylko partnera, ale całe swoje dotychczasowe życie.",
      "r": "Podziękuj za wszystkie miłosne lekcje i otwórz swoje serce na bezwarunkową akceptację samego siebie.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Trzymania się dawnych urazów, które jak zbędny balast nie pozwalają Ci w pełni cieszyć się obecną chwilą.",
      "s": "Mądrość boli zanim wyzwala",
      "fun": "Nawet jeśli spędzasz ten dzień solo, Twoja kolacja przy świecach wygląda bardziej luksusowo niż w najlepszej restauracji."
    },
    "2-15": {
      "z": "Wodnik",
      "l": 1,
      "e": "Jedynka symbolizuje nowy początek, który pojawia się wtedy, gdy odważysz się pójść za własnym, wewnętrznym impulsem. Jesteś dzisiaj autorką swojego losu, a każde Twoje działanie kładzie fundament pod nową, ekscytującą drogę.",
      "r": "Wykaż się inicjatywą i nie bój się zaproponować nowatorskich rozwiązań w swoim otoczeniu.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Wystrzegaj się bierności oraz czekania na znak, ponieważ to Ty jesteś tym znakiem, na który czekałaś.",
      "s": "Zacznij — reszta przyjdzie",
      "fun": "Masz dziś tyle autorytetu w głosie, że nawet Twój kot wydaje się słuchać Twoich poleceń z niezwykłą uwagą."
    },
    "2-16": {
      "z": "Wodnik",
      "l": 2,
      "e": "Dwójka przypomina nam, że współodczuwanie jest kluczem, który otwiera nawet najbardziej zamknięte i nieprzystępne ludzkie serca. Twoja zdolność do łagodzenia sporów sprawi dzisiaj, że poczujesz się potrzebna i doceniona przez otoczenie.",
      "r": "Postaw na dialog i buduj relacje oparte na wzajemnym zaufaniu oraz głębokim zrozumieniu.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Podejmowania rywalizacji, ponieważ dziś siła płynie z harmonii, a nie z chęci udowodnienia komuś swojej racji.",
      "s": "Dwie dusze, jedna harmonia",
      "fun": "Jesteś dziś taką oazą spokoju, że ludzie przychodzą do Ciebie po prostu po to, by ogrzać się w Twojej energii."
    },
    "2-17": {
      "z": "Wodnik",
      "l": 3,
      "e": "Trójka to energia radości, która przejawia się w twórczym wyrażaniu siebie poprzez sztukę, słowo czy gest. Pozwól sobie na bycie w centrum uwagi i nie bój się zarażać innych swoim naturalnym, dziecięcym entuzjazmem.",
      "r": "Wykorzystaj swój urok osobisty, aby rozluźnić atmosferę w miejscach, w których do tej pory panował sztywny nastrój.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Nadmiernego analizowania swoich pomysłów, ponieważ dzisiaj liczy się przede wszystkim spontaniczność i czysta radość tworzenia.",
      "s": "Twórz, bo świat tego potrzebuje",
      "fun": "Twoje poczucie humoru jest dziś na tyle ostre i błyskotliwe, że mogłabyś pisać scenariusze dla najlepszych kabaretów."
    },
    "2-18": {
      "z": "Wodnik",
      "l": 4,
      "e": "Czwórka uczy nas cierpliwości, pokazując, że każda wielka rzecz wymaga czasu oraz rzetelnego, systematycznego podejścia. Twój spokój i opanowanie będą dziś dla innych sygnałem, że na Twoim słowie można w pełni polegać.",
      "r": "Skup się na dokończeniu projektów, które od dawna czekają na Twój ostateczny ruch i akceptację.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Rozproszenia uwagi na błahe sprawy, które mogłyby odciągnąć Cię od realizacji Twoich głównych, długofalowych zamierzeń.",
      "s": "Małe kroki, trwałe ślady",
      "fun": "Twoja dzisiejsza miłość do porządku sprawia, że nawet spinacze biurowe ułożyłaś według rozmiaru i stopnia połysku."
    },
    "2-19": {
      "z": "Ryby",
      "l": 5,
      "e": "Piątka to ożywczy wiatr, który przynosi wiadomości z dalekiego świata i budzi w Tobie uśpiony głód przygody. Nie bój się wyjść poza utarte schematy, ponieważ tylko tam czekają na Ciebie najbardziej wartościowe i rozwijające doświadczenia.",
      "r": "Zaryzykuj i spróbuj czegoś nowego, co pozwoli Ci spojrzeć na Twoje życie z zupełnie innej perspektywy.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Strachu przed nieznanym, który jak niewidzialna bariera może powstrzymywać Cię przed sięgnięciem po swoje szczęście.",
      "s": "Każda zmiana to zaproszenie",
      "fun": "Jesteś dziś tak spragniona zmian, że gdybyś mogła, to przemalowałabyś ściany w salonie w trakcie parzenia porannej kawy."
    },
    "2-20": {
      "z": "Ryby",
      "l": 6,
      "e": "Szóstka zaprasza Cię do budowania piękna w każdej, nawet najprostszej czynności, jaką dziś podejmiesz. Twoja troska o detale sprawi, że zwykły dzień stanie się dla Twoich bliskich wyjątkowym świętem bliskości.",
      "r": "Zrób coś bezinteresownego dla kogoś, kto czuje się dziś osamotniony lub zmęczony codzienną walką.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Brania na siebie zbyt wielu obowiązków, które mogłyby odebrać Ci radość z przebywania z kochanymi ludźmi.",
      "s": "Troska zmienia wszystko",
      "fun": "Twoja chęć opiekowania się innymi jest dziś tak duża, że nawet Twoje kwiaty doniczkowe czują się rozpieszczane."
    },
    "2-21": {
      "z": "Ryby",
      "l": 7,
      "e": "Siódemka zaprasza Cię dziś do krainy łagodności, gdzie spokój ducha jest ważniejszy niż jakiekolwiek zewnętrzne osiągnięcia. To idealny moment, abyś wsłuchała się w to, co mówi Twoje serce, gdy nikt inny go nie zagłusza.",
      "r": "Znajdź czas na chwilę medytacji lub spokojny wieczór z własnymi myślami.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Hałaśliwych zgromadzeń i pośpiechu, który mógłby zakłócić Twoje wewnętrzne wyciszenie.",
      "s": "Głębiej niż widać",
      "fun": "Twoje dzisiejsze milczenie jest tak głębokie, że nawet radio w Twoim samochodzie zdaje się grać nieco ciszej."
    },
    "2-22": {
      "z": "Ryby",
      "l": 8,
      "e": "Ósemka to energia manifestacji, która pokazuje, że Twoje marzenia potrzebują realnego planu, aby mogły stać się rzeczywistością. Dziś poczujesz przypływ sił, które pozwolą Ci uporządkować sprawy finansowe oraz zawodowe w sposób mistrzowski.",
      "r": "Podejmij konkretne kroki w stronę stabilizacji i zaufaj swojej zdolności do pomnażania dobra.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Niepotrzebnego lęku przed brakiem, ponieważ Twoja obfitość zaczyna się od Twojego poczucia własnej wartości.",
      "s": "Budujesz — i to zostaje",
      "fun": "Twoja dzisiejsza pewność siebie sprawia, że nawet trudne negocjacje z własnym budżetem kończą się Twoim sukcesem."
    },
    "2-23": {
      "z": "Ryby",
      "l": 9,
      "e": "Dziewiątka przypomina, że każde pożegnanie z przeszłością jest jednocześnie serdecznym powitaniem nowej, lepszej przyszłości. Puść to, co już dawno wygasło, aby w Twoim życiu zrobiło się miejsce na świeże i inspirujące relacje.",
      "r": "Wybacz dawnym urazom i podziękuj sobie za każdą lekcję, którą odebrałaś od losu.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Kurczowego trzymania się tego, co już nie służy Twojemu najwyższemu dobru i rozwojowi.",
      "s": "Mądrość boli zanim wyzwala",
      "fun": "Robisz dziś takie porządki w szafie i w sercu, że nawet stare paragony z ubiegłego roku czują się zagrożone."
    },
    "2-24": {
      "z": "Ryby",
      "l": 1,
      "e": "Jedynka to potężny impuls do zmiany, który każe Ci przestać oglądać się na innych i zacząć pisać własną historię. To dzień, w którym Twoja odwaga może stać się inspiracją dla wszystkich ludzi, których spotkasz na swojej drodze.",
      "r": "Postaw na siebie i zainicjuj działanie, o którym myślałaś od bardzo długiego czasu.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Oczekiwania na zgodę lub poklask ze strony otoczenia, które może nie nadążać za Twoją wizją.",
      "s": "Zacznij — reszta przyjdzie",
      "fun": "Twoja energia przywódcza jest dziś tak silna, że mogłabyś poprowadzić wyprawę na biegun w samym swetrze."
    },
    "2-25": {
      "z": "Ryby",
      "l": 2,
      "e": "Dwójka uczy nas, że najpiękniejsze melodie życia powstają wtedy, gdy potrafimy współpracować i dzielić się swoją energią. Twoja intuicja pomoże Ci dziś odnaleźć wspólny język z kimś, kto do tej pory wydawał się nieprzystępny.",
      "r": "Bądź otwarta na dialog i szukaj porozumienia tam, gdzie do tej pory panowały chłód lub dystans.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Konfliktów oraz próby dominacji, które mogłyby zburzyć kruchą atmosferę dzisiejszej zgody.",
      "s": "Dwie dusze, jedna harmonia",
      "fun": "Jesteś dziś tak dyplomatyczna, że mogłabyś pogodzić ze sobą nawet dwa zwaśnione stadka gołębi w parku."
    },
    "2-26": {
      "z": "Ryby",
      "l": 3,
      "e": "Trójka przynosi ze sobą uśmiech i przypomina, że radość jest najkrótszą drogą do uzdrowienia każdej, nawet najtrudniejszej relacji. Wykorzystaj ten dzień na celebrację życia i nie bój się pokazać światu swojej radosnej natury.",
      "r": "Daj się ponieść kreatywności i zrób coś, co wywoła szczery uśmiech na Twojej twarzy.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Nadmiernego analizowania swoich potknięć, ponieważ dzisiaj liczy się tylko dobra energia i lekkość bytu.",
      "s": "Twórz, bo świat tego potrzebuje",
      "fun": "Twoja radość jest dziś tak zaraźliwa, że nawet pani w kolejce do kasy zacznie nagle nucić pod nosem."
    },
    "2-27": {
      "z": "Ryby",
      "l": 4,
      "e": "Czwórka to czas na zakotwiczenie swoich pomysłów w rzeczywistości poprzez rzetelną pracę oraz dbałość o szczegóły. Solidność, którą się dziś wykażesz, stanie się fundamentem pod sukcesy, które przyjdą do Ciebie już niebawem.",
      "r": "Dokończ to, co zaczęłaś i zadbaj o porządek w swoim bezpośrednim otoczeniu.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Ulegania chwilowej dekoncentracji, która mogłaby wpłynąć na jakość Twoich dzisiejszych dokonań.",
      "s": "Małe kroki, trwałe ślady",
      "fun": "Twoja organizacja pracy osiągnęła dziś poziom mistrzowski, a każde biurko w Twoim domu lśni nieskazitelną czystością."
    },
    "2-28": {
      "z": "Ryby",
      "l": 5,
      "e": "Piątka na koniec miesiąca przynosi upragniony powiew wolności i zachęca do odważnego spojrzenia w nadchodzącą wiosnę. Nie bój się zmienić planów w ostatniej chwili, jeśli tylko poczujesz, że nowa droga prowadzi Cię ku większej radości.",
      "r": "Otwórz się na spontaniczne zaproszenia i pozwól sobie na chwilę zasłużonego, radosnego szaleństwa.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Sztywnych schematów oraz strachu przed zmianą, która jest przecież jedyną stałą rzeczą w naszym życiu.",
      "s": "Każda zmiana to zaproszenie",
      "fun": "Twoja dzisiejsza potrzeba zmian jest tak duża, że mogłabyś przearanżować całe mieszkanie w trakcie przerwy na herbatę."
    },
    "3-1": {
      "z": "Ryby",
      "l": 6,
      "e": "Szóstka to energia głębokiej harmonii, która zachęca do pielęgnowania piękna w relacjach z najbliższymi. To idealny moment, abyś stworzyła w swoim domu atmosferę pełną ciepła i wzajemnego zrozumienia.",
      "r": "Zaproś bliskie Ci osoby do wspólnego spędzenia czasu i celebrujcie małe radości. Zadbaj o estetykę swojego otoczenia, ponieważ porządek wokół Ciebie sprzyja wewnętrznemu spokojowi.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Wystrzegaj się brania na siebie odpowiedzialności za emocje innych ludzi, gdyż każdy sam musi zadbać o swój dobrostan. Nie pozwól, by drobne nieporozumienia przyćmiły miłość, którą darzysz otoczenie.",
      "s": "Wolność jest decyzją",
      "fun": "Twoje wiosenne dekoracje są tak dopracowane, że rodzina boi się usiąść na kanapie, by nie naruszyć tej idealnej kompozycji."
    },
    "3-2": {
      "z": "Ryby",
      "l": 7,
      "e": "Siódemka to czas ciszy, która staje się głośniejsza niż jakikolwiek hałas docierający do nas z zewnątrz. Właśnie w tym wyciszeniu odnajdziesz odpowiedzi na pytania, które od dawna nurtowały Twoją duszę.",
      "r": "Pozwól sobie na luksus bycia sama na sam ze swoimi myślami i poszukaj wewnętrznej prawdy. Zaufaj swojej intuicji, która w ciszy podpowiada najbardziej trafne rozwiązania.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Unikaj zbędnego zgiełku oraz powierzchownych rozmów, które nie wnoszą do Twojego życia żadnej wartości. Stroń od pośpiechu, który uniemożliwia rzetelny wgląd w Twoje potrzeby.",
      "s": "Piękno jest aktem odwagi",
      "fun": "Twój dzisiejszy wzrok jest tak przenikliwy, że bliscy zaczynają się zastanawiać, czy przypadkiem nie czytasz im w myślach."
    },
    "3-3": {
      "z": "Ryby",
      "l": 8,
      "e": "Ósemka symbolizuje potężną moc sprawczą, która pozwala przekuwać ambitne plany w konkretne wyniki finansowe i zawodowe. Masz dzisiaj wystarczająco dużo determinacji, aby pokonać każdą przeszkodę stojącą na Twojej drodze.",
      "r": "Skoncentruj się na realizacji swoich zawodowych ambicji i podejmuj odważne decyzje biznesowe. Buduj fundamenty pod trwały sukces, opierając się na swoich dotychczasowych kompetencjach.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Wystrzegaj się podejmowania działań pod wpływem lęku, zamiast czerpać siłę ze swojej wewnętrznej pewności. Nie ulegaj rozrzutności, która mogłaby osłabić Twoją stabilność finansową.",
      "s": "Pytanie jest ważniejsze niż odpowiedź",
      "fun": "Masz dziś energię prezesa wielkiej korporacji, nawet jeśli Twoim najważniejszym zadaniem jest zrobienie listy zakupów."
    },
    "3-4": {
      "z": "Ryby",
      "l": 9,
      "e": "Dziewiątka przypomina, że mądrość polega na umiejętności odpuszczania tego, co przestało nam służyć. To czas transformacji, który przygotowuje Cię do wejścia w zupełnie nowy etap życiowej podróży.",
      "r": "Wybacz dawnym urazom i podziękuj przeszłości za wszystkie lekcje, które Ci podarowała. Zrób w swoim sercu przestrzeń na nowe doświadczenia, które już niebawem zapukają do Twoich drzwi.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Nie trzymaj się kurczowo rzeczy i relacji, które blokują Twój naturalny rozwój i spokój. Unikaj rozpamiętywania strat, bo każda z nich otwiera drogę do czegoś lepszego.",
      "s": "Moc służy, nie dominuje",
      "fun": "Robisz dziś takie porządki w szafie i w życiu, że nawet Twoje wspomnienia czują się nieco zdezorientowane tym rozmachem."
    },
    "3-5": {
      "z": "Ryby",
      "l": 1,
      "e": "Jedynka to iskra inicjatywy, która każe Ci przestać czekać na sprzyjające okoliczności i zacząć działać. Jesteś dzisiaj pionierem, który ma odwagę wyznaczać nowe standardy w swoim najbliższym otoczeniu.",
      "r": "Wykaż się samodzielnością i podejmij ryzyko związane z realizacją nowego, autorskiego pomysłu. Zaufaj swojej sile przebicia, która pozwoli Ci zrealizować to, co do tej pory było tylko marzeniem.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Wystrzegaj się oglądania na innych i czekania na ich aprobatę dla Twoich działań. Nie pozwól, by niepewność powstrzymała Cię przed zrobieniem tego pierwszego, najważniejszego kroku.",
      "s": "Zamknij z gracją — otwórz z wdzięcznością",
      "fun": "Twój dzisiejszy entuzjazm jest tak wielki, że mogłabyś przewodzić rewolucji, siedząc w kapciach przed laptopem."
    },
    "3-6": {
      "z": "Ryby",
      "l": 2,
      "e": "Dwójka uczy nas, że współpraca jest fundamentem, na którym można zbudować najbardziej trwałe relacje. Twoja zdolność do empatii sprawi dzisiaj, że poczujesz się wyjątkowo blisko z ludźmi, których spotkasz.",
      "r": "Buduj mosty porozumienia i szukaj kompromisów tam, gdzie do tej pory panował dystans. Zaufaj swojej intuicji w kontaktach z innymi, ponieważ ona najlepiej poprowadzi Cię przez rozmowy.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Unikaj konfliktów oraz narzucania swojej woli, co mogłoby zburzyć kruchą atmosferę zgody. Nie bój się prosić o pomoc, jeśli poczujesz, że zadania Cię przerastają.",
      "s": "Twoja droga, Twój rytm",
      "fun": "Twoja dyplomacja jest dziś na tak wysokim poziomie, że mogłabyś negocjować pokój między psem a kotem."
    },
    "3-7": {
      "z": "Ryby",
      "l": 3,
      "e": "Trójka to radosna ekspresja, która zamienia zwykłą codzienność w barwną przygodę pełną śmiechu. Pozwól swojej kreatywności dojść do głosu i nie bój się pokazać światu swojej prawdziwej natury.",
      "r": "Wyraź siebie poprzez twórczość lub inspirującą rozmowę z drugim człowiekiem. Baw się każdą chwilą i dziel się swoim optymizmem ze wszystkimi napotkanymi osobami.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Wystrzegaj się nadmiernego pesymizmu oraz analizowania rzeczy, na które nie masz dzisiaj wpływu. Nie tłum swojej radości tylko dlatego, że inni mogą jej nie rozumieć.",
      "s": "Delikatność to siła",
      "fun": "Jesteś dziś słońcem, które rozświetla pokój samym wejściem, nawet jeśli za oknem panuje marcowa plucha."
    },
    "3-8": {
      "z": "Ryby",
      "l": 4,
      "e": "Czwórka przypomina, że stabilność rodzi się z rzetelnej pracy oraz dbałości o najdrobniejsze detale. W Dniu Kobiet Twoja siła przejawia się w spokoju i konsekwencji, z jaką budujesz swoje życie.",
      "r": "Postaw na systematyczność i dokończ projekty, które wymagają Twojej pełnej uwagi. Zadbaj o fundamenty swojego bezpieczeństwa, wykonując zaplanowane wcześniej kroki.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Unikaj pośpiechu oraz chodzenia na skróty, gdyż tylko solidne działanie przyniesie trwałe efekty. Nie ulegaj chaosowi, który mógłby odciągnąć Cię od Twoich głównych celów.",
      "s": "Lżej znaczy dalej",
      "fun": "Twoje dzisiejsze plany są tak precyzyjne, że nawet kwiaty w wazonie muszą stać pod idealnym kątem."
    },
    "3-9": {
      "z": "Ryby",
      "l": 5,
      "e": "Piątka przynosi powiew wolności i zachęca do wyjścia poza utarte schematy codzienności. To doskonały dzień, abyś odważyła się na zmianę, która wprowadzi do Twojego życia nową energię.",
      "r": "Otwórz się na spontaniczne propozycje i pozwól sobie na odrobinę zdrowego szaleństwa. Zaryzykuj i sprawdź nowe możliwości, które pojawiają się na Twoim horyzoncie.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Wystrzegaj się nudy oraz stagnacji, które mogą działać na Ciebie wyjątkowo frustrująco. Nie bój się zmian, ponieważ to właśnie one napędzają Twój osobisty rozwój.",
      "s": "Solidność to poezja",
      "fun": "Twoja potrzeba wolności jest dziś tak duża, że wyjście po bułki może zamienić się w daleką wycieczkę."
    },
    "3-10": {
      "z": "Ryby",
      "l": 6,
      "e": "Szóstka ponownie zaprasza Cię do świata harmonii, gdzie miłość i troska są najważniejszymi drogowskazami. Zadbaj o to, by Twoje działania płynęły prosto z serca i niosły dobro innym ludziom.",
      "r": "Stwórz coś pięknego dla siebie lub bliskich, pielęgnując relacje oparte na zaufaniu. Skup się na tworzeniu przyjaznej atmosfery w każdym miejscu, w którym się znajdziesz.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Unikaj nadmiernego perfekcjonizmu, który mógłby odebrać Ci radość z czystego bycia tu i teraz. Nie pozwól, by cudze oczekiwania dyktowały Ci, jak masz okazywać swoją troskę.",
      "s": "Wolność jest decyzją",
      "fun": "Twoja chęć opiekowania się światem jest dziś tak silna, że nawet kaktus czuje się przez Ciebie rozpieszczany."
    },
    "3-11": {
      "z": "Ryby",
      "l": 7,
      "e": "Siódemka otwiera przed Tobą przestrzeń do głębokich studiów nad własną naturą i sensem podejmowanych działań. To dzień, w którym intelekt spotyka się z duchowością, tworząc idealne warunki do nauki i odkrywania nieoczywistych prawd.",
      "r": "Poświęć czas na rozwijanie swoich pasji oraz poszukiwanie odpowiedzi w mądrych księgach. Zaufaj ciszy, ponieważ to właśnie w niej rodzą się najbardziej wartościowe i trwałe pomysły.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Wystrzegaj się powierzchowności oraz ulegania presji otoczenia, która zmusza do szybkiego udzielania odpowiedzi. Nie uciekaj od trudnych pytań, gdyż konfrontacja z nimi przyniesie Ci upragnioną wolność.",
      "s": "Piękno jest aktem odwagi",
      "fun": "Twoja aura tajemniczości jest dziś tak silna, że nawet Twoja ulubiona książka wydaje się otwierać na właściwych stronach sama z siebie."
    },
    "3-12": {
      "z": "Ryby",
      "l": 8,
      "e": "Ósemka wzywa Cię do wykazania się odwagą w zarządzaniu własnym życiem oraz zasobami, którymi dysponujesz. Twoja sprawczość jest dziś na najwyższym poziomie, co pozwala Ci skutecznie domykać nawet najbardziej skomplikowane projekty.",
      "r": "Podejmij inicjatywę w sprawach zawodowych i nie bój się sięgać po należne Ci nagrody. Buduj swój autorytet na fundamentach uczciwości oraz rzetelnej wiedzy, którą gromadziłaś latami.",
      "n": "Refleksja, Głębia, Intuicja",
      "u": "Nie podejmuj decyzji w pośpiechu ani pod wpływem negatywnych emocji, takich jak gniew czy zniecierpliwienie. Wystrzegaj się arogancji, ponieważ prawdziwa moc nie potrzebuje krzyku, by zostać zauważoną.",
      "s": "Pytanie jest ważniejsze niż odpowiedź",
      "fun": "Twoje dzisiejsze spojrzenie na finanse jest tak ostre, że nawet drobne wydatki czują respekt przed Twoją dyscypliną."
    },
    "3-13": {
      "z": "Ryby",
      "l": 9,
      "e": "Dziewiątka zaprasza do wielkiego sprzątania – nie tylko w przestrzeni fizycznej, ale przede wszystkim w sferze mentalnej. To doskonały czas na podsumowanie dotychczasowych lekcji i przygotowanie się do wielkiego otwarcia na nowe.",
      "r": "Dokończ wszystkie rozpoczęte sprawy i zamknij te rozdziały, które nie wnoszą już światła do Twojego życia. Okaż wdzięczność za wszystko, co Cię spotkało, uznając każdą chwilę za cenne doświadczenie.",
      "n": "Realizacja, Sukces, Sprawczość",
      "u": "Nie trzymaj się kurczowo przeszłości oraz ludzi, którzy swoją obecnością blokują Twój naturalny rozwój. Unikaj smutku po tym, co mija, bo każde zakończenie jest obietnicą nowego świtu.",
      "s": "Moc służy, nie dominuje",
      "fun": "Masz dziś taki rozmach w domykaniu spraw, że nawet kurz ucieka z Twojego domu, zanim zdążysz o nim pomyśleć."
    },
    "3-14": {
      "z": "Ryby",
      "l": 1,
      "e": "Jedynka to świeży oddech energii, który sprawia, że znów czujesz się panią własnego losu i architektką przyszłości. Każdy Twój dzisiejszy wybór ma moc zmieniania rzeczywistości na lepszą i bardziej autentyczną.",
      "r": "Postaw na oryginalność i nie bój się zaprezentować światu swoich najbardziej śmiałych projektów. Zaufaj swojej sile i bądź pierwszą osobą, która uwierzy w powodzenie Twoich działań.",
      "n": "Transformacja, Mądrość, Służba",
      "u": "Wystrzegaj się naśladownictwa oraz szukania dróg na skróty, które mogłyby osłabić Twoją autentyczność. Nie bój się samotności, ponieważ pionierzy często muszą przetrzeć szlaki samodzielnie.",
      "s": "Zamknij z gracją — otwórz z wdzięcznością",
      "fun": "Jesteś dziś taką dawką energii, że mogłabyś zastąpić poranne espresso dla całego swojego biura."
    },
    "3-15": {
      "z": "Ryby",
      "l": 2,
      "e": "Dwójka uczy nas, że największe sukcesy osiągamy wtedy, gdy potrafimy połączyć siły z innymi w duchu wzajemnego szacunku. Twoja dyplomacja oraz wyczucie nastrojów pozwolą Ci dziś rozładować każdą, nawet najbardziej napiętą sytuację.",
      "r": "Słuchaj uważnie tego, co mówią inni i szukaj punktów wspólnych, które mogą stać się fundamentem zgody. Pielęgnuj swoją intuicję, ponieważ ona podpowie Ci dzisiaj, komu warto zaufać i powierzyć swoje sekrety.",
      "n": "Nowe początki, Inicjatywa, Przywództwo",
      "u": "Unikaj izolacji oraz chowania się w cieniu, gdy Twoja obecność może przynieść ulgę potrzebującym. Nie bój się wyrażać własnego zdania, nawet jeśli Twoim nadrzędnym celem jest dzisiaj harmonia.",
      "s": "Twoja droga, Twój rytm",
      "fun": "Jesteś dziś tak dobrym słuchaczem, że nawet Twoje kwiaty doniczkowe wydają się nachylać w Twoją stronę."
    },
    "3-16": {
      "z": "Ryby",
      "l": 3,
      "e": "Trójka to radosny manifest Twojej twórczej duszy, która pragnie ekspresji i celebracji każdej pięknej chwili. Świat potrzebuje dzisiaj Twojego uśmiechu oraz lekkości, którą wnosisz w życie napotkanych osób.",
      "r": "Pozwól sobie na zabawę słowem i formą, inspirując innych do radosnego patrzenia na codzienność. Dziel się swoim entuzjazmem i nie bój się być w centrum uwagi, jeśli służy to szerzeniu dobrej energii.",
      "n": "Relacje, Intuicja, Współpraca",
      "u": "Wystrzegaj się plotek oraz marnowania czasu na jałowe dyskusje, które nie przynoszą nikomu pożytku. Nie pozwól, by drobne uszczypliwości ze strony otoczenia zgasiły Twój wewnętrzny, radosny blask.",
      "s": "Delikatność to siła",
      "fun": "Twoja kreatywność nie zna dziś granic, więc nawet zwykła sałatka na obiad może wyglądać jak dzieło sztuki nowoczesnej."
    },
    "3-17": {
      "z": "Ryby",
      "l": 4,
      "e": "Czwórka przypomina, że prawdziwa wolność wyrasta z poczucia bezpieczeństwa i solidnie zbudowanych podstaw. Twoja dzisiejsza systematyczność zostanie doceniona i przyniesie Ci spokój, o którym od dawna marzyłaś.",
      "r": "Zadbaj o porządek w dokumentach i dopracuj szczegóły, które do tej pory wydawały Ci się mało istotne. Buduj swoją przyszłość cegła po cegle, pamiętając, że pośpiech jest złym doradcą przy stawianiu fundamentów.",
      "n": "Twórczość, Ekspresja, Radość",
      "u": "Unikaj chaosu oraz podejmowania zbyt wielu wyzwań jednocześnie, co mogłoby rozproszyć Twoją uwagę. Nie lekceważ procedur i zasad, które służą ochronie Twoich interesów oraz stabilności.",
      "s": "Lżej znaczy dalej",
      "fun": "Twój dzisiejszy poziom zorganizowania sprawia, że nawet czas płynie dokładnie tak, jak zaplanowałaś w swoim kalendarzu."
    },
    "3-18": {
      "z": "Ryby",
      "l": 5,
      "e": "Piątka przynosi dynamiczne zmiany, które wymagają od Ciebie elastyczności oraz gotowości do szybkiego podejmowania decyzji. To dzień pełen niespodzianek, które mogą całkowicie odmienić Twoje dotychczasowe postrzeganie pewnych spraw.",
      "r": "Zaakceptuj pojawiające się okazje i bądź gotowa na zmianę kierunku, jeśli poczujesz, że nowa droga jest lepsza. Wyjdź do ludzi i otwórz się na wymianę myśli, która może zainspirować Cię do wielkich czynów.",
      "n": "Organizacja, Konsekwencja, Stabilność",
      "u": "Wystrzegaj się lęku przed nieznanym oraz trzymania się kurczowo planów, które już przestały być aktualne. Nie bój się zaryzykować, ponieważ dziś szczęście sprzyja tym, którzy mają odwagę łamać schematy.",
      "s": "Solidność to poezja",
      "fun": "Masz dziś w sobie tyle pasji podróżnika, że nawet wyjście do lokalnego sklepu wydaje się początkiem wielkiej wyprawy."
    },
    "3-19": {
      "z": "Ryby",
      "l": 6,
      "e": "Szóstka zaprasza Cię do budowania mostów miłości i troski, które łączą serca Twoich najbliższych. Twoja wrażliwość na piękno sprawi, że każde spotkanie stanie się dzisiaj okazją do wzmocnienia więzi.",
      "r": "Zadbaj o estetykę swojego otoczenia i pozwól, by harmonia zagościła w Twoim domu na stałe. Okaż czułość osobom, które kochasz, ponieważ proste gesty mają dziś moc uzdrawiania dawnych ran.",
      "n": "Zmiany, Odkrycia, Wolność",
      "u": "Unikaj brania na swoje barki zbyt wielu cudzych problemów, ponieważ każdy musi przejść swoją drogę samodzielnie. Nie szukaj perfekcji tam, gdzie wystarczy szczera obecność i dobre słowo.",
      "s": "Wolność jest decyzją",
      "fun": "Twoje poczucie harmonii jest dziś tak wielkie, że nawet poduszki na kanapie same układają się w idealną linię."
    },
    "3-20": {
      "z": "Ryby",
      "l": 7,
      "e": "Siódemka zamyka tę dekadę w tonie kontemplacji i przygotowania na nadchodzące przesilenie wiosenne. To czas, w którym wiedza intuicyjna staje się Twoim najcenniejszym kapitałem i drogowskazem na przyszłość.",
      "r": "Znajdź chwilę na podsumowanie marca i wsłuchaj się w rytm natury, która właśnie budzi się do życia. Zaufaj procesom, które dzieją się w Twoim wnętrzu, i daj sobie czas na dojrzewanie do wielkich zmian.",
      "n": "Troska, Harmonia, Piękno",
      "u": "Wystrzegaj się hałasu oraz niepotrzebnego pośpiechu w planowaniu kolejnych kroków zawodowych czy osobistych. Nie lekceważ snów i znaków, które dziś mogą być wyjątkowo czytelne i istotne.",
      "s": "Piękno jest aktem odwagi",
      "fun": "Jesteś dziś jak mądra sowa, która z boku obserwuje świat, zachowując przy tym stoicki spokój i dystans."
    }
  },
  "de": {
    "3-21": {
      "z": "Widder",
      "l": 8,
      "e": "Acht am Tag der Frühlings-Tagundnachtgleiche ist eine kraftvolle Manifestationsenergie, die Sie dazu ermutigt, Absichten für Erfolg und Fülle zu säen. Gemeinsam mit der gesamten Natur erwacht nun Ihre innere Kraft zum Leben und gibt Ihnen die Kraft, die ehrgeizigsten Pläne umzusetzen.",
      "r": "Ergreifen Sie gezielte Maßnahmen, um Ihre finanzielle und berufliche Position zu stabilisieren. Vertrauen Sie Ihrer Agentur und bauen Sie dauerhafte Strukturen auf, die Ihnen über Monate hinweg dienen werden.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Vermeiden Sie Versagensängste und mangelnden Glauben an die eigenen, nahezu unbegrenzten Möglichkeiten. Lassen Sie nicht zu, dass vorübergehende Schwierigkeiten Ihren Enthusiasmus und Ihre Entschlossenheit bei der Verfolgung Ihres Ziels schwächen.",
      "s": "Die Frage ist wichtiger als die Antwort",
      "fun": "Heute sind Sie so zielstrebig, dass Sie sogar den Frühjahrsputz mit der Präzision eines CEO durchführen können."
    },
    "3-22": {
      "z": "Widder",
      "l": 9,
      "e": "Die Neun erinnern uns daran, dass wir uns zunächst von dem Alten und Unnötigen verabschieden müssen, um die neue Energie des Frühlings vollständig anzunehmen. Es ist eine Zeit großer Seelenreinigung, die Erleichterung bringt und den Boden für neue, faszinierende Erfahrungen bereitet.",
      "r": "Verzeihen Sie alte Verletzungen und lassen Sie Beziehungen los, die kein Licht mehr in Ihren Alltag bringen. Danken Sie sich selbst für den Weg, den Sie bisher zurückgelegt haben, und erkennen Sie jede Erfahrung als wertvolles Element Ihrer Weisheit an.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Klammern Sie sich nicht an die Vergangenheit, denn sie blockiert Ihren natürlichen Prozess der Wiedergeburt und Transformation. Vermeiden Sie Traurigkeit nach dem, was vergangen ist, denn jedes Ende ist ein Versprechen auf ein besseres Morgen.",
      "s": "Macht dient, nicht dominiert",
      "fun": "Ihre heutige Reinigung ist so radikal, dass selbst Staub Angst hat, sich in Ihrer Gegenwart auf den Regalen festzusetzen."
    },
    "3-23": {
      "z": "Widder",
      "l": 1,
      "e": "Nummer eins ist ein kraftvoller Impuls für einen Neuanfang, der Ihnen das Gefühl gibt, der authentische Architekt Ihres eigenen Schicksals zu sein. Dies ist der perfekte Zeitpunkt, um ein Projekt zu starten, von dem Sie bisher nicht einmal laut träumen wollten.",
      "r": "Setzen Sie auf sich selbst und treffen Sie eine unabhängige Entscheidung, die Ihre derzeitige Lebenseinstellung verändern wird. Vertrauen Sie Ihrer Intuition als Pionier und haben Sie keine Angst davor, neue, unentdeckte Wege zu beschreiten.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Vermeiden Sie es, auf die Erlaubnis anderer zu warten, denn nur Sie wissen, was für Sie am besten ist. Lassen Sie nicht zu, dass Passivität das Feuer der Initiative auslöscht, das heute besonders stark in Ihrem Herzen brennt.",
      "s": "Anmutig schließen – dankbar öffnen",
      "fun": "Ihre Begeisterung ist heute so ansteckend, dass Sie die Menge anführen könnten, indem Sie einfach nur Ihr Morgenbrot holen gehen."
    },
    "3-24": {
      "z": "Widder",
      "l": 2,
      "e": "Nummer zwei lehrt uns, dass die größte Stärke in der Fähigkeit liegt, zuzuhören und harmonische Beziehungen zur Umwelt aufzubauen. Heute wird Ihre Diplomatie zum Schlüssel, der Ihnen die Tür zu den Herzen und Köpfen der Menschen öffnet, die Ihnen wichtig sind.",
      "r": "Suchen Sie nach Verständnis und bauen Sie Brücken, wo zuvor Kälte, Distanz oder unnötige Vorurteile herrschten. Kultivieren Sie Ihre Intuition, denn sie wird Ihnen am besten sagen, wie Sie im Kontakt mit anderen das Gleichgewicht bewahren.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Vermeiden Sie Konflikte und die Durchsetzung Ihres Willens, da dies die fragile Atmosphäre der heutigen Harmonie zerstören könnte. Scheuen Sie sich nicht, um Unterstützung zu bitten, denn eine Zusammenarbeit bringt Ihnen viel mehr Vorteile, als wenn Sie alleine handeln.",
      "s": "Dein Weg, dein Rhythmus",
      "fun": "Heute reagieren Sie so sensibel auf die Stimmungen anderer, dass Sie sogar verstehen, was Ihre Katze Ihnen mit ihrem Schnurren mitteilen möchte."
    },
    "3-25": {
      "z": "Widder",
      "l": 3,
      "e": "Trójka ist eine fröhliche Feier des Lebens, die jeden gewöhnlichen Moment in eine farbenfrohe Geschichte voller Inspiration verwandelt. Erlauben Sie sich zu lachen und gehen Sie Herausforderungen leichtfertig an, denn Freude ist das mächtigste kreative Werkzeug, das Sie haben.",
      "r": "Drücken Sie sich durch Kunst, Worte oder einfach nur ein fröhliches Gespräch mit jemandem aus, der heute Unterstützung braucht. Teilen Sie Ihren Optimismus und inspirieren Sie andere, Schönheit in den kleinsten Details der Realität zu sehen.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Vermeiden Sie es, zu ernst zu sein und sich über Dinge Sorgen zu machen, auf die Sie heute keinen wirklichen Einfluss haben. Unterdrücken Sie Ihre Kreativität nicht aus Angst vor einem Urteil, denn die Welt braucht Ihren einzigartigen Glanz.",
      "s": "Sanftmut ist Stärke",
      "fun": "Ihre Aura ist heute so glücklich, dass selbst Ihr Kaffee eher nach Sonnenschein als nach Koffein zu schmecken scheint."
    },
    "3-26": {
      "z": "Widder",
      "l": 4,
      "e": "Nummer vier erinnert uns an den Wert solider Grundlagen, auf denen wir unser Gefühl von Sicherheit und Stabilität aufbauen. Ihre Regelmäßigkeit heute wird geschätzt und bringt Ihnen inneren Frieden und Zufriedenheit über eine gut erledigte Arbeit.",
      "r": "Konzentrieren Sie sich auf die Fertigstellung Ihrer begonnenen Projekte und kümmern Sie sich um Angelegenheiten, die eine zuverlässige Vorgehensweise erfordern. Bauen Sie Ihre Zukunft Schritt für Schritt auf und vertrauen Sie darauf, dass jede kleine Aktion Sie dem großen Erfolg näher bringt.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Vermeiden Sie Chaos und die gleichzeitige Bewältigung zu vieler Herausforderungen, die Ihre Aufmerksamkeit unnötig ablenken könnten. Ignorieren Sie nicht die Regeln, die Ihre Stabilität schützen und Ihnen helfen, die Kontrolle über Ihr Leben zu behalten.",
      "s": "Einfacher bedeutet weiter",
      "fun": "Ihre Liebe zur Ordnung führt heute dazu, dass selbst die Büroklammern auf Ihrem Schreibtisch in perfekten Reihen angeordnet sind."
    },
    "3-27": {
      "z": "Widder",
      "l": 5,
      "e": "Five bringt einen Hauch von Frische und ermutigt Sie, die sichere, aber manchmal zu vorhersehbare Komfortzone zu verlassen. Dies ist der perfekte Tag, um eine Veränderung zu wagen, die neue, belebende Energie in Ihren Alltag bringt.",
      "r": "Seien Sie offen für spontane Vorschläge und gönnen Sie sich ein kleines Abenteuer, das Ihren Geist erfrischt. Gehen Sie ein Risiko ein und prüfen Sie die neuen Entwicklungsmöglichkeiten, die sich Ihnen heute bieten.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Vermeiden Sie Langeweile und Stagnation, die äußerst frustrierend sein und Ihnen Energie rauben können. Haben Sie keine Angst, alte Muster aufzugeben, denn das größte Potenzial für Ihr Wachstum liegt in der Veränderung.",
      "s": "Solidität ist Poesie",
      "fun": "Ihr Bedürfnis nach Freiheit ist heute so groß, dass selbst ein Spaziergang zum örtlichen Geschäft wie der Beginn einer großen Expedition erscheint."
    },
    "3-28": {
      "z": "Widder",
      "l": 6,
      "e": "The Six lädt Sie in die Welt der Harmonie ein, in der Liebe, Fürsorge und Schönheit die wichtigsten Wegweiser des Tages sind. Stellen Sie sicher, dass Ihre Taten direkt von Herzen kommen und Ihnen und Ihren Lieben Trost spenden.",
      "r": "Schaffen Sie eine warme Atmosphäre in Ihrem Zuhause und verbringen Sie Zeit mit den Menschen, die Ihnen am nächsten stehen. Konzentrieren Sie sich darauf, schöne Momente zu schaffen, die Ihre Bindungen stärken und Ihnen das Gefühl geben, geliebt zu werden.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Vermeiden Sie es, zu viele Probleme anderer Menschen auf sich zu nehmen, denn jeder muss seinen eigenen Weg gehen. Suchen Sie nicht nach Perfektion, wenn ehrliche Präsenz und ein freundliches, unterstützendes Wort ausreichen.",
      "s": "Freiheit ist eine Entscheidung",
      "fun": "Ihr Wunsch, sich um die Welt zu kümmern, sorgt dafür, dass sich heute sogar Ihre Topfblumen besonders verwöhnt fühlen."
    },
    "3-29": {
      "z": "Widder",
      "l": 7,
      "e": "Sieben ist eine Zeit der Selbstbeobachtung, in der Stille zu Ihrem treuesten und weisesten Verbündeten wird. Gönnen Sie sich den Luxus, mit Ihren Gedanken allein zu sein, um Antworten auf die wichtigsten Fragen Ihrer Seele zu finden.",
      "r": "Nehmen Sie sich einen Moment Zeit zum Meditieren oder zum ruhigen Lesen, um Ihr Wissen über sich selbst zu vertiefen. Vertrauen Sie Ihrer Intuition, denn in der heutigen Stille wird ihre Stimme außergewöhnlich deutlich zu hören sein.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Vermeiden Sie Lärm und oberflächliche Unterhaltung, die Ihre wertvolle Aufmerksamkeit ablenken und Ihnen die Ruhe nehmen können. Haben Sie keine Angst vor Fragen nach dem Sinn des Lebens, denn die Auseinandersetzung mit ihnen wird Ihnen die gewünschte geistige Freiheit bringen.",
      "s": "Schönheit ist ein Akt des Mutes",
      "fun": "Ihr Schweigen ist heute so beredt, dass Ihre Lieben sich fragen, ob Sie gerade eine neue Galaxie entdeckt haben."
    },
    "3-30": {
      "z": "Widder",
      "l": 8,
      "e": "Acht ruft Sie dazu auf, Charakterstärke und Mut im Umgang mit Ihren eigenen Ressourcen und Energie zu zeigen. Heute befindet sich Ihre Agentur auf dem höchsten Niveau, das es Ihnen ermöglicht, auch die komplexesten Finanzprojekte erfolgreich abzuschließen.",
      "r": "Ergreifen Sie in beruflichen Angelegenheiten die Initiative und scheuen Sie sich nicht, nach den Belohnungen und der Anerkennung zu greifen, die Sie verdienen. Bauen Sie Ihre Autorität auf den Grundlagen von Ehrlichkeit und Zuverlässigkeit auf, die schon immer Ihre Stärken waren.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Treffen Sie Entscheidungen nicht in Eile oder unter dem Einfluss negativer Emotionen, die Ihr Urteilsvermögen trüben könnten. Vermeiden Sie Arroganz und denken Sie daran, dass wahre Macht aus Ruhe und Vertrauen in Ihre Handlungen resultiert.",
      "s": "Die Frage ist wichtiger als die Antwort",
      "fun": "Heute sehen Sie aus wie ein Anführer, vor dem selbst die größten Widrigkeiten und Warteschlangen bei der Post weichen."
    },
    "3-31": {
      "z": "Widder",
      "l": 9,
      "e": "Die Neun schließen den März in einem Ton voller Weisheit und Zusammenfassungen ab, sodass Sie mit der richtigen Distanz auf die vergangenen Wochen blicken können. Dies ist der perfekte Zeitpunkt, um Schlussfolgerungen zu ziehen und Platz für die neue Energie zu schaffen, die der nächste Monat bringen wird.",
      "r": "Beenden Sie alles, was Sie begonnen haben, und verabschieden Sie sich voller Dankbarkeit von dem, was in Ihrem Leben bereits abgeschlossen wurde. Nehmen Sie sich einen Moment Zeit, um dem Schicksal für all die Lektionen zu danken, die Sie im letzten Quartal gelernt haben.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Klammern Sie sich nicht an Dingen, die Ihrer Entwicklung nicht mehr dienen, sondern öffnen Sie Ihre Hände, um neue Geschenke anzunehmen. Vermeiden Sie Traurigkeit, wenn etwas verschwindet, denn jede Veränderung ist ein notwendiger Schritt in Richtung eines besseren Lebens.",
      "s": "Macht dient, nicht dominiert",
      "fun": "Heute sind Sie wie eine weise Eule, die ein wichtiges Kapitel beendet und bereit für ein völlig neues und faszinierendes Abenteuer ist."
    },
    "4-1": {
      "z": "Widder",
      "l": 6,
      "e": "Die Sechs am 1. April bringt die Energie der Verantwortung und der tiefen Sorge mit sich, die uns vor der Oberflächlichkeit der Aprilscherze schützt. Dies ist der perfekte Zeitpunkt, um Harmonie in den Beziehungen zu Ihren Lieben aufzubauen und sicherzustellen, dass in Ihrem Zuhause Frieden und gegenseitiges Vertrauen herrschen.",
      "r": "Konzentrieren Sie sich auf die Bedürfnisse Ihrer Familie und schaffen Sie eine warme Atmosphäre für sie. Tun Sie sich selbst oder Ihrer Umgebung etwas Schönes, das Ihr inneres Gleichgewicht stärkt.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Hüten Sie sich davor, zu viele Probleme anderer Menschen auf sich zu nehmen, da dies Ihre eigene Lebensfreude überfordern könnte. Lassen Sie nicht zu, dass kleinere Ärgernisse die Harmonie zerstören, die Sie so sorgfältig gepflegt haben.",
      "s": "Zuhause ist ein Ort, an dem das Herz atmet",
      "fun": "Deine heutigen Witze sind so voller Empathie, dass sich niemand verarscht, sondern äußerst umsorgt fühlt."
    },
    "4-2": {
      "z": "Widder",
      "l": 7,
      "e": "Heute lädt Seven Sie ein, sich aus der lauten Welt zurückzuziehen und in tiefer, innerer Stille nach Antworten zu suchen. Dies ist eine Zeit der Kontemplation, in der Ihre Intuition Ihnen Lösungen liefert, die einer kalten, logischen Analyse unzugänglich sind.",
      "r": "Nehmen Sie sich einen Moment der Meditation oder ruhigen Lektüre, der Ihnen dabei hilft, Ihren spirituellen Weg zu finden. Vertraue der Stille, denn dort entstehen die wertvollsten und nachhaltigsten Gedanken.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Vermeiden Sie unnötigen Lärm und oberflächliche Gespräche, die Ihre wertvolle Aufmerksamkeit ablenken könnten. Treffen Sie keine überstürzten Entscheidungen, bis Sie das Gefühl haben, vollständig mit Ihrem inneren Selbst im Einklang zu sein.",
      "s": "Weisheit wohnt in der Stille",
      "fun": "Ihre geheimnisvolle Aura ist heute so stark, dass selbst Ihr Morgenkaffee in einem mystischen Rhythmus zu brühen scheint."
    },
    "4-3": {
      "z": "Widder",
      "l": 8,
      "e": "Acht ist eine kraftvolle Manifestationsenergie, die es Ihnen ermöglicht, die Struktur Ihres beruflichen und finanziellen Lebens wirklich zu beeinflussen. Ihre Entschlossenheit wird heute zum Werkzeug für den Erfolg, solange Sie Ihren höchsten Werten treu bleiben.",
      "r": "Ergreifen Sie gezielt Maßnahmen, um ehrgeizige Ziele zu erreichen und vertrauen Sie auf Ihre Antriebskraft. Bauen Sie Ihre Fülle auf der Grundlage von Ehrlichkeit auf, die Ihnen dauerhafte und zufriedenstellende Ergebnisse bescheren wird.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Vermeiden Sie Risikoängste und mangelndes Vertrauen in Ihre nahezu unbegrenzten Möglichkeiten. Treffen Sie Entscheidungen nicht auf der Grundlage momentaner Emotionen, sondern lassen Sie sich von einer langfristigen Entwicklungsvision leiten.",
      "s": "Stärke aus Werten, nicht aus Ego",
      "fun": "Heute wirken Sie wie ein Anführer, der selbst beim Brötchenkauf im örtlichen Laden einen besseren Preis aushandeln kann."
    },
    "4-4": {
      "z": "Widder",
      "l": 9,
      "e": "Die Zahl Neun symbolisiert den Abschluss eines bestimmten Erfahrungszyklus, der es Ihnen ermöglicht, mit Dankbarkeit auf den bisher zurückgelegten Weg zu blicken. Dies ist eine Zeit großer Transformation und der Befreiung von dem, was schon lange nicht mehr Ihrem höchsten Wohl dient.",
      "r": "Verzeihen Sie alte Traumata und lassen Sie Beziehungen los, die Ihre natürliche Weiterentwicklung im Leben blockieren. Danken Sie der Vergangenheit für all die gewonnenen Erkenntnisse und schaffen Sie in Ihrem Herzen Platz für neue Geschenke.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Klammern Sie sich nicht an das, was bereits vergangen ist, denn jedes Ende ist das Versprechen eines neuen Morgens. Vermeiden Sie Traurigkeit, wenn etwas vergeht, denn betrachten Sie es als eine notwendige Phase Ihres spirituellen Wachstums.",
      "s": "Das Ende ist auch ein Geschenk",
      "fun": "Heute sind Sie mit der Reinigung so emotional beschäftigt, dass sogar die alten Quittungen in Ihrem Portemonnaie nach einer ordnungsgemäßen Entsorgung verlangen."
    },
    "4-5": {
      "z": "Widder",
      "l": 1,
      "e": "Eines bringt nach einer Reinigungswelle einen Funken neuer Initiative und ermutigt Sie, im vollen Glanz Ihrer eigenen Authentizität zu stehen. Dies ist der Tag, an dem jeder Ihrer mutigen Gedanken die Kraft hat, der Beginn einer neuen, außergewöhnlichen Geschichte zu werden.",
      "r": "Setzen Sie auf sich selbst und initiieren Sie ein Projekt, von dem Sie bisher nie laut geträumt haben. Vertrauen Sie Ihrer Durchbruchskraft und seien Sie der Erste, der voller Zuversicht an Ihren Sieg glaubt.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Vermeiden Sie es, auf die Meinungen anderer zu hören, denn nur Sie kennen die Richtung, in die Sie gehen möchten. Zögern Sie nicht, Maßnahmen zu ergreifen, denn die heutige Energie begünstigt diejenigen, die mutig ins Unbekannte vorstoßen.",
      "s": "Die erste Zeile gehört Ihnen",
      "fun": "Ihre Begeisterung ist heute so groß, dass Sie eine neue Mode starten könnten, indem Sie einfach nur einen Schuh zur Arbeit tragen."
    },
    "4-6": {
      "z": "Widder",
      "l": 2,
      "e": "Zwei lehrt uns, dass die größte Stärke oft in der Sanftmut und der Fähigkeit liegt, mit anderen Menschen zusammenzuleben. Heute wird Ihre Diplomatie zum Schlüssel, der Ihnen die Tür zu den Herzen und Köpfen der Menschen öffnet, die Ihnen wichtig sind.",
      "r": "Suchen Sie nach Verständnis und bauen Sie Brücken, wo zuvor Kälte oder unnötige Distanz herrschte. Kultivieren Sie Ihre Intuition, denn sie wird Ihnen am besten sagen, wie Sie das Gleichgewicht in Beziehungen aufrechterhalten können.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Vermeiden Sie Konkurrenz und die Durchsetzung Ihres Willens, da dies die fragile Atmosphäre der heutigen Harmonie zerstören könnte. Scheuen Sie sich nicht, um Unterstützung zu bitten, denn die Zusammenarbeit wird Ihnen heute noch viel mehr Vorteile bringen.",
      "s": "In der Stille hört man mehr",
      "fun": "Heute reagieren Sie so sensibel auf die Stimmungen anderer, dass Sie genau wissen, wovon Ihre Lieben träumen, bevor sie überhaupt darüber nachdenken."
    },
    "4-7": {
      "z": "Widder",
      "l": 3,
      "e": "Three ist ein fröhlicher Tanz der Kreativität, der jede gewöhnliche Aufgabe in ein faszinierendes Abenteuer voller Inspiration verwandelt. Erlauben Sie sich zu lachen und gehen Sie das Leben unbeschwert an, denn Freude ist der kürzeste Weg zur Erfüllung Ihrer Träume.",
      "r": "Drücken Sie Ihre Gefühle durch Farben, Worte oder Gesten aus, die einen Hauch von Frische verleihen. Teilen Sie Ihren Optimismus, denn Ihr aufrichtiges Lächeln hat heute die Kraft, andere mit guter Energie anzustecken.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Überanalysieren Sie Ihre Fehler, was Ihren natürlichen Enthusiasmus unnötig dämpfen könnte. Lassen Sie nicht zu, dass der Pessimismus Ihrer Umgebung Ihr inneres, freudiges Leuchten auslöscht, das heute so hell strahlt.",
      "s": "Lachen ist der kürzeste Weg zum Herzen",
      "fun": "Deine Energie ist heute so sonnig, dass sogar die Blumen in der Vase sich zu dir zu neigen scheinen."
    },
    "4-8": {
      "z": "Widder",
      "l": 4,
      "e": "Nummer vier erinnert uns an den Wert solider Grundlagen, auf denen wir unser Gefühl von Sicherheit und Stabilität aufbauen. Ihre Regelmäßigkeit wird heute geschätzt und bringt Ihnen Frieden und Zufriedenheit mit einer gut erledigten Arbeit.",
      "r": "Konzentrieren Sie sich darauf, die begonnenen Projekte abzuschließen und kümmern Sie sich um die Angelegenheiten, die Ihrer Aufmerksamkeit bedürfen. Bauen Sie Ihre Zukunft Schritt für Schritt auf und vertrauen Sie darauf, dass jede kleine Aktion Sie dem großen Erfolg näher bringt.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Vermeiden Sie Chaos und die gleichzeitige Bewältigung zu vieler Herausforderungen, die Sie ablenken könnten. Ignorieren Sie nicht die Regeln, die Ihre Stabilität schützen und Ihnen helfen, die Kontrolle über die Realität zu behalten.",
      "s": "Das Fundament macht keinen Lärm – aber alles steht darauf",
      "fun": "Ihre Liebe zur Ordnung führt heute dazu, dass selbst die Büroklammern auf Ihrem Schreibtisch in perfekten Reihen angeordnet sind."
    },
    "4-9": {
      "z": "Widder",
      "l": 5,
      "e": "Five bringt einen Hauch von Freiheit und ermutigt Sie, die sichere, aber manchmal zu vorhersehbare Komfortzone zu verlassen. Dies ist der perfekte Tag, um eine Veränderung zu wagen, die neue Energie in Ihren Alltag bringt.",
      "r": "Seien Sie offen für spontane Vorschläge und gönnen Sie sich ein kleines Abenteuer, das Ihren Geist erfrischt. Gehen Sie ein Risiko ein und prüfen Sie die neuen Entwicklungsmöglichkeiten, die sich heute am Horizont abzeichnen.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Vermeiden Sie Langeweile und Stagnation, die äußerst frustrierend und kräftezehrend sein können. Haben Sie keine Angst, alte Muster aufzugeben, denn Ihr größtes Potenzial liegt in der Veränderung.",
      "s": "Der Wind fragt nicht – er weht einfach",
      "fun": "Ihr Bedürfnis nach Veränderung ist heute so groß, dass ein Spaziergang dazu führen kann, dass Sie Tickets für das Ende der Welt buchen."
    },
    "4-10": {
      "z": "Widder",
      "l": 6,
      "e": "The Six lädt Sie erneut in die Welt der Harmonie ein, in der Liebe, Fürsorge und Schönheit die wichtigsten Wegweiser sind. Stellen Sie sicher, dass Ihre Taten direkt von Herzen kommen und Ihnen und Ihren Lieben Trost spenden.",
      "r": "Schaffen Sie eine warme Atmosphäre in Ihrem Zuhause und verbringen Sie Zeit mit den Menschen, die Ihnen am wichtigsten sind. Konzentrieren Sie sich darauf, schöne Momente zu schaffen, die Ihre Bindungen stärken und Ihnen ein Gefühl der Sicherheit geben.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Vermeiden Sie es, zu viele Probleme anderer Menschen auf sich zu nehmen, denn jeder muss seinen eigenen Weg gehen. Suchen Sie nicht nach Perfektion, wenn ehrliche Präsenz und ein freundliches, unterstützendes Wort ausreichen.",
      "s": "Zuhause ist ein Ort, an dem das Herz atmet",
      "fun": "Ihr Wunsch, sich um die Welt zu kümmern, sorgt dafür, dass sich heute sogar Ihre Topfblumen besonders verwöhnt fühlen."
    },
    "4-11": {
      "z": "Widder",
      "l": 7,
      "e": "Die Zahl Sieben eröffnet einen Raum für ein tiefes Studium Ihrer eigenen Natur und der Bedeutung Ihrer Handlungen. Es ist ein Tag, an dem Intellekt harmonisch auf Spiritualität trifft und ideale Bedingungen für die Entdeckung nicht offensichtlicher Wahrheiten über die Welt schafft.",
      "r": "Verbringen Sie Zeit damit, Ihre Leidenschaften zu entwickeln und in der Stille Ihres eigenen Geistes nach Antworten zu suchen. Vertrauen Sie Ihrer Intuition, denn in der Stille entstehen die wertvollsten und nachhaltigsten Ideen für die Zukunft.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Vermeiden Sie Oberflächlichkeit und erliegen Sie dem Gruppenzwang, der Sie dazu zwingt, schnelle und gedankenlose Antworten zu geben. Laufen Sie nicht vor schwierigen Fragen davon, denn die Konfrontation mit ihnen wird Ihnen die Freiheit des Geistes bringen, die Sie sich wünschen.",
      "s": "Weisheit wohnt in der Stille",
      "fun": "Ihre geheimnisvolle Aura ist heute so stark, dass sogar Ihr Lieblingsbuch von selbst auf der richtigen Seite aufzuschlagen scheint."
    },
    "4-12": {
      "z": "Widder",
      "l": 8,
      "e": "Acht ruft Sie dazu auf, Mut bei der Bewältigung Ihres eigenen Lebens und der Ressourcen zu zeigen, die Ihnen täglich zur Verfügung stehen. Ihre Agentur befindet sich nun auf dem höchsten Niveau, das es Ihnen ermöglicht, auch die komplexesten Projekte erfolgreich abzuschließen.",
      "r": "Ergreifen Sie mutige Initiativen in beruflichen Angelegenheiten und scheuen Sie sich nicht, nach der Anerkennung und dem Erfolg zu streben, die Sie verdienen. Bauen Sie Ihre Autorität auf der Grundlage von Ehrlichkeit auf, denn nur zuverlässiges Handeln führt zu dauerhaften und würdigen Ergebnissen.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Treffen Sie Entscheidungen nicht in Eile oder unter dem Einfluss negativer Emotionen, die Ihr Urteilsvermögen für einen Moment trüben könnten. Vermeiden Sie Arroganz und denken Sie daran, dass wahre Macht nicht schreien muss, um von anderen wahrgenommen zu werden.",
      "s": "Stärke aus Werten, nicht aus Ego",
      "fun": "Heute sehen Sie aus wie eine Führungspersönlichkeit, vor der selbst die größten Widrigkeiten und bürokratischen Hürden im Amt weichen."
    },
    "4-13": {
      "z": "Widder",
      "l": 9,
      "e": "The Nine lädt Sie ein, viel zu putzen – nicht nur im physischen Raum, sondern vor allem auch im Bereich Ihrer Emotionen. Dies ist der perfekte Zeitpunkt, um die bisher gewonnenen Erkenntnisse zusammenzufassen und sich auf die große Eröffnung neuer Frühlingsgeschenke vorzubereiten.",
      "r": "Beenden Sie alles, was Sie begonnen haben, und schließen Sie dankbar die Kapitel ab, die kein Licht mehr in Ihren Alltag bringen. Schenken Sie Ihrem Herzen Vergebung, indem Sie jede Erfahrung, die Sie gemacht haben, als wertvollen Teil Ihrer einzigartigen Weisheit anerkennen.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Klammern Sie sich nicht an die Vergangenheit und Beziehungen, die mit ihrer Präsenz nur Ihre natürliche und schöne Entwicklung blockieren. Vermeiden Sie die Traurigkeit über das Vergangene, denn jedes Ende ist ein notwendiges Versprechen eines brandneuen Morgens.",
      "s": "Das Ende ist auch ein Geschenk",
      "fun": "Heutzutage sind Sie so begierig darauf, Dinge zu erledigen, dass sogar der Staub aus Ihrem Haus entweicht, bevor Sie überhaupt daran denken."
    },
    "4-14": {
      "z": "Widder",
      "l": 1,
      "e": "Einer davon ist ein frischer Hauch von Energie, der Ihnen das Gefühl gibt, wieder ein authentischer Architekt Ihres eigenen Schicksals zu sein. Jede Entscheidung, die Sie heute treffen, hat die Macht, die Realität zum Besseren zu verändern und besser mit Ihrer inneren Stimme in Einklang zu bringen.",
      "r": "Entscheiden Sie sich für Originalität und haben Sie keine Angst, der Welt Ihre kühnsten und innovativsten Projekte zu präsentieren. Vertrauen Sie auf Ihre Stärke und glauben Sie als Erster voll und ganz an den Erfolg des heutigen Handelns.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Vermeiden Sie Nachahmungen und suchen Sie nach Abkürzungen, die Ihre Authentizität unnötig schwächen könnten. Scheuen Sie sich nicht, den Weg alleine zu gehen, denn Pioniere müssen oft den Weg ebnen, ohne auf andere Rücksicht zu nehmen.",
      "s": "Die erste Zeile gehört Ihnen",
      "fun": "Heute sind Sie eine solche Dosis purer Energie, dass Sie einen morgendlichen Espresso für Ihr gesamtes Büro oder Ihre Lieben ersetzen könnten."
    },
    "4-15": {
      "z": "Widder",
      "l": 2,
      "e": "Zwei lehrt uns, dass wir die größten Erfolge erzielen, wenn wir in der Lage sind, im Geiste gegenseitigen Respekts mit anderen zusammenzuarbeiten. Ihre Diplomatie und Ihr einzigartiger Sinn für Stimmung werden es Ihnen heute ermöglichen, jede noch so angespannte Situation zu entschärfen.",
      "r": "Hören Sie aufmerksam zu, was andere sagen, und suchen Sie nach gemeinsamen Punkten, die eine solide Grundlage für eine Einigung bilden. Kultivieren Sie Ihre Intuition, denn sie wird Ihnen heute sagen, wem es wert ist, zu vertrauen und wem Ihre wertvollen Geheimnisse anzuvertrauen.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Vermeiden Sie Isolation und Verstecken im Schatten, wenn Ihre sanfte Anwesenheit den Bedürftigen Erleichterung bringen kann. Scheuen Sie sich nicht, Ihre eigene Meinung zu äußern, auch wenn Ihr Hauptziel heute darin besteht, universelle Harmonie aufzubauen.",
      "s": "In der Stille hört man mehr",
      "fun": "Sie sind heute ein so guter Zuhörer, dass sogar Ihre Topfblumen sich beim Sprechen zu Ihnen neigen."
    },
    "4-16": {
      "z": "Widder",
      "l": 3,
      "e": "Three ist ein freudiges Manifest Ihrer kreativen Seele, das jeden schönen Aprilmoment zum Ausdruck bringen und feiern möchte. Heute braucht die Welt Ihr Lächeln und die Leichtigkeit, die Sie in das Leben aller Menschen bringen, denen Sie unterwegs begegnen.",
      "r": "Erlauben Sie sich, mit Worten und Formen zu spielen und andere dazu zu inspirieren, die Herausforderungen des Alltags mit Freude zu betrachten. Teilen Sie Ihre Begeisterung und haben Sie keine Angst davor, im Mittelpunkt der Aufmerksamkeit zu stehen, wenn dies dazu beiträgt, gute Energie zu verbreiten.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Vermeiden Sie Klatsch und verschwenden Sie keine Zeit mit müßigen Diskussionen, die niemandem wirklichen Nutzen bringen. Lassen Sie nicht zu, dass kleinere Beleidigungen von Ihren Mitmenschen Ihr inneres, freudiges Strahlen, das heute ausstrahlt, auslöschen.",
      "s": "Lachen ist der kürzeste Weg zum Herzen",
      "fun": "Ihrer Kreativität sind heute keine Grenzen mehr gesetzt, sodass selbst ein gewöhnlicher Salat zum Abendessen wie ein Kunstwerk moderner Kunst aussehen kann."
    },
    "4-17": {
      "z": "Widder",
      "l": 4,
      "e": "Vier erinnert uns daran, dass wahre Freiheit aus einem Gefühl der Sicherheit und soliden Grundlagen des Alltags erwächst. Ihre Regelmäßigkeit heute wird geschätzt und wird Ihnen den Frieden bringen, von dem Sie tief in Ihrem Herzen schon lange geträumt haben.",
      "r": "Kümmern Sie sich um Ihre Unterlagen und verfeinern Sie Details, die Ihnen bisher unbedeutend erschienen. Bauen Sie Ihre Zukunft Stein für Stein und denken Sie daran, dass Eile bei der Grundsteinlegung meist ein schlechter Ratgeber ist.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Vermeiden Sie Chaos und die gleichzeitige Bewältigung zu vieler Herausforderungen, die Ihre wertvolle Aufmerksamkeit unnötig ablenken könnten. Ignorieren Sie nicht die Verfahren und Regeln, die dem Schutz Ihrer Interessen und der Sicherung der Nachhaltigkeit Ihrer Leistungen dienen.",
      "s": "Das Fundament macht keinen Lärm – aber alles steht darauf",
      "fun": "Ihr heutiger Organisationsgrad bedeutet, dass sogar die Zeit genau so vergeht, wie Sie es in Ihrem Kalender geplant haben."
    },
    "4-18": {
      "z": "Widder",
      "l": 5,
      "e": "Five bringt dynamische Veränderungen mit sich, die von Ihnen Flexibilität und die Bereitschaft erfordern, schnell neue Entscheidungen zu treffen. Dies ist ein Tag voller Überraschungen, der Ihre derzeitige Wahrnehmung vieler wichtiger Dinge völlig verändern kann.",
      "r": "Akzeptieren Sie die sich bietenden Möglichkeiten und seien Sie bereit, die Richtung zu ändern, wenn Sie der Meinung sind, dass ein neuer Weg besser ist. Gehen Sie auf Menschen zu und seien Sie offen für einen Gedankenaustausch, der Sie zu mutigen Maßnahmen inspirieren kann.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Vermeiden Sie Angst vor dem Unbekannten und das Festhalten an Plänen, die nicht mehr vollständig gültig sind. Scheuen Sie sich nicht, Risiken einzugehen, denn das Glück begünstigt heute diejenigen, die den Mut haben, bestehende Muster zu durchbrechen.",
      "s": "Der Wind fragt nicht – er weht einfach",
      "fun": "Heutzutage steckt so viel Reiseleidenschaft in Ihnen, dass selbst der Gang zum örtlichen Geschäft wie der Beginn einer großen Expedition erscheint."
    },
    "4-19": {
      "z": "Widder",
      "l": 6,
      "e": "The Six lädt Sie ein, Brücken der Liebe und Fürsorge zu bauen, die die Herzen Ihrer Lieben zu einem harmonischen Ganzen verbinden. Ihre Sensibilität für Schönheit wird jedes Treffen heute zu einer Gelegenheit machen, die gegenseitigen Bindungen zu stärken.",
      "r": "Achten Sie auf die Ästhetik Ihrer unmittelbaren Umgebung und lassen Sie Harmonie zu einer dauerhaften Präsenz in Ihrem Zuhause werden. Zeigen Sie den Menschen, die Sie lieben, Zärtlichkeit, denn einfache Gesten haben heute eine große Kraft, alte, kleine Wunden zu heilen.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Vermeiden Sie es, zu viele Probleme anderer Menschen auf sich zu nehmen, denn jeder muss seinen eigenen Weg gehen. Suchen Sie nicht nach Perfektion, wo ehrliche Präsenz und ein gutes, unterstützendes Wort aus dem Herzen ausreichen.",
      "s": "Zuhause ist ein Ort, an dem das Herz atmet",
      "fun": "Ihr Sinn für Harmonie ist heute so groß, dass sogar die Kissen auf der Couch eine perfekte Linie bilden."
    },
    "4-20": {
      "z": "Stier",
      "l": 7,
      "e": "Die Zahl Sieben schließt dieses Jahrzehnt in einem besinnlichen Ton ab und lädt zu einer tiefgreifenden Zusammenfassung der bisherigen April-Erlebnisse ein. Dies ist die Zeit, in der intuitives Wissen zu Ihrem wertvollsten Kapital und Leitfaden für die kommenden Tage wird.",
      "r": "Nehmen Sie sich einen Moment Zeit, um Ihre Gedanken aufzuschreiben und dem Rhythmus der Natur zu lauschen, die jetzt in voller Blüte steht. Vertrauen Sie den Reifungsprozessen, die in Ihnen ablaufen, und geben Sie sich Zeit, sich auf neue Herausforderungen vorzubereiten.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Vermeiden Sie Lärm und unnötige Eile bei der Planung Ihrer nächsten beruflichen oder privaten Schritte. Ignorieren Sie nicht Träume und kleine Zeichen, die für Sie heute außergewöhnlich klar und wichtig sein können.",
      "s": "Weisheit wohnt in der Stille",
      "fun": "Heute sind Sie wie eine weise Eule, die die Welt von der Seitenlinie aus beobachtet und dabei stoische Ruhe und den richtigen Abstand bewahrt."
    },
    "4-21": {
      "z": "Stier",
      "l": 8,
      "e": "Nummer Acht ist eine kraftvolle Energiewelle, die die Manifestation Ihrer kühnsten Visionen in der Welt der Materie begünstigt. Dies ist der Tag, an dem Ihre innere Stärke auf die richtigen Umstände trifft und es Ihnen ermöglicht, mutig nach dem zu greifen, was Sie sich ehrlich verdient haben.",
      "r": "Treffen Sie wichtige finanzielle Entscheidungen und zeigen Sie Entschlossenheit bei der Verwirklichung Ihrer beruflichen Ziele. Vertrauen Sie Ihrer ursächlichen Kraft, die heute außergewöhnlich effektiv und präzise arbeitet.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Vermeiden Sie Angst vor Erfolg und Unsicherheit, die Ihre Autorität in den Augen anderer untergraben könnten. Geben Sie nicht der Versuchung nach, um jeden Preis zu dominieren, und denken Sie daran, dass wahre Macht aus innerem Frieden kommt.",
      "s": "Stärke aus Werten, nicht aus Ego",
      "fun": "Ihr Selbstvertrauen führt heute dazu, dass sich selbst die schwierigsten Aufgaben auf Ihrer „To-do“-Liste fast von selbst erledigen."
    },
    "4-22": {
      "z": "Stier",
      "l": 9,
      "e": "Neun erinnert uns daran, dass Weisheit in der Fähigkeit besteht, Etappen zu vollenden, die ihr Schicksal bereits erfüllt haben. Dies ist die Zeit des großen Frühjahrsputzes der Seele, der Sie darauf vorbereitet, völlig neue, faszinierende Impulse des Schicksals anzunehmen.",
      "r": "Bedanken Sie sich bei der Vergangenheit für all die gewonnenen Erkenntnisse und lassen Sie bewusst los, was Sie einschränkt. Schaffen Sie in Ihrem Herzen Platz für neue Erfahrungen, die mit dem bevorstehenden Mai erscheinen werden.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Hängen Sie nicht an Beziehungen und Problemen fest, die kein Licht mehr in Ihren Alltag bringen. Vermeiden Sie es, über Verluste nachzudenken, denn jedes Ende ist das Versprechen eines schönen neuen Morgens.",
      "s": "Das Ende ist auch ein Geschenk",
      "fun": "Heute haben Sie beim Abschluss von Angelegenheiten eine so große Dynamik, dass selbst der Staub in den Ecken des Schranks das Gefühl hat, ernsthaft von der Räumung bedroht zu sein."
    },
    "4-23": {
      "z": "Stier",
      "l": 1,
      "e": "Eines entfacht erneut den Funken neuer Initiative und ermutigt Sie, in der vollen Pracht Ihrer eigenen Möglichkeiten zu stehen. Dies ist der Tag, an dem jeder Ihrer mutigen Gedanken zur Grundlage einer neuen, außergewöhnlichen Geschichte werden kann, die Sie selbst schreiben werden.",
      "r": "Zeigen Sie Ihre Unabhängigkeit und initiieren Sie ein Projekt, von dem Sie bisher nie laut geträumt haben. Vertrauen Sie Ihrer Durchbruchskraft und seien Sie der Erste, der heute voller Zuversicht an Ihren Sieg glaubt.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Vermeiden Sie es, auf die Meinungen anderer zu hören, denn nur Sie kennen die Richtung, in die Sie gehen möchten. Zögern Sie nicht, Maßnahmen zu ergreifen, denn die heutige Energie begünstigt diejenigen, die mutig und ohne zu zögern ins Unbekannte vordringen.",
      "s": "Die erste Zeile gehört Ihnen",
      "fun": "Ihre Begeisterung ist heute so groß, dass Sie einen neuen Trend starten könnten, indem Sie einfach in einem Schuh und mit einem breiten Lächeln zur Arbeit gehen."
    },
    "4-24": {
      "z": "Stier",
      "l": 2,
      "e": "Zwei lehrt uns, dass die größte Stärke oft in Sanftmut und der Fähigkeit liegt, harmonische Beziehungen aufzubauen. Heute wird Ihre Diplomatie zum Schlüssel, der Ihnen die Tür zu den Herzen und Köpfen der Menschen öffnet, die Ihnen wichtig sind.",
      "r": "Suchen Sie nach Verständnis und bauen Sie Brücken des Verständnisses, wo bisher kalte Distanz herrschte. Kultivieren Sie Ihre Intuition, denn sie wird Ihnen am besten sagen, wie Sie im Kontakt mit anderen das Gleichgewicht bewahren.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Vermeiden Sie Konkurrenz und die Durchsetzung Ihres Willens, da dies die fragile Atmosphäre der heutigen Harmonie zerstören könnte. Scheuen Sie sich nicht, um Unterstützung zu bitten, denn eine Zusammenarbeit wird Ihnen heute viel mehr Vorteile bringen, als wenn Sie alleine handeln.",
      "s": "In der Stille hört man mehr",
      "fun": "Heute reagieren Sie so sensibel auf die Stimmungen anderer, dass Sie genau wissen, wovon Ihre Lieben träumen, bevor sie überhaupt darüber nachdenken."
    },
    "4-25": {
      "z": "Stier",
      "l": 3,
      "e": "Three ist ein fröhlicher Tanz der Kreativität, der jede gewöhnliche Aufgabe in ein faszinierendes Abenteuer voller Inspiration verwandelt. Erlauben Sie sich zu lachen und gehen Sie das Leben unbeschwert an, denn Freude ist der kürzeste Weg zur Erfüllung Ihrer Träume.",
      "r": "Drücken Sie Ihre Gefühle durch Farben, Worte oder Gesten aus, die einen Hauch von Frühlingsfrische verbreiten. Teilen Sie Ihren Optimismus, denn Ihr aufrichtiges Lächeln hat heute die Kraft, andere mit außergewöhnlich guter Energie anzustecken.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Überanalysieren Sie Ihre Fehler, was Ihren natürlichen, kindlichen Enthusiasmus unnötig unterdrücken könnte. Lassen Sie nicht zu, dass der Pessimismus Ihrer Umgebung Ihren inneren Glanz, der heute außergewöhnlich stark strahlt, auslöscht.",
      "s": "Lachen ist der kürzeste Weg zum Herzen",
      "fun": "Deine Energie ist heute so sonnig, dass sogar die Blumen in der Vase sich auf der Suche nach dem Glanz zu dir zu neigen scheinen."
    },
    "4-26": {
      "z": "Stier",
      "l": 4,
      "e": "Nummer vier erinnert uns an den Wert solider Grundlagen, auf denen wir ein Gefühl unserer eigenen Sicherheit und Stabilität im Leben aufbauen. Ihre Regelmäßigkeit wird heute geschätzt und bringt Ihnen Frieden und große Zufriedenheit mit einer gut erledigten Arbeit.",
      "r": "Konzentrieren Sie sich auf den Abschluss der begonnenen Projekte und stellen Sie sicher, dass die Dinge, die Ihrer Aufmerksamkeit bedürfen, in perfekter Ordnung gehalten werden. Bauen Sie Ihre Zukunft Schritt für Schritt auf und vertrauen Sie darauf, dass jede kleine Aktion Sie dem großen Erfolg näher bringt.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Vermeiden Sie Chaos und die gleichzeitige Bewältigung zu vieler Herausforderungen, die Ihre wertvolle Aufmerksamkeit unnötig ablenken könnten. Ignorieren Sie nicht die Regeln, die Ihre Stabilität schützen und Ihnen helfen, die volle Kontrolle über die Realität zu behalten.",
      "s": "Das Fundament macht keinen Lärm – aber alles steht darauf",
      "fun": "Ihre Liebe zur Ordnung führt heute dazu, dass selbst die Büroklammern auf Ihrem Schreibtisch in perfekten, gleichmäßigen Reihen angeordnet sind."
    },
    "4-27": {
      "z": "Stier",
      "l": 5,
      "e": "Five bringt einen belebenden Hauch von Freiheit und ermutigt Sie, die sichere, aber manchmal zu vorhersehbare Komfortzone zu verlassen. Dies ist der perfekte Tag, um eine Veränderung zu wagen, die neue, anregende Energie in Ihren Alltag bringt.",
      "r": "Seien Sie offen für spontane Vorschläge und gönnen Sie sich ein kleines Abenteuer, das Ihren Geist erfrischt. Gehen Sie ein Risiko ein und prüfen Sie die neuen Entwicklungsmöglichkeiten, die sich heute am Horizont abzeichnen.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Vermeiden Sie Langeweile und Stagnation, die für Sie frustrierend sein und Ihre Vitalität unnötig belasten können. Haben Sie keine Angst davor, alte Muster aufzugeben, denn in der Veränderung liegt Ihr größtes Wachstumspotenzial.",
      "s": "Der Wind fragt nicht – er weht einfach",
      "fun": "Ihr Bedürfnis nach Veränderung ist heute so groß, dass ein einfacher Spaziergang dazu führen kann, dass Sie Tickets für das Ende der Welt buchen."
    },
    "4-28": {
      "z": "Stier",
      "l": 6,
      "e": "The Six lädt Sie erneut in die Welt der Harmonie ein, in der Liebe, Fürsorge und Schönheit die wichtigsten Wegweiser für das Herz sind. Stellen Sie sicher, dass Ihre Handlungen direkt von innen kommen und Ihnen und allen Ihren Lieben Trost spenden.",
      "r": "Schaffen Sie eine warme Atmosphäre in Ihrem Zuhause und verbringen Sie Zeit mit den Menschen, die Ihnen am wichtigsten sind. Konzentrieren Sie sich darauf, schöne Momente zu schaffen, die Ihre Bindungen stärken und Ihnen ein Gefühl tiefer Sicherheit geben.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Vermeiden Sie es, zu viele Probleme anderer Menschen auf sich zu nehmen, denn jeder muss alleine durchs Leben gehen. Suchen Sie nicht nach Perfektion, wo ehrliche Präsenz und ein gutes, unterstützendes Wort aus der Seele ausreichen.",
      "s": "Zuhause ist ein Ort, an dem das Herz atmet",
      "fun": "Ihr Wunsch, sich um die Welt zu kümmern, sorgt dafür, dass sich heute sogar Ihre Topfblumen besonders verwöhnt und geliebt fühlen."
    },
    "4-29": {
      "z": "Stier",
      "l": 7,
      "e": "Sieben ist eine Zeit tiefer Selbstbeobachtung, in der Stille zu Ihrem treuesten Lehrer der Lebensweisheit wird. Wenn Sie äußere Reize zum Schweigen bringen, können Sie in der Außenwelt die Antworten hören, nach denen Sie schon lange gesucht haben.",
      "r": "Finden Sie einen Moment zum Meditieren oder zum ruhigen Lesen, der Ihr Interieur bereichert und Ihnen Seelenfrieden bringt. Vertrauen Sie Ihrer Intuition, denn ihre Stimme ist heute außergewöhnlich rein, klar und vertrauenswürdig.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Lärm und oberflächliche Ablenkungen, die Sie ablenken und Ihnen Ihren hart erkämpften Frieden nehmen können. Haben Sie keine Angst vor Fragen über die Bedeutung Ihres eigenen Weges, denn die Konfrontation mit ihnen bringt wahre Befreiung und spirituelles Wachstum.",
      "s": "Weisheit wohnt in der Stille",
      "fun": "Ihre geheimnisvolle Aura lässt Ihre Lieben sich fragen, ob Sie nicht gerade die Antwort auf alle Rätsel des Universums gefunden haben."
    },
    "4-30": {
      "z": "Stier",
      "l": 8,
      "e": "Die Acht schließt den April mit einem starken Akzent der Entscheidungsfreiheit ab und erinnert Sie an Ihre Fähigkeit, Materie und Ihr eigenes Schicksal zu kontrollieren. Dies ist ein Tag, an dem Sie stolz Ihre Erfolge zusammenfassen und den Grundstein für die bevorstehende Energie im Mai legen können.",
      "r": "Konzentrieren Sie sich auf den Abschluss beruflicher und finanzieller Angelegenheiten und zeigen Sie dabei ein hohes Maß an Professionalität. Zeigen Sie Ihren Reichtum und blicken Sie mit Zuversicht in die Zukunft, in dem Wissen, dass Sie alle Trümpfe in der Hand haben, die Sie brauchen.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Unsicherheit und Ausruhen auf den Lorbeeren, denn Ihre Erfolgsenergie braucht ständige, bewusste Unterstützung. Vermeiden Sie Angst vor der Größe, denn Sie sind bereit für die Früchte, die in Ihrem Garten reifen.",
      "s": "Stärke aus Werten, nicht aus Ego",
      "fun": "Heutzutage empfindet Ihr Geldbeutel so viel Respekt vor Ihnen, dass sogar die Quittungen in perfekter alphabetischer Reihenfolge angeordnet sind."
    },
    "5-1": {
      "z": "Stier",
      "l": 7,
      "e": "Sieben ist eine Zeit der Selbstbeobachtung, in der Stille zu Ihrem treuesten und weisesten Verbündeten wird. Gönnen Sie sich den Luxus, mit Ihren Gedanken allein zu sein, um Antworten auf die wichtigsten Fragen Ihrer Seele zu finden.",
      "r": "Nehmen Sie sich einen Moment Zeit zum Meditieren oder zum ruhigen Lesen, um Ihr Wissen über sich selbst zu vertiefen. Vertrauen Sie Ihrer Intuition, denn in der heutigen Stille wird ihre Stimme außergewöhnlich deutlich zu hören sein.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Vermeiden Sie Lärm und oberflächliche Unterhaltung, die Ihre wertvolle Aufmerksamkeit ablenken und Ihnen die Ruhe nehmen können. Haben Sie keine Angst vor Fragen nach dem Sinn des Lebens, denn die Auseinandersetzung mit ihnen wird Ihnen die gewünschte geistige Freiheit bringen.",
      "s": "Tiefer als du sehen kannst",
      "fun": "Ihr Schweigen ist heute so beredt, dass Ihre Lieben sich fragen, ob Sie gerade eine neue Galaxie entdeckt haben."
    },
    "5-2": {
      "z": "Stier",
      "l": 8,
      "e": "Acht ist eine kraftvolle Manifestation von Stärke und Entscheidungsfreiheit, die perfekt mit der Energie des Feierns und des Stolzes harmoniert. Heute haben Sie alle Werkzeuge in der Hand, um Ihrem Handeln Schwung zu verleihen und messbare, materielle Ergebnisse zu erzielen.",
      "r": "Ergreifen Sie mutige Initiativen und vertrauen Sie auf Ihre Fähigkeit, komplexe Prozesse zu meistern. Bauen Sie Ihre Position auf der Grundlage von Ehrlichkeit auf, die den Respekt Ihres Umfelds und die Dauerhaftigkeit Ihrer Erfolge sichert.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Vermeiden Sie es, Entscheidungen unter dem Einfluss von Angst zu treffen, sondern schöpfen Sie Kraft aus Ihrem großen Selbstwertgefühl. Geben Sie nicht der Arroganz nach und denken Sie daran, dass wahre Macht immer mit innerer Meisterschaft einhergeht.",
      "s": "Man baut – und es bleibt",
      "fun": "Heute sehen Sie aus wie ein Anführer, vor dem selbst die größten Staus auf den Strecken der Maireisen umgangen werden können."
    },
    "5-3": {
      "z": "Stier",
      "l": 9,
      "e": "Die Neun erinnern uns daran, dass jedes Ende eine notwendige Phase ist, die uns auf die Ankunft von etwas völlig Neuem vorbereitet. Es ist eine Zeit großer Transformation und der Befreiung von den Lasten der Vergangenheit, um mit leichtem Herzen weiterzumachen.",
      "r": "Verzeihen Sie vergangene Verletzungen und danken Sie der Vergangenheit für all die Lektionen, die Sie geprägt haben. Schaffen Sie in Ihrem Leben Platz für neue Ideen, die bereits in Ihrer Fantasie aufkeimen.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Hängen Sie nicht an Dingen fest, die ihren Zweck bereits erfüllt haben und Ihr Wachstum nicht mehr unterstützen. Vermeiden Sie es, das Vergangene zu bereuen, denn jede Veränderung ist ein Versprechen auf eine bessere und klügere Zukunft.",
      "s": "Weisheit tut weh, bevor sie untergeht",
      "fun": "Heute führen Sie eine so emotionale Reinigung durch, dass sogar alte Quittungen in Ihrem Portemonnaie nach einer ordnungsgemäßen und schnellen Entsorgung verlangen."
    },
    "5-4": {
      "z": "Stier",
      "l": 1,
      "e": "Jedynka entfacht erneut den Funken einer neuen Initiative und ermutigt Sie, in Ihrem eigenen Alltag Vorreiter zu sein. Dies ist der Tag, an dem jeder mutige Gedanke, den Sie haben, die Kraft hat, der Beginn eines faszinierenden neuen Abenteuers zu werden.",
      "r": "Setzen Sie auf sich selbst und initiieren Sie ein Projekt, über das Sie anderen nicht laut erzählen wollten. Vertrauen Sie Ihrer Durchbruchskraft und seien Sie der Erste, der heute voller Zuversicht an Ihren Sieg glaubt.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Hören Sie nicht auf die Meinung anderer, denn nur Sie kennen die richtige Richtung Ihrer Reise. Zögern Sie nicht, Maßnahmen zu ergreifen, denn die heutige Energie begünstigt diejenigen, die mutig und entschlossen ins Unbekannte vordringen.",
      "s": "Fangen Sie an – der Rest kommt",
      "fun": "Ihre Begeisterung ist heute so groß, dass Sie eine neue Mode starten könnten, indem Sie einfach nur einen Schuh zur Arbeit tragen."
    },
    "5-5": {
      "z": "Stier",
      "l": 2,
      "e": "Nummer Zwei lehrt uns, dass die größte Stärke oft in Sanftmut und der Fähigkeit liegt, anderen zuzuhören. Heute wird Ihre Diplomatie zum Schlüssel, der Ihnen die Tür zu den Herzen und Köpfen der Menschen öffnet, die Ihnen wichtig sind.",
      "r": "Suchen Sie nach Verständnis und bauen Sie Brücken, wo zuvor kalte, unangenehme Distanz herrschte. Kultivieren Sie Ihre Intuition, denn sie wird Ihnen am besten sagen, wie Sie im Kontakt mit der Umwelt das Gleichgewicht bewahren.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Vermeiden Sie Konkurrenz und die Durchsetzung Ihres Willens, da dies die fragile Atmosphäre der heutigen Harmonie zerstören könnte. Scheuen Sie sich nicht, um Unterstützung zu bitten, denn eine Zusammenarbeit wird Ihnen heute viel mehr Vorteile bringen, als wenn Sie alleine handeln.",
      "s": "Zwei Seelen, eine Harmonie",
      "fun": "Heute reagieren Sie so sensibel auf die Stimmungen anderer, dass Sie genau wissen, wovon Ihre Lieben träumen, bevor sie überhaupt darüber nachdenken."
    },
    "5-6": {
      "z": "Stier",
      "l": 3,
      "e": "Three ist ein fröhlicher Tanz der Kreativität, der jede gewöhnliche Aufgabe in eine farbenfrohe Geschichte voller Inspiration verwandelt. Erlauben Sie sich zu lachen und gehen Sie das Leben unbeschwert an, denn Freude ist der kürzeste Weg zur Erfüllung Ihrer Träume.",
      "r": "Drücken Sie Ihre Gefühle durch Farben, Worte oder Gesten aus, die einen Hauch von Frühlingsfrische verbreiten. Teilen Sie Ihren Optimismus, denn Ihr aufrichtiges Lächeln hat heute die Kraft, andere mit außergewöhnlich guter Energie anzustecken.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Überanalysieren Sie Ihre Fehler, was Ihren natürlichen, freudigen Enthusiasmus unnötig dämpfen könnte. Lassen Sie nicht zu, dass der Pessimismus Ihrer Umgebung Ihren inneren Glanz, der heute außergewöhnlich stark strahlt, auslöscht.",
      "s": "Schaffen Sie, weil die Welt es braucht",
      "fun": "Deine Energie ist heute so sonnig, dass sogar die Blumen in der Vase sich zu dir zu neigen scheinen."
    },
    "5-7": {
      "z": "Stier",
      "l": 4,
      "e": "Nummer vier erinnert uns an den Wert solider Grundlagen, auf denen wir unser Gefühl von Sicherheit und Stabilität aufbauen. Ihre Regelmäßigkeit wird heute geschätzt und bringt Ihnen Frieden und Zufriedenheit mit einer gut erledigten Arbeit.",
      "r": "Konzentrieren Sie sich darauf, die begonnenen Projekte abzuschließen und kümmern Sie sich um die Angelegenheiten, die Ihrer Aufmerksamkeit bedürfen. Bauen Sie Ihre Zukunft Schritt für Schritt auf und vertrauen Sie darauf, dass jede kleine Aktion Sie dem großen Erfolg näher bringt.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Vermeiden Sie Chaos und die gleichzeitige Bewältigung zu vieler Herausforderungen, die Ihre Aufmerksamkeit unnötig ablenken könnten. Ignorieren Sie nicht die Regeln, die Ihre Stabilität schützen und Ihnen helfen, die Kontrolle über die Realität zu behalten.",
      "s": "Kleine Schritte, bleibende Spuren",
      "fun": "Ihre Liebe zur Ordnung führt heute dazu, dass selbst die Büroklammern auf Ihrem Schreibtisch in perfekten Reihen angeordnet sind."
    },
    "5-8": {
      "z": "Stier",
      "l": 5,
      "e": "Five bringt einen Hauch von Freiheit und ermutigt Sie, die sichere, aber manchmal zu vorhersehbare Komfortzone zu verlassen. Dies ist der perfekte Tag, um eine Veränderung zu wagen, die neue Energie in Ihren Alltag bringt.",
      "r": "Seien Sie offen für spontane Vorschläge und gönnen Sie sich ein kleines Abenteuer, das Ihren Geist erfrischt. Gehen Sie ein Risiko ein und prüfen Sie die neuen Entwicklungsmöglichkeiten, die sich heute am Horizont abzeichnen.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Vermeiden Sie Langeweile und Stagnation, die frustrierend und kräftezehrend sein können. Haben Sie keine Angst, alte Muster aufzugeben, denn Ihr größtes Potenzial liegt in der Veränderung.",
      "s": "Jede Veränderung ist eine Einladung",
      "fun": "Ihr Bedürfnis nach Veränderung ist heute so groß, dass ein Spaziergang dazu führen kann, dass Sie Tickets für das Ende der Welt buchen."
    },
    "5-9": {
      "z": "Stier",
      "l": 6,
      "e": "The Six lädt Sie erneut in die Welt der Harmonie ein, in der Liebe, Fürsorge und Schönheit die wichtigsten Wegweiser sind. Stellen Sie sicher, dass Ihre Taten direkt von Herzen kommen und Ihnen und Ihren Lieben Trost spenden.",
      "r": "Schaffen Sie eine warme Atmosphäre in Ihrem Zuhause und verbringen Sie Zeit mit den Menschen, die Ihnen am wichtigsten sind. Konzentrieren Sie sich darauf, schöne Momente zu schaffen, die Ihre Bindungen stärken und Ihnen ein Gefühl der Sicherheit geben.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Vermeiden Sie es, zu viele Probleme anderer Menschen auf sich zu nehmen, denn jeder muss seinen eigenen Weg gehen. Suchen Sie nicht nach Perfektion, wenn ehrliche Präsenz und ein freundliches, unterstützendes Wort ausreichen.",
      "s": "Fürsorge verändert alles",
      "fun": "Ihr Wunsch, sich um die Welt zu kümmern, sorgt dafür, dass sich heute sogar Ihre Topfblumen besonders verwöhnt fühlen."
    },
    "5-10": {
      "z": "Stier",
      "l": 7,
      "e": "Seven öffnet die Tür zu Ihrer internen Wissensbibliothek, in der in Stille Antworten auf die schwierigsten Fragen erscheinen. Dies ist die Zeit, in der sich Intellekt und Intuition harmonisch verbinden und einen idealen Raum für das Studium der eigenen Seele und der Welt um uns herum schaffen.",
      "r": "Verbringen Sie Zeit damit, Ihre Leidenschaften zu entwickeln und suchen Sie in Stille nach Weisheit, fernab der Hektik des Alltags. Vertrauen Sie dem Wissen, das in Momenten der Stille entsteht, denn es ist der wertvollste Leitfaden für die kommenden Tage.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Vermeiden Sie Oberflächlichkeit und erliegen Sie dem Gruppenzwang, der Sie dazu zwingt, schnell und gedankenlos zu reagieren. Haben Sie keine Angst vor Fragen über die Bedeutung Ihres eigenen Weges, denn die Konfrontation mit ihnen bringt wahre Befreiung und spirituelles Wachstum.",
      "s": "Tiefer als du sehen kannst",
      "fun": "Ihre geheimnisvolle Aura ist heute so stark, dass sogar Ihr Morgenkaffee in einem mystischen, philosophischen Rhythmus zu brühen scheint."
    },
    "5-11": {
      "z": "Stier",
      "l": 8,
      "e": "Acht ist eine kraftvolle Entscheidungsenergie, die es Ihnen ermöglicht, die Struktur Ihres beruflichen und finanziellen Lebens wirklich zu beeinflussen. Sie haben genug Entschlossenheit, um Ziele zu erreichen, die bisher nur ferne Träume schienen.",
      "r": "Ergreifen Sie gezielte Maßnahmen zur Stabilisierung Ihrer Finanzen und vertrauen Sie auf Ihre innere Stärke. Bauen Sie Ihre Fülle auf der Grundlage von Ehrlichkeit auf, die Ihnen den Respekt Ihrer Mitmenschen und dauerhafte, zufriedenstellende Ergebnisse beschert.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Vermeiden Sie es, Entscheidungen auf der Grundlage der Angst vor Mangel zu treffen, anstatt Kraft aus Ihrem Gefühl der Größe zu schöpfen. Geben Sie nicht der Arroganz nach und denken Sie daran, dass wahre Macht immer mit Selbstbeherrschung und Respekt für andere einhergeht.",
      "s": "Man baut – und es bleibt",
      "fun": "Heute wirken Sie wie ein Anführer, der selbst bei einem kurzen Gespräch mit dem Schicksal über das Wetter am Nachmittag bessere Bedingungen aushandeln kann."
    },
    "5-12": {
      "z": "Stier",
      "l": 9,
      "e": "Die Zahl Neun symbolisiert die Weisheit, die sich aus dem Abschluss von Phasen ergibt, die bereits ihren Zweck auf Ihrer Lebensreise erfüllt haben. Dies ist eine Zeit großer Transformation, die Sie darauf vorbereitet, völlig neue, faszinierende Impulse des Schicksals anzunehmen.",
      "r": "Verzeihen Sie vergangene Verletzungen und danken Sie der Vergangenheit für all die Lektionen, die Sie zu einem so starken und bewussten Menschen gemacht haben. Schaffen Sie in Ihrem Herzen Platz für neue Ideen, die in Ihrer reichen Fantasie bereits zu sprießen beginnen.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Klammern Sie sich nicht an Dinge und Beziehungen, die Ihr natürliches Wachstum und Ihr Glücksgefühl nicht mehr unterstützen. Vermeiden Sie es, das Vergangene zu bereuen, denn jede Veränderung ist ein Versprechen auf eine bessere und strahlendere Zukunft.",
      "s": "Weisheit tut weh, bevor sie untergeht",
      "fun": "Heute führen Sie eine so emotionale Reinigung durch, dass sogar alte Quittungen in Ihrem Portemonnaie nach einer ordnungsgemäßen und schnellen Entsorgung verlangen."
    },
    "5-13": {
      "z": "Stier",
      "l": 1,
      "e": "Einer davon ist ein frischer Hauch von Energie, der Ihnen das Gefühl gibt, wieder ein authentischer Architekt Ihres eigenen Schicksals zu sein. Jede Entscheidung, die Sie heute treffen, hat die Macht, die Realität zum Besseren zu verändern und besser mit Ihrer inneren Stimme in Einklang zu bringen.",
      "r": "Entscheiden Sie sich für Originalität und haben Sie keine Angst, der Welt Ihre kühnsten und innovativsten Projekte zu präsentieren. Vertrauen Sie auf Ihre Stärke und seien Sie der Erste, der zuversichtlich an den Erfolg Ihres heutigen Handelns glaubt.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Vermeiden Sie Nachahmungen und suchen Sie nach Abkürzungen, die Ihre Authentizität unnötig schwächen könnten. Scheuen Sie sich nicht, auf eigene Faust zu handeln, denn Pioniere müssen oft den Weg ebnen, ohne sich um die Meinungen anderer zu scheren.",
      "s": "Fangen Sie an – der Rest kommt",
      "fun": "Heute sind Sie eine solche Dosis purer Energie, dass Sie einen morgendlichen Espresso für Ihr gesamtes Büro oder Ihre Familienmitglieder ersetzen könnten."
    },
    "5-14": {
      "z": "Stier",
      "l": 2,
      "e": "Zwei lehrt uns, dass die größte Stärke oft in der Sanftmut und der Fähigkeit liegt, mit anderen Menschen zusammenzuleben. Heute wird Ihre Diplomatie zum Schlüssel, der Ihnen die Tür zu den Herzen und Köpfen der Menschen öffnet, die Ihnen wichtig sind.",
      "r": "Suchen Sie nach Verständnis und bauen Sie Brücken, wo zuvor kalte, unangenehme Distanz herrschte. Kultivieren Sie Ihre Intuition, denn sie wird Ihnen am besten sagen, wie Sie im Kontakt mit der Umwelt das Gleichgewicht bewahren.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Vermeiden Sie Konkurrenz und die Durchsetzung Ihres Willens, da dies die fragile Atmosphäre der heutigen Harmonie zerstören könnte. Scheuen Sie sich nicht, um Unterstützung zu bitten, denn eine Zusammenarbeit wird Ihnen heute viel mehr Vorteile bringen, als allein Herausforderungen zu meistern.",
      "s": "Zwei Seelen, eine Harmonie",
      "fun": "Heute reagieren Sie so sensibel auf die Stimmungen anderer, dass Sie genau wissen, wovon Ihre Lieben träumen, bevor sie überhaupt darüber nachdenken."
    },
    "5-15": {
      "z": "Stier",
      "l": 3,
      "e": "Three ist ein freudiger Ausdruck, der jede gewöhnliche Aufgabe in ein farbenfrohes Abenteuer voller Inspiration verwandelt. Erlauben Sie sich zu lachen und nehmen Sie eine lockere Einstellung zum Leben, denn Freude ist der kürzeste Weg zur Heilung einer Beziehung.",
      "r": "Drücken Sie Ihre Gefühle durch Farben, Worte oder Gesten aus, die einen Hauch von Frühlingsfrische verbreiten. Teilen Sie Ihren Optimismus, denn Ihr aufrichtiges Lächeln hat heute die Kraft, andere mit außergewöhnlich guter Energie anzustecken.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Überanalysieren Sie Ihre Fehler, was Ihren natürlichen, freudigen Enthusiasmus unnötig dämpfen könnte. Lassen Sie nicht zu, dass der Pessimismus Ihrer Umgebung Ihr inneres Leuchten auslöscht, das heute außergewöhnlich stark und hell strahlt.",
      "s": "Schaffen Sie, weil die Welt es braucht",
      "fun": "Deine Energie ist heute so sonnig, dass sogar die Blumen in der Vase sich auf der Suche nach dem Glanz zu dir zu neigen scheinen."
    },
    "5-16": {
      "z": "Stier",
      "l": 4,
      "e": "Nummer vier erinnert uns an den Wert solider Grundlagen, auf denen wir unser Gefühl von Sicherheit und Stabilität aufbauen. Ihre Regelmäßigkeit wird heute geschätzt und bringt Ihnen Frieden und große Zufriedenheit mit einer gut erledigten Arbeit.",
      "r": "Konzentrieren Sie sich auf den Abschluss der begonnenen Projekte und stellen Sie sicher, dass die Dinge, die Ihrer Aufmerksamkeit bedürfen, in perfekter Ordnung gehalten werden. Bauen Sie Ihre Zukunft Schritt für Schritt auf und vertrauen Sie darauf, dass jede kleine Aktion Sie dem großen Erfolg näher bringt.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Vermeiden Sie Chaos und die gleichzeitige Bewältigung zu vieler Herausforderungen, die Ihre wertvolle Aufmerksamkeit unnötig ablenken könnten. Ignorieren Sie nicht die Regeln, die Ihre Stabilität schützen und Ihnen helfen, die volle Kontrolle über die Realität zu behalten.",
      "s": "Kleine Schritte, bleibende Spuren",
      "fun": "Ihre Liebe zur Ordnung führt heute dazu, dass selbst die Büroklammern auf Ihrem Schreibtisch in perfekten, gleichmäßigen Reihen angeordnet sind."
    },
    "5-17": {
      "z": "Stier",
      "l": 5,
      "e": "Five bringt einen Hauch von Freiheit und ermutigt Sie, die sichere, aber manchmal zu vorhersehbare Komfortzone zu verlassen. Dies ist der perfekte Tag, um eine Veränderung zu wagen, die neue, belebende Energie in Ihren Alltag bringt.",
      "r": "Seien Sie offen für spontane Vorschläge und gönnen Sie sich ein kleines Abenteuer, das Ihren Geist erfrischt. Gehen Sie ein Risiko ein und prüfen Sie die neuen Entwicklungsmöglichkeiten, die sich heute am Horizont abzeichnen.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Vermeiden Sie Langeweile und Stagnation, die für Sie frustrierend sein und Ihre Vitalität unnötig belasten können. Haben Sie keine Angst davor, alte Muster aufzugeben, denn in der Veränderung liegt Ihr größtes Wachstumspotenzial.",
      "s": "Jede Veränderung ist eine Einladung",
      "fun": "Ihr Bedürfnis nach Veränderung ist heute so groß, dass ein einfacher Spaziergang dazu führen kann, dass Sie Tickets für das Ende der Welt buchen."
    },
    "5-18": {
      "z": "Stier",
      "l": 6,
      "e": "The Six lädt Sie erneut in die Welt der Harmonie ein, in der Liebe, Fürsorge und Schönheit die wichtigsten Wegweiser für das Herz sind. Stellen Sie sicher, dass Ihre Handlungen direkt von innen kommen und Ihnen und allen Ihren Lieben Trost spenden.",
      "r": "Schaffen Sie eine warme Atmosphäre in Ihrem Zuhause und verbringen Sie Zeit mit den Menschen, die Ihnen am wichtigsten sind. Konzentrieren Sie sich darauf, schöne Momente zu schaffen, die Ihre Bindungen stärken und Ihnen ein Gefühl tiefer Sicherheit geben.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Vermeiden Sie es, zu viele Probleme anderer Menschen auf sich zu nehmen, denn jeder muss alleine durchs Leben gehen. Suchen Sie nicht nach Perfektion, wo ehrliche Präsenz und ein gutes, unterstützendes Wort aus der Seele ausreichen.",
      "s": "Fürsorge verändert alles",
      "fun": "Ihr Wunsch, sich um die Welt zu kümmern, sorgt dafür, dass sich heute sogar Ihre Topfblumen besonders verwöhnt und geliebt fühlen."
    },
    "5-19": {
      "z": "Stier",
      "l": 7,
      "e": "Eine Zeit tiefer Selbstreflexion und spiritueller Weisheit, in der die Stille zu Ihrem treuesten Ratgeber wird. Das Ausblenden äußerer Reize ermöglicht es Ihnen, die klare Stimme Ihrer eigenen Intuition zu hören.",
      "r": "Finden Sie einen Moment für Meditation oder eine ruhige Lektüre, die Ihr Inneres bereichert und Ihnen Seelenfrieden bringt. Vertrauen Sie Ihrer Intuition, deren Stimme heute außergewöhnlich klar ist.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Lärm und oberflächliche Ablenkungen, die Ihre Aufmerksamkeit zerstreuen und Ihren mühsam erarbeiteten inneren Frieden rauben können. Scheuen Sie sich nicht vor Fragen nach dem tiefen Sinn des eigenen Weges.",
      "s": "Leichtigkeit und Fokus",
      "fun": "Sie sind heute wie eine weise Eule, die die Welt mit Abstand beobachtet – Sie wissen viel mehr über die umgebende Realität, als Sie preisgeben wollen."
    },
    "5-20": {
      "z": "Stier",
      "l": 8,
      "e": "Nummer Acht ist eine kraftvolle Entscheidungswelle, die es Ihnen ermöglicht, die Struktur Ihres Berufs- und Finanzlebens wirklich zu beeinflussen. Ihre innere Stärke wird heute zu Ihrem Werkzeug für den Erfolg, solange Sie Ihren höchsten ethischen Standards treu bleiben.",
      "r": "Treffen Sie wichtige Geschäftsentscheidungen und vertrauen Sie auf Ihre Fähigkeit, in der Welt der Materie Gutes zu vermehren. Bauen Sie Ihre Fülle auf der Grundlage von Ehrlichkeit auf, die Ihnen dauerhafte und zufriedenstellende Ergebnisse bescheren wird.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Vermeiden Sie es, aus Angst zu handeln, sondern schöpfen Sie Kraft aus Ihrem Gefühl der Größe. Geben Sie nicht der Arroganz nach und denken Sie daran, dass wahre Macht immer mit innerer Meisterschaft einhergeht.",
      "s": "Man baut – und es bleibt",
      "fun": "Ihr Selbstbewusstsein führt heute dazu, dass selbst die schwierigsten Aufgaben auf der „to do“-Liste unter Ihrem schimpfenden Blick fast von alleine erledigt werden."
    },
    "5-21": {
      "z": "Zwillinge",
      "l": 9,
      "e": "Die Neun erinnern Sie daran, dass Weisheit in der Fähigkeit liegt, Etappen abzuschließen, die ihren Zweck auf Ihrer Reise bereits erfüllt haben. Es ist eine Zeit der großen Transformation und der Befreiung von den Lasten der Vergangenheit, um die bevorstehenden Geschenke des Schicksals mit leichtem Herzen anzunehmen.",
      "r": "Verzeihen Sie vergangene Verletzungen und danken Sie der Vergangenheit für all die Lektionen, die Sie zu einem so bewussten Menschen gemacht haben. Schaffen Sie in Ihrem Herzen Platz für neue Ideen, die in Ihrer Fantasie bereits zu sprießen beginnen.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Klammern Sie sich nicht an Dinge, die Ihr Wachstum und Ihr inneres Glück nicht mehr unterstützen. Vermeiden Sie es, das Vergangene zu bereuen, denn jede Veränderung ist ein Versprechen auf eine bessere und strahlendere Zukunft.",
      "s": "Weisheit tut weh, bevor sie untergeht",
      "fun": "Heute führen Sie eine so emotionale Aufräumaktion durch, dass sogar die alten Quittungen in Ihrem Portemonnaie Sie dazu auffordern, ordnungsgemäß entsorgt zu werden, um Ihre neue Ordnung nicht zu stören."
    },
    "5-22": {
      "z": "Zwillinge",
      "l": 1,
      "e": "Einer davon ist ein frischer Hauch von Energie, der Ihnen das Gefühl gibt, wieder ein authentischer Architekt Ihres eigenen Schicksals zu sein. Jede Entscheidung, die Sie heute treffen, hat die Macht, die Realität zum Besseren zu verändern und besser mit Ihrer inneren Stimme in Einklang zu bringen.",
      "r": "Entscheiden Sie sich für Originalität und haben Sie keine Angst, der Welt Ihre gewagtesten Projekte zu präsentieren. Vertrauen Sie Ihrer Durchbruchskraft und seien Sie der Erste, der heute voller Zuversicht an Ihren Sieg glaubt.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Vermeiden Sie Nachahmungen und suchen Sie nach Abkürzungen, die Ihre Authentizität unnötig schwächen könnten. Scheuen Sie sich nicht, auf eigene Faust zu handeln, denn Pioniere müssen oft den Weg ebnen, ohne sich um die Meinungen anderer zu scheren.",
      "s": "Fangen Sie an – der Rest kommt",
      "fun": "Ihre Begeisterung ist heute so groß, dass Sie einen neuen Trend starten könnten, indem Sie einfach in einem Schuh und mit einem gewinnenden Lächeln zur Arbeit gehen."
    },
    "5-23": {
      "z": "Zwillinge",
      "l": 2,
      "e": "Zwei lehrt uns, dass die größte Stärke oft in Sanftmut und der Fähigkeit liegt, harmonische Beziehungen aufzubauen. Heute wird Ihre Diplomatie zum Schlüssel, der Ihnen die Tür zu den Herzen der Menschen öffnet, die für Ihre Entwicklung wichtig sind.",
      "r": "Suchen Sie nach Verständnis und bauen Sie Brücken, wo zuvor kalte, unangenehme Distanz herrschte. Kultivieren Sie Ihre Intuition, denn sie wird Ihnen am besten sagen, wie Sie im Kontakt mit der Umwelt das Gleichgewicht bewahren.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Vermeiden Sie Konkurrenz und die Durchsetzung Ihres Willens, da dies die fragile Atmosphäre der heutigen Harmonie zerstören könnte. Scheuen Sie sich nicht, um Unterstützung zu bitten, denn die Zusammenarbeit wird Ihnen heute viel mehr Vorteile bringen, als wenn Sie alleine kämpfen.",
      "s": "Zwei Seelen, eine Harmonie",
      "fun": "Heute reagieren Sie so sensibel auf die Stimmungen anderer, dass Sie genau wissen, wovon Ihre Lieben träumen, bevor sie selbst darüber nachdenken."
    },
    "5-24": {
      "z": "Zwillinge",
      "l": 3,
      "e": "Three ist ein freudiger Ausdruck, der jede gewöhnliche Aufgabe in ein farbenfrohes Abenteuer voller Inspiration verwandelt. Erlauben Sie sich zu lachen und nehmen Sie eine lockere Einstellung zum Leben, denn Freude ist der kürzeste Weg, um jede Situation zu heilen.",
      "r": "Drücken Sie Ihre Gefühle durch Kreativität oder Worte aus, die einen Hauch von Mai-Frische verleihen. Teilen Sie Ihren Optimismus, denn Ihr aufrichtiges Lächeln hat heute die Kraft, andere mit außergewöhnlich guter Energie anzustecken.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Überanalysieren Sie Ihre Fehler, was Ihren natürlichen, freudigen Enthusiasmus unnötig dämpfen könnte. Lassen Sie nicht zu, dass der Pessimismus Ihrer Umgebung Ihr inneres Leuchten auslöscht, das heute außergewöhnlich hell strahlt.",
      "s": "Schaffen Sie, weil die Welt es braucht",
      "fun": "Ihre Energie ist heute so sonnig, dass sogar die Blumen in der Vase sich auf der Suche nach einer Lichtquelle zu Ihnen zu neigen scheinen."
    },
    "5-25": {
      "z": "Zwillinge",
      "l": 4,
      "e": "Nummer vier erinnert uns an den Wert solider Grundlagen, auf denen wir unser Gefühl von Sicherheit und Stabilität aufbauen. Ihre Regelmäßigkeit wird heute geschätzt und bringt Ihnen Frieden und große Zufriedenheit mit einer gut erledigten Arbeit.",
      "r": "Konzentrieren Sie sich auf den Abschluss der begonnenen Projekte und stellen Sie sicher, dass die Dinge, die Ihrer Aufmerksamkeit bedürfen, in perfekter Ordnung gehalten werden. Bauen Sie Ihre Zukunft Schritt für Schritt auf und vertrauen Sie darauf, dass jede kleine Aktion Sie dem großen Erfolg näher bringt.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Vermeiden Sie Chaos und die gleichzeitige Bewältigung zu vieler Herausforderungen, die Ihre wertvolle Aufmerksamkeit ablenken könnten. Ignorieren Sie nicht die Regeln, die Ihre Stabilität schützen und Ihnen helfen, die volle Kontrolle über die Realität zu behalten.",
      "s": "Kleine Schritte, bleibende Spuren",
      "fun": "Ihre Liebe zur Ordnung führt heute dazu, dass selbst die Büroklammern auf Ihrem Schreibtisch in perfekten, gleichmäßigen Reihen unter dem Lineal angeordnet sind."
    },
    "5-26": {
      "z": "Zwillinge",
      "l": 5,
      "e": "Five bringt einen Hauch von Freiheit und ermutigt Sie, die sichere, aber manchmal zu vorhersehbare Komfortzone zu verlassen. Dies ist der perfekte Tag, um eine Veränderung zu wagen, die neue, belebende Energie in Ihren Alltag bringt.",
      "r": "Seien Sie offen für spontane Vorschläge und gönnen Sie sich ein kleines Abenteuer, das Ihren Geist erfrischt. Gehen Sie ein Risiko ein und prüfen Sie die neuen Entwicklungsmöglichkeiten, die sich heute am Horizont abzeichnen.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Vermeiden Sie Langeweile und Stagnation, die frustrierend sein und Ihnen unnötig Kraft rauben können. Haben Sie keine Angst davor, alte Muster aufzugeben, denn in der Veränderung liegt Ihr größtes Wachstumspotenzial.",
      "s": "Jede Veränderung ist eine Einladung",
      "fun": "Ihr Bedürfnis nach Veränderung ist heute so groß, dass ein einfacher Spaziergang dazu führen kann, dass Sie Tickets für ein völlig unbekanntes Ziel buchen."
    },
    "5-27": {
      "z": "Zwillinge",
      "l": 6,
      "e": "The Six lädt Sie erneut in die Welt der Harmonie ein, in der Liebe, Fürsorge und Schönheit die wichtigsten Wegweiser für das Herz sind. Stellen Sie sicher, dass Ihre Handlungen direkt von innen kommen und Ihnen und allen Ihren Lieben Trost spenden.",
      "r": "Schaffen Sie eine warme Atmosphäre in Ihrem Zuhause und verbringen Sie Zeit mit den Menschen, die Ihnen am wichtigsten sind. Konzentrieren Sie sich darauf, schöne Momente zu schaffen, die Ihre Bindungen stärken und Ihnen ein Gefühl tiefer Sicherheit geben.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Vermeiden Sie es, zu viele Probleme anderer Menschen auf sich zu nehmen, denn jeder muss alleine durchs Leben gehen. Suchen Sie nicht nach Perfektion, wo ehrliche Präsenz und ein gutes, unterstützendes Wort aus der Seele ausreichen.",
      "s": "Fürsorge verändert alles",
      "fun": "Ihr Wunsch, sich um die Welt zu kümmern, sorgt dafür, dass sich heute sogar Ihre Topfblumen besonders verwöhnt und mit Liebe bewässert fühlen."
    },
    "5-28": {
      "z": "Zwillinge",
      "l": 7,
      "e": "Sieben ist eine Zeit tiefer Selbstbeobachtung, in der Stille zu Ihrem treuesten Lehrer der Lebensweisheit wird. Wenn Sie äußere Reize zum Schweigen bringen, können Sie in der Außenwelt die Antworten hören, nach denen Sie schon lange gesucht haben.",
      "r": "Finden Sie einen Moment zum Meditieren oder zum ruhigen Lesen, der Ihr Interieur bereichert und Ihnen Seelenfrieden bringt. Vertrauen Sie Ihrer Intuition, denn ihre Stimme ist heute außergewöhnlich rein, klar und verdient volles Vertrauen.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Lärm und oberflächliche Ablenkungen, die Sie ablenken und Ihnen Ihren hart erkämpften Frieden nehmen können. Haben Sie keine Angst vor Fragen über die Bedeutung Ihres eigenen Weges, denn die Konfrontation mit ihnen bringt wahre Befreiung und spirituelles Wachstum.",
      "s": "Tiefer als du sehen kannst",
      "fun": "Ihre geheimnisvolle Aura lässt Ihre Lieben sich fragen, ob Sie nicht gerade beim Morgentee die Antwort auf alle Rätsel des Universums gefunden haben."
    },
    "5-29": {
      "z": "Zwillinge",
      "l": 8,
      "e": "Acht ruft Sie dazu auf, Charakterstärke und Mut im Umgang mit Ihren eigenen Ressourcen und Ihrer Lebensenergie zu zeigen. Heute befindet sich Ihre Agentur auf dem höchsten Niveau, das es Ihnen ermöglicht, auch die komplexesten Finanzprojekte erfolgreich abzuschließen.",
      "r": "Ergreifen Sie in beruflichen Angelegenheiten die Initiative und scheuen Sie sich nicht, nach den Belohnungen und der öffentlichen Anerkennung zu greifen, die Sie verdienen. Bauen Sie Ihre Autorität auf den Grundlagen von Ehrlichkeit und Zuverlässigkeit auf, die schon immer Ihre Stärken waren.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Treffen Sie Entscheidungen nicht in Eile oder unter dem Einfluss negativer Emotionen, die Ihr Urteilsvermögen für einen Moment trüben könnten. Vermeiden Sie Arroganz und denken Sie daran, dass wahre Macht aus Ruhe und Vertrauen in Ihre Handlungen resultiert.",
      "s": "Man baut – und es bleibt",
      "fun": "Heute sehen Sie aus wie ein Anführer, vor dem selbst die größten Widrigkeiten und Warteschlangen im örtlichen Geschäft weichen."
    },
    "5-30": {
      "z": "Zwillinge",
      "l": 9,
      "e": "Neun schließt den Mai in einem Ton der Weisheit und Zusammenfassung ab, sodass Sie mit der richtigen Distanz und Ruhe auf die vergangenen Wochen blicken können. Dies ist der perfekte Zeitpunkt, um Schlussfolgerungen zu ziehen und Platz für die neue Energie zu schaffen, die der kommende Juni bringen wird.",
      "r": "Beenden Sie alles, was Sie begonnen haben, und verabschieden Sie sich voller Dankbarkeit von dem, was in Ihrem Leben bereits abgeschlossen wurde. Nehmen Sie sich einen Moment Zeit, um dem Schicksal für all die Lektionen zu danken, die Sie im letzten Monat gelernt haben.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Klammern Sie sich nicht an Dingen, die Ihrer Entwicklung nicht mehr dienen, sondern öffnen Sie Ihre Hände, um neue Geschenke des Schicksals anzunehmen. Vermeiden Sie Traurigkeit, wenn etwas verschwindet, denn jede Veränderung ist ein notwendiger Schritt in Richtung eines besseren und erfüllteren Lebens.",
      "s": "Weisheit tut weh, bevor sie untergeht",
      "fun": "Heute sind Sie wie eine weise Eule, die ein wichtiges Kapitel ihres Buches beendet und bereit für ein völlig neues und faszinierendes Juni-Abenteuer ist."
    },
    "5-31": {
      "z": "Zwillinge",
      "l": 1,
      "e": "Nummer eins ist ein kraftvoller Impuls für einen Neuanfang, der Ihnen das Gefühl gibt, der authentische Architekt Ihres eigenen Schicksals zu sein. Dies ist der perfekte Zeitpunkt, um ein Projekt zu starten, von dem Sie bisher nicht einmal laut träumen wollten.",
      "r": "Setzen Sie auf sich selbst und treffen Sie eine unabhängige Entscheidung, die Ihre derzeitige Lebenseinstellung verändern wird. Vertrauen Sie Ihrer Intuition als Pionier und haben Sie keine Angst davor, neue, unentdeckte Wege zu beschreiten.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Vermeiden Sie es, auf die Erlaubnis anderer zu warten, denn nur Sie wissen, was für Sie am besten ist. Lassen Sie nicht zu, dass Passivität das Feuer der Initiative auslöscht, das heute besonders stark in Ihrem Herzen brennt.",
      "s": "Fangen Sie an – der Rest kommt",
      "fun": "Ihre Begeisterung ist heute so ansteckend, dass Sie die Menge anführen könnten, indem Sie einfach nur Ihr Morgenbrot holen gehen."
    },
    "6-1": {
      "z": "Zwillinge",
      "l": 8,
      "e": "Die Acht am Kindertag bringt die Energie der Entscheidungsfreiheit mit sich, die uns lehrt, dass Träume eine solide Struktur benötigen, um Wirklichkeit zu werden. Dies ist der perfekte Zeitpunkt, um mit der gleichen Ernsthaftigkeit und dem gleichen Engagement, mit dem Sie Ihre wichtigsten Projekte angehen, in Freude und Spaß zu investieren.",
      "r": "Zeigen Sie Ihre Stärke durch freudige Taten und ergreifen Sie die Initiative, Zeit für Ihre Lieben zu organisieren. Vertrauen Sie auf Ihre Leistungsfähigkeit, die es Ihnen heute ermöglicht, Ihre Pflichten mit purem, kindlichem Spaß zu verbinden.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Vermeiden Sie es, anderen Ihren Willen aufzuzwingen, und denken Sie daran, dass wahre Autorität auf Respekt und nicht auf Dominanz beruht. Lassen Sie sich nicht von der Angst vor einem Urteil davon abhalten, mutige Ideen umzusetzen.",
      "s": "Macht dient, nicht dominiert",
      "fun": "Heute sehen Sie aus wie ein Anführer, der für alle um Sie herum eine zusätzliche Kugel Eis aushandeln kann."
    },
    "6-2": {
      "z": "Zwillinge",
      "l": 9,
      "e": "The Nine lädt Sie ein, Themen, die nicht mehr zur neuen, sommerlichen Energie passen, tiefgreifend zusammenzufassen und abzuschließen. Dies ist eine Zeit der Großzügigkeit und eines weiten Blicks auf die Welt, in der die Weisheit des Herzens zu Ihrem wichtigsten Leitfaden wird.",
      "r": "Verzeihen Sie alte Traumata und lassen Sie dankbar los, was Ihre spirituelle Entwicklung nicht mehr unterstützt. Öffnen Sie sich dafür, anderen zu helfen, einen tiefen Sinn darin zu finden und sich auf einen neuen Zyklus vorzubereiten.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Klammern Sie sich nicht an die Vergangenheit, denn sie blockiert Ihren natürlichen Fluss und Ihre Bereitschaft für neue Geschenke des Schicksals. Vermeiden Sie es, traurig zu sein, wenn etwas verschwindet, und erkennen Sie, dass es ein notwendiger Ort für die kommenden Veränderungen ist.",
      "s": "Anmutig schließen – dankbar öffnen",
      "fun": "Heute räumen Sie so viel auf, dass sogar alte E-Mails von vor einem Jahr von selbst verschwinden und spüren Ihre bestimmende Veränderungsstimmung."
    },
    "6-3": {
      "z": "Zwillinge",
      "l": 1,
      "e": "Nummer eins ist ein neuer Funke an Initiative, der es Ihnen ermöglicht, nach einem Tag voller Etappen mit neuer Kraft die Weichen für Ihr Vorhaben zu stellen. Heute bist du ein Pionier, der keine Karte braucht, denn dein innerer Mut weist dir den richtigen Weg.",
      "r": "Wetten Sie auf sich selbst und initiieren Sie eine Aktion, vor der Sie bisher Angst hatten, laut zu sprechen. Vertrauen Sie Ihrer eigenen Durchbruchskraft und glauben Sie als Erster voll und ganz an den Erfolg Ihrer neuen Vision.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Hüten Sie sich vor den Meinungen anderer, denn heute sind Sie der Kapitän dieses Schiffes. Zögern Sie nicht mit Ihrer Entscheidung, denn die Energie des Anfangs begünstigt diejenigen, die mutig voranschreiten.",
      "s": "Dein Weg, dein Rhythmus",
      "fun": "Ihr Enthusiasmus ist heute so groß, dass Sie eine neue Mode starten könnten, indem Sie sich mit einem Schuh und einem gewinnenden Lächeln für Dutts entscheiden."
    },
    "6-4": {
      "z": "Zwillinge",
      "l": 2,
      "e": "Nummer Zwei lehrt uns, dass die größte Stärke in der Sanftmut und der Fähigkeit liegt, Brücken zwischen Menschen zu bauen. Heute wird Ihre Diplomatie zum Schlüssel, der die Tür zu den Herzen der Menschen öffnet, die für Ihren Frieden wichtig sind.",
      "r": "Suchen Sie nach Verständnis und pflegen Sie Beziehungen, die auf Vertrauen und einem tiefen, intuitiven Verständnis für die Bedürfnisse anderer basieren. Vertrauen Sie Ihrer Sensibilität, die es Ihnen ermöglicht, Spannungen abzubauen und Harmonie in Ihre Umgebung zu bringen.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Vermeiden Sie Konkurrenz und die Durchsetzung Ihres Willens, da dies die fragile Atmosphäre der heutigen Harmonie zerstören könnte. Scheuen Sie sich nicht, um Unterstützung zu bitten, denn die Zusammenarbeit wird Ihnen heute viel mehr Vorteile bringen als die Einsamkeit.",
      "s": "Sanftmut ist Stärke",
      "fun": "Heute reagieren Sie so sensibel auf die Stimmungen anderer, dass Sie genau wissen, wovon Ihre Lieben träumen, bevor sie überhaupt darüber nachdenken."
    },
    "6-5": {
      "z": "Zwillinge",
      "l": 3,
      "e": "Three ist ein fröhlicher Tanz der Kreativität, der jede gewöhnliche Aufgabe in ein faszinierendes Abenteuer voller Inspiration verwandelt. Erlauben Sie sich zu lachen und nehmen Sie eine lockere Einstellung zum Leben, denn Freude ist der kürzeste Weg, um jede Situation zu heilen.",
      "r": "Drücken Sie sich durch Farben, Worte oder Gesten aus, die einen Hauch von Junifrische verbreiten. Teilen Sie Ihren Optimismus, denn Ihr aufrichtiges Lächeln hat heute die Kraft, andere mit außergewöhnlich guter Energie anzustecken.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Überanalysieren Sie Ihre Fehler, was Ihren natürlichen, freudigen Enthusiasmus unnötig dämpfen könnte. Lassen Sie nicht zu, dass der Pessimismus Ihrer Umgebung Ihren inneren Glanz, der heute außergewöhnlich stark strahlt, auslöscht.",
      "s": "Einfacher bedeutet weiter",
      "fun": "Deine Energie ist heute so sonnig, dass sogar die Blumen in der Vase sich auf der Suche nach dem Glanz zu dir zu neigen scheinen."
    },
    "6-6": {
      "z": "Zwillinge",
      "l": 4,
      "e": "Nummer vier erinnert uns an den Wert solider Grundlagen, auf denen wir unser Gefühl von Sicherheit und Stabilität aufbauen. Ihre Regelmäßigkeit wird heute geschätzt und bringt Ihnen Frieden und Zufriedenheit mit einer gut erledigten Arbeit.",
      "r": "Konzentrieren Sie sich auf den Abschluss der begonnenen Projekte und stellen Sie sicher, dass die Dinge, die Ihrer Aufmerksamkeit bedürfen, in perfekter Ordnung gehalten werden. Bauen Sie Ihre Zukunft Schritt für Schritt auf und vertrauen Sie darauf, dass jede kleine Aktion Sie dem großen Erfolg näher bringt.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Vermeiden Sie Chaos und die gleichzeitige Bewältigung zu vieler Herausforderungen, die Ihre wertvolle Aufmerksamkeit unnötig ablenken könnten. Ignorieren Sie nicht die Regeln, die Ihre Stabilität schützen und Ihnen helfen, die volle Kontrolle über die Realität zu behalten.",
      "s": "Solidität ist Poesie",
      "fun": "Ihre Liebe zur Ordnung führt heute dazu, dass selbst die Büroklammern auf Ihrem Schreibtisch in perfekten Reihen angeordnet sind."
    },
    "6-7": {
      "z": "Zwillinge",
      "l": 5,
      "e": "Five bringt einen belebenden Hauch von Freiheit und ermutigt Sie, die sichere, aber manchmal zu vorhersehbare Komfortzone zu verlassen. Dies ist der perfekte Tag, um eine Veränderung zu wagen, die neue, anregende Energie in Ihren Alltag bringt.",
      "r": "Seien Sie offen für spontane Vorschläge und gönnen Sie sich ein kleines Abenteuer, das Ihren Geist erfrischt. Gehen Sie ein Risiko ein und prüfen Sie die neuen Entwicklungsmöglichkeiten, die sich heute am Horizont abzeichnen.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Vermeiden Sie Langeweile und Stagnation, die frustrierend sein und Ihnen unnötig Kraft rauben können. Haben Sie keine Angst davor, alte Muster aufzugeben, denn in der Veränderung liegt Ihr größtes Wachstumspotenzial.",
      "s": "Freiheit ist eine Entscheidung",
      "fun": "Ihr Bedürfnis nach Veränderung ist heute so groß, dass ein einfacher Spaziergang dazu führen kann, dass Sie Tickets für ein völlig unbekanntes Ziel buchen."
    },
    "6-8": {
      "z": "Zwillinge",
      "l": 6,
      "e": "The Six lädt Sie erneut in die Welt der Harmonie ein, in der Liebe, Fürsorge und Schönheit die wichtigsten Wegweiser für das Herz sind. Stellen Sie sicher, dass Ihre Handlungen direkt von innen kommen und Ihnen und allen Ihren Lieben Trost spenden.",
      "r": "Schaffen Sie eine warme Atmosphäre in Ihrem Zuhause und verbringen Sie Zeit mit den Menschen, die Ihnen am wichtigsten sind. Konzentrieren Sie sich darauf, schöne Momente zu schaffen, die Ihre Bindungen stärken und Ihnen ein Gefühl tiefer Sicherheit geben.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Vermeiden Sie es, zu viele Probleme anderer Menschen auf sich zu nehmen, denn jeder muss alleine durchs Leben gehen. Suchen Sie nicht nach Perfektion, wenn ehrliche Präsenz und ein freundliches, unterstützendes Wort ausreichen.",
      "s": "Schönheit ist ein Akt des Mutes",
      "fun": "Ihr Wunsch, sich um die Welt zu kümmern, sorgt dafür, dass sich heute sogar Ihre Topfblumen besonders verwöhnt fühlen."
    },
    "6-9": {
      "z": "Zwillinge",
      "l": 7,
      "e": "Sieben ist eine Zeit tiefer Selbstbeobachtung, in der Stille zu Ihrem treuesten Weisheitslehrer wird. Wenn Sie äußere Reize zum Schweigen bringen, können Sie in der Außenwelt die Antworten hören, nach denen Sie schon lange gesucht haben.",
      "r": "Finden Sie einen Moment zum Meditieren oder zum ruhigen Lesen, der Ihr Interieur bereichert und Ihnen Seelenfrieden bringt. Vertrauen Sie Ihrer Intuition, denn ihre Stimme ist heute außergewöhnlich rein und klar.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Lärm und oberflächliche Ablenkungen, die Sie ablenken und Ihnen Ihren hart erkämpften Frieden nehmen können. Haben Sie keine Angst vor Fragen nach dem Sinn Ihres eigenen Weges, denn die Konfrontation mit ihnen bringt wahre Befreiung und Entwicklung.",
      "s": "Die Frage ist wichtiger als die Antwort",
      "fun": "Ihre geheimnisvolle Aura lässt Ihre Lieben sich fragen, ob Sie nicht gerade die Antwort auf alle Rätsel des Universums gefunden haben."
    },
    "6-10": {
      "z": "Zwillinge",
      "l": 8,
      "e": "Die Acht kehrt zurück, um zu überprüfen, wie es Ihnen gelingt, Ihre Stärke in der Praxis zum Ausdruck zu bringen. Heute befindet sich Ihre Agentur auf dem höchsten Niveau, das es Ihnen ermöglicht, auch die komplexesten Finanzprojekte erfolgreich abzuschließen.",
      "r": "Ergreifen Sie in beruflichen Angelegenheiten die Initiative und scheuen Sie sich nicht, nach den Belohnungen und der öffentlichen Anerkennung zu greifen, die Sie verdienen. Bauen Sie Ihre Autorität auf den Grundlagen von Ehrlichkeit und Zuverlässigkeit auf, die schon immer Ihre Stärken waren.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Treffen Sie Entscheidungen nicht in Eile oder unter dem Einfluss negativer Emotionen, die Ihr Urteilsvermögen für einen Moment trüben könnten. Vermeiden Sie Arroganz und denken Sie daran, dass wahre Macht aus Ruhe und Selbstvertrauen resultiert.",
      "s": "Macht dient, nicht dominiert",
      "fun": "Heute sehen Sie aus wie ein Anführer, vor dem selbst die größten Widrigkeiten und Warteschlangen im örtlichen Geschäft weichen."
    },
    "6-11": {
      "z": "Zwillinge",
      "l": 9,
      "e": "Heute lädt Nummer Neun Sie ein, einen umfassenden Blick auf Ihr Leben zu werfen und die Angelegenheiten abzuschließen, die endlich geklärt werden müssen. Dies ist eine Zeit großer Transformation, in der Sie sich mit der Weisheit der Erfahrung auf völlig neue Herausforderungen vorbereiten können.",
      "r": "Verzeihen Sie vergangene Verletzungen und danken Sie der Vergangenheit für all die Lektionen, die Sie zu einem so bewussten Menschen gemacht haben. Nehmen Sie sich einen Moment Zeit, um Ihre bisherigen Erfolge zusammenzufassen und lassen Sie dankbar los, was Ihnen nicht mehr dient.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Klammern Sie sich nicht an Dinge, die Ihr natürliches Wachstum und Ihren inneren Frieden nicht mehr unterstützen. Vermeiden Sie es, traurig zu sein, wenn die Dinge verschwinden, denn jede Veränderung ist ein notwendiges Versprechen auf eine bessere Zukunft.",
      "s": "Anmutig schließen – dankbar öffnen",
      "fun": "Heute führen Sie eine so emotionale Reinigung durch, dass sogar alte Quittungen in Ihrem Portemonnaie nach einer ordnungsgemäßen und schnellen Entsorgung verlangen."
    },
    "6-12": {
      "z": "Zwillinge",
      "l": 1,
      "e": "Das eine ist ein neuer Funke Eigeninitiative, der es einem nach einem Tag des Resümierens ermöglicht, mit neuer Kraft einen völlig neuen Kurs einzuschlagen. Heute bist du ein Pionier, der keine Karte braucht, denn dein innerer Mut weist dir den richtigen Weg.",
      "r": "Wetten Sie auf sich selbst und initiieren Sie eine Aktion, vor der Sie sich bisher davor gefürchtet haben, anderen gegenüber laut zu sprechen. Vertrauen Sie Ihrer eigenen Durchbruchskraft und glauben Sie als Erster voll und ganz an den Erfolg Ihrer neuen Vision.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Hüten Sie sich vor den Meinungen anderer, denn Sie sind heute der einzige Kapitän Ihres Schiffes. Zögern Sie nicht mit Ihrer Entscheidung, denn die Energie des Anfangs begünstigt diejenigen, die mutig und ohne zu zögern voranschreiten.",
      "s": "Dein Weg, dein Rhythmus",
      "fun": "Ihr Enthusiasmus ist heute so groß, dass Sie eine neue Mode starten könnten, indem Sie sich mit einem Schuh und einem gewinnenden Lächeln für Dutts entscheiden."
    },
    "6-13": {
      "z": "Zwillinge",
      "l": 2,
      "e": "Nummer zwei lehrt uns, dass die größte Stärke in der Sanftmut und der Fähigkeit liegt, dauerhafte Brücken der Verständigung zwischen Menschen zu bauen. Heute wird Ihre Diplomatie zum Schlüssel, der Ihnen die Tür zu den Herzen der Menschen öffnet, die für Ihr Wohlergehen wichtig sind.",
      "r": "Suchen Sie nach Verständnis und pflegen Sie Beziehungen, die auf Vertrauen und einem tiefen, intuitiven Verständnis für die Bedürfnisse anderer basieren. Vertrauen Sie Ihrer Sensibilität, die es Ihnen ermöglicht, Spannungen abzubauen und Harmonie in Ihre unmittelbare Umgebung zu bringen.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Vermeiden Sie Konkurrenz und die Durchsetzung Ihres Willens, da dies die fragile Atmosphäre der heutigen Harmonie unnötig zerstören könnte. Scheuen Sie sich nicht, um Unterstützung zu bitten, denn die Zusammenarbeit wird Ihnen heute viel mehr Vorteile bringen, als wenn Sie alleine kämpfen.",
      "s": "Sanftmut ist Stärke",
      "fun": "Heute reagieren Sie so sensibel auf die Stimmungen anderer, dass Sie genau wissen, wovon Ihre Lieben träumen, bevor sie selbst darüber nachdenken."
    },
    "6-14": {
      "z": "Zwillinge",
      "l": 3,
      "e": "Three ist ein fröhlicher Tanz der Kreativität, der jede gewöhnliche Aufgabe in ein faszinierendes Abenteuer voller neuer Inspirationen verwandelt. Erlauben Sie sich zu lachen und nehmen Sie eine lockere Einstellung zum Leben, denn Freude ist der kürzeste Weg, um jede Situation zu heilen.",
      "r": "Drücken Sie sich durch Farben, Worte oder Gesten aus, die einen Hauch von Sommerfrische im Juni verbreiten. Teilen Sie Ihren Optimismus, denn Ihr aufrichtiges Lächeln hat heute die Kraft, andere mit außergewöhnlich guter Energie anzustecken.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Überanalysieren Sie Ihre möglichen Fehler, was Ihren natürlichen, freudigen Enthusiasmus unnötig dämpfen könnte. Lassen Sie nicht zu, dass der Pessimismus Ihrer Umgebung Ihren inneren Glanz, der heute außergewöhnlich stark strahlt, auslöscht.",
      "s": "Einfacher bedeutet weiter",
      "fun": "Ihre Energie ist heute so sonnig, dass sogar die Blumen in der Vase sich auf der Suche nach einer Lichtquelle zu Ihnen zu neigen scheinen."
    },
    "6-15": {
      "z": "Zwillinge",
      "l": 4,
      "e": "Nummer vier erinnert uns an den Wert solider Grundlagen, auf denen wir ein Gefühl unserer eigenen Sicherheit und Stabilität im Leben aufbauen. Ihre Regelmäßigkeit wird heute geschätzt und bringt Ihnen Frieden und große Zufriedenheit mit einer gut erledigten Arbeit.",
      "r": "Konzentrieren Sie sich auf den Abschluss der begonnenen Projekte und stellen Sie sicher, dass die Angelegenheiten, die Ihre Aufmerksamkeit erfordern, in perfekter Ordnung sind. Bauen Sie Ihre Zukunft Schritt für Schritt auf und vertrauen Sie darauf, dass jede kleine Aktion Sie dem großen Erfolg näher bringt.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Vermeiden Sie Chaos und die gleichzeitige Bewältigung zu vieler Herausforderungen, die Ihre wertvolle Aufmerksamkeit unnötig ablenken könnten. Ignorieren Sie nicht die Regeln, die Ihre Stabilität schützen und Ihnen helfen, die volle Kontrolle über die Realität zu behalten.",
      "s": "Solidität ist Poesie",
      "fun": "Ihre Liebe zur Ordnung führt heute dazu, dass selbst die Büroklammern auf Ihrem Schreibtisch in perfekten, gleichmäßigen Reihen angeordnet sind."
    },
    "6-16": {
      "z": "Zwillinge",
      "l": 5,
      "e": "Five bringt einen belebenden Hauch von Freiheit und ermutigt Sie, die sichere, aber manchmal zu vorhersehbare Komfortzone zu verlassen. Dies ist der perfekte Tag, um eine Veränderung zu wagen, die neue, anregende Energie in Ihren Alltag bringt.",
      "r": "Seien Sie offen für spontane Vorschläge und gönnen Sie sich ein kleines Abenteuer, das Ihren Geist erfrischt. Gehen Sie ein Risiko ein und prüfen Sie die neuen Entwicklungsmöglichkeiten, die sich heute am Horizont abzeichnen.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Vermeiden Sie Langeweile und Stagnation, die für Sie frustrierend sein und Ihre Vitalität unnötig belasten können. Haben Sie keine Angst davor, alte Muster aufzugeben, denn in der Veränderung liegt Ihr größtes Wachstumspotenzial.",
      "s": "Freiheit ist eine Entscheidung",
      "fun": "Ihr Bedürfnis nach Veränderung ist heute so groß, dass ein einfacher Spaziergang dazu führen kann, dass Sie Tickets für ein völlig unbekanntes Ziel buchen."
    },
    "6-17": {
      "z": "Zwillinge",
      "l": 6,
      "e": "The Six lädt Sie erneut in die Welt der Harmonie ein, in der Liebe, Fürsorge und Schönheit die wichtigsten Wegweiser für das Herz sind. Stellen Sie sicher, dass Ihre Handlungen direkt von innen kommen und Ihnen und allen Ihren Lieben Trost spenden.",
      "r": "Schaffen Sie eine warme Atmosphäre in Ihrem Zuhause und verbringen Sie Zeit mit den Menschen, die Ihnen am wichtigsten sind. Konzentrieren Sie sich darauf, schöne Momente zu schaffen, die Ihre Bindungen stärken und Ihnen ein Gefühl tiefer Sicherheit geben.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Vermeiden Sie es, zu viele Probleme anderer Menschen auf sich zu nehmen, denn jeder muss alleine durchs Leben gehen. Suchen Sie nicht nach Perfektion, wo ehrliche Präsenz und ein gutes, unterstützendes Wort aus der Seele ausreichen.",
      "s": "Schönheit ist ein Akt des Mutes",
      "fun": "Ihr Wunsch, sich um die Welt zu kümmern, sorgt dafür, dass sich heute sogar Ihre Topfblumen besonders verwöhnt und geliebt fühlen."
    },
    "6-18": {
      "z": "Zwillinge",
      "l": 7,
      "e": "Sieben ist eine Zeit tiefer Selbstbeobachtung, in der Stille zu Ihrem treuesten Lehrer der Lebensweisheit wird. Wenn Sie äußere Reize zum Schweigen bringen, können Sie in der Außenwelt die Antworten hören, nach denen Sie schon lange gesucht haben.",
      "r": "Finden Sie einen Moment zum Meditieren oder zum ruhigen Lesen, der Ihr Interieur bereichert und Ihnen Seelenfrieden bringt. Vertrauen Sie Ihrer Intuition, denn ihre Stimme ist heute außergewöhnlich rein, klar und verdient volles Vertrauen.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Lärm und oberflächliche Ablenkungen, die Sie ablenken und Ihnen Ihren hart erkämpften Frieden nehmen können. Haben Sie keine Angst vor Fragen nach dem Sinn Ihres eigenen Weges, denn die Konfrontation mit ihnen bringt wahre Befreiung und Entwicklung.",
      "s": "Die Frage ist wichtiger als die Antwort",
      "fun": "Ihre geheimnisvolle Aura lässt Ihre Lieben sich fragen, ob Sie nicht gerade beim Morgentee die Antwort auf alle Rätsel des Universums gefunden haben."
    },
    "6-19": {
      "z": "Zwillinge",
      "l": 8,
      "e": "Acht ruft Sie dazu auf, Charakterstärke und Mut im Umgang mit Ihren eigenen Ressourcen und Ihrer Lebensenergie zu zeigen. Heute befindet sich Ihre Agentur auf dem höchsten Niveau, das es Ihnen ermöglicht, auch die komplexesten Projekte erfolgreich abzuschließen.",
      "r": "Ergreifen Sie in beruflichen Angelegenheiten die Initiative und scheuen Sie sich nicht, nach den Belohnungen und der öffentlichen Anerkennung zu greifen, die Sie verdienen. Bauen Sie Ihre Autorität auf den Grundlagen von Ehrlichkeit und Zuverlässigkeit auf, die schon immer Ihre Stärken waren.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Treffen Sie Entscheidungen nicht in Eile oder unter dem Einfluss negativer Emotionen, die Ihr Urteilsvermögen für einen Moment trüben könnten. Vermeiden Sie Arroganz und denken Sie daran, dass wahre Macht aus Ruhe und Vertrauen in Ihre Handlungen resultiert.",
      "s": "Macht dient, nicht dominiert",
      "fun": "Heute sehen Sie aus wie ein Anführer, vor dem selbst die größten Widrigkeiten und Warteschlangen im örtlichen Geschäft weichen."
    },
    "6-20": {
      "z": "Zwillinge",
      "l": 9,
      "e": "Die Neun schließen dieses Jahrzehnt mit einer Weisheit und Vorbereitung auf die bevorstehende Sommersonnenwende ab. Dies ist der perfekte Moment, um Rückschlüsse aus den vergangenen Tagen zu ziehen und Platz für die neue Energie zu schaffen, die der längste Tag des Jahres mit sich bringen wird.",
      "r": "Beenden Sie alles, was Sie begonnen haben, und verabschieden Sie sich voller Dankbarkeit von dem, was in Ihrem Leben bereits abgeschlossen wurde. Nehmen Sie sich einen Moment Zeit, um dem Schicksal für all die Lektionen zu danken, die Sie im letzten Jahrzehnt gelernt haben.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Klammern Sie sich nicht an Dingen, die Ihrer Entwicklung nicht mehr dienen, sondern öffnen Sie Ihre Hände, um neue Geschenke des Schicksals anzunehmen. Vermeiden Sie Traurigkeit, wenn etwas verschwindet, denn jede Veränderung ist ein notwendiger Schritt in Richtung eines besseren und erfüllteren Lebens.",
      "s": "Anmutig schließen – dankbar öffnen",
      "fun": "Heute sind Sie wie eine weise Eule, die ein wichtiges Kapitel ihres Buches beendet und bereit für ein völlig neues und faszinierendes Abenteuer ist."
    },
    "6-21": {
      "z": "Krebs",
      "l": 1,
      "e": "Die Sommersonnenwende empfängt Sie mit der Energie des Einen, die wie der hellste Sonnenstrahl ist, der eine neue Richtung weist. Dies ist ein kraftvoller Moment für Sie, um mutig die Veränderungen einzuleiten, die sich schon seit langem in Ihrer Fantasie zusammenbrauen.",
      "r": "Wetten Sie auf sich selbst und treffen Sie Ihre eigene Entscheidung über Ihre unmittelbare Zukunft. Vertrauen Sie Ihrer Durchbruchskraft und werden Sie zum Pionier in Ihrem eigenen Leben, ohne auf Signale von außen zu warten.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Vermeiden Sie Passivität und die Suche nach Akzeptanz von Menschen, die Ihr inneres Feuer nicht verstehen. Haben Sie keine Angst, alleine zu handeln, denn Sie sind heute der authentische Führer Ihres eigenen Schicksals.",
      "s": "Dein Weg, dein Rhythmus",
      "fun": "Sie haben heute so viel Energie, dass Sie allein mit Ihrer Handlungsbereitschaft die gesamte Nachbarschaft mit Energie versorgen könnten."
    },
    "6-22": {
      "z": "Krebs",
      "l": 2,
      "e": "Nummer zwei bringt die Energie der Sanftheit, die hilft, nach einer dynamischen Krise das Gleichgewicht in Beziehungen zu finden. Dies ist die Zeit, in der Ihre Intuition zu einem sensiblen Radar wird, der es Ihnen ermöglicht, die Stimmungen und Bedürfnisse anderer Menschen genau zu spüren.",
      "r": "Suchen Sie nach Verständnis und bauen Sie Brücken, wo bisher Distanz oder unnötige Spannungen herrschten. Pflegen Sie die Zusammenarbeit und schätzen Sie kleine Gesten, die ein Gemeinschaftsgefühl und gegenseitiges Vertrauen schaffen.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Vermeiden Sie Konkurrenz und die Durchsetzung Ihres Willens, da dies die fragile Atmosphäre der heutigen Harmonie zerstören könnte. Isolieren Sie sich nicht von Ihren Lieben, denn im Kontakt mit ihnen finden Sie heute den größten Frieden.",
      "s": "Sanftmut ist Stärke",
      "fun": "Sie sind heute so einfühlsam, dass Sie genau wissen, wovon Ihr Partner träumt, bevor er überhaupt darüber nachdenkt."
    },
    "6-23": {
      "z": "Krebs",
      "l": 3,
      "e": "Drei am Vatertag ist ein fröhliches Fest, das jedes Treffen zu einem farbenfrohen und inspirierenden Ereignis macht. Erlaube dir zu lachen und gehe das Leben unbeschwert an, denn Freude ist der kürzeste Weg zum Herzen eines anderen Menschen.",
      "r": "Drücken Sie Ihre Dankbarkeit durch warme Worte oder eine freudige Geste aus, die direkt von innen kommt. Teilen Sie Ihren Optimismus und inspirieren Sie andere, Schönheit in den einfachsten, alltäglichen Momenten zu sehen.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Sich Sorgen machen über Dinge, auf die man heute sowieso keinen wirklichen Einfluss hat. Unterdrücken Sie Ihre Kreativität nicht und lassen Sie sie bei jeder Aktion, die Sie heute unternehmen, frei entfalten.",
      "s": "Einfacher bedeutet weiter",
      "fun": "Ihre Lebensfreude ist heute so ansteckend, dass selbst die ernstesten Gespräche mit einem gemeinsamen Lächeln enden."
    },
    "6-24": {
      "z": "Krebs",
      "l": 4,
      "e": "Nummer vier erinnert uns daran, dass Stabilität die Poesie konkreten Handelns ist, das Systematik und Geduld erfordert. Der Aufbau dauerhafter Grundlagen für Ihre Sommerpläne ist ein Prozess, der jetzt einen zuverlässigen Ansatz erfordert.",
      "r": "Konzentrieren Sie sich auf die Erledigung offizieller oder häuslicher Angelegenheiten, die besondere Liebe zum Detail erfordern. Wählen Sie Ordnung in Ihrer Umgebung, denn äußere Ordnung fördert stets die Klarheit Ihrer Gedanken.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Plötzliche und unüberlegte Veränderungen, die Ihr Sicherheitsgefühl unnötig stören könnten. Geben Sie nicht dem Chaos nach, denn Zuverlässigkeit und Beständigkeit sind heute Ihre stärksten Verbündeten.",
      "s": "Solidität ist Poesie",
      "fun": "Ihre Arbeitsorganisation ist heute so perfekt, dass sogar die Zeit unter Ihrem Diktat zu verfließen scheint."
    },
    "6-25": {
      "z": "Krebs",
      "l": 5,
      "e": "Five bringt einen Hauch von Freiheit und ermutigt Sie, über den Rahmen alltäglicher, manchmal zu enger Muster hinauszugehen. Dies ist der perfekte Tag, um etwas Spontaneität zu wagen und Ihren Geist und Ihr Herz zu erfrischen.",
      "r": "Akzeptieren Sie die vorgeschlagenen Änderungen und seien Sie offen für neue, faszinierende Bekanntschaften. Nehmen Sie einen anderen Weg als gewöhnlich zu Ihrem Ziel und spüren Sie den Nervenkitzel, das Unbekannte zu entdecken.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Monotonie und Angst vor dem, was Ihnen neu und noch nicht ganz vertraut ist. Halten Sie nicht an Ihren Plänen fest, wenn Ihnen das Leben heute viel interessantere und farbenfrohere Alternativen bietet.",
      "s": "Freiheit ist eine Entscheidung",
      "fun": "Ihr Bedürfnis nach Freiheit ist heute so groß, dass der Einkaufsbummel zu einer längeren Reise werden kann."
    },
    "6-26": {
      "z": "Krebs",
      "l": 6,
      "e": "The Six lädt Sie ein, eine Oase der Harmonie zu schaffen, in der Liebe und Fürsorge für Ihre Lieben zur Priorität des Tages werden. Ihr Zuhause wird heute zu einer Quelle großer Stärke, solange Sie auf die Schönheit und den gegenseitigen Respekt der Haushaltsmitglieder achten.",
      "r": "Schaffen Sie eine warme Atmosphäre in Ihrer Umgebung und verbringen Sie schöne Zeit mit den Menschen, die Sie lieben. Konzentrieren Sie sich darauf, Beziehungen zu pflegen, die Ihnen das Gefühl geben, gebraucht und vollständig akzeptiert zu werden.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Wenn Sie zu viele Probleme anderer Menschen auf sich nehmen, könnte Ihnen das die Freude am eigenen Frieden nehmen. Vermeiden Sie Perfektionismus, denn aufrichtige Präsenz ist wichtiger als ein perfekt zubereitetes Abendessen.",
      "s": "Schönheit ist ein Akt des Mutes",
      "fun": "Ihre fürsorgliche Aura ist heute so stark, dass sich sogar die Kakteen in Ihrem Haus verwöhnt fühlen."
    },
    "6-27": {
      "z": "Krebs",
      "l": 7,
      "e": "Sieben ist eine Zeit tiefer Selbstbeobachtung, in der Stille zum treuesten und weisesten Ratgeber Ihrer Seele wird. Wenn Sie äußere Reize zum Schweigen bringen, können Sie im Lärm die Antworten hören, nach denen Sie erfolglos gesucht haben.",
      "r": "Finden Sie einen Moment zum Meditieren oder Lesen, der Ihr Inneres bereichert und Ihnen den Frieden bringt, den Sie sich wünschen. Vertrauen Sie Ihrer Intuition, denn ihre Stimme ist heute außergewöhnlich klar und frei von unnötigen Filtern.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Lärm und oberflächliche Ablenkungen, die Ihre Aufmerksamkeit ablenken und die in der Stille entstandene Ordnung zerstören können. Laufen Sie nicht vor Fragen über die Bedeutung Ihres Weges davon, denn die Konfrontation mit ihnen bringt wahre Befreiung.",
      "s": "Die Frage ist wichtiger als die Antwort",
      "fun": "Ihr Blick ist heute so durchdringend, dass Ihre Lieben sich fragen, ob Sie gerade das Geheimnis des Universums entdeckt haben."
    },
    "6-28": {
      "z": "Krebs",
      "l": 8,
      "e": "Acht bringt die Energie der Manifestation von Stärke mit sich, die es Ihnen ermöglicht, Ihre finanzielle und berufliche Situation wirklich zu beeinflussen. Heute wird Ihre Entschlossenheit durch Entscheidungsfreiheit unterstützt, die Sie bei jeder Ihrer Maßnahmen äußerst effektiv macht.",
      "r": "Ergreifen Sie konkrete Schritte zur Verwirklichung Ihrer Ambitionen und vertrauen Sie Ihrer etablierten Autorität. Bauen Sie Ihre Fülle auf einer ehrlichen Grundlage auf, die Ihnen über Jahre hinweg dauerhafte und zufriedenstellende Ergebnisse bescheren wird.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Treffen Sie wichtige Entscheidungen unter dem Einfluss der Angst vor Mangel, anstatt Kraft aus dem Selbstwertgefühl zu schöpfen. Hüten Sie sich vor Arroganz und denken Sie daran, dass wahre Macht nicht schreien muss, um voll wahrgenommen zu werden.",
      "s": "Macht dient, nicht dominiert",
      "fun": "Heute sehen Sie aus wie ein Anführer, der selbst die größten Widrigkeiten und bürokratischen Hürden meistert."
    },
    "6-29": {
      "z": "Krebs",
      "l": 9,
      "e": "Nummer Neun erinnert Sie daran, dass Weisheit in der Fähigkeit liegt, Phasen zu schließen, die Ihrem Wachstum nicht mehr dienen. Dies ist eine Zeit großer Transformation, die Sie darauf vorbereitet, völlig neue, faszinierende Impulse des Schicksals anzunehmen.",
      "r": "Verzeihen Sie alte Traumata und lassen Sie alles los, was Ihre natürliche, innere Freiheit blockiert. Danken Sie der Vergangenheit für all die Lektionen und betrachten Sie sie als wertvollen Treibstoff für Ihren weiteren, inspirierenden Weg.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Halten Sie an dem fest, was unwiderruflich verschwunden ist, weil es Ihren natürlichen Wiedergeburtsprozess blockiert. Geben Sie nicht der Traurigkeit nach, denn jedes Ende ist ein freudiges Versprechen einer neuen, wundervollen und strahlenden Morgendämmerung.",
      "s": "Anmutig schließen – dankbar öffnen",
      "fun": "Heute sind Sie mit der emotionalen Reinigung so beschäftigt, dass selbst alte Quittungen in Ihrem Portemonnaie nach einer ordnungsgemäßen Entsorgung verlangen."
    },
    "6-30": {
      "z": "Krebs",
      "l": 1,
      "e": "Der erste Teil schließt den Juni mit einem starken Akzent auf eine neue Initiative ab und ermutigt Sie, sich im vollen Licht Ihrer eigenen Möglichkeiten zu stellen. Dies ist der Tag, an dem jeder Ihrer mutigen Gedanken die Kraft hat, der Beginn einer neuen Urlaubsgeschichte zu werden.",
      "r": "Zeigen Sie Unabhängigkeit und gehen Sie das Risiko ein, Ihre eigene, mutige Idee umzusetzen. Vertrauen Sie Ihrer Durchbruchskraft und seien Sie der Erste, der heute ohne zu zögern an Ihren Sieg glaubt.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Beobachten Sie die Meinungen anderer und warten Sie auf deren Zustimmung, denn Sie sind der Kapitän dieses Schiffes. Zögern Sie nicht, Maßnahmen zu ergreifen, denn die heutige Energie begünstigt diejenigen, die mutig der Sonne entgegengehen.",
      "s": "Dein Weg, dein Rhythmus",
      "fun": "Ihre Begeisterung ist heute so groß, dass Sie mit dem Tragen eines einzigen Schuhs eine neue Mode starten könnten."
    },
    "7-1": {
      "z": "Krebs",
      "l": 9,
      "e": "Nummer Neun eröffnet den Juli mit der Energie des Abschlusses und der tiefen Zusammenfassung, die es Ihnen ermöglicht, mit leichtem Herzen in die zweite Jahreshälfte zu starten. Dies ist eine Zeit der Großzügigkeit, in der die Weisheit der Erfahrung zu Ihrem wertvollsten Kompass wird.",
      "r": "Bedanken Sie sich für die Lektionen der letzten Monate und lassen Sie dankbar los, was Ihnen nicht mehr dient. Öffnen Sie sich dafür, anderen zu helfen, Frieden in Selbstlosigkeit zu finden und sich auf einen neuen Zyklus vorzubereiten.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Klammern Sie sich nicht an die Vergangenheit, denn sie blockiert Ihren natürlichen Fluss und Ihre Bereitschaft für Weihnachtsgeschenke. Vermeiden Sie es, traurig zu sein, wenn etwas verschwindet, und erkennen Sie, dass es ein notwendiger Ort für die kommenden Veränderungen ist.",
      "s": "Das Ende ist auch ein Geschenk",
      "fun": "Sie räumen heute so viel auf, dass sogar alte Fotos aus den Ferien des letzten Jahres in geordneten, sentimentalen Alben arrangiert werden."
    },
    "7-2": {
      "z": "Krebs",
      "l": 1,
      "e": "Das eine ist ein neuer Funke Eigeninitiative, der es Ihnen nach einem Tag voller Zusammenfassungen ermöglicht, mit neuer Kraft Ihren Urlaubsplan anzugehen. Heute bist du ein Pionier, der keine Karte braucht, denn dein innerer Mut weist dir den richtigen Weg.",
      "r": "Wetten Sie auf sich selbst und initiieren Sie eine Aktion, vor der Sie bisher Angst hatten, laut zu sprechen. Vertrauen Sie Ihrer eigenen Durchbruchskraft und glauben Sie als Erster voll und ganz an den Erfolg Ihrer neuen Vision.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Hüten Sie sich vor den Meinungen anderer, denn heute sind Sie der einzige Kapitän dieses Schiffes. Zögern Sie nicht mit Ihrer Entscheidung, denn die Energie des Anfangs begünstigt diejenigen, die mutig und entschlossen voranschreiten.",
      "s": "Die erste Zeile gehört Ihnen",
      "fun": "Ihre Begeisterung ist heute so groß, dass Sie eine neue Strandmode starten könnten, indem Sie einfach mit einem Schuh an und einem gewinnenden Lächeln im Gesicht Eis essen gehen."
    },
    "7-3": {
      "z": "Krebs",
      "l": 2,
      "e": "Nummer Zwei lehrt uns, dass die größte Stärke in der Sanftmut und der Fähigkeit liegt, Brücken zwischen Menschen zu bauen. Heute wird Ihre Diplomatie zum Schlüssel, der die Tür zu den Herzen der Menschen öffnet, die für Ihren Sommerfrieden wichtig sind.",
      "r": "Suchen Sie nach Verständnis und pflegen Sie Beziehungen, die auf Vertrauen und einem tiefen, intuitiven Verständnis für die Bedürfnisse anderer basieren. Vertrauen Sie Ihrer Sensibilität, die es Ihnen ermöglicht, Spannungen abzubauen und Harmonie in Ihre Umgebung zu bringen.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Vermeiden Sie Konkurrenz und die Durchsetzung Ihres Willens, da dies die fragile Atmosphäre der heutigen Harmonie zerstören könnte. Scheuen Sie sich nicht, um Unterstützung zu bitten, denn die Zusammenarbeit wird Ihnen heute viel mehr Vorteile bringen als die Einsamkeit.",
      "s": "In der Stille hört man mehr",
      "fun": "Heutzutage reagieren Sie so sensibel auf die Stimmungen anderer, dass Sie genau wissen, nach welcher Waffelsorte Ihre Lieben fragen werden, bevor sie überhaupt darüber nachdenken."
    },
    "7-4": {
      "z": "Krebs",
      "l": 3,
      "e": "Three ist ein fröhlicher Tanz der Kreativität, der jede Sommeraufgabe in ein faszinierendes Abenteuer voller Inspiration verwandelt. Erlauben Sie sich zu lachen und nehmen Sie eine lockere Einstellung zum Leben, denn Freude ist der kürzeste Weg, um jede Situation zu heilen.",
      "r": "Drücken Sie sich durch Farben, Worte oder Gesten aus, die einen Hauch von Juli-Frische verleihen. Teilen Sie Ihren Optimismus, denn Ihr aufrichtiges Lächeln hat heute die Kraft, andere mit außergewöhnlich guter Energie anzustecken.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Überanalysieren Sie Ihre Fehler, was Ihren natürlichen, freudigen Enthusiasmus unnötig dämpfen könnte. Lassen Sie nicht zu, dass der Pessimismus Ihrer Umgebung Ihren inneren Glanz, der heute außergewöhnlich stark strahlt, auslöscht.",
      "s": "Lachen ist der kürzeste Weg zum Herzen",
      "fun": "Deine Energie ist heute so sonnig, dass sogar die Sonne über dem Horizont speziell für dich und deine Ideen zu scheinen scheint."
    },
    "7-5": {
      "z": "Krebs",
      "l": 4,
      "e": "Nummer vier erinnert uns an den Wert solider Grundlagen, auf denen wir unser Gefühl von Sicherheit und Stabilität aufbauen. Ihre Regelmäßigkeit wird heute geschätzt und bringt Ihnen Frieden und Zufriedenheit mit einer gut erledigten Arbeit.",
      "r": "Konzentrieren Sie sich auf den Abschluss der begonnenen Projekte und stellen Sie sicher, dass die Angelegenheiten, die Ihrer Aufmerksamkeit bedürfen, in perfekter Ordnung sind. Bauen Sie Ihre Zukunft Schritt für Schritt auf und vertrauen Sie darauf, dass jede kleine Aktion Sie dem großen Erfolg näher bringt.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Vermeiden Sie Chaos und die gleichzeitige Bewältigung zu vieler Herausforderungen, die Ihre wertvolle Aufmerksamkeit unnötig ablenken könnten. Ignorieren Sie nicht die Regeln, die Ihre Stabilität schützen und Ihnen helfen, die volle Kontrolle über die Realität zu behalten.",
      "s": "Das Fundament macht keinen Lärm – aber alles steht darauf",
      "fun": "Ihre Liebe zur Ordnung weckt heute in Ihnen den Wunsch, sogar die Kieselsteine ​​am Strand nach Größe und Schatten zu ordnen."
    },
    "7-6": {
      "z": "Krebs",
      "l": 5,
      "e": "Five bringt einen belebenden Hauch von Freiheit und ermutigt Sie, die sichere, aber manchmal zu vorhersehbare Komfortzone zu verlassen. Dies ist der perfekte Tag, um eine Veränderung zu wagen, die neue Urlaubsenergie in Ihren Alltag bringt.",
      "r": "Seien Sie offen für spontane Vorschläge und gönnen Sie sich ein kleines Abenteuer, das Ihren Geist erfrischt. Gehen Sie ein Risiko ein und prüfen Sie die neuen Entwicklungsmöglichkeiten, die sich heute am Horizont abzeichnen.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Vermeiden Sie Langeweile und Stagnation, die frustrierend sein und Ihnen unnötig Kraft rauben können. Haben Sie keine Angst davor, alte Muster aufzugeben, denn in der Veränderung liegt Ihr größtes Wachstumspotenzial.",
      "s": "Der Wind fragt nicht – er weht einfach",
      "fun": "Ihr Bedürfnis nach Veränderung ist heute so groß, dass ein Spaziergang zu einem spontanen Ausflug in eine völlig unbekannte Richtung führen kann."
    },
    "7-7": {
      "z": "Krebs",
      "l": 6,
      "e": "The Six lädt Sie erneut in die Welt der Harmonie ein, in der Liebe, Fürsorge und Schönheit die wichtigsten Wegweiser für das Herz sind. Stellen Sie sicher, dass Ihre Handlungen direkt von innen kommen und Ihnen und allen Ihren Lieben Trost spenden.",
      "r": "Schaffen Sie eine warme Atmosphäre in Ihrem Zuhause und verbringen Sie Zeit mit den Menschen, die Ihnen am wichtigsten sind. Konzentrieren Sie sich darauf, schöne Momente zu schaffen, die Ihre Bindungen stärken und Ihnen ein Gefühl tiefer Sicherheit geben.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Vermeiden Sie es, zu viele Probleme anderer Menschen auf sich zu nehmen, denn jeder muss seinen eigenen Weg gehen. Suchen Sie nicht nach Perfektion, wenn ehrliche Präsenz und ein freundliches, unterstützendes Wort ausreichen.",
      "s": "Zuhause ist ein Ort, an dem das Herz atmet",
      "fun": "Ihr Wunsch, sich um die Welt zu kümmern, sorgt dafür, dass sich heute sogar die Blumen in Ihrem Garten besonders verwöhnt fühlen."
    },
    "7-8": {
      "z": "Krebs",
      "l": 7,
      "e": "Sieben ist eine Zeit tiefer Selbstbeobachtung, in der Stille zu Ihrem treuesten Weisheitslehrer wird. Durch das Stummschalten äußerer Reize können Sie in der Hektik der Feiertage die Antworten hören, nach denen Sie schon lange gesucht haben.",
      "r": "Finden Sie einen Moment zum Meditieren oder zum ruhigen Lesen, der Ihr Interieur bereichert und Ihnen Seelenfrieden bringt. Vertrauen Sie Ihrer Intuition, denn ihre Stimme ist heute außergewöhnlich rein und klar.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Lärm und oberflächliche Ablenkungen, die Ihre Aufmerksamkeit ablenken und Ihnen die hart erkämpfte Ordnung nehmen können. Haben Sie keine Angst vor Fragen nach dem Sinn Ihres eigenen Weges, denn die Konfrontation mit ihnen bringt wahre Befreiung.",
      "s": "Weisheit wohnt in der Stille",
      "fun": "Ihre geheimnisvolle Aura lässt Ihre Lieben sich fragen, ob Sie gerade eine neue Definition von Sommerentspannung entdeckt haben."
    },
    "7-9": {
      "z": "Krebs",
      "l": 8,
      "e": "Die Acht kehrt zurück, um zu überprüfen, wie es Ihnen gelingt, Ihre Stärke in der Praxis zum Ausdruck zu bringen. Heute befindet sich Ihre Agentur auf dem höchsten Niveau, das es Ihnen ermöglicht, auch die komplexesten professionellen Projekte erfolgreich abzuschließen.",
      "r": "Ergreifen Sie in wichtigen Angelegenheiten die Initiative und scheuen Sie sich nicht, nach den Belohnungen und der öffentlichen Anerkennung zu greifen, die Sie verdienen. Bauen Sie Ihre Autorität auf den Grundlagen von Ehrlichkeit und Zuverlässigkeit auf, die schon immer Ihre Stärken waren.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Treffen Sie Entscheidungen nicht in Eile oder unter dem Einfluss negativer Emotionen, die Ihr Urteilsvermögen für einen Moment trüben könnten. Vermeiden Sie Arroganz und denken Sie daran, dass wahre Macht aus Ruhe und Selbstvertrauen resultiert.",
      "s": "Stärke aus Werten, nicht aus Ego",
      "fun": "Heute sehen Sie aus wie ein Anführer, vor dem selbst die größten Widrigkeiten und Warteschlangen vor Sommerattraktionen weichen."
    },
    "7-10": {
      "z": "Krebs",
      "l": 9,
      "e": "The Nine schließt dieses Jahrzehnt mit der Energie ab, den Überblick zu behalten und sich auf das vorzubereiten, was die nächsten Sommertage bringen werden. Dies ist eine Zeit der Transformation, in der Ihnen die Weisheit, Etappen zu absolvieren, ein Gefühl von Freiheit und Erfüllung vermittelt.",
      "r": "Beenden Sie alles, was Sie begonnen haben, und verabschieden Sie sich voller Dankbarkeit von dem, was in Ihrem Leben bereits abgeschlossen wurde. Nehmen Sie sich einen Moment Zeit, um dem Schicksal für all die Lektionen zu danken, die Sie in den letzten zehn Tagen gelernt haben.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Klammern Sie sich nicht an Dingen, die Ihrer Entwicklung nicht mehr dienen, sondern öffnen Sie Ihre Hände, um neue Geschenke anzunehmen. Vermeiden Sie Traurigkeit, wenn etwas verschwindet, denn jede Veränderung ist ein notwendiger Schritt in Richtung eines besseren Lebens.",
      "s": "Das Ende ist auch ein Geschenk",
      "fun": "Heute sind Sie wie eine weise Eule, die ein wichtiges Kapitel beendet und bereit für ein völlig neues und faszinierendes Abenteuer ist."
    },
    "7-11": {
      "z": "Krebs",
      "l": 1,
      "e": "Eines entfacht erneut den Funken einer neuen Initiative und ermutigt Sie, mutig aus der Reihe zu treten und Ihre Authentizität zu zeigen. Dies ist der Tag, an dem jeder Ihrer bahnbrechenden Gedanken die Kraft hat, zum Beginn eines neuen, faszinierenden Weges zu werden.",
      "r": "Setzen Sie auf sich selbst und treffen Sie Ihre eigenen Entscheidungen in Angelegenheiten, die Sie zuvor zögerlich gemacht haben. Vertrauen Sie Ihrer eigenen Durchbruchskraft und glauben Sie als Erster voll und ganz an den Erfolg Ihrer neuen Vision.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Hören Sie nicht auf die Meinung anderer, denn nur Sie kennen die richtige Richtung Ihrer Reise. Zögern Sie nicht, Maßnahmen zu ergreifen, denn die heutige Energie begünstigt diejenigen, die mutig und entschlossen ins Unbekannte vordringen.",
      "s": "Die erste Zeile gehört Ihnen",
      "fun": "Ihre Begeisterung ist heute so groß, dass Sie einen neuen Trend starten könnten, indem Sie einfach mit einem Schuh und einem gewinnenden Lächeln Eis essen gehen."
    },
    "7-12": {
      "z": "Krebs",
      "l": 2,
      "e": "Nummer Zwei lehrt uns, dass die größte Stärke oft in Sanftmut und der Fähigkeit liegt, anderen zuzuhören. Heute wird Ihre Diplomatie zum Schlüssel, der die Tür zu den Herzen der Menschen öffnet, die für Ihren Frieden wichtig sind.",
      "r": "Suchen Sie nach Verständnis und bauen Sie Brücken, wo zuvor kalte, unangenehme Distanz herrschte. Kultivieren Sie Ihre Intuition, denn sie wird Ihnen am besten sagen, wie Sie im Kontakt mit der Umwelt das Gleichgewicht bewahren.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Vermeiden Sie Konkurrenz und die Durchsetzung Ihres Willens, da dies die fragile Atmosphäre der heutigen Harmonie zerstören könnte. Scheuen Sie sich nicht, um Unterstützung zu bitten, denn die Zusammenarbeit wird Ihnen heute viel mehr Vorteile bringen, als wenn Sie alleine kämpfen.",
      "s": "In der Stille hört man mehr",
      "fun": "Heute reagieren Sie so sensibel auf die Stimmungen anderer, dass Sie genau wissen, wovon Ihre Lieben träumen, bevor sie überhaupt darüber nachdenken."
    },
    "7-13": {
      "z": "Krebs",
      "l": 3,
      "e": "Three ist ein fröhlicher Tanz der Kreativität, der jede Urlaubsaufgabe in ein farbenfrohes Abenteuer voller neuer Inspirationen verwandelt. Erlauben Sie sich zu lachen und nehmen Sie eine lockere Einstellung zum Leben, denn Freude ist der kürzeste Weg, um jede Situation zu heilen.",
      "r": "Drücken Sie Ihre Gefühle durch Farben, Worte oder Gesten aus, die einen Hauch von Juli-Frische verleihen. Teilen Sie Ihren Optimismus, denn Ihr aufrichtiges Lächeln hat heute die Kraft, andere mit außergewöhnlich guter Energie anzustecken.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Überanalysieren Sie Ihre möglichen Fehler, was Ihren natürlichen, freudigen Enthusiasmus unnötig dämpfen könnte. Lassen Sie nicht zu, dass der Pessimismus Ihrer Umgebung Ihren inneren Glanz, der heute außergewöhnlich stark strahlt, auslöscht.",
      "s": "Lachen ist der kürzeste Weg zum Herzen",
      "fun": "Ihre Energie ist heute so sonnig, dass sogar die Sonne über dem Horizont speziell für Ihre Ideen zu scheinen scheint."
    },
    "7-14": {
      "z": "Krebs",
      "l": 4,
      "e": "Nummer vier erinnert uns an den Wert solider Grundlagen, auf denen wir unser Gefühl von Sicherheit und Stabilität aufbauen. Ihre Regelmäßigkeit wird heute geschätzt und bringt Ihnen Frieden und große Zufriedenheit mit einer gut erledigten Arbeit.",
      "r": "Konzentrieren Sie sich auf den Abschluss der begonnenen Projekte und stellen Sie sicher, dass die Dinge, die Ihrer Aufmerksamkeit bedürfen, in perfekter Ordnung gehalten werden. Bauen Sie Ihre Zukunft Schritt für Schritt auf und vertrauen Sie darauf, dass jede kleine Aktion Sie dem großen Erfolg näher bringt.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Vermeiden Sie Chaos und die gleichzeitige Bewältigung zu vieler Herausforderungen, die Ihre wertvolle Aufmerksamkeit unnötig ablenken könnten. Ignorieren Sie nicht die Regeln, die Ihre Stabilität schützen und Ihnen helfen, die volle Kontrolle über die Realität zu behalten.",
      "s": "Das Fundament macht keinen Lärm – aber alles steht darauf",
      "fun": "Ihre Liebe zur Ordnung weckt heute in Ihnen den Wunsch, sogar die Kieselsteine ​​am Strand nach Größe und Schatten zu ordnen."
    },
    "7-15": {
      "z": "Krebs",
      "l": 5,
      "e": "Five bringt einen Hauch von Freiheit und ermutigt Sie, die sichere, aber manchmal zu vorhersehbare Komfortzone zu verlassen. Dies ist der perfekte Tag, um eine Veränderung zu wagen, die neue, anregende Energie in Ihren Alltag bringt.",
      "r": "Seien Sie offen für spontane Vorschläge und gönnen Sie sich ein kleines Abenteuer, das Ihren Geist erfrischt. Gehen Sie ein Risiko ein und prüfen Sie die neuen Entwicklungsmöglichkeiten, die sich heute am Horizont abzeichnen.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Vermeiden Sie Langeweile und Stagnation, die frustrierend sein und Ihnen unnötig Kraft rauben können. Haben Sie keine Angst davor, alte Muster aufzugeben, denn in der Veränderung liegt Ihr größtes Wachstumspotenzial.",
      "s": "Der Wind fragt nicht – er weht einfach",
      "fun": "Ihr Bedürfnis nach Veränderung ist heute so groß, dass ein einfacher Spaziergang dazu führen kann, dass Sie Tickets für ein völlig unbekanntes Ziel buchen."
    },
    "7-16": {
      "z": "Krebs",
      "l": 6,
      "e": "The Six lädt Sie erneut in die Welt der Harmonie ein, in der Liebe, Fürsorge und Schönheit die wichtigsten Wegweiser für das Herz sind. Stellen Sie sicher, dass Ihre Handlungen direkt von innen kommen und Ihnen und allen Ihren Lieben Trost spenden.",
      "r": "Schaffen Sie eine warme Atmosphäre in Ihrem Zuhause und verbringen Sie Zeit mit den Menschen, die Ihnen am wichtigsten sind. Konzentrieren Sie sich darauf, schöne Momente zu schaffen, die Ihre Bindungen stärken und Ihnen ein Gefühl tiefer Sicherheit geben.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Vermeiden Sie es, zu viele Probleme anderer Menschen auf sich zu nehmen, denn jeder muss alleine durchs Leben gehen. Suchen Sie nicht nach Perfektion, wenn ehrliche Präsenz und ein freundliches, unterstützendes Wort ausreichen.",
      "s": "Zuhause ist ein Ort, an dem das Herz atmet",
      "fun": "Ihr Wunsch, sich um die Welt zu kümmern, sorgt dafür, dass sich heute sogar die Blumen in Ihrem Garten besonders verwöhnt fühlen."
    },
    "7-17": {
      "z": "Krebs",
      "l": 7,
      "e": "Sieben ist eine Zeit tiefer Selbstbeobachtung, in der Stille zu Ihrem treuesten Lehrer der Lebensweisheit wird. Wenn Sie äußere Reize zum Schweigen bringen, können Sie in der Außenwelt die Antworten hören, nach denen Sie schon lange gesucht haben.",
      "r": "Finden Sie einen Moment zum Meditieren oder zum ruhigen Lesen, der Ihr Interieur bereichert und Ihnen Seelenfrieden bringt. Vertrauen Sie Ihrer Intuition, denn ihre Stimme ist heute außergewöhnlich rein, klar und verdient volles Vertrauen.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Lärm und oberflächliche Ablenkungen, die Sie ablenken und Ihnen Ihren hart erkämpften Frieden nehmen können. Haben Sie keine Angst vor Fragen nach dem Sinn Ihres eigenen Weges, denn die Konfrontation mit ihnen bringt wahre Befreiung und Entwicklung.",
      "s": "Weisheit wohnt in der Stille",
      "fun": "Ihre geheimnisvolle Aura lässt Ihre Lieben sich fragen, ob Sie nicht gerade beim Morgentee die Antwort auf alle Rätsel des Universums gefunden haben."
    },
    "7-18": {
      "z": "Krebs",
      "l": 8,
      "e": "Acht ruft Sie dazu auf, Charakterstärke und Mut im Umgang mit Ihren eigenen Ressourcen und Ihrer Lebensenergie zu zeigen. Heute befindet sich Ihre Agentur auf dem höchsten Niveau, das es Ihnen ermöglicht, auch die komplexesten Projekte erfolgreich abzuschließen.",
      "r": "Ergreifen Sie in beruflichen Angelegenheiten die Initiative und scheuen Sie sich nicht, nach den Belohnungen und der öffentlichen Anerkennung zu greifen, die Sie verdienen. Bauen Sie Ihre Autorität auf den Grundlagen von Ehrlichkeit und Zuverlässigkeit auf, die schon immer Ihre Stärken waren.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Treffen Sie Entscheidungen nicht in Eile oder unter dem Einfluss negativer Emotionen, die Ihr Urteilsvermögen für einen Moment trüben könnten. Vermeiden Sie Arroganz und denken Sie daran, dass wahre Macht aus Ruhe und Vertrauen in Ihre Handlungen resultiert.",
      "s": "Stärke aus Werten, nicht aus Ego",
      "fun": "Heute sehen Sie aus wie ein Anführer, vor dem selbst die größten Widrigkeiten und Warteschlangen im örtlichen Geschäft weichen."
    },
    "7-19": {
      "z": "Krebs",
      "l": 9,
      "e": "The Nine schließt dieses Jahrzehnt in einem Ton der Weisheit und Vorbereitung auf das ab, was die nächsten Sommertage bringen werden. Dies ist eine Zeit der Transformation, in der Ihnen die Weisheit, Etappen zu absolvieren, ein Gefühl von Freiheit und großer Erleichterung vermittelt.",
      "r": "Beenden Sie alles, was Sie begonnen haben, und verabschieden Sie sich voller Dankbarkeit von dem, was in Ihrem Leben bereits abgeschlossen wurde. Nehmen Sie sich einen Moment Zeit, um dem Schicksal für all die Lektionen zu danken, die Sie im letzten Jahrzehnt gelernt haben.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Klammern Sie sich nicht an Dingen, die Ihrer Entwicklung nicht mehr dienen, sondern öffnen Sie Ihre Hände, um neue Geschenke des Schicksals anzunehmen. Vermeiden Sie Traurigkeit, wenn etwas verschwindet, denn jede Veränderung ist ein notwendiger Schritt in Richtung eines besseren und erfüllteren Lebens.",
      "s": "Das Ende ist auch ein Geschenk",
      "fun": "Heute sind Sie wie eine weise Eule, die ein wichtiges Kapitel ihres Buches beendet und bereit für ein völlig neues und faszinierendes Abenteuer ist."
    },
    "7-20": {
      "z": "Krebs",
      "l": 1,
      "e": "Man beginnt eine neue Phase im Juli und ermutigt Sie, mit noch mehr Selbstvertrauen der Architekt Ihres eigenen Schicksals zu sein. Heute hat jeder Ihrer mutigen Gedanken die Kraft, zum Beginn einer neuen, faszinierenden Sommergeschichte zu werden.",
      "r": "Entscheiden Sie sich für Originalität und haben Sie keine Angst, der Welt Ihre gewagtesten Projekte zu präsentieren. Vertrauen Sie Ihrer Durchbruchskraft und seien Sie der Erste, der heute voller Zuversicht an Ihren Sieg glaubt.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Vermeiden Sie Nachahmungen und suchen Sie nach Abkürzungen, die Ihre Authentizität unnötig schwächen könnten. Scheuen Sie sich nicht, auf eigene Faust zu handeln, denn Pioniere müssen oft den Weg ebnen, ohne sich um die Meinungen anderer zu scheren.",
      "s": "Die erste Zeile gehört Ihnen",
      "fun": "Ihre Dosis purer Energie ist heute so groß, dass Sie allein mit Ihrer Anwesenheit ein kleines Musikfestival betreiben könnten."
    },
    "7-21": {
      "z": "Krebs",
      "l": 2,
      "e": "Nummer zwei bringt die Energie der Sanftheit mit sich, die dabei hilft, mitten im Sommer ein Gleichgewicht in den Beziehungen zu anderen Menschen zu finden. Dies ist die Zeit, in der Ihre Intuition äußerst sensibel wird und es Ihnen ermöglicht, die Stimmungen und Bedürfnisse Ihrer Lieben genau zu spüren.",
      "r": "Suchen Sie nach Verständnis und bauen Sie Brücken, wo bisher Distanz oder unnötige Spannungen herrschten. Pflegen Sie die Zusammenarbeit, denn die Zusammenarbeit wird Ihnen heute viel mehr Freude bereiten als allein.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Konkurrenz und Durchsetzung des eigenen Willens könnten die fragile Atmosphäre der heutigen Harmonie zerstören. Isolieren Sie sich nicht von den Menschen, denn im Kontakt mit ihnen finden Sie heute den größten Frieden.",
      "s": "In der Stille hört man mehr",
      "fun": "Sie sind heute so einfühlsam, dass Sie genau wissen, wovon Ihr Partner träumt, bevor er überhaupt darüber nachdenkt."
    },
    "7-22": {
      "z": "Krebs",
      "l": 3,
      "e": "Three ist ein fröhliches Fest, das jedes Sommertreffen zu einem farbenfrohen und inspirierenden Ereignis macht. Erlaube dir zu lachen und gehe das Leben unbeschwert an, denn Freude ist der kürzeste Weg zum Herzen eines anderen Menschen.",
      "r": "Drücken Sie Ihre Dankbarkeit durch warme Worte oder eine freudige Geste aus, die direkt von innen kommt. Teilen Sie Ihren Optimismus und inspirieren Sie andere, Schönheit in den einfachsten, alltäglichen Momenten zu sehen.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Sich Sorgen machen über Dinge, auf die man heute sowieso keinen wirklichen Einfluss hat. Unterdrücken Sie Ihre Kreativität nicht und lassen Sie sie bei jeder Aktion, die Sie heute unternehmen, frei entfalten.",
      "s": "Lachen ist der kürzeste Weg zum Herzen",
      "fun": "Ihre Lebensfreude ist heute so ansteckend, dass selbst die ernstesten Gespräche mit einem gemeinsamen Lächeln enden."
    },
    "7-23": {
      "z": "Löwe",
      "l": 4,
      "e": "Nummer vier erinnert uns daran, dass Stabilität die Poesie konkreten Handelns ist, das Systematik und Geduld erfordert. Der Aufbau dauerhafter Grundlagen für Ihre Urlaubspläne ist ein Prozess, der jetzt eine zuverlässige Vorgehensweise erfordert.",
      "r": "Konzentrieren Sie sich auf den Abschluss von Angelegenheiten, die besondere Aufmerksamkeit für Details und Ordnung erfordern. Wählen Sie Struktur in Ihrem Tag, denn äußere Ordnung fördert immer die Klarheit Ihrer Gedanken.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Plötzliche und unüberlegte Veränderungen, die Ihr Sicherheitsgefühl unnötig stören könnten. Geben Sie nicht dem Chaos nach, denn Zuverlässigkeit und Beständigkeit sind heute Ihre stärksten Verbündeten.",
      "s": "Das Fundament macht keinen Lärm – aber alles steht darauf",
      "fun": "Ihre Arbeitsorganisation ist heute so perfekt, dass sogar die Zeit genau nach Ihren Vorgaben zu verlaufen scheint."
    },
    "7-24": {
      "z": "Löwe",
      "l": 5,
      "e": "Five bringt einen Hauch von Freiheit und ermutigt Sie, über den Rahmen alltäglicher, manchmal zu enger Muster hinauszugehen. Dies ist der perfekte Tag, um etwas Spontaneität zu wagen und Ihren Geist und Ihr Herz zu erfrischen.",
      "r": "Akzeptieren Sie die vorgeschlagenen Änderungen und seien Sie offen für neue, faszinierende Bekanntschaften. Nehmen Sie einen anderen Weg als gewöhnlich zu Ihrem Ziel und spüren Sie den Nervenkitzel, das Unbekannte zu entdecken.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Monotonie und Angst vor dem, was Ihnen neu und noch nicht ganz vertraut ist. Halten Sie nicht an Ihren Plänen fest, wenn Ihnen das Leben heute viel interessantere und farbenfrohere Alternativen bietet.",
      "s": "Der Wind fragt nicht – er weht einfach",
      "fun": "Ihr Bedürfnis nach Freiheit ist heute so groß, dass das Eisessen mit einem spontanen Ausflug an den See enden kann."
    },
    "7-25": {
      "z": "Löwe",
      "l": 6,
      "e": "The Six lädt Sie ein, eine Oase der Harmonie zu schaffen, in der Liebe und Fürsorge für Ihre Lieben zur absoluten Priorität des Tages werden. Ihr Zuhause wird heute zu einer Quelle großer Stärke, solange Sie sich um seine Schönheit und den gegenseitigen Respekt kümmern.",
      "r": "Schaffen Sie eine warme Atmosphäre in Ihrer Umgebung und verbringen Sie schöne Zeit mit den Menschen, die Sie lieben. Konzentrieren Sie sich darauf, Beziehungen zu pflegen, die Ihnen das Gefühl geben, gebraucht und vollständig akzeptiert zu werden.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Wenn Sie zu viele Probleme anderer Menschen auf sich nehmen, könnte Ihnen das die Freude am eigenen Frieden nehmen. Vermeiden Sie Perfektionismus, denn aufrichtige Präsenz ist wichtiger als ein perfekt vorbereitetes Umfeld.",
      "s": "Zuhause ist ein Ort, an dem das Herz atmet",
      "fun": "Ihre fürsorgliche Aura ist heute so stark, dass sich sogar die Kakteen in Ihrem Haus verwöhnt fühlen."
    },
    "7-26": {
      "z": "Löwe",
      "l": 7,
      "e": "Sieben ist eine Zeit tiefer Selbstbeobachtung, in der Stille zum treuesten und weisesten Ratgeber Ihrer Seele wird. Wenn Sie äußere Reize zum Schweigen bringen, können Sie im Lärm die Antworten hören, nach denen Sie erfolglos gesucht haben.",
      "r": "Finden Sie einen Moment zum Meditieren oder Lesen, der Ihr Inneres bereichert und Ihnen den Frieden bringt, den Sie sich wünschen. Vertrauen Sie Ihrer Intuition, denn heute ist ihre Stimme außergewöhnlich klar und frei von unnötigem Rauschen.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Lärm und oberflächliche Ablenkungen, die Ihre Aufmerksamkeit ablenken und die in der Stille entstandene Ordnung zerstören können. Laufen Sie nicht vor Fragen über die Bedeutung Ihres Weges davon, denn die Konfrontation mit ihnen bringt wahre Befreiung.",
      "s": "Weisheit wohnt in der Stille",
      "fun": "Ihr Blick ist heute so durchdringend, dass Ihre Lieben sich fragen, ob Sie gerade das Geheimnis des Universums entdeckt haben."
    },
    "7-27": {
      "z": "Löwe",
      "l": 8,
      "e": "Acht bringt die Energie der Manifestation von Stärke mit sich, die es Ihnen ermöglicht, Ihre finanzielle und Lebenssituation wirklich zu beeinflussen. Heute wird Ihre Entschlossenheit durch Entscheidungsfreiheit unterstützt, die Sie bei jeder Ihrer Maßnahmen äußerst effektiv macht.",
      "r": "Ergreifen Sie konkrete Schritte zur Verwirklichung Ihrer Ambitionen und vertrauen Sie Ihrer Autorität. Bauen Sie Ihre Fülle auf einer ehrlichen Grundlage auf, die Ihnen über Jahre hinweg dauerhafte und zufriedenstellende Ergebnisse bescheren wird.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Entscheidungen unter dem Einfluss der Angst vor Mangel treffen, anstatt Kraft aus dem Selbstwertgefühl zu schöpfen. Hüten Sie sich vor Arroganz und denken Sie daran, dass wahre Macht nicht schreien muss, um wahrgenommen zu werden.",
      "s": "Stärke aus Werten, nicht aus Ego",
      "fun": "Heute sehen Sie aus wie ein Anführer, der selbst die größten Widrigkeiten und bürokratischen Hürden meistert."
    },
    "7-28": {
      "z": "Löwe",
      "l": 9,
      "e": "Nummer Neun erinnert Sie daran, dass Weisheit in der Fähigkeit liegt, Phasen zu schließen, die Ihrem Wachstum nicht mehr dienen. Dies ist eine Zeit großer Transformation, die Sie darauf vorbereitet, völlig neue Impulse des Schicksals anzunehmen.",
      "r": "Verzeihen Sie alte Traumata und lassen Sie alles los, was Ihre natürliche Freiheit blockiert. Danken Sie der Vergangenheit für all die Lektionen und betrachten Sie sie als wertvollen Treibstoff für Ihren weiteren, inspirierenden Weg.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Halten Sie an dem fest, was bereits verschwunden ist, weil es Ihren natürlichen Wiedergeburtsprozess blockiert. Geben Sie nicht der Traurigkeit nach, denn jedes Ende ist ein freudiges Versprechen eines neuen und wunderbaren Morgens.",
      "s": "Das Ende ist auch ein Geschenk",
      "fun": "Heute sind Sie mit der emotionalen Reinigung so beschäftigt, dass selbst alte Quittungen in Ihrem Portemonnaie nach einer ordnungsgemäßen Entsorgung verlangen."
    },
    "7-29": {
      "z": "Löwe",
      "l": 1,
      "e": "Man entfacht den Funken einer neuen Initiative und ermutigt Sie, in der vollen Pracht Ihrer eigenen Möglichkeiten und Träume zu stehen. Dies ist der Tag, an dem jeder Ihrer mutigen Gedanken die Kraft hat, der Beginn einer neuen, faszinierenden Geschichte zu werden.",
      "r": "Zeigen Sie Unabhängigkeit und gehen Sie das Risiko ein, Ihre eigene, mutige Idee umzusetzen. Vertrauen Sie Ihrer Durchbruchskraft und seien Sie der Erste, der heute ohne zu zögern an Ihren Sieg glaubt.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Beobachten Sie die Meinungen anderer und warten Sie auf deren Zustimmung, denn Sie sind der Kapitän dieses Schiffes. Zögern Sie nicht, Maßnahmen zu ergreifen, denn die heutige Energie begünstigt diejenigen, die mutig voranschreiten.",
      "s": "Die erste Zeile gehört Ihnen",
      "fun": "Ihre Begeisterung ist heute so groß, dass Sie mit dem Tragen eines einzigen Schuhs eine neue Mode starten könnten."
    },
    "7-30": {
      "z": "Löwe",
      "l": 2,
      "e": "Zwei lehrt uns, dass die größte Stärke oft in Sanftmut und der Fähigkeit liegt, harmonische Beziehungen aufzubauen. Heute wird Ihre Diplomatie zum Schlüssel, der Ihnen die Tür zu den Herzen der Menschen öffnet, die Ihnen wichtig sind.",
      "r": "Suchen Sie nach Verständnis und bauen Sie Brücken, wo zuvor Kälte oder unnötige Distanz herrschte. Pflegen Sie die Zusammenarbeit und schätzen Sie kleine Gesten, die ein Gemeinschaftsgefühl und gegenseitiges Vertrauen schaffen.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Konkurrenz und Konflikte, die die fragile Atmosphäre der heutigen Feiertagsharmonie zerstören könnten. Scheuen Sie sich nicht, um Unterstützung zu bitten, denn die Zusammenarbeit wird Ihnen heute viel mehr Vorteile bringen, als wenn Sie alleine kämpfen.",
      "s": "In der Stille hört man mehr",
      "fun": "Heute reagieren Sie so sensibel auf die Stimmungen anderer, dass Sie die Bedürfnisse Ihrer Lieben verstehen, ohne ein einziges Wort zu gebrauchen."
    },
    "7-31": {
      "z": "Löwe",
      "l": 3,
      "e": "Das Trio beendet den Juli mit einer fröhlichen Note der Kreativität, die den letzten Tag des Monats in ein faszinierendes Abenteuer verwandelt. Erlauben Sie sich, das Leben zu feiern, denn Ihre gute Energie ist die beste Zusammenfassung der vergangenen Zeit.",
      "r": "Drücken Sie sich durch Kunst, Worte oder ein freudiges Gespräch mit jemandem aus, der heute Unterstützung braucht. Teilen Sie Ihren Optimismus und inspirieren Sie andere, Schönheit in den kleinsten Details der Realität zu sehen.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Übermäßige Ernsthaftigkeit und Sorge um Angelegenheiten, auf die Sie heute keinen wirklichen Einfluss haben. Unterdrücken Sie nicht Ihre kreative Natur und lassen Sie sie bei jeder Aktion frei aufblühen.",
      "s": "Lachen ist der kürzeste Weg zum Herzen",
      "fun": "Ihre Dosis purer Energie ist heute so groß, dass Sie allein mit Ihrer Anwesenheit ein kleines Musikfestival betreiben könnten."
    },
    "8-1": {
      "z": "Löwe",
      "l": 1,
      "e": "Man eröffnet den August mit einem kraftvollen Impuls neuer Energie, der Sie dazu ermutigt, sich für die zweite Hälfte des Sommers mutige Ziele zu setzen. Dies ist der Moment, in dem Ihre Initiative zum Funken wird, der das Feuer echter und inspirierender Veränderungen entfacht.",
      "r": "Entscheiden Sie sich für Authentizität und treffen Sie eine unabhängige Entscheidung, die Sie der Verwirklichung Ihrer tiefsten Träume näher bringt. Vertrauen Sie auf Ihre eigene Durchbruchskraft und werden Sie zum Pionier in Ihrem eigenen Leben, unabhängig von der Zustimmung Ihrer Mitmenschen.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Vermeiden Sie Passivität und das Warten auf den „perfekten Moment“, denn Sie sind derjenige, der mit Ihrem entschlossenen Handeln Chancen schafft. Haben Sie keine Angst, gegen den Strom zu schwimmen, wenn Sie das Gefühl haben, dass der von Ihnen gewählte Weg mit Ihrer Natur übereinstimmt.",
      "s": "Fangen Sie an – der Rest kommt",
      "fun": "Sie sind heute so enthusiastisch, dass Sie eine große Expedition organisieren könnten, bevor der Rest der Welt Zeit hat, seinen Morgenkaffee auszutrinken."
    },
    "8-2": {
      "z": "Löwe",
      "l": 2,
      "e": "Nummer zwei bringt die Energie der Sanftheit, die an heißen Tagen hilft, Harmonie in den Beziehungen zu Ihren Lieben zu finden. Heute wird Ihre Intuition zu einem sensiblen Führer, der es Ihnen ermöglicht, die Stimmungen und unausgesprochenen Bedürfnisse anderer genau zu spüren.",
      "r": "Suchen Sie nach Verständnis und bauen Sie Brücken des Verständnisses, wo zuvor Distanz oder unnötige Spannungen herrschten. Pflegen Sie die Zusammenarbeit und schätzen Sie kleine Gesten, die ein Gefühl der Sicherheit und des gegenseitigen Vertrauens schaffen.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Konkurrenz und Durchsetzung des eigenen Willens, die die fragile Atmosphäre des sonntäglichen Friedens und der Harmonie zerstören könnten. Isolieren Sie sich nicht von den Menschen, denn im herzlichen Kontakt mit ihnen finden Sie heute den größten Trost.",
      "s": "Zwei Seelen, eine Harmonie",
      "fun": "Sie sind heute so einfühlsam, dass Sie genau wissen, welches Eis Ihre Familie möchte, bevor sie überhaupt in den Gefrierschrank schaut."
    },
    "8-3": {
      "z": "Löwe",
      "l": 3,
      "e": "Three ist ein fröhlicher Tanz der Kreativität, der jeden Feiertagsmontag in ein faszinierendes Abenteuer voller neuer Inspirationen verwandelt. Erlauben Sie sich zu lachen und nehmen Sie Ihre Verantwortung auf die leichte Schulter, denn Freude ist der kürzeste Weg zum Erfolg.",
      "r": "Drücken Sie sich durch Farben, Worte oder Gesten aus, die einen Hauch von August und sonniger Frische vermitteln. Teilen Sie Ihren Optimismus und inspirieren Sie andere, Schönheit in den einfachsten, alltäglichen Situationen zu sehen.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Übermäßige Ernsthaftigkeit und Sorge um Angelegenheiten, auf die Sie heute keinen wirklichen Einfluss haben. Unterdrücken Sie nicht Ihre kreative Natur und lassen Sie sie bei jeder Aktion, die Sie heute unternehmen, frei entfalten.",
      "s": "Schaffen Sie, weil die Welt es braucht",
      "fun": "Ihre Aura ist heute so glücklich, dass selbst Ihr Kaffee eher nach Sonnenschein als nach Koffein zu schmecken scheint."
    },
    "8-4": {
      "z": "Löwe",
      "l": 4,
      "e": "Nummer vier erinnert uns daran, dass Stabilität die Poesie konkreten Handelns ist, das Systematik und viel Geduld erfordert. Der Aufbau dauerhafter Grundlagen für Ihre Pläne ist ein Prozess, der von Ihnen nun ein verlässliches Vorgehen erfordert.",
      "r": "Konzentrieren Sie sich auf den Abschluss von Angelegenheiten, die besondere Liebe zum Detail und perfekte Ordnung in den Dokumenten erfordern. Konzentrieren Sie sich auf die Struktur Ihres Tages, denn äußere Ordnung fördert immer die Klarheit und Präzision Ihrer Gedanken.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Plötzliche und unüberlegte Veränderungen, die Ihr hart erarbeitetes Sicherheitsgefühl unnötig stören könnten. Geben Sie dem Chaos nicht nach, denn Zuverlässigkeit und Beständigkeit sind heute Ihre stärksten spirituellen Verbündeten.",
      "s": "Kleine Schritte, bleibende Spuren",
      "fun": "Ihre Arbeitsorganisation ist heute so perfekt, dass sogar die Zeit unter Ihrem Diktat zu verfließen scheint."
    },
    "8-5": {
      "z": "Löwe",
      "l": 5,
      "e": "Fünf bringt einen Hauch von Freiheit und ermutigt Sie, über den Rahmen alltäglicher Muster hinauszugehen, die manchmal zu eng für Ihre Seele sind. Dies ist der perfekte Tag, um ein wenig Spontaneität zu wagen und Ihren Geist und Ihr Herz zu erfrischen.",
      "r": "Akzeptieren Sie aufkommende Veränderungsvorschläge und seien Sie offen für neue, faszinierende Bekanntschaften, die Sie inspirieren können. Wählen Sie einen anderen Weg zu Ihrem Ziel als gewöhnlich, um den Nervenkitzel zu spüren, das Unbekannte zu entdecken.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Monotonie und Angst vor dem, was im Alltag neu und noch nicht ganz vertraut ist. Halten Sie nicht an Ihren Plänen fest, wenn Ihnen das Leben heute viel interessantere und farbenfrohere Alternativen bietet.",
      "s": "Jede Veränderung ist eine Einladung",
      "fun": "Ihr Bedürfnis nach Freiheit ist heute so groß, dass das Zeitunglesen mit einem spontanen Ausflug aus der Stadt enden kann."
    },
    "8-6": {
      "z": "Löwe",
      "l": 6,
      "e": "The Six lädt Sie ein, eine Oase der Harmonie zu schaffen, in der Liebe und Fürsorge für Ihre Lieben zu Ihrer absoluten Priorität werden. Ihr Zuhause wird heute zu einer Quelle großer Stärke, solange Sie auf die Schönheit und den gegenseitigen Respekt der Haushaltsmitglieder achten.",
      "r": "Schaffen Sie eine warme Atmosphäre in Ihrer Umgebung und verbringen Sie wertvolle Zeit mit Menschen, die Sie wirklich lieben. Konzentrieren Sie sich darauf, Beziehungen zu pflegen, die Ihnen das Gefühl geben, von Ihrer Umgebung gebraucht und voll akzeptiert zu werden.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Zu viele Probleme anderer Menschen auf Ihre Schultern zu nehmen, was Ihnen unnötigerweise die Freude am eigenen Frieden nehmen könnte. Vermeiden Sie Perfektionismus, denn eine aufrichtige Präsenz ist viel wichtiger als ein perfekt vorbereitetes Umfeld.",
      "s": "Fürsorge verändert alles",
      "fun": "Ihre fürsorgliche Aura ist heute so stark, dass sich sogar die Kakteen auf der Fensterbank von Ihnen verwöhnt fühlen."
    },
    "8-7": {
      "z": "Löwe",
      "l": 7,
      "e": "Sieben ist eine Zeit tiefer Selbstbeobachtung, in der Stille zum treuesten und weisesten Ratgeber Ihrer Seele wird. Wenn Sie äußere Reize zum Schweigen bringen, können Sie die Antworten hören, nach denen Sie im lauten Lärm erfolglos gesucht haben.",
      "r": "Finden Sie einen Moment zum Meditieren oder Lesen, der Ihr Interieur bereichert und Ihnen den gewünschten Seelenfrieden bringt. Vertrauen Sie Ihrer Intuition, denn heute ist ihre Stimme außergewöhnlich klar und frei von unnötigen Nebengeräuschen.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Lärm und oberflächliche Ablenkungen, die Ihre Aufmerksamkeit ablenken und die in der Stille entstandene Ordnung zerstören können. Scheuen Sie sich nicht vor den Fragen über die Bedeutung Ihres Weges, denn die Konfrontation mit ihnen bringt wahre Befreiung und Weisheit.",
      "s": "Tiefer als du sehen kannst",
      "fun": "Heute bist du wie eine weise Eule, die von einem Ast aus die Welt beobachtet und sich fragt, ob es sich überhaupt lohnt, diese schöne Stille zu brechen."
    },
    "8-8": {
      "z": "Löwe",
      "l": 8,
      "e": "Acht bringt die Energie der Manifestation von Stärke mit sich, die es Ihnen ermöglicht, Ihre finanzielle Situation und Position im Leben wirklich zu beeinflussen. Heute wird Ihre Entschlossenheit durch Entscheidungsfreiheit unterstützt, die Sie bei jeder Ihrer Maßnahmen äußerst effektiv macht.",
      "r": "Ergreifen Sie konkrete Schritte zur Verwirklichung Ihrer Ambitionen und vertrauen Sie Ihrer etablierten Autorität. Bauen Sie Ihre Fülle auf einer ehrlichen Grundlage auf, die Ihnen über Jahre hinweg dauerhafte und zufriedenstellende Ergebnisse bescheren wird.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Treffen Sie wichtige Entscheidungen unter dem Einfluss der Angst vor Mangel, anstatt Kraft aus dem Selbstwertgefühl zu schöpfen. Vermeiden Sie Arroganz und denken Sie daran, dass wahre Macht nicht schreien muss, um voll wahrgenommen und geschätzt zu werden.",
      "s": "Man baut – und es bleibt",
      "fun": "Heute sehen Sie aus wie ein Anführer, der selbst die größten Widrigkeiten und bürokratischen Hürden meistert."
    },
    "8-9": {
      "z": "Löwe",
      "l": 9,
      "e": "Nummer Neun erinnert Sie daran, dass Weisheit in der Fähigkeit besteht, Phasen zu schließen, die Ihrem weiteren Wachstum nicht mehr dienen. Dies ist eine Zeit großer Transformation, die Sie darauf vorbereitet, völlig neue, faszinierende Impulse des Schicksals anzunehmen.",
      "r": "Verzeihen Sie alte Traumata und lassen Sie alles los, was Ihre natürliche, innere Freiheit und Freude blockiert. Danken Sie der Vergangenheit für all die Lektionen und betrachten Sie sie als wertvollen Treibstoff für Ihren weiteren, inspirierenden Lebensweg.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Halten Sie an dem fest, was unwiderruflich verschwunden ist, weil es Ihren natürlichen Wiedergeburtsprozess blockiert. Geben Sie nicht der Traurigkeit nach, denn jedes Ende ist ein freudiges Versprechen einer neuen, wundervollen und strahlenden Morgendämmerung.",
      "s": "Weisheit tut weh, bevor sie untergeht",
      "fun": "Heute sind Sie mit der emotionalen Reinigung so beschäftigt, dass selbst alte Quittungen in Ihrem Portemonnaie nach einer ordnungsgemäßen Entsorgung verlangen."
    },
    "8-10": {
      "z": "Löwe",
      "l": 1,
      "e": "Jedynka schließt dieses Jahrzehnt mit einem starken Akzent einer neuen Initiative ab und ermutigt Sie, im vollen Licht Ihrer eigenen Möglichkeiten zu stehen. Dies ist der Tag, an dem jeder mutige Gedanke, den Sie haben, die Kraft hat, der Beginn einer neuen, aufregenden Geschichte zu werden.",
      "r": "Zeigen Sie Unabhängigkeit und gehen Sie das Risiko ein, Ihre eigene, mutige Idee umzusetzen. Vertrauen Sie Ihrer Durchbruchskraft und seien Sie der Erste, der heute ohne zu zögern an Ihren Sieg glaubt.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Schauen Sie sich die Meinungen anderer an und warten Sie auf deren Zustimmung, denn Sie sind der einzige Kapitän dieses Schiffes. Zögern Sie nicht, Maßnahmen zu ergreifen, denn die heutige Energie begünstigt diejenigen, die mutig der Sonne entgegengehen.",
      "s": "Fangen Sie an – der Rest kommt",
      "fun": "Ihre Begeisterung ist heute so groß, dass Sie mit nur einem Schuh und einem breiten Lächeln eine neue Mode starten könnten."
    },
    "8-11": {
      "z": "Löwe",
      "l": 2,
      "e": "Nummer zwei bringt die Energie der Sanftheit mit sich, die ein tiefes Verständnis mit einer anderen Person ohne unnötige Worte ermöglicht. Dies ist die Zeit, in der Ihre Intuition zu einem sensiblen Führer wird, der Ihnen hilft, Brücken zu bauen, wo zuvor kalte Distanz herrschte.",
      "r": "Suchen Sie nach Gemeinsamkeiten in Beziehungen und pflegen Sie eine vertrauensvolle Zusammenarbeit. Gönnen Sie sich Empathie, die Ihnen die Tür zu den Herzen der Menschen öffnet, die für Ihren Frieden wichtig sind.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Konkurrenz und Durchsetzung des eigenen Willens könnten die fragile Atmosphäre der heutigen Harmonie zerstören. Isolieren Sie sich nicht von Ihren Lieben, denn im Kontakt mit ihnen finden Sie heute den größten Trost.",
      "s": "Zwei Seelen, eine Harmonie",
      "fun": "Heute reagieren Sie so sensibel auf die Stimmungen anderer, dass Sie genau wissen, was Ihr Partner verlangen wird, bevor er überhaupt darüber nachdenkt."
    },
    "8-12": {
      "z": "Löwe",
      "l": 3,
      "e": "Three ist ein fröhlicher Tanz der Kreativität, der in der vollen Augustsonne erblüht. Lassen Sie Ihrer Fantasie keine Grenzen und verwandeln Sie jede Urlaubsaufgabe in ein inspirierendes Abenteuer.",
      "r": "Drücken Sie Ihre Gefühle durch Farben, Worte oder Gesten aus, die einen Hauch von Frische verleihen. Teilen Sie Ihren Optimismus, denn Ihr aufrichtiges Lächeln hat heute die Kraft, andere mit außergewöhnlich guter Energie anzustecken.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Analysieren Sie Ihre Ideen zu sehr, was Ihren natürlichen Enthusiasmus unnötig dämpfen könnte. Lassen Sie nicht zu, dass der Pessimismus Ihrer Umgebung Ihren inneren Glanz, der heute außergewöhnlich stark strahlt, auslöscht.",
      "s": "Schaffen Sie, weil die Welt es braucht",
      "fun": "Deine Energie ist heute so sonnig, dass sogar die Blume am Fenster sich dir zuzuwenden scheint, auf der Suche nach dem Glanz."
    },
    "8-13": {
      "z": "Löwe",
      "l": 4,
      "e": "Nummer vier erinnert uns daran, dass Stabilität die Poesie spezifischer Maßnahmen ist, die Zeit und Systematik erfordern. Der Aufbau dauerhafter Grundlagen für Ihre Träume ist ein Prozess, der nun erste greifbare Ergebnisse bringt.",
      "r": "Konzentrieren Sie sich auf Regelmäßigkeit und erledigen Sie Aufgaben, die eine zuverlässige und geduldige Vorgehensweise erfordern. Achten Sie auf die Struktur Ihres Tages, um ein Gefühl der vollständigen Kontrolle über Ihre eigene Realität zu erlangen.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Plötzliche und unüberlegte Veränderungen, die Ihr Sicherheitsgefühl unnötig stören könnten. Geben Sie dem Chaos nicht nach, denn Ordnung und Zuverlässigkeit sind heute Ihre besten spirituellen Verbündeten.",
      "s": "Kleine Schritte, bleibende Spuren",
      "fun": "Ihre Arbeitsorganisation ist heute so perfekt, dass sogar die Zeit genau nach Ihrem Zeitplan zu verlaufen scheint."
    },
    "8-14": {
      "z": "Löwe",
      "l": 5,
      "e": "Five bringt einen belebenden Wind des Wandels mit sich, der den Duft von Freiheit und neuen, aufregenden Möglichkeiten mit sich bringt. Wagen Sie es, über die üblichen Muster hinauszugehen, denn im Unbekannten liegt heute das größte Potenzial für Ihre Entwicklung.",
      "r": "Nehmen Sie sich bietende Reisemöglichkeiten an oder ändern Sie spontan Ihre aktuellen Pläne. Treffen Sie neue Bekanntschaften, die Ihre derzeitige Sicht auf die Welt um Sie herum völlig verändern können.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Monotonie und Angst vor dem, was Ihnen neu und noch nicht ganz vertraut ist. Halten Sie sich nicht an eine Routine, die Ihr natürliches Bedürfnis nach Freiheit und Expansion unnötig einschränkt.",
      "s": "Jede Veränderung ist eine Einladung",
      "fun": "Ihre Spontaneität ist heute so groß, dass ein Spaziergang am Ende vielleicht dazu führt, dass Sie Tickets ans andere Ende der Welt buchen."
    },
    "8-15": {
      "z": "Löwe",
      "l": 6,
      "e": "The Six lädt Sie ein, eine Oase der Harmonie zu schaffen, in der Liebe und Fürsorge für Ihre Lieben zu den höchsten Werten des Tages werden. Heute werden Ihr Zuhause und Ihre Beziehungen zu Menschen zu einer Quelle außergewöhnlicher Stärke und inneren Friedens.",
      "r": "Schaffen Sie in Ihrer Umgebung eine Atmosphäre voller Wärme und achten Sie auf kleine Gesten selbstloser Freundlichkeit. Konzentrieren Sie sich darauf, Bindungen zu pflegen, die Ihnen das Gefühl geben, geliebt, gebraucht und vollständig akzeptiert zu werden.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Übernehmen Sie Verantwortung für die Entscheidungen anderer Menschen, was Ihr Herz unnötig belasten könnte. Vermeiden Sie Perfektionismus, der Ihnen die Freude an der natürlichen Schönheit einfacher, unvollkommener Momente nimmt.",
      "s": "Fürsorge verändert alles",
      "fun": "Du bist heute so ein Fürsorger, dass sogar die Katze genau im Rhythmus deines Herzens zu schnurren scheint."
    },
    "8-16": {
      "z": "Löwe",
      "l": 7,
      "e": "Sieben ist eine Zeit tiefer Selbstbeobachtung, in der Stille zu Ihrem treuesten Lehrer der Lebensweisheit wird. Wenn Sie äußere Reize zum Schweigen bringen, können Sie die Antworten hören, nach denen Sie in der Außenwelt schon lange erfolglos gesucht haben.",
      "r": "Finden Sie einen Moment zum Meditieren oder zum ruhigen Lesen, der Ihr Interieur mit neuen Werten bereichert. Vertrauen Sie Ihrer Intuition, denn ihre Stimme ist heute außergewöhnlich klar, klar und frei von Rauschen.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Lärm und oberflächliche Ablenkungen, die Ihre Aufmerksamkeit ablenken und die in der Stille entstandene Ordnung zerstören können. Haben Sie keine Angst vor Fragen nach dem Sinn Ihres eigenen Weges, denn die Konfrontation mit ihnen bringt wahre, spirituelle Befreiung.",
      "s": "Tiefer als du sehen kannst",
      "fun": "Ihre geheimnisvolle Aura lässt Ihre Lieben sich fragen, ob Sie nicht gerade die Antwort auf alle Rätsel des Universums gefunden haben."
    },
    "8-17": {
      "z": "Löwe",
      "l": 8,
      "e": "Acht ist die Energie der Manifestation von Stärke, die es Ihnen ermöglicht, Ihre finanzielle und berufliche Situation wirklich zu beeinflussen. Heute wird Ihre Entschlossenheit durch eine außergewöhnliche Entscheidungsfreiheit unterstützt, die Sie bei allem, was Sie tun, äußerst effektiv macht.",
      "r": "Gehen Sie konkrete Schritte zur Verwirklichung Ihrer Ambitionen ein und vertrauen Sie der über die Jahre gewachsenen Autorität. Bauen Sie Ihren Reichtum auf der Grundlage von Ehrlichkeit auf, die Ihnen dauerhafte und zufriedenstellende Ergebnisse für die Zukunft bescheren wird.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Entscheidungen unter dem Einfluss der Angst vor Mangel treffen, anstatt Kraft aus dem Selbstwertgefühl zu schöpfen. Hüten Sie sich vor Arroganz und denken Sie daran, dass wahre Macht nicht schreien muss, um voll wahrgenommen zu werden.",
      "s": "Man baut – und es bleibt",
      "fun": "Heute sehen Sie aus wie ein Anführer, der selbst die größten Widrigkeiten und bürokratischen Hürden meistert."
    },
    "8-18": {
      "z": "Löwe",
      "l": 9,
      "e": "Neun erinnert Sie daran, dass Weisheit in der Fähigkeit liegt, Phasen zu schließen, die Ihrem Wachstum nicht mehr dienen. Dies ist eine Zeit großer Transformation, die Sie darauf vorbereitet, völlig neue, faszinierende Impulse des Schicksals anzunehmen.",
      "r": "Verzeihen Sie alte Traumata und lassen Sie alles los, was Ihre natürliche, innere Freiheit blockiert. Danken Sie der Vergangenheit für all die Lektionen und betrachten Sie sie als wertvollen Treibstoff für Ihren weiteren, schönen Lebensweg.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Halten Sie an dem fest, was bereits verschwunden ist, weil es Ihren natürlichen Wiedergeburtsprozess blockiert. Geben Sie nicht der Traurigkeit nach, denn jedes Ende ist das Versprechen einer neuen, wunderbaren und sonnendurchfluteten Morgendämmerung.",
      "s": "Weisheit tut weh, bevor sie untergeht",
      "fun": "Heute führen Sie eine solche emotionale Aufräumaktion durch, dass selbst alte E-Mails in Ihrem Posteingang darum bitten, ordnungsgemäß in den Papierkorb verschoben zu werden."
    },
    "8-19": {
      "z": "Löwe",
      "l": 1,
      "e": "Man entfacht den Funken Initiative und ermutigt Sie, in der vollen Pracht Ihrer eigenen unentdeckten Möglichkeiten zu stehen. Dies ist der Tag, an dem jeder Ihrer mutigen Gedanken die Kraft hat, der Beginn einer neuen, außergewöhnlichen Geschichte zu werden.",
      "r": "Zeigen Sie Unabhängigkeit und gehen Sie das Risiko ein, Ihre eigene, mutige Idee umzusetzen. Vertrauen Sie Ihrer Durchbruchskraft und seien Sie der Erste, der heute ohne zu zögern an Ihren Sieg glaubt.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Schauen Sie auf andere und warten Sie auf ihre Zustimmung, denn Sie sind heute der einzige Kapitän Ihres Schiffes. Zögern Sie nicht, Maßnahmen zu ergreifen, denn die heutige Energie begünstigt diejenigen, die mutig und entschlossen voranschreiten.",
      "s": "Fangen Sie an – der Rest kommt",
      "fun": "Ihre Begeisterung ist heute so groß, dass Sie eine neue Mode starten könnten, indem Sie einfach nur einen Schuh zur Arbeit tragen."
    },
    "8-20": {
      "z": "Löwe",
      "l": 2,
      "e": "Zwei lehrt uns, dass die größte Stärke oft in Sanftmut und der Fähigkeit liegt, harmonische Beziehungen aufzubauen. Heute wird Ihre Diplomatie zum Schlüssel, der Ihnen die Tür zu den Herzen der Menschen öffnet, die für Ihre Entwicklung wichtig sind.",
      "r": "Suchen Sie nach Verständnis und bauen Sie Brücken, wo bisher Distanz oder unnötige Spannungen herrschten. Pflegen Sie die Zusammenarbeit und schätzen Sie kleine Gesten, die ein Gemeinschaftsgefühl und gegenseitiges Vertrauen schaffen.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Konkurrenz und Konflikte, die die fragile Atmosphäre der heutigen lauwarmen Harmonie zerstören könnten. Scheuen Sie sich nicht, um Unterstützung zu bitten, denn die Zusammenarbeit wird Ihnen heute viel mehr Vorteile bringen, als wenn Sie alleine kämpfen.",
      "s": "Zwei Seelen, eine Harmonie",
      "fun": "Heute reagieren Sie so sensibel auf die Stimmungen anderer, dass Sie die Bedürfnisse Ihrer Lieben verstehen, ohne ein einziges Wort zu gebrauchen."
    },
    "8-21": {
      "z": "Löwe",
      "l": 3,
      "e": "Das Trio bringt heute die Energie des freudigen Ausdrucks mit, die den gewöhnlichen Alltag in eine farbenfrohe Geschichte voller Inspiration verwandelt. Lassen Sie Ihrer Kreativität freien Lauf und scheuen Sie sich nicht, Ihren Optimismus mit allen zu teilen, denen Sie auf Ihrem Weg begegnen.",
      "r": "Drücken Sie sich durch Kunst, Worte oder einfach durch ein aufrichtiges Lächeln einer anderen Person aus. Lassen Sie sich von der Leidenschaft des Schaffens mitreißen, denn Ihrer Fantasie sind heute keine Grenzen gesetzt.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Machen Sie sich im Vorfeld Gedanken und analysieren Sie Sachverhalte, auf die Sie heute sowieso keinen wirklichen Einfluss haben. Unterdrücken Sie Ihre freudige Natur nicht aus Angst, von anderen Menschen beurteilt zu werden.",
      "s": "Schaffen Sie, weil die Welt es braucht",
      "fun": "Ihre Energie ist heute so ansteckend, dass sogar die Sonne speziell für Ihre Ideen zu scheinen scheint."
    },
    "8-22": {
      "z": "Löwe",
      "l": 4,
      "e": "Nummer vier erinnert uns an den Wert solider Grundlagen, auf denen wir ein Gefühl unserer eigenen Sicherheit und Stabilität im Leben aufbauen. Ihre Regelmäßigkeit wird heute geschätzt und bringt Ihnen Frieden und Zufriedenheit mit einer gut erledigten Arbeit.",
      "r": "Konzentrieren Sie sich darauf, die begonnenen Projekte abzuschließen und sorgen Sie dafür, dass Ihre unmittelbare Umgebung in perfekter Ordnung bleibt. Bauen Sie Ihre Zukunft Schritt für Schritt auf und vertrauen Sie darauf, dass jede kleine Aktion Sie dem Erfolg näher bringt.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Chaos und die gleichzeitige Bewältigung zu vieler Herausforderungen, die Ihre Aufmerksamkeit unnötig ablenken könnten. Ignorieren Sie nicht die Regeln, die Ihre Stabilität schützen und Ihnen helfen, die Kontrolle über die Realität zu behalten.",
      "s": "Kleine Schritte, bleibende Spuren",
      "fun": "Ihre Liebe zur Ordnung führt heute dazu, dass selbst die Büroklammern auf Ihrem Schreibtisch in perfekten Reihen angeordnet sind."
    },
    "8-23": {
      "z": "Jungfrau",
      "l": 5,
      "e": "Five bringt einen belebenden Hauch von Freiheit und ermutigt Sie, die sichere, aber manchmal zu vorhersehbare Komfortzone zu verlassen. Dies ist der perfekte Tag, um eine Veränderung zu wagen, die neue, anregende Energie in Ihren Alltag bringt.",
      "r": "Seien Sie offen für spontane Vorschläge und gönnen Sie sich ein kleines Abenteuer, das Ihren Geist erfrischt. Gehen Sie ein Risiko ein und prüfen Sie die neuen Entwicklungsmöglichkeiten, die sich heute am Horizont abzeichnen.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Monotonie und Stagnation können für Sie frustrierend sein und Ihre Vitalität unnötig rauben. Haben Sie keine Angst, alte Muster aufzugeben, denn Ihr Wachstumspotenzial liegt in der Veränderung.",
      "s": "Jede Veränderung ist eine Einladung",
      "fun": "Ihr Bedürfnis nach Freiheit ist heute so groß, dass aus dem Eisessen ein spontaner Ausflug werden kann."
    },
    "8-24": {
      "z": "Jungfrau",
      "l": 6,
      "e": "Six lädt Sie in die Welt der Harmonie ein, in der Liebe, Fürsorge und Schönheit die wichtigsten Wegweiser für Ihr Herz sind. Stellen Sie sicher, dass Ihre Handlungen direkt von innen kommen und Ihnen und allen Ihren Lieben Trost spenden.",
      "r": "Schaffen Sie eine warme Atmosphäre in Ihrem Zuhause und verbringen Sie Zeit mit den Menschen, die Ihnen am wichtigsten sind. Konzentrieren Sie sich darauf, schöne Momente zu schaffen, die Ihre Bindungen stärken und Ihnen ein Gefühl der Sicherheit geben.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Zu viele Probleme anderer Menschen auf sich nehmen, denn jeder muss seinen eigenen Lebensweg gehen. Suchen Sie nicht nach Perfektion, bei der nur Ihre aufrichtige Anwesenheit und ein freundliches Wort ausreichen.",
      "s": "Fürsorge verändert alles",
      "fun": "Ihre fürsorgliche Aura ist heute so stark, dass sich sogar Ihre Topfblumen besonders verwöhnt fühlen."
    },
    "8-25": {
      "z": "Jungfrau",
      "l": 7,
      "e": "Sieben ist eine Zeit tiefer Selbstbeobachtung, in der Stille zu Ihrem treuesten Lehrer der Lebensweisheit wird. Wenn Sie äußere Reize zum Schweigen bringen, können Sie in der Außenwelt die Antworten hören, nach denen Sie schon lange gesucht haben.",
      "r": "Finden Sie einen Moment zum Meditieren oder zum ruhigen Lesen, der Ihr Interieur bereichert und Ihnen Seelenfrieden bringt. Vertrauen Sie Ihrer Intuition, denn ihre Stimme ist heute außergewöhnlich rein, klar und vertrauenswürdig.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Lärm und oberflächliche Ablenkungen, die Ihre Aufmerksamkeit ablenken und die in der Stille entstandene Ordnung zerstören können. Haben Sie keine Angst vor Fragen nach dem Sinn Ihres eigenen Weges, denn die Konfrontation mit ihnen bringt wahre Befreiung.",
      "s": "Tiefer als du sehen kannst",
      "fun": "Heute sind Sie wie unsere liebste weise Eule – Sie beobachten die Welt aus der Ferne und wissen viel mehr, als Sie sagen."
    },
    "8-26": {
      "z": "Jungfrau",
      "l": 8,
      "e": "Acht ruft Sie dazu auf, Charakterstärke und Mut im Umgang mit Ihren eigenen Ressourcen und Ihrer Lebensenergie zu zeigen. Heute befindet sich Ihre Agentur auf dem höchsten Niveau, das es Ihnen ermöglicht, auch die komplexesten Projekte erfolgreich abzuschließen.",
      "r": "Ergreifen Sie in beruflichen Angelegenheiten die Initiative und scheuen Sie sich nicht, nach den Belohnungen und der öffentlichen Anerkennung zu greifen, die Sie verdienen. Bauen Sie Ihre Autorität auf der Grundlage der Ehrlichkeit auf, die schon immer Ihre größte Stärke war und bleiben wird.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Treffen Sie Entscheidungen in Eile oder unter dem Einfluss negativer Emotionen, die Ihr Urteilsvermögen vorübergehend trüben könnten. Vermeiden Sie Arroganz und denken Sie daran, dass wahre Macht aus Ruhe und Selbstvertrauen resultiert.",
      "s": "Man baut – und es bleibt",
      "fun": "Heute sehen Sie aus wie ein Anführer, der selbst die größten Widrigkeiten und bürokratischen Hürden meistert."
    },
    "8-27": {
      "z": "Jungfrau",
      "l": 9,
      "e": "Die Neun erinnern Sie daran, dass Weisheit in der Fähigkeit liegt, Etappen abzuschließen, die ihren Zweck auf Ihrer Reise bereits erfüllt haben. Dies ist eine Zeit großer Transformation, die Sie darauf vorbereitet, völlig neue, faszinierende Impulse des Schicksals anzunehmen.",
      "r": "Verzeihen Sie vergangene Verletzungen und danken Sie der Vergangenheit für all die Lektionen, die Sie zu einem so bewussten Menschen gemacht haben. Nehmen Sie sich einen Moment Zeit, um Ihre bisherigen Erfolge zusammenzufassen und lassen Sie dankbar los, was Ihnen nicht mehr dient.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Klammern Sie sich nicht an Dingen, die Ihre Entwicklung nicht mehr unterstützen, sondern öffnen Sie Ihre Hände, um neue Gaben anzunehmen. Vermeiden Sie es, traurig zu sein, wenn etwas verschwindet, denn jede Veränderung ist ein Versprechen auf eine bessere und klügere Zukunft.",
      "s": "Weisheit tut weh, bevor sie untergeht",
      "fun": "Heute sind Sie mit der emotionalen Reinigung so beschäftigt, dass selbst alte Quittungen in Ihrem Portemonnaie nach einer ordnungsgemäßen Entsorgung verlangen."
    },
    "8-28": {
      "z": "Jungfrau",
      "l": 1,
      "e": "Man entfacht den Funken einer neuen Initiative und ermutigt Sie, im vollen Glanz Ihrer eigenen Möglichkeiten und Träume zu stehen. Dies ist der Tag, an dem jeder Ihrer mutigen Gedanken die Kraft hat, der Beginn einer neuen, außergewöhnlichen Geschichte zu werden.",
      "r": "Zeigen Sie Unabhängigkeit und gehen Sie das Risiko ein, Ihre eigene, mutige Idee umzusetzen. Vertrauen Sie Ihrer Durchbruchskraft und seien Sie der Erste, der heute ohne zu zögern an Ihren Sieg glaubt.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Beobachten Sie die Meinungen anderer und warten Sie auf deren Zustimmung, denn Sie sind der einzige Kapitän Ihres Schiffes. Zögern Sie nicht, Maßnahmen zu ergreifen, denn die heutige Energie begünstigt diejenigen, die mutig und entschlossen voranschreiten.",
      "s": "Fangen Sie an – der Rest kommt",
      "fun": "Ihre Begeisterung ist heute so groß, dass Sie eine neue Mode starten könnten, indem Sie einfach nur einen Schuh zur Arbeit tragen."
    },
    "8-29": {
      "z": "Jungfrau",
      "l": 2,
      "e": "Zwei lehrt uns, dass die größte Stärke oft in Sanftmut und der Fähigkeit liegt, harmonische Beziehungen aufzubauen. Heute wird Ihre Diplomatie zum Schlüssel, der die Tür zu den Herzen der Menschen öffnet, die für Ihren Frieden wichtig sind.",
      "r": "Suchen Sie nach Verständnis und bauen Sie Brücken, wo bisher Distanz oder unnötige Spannungen herrschten. Pflegen Sie die Zusammenarbeit und schätzen Sie kleine Gesten, die ein Gemeinschaftsgefühl und gegenseitiges Vertrauen schaffen.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Rivalitäten und Konflikte, die die fragile Atmosphäre der heutigen Harmonie zerstören könnten. Scheuen Sie sich nicht, um Unterstützung zu bitten, denn die Zusammenarbeit wird Ihnen heute viel mehr Vorteile bringen, als wenn Sie alleine kämpfen.",
      "s": "Zwei Seelen, eine Harmonie",
      "fun": "Heute reagieren Sie so sensibel auf die Stimmungen anderer, dass Sie die Bedürfnisse Ihrer Lieben verstehen, ohne ein einziges Wort zu gebrauchen."
    },
    "8-30": {
      "z": "Jungfrau",
      "l": 3,
      "e": "Das Trio bringt einen fröhlichen Tanz der Kreativität mit, der den vorletzten Tag des Monats in ein faszinierendes Abenteuer voller neuer Farben verwandelt. Erlauben Sie sich zu lachen, denn gute Energie ist der beste Treibstoff für Ihre Seele und Ihre kreativen Aktivitäten.",
      "r": "Drücken Sie sich durch Kunst, Worte oder ein freudiges Gespräch mit jemandem aus, der heute Unterstützung braucht. Teilen Sie Ihren Optimismus und inspirieren Sie andere, die Schönheit in den kleinsten Details der August-Realität zu erkennen.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Übermäßige Ernsthaftigkeit und Sorge um Angelegenheiten, auf die Sie heute keinen wirklichen Einfluss haben. Unterdrücken Sie nicht Ihre kreative Natur und lassen Sie sie bei jeder Aktion, die Sie heute unternehmen, frei entfalten.",
      "s": "Schaffen Sie, weil die Welt es braucht",
      "fun": "Ihre Dosis sauberer Energie ist heute so groß, dass Sie den gesamten Bereich erhellen könnten, wenn Sie nur den Raum betreten."
    },
    "8-31": {
      "z": "Jungfrau",
      "l": 4,
      "e": "Four schließt den August in einem Ton der Stabilität ab und erinnert uns an den Wert einer soliden Grundlage für den kommenden Herbst. Ihre Regelmäßigkeit heute wird Ihnen den ganzen Monat über Frieden und große Zufriedenheit mit sorgfältig organisierten Angelegenheiten bringen.",
      "r": "Konzentrieren Sie sich auf den Abschluss von Projekten und stellen Sie sicher, dass die Angelegenheiten, die Ihre letzte Aufmerksamkeit erfordern, in perfekter Ordnung sind. Bauen Sie Ihre Zukunft mit Geduld auf und wissen Sie, dass solide Arbeit immer die nachhaltigsten und schönsten Früchte bringt.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Plötzliche und unüberlegte Planänderungen, die Ihre bestehende Ordnung unnötig stören könnten. Erliegen Sie nicht dem Chaos der letzten Urlaubstage, sondern halten Sie sich an den vorgegebenen Zeitplan.",
      "s": "Kleine Schritte, bleibende Spuren",
      "fun": "Ihre Liebe zur Ordnung führt heute dazu, dass sogar die Büroklammern auf Ihrem Schreibtisch in perfekt gleichmäßigen, alphabetischen Reihen angeordnet sind."
    },
    "9-1": {
      "z": "Jungfrau",
      "l": 2,
      "e": "Zu Beginn des Schuljahres bringt das Paar die Energie der Sanftmut und Kooperation mit, die den Stress, der mit neuen Verantwortlichkeiten verbunden ist, perfekt lindert. Dies ist die Zeit, in der Ihre Intuition zu einem sensiblen Leitfaden wird, der Ihnen hilft, in jeder neuen Umgebung Brücken des Verständnisses zu bauen.",
      "r": "Suchen Sie nach Gemeinsamkeiten in Beziehungen und pflegen Sie einen Dialog, der auf gegenseitigem Vertrauen basiert. Gönnen Sie sich Empathie, die die Herzen der Menschen öffnet, die heute Unterstützung und Verständnis brauchen.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Konkurrenz und Durchsetzung des eigenen Willens, die die fragile Atmosphäre der heutigen Harmonie unnötig zerstören könnten. Isolieren Sie sich nicht von der Gruppe, denn in der Zusammenarbeit finden Sie heute die größte Kraft.",
      "s": "Sanftmut ist Stärke",
      "fun": "Heute reagieren Sie so sensibel auf die Stimmungen anderer, dass Sie genau wissen, wer sein zweites Frühstück vergessen hat, noch bevor er es selbst spürt."
    },
    "9-2": {
      "z": "Jungfrau",
      "l": 3,
      "e": "Three ist ein fröhlicher Tanz der Kreativität, der die ersten Tage nach den Feiertagen in ein inspirierendes Abenteuer voller neuer Farben verwandelt. Lassen Sie Ihrer Fantasie keine Grenzen und scheuen Sie sich nicht, Ihren natürlichen Optimismus mit jedem zu teilen, den Sie treffen.",
      "r": "Drücken Sie sich durch Kunst, Worte oder einfach durch ein aufrichtiges Lächeln einer anderen Person aus. Lassen Sie sich von der Leidenschaft für die Schöpfung mitreißen, denn heute hat Ihr Ausdruck die Kraft, selbst den grausten Alltag zu erhellen.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Machen Sie sich im Vorfeld Gedanken und analysieren Sie Sachverhalte, auf die Sie heute sowieso keinen wirklichen Einfluss haben. Unterdrücken Sie nicht Ihre freudige Natur, aus Angst davor, von Menschen beurteilt zu werden, die vergessen haben, den Moment zu genießen.",
      "s": "Einfacher bedeutet weiter",
      "fun": "Ihre Energiedosis ist heute so groß, dass Sie die Sonne ersetzen könnten, wenn sie sich nur hinter den Wolken verstecken würde."
    },
    "9-3": {
      "z": "Jungfrau",
      "l": 4,
      "e": "Four erinnert uns an den Wert einer soliden Grundlage, auf der wir in der neuen Saison ein Gefühl der Sicherheit aufbauen. Ihre Regelmäßigkeit wird heute geschätzt und bringt Ihnen tiefen Frieden und Zufriedenheit durch sorgfältig organisierte Angelegenheiten.",
      "r": "Konzentrieren Sie sich auf die Fertigstellung der begonnenen Projekte und sorgen Sie für vorbildliche Ordnung in Ihrer unmittelbaren Umgebung. Bauen Sie Ihre Zukunft Schritt für Schritt auf und wissen Sie, dass jede kleine Aktion Sie Ihrem dauerhaften Erfolg näher bringt.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Chaos und die gleichzeitige Bewältigung zu vieler Herausforderungen, die Ihre wertvolle Aufmerksamkeit unnötig ablenken könnten. Ignorieren Sie nicht die Regeln und Verfahren, die Ihre Stabilität schützen und Ihnen helfen, die Kontrolle über die Realität zu behalten.",
      "s": "Solidität ist Poesie",
      "fun": "Ihre Liebe zur Ordnung führt heute dazu, dass auch die Stifte in Ihrem Federmäppchen je nach Nutzungsgrad der Mine in perfekten Reihen angeordnet sind."
    },
    "9-4": {
      "z": "Jungfrau",
      "l": 5,
      "e": "Five bringt einen belebenden Hauch von Freiheit und ermutigt Sie, über den Rahmen alltäglicher, manchmal zu enger Muster hinauszugehen. Dies ist der perfekte Tag, um eine Veränderung zu wagen, die neue, anregende Energie in Ihren Alltag bringt.",
      "r": "Seien Sie offen für spontane Vorschläge und gönnen Sie sich ein kleines Abenteuer, das Ihren Geist erfrischt. Gehen Sie ein Risiko ein und prüfen Sie die neuen Entwicklungsmöglichkeiten, die sich Ihnen heute bieten.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Monotonie und Stagnation können für Sie frustrierend sein und Ihre Vitalität unnötig rauben. Haben Sie keine Angst davor, alte Gewohnheiten aufzugeben, denn in der Veränderung liegt Ihr größtes Wachstumspotenzial.",
      "s": "Freiheit ist eine Entscheidung",
      "fun": "Ihr Bedürfnis nach Freiheit ist heute so groß, dass der Gang in den Laden ungewollt zu einer langen Reise ins Ungewisse werden kann."
    },
    "9-5": {
      "z": "Jungfrau",
      "l": 6,
      "e": "The Six lädt Sie in die Welt der Harmonie ein, in der Liebe und Fürsorge für Ihre Lieben zu Ihrem wichtigsten Leitfaden werden. Stellen Sie sicher, dass Ihre Taten direkt von Herzen kommen und Ihnen und allen in Ihrem Haushalt Trost spenden.",
      "r": "Schaffen Sie eine warme Atmosphäre in Ihrem Zuhause und verbringen Sie wertvolle Zeit mit Menschen, die Sie wirklich lieben. Konzentrieren Sie sich darauf, schöne Momente zu schaffen, die Ihre Bindungen stärken und Ihnen ein Gefühl tiefer Sicherheit geben.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Die Probleme zu vieler anderer auf sich nehmen, weil jeder seinen eigenen Weg gehen muss. Suchen Sie nicht nach Perfektion, wenn ehrliche Präsenz und ein freundliches, unterstützendes Wort ausreichen.",
      "s": "Schönheit ist ein Akt des Mutes",
      "fun": "Ihre schützende Aura ist heute so stark, dass sogar Ihre Zimmerpflanzen vor Zufriedenheit zu schnurren scheinen."
    },
    "9-6": {
      "z": "Jungfrau",
      "l": 7,
      "e": "Sieben ist eine Zeit tiefer Selbstbeobachtung, in der Stille zu Ihrem treuesten Lehrer der Lebensweisheit wird. Wenn Sie äußere Reize zum Schweigen bringen, können Sie in der Außenwelt die Antworten hören, nach denen Sie schon lange gesucht haben.",
      "r": "Finden Sie einen Moment zum Meditieren oder zum ruhigen Lesen, der Ihr Interieur bereichert und Ihnen Seelenfrieden bringt. Vertrauen Sie Ihrer Intuition, denn ihre Stimme ist heute außergewöhnlich rein, klar und verdient volles Vertrauen.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Lärm und oberflächliche Ablenkungen, die Ihre Aufmerksamkeit ablenken und die in der Stille entstandene Ordnung zerstören können. Haben Sie keine Angst vor Fragen nach dem Sinn Ihres eigenen Weges, denn die Konfrontation mit ihnen bringt wahre Befreiung und Entwicklung.",
      "s": "Die Frage ist wichtiger als die Antwort",
      "fun": "Heute sind Sie wie eine weise Eule – Sie beobachten die Welt aus der Ferne und wissen viel mehr über sie, als Sie sagen wollen."
    },
    "9-7": {
      "z": "Jungfrau",
      "l": 8,
      "e": "Acht ruft Sie dazu auf, Charakterstärke und Mut im Umgang mit Ihren eigenen Ressourcen und Ihrer Lebensenergie zu zeigen. Ihre Agentur befindet sich nun auf dem höchsten Niveau, das es Ihnen ermöglicht, auch die komplexesten Projekte erfolgreich abzuschließen.",
      "r": "Ergreifen Sie mutige Initiativen in beruflichen Angelegenheiten und scheuen Sie sich nicht, nach der Anerkennung und dem Erfolg zu streben, die Sie verdienen. Bauen Sie Ihre Autorität auf der Grundlage von Ehrlichkeit auf, denn nur zuverlässiges Handeln führt zu dauerhaften und würdigen Ergebnissen.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Treffen Sie Entscheidungen in Eile oder unter dem Einfluss negativer Emotionen, die Ihr Urteilsvermögen vorübergehend trüben könnten. Hüten Sie sich vor Arroganz und denken Sie daran, dass wahre Macht nicht schreien muss, um wahrgenommen zu werden.",
      "s": "Macht dient, nicht dominiert",
      "fun": "Heute sehen Sie aus wie ein Anführer, vor dem selbst die größten Widrigkeiten und Warteschlangen im örtlichen Geschäft weichen."
    },
    "9-8": {
      "z": "Jungfrau",
      "l": 9,
      "e": "Die Neun erinnern Sie daran, dass Weisheit in der Fähigkeit liegt, Etappen abzuschließen, die ihren Zweck auf Ihrer Reise bereits erfüllt haben. Dies ist eine Zeit großer Transformationen, die Sie darauf vorbereitet, völlig neue herbstliche Impulse des Schicksals anzunehmen.",
      "r": "Verzeihen Sie vergangene Verletzungen und danken Sie der Vergangenheit für all die Lektionen, die Sie zu einem so bewussten Menschen gemacht haben. Nehmen Sie sich einen Moment Zeit, um Ihre bisherigen Erfolge zusammenzufassen und lassen Sie dankbar los, was Ihnen nicht mehr dient.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Klammern Sie sich nicht an Dinge, die Ihr Wachstum und Ihr Gefühl des inneren Glücks nicht mehr unterstützen. Vermeiden Sie Traurigkeit, wenn etwas verschwindet, denn jede Veränderung ist ein notwendiges Versprechen auf eine bessere und klügere Zukunft.",
      "s": "Anmutig schließen – dankbar öffnen",
      "fun": "Heutzutage führen Sie eine solche emotionale Aufräumaktion durch, dass selbst alte E-Mails in Ihrem Posteingang darum bitten, ordnungsgemäß in den Papierkorb verschoben zu werden."
    },
    "9-9": {
      "z": "Jungfrau",
      "l": 1,
      "e": "Man entfacht den Funken einer neuen Initiative und ermutigt Sie, im vollen Glanz Ihrer eigenen Möglichkeiten und Träume zu stehen. Dies ist der Tag, an dem jeder Ihrer mutigen Gedanken die Kraft hat, der Beginn einer neuen, außergewöhnlichen Geschichte zu werden.",
      "r": "Zeigen Sie Unabhängigkeit und gehen Sie das Risiko ein, Ihre eigene, mutige Idee umzusetzen. Vertrauen Sie Ihrer Durchbruchskraft und seien Sie der Erste, der heute ohne zu zögern an Ihren Sieg glaubt.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Beobachten Sie die Meinungen anderer und warten Sie auf deren Zustimmung, denn Sie sind heute der einzige Kapitän Ihres Schiffes. Zögern Sie nicht, Maßnahmen zu ergreifen, denn die heutige Energie begünstigt diejenigen, die mutig und entschlossen voranschreiten.",
      "s": "Dein Weg, dein Rhythmus",
      "fun": "Ihre Begeisterung ist heute so groß, dass Sie einen neuen Trend starten könnten, indem Sie einfach in einem Schuh und mit einem breiten Lächeln zur Arbeit gehen."
    },
    "9-10": {
      "z": "Jungfrau",
      "l": 2,
      "e": "Zwei lehrt uns, dass die größte Stärke oft in Sanftmut und der Fähigkeit liegt, harmonische Beziehungen aufzubauen. Heute wird Ihre Diplomatie zum Schlüssel, der die Tür zu den Herzen der Menschen öffnet, die für Ihren Frieden wichtig sind.",
      "r": "Suchen Sie nach Verständnis und bauen Sie Brücken, wo bisher Distanz oder unnötige Spannungen herrschten. Pflegen Sie die Zusammenarbeit und schätzen Sie kleine Gesten, die ein Gemeinschaftsgefühl und gegenseitiges Vertrauen schaffen.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Rivalitäten und Konflikte könnten die fragile Atmosphäre der heutigen September-Harmonie zerstören. Scheuen Sie sich nicht, um Unterstützung zu bitten, denn die Zusammenarbeit wird Ihnen heute viel mehr Vorteile bringen, als wenn Sie alleine kämpfen.",
      "s": "Sanftmut ist Stärke",
      "fun": "Heute reagieren Sie so sensibel auf die Stimmungen anderer, dass Sie die Bedürfnisse Ihrer Lieben verstehen, ohne ein einziges Wort zu gebrauchen."
    },
    "9-11": {
      "z": "Jungfrau",
      "l": 3,
      "e": "Heute bringt die Zahl Drei die Energie des freudigen Ausdrucks mit sich, die es Ihnen ermöglicht, Schönheit in alltäglichen Pflichten zu sehen. Dies ist der perfekte Moment, in dem Ihre Kreativität zu einer Brücke wird, die Ihre Leidenschaften mit der beruflichen Realität verbindet.",
      "r": "Drücken Sie Ihre Gefühle durch kreatives Handeln oder ein inspirierendes Gespräch mit einer anderen Person aus. Teilen Sie Ihren Optimismus, denn Ihre gute Energie hat die Kraft, einzigartige Chancen anzuziehen.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Sorgen Sie sich um Dinge, auf die Sie jetzt keinen wirklichen Einfluss haben. Unterdrücken Sie nicht Ihr inneres Kind, das sich Freude und uneingeschränkten Spaß wünscht.",
      "s": "Einfacher bedeutet weiter",
      "fun": "Ihre Energiedosis ist heute so groß, dass Sie mit nur einem Schritt in den Aufzug das gesamte Bürogebäude erhellen könnten."
    },
    "9-12": {
      "z": "Jungfrau",
      "l": 4,
      "e": "Nummer vier erinnert uns an den Wert solider Grundlagen, auf denen wir unser langfristiges Sicherheitsgefühl aufbauen. Die heutige Regelmäßigkeit wird Ihnen Seelenfrieden und Zufriedenheit mit der zuverlässig und ehrlich erledigten Arbeit bringen.",
      "r": "Konzentrieren Sie sich auf den Abschluss von Projekten und sorgen Sie für perfekte Ordnung in Angelegenheiten, die besondere Aufmerksamkeit erfordern. Bauen Sie Ihre Zukunft Schritt für Schritt auf und wissen Sie, dass Geduld der Schlüssel zu dauerhaftem Erfolg ist.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Chaos und die gleichzeitige Bewältigung zu vieler Herausforderungen, die Ihre Kräfte unnötig zerstreuen könnten. Ignorieren Sie nicht die Regeln, die Ihre Stabilität schützen und Ihnen helfen, die Kontrolle über Ihr Leben zu behalten.",
      "s": "Solidität ist Poesie",
      "fun": "Ihre Liebe zur Ordnung führt heute dazu, dass selbst die Büroklammern auf Ihrem Schreibtisch in perfekten Reihen unter dem Lineal angeordnet sind."
    },
    "9-13": {
      "z": "Jungfrau",
      "l": 5,
      "e": "Five bringt einen belebenden Hauch von Freiheit und ermutigt Sie, die sichere, aber manchmal zu enge Komfortzone zu verlassen. Dies ist der perfekte Tag, um eine Veränderung zu wagen, die neue, anregende Energie in Ihren Alltag bringt.",
      "r": "Seien Sie offen für spontane Vorschläge und gönnen Sie sich ein kleines Abenteuer, das Ihren Geist erfrischt. Gehen Sie ein Risiko ein und prüfen Sie die neuen Entwicklungsmöglichkeiten, die sich Ihnen heute bieten.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Monotonie und Stagnation können für Sie frustrierend sein und Ihre Vitalität unnötig rauben. Haben Sie keine Angst davor, alte Muster aufzugeben, denn in der Veränderung liegt Ihr größtes Wachstumspotenzial.",
      "s": "Freiheit ist eine Entscheidung",
      "fun": "Ihr Bedürfnis nach Freiheit ist heute so groß, dass das Eisessen ungewollt in einem spontanen Ausflug enden kann."
    },
    "9-14": {
      "z": "Jungfrau",
      "l": 6,
      "e": "Six lädt Sie in die Welt der Harmonie ein, in der Liebe, Fürsorge und Schönheit die wichtigsten Wegweiser für das Herz sind. Stellen Sie sicher, dass Ihre Handlungen direkt von innen kommen und Ihnen und allen Ihren Lieben Trost spenden.",
      "r": "Schaffen Sie eine warme Atmosphäre in Ihrem Zuhause und verbringen Sie wertvolle Zeit mit den Menschen, die Ihnen am wichtigsten sind. Konzentrieren Sie sich darauf, die Bindungen zu pflegen, die Ihnen das Gefühl geben, zutiefst sicher und geliebt zu sein.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Zu viele Probleme anderer Menschen auf sich nehmen, denn jeder muss seinen eigenen Lebensweg gehen. Suchen Sie nicht nach Perfektion, wenn ehrliche Präsenz und ein freundliches, unterstützendes Wort ausreichen.",
      "s": "Schönheit ist ein Akt des Mutes",
      "fun": "Ihr Wunsch, sich um die Welt zu kümmern, sorgt dafür, dass sich heute selbst Topfblumen besonders verwöhnt fühlen."
    },
    "9-15": {
      "z": "Jungfrau",
      "l": 7,
      "e": "Sieben ist eine Zeit tiefer Selbstbeobachtung, in der Stille zu Ihrem treuesten Lehrer der Lebensweisheit wird. Wenn Sie äußere Reize zum Schweigen bringen, können Sie in der Außenwelt die Antworten hören, nach denen Sie schon lange gesucht haben.",
      "r": "Finden Sie einen Moment zum Meditieren oder zum ruhigen Lesen, der Ihr Interieur bereichert und Ihnen Seelenfrieden bringt. Vertrauen Sie Ihrer Intuition, denn ihre Stimme ist heute außergewöhnlich rein, klar und vertrauenswürdig.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Lärm und oberflächliche Ablenkungen, die Ihre Aufmerksamkeit ablenken und die in der Stille entstandene Ordnung zerstören können. Haben Sie keine Angst vor Fragen nach dem Sinn Ihres eigenen Weges, denn die Konfrontation mit ihnen bringt wahre Befreiung.",
      "s": "Die Frage ist wichtiger als die Antwort",
      "fun": "Heute bist du wie unsere weise Eule – du beobachtest die Welt aus der Ferne und weißt viel mehr, als du sagst."
    },
    "9-16": {
      "z": "Jungfrau",
      "l": 8,
      "e": "Acht ruft Sie dazu auf, Charakterstärke und Mut im Umgang mit Ihren eigenen Ressourcen und Ihrer Lebensenergie zu zeigen. Heute befindet sich Ihre Agentur auf dem höchsten Niveau, das es Ihnen ermöglicht, auch die komplexesten Projekte erfolgreich abzuschließen.",
      "r": "Ergreifen Sie in beruflichen Angelegenheiten die Initiative und scheuen Sie sich nicht, nach den Belohnungen und der öffentlichen Anerkennung zu greifen, die Sie verdienen. Bauen Sie Ihre Autorität auf den Grundlagen von Ehrlichkeit und Zuverlässigkeit auf, die schon immer Ihre Stärken waren.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Treffen Sie Entscheidungen in Eile oder unter dem Einfluss negativer Emotionen, die Ihr Urteilsvermögen vorübergehend trüben könnten. Vermeiden Sie Arroganz und denken Sie daran, dass wahre Macht aus Ruhe und Selbstvertrauen resultiert.",
      "s": "Macht dient, nicht dominiert",
      "fun": "Heute sehen Sie aus wie ein Anführer, vor dem selbst die größten Widrigkeiten und Warteschlangen im örtlichen Geschäft weichen."
    },
    "9-17": {
      "z": "Jungfrau",
      "l": 9,
      "e": "Die Neun erinnern Sie daran, dass Weisheit in der Fähigkeit liegt, Etappen abzuschließen, die ihren Zweck auf Ihrer Reise bereits erfüllt haben. Dies ist eine Zeit großer Transformation, die Sie darauf vorbereitet, völlig neue, faszinierende Impulse des Schicksals anzunehmen.",
      "r": "Verzeihen Sie vergangene Verletzungen und danken Sie der Vergangenheit für all die Lektionen, die Sie zu einem so bewussten Menschen gemacht haben. Nehmen Sie sich einen Moment Zeit, um Ihre bisherigen Erfolge zusammenzufassen und lassen Sie dankbar los, was Ihnen nicht mehr dient.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Klammern Sie sich nicht an Dingen, die Ihre Entwicklung nicht mehr unterstützen, sondern öffnen Sie Ihre Hände, um neue Geschenke des Schicksals anzunehmen. Vermeiden Sie es, traurig zu sein, wenn etwas verschwindet, denn jede Veränderung ist ein Versprechen auf eine bessere und klügere Zukunft.",
      "s": "Anmutig schließen – dankbar öffnen",
      "fun": "Heute sind Sie mit der emotionalen Reinigung so beschäftigt, dass selbst alte Quittungen in Ihrem Portemonnaie nach einer ordnungsgemäßen Entsorgung verlangen."
    },
    "9-18": {
      "z": "Jungfrau",
      "l": 1,
      "e": "Man entfacht den Funken einer neuen Initiative und ermutigt Sie, im vollen Glanz Ihrer eigenen Möglichkeiten und Träume zu stehen. Dies ist der Tag, an dem jeder Ihrer mutigen Gedanken die Kraft hat, der Beginn einer neuen, außergewöhnlichen Geschichte zu werden.",
      "r": "Zeigen Sie Unabhängigkeit und gehen Sie das Risiko ein, Ihre eigene, mutige Idee umzusetzen. Vertrauen Sie Ihrer Durchbruchskraft und seien Sie der Erste, der heute ohne zu zögern an Ihren Sieg glaubt.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Beobachten Sie die Meinungen anderer und warten Sie auf deren Zustimmung, denn Sie sind der einzige Kapitän Ihres Schiffes. Zögern Sie nicht, Maßnahmen zu ergreifen, denn die heutige Energie begünstigt diejenigen, die mutig und entschlossen voranschreiten.",
      "s": "Dein Weg, dein Rhythmus",
      "fun": "Ihre Begeisterung ist heute so groß, dass Sie eine neue Mode starten könnten, indem Sie einfach nur einen Schuh zur Arbeit tragen."
    },
    "9-19": {
      "z": "Jungfrau",
      "l": 2,
      "e": "Zwei lehrt uns, dass die größte Stärke oft in Sanftmut und der Fähigkeit liegt, harmonische Beziehungen aufzubauen. Heute wird Ihre Diplomatie zum Schlüssel, der die Tür zu den Herzen der Menschen öffnet, die für Ihren Frieden wichtig sind.",
      "r": "Suchen Sie nach Verständnis und bauen Sie Brücken, wo bisher Distanz oder unnötige Spannungen herrschten. Pflegen Sie die Zusammenarbeit und schätzen Sie kleine Gesten, die ein Gemeinschaftsgefühl und gegenseitiges Vertrauen schaffen.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Rivalitäten und Konflikte, die die fragile Atmosphäre der heutigen Harmonie zerstören könnten. Scheuen Sie sich nicht, um Unterstützung zu bitten, denn die Zusammenarbeit wird Ihnen heute viel mehr Vorteile bringen, als wenn Sie alleine kämpfen.",
      "s": "Sanftmut ist Stärke",
      "fun": "Heute reagieren Sie so sensibel auf die Stimmungen anderer, dass Sie die Bedürfnisse Ihrer Lieben verstehen, ohne ein einziges Wort zu gebrauchen."
    },
    "9-20": {
      "z": "Jungfrau",
      "l": 3,
      "e": "Das Trio bringt einen fröhlichen Tanz der Kreativität mit, der das Ende des Jahrzehnts in ein faszinierendes Abenteuer voller neuer Farben verwandelt. Erlauben Sie sich zu lachen, denn gute Energie ist der beste Treibstoff für Ihre Seele und Ihre kreativen Aktivitäten für die nächste Phase des Monats.",
      "r": "Drücken Sie sich durch Kunst, Worte oder ein freudiges Gespräch mit jemandem aus, der heute Unterstützung braucht. Teilen Sie Ihren Optimismus und inspirieren Sie andere, Schönheit in den kleinsten Details der September-Realität zu erkennen.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Übermäßige Ernsthaftigkeit und Sorge um Angelegenheiten, auf die Sie heute keinen wirklichen Einfluss haben. Unterdrücken Sie nicht Ihre kreative Natur und lassen Sie sie bei jeder Aktion, die Sie heute unternehmen, frei entfalten.",
      "s": "Einfacher bedeutet weiter",
      "fun": "Ihre Dosis purer Energie ist heute so groß, dass Sie allein mit Ihrem Lächeln den gesamten Bereich erhellen könnten."
    },
    "9-21": {
      "z": "Jungfrau",
      "l": 4,
      "e": "Nummer vier erinnert uns daran, dass Stabilität die Poesie konkreten Handelns ist, das Systematik und Geduld erfordert. Der Aufbau dauerhafter Grundlagen für Ihre Herbstpläne ist ein Prozess, der nun erste greifbare Ergebnisse bringt.",
      "r": "Konzentrieren Sie sich auf Regelmäßigkeit und erledigen Sie Aufgaben, die eine zuverlässige und geduldige Vorgehensweise erfordern. Achten Sie auf die Struktur Ihres Tages, um ein Gefühl der vollständigen Kontrolle über Ihre eigene Realität zu erlangen.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Plötzliche und unüberlegte Veränderungen, die Ihr Sicherheitsgefühl unnötig stören könnten. Geben Sie dem Chaos nicht nach, denn Ordnung und Zuverlässigkeit sind heute Ihre besten Verbündeten.",
      "s": "Solidität ist Poesie",
      "fun": "Ihre Liebe zur Ordnung führt heute dazu, dass selbst die Büroklammern auf Ihrem Schreibtisch in perfekten Reihen unter dem Lineal angeordnet sind."
    },
    "9-22": {
      "z": "Jungfrau",
      "l": 5,
      "e": "Five bringt einen belebenden Hauch von Freiheit und ermutigt Sie, die sichere, aber manchmal zu vorhersehbare Komfortzone zu verlassen. Dies ist der perfekte Tag, um eine Veränderung zu wagen, die neue, anregende Energie in Ihren Alltag bringt.",
      "r": "Seien Sie offen für spontane Vorschläge und gönnen Sie sich ein kleines Abenteuer, das Ihren Geist erfrischt. Gehen Sie ein Risiko ein und prüfen Sie die neuen Entwicklungsmöglichkeiten, die sich heute am Horizont abzeichnen.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Vermeiden Sie Langeweile und Stagnation, die Sie frustrieren und Ihre Vitalität beeinträchtigen können. Haben Sie keine Angst davor, alte Muster aufzugeben, denn in der Veränderung liegt Ihr größtes Wachstumspotenzial.",
      "s": "Freiheit ist eine Entscheidung",
      "fun": "Ihr Bedürfnis nach Freiheit ist heute so groß, dass ein Spaziergang ungewollt zu einem spontanen Ausflug werden kann."
    },
    "9-23": {
      "z": "Waage",
      "l": 6,
      "e": "Am Tag der Herbst-Tagundnachtgleiche lädt Nummer Sechs Sie in die Welt der Harmonie ein, in der Liebe und Fürsorge die wichtigsten Wegweiser sind. Stellen Sie sicher, dass Ihre Taten Ihnen und Ihren Lieben Trost spenden und eine Oase der Wärme in Ihrem Zuhause schaffen.",
      "r": "Schaffen Sie eine warme Atmosphäre in Ihrer Umgebung und verbringen Sie wertvolle Zeit mit den Menschen, die Ihnen am wichtigsten sind. Konzentrieren Sie sich darauf, die Bindungen zu pflegen, die Ihnen das Gefühl geben, zutiefst sicher und geliebt zu sein.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Zu viele Probleme anderer Menschen auf sich nehmen, denn jeder muss seinen eigenen Lebensweg gehen. Suchen Sie nicht nach Perfektion, wenn ehrliche Präsenz und ein freundliches, unterstützendes Wort ausreichen.",
      "s": "Schönheit ist ein Akt des Mutes",
      "fun": "Ihr Wunsch, sich um die Welt zu kümmern, sorgt dafür, dass sich heute selbst Topfblumen besonders verwöhnt fühlen."
    },
    "9-24": {
      "z": "Waage",
      "l": 7,
      "e": "Sieben ist eine Zeit tiefer Selbstbeobachtung, in der Stille zu Ihrem treuesten Lehrer der Lebensweisheit wird. Wenn Sie äußere Reize zum Schweigen bringen, können Sie in der Außenwelt die Antworten hören, nach denen Sie schon lange gesucht haben.",
      "r": "Finden Sie einen Moment zum Meditieren oder zum ruhigen Lesen, der Ihr Interieur bereichert und Ihnen Seelenfrieden bringt. Vertrauen Sie Ihrer Intuition, denn ihre Stimme ist heute außergewöhnlich rein, klar und vertrauenswürdig.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Lärm und oberflächliche Ablenkungen, die Ihre Aufmerksamkeit ablenken und die in der Stille entstandene Ordnung zerstören können. Haben Sie keine Angst vor Fragen nach dem Sinn Ihres eigenen Weges, denn die Konfrontation mit ihnen bringt wahre Befreiung.",
      "s": "Die Frage ist wichtiger als die Antwort",
      "fun": "Heute bist du wie unsere weise Eule – du beobachtest die Welt aus der Ferne und weißt viel mehr, als du sagst."
    },
    "9-25": {
      "z": "Waage",
      "l": 8,
      "e": "Acht ruft Sie dazu auf, Charakterstärke und Mut im Umgang mit Ihren eigenen Ressourcen und Ihrer Lebensenergie zu zeigen. Heute befindet sich Ihre Agentur auf dem höchsten Niveau, das es Ihnen ermöglicht, auch die komplexesten Projekte erfolgreich abzuschließen.",
      "r": "Ergreifen Sie in beruflichen Angelegenheiten die Initiative und scheuen Sie sich nicht, nach den Belohnungen und der Anerkennung zu greifen, die Sie verdienen. Bauen Sie Ihre Autorität auf der Grundlage von Ehrlichkeit auf, denn nur zuverlässiges Handeln führt zu dauerhaften und würdigen Ergebnissen.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Treffen Sie Entscheidungen in Eile oder unter dem Einfluss negativer Emotionen, die Ihr Urteilsvermögen vorübergehend trüben könnten. Hüten Sie sich vor Arroganz und denken Sie daran, dass wahre Macht nicht schreien muss, um wahrgenommen zu werden.",
      "s": "Macht dient, nicht dominiert",
      "fun": "Heute sehen Sie aus wie ein Anführer, vor dem selbst die größten Widrigkeiten und Warteschlangen im örtlichen Geschäft weichen."
    },
    "9-26": {
      "z": "Waage",
      "l": 9,
      "e": "Die Neun erinnern Sie daran, dass Weisheit in der Fähigkeit liegt, Etappen abzuschließen, die ihren Zweck auf Ihrer Reise bereits erfüllt haben. Dies ist eine Zeit großer Transformationen, die Sie darauf vorbereitet, völlig neue herbstliche Impulse des Schicksals anzunehmen.",
      "r": "Verzeihen Sie vergangene Verletzungen und danken Sie der Vergangenheit für all die Lektionen, die Sie zu einem so bewussten Menschen gemacht haben. Nehmen Sie sich einen Moment Zeit, um Ihre bisherigen Erfolge zusammenzufassen und lassen Sie dankbar los, was Ihnen nicht mehr dient.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Klammern Sie sich nicht an Dingen, die Ihre Entwicklung nicht mehr unterstützen, sondern öffnen Sie Ihre Hände, um neue Gaben anzunehmen. Vermeiden Sie es, traurig zu sein, wenn etwas verschwindet, denn jede Veränderung ist ein Versprechen auf eine bessere und klügere Zukunft.",
      "s": "Anmutig schließen – dankbar öffnen",
      "fun": "Heute sind Sie mit der emotionalen Reinigung so beschäftigt, dass selbst alte Quittungen in Ihrem Portemonnaie nach einer ordnungsgemäßen Entsorgung verlangen."
    },
    "9-27": {
      "z": "Waage",
      "l": 1,
      "e": "Man entfacht den Funken einer neuen Initiative und ermutigt Sie, im vollen Glanz Ihrer eigenen Möglichkeiten und Träume zu stehen. Dies ist der Tag, an dem jeder Ihrer mutigen Gedanken die Kraft hat, der Beginn einer neuen, außergewöhnlichen Geschichte zu werden.",
      "r": "Zeigen Sie Unabhängigkeit und gehen Sie das Risiko ein, Ihre eigene, mutige Idee umzusetzen. Vertrauen Sie Ihrer Durchbruchskraft und seien Sie der Erste, der heute ohne zu zögern an Ihren Sieg glaubt.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Beobachten Sie die Meinungen anderer und warten Sie auf deren Zustimmung, denn Sie sind der einzige Kapitän Ihres Schiffes. Zögern Sie nicht, Maßnahmen zu ergreifen, denn die heutige Energie begünstigt diejenigen, die mutig und entschlossen voranschreiten.",
      "s": "Dein Weg, dein Rhythmus",
      "fun": "Ihre Begeisterung ist heute so groß, dass Sie eine neue Mode starten könnten, indem Sie einfach nur einen Schuh zur Arbeit tragen."
    },
    "9-28": {
      "z": "Waage",
      "l": 2,
      "e": "Zwei lehrt uns, dass die größte Stärke oft in Sanftmut und der Fähigkeit liegt, harmonische Beziehungen aufzubauen. Heute wird Ihre Diplomatie zum Schlüssel, der die Tür zu den Herzen der Menschen öffnet, die für Ihren Frieden wichtig sind.",
      "r": "Suchen Sie nach Verständnis und bauen Sie Brücken, wo bisher Distanz oder unnötige Spannungen herrschten. Pflegen Sie die Zusammenarbeit und schätzen Sie kleine Gesten, die ein Gemeinschaftsgefühl und gegenseitiges Vertrauen schaffen.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Rivalitäten und Konflikte, die die fragile Atmosphäre der heutigen Harmonie zerstören könnten. Scheuen Sie sich nicht, um Unterstützung zu bitten, denn die Zusammenarbeit wird Ihnen heute viel mehr Vorteile bringen, als wenn Sie alleine kämpfen.",
      "s": "Sanftmut ist Stärke",
      "fun": "Heute reagieren Sie so sensibel auf die Stimmungen anderer, dass Sie die Bedürfnisse Ihrer Lieben verstehen, ohne ein einziges Wort zu gebrauchen."
    },
    "9-29": {
      "z": "Waage",
      "l": 3,
      "e": "Das Trio bringt einen fröhlichen Tanz der Kreativität mit, der das Monatsende in ein faszinierendes Abenteuer voller neuer Farben verwandelt. Erlauben Sie sich zu lachen, denn gute Energie ist der beste Treibstoff für Ihre Seele und Ihre kreativen Aktivitäten.",
      "r": "Drücken Sie sich durch Kunst, Worte oder ein freudiges Gespräch mit jemandem aus, der heute Unterstützung braucht. Teilen Sie Ihren Optimismus und inspirieren Sie andere, Schönheit in den kleinsten Details der Realität zu sehen.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Übermäßige Ernsthaftigkeit und Sorge um Angelegenheiten, auf die Sie heute keinen wirklichen Einfluss haben. Unterdrücken Sie nicht Ihre kreative Natur und lassen Sie sie bei jeder Aktion, die Sie heute unternehmen, frei entfalten.",
      "s": "Einfacher bedeutet weiter",
      "fun": "Ihre Dosis purer Energie ist heute so groß, dass Sie allein mit Ihrem Lächeln den gesamten Bereich erhellen könnten."
    },
    "9-30": {
      "z": "Waage",
      "l": 4,
      "e": "Die Vier schließen den September mit einem Zeichen der Stabilität ab und erinnern uns daran, wie wichtig eine solide Grundlage für den kommenden Oktober ist. Ihre Regelmäßigkeit heute wird Ihnen den ganzen Monat über Frieden und große Zufriedenheit mit sorgfältig organisierten Angelegenheiten bringen.",
      "r": "Konzentrieren Sie sich auf den Abschluss von Projekten und stellen Sie sicher, dass die Angelegenheiten, die Ihre letzte Aufmerksamkeit erfordern, in perfekter Ordnung sind. Bauen Sie Ihre Zukunft mit Geduld auf und wissen Sie, dass solide Arbeit immer die nachhaltigsten Ergebnisse bringt.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Plötzliche und unüberlegte Planänderungen, die Ihre bestehende Ordnung unnötig stören könnten. Erliegen Sie nicht dem Chaos der letzten Tage des Monats, sondern halten Sie sich an den vorgegebenen Aktionsplan.",
      "s": "Solidität ist Poesie",
      "fun": "Ihre Liebe zur Ordnung führt heute dazu, dass selbst die Büroklammern auf Ihrem Schreibtisch in perfekt gleichmäßigen Reihen angeordnet sind."
    },
    "10-1": {
      "z": "Waage",
      "l": 3,
      "e": "Three eröffnet den Oktober mit der Energie des freudigen Ausdrucks, die es Ihnen ermöglicht, den goldenen Glanz des Herbstes selbst bei den routinemäßigsten Aufgaben zu sehen. Dies ist der perfekte Zeitpunkt, um Ihre Kreativität zu einer Brücke zu machen, die Sommererinnerungen mit neuen, inspirierenden Plänen für kältere Tage verbindet.",
      "r": "Drücken Sie Ihre Gefühle durch kreative Aktivitäten oder ein inspirierendes Gespräch mit einem geliebten Menschen aus. Teilen Sie Ihren natürlichen Optimismus, denn Ihre gute Energie heute hat die Kraft, außergewöhnlich günstige Zufälle anzuziehen.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Sorgen Sie sich um Dinge, auf die Sie jetzt keinen wirklichen Einfluss haben. Unterdrücken Sie Ihr inneres Licht nicht aus Angst, von anderen beurteilt zu werden, sondern lassen Sie es frei in Ihrer Umgebung strahlen.",
      "s": "Lachen ist der kürzeste Weg zum Herzen",
      "fun": "Sie haben heute so viel Fantasie, dass selbst eine einfache Einkaufsliste als kurzes Gedicht über den Herbst gelten könnte."
    },
    "10-2": {
      "z": "Waage",
      "l": 4,
      "e": "Nummer vier erinnert uns an den Wert einer soliden Grundlage, auf der wir unser Sicherheitsgefühl vor dem kommenden Winter aufbauen. Die heutige Regelmäßigkeit wird Ihnen tiefen Seelenfrieden und große Zufriedenheit mit der zuverlässig und ehrlich erledigten Arbeit bringen.",
      "r": "Konzentrieren Sie sich auf die Fertigstellung von Projekten und sorgen Sie für perfekte Ordnung in Ihren Dokumenten sowie in den Ecken und Winkeln Ihres Zuhauses. Bauen Sie Ihre Zukunft Schritt für Schritt auf und wissen Sie, dass Geduld und Beständigkeit der Schlüssel zu dauerhaftem Erfolg sind.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Chaos und die gleichzeitige Bewältigung zu vieler Herausforderungen, die Ihre kostbare Kraft unnötig verschwenden könnten. Ignorieren Sie nicht die Regeln, die Ihre Stabilität schützen und Ihnen helfen, die volle Kontrolle über Ihre aktuelle Realität zu behalten.",
      "s": "Das Fundament macht keinen Lärm – aber alles steht darauf",
      "fun": "Ihre Liebe zur Ordnung weckt heute in Ihnen den Wunsch, sogar die Herbstblätter vor dem Fenster nach ihren Farbtönen und Größen zu ordnen."
    },
    "10-3": {
      "z": "Waage",
      "l": 5,
      "e": "Five bringt einen belebenden Hauch von Freiheit und ermutigt Sie, die sichere, aber manchmal zu vorhersehbare Komfortzone zu verlassen. Dies ist der perfekte Tag, um eine kleine Veränderung zu wagen, die neue, anregende Energie in Ihren Alltag bringt.",
      "r": "Seien Sie offen für spontane Vorschläge und gönnen Sie sich ein bisschen Abenteuer, das Ihren Geist effektiv erfrischt. Gehen Sie ein Risiko ein und prüfen Sie die neuen Entwicklungsmöglichkeiten, die sich Ihnen heute bieten.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Monotonie und Stagnation können für Sie frustrierend sein und Ihre Vitalität unnötig rauben. Haben Sie keine Angst davor, alte Denkmuster aufzugeben, denn in der Veränderung liegt Ihr größtes Wachstumspotenzial.",
      "s": "Der Wind fragt nicht – er weht einfach",
      "fun": "Ihr Bedürfnis nach Freiheit ist heute so groß, dass das Ausgehen zum Tee ungewollt zu einem spontanen Ausflug aus der Stadt führen kann."
    },
    "10-4": {
      "z": "Waage",
      "l": 6,
      "e": "Number Six lädt Sie in die Welt der Harmonie ein, in der Liebe, Fürsorge und häusliche Wärme die wichtigsten Wegweiser für das Herz sind. Stellen Sie sicher, dass Ihre Handlungen direkt von innen kommen und Ihnen und allen Ihren Lieben Trost spenden.",
      "r": "Schaffen Sie eine warme Atmosphäre in Ihrem Zuhause und verbringen Sie wertvolle Zeit mit den Menschen, die Ihnen am wichtigsten sind. Konzentrieren Sie sich darauf, die Bindungen zu pflegen, die Ihnen ein Gefühl tiefer Sicherheit und vollkommener Liebe geben.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Zu viele Probleme anderer Menschen auf sich nehmen, denn jeder muss seinen eigenen Lebensweg gehen. Suchen Sie nicht nach Perfektion, wo ehrliche Präsenz und ein gutes, unterstützendes Wort aus der Seele ausreichen.",
      "s": "Zuhause ist ein Ort, an dem das Herz atmet",
      "fun": "Ihr Wunsch, sich um die Welt zu kümmern, lässt sogar Ihre Zimmerpflanzen so aussehen, als würden sie ihre Blätter für eine Portion Liebe nach Ihnen ausstrecken."
    },
    "10-5": {
      "z": "Waage",
      "l": 7,
      "e": "Sieben ist eine Zeit tiefer Selbstbeobachtung, in der Stille zu Ihrem treuesten Lehrer der Lebensweisheit wird. Wenn Sie äußere Reize zum Schweigen bringen, können Sie die Antworten hören, nach denen Sie in der Außenwelt schon lange erfolglos gesucht haben.",
      "r": "Finden Sie einen Moment zum Meditieren oder zum ruhigen Lesen, der Ihr Interieur bereichert und Ihnen den lang ersehnten Seelenfrieden bringt. Vertrauen Sie Ihrer Intuition, denn ihre Stimme ist heute außergewöhnlich rein, klar und verdient volles Vertrauen.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Lärm und oberflächliche Ablenkungen, die Ihre Aufmerksamkeit ablenken und die in der Stille entstandene Ordnung zerstören können. Scheuen Sie sich nicht vor Fragen nach dem tieferen Sinn Ihres Weges, denn die Konfrontation damit bringt wahre Befreiung und spirituelle Entwicklung.",
      "s": "Weisheit wohnt in der Stille",
      "fun": "Heute sind Sie wie unsere weise Eule – Sie beobachten die Welt aus der Ferne und wissen viel mehr, als Sie preisgeben."
    },
    "10-6": {
      "z": "Waage",
      "l": 8,
      "e": "Acht ruft Sie dazu auf, Charakterstärke und Mut im Umgang mit Ihren eigenen Ressourcen und Ihrer Lebensenergie zu zeigen. Heute befindet sich Ihre Agentur auf dem höchsten Niveau, das es Ihnen ermöglicht, auch die komplexesten Finanzprojekte erfolgreich abzuschließen.",
      "r": "Ergreifen Sie in beruflichen Angelegenheiten die Initiative und scheuen Sie sich nicht, nach den Belohnungen und der öffentlichen Anerkennung zu greifen, die Sie verdienen. Bauen Sie Ihre Autorität auf den Grundlagen von Ehrlichkeit und Zuverlässigkeit auf, die schon immer Ihre stärksten Charaktere waren.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Treffen Sie Entscheidungen in Eile oder unter dem Einfluss negativer Emotionen, die Ihr Urteilsvermögen vorübergehend trüben könnten. Vermeiden Sie Arroganz und denken Sie daran, dass sich wahre Macht am besten in ruhigem und selbstbewusstem Handeln manifestiert.",
      "s": "Stärke aus Werten, nicht aus Ego",
      "fun": "Heute sehen Sie aus wie ein Anführer, vor dem selbst die größten Widrigkeiten und Warteschlangen im örtlichen Geschäft weichen."
    },
    "10-7": {
      "z": "Waage",
      "l": 9,
      "e": "Die Neun erinnern Sie daran, dass Weisheit in der Fähigkeit liegt, Etappen abzuschließen, die ihren Zweck auf Ihrer Reise bereits erfüllt haben. Dies ist eine Zeit großer Transformation, die Sie darauf vorbereitet, völlig neue Herbstimpulse vom gnädigen Schicksal anzunehmen.",
      "r": "Verzeihen Sie vergangene Verletzungen und danken Sie der Vergangenheit für all die Lektionen, die Sie zu einem so bewussten Menschen gemacht haben. Nehmen Sie sich einen Moment Zeit, um Ihre bisherigen Erfolge zusammenzufassen und lassen Sie dankbar los, was Ihnen nicht mehr dient.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Klammern Sie sich nicht an Dingen, die Ihre Entwicklung nicht mehr unterstützen, sondern öffnen Sie Ihre Hände, um neue Gaben anzunehmen. Vermeiden Sie es, traurig zu sein, wenn etwas verschwindet, denn jede Veränderung ist ein Versprechen auf eine bessere und klügere Zukunft.",
      "s": "Das Ende ist auch ein Geschenk",
      "fun": "Heute führen Sie eine so emotionale Reinigung durch, dass sogar alte Quittungen in Ihrem Portemonnaie nach einer ordnungsgemäßen und endgültigen Entsorgung verlangen."
    },
    "10-8": {
      "z": "Waage",
      "l": 1,
      "e": "Man entfacht den Funken einer neuen Initiative und ermutigt Sie, im vollen Glanz Ihrer eigenen Möglichkeiten und Träume zu stehen. Dies ist der Tag, an dem jeder Ihrer mutigen Gedanken die Kraft hat, zum Beginn einer neuen, außergewöhnlichen Geschichte in Ihrem eigenen E-Book des Lebens zu werden.",
      "r": "Zeigen Sie Unabhängigkeit und gehen Sie das Risiko ein, Ihre eigene, mutige Idee umzusetzen. Vertrauen Sie Ihrer Durchbruchskraft und seien Sie der Erste, der heute ohne zu zögern an Ihren persönlichen Sieg glaubt.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Beobachten Sie die Meinungen anderer und warten Sie auf deren Zustimmung, denn Sie sind der einzige Kapitän Ihres Schiffes. Zögern Sie nicht, Maßnahmen zu ergreifen, denn die heutige Energie begünstigt diejenigen, die mutig und entschlossen voranschreiten.",
      "s": "Die erste Zeile gehört Ihnen",
      "fun": "Ihre Begeisterung ist heute so groß, dass Sie eine neue Mode starten könnten, indem Sie in einem Schuh und mit einem gewinnenden Lächeln zur Arbeit gehen."
    },
    "10-9": {
      "z": "Waage",
      "l": 2,
      "e": "Zwei lehrt uns, dass die größte Stärke oft in Sanftmut und der Fähigkeit liegt, harmonische Beziehungen aufzubauen. Heute wird Ihre Diplomatie zum Schlüssel, der die Tür zu den Herzen der Menschen öffnet, die für Ihren Frieden wichtig sind.",
      "r": "Suchen Sie nach Verständnis und bauen Sie Brücken, wo bisher Distanz oder unnötige Spannungen herrschten. Pflegen Sie die Zusammenarbeit und schätzen Sie kleine Gesten, die ein Gemeinschaftsgefühl und gegenseitiges Vertrauen zwischen den Menschen schaffen.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Rivalitäten und Konflikte, die die fragile Atmosphäre der heutigen Herbstharmonie zerstören könnten. Scheuen Sie sich nicht, um Unterstützung zu bitten, denn die Zusammenarbeit wird Ihnen heute viel mehr Vorteile bringen, als wenn Sie alleine kämpfen.",
      "s": "In der Stille hört man mehr",
      "fun": "Heute reagieren Sie so sensibel auf die Stimmungen anderer, dass Sie die Bedürfnisse Ihrer Lieben verstehen, ohne ein einziges unnötiges Wort zu verwenden."
    },
    "10-10": {
      "z": "Waage",
      "l": 3,
      "e": "Das Trio beendet dieses Jahrzehnt mit einer fröhlichen Note der Kreativität, die einen kalten Tag in ein faszinierendes Abenteuer voller neuer Farben verwandelt. Erlauben Sie sich zu lachen, denn gute Energie ist der beste Treibstoff für Ihre Seele und weitere kreative Aktivitäten.",
      "r": "Drücken Sie sich heute durch Kunst, Worte oder ein freudiges Gespräch mit jemandem aus, der Ihre Unterstützung braucht. Teilen Sie Ihren Optimismus und inspirieren Sie andere, Schönheit in den kleinsten Details der Realität im Oktober zu erkennen.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Übermäßige Ernsthaftigkeit und Sorge um Angelegenheiten, auf die Sie heute keinen wirklichen Einfluss haben. Unterdrücken Sie nicht Ihre kreative Natur und lassen Sie sie bei jeder Aktion, die Sie heute unternehmen, frei entfalten.",
      "s": "Lachen ist der kürzeste Weg zum Herzen",
      "fun": "Ihre Dosis purer Energie ist heute so groß, dass Sie allein mit Ihrem freudigen Lächeln den gesamten Bereich erhellen könnten."
    },
    "10-11": {
      "z": "Waage",
      "l": 4,
      "e": "Nummer vier erinnert uns daran, dass Stabilität die Poesie konkreten Handelns ist, das Systematik und viel Geduld erfordert. Der Aufbau dauerhafter Grundlagen für Ihre Herbstpläne ist ein Prozess, der nun erste greifbare Ergebnisse bringt.",
      "r": "Konzentrieren Sie sich auf systematische und vollständige Aufgaben, die eine zuverlässige und geduldige Herangehensweise an Details erfordern. Kümmern Sie sich um die Struktur Ihres Tages, um ein Gefühl der vollständigen Kontrolle über Ihre eigene dynamische Realität zu erlangen.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Plötzliche und unüberlegte Veränderungen, die Ihr hart erarbeitetes Sicherheitsgefühl unnötig stören könnten. Geben Sie dem Chaos nicht nach, denn Ordnung und Zuverlässigkeit sind heute Ihre besten spirituellen Verbündeten.",
      "s": "Das Fundament macht keinen Lärm – aber alles steht darauf",
      "fun": "Ihre Liebe zur Ordnung führt heute dazu, dass selbst die Büroklammern auf Ihrem Schreibtisch in perfekten Reihen unter dem Lineal angeordnet sind."
    },
    "10-12": {
      "z": "Waage",
      "l": 5,
      "e": "Five bringt einen belebenden Hauch von Freiheit und ermutigt Sie, die sichere, aber manchmal zu vorhersehbare Komfortzone zu verlassen. Dies ist der perfekte Tag, um eine Veränderung zu wagen, die neue, anregende Energie in Ihren Alltag bringt.",
      "r": "Seien Sie offen für spontane Vorschläge und gönnen Sie sich ein bisschen Abenteuer, das Ihren Geist effektiv erfrischt. Gehen Sie ein Risiko ein und prüfen Sie die neuen Entwicklungsmöglichkeiten, die sich Ihnen heute bieten.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Vermeiden Sie Langeweile und Stagnation, die für Sie frustrierend sein und Ihre Vitalität unnötig belasten können. Haben Sie keine Angst davor, alte Muster aufzugeben, denn in der Veränderung liegt Ihr größtes Wachstumspotenzial.",
      "s": "Der Wind fragt nicht – er weht einfach",
      "fun": "Ihr Bedürfnis nach Freiheit ist heute so groß, dass ein Spaziergang ungewollt zu einem spontanen Ausflug werden kann."
    },
    "10-13": {
      "z": "Waage",
      "l": 6,
      "e": "Six lädt Sie in die Welt der Harmonie ein, in der Liebe, Fürsorge und Schönheit die wichtigsten Wegweiser für Ihr Herz sind. Stellen Sie sicher, dass Ihre Handlungen direkt von innen kommen und Ihnen und allen Ihren Lieben Trost spenden.",
      "r": "Schaffen Sie eine warme Atmosphäre in Ihrem Zuhause und verbringen Sie wertvolle Zeit mit den Menschen, die Ihnen am wichtigsten sind. Konzentrieren Sie sich darauf, die Bindungen zu pflegen, die Ihnen ein Gefühl tiefer Sicherheit und vollkommener Liebe geben.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Zu viele Probleme anderer Menschen auf sich nehmen, denn jeder muss seinen eigenen Lebensweg gehen. Suchen Sie nicht nach Perfektion, wo ehrliche Präsenz und ein gutes, unterstützendes Wort aus der Seele ausreichen.",
      "s": "Zuhause ist ein Ort, an dem das Herz atmet",
      "fun": "Ihre Aura des Beschützens ist heute so stark, dass sogar Ihre Topfblumen ihre Blätter nach Ihnen auszustrecken scheinen."
    },
    "10-14": {
      "z": "Waage",
      "l": 7,
      "e": "Sieben ist eine Zeit tiefer Selbstbeobachtung, in der Stille zu Ihrem treuesten Lehrer der Lebensweisheit wird. Wenn Sie äußere Reize zum Schweigen bringen, können Sie die Antworten hören, nach denen Sie in der Außenwelt schon lange erfolglos gesucht haben.",
      "r": "Finden Sie einen Moment zum Meditieren oder zum ruhigen Lesen, der Ihr Interieur bereichert und Ihnen den lang ersehnten Seelenfrieden bringt. Vertrauen Sie Ihrer Intuition, denn ihre Stimme ist heute außergewöhnlich rein, klar und verdient volles Vertrauen.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Lärm und oberflächliche Ablenkungen, die Ihre Aufmerksamkeit ablenken und die in der Stille entstandene Ordnung zerstören können. Haben Sie keine Angst vor Fragen nach dem Sinn Ihres eigenen Weges, denn die Konfrontation mit ihnen bringt wahre Befreiung und Entwicklung.",
      "s": "Weisheit wohnt in der Stille",
      "fun": "Heute sind Sie wie eine weise Eule – Sie beobachten die Welt aus der Ferne und wissen viel mehr über sie, als Sie preisgeben."
    },
    "10-15": {
      "z": "Waage",
      "l": 8,
      "e": "Acht ruft Sie dazu auf, Charakterstärke und Mut im Umgang mit Ihren eigenen Ressourcen und Ihrer Lebensenergie zu zeigen. Heute befindet sich Ihre Agentur auf dem höchsten Niveau, das es Ihnen ermöglicht, auch die komplexesten Projekte erfolgreich abzuschließen.",
      "r": "Ergreifen Sie in beruflichen Angelegenheiten die Initiative und scheuen Sie sich nicht, nach den Belohnungen und der öffentlichen Anerkennung zu greifen, die Sie verdienen. Bauen Sie Ihre Autorität auf der Grundlage von Ehrlichkeit auf, denn nur zuverlässiges Handeln führt zu dauerhaften und würdigen Ergebnissen.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Treffen Sie Entscheidungen in Eile oder unter dem Einfluss negativer Emotionen, die Ihr Urteilsvermögen vorübergehend trüben könnten. Vermeiden Sie Arroganz und denken Sie daran, dass wahre Macht aus Ruhe und Vertrauen in Ihre Handlungen resultiert.",
      "s": "Stärke aus Werten, nicht aus Ego",
      "fun": "Heute sehen Sie aus wie ein Anführer, vor dem selbst die größten Widrigkeiten und Warteschlangen im örtlichen Geschäft weichen."
    },
    "10-16": {
      "z": "Waage",
      "l": 9,
      "e": "Die Neun erinnern Sie daran, dass Weisheit in der Fähigkeit liegt, Etappen abzuschließen, die ihren Zweck auf Ihrer Reise bereits erfüllt haben. Dies ist eine Zeit großer Transformationen, die Sie darauf vorbereitet, völlig neue herbstliche Impulse des Schicksals anzunehmen.",
      "r": "Verzeihen Sie vergangene Verletzungen und danken Sie der Vergangenheit für all die Lektionen, die Sie zu einem so bewussten Menschen gemacht haben. Nehmen Sie sich einen Moment Zeit, um Ihre bisherigen Erfolge zusammenzufassen und lassen Sie dankbar los, was Ihnen nicht mehr dient.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Klammern Sie sich nicht an Dingen, die Ihre Entwicklung nicht mehr unterstützen, sondern öffnen Sie Ihre Hände, um neue Gaben anzunehmen. Vermeiden Sie es, traurig zu sein, wenn etwas verschwindet, denn jede Veränderung ist ein Versprechen auf eine bessere und klügere Zukunft.",
      "s": "Das Ende ist auch ein Geschenk",
      "fun": "Heute führen Sie eine so emotionale Reinigung durch, dass sogar alte Quittungen in Ihrem Portemonnaie nach einer ordnungsgemäßen und endgültigen Entsorgung verlangen."
    },
    "10-17": {
      "z": "Waage",
      "l": 1,
      "e": "Man entfacht den Funken einer neuen Initiative und ermutigt Sie, im vollen Glanz Ihrer eigenen Möglichkeiten und Träume zu stehen. Dies ist der Tag, an dem jeder Ihrer mutigen Gedanken die Kraft hat, der Beginn einer neuen, außergewöhnlichen Geschichte zu werden.",
      "r": "Zeigen Sie Unabhängigkeit und gehen Sie das Risiko ein, Ihre eigene, mutige Idee umzusetzen. Vertrauen Sie Ihrer Durchbruchskraft und seien Sie der Erste, der heute ohne zu zögern an Ihren Sieg glaubt.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Beobachten Sie die Meinungen anderer und warten Sie auf deren Zustimmung, denn Sie sind der einzige Kapitän Ihres Schiffes. Zögern Sie nicht, Maßnahmen zu ergreifen, denn die heutige Energie begünstigt diejenigen, die mutig und entschlossen voranschreiten.",
      "s": "Die erste Zeile gehört Ihnen",
      "fun": "Ihre Begeisterung ist heute so groß, dass Sie eine neue Mode starten könnten, indem Sie einfach nur einen Schuh zur Arbeit tragen."
    },
    "10-18": {
      "z": "Waage",
      "l": 2,
      "e": "Zwei lehrt uns, dass die größte Stärke oft in Sanftmut und der Fähigkeit liegt, harmonische Beziehungen aufzubauen. Heute wird Ihre Diplomatie zum Schlüssel, der die Tür zu den Herzen der Menschen öffnet, die für Ihren Frieden wichtig sind.",
      "r": "Suchen Sie nach Verständnis und bauen Sie Brücken, wo bisher Distanz oder unnötige Spannungen herrschten. Pflegen Sie die Zusammenarbeit und schätzen Sie kleine Gesten, die ein Gemeinschaftsgefühl und gegenseitiges Vertrauen schaffen.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Rivalitäten und Konflikte, die die fragile Atmosphäre der heutigen Herbstharmonie zerstören könnten. Scheuen Sie sich nicht, um Unterstützung zu bitten, denn die Zusammenarbeit wird Ihnen heute viel mehr Vorteile bringen, als wenn Sie alleine kämpfen.",
      "s": "In der Stille hört man mehr",
      "fun": "Heute reagieren Sie so sensibel auf die Stimmungen anderer, dass Sie die Bedürfnisse Ihrer Lieben verstehen, ohne ein einziges Wort zu gebrauchen."
    },
    "10-19": {
      "z": "Waage",
      "l": 3,
      "e": "Das Trio bringt einen fröhlichen Tanz der Kreativität mit, der einen kalten Tag in ein faszinierendes Abenteuer voller neuer Farben verwandelt. Erlauben Sie sich zu lachen, denn gute Energie ist der beste Treibstoff für Ihre Seele und Ihre kreativen Aktivitäten.",
      "r": "Drücken Sie sich heute durch Kunst, Worte oder ein freudiges Gespräch mit jemandem aus, der Ihre Unterstützung braucht. Teilen Sie Ihren Optimismus und inspirieren Sie andere, Schönheit in den kleinsten Details der Realität zu sehen.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Übermäßige Ernsthaftigkeit und Sorge um Angelegenheiten, auf die Sie heute keinen wirklichen Einfluss haben. Unterdrücken Sie nicht Ihre kreative Natur und lassen Sie sie bei jeder Aktion, die Sie heute unternehmen, frei entfalten.",
      "s": "Lachen ist der kürzeste Weg zum Herzen",
      "fun": "Ihre Dosis purer Energie ist heute so groß, dass Sie allein mit Ihrem Lächeln den gesamten Bereich erhellen könnten."
    },
    "10-20": {
      "z": "Waage",
      "l": 4,
      "e": "Die Vier schließen dieses Jahrzehnt mit einem Zeichen der Stabilität ab und erinnern uns an den Wert einer soliden Grundlage für die kommenden Herausforderungen. Ihre Regelmäßigkeit heute wird Ihnen Frieden und große Zufriedenheit mit sorgfältig organisierten Angelegenheiten bringen.",
      "r": "Konzentrieren Sie sich auf den Abschluss von Projekten und stellen Sie sicher, dass die Angelegenheiten, die Ihre Aufmerksamkeit erfordern, in perfekter Ordnung sind. Bauen Sie Ihre Zukunft mit Geduld auf und wissen Sie, dass solide Arbeit immer die nachhaltigsten und schönsten Früchte bringt.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Plötzliche und unüberlegte Planänderungen, die Ihre bestehende Ordnung unnötig stören könnten. Erliegen Sie nicht dem Chaos, sondern halten Sie sich an den zuvor festgelegten Aktionsplan.",
      "s": "Das Fundament macht keinen Lärm – aber alles steht darauf",
      "fun": "Ihre Liebe zur Ordnung sorgt heute dafür, dass auch Ihre Herbstschuhe ein perfektes Paar bilden."
    },
    "10-21": {
      "z": "Waage",
      "l": 5,
      "e": "Five bringt einen belebenden Hauch von Freiheit und ermutigt Sie, über den Rahmen alltäglicher Herbstmuster hinauszugehen. Dies ist der perfekte Tag, um ein wenig Spontaneität zu wagen und Ihren Geist und Ihr Herz vor dem bevorstehenden November zu erfrischen.",
      "r": "Akzeptieren Sie die vorgeschlagenen Änderungen und seien Sie offen für neue, faszinierende Bekanntschaften. Nehmen Sie einen anderen Weg als gewöhnlich zu Ihrem Ziel und spüren Sie den Nervenkitzel, das Unbekannte zu entdecken.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Monotonie und Angst vor dem, was Ihnen neu und noch nicht ganz vertraut ist. Halten Sie nicht an Ihren Plänen fest, wenn Ihnen das Leben heute viel interessantere und farbenfrohere Alternativen bietet.",
      "s": "Der Wind fragt nicht – er weht einfach",
      "fun": "Ihr Bedürfnis nach Freiheit ist heute so groß, dass das Ausgehen zum Tee vielleicht mit einem spontanen Ausflug in den Wald zum Kastanienpflücken endet."
    },
    "10-22": {
      "z": "Waage",
      "l": 6,
      "e": "The Six lädt Sie ein, eine Oase der Harmonie zu schaffen, in der Liebe und Fürsorge für Ihre Lieben zur absoluten Priorität des Tages werden. Heute wird Ihr Zuhause zu einer Quelle großer Kraft, solange Sie auf die Schönheit der Umgebung und den gegenseitigen Respekt der Haushaltsmitglieder achten.",
      "r": "Schaffen Sie eine warme Atmosphäre in Ihrer Umgebung und verbringen Sie wertvolle Zeit mit Menschen, die Sie wirklich lieben. Konzentrieren Sie sich darauf, Beziehungen zu pflegen, die Ihnen das Gefühl geben, gebraucht und vollständig akzeptiert zu werden.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Zu viele Probleme anderer Menschen auf Ihre Schultern zu nehmen, was Ihnen unnötigerweise die Freude am eigenen Frieden nehmen könnte. Vermeiden Sie Perfektionismus, denn aufrichtige Präsenz ist viel wichtiger als ein perfekt sauberes Wohnzimmer.",
      "s": "Zuhause ist ein Ort, an dem das Herz atmet",
      "fun": "Ihre fürsorgliche Aura ist heute so stark, dass sogar die Kakteen auf der Fensterbank ihre Dornen nach Ihnen auszustrecken scheinen, um eine Portion Aufmerksamkeit zu erregen."
    },
    "10-23": {
      "z": "Skorpion",
      "l": 7,
      "e": "Sieben ist eine Zeit tiefer Selbstbeobachtung, in der die Herbststille zum treuesten Berater Ihrer Seele wird. Wenn Sie äußere Reize zum Schweigen bringen, können Sie die Antworten hören, nach denen Sie im Alltagslärm erfolglos gesucht haben.",
      "r": "Finden Sie einen Moment zum Meditieren oder zum ruhigen Lesen, der Ihr Interieur bereichert und Ihnen den Frieden bringt, den Sie sich wünschen. Vertrauen Sie Ihrer Intuition, denn heute ist ihre Stimme außergewöhnlich klar und frei von unnötigen Umweltfiltern.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Lärm und oberflächliche Ablenkungen, die Ihre Aufmerksamkeit ablenken und die in der Stille entstandene Ordnung zerstören können. Laufen Sie nicht vor Fragen über die Bedeutung Ihres Weges davon, denn die Konfrontation mit ihnen bringt wahre Befreiung.",
      "s": "Weisheit wohnt in der Stille",
      "fun": "Heute sind Sie wie unsere weise Eule – Sie beobachten die Welt aus der Ferne und wissen viel mehr, als Sie beim Abendessen preisgeben."
    },
    "10-24": {
      "z": "Skorpion",
      "l": 8,
      "e": "Acht bringt die Energie der Manifestation von Stärke mit sich, die es Ihnen ermöglicht, Ihre finanzielle Situation und berufliche Position wirklich zu beeinflussen. Heute wird Ihre Entschlossenheit durch Entscheidungsfreiheit unterstützt, die Sie bei jeder Ihrer Maßnahmen äußerst effektiv macht.",
      "r": "Ergreifen Sie konkrete Schritte zur Verwirklichung Ihrer Ambitionen und vertrauen Sie Ihrer etablierten Autorität. Bauen Sie Ihre Fülle auf einer ehrlichen Grundlage auf, die Ihnen über Jahre hinweg dauerhafte und zufriedenstellende Ergebnisse bescheren wird.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Treffen Sie wichtige Entscheidungen unter dem Einfluss der Angst vor Mangel, anstatt Kraft aus dem Selbstwertgefühl zu schöpfen. Hüten Sie sich vor Arroganz und denken Sie daran, dass wahre Macht nicht schreien muss, um wahrgenommen zu werden.",
      "s": "Stärke aus Werten, nicht aus Ego",
      "fun": "Heute sehen Sie aus wie ein Anführer, der selbst die größten Widrigkeiten und bürokratischen Hürden meistert."
    },
    "10-25": {
      "z": "Skorpion",
      "l": 9,
      "e": "Nummer Neun erinnert Sie daran, dass Weisheit in der Fähigkeit besteht, Phasen abzuschließen, die ihren Zweck in Ihrer Entwicklung bereits erfüllt haben. Dies ist eine Zeit großer Transformation, die Sie darauf vorbereitet, völlig neue, faszinierende Impulse des Schicksals anzunehmen.",
      "r": "Verzeihen Sie alte Traumata und lassen Sie alles los, was Ihre natürliche, innere Freiheit blockiert. Danken Sie der Vergangenheit für all die Lektionen und betrachten Sie sie als wertvollen Treibstoff für Ihren weiteren, inspirierenden Weg.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Halten Sie an dem fest, was bereits verschwunden ist, weil es Ihren natürlichen Wiedergeburtsprozess blockiert. Geben Sie nicht der Traurigkeit nach, denn jedes Ende ist ein freudiges Versprechen eines neuen und wunderbaren Morgens.",
      "s": "Das Ende ist auch ein Geschenk",
      "fun": "Heute führen Sie eine so emotionale Aufräumaktion durch, dass sogar die alten Quittungen in Ihrem Portemonnaie nach einer ordnungsgemäßen und endgültigen Entsorgung verlangen."
    },
    "10-26": {
      "z": "Skorpion",
      "l": 1,
      "e": "Man entfacht den Funken einer neuen Initiative und ermutigt Sie, im vollen Glanz Ihrer eigenen Möglichkeiten und Träume zu stehen. Dies ist der Tag, an dem jeder Ihrer mutigen Gedanken die Kraft hat, der Beginn einer neuen, außergewöhnlichen Geschichte zu werden.",
      "r": "Zeigen Sie Unabhängigkeit und gehen Sie das Risiko ein, Ihre eigene, mutige Idee umzusetzen. Vertrauen Sie Ihrer Durchbruchskraft und seien Sie der Erste, der heute ohne zu zögern an Ihren Sieg glaubt.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Beobachten Sie die Meinungen anderer und warten Sie auf deren Zustimmung, denn Sie sind der Kapitän dieses Schiffes. Zögern Sie nicht, Maßnahmen zu ergreifen, denn die heutige Energie begünstigt diejenigen, die mutig voranschreiten.",
      "s": "Die erste Zeile gehört Ihnen",
      "fun": "Ihre Begeisterung ist heute so groß, dass Sie einen neuen Trend starten könnten, indem Sie einfach in einem Schuh und mit einem gewinnenden Lächeln zur Arbeit gehen."
    },
    "10-27": {
      "z": "Skorpion",
      "l": 2,
      "e": "Zwei lehrt uns, dass die größte Stärke oft in Sanftmut und der Fähigkeit liegt, harmonische Beziehungen aufzubauen. Heute wird Ihre Diplomatie zum Schlüssel, der Ihnen die Tür zu den Herzen der Menschen öffnet, die Ihnen wichtig sind.",
      "r": "Suchen Sie nach Verständnis und bauen Sie Brücken, wo zuvor Kälte oder unnötige Distanz herrschte. Pflegen Sie die Zusammenarbeit und schätzen Sie kleine Gesten, die ein Gemeinschaftsgefühl und gegenseitiges Vertrauen schaffen.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Rivalitäten und Konflikte, die die fragile Atmosphäre der heutigen Herbstharmonie zerstören könnten. Scheuen Sie sich nicht, um Unterstützung zu bitten, denn die Zusammenarbeit wird Ihnen heute viel mehr Vorteile bringen, als wenn Sie alleine kämpfen.",
      "s": "In der Stille hört man mehr",
      "fun": "Heute reagieren Sie so sensibel auf die Stimmungen anderer, dass Sie die Bedürfnisse Ihrer Lieben verstehen, ohne ein einziges unnötiges Wort zu verwenden."
    },
    "10-28": {
      "z": "Skorpion",
      "l": 3,
      "e": "Das Trio bringt einen fröhlichen Tanz der Kreativität mit, der das Monatsende in ein faszinierendes Abenteuer voller neuer Farben verwandelt. Erlauben Sie sich zu lachen, denn gute Energie ist der beste Treibstoff für Ihre Seele und Ihre kreativen Aktivitäten.",
      "r": "Drücken Sie sich durch Kunst, Worte oder ein freudiges Gespräch mit jemandem aus, der heute Unterstützung braucht. Teilen Sie Ihren Optimismus und inspirieren Sie andere, Schönheit in den kleinsten Details der Realität zu sehen.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Übermäßige Ernsthaftigkeit und Sorge um Angelegenheiten, auf die Sie heute keinen wirklichen Einfluss haben. Unterdrücken Sie nicht Ihre kreative Natur und lassen Sie sie bei jeder Aktion, die Sie heute unternehmen, frei entfalten.",
      "s": "Lachen ist der kürzeste Weg zum Herzen",
      "fun": "Ihre Dosis purer Energie ist heute so groß, dass Sie allein mit Ihrem Lächeln den gesamten Bereich erhellen könnten."
    },
    "10-29": {
      "z": "Skorpion",
      "l": 4,
      "e": "Nummer vier erinnert uns an den Wert solider Grundlagen, auf denen wir unser Gefühl von Sicherheit und Stabilität aufbauen. Ihre Regelmäßigkeit heute wird Ihnen Frieden und Zufriedenheit mit sorgfältig organisierten Angelegenheiten bringen.",
      "r": "Konzentrieren Sie sich auf den Abschluss von Projekten und stellen Sie sicher, dass die Angelegenheiten, die Ihre letzte Aufmerksamkeit erfordern, in perfekter Ordnung sind. Bauen Sie Ihre Zukunft mit Geduld auf und wissen Sie, dass solide Arbeit immer die nachhaltigsten Ergebnisse bringt.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Plötzliche und unüberlegte Planänderungen, die Ihre bestehende Ordnung unnötig stören könnten. Erliegen Sie nicht dem Chaos der letzten Tage des Monats, sondern halten Sie sich an den vorgegebenen Aktionsplan.",
      "s": "Das Fundament macht keinen Lärm – aber alles steht darauf",
      "fun": "Ihre Liebe zur Ordnung führt heute dazu, dass sich selbst Ihre Herbstschuhe vor dem Ausgehen zu einem perfekten Paar arrangieren."
    },
    "10-30": {
      "z": "Skorpion",
      "l": 5,
      "e": "Five bringt einen Hauch von Freiheit und ermutigt Sie, die sichere, aber manchmal zu vorhersehbare Komfortzone zu verlassen. Dies ist der perfekte Tag, um eine Veränderung zu wagen, die neue, belebende Energie in Ihren Alltag bringt.",
      "r": "Seien Sie offen für spontane Vorschläge und gönnen Sie sich ein kleines Abenteuer, das Ihren Geist erfrischt. Gehen Sie ein Risiko ein und prüfen Sie die neuen Entwicklungsmöglichkeiten, die sich heute am Horizont abzeichnen.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Vermeiden Sie Langeweile und Stagnation, die frustrierend sein und Ihnen unnötig Kraft rauben können. Haben Sie keine Angst, alte Muster aufzugeben, denn Ihr größtes Potenzial liegt in der Veränderung.",
      "s": "Der Wind fragt nicht – er weht einfach",
      "fun": "Ihr Freiheitsbedürfnis ist heute so groß, dass ein Spaziergang zu einem spontanen Ausflug in eine völlig unbekannte Richtung führen kann."
    },
    "10-31": {
      "z": "Skorpion",
      "l": 6,
      "e": "Nummer sechs schließt den Oktober in einem Ton der Harmonie und heimeligen Wärme ab und erinnert uns an den Wert der Nähe an kalten Abenden. Dies ist die Zeit, in der Ihre Fürsorge für andere zur Grundlage wird, auf der Sie das Sicherheitsgefühl Ihrer Familie aufbauen.",
      "r": "Schaffen Sie in Ihrem Zuhause eine Atmosphäre voller Liebe und feiern Sie die Zeit mit den Menschen, die Ihnen am nächsten stehen. Konzentrieren Sie sich darauf, schöne Erinnerungen zu schaffen, die Ihr Herz im kommenden Winter erwärmen werden.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Übernehmen Sie zu viele Aufgaben anderer Menschen, was Ihre eigene Freude an der heutigen Feier überschatten könnte. Suchen Sie nicht nach Perfektion, wenn eine aufrichtige, liebevolle Präsenz und ein freundliches, unterstützendes Wort ausreichen.",
      "s": "Zuhause ist ein Ort, an dem das Herz atmet",
      "fun": "Ihre Aura der Fürsorge ist heute so stark, dass sogar Ihr Lieblingstee nach Liebe und Frieden zu schmecken scheint."
    },
    "11-1": {
      "z": "Skorpion",
      "l": 4,
      "e": "Die Vier zu Beginn des Monats bringt die Energie des Friedens und solide Unterstützung in die Grundlagen, die Sie in den letzten Monaten aufgebaut haben. Dies ist eine Zeit, in der Ihnen die Systematik und Verlässlichkeit Ihres Handelns ein Gefühl tiefer Sicherheit und innerer Ordnung vermittelt.",
      "r": "Konzentrieren Sie sich auf Angelegenheiten, die einer endgültigen Lösung bedürfen, und kümmern Sie sich um die Struktur Ihrer unmittelbaren Umgebung. Bauen Sie Ihre Zukunft auf bewährten Lösungen auf und wissen Sie, dass heute jede kleine, zuverlässige Aktion von großer Bedeutung ist.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Vermeiden Sie Chaos und plötzliche Bewegungen, die Ihr Bedürfnis nach Stabilität heute unnötig stören könnten. Lassen Sie sich nicht ablenken, denn ruhige Präsenz ist heute Ihr stärkster spiritueller Verbündeter.",
      "s": "Kleine Schritte, bleibende Spuren",
      "fun": "Ihre Liebe zur Ordnung macht heute sogar die Artikel auf Ihrem"
    },
    "11-2": {
      "z": "Skorpion",
      "l": 5,
      "e": "Fünf bringt einen belebenden Wind der Veränderung, der hilft, den Geist nach Momenten tiefer Besinnung und Ernsthaftigkeit zu erfrischen. Dies ist der perfekte Tag, um den Mut zu haben, über alltägliche Muster hinauszugehen und sich neuen, inspirierenden Reizen zu öffnen.",
      "r": "Akzeptieren Sie die Vorschläge für ein Treffen und gönnen Sie sich ein wenig Spontaneität, die die November-Aura erhellen wird. Wählen Sie einen neuen Denkansatz für Ihre Projekte, denn Flexibilität ist heute Ihr größtes Potenzial.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Monotonie und Stagnation können deprimierend sein und Ihre Vitalität unnötig rauben. Halten Sie nicht an Ihren Plänen fest, wenn Ihnen Ihre Intuition heute viel interessantere und farbenfrohere Alternativen sagt.",
      "s": "Jede Veränderung ist eine Einladung",
      "fun": "Ihr Bedürfnis nach Freiheit ist heute so groß, dass ein Spaziergang ungewollt dazu führt, dass Sie eine große Winterexpedition planen."
    },
    "11-3": {
      "z": "Skorpion",
      "l": 6,
      "e": "The Six lädt Sie ein, eine Oase der Harmonie zu schaffen, in der Liebe und Fürsorge für Ihre Lieben zu den höchsten Werten des Tages werden. Heute wird Ihre Umgebung zu einer Quelle außergewöhnlicher Stärke, solange Sie auf die Schönheit Ihrer Beziehungen und den gegenseitigen Respekt achten.",
      "r": "Schaffen Sie eine warme Atmosphäre in Ihrem Zuhause und verbringen Sie wertvolle Zeit mit den Menschen, die Ihnen am wichtigsten sind. Konzentrieren Sie sich auf kleine Gesten der Freundlichkeit, die das Gefühl vermitteln, von Ihren Mitmenschen gebraucht und voll akzeptiert zu werden.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Nehmen Sie zu viele Probleme anderer Menschen auf sich, was Ihre eigene Freude und Ihren Seelenfrieden unnötigerweise überschatten könnte. Hüten Sie sich vor Perfektionismus, denn eine aufrichtige, liebevolle Präsenz ist viel wichtiger als ein perfekt vorbereitetes Umfeld.",
      "s": "Fürsorge verändert alles",
      "fun": "Ihre Aura des Beschützens ist heute so stark, dass sogar Ihr Morgentee nach Liebe und Geborgenheit zu schmecken scheint."
    },
    "11-4": {
      "z": "Skorpion",
      "l": 7,
      "e": "Sieben ist eine Zeit tiefer Selbstbeobachtung, in der die Novemberstille zu Ihrem treuesten Lehrer der Lebensweisheit wird. Wenn Sie äußere Reize zum Schweigen bringen, können Sie die Antworten hören, nach denen Sie in der Außenwelt schon lange erfolglos gesucht haben.",
      "r": "Finden Sie einen Moment zum Meditieren oder zum ruhigen Lesen, der Ihr Interieur bereichert und Ihnen den lang ersehnten Seelenfrieden bringt. Vertrauen Sie Ihrer Intuition, denn ihre Stimme ist heute außergewöhnlich rein, klar und verdient volles Vertrauen.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Lärm und oberflächliche Unterhaltung, die Ihre Aufmerksamkeit ablenken und die in der Stille entstandene innere Ordnung zerstören können. Haben Sie keine Angst vor Fragen nach der tieferen Bedeutung Ihres Weges, denn die Konfrontation damit bringt wahre Befreiung und spirituelles Wachstum.",
      "s": "Tiefer als du sehen kannst",
      "fun": "Heute sind Sie wie unsere weise Eule – Sie beobachten die Welt aus der Ferne und wissen viel mehr über sie, als Sie preisgeben."
    },
    "11-5": {
      "z": "Skorpion",
      "l": 8,
      "e": "Acht ruft Sie dazu auf, Charakterstärke und Mut im Umgang mit Ihren eigenen Ressourcen und Ihrer Lebensenergie zu zeigen. Ihre Agentur befindet sich nun auf dem höchsten Niveau, das es Ihnen ermöglicht, auch die komplexesten Projekte erfolgreich abzuschließen.",
      "r": "Ergreifen Sie in beruflichen Angelegenheiten mutige Initiativen und scheuen Sie sich nicht, nach den Belohnungen und der öffentlichen Anerkennung zu streben, die Sie verdienen. Bauen Sie Ihre Autorität auf der Grundlage von Ehrlichkeit auf, denn nur zuverlässiges und faires Handeln führt zu dauerhaften Ergebnissen.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Treffen Sie Entscheidungen in Eile oder unter dem Einfluss negativer Emotionen, die Ihr Urteilsvermögen für die Realität vorübergehend trüben könnten. Vermeiden Sie Arroganz und denken Sie daran, dass sich wahre Macht am besten in ruhigem und selbstbewusstem Handeln manifestiert.",
      "s": "Man baut – und es bleibt",
      "fun": "Heute sehen Sie aus wie ein Anführer, vor dem selbst die größten Widrigkeiten und Warteschlangen im örtlichen Geschäft weichen."
    },
    "11-6": {
      "z": "Skorpion",
      "l": 9,
      "e": "Die Neun erinnern Sie daran, dass Weisheit in der Fähigkeit liegt, Etappen abzuschließen, die ihren Zweck auf Ihrer Lebensreise bereits erfüllt haben. Dies ist eine Zeit großer Transformation, die Sie darauf vorbereitet, völlig neue, faszinierende Impulse des gnädigen Schicksals anzunehmen.",
      "r": "Verzeihen Sie vergangene Verletzungen und danken Sie der Vergangenheit für all die Lektionen, die Sie zu einem so bewussten und starken Menschen gemacht haben. Nehmen Sie sich einen Moment Zeit, um Ihre bisherigen Erfolge zusammenzufassen und lassen Sie dankbar los, was Ihnen nicht mehr dient.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Klammern Sie sich nicht an Dingen, die Ihre Entwicklung nicht mehr unterstützen, sondern öffnen Sie Ihre Hände, um neue Gaben anzunehmen. Vermeiden Sie es, traurig zu sein, wenn etwas verschwindet, denn jede Veränderung ist ein Versprechen auf eine bessere und klügere Zukunft.",
      "s": "Weisheit tut weh, bevor sie untergeht",
      "fun": "Heute führen Sie eine so emotionale Reinigung durch, dass sogar alte Quittungen in Ihrem Portemonnaie nach einer ordnungsgemäßen und endgültigen Entsorgung verlangen."
    },
    "11-7": {
      "z": "Skorpion",
      "l": 1,
      "e": "Man entfacht den Funken einer neuen Initiative und ermutigt Sie, im vollen Licht Ihrer eigenen Möglichkeiten und kühnen Träume zu stehen. Dies ist der Tag, an dem jeder Ihrer bahnbrechenden Gedanken die Kraft hat, der Beginn einer neuen, außergewöhnlichen Geschichte zu werden.",
      "r": "Zeigen Sie Unabhängigkeit und gehen Sie das Risiko ein, Ihre eigene, mutige Entwicklungsidee umzusetzen. Vertrauen Sie Ihrer Durchbruchskraft und seien Sie der Erste, der heute ohne zu zögern an Ihren persönlichen Sieg glaubt.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Beobachten Sie die Meinungen anderer und warten Sie auf deren Zustimmung, denn Sie sind heute der einzige Kapitän Ihres Schiffes. Zögern Sie nicht, Maßnahmen zu ergreifen, denn die heutige Energie begünstigt diejenigen, die mutig und entschlossen voranschreiten.",
      "s": "Fangen Sie an – der Rest kommt",
      "fun": "Ihre Begeisterung ist heute so groß, dass Sie einen neuen Trend starten könnten, indem Sie einfach in einem Schuh und mit einem gewinnenden Lächeln zur Arbeit gehen."
    },
    "11-8": {
      "z": "Skorpion",
      "l": 2,
      "e": "Nummer Zwei lehrt uns, dass die größte Stärke oft in Sanftmut und der Fähigkeit liegt, harmonische Beziehungen zur Umwelt aufzubauen. Heute wird Ihre Diplomatie zum Schlüssel, der die Tür zu den Herzen der Menschen öffnet, die für Ihren Frieden wichtig sind.",
      "r": "Suchen Sie nach Verständnis und bauen Sie Brücken, wo bisher Distanz oder unnötige, ermüdende Anspannung herrschte. Pflegen Sie die Zusammenarbeit und schätzen Sie kleine Gesten, die ein Gemeinschaftsgefühl und gegenseitiges Vertrauen zwischen den Menschen schaffen.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Konkurrenz und Konflikte, die die fragile Atmosphäre der heutigen November-Harmonie unnötig zerstören könnten. Scheuen Sie sich nicht, um Unterstützung zu bitten, denn eine Zusammenarbeit wird Ihnen heute viel mehr Vorteile bringen, als allein Herausforderungen zu meistern.",
      "s": "Zwei Seelen, eine Harmonie",
      "fun": "Heute reagieren Sie so sensibel auf die Stimmungen anderer, dass Sie die Bedürfnisse Ihrer Lieben verstehen, ohne ein einziges unnötiges Wort zu verwenden."
    },
    "11-9": {
      "z": "Skorpion",
      "l": 3,
      "e": "Das Trio bringt einen fröhlichen Tanz der Kreativität mit, der einen kalten Tag in ein faszinierendes Abenteuer voller neuer Farben und Inspirationen verwandelt. Erlauben Sie sich zu lachen, denn gute Energie ist der beste Treibstoff für Ihre Seele und weitere kreative Aktivitäten.",
      "r": "Drücken Sie sich durch Kunst, Worte oder ein freudiges Gespräch mit jemandem aus, der heute wirklich Ihre Unterstützung braucht. Teilen Sie Ihren natürlichen Optimismus und inspirieren Sie andere, Schönheit in den kleinsten Details der Realität zu sehen.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Übermäßige Ernsthaftigkeit und Sorge um Angelegenheiten, auf die Sie heute keinen wirklichen Einfluss haben. Unterdrücken Sie nicht Ihre kreative Natur und lassen Sie sie bei jeder Aktion, die Sie heute unternehmen, frei entfalten.",
      "s": "Schaffen Sie, weil die Welt es braucht",
      "fun": "Ihre Dosis purer Energie ist heute so groß, dass Sie allein mit Ihrem freudigen Lächeln den gesamten Bereich erhellen könnten."
    },
    "11-10": {
      "z": "Skorpion",
      "l": 4,
      "e": "Four schließt dieses Jahrzehnt in einem Ton der Stabilität ab und erinnert uns an den Wert einer soliden Grundlage für die bevorstehenden Herbstherausforderungen. Ihre Regelmäßigkeit heute wird Ihnen Frieden und große Zufriedenheit mit sorgfältig organisierten Angelegenheiten und Dokumenten bringen.",
      "r": "Konzentrieren Sie sich auf den Abschluss der begonnenen Projekte und stellen Sie sicher, dass die Angelegenheiten, die Ihre Aufmerksamkeit erfordern, in perfekter Ordnung sind. Bauen Sie Ihre Zukunft mit Geduld auf und wissen Sie, dass solide Arbeit immer die nachhaltigsten und schönsten Früchte bringt.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Plötzliche und unüberlegte Planänderungen, die Ihre bestehende Ordnung und Sicherheit unnötig zerstören könnten. Erliegen Sie nicht dem Chaos, sondern halten Sie sich an einen vorher festgelegten Aktionsplan, der Ihnen ein Gefühl der Kontrolle gibt.",
      "s": "Kleine Schritte, bleibende Spuren",
      "fun": "Ihre Liebe zur Ordnung führt heute dazu, dass sich auch Ihre Herbstschuhe vor dem Verlassen des Hauses zu einem perfekten Paar zusammenfügen."
    },
    "11-11": {
      "z": "Skorpion",
      "l": 5,
      "e": "Fünf weckt in Ihrem Raum ein starkes Bedürfnis nach Freiheit und dem Abbau interner Barrieren, die Sie bisher möglicherweise eingeschränkt haben. Dies ist der perfekte Moment, um über den Rahmen des Alltags hinauszugehen und Ihr Leben aus der Perspektive unbegrenzter Möglichkeiten zu betrachten.",
      "r": "Trauen Sie sich, spontan zu handeln und feiern Sie Ihre Unabhängigkeit bei jeder Entscheidung, die Sie heute treffen. Suchen Sie nach neuen Inspirationen, die Ihre aktuellen Projekte beleben und ihnen eine völlig neue, dynamische Qualität verleihen.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Geben Sie der Langeweile und der Angst vor Veränderungen nach, die jetzt mit einem interessanten Vorschlag an Ihre Tür klopfen. Lassen Sie nicht zu, dass die melancholische Aura Ihre natürliche Neugier auf die Welt und den Wunsch, Neues zu erleben, unterdrückt.",
      "s": "Jede Veränderung ist eine Einladung",
      "fun": "Sie haben heute so viel Energie, dass das Ausgehen zum Tee ungewollt dazu führen kann, dass Sie eine große Expedition ins Unbekannte planen."
    },
    "11-12": {
      "z": "Skorpion",
      "l": 6,
      "e": "Die Zahl Sechs lenkt Ihre Aufmerksamkeit auf den Herd und das Zuhause und erinnert Sie daran, dass die größten Schätze in der Wärme der Beziehungen zu Ihren Lieben verborgen sind. Es ist ein Tag des Brückenbaus und der Heilung alter Missverständnisse durch Empathie und ehrliche, herzliche Gespräche.",
      "r": "Achten Sie auf die Ästhetik Ihres Raums und schaffen Sie Bedingungen, die einer tiefen Entspannung mit Ihrer Familie förderlich sind. Konzentrieren Sie sich darauf, Unterstützung zu geben, denn jedes gute Wort wird mit doppelter Kraft in Form von innerem Frieden zu Ihnen zurückkommen.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Kritik an geliebten Menschen und das Aufzwingen Ihrer eigenen Maßstäbe an Perfektion kann zu unnötigen Spannungen führen. Übernehmen Sie nicht alle Hausarbeiten, sondern lernen Sie, die Verantwortung mit anderen zu teilen.",
      "s": "Fürsorge verändert alles",
      "fun": "Sie sind heute so eine Oase des Friedens, dass selbst die Katze Ihren Schoß als den besten Ort der Welt zu betrachten scheint."
    },
    "11-13": {
      "z": "Skorpion",
      "l": 7,
      "e": "Seven lädt Sie in die Welt der Geheimnisse und intellektuellen Erkundungen ein, in der Stille zum Raum für brillante Offenbarungen wird. Dies ist eine Zeit, in der intuitives Wissen Aufmerksamkeit erfordert und Ihnen Schlüssel zum Verständnis von Dingen bietet, die zuvor unklar waren.",
      "r": "Gönnen Sie sich den Luxus der Isolation und vertiefen Sie sich in die Lektüre oder Ihre eigenen Notizen, die darauf warten, geordnet zu werden. Vertrauen Sie Ihren Gedanken, denn die heutigen Erkenntnisse könnten zu einem Durchbruch beim Schreiben Ihres E-Books werden.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Oberflächlichkeit bei Kontakten und Flucht vor den eigenen Gedanken hin zu lauter Unterhaltung. Überstürzen Sie keine Erklärungen, bis Sie das Gefühl haben, dass Ihre Vision völlig klar und kohärent ist.",
      "s": "Tiefer als du sehen kannst",
      "fun": "Ihre Aura einer weisen Eule ist heute so stark, dass die Menschen Angst haben, Ihr Schweigen zu brechen, weil sie Sie des Kontakts mit dem Kosmos verdächtigen."
    },
    "11-14": {
      "z": "Skorpion",
      "l": 8,
      "e": "Die Acht bringt die Schwingung des Erfolgs und die konkrete Verwirklichung von Plänen, an denen Sie seit Wochen arbeiten, in Ihren Raum. Dies ist der Moment, in dem Sie Ihre volle Kraft entfalten und beginnen können, Ihre Talente als das wertvollste Kapital überhaupt zu nutzen.",
      "r": "Machen Sie mutige Schritte, um Ihre Aktivitäten bekannt zu machen und scheuen Sie sich nicht, lautstark über Ihre Kompetenzen zu sprechen. Bauen Sie Ihre Autorität auf fundiertem Wissen auf und denken Sie daran, dass Professionalität Ihre wirkungsvollste Visitenkarte ist.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Unsicherheit über den eigenen Wert und die Übergabe der Kontrolle über finanzielle Angelegenheiten in die Hände anderer. Hüten Sie sich vor Arroganz, denn ein wahrer Anführer inspiriert andere durch seine Ruhe, nicht durch die Kraft seiner Stimme.",
      "s": "Man baut – und es bleibt",
      "fun": "Sie verfügen heute über eine solche Autorität, dass unter Ihrem entschlossenen Blick sogar die Kaffeemaschine schneller zu arbeiten scheint."
    },
    "11-15": {
      "z": "Skorpion",
      "l": 9,
      "e": "Die Zahl Neun symbolisiert das Schließen wichtiger Kreisläufe und die Befreiung von Verpflichtungen, die nicht mehr Ihrem höchsten Wohl dienen. Dies ist eine Zeit der großen Seelenreinigung, die den Weg für neue Energie ebnet, die bald in Ihrem Leben erscheinen wird.",
      "r": "Machen Sie eine Bestandsaufnahme Ihrer Pläne und streichen Sie mutig das durch, was nicht mehr Ihre Wahrheit oder Leidenschaft ist. Seien Sie dankbar für jede Lektion, die Sie dieses Jahr gelernt haben, und bereiten Sie sich darauf vor, neue Geschenke anzunehmen.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Halten Sie an der Vergangenheit und an Menschen fest, mit denen Sie keine gemeinsamen Werte oder Ziele mehr teilen. Geben Sie nicht der Melancholie nach, denn jeder Abschied ist eigentlich ein freudiges Willkommen für eine neue Version von Ihnen.",
      "s": "Weisheit tut weh, bevor sie untergeht",
      "fun": "Sie räumen heute so viel auf, dass sogar der virtuelle Papierkorb auf Ihrem Computer um Gnade bettelt."
    },
    "11-16": {
      "z": "Skorpion",
      "l": 1,
      "e": "Nach der Reinigungsphase bringt Nummer eins eine große Portion Enthusiasmus mit sich, um völlig neue, originelle Unternehmungen zu starten. Dies ist der Tag der Pioniere, an dem Ihrer Kreativität keine Grenzen gesetzt sind und jede Idee die Chance hat, zur Grundlage des Erfolgs zu werden.",
      "r": "Übernehmen Sie die Kontrolle über wichtige Projekte und vertrauen Sie Ihrer Vision, auch wenn sie Ihren Mitmenschen zu gewagt erscheint. Seien Sie Ihr bester Freund und die erste Person, die heute völlig an Ihren Sieg glaubt.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Andere anzuschauen und auf Zustimmung zu warten, könnte Ihren natürlichen, kreativen Antrieb unterdrücken. Haben Sie keine Angst vor der Einsamkeit einer Führungskraft, denn im selbstständigen Handeln werden Sie heute Ihre größten Ressourcen entdecken.",
      "s": "Fangen Sie an – der Rest kommt",
      "fun": "Ihr Selbstvertrauen ist heute so stark, dass Sie Sand in der Wüste verkaufen und einen riesigen Gewinn erzielen könnten."
    },
    "11-17": {
      "z": "Skorpion",
      "l": 2,
      "e": "Die Nummer zwei lehrt uns, dass nach einem Sturm der Taten Zeit für Diplomatie und den Aufbau harmonischer Beziehungen zur Umwelt kommt. Ihre Stärke liegt heute in der Fähigkeit, zuzuhören und die Feinheiten wahrzunehmen, die anderen in der täglichen Hektik entgehen.",
      "r": "Konzentrieren Sie sich auf die Zusammenarbeit und schätzen Sie den Beitrag anderer zu Ihren Projekten, indem Sie eine Atmosphäre des gegenseitigen Respekts schaffen. Vertrauen Sie in zwischenmenschlichen Beziehungen Ihrer Intuition, denn sie verrät Ihnen, wer Ihr wahrer Verbündeter ist.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Sich auf unnötige Streitigkeiten einlassen und seinen Willen dort durchsetzen, wo Kompromisse und Sanftmut erforderlich sind. Scheuen Sie sich nicht, um Rat zu fragen, denn der Austausch von Ideen kann heute zu einer Lösung führen, an die Sie vorher noch nicht gedacht haben.",
      "s": "Zwei Seelen, eine Harmonie",
      "fun": "Sie sind heute so einfühlsam, dass Sie einen Frieden zwischen einem Hund und einer Katze aushandeln könnten und beide Seiten wären glücklich."
    },
    "11-18": {
      "z": "Skorpion",
      "l": 3,
      "e": "Three ist ein freudiges Manifest Ihrer kreativen Seele, die sich durch Worte, Farben oder inspirierende Märchen ausdrücken möchte. Heute braucht die Welt Ihr Lächeln und Ihre Leichtigkeit, die selbst den dichtesten Novembernebel vertreiben kann.",
      "r": "Teilen Sie Ihre Freude und nutzen Sie Ihr Talent zum Geschichtenerzählen, um Hoffnung in das Leben anderer Menschen zu bringen. Erlauben Sie sich, bei Ihren Kreationen spontan zu sein, denn die brillantesten Ideen entstehen mit Spaß.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Verschwenden Sie Energie mit sinnlosem Jammern und Klatsch, was nur Ihre Schwingung senkt und Ihre Kreativität erstickt. Lassen Sie nicht zu, dass die kleinen Ärgernisse Ihrer Umgebung Ihren inneren Glanz auslöschen, der heute außergewöhnlich hell strahlt.",
      "s": "Schaffen Sie, weil die Welt es braucht",
      "fun": "Ihrer Kreativität sind keine Grenzen gesetzt – selbst ein gewöhnliches Abendessen, das Sie heute zubereiten, sieht aus wie eine Szene aus einem Disney-Film."
    },
    "11-19": {
      "z": "Skorpion",
      "l": 4,
      "e": "Four erinnert uns daran, dass hinter jedem schönen Märchen solide Arbeit und präzise Verfeinerung technischer Details stecken. Dies ist ein perfekter Tag zum Bearbeiten von Texten, zum Organisieren von Datenbanken und zum Aufbau von Strukturen, die die Zeit überdauern.",
      "r": "Konzentrieren Sie sich auf Details und erledigen Sie das, was besondere Aufmerksamkeit und einen zuverlässigen, professionellen Ansatz erfordert. Wählen Sie Disziplin, denn dank ihr werden Ihre kühnsten Träume wahr und stabil.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Chaos in Dokumenten und Entscheidungen ohne vorherige Prüfung von Fakten und realen Möglichkeiten. Unterschätzen Sie nicht die Abläufe, die Ihrer Sicherheit dienen, auch wenn sie im Moment zu eintönig erscheinen.",
      "s": "Kleine Schritte, bleibende Spuren",
      "fun": "Ihr heutiger Organisationsgrad bedeutet, dass sogar die Zeit genau so vergeht, wie Sie es in Ihrem Kalender geplant haben."
    },
    "11-20": {
      "z": "Skorpion",
      "l": 5,
      "e": "Fünf am Ende des Jahrzehnts bringt eine plötzliche Wende der Ereignisse und die Notwendigkeit mit sich, die Perspektive durch neue Erfahrungen aufzufrischen. Dies ist die Zeit, in der Ihre Flexibilität zum Schlüssel dafür wird, unerwartete Chancen zu nutzen, die Ihnen das Schicksal bietet.",
      "r": "Seien Sie offen für Veränderungen und seien Sie bereit, Ihre Pläne zu ändern, wenn Sie das Gefühl haben, dass ein neuer Weg schneller zum Ziel führt. Gehen Sie auf Menschen zu und lassen Sie sich durch den Austausch von Ideen zu den nächsten mutigen Schritten in der E-Book-Entwicklung inspirieren.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Angst vor dem Unbekannten und Festhalten an Zeitplänen, die angesichts neuer Fakten nicht mehr gültig sind. Scheuen Sie sich nicht, Risiken einzugehen, denn das Glück begünstigt heute diejenigen, die geschickt Muster durchbrechen können.",
      "s": "Jede Veränderung ist eine Einladung",
      "fun": "Heutzutage steckt in Ihnen so viel Reiseenergie, dass das Zeitunglesen unerwartet zu einem faszinierenden Abenteuer werden kann."
    },
    "11-21": {
      "z": "Skorpion",
      "l": 6,
      "e": "Die Zahl Sechs lenkt Ihre Aufmerksamkeit auf den Bereich der Beziehungen und erinnert Sie daran, dass Harmonie im Kontakt mit Menschen die Grundlage für inneren Frieden ist. Dies ist der Moment, in dem Ihre fürsorgliche Art zur Unterstützung für jeden werden kann, der heute ein wenig Wärme und Verständnis braucht.",
      "r": "Konzentrieren Sie sich darauf, Bindungen zu Menschen zu pflegen, die Ihnen wichtig sind, und sorgen Sie für eine warme Atmosphäre in Ihrer Umgebung. Entscheiden Sie sich für Dialog und Diplomatie, denn sie bilden die stärkste Grundlage für Ihre zukünftigen Erfolge.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Andere anhand ihrer momentanen Fehler beurteilen und Verantwortung für ihre Lebenslektionen übernehmen. Suchen Sie in Beziehungen nicht nach Perfektion, sondern konzentrieren Sie sich auf Ehrlichkeit, die viel erhebender und befreiender ist.",
      "s": "Fürsorge verändert alles",
      "fun": "Sie sind heute so freundlich zur Welt, dass sogar Ihre Haushaltsgeräte leiser zu arbeiten scheinen, um Ihre Ruhe nicht zu stören."
    },
    "11-22": {
      "z": "Schütze",
      "l": 7,
      "e": "Seven lädt Sie ein, Ihre bisherigen Erfolge eingehend zu analysieren und nach der Essenz dessen zu suchen, was Sie schaffen. Dies ist ein Sonntag, der die Einsamkeit begünstigt, die keine Isolation bedeutet, sondern eine bewusste Entscheidung, auf die eigene, weise Stimme zu hören.",
      "r": "Nehmen Sie sich Zeit, die inhaltliche Ebene Ihrer Arbeit zu verfeinern und vertrauen Sie den Offenbarungen, die sich in Momenten der Stille ergeben. Gönnen Sie sich den Luxus, hier und jetzt zu sein, ohne jeden weiteren Schritt planen zu müssen.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Laufen Sie vor schwierigen Fragen zu Ihrer Mission davon und übertönen Sie Ihre Intuition mit lauter Musik oder zu vielen Informationen aus den Medien. Hüten Sie sich vor Oberflächlichkeit, denn die wahren Perlen der Weisheit verbergen sich tief unter der Oberfläche der heutigen Ereignisse.",
      "s": "Tiefer als du sehen kannst",
      "fun": "Ihre Aura der weisen Eule ist heute so ausgeprägt, dass selbst Ihr Lieblingstee in einem philosophischen Rhythmus zu dampfen scheint."
    },
    "11-23": {
      "z": "Schütze",
      "l": 8,
      "e": "Nummer Acht bringt kraftvolle Entscheidungskraft mit, die es Ihnen ermöglicht, einen echten Einfluss auf die Struktur Ihrer Finanzen und Marktposition zu nehmen. Dies ist der Tag, an dem Ihre Entschlossenheit und Professionalität wahrgenommen werden und Ihnen die Tür zu konkreten materiellen Erfolgen öffnen wird.",
      "r": "Ergreifen Sie bei Verhandlungen die Initiative und scheuen Sie sich nicht, nach den Belohnungen zu greifen, die das Ergebnis Ihrer fleißigen, monatelanger Arbeit sind. Bauen Sie Ihre Autorität auf soliden Fakten auf, denn Zuverlässigkeit ist heute Ihre stärkste Währung.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Entscheidungen auf der Grundlage von Emotionen und übermäßigem Risiko treffen, die nicht durch eine solide Berechnung der Möglichkeiten gestützt werden. Hüten Sie sich vor Arroganz, denn die wahre Macht einer Führungskraft zeigt sich in Selbstbeherrschung und Respekt gegenüber Partnern.",
      "s": "Man baut – und es bleibt",
      "fun": "Heute wirken Sie wie ein Anführer, vor dem selbst die größten Staus auf dem Weg zum Erreichen Ihrer Ziele umgangen werden können."
    },
    "11-24": {
      "z": "Schütze",
      "l": 9,
      "e": "Die Neun erinnern uns an die Notwendigkeit einer gründlichen Reinigung vor dem bevorstehenden neuen Dezemberzyklus. Dies ist die Zeit, alte Denkmuster loszulassen, die Ihre Kreativität blockieren und es Ihren Talenten nicht ermöglichen, sich voll zu entfalten.",
      "r": "Beenden Sie alle Kapitel, die Sie begonnen haben, und lassen Sie dankbar los, was nicht mehr Ihre Leidenschaft oder Mission ist. Geben Sie Ihrem Herzen Vergebung für vergangene Fehler und erkennen Sie sie als wertvolle Lektionen an, die Ihre aktuelle Stärke gestärkt haben.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Festhalten an der Vergangenheit und an Menschen, deren Energie nicht mehr mit der neuen Version von dir übereinstimmt. Geben Sie nicht der Melancholie nach, denn jedes Ende ist tatsächlich eine freudige Einführung in etwas viel Größeres.",
      "s": "Weisheit tut weh, bevor sie untergeht",
      "fun": "Heutzutage sind Sie beim Aufräumen so gut, dass sich selbst die Symbole auf Ihrem Desktop aus Angst, gelöscht zu werden, in alphabetischer Reihenfolge anordnen."
    },
    "11-25": {
      "z": "Schütze",
      "l": 1,
      "e": "Eine davon entfacht den Funken einer neuen Initiative und ermutigt Sie, Ihre Authentizität und Ihre einzigartigen Talente mutig zu zeigen. Dies ist der perfekte Moment für Sie, mit vollem Vertrauen in sich selbst ein Projekt zu starten, das bisher nur ein Traum geblieben ist.",
      "r": "Entscheiden Sie sich für Originalität und haben Sie keine Angst, der Welt Ihre kühnsten und innovativsten Ideen zu präsentieren. Seien Sie der Erste, der voll und ganz an den Erfolg Ihrer Vision glaubt und diesen einen, entscheidenden Schritt nach vorne macht.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Warten Sie auf die Zustimmung anderer und kopieren Sie die Lösungen anderer Leute, die Ihren natürlichen Glanz trüben könnten. Lassen Sie sich nicht von der Unsicherheit davon abhalten, Maßnahmen zu ergreifen, denn die Energie des Anfangs begünstigt Sie heute.",
      "s": "Fangen Sie an – der Rest kommt",
      "fun": "Ihr Selbstbewusstsein strahlt heute so sehr, dass Sie selbst den hartgesottensten Pessimisten mit Begeisterung anstecken könnten."
    },
    "11-26": {
      "z": "Schütze",
      "l": 2,
      "e": "Die Nummer zwei lehrt uns, dass die größte Stärke in der Diplomatie und der Fähigkeit liegt, Brücken der Verständigung zwischen Menschen zu bauen. Ihre Sensibilität wird heute zu Ihrem größten Kapital und ermöglicht es Ihnen, Spannungen durch Sanftheit und Dialog abzubauen.",
      "r": "Konzentrieren Sie sich darauf, zuzuhören, was nicht laut gesagt wird, und bauen Sie Beziehungen auf, die auf gegenseitigem Vertrauen basieren. Pflegen Sie die Zusammenarbeit, denn es ist der Austausch von Ideen, der Ihnen heute eine Lösung bringen wird, die Sie sich alleine nicht vorstellen könnten.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Sich auf unnötige Streitigkeiten einlassen und seinen Willen dort durchsetzen, wo Sanftmut und Verständnis gefragt sind. Scheuen Sie sich nicht, um Rat zu fragen, denn die Weisheit anderer kann heute Ihr wertvoller Leitfaden sein.",
      "s": "Zwei Seelen, eine Harmonie",
      "fun": "Sie sind heute so einfühlsam, dass Sie einen Frieden zwischen einem Hund und einer Katze aushandeln könnten und beide Seiten es für eine faire Lösung halten würden."
    },
    "11-27": {
      "z": "Schütze",
      "l": 3,
      "e": "Three ist ein freudiges Manifest Ihrer kreativen Seele, die sich durch Worte und inspirierende Geschichten ausdrücken möchte. Die Welt braucht heute Ihre Leichtigkeit, die selbst den wolkigsten Novembermorgen erhellen kann.",
      "r": "Teilen Sie Ihre Freude und nutzen Sie Ihr Talent, Märchen zu erzählen, um Hoffnung und Lächeln in das Leben Ihrer Leser zu bringen. Erlauben Sie sich, spontan zu sein, denn im freien Spiel entstehen die brillantesten Ideen.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Verschwenden Sie Zeit mit sinnlosem Jammern und Klatsch, der Ihre Schwingung senkt und Ihre natürliche Kreativität unterdrückt. Lassen Sie nicht zu, dass die kleinen Ärgernisse Ihrer Umgebung Ihren inneren Glanz auslöschen, der heute außergewöhnlich hell strahlt.",
      "s": "Schaffen Sie, weil die Welt es braucht",
      "fun": "Ihrer Kreativität sind heute keine Grenzen gesetzt – selbst ein gewöhnliches Abendessen, das Sie zubereiten, sieht aus wie eine Szene aus einem Zeichentrickfilm."
    },
    "11-28": {
      "z": "Schütze",
      "l": 4,
      "e": "Four erinnert uns daran, dass hinter jeder schönen Vision solide Arbeit und eine präzise Verfeinerung der technischen Details Ihres E-Books stehen. Dies ist ein perfekter Tag zum Bearbeiten von Texten, zum Organisieren von Datenbanken und zum Aufbau von Strukturen, die die Zeit überdauern.",
      "r": "Konzentrieren Sie sich auf Details und erledigen Sie das, was besondere Aufmerksamkeit und einen zuverlässigen Umgang mit den Fakten erfordert. Wählen Sie Disziplin, denn dank ihr werden Ihre kühnsten Träume wahr, stabil und dauerhaft.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Chaos in Dokumenten und Entscheidungen, ohne vorher alle verfügbaren Fakten und Möglichkeiten zu prüfen. Ignorieren Sie nicht die Regeln, die Ihre Sicherheit schützen, auch wenn sie im Moment zu eintönig erscheinen.",
      "s": "Kleine Schritte, bleibende Spuren",
      "fun": "Ihr heutiger Organisationsgrad bedeutet, dass sogar die Zeit genau so vergeht, wie Sie es in Ihrem Kalender geplant haben."
    },
    "11-29": {
      "z": "Schütze",
      "l": 5,
      "e": "Fünf bringt plötzlich das Bedürfnis mit sich, die eigene Perspektive aufzufrischen und über die sichere, aber manchmal zu vorhersehbare Routine hinauszugehen. Dies ist die Zeit, in der Ihre Flexibilität zum Schlüssel wird, um unerwartete Chancen zu nutzen, die Ihnen das Schicksal am Ende des Monats bietet.",
      "r": "Seien Sie offen für Veränderungen und seien Sie bereit, Ihre Pläne zu ändern, wenn Sie das Gefühl haben, dass ein neuer Weg schneller zum Ziel führt. Gehen Sie auf Menschen zu und lassen Sie sich durch den Gedankenaustausch zu den nächsten mutigen Schritten in der Entwicklung Ihrer Märchen inspirieren.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Angst vor dem Unbekannten und das Festhalten an Zeitplänen, die angesichts neuer Möglichkeiten nicht mehr gültig sind. Scheuen Sie sich nicht, Risiken einzugehen, denn das Glück begünstigt heute diejenigen, die geschickt Muster durchbrechen können.",
      "s": "Jede Veränderung ist eine Einladung",
      "fun": "Heute haben Sie so viel Entdeckerenergie, dass der Gang in den Laden unerwartet zu einem faszinierenden Mikroabenteuer werden kann."
    },
    "11-30": {
      "z": "Schütze",
      "l": 6,
      "e": "Nummer Sechs schließt den Monat mit der Energie der Harmonie und der Pflege von Beziehungen ab, die den wichtigsten Bezugspunkt in Ihrem Leben darstellen. Dies ist eine Zeit, um Brücken zu bauen und die Bindungen zu schätzen, die einem das Gefühl geben, geliebt, gebraucht und vollständig verstanden zu werden.",
      "r": "Achten Sie auf die Ästhetik Ihres Raumes und schaffen Sie eine Atmosphäre, die dazu einlädt, mit Freude Pläne für die kommende Zeit zu schmieden. Konzentrieren Sie sich darauf, Nähe zu pflegen, denn sie ist Ihre stärkste Unterstützung bei jeder Herausforderung im Leben.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Übernehmen Sie die Rolle eines Opfers der Launen anderer Menschen und übernehmen Sie die volle Verantwortung für das Wohlergehen aller um Sie herum. Suchen Sie nicht im Alltag nach Perfektion, sondern genießen Sie den Moment, der in seiner Authentizität schön ist.",
      "s": "Fürsorge verändert alles",
      "fun": "Ihre Aura des Beschützens ist heute so stark, dass sogar der Kaktus auf der Fensterbank etwas gemütlicher aussieht."
    },
    "12-1": {
      "z": "Schütze",
      "l": 5,
      "e": "Der Freitag zu Beginn des Monats bringt einen belebenden Hauch von Freiheit und ermutigt Sie, über den Rahmen bestehender Muster hinauszugehen. Dies ist der perfekte Zeitpunkt, um vor dem bevorstehenden Jahresende ein wenig Spontaneität zu wagen, die Ihren Geist und Ihr Herz erfrischt.",
      "r": "Nehmen Sie aufkommende Änderungsvorschläge an und seien Sie offen für neue, faszinierende Inspirationen, die Ihre Projekte bereichern können. Wählen Sie einen anderen Weg zu Ihrem Ziel als gewöhnlich, um den Nervenkitzel zu spüren, das Unbekannte zu entdecken.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Monotonie und Stagnation können deprimierend sein und Ihre Vitalität unnötig rauben. Halten Sie nicht an Ihren Plänen fest, wenn Ihnen das Leben heute viel interessantere und farbenfrohere Alternativen bietet.",
      "s": "Freiheit ist eine Entscheidung",
      "fun": "Ihr Bedürfnis nach Freiheit ist heute so groß, dass das Ausgehen zum Tee ungewollt mit einem spontanen Spaziergang in eine völlig neue Richtung enden kann."
    },
    "12-2": {
      "z": "Schütze",
      "l": 6,
      "e": "The Six lädt Sie in die Welt der Harmonie ein, in der Liebe und Fürsorge für Ihre Lieben zu einem natürlichen Leitfaden für Ihr Handeln werden. Heute wird Ihre Umgebung zu einer Quelle außergewöhnlicher Stärke, solange Sie auf die Schönheit Ihrer Beziehungen und den gegenseitigen Respekt Ihrer Haushaltsmitglieder achten.",
      "r": "Schaffen Sie eine warme Atmosphäre in Ihrem Zuhause und verbringen Sie wertvolle Zeit mit den Menschen, die Ihnen am wichtigsten sind. Konzentrieren Sie sich auf kleine Gesten der Freundlichkeit, die das Gefühl vermitteln, von Ihren Lieben geliebt und vollständig akzeptiert zu werden.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Nehmen Sie zu viele Probleme anderer Menschen auf sich, was Ihre eigene Freude und Ihren Seelenfrieden unnötigerweise überschatten könnte. Vermeiden Sie Perfektionismus, denn eine aufrichtige Präsenz ist viel wichtiger als ein perfekt vorbereitetes Umfeld.",
      "s": "Schönheit ist ein Akt des Mutes",
      "fun": "Ihre Aura des Schutzes ist heute so stark, dass sogar Ihre Pflanzen ihre Blätter Ihrer Wärme entgegenstrecken."
    },
    "12-3": {
      "z": "Schütze",
      "l": 7,
      "e": "Sieben ist eine Zeit tiefer Selbstbeobachtung, in der Stille zu Ihrem treuesten Lehrer der Lebensweisheit wird. Wenn Sie äußere Reize zum Schweigen bringen, können Sie in der alltäglichen Hektik die Antworten hören, nach denen Sie schon lange gesucht haben.",
      "r": "Finden Sie einen Moment zum Meditieren oder zum ruhigen Lesen, der Ihr Interieur bereichert und Ihnen den lang ersehnten Seelenfrieden bringt. Vertrauen Sie Ihrer Intuition, denn ihre Stimme ist heute außergewöhnlich rein, klar und verdient volles Vertrauen.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Lärm und oberflächliche Unterhaltung, die Ihre Aufmerksamkeit ablenken und die in der Stille entstandene innere Ordnung zerstören können. Scheuen Sie sich nicht vor Fragen nach dem tieferen Sinn Ihres Weges, denn die Konfrontation damit bringt wahre Befreiung und Entwicklung.",
      "s": "Die Frage ist wichtiger als die Antwort",
      "fun": "Heute geht es Ihnen wie unserer Lieblingseule: Sie beobachten die Welt aus der Ferne und wissen viel mehr über sie, als Sie preisgeben."
    },
    "12-4": {
      "z": "Schütze",
      "l": 8,
      "e": "Acht ruft Sie dazu auf, Charakterstärke und Mut im Umgang mit Ihrer eigenen Energie und Ressourcen zu zeigen. Heute befindet sich Ihre Agentur auf dem höchsten Niveau, das es Ihnen ermöglicht, auch die komplexesten professionellen Projekte erfolgreich abzuschließen.",
      "r": "Ergreifen Sie mutige Initiativen in Ihren Angelegenheiten und scheuen Sie sich nicht, nach der Anerkennung und dem Erfolg zu streben, die Sie verdienen. Bauen Sie Ihre Autorität auf der Grundlage von Ehrlichkeit auf, denn nur zuverlässiges und faires Handeln führt zu dauerhaften Ergebnissen.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Treffen Sie Entscheidungen in Eile oder unter dem Einfluss negativer Emotionen, die Ihr Urteilsvermögen für die Realität vorübergehend trüben könnten. Vermeiden Sie Arroganz und denken Sie daran, dass sich wahre Macht am besten in ruhigem und selbstbewusstem Handeln manifestiert.",
      "s": "Macht dient, nicht dominiert",
      "fun": "Heute sehen Sie aus wie ein Anführer, der selbst die größten Widrigkeiten und alltäglichen Hindernisse meistert."
    },
    "12-5": {
      "z": "Schütze",
      "l": 9,
      "e": "Die Neun erinnern Sie an die Weisheit, die sich aus dem Abschluss von Etappen ergibt, die bereits ihren Zweck auf Ihrer Lebensreise erfüllt haben. Dies ist eine Zeit großer Transformation, die Sie darauf vorbereitet, völlig neue, faszinierende Impulse des Schicksals anzunehmen.",
      "r": "Verzeihen Sie vergangene Verletzungen und danken Sie der Vergangenheit für all die Lektionen, die Sie zu einem so bewussten und starken Menschen gemacht haben. Nehmen Sie sich einen Moment Zeit, um Ihre bisherigen Erfolge zusammenzufassen und lassen Sie dankbar los, was Ihnen nicht mehr dient.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Klammern Sie sich nicht an Dingen, die Ihre Entwicklung nicht mehr unterstützen, sondern öffnen Sie Ihre Hände, um neue Gaben anzunehmen. Vermeiden Sie es, traurig zu sein, wenn etwas verschwindet, denn jede Veränderung ist ein Versprechen auf eine bessere und klügere Zukunft.",
      "s": "Anmutig schließen – dankbar öffnen",
      "fun": "Heutzutage führen Sie eine solche emotionale Reinigung durch, dass selbst die Symbole auf Ihrem Computer-Desktop aus Angst, gelöscht zu werden, in perfekter Ordnung angeordnet werden."
    },
    "12-6": {
      "z": "Schütze",
      "l": 1,
      "e": "Man entfacht den Funken einer neuen Initiative und ermutigt Sie, im vollen Glanz Ihrer eigenen Möglichkeiten und Träume zu stehen. Dies ist der Tag, an dem jeder Ihrer bahnbrechenden Gedanken die Kraft hat, der Beginn einer neuen, außergewöhnlichen Geschichte zu werden.",
      "r": "Zeigen Sie Unabhängigkeit und gehen Sie das Risiko ein, Ihre eigene, mutige Entwicklungsidee umzusetzen. Vertrauen Sie Ihrer Durchbruchskraft und seien Sie der Erste, der heute ohne zu zögern an Ihren persönlichen Sieg glaubt.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Beobachten Sie die Meinungen anderer und warten Sie auf deren Zustimmung, denn Sie sind heute der einzige Kapitän Ihres Schiffes. Zögern Sie nicht, Maßnahmen zu ergreifen, denn die heutige Energie begünstigt diejenigen, die mutig und entschlossen voranschreiten.",
      "s": "Dein Weg, dein Rhythmus",
      "fun": "Ihre Begeisterung ist heute so groß, dass Sie eine neue Mode starten könnten, indem Sie einfach mit einem gewinnenden Lächeln durch die Welt gehen."
    },
    "12-7": {
      "z": "Schütze",
      "l": 2,
      "e": "Zwei lehrt uns, dass die größte Stärke oft in Sanftmut und der Fähigkeit liegt, harmonische Beziehungen aufzubauen. Heute wird Ihre Diplomatie zum Schlüssel, der die Tür zu den Herzen der Menschen öffnet, die für Ihren Frieden wichtig sind.",
      "r": "Suchen Sie nach Verständnis und bauen Sie Brücken, wo bisher Distanz oder unnötige, ermüdende Anspannung herrschte. Pflegen Sie die Zusammenarbeit und schätzen Sie kleine Gesten, die ein Gemeinschaftsgefühl und gegenseitiges Vertrauen zwischen den Menschen schaffen.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Rivalitäten und Konflikte, die die fragile Atmosphäre der heutigen Harmonie unnötig zerstören könnten. Scheuen Sie sich nicht, um Unterstützung zu bitten, denn eine Zusammenarbeit wird Ihnen heute viel mehr Vorteile bringen, als allein Herausforderungen zu meistern.",
      "s": "Sanftmut ist Stärke",
      "fun": "Heute reagieren Sie so sensibel auf die Stimmungen anderer, dass Sie die Bedürfnisse Ihrer Lieben verstehen, ohne ein einziges Wort zu gebrauchen."
    },
    "12-8": {
      "z": "Schütze",
      "l": 3,
      "e": "Das Trio bringt einen fröhlichen Tanz der Kreativität mit, der einen Wintertag in ein faszinierendes Abenteuer voller neuer Farben verwandelt. Erlauben Sie sich zu lachen, denn gute Energie ist der beste Treibstoff für Ihre Seele und Ihre kreativen Aktivitäten.",
      "r": "Drücken Sie sich heute durch Kunst, Worte oder ein freudiges Gespräch mit jemandem aus, der Ihre Unterstützung braucht. Teilen Sie Ihren natürlichen Optimismus und inspirieren Sie andere, Schönheit in den kleinsten Details der Realität zu sehen.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Übermäßige Ernsthaftigkeit und Sorge um Angelegenheiten, auf die Sie heute keinen wirklichen Einfluss haben. Unterdrücken Sie nicht Ihre kreative Natur und lassen Sie sie bei jeder Aktion, die Sie heute unternehmen, frei entfalten.",
      "s": "Einfacher bedeutet weiter",
      "fun": "Ihre Energiedosis ist heute so groß, dass Sie allein mit Ihrem glücklichen Lächeln den gesamten Bereich erhellen könnten."
    },
    "12-9": {
      "z": "Schütze",
      "l": 4,
      "e": "Nummer vier erinnert uns an den Wert solider Grundlagen, auf denen wir unser Gefühl von Sicherheit und Stabilität aufbauen. Ihre Regelmäßigkeit wird heute geschätzt und bringt Ihnen Frieden und Zufriedenheit mit einer gut erledigten Arbeit.",
      "r": "Konzentrieren Sie sich auf den Abschluss der begonnenen Projekte und stellen Sie sicher, dass die Angelegenheiten, die Ihre Aufmerksamkeit erfordern, in perfekter Ordnung sind. Bauen Sie Ihre Zukunft Schritt für Schritt auf und wissen Sie, dass solide Arbeit immer die nachhaltigsten und schönsten Früchte bringt.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Plötzliche und unüberlegte Planänderungen, die Ihre bestehende Ordnung unnötig stören könnten. Erliegen Sie nicht dem Chaos, sondern halten Sie sich an einen vorher festgelegten Aktionsplan, der Ihnen ein Gefühl der Kontrolle gibt.",
      "s": "Solidität ist Poesie",
      "fun": "Ihre Liebe zur Ordnung sorgt heute dafür, dass selbst Ihre Schuhe direkt nach dem Ausziehen zu einem perfekten Paar passen."
    },
    "12-10": {
      "z": "Schütze",
      "l": 5,
      "e": "Five bringt einen Hauch von Freiheit und ermutigt Sie, Ihre Perspektive durch neue, interessante Erfahrungen aufzufrischen. Dies ist die Zeit, in der Ihre Flexibilität zum Schlüssel dafür wird, unerwartete Chancen zu nutzen, die Ihnen das Schicksal bietet.",
      "r": "Seien Sie offen für Veränderungen und seien Sie bereit, Ihre Pläne zu ändern, wenn Sie das Gefühl haben, dass ein neuer Weg schneller zum Ziel führt. Gehen Sie auf Menschen zu und lassen Sie sich durch den Gedankenaustausch zu weiteren, mutigen Schritten in der Entwicklung Ihrer Aktivitäten inspirieren.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Angst vor dem Unbekannten und das Festhalten an nicht mehr gültigen Zeitplänen. Scheuen Sie sich nicht, Risiken einzugehen, denn das Glück begünstigt heute diejenigen, die geschickt Muster durchbrechen können.",
      "s": "Freiheit ist eine Entscheidung",
      "fun": "Heute haben Sie so viel Entdeckergeist, dass ein einfacher Spaziergang unerwartet zu einem kleinen Abenteuer werden kann."
    },
    "12-11": {
      "z": "Schütze",
      "l": 6,
      "e": "Die Zahl Sechs lenkt Ihre Aufmerksamkeit auf die häusliche Sphäre und erinnert Sie daran, dass Harmonie in Ihrer unmittelbaren Umgebung die Grundlage jedes Erfolgs ist. Dies ist der perfekte Zeitpunkt, sich um die Details zu kümmern, die Ihren Raum freundlicher und friedlicher machen.",
      "r": "Nehmen Sie sich die Zeit, Beziehungen zu Menschen aufzubauen, die Ihnen ein Gefühl von Sicherheit und bedingungsloser Akzeptanz vermitteln. Schaffen Sie eine Atmosphäre, die die Regeneration fördert, denn Ihre Fürsorge für andere beginnt mit der Sorge um Ihr eigenes Wohlbefinden.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Als Vermittler bei Streitigkeiten fungieren, die Sie nicht betreffen und Ihre Energie unnötig belasten könnten. Suchen Sie nicht nach Perfektion, wenn eine aufrichtige Präsenz und ein warmes, unterstützendes Wort ausreichen.",
      "s": "Schönheit ist ein Akt des Mutes",
      "fun": "Sie sind heute so eine Oase der Ruhe, dass sogar Ihr Lieblingstee langsamer zu verdunsten scheint, um Ihre Harmonie nicht zu stören."
    },
    "12-12": {
      "z": "Schütze",
      "l": 7,
      "e": "Seven lädt Sie in die Welt der inneren Stille ein, in der sich die Antworten auf die wichtigsten Fragen ohne unnötigen Aufwand von selbst ergeben. Dies ist eine Zeit der intellektuellen Einsicht, die es Ihnen ermöglichen wird, die tiefere Bedeutung der Ereignisse der letzten Monate zu erkennen.",
      "r": "Reservieren Sie sich einen Moment für persönliche Reflexion oder kreative Arbeit, die volle Konzentration und Abstand von Reizen erfordert. Vertrauen Sie Ihrer Intuition, denn sie wird Ihnen heute sagen, welche Ihrer Ideen das größte Wachstumspotenzial haben.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Lenken Sie sich mit oberflächlichen Dingen ab und flüchten Sie von Ihren eigenen Gedanken hin zu lauten Gesprächen. Beeilen Sie sich nicht, Ihre Pläne öffentlich bekannt zu geben, bis Sie das Gefühl haben, dass sie völlig ausgereift und klar sind.",
      "s": "Die Frage ist wichtiger als die Antwort",
      "fun": "Ihre Aura einer weisen Eule ist heute so stark, dass sogar Ihr Spiegelbild Sie mit spürbarem Respekt ansieht."
    },
    "12-13": {
      "z": "Schütze",
      "l": 8,
      "e": "Acht bringt in Ihren Tag die Schwingung der Wirksamkeit und der konkreten Verwirklichung von Absichten, an denen Sie schon lange gearbeitet haben. Dies ist der Moment für Sie, die volle Verantwortung zu übernehmen und mit großem Selbstvertrauen mit der Leitung Ihrer Projekte zu beginnen.",
      "r": "Treffen Sie konkrete Entscheidungen bezüglich Ihrer Ressourcen und zeigen Sie Entschlossenheit bei der Erreichung der festgelegten Standards. Bauen Sie Ihre Autorität auf soliden Fakten auf und denken Sie daran, dass Professionalität heute Ihr effektivster Verbündeter ist.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Unsicherheit über die eigenen Kompetenzen und die Übergabe der Kontrolle über wichtige Angelegenheiten an Dritte. Hüten Sie sich vor Arroganz, denn echte Stärke bedarf keiner Demonstration, um von Ihren Mitmenschen wahrgenommen und geschätzt zu werden.",
      "s": "Macht dient, nicht dominiert",
      "fun": "Sie verfügen heute über eine solche Autorität, dass unter Ihrem entschlossenen Blick sogar Haushaltsgeräte effizienter zu arbeiten scheinen."
    },
    "12-14": {
      "z": "Schütze",
      "l": 9,
      "e": "Die Neun erinnern Sie an die Notwendigkeit, Angelegenheiten abzuschließen und sich von Lasten zu befreien, die nicht mehr zu Ihrer neuen Zukunftsvision passen. Dies ist eine Zeit großer, energetischer Reinigung, die Raum für das schafft, was im kommenden Jahr passieren wird.",
      "r": "Machen Sie eine Bestandsaufnahme Ihrer Pläne und verabschieden Sie sich mutig von Projekten, die nicht mehr Ihre Leidenschaft oder Mission sind. Zeigen Sie Dankbarkeit für jede Lektion, die Sie erhalten haben, und erkennen Sie sie als wertvolle Grundlage für Ihre aktuelle Weisheit an.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Festhalten an der Vergangenheit und an Situationen, die Sie nicht mehr mit gemeinsamen Werten oder Zielen verbinden. Geben Sie nicht der Melancholie nach, denn jedes Ende ist eigentlich ein freudiger Empfang einer neuen Version von Ihnen.",
      "s": "Anmutig schließen – dankbar öffnen",
      "fun": "Sie räumen heute so viel auf, dass selbst der virtuelle Mülleimer auf Ihrem Computer von einer kurzen Auszeit von Ihrem Glanz träumt."
    },
    "12-15": {
      "z": "Schütze",
      "l": 1,
      "e": "Man entfacht den Funken neuer Initiative und ermutigt Sie, mit noch größerem Selbstvertrauen der Architekt Ihres eigenen Schicksals zu sein. Dies ist der Tag der Pioniere, an dem Ihrer Kreativität keine Grenzen gesetzt sind und jede Idee die Chance hat, zur Grundlage des Erfolgs zu werden.",
      "r": "Übernehmen Sie die Kontrolle über wichtige Aktivitäten und vertrauen Sie Ihrer Vision, auch wenn sie Ihren Mitmenschen zu gewagt erscheint. Seien Sie Ihr bester Freund und die erste Person, die heute völlig an Ihren Sieg glaubt.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Auf andere schauen und auf Zustimmung warten, was Ihren natürlichen, kreativen Drang nach vorne unterdrücken könnte. Scheuen Sie sich nicht davor, auf eigene Faust zu handeln, denn hier werden Sie heute Ihre größten und einzigartigsten Ressourcen entdecken.",
      "s": "Dein Weg, dein Rhythmus",
      "fun": "Ihr Selbstbewusstsein strahlt heute so sehr, dass es den wolkigsten Dezembermorgen erhellen könnte."
    },
    "12-16": {
      "z": "Schütze",
      "l": 2,
      "e": "Die Nummer zwei lehrt uns, dass nach einem Sturm der Taten Zeit für Diplomatie und den Aufbau harmonischer Beziehungen zur Umwelt kommt. Ihre Stärke heute liegt in Ihrer Fähigkeit, zuzuhören und Feinheiten wahrzunehmen, die andere in ihrer alltäglichen Hektik normalerweise übersehen.",
      "r": "Konzentrieren Sie sich auf die Zusammenarbeit und schätzen Sie den Beitrag anderer zu Ihren Projekten und schaffen Sie so eine Atmosphäre gegenseitigen Respekts und Vertrauens. Vertrauen Sie in Beziehungen Ihrer Intuition, denn sie wird Ihnen sagen, wer Ihr treuester Verbündeter ist.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Sich auf unnötige Streitigkeiten einlassen und seinen Willen dort durchsetzen, wo Kompromisse und Sanftmut erforderlich sind. Scheuen Sie sich nicht, um Rat zu fragen, denn der Austausch von Ideen kann zu einer Lösung führen, an die Sie vorher noch nicht gedacht haben.",
      "s": "Sanftmut ist Stärke",
      "fun": "Sie sind heute so einfühlsam, dass Sie die Bedürfnisse Ihrer Lieben verstehen, noch bevor diese die Möglichkeit haben, sie in Gedanken zu formulieren."
    },
    "12-17": {
      "z": "Schütze",
      "l": 3,
      "e": "Three ist ein freudiges Manifest Ihrer kreativen Seele, die sich durch Worte, Farben oder inspirierende Gespräche ausdrücken möchte. Heute braucht die Welt Ihr Lächeln und Ihre Leichtigkeit, die die Ernsthaftigkeit der Winteraura vertreiben können.",
      "r": "Teilen Sie Ihre Freude und nutzen Sie Ihr Talent zum Geschichtenerzählen, um Hoffnung in das Leben der Menschen zu bringen, denen Sie begegnen. Erlauben Sie sich, bei Ihrer Kreation spontan zu sein, denn die brillantesten Ideen entstehen im freien Spiel.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Verschwende deine Energie mit sinnlosem Jammern und Klatsch, was nur deine Schwingung senkt und deine natürliche Kreativität unterdrückt. Lassen Sie nicht zu, dass die kleinen Ärgernisse Ihrer Umgebung Ihren inneren Glanz auslöschen, der heute außergewöhnlich hell strahlt.",
      "s": "Einfacher bedeutet weiter",
      "fun": "Ihrer Kreativität sind keine Grenzen gesetzt – schon eine einfache Notiz in Ihrem Kalender sieht aus wie der Beginn eines Bestseller-Märchens."
    },
    "12-18": {
      "z": "Schütze",
      "l": 4,
      "e": "Four erinnert uns daran, dass hinter jeder schönen Vision solide Arbeit und präzise Verfeinerung technischer Details stehen. Dies ist ein idealer Tag, um Angelegenheiten zu klären, die besondere Aufmerksamkeit und eine zuverlässige, professionelle Vorgehensweise erfordern.",
      "r": "Konzentrieren Sie sich auf die Details und erledigen Sie die Dinge, die Disziplin und Faktenprüfung erfordern, bevor Sie die Entwürfe fertigstellen. Entscheiden Sie sich für Zuverlässigkeit, denn dank ihr werden Ihre kühnsten Träume wahr, stabil und sehr langlebig.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Chaos in Dokumenten und Entscheidungen ohne vorherige inhaltliche Vorbereitung und Prüfung realer Möglichkeiten. Unterschätzen Sie nicht die Abläufe, die Ihrer Stabilität dienen, auch wenn sie im Moment zu eintönig erscheinen.",
      "s": "Solidität ist Poesie",
      "fun": "Ihr Organisationsgrad ist heute so hoch, dass selbst die Schneeflocken vor Ihrem Fenster in zu geringer Reihenfolge zu fallen scheinen."
    },
    "12-19": {
      "z": "Schütze",
      "l": 5,
      "e": "Fünf bringt plötzlich das Bedürfnis mit sich, die eigene Perspektive aufzufrischen und über den sicheren, aber manchmal zu vorhersehbaren Alltag hinauszugehen. Dies ist die Zeit, in der Ihre Flexibilität zum Schlüssel dafür wird, unerwartete Chancen zu nutzen, die Ihnen das Schicksal bietet.",
      "r": "Seien Sie offen für Veränderungen und seien Sie bereit, Ihre Pläne zu ändern, wenn Sie das Gefühl haben, dass ein neuer Weg Sie schneller an Ihr Ziel führt. Gehen Sie auf Menschen zu und lassen Sie sich durch den Austausch zu weiteren, mutigen Schritten in der Entwicklung Ihrer Kreativität inspirieren.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Angst vor dem Unbekannten und Festhalten an Zeitplänen, die angesichts neuer Fakten nicht mehr gültig sind. Scheuen Sie sich nicht, Risiken einzugehen, denn das Glück begünstigt heute diejenigen, die mit Anmut und Ruhe Muster durchbrechen können.",
      "s": "Freiheit ist eine Entscheidung",
      "fun": "Heute haben Sie so viel Entdeckergeist, dass der Besuch eines nahegelegenen Ladens unerwartet zu einem faszinierenden Abenteuer werden kann."
    },
    "12-20": {
      "z": "Schütze",
      "l": 6,
      "e": "Die Sechs schließen dieses Jahrzehnt mit der Energie der Harmonie und häuslicher Wärme ab und ermutigen Sie, langsamer zu werden und sich auf das Wertvollste zu konzentrieren. Dies ist ein Moment des Brückenbaus und der freudigen Wertschätzung der Bindungen, die einem das Gefühl geben, geliebt und verstanden zu werden.",
      "r": "Achten Sie auf die Ästhetik Ihres Raumes und schaffen Sie eine Atmosphäre, die dazu einlädt, mit Freude Pläne für die kommende Zeit zu schmieden. Konzentrieren Sie sich auf die Pflege Ihrer Beziehungen, denn diese sind Ihre stärkste Unterstützung bei jeder Herausforderung im Leben.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Übernehmen Sie die Rolle eines Opfers der Launen anderer Menschen und übernehmen Sie Verantwortung für das Wohlergehen aller um Sie herum. Suchen Sie nicht im Alltag nach Perfektion, sondern genießen Sie den Moment, der in seiner Authentizität schön ist.",
      "s": "Schönheit ist ein Akt des Mutes",
      "fun": "Ihre Aura des Beschützens ist heute so stark, dass selbst der Kaktus auf der Fensterbank etwas weicher zu wirken scheint."
    },
    "12-21": {
      "z": "Schütze",
      "l": 7,
      "e": "Die Zahl Sieben zur Wintersonnenwende bringt die Energie der tiefsten Einsicht in sich selbst und das Bedürfnis, die Stille zu feiern. Dies ist die Zeit, in der Intellekt auf Intuition trifft und es Ihnen ermöglicht, die Bedeutung aller Ereignisse des vergangenen Jahres zu verstehen.",
      "r": "Gönnen Sie sich den Luxus der Isolation und nehmen Sie sich Zeit, Ihre Gedanken und spirituellen Prioritäten zu ordnen. Vertrauen Sie Ihren inneren Offenbarungen, denn der heutige Frieden ist die Grundlage Ihrer zukünftigen Weisheit.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Vermeiden Sie Fragen nach dem Wesen Ihres Handelns und übertönen Sie Ihre eigenen Bedürfnisse durch übermäßige soziale Aktivität. Hüten Sie sich vor Oberflächlichkeit, denn die wertvollsten Antworten liegen heute tief in Ihrem Inneren verborgen.",
      "s": "Die Frage ist wichtiger als die Antwort",
      "fun": "Die Aura Ihrer weisen Eule ist heute so stark, dass sogar die Sonne, die gerade wieder zurückkommt, dies mit großem Respekt zu tun scheint."
    },
    "12-22": {
      "z": "Steinbock",
      "l": 8,
      "e": "Die Acht bringt in Ihren Raum die Schwingung der Entscheidungsfreiheit und der konkreten Manifestation von Plänen, die bisher nur eine Skizze waren. Dies ist der Moment, in dem Sie Ihre volle Kraft entfalten und beginnen können, Ihre Talente mit einem Schwung zu verwalten, der einer Führungspersönlichkeit würdig ist.",
      "r": "Treffen Sie mutige Entscheidungen hinsichtlich Ihrer beruflichen Position und vertrauen Sie auf Ihre Zuverlässigkeit beim Aufbau nachhaltiger Strukturen. Konzentrieren Sie sich auf Professionalität, denn Ihre Effektivität zieht heute konkrete und stabile materielle Erfolge nach sich.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Unsicherheit über Ihr Selbstwertgefühl und das Aufgeben der Kontrolle über Dinge, die für Ihre Stabilität von entscheidender Bedeutung sind. Vermeiden Sie Arroganz, denn wahre Stärke liegt in Selbstbeherrschung und Respekt gegenüber Ihrer Umgebung.",
      "s": "Macht dient, nicht dominiert",
      "fun": "Sie verfügen heute über eine solche Autorität, dass sogar der Winterwind nachzulassen scheint, sobald Sie mit der Planung Ihrer nächsten großen Ziele beginnen."
    },
    "12-23": {
      "z": "Steinbock",
      "l": 9,
      "e": "Die Zahl Neun symbolisiert den endgültigen Abschluss wichtiger Etappen und die Befreiung von Verpflichtungen, die ihren Zweck bereits erfüllt haben. Dies ist eine Zeit der großen, energetischen Reinigung der Seele, die Raum für die neue, frische Energie des kommenden Jahres bereitet.",
      "r": "Beenden Sie alle Kapitel, die Sie begonnen haben, und danken Sie der Vergangenheit dankbar für jede Lektion der Weisheit, die Sie erhalten haben. Schenken Sie sich selbst und anderen Vergebung, indem Sie erkennen, dass jedes Ende ein freudiger Anfang von etwas viel Größerem ist.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Festhalten an Mustern, die Sie nicht mehr mit gemeinsamen Werten oder einer echten Leidenschaft für die Schöpfung verbinden. Erliegen Sie nicht der Melancholie, sondern genießen Sie die Leichtigkeit, die mit dem bewussten Abschied von dem einhergeht, was Ihrem Wachstum nicht mehr dient.",
      "s": "Anmutig schließen – dankbar öffnen",
      "fun": "Heute haben Sie beim Aufräumen des Raums so viel Schwung, dass sogar der Staub hinter dem Kleiderschrank aus Angst vor Ihrer Entschlossenheit seine Koffer packt."
    },
    "12-24": {
      "z": "Steinbock",
      "l": 1,
      "e": "Man entfacht den Funken einer neuen Initiative und ermutigt Sie, im vollen Licht Ihrer eigenen Möglichkeiten und kühnen Träume zu stehen. Es ist der Tag der Pioniere, an dem Ihrer Kreativität keine Grenzen gesetzt sind und jeder Gedanke die Kraft hat, zum Beginn einer neuen Geschichte zu werden.",
      "r": "Entscheiden Sie sich für Authentizität und scheuen Sie sich nicht, Ihren E-Book-Geschichten und Märchen eine völlig neue Richtung einzuschlagen. Seien Sie der Erste, der bedingungslos an den Erfolg Ihrer Vision glaubt und der Kraft Ihres Durchbruchs bei neuen Maßnahmen vertraut.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Sich die Meinungen anderer anzuschauen und auf die Zustimmung zu warten, könnte Ihren natürlichen, kreativen Enthusiasmus unterdrücken. Zögern Sie nicht, neue Prioritäten zu setzen, denn die Energie des Anfangs begünstigt heute diejenigen, die mutig voranschreiten.",
      "s": "Dein Weg, dein Rhythmus",
      "fun": "Ihr Selbstbewusstsein strahlt heute so sehr, dass Sie den längsten Abend des Jahres ohne eine einzige Kerze erhellen könnten."
    },
    "12-25": {
      "z": "Steinbock",
      "l": 2,
      "e": "Nummer Zwei lehrt uns, dass die größte Stärke oft in Sanftmut und der Fähigkeit liegt, harmonische Beziehungen zur Umwelt aufzubauen. Heute wird Ihre Diplomatie zum Schlüssel, der die Tür zu den Herzen der Menschen öffnet, die für Ihren Frieden wichtig sind.",
      "r": "Suchen Sie nach Verständnis und bauen Sie Brücken, wo bisher Distanz oder unnötige, ermüdende Anspannung herrschte. Pflegen Sie die Zusammenarbeit und schätzen Sie kleine Gesten, die ein Gemeinschaftsgefühl und gegenseitiges Vertrauen schaffen.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Konkurrenz und Konflikte, die die fragile Atmosphäre der heutigen friedlichen Harmonie zerstören könnten. Scheuen Sie sich nicht, um Unterstützung zu bitten, denn eine Zusammenarbeit wird Ihnen heute viel mehr Vorteile bringen, als allein Herausforderungen zu meistern.",
      "s": "Sanftmut ist Stärke",
      "fun": "Sie sind heute so einfühlsam, dass Sie die Bedürfnisse Ihrer Lieben verstehen, bevor diese sie am Tisch in Gedanken überhaupt formulieren."
    },
    "12-26": {
      "z": "Steinbock",
      "l": 3,
      "e": "Das Trio bringt einen fröhlichen Tanz der Kreativität mit, der einen Wintertag in ein faszinierendes Abenteuer voller neuer Farben verwandelt. Erlauben Sie sich zu lachen, denn gute Energie ist der beste Treibstoff für Ihre Seele und weitere kreative Aktivitäten.",
      "r": "Drücken Sie sich durch ein Wort, eine Farbe oder ein freudiges Gespräch mit jemandem aus, der heute wirklich Ihre Unterstützung braucht. Teilen Sie Ihren Optimismus und inspirieren Sie andere, Schönheit in den kleinsten Details der Realität zu sehen.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Übermäßige Ernsthaftigkeit und Sorge um Angelegenheiten, auf die Sie heute keinen wirklichen Einfluss haben. Unterdrücken Sie nicht Ihre kreative Natur und lassen Sie sie bei jeder Aktion, die Sie heute unternehmen, frei entfalten.",
      "s": "Einfacher bedeutet weiter",
      "fun": "Ihre Energiedosis ist heute so groß, dass Sie allein mit Ihrem glücklichen Lächeln den gesamten Bereich erhellen könnten."
    },
    "12-27": {
      "z": "Steinbock",
      "l": 4,
      "e": "Nummer vier erinnert uns an den Wert solider Grundlagen, auf denen wir ein Gefühl unserer eigenen Sicherheit und Stabilität im Leben aufbauen. Ihre Regelmäßigkeit wird heute geschätzt und bringt Ihnen Frieden und Zufriedenheit mit einer gut erledigten Arbeit.",
      "r": "Konzentrieren Sie sich auf den Abschluss der begonnenen Projekte und stellen Sie sicher, dass die Angelegenheiten, die Ihre letzte Aufmerksamkeit erfordern, in perfekter Ordnung gehalten werden. Bauen Sie Ihre Zukunft Schritt für Schritt auf und wissen Sie, dass solide Arbeit immer die nachhaltigsten und schönsten Früchte bringt.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Plötzliche und unüberlegte Planänderungen, die Ihre bestehende Ordnung unnötig stören könnten. Erliegen Sie nicht dem Chaos der letzten Tage des Jahres, sondern halten Sie sich an den zuvor festgelegten Aktionsplan.",
      "s": "Solidität ist Poesie",
      "fun": "Ihre Liebe zur Ordnung führt heute dazu, dass sich selbst Ihre Herbstschuhe vor dem Ausgehen zu einem perfekten Paar arrangieren."
    },
    "12-28": {
      "z": "Steinbock",
      "l": 5,
      "e": "Five bringt einen belebenden Hauch von Freiheit und ermutigt Sie, die sichere, aber manchmal zu vorhersehbare Komfortzone zu verlassen. Dies ist der perfekte Tag, um eine Veränderung zu wagen, die neue, anregende Energie in Ihren Alltag bringt.",
      "r": "Seien Sie offen für spontane Vorschläge und gönnen Sie sich ein bisschen Abenteuer, das Ihren Geist effektiv erfrischt. Gehen Sie ein Risiko ein und prüfen Sie die neuen Entwicklungsmöglichkeiten, die sich Ihnen heute bieten.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Vermeiden Sie Langeweile und Stagnation, die frustrierend sein und Ihnen unnötig Kraft rauben können. Haben Sie keine Angst davor, alte Muster aufzugeben, denn in der Veränderung liegt Ihr größtes Wachstumspotenzial.",
      "s": "Freiheit ist eine Entscheidung",
      "fun": "Ihr Freiheitsbedürfnis ist heute so groß, dass ein Spaziergang zu einem spontanen Ausflug in eine völlig unbekannte Richtung führen kann."
    },
    "12-29": {
      "z": "Steinbock",
      "l": 6,
      "e": "The Six lädt Sie in die Welt der Harmonie ein, in der Liebe und Fürsorge am Ende des Jahres die wichtigsten Wegweiser für Ihr Herz sind. Stellen Sie sicher, dass Ihre Handlungen direkt von innen kommen und Ihnen und allen Ihren Lieben Trost spenden.",
      "r": "Schaffen Sie eine warme Atmosphäre in Ihrem Zuhause und verbringen Sie wertvolle Zeit mit den Menschen, die Ihnen am wichtigsten sind. Konzentrieren Sie sich darauf, die Bindungen zu pflegen, die Ihnen ein Gefühl tiefer Sicherheit und vollkommener Liebe geben.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Zu viele Probleme anderer Menschen auf sich nehmen, denn jeder muss seinen eigenen Lebensweg gehen. Suchen Sie nicht nach Perfektion, wo ehrliche Präsenz und ein gutes, unterstützendes Wort aus der Seele ausreichen.",
      "s": "Schönheit ist ein Akt des Mutes",
      "fun": "Ihre schützende Aura ist heute so stark, dass sogar Ihre Zimmerpflanzen in Ihrer Gegenwart zufrieden zu schnurren scheinen."
    },
    "12-30": {
      "z": "Steinbock",
      "l": 7,
      "e": "Sieben ist eine Zeit tiefer Selbstbeobachtung vor dem großen Jahresende, in der die Stille zu Ihrem treuesten Lehrer wird. Wenn Sie äußere Reize zum Schweigen bringen, können Sie im Lärm die Antworten hören, nach denen Sie schon lange erfolglos gesucht haben.",
      "r": "Finden Sie einen Moment zum Meditieren oder zum ruhigen Lesen, der Ihr Interieur bereichert und Ihnen den lang ersehnten Seelenfrieden bringt. Vertrauen Sie Ihrer Intuition, denn ihre Stimme ist heute außergewöhnlich rein, klar und verdient volles Vertrauen.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Lärm und oberflächliche Unterhaltung, die Ihre Aufmerksamkeit ablenken und die in der Stille entstandene innere Ordnung zerstören können. Haben Sie keine Angst vor Fragen über die Bedeutung Ihres eigenen Weges, denn die Konfrontation mit ihnen bringt wahre Befreiung und spirituelles Wachstum.",
      "s": "Die Frage ist wichtiger als die Antwort",
      "fun": "Heute sind Sie wie eine weise Eule, die die Welt aus der Ferne beobachtet – Sie wissen viel mehr über das kommende Jahr, als Sie preisgeben möchten."
    },
    "12-31": {
      "z": "Steinbock",
      "l": 8,
      "e": "Acht schließt das Jahr mit kraftvoller Energie der Manifestation und Stärke ab, die es Ihnen ermöglicht, mit großer Entscheidungsfreiheit in einen völlig neuen Lebenszyklus einzutreten. Dies ist die Zeit, in der Ihr Selbstvertrauen und Ihre Professionalität zum Fundament werden, auf dem Sie die Erfolge der nächsten zwölf Monate aufbauen werden.",
      "r": "Treffen Sie konkrete Entscheidungen über Ihre zukünftigen Ressourcen und zeigen Sie Entschlossenheit bei der Erreichung der festgelegten Standards. Bauen Sie Ihre Autorität auf soliden Fakten auf und denken Sie daran, dass Zuverlässigkeit heute Ihre effektivste Währung für den Erfolg ist.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Treffen Sie wichtige Entscheidungen unter dem Einfluss der Angst vor Mangel, anstatt Kraft aus dem Gefühl Ihres eigenen großen Wertes zu schöpfen. Vermeiden Sie Arroganz und denken Sie daran, dass die wahre Macht eines Anführers aus der Ruhe und dem Vertrauen in sein Handeln resultiert.",
      "s": "Macht dient, nicht dominiert",
      "fun": "Heute haben Sie das Aussehen eines Anführers, vor dem selbst die größten Widrigkeiten und Warteschlangen bei der Vorbereitung auf den Abend weichen."
    },
    "1-1": {
      "z": "Steinbock",
      "l": 4,
      "e": "Nummer vier ist ein solides Fundament für Ihre Träume, ohne das wir nur in den Wolken fliegen, anstatt dauerhafte Strukturen aufzubauen. Obwohl das Fundament keinen Lärm macht, basiert die gesamte Struktur Ihres Lebens auf seiner Stabilität.",
      "r": "Konzentrieren Sie sich auf die Planung und beginnen Sie mit der konsequenten Umsetzung Ihrer Annahmen.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Hüten Sie sich vor plötzlichen und unüberlegten Veränderungen, die Ihren Seelenfrieden stören könnten.",
      "s": "Das Fundament macht keinen Lärm – aber alles steht darauf",
      "fun": "Die Liste der Vorsätze liegt bereits fertig vor, genau sortiert und natürlich laminiert."
    },
    "1-2": {
      "z": "Steinbock",
      "l": 5,
      "e": "Fünf ist wie ein heftiger Wind, der nie um Erlaubnis fragt, bevor er einem in die Segel weht. Überlegen Sie neugierig, wohin Sie diese unbändige Energie heute führen wird.",
      "r": "Nehmen Sie selbst die kleinste Änderung in Ihrer Routine vor, um den belebenden Atem der Neuheit zu spüren.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Lehnen Sie Stagnation und starre Muster ab, die Ihre natürliche Freiheit einschränken.",
      "s": "Der Wind fragt nicht – er weht einfach",
      "fun": "Die Neujahrsvorsätze haben immer noch Gültigkeit, auch wenn sie heute Morgen spontan gefasst wurden."
    },
    "1-3": {
      "z": "Steinbock",
      "l": 6,
      "e": "The Six strahlt eine wohltuende Wärme aus, die keiner unnötigen Worte bedarf, um voll wahrgenommen zu werden. Ihre heutige Anwesenheit ist ein echtes Geschenk für alle um Sie herum.",
      "r": "Zeigen Sie aufrichtige Fürsorge für jemanden, der Ihnen nahe steht, indem Sie ihm Ihre kostbare Zeit und Aufmerksamkeit schenken.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Hören Sie auf, Verantwortung für die Gefühle anderer Menschen zu übernehmen, denn jeder ist für seinen eigenen Geisteszustand verantwortlich.",
      "s": "Zuhause ist ein Ort, an dem das Herz atmet",
      "fun": "Nachdem Sie sich nun um das Wohlbefinden all Ihrer Lieben gekümmert haben, ist es an der Zeit, wirklich auf sich selbst aufzupassen."
    },
    "1-4": {
      "z": "Steinbock",
      "l": 7,
      "e": "Sieben ist der mystische Raum zwischen den Worten, in dem die reinste, ungestörte Wahrheit liegt. In der tiefen Stille liegt Weisheit verborgen, die im Alltagslärm nicht zu finden ist.",
      "r": "Hören Sie für einen Moment mit dem Laufen auf und gönnen Sie sich den Luxus, nichts zu tun.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Vermeiden Sie Lärm und Hektik, die Ihre innere Stimme effektiv übertönen.",
      "s": "Weisheit wohnt in der Stille",
      "fun": "Das Nachdenken über den Sinn des Daseins lässt sich am besten bei der ersten Tasse Kaffee genießen, bevor die Familienmitglieder aufwachen."
    },
    "1-5": {
      "z": "Steinbock",
      "l": 8,
      "e": "Die Zahl Acht symbolisiert große Macht, die fest auf Ethik und persönlicher Integrität beruht. Heute haben Sie das Gefühl, dass Sie mehr erreichen können, aber gleichzeitig legen Sie die Messlatte für sich selbst extrem hoch.",
      "r": "Handeln Sie entschlossen und gehen Sie selbstbewusst auf Ihre Ziele zu.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Treffen Sie Entscheidungen nicht aus Angst, sondern schöpfen Sie Kraft aus Ihren Werten.",
      "s": "Stärke aus Werten, nicht aus Ego",
      "fun": "Die Liste der Ziele und Prioritäten ist vollständig, was einen äußerst produktiven Tag verspricht."
    },
    "1-6": {
      "z": "Steinbock",
      "l": 9,
      "e": "Die Neun erinnern uns daran, dass jedes Ende tatsächlich eine wertvolle Vorbereitung für einen Neuanfang ist. Lassen Sie los, was Ihnen nicht mehr dient, um Platz für die Geschenke des Schicksals zu schaffen.",
      "r": "Bedanken Sie sich demütig für die Reise, die Sie zurückgelegt haben, und schätzen Sie alle Lektionen, die Sie gelernt haben.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Klammern Sie sich nicht an die Vergangenheit, denn sie blockiert Ihren natürlichen Transformationsprozess.",
      "s": "Das Ende ist auch ein Geschenk",
      "fun": "Die Heiligen Drei Könige haben Geschenke mitgebracht, und als Geschenk der Neun erhalten Sie die Chance auf ein neues Kapitel."
    },
    "1-7": {
      "z": "Steinbock",
      "l": 1,
      "e": "Nummer eins ist der Funke der Initiative, der das Feuer der Veränderung entfacht und uns dazu drängt, unabhängig zu handeln. Dies ist der perfekte Moment für Sie, die Zügel in die Hand zu nehmen und die Richtung vorzugeben, der Sie folgen möchten.",
      "r": "Machen Sie den ersten, mutigen Schritt zur Umsetzung Ihrer wichtigsten Idee.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Schauen Sie nicht auf andere und warten Sie nicht auf die Zustimmung, die Sie sich selbst geben können.",
      "s": "Die erste Zeile gehört Ihnen",
      "fun": "Heute sind Sie Kapitän, Steuermann und Schiff, der Rest der Welt muss sich also einfach anpassen."
    },
    "1-8": {
      "z": "Steinbock",
      "l": 2,
      "e": "Zwei lehrt uns, dass wahre Stärke in Sanftmut und der Fähigkeit liegt, anderen zuzuhören. Heutzutage bringt Ihnen die Zusammenarbeit viel mehr Vorteile als der alleinige Kampf gegen Widrigkeiten.",
      "r": "Suchen Sie im Kontakt mit anderen Menschen nach Verständnis und vertrauen Sie Ihrer Intuition.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Vermeiden Sie Konflikte und unnötige Spannungen, die Ihre Harmonie stören könnten.",
      "s": "In der Stille hört man mehr",
      "fun": "Heutzutage scheint sogar Ihre Katze eher bereit zu sein, über zusätzliches Futter zu verhandeln."
    },
    "1-9": {
      "z": "Steinbock",
      "l": 3,
      "e": "Three ist ein freudiger Ausdruck, der den gewöhnlichen Alltag in ein farbenfrohes und lebendiges Spektakel verwandelt. Lassen Sie Ihrer Kreativität freien Lauf und scheuen Sie sich nicht, Ihren Optimismus mit Ihren Mitmenschen zu teilen.",
      "r": "Drücken Sie sich durch Kunst, Worte oder einfach ein aufrichtiges Lächeln gegenüber einem Fremden aus.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Unterdrücken Sie nicht Ihre Begeisterung und lassen Sie nicht zu, dass der Pessimismus anderer Ihr inneres Leuchten auslöscht.",
      "s": "Lachen ist der kürzeste Weg zum Herzen",
      "fun": "Ihre Energie ist heute so ansteckend, dass sogar die Kaffeemaschine fröhlicher zu schnurren scheint."
    },
    "1-10": {
      "z": "Steinbock",
      "l": 4,
      "e": "Die heutigen Vier laden Sie erneut dazu ein, Angelegenheiten zu klären, die Zuverlässigkeit und Geduld erfordern. Jetzt ist es an der Zeit, die Details zu verfeinern, die Ihren Erfolg in der Zukunft garantieren.",
      "r": "Erledigen Sie ausstehende Aufgaben und sorgen Sie für Ordnung in Ihrer unmittelbaren Umgebung.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Lassen Sie sich nicht dazu verleiten, Abkürzungen zu nehmen, denn nur sorgfältige Arbeit führt zu dauerhaften Ergebnissen.",
      "s": "Das Fundament macht keinen Lärm – aber alles steht darauf",
      "fun": "Heute sieht Ihr Schreibtisch so steril aus, dass Sie komplexe Operationen daran durchführen könnten."
    },
    "1-11": {
      "z": "Steinbock",
      "l": 5,
      "e": "Five bringt einen Hauch von Freiheit und ermutigt Sie, die sichere, aber manchmal zu enge Komfortzone zu verlassen. Dies ist ein Tag voller Überraschungen, der Ihre Sicht auf aktuelle Ereignisse völlig verändern kann.",
      "r": "Öffnen Sie sich für neue Bekanntschaften und gönnen Sie sich ein bisschen gesunden Wahnsinn.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Routinen und Langeweile, die für Sie heute äußerst belastend und frustrierend sein können.",
      "s": "Der Wind fragt nicht – er weht einfach",
      "fun": "Du hast deinen Koffer bereits im Kopf gepackt, obwohl dein einziger Plan für heute darin besteht, etwas Brot zu kaufen."
    },
    "1-12": {
      "z": "Steinbock",
      "l": 6,
      "e": "Die Zahl sechs erinnert uns an die Schönheit, die aus Selbstliebe und der Pflege von Beziehungen resultiert. Eine harmonische Umgebung wird Ihnen helfen, den Frieden zu finden, den Ihr Herz heute so dringend braucht.",
      "r": "Umgeben Sie sich mit Ästhetik und verbringen Sie Zeit mit Menschen, die Sie beruhigen.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Kritik an sich selbst und anderen, denn heute kommt es vor allem auf Akzeptanz an.",
      "s": "Zuhause ist ein Ort, an dem das Herz atmet",
      "fun": "Heutzutage ist ein Home-Spa kein Luxus mehr, sondern eine grundlegende und absolut notwendige Pflicht."
    },
    "1-13": {
      "z": "Steinbock",
      "l": 7,
      "e": "Sieben ist eine Zeit der Selbstbeobachtung, in der Antworten auf schwierige Fragen von innen kommen. Erlauben Sie sich, mit Ihren Gedanken allein zu sein, um zu hören, was am wichtigsten ist.",
      "r": "Lesen Sie ein inspirierendes Buch oder machen Sie einen langen Spaziergang alleine.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Oberflächliche Gespräche und überfüllte Meetings, die Sie ablenken könnten.",
      "s": "Weisheit wohnt in der Stille",
      "fun": "Die Zahl 13 in Kombination mit der Sieben lässt Ihre Intuition heute besser funktionieren als ein professionelles Radar."
    },
    "1-14": {
      "z": "Steinbock",
      "l": 8,
      "e": "Acht Forderungen nach Verantwortung für die eigenen Finanzen und im weitesten Sinne des beruflichen Erfolgs. Ihre Entschlossenheit ist heute stark genug, um alle Hindernisse zu überwinden, die Ihnen im Weg stehen.",
      "r": "Treffen Sie mutige Geschäftsentscheidungen und vertrauen Sie auf Ihre Kompetenzen und Erfahrungen.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Extravaganz und mangelnde Disziplin, die Sie von Ihrem gewünschten Ziel distanzieren könnten.",
      "s": "Stärke aus Werten, nicht aus Ego",
      "fun": "Heute respektiert Ihr Geldbeutel Ihren neuen, äußerst ambitionierten Sparplan."
    },
    "1-15": {
      "z": "Steinbock",
      "l": 9,
      "e": "Nummer Neun schließt einen bestimmten Zyklus von Erfahrungen und ermöglicht es Ihnen, alles mit Distanz und Weisheit zu betrachten. Dies ist der perfekte Zeitpunkt, um vor der nächsten Etappe der Reise ein Resümee zu ziehen und Schlussfolgerungen zu ziehen.",
      "r": "Befreien Sie sich von altem Groll und schaffen Sie in Ihrem Herzen Platz für Vergebung.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Gefühle des Bedauerns über das Vergangene, denn jede Veränderung führt zum Besseren.",
      "s": "Das Ende ist auch ein Geschenk",
      "fun": "Heute bist du wie ein Weiser auf einem Berggipfel, obwohl du in Wirklichkeit nur für den Kaffee anstehst."
    },
    "1-16": {
      "z": "Steinbock",
      "l": 1,
      "e": "Nummer eins ist ein Funke neuer Energie, der die Dunkelheit der Unsicherheit erhellt und Mut zum Handeln gibt. Dies ist der perfekte Zeitpunkt, mit der Planung in der Theorie aufzuhören und mit der Erschaffung Ihrer Realität in der Realität zu beginnen.",
      "r": "Wählen Sie Authentizität und erlauben Sie sich, der Anführer Ihres eigenen Lebens zu sein.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Sich die Meinungen anderer anzuschauen, kann Ihre Sicht nur trüben.",
      "s": "Die erste Zeile gehört Ihnen",
      "fun": "Sie haben heute so viel Energie, dass Sie allein mit Ihrer Handlungsbereitschaft eine kleine Stadt mit Strom versorgen könnten."
    },
    "1-17": {
      "z": "Steinbock",
      "l": 2,
      "e": "Zwei lehrt uns, dass die größte Stärke oft in der Subtilität und der Fähigkeit liegt, mit anderen zusammenzuleben. Heute wird Ihre Sensibilität zu einem Werkzeug, mit dem Sie sehen können, was für andere unsichtbar bleibt.",
      "r": "Pflegen Sie Beziehungen und suchen Sie nach Kompromissen, die beiden Parteien Frieden bringen.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Isolation und Unterdrückung der eigenen Intuition, die heute äußerst empfindlich ist.",
      "s": "In der Stille hört man mehr",
      "fun": "Heute sind Sie so einfühlsam, dass Sie sogar verstehen, was Ihre Kaffeemaschine Ihnen mit ihrem gurgelnden Geräusch sagen will."
    },
    "1-18": {
      "z": "Steinbock",
      "l": 3,
      "e": "Three ist ein fröhlicher Tanz der Kreativität, der uns an die Leichtigkeit des Seins und die Kraft eines Lächelns erinnert. Lassen Sie sich heute von Ihrer Fantasie dorthin führen, wo Freude auf Inspiration trifft.",
      "r": "Drücken Sie Ihre Gefühle durch Kreativität oder einfach durch ein ehrliches, aufbauendes Gespräch aus.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Übermäßige Kritik, die Ihren natürlichen inneren Glanz auslöschen könnte.",
      "s": "Lachen ist der kürzeste Weg zum Herzen",
      "fun": "Deine Lebensfreude ist heute so groß, dass dich auch das Montagswetter nicht entmutigen kann."
    },
    "1-19": {
      "z": "Steinbock",
      "l": 4,
      "e": "Vier ist die Zeit, Angelegenheiten zu regeln, die ein zuverlässiges Vorgehen und viel Geduld erfordern. Der Aufbau nachhaltiger Effekte braucht Zeit, bringt aber Zufriedenheit mit sich, die durch nichts zu ersetzen ist.",
      "r": "Konzentrieren Sie sich auf Details und gehen Sie bei Ihren täglichen Aufgaben systematisch vor.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Eile und Oberflächlichkeit, die die Stabilität Ihrer Leistungen schwächen könnten.",
      "s": "Das Fundament macht keinen Lärm – aber alles steht darauf",
      "fun": "Ihre heutige Arbeitsorganisation sorgt dafür, dass sogar der Kalender großen Respekt vor Ihnen hat."
    },
    "1-20": {
      "z": "Wassermann",
      "l": 5,
      "e": "Die Zahl fünf bringt einen Hauch von Frische und erinnert uns daran, dass das Leben eine ständige Reise voller faszinierender Veränderungen ist. Wagen Sie den Schritt ins Unbekannte, denn dort warten die interessantesten Lektionen auf Sie.",
      "r": "Verlassen Sie Ihre Komfortzone und öffnen Sie sich für völlig neue Sinneserlebnisse.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Routine und Angst vor neuen Dingen, die Ihre natürliche Entwicklung behindern könnten.",
      "s": "Der Wind fragt nicht – er weht einfach",
      "fun": "Ihr Bedürfnis nach Freiheit ist heute so stark, dass sogar Ihre Schuhe für eine lange Reise bereit zu sein scheinen."
    },
    "1-21": {
      "z": "Wassermann",
      "l": 6,
      "e": "Die Zahl Sechs lädt Sie in die Welt der Harmonie ein, in der Schönheit und Liebe den höchsten Wert des Tages haben. Stellen Sie sicher, dass Ihre Umgebung den Frieden widerspiegelt, den Sie in Ihrem Herzen tragen möchten.",
      "r": "Gönnen Sie sich und Ihren Liebsten einen Moment der Zärtlichkeit und schaffen Sie so eine Atmosphäre voller Geborgenheit.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Hartes Urteilsvermögen und Konflikte, die Ihre innere und äußere Ordnung zerstören könnten.",
      "s": "Zuhause ist ein Ort, an dem das Herz atmet",
      "fun": "Heute sind Sie eine Oase der Ruhe, die jeder gerne besuchen möchte, auch für einen kurzen Moment der Ruhe."
    },
    "1-22": {
      "z": "Wassermann",
      "l": 7,
      "e": "Sieben ist ein Tag tiefer Einsicht, an dem Stille zum wertvollsten Ratgeber und Verbündeten wird. Gönnen Sie sich den Luxus, mit Ihren Gedanken allein zu sein, um verborgene Weisheiten zu finden.",
      "r": "Suchen Sie in der Meditation oder beim Lesen von Texten nach Antworten, die Ihre Seele nähren.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Lärm und oberflächliche Ablenkungen, die Ihre wertvolle Aufmerksamkeit ablenken können.",
      "s": "Weisheit wohnt in der Stille",
      "fun": "Dein Blick ist heute so durchdringend, dass du Gedanken lesen könntest, wenn du wolltest."
    },
    "1-23": {
      "z": "Wassermann",
      "l": 8,
      "e": "Acht Aufrufe zur Manifestation Ihrer Stärke und zum Aufbau von Autorität auf der Grundlage von Gerechtigkeit. Dies ist die Zeit, in der Ihre Bemühungen greifbare Ergebnisse in der Welt der Materie und Finanzen bringen können.",
      "r": "Ergreifen Sie mutige berufliche Maßnahmen und vertrauen Sie auf Ihre Fähigkeit, Erfolg zu haben.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Mangelndes Selbstvertrauen und Einflussnahme durch Menschen, die Ihr Potenzial nicht verstehen.",
      "s": "Stärke aus Werten, nicht aus Ego",
      "fun": "Sie haben heute die Energie eines CEOs eines großen Konzerns, selbst wenn Sie eine Einkaufsliste für das Abendessen erstellen."
    },
    "1-24": {
      "z": "Wassermann",
      "l": 9,
      "e": "Neun ist die Energie, Dinge abzuschließen, die uns von der Last der Vergangenheit befreit und neue Türen öffnet. Dies ist der perfekte Zeitpunkt, um emotional aufzuräumen und sich von dem zu verabschieden, was uns nicht mehr dient.",
      "r": "Vergib alte Verletzungen und betrachte die Welt aus einer Perspektive voller Verständnis und Liebe.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Denken wir über Verluste nach, denn jedes Ende ist ein Zeichen für etwas viel Besseres.",
      "s": "Das Ende ist auch ein Geschenk",
      "fun": "Ihre Lebensweisheit hat heute ein Meisterniveau erreicht, sodass Sie möglicherweise jeder um Sie herum um Rat fragen wird."
    },
    "1-25": {
      "z": "Wassermann",
      "l": 1,
      "e": "Nummer eins setzt den Kreislauf neu in Gang und ermutigt Sie, in Ihrem eigenen Garten ein Pionier zu sein. Jede große Veränderung beginnt mit einem mutigen Gedanken, der heute in Ihrem Kopf aufkeimt.",
      "r": "Vertrauen Sie Ihrer Intuition und nehmen Sie die Herausforderung an, die Sie schon lange aufgeschoben haben.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Aufschieben und die Suche nach Ausreden, die Sie davon abhalten, Ihre Träume zu verwirklichen.",
      "s": "Die erste Zeile gehört Ihnen",
      "fun": "Heute haben Sie das Gefühl, Sie könnten Berge versetzen, solange Sie die richtigen Schuhe finden."
    },
    "1-26": {
      "z": "Wassermann",
      "l": 2,
      "e": "Die Zahl zwei erinnert uns daran, dass Zusammenarbeit die Grundlage für den Aufbau dauerhafter und schöner Beziehungen ist. Ihre Fähigkeit, heute zuzuhören, wird zum Schlüssel zu den Herzen der Menschen, denen Sie auf Ihrem Weg begegnen.",
      "r": "Bauen Sie Brücken des Verständnisses und teilen Sie Ihre Energie mit denen, die sie brauchen.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Konkurrenz und Durchsetzung des eigenen Willens könnten die fragile Atmosphäre der Harmonie zerstören.",
      "s": "In der Stille hört man mehr",
      "fun": "Ihre Diplomatie ist heute erstklassig, sodass Sie überall in Ihrem Zuhause über Frieden verhandeln können."
    },
    "1-27": {
      "z": "Wassermann",
      "l": 3,
      "e": "Three ist eine Explosion der Freude, die selbst den gewöhnlichsten Aktivitäten einen magischen Glanz verleiht. Nutzen Sie diese Zeit, um Spaß zu haben und die kleinen Erfolge zu feiern, die zu Ihrem Glück beitragen.",
      "r": "Spielen Sie mit Formen, Farben und Worten und lassen Sie Ihrer Seele freien Lauf.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Machen Sie sich im Vorfeld Sorgen und analysieren Sie Dinge, auf die Sie heute keinen Einfluss haben.",
      "s": "Lachen ist der kürzeste Weg zum Herzen",
      "fun": "Heute bist du die Sonne, die schon beim Betreten den Raum erhellt, auch wenn es draußen grau ist."
    },
    "1-28": {
      "z": "Wassermann",
      "l": 4,
      "e": "Nummer vier lehrt uns, Strukturen zu respektieren und die Stabilität zu schätzen, die uns harte Arbeit verleiht. Ihre Beständigkeit wird mit einem Gefühl der Sicherheit und einer gut erfüllten Pflicht belohnt.",
      "r": "Seien Sie systematisch und schließen Sie Projekte ab, die Ihre letzte Aufmerksamkeit erfordern.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Ablenkung und Chaos, die Ihre bisherigen Bemühungen zunichte machen können.",
      "s": "Das Fundament macht keinen Lärm – aber alles steht darauf",
      "fun": "Ihr Frieden ist heute so fest, dass Sie nichts stören kann."
    },
    "1-29": {
      "z": "Wassermann",
      "l": 5,
      "e": "Five ist eine Einladung zum Tanz mit dem Schicksal, bei dem das einzig Beständige die ständige Veränderung ist. Öffnen Sie sich für das Abenteuer, das gleich um die Ecke lauert und darauf wartet, dass Sie es wagen, es zu erleben.",
      "r": "Ändern Sie Ihre Umgebung oder probieren Sie etwas aus, was Sie noch nie zuvor gewagt haben.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "An alten Gewohnheiten festhalten, die für Sie wie ein schwerer und unnötiger Anker wirken.",
      "s": "Der Wind fragt nicht – er weht einfach",
      "fun": "Ihre heutige Spontaneität wird vielleicht sogar Sie überraschen, ganz zu schweigen von Ihren Lieben."
    },
    "1-30": {
      "z": "Wassermann",
      "l": 6,
      "e": "Sechs ist die Energie der Fürsorge, die sich in der Liebe zum Detail manifestiert, die unser alltägliches Zuhause zu einem Zufluchtsort macht. Seien Sie dankbar für die Menschen um Sie herum und für die Schönheit, die Sie mit ihnen aufbauen.",
      "r": "Kreieren Sie mit Ihren eigenen Händen etwas Schönes und teilen Sie dieses Werk mit anderen.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Perfektionismus, der einem die pure Freude am Prozess, etwas Neues zu erschaffen, nehmen könnte.",
      "s": "Zuhause ist ein Ort, an dem das Herz atmet",
      "fun": "Ihr Sinn für Ästhetik ist heute so ausgeprägt, dass sogar ein Sandwich wie ein Kunstwerk aussehen muss."
    },
    "1-31": {
      "z": "Wassermann",
      "l": 7,
      "e": "Seven beendet den Monat mit einer nachdenklichen Note und ermutigt Sie, die vergangene Zeit in Ruhe zusammenzufassen. Ziehen Sie aus den erlebten Momenten Rückschlüsse, um bewusster in den nächsten Monat des Jahres zu starten.",
      "r": "Nehmen Sie sich einen Moment Zeit, um Ihre Gedanken aufzuschreiben und danken Sie sich für jede Lektion, die Sie gelernt haben.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Beeilen Sie sich mit der Planung für die Zukunft, bis Sie vollständig verstehen, was jetzt passiert ist.",
      "s": "Weisheit wohnt in der Stille",
      "fun": "Heute sind Sie wie eine weise Eule, die die Welt aus großer Höhe beobachtet und dabei stoische Ruhe bewahrt."
    },
    "2-1": {
      "z": "Wassermann",
      "l": 5,
      "e": "Fünf bringt die Energie der Veränderung mit sich, die wie ein heftiger Windstoß Ihre bestehenden Überzeugungen hinwegfegen kann. Dies ist die Zeit, in der Freiheit nicht mehr nur ein Schlagwort ist, sondern zu einem echten Herzensbedürfnis wird.",
      "r": "Akzeptieren Sie die sich abzeichnenden Veränderungen und öffnen Sie sich für neue, bisher unbekannte Möglichkeiten.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Vermeiden Sie Stagnation und das Festhalten an Mustern, die Ihnen nicht mehr dienen.",
      "s": "Jede Veränderung ist eine Einladung",
      "fun": "Ihre Pläne für Februar können sich so schnell ändern, dass nicht einmal der Kalender mit den Aktualisierungen Schritt halten kann."
    },
    "2-2": {
      "z": "Wassermann",
      "l": 6,
      "e": "Sechs ist die Energie der tiefen Fürsorge, die in erster Linie Sie und Ihre unmittelbare Umgebung umfassen sollte. Die Schönheit, die Sie heute schaffen, wird an Wintertagen zum sicheren Zufluchtsort für andere.",
      "r": "Laden Sie Nähe in Ihr Leben ein und sorgen Sie für Harmonie zu Hause.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Hören Sie auf, Verantwortung für die Gefühle anderer Menschen zu übernehmen, denn jeder muss seinen eigenen Frieden finden.",
      "s": "Fürsorge verändert alles",
      "fun": "Die Dekorationen in Ihrem Zuhause sehen heute aus wie aus einem Katalog, obwohl die Haushaltsmitglieder Angst haben, etwas anzufassen, um diese perfekte Komposition nicht zu zerstören."
    },
    "2-3": {
      "z": "Wassermann",
      "l": 7,
      "e": "Seven erinnert uns daran, dass Stille die lauteste Botschaft ist, die wir an unsere eigene Seele senden können. Gerade in der Isolation findet man Antworten, die bislang im Alltagslärm praktisch untergehen.",
      "r": "Vertrauen Sie Ihrer Intuition und nehmen Sie sich Zeit für eine tiefgreifende, persönliche Reflexion.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Vermeiden Sie Lärm und oberflächliche Gespräche, die Ihrem Leben nichts Wertvolles bringen.",
      "s": "Tiefer als du sehen kannst",
      "fun": "Ihr heutiges Schweigen ist so beredt, dass Ihre Lieben sich fragen, ob Sie gerade das Geheimnis des Universums entdeckt haben."
    },
    "2-4": {
      "z": "Wassermann",
      "l": 8,
      "e": "Acht ist eine starke treibende Kraft, die es Ihnen ermöglicht, Ihre kühnsten Visionen in greifbare, materielle Realität umzusetzen. Der Erfolg liegt heute in Ihrer Reichweite, solange Ihre Absichten rein und klar bleiben.",
      "r": "Greifen Sie zu Ihrer Agentur und manifestieren Sie mutig Ihre größten Ambitionen.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Treffen Sie Entscheidungen nicht aus Angst, denn nur Selbstvertrauen führt Sie an Ihr Ziel.",
      "s": "Man baut – und es bleibt",
      "fun": "Heute sehen Sie aus wie ein Anführer, vor dem selbst die größten Staus weichen."
    },
    "2-5": {
      "z": "Wassermann",
      "l": 9,
      "e": "Die Zahl neun symbolisiert die Weisheit, Kreisläufe zu schließen und sich von dem zu befreien, was längst vergangen ist. Dies ist eine Zeit großer Veränderungen, die den Boden für völlig neue Lebenserfahrungen bereitet.",
      "r": "Lassen Sie los, was Ihrer Entwicklung nicht mehr dient, und schaffen Sie in Ihrem Herzen Platz für etwas Neues.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Halten Sie nicht an der Vergangenheit fest, denn sie blockiert Ihren natürlichen Fortschritt.",
      "s": "Weisheit tut weh, bevor sie untergeht",
      "fun": "Du räumst heute in so großem Umfang auf, dass selbst deine Kindergartenerinnerungen ein wenig von der Räumung bedroht sind."
    },
    "2-6": {
      "z": "Wassermann",
      "l": 1,
      "e": "Der eine ist ein Funke Eigeninitiative, der das Feuer neuer Ideen entfacht und Sie dazu ermutigt, Ihre eigenen Grenzen zu setzen. Sie sind heute ein Pionier, der keine Karte braucht, um den Weg zur Erfüllung zu finden.",
      "r": "Zeigen Sie Initiative und treffen Sie Ihre eigenen Entscheidungen zu Themen, die Ihnen bisher Zweifel bereitet haben.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Abhängigkeit von der Meinung anderer Menschen, die Ihren natürlichen Glanz nur trüben kann.",
      "s": "Fangen Sie an – der Rest kommt",
      "fun": "Ihre Begeisterung ist heute so groß, dass Sie Eskimos davon überzeugen konnten, Eiswürfel zu kaufen."
    },
    "2-7": {
      "z": "Wassermann",
      "l": 2,
      "e": "Nummer zwei lehrt uns, dass Zusammenarbeit und Empathie die Grundlagen sind, auf denen die dauerhaftesten Brücken des Verständnisses gebaut werden. Ihre Intuition wird Ihnen heute sagen, wie Sie in Situationen, die große Fingerspitzengefühl erfordern, zum Mediator werden.",
      "r": "Suchen Sie die Unterstützung anderer und seien Sie bereit, sie denen zu geben, die sie brauchen.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Konkurrenz und Konflikte, die Ihr inneres Gleichgewicht unnötig stören können.",
      "s": "Zwei Seelen, eine Harmonie",
      "fun": "Sie sind heute so diplomatisch, dass sogar ein Streit darüber, wer den Müll rausbringen soll, in einem Friedensvertrag endet."
    },
    "2-8": {
      "z": "Wassermann",
      "l": 3,
      "e": "Drei ist ein freudiger Ausdruck, der das Leben zu einer farbenfrohen und äußerst inspirierenden Geschichte macht. Erlauben Sie sich zu lachen und gehen Sie locker mit Dingen um, die Ihnen bisher zu ernst erschienen.",
      "r": "Bringen Sie Ihre kreative Natur zum Ausdruck und teilen Sie Ihren Optimismus mit den Menschen, denen Sie begegnen.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Sich Sorgen machen über Dinge, auf die man heute sowieso keinen wirklichen Einfluss hat.",
      "s": "Schaffen Sie, weil die Welt es braucht",
      "fun": "Ihr Lächeln wirkt heute besser als der stärkste Kaffee und verschönert den Tag aller, die Sie treffen."
    },
    "2-9": {
      "z": "Wassermann",
      "l": 4,
      "e": "Die Vier erinnern uns an die Werte Disziplin und zuverlässigen Bau von Strukturen zu unserer eigenen Sicherheit. Jeder Schritt, den Sie heute gehen, bringt Sie der Stabilität näher, von der Sie schon lange geträumt haben.",
      "r": "Bringen Sie Ordnung in Ihre Angelegenheiten und kümmern Sie sich um die Details, die das Ganze ausmachen.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Unordnung und mangelnde Konsequenz, die zu unnötigem Chaos in Ihren Handlungen führen können.",
      "s": "Kleine Schritte, bleibende Spuren",
      "fun": "Heutzutage sortiert man seine Socken nach Farbe und Abnutzungsgrad und ist damit sehr zufrieden."
    },
    "2-10": {
      "z": "Wassermann",
      "l": 5,
      "e": "Fünf ist die Energie des Abenteuers, die Langeweile hasst und Sie dazu ermutigt, ausgetretene, alltägliche Pfade zu verlassen. Gönnen Sie sich ein wenig Spontanität, denn sie verleiht dem Leben den schönsten Geschmack.",
      "r": "Machen Sie etwas ganz anderes als sonst und genießen Sie das Gefühl der Freiheit, das dadurch entsteht.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Monotonie und einschränkende Regeln, die Ihre natürliche Neugier auf die Welt unterdrücken.",
      "s": "Jede Veränderung ist eine Einladung",
      "fun": "Ihr heutiger Wunsch nach Veränderung lässt sogar die Anordnung der Möbel im Wohnzimmer zu statisch erscheinen."
    },
    "2-11": {
      "z": "Wassermann",
      "l": 6,
      "e": "Sechs ist die Energie der Harmonie, die am besten zur Geltung kommt, wenn man in Beziehungen auf kleine Gesten und Wärme achtet. Dies ist der perfekte Zeitpunkt, um eine Aura des Friedens um Sie herum zu schaffen, die Ihr Herz beruhigt und freundliche Menschen anzieht.",
      "r": "Gönnen Sie sich einen Moment ästhetischen Vergnügens und umgeben Sie sich mit Menschen, die Sie aufrichtig unterstützen.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Seien Sie nicht übermäßig kritisch gegenüber sich selbst, denn Ihr Wert hängt nicht von Perfektion ab.",
      "s": "Fürsorge verändert alles",
      "fun": "Heute erledigen Sie selbst die Hausarbeit mit einer solchen Anmut, als ob Sie als perfekte Gastgeberin auf einer großen Bühne auftreten würden."
    },
    "2-12": {
      "z": "Wassermann",
      "l": 7,
      "e": "Seven ermutigt Sie, sich aus der lauten Welt zurückzuziehen und tief in Ihrem eigenen Kopf nach Antworten zu suchen. Durch die Stille können Sie die Stimme der Intuition hören, die oft von alltäglichen Angelegenheiten und Verantwortlichkeiten übertönt wird.",
      "r": "Nehmen Sie sich Zeit für einen einsamen Spaziergang oder eine Lektüre, die Ihren Geist zu neuen Entdeckungen anregt.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Vermeiden Sie unnötige Hektik und oberflächliche Beziehungen, die Ihre wertvolle Aufmerksamkeit ablenken könnten.",
      "s": "Tiefer als du sehen kannst",
      "fun": "Ihre geheimnisvolle Aura ist heute so stark, dass Ihre Nachbarn sich fragen, über welches große Projekt Sie nachdenken."
    },
    "2-13": {
      "z": "Wassermann",
      "l": 8,
      "e": "Acht ist eine Zeit, in der Charakterstärke zum Ausdruck kommt und eine dauerhafte Position in der Welt der Materie und Finanzen aufgebaut wird. Sie haben genug Entschlossenheit, Ziele zu erreichen, die für andere unerreichbar erscheinen.",
      "r": "Konzentrieren Sie sich auf berufliche Angelegenheiten und treffen Sie Entscheidungen mit dem Mut einer Führungskraft.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Die eigenen Träume aufgrund vorübergehender Müdigkeit oder ausbleibender sofortiger Ergebnisse aufgeben.",
      "s": "Man baut – und es bleibt",
      "fun": "Ihr Geldbeutel empfindet heute großen Respekt vor Ihnen, angesichts Ihrer beispiellosen Disziplin bei der Budgetverwaltung."
    },
    "2-14": {
      "z": "Wassermann",
      "l": 9,
      "e": "Neun lehrt uns, dass Liebe die höchste Form der Weisheit ist, die ohne unnötige Worte vergeben und verstehen kann. Am Valentinstag ermutigt Sie diese Energie, nicht nur Ihren Partner, sondern Ihr ganzes Leben mit Zärtlichkeit zu umarmen.",
      "r": "Bedanken Sie sich für all die Liebeslektionen und öffnen Sie Ihr Herz für bedingungslose Selbstakzeptanz.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Halten Sie an alten Traumata fest, die es Ihnen wie eine unnötige Belastung nicht ermöglichen, den gegenwärtigen Moment voll und ganz zu genießen.",
      "s": "Weisheit tut weh, bevor sie untergeht",
      "fun": "Selbst wenn Sie den Tag alleine verbringen, wird Ihr Candle-Light-Dinner luxuriöser aussehen als im besten Restaurant."
    },
    "2-15": {
      "z": "Wassermann",
      "l": 1,
      "e": "Nummer eins symbolisiert einen Neuanfang, der entsteht, wenn Sie es wagen, Ihrem eigenen inneren Impuls zu folgen. Heute sind Sie der Autor Ihres eigenen Schicksals und jede Ihrer Handlungen legt den Grundstein für einen neuen, aufregenden Weg.",
      "r": "Zeigen Sie Initiative und scheuen Sie sich nicht, in Ihrem Umfeld innovative Lösungen vorzuschlagen.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Vermeiden Sie Passivität und das Warten auf ein Zeichen, denn Sie sind das Zeichen, auf das Sie gewartet haben.",
      "s": "Fangen Sie an – der Rest kommt",
      "fun": "Ihre Stimme hat heute so viel Autorität, dass sogar Ihre Katze Ihren Befehlen mit außerordentlicher Aufmerksamkeit zuzuhören scheint."
    },
    "2-16": {
      "z": "Wassermann",
      "l": 2,
      "e": "Die Zahl zwei erinnert uns daran, dass Mitgefühl der Schlüssel ist, der selbst die verschlossensten und unzugänglichsten menschlichen Herzen öffnet. Ihre Fähigkeit, Streitigkeiten heute beizulegen, wird Ihnen das Gefühl geben, von Ihren Mitmenschen gebraucht und geschätzt zu werden.",
      "r": "Entscheiden Sie sich für den Dialog und bauen Sie Beziehungen auf, die auf gegenseitigem Vertrauen und tiefem Verständnis basieren.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Nehmen Sie den Wettbewerb auf, denn heutzutage entsteht Stärke aus Harmonie und nicht aus dem Wunsch, jemandem Recht zu geben.",
      "s": "Zwei Seelen, eine Harmonie",
      "fun": "Du bist heute so eine Oase des Friedens, dass Menschen einfach zu dir kommen, um sich in deiner Energie zu wärmen."
    },
    "2-17": {
      "z": "Wassermann",
      "l": 3,
      "e": "Drei ist die Energie der Freude, die sich im kreativen Selbstausdruck durch Kunst, Worte oder Gesten manifestiert. Stehen Sie im Mittelpunkt und haben Sie keine Angst davor, andere mit Ihrer natürlichen, kindlichen Begeisterung anzustecken.",
      "r": "Nutzen Sie Ihren persönlichen Charme, um die Atmosphäre an Orten aufzulockern, an denen die Stimmung zuvor steif war.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Überanalysieren Sie Ihre Ideen, denn was heute am meisten zählt, ist Spontaneität und die pure Freude am Schaffen.",
      "s": "Schaffen Sie, weil die Welt es braucht",
      "fun": "Heute ist Ihr Sinn für Humor so scharfsinnig und brillant, dass Sie Drehbücher für die besten Kabaretts schreiben könnten."
    },
    "2-18": {
      "z": "Wassermann",
      "l": 4,
      "e": "Die Vier lehren uns Geduld und zeigen, dass jede große Sache Zeit und einen zuverlässigen, systematischen Ansatz erfordert. Ihre Ruhe und Selbstbeherrschung werden heute anderen ein Signal sein, dass sie sich voll und ganz auf Ihr Wort verlassen können.",
      "r": "Konzentrieren Sie sich darauf, Projekte abzuschließen, die schon lange auf Ihren endgültigen Schritt und Ihre Genehmigung warten.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Ablenkungen durch triviale Dinge, die Sie vom Erreichen Ihrer wichtigsten, langfristigen Ziele ablenken könnten.",
      "s": "Kleine Schritte, bleibende Spuren",
      "fun": "Ihre Liebe zur Ordnung führt heute dazu, dass Sie Ihre Büroklammern sogar nach Größe und Glanzgrad geordnet haben."
    },
    "2-19": {
      "z": "Fische",
      "l": 5,
      "e": "Five ist ein belebender Wind, der Neuigkeiten aus einer fernen Welt bringt und Ihren schlummernden Hunger nach Abenteuern weckt. Haben Sie keine Angst, über die üblichen Muster hinauszugehen, denn nur dort erwarten Sie die wertvollsten und entwicklungsreichsten Erfahrungen.",
      "r": "Gehen Sie ein Risiko ein und probieren Sie etwas Neues aus, das es Ihnen ermöglicht, Ihr Leben aus einer ganz anderen Perspektive zu betrachten.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Angst vor dem Unbekannten, das Sie wie eine unsichtbare Barriere davon abhalten kann, nach Ihrem Glück zu streben.",
      "s": "Jede Veränderung ist eine Einladung",
      "fun": "Sie sind heute so hungrig nach Veränderung, dass Sie, wenn Sie könnten, die Wände im Wohnzimmer neu streichen würden, während Sie Ihren Morgenkaffee kochen."
    },
    "2-20": {
      "z": "Fische",
      "l": 6,
      "e": "The Six lädt Sie ein, Schönheit in jede, selbst die einfachste Aktion, die Sie heute unternehmen, zu bringen. Ihre Liebe zum Detail macht aus einem gewöhnlichen Tag ein besonderes Fest der Nähe für Ihre Lieben.",
      "r": "Tun Sie etwas Selbstloses für jemanden, der sich heute einsam fühlt oder den täglichen Kampf satt hat.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Zu viele Verantwortungen übernehmen, die Ihnen die Freude nehmen könnten, mit den Menschen zusammen zu sein, die Sie lieben.",
      "s": "Fürsorge verändert alles",
      "fun": "Ihr Wunsch, sich um andere zu kümmern, ist heute so groß, dass sich sogar Ihre Topfblumen verwöhnt fühlen."
    },
    "2-21": {
      "z": "Fische",
      "l": 7,
      "e": "Heute lädt Sie Seven in das Land der Sanftheit ein, wo Seelenfrieden wichtiger ist als alle äußeren Errungenschaften. Dies ist der perfekte Moment für Sie, zuzuhören, was Ihr Herz sagt, wenn niemand sonst es übertönt.",
      "r": "Nehmen Sie sich Zeit für einen Moment der Meditation oder einen ruhigen Abend mit Ihren eigenen Gedanken.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Laute Versammlungen und Hektik, die Ihren inneren Frieden stören könnten.",
      "s": "Tiefer als du sehen kannst",
      "fun": "Ihr Schweigen heute ist so tief, dass sogar das Radio in Ihrem Auto etwas leiser zu spielen scheint."
    },
    "2-22": {
      "z": "Fische",
      "l": 8,
      "e": "Acht ist die Energie der Manifestation, die zeigt, dass Ihre Träume einen echten Plan brauchen, um Wirklichkeit zu werden. Heute werden Sie einen Kraftschub verspüren, der es Ihnen ermöglicht, Ihre finanziellen und beruflichen Angelegenheiten souverän zu organisieren.",
      "r": "Ergreifen Sie konkrete Schritte zur Stabilität und vertrauen Sie auf Ihre Fähigkeit, das Gute zu vervielfachen.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Keine unnötige Angst vor Mangel, denn Ihr Überfluss beginnt mit Ihrem Selbstwertgefühl.",
      "s": "Man baut – und es bleibt",
      "fun": "Ihr Selbstvertrauen führt heute dazu, dass selbst schwierige Verhandlungen mit dem eigenen Budget zum Erfolg führen."
    },
    "2-23": {
      "z": "Fische",
      "l": 9,
      "e": "Die Neun erinnern uns daran, dass jeder Abschied von der Vergangenheit auch ein herzliches Willkommen in einer neuen, besseren Zukunft ist. Lassen Sie los, was längst abgelaufen ist, um in Ihrem Leben Platz für neue und inspirierende Beziehungen zu schaffen.",
      "r": "Verzeihen Sie Ihre vergangenen Verletzungen und danken Sie sich selbst für jede Lektion, die Sie aus dem Schicksal gelernt haben.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Festhalten an dem, was nicht mehr Ihrem höchsten Wohl und Ihrer Entwicklung dient.",
      "s": "Weisheit tut weh, bevor sie untergeht",
      "fun": "Heute räumen Sie Ihren Kleiderschrank und Ihr Herz so sehr auf, dass sich sogar alte Quittungen vom letzten Jahr bedroht fühlen."
    },
    "2-24": {
      "z": "Fische",
      "l": 1,
      "e": "Nummer eins ist ein starker Impuls zur Veränderung, der Sie dazu zwingt, nicht mehr auf andere zu schauen und Ihre eigene Geschichte zu schreiben. Dies ist ein Tag, an dem Ihr Mut zur Inspiration für alle Menschen werden kann, denen Sie auf Ihrem Weg begegnen.",
      "r": "Setzen Sie auf sich selbst und initiieren Sie die Aktion, über die Sie schon lange nachgedacht haben.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Warten auf Zustimmung oder Applaus von denen um Sie herum, die Ihrer Vision möglicherweise nicht folgen.",
      "s": "Fangen Sie an – der Rest kommt",
      "fun": "Ihre Führungskraft ist heute so stark, dass Sie mit nur einem Pullover eine Expedition zum Pol leiten könnten."
    },
    "2-25": {
      "z": "Fische",
      "l": 2,
      "e": "Zwei lehrt uns, dass die schönsten Melodien des Lebens entstehen, wenn wir zusammenarbeiten und unsere Energie teilen können. Ihre Intuition wird Ihnen heute helfen, eine gemeinsame Sprache mit jemandem zu finden, der zuvor unzugänglich schien.",
      "r": "Seien Sie offen für den Dialog und suchen Sie Verständnis, wo zuvor Kälte oder Distanz herrschte.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Konflikte und Herrschaftsversuche, die die fragile Atmosphäre der heutigen Harmonie zerstören könnten.",
      "s": "Zwei Seelen, eine Harmonie",
      "fun": "Sie sind heute so diplomatisch, dass Sie sogar zwei verfeindete Taubenschwärme im Park versöhnen könnten."
    },
    "2-26": {
      "z": "Fische",
      "l": 3,
      "e": "Die Drei zaubert uns ein Lächeln ins Gesicht und erinnert uns daran, dass Freude der kürzeste Weg zur Heilung jeder Beziehung ist, selbst der schwierigsten. Nutzen Sie diesen Tag, um das Leben zu feiern und haben Sie keine Angst, der Welt Ihre Lebensfreude zu zeigen.",
      "r": "Lassen Sie Ihrer Kreativität freien Lauf und tun Sie etwas, das Ihnen ein aufrichtiges Lächeln ins Gesicht zaubert.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Überanalysieren Sie Ihre Fehler, denn heute zählt nur die gute Energie und die Leichtigkeit des Seins.",
      "s": "Schaffen Sie, weil die Welt es braucht",
      "fun": "Ihre Freude ist heute so ansteckend, dass sogar die Dame an der Kasse plötzlich vor sich hin summt."
    },
    "2-27": {
      "z": "Fische",
      "l": 4,
      "e": "Vier ist die Zeit, Ihre Ideen durch zuverlässige Arbeit und Liebe zum Detail in der Realität zu verankern. Die Zuverlässigkeit, die Sie heute an den Tag legen, wird zur Grundlage für die Erfolge, die Sie bald erzielen werden.",
      "r": "Beenden Sie, was Sie begonnen haben, und sorgen Sie für Ordnung in Ihrer unmittelbaren Umgebung.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Einer vorübergehenden Ablenkung erliegen, die die Qualität Ihrer heutigen Leistungen beeinträchtigen könnte.",
      "s": "Kleine Schritte, bleibende Spuren",
      "fun": "Ihre Arbeitsorganisation hat heute ein meisterhaftes Niveau erreicht und jeder Schreibtisch in Ihrem Zuhause erstrahlt in makelloser Sauberkeit."
    },
    "2-28": {
      "z": "Fische",
      "l": 5,
      "e": "Der Freitag zum Monatsende bringt den lang ersehnten Hauch der Freiheit und macht Mut, mutig in den kommenden Frühling zu blicken. Haben Sie keine Angst, Ihre Pläne in letzter Minute zu ändern, wenn Sie das Gefühl haben, dass ein neuer Weg Sie zu größerer Freude führt.",
      "r": "Öffnen Sie sich spontanen Einladungen und gönnen Sie sich einen Moment des wohlverdienten, freudigen Wahnsinns.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Starre Muster und Angst vor Veränderungen, die das einzig Beständige in unserem Leben sind.",
      "s": "Jede Veränderung ist eine Einladung",
      "fun": "Ihr Bedürfnis nach Veränderung ist heute so groß, dass Sie während einer Teepause Ihre gesamte Wohnung umstellen könnten."
    },
    "3-1": {
      "z": "Fische",
      "l": 6,
      "e": "Sechs ist die Energie tiefer Harmonie, die Sie dazu ermutigt, Schönheit in Ihren Beziehungen zu Ihren Lieben zu pflegen. Dies ist der perfekte Zeitpunkt, um in Ihrem Zuhause eine Atmosphäre voller Wärme und gegenseitigem Verständnis zu schaffen.",
      "r": "Laden Sie Ihre Lieben ein, gemeinsam Zeit zu verbringen und kleine Freuden zu feiern. Achten Sie auf die Ästhetik Ihrer Umgebung, denn Ordnung um Sie herum fördert den inneren Frieden.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Vermeiden Sie es, Verantwortung für die Gefühle anderer Menschen zu übernehmen, denn jeder muss für sein eigenes Wohlergehen sorgen. Lassen Sie nicht zu, dass kleine Missverständnisse die Liebe, die Sie für Ihre Mitmenschen empfinden, überschatten.",
      "s": "Freiheit ist eine Entscheidung",
      "fun": "Ihre Frühlingsdekoration ist so raffiniert, dass Ihre Familie Angst hat, sich auf die Couch zu setzen, um diese perfekte Komposition nicht zu stören."
    },
    "3-2": {
      "z": "Fische",
      "l": 7,
      "e": "Sieben ist die Zeit der Stille, die lauter wird als jeder Lärm, der von außen zu uns dringt. In dieser Stille finden Sie Antworten auf Fragen, die Ihre Seele schon lange beschäftigen.",
      "r": "Gönnen Sie sich den Luxus, mit Ihren Gedanken allein zu sein und nach Ihrer inneren Wahrheit zu suchen. Vertrauen Sie Ihrer Intuition, die Ihnen im Stillen die genauesten Lösungen vorschlägt.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Vermeiden Sie unnötigen Lärm und oberflächliche Gespräche, die Ihrem Leben keinen Mehrwert verleihen. Vermeiden Sie Hektik, da diese Sie daran hindert, einen echten Einblick in Ihre Bedürfnisse zu erhalten.",
      "s": "Schönheit ist ein Akt des Mutes",
      "fun": "Ihr Blick heute ist so durchdringend, dass Ihre Lieben sich fragen, ob Sie ihre Gedanken lesen."
    },
    "3-3": {
      "z": "Fische",
      "l": 8,
      "e": "Die Zahl Acht symbolisiert eine starke treibende Kraft, die es Ihnen ermöglicht, ehrgeizige Pläne in konkrete finanzielle und berufliche Ergebnisse umzusetzen. Heute haben Sie genug Entschlossenheit, um jedes Hindernis zu überwinden, das Ihnen im Weg steht.",
      "r": "Konzentrieren Sie sich darauf, Ihre beruflichen Ambitionen zu verwirklichen und mutige Geschäftsentscheidungen zu treffen. Schaffen Sie den Grundstein für dauerhaften Erfolg, indem Sie auf Ihren vorhandenen Kompetenzen aufbauen.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Handeln Sie nicht aus Angst, sondern schöpfen Sie Kraft aus Ihrem inneren Selbstvertrauen. Geben Sie nicht der Extravaganz nach, die Ihre finanzielle Stabilität schwächen könnte.",
      "s": "Die Frage ist wichtiger als die Antwort",
      "fun": "Heute verfügen Sie über die Energie eines CEOs eines Großkonzerns, auch wenn Ihre wichtigste Aufgabe darin besteht, eine Einkaufsliste zu erstellen."
    },
    "3-4": {
      "z": "Fische",
      "l": 9,
      "e": "Neun erinnert uns daran, dass Weisheit die Fähigkeit ist, loszulassen, was uns nicht mehr dient. Dies ist eine Zeit der Transformation, die Sie auf den Eintritt in eine völlig neue Phase Ihrer Lebensreise vorbereitet.",
      "r": "Verzeihen Sie alte Verletzungen und danken Sie der Vergangenheit für all die Lektionen, die sie Ihnen gegeben hat. Schaffen Sie in Ihrem Herzen Platz für neue Erfahrungen, die bald an Ihre Tür klopfen werden.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Klammern Sie sich nicht an Dinge und Beziehungen, die Ihre natürliche Entwicklung und Ihren Frieden blockieren. Vermeiden Sie es, über Verluste nachzudenken, denn jeder Verlust öffnet den Weg zu etwas Besserem.",
      "s": "Macht dient, nicht dominiert",
      "fun": "Heute räumen Sie Ihre Garderobe und Ihr Leben so sehr auf, dass selbst Ihre Erinnerungen angesichts dieses großen Ausmaßes ein wenig verwirrt werden."
    },
    "3-5": {
      "z": "Fische",
      "l": 1,
      "e": "Nummer eins ist ein Funke Eigeninitiative, der Sie dazu auffordert, nicht mehr auf günstige Umstände zu warten, sondern Maßnahmen zu ergreifen. Heute sind Sie ein Pionier, der den Mut hat, in Ihrem unmittelbaren Umfeld neue Maßstäbe zu setzen.",
      "r": "Zeigen Sie Unabhängigkeit und gehen Sie das Risiko ein, eine neue, originelle Idee umzusetzen. Vertrauen Sie auf Ihre Durchbruchskraft, die es Ihnen ermöglicht, das zu verwirklichen, was bisher nur ein Traum war.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Vermeiden Sie es, andere anzusehen und auf deren Zustimmung zu Ihren Handlungen zu warten. Lassen Sie sich nicht von der Unsicherheit davon abhalten, den ersten und wichtigsten Schritt zu tun.",
      "s": "Anmutig schließen – dankbar öffnen",
      "fun": "Ihr Enthusiasmus ist heute so groß, dass Sie eine Revolution anführen könnten, während Sie in Ihren Hausschuhen vor Ihrem Laptop sitzen."
    },
    "3-6": {
      "z": "Fische",
      "l": 2,
      "e": "Zwei lehrt uns, dass Zusammenarbeit die Grundlage ist, auf der die nachhaltigsten Beziehungen aufgebaut werden können. Durch Ihre Empathiefähigkeit fühlen Sie sich den Menschen, denen Sie heute begegnen, außerordentlich verbunden.",
      "r": "Bauen Sie Brücken der Verständigung und suchen Sie Kompromisse, wo bisher Distanz herrschte. Vertrauen Sie im Umgang mit anderen Ihrer Intuition, denn diese wird Sie bei Gesprächen am besten leiten.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Vermeiden Sie Konflikte und die Durchsetzung Ihres Willens, da dies die fragile Atmosphäre der Harmonie zerstören könnte. Scheuen Sie sich nicht, um Hilfe zu bitten, wenn Sie das Gefühl haben, dass die Aufgaben Sie überfordern.",
      "s": "Dein Weg, dein Rhythmus",
      "fun": "Ihre Diplomatie ist heute so hoch, dass Sie einen Frieden zwischen einem Hund und einer Katze aushandeln könnten."
    },
    "3-7": {
      "z": "Fische",
      "l": 3,
      "e": "Three ist ein freudiger Ausdruck, der den gewöhnlichen Alltag in ein farbenfrohes Abenteuer voller Lachen verwandelt. Lassen Sie Ihrer Kreativität freien Lauf und haben Sie keine Angst, der Welt Ihre wahre Natur zu zeigen.",
      "r": "Drücken Sie sich durch Kreativität oder ein inspirierendes Gespräch mit einer anderen Person aus. Genießen Sie jeden Moment und teilen Sie Ihren Optimismus mit allen, denen Sie begegnen.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Vermeiden Sie übermäßigen Pessimismus und die Analyse von Dingen, auf die Sie heute keinen Einfluss haben. Unterdrücken Sie Ihre Freude nicht, nur weil andere sie vielleicht nicht verstehen.",
      "s": "Sanftmut ist Stärke",
      "fun": "Heute bist du die Sonne, die den Raum schon beim Betreten erleuchtet, auch wenn es draußen schon März ist."
    },
    "3-8": {
      "z": "Fische",
      "l": 4,
      "e": "Die Zahl vier erinnert uns daran, dass Stabilität durch sorgfältige Arbeit und die Liebe zum kleinsten Detail entsteht. Am Frauentag manifestiert sich Ihre Stärke in der Ruhe und Konsequenz, mit der Sie Ihr Leben aufbauen.",
      "r": "Seien Sie systematisch und führen Sie Projekte durch, die Ihre volle Aufmerksamkeit erfordern. Sorgen Sie für die Grundlagen Ihrer Sicherheit, indem Sie die zuvor geplanten Schritte befolgen.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Vermeiden Sie Eile und Abkürzungen, denn nur solides Handeln führt zu dauerhaften Ergebnissen. Erliegen Sie nicht dem Chaos, das Sie von Ihren Hauptzielen ablenken könnte.",
      "s": "Einfacher bedeutet weiter",
      "fun": "Ihre heutigen Pläne sind so präzise, ​​dass selbst die Blumen in der Vase im perfekten Winkel stehen müssen."
    },
    "3-9": {
      "z": "Fische",
      "l": 5,
      "e": "Five bringt einen Hauch von Freiheit und ermutigt Sie, über die etablierten Muster des Alltags hinauszugehen. Dies ist der perfekte Tag, um eine Veränderung zu wagen, die neue Energie in Ihr Leben bringt.",
      "r": "Seien Sie offen für spontane Vorschläge und gönnen Sie sich ein bisschen gesunden Wahnsinn. Gehen Sie ein Risiko ein und prüfen Sie die neuen Möglichkeiten, die sich Ihnen bieten.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Vermeiden Sie Langeweile und Stagnation, die für Sie äußerst frustrierend sein können. Haben Sie keine Angst vor Veränderungen, denn sie sind der Motor Ihrer persönlichen Entwicklung.",
      "s": "Solidität ist Poesie",
      "fun": "Ihr Bedürfnis nach Freiheit ist heute so groß, dass der Brötchenkauf zu einer langen Reise werden kann."
    },
    "3-10": {
      "z": "Fische",
      "l": 6,
      "e": "The Six lädt Sie erneut in die Welt der Harmonie ein, in der Liebe und Fürsorge die wichtigsten Wegweiser sind. Stellen Sie sicher, dass Ihr Handeln von Herzen kommt und anderen Menschen Gutes bringt.",
      "r": "Schaffen Sie etwas Schönes für sich selbst oder Ihre Lieben, indem Sie vertrauensvolle Beziehungen pflegen. Konzentrieren Sie sich darauf, überall eine freundliche Atmosphäre zu schaffen.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Vermeiden Sie übermäßigen Perfektionismus, der Ihnen die Freude nehmen könnte, hier und jetzt rein zu sein. Lassen Sie nicht zu, dass die Erwartungen anderer Menschen bestimmen, wie Sie Ihre Fürsorge zeigen.",
      "s": "Freiheit ist eine Entscheidung",
      "fun": "Ihr Wunsch, sich um die Welt zu kümmern, ist heute so stark, dass sich sogar ein Kaktus von Ihnen verwöhnt fühlt."
    },
    "3-11": {
      "z": "Fische",
      "l": 7,
      "e": "Die Zahl Sieben eröffnet einen Raum für ein tiefes Studium Ihrer eigenen Natur und der Bedeutung Ihrer Handlungen. Es ist ein Tag, an dem Intellekt auf Spiritualität trifft und ideale Bedingungen zum Lernen und Entdecken nicht offensichtlicher Wahrheiten entstehen.",
      "r": "Verbringen Sie Zeit damit, Ihre Leidenschaften zu entwickeln und in klugen Büchern nach Antworten zu suchen. Vertrauen Sie der Stille, denn in ihr entstehen die wertvollsten und nachhaltigsten Ideen.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Vermeiden Sie Oberflächlichkeit und den Gruppenzwang, der Sie zu schnellen Antworten zwingt. Laufen Sie vor schwierigen Fragen nicht davon, denn wenn Sie sich ihnen stellen, erhalten Sie die Freiheit, die Sie sich wünschen.",
      "s": "Schönheit ist ein Akt des Mutes",
      "fun": "Ihre geheimnisvolle Aura ist heute so stark, dass sich sogar Ihr Lieblingsbuch von selbst zu öffnen scheint."
    },
    "3-12": {
      "z": "Fische",
      "l": 8,
      "e": "Acht ruft Sie dazu auf, Mut im Umgang mit Ihrem Leben und den Ihnen zur Verfügung stehenden Ressourcen zu zeigen. Heute befindet sich Ihre Agentur auf dem höchsten Niveau, das es Ihnen ermöglicht, auch die komplexesten Projekte erfolgreich abzuschließen.",
      "r": "Ergreifen Sie in beruflichen Angelegenheiten die Initiative und scheuen Sie sich nicht, nach den Belohnungen zu greifen, die Ihnen zustehen. Bauen Sie Ihre Autorität auf der Grundlage von Ehrlichkeit und verlässlichem Wissen auf, das Sie im Laufe der Jahre gesammelt haben.",
      "n": "Reflexion, Tiefe, Intuition",
      "u": "Treffen Sie Entscheidungen nicht in Eile oder unter dem Einfluss negativer Emotionen wie Wut oder Ungeduld. Vermeiden Sie Arroganz, denn echte Macht muss nicht schreien, um wahrgenommen zu werden.",
      "s": "Die Frage ist wichtiger als die Antwort",
      "fun": "Ihre Sicht auf die Finanzen ist heute so scharfsinnig, dass selbst kleine Ausgaben Ihre Disziplin respektieren."
    },
    "3-13": {
      "z": "Fische",
      "l": 9,
      "e": "Nine lädt zu großer Reinigung ein – nicht nur im physischen Raum, sondern vor allem auch im mentalen Bereich. Dies ist der perfekte Zeitpunkt, um die bisher gewonnenen Erkenntnisse zusammenzufassen und sich auf die große Eröffnung neuer Erkenntnisse vorzubereiten.",
      "r": "Beenden Sie alles, was Sie begonnen haben, und schließen Sie die Kapitel ab, die kein Licht mehr in Ihr Leben bringen. Zeigen Sie Dankbarkeit für alles, was Ihnen passiert ist, und betrachten Sie jeden Moment als wertvolle Erfahrung.",
      "n": "Umsetzung, Erfolg, Agentur",
      "u": "Klammern Sie sich nicht an die Vergangenheit und an Menschen, die mit ihrer Anwesenheit Ihre natürliche Entwicklung blockieren. Vermeiden Sie es, über das Vergangene traurig zu sein, denn jedes Ende ist das Versprechen eines neuen Morgens.",
      "s": "Macht dient, nicht dominiert",
      "fun": "Heutzutage sind Sie so begierig darauf, Dinge zu erledigen, dass sogar der Staub aus Ihrem Haus entweicht, bevor Sie überhaupt daran denken."
    },
    "3-14": {
      "z": "Fische",
      "l": 1,
      "e": "1 ist ein frischer Hauch von Energie, der Ihnen das Gefühl gibt, Herr Ihres eigenen Schicksals und Architekt der Zukunft zu sein. Jede Entscheidung, die Sie heute treffen, hat die Macht, die Realität zu einer besseren und authentischeren zu verändern.",
      "r": "Entscheiden Sie sich für Originalität und haben Sie keine Angst, der Welt Ihre gewagtesten Projekte zu präsentieren. Vertrauen Sie auf Ihre Stärke und glauben Sie als Erster an den Erfolg Ihres Handelns.",
      "n": "Transformation, Weisheit, Dienst",
      "u": "Vermeiden Sie Nachahmungen und suchen Sie nach Abkürzungen, die Ihre Authentizität schwächen könnten. Haben Sie keine Angst vor dem Alleinsein, denn Pioniere müssen den Weg oft alleine bahnen.",
      "s": "Anmutig schließen – dankbar öffnen",
      "fun": "Sie sind heute so voller Energie, dass Sie den morgendlichen Espresso für Ihr gesamtes Büro ersetzen könnten."
    },
    "3-15": {
      "z": "Fische",
      "l": 2,
      "e": "Zwei lehrt uns, dass wir die größten Erfolge erzielen, wenn wir in der Lage sind, im Geiste gegenseitigen Respekts mit anderen zusammenzuarbeiten. Mit Ihrer Diplomatie und Ihrem Sinn für Stimmung können Sie heute jede noch so angespannte Situation entschärfen.",
      "r": "Hören Sie aufmerksam zu, was andere sagen, und suchen Sie nach gemeinsamen Punkten, die als Grundlage für eine Einigung dienen können. Kultivieren Sie Ihre Intuition, denn sie wird Ihnen heute sagen, wem es wert ist, zu vertrauen und wem Ihre Geheimnisse anzuvertrauen.",
      "n": "Neuanfänge, Initiative, Führung",
      "u": "Vermeiden Sie Isolation und Verstecken im Schatten, wenn Ihre Anwesenheit den Bedürftigen Erleichterung bringen kann. Scheuen Sie sich nicht, Ihre Meinung zu äußern, auch wenn Ihr Hauptziel heute Harmonie ist.",
      "s": "Dein Weg, dein Rhythmus",
      "fun": "Du bist heute ein so guter Zuhörer, dass sogar deine Topfblumen sich zu dir zu neigen scheinen."
    },
    "3-16": {
      "z": "Fische",
      "l": 3,
      "e": "Drei ist eine freudige Manifestation Ihrer kreativen Seele, die sich den Ausdruck und die Feier jedes schönen Moments wünscht. Heute braucht die Welt Ihr Lächeln und die Leichtigkeit, die Sie in das Leben der Menschen bringen, denen Sie begegnen.",
      "r": "Erlauben Sie sich, mit Worten und Formen zu spielen und andere dazu zu inspirieren, den Alltag mit Freude zu betrachten. Teilen Sie Ihre Begeisterung und haben Sie keine Angst davor, im Mittelpunkt der Aufmerksamkeit zu stehen, wenn dies dazu beiträgt, gute Energie zu verbreiten.",
      "n": "Beziehungen, Intuition, Zusammenarbeit",
      "u": "Vermeiden Sie Klatsch und verschwenden Sie keine Zeit mit müßigen Diskussionen, die niemandem nützen. Lassen Sie nicht zu, dass kleinere Beleidigungen von Ihren Mitmenschen Ihr inneres, freudiges Leuchten auslöschen.",
      "s": "Sanftmut ist Stärke",
      "fun": "Ihrer Kreativität sind heute keine Grenzen mehr gesetzt, sodass selbst ein gewöhnlicher Salat zum Abendessen wie ein Kunstwerk moderner Kunst aussehen kann."
    },
    "3-17": {
      "z": "Fische",
      "l": 4,
      "e": "Die Vier erinnern uns daran, dass wahre Freiheit aus einem Gefühl der Sicherheit und einem soliden Fundament erwächst. Ihre Regelmäßigkeit heute wird geschätzt und wird Ihnen den Frieden bringen, von dem Sie schon lange geträumt haben.",
      "r": "Kümmern Sie sich um Ihre Unterlagen und verfeinern Sie Details, die Ihnen bisher unbedeutend erschienen. Bauen Sie Ihre Zukunft Stein für Stein und denken Sie daran, dass Eile bei der Grundsteinlegung ein schlechter Ratgeber ist.",
      "n": "Kreativität, Ausdruck, Freude",
      "u": "Vermeiden Sie Chaos und die gleichzeitige Bewältigung zu vieler Herausforderungen, die Sie ablenken könnten. Ignorieren Sie nicht die Verfahren und Regeln, die Ihre Interessen und Stabilität schützen.",
      "s": "Einfacher bedeutet weiter",
      "fun": "Ihr heutiger Organisationsgrad bedeutet, dass sogar die Zeit genau so vergeht, wie Sie es in Ihrem Kalender geplant haben."
    },
    "3-18": {
      "z": "Fische",
      "l": 5,
      "e": "Five bringt dynamische Veränderungen mit sich, die Flexibilität und die Bereitschaft erfordern, schnelle Entscheidungen zu treffen. Dies ist ein Tag voller Überraschungen, der Ihre derzeitige Wahrnehmung bestimmter Dinge völlig verändern kann.",
      "r": "Akzeptieren Sie die sich bietenden Möglichkeiten und seien Sie bereit, die Richtung zu ändern, wenn Sie der Meinung sind, dass ein neuer Weg besser ist. Gehen Sie auf Menschen zu und seien Sie offen für einen Gedankenaustausch, der Sie zu großen Taten inspirieren kann.",
      "n": "Organisation, Konsistenz, Stabilität",
      "u": "Vermeiden Sie Angst vor dem Unbekannten und das Festhalten an Plänen, die nicht mehr gültig sind. Don't be afraid to take risks, because today luck favors those who have the courage to break patterns.",
      "s": "Solidität ist Poesie",
      "fun": "Heutzutage steckt so viel Reiseleidenschaft in Ihnen, dass selbst der Gang zum örtlichen Geschäft wie der Beginn einer großen Expedition erscheint."
    },
    "3-19": {
      "z": "Fische",
      "l": 6,
      "e": "The Six lädt Sie ein, Brücken der Liebe und Fürsorge zu bauen, die die Herzen Ihrer Lieben verbinden. Ihre Sensibilität für Schönheit wird jedes Treffen zu einer Gelegenheit machen, Ihre Bindung zu stärken.",
      "r": "Achten Sie auf die Ästhetik Ihrer Umgebung und sorgen Sie dafür, dass die Harmonie dauerhaft in Ihrem Zuhause bleibt. Zeigen Sie den Menschen, die Sie lieben, Zärtlichkeit, denn einfache Gesten haben die Kraft, alte Wunden zu heilen.",
      "n": "Veränderungen, Entdeckungen, Freiheit",
      "u": "Vermeiden Sie es, zu viele Probleme anderer Menschen auf sich zu nehmen, denn jeder muss seinen eigenen Weg gehen. Suchen Sie nicht nach Perfektion, wenn ehrliche Präsenz und ein freundliches Wort ausreichen.",
      "s": "Freiheit ist eine Entscheidung",
      "fun": "Ihr Sinn für Harmonie ist heute so groß, dass sogar die Kissen auf der Couch eine perfekte Linie bilden."
    },
    "3-20": {
      "z": "Fische",
      "l": 7,
      "e": "Die Sieben schließen dieses Jahrzehnt in einem Ton der Kontemplation und Vorbereitung auf die bevorstehende Frühlingssonnenwende ab. Dies ist die Zeit, in der intuitives Wissen zu Ihrem wertvollsten Kapital und einem Wegweiser für die Zukunft wird.",
      "r": "Nehmen Sie sich einen Moment Zeit, um den März zusammenzufassen, und lauschen Sie dem Rhythmus der Natur, wenn sie zum Leben erwacht. Vertraue den Prozessen, die in dir ablaufen, und gib dir Zeit, für große Veränderungen zu reifen.",
      "n": "Pflege, Harmonie, Schönheit",
      "u": "Vermeiden Sie Lärm und unnötige Eile bei der Planung Ihrer nächsten beruflichen oder privaten Schritte. Unterschätzen Sie nicht Träume und Zeichen, die heute außergewöhnlich klar und wichtig sein können.",
      "s": "Schönheit ist ein Akt des Mutes",
      "fun": "Heute sind Sie wie eine weise Eule, die die Welt von der Seitenlinie aus beobachtet und dabei stoische Ruhe und Distanz bewahrt."
    }
  }
};

if (typeof window !== 'undefined') {
  window.FORECAST_DATA = FORECAST_DATA;
}
