const criticQuestions = [
  { id: 1,  pl: "Czuję jakbym była w istocie wewnętrznie niepełna.", de: "Ich fühle mich tief in meinem Inneren unvollständig." },
  { id: 2,  pl: "Wyznaczam dla siebie wysokie standardy.", de: "Ich setze sehr hohe Maßstäbe für mich selbst an." },
  { id: 3,  pl: "Czuję się okropnie sama ze sobą, gdy przestaję się kontrolować.", de: "Ich fühle mich schrecklich mit mir selbst, wenn ich die Kontrolle verliere." },
  { id: 4,  pl: "Naciskam na siebie bardzo mocno, aby ciężko pracować, dzięki czemu osiągnę swoje cele.", de: "Ich übe großen Druck auf mich aus, hart zu arbeiten, um meine Ziele zu erreichen." },
  { id: 5,  pl: "Gdy myślę o spróbowaniu czegoś nowego, stanięciu przed jakimś wyzwaniem, poddaję się zanim zacznę.", de: "Wenn ich daran denke, etwas Neues zu probieren, gebe ich auf, bevor ich überhaupt angefangen habe." },
  { id: 6,  pl: "Jestem zawstydzona wszystkim w sobie.", de: "Ich schäme mich für alles an mir." },
  { id: 7,  pl: "Niepokoi mnie coś, co zrobiłam i czego nie mogę sobie wybaczyć.", de: "Mich beunruhigt etwas, das ich getan habe und mir nicht verzeihen kann." },
  { id: 8,  pl: "Wiem, kim powinnam być, jestem zła na siebie, gdy zachowuję się inaczej.", de: "Ich weiß, wer ich sein sollte, und bin wütend auf mich, wenn ich mich anders verhalte." },
  { id: 9,  pl: "Przeznaczam wiele wysiłku, próbując kontrolować swoje impulsywne zachowanie.", de: "Ich wende viel Energie auf, um mein impulsives Verhalten zu kontrollieren." },
  { id: 10, pl: "Poziom mojej pewności siebie jest tak niski, że nie wierzę, że może mi się udać cokolwiek.", de: "Mein Selbstvertrauen ist so gering, dass ich nicht glaube, dass mir irgendetwas gelingen kann." },
  { id: 11, pl: "Atakuję samą siebie, gdy popełnię błąd.", de: "Ich greife mich selbst an, wenn ich einen Fehler mache." },
  { id: 12, pl: "Mam problem, aby utrzymać pozytywne wyobrażenie o sobie.", de: "Ich habe Probleme damit, ein positives Bild von mir selbst aufrechtzuerhalten." },
  { id: 13, pl: "Mam trudność, żeby czuć się okej wobec siebie, jeśli nie postępuję w zgodzie z tym, jak zostałam zaprogramowana w dzieciństwie.", de: "Es fällt mir schwer, mit mir im Reinen zu sein, wenn ich nicht so handle, wie ich in der Kindheit programmiert wurde." },
  { id: 14, pl: "Rzeczy, które muszę zrobić, nie mają końca.", de: "Die Dinge, die ich tun muss, nehmen kein Ende." },
  { id: 15, pl: "Robię innym ludziom rzeczy, wobec których czuję się okropnie winna.", de: "Ich tue anderen Dingen an, für die ich mich schrecklich schuldig fühle." },
  { id: 16, pl: "Istnieją pobłażliwe części mnie, które przejmują kontrolę i wpakowują mnie w tarapaty, a potem karzę się za nie.", de: "Es gibt nachgiebige Teile in mir, die die Kontrolle übernehmen und mich in Schwierigkeiten bringen, und danach bestrafe ich mich dafür." },
  { id: 17, pl: "Wierzę, że bezpieczniej jest nie próbować, niż odnieść porażkę.", de: "Ich glaube, es ist sicherer, es gar nicht erst zu versuchen, als zu scheitern." },
  { id: 18, pl: "Odczuwam niepokój i jestem samokrytykująca, kiedy rzeczy nie wychodzą tak, jakbym tego chciała.", de: "Ich bin unruhig und selbstkritisch, wenn die Dinge nicht so laufen, wie ich es gerne hätte." },
  { id: 19, pl: "Czuję się zawstydzona, kiedy nie spełniam oczekiwań innych ludzi.", de: "Ich schäme mich, wenn ich die Erwartungen anderer Menschen nicht erfülle." },
  { id: 20, pl: "Mówię sobie, że gdybym była dobrą osobą, opiekowałabym się lepiej ludźmi, o których dbam.", de: "Ich sage mir, wenn ich ein guter Mensch wäre, würde ich mich besser um die Menschen kümmern, die mir wichtig sind." },
  { id: 21, pl: "Na głębokim poziomie czuję, że nie mam prawa, aby istnieć.", de: "Auf einer tiefen Ebene habe ich das Gefühl, kein Recht zu haben, zu existieren." },
  { id: 22, pl: "Czuję się źle, ponieważ jestem zbyt leniwa, żeby uczynić zmianę na tym świecie.", de: "Ich fühle mich schlecht, weil ich zu faul bin, um in dieser Welt etwas zu verändern." },
  { id: 23, pl: "Czuję się zawstydzona niektórymi z moich nawyków.", de: "Ich schäme mich für einige meiner Gewohnheiten." },
  { id: 24, pl: "Spędzam znacznie więcej czasu niż to konieczne nad projektem, żeby był tak dobry jak to możliwe.", de: "Ich verbringe viel mehr Zeit als nötig mit einem Projekt, damit es so gut wie möglich wird." },
  { id: 25, pl: "Mam dokuczliwe poczucie, że jestem zła.", de: "Ich habe das quälende Gefühl, dass ich schlecht bin." },
  { id: 26, pl: "Staram się bardzo mocno, żeby przezwyciężyć moją tendencję do unikania wykonania zadań.", de: "Ich versuche sehr hart, meine Tendenz, Aufgaben zu vermeiden, zu überwinden." },
  { id: 27, pl: "Czuję się źle, ponieważ nie mogę być tym, czego moja rodzina lub kultura ode mnie oczekuje.", de: "Ich fühle mich schlecht, weil ich nicht das sein kann, was meine Familie oder Kultur von mir erwartet." },
  { id: 28, pl: "Czuję się źle, że nie mam tego, czego potrzeba, aby odnieść sukces.", de: "Ich fühle mich schlecht, weil mir das fehlt, was man braucht, um erfolgreich zu sein." }
];

