// var me = {
//     name: 'Jake',
//     age: 32,
//     friends: [],
//     admin: true
// }

// var mark = {
//     name: 'Mark',
//     age: 12,
//     friends: [me],
//     admin: false
// }

// var d$ = {
//     name: 'D$',
//     age: Infinity,
//     friends: [mark, me],
//     admin: true,
//     hair: {
//         colors: ['black', 'grey'],
//         totalFeetlength: 12
//     }
// }

// me.friends.push(d$)
// me.friends.push(mark)

// var bestFriend = mark.friends[0].friends[0].friends[1]
// console.log(me.age)
// bestFriend.age++

// var template = `
//     hello my name is ${bestFriend.name}
//     I am ${bestFriend.age}
// `

// console.log(template)

// let keithFamily = {
//     me:{
//         firstName: "Keith",
//         middleName: "Ian",
//         age: 46
//     },
//     father:{
//         firstName: "Peter",
//         middleName: "Hewitt",
//         age: 78
//     },
//     mother:{
//         firstName: "Karen",
//         middleName: "Lee",
//         age: 71
//     },
//     spouse:{
//         firstName: "Christina",
//         middleName: "Marie",
//         age: 34
//     },
//     children:[
//         {
//             firstName: "Rebecca",
//             middleName: "Anne",
//             age: 14,
//             hairColor: "brown" 
//         },
//         {
//             firstName: "James",
//             middleName: "Thomas",
//             age: 11,
//             hairColor: "brown"
//         },
//         {
//             firstName: "Mila",
//             middleName: "Elise",
//             age: 4,
//             hairColor: "blonde"
//         },
//         {
//             firstName: "Eliana",
//             middleName: "Piper",
//             age: 2,
//             hairColor: "blonde",
//         },
//         {
//             firstName: "Riley",
//             middleName: "Elizabeth",
//             age: 1,
//             hairColor: "light brown",

//         }  

//     ],

// }

// let testSentence = `Hi! My name is ${keithFamily.me.firstName}.`

// console.log(testSentence)


// console.log(me.age)

// var peeps = [me, mark, d$]


// console.clear();

// var myFamily = {
//     me: {
//         name: 'D$',
//         hairColor: "Brown",
//         eyeColor: "Brown",
//         age: 32
//     },
//     father: {
//         name: "Darryl",
//         age: 52,
//         alive: true        
//     },
//     mother: {
//         name: "Sarah",
//         age: 52,
//         alive: true
//     },
//     siblings: [
//         { 
//             name: "Jason",
//             age: 30 
//         },
//         { 
//             name: "Rhianon", 
//             age: 26 
//         }
//     ],
//     children: [
//         {
//             name: "Mark",
//             age: 14
//         },
//         {
//             name: "Anabelle",
//             age: 11
//         },
//         {
//             name: "Lilah",
//             age: 10
//         },
//         {
//             name: "Khaleesi",
//             age: 5
//         }
//     ],
//     spouse: {
//         firstName: "Janice",
//         lastName: "Money"
//     },
//     pets: 
//     [
//         {
//             name: "Solo",
//             animalType: "dog",
//             age: 11 
//         }
//     ]
// }

// var spouseName = myFamily.spouse.firstName + " " + myFamily.spouse.lastName

// var sentence = `Hello my name is ${myFamily.me.name}. I have ${myFamily.me.hairColor} color of hair and ${myFamily.me.eyeColor} eyes. I am ${myFamily.me.age} years old. My parents are ${myFamily.father.name} and ${myFamily.mother.name}. I have ${myFamily.siblings.length} number of siblings. I have ${myFamily.children.length} children, they are ${myFamily.children[0].age} and ${myFamily.children[1].age} years old. We have ${myFamily.pets.length} pets. He is a ${myFamily.pets[0].animalType}. `

//  //         expression ? true : false
// sentence += myFamily.spouse.firstName != "" ? "I am married. My spouse is named " +spouseName : "I am not married."


// console.log(sentence);








// var manufacturers = {
//     toyota: {
//         name: "toyota",
//         address: "1234 cool street",
//         phone: 208-905-0000
//     },
//     chevrolet: {
//         name: "Chevrolet",
//         address: "4321 supercool street",
//         phone: 208-888-8888
//     }
// }

// var car1 = {
//     numWheels: 4,
//     engine: {
//         cylinders: 8,
//         fuelTypes: ["gas", "diesel"],
//         turbo: true
//     },
//     color: "Red",
//     doors: 4,
//     manufacturer: {
//         name: "toyota",
//         address: "1234 cool street",
//         phone: 208-905-0000
//     }
// }

// var car2 = {
//     numWheels: 4,
//     engine: {
//         cylinders: 8,
//         fuelTypes: ["gas", "diesel"],
//         turbo: true
//     },
//     color: "Red",
//     doors: 4,
//     manufacturer: manufacturers.toyota
// }



// console.log(car1.manufacturer.name)
// console.log(car2.manufacturer.name)


// let cupCoffee = {
//     cardboardCup: {
//         color: "white",
//         material: "paper",
//         shape: "cylindrical",
//         heightInches: 5,
//         volumeOzs: 8
//     },
//     coffeeBeverage: {
//         material: "water",
//         color: "dark brown",
//         shape: "fluid",
//         taste: "bitter",
//         volumeOzs: 7
//     },
// }


// console.log(cupCoffee.cardboardCup.shape)


//--------------------------------------------


// function rentCostByCity(city) {
    // if (city == "boise") {
    //     return 1000
    // } else if (city == "san francisco") {
    //     return 10000
    // } else if (city == "st paul") {
    //     return 850
    // } else if (city == "denver") {
    //     return 95
    // }

    // let rent = 0;
    // switch(city){
    //     case "boise":
    //     rent = 1000
    //     break;
    //     case "san francisco":
    //     rent = 90000
    //     break;
    // }

    // let cities = {
    //     boise: 1000,
    //     "san francisco": 34823,
    //     seattle: 1900,
    //     denver: 860
    // }

    // cities[boise]

    // 
// }return cities[boise]


function makeTime(num) {
    var hours = Math.floor(num/60)
    var min = num % 60  // or num - (hours * 60))
    return hours + ':' + min
}

console.log(makeTime(433))