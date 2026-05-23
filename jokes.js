let currentLang = 'pl'; // Default language

// Kontener danych - baza żartów dla agenta
const witzeContainer = [
    { keyword: "Mąż wraca", text: "o 4 rano do domu. Żona zaspana otwiera mu drzwi i pyta z wyrzutem: - No gdzie byłeś? - Na rybach, kochanie - odpowiada mąż. - I złapałeś coś - znów pyta żona, na co mąż po krótkim zastanowieniu mówi: - Nieeee, mam nadzieję, że nie... - wzdrygnął się mąż." },
    { keyword: "Po goleniu", text: "czuje się tak, jakbym miał ze dwadzieścia lat mniej... - A czy nie mógłbyś się golić wieczorem? - pyta się żona." },
    { keyword: "Brak majtek", text: "– mąż wchodzi do łóżka i szepcze żonie do ucha: - Kochanie, sprawdź, nie mam majtek! - Śpij. Jutro ci wypiorę..." },
    { keyword: "Ukręcić ciasto", text: "– przychodzi żona do domu i widzi męża leżącego w kuchni na stole, zupełnie nagiego, obsypanego mąką... - Co się stało??? - Przecież kazałaś mi ukręcić ciasto na jajach..." },
    { keyword: "Kupowanie kwiatów", text: "– moja żona cały czas się żali swoim koleżankom, że nie kupuję jej kwiatów. Szczerze mówiąc to ja nawet nie wiedziałem, że ona ma jakieś kwiaty do sprzedania..." },
    { keyword: "Pomyłka telefoniczna", text: "– Coś ty najlepszego zrobił! - wita żona męża, wracającego z pracy. - Gosposia złożyła wymówienie, bo podobno ordynarnie nawymyślałeś jej przez telefon... - A to nie byłaś ty?!!!" },
    { keyword: "Salon Volvo", text: "– Moja żona chciałaby porozmawiać o tym VW Polo z wystawy w oknie. - Ale my nie mamy żadnego VW Polo na wystawie!!! To salon Volvo. - Od kilku sekund już macie..." },
    { keyword: "Brama raju", text: "– Na jednej z bram wiodących do raju widać napis: \"Dla pantoflarzy\", na drugiej: \"Dla mężczyzn, którzy nie dali się zdominować przez kobiety\". Przed pierwszą bramą kłębi się tłum zmarłych, przed drugą stoi jedna samotna duszyczka. Podchodzi do niej święty Piotr: - A ty co tu robiisz? - Ja nie wiem, żona kazała mi tu stanąć!" },
    { keyword: "Kupić piwo", text: "– Rozmowa męża z żoną: - Piwo się skończyło! Skoczysz do sklepu? - Ale jest tak okropna pogoda, zimno, wiatr wieje, grad leci z nieba, jest lód na chodnikach, jeszcze się wywrócę! - krzyczy żona. - To kup w puszce, żeby się nie stłukło..." },
    { keyword: "Mąż, żona", text: "i kochanek – mąż wraca z pracy, zastaje swoją żonę w łóżku z kochankiem. Staje jak wryty. - Jurek - mówi żona - ty się nie gap, ty się ucz!" },
    { keyword: "Zasady życia", text: "– typowy macho poślubił typową piękną damulkę i tuż po ślubie wyłożył następujące zasady: będę w domu kiedy zechcę, obiad ma być na stole, będę jeździł na ryby kiedy chcę i nie masz prawa mi zabraniać. Jakieś komentarze? Jego młoda żona na to: - Nie, to mi pasuje. Ale zapamiętaj sobie, że tutaj zawsze o siódmej będzie seks, czy będziesz, czy nie." },
    { keyword: "Droższe miejsce", text: "– Żona zagadała do męża przed telewizorem: - Karol, ty mnie już chyba nie kochasz! Ten Darek spod piątki to wczoraj zabrał Gośkę do najdroższej restauracji w mieście! - Ja Cię kocham bardziej żabciu... - To udowodnij to wreszcie!! - Dobrze, to w takim razie zabiorę Cię kochanie w jeszcze droższe miejsce, dobrze? - Oj, Karolku jesteś kochany, już idę się zrobić na bóstwo... - Żabciu, nie trzeba, jedziemy tylko zatankować..." },
    { keyword: "Następny mąż", text: "– Wdowa poślubiła wdowca. Zaczepia ją przyjaciółka: - Podejrzewam, że twój mąż czasem mówi o swojej byłej żonie? - O, nie, już nie - odpowiedziała zapytana. - A czemu już nie? - Bo ja zaczęłam mówić o moim następnym mężu." },
    { keyword: "Zdjęcie dziecka", text: "– Widzisz tego młodego człowieka na zdjęciu? - Tak. - To o szesnastej odbierzesz go z przedszkola." },
    { keyword: "Dwa łabędzie", text: "– Młode małżeństwo spaceruje po parku. Patrzą na dwa pływające i czulące się do siebie łabędzie. - Zosiu, a może byśmy zrobili to samo co one..? - Władek ty chyba oszalałeś! Dla twojej przyjemności nie będę tyłka w wodzie moczyć." },
    { keyword: "Czułe słowa", text: "– Wieczorna rozmowa małżeństwa w łożu: - Bądź miły i powiedz mi przed snem coś czułego, np. \"Kocham cię!\" - Kocham cię! - Powiedz jeszcze \"Mój najdroższy skarbie!\"... - Mój najdroższy skarbie! - I dodaj coś od siebie... - Dobranoc!" },
    { keyword: "Wywiadówka szkolna", text: "– - No i co mówiła wychowawczyni o postępach naszego Kazia? - \"Co mówiła?\", \"Co mówiła?\". To jesteś cała ty, wysłałaś mnie na wywiadówkę i nawet nie powiedziałaś do której szkoły chodzi nasz syn...." },
    { keyword: "Która godzina", text: "– Małżonek wraca cichaczem, późno do domu. - \"Która godzina?\" - pyta zaspana żona. - \"Dziesiąta\" - odpowiada mąż. - \"Tak? Słyszę że właśnie bije pierwsza...?\" - \"No przecież zera nie może wybić, kochanie...\"" },
    { keyword: "Kiwanie głową", text: "– Pan Władek wraca po alkoholowym przyjęciu do domu. Puka do drzwi. Żona pyta przez drzwi, czy to on. Odpowiada jej milczenie. Po chwili znowu pukanie. Żona pyta, cisza. Rano otwiera drzwi i widzi męża trzęsącego się z zimna na wycieraczce. - Władziu, to ty pukałeś w nocy? - Ja... - To dlaczego nie odpowiadałeś na moje pytania? - Jak to nie odpowiadałem, kiwałem głową..." },
    { keyword: "Niespodzianka na", text: "rocznicę – Kowalski przychodzi do domu w rocznicę ślubu. Żona zawiązała mu oczy i poszła do kuchni. W tym momencie Kowalski puścił bąka. Korzystając z jej nieobecności, zaczął rozpędzać smród bukietem kwiatów. Po chwili wraca żona i zdejmuje mu opaskę. Rzeczywiście czekała na niego niespodzianka – cały pokój gości, którzy przyszli z okazji rocznicy..." },
    { keyword: "Imię żony", text: "– Starszy facet z zanikami pamięci opowiada o świetnym lekarzu. Znajomi pytają o nazwisko. Facet próbuje sobie przypomnieć przez skojarzenia: ślepy poeta – Homer, epopeja o wojnie – Troja, główny wódz – Agamemnon, jego brat – Menelaos, wódz trojański, który uprowadził mu żonę – Parys... Jak miała na imię ta żona? Helena! I facet krzyczy: - Helenkaaaaaaaaa! Jak się nazywa ten mój lekarz????" },
    { keyword: "Depesze do", text: "kolegów – W małym miasteczku rozmawiają dwie kobiety: - Mam kłopot, mąż nie wrócił na noc z Warszawy, więc wysłałam do pięciu jego kolegów depeszę z zapytaniem, czy nocował u nich. - I co? - Dostałam pięć odpowiedzi na tak." },
    { keyword: "Słuchanie ojca", text: "– Ojciec do Jasia: - Matka skarży się że zachowujesz się, jakbyś w ogóle nie słyszał, co się do ciebie mówi - Ale tato...! - Nie tłumacz się, tylko mi powiedz jak to ci się udaje..." },
    { keyword: "Wyjątkowa noc", text: "– Żona do męża: - Kochanie, ta noc z tobą była wyjątkowa... - Przecież wróciłem pijany i padłem spać... - Ale nie chrapałeś." },
    { keyword: "Być drobiazgowym", text: "– Żona do męża: - Ile razy Ci mówiłam, żebyś, do cholery, nie był taki drobiazgowy? - Siedemnaście." },
    { keyword: "Sąsiad i", text: "żona – Żona do męża: - Wiesz kochanie, ta para co mieszka obok bardzo się kocha. On ją całuje na powitanie i pożegnanie. Chcę byś też tak robił. - Odbiło ci? Prawie jej nie znam!" },
    { keyword: "Wciąganie brzucha", text: "– Facet wchodzi na wagę i mocno wciąga brzuch. Rozbawiona żona tym widokiem pyta: - Myślisz, że to Ci w czymś pomoże? - Oczywiście - odpowiada mąż - muszę jakoś zobaczyć cyferki." },
    { keyword: "Grecki bóg", text: "– Rozmawiają dwie koleżanki: - Mój mąż uważa, że ma ciało greckiego boga. - A ma? - Muszę mu wyjaśnić, że Budda nie jest bogiem greckim." },
    { keyword: "Kopiasty talerz", text: "– Na uroczystym przyjęciu Kubal już trzeci raz wraca z bufetu z kopiastym talerzem. Żona w końcu nie wytrzymała: - Nie wstyd ci?! Co ludzie sobie o tobie pomyślą? - Nic, mówię im, że to dla ciebie." },
    { keyword: "Szeleszczące papierki", text: "– - Tato - pyta się synek - dlaczego cukierki są zawijane w takie szeleszczące papierki? - Abyśmy my mogli słuchać jak się mamusia odchudza." },
    { keyword: "Pokuta i", text: "rower – Poszła baba do spowiedzi i przyznała się księdzu, że zdradziła raz męża. Ksiądz za pokutę zadał jej obejść dookoła Kościół. Idzie tak wkoło Kościoła i spotyka ją znajoma: - Co ty tak obchodzisz ten Kościół? - A, bo zdradziłam raz chłopa i ksiądz mi za pokutę kazał. Znajoma postała, pomyślała i mówi: - Wiesz co, to ja idę po rower." },
    { keyword: "Ksywka dżin", text: "– Siedzi mąż przy żonie i pyta się: - Ciekawe dlaczego mam ksywę dżin. Może dlatego że wszystko potrafię? - Nie, to dlatego że jak ktoś odkręca butelkę to od razu się pojawiasz." },
    { keyword: "Czekanie na", text: "pociąg – Żona kupiła szafę, ale jak tylko przejeżdżał pociąg, coś w niej skrzypiało. Zadzwoniła po stolarza. Stolarz wszedł do środka, żeby sprawdzić, gdzie skrzypi. W tym momencie do domu wchodzi mąż, otwiera szafę, a stolarz: - Wal pan w mordę, bo nie uwierzysz, że czekam na pociąg." },
    { keyword: "Pietruszka za", text: "uchem – Mąż do żony: - Kochanie jak przyjdą goście i będziesz podawała na stół to prosię które upiekłem, to pamiętaj, żeby włożyć za ucho pietruszkę, a do pyska jabłko. - Dobrze, ale nie uważasz, że będę głupio wyglądała?" },
    { keyword: "Cudowne uzdrowienie", text: "– Przy łóżku umierającej żony siedzi facet. Żona cichutko prosi: - Chciałabym, żebyś mnie jeszcze raz przeleciał. Facet wchodzi do łóżka, robi co chciała i zasypia. Budzi się, a żona w świetnej formie krząta się po kuchni. - Kochanie co się stało? Przecież taka chora byłaś! - A to ten seks z tobą tak mi pomógł! Facet siada ciężko na stołku i smutnieje. - Co jest, nie cieszysz się? - Nie o to chodzi, tylko jakbym wiedział, że mam takie możliwości, to i babcię Zosie bym uratował i wujka Zdziska..." },
    { keyword: "Teściowa w", text: "celowniku – Snajper na dachu zamontował celownik i czeka. Nagle dzwoni żona: - Jak chciałeś iść na piwo, to możesz. I na mecz też, i tę konsolę też sobie kup. Bo moja mamusia do nas przyjechała. - Widzę..." },
    { keyword: "Oczy jak", text: "jajka – Przyszła baba do doktora, bo mężowi się oczy zapadły głęboko. Doktor kazał nacierać oczy jajkami. Po godzinie baba przynosi kurę i dziękuje. Doktor zdziwiony, że tak szybko pomogło. - Panie doktorze - mówi baba - jeszcze jajek do pępka nie dociągnęłam, a oczy mu wyszły z powrotem." },
    { keyword: "Zapachowa choinka", text: "– Rozmawia doszła kolegów: - Moja kobieta się na mnie obraziła. Dała mi 400 zł i kazała kupić choinkę, a reszta miała być dla mnie. - No to w czym problem? - Kupiłem choinkę zapachową." },
    { keyword: "Klucze od", text: "domu – Mężczyzna z kobietą całują się na ulicy. Podchodzi do nich jakiś gość, zagląda im przez ramię, obchodzi w kółko. W końcu całujący pan się denerwuje: - Panie! Coś pan! Zboczeniec jakiś??? - Nie, ale żona ma klucze..." },
    { keyword: "Podstęp na", text: "święta – Starszy pan dzwoni z Phoenix do syna w NY: - John, Twoja matka i ja postanowiliśmy się rozwieść po 45 latach. Zadzwoń do siostry do Chicago i jej powiedz. Syn przejęty dzwoni do siostry, a Mary wściekła dzwoni do ojca: - Nie możecie się rozwieść! Jutro u was będziemy, nic nie róbcie bez nas! Ojciec odkłada słuchawkę, odwraca się do żony i mówi: - Zrobione, będą na Wigilii, tylko co wymyślimy na Wielkanoc?" },
    { keyword: "Pomyłka mailowa", text: "– Mąż pojechał dzień wcześniej na Florydę do hotelu. Postanowił wysłać maila do żony, ale pomylił się o jedną literę. Wiadomość trafiła do wdowy po pastorze, która wróciła z pogrzebu męża. Syn znalazł ją zemdloną przed ekranem, na którym pisało: \"Do: Moja ukochana żona. Temat: Jestem już na miejscu. Wszystko przygotowane na twoje przybycie jutro. PS: Tu na dole jest naprawdę gorąco.\"" },
    { keyword: "Etykieta koniaku", text: "– Babcia wysyła dziadka do piwnicy po flaszkę koniaku. Dziadek znajduje zakurzoną butelkę. Wypijają i nabierają ochoty na dziki sex. Kochają się godzinami. W końcu wycieńczona babcia pyta: - Ty, stary. Co tam było napisane na tej etykietce? Dziadek przeciera dokładniej i czyta: - Koń, jak nie może, wlać dwie krople na wiadro wody." },
    { keyword: "Gdzie leży", text: "Afryka – Żona do męża: - Wiesz, nasz syn dostał jedynkę, bo nie wiedział gdzie leży Afryka? Na to mąż: - Wiesz co, to musi być niedaleko, bo u mnie w pracy jest Murzyn i dojeżdża rowerem." },
    { keyword: "Dziecko z", text: "mężem – Młoda mężatka rok po ślubie przychodzi do lekarza i skarży się, że nie może zajść w ciążę. - Proszę się rozebrać - mówi lekarz. - Panie doktorze, Pan jest bardzo miły, ale ja to dziecko wolałabym mieć jednak z mężem..." },
    { keyword: "Zamknięte apteki", text: "– Psychiatra bada pacjenta: - Motocykliście w wypadku urwało głowę, ale wstał, podniósł ją i poszedł do apteki, żeby ją przykleić. Badany uśmiecha się z niedowierzaniem: - Pańska historia nie trzyma się kupy. Przecież apteki w niedzielę są zamknięte!" },
    { keyword: "Pomyłka dentysty", text: "– Dentysta mówi do pacjenta: - Proszę o wybaczenie, ale przez pomyłkę usunąłem panu zdrowy ząb, teraz muszę się zabrać za chory. - Całe szczęście, że nie jest pan okulistą..." },
    { keyword: "Połamane ręce", text: "– Przychodzi blondynka do lekarza: - Panie doktorze, jak się tu dotknę to boli, tu dotknę też boli, i tu boli... Lekarz zbadał i mówi: - Wiem co pani jest - ma pani ręce połamane..." },
    { keyword: "Ubezpieczenie NFZ", text: "– Chirurg do pacjenta: - Usunięcie tego gwoździa z pana głowy będzie kosztowało dwa tysiące. - Ale przecież ja mam ubezpieczenie w NFZ! - Na podstawie samego ubezpieczenia możemy go Panu lekko przygiąć, żeby pan nie zachaczał o futrynę..." },
    { keyword: "Ustawienie fotela", text: "– Przychodzi baba do lekarza i mówi: - Panie doktorze jestem w ciąży i bolą mnie zęby. A na to lekarz: - To niech się Pani w końcu zdecyduje, bo nie wiem jak ustawić fotel!" },
    { keyword: "Pacjent czy", text: "spadkobierca – Do gabinetu lekarskiego wchodzi mężczyzna z bombonierką, kwiatami i koniakiem. - Panie doktorze, przyszedłem Panu podziękować! - Przepraszam, a Pan to pacjent czy spadkobierca?" },
    { keyword: "Naciąganie skóry", text: "– Facet chudł i wisiała mu skóra. Lekarz kazał ją naciągać i wiązać na czubku głowy nitką. Po tygodniu facet wraca: - Panie doktorze, skóra gładka, ale mam pępek na czole, no i zobacz pan z czego ja mam krawat!" },
    { keyword: "Własny lekarz", text: "– Na izbie przyjęć przyjmują faceta, który przyniósł kapcie, szlafrok, pościel, materac. - Dobrze, a kim jest ten pan obok w białym kitlu? - Na wszelki wypadek wziąłem też lekarza, jakbyście nie mieli..." },
    { keyword: "Stojący kołnierz", text: "– Przychodzi baba do lekarza i mówi: - Panie doktorze, karmię mojego chłopa kluchami, aby nabrał sił i więcej mógł, no, wie pan... - Droga pani. Od krochmalu, to tylko kołnierzyk stoi." },
    { keyword: "Kwestia wieku", text: "– - Ból w pana lewym kolanie to kwestia wieku - wyjaśnia pacjentowi lekarz. - Ciekawe - denerwuje się pacjent - drugie kolano jest tak samo stare, a nie boli..." },
    { keyword: "Operacja ordynatora", text: "– Przed operacją: - Panie ordynatorze, czy będzie mnie pan osobiście operował??? - Tak, lubię przynajmniej raz na rok sprawdzić, czy jeszcze coś pamiętam...." },
    { keyword: "Lekarska praktyka", text: "– Czy to nie jest symptomatyczne, że lekarze swoją działalność nazywają \"praktyką\"?" },
    { keyword: "Szpitalny obiad", text: "– Pacjent w szpitalu do pielęgniarki: - Ale to lekarstwo niedobre. Obrzydliwość! - To nie lekarstwo. To obiad." },
    { keyword: "Tabletka na", text: "sen – W środku nocy pielęgniarka w szpitalu budzi pacjenta. - Co się stało? - pyta zaspany chory. - Zapomniał pan wziąć tabletki na sen..." },
    { keyword: "Strzykanie w", text: "nodze – Przychodzi baba do lekarza, siada na podłodze, wygina dziwacznie obie nogi i zakłada je sobie na kark. - Widzi pan, doktorze? Kiedy tak to robię, to mnie niepokojąco, lekko w prawej nodze strzyka..." },
    { keyword: "Mała asekuracja", text: "– Dentysta schyla się nad pacjentem, a ten łapie go za jądra. Lekarz pyta nieufnie, o co chodzi. Pacjent spokojnym głosem: - To tylko taka mała asekuracja. Bo przecież nie chodzi o to, żebyśmy sobie ból zadawali... Prawda Panie Doktorze?" },
    { keyword: "Wyniki badań", text: "– Lekarz dzwoni do pacjenta: - Mam dobrą i złą wieść. Dobra: zostało Panu 24h życia. - To straszne! Co może być gorszego? - Próbuję się z Panem skontaktować od wczoraj." },
    { keyword: "Kastracja czy", text: "obrzezanie – Facet przyszedł do szpitala: - Proszę mnie wykastrować. Po operacji lekarze pytają, czemu tak postąpił. - Ożeniłem się z ortodoksyjną Żydówką i wiecie... - To może chciał się pan obrzezać??? - A co ja powiedziałem?!" },
    { keyword: "Chora bezobjawowo", text: "– Przychodzi kobieta do lekarza: - Co pani dolega? - Nic. - A jakie ma pani objawy? - Nie mam żadnych. - To po co pani tu przyszła? - Bo mogę być chora bezobjawowo..." },
    { keyword: "Apatia żony", text: "– Mąż przyprowadza żonę do psychiatry. Lekarz przytula pacjentkę i namiętnie całuje. Wraca do męża: - Oto zabiegi potrzebne żonie. We wtorki, czwartki i soboty. - Dobrze, we wtorki i czwartki mogę ją przyprowadzać, ale sobota wykluczona – gram z kolegami w karty!" },
    { keyword: "Syrop i", text: "rozwolnienie – Kolega opowiada koledze: - Byłem u lekarza i poprosiłem o syrop od kaszlu, a on dał mi środek na rozwolnienie. - Zażyłeś? I co, kaszlesz? - Nie mam odwagi...." },
    { keyword: "Trzymanie lampionu", text: "– Żona Boba rodzi w lesie w nocy. Lekarz daje Bobowi lampion: - Proszę trzymać, bym widział, co robię. Rodzi się chłopiec, za chwilę dziewczynka, potem lekarz krzyczy, że idzie trzecie. Bob zdezorientowany pyta: - Myśli pan, że to światło tak je przyciąga?" },
    { keyword: "Lekcja autopsji", text: "– Profesor uczy studentów: - Najważniejsze to pokonać obrzydzenie. Włożył palec w tyłek trupa i go oblizał. Kazał wszystkim powtórzyć. Studenci zrobili to z obrzydzeniem. Profesor na to: - Po drugie – spostrzegawczość. Włożyłem wskazujący, a oblizałem środkowy!" },
    { keyword: "Radość z", text: "życia – Lekarz do pacjenta: - Nie wolno panu palić, pić alkoholu, kawy, jeść tłuszczu i uprawiać seksu. No i najważniejsze... Więcej radości z życia mój drogi, więcej radości z życia!" },
    { keyword: "Dwója z", text: "matematyki – - Jasiu, czy twój ojciec pomaga ci jeszcze w odrabianiu lekcji? - Nie, ta ostatnia dwója z matematyki zupełnie go załamała." },
    { keyword: "Kurczak w", text: "zamrażarce – Nauczycielka pyta dzieci o zwierzęta w domu: pies, kot, rybki... Wreszcie zgłasza się Jasio: - A my mamy kurczaka w zamrażarce..." },
    { keyword: "Nawalony jak", text: "szpak – Pani prosi o zdania z ptakami. Jasio: - Tata przyszedł nawalony jak szpak. Z dwoma: - ...nawalony jak szpak i wyrżnął orła. Z trzema: - ...puścił pawia. Z czterema: - ...aż mu dwa gile z nosa wyszły. Z pięcioma: - ...i poszedł znowu pić na sępa." },
    { keyword: "Plaża nudystów", text: "– Po plaży nudystów spaceruje matka z synkiem. Synek pyta: - Dlaczego jeden pan ma większego, a drugi mniejszego ptaszka? - Dlatego Jasiu, że jeden jest biedny, a drugi bogaty. Po chwili Jasio woła: - Popatrz mamusiu! Tamten pan właśnie się bogaci!" },
    { keyword: "Dziadostwo przyszło", text: "– Jasio wypatruje gości. - Mamo, ciocia z wujkiem idą. - Jasiu, mówi się wujostwo. - Mamo, kuzyn z kuzynką idą. - Mówi się kuzynostwo. Nagle Jasio woła: - Mamo, dziadostwo przyszło!" },
    { keyword: "Zwierzęta w", text: "Afryce – Pani od biologii pyta Jasia: - Jasiu wymień mi 5 zwierząt mieszkających w Afryce. Na to Jaś: - 2 małpy i 3 słonie." },
    { keyword: "Doświadczenie chemiczne", text: "– Pani wrzuciła robaki do 3 probówek: z alkoholem (zdechł), z tytoniem (zdechł), z wodą (żyje). Pyta Jasia o wniosek. Jasio odpowiada: - Kto pije i pali, nie ma robali!" },
    { keyword: "Przeklinanie Jasia", text: "– Jasio przewrócił się i przeklina. Mężczyzna mówi: - Jesteś za mały, żeby tak przeklinać! - Wszyscy mi tłumaczą, że jestem już za duży, żeby płakać! To co ja mam w końcu robić, kiedy sobie stłukę kolano?!" },
    { keyword: "Tok myślenia", text: "– Lekcja, zgadywanki. Jasio pyta: - Co to jest: długi, czerwony i często staje? Pani zaczerwieniona: - Jasiu, jak ty możesz takie świństwa... A Jaś: - To autobus, proszę Pani, ale podziwiam Pani tok myślenia!" },
    { keyword: "Zjadanie z", text: "talerza – Zdenerwowana mama do córeczki: - Wiesz co się dzieje z małymi dziewczynkami, które nie zjadają wszystkiego z talerza?! - Wiem, pozostają szczupłe, zostają modelkami i zarabiają kupę forsy..." },
    { keyword: "Produkt zastępczy", text: "– Syn sprzedaje w sklepie. Klient pyta o kiełbasę – nie ma. Matka uczy go, by proponował produkt zastępczy (np. salceson). Przychodzi kolejny klient: - Jest papier toaletowy? - Nie, ale jest papier ścierny, tektura...." },
    { keyword: "Atak osy", text: "– Przychodzi mały Jaś do szkoły z opuchniętą twarzą. - Co się stało Jasiu? - Ooossss-aaaaa. - Ugryzła cię?? - Nie, tato łopatą zabił!" },
    { keyword: "Czytanie Szekspira", text: "– Jasio wyśmiewa krzywe nogi pijaka. Mama za karę każe mu siedzieć w domu i czytać Szekspira. Po trzech miesiącach Jasio znów widzi tego faceta i mówi: - Cóż to za moda nastała w tych czasach, żeby jaja swe nosić w nawiasach." },
    { keyword: "Jaki to", text: "czas – Nauczyciel pyta: - Jaki to czas? Ja się kąpię, ty się kąpiesz, on się kąpie ... - Sobota wieczór, panie profesorze." },
    { keyword: "Zwierzątko na", text: "literę – Pani pyta o zwierzę na A. Jasio: - A może to karp? na B: - Być może to karp? Pani wyrzuca go za drzwi. na C: Jasio zagląda przez drzwi: - Czyżby to był karp???" },
    { keyword: "Zwierzątko duduś", text: "– Ojciec potyka się i mówi \"dupa\". Jasio pyta, co powiedział, ojciec kłamie, że \"duduś\" i że to takie zwierzątko. Jasio drąży: jak wygląda, co je, czy ma dzieci... Ojciec traci cierpliwość: - Dupa!!!! Powiedziałem dupa!!!!!!!!" },
    { keyword: "Ślub i", text: "czad – Dwaj mali chłopcy stoją przed kościołem, z którego wychodzą właśnie nowożeńcy. Jeden mówi: - Patrz jaki teraz będzie czad! Po czym biegnie do pana młodego i woła: - Tato, tato... ..." },
    { keyword: "Niedźwiedź czy", text: "dźwiedź – Lekcja biologii. - Jak się nazywa największy zwierz mieszkający w naszych lasach? - Pyta pani. Jasio: - Dźwiedź. - Chyba niedźwiedź? - Jeśli nie dźwiedź, to ja nie wiem." },
    { keyword: "Świadectwo szkolne", text: "– Jasio wpada do domu szczęśliwy. Ojciec ogląda świadectwo: - Durniu! Same pały, a ty się cieszysz?! - Jeszcze tylko lanie i wakacje!!" },
    { keyword: "Kwas siarkowy", text: "– Nauczyciel napisał wzór chemiczny: - Jasiu co ten wzór oznacza? - To jest, ojej, mam to na końcu języka.... - Dziecko wypluj to natychmiast, bo to kwas siarkowy!" },
    { keyword: "Cham z", text: "tramwaju – Dwie babcie oglądają boks. Jeden zawodnik pada. Sędzia liczy. Wstanie? Nie wstanie? - Nie wstanie - komentuje jedna z babć - znam chama z tramwaju." },
    { keyword: "Dom starców", text: "– Emeryci narzekają na słabe ręce, wzrok, reumatyzm, kręcenie w głowie i sklerozę. Jeden podsumowuje: - Ech, taka jest cena podeszłego wieku. - No, ale nie jest tak źle, panowie – przynajmniej mamy jeszcze wszyscy prawa jazdy." },
    { keyword: "Badanie słuchu", text: "– Starszy pan pyta lekarza, jak sprawdzić słuch żony. Lekarz mówi, by wołać z różnych odległości. Mąż woła z 10 metrów, z 8, 6, 4, 2... W końcu staje tuż przy niej: - Kochanie, co dziś na kolację? - Kurczak, do cholery, pięć razy Ci powtarzam!!!" },
    { keyword: "Robienie rękawiczek", text: "– Dentysta rozbawia staruszkę, mówiąc, że rękawiczki lateksowe robi się w Meksyku przez zanurzanie rąk w zbiorniku. Pięć minut później, podczas borowania, staruszka wybucha śmiechem: - Co panią tak śmieszy? - Właśnie sobie pomyślałam, jak są robione kondomy!" },
    { keyword: "Dzisiejsza młodzież", text: "– Na ławce siedzą dwaj emeryci: - Popatrz, jaka ta dzisiejsza młodzież ma ciężko w tym kryzysie! Jednego papierosa na pięciu muszą palić... - No, ale dzielne chłopaki! Mimo wszystko się chichrają na całego!" },
    { keyword: "Objawy staruszka", text: "– 86-latek narzeka lekarzowi, że po seksie ma czerwone oczy, nogi z waty i brak tchu. Lekarz mówi, że to normalne w tym wieku i pyta, kiedy to zauważył. Staruszek: - Hm, trzy razy ostatniej nocy i dwa razy dziś rano!" },
    { keyword: "Zakład w", text: "barze – Facet zakłada się z barmanem o stówę, że nasika do szklanki z drugiego końca lady. Wchodzi na bar i sika wszędzie, także na barmana. Barman się cieszy, bo wygrał stówę i pyta, czemu facet też jest wesoły. - Bo założyłem się z tamtym o 1000 zł, że nasikam na ciebie, a ty będziesz uśmiechnięty!" },
    { keyword: "Przepite pieniądze", text: "– Wpada facet do baru i pyta: – Byłem tu wczoraj? – Tak. – Przepiłem pięć stówek? – Tak. – Uff… To dobrze. Już myślałem, że zgubiłem." },
    { keyword: "Woda z", text: "sedesu – Pijak prosi synka sąsiadów o szklankę wody. Dziecko przynosi całą, potem pół. Pijak pyta, czemu tylko pół. - Bo do kranu nie dosięgnę, a z sedesu już wszystko wybrałem." },
    { keyword: "Do sypialni", text: "– Wsiada pijak do taksówki i mówi: - Proszę do domu. - A dokładniej? - Prosto do sypialni!" },
    { keyword: "Bilet za", text: "mandat – Jedzie autobusem pijany facet. Kanar: - Bilet proszę! - Nie mam. - No to będzie pan musiał teraz kupić bilecik za 50 zł. Pijak na to: - Dziękuję, ale od koników nie kupuję." },
    { keyword: "Zależnie od", text: "rocznika – Francuz do kolegi: - Z czego byś zrezygnował – z wina, czy z kobiet? - Aaaa, to zależy od rocznika." },
    { keyword: "Nawożenie truskawek", text: "– Obok pola truskawek stoi dom wariatów. Pacjent pyta rolnika: - Co ty robisz? - Nawożę truskawki gnojem. - Aaa... bo wiesz, ja posypuję truskawki cukrem, ale ja to jestem wariat." },
    { keyword: "Męski punkt", text: "– Kobieta na wsi kupiła 15 kur i 15 kogutów. Sąsiad zdziwiony mówi, że wystarczyłby jeden kogut. Na to kobieta karcącym głosem: - To pan tak myśli! Ale to jest typowo męski punkt widzenia." },
    { keyword: "Znajomość języka", text: "– Syn gospodarza przyjechał z Anglii. - Idź synku trzeba wywieźć gnój - mówi gospodarz. - What? - syn chce się pochwalić angielskim. - Łod krowy i łod świni - odpowiada gospodarz." },
    { keyword: "Kosa na", text: "wozie – Gazda z gaździną jadą furmanką. Mija ich motocyklista bez głowy, za chwilę drugi i trzeci – też bez głowy. Gazda mówi: - Weźże Hanuś rzuć te kosę inaczej na wozie..." },
    { keyword: "Nietypowy zakład", text: "– Farmer założył się z kupcem, że jeśli przywiąże go nago do drzewa przy pasiece i do wieczora nie użądli ko pszczoła, kupiec zapłaci podwójnie za farmę. Wieczorem farmer idzie go odwiązać, a facet słania się na nogach. - Gdzie ugryzła? - pyta farmer. - Nigdzie nie ugryzła, to nie to... ale czy to cholerne cielę nie ma matki?" }
];

