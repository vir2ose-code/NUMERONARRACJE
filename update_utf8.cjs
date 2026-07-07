const fs = require('fs');
let lines = fs.readFileSync('body_quiz_data.js', 'utf8').split(/\r?\n/);

lines[190] = '        "ctaText": "Skorzystaj z tej harmonijnej energii i odkryj pełną mapę swojego urodzeniowego potencjału.",';
lines[200] = '        "ctaText": "Odkryj swój pełny profil numerologiczny, aby uwolnić zblokowane emocje i przestać walczyć ze światem.",';
lines[210] = '        "ctaText": "Zrozumienie własnej matrycy numerologicznej pomoże Ci zatrzymać bieg presji i odzyskać wewnętrzny spokój.",';
lines[220] = '        "ctaText": "Poznanie pełnego potencjału urodzeniowego pozwoli Ci zdjąć pancerz obronny i bezpiecznie otwierać się na świat.",';
lines[230] = '        "ctaText": "Gdy poczujesz na to przestrzeń, odkryj swoją matrycę urodzenia, aby łagodnie odbudować kontakt z własną energią.",';

lines[422] = '        "ctaText": "Nutze diese harmonische Energie und entdecke die vollständige Karte deines Geburtspotenzials.",';
lines[432] = '        "ctaText": "Entdecke dein vollständiges numerologisches Profil, um blockierte Emotionen zu lösen und nicht mehr gegen die Welt anzukämpfen.",';
lines[442] = '        "ctaText": "Das Verständnis deiner numerologischen Matrix wird dir helfen, den Druck zu stoppen und den inneren Frieden zurückzugewinnen.",';
lines[452] = '        "ctaText": "Das Erkennen deines vollen Geburtspotenzials wird es dir ermöglichen, die Abwehrpanzerung abzulegen und dich sicher der Welt zu öffnen.",';
lines[462] = '        "ctaText": "Wenn du dich bereit fühlst, entdecke deine Geburtsmatrix, um sanft den Kontakt zu deiner eigenen Energie wiederherzustellen.",';

fs.writeFileSync('body_quiz_data.js', lines.join('\n'));
