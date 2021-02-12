# covid19-server
# covid19-server
Ogni USCA programma i tamponi da fare giorno per giorno, e invia una squadra 
a farli. Dopodichè invia i tamponi al laboratorio. Quando il laboratorio invia il referto,
compito dell'usca è inoltrarlo via mail al paziente.


### TODO:

- calendario dove inserire i tamponi da fare giorno per giorno, che restituisce i tamponi da fare nel giorno attuale

- db dei pazienti, dove per ogni paziente abbiamo anagrafiche, email, indirizzo, stato paziente (positivo, negativo), tamponi fatti/da fare

- quando il paziente fa un tampone, il tampone da fare va segnato come fatto.
- quando arriva il referto:
	- positivo: programmare tampone per 10 giorni successivi
	- negativo: aggiornare stato paziente

## PATIENT:

    {
        "patient_id": number,
        "name": string,
	"fiscal_code": string,
        "dob": timestamp || string,
        "address": "string"
        "email":string,
	"phone":number,
	"hasCovid":boolean
    }

## SWAB:

    {
        "swamp_id": number,
        team_id": number,
        "date": timestamp,
        "type": "rap" || "sier" || "mol",
        "patient_id": number,
        "done": boolean,
	      "positive_res":boolean
    }


# ROUTES :

- POST - /patients -inserisce nuovo paziente (verifica che non ci sia già)
- GET - /patients/:id - dati del paziente e relativi tamponi
- PUT -/patients/:id - aggiorna i dati del paziente
- DELETE -/patients/:id

- GET - /swabs/?fromdate?todate - restituisce tutti i tamponi dentro quelle date (default da oggi fino a settimana prossima) 
- POST - /swabs - inserisce nuovo tampone (verifica che non ci sia già)
- GET - /swabs/:id - dati del tampone
- GET - /swabs/?patient?date? - dati dei tamponi con query
- PUT -/swabs/:id - aggiorna tampone DA USARE SOLO PER INDICARE L'ESITO / SE è FATTO O NO
- DELETE -/swabs/:id
