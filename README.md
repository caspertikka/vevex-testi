# Vevexin ohjelmistorekryn tekninen testi 2025

Tervetuloa suorittamaan Vevexin ohjelmistorekryn teknistä testiä. Kloonaa tämä repo ja jaa lopuksi valmis projekti Githubissa [@caspertikka](https://github.com/caspertikka) tai jaa meille sähköpostitse.

## Pohjustus

Olemme luoneet feikkitietokannan ja sille clientin: `@/lib/db.ts`, josta saat tehtävässä käytettävät tiedot. Pyydä tietoja feikkitietokannasta vain serverin puolelta, ikäänkuin se käyttäisi salassapidettävää api-avainta. Älä muokkaa tätä tiedostoa, käytä sitä sellaisenaan. Testi suoritetaan NextJS -frameworkin puitteissa, apuna saa käyttää mitä tahansa yhteensopivia kirjastoja.

## Tehtävä

Tehtävänä on rakentaa taulukko, mistä näkee meille tulleet reklamaatiot (`Reclamation`). Rakenna taulukko verkkosivun etusivulle.

### Taulukon sarakkeet

Lisää taulukkoon sarakkeet:

1. Reklamoidun huollon (`Service`) osoite
    - Sarakkeen otsikko: Osoite
2. Reklamoidun huollon (`Service`) asiakkaan (`Customer`) nimi
    - Sarakkeen otsikko: Asiakas
3. Reklamoidun huollon (`Service`) **aikaisimman** asennuksen (`Installation`) päivämäärä ja kellonaika
    - Sarakkeen otsikko: Asennuksen aloitusaika
4. Reklamoidun huollon (`Service`) asennusten (`Installation`) suorittaneiden työntekijöiden (`Employee`) nimet
    - Sarakkeen otsikko: Asentajat
5. Reklamoidun huollon (`Service`) asiakasvastaavan (`Employee`) nimi
    - Sarakkeen otsikko: Asiakasvastaava
6. Reklamaation (`Reclamation`) luontipäivämäärä
    - Sarakkeen otsikko: Luotu

### Taulukon toiminnallisuus

- Järjestele reklamaatiot reklamaation luontipäivämäärän mukaan (`Reclamation.createdAt`), tuoreimmasta vanhimpaan.
- Lisää tapa lisätä uusia sekä poistaa reklamaatioita taulukkoon (client side/pelkkä front-end toiminnallisuus riittää).
