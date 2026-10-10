# Brasschaats Mandoline-Orkest: website

Gewone HTML/CSS, geen build-stap. Open `index.html` in een browser of draai lokaal `python3 -m http.server`.

## Structuur
- `index.html`: startpagina (bevat het menu; kopieer het `<header>`-blok naar elke nieuwe pagina)
- `over-ons.html`: 'Wie zijn wij?'
- `contact.html`: contactgegevens en formulier (`js/contact.js`)
- `css/style.css`: kleuren en lettertype staan bovenaan in `:root`
- `js/nav.js`: hamburgermenu en uitklapmenu's
- `images/logo.png`, `images/banner.jpg`: voorlopig uitgesneden uit een schermafdruk. Vervang door de originelen (zelfde bestandsnaam), banner bij voorkeur 1600 px breed.

## Nog in te vullen
- Facebook- en Spotify-adressen in de bovenbalk en op `contact.html` (`href="#"`)
- Web3Forms-sleutel in `contact.html`
- Menu-links: `dirigente.html`, `geschiedenis.html`, `contact.html`, `cds.html`, `boekingen.html`, `nieuws.html`, `fotos.html`, `links.html`. Het submenu onder 'Meer pagina's' is nog voorlopig.
- Jaartal in de voet (`© 2026`)

## Contactformulier (Web3Forms)
1. Maak op web3forms.com een gratis sleutel aan met het e-mailadres waar de berichten moeten aankomen (liefst een gedeeld adres van het orkest).
2. Zet die sleutel in `contact.html` bij `access_key` (de sleutel is bedoeld om openbaar in de pagina te staan).
3. Verstuur na elke wijziging aan het formulier een testbericht en kijk ook in de spam-map.

## Hosting (Cloudflare Pages)
Repo koppelen, geen build-commando, output-map = hoofdmap.
