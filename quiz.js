let currentLang = 'pl'; // Default language
let currentQuestionIndex = 0;
let scores = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
let chosenAnswers = []; // Track answers to support language switching without losing progress
let calculatedPillars = { lu: '—', du: '—', mu: '—', kw: '—' };
let activeQuestionsOrder = [];
let activeAnswersPermutations = {};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// ── Mathematical Reduction & Parsing for 4 Pillars ──
function reduceToSingle(num) {
  let sum = parseInt(num);
  if (isNaN(sum)) return 1;
  while (sum > 9) {
    sum = String(sum).split('').reduce((a, c) => a + parseInt(c), 0);
  }
  return sum;
}

function parseBirthDate(dateStr) {
  if (!dateStr || dateStr.length !== 10) return null;
  const parts = dateStr.split('.');
  if (parts.length !== 3) return null;
  const d = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10);
  const y = parseInt(parts[2], 10);
  if (isNaN(d) || isNaN(m) || isNaN(y)) return null;
  if (d < 1 || d > 31) return null;
  if (m < 1 || m > 12) return null;
  if (y < 1800 || y > 2100) return null;
  return { d, m, y };
}

// ── 9-Question Numerological Database (Deep Spiritual/Psychological) ──
const quizQuestions = [
  {
    id: 1,
    pl: {
      question: "1. Jak najchętniej spędzasz wolny wieczór, aby w pełni naładować baterie?",
      answers: [
        { text: "Pracuję w samotności nad nowym, ekscytującym pomysłem lub projektem.", value: 1 },
        { text: "Spędzam czas z partnerem lub bliskim przyjacielem na szczerej rozmowie.", value: 2 },
        { text: "Wychodzę ze znajomymi na koncert, do teatru lub wesołe spotkanie towarzyskie.", value: 3 },
        { text: "Porządkuję przestrzeń wokół siebie lub majsterkuję, czerpiąc spokój z ładu.", value: 4 },
        { text: "Spontanicznie planuję kolejną podróż lub szukam nowych, mocnych wrażeń.", value: 5 },
        { text: "Dbam o domowe ognisko, przygotowuję pyszną kolację i troszczę się o komfort rodziny.", value: 6 },
        { text: "Zaszywam się w ciszy z dobrą książką filozoficzną lub oddaję się medytacji.", value: 7 },
        { text: "Planuję strategicznie cele zawodowe, budżet lub analizuję swoje sukcesy finansowe.", value: 8 },
        { text: "Wspieram bezinteresownie kogoś w potrzebie lub angażuję się w pomoc dla świata.", value: 9 }
      ]
    },
    de: {
      question: "1. Wie verbringst du am liebsten einen freien Abend, um deine Batterien wieder voll aufzuladen?",
      answers: [
        { text: "Ich arbeite allein an einer neuen, aufregenden Idee oder einem eigenen Projekt.", value: 1 },
        { text: "Ich genieße die Zeit mit meinem Partner oder einem engen Freund bei einem ehrlichen Gespräch.", value: 2 },
        { text: "Ich gehe mit Freunden aus – zu einem Konzert, ins Theater oder zu einem fröhlichen Treffen.", value: 3 },
        { text: "Ich bringe Ordnung in meinen Raum oder widme mich handwerklichen Dingen.", value: 4 },
        { text: "Ich plane spontan die nächste Reise oder suche nach aufregenden, neuen Abenteuern.", value: 5 },
        { text: "Ich pflege mein Zuhause, koche ein leckeres Essen und kümmere mich um das Wohl der Familie.", value: 6 },
        { text: "Ich ziehe mich in die Stille zurück, lese ein philosophisches Buch oder meditiere.", value: 7 },
        { text: "Ich plane strategisch meine beruflichen Ziele, mein Budget oder analysiere meine Erfolge.", value: 8 },
        { text: "Ich helfe uneigennützig jemandem in Not oder engagiere mich für ein globales Projekt.", value: 9 }
      ]
    }
  },
  {
    id: 2,
    pl: {
      question: "2. Kiedy stajesz przed trudnym wyzwaniem lub problemem, jaka jest Twoja pierwsza reakcja?",
      answers: [
        { text: "Biorę sprawy w swoje ręce, działam natychmiast i polegam wyłącznie na sobie.", value: 1 },
        { text: "Szukam wsparcia i rady, starając się rozwiązać problem polubownie w grupie.", value: 2 },
        { text: "Podchodzę do tego z optymizmem, wierząc, że uśmiech i intuicja wskażą mi drogę.", value: 3 },
        { text: "Analizuję fakty, układam plan działania krok po kroku i trzymam się sprawdzonych metod.", value: 4 },
        { text: "Traktuję problem jak ekscytującą przygodę i okazję do zmiany dotychczasowych schematów.", value: 5 },
        { text: "Przede wszystkim staram się zapewnić spokój i poczucie bezpieczeństwa swoim bliskim.", value: 6 },
        { text: "Wycofuję się na chwilę z chaosu, by w samotności głęboko przeanalizować całą sytuację.", value: 7 },
        { text: "Wykorzystuję swoją siłę, autorytet i wpływy, by sprawnie opanować sytuację.", value: 8 },
        { text: "Patrzę na sytuację z szerszej perspektywy, szukając w niej głębszej lekcji życiowej dla wszystkich.", value: 9 }
      ]
    },
    de: {
      question: "2. Wenn du vor einer schwierigen Herausforderung stehst, wie sieht deine erste Reaktion aus?",
      answers: [
        { text: "Ich nehme die Dinge selbst in die Hand, handle sofort und verlasse mich nur auf mich.", value: 1 },
        { text: "Ich suche Unterstützung und Rat und versuche, das Problem einvernehmlich in der Gruppe zu lösen.", value: 2 },
        { text: "Ich bleibe optimistisch und vertraue darauf, dass mir mein Lächeln und meine Intuition den Weg weisen.", value: 3 },
        { text: "Ich analysiere die Fakten, erstelle einen Schritt-für-Schritt-Plan und halte mich an bewährte Methoden.", value: 4 },
        { text: "Ich betrachte das Problem als aufregendes Abenteuer und Chance, Muster zu verändern.", value: 5 },
        { text: "Ich versuche in erster Linie, meinen Lieben Ruhe und ein Gefühl der Sicherheit zu geben.", value: 6 },
        { text: "Ich ziehe mich aus dem Chaos zurück, um die gesamte Situation in Stille tief zu analysieren.", value: 7 },
        { text: "Ich nutze meine Stärke, Autorität und meinen Einfluss, um die Lage effizient zu meistern.", value: 8 },
        { text: "Ich betrachte die Situation aus einer breiteren Perspektive und suche nach einer tieferen Lebenslektion.", value: 9 }
      ]
    }
  },
  {
    id: 3,
    pl: {
      question: "3. Co jest dla Ciebie absolutnie najważniejsze w relacjach z innymi ludźmi?",
      answers: [
        { text: "Wzajemny szacunek dla swojej niezależności, wolności i indywidualnych celów.", value: 1 },
        { text: "Głębokie partnerstwo, wzajemne zrozumienie bez słów i bliskość emocjonalna.", value: 2 },
        { text: "Lekkość, wspólny śmiech, inspiracja, kreatywność i wyrażanie emocji bez masek.", value: 3 },
        { text: "Lojalność, absolutne zaufanie, stabilność i pewność, że zawsze mogę na kimś polegać.", value: 4 },
        { text: "Elastyczność, brak rutyny, wspólne odkrywanie świata i akceptacja zmian.", value: 5 },
        { text: "Harmonia rodzinna, ciepło domowe, wzajemna troska i chęć niesienia pomocy.", value: 6 },
        { text: "Głębokie rozmowy intelektualne, szacunek dla prywatności i duchowe porozumienie.", value: 7 },
        { text: "Wspólne budowanie sukcesu, uczciwość, silny charakter i realizacja ambicji.", value: 8 },
        { text: "Bezwarunkowa akceptacja, empatia, tolerancja i wspólna służba wyższym celom.", value: 9 }
      ]
    },
    de: {
      question: "3. Was ist dir in Beziehungen zu anderen Menschen am allerwichtigsten?",
      answers: [
        { text: "Gegenseitiger Respekt für Unabhängigkeit, Freiheit und individuelle Ziele.", value: 1 },
        { text: "Tiefe Partnerschaft, gegenseitiges Verständnis ohne Worte und emotionale Nähe.", value: 2 },
        { text: "Leichtigkeit, gemeinsames Lachen, Inspiration, Kreativität und authentischer Selbstausdruck.", value: 3 },
        { text: "Loyalität, absolutes Vertrauen, Stabilität und die Gewissheit, sich aufeinander verlassen zu können.", value: 4 },
        { text: "Flexibilität, keine Routine, gemeinsames Entdecken der Welt und Akzeptanz von Wandel.", value: 5 },
        { text: "Familiäre Harmonie, häusliche Wärme, gegenseitige Fürsorge und Hilfsbereitschaft.", value: 6 },
        { text: "Tiefgründige intellektuelle Gespräche, Respekt vor der Privatsphäre und spirituelle Verbindung.", value: 7 },
        { text: "Gemeinsamer Erfolg, Ehrlichkeit, ein starker Charakter und die Verwirklichung von Ambitionen.", value: 8 },
        { text: "Bedingungslose Akzeptanz, Empathie, Toleranz und der gemeinsame Dienst an höheren Zielen.", value: 9 }
      ]
    }
  },
  {
    id: 4,
    pl: {
      question: "4. Jaki jest Twój największy wewnętrzny talent, który najbardziej u siebie cenisz?",
      answers: [
        { text: "Odwaga do przecierania nowych szlaków, ambicja i silna wola przywódcza.", value: 1 },
        { text: "Niezwykłe wyczucie emocji innych ludzi, dyplomacja i talent mediatora.", value: 2 },
        { text: "Kreatywność, talent do zarażania radością i piękny, lekki sposób komunikacji.", value: 3 },
        { text: "Rzetelność, doskonałe zdolności organizacyjne i zmysł praktyczny.", value: 4 },
        { text: "Wszechstronność, adaptacja do zmian i charyzmatyczne przyciąganie energii.", value: 5 },
        { text: "Tworzenie piękna, harmonii wokół siebie i głęboka, odpowiedzialna troska.", value: 6 },
        { text: "Mądrość analityczna, bogaty świat wewnętrzny i nieomylna intuicja duchowa.", value: 7 },
        { text: "Wizjonerstwo, determinacja, zdolności przywódcze i sukces materialny.", value: 8 },
        { text: "Współczucie, głębokie zrozumienie ludzi i talent do bycia przewodnikiem duchowym.", value: 9 }
      ]
    },
    de: {
      question: "4. Was ist dein größtes inneres Talent, das du an dir selbst am meisten schätzt?",
      answers: [
        { text: "Mut, neue Wege zu beschreiten, Ehrgeiz und ein starker Führungswille.", value: 1 },
        { text: "Außergewöhnliches Gespür für die Gefühle anderer, Diplomatie und Vermittlungstalent.", value: 2 },
        { text: "Kreativität, das Talent, Freude zu verbreiten, und leichte Kommunikation.", value: 3 },
        { text: "Zuverlässigkeit, hervorragende organisatorische Fähigkeiten und praktischer Sinn.", value: 4 },
        { text: "Vielseitigkeit, schnelle Anpassung an Veränderungen und charismatische Anziehungskraft.", value: 5 },
        { text: "Erschaffung von Schönheit, Harmonie um mich herum und verantwortungsvolle Fürsorge.", value: 6 },
        { text: "Analytische Weisheit, eine reiche Innenwelt und unfehlbare spirituelle Intuition.", value: 7 },
        { text: "Visionäre Kraft, Entschlossenheit, Führungsqualitäten und materieller Erfolg.", value: 8 },
        { text: "Mitgefühl, tiefes Menschenverständnis und das Talent, ein weiser Begleiter zu sein.", value: 9 }
      ]
    }
  },
  {
    id: 5,
    pl: {
      question: "5. Która z poniższych myśli lub afirmacji najbardziej rezonuje z Twoim sercem w obecnym momencie?",
      answers: [
        { text: "\"Mam odwagę żyć na własnych warunkach i realizować swoje unikalne pomysły.\"", value: 1 },
        { text: "\"Niosę pokój i harmonię, a relacje z bliskimi są moim największym skarbem.\"", value: 2 },
        { text: "\"Życie to radosna kreacja – dzielę się swoim światłem i autentycznością bez masek.\"", value: 3 },
        { text: "\"Buduję swoje życie na stabilnych podstawach, rzetelnie realizując cele krok po kroku.\"", value: 4 },
        { text: "\"Wolność jest moim oddechem – czerpię radość z każdej zmiany i nowej przygody.\"", value: 5 },
        { text: "\"Moje serce jest pełne miłości – z radością dbam o dobrostan i harmonię moich bliskich.\"", value: 6 },
        { text: "\"W ciszy swojego wnętrza odnajduję najwyższą mądrość, prawdę i spokój.\"", value: 7 },
        { text: "\"Dzięki wewnętrznej sile i determinacji tworzę trwały sukces i obfitość.\"", value: 8 },
        { text: "\"Akceptuję wszystko, co przynosi życie, i z miłością służę wyższemu dobru ludzkości.\"", value: 9 }
      ]
    },
    de: {
      question: "5. Welcher der folgenden Gedanken oder Affirmationen resoniert derzeit am meisten mit deinem Herzen?",
      answers: [
        { text: "\"Ich habe den Mut, nach meinen eigenen Vorstellungen zu leben und meine eigenen Ideen zu verwirklichen.\"", value: 1 },
        { text: "\"Ich bringe Frieden und Harmonie, und Beziehungen zu meinen Lieben sind mein größter Schatz.\"", value: 2 },
        { text: "\"Das Leben ist eine freudige Schöpfung – ich teile mein Licht und meine Authentizität ohne Masken.\"", value: 3 },
        { text: "\"Ich baue mein Leben auf stabilen Fundamenten auf und verwirkliche meine Ziele Schritt für Schritt.\"", value: 4 },
        { text: "\"Freiheit ist mein Atem – ich genieße jede Veränderung und jedes neue Abenteuer.\"", value: 5 },
        { text: "\"Mein Herz ist voller Liebe – mit Freude kümmere ich mich um das Wohlbefinden und die Harmonie meiner Lieben.\"", value: 6 },
        { text: "\"In der Stille meines Inneren finde ich die höchste Weisheit, Wahrheit und tiefen Frieden.\"", value: 7 },
        { text: "\"Mit innerer Stärke und Entschlossenheit erschaffe ich dauerhaften Erfolg und Fülle.\"", value: 8 },
        { text: "\"Ich akzeptiere alles, was das Leben bringt, und diene mit Liebe dem höheren Wohl der Menschheit.\"", value: 9 }
      ]
    }
  },
  {
    id: 6,
    pl: {
      question: "6. Co najbardziej przeszkadza Ci i irytuje w zachowaniu innych ludzi?",
      answers: [
        { text: "Narzucanie mi cudzej woli, próby ograniczenia mojej niezależności i brak ambicji.", value: 1 },
        { text: "Agresja, egoizm, brak empatii i brak taktu w relacjach.", value: 2 },
        { text: "Toksyczny pesymizm, marudzenie, fałsz i noszenie sztucznych masek.", value: 3 },
        { text: "Nieterminowość, brak lojalności, chaos, lenistwo i niestabilność.", value: 4 },
        { text: "Próby kontrolowania mnie, nuda, rutyna i lęk przed zmianami.", value: 5 },
        { text: "Zaniedbywanie bliskich, brak odpowiedzialności, kłótnie i chaos estetyczny.", value: 6 },
        { text: "Hałaśliwość, brak szacunku dla prywatności, powierzchowność i głupota.", value: 7 },
        { text: "Niewykorzystywanie potencjału, brak etyki, chwiejność i słabość charakteru.", value: 8 },
        { text: "Nietolerancja, egoizm społeczny, brak współczucia i narzucanie swoich dogmatów.", value: 9 }
      ]
    },
    de: {
      question: "6. Was stört und ärgert dich am allermeisten am Verhalten anderer Menschen?",
      answers: [
        { text: "Wenn man mir den Willen anderer aufzwingt, Unabhängigkeit einschränkt oder mangelnder Ehrgeiz.", value: 1 },
        { text: "Aggression, Egoismus, mangelnde Empathie und Taktlosigkeit in Beziehungen.", value: 2 },
        { text: "Giftiger Pessimismus, Jammern, Falschheit und das Tragen künstlicher Masken.", value: 3 },
        { text: "Unpünktlichkeit, mangelnde Loyalität, Chaos, Faulheit und Unzuverlässigkeit.", value: 4 },
        { text: "Versuche, mich zu kontrollieren, Langeweile, Routine und die Angst vor Veränderungen.", value: 5 },
        { text: "Vernachlässigung der Lieben, Verantwortungslosigkeit, Streitigkeiten und ästhetisches Chaos.", value: 6 },
        { text: "Lautstärke, Respektlosigkeit gegenüber der Privatsphäre, Oberflächlichkeit und Dummheit.", value: 7 },
        { text: "Unwillen, das Potenzial zu nutzen, mangelnde Ethik, Inkonsequenz und Charakterschwäche.", value: 8 },
        { text: "Intoleranz, sozialer Egoismus, Mangel an Mitgefühl und das Aufzwingen eigener Dogmen.", value: 9 }
      ]
    }
  },
  {
    id: 7,
    pl: {
      question: "7. Jaka rola w grupie lub zespole przychodzi Ci najbardziej naturalnie i bez wysiłku?",
      answers: [
        { text: "Lider, który inicjuje projekty, wyznacza kierunek i podejmuje kluczowe decyzje.", value: 1 },
        { text: "Dyplomata i łącznik, który gasi konflikty i wspiera współpracę.", value: 2 },
        { text: "Kreatywny duch, który inspiruje innych swoimi pomysłami i dba o dobrą atmosferę.", value: 3 },
        { text: "Organizator, który pilnuje struktury, harmonogramu, szczegółów i stabilności.", value: 4 },
        { text: "Innowator, który wprowadza dynamiczne zmiany, testuje nowości i przełamuje rutynę.", value: 5 },
        { text: "Opiekun, który dba o komfort emocjonalny zespołu i integruje grupę.", value: 6 },
        { text: "Niezależny doradca, który w ciszy analizuje dane i dostarcza głębokich wglądów.", value: 7 },
        { text: "Strateg i realizator sukcesu, który dąży do maksymalnych, wymiernych wyników.", value: 8 },
        { text: "Mentor, który dzieli się swoją mądrością i motywuje innych do pracy dla wyższego dobra.", value: 9 }
      ]
    },
    de: {
      question: "7. Welche Rolle in einer Gruppe oder einem Team fällt dir am leichtesten und natürlichsten?",
      answers: [
        { text: "Der Anführer, der Projekte initiiert, die Richtung vorgibt und Entscheidungen trifft.", value: 1 },
        { text: "Der Diplomat und Vermittler, der Konflikte schlichtet und die Zusammenarbeit stärkt.", value: 2 },
        { text: "Der kreative Geist, der andere mit Ideen inspiriert und für gute Stimmung sorgt.", value: 3 },
        { text: "Der Organisator, der auf Struktur, Zeitpläne, Details und Stabilität achtet.", value: 4 },
        { text: "Der Innovator, der dynamische Veränderungen einbringt und mit Routine bricht.", value: 5 },
        { text: "Der Fürsorger, der sich um das emotionale Wohl des Teams kümmert und die Gruppe integriert.", value: 6 },
        { text: "Der unabhängige Berater, der Daten in Ruhe analysiert und tiefe Erkenntnisse liefert.", value: 7 },
        { text: "Der Stratege und Erfolgsmacher, der nach maximalen, messbaren Ergebnissen strebt.", value: 8 },
        { text: "Der Mentor, der seine Weisheit teilt und andere für ein höheres Wohl motiviert.", value: 9 }
      ]
    }
  },
  {
    id: 8,
    pl: {
      question: "8. Jak osobiście definiujesz swój największy życiowy sukces?",
      answers: [
        { text: "Osiągnięcie pełnej niezależności finansowej i osobistej oraz realizacja własnych wizji.", value: 1 },
        { text: "Zbudowanie głębokiego, pełnego miłości i wzajemnego zrozumienia związku partnerskiego.", value: 2 },
        { text: "Życie w lekkości, radości, ciągłym rozwoju kreatywnym i byciu w pełni autentycznym.", value: 3 },
        { text: "Zbudowanie bezpiecznego, trwałego fundamentu życiowego – domu, stabilności i zaufania.", value: 4 },
        { text: "Doświadczenie jak największej ilości przygód, podróży i ciągły rozwój wewnętrzny.", value: 5 },
        { text: "Zbudowanie ciepłego, harmonijnego ogniska domowego i wspieranie bliskich.", value: 6 },
        { text: "Poznanie uniwersalnych prawd o świecie, zgłębienie wiedzy duchowej i samopoznanie.", value: 7 },
        { text: "Osiągnięcie wybitnej pozycji, prestiżu, sukcesu materialnego oraz budowanie etycznych struktur.", value: 8 },
        { text: "Wniesienie realnego wkładu w lepszy świat, pomoc humanitarna i inspirowanie innych ludzi.", value: 9 }
      ]
    },
    de: {
      question: "8. Wie definierst du persönlich deinen größten Lebenserfolg?",
      answers: [
        { text: "Das Erreichen vollständiger finanzieller und persönlicher Unabhängigkeit sowie eigener Visionen.", value: 1 },
        { text: "Der Aufbau einer tiefen Partnerschaft voller Liebe und gegenseitigem Verständnis.", value: 2 },
        { text: "Ein Leben in Leichtigkeit, Freude, ständiger kreativer Entwicklung und vollkommener Authentizität.", value: 3 },
        { text: "Der Aufbau eines sicheren, dauerhaften Fundaments – ein Zuhause, Stabilität und Vertrauen.", value: 4 },
        { text: "Das Erleben von Abenteuern, Reisen und ständige innere Weiterentwicklung.", value: 5 },
        { text: "Die Schaffung eines warmen, harmonischen Heims und die Unterstützung meiner Lieben.", value: 6 },
        { text: "Das Erkennen universeller Wahrheiten, Vertiefung spirituellen Wissens und Selbsterkenntnis.", value: 7 },
        { text: "Erreichen einer herausragenden Position, Prestige, materieller Erfolg und ethische Macht.", value: 8 },
        { text: "Einen realen Beitrag zu einer besseren Welt leisten und andere Menschen inspirieren.", value: 9 }
      ]
    }
  },
  {
    id: 9,
    pl: {
      question: "9. Czego najbardziej potrzebujesz, kiedy czujesz silne przeciążenie, stres lub zmęczenie?",
      answers: [
        { text: "Całkowitej samotności, by w ciszy skupić się na własnych planach bez zewnętrznych zakłóceń.", value: 1 },
        { text: "Ciepłego przytulenia, czułej obecności bliskiej osoby i spokojnej rozmowy o emocjach.", value: 2 },
        { text: "Lekkiej rozrywki, obejrzenia dobrej komedii, tańca lub zrobienia czegoś kreatywnego.", value: 3 },
        { text: "Porządku w otoczeniu – ułożenie planu działania na papierze daje mi poczucie stabilności.", value: 4 },
        { text: "Całkowitej zmiany otoczenia – spontaniczny wyjazd w nowe miejsce regeneruje mnie najszybciej.", value: 5 },
        { text: "Zadbania o swoje ciało, gorącej kąpieli, pięknego zapachu i ciepłego domowego posiłku.", value: 6 },
        { text: "Ucieczki w absolutne odosobnienie, medytacji, jogi lub samotnego spaceru w lesie.", value: 7 },
        { text: "Intensywnego treningu sportowego, zaplanowania strategii wyjścia z kryzysu i działania.", value: 8 },
        { text: "Spokoju ducha, wybaczenia, refleksji lub poczucia, że to wszystko służy głębszej lekcji.", value: 9 }
      ]
    },
    de: {
      question: "9. Was brauchst du am meisten, wenn du eine starke Überlastung, Stress oder Müdigkeit spürst?",
      answers: [
        { text: "Vollständige Einsamkeit, um mich in Ruhe ohne äußere Störungen auf meine Pläne zu konzentrieren.", value: 1 },
        { text: "Eine warme Umarmung, zärtliche Nähe eines geliebten Menschen und ein ruhiges Gespräch.", value: 2 },
        { text: "Leichte Unterhaltung, einen lustigen Film anschauen, tanzen oder etwas Kreatives tun.", value: 3 },
        { text: "Ordnung um mich herum – einen Plan auf Papier zu bringen, gibt mir Stabilität zurück.", value: 4 },
        { text: "Einen Tapetenwechsel – ein spontaner Kurztrip an einen neuen Ort regeneriert mich am schnellsten.", value: 5 },
        { text: "Körperpflege, ein heißes Bad, schöne Düfte und ein warmes, selbstgekochtes Essen.", value: 6 },
        { text: "Rückzug in absolute Abgeschiedenheit, Meditation, Yoga oder ein Spaziergang allein im Wald.", value: 7 },
        { text: "Ein intensives Sporttraining, Ausarbeiten einer Krisenstrategie und direktes Handeln.", value: 8 },
        { text: "Seelenfrieden, Vergebung, Reflexion oder das Gefühl, dass dies einer tieferen Lektion dient.", value: 9 }
      ]
    }
  }
];

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

  // Dynamic Translate of active quiz elements
  updateQuizTexts();
}

