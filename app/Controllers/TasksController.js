import { ProxyState } from "../AppState.js"
import { tasksService } from "../Services/TasksService.js"
import { loadState, saveState } from "../Utils/LocalStorage.js";


function _drawtasks(){

  let checks = 0
  let checking = ProxyState.tasks.find(c => c.check)

  console.log(checking)
}



export class TasksController{
constructor(){

}
myFunction(id) {
tasksService.myFunction(id)
  }


createTask(sId){

  window.event.preventDefault()
  const formElem = window.event.target
  let tasksData ={
    task: formElem.task.value,
    checked: false,
    stickerId: sId,
  }
  tasksService.createTask(tasksData)
  formElem.reset()
  console.log(ProxyState.tasks.find(c => c.checked))
}
boxCheck(id) {
  tasksService.boxCheck(id)
}

removeTask(id){
  if (confirm("Are you sure? Press OK to Delete")){
    tasksService.removeTask(id)
  }
  
}


}
