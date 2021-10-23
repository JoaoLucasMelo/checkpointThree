import { ProxyState } from "../AppState.js"
import { Tasks } from "../Models/Tasks.js"




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
  // tasks = ProxyState.tasks.filter(t => id != t.stickerId)

}

}

export const tasksService = new TasksService()