let users = [
    {
        id: 0,
        isActive: false,
        age: 24,
        eyeColor: "green",
        name: "Marsh Obrien",
        company: "CENTURIA"
    },
    {
        id: 1,
        isActive: false,
        age: 21,
        eyeColor: "green",
        name: "Rios Gibson",
        company: "MULTRON"
    },
    {
        id: 2,
        isActive: false,
        age: 29,
        eyeColor: "brown",
        name: "Morgan Buchanan",
        company: "CENTURIA"
    },
    {
        id: 3,
        isActive: true,
        age: 25,
        eyeColor: "brown",
        name: "Franklin Dyer",
        company: null
    },
    {
        id: 4,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Keller Pitts",
        company: "CENTURIA"
    },
    {
        id: 5,
        isActive: false,
        age: 25,
        eyeColor: "brown",
        name: "Davenport Maddox",
        company: "MULTRON"
    },
    {
        id: 6,
        isActive: true,
        age: 31,
        eyeColor: "brown",
        name: "Judith Graves",
        company: null
    },
    {
        id: 7,
        isActive: true,
        age: 26,
        eyeColor: "blue",
        name: "Hoffman Hess",
        company: "CENTURIA"
    },
    {
        id: 8,
        isActive: true,
        age: 22,
        eyeColor: "blue",
        name: "Sheena Goff",
        company: "MULTRON"
    },
    {
        id: 9,
        isActive: false,
        age: 39,
        eyeColor: "brown",
        name: "Rose Lawrence",
        company: "EVENTIX"
    },
    {
        id: 10,
        isActive: false,
        age: 35,
        eyeColor: "blue",
        name: "Alston Goodman",
        company: "CENTURIA"
    },
    {
        id: 11,
        isActive: true,
        age: 28,
        eyeColor: "brown",
        name: "Nannie Berry",
        company: null
    },
    {
        id: 12,
        isActive: true,
        age: 27,
        eyeColor: "blue",
        name: "Lynette Jackson",
        company: "CENTURIA"
    },
    {
        id: 13,
        isActive: false,
        age: 23,
        eyeColor: "blue",
        name: "Samantha Garrett",
        company: "EVENTIX"
    },
    {
        id: 14,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Grimes Savage",
        company: "CENTURIA"
    },
    {
        id: 15,
        isActive: false,
        age: 31,
        eyeColor: "green",
        name: "Atkinson Kirby",
        company: null
    },
    {
        id: 16,
        isActive: false,
        age: 38,
        eyeColor: "green",
        name: "Jami Burgess",
        company: "CENTURIA"
    },
    {
        id: 17,
        isActive: true,
        age: 31,
        eyeColor: "blue",
        name: "Sallie Albert",
        company: "CENTURIA"
    },
    {
        id: 18,
        isActive: false,
        age: 26,
        eyeColor: "blue",
        name: "Ora Hobbs",
        company: "EVENTIX"
    },
    {
        id: 19,
        isActive: true,
        age: 30,
        eyeColor: "blue",
        name: "Pruitt Sellers",
        company: "CENTURIA"
    }
];
// function countActiveUsers(users) {
    
//     let activeUsers = 0;
// for(let i = 0; i < users.length; i++)
// {
//     if (users[i].isActive === true)
//      {
//          activeUsers=activeUsers+1;
//      }
// }
// return activeUsers;
// }
// console.log(`We currently have ${ countActiveUsers(users) } active users.`);

// function getActiveUsers(input) {
// let total = 0;
// for(let i =0; i < input.length; i++)
// {
//      if (input[i].isActive === true)
//     {
//          total ++
//      }
//     // verifier si l'utilisateur est actif
//     console.log(input[i]);
//     // si  oui l' ajouter au nouveau tableau
// }
//   return total; // renvoyer le nouveau tableau
// }

// console.log(getActiveUsers(users))

// function hasBlueEyes(activeUsers) {
// let BlueEyesUsers = 0;
// for(let i = 0; i < users.length; i++)
// {
//     if (users[i].eyeColor === "blue" && users[i].isActive === true)
//     {
//         BlueEyesUsers=BlueEyesUsers+1;
//     }
// }
// return BlueEyesUsers;
// }
//  console.log(`Out of our currently ${getActiveUsers(users)} active users, ${hasBlueEyes(users)} have blue eyes.`);

function getActiveUsers(users) {
let tab = [];
for (let i =0; i < users.length; i++)
{
    if (users[i].isActive === true){
        
        tab.push(users[i])
        
    }
}
return tab;

}
console.log(getActiveUsers(users))
function getActiveUsersAges(users) {
let tab = [];
for (let i =0; i < users.length; i++){
    console.log(users[i].age)
    tab.push(users[i].age)
    
}
return tab;
}
console.log(getActiveUsersAges(getActiveUsers(users)))
function computeActiveUsersAverageAge(ages) {
let total = 0;
for (let i =0; i < ages.length; i++){
    total = total + ages[i]
}
return total / ages.length;

}
console.log(computeActiveUsersAverageAge(getActiveUsersAges(getActiveUsers(users))))
console.log(`Out of our currently ${getActiveUsers(users).length} active users, the average age is ${computeActiveUsersAverageAge(getActiveUsersAges(getActiveUsers(users)))}.`);