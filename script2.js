const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
const peopleArray = people.map((person) => {
  return person.name
})

console.log(peopleArray)

// Risultato: 'Paolo', 'Giulia', 'Marco'