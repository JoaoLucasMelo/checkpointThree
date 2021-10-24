import { ProxyState } from "../AppState.js"
import { Tasks } from "../Models/Tasks.js"
import { saveState } from "../Utils/LocalStorage.js";




class TasksService {
constructor(){
  console.log('services here')

}
createTask(tasksData){
  const task = new Tasks(tasksData)
  ProxyState.tasks = [...ProxyState.tasks,task]
}
removeTask(id){
ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
ProxyState.tasks = ProxyState.tasks.filter(t => t.stickerId != id)

}


boxCheck(id) {
  const tasks = ProxyState.tasks
  const found = tasks.find(task => id == task.id)
  found.checked = !found.checked
  ProxyState.tasks = ProxyState.tasks
  console.log(found.id)
  saveState()
}
}
export const tasksService = new TasksService()


//     if( checkBox.checked == true){
// document.getElementById('remove').classList.remove('visually-hidden')
//   } else {
//     document.getElementById('remove').classList.add('visually-hidden')
//   }