// ── Update active quiz states on lang switch in real-time ──
function updateQuizTexts() {
  const trans = (typeof translations !== 'undefined' ? translations : (window.translations || null));
  if (!trans || !trans[currentLang]) return;

  // If start container is visible, update introduction
  const startCard = document.getElementById('start-container');
  if (startCard && !startCard.classList.contains('hidden')) {
    document.getElementById('quiz-subtitle').innerHTML = trans[currentLang]['quiz_subtitle'];
    document.getElementById('quiz-title').innerHTML = trans[currentLang]['quiz_main'];
    document.getElementById('quiz-intro').innerHTML = trans[currentLang]['quiz_intro'];
    document.getElementById('btn-quiz-start').innerHTML = trans[currentLang]['btn_quiz_start'];
  }

  // If quiz container is active, translate active question & options
  const quizCard = document.getElementById('quiz-container');
  if (quizCard && !quizCard.classList.contains('hidden')) {
    const qId = activeQuestionsOrder[currentQuestionIndex];
    const qData = quizQuestions[qId];
    if (qData) {
      // Progress text
      let progText = trans[currentLang]['quiz_progress'];
      progText = progText.replace('{current}', currentQuestionIndex + 1).replace('{total}', quizQuestions.length);
      document.getElementById('quiz-progress-text').innerHTML = progText;
      
      // Question title (remove leading numbers like "1. ")
      let questionText = qData[currentLang].question;
      questionText = questionText.replace(/^\d+\.\s+/, '');
      document.getElementById('question-title').innerHTML = questionText;

      // Update answer buttons in place without rebuilding DOM to avoid losing active state
      const ansButtons = document.querySelectorAll('.ans-btn');
      const perm = activeAnswersPermutations[qId];
      if (perm) {
        perm.forEach((ansIdx, i) => {
          const ans = qData[currentLang].answers[ansIdx];
          if (ansButtons[i]) {
            ansButtons[i].innerHTML = ans.text;
          }
        });
      }
    }
  }

  // If loading container is active
  const loadCard = document.getElementById('loading-container');
  if (loadCard && !loadCard.classList.contains('hidden')) {
    document.getElementById('loading-text').innerHTML = trans[currentLang]['quiz_loading'];
  }

  // If result container is active, translate tabs and structure
  const resultCard = document.getElementById('result-container');
  if (resultCard && !resultCard.classList.contains('hidden')) {
    document.getElementById('result-subtitle').innerHTML = trans[currentLang]['quiz_result_subtitle'];
    document.getElementById('result-intro').innerHTML = trans[currentLang]['quiz_result_intro'];
    document.getElementById('btn-quiz-restart').innerHTML = trans[currentLang]['quiz_btn_restart'];
    document.getElementById('result-cta-text').innerHTML = trans[currentLang]['quiz_cta_text'];
    
    // Tab labels
    document.querySelector('[data-tab="who"]').innerHTML = trans[currentLang]['tab_who'];
    document.querySelector('[data-tab="gifts"]').innerHTML = trans[currentLang]['tab_gifts'];
    document.querySelector('[data-tab="challenges"]').innerHTML = trans[currentLang]['tab_challenges'];
    document.querySelector('[data-tab="mission"]').innerHTML = trans[currentLang]['tab_mission'];
    document.querySelector('[data-tab="watch"]').innerHTML = trans[currentLang]['tab_watch'];

    // Injected texts from database
    const dominantVibe = calculateResult();
    injectResultProfile(dominantVibe);
  }
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

// ── Quiz Navigation Logic ──
function startQuiz() {
  const birthDateInput = document.getElementById('birthDate');
  const dateVal = birthDateInput ? birthDateInput.value.trim() : '';
  const parsedDate = parseBirthDate(dateVal);
  
  const trans = (typeof translations !== 'undefined' ? translations : (window.translations || null));
  
  if (!parsedDate) {
    const alertMsg = (trans && trans[currentLang]) ? trans[currentLang]['alert_invalid_date'] : 'Proszę wpisać poprawną datę urodzenia (DD.MM.RRRR).';
    alert(alertMsg);
    return;
  }

  // Calculate 4 Pillars (strictly reduced to 1-9)
  const d = parsedDate.d;
  const m = parsedDate.m;
  const y = parsedDate.y;
  
  const du = reduceToSingle(d);
  const mu = reduceToSingle(m);
  const allDigitsStr = String(d) + String(m) + String(y);
  const luSum = allDigitsStr.split('').reduce((acc, char) => acc + parseInt(char, 10), 0);
  const lu = reduceToSingle(luSum);
  const kw = reduceToSingle(du + mu);

  calculatedPillars = { lu, du, mu, kw };

  // Fade out start screen, fade in quiz container
  const startCard = document.getElementById('start-container');
  const quizCard = document.getElementById('quiz-container');

  startCard.style.opacity = '0';
  setTimeout(() => {
    startCard.classList.add('hidden');
    quizCard.classList.remove('hidden');
    quizCard.style.opacity = '0';
    setTimeout(() => {
      quizCard.style.opacity = '1';
    }, 50);
    
    // Generate shuffled questions order
    activeQuestionsOrder = [];
    for (let i = 0; i < quizQuestions.length; i++) {
      activeQuestionsOrder.push(i);
    }
    shuffleArray(activeQuestionsOrder);

    // Generate shuffled answers order for each question
    activeAnswersPermutations = {};
    for (let i = 0; i < quizQuestions.length; i++) {
      const perm = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      shuffleArray(perm);
      activeAnswersPermutations[i] = perm;
    }

    currentQuestionIndex = 0;
    scores = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
    chosenAnswers = [];
    loadQuestion(0);
  }, 300);
}

function loadQuestion(index) {
  currentQuestionIndex = index;
  const qId = activeQuestionsOrder[index];
  const qData = quizQuestions[qId];
  const trans = (typeof translations !== 'undefined' ? translations : (window.translations || null));
  if (!trans || !trans[currentLang]) return;

  // Progress Bar
  const percent = ((index + 1) / quizQuestions.length) * 100;
  document.getElementById('quiz-progress-fill').style.width = `${percent}%`;

  // Progress Text
  let progText = trans[currentLang]['quiz_progress'];
  progText = progText.replace('{current}', index + 1).replace('{total}', quizQuestions.length);
  document.getElementById('quiz-progress-text').innerHTML = progText;

  // Question Title (remove leading numbers like "1. ")
  let questionText = qData[currentLang].question;
  questionText = questionText.replace(/^\d+\.\s+/, '');
  document.getElementById('question-title').innerHTML = questionText;

  // Rebuild Answer Buttons
  const wrapper = document.getElementById('answers-wrapper');
  wrapper.innerHTML = '';

  const perm = activeAnswersPermutations[qId];
  perm.forEach(ansIdx => {
    const ans = qData[currentLang].answers[ansIdx];
    const btn = document.createElement('button');
    btn.className = 'ans-btn';
    btn.innerHTML = ans.text;
    btn.onclick = () => selectAnswer(ans.value);
    wrapper.appendChild(btn);
  });
}

function selectAnswer(val) {
  // Record choice
  chosenAnswers.push(val);
  scores[val] += 1;

  // Transition to next question or show results
  const quizCard = document.getElementById('quiz-container');
  
  if (currentQuestionIndex + 1 < quizQuestions.length) {
    quizCard.style.opacity = '0';
    setTimeout(() => {
      loadQuestion(currentQuestionIndex + 1);
      quizCard.style.opacity = '1';
    }, 250);
  } else {
    // End of quiz, transition to loader
    quizCard.style.opacity = '0';
    setTimeout(() => {
      quizCard.classList.add('hidden');
      showLoaderAndResults();
    }, 300);
  }
}

// ── Suspense Loader & Dynamic Transition ──
function showLoaderAndResults() {
  const loadCard = document.getElementById('loading-container');
  const resultCard = document.getElementById('result-container');
  
  loadCard.classList.remove('hidden');
  loadCard.style.opacity = '1';
  updateQuizTexts(); // Translates loader text

  // 2 Seconds suspense loader
  setTimeout(() => {
    loadCard.style.opacity = '0';
    setTimeout(() => {
      loadCard.classList.add('hidden');
      resultCard.classList.remove('hidden');
      resultCard.style.opacity = '0';
      
      // Calculate and display result
      const dominantVibe = calculateResult();
      injectResultProfile(dominantVibe);
      
      // Active the first tab
      switchTab('who');
      
      setTimeout(() => {
        resultCard.style.opacity = '1';
      }, 50);
    }, 300);
  }, 2000);
}

// ── Tie-Breaker Calculation Logic ──
function calculateResult() {
  let maxVal = -1;
  let maxVibes = [];

  // Find dominant vibe
  for (let key = 1; key <= 9; key++) {
    if (scores[key] > maxVal) {
      maxVal = scores[key];
      maxVibes = [key];
    } else if (scores[key] === maxVal) {
      maxVibes.push(key);
    }
  }

  // Tie-breaker resolution
  if (maxVibes.length === 1) {
    return maxVibes[0];
  } else {
    // If a tie exists, pick the highest vibration number among tied ones
    // Or deterministic fallback
    return Math.max(...maxVibes);
  }
}

// ── Inject profile details from vibrations_db.js ──
function injectResultProfile(vibrationNumber) {
  const db = (typeof VIBRATIONS_DATABASE !== 'undefined' ? VIBRATIONS_DATABASE : (window.VIBRATIONS_DATABASE || null));
  if (!db || !db[vibrationNumber]) {
    console.error('Vibrations Database not loaded or entry missing for:', vibrationNumber);
    return;
  }

  const profile = db[vibrationNumber][currentLang];
  
  // Set main elements
  document.getElementById('result-vibe-num').innerHTML = vibrationNumber;
  document.getElementById('result-vibe-name').innerHTML = profile.name;
  document.getElementById('result-vibe-archetype').innerHTML = profile.archetype;

  // Inject 4 Pillars
  const pillarLu = document.getElementById('pillar-lu');
  const pillarDu = document.getElementById('pillar-du');
  const pillarMu = document.getElementById('pillar-mu');
  const pillarKw = document.getElementById('pillar-kw');

  if (pillarLu) pillarLu.innerHTML = calculatedPillars.lu;
  if (pillarDu) pillarDu.innerHTML = calculatedPillars.du;
  if (pillarMu) pillarMu.innerHTML = calculatedPillars.mu;
  if (pillarKw) pillarKw.innerHTML = calculatedPillars.kw;

  // Cache database texts into standard fields so switchTab works seamlessly
  window.activeVibrationProfile = profile;
  
  // Fill in active tab
  const activeTabBtn = document.querySelector('.tab-btn.active');
  const activeTabId = activeTabBtn ? activeTabBtn.getAttribute('data-tab') : 'who';
  renderTabContent(activeTabId);
}

// ── Tabbed View Logic ──
function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  const targetBtn = document.querySelector(`[data-tab="${tabId}"]`);
  if (targetBtn) targetBtn.classList.add('active');

  renderTabContent(tabId);
}