// Logika losowania
function getRandomWitz() {
    const randomIndex = Math.floor(Math.random() * witzeContainer.length);
    return witzeContainer[randomIndex];
}

// ── Draw Joke & Inject in layout ──
function drawJoke() {
  const joke = getRandomWitz();
  const jokeTextEl = document.getElementById('joke-text');
  if (jokeTextEl && joke) {
    // Strip leading dashes if present in the text field to prevent doubles
    let cleanText = joke.text.trim();
    if (cleanText.startsWith('–') || cleanText.startsWith('—') || cleanText.startsWith('-')) {
      cleanText = cleanText.substring(1).trim();
    }

    jokeTextEl.innerHTML = `
      <span class="joke-keyword">${joke.keyword}</span>
      <span class="joke-separator">—</span>
      <span class="joke-text">${cleanText}</span>
    `;
  }
}

// ── i18n Language Switcher Support ──
function switchLang(lang) {
  currentLang = lang;
  try {
    localStorage.setItem('selectedLang', lang);
  } catch (e) {
    console.warn('localStorage not accessible:', e);
  }
  
  // Update lang button active classes
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`btn-${lang}`);
  if (activeBtn) activeBtn.classList.add('active');

  const trans = (typeof translations !== 'undefined' ? translations : (window.translations || null));

  // Translate basic elements that use data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (trans && trans[lang] && trans[lang][key]) {
      el.innerHTML = trans[lang][key];
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (trans && trans[lang] && trans[lang][key]) {
      el.placeholder = trans[lang][key];
    }
  });

  // Refresh user joke feed translations
  renderBlogFeed();
}

