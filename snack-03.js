/* Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]

Crea un nuovo array con la lista dei mammiferi. */



// 1) Dichiaro e assegno un Array conteneti le proprietà degli animali
let animali = [
    { 
        nome: 'leone', 
        famiglia: 'felini', 
        classe: 'mammiferi', 
    },

    { 
        nome: 'squalo', 
        famiglia: 'squali', 
        classe: 'pesci', 
    },

    { 
        nome: 'coccodrillo', 
        famiglia: 'coccodrilli', 
        classe: 'rettili', 
    },

    { 
        nome: 'delfino', 
        famiglia: 'delfini', 
        classe: 'mammiferi', 
    },

    { 
        nome: 'aquila', 
        famiglia: 'predatori', 
        classe: 'uccelli', 
    },
]

console.log(animali)

// 2) Creiamo un nuovo array solo per mammiferi
let mammiferi = []
console.log(mammiferi)

// 3) Creiamo un ciclo For per andare ad identificare quali sono mammiferi ed assegnarli al nuovo array
for (let i = 0; i < animali.length; i++) {
    // assegnamo valori all'indice numerico
    const animaleCorrente = animali[i]
    // console.log(animaleCorrente, i)

    // creiamo una condizione per capire quali sono mammiferi e quali no
    // SE una proprietà è uguale a mammiferi
    if (animaleCorrente.classe === 'mammiferi') {

        // -- inseriamo il valore nel nuovo array
        mammiferi.push(animaleCorrente)
    }
}