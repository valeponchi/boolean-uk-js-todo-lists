// Repo: boolean-uk-js-todo-lists

/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

console.log("users: ", users);
// {
//   id: 1,
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//     geo: {
//       lat: "-37.3159",
//       lng: "81.1496"
//     }
//   },
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
//   company: {
//     name: "Romaguera-Crona",
//     catchPhrase: "Multi-layered client-server neural-net",
//     bs: "harness real-time e-markets"
//   }
// },

console.log("todos: ", todos);

//1.
// - Create an alert that lists all users, with their ids, names and what city they're from
let usersData = []

for (const user of users) {
  usersData.push([user.id, user.name, user.address.city])
  // if I want to use the alert, I have to usersData = "" and here:
  // [
  //   [usersData += user.id + " "],  
  //   [usersData += user.name + ", from "],
  //   [usersData += user.address.city + " \n"] // \n vai a capo
  // ]
}
// alert(usersData)
console.log(usersData)




// 2.
// - Prompt the user for a user id

// - Display an alert with the username and all the todos titles that belong to that user 

// {
  //   userId: 1,
  //   id: 1,
  //   title: "delectus aut autem",
  //   completed: false
  // },
let yourID = Number(prompt("Please type your ID"))
// let option = Number(prompt("Press 1 if you want to see your to-do-list \nPress 2 if you want to add a new to-do"))
  
  
let yourList = []
for (const user of users) {
  if (yourID === user.id)  {
    yourList.push(user.username)
  } 
}

let titles = []
for (const todo of todos) {
  if (yourID === todo.userId) {
    titles.push(todo.title + " \n")
  }
}

yourList.push(titles)
console.log(yourList)


// Tips
// - The user id creates an identifiable relationship with the todos
// - Sometimes it's good to map some values into a new data structure

// Challenge
// After you select a user, add the option to either show the todos or add a new todo to the list

// let selectedUser = users[3]
let option = Number(prompt("Press 1 if you want to see your to-do-list \nPress 2 if you want to add a new to-do"))

if (option === 1) {
  alert("Here is your to-do-list: \n" + String(yourList))
} else if (option === 2) {
  let newToDo = prompt("Please, add the new to-do here:")
  titles.push(newToDo)
  alert("Here is your new to-do-list: \n" + String(yourList))
}


// Challenge 2
// Now that you can add a todo, add the option to either delete or update a todo. Add also the option to repeatedly choose a different user, or to finish the program

let change = Number(prompt("Press 1 if you would like to update an existing to-do \nPress 2 if you would like to delete a to-do \nPress Cancel if you want to exit."))

if (change === 1) {
  let update = prompt("")
}
