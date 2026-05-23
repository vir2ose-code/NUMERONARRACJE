package com.numerology.app.data

// Ta klasa przechowuje szczegóły dla każdej wibracji numerologicznej
data class NumberDetail(
    val name: String,
    val archetype: String,
    val description: String
)

object BirthPathDatabase {
    val vibrationDetails: Map<Int, NumberDetail> = mapOf(
        1 to NumberDetail(
            name = "Pionier",
            archetype = "Niezależność · Ambicja · Innowacja · Przywództwo · Klarowność",
            description = "Jesteś osobą idącą własną drogą, posiadającą wrodzony talent przywódczy, potężną wolę i nieustający strumień nowych pomysłów. Twoja autentyczność i determinacja naturalnie przyciągają ludzi, których potrafisz inspirować i motywować samym swoim przykładem. Największym wyzwaniem na Twojej drodze jest Twój własny perfekcjonizm, ukryta niepewność oraz tendencja do pochopnych decyzji. Twoją misją jest nie tylko osiąganie własnych celów, ale także uczenie innych odwagi do bycia sobą i pokazywanie, że niemożliwe nie istnieje."
        ),
        2 to NumberDetail(
            name = "Mediator",
            archetype = "Współpraca · Intuicja · Dyplomacja · Wrażliwość · Partnerstwo",
            description = "Jesteś osobą o niezwykłej intuicji, która potrafi poczuć niewypowiedziane emocje innych oraz naturalnie łączyć ludzi w poszukiwaniu harmonii. Twoje ciepło, delikatność i autentyczna troska sprawiają, że budujesz trwałe relacje i jesteś dla bliskich wspaniałym oparciem. Głównym wyzwaniem dla Twojej wibracji jest tendencja do zatracania się w potrzebach innych kosztem własnych oraz unikanie konfrontacji. Twoją misją jest nauka stawiania zdrowych granic i wypracowanie mądrej współpracy, w której pomagasz innym bez poświęcania siebie."
        ),
        3 to NumberDetail(
            name = "Artysta życia",
            archetype = "Radość · Twórczość · Komunikacja · Lekkość · Miłość",
            description = "Jesteś uosobieniem radości życia i kreatywności, potrafiącym rozświetlić każde miejsce oraz z łatwością nawiązywać serdeczne kontakty z ludźmi. Posiadasz wspaniały dar artystycznego wyrażania siebie poprzez słowa, muzykę czy gesty, co czyni Cię mostem między sercami. Twoim wyzwaniem są jednak szybkie wahania nastroju, zależność od opinii innych oraz skłonność do zakładania masek, by zyskać akceptację. Twoją misją jest niesienie światła oraz pokazywanie światu, że prawdziwe szczęście tkwi w autentycznym przeżywaniu miłości i radości bez żadnych masek."
        ),
        4 to NumberDetail(
            name = "Budowniczy",
            archetype = "Stabilność · Konsekwencja · Bezpieczeństwo · Praca · Zaufanie",
            description = "Jesteś życiowym fundamentem, na którym inni mogą polegać bezwarunkowo dzięki Twojej lojalności, cierpliwości i rzetelności. Posiadasz wrodzone zdolności organizacyjne oraz rzadką umiejętność metodycznego dążenia do celu krok po kroku, bez chodzenia na skróty. Największym wyzwaniem Czwórki jest lęk przed zmianami, upór oraz nadmierne przywiązanie do utartych schematów z przeszłości. Twoją misją jest dawanie otoczeniu poczucia stabilności i bezpieczeństwa oraz pokazywanie, że codzienna, uczciwa praca przynosi trwałe i piękne owoce."
        ),
        5 to NumberDetail(
            name = "Podróżnik",
            archetype = "Wolność · Zmiany · Energia · Wszechstronność · Granice",
            description = "Jesteś wibracją ciągłego ruchu, charyzmy i ciekawości świata, dla której wolność i zmiany stanowią naturalny rytm życia. Twoja wszechstronność, niezwykła zdolność adaptacji oraz głęboka intuicja pozwalają Ci odnaleźć się w każdym środowisku i inspirować innych. Wyzwaniem tej drogi bywa rozproszenie energii, brak konsekwencji oraz pokusa traktowania codziennych obowiązków jako ograniczenia wolności. Twoją misją jest bycie katalizatorem transformacji i pokazywanie ludziom, że zmiany są pięknym zaproszeniem do ciągłego rozwoju i wewnętrznego wzrostu."
        ),
        6 to NumberDetail(
            name = "Opiekun",
            archetype = "Harmonia · Piękno · Odpowiedzialność · Miłość · Balans",
            description = "Jesteś uosobieniem ciepła, odpowiedzialności i troski, które potrafi intuicyjnie wnosić harmonię oraz piękno do każdego otoczenia. Twoja rzetelność i głęboka wrażliwość czynią Cię naturalną oazą spokoju, do której inni chętnie przychodzą po wsparcie i radę. Twoim największym wyzwaniem jest skłonność do zapominania o sobie, brania zbyt dużej odpowiedzialności za innych oraz perfekcjonizm. Twoją misją jest odnalezienie równowagi między dawaniem a przyjmowaniem oraz nauka dbania o własne potrzeby z taką samą miłością, jaką obdarzasz bliskich."
        ),
        7 to NumberDetail(
            name = "Filozof",
            archetype = "Wiedza · Głębia · Duchowość · Wyjątkowość · Dystans",
            description = "Jesteś dociekliwym poszukiwaczem prawdy, posiadającym niezwykłą głębię intelektualną, analityczny umysł oraz bogaty świat wewnętrzny. Twoja mądrość wykracza poza wiedzę książkową, a umiejętność patrzenia na rzeczy z wielu perspektyw czyni z Ciebie wspaniałego doradcę. Wyzwaniem Siódemki jest lęk przed zaufaniem, zbytnie komplikowanie prostych spraw oraz dystans, który może prowadzić do osamotnienia. Twoją misją jest dzielenie się zdobytą mądrością i poszukiwanie prawdy w służbie innym, przy jednoczesnym otwarciu się na przyjmowanie życiowych darów."
        ),
        8 to NumberDetail(
            name = "Autorytet",
            archetype = "Władza · Siła · Sukces · Etyka · Realizacja",
            description = "Jesteś uosobieniem cichej siły i naturalnego autorytetu, posiadającym wyjątkową wolę budowania trwałych rzeczy oraz przekuwania wizji w rzeczywistość. Twoja niezłomność, wewnętrzna etyka oraz zdolność podnoszenia się z każdej porażki czynią z Ciebie wybitnego przywódcę i organizatora. Cieniem tej wibracji jest ryzyko dominacji nad innymi, pracoholizm oraz trudność ze znalezieniem czasu na odpoczynek. Twoją misją jest używanie swojej mocy do wspierania innych oraz zachowanie zdrowej równowagi między światem materialnym a duchowym."
        ),
        9 to NumberDetail(
            name = "Misjonarz",
            archetype = "Wiedza · Służba · Akceptacja · Nauczyciel · Transformacja",
            description = "Jesteś osobą o niezwykłej mądrości i empatii, która nosi w sobie doświadczenia wszystkich poprzednich wibracji i postrzega świat w sposób niezwykle szeroki. Twój głęboki idealizm, intuicja oraz poczucie odpowiedzialności czynią z Ciebie naturalnego nauczyciela i przewodnika dla innych. Największym wyzwaniem Dziewiątki jest narzucanie innym swojego zdania, skłonność do wszechwiedzy oraz ratowanie świata kosztem własnych sił. Twoją misją jest bezinteresowna służba płynąca z miłości do ludzi oraz uczenie innych głębomiej akceptacji, zaczynając od samego siebie."
        )
    )
}
