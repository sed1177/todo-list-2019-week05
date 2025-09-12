let addTodo = document.querySelector('#addTodo')
let deleteTodo = document.querySelector('#deleteTodo')

addTodo.addEventListener("click", () => {
    let userInput = document.querySelector('#userInput').value.trim()
    let userInputBox = document.querySelector('input')
 
    if(userInput === ''){
        alert("Please Enter a Todo...")
        return
    }

    let container = document.querySelector('ul')
    let liElement = document.createElement('li')
    liElement.id = 'listItem'
    liElement.innerHTML = userInput
    container.appendChild(liElement)
    console.log("user entered:", userInput)

    liElement.addEventListener("click", () => {
        liElement.innerHTML = ''
        liElement.innerHTML = `${userInput} : COMPLETED`
        liElement.classList.add('linethrough')
    })

    liElement.addEventListener("dblclick", () => {
        liElement.remove()
    })
    userInputBox.value = '';
})

deleteTodo.addEventListener("click", () => {
    let container = document.querySelector('ul')
    container.innerHTML = ''
})

