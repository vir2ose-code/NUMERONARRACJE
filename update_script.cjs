const fs = require('fs');
let c = fs.readFileSync('body_quiz_data.js', 'utf8');

const pl1 = /"ctaText": "Jesli chcesz wykorzystac te czysta energie, by jeszcze lepiej zrozumiec mape swojej duszy – zapraszam Cie na indywidualna konsultacje. Wspólna praca przyniesie niesamowite owoce."/g;
c = c.replace(pl1, '"ctaText": "Skorzystaj z tej harmonijnej energii i odkryj pelna mape swojego urodzeniowego potencjalu."');

const pl2 = /"ctaText": "Zapraszam Cie na indywidualna konsultacje numerologiczna i energetyczna. Sprawdzimy, jakie stare schematy i zblokowane w ciele emocje kaza Ci wiecznie walczyc ze swiatem."/g;
c = c.replace(pl2, '"ctaText": "Odkryj swój pelny profil numerologiczny, aby uwolnic zblokowane emocje i przestac walczyc ze swiatem."');

const pl3 = /"ctaText": "Nieustanny bieg i ucieczka przed lekiem niszcza Twoja wspaniala energie. Zapraszam Cie na indywidualna konsultacje numerologiczna i energetyczna. Pokaze Ci, jak wylaczyc ten wewnetrzny kolowrotek presji i odzyskac zaufanie do wlasnej sciezki zycia."/g;
c = c.replace(pl3, '"ctaText": "Zrozumienie wlasnej matrycy numerologicznej pomoze Ci zatrzymac bieg presji i odzyskac wewnetrzny spokój."');

const pl4 = /"ctaText": "Noszenie tego ciezaru w pojedynke blokuje Twoje talenty numerologiczne. Zapraszam Cie na indywidualna konsultacje. W atmosferze pelnego zaufania rozkodujemy pancerz obronny i zamienimy chlód w bezpieczna przestrzen do zycia Twoim pelnym potencjalem."/g;
c = c.replace(pl4, '"ctaText": "Poznanie pelnego potencjalu urodzeniowego pozwoli Ci zdjac pancerz obronny i bezpiecznie otwierac sie na swiat."');

const pl5 = /"ctaText": "Kiedy zapasc i odciecie trwaja zbyt dlugo, tracisz kontakt ze swoja osobista energia urodzenia. Kiedy poczujesz, ze masz na to przestrzen, zapraszam Cie na indywidualna konsultacje numerologiczna i energetyczna. Delikatnie przyjrzymy sie Twojej mapie urodzenia, aby z miloscia obudzic Twój uspiony potencjal."/g;
c = c.replace(pl5, '"ctaText": "Gdy poczujesz na to przestrzen, odkryj swoja matryce urodzenia, aby lagodnie odbudowac kontakt z wlasna energia."');

const de1 = /"ctaText": "Wenn Sie diese reine Energie nutzen m.chten, um die Landkarte Ihrer Seele noch besser zu verstehen, lade ich Sie zu einer individuellen Beratung ein. Die Zusammenarbeit wird erstaunliche Ergebnisse bringen."/g;
c = c.replace(de1, '"ctaText": "Nutze diese harmonische Energie und entdecke die vollständige Karte deines Geburtspotenzials."');

const de2 = /"ctaText": "Ich lade Sie zu einer individuellen Numerologie- und Energieberatung ein. Wir werden pr.fen, welche alten Muster und Emotionen, die in Ihrem K.rper blockiert sind, Sie dazu bringen, f.r immer gegen die Welt anzuk.mpfen."/g;
c = c.replace(de2, '"ctaText": "Entdecke dein vollständiges numerologisches Profil, um blockierte Emotionen zu lösen und nicht mehr gegen die Welt anzukämpfen."');

const de3 = /"ctaText": "St.ndiges Laufen und Davonlaufen vor der Angst zerst.rt deine wunderbare Energie. Ich lade Sie zu einer individuellen Numerologie- und Energieberatung ein. Ich zeige Ihnen, wie Sie dieses innere Druckrad ausschalten und wieder Vertrauen in Ihren eigenen Lebensweg gewinnen."/g;
c = c.replace(de3, '"ctaText": "Das Verständnis deiner numerologischen Matrix wird dir helfen, den Druck zu stoppen und den inneren Frieden zurückzugewinnen."');

const de4 = /"ctaText": "Allein das Tragen dieser Last blockiert Ihre numerologischen Talente. Ich lade Sie zu einem individuellen Beratungsgespr.ch ein. In einer Atmosph.re vollkommenen Vertrauens entschl.sseln wir die Abwehrpanzerung und verwandeln die K.lte in einen sicheren Raum, in dem Sie Ihr volles Potenzial entfalten k.nnen."/g;
c = c.replace(de4, '"ctaText": "Das Erkennen deines vollen Geburtspotenzials wird es dir ermöglichen, die Abwehrpanzerung abzulegen und dich sicher der Welt zu öffnen."');

const de5 = /"ctaText": "Wenn der Zusammenbruch und die Trennung zu lange andauern, verlieren Sie den Kontakt zu Ihrer pers.nlichen Geburtsenergie. Wenn Sie das Gef.hl haben, dass Sie daf.r Raum haben, lade ich Sie zu einer individuellen Numerologie- und Energieberatung ein. Wir schauen uns Ihr Geburtshoroskop behutsam an, um Ihr schlummerndes Potenzial liebevoll zu erwecken."/g;
c = c.replace(de5, '"ctaText": "Wenn du dich bereit fühlst, entdecke deine Geburtsmatrix, um sanft den Kontakt zu deiner eigenen Energie wiederherzustellen."');

fs.writeFileSync('body_quiz_data.js', c);