const criticCategories = {
  perfekcjonista: {
    ids: [2, 11, 18, 24],
    name: { pl: "Perfekcjonista", de: "Der Perfektionist" },
    action: {
      pl: "Chce, abyś robiła wszystko bezbłędnie. Ma wobec Ciebie niezwykle wyśrubowane standardy, a kiedy nie udaje Ci się ich dosięgnąć, zaczyna szeptać, że to, co robisz, jest niewystarczająco dobre. Bardzo często paraliżuje Cię na samym starcie, wmawiając Ci, że jeśli nie zrobisz czegoś idealnie, to lepiej w ogóle nie zaczynać.",
      de: "Er will, dass du alles fehlerfrei machst. Er hat extrem hohe Ansprüche an dich, und wenn du diese nicht erfüllst, flüstert er dir ein, dass das, was du tust, nicht gut genug ist. Oft lähmt er dich schon am Start und redet dir ein, dass es besser ist, gar nicht erst anzufangen, wenn du es nicht perfekt machen kannst."
    },
    intent: {
      pl: "Pod tym surowym pancerzem kryje się lęk przed oceną i odrzuceniem. Twój Perfekcjonista wierzy, że tylko będąc idealną, zasłużysz na miłość, akceptację i bezpieczeństwo. Chce Cię chronić, ale nie wie, że blokuje Twoje naturalne talenty i wpędza Cię w pułapkę ciągłego stresu.",
      de: "Unter diesem strengen Panzer verbirgt sich die Angst vor Bewertung und Ablehnung. Dein Perfektionist glaubt, dass du nur durch Perfektion Liebe, Akzeptanz und Sicherheit verdienst. Er will dich schützen, weiß aber nicht, dass er deine natürlichen Talente blockiert und dich in die Falle ständigen Stresses treibt."
    }
  },
  kontroler: {
    ids: [3, 9, 16, 23],
    name: { pl: "Kontroler", de: "Der Kontrolleur" },
    action: {
      pl: "To ten głos, który nieustannie monitoruje Twoje zachowania, zwłaszcza te impulsywne. Pilnuje, ile jesz słodyczy, czy nie sięgasz po kawę, papierosy, alkohol lub inne stymulanty i używki. Paradoks polega na tym, że kiedy na chwilę odpuścisz i ulegniesz pokusie, Kontroler natychmiast zmienia strategię – zaczyna Cię zalewać ogromną falą krytyki, obwiniania i wywoływać w Tobie poczucie emocjonalnego kaca.",
      de: "Das ist die Stimme, die ständig dein Verhalten überwacht, besonders das impulsive. Sie kontrolliert deinen Zuckerkonsum, Kaffee, Alkohol oder andere Stimulanzien. Das Paradoxe: Sobald du für einen Moment loslässt und der Versuchung nachgibst, ändert der Kontrolleur sofort seine Strategie und überschüttet dich mit einer riesigen Welle von Kritik und Schuldzuweisungen."
    },
    intent: {
      pl: "Kontroler panicznie boi się utraty panowania nad sobą. Jego pierwotną motywacją jest unikanie uszkodzeń i ochrona Ciebie przed autodestrukcją lub odrzuceniem przez innych. Wierzy, że tylko sztywna dyscyplina utrzyma Cię w bezpiecznych ryzach, nie rozumiejąc, że to właśnie jego surowość wywołuje napięcie, które potem próbujesz rozładować za pomocą tych samych nawyków, przed którymi on tak bardzo chce Cię chronić.",
      de: "Der Kontrolleur hat panische Angst vor dem Kontrollverlust. Seine ursprüngliche Motivation ist Schadensvermeidung und der Schutz vor Selbstzerstörung oder Ablehnung. Er glaubt, dass nur strenge Disziplin dich in sicheren Bahnen hält, versteht aber nicht, dass gerade seine Strenge die Spannung erzeugt, die du dann mit denselben Gewohnheiten abzubauen versuchst, vor denen er dich so sehr schützen will."
    }
  },
  zadaniowiec: {
    ids: [4, 14, 22, 26],
    name: { pl: "Zadaniowiec", de: "Der Antreiber" },
    action: {
      pl: "Ten krytyk jest jak bezwzględny menedżer, który uważa, że Twoja wartość zależy wyłącznie od tego, ile zrobisz. Popycha Cię do granic możliwości, zmuszając do morderczej pracy. Aby Cię zmotywować, używa bardzo bolesnych słów: wmawia Ci, że jesteś leniwa, że nic w życiu nie osiągniesz i że wciąż brakuje Ci kompetencji. Często toczy w Twojej głowie wycieńczającą wojnę z Prokrastynatorem – im bardziej Prokrastynator odkłada rzeczy na później, tym głośniej Zadaniowiec krzyczy i wywiera presję.",
      de: "Dieser Kritiker ist wie ein gnadenloser Manager, der glaubt, dass dein Wert ausschließlich davon abhängt, wie viel du leistest. Er treibt dich an deine Grenzen und zwingt dich zu mörderischer Arbeit. Um dich zu motivieren, benutzt er sehr verletzende Worte: Er redet dir ein, du seist faul, würdest nichts erreichen und hättest nicht genug Kompetenz. Oft führt er in deinem Kopf einen zermürbenden Krieg mit dem Aufschieber – je mehr der Aufschieber Dinge aufschiebt, desto lauter schreit der Antreiber und übt Druck aus."
    },
    intent: {
      pl: "Pod maską pracoholizmu kryje się ogromne pragnienie uzyskania aprobaty, sukcesu i akceptacji. Zadaniowiec święcie wierzy, że jeśli na chwilę się zatrzymasz, staniesz się bezwartościowa. Chce Cię chronić przed porażką i poczuciem odrzucenia, ale robi to w sposób, który doprowadza Twoje ciało i umysł do skrajnego wycieńczenia.",
      de: "Unter der Maske des Workaholics verbirgt sich ein riesiges Verlangen nach Anerkennung, Erfolg und Akzeptanz. Der Antreiber glaubt fest daran, dass du wertlos wirst, wenn du auch nur einen Moment innehältst. Er will dich vor dem Scheitern schützen, aber treibt damit deinen Körper und Geist in die extreme Erschöpfung."
    }
  },
  podkopywacz: {
    ids: [5, 10, 17, 28],
    name: { pl: "Podkopywacz", de: "Der Untergräber" },
    action: {
      pl: "Podkopywacz to mistrz czarnowidztwa, który systematycznie podcina Ci skrzydła. Kiedy tylko w Twojej głowie pojawia się impuls, by spróbować czegoś nowego, podjąć wyzwanie czy wyjść do świata ze swoim talentem, on natychmiast aktywuje paraliż i lęk. Szepta Ci do ucha, że jesteś bezwartościowa, że na pewno Ci się nie uda i że nie masz tego, co potrzebne, by odnieść sukces. Sprawia, że poddajesz się, zanim w ogóle zaczniesz.",
      de: "Der Untergräber ist ein Meister des Schwarzsehens, der dir systematisch die Flügel stutzt. Sobald in deinem Kopf der Impuls auftaucht, etwas Neues auszuprobieren, eine Herausforderung anzunehmen oder mit deinem Talent in die Welt hinauszugehen, aktiviert er sofort Lähmung und Angst. Er flüstert dir ein, dass du wertlos bist, dass du sicher scheitern wirst und nicht das Zeug zum Erfolg hast. Er sorgt dafür, dass du aufgibst, bevor du überhaupt beginnst."
    },
    intent: {
      pl: "Choć brzmi okrutnie, jego intencją jest stuprocentowa ochrona przed ryzykiem porażki i zranienia. Podkopywacz uważa, że najbezpieczniej dla Ciebie jest pozostać w cieniu, nie wychylać się i nie próbować, bo wtedy nikt Cię nie oceni i nie odrzuci. Chroni Cię przed potencjalnym bólem, więżąc Cię w klatce bezczynności.",
      de: "Obwohl es grausam klingt, ist seine Absicht der hundertprozentige Schutz vor dem Risiko des Scheiterns und der Verletzung. Der Untergräber glaubt, es sei am sichersten für dich, im Schatten zu bleiben, dich nicht hervorzuwagen und nichts zu riskieren, damit dich niemand bewerten und ablehnen kann. Er schützt dich vor potenziellem Schmerz, indem er dich in einem Käfig der Untätigkeit gefangen hält."
    }
  },
  niszczyciel: {
    ids: [1, 6, 12, 21],
    name: { pl: "Niszczyciel", de: "Der Zerstörer" },
    action: {
      pl: "To najtrudniejszy ze wszystkich krytyków, ponieważ nie ocenia Twoich działań, ale uderza bezpośrednio w samo jądro Twojego poczucia własnej wartości. Generuje bardzo głębokie, przenikliwe poczucie wstydu. Wmawia Ci, że w istocie jesteś niepełna, wadliwa, a w skrajnych momentach potrafi sączyć do podświadomości niszczycielską myśl, że nie powinnaś istnieć lub nie masz do tego prawa. Sprawia, że niesamowicie trudno jest Ci utrzymać jakiekolwiek pozytywne wyobrażenie o sobie.",
      de: "Das ist der schwierigste aller Kritiker, denn er bewertet nicht deine Handlungen, sondern greift direkt den Kern deines Selbstwertgefühls an. Er erzeugt eine tiefe, durchdringende Scham. Er redet dir ein, dass du fehlerhaft und mangelhaft bist, und kann dir in extremen Momenten den zerstörerischen Gedanken einflößen, dass du kein Recht auf Existenz hast. Er macht es unglaublich schwer für dich, irgendein positives Selbstbild aufrechtzuerhalten."
    },
    intent: {
      pl: "Niszczyciel jest głęboko zranioną, zablokowaną w ciele energią, która najczęściej uaktywniła się w odpowiedzi na bardzo wczesne, dziecięce doświadczenia odrzucenia. Paradoksalnie, jego pierwotnym motywem jest obrona przed jeszcze większym atakiem z zewnątrz. Próbuje uczynić Cię „niewidzialną” i zdeptaną we własnych oczach, wierząc, że jeśli sama siebie ukarzesz i wycofasz się z życia, świat nie będzie mógł Cię już bardziej skrzywdzić.",
      de: "Der Zerstörer ist eine tief verwundete, im Körper blockierte Energie, die meist durch sehr frühe Ablehnungserfahrungen in der Kindheit aktiviert wurde. Paradoxerweise ist sein ursprüngliches Motiv die Verteidigung gegen noch größere Angriffe von außen. Er versucht, dich in deinen eigenen Augen 'unsichtbar' und zertreten zu machen, im Glauben, dass die Welt dir nichts mehr antun kann, wenn du dich selbst bestrafst und dich aus dem Leben zurückziehst."
    }
  },
  obwiniacz: {
    ids: [7, 15, 20, 25],
    name: { pl: "Obwiniacz", de: "Der Beschuldiger" },
    action: {
      pl: "Obwiniacz to więzienny strażnik, który nie pozwala Ci zapomnieć o przeszłości. Nieustannie wypomina Ci konkretne decyzje, błędy lub zaniechania, których się dopuściłaś. Najmocniej uderza w struny sumienia, wywołując ogromne poczucie winy wobec innych ludzi, zwłaszcza tych, którzy są dla Ciebie ważni. Sprawia, że nosisz w sobie dokuczliwe, podskórne poczucie, że jesteś „złą osobą”, i nie pozwala Ci sobie wybaczyć.",
      de: "Der Beschuldiger ist ein Gefängniswärter, der dich die Vergangenheit nicht vergessen lässt. Er wirft dir ständig konkrete Entscheidungen, Fehler oder Unterlassungen vor. Er trifft dein Gewissen am härtesten und weckt enorme Schuldgefühle gegenüber anderen Menschen, besonders gegenüber denen, die dir wichtig sind. Er sorgt dafür, dass du das quälende, unterschwellige Gefühl hast, ein 'schlechter Mensch' zu sein, und lässt dich dir selbst nicht verzeihen."
    },
    intent: {
      pl: "Obwiniacz chce uchronić Cię przed ponownym zranieniem kogoś i przed społecznym wykluczeniem. Pilnuje, abyś wyciągnęła lekcję z przeszłości i była „dobrym człowiekiem”, jednak stosuje metodę wiecznej kary. Wierzy, że jeśli będziesz biczować się poczuciem winy, to odkupisz swoje winy i nigdy więcej nie powtórzysz błędu.",
      de: "Der Beschuldiger möchte dich davor bewahren, jemanden erneut zu verletzen und gesellschaftlich ausgeschlossen zu werden. Er achtet darauf, dass du aus der Vergangenheit lernst und ein 'guter Mensch' bist, wendet jedoch die Methode der ewigen Bestrafung an. Er glaubt, dass du deine Sünden sühnst und den Fehler nie wiederholen wirst, wenn du dich selbst mit Schuldgefühlen geißelst."
    }
  },
  ksztaltujacy: {
    ids: [8, 13, 19, 27],
    name: { pl: "Kształtujący", de: "Der Former" },
    action: {
      pl: "Ten głos dba o to, abyś za wszelką cenę wpasowała się w określone społeczne ramy i rodzinne schematy. Jego główna zasada brzmi: „nie wychylaj się”. Kiedy próbujesz żyć w zgodzie ze swoją unikalną energią, ale jest to sprzeczne z zasadami panującymi w Twojej kulturze lub oczekiwaniami rodziny, Kształtujący natychmiast Cię atakuje, wywołując lęk i niepokój. Chwali Cię i daje chwilowy spokój tylko wtedy, gdy potulnie dopasowujesz się do reszty.",
      de: "Diese Stimme sorgt dafür, dass du dich um jeden Preis in bestimmte gesellschaftliche und familiäre Rahmenbedingungen einfügst. Ihr Hauptgrundsatz lautet: 'Fall nicht auf'. Wenn du versuchst, im Einklang mit deiner einzigartigen Energie zu leben, dies aber im Widerspruch zu kulturellen Regeln oder familiären Erwartungen steht, greift er dich sofort an und verursacht Angst und Unruhe. Er lobt dich und gibt dir nur einen Moment Frieden, wenn du dich brav der Masse anpasst."
    },
    intent: {
      pl: "Jego motywacją jest ochrona przed odrzuceniem przez grupę, rodzinę lub społeczność. Kształtujący wie, że w przeszłości (szczególnie w dzieciństwie) dopasowanie się do zasad dawało miłość i przetrwanie. Chce zapewnić Ci przynależność i bezpieczeństwo, ale robi to kosztem Twojej autentyczności, blokując Twoje prawdziwe potencjały i talenty.",
      de: "Seine Motivation ist der Schutz vor Ablehnung durch die Gruppe, Familie oder Gemeinschaft. Der Former weiß, dass die Anpassung an Regeln in der Vergangenheit (insbesondere in der Kindheit) Liebe und Überleben sicherte. Er möchte dir Zugehörigkeit und Sicherheit bieten, tut dies jedoch auf Kosten deiner Authentizität und blockiert deine wahren Potenziale und Talente."
    }
  }
};