function renderTabContent(tabId) {
  const profile = window.activeVibrationProfile;
  if (!profile) return;

  const contentBox = document.getElementById('result-tab-content');
  contentBox.style.opacity = '0';

  setTimeout(() => {
    let htmlContent = '';
    
    if (tabId === 'who') {
      htmlContent = `<p class="tab-paragraph">${profile.who_are_you.replace(/\n/g, '<br>')}</p>`;
    } else if (tabId === 'gifts') {
      htmlContent = `<p class="tab-paragraph">${profile.gifts.replace(/\n/g, '<br>')}</p>`;
    } else if (tabId === 'challenges') {
      htmlContent = `<p class="tab-paragraph">${profile.challenges.replace(/\n/g, '<br>')}</p>`;
    } else if (tabId === 'mission') {
      htmlContent = `<p class="tab-paragraph">${profile.mission.replace(/\n/g, '<br>')}</p>`;
    } else if (tabId === 'watch') {
      htmlContent = `<p class="tab-paragraph">${profile.watch.replace(/\n/g, '<br>')}</p>`;
    }

    contentBox.innerHTML = htmlContent;
    contentBox.style.opacity = '1';
  }, 150);
}

// ── Restart Quiz ──
function restartQuiz() {
  const resultCard = document.getElementById('result-container');
  const startCard = document.getElementById('start-container');

  resultCard.style.opacity = '0';
  setTimeout(() => {
    resultCard.classList.add('hidden');
    startCard.classList.remove('hidden');
    startCard.style.opacity = '0';
    setTimeout(() => {
      startCard.style.opacity = '1';
    }, 50);
    
    currentQuestionIndex = 0;
    scores = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
    chosenAnswers = [];
    window.activeVibrationProfile = null;
  }, 300);
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
  
  // Auto-format date input: dd.mm.yyyy
  const dateInput = document.getElementById('birthDate');
  if (dateInput) {
    dateInput.addEventListener('input', function() {
      let val = this.value.replace(/\D/g, ''); // Extract only numbers
      let formatted = '';
      
      for (let i = 0; i < val.length; i++) {
        if (i === 2 || i === 4) {
          formatted += '.';
        }
        formatted += val[i];
      }
      
      this.value = formatted.substring(0, 10);
    });
  }

  // Tie window actions
  window.startQuiz = startQuiz;
  window.switchTab = switchTab;
  window.restartQuiz = restartQuiz;
  window.switchLang = switchLang;
  window.openDrawer = openDrawer;
  window.closeDrawer = closeDrawer;
});
