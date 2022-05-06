# PG6301 eksamen <tittel på løsningen>
https://github.com/kristiania-pg6301-2022/pgr6301-exam-JanGolabek.git

[Heroku](https://article-app-exam-pg6301.herokuapp.com/)
[Test rapport](https://github.com/kristiania-pg6301-2022/pgr6301-exam-JanGolabek/commit/9363a483fdace93d2daee4f83da5bd9a6b6c7a5d#commitcomment-72980642)

## Tips

* Bruk versjoner av alle dependencies som vi brukte på forelesningene. Det skjer hele tiden endringer i JavaScript-land og noen ganger vil siste versjon oppføre seg forskjellig - ikke kast bort verdifull eksamenstid. Du kan kopiere package.json fra innlevering eller en øving
* Spesielt: React 18 kom i løpet av semesteret. Alt vi har vist er på React 17. Kjør på React 17 nå med mindre du har brukt en del tid på versjon 18 den siste måneden. Det er vesentlige problemer!
* Start med å løse det kritiske: Deployment til Heroku
* Ikke bli sittende med ting du ikke får til mens det er enklere ting du kunne ha gjort. Spesielt tester har overraskende mye vrient med seg. Legg det til siden og løs andre ting om du har problemer
* Les de funksjonelle kravene grundig og test at løsningen din oppfyller dem
* Les læringsmålene beskrevet i eksamensteksten grundig og sjekk at løsningen din demonstrere at du behersker disse

Dette er versjonene vi brukte under forelesningene om som er validert som ok:

```
"jest": "^27.5.1",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-router-dom": "^6.2.2"
```


## Egenutfylling av funksjonelle krav

* [x] *Brukere kan logge seg inn. Det anbefales at du implementerer at brukerne logger seg inn med Google, men andre
mekanismer er også akseptabelt*
  * *Alt ok*
* [x] *Anonyme brukere skal se nyhetsaker når de kommer til nettsiden. Legg inn noen nyhetssaker for å demonstrere
  * *Alle artiklene er listet i articles*
* [x] *Når en ny sak publiseres, skal alle brukerne få se den nye saken umiddelbart. Bruk websockets for å sende oppdateringer*
  * *Alle artiklene er listet i articles. Websockets fikk jeg ikke tid til å implementere.*
* [x] * Brukere skal forbli logget inn når de refresher websiden*
  * *alt ok*
 * [x] * Redaksjonelle brukere kan publisere nye nyhetsartikler*
  * *Ja og nei. Alle brukere kan publisere og artiklene blir lagret i databasen*
 * [x] * Nyhetsartikkel skal inneholde en kategori valgt fra en nedtrekksliste ( <select> ), tittel ( <input> ) og tekst ( <textarea> )
  * *De 3 kategoriene er der, i tillegg til author. Fikk dessverre ikke tid til å lage til nedtrekksliste etc. og gjøre den "skikkelig"*
 * [x] * Alle feil fra serves skal presenteres til bruker på en pen måte, med mulighet for brukeren til å prøve igjen
  * *Ikke alle men de fleste. Design og UX-messig er det ekstremt mye som mangler men jeg valgte å gå for det viktigste mtp tidsbruk og kunnskap*


## Egenutfylling av tekniske krav

* [x] Oppsett av package.json, parcel, express, prettier
  * *mangler prettier*
* [x] React Router
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [x] Express app
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [x] Kommunikasjon mellom frontend (React) og backend (Express)
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [x] Deployment til Heroku
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [x] Bruk av MongoDB
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [x] OpenID Connect
  * **
* [ ] Web Sockets
  * **
* [x] Jest med dokumentert testdekning
  * *De siste to commitsene lyste ikke grønt. Fikk heller ingen feilmelding. Det virer som om minuttene i Classroom er blitt brukt opp men er ikke sikker. Alle testene kjører, appen fungerer både lokalt og på heroku*
 
test
