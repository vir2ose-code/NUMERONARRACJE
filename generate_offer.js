const fs = require('fs');
let html = fs.readFileSync('offer.html', 'utf8');

html = html.replace(/<title>.*?<\/title>/, '<title>Numeronarracje - Oferta</title>');
html = html.replace(/href="#page-about"/g, 'href="#page-offer"');

const newMainContent = `
    <main class="page-section" id="page-offer" style="display: block;">
        <section class="content-section" style="margin-top: 60px;">
            <div class="section-subtitle" style="text-align: center;">WYBIERZ WARIANT WSPARCIA</div>
            <h2 class="section-title" style="text-align: center; margin-bottom: 40px;">OFERTA-ANALIZA NUMEROLOGICZNA</h2>
            
            <p style="text-align: center; margin-bottom: 40px; color: var(--text-light); max-width: 600px; margin-inline: auto;">
                Kazda podróz zaczyna sie od pierwszego kroku i wzajemnego zaufania. Przygotowalam dla Ciebie trzy mozliwosci spotkania, abys mógl spokojnie zdecydowac, która forma wgladu w Twoja energie jest Ci teraz najbardziej potrzebna.
            </p>

            <div class="offer-cards-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 60px;">
                
                <!-- Wariant 1 -->
                <div class="offer-card" style="background: var(--bg-card); border: 1px solid var(--gold-dark); border-radius: 12px; padding: 24px; display: flex; flex-direction: column;">
                    <h3 style="color: var(--gold-light); margin-bottom: 10px; font-size: 1.2rem;">Bezplatna konsultacja wstepna</h3>
                    <div style="font-size: 1.5rem; color: var(--text-light); margin-bottom: 5px;">0 € <span style="font-size: 0.9rem; color: var(--text-dim);">/ 15 minut</span></div>
                    <p style="color: var(--text-dim); font-size: 0.9rem; margin-bottom: 20px;">Krótkie, cieple spotkanie zapoznawcze online, podczas którego poznamy sie blizej i porozmawiamy o Twoich potrzebach.</p>
                    
                    <h4 style="color: var(--gold-dark); font-size: 0.85rem; margin-bottom: 5px; text-transform: uppercase;">Dla kogo:</h4>
                    <p style="font-size: 0.85rem; margin-bottom: 15px; color: var(--text-light);">Dla osób, które chca poczuc moja energie, zadac pierwsze pytania i upewnic sie, jak praca z mapa numerologiczna moze im pomóc. Dla kazdej osoby, która rozwaza prace ze swoja mapa i chce poznac pelna oferte.</p>
                    
                    <h4 style="color: var(--gold-dark); font-size: 0.85rem; margin-bottom: 5px; text-transform: uppercase;">Co otrzymujesz:</h4>
                    <p style="font-size: 0.85rem; margin-bottom: 20px; color: var(--text-light);">Bezpieczna przestrzen na krótka rozmowe, w trakcie której podpowiem Ci, który wariant analizy bedzie dla Ciebie najbardziej wartosciowy.</p>
                    
                    <a href="mailto:numeronarracje@gmail.com" class="btn-primary" style="margin-top: auto; text-align: center; text-decoration: none;">Umów sie</a>
                </div>

                <!-- Wariant 2 -->
                <div class="offer-card" style="background: var(--bg-card); border: 1px solid var(--gold-dark); border-radius: 12px; padding: 24px; display: flex; flex-direction: column;">
                    <h3 style="color: var(--gold-light); margin-bottom: 10px; font-size: 1.2rem;">Indywidualna Analiza Mapy</h3>
                    <div style="font-size: 1.5rem; color: var(--text-light); margin-bottom: 5px;">80 € <span style="font-size: 0.9rem; color: var(--text-dim);">/ 60 minut</span></div>
                    <p style="color: var(--text-dim); font-size: 0.9rem; margin-bottom: 20px;">Gleboka rozmowa oparta na Twojej dacie urodzenia, stanowiaca przejrzyste naswietlenie Twojego czystego kodu i potencjalu.</p>
                    
                    <h4 style="color: var(--gold-dark); font-size: 0.85rem; margin-bottom: 5px; text-transform: uppercase;">Dla kogo:</h4>
                    <p style="font-size: 0.85rem; margin-bottom: 15px; color: var(--text-light);">Dla osób szukajacych jasnosci, zrozumienia wlasnej Liczby Urodzenia, nazwania wrodzonych talentów oraz dostrzezenia schematów i blokad nabytych w ciagu zycia.</p>
                    
                    <h4 style="color: var(--gold-dark); font-size: 0.85rem; margin-bottom: 5px; text-transform: uppercase;">Co otrzymujesz:</h4>
                    <ul style="font-size: 0.85rem; color: var(--text-light); margin-left: 20px; margin-bottom: 20px; padding-left: 0;">
                        <li style="margin-bottom: 6px;">60 minut indywidualnego spotkania online pelnego uwaznosci i empatii.</li>
                        <li style="margin-bottom: 6px;">Odkrycie i nazwanie Twoich pierwotnych darów oraz mocnych stron.</li>
                        <li>Uswiadomienie sobie zródel emocji i przekonan zapisanych w ciele, abys mogla samodzielnie zaczac proces przemiany.</li>
                    </ul>
                    
                    <a href="mailto:numeronarracje@gmail.com" class="btn-primary" style="margin-top: auto; text-align: center; text-decoration: none;">Umów sie</a>
                </div>

                <!-- Wariant 3 -->
                <div class="offer-card" style="background: var(--bg-card); border: 2px solid var(--gold-light); border-radius: 12px; padding: 24px; display: flex; flex-direction: column; position: relative;">
                    <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--gold-light); color: var(--bg-dark); font-size: 0.75rem; font-weight: bold; padding: 4px 12px; border-radius: 20px; text-transform: uppercase; white-space: nowrap;">Kompleksowy proces</div>
                    <h3 style="color: var(--gold-light); margin-bottom: 10px; font-size: 1.2rem; margin-top: 10px;">Pelny Portret Numerologiczny</h3>
                    <div style="font-size: 1.5rem; color: var(--text-light); margin-bottom: 5px;">240 € <span style="font-size: 0.9rem; color: var(--text-dim);">/ z harmonizacja + PDF</span></div>
                    <p style="color: var(--text-dim); font-size: 0.9rem; margin-bottom: 20px;">Gleboki proces transformacyjny, w którym dajemy sobie czas na pelne przejscie przez wszystkie obszary Twojego zycia.</p>
                    
                    <h4 style="color: var(--gold-dark); font-size: 0.85rem; margin-bottom: 5px; text-transform: uppercase;">Dla kogo:</h4>
                    <p style="font-size: 0.85rem; margin-bottom: 15px; color: var(--text-light);">Dla osób gotowych na pelny wglad, które pragna dostroic swoja energie poprzez celowy dobór imion aktywujacych oraz harmonizacje podpisu.</p>
                    
                    <h4 style="color: var(--gold-dark); font-size: 0.85rem; margin-bottom: 5px; text-transform: uppercase;">Co otrzymujesz:</h4>
                    <ul style="font-size: 0.85rem; color: var(--text-light); margin-left: 20px; margin-bottom: 20px; padding-left: 0;">
                        <li style="margin-bottom: 6px;"><strong>Czas bez pospiechu:</strong> Dajemy sobie tyle przestrzeni, ile dokladnie potrzebujesz.</li>
                        <li style="margin-bottom: 6px;"><strong>Harmonizacja podpisu:</strong> Precyzyjne wyliczenie i ulozenie wspierajacego podpisu.</li>
                        <li style="margin-bottom: 6px;"><strong>Dobór imion aktywujacych:</strong> Uzupelniajace brakujace energie.</li>
                        <li><strong>Osobisty plik PDF:</strong> Pisemne, kompletne opracowanie Twojej mapy.</li>
                    </ul>
                    
                    <a href="mailto:numeronarracje@gmail.com" class="btn-primary" style="margin-top: auto; text-align: center; text-decoration: none;">Umów sie</a>
                </div>
            </div>

            <h3 style="color: var(--gold-light); text-align: center; margin-bottom: 20px; font-size: 1.2rem;">Jak wyglada udzial krok po kroku?</h3>
            <div style="max-width: 600px; margin: 0 auto; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 20px; border: 1px solid rgba(255,255,255,0.1);">
                <ol style="color: var(--text-light); margin-left: 20px; padding-left: 0;">
                    <li style="margin-bottom: 12px;"><strong>Zarezerwuj 15-minutowa bezplatna rozmowe:</strong> Wybierz dogodny termin w kalendarzu, abysmy mogly sie poznac.</li>
                    <li style="margin-bottom: 12px;"><strong>Krótkie spotkanie online:</strong> Porozmawiamy o Twoich potrzebach i ustalimy zakres dalszej pracy.</li>
                    <li style="margin-bottom: 12px;"><strong>Rezerwacja pelnej analizy:</strong> Otrzymasz dostep do wyboru platnego wariantu i podasz dane niezbedne do przeliczenia Twojej mapy.</li>
                    <li><strong>Wlasciwe spotkanie i wglad:</strong> Laczymy sie na pelna analize, podczas której naswietle Twoje wrodzone potencjaly i dam Ci klucz do glebszego samopoznania.</li>
                </ol>
                <p style="margin-top: 20px; font-size: 0.9rem; color: var(--text-dim); font-style: italic; text-align: center;">Pozwól sobie na spotkanie ze swoja prawdziwa natura, zyskaj jasnosc i zacznij swiadomie korzystac ze swoich wrodzonych talentów. Zapraszam Cie serdecznie do tej pieknej podrózy!</p>
            </div>
            <br>
        </section>
    </main>
`;

html = html.replace(/<main[^>]*id="page-about"[\s\S]*?<\/main>/i, newMainContent);
fs.writeFileSync('offer.html', html, 'utf8');
