/* Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età. */

// 1) Dichiariamo un ARRAY e gli diamo dei valori tramite oggetti
let persone = [
    {
        nome: 'Andrea',
        cognome: 'Offredi',
        eta: 26,
    },

    {
        nome: 'Fabio',
        cognome: 'Locatelli',
        eta: 24,
    },

    {
        nome: 'Jessica',
        cognome: 'Rota',
        eta: 15,
    },

    {
        nome: 'Mirko',
        cognome: 'Scaccia',
        eta: 45,
    },

    {
        nome: 'Giulio',
        cognome: 'Mazzucotelli',
        eta: 17,
    },
]

console.log(persone)

// 2) Creaimo un nuovo ARRAY che contenga le frasi
let risultato = []
console.log(risultato)


// 3) Assegniamo le persone ad un indice del ciclo
for (let i = 0; i < persone.length; i++) {
    //assegniamo all'indice i valore dell'array persone
    const personaCorrente = persone[i]
    console.log(personaCorrente, i)


    // 4) calcoliamo se una persona può guidare
    if (personaCorrente.eta < 18) {
        risultato.push(personaCorrente.nome + '' + personaCorrente.cognome + ' non può guidare la macchina')
    } else {
        risultato.push(personaCorrente.nome + '' + personaCorrente.cognome + ' può guidare la macchina')
    }
}