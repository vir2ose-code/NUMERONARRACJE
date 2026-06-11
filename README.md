# Numeronarracje

Numeronarracje to progresywna aplikacja internetowa (PWA) dedykowana numerologii, pracy z emocjami oraz budowaniu wspierającej społeczności. Aplikacja oferuje spersonalizowane analizy numerologiczne, codzienne prognozy wibracyjne, bibliotekę nagrań audio oraz interaktywny quiz psychologiczny.

Projekt został zoptymalizowany pod kątem urządzeń mobilnych i oferuje pełne wsparcie dla działania w trybie offline (PWA) oraz dynamiczną lokalizację interfejsu w dwóch językach: polskim i niemieckim.

## Główne Funkcjonalności

### 1. Dzisiejsza Prognoza
* Automatyczne wyliczanie wibracji dnia.
* Rekomendacje działań (Co warto robić) oraz ostrzeżenia (Unikaj dziś).
* Zintegrowany tracker energii oraz emocji wspierający codzienną samoświadomość.

### 2. Kalkulator Drogi Życia
* Analiza matrycy urodzeniowej na podstawie wprowadzonej daty urodzenia.
* Wyliczanie trzech głównych archetypów: Drogi Życia, Roku Osobistego oraz Liczby Przeznaczenia.

### 3. Audio Biblioteka
* Panel odtwarzania spersonalizowanych nagrań dla wibracji dnia.
* Hybrydowy mechanizm miksowania dźwięków, wybierający losowo nagrania z Container A, Container B, Container C lub Container CC w celu urozmaicenia treści.
* Pełne wsparcie dla odtwarzania offline dzięki buforowaniu plików MP3 w Service Workerze.

### 4. Interaktywny Quiz
* Test pozwalający określić wibrację dominującą w obecnym okresie życia.
* Prezentacja profilu osobowości, darów, wyzwań oraz misji życiowej w formie wygodnych zakładkowych kart.
* Wyliczanie i wizualizacja czterech filarów numerologicznych (Liczba Urodzenia, Dzień Urodzenia, Miesiąc Urodzenia, Klucz Wcielenia) na podstawie wpisanej daty.

### 5. Strefa Humoru i Kronika Humoru Użytkowników
* Losowy generator żartów poprawiających nastrój.
* Kronika Humoru pozwalająca na publikowanie własnych anegdot.
* Hybrydowa logika zapisu: dane są automatycznie synchronizowane z globalną bazą chmurową Vercel KV lub zapisywane lokalnie (localStorage) w przypadku braku konfiguracji serwerowej bądź utraty połączenia internetowego.

### 6. Bezpieczeństwo i Prywatność
* Dedykowana Polityka Prywatności oraz Regulamin w pełni przetłumaczone na języki polski i niemiecki.
* Wyróżnione zastrzeżenia prawne dotyczące wyłącznie rozrywkowego i motywacyjnego charakteru aplikacji.

## Architektura i Technologie

* Frontend: HTML5, CSS3 (szklany design premium, gradienty, niestandardowa typografia Jost i Cinzel), Vanilla JavaScript (ES6).
* PWA: Manifest aplikacji (manifest.json) oraz Service Worker (sw.js) realizujący strategię pamięci podręcznej Cache-first dla kluczowych zasobów.
* API Backend: Serverless API w technologii Vercel Serverless Functions z integracją Vercel KV (Redis) dla globalnego przechowywania kroniki humorów.
* Lokalizacja: Biblioteka i18n.js przechowująca klucze językowe dla języka polskiego (PL) i niemieckiego (DE) z zapisem preferencji w pamięci localStorage.

## Instalacja i Uruchomienie Lokalne

1. Sklonuj repozytorium:
   ```bash
   git clone <URL_REPOZYTORIUM>
   cd "NUMEROLOGISCHE SMARTPHONE APP"
   ```

2. Zainstaluj zależności niezbędne do działania API lokalnie:
   ```bash
   npm install
   ```

3. Uruchom serwer lokalny. Możesz użyć dowolnego serwera statycznego, np. Live Server w VS Code, lub narzędzi npm:
   ```bash
   npx serve .
   ```

## Wdrożenie na Platformie Vercel

Aplikacja jest przystosowana do natychmiastowego wdrożenia na platformie Vercel.

1. Połącz swoje repozytorium GitHub z panelem Vercel.
2. Dodaj integrację bazy danych Vercel KV (KV Database) do swojego projektu w zakładce Storage.
3. System automatycznie wstrzyknie wymagane zmienne środowiskowe (KV_REST_API_URL oraz KV_REST_API_TOKEN), a endpoint API (/api/jokes.js) przełączy się z trybu offline/localStorage na globalną chmurę Redis.