// ── Hamburger Drawer Toggle ──
function openDrawer() {
  document.getElementById('drawer').classList.add('open');
  document.getElementById('overlay').classList.add('visible');
}
function closeDrawer() {
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('overlay').classList.remove('visible');
}

// ── User Jokes Blog Engine (Kronika Humoru) ──
let userWitze = [];
let isUsingFallback = true;

function loadUserJokes() {
  fetch('./api/jokes')
    .then(res => {
      if (!res.ok) throw new Error('API not available');
      return res.json();
    })
    .then(data => {
      if (data && data.fallback === false && Array.isArray(data.jokes)) {
        userWitze = data.jokes;
        isUsingFallback = false;
        console.log('Successfully connected to production KV database.');
      } else {
        // Fallback to local storage
        loadFromLocalStorage();
      }
      renderBlogFeed();
    })
    .catch(err => {
      console.log('Using local fallback (API not configured or offline):', err.message);
      loadFromLocalStorage();
      renderBlogFeed();
    });
}

function loadFromLocalStorage() {
  isUsingFallback = true;
  const savedWitze = localStorage.getItem('user_witze');
  if (savedWitze) {
    try {
      userWitze = JSON.parse(savedWitze);
    } catch (e) {
      console.error('Failed to parse user jokes:', e);
      userWitze = [];
    }
  } else {
    userWitze = [];
  }
}

