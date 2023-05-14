const input = document.querySelector(".text-input")
const btn = document.querySelector(".add-btn")
const ul = document.querySelector(".list")
const h4 = document.querySelector("h4")
// btn.addEventListener("click", () => add())
// input.addEventListener("keydown", (e) => {
//     if (e.key ==="Enter"){add()}
// })
// function add ()  {
//     if (input.value === "") {
//         h4.innerHTML = "Error"
//     } else {
//         h4.innerHTML = ""
//         ul.innerHTML += `<li class=" list-group-item d-flex justify-content-between
// align-items-center">
// <span>
// <input type="checkbox" class="check">
// ${input.value}
// </span>
// <button class="del-btn btn btn-danger">delete</button>
// </li>`
//         input.value = ""
//     }
// }
// ul.addEventListener("click", (e) => {
//     if (e.target.classList.contains("del-btn")) {
//         e.target.parentNode.remove()
//     }
//     if (e.target.classList.contains("check")) {
//        if (e.target.parentNode.classList.contains("line")){
//            e.target.parentNode.classList.remove("line")
//        }
//         else{
//             e.target.parentNode.classList.add("line")
//
//        }
//
//     }
//     // e.target.parentNode.classList.toggle("line")
// })
// const obj = JSON.parse(localStorage.getItem("task"))
// obj.map((el) => {
// ul.innerHTML += `<li>${el.name}</li>`
// })

function view() {
ul.innerHTML = ""
    const task = JSON.parse(localStorage.getItem("task")) || []
    task.map((el) => {
        ul.innerHTML += `<li class="list-group-item d-flex justify-content-between
 align-items-center" >
 <span class="${el.isDone ? "line" : "" }">
 <input type="checkbox" ${el.isDone ? "checked" : ""} class="check">
${el.title}
 </span>
<button class="del-btn btn btn-danger">delete</button></li>`
    })
    delBtn()
    checkBox()
}



btn.addEventListener("click", () => {
    const task = JSON.parse(localStorage.getItem("task")) || []
    const newTask = {
        id: task.length ? task[task.length - 1].id + 1 : 1,
        title: input.value,
        isDone: false
    }
    const result = [...task, newTask]
    localStorage.setItem("task", JSON.stringify(result))
    input.value = ""
    view()
    checkBox()
})

function delBtn() {
    const task = JSON.parse(localStorage.getItem("task")) || []
    const btns = document.querySelectorAll(".del-btn")
    btns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            let result = task.filter((el , idx) => {
                return idx !== index
            })
            localStorage.setItem("task", JSON.stringify(result))
            view()
        })
    })
}

function checkBox() {
    let task = JSON.parse(localStorage.getItem("task")) || []
    const checkBoxes = document.querySelectorAll(".check")
    checkBoxes.forEach((check, index) => {
        check.addEventListener("click", () => {
             task = task.map((el, idx) => {
                if (idx === index) {
                    return {...el, isDone: ! el.isDone}

                }
            })
            localStorage.setItem("task",JSON.stringify(task))
        })

    })
}

//
//
//
//




