const ageToVote = 100

const user = {
  name: 'Sherlock Holmes',
  address: {
    street: '221B Baker Street',
    city: 'London'
  }
}

const cases = [
  { title: 'The Hound of the Baskervilles', releaseYear: 1901 },
  { title: 'The Adventure of the Empty House', releaseYear: 1903 },
  { title: 'The Adventure of the Norwood Builder', releaseYear: 1903 },
  { title: 'The Adventure of the Dancing Men', releaseYear: 1903 },
  { title: 'The Adventure of the Solitary Cyclist', releaseYear: 1904 }
]

// YOUR JS CODE

function sectionTwo() {
  let currentYear = 2023
  let jsReleaseYear = 1995
  let jsAge = currentYear - jsReleaseYear

  console.log(`current age of JavaScript is ${jsAge}`)

  if (jsAge >= ageToVote) {
    console.log("JavaScript is old enough to vote")
  } else {
    console.log("JavaScript is not old enough to vote")
  }
}
//sectionTwo()

function sectionThree() {
  console.log("Starting")
  for (let i = 0; i <= 100; i += 10) {
    console.log(i)
    if (i == 50) { console.log("Halfway") }
  }
  console.log("Finished")
}
//sectionThree()

console.log(`${user.name} lives at ${user.address.street}, ${user.address.city}`)
//sectionFour ^

function sectionFive_1() {
  for (let i = 0; i < cases.length; i++) {
    console.log(`${cases[i].title} - ${cases[i].releaseYear}`)
  }
}
//sectionFive_1()

function sectionFive_1_2() {
  cases.forEach(book => {
    console.log(`${book.title} - ${book.releaseYear } `)
  });
}
//sectionFive_1_2()

let queryYear = 1903
function sectionFive_2() {
  cases.forEach(book => {
    if(book.releaseYear == queryYear){
    console.log(`${book.title} - ${book.releaseYear } `)
  }});
}
//sectionFive_2()