function saveToLocalStorage() {
  try {
    localStorage.setItem('user_witze', JSON.stringify(userWitze));
  } catch (err) {
    console.warn('localStorage not writeable:', err);
  }
}

function fallbackPostLocal(keyword, text) {
  const newWitz = {
    id: Date.now(),
    keyword: keyword,
    text: text,
    date: new Date().toLocaleDateString(currentLang === 'pl' ? 'pl-PL' : 'de-DE')
  };
  userWitze = [newWitz, ...userWitze];
  saveToLocalStorage();
  renderBlogFeed();
}

function handleBlogSubmit(e) {
  e.preventDefault();
  const keywordEl = document.getElementById('blog-keyword');
  const textEl = document.getElementById('blog-text');
  if (!keywordEl || !textEl) return;

  const keyword = keywordEl.value.trim();
  const text = textEl.value.trim();
  if (!keyword || !text) return;

  if (isUsingFallback) {
    fallbackPostLocal(keyword, text);
    keywordEl.value = '';
    textEl.value = '';
  } else {
    // Production Cloud persistence
    fetch('./api/jokes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ keyword, text })
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to post to API');
        return res.json();
      })
      .then(data => {
        if (data && data.joke) {
          userWitze = [data.joke, ...userWitze];
          keywordEl.value = '';
          textEl.value = '';
          renderBlogFeed();
        } else {
          // Fallback to local on invalid response
          fallbackPostLocal(keyword, text);
          keywordEl.value = '';
          textEl.value = '';
        }
      })
      .catch(err => {
        console.warn('API Post failed, falling back to local:', err);
        fallbackPostLocal(keyword, text);
        keywordEl.value = '';
        textEl.value = '';
      });
  }
}

