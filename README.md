# FrontEnd

Projekt został wygenerowany przy użyciu [Angular CLI](https://github.com/angular/angular-cli) w wersji 15.2.1.

## Serwer deweloperski

`npm start` uruchamia serwer pod adresem `http://localhost:4200/`. Aplikacja automatycznie zostanie przeładowana przy zmianie plików źródłowych.

## Generowanie kodu

`npm ng g c component-name` służy do wygenerowania nowego komponentu. Aby wygenerować wygenerować inny schemat wystarczy użyć `npm ng g d|p|s|c|g|i|e|m`.
Litery kolejno odpowiadaja: directive, pipe, service, class, guard, interface, enum, module.

<!-- ## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. -->

## Unit testy

`npm test` uruchamia unit testy via [Karma](https://karma-runner.github.io).

<!-- ## Running end-to-end tests

`npm ng e2e` uruchamia testy end-to-end (e2e). -->

## Schemat plików

**SRC** to folder gromadzący wszystkie pliki w aplikacji.

1. **app**

   1. **common**

      - **components**

        + _.html_ - plik html.
        + _.scss_ - style, pisane w sass'ie.
        + _.spec.ts_ - plik zawierający testy.
        + _.ts_ - główny plik, wiąże wszystkie powyższe w jeden, zawiera metody i inne funkcjonalności zawarte w komponencie.

      - **pipes** - tu znajdują się wszystkie pipe'y służące do np. przemapowywania wartości.

   2. **guards** - bramki autoryzacyjne, kontrolują dostęp do różnych części aplikacji.

   3. **models** - zawerają modele danych odbieranych i wysyłanych do API. Zawiera również enumy aby utrzymać spójność danych.

   4. **services**

      - _.service.ts_ - zawiera metody, dzięki którym dane są odbierane i wysyłane do API.
      - _.service.spec.ts_ - plik zawiera testy.

   5. **utils**

      - _common-functions_
      - _show-details_ - fabryka, która pokazuje szczegóły obiektów.

   6. **validators** - zawiera funkcje, które kontroluja przepływ wprowadzanych danych.

   7. **views** - są to gotowe szablony stron, z których korzysta użytkownik.

   8. **app-routing-module** - jest to plik, który definiuje routing'u.

2. **assets**

    - fonts - czcionki

3. **environments** - zawiera zmienne środowiskowe

4. **colors** - paleta kolorów używana w aplikacji

5. **styles** - globalne style


## Autor
Marek Porębski