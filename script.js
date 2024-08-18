// const items = document.querySelector("#item")
// const toDoBox = document.getElementById("to-do-box")
// items.addEventListener("keyup", function(event){
//  if(event.key == "Enter"){
//     addToDo(this.value)
//     this.value = ""

//  }
// })
// const addToDo = (item) => {
//     const listItems = document.createElement("li")
//     listItems.innerHTML = `
//     ${item}
//     <i class = "fas fa-times"></i>
//     `;

//     listItems.addEventListener("click", function(){
//         this.classList.toggle("done")
//     })

//     listItems.querySelector("i").addEventListener("click" , function (){
//         listItems.remove()
//     })

//     toDoBox.appendChild(listItems)

// }

let items = document.getElementById("item")
let toDoBox = document.getElementById("to-do-box")

items.addEventListener("k", function(event){
    if(event.key == "Enter"){
        addToDo(this.value);
        this.value = ""
    }
})

const addToDo = (item) => {
    const listItems = document.createElement("li")
    listItems.innerHTML = `
    ${item}
     <i class = "fas fa-times"></i> `

     listItems.addEventListener("click", function(){
                this.classList.toggle("done")
            })

listItems.querySelector("i").addEventListener("click", function(){
    listItems.remove()
})

    toDoBox.appendChild(listItems)
}

