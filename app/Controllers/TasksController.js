// import { ProxyState } from "../AppState.js"
// import { tasksService } from "../Services/TasksService.js"
// import { loadState, saveState } from "../Utils/LocalStorage.js";

// function _drawTask(){
//   const task = ProxyState.tasks
//   let template = ''
//   task.forEach( t => template += t.Template)
//   document.getElementById('tasks').innerHTML = template
// }


// export class TasksController{
// constructor(){

// ProxyState.on('tasks', saveState)
// loadState()
// }



// createTask(stickerId){
//   window.event.preventDefault()
//   const formElem = window.event.target
//   let tasksData ={
//     name: formElem.task.value,
//     stickerId: stickerId
//   }

//   console.log('creating task', tasksData)
//   tasksService.createTask(tasksData)
// }


// }
