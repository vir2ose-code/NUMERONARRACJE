const fs = require('fs');
let lines = fs.readFileSync('body_quiz_data.js', 'utf8').split(/\r?\n/);

lines[190] = '        "ctaText": "Skorzystaj z tej harmonijnej energii i odkryj pelna mape swojego urodzeniowego potencjalu.",';
lines[200] = '        "ctaText": "Odkryj swój pelny profil numerologiczny, aby uwolnic zblokowane emocje i przestac walczyc ze swiatem.",';
lines[210] = '        "ctaText": "Zrozumienie wlasnej matrycy numerologicznej pomoze Ci zatrzymac bieg presji i odzyskac wewnetrzny spokój.",';
lines[220] = '        "ctaText": "Poznanie pelnego potencjalu urodzeniowego pozwoli Ci zdjac pancerz obronny i bezpiecznie otwierac sie na swiat.",';
lines[230] = '        "ctaText": "Gdy poczujesz na to przestrzen, odkryj swoja matryce urodzenia, aby lagodnie odbudowac kontakt z wlasna energia.",';

lines[422] = '        "ctaText": "Nutze diese harmonische Energie und entdecke die vollständige Karte deines Geburtspotenzials.",';
lines[432] = '        "ctaText": "Entdecke dein vollständiges numerologisches Profil, um blockierte Emotionen zu lösen und nicht mehr gegen die Welt anzukämpfen.",';
lines[442] = '        "ctaText": "Das Verständnis deiner numerologischen Matrix wird dir helfen, den Druck zu stoppen und den inneren Frieden zurückzugewinnen.",';
lines[452] = '        "ctaText": "Das Erkennen deines vollen Geburtspotenzials wird es dir ermöglichen, die Abwehrpanzerung abzulegen und dich sicher der Welt zu öffnen.",';
lines[462] = '        "ctaText": "Wenn du dich bereit fühlst, entdecke deine Geburtsmatrix, um sanft den Kontakt zu deiner eigenen Energie wiederherzustellen.",';

fs.writeFileSync('body_quiz_data.js', lines.join('\n'));