function renderBlogFeed() {
  const feedEl = document.getElementById('blog-feed');
  if (!feedEl) return;

  if (userWitze.length === 0) {
    const trans = (typeof translations !== 'undefined' ? translations : (window.translations || null));
    const emptyMsg = (trans && trans[currentLang] && trans[currentLang]['blog_empty']) 
      ? trans[currentLang]['blog_empty'] 
      : 'KRONIKA JEST JESZCZE PUSTA. BĄDŹ PIERWSZY!';
    feedEl.innerHTML = `<p class="blog-empty">${emptyMsg}</p>`;
  } else {
    let html = '';
    userWitze.forEach(witz => {
      // Strip leading dashes in user joke text to keep inline formatting clean
      let cleanText = witz.text.trim();
      if (cleanText.startsWith('–') || cleanText.startsWith('—') || cleanText.startsWith('-')) {
        cleanText = cleanText.substring(1).trim();
      }
      
      html += `
        <div class="blog-joke-box">
          <p class="blog-joke-paragraph">
            <span class="blog-joke-keyword">${witz.keyword}</span>
            <span class="blog-joke-separator"> — </span>
            <span class="blog-joke-text">${cleanText}</span>
          </p>
          <span class="blog-joke-date">${witz.date}</span>
        </div>
      `;
    });
    feedEl.innerHTML = html;
  }
}

// ── Initialization ──
document.addEventListener('DOMContentLoaded', () => {
  // Pull language from localStorage
  try {
    const savedLang = localStorage.getItem('selectedLang');
    if (savedLang && (savedLang === 'pl' || savedLang === 'de')) {
      currentLang = savedLang;
    }
  } catch (e) {
    console.warn('localStorage not accessible:', e);
  }
  
  switchLang(currentLang);
  
  // Draw initial joke
  drawJoke();

  // Load chronology from KV store or local fallback
  loadUserJokes();

  // Tie window actions
  window.drawJoke = drawJoke;
  window.switchLang = switchLang;
  window.openDrawer = openDrawer;
  window.closeDrawer = closeDrawer;
  window.handleBlogSubmit = handleBlogSubmit;
});
