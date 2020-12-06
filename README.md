# DEV CHALLENGE

### Ambienti

Sono stati creati due applicativi

- frontend che riceve le api e mostra a schermo i risultati
- backend che elabora i dati e serve le api

### Installazione

- Entrare all'interno della folder 'backend'
- lanciare il comando 'npm-install' per installare le dipendenze
- lanciare il comando 'npm start' per lanciare l'applicativo, sarà disponibile nella porta :3030

- Entrare all'interno della folder 'frontend'
- lanciare il comando 'npm-install' per installare le dipendenze
- lanciare il comando 'npm start' per lanciare l'applicativo, sarà disponibile nella porta :3000

### CodeConduct

L'obiettivo è quello di chiamare delle api servite da un server nodejs verso un applicativo scritto in react tramite lo script 'create-react-app'

Non appena entrambi gli applicativi saranno lanciati, collegarsi al 'localhost:3000'
Atterrati sulla pagina, partirà una prima GET per reperire la lista dei customer, in modo tale da creare dei radio button dinamici, questi ultimi lanceranno una seconda GET per filtrare i dati in base al customer selezionato.
I dati torneranno al frontend già convertiti nella valuta EUR
