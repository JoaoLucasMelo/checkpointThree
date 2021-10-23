import { stickersService } from "../Services/StickersService.js";
import { ProxyState } from "../AppState.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";
import { tasksService } from "../Services/TasksService.js"
import { generateId } from "../Utils/generateId.js";

// function _drawTask(){
//   if(ProxyState.sticker.length >= 1){
//   const task = ProxyState.tasks
//   let templatetask = ''
//   task.forEach( t => templatetask += t.Templatetask)
//   document.getElementById('tasks').innerHTML = templatetask
//   }
// }

function _drawSticker(){
  const sticker = ProxyState.sticker
  let template = ''
  sticker.forEach( s => template += s.Template)
  document.getElementById('stickers').innerHTML = template
}

export class StickersController {
constructor(){
  ProxyState.on('sticker', _drawSticker)
  ProxyState.on('tasks', _drawSticker)
  ProxyState.on('sticker', saveState)
  ProxyState.on('tasks', saveState)


  loadState()
}
createSticker(){
  window.event.preventDefault()
  const formElem = window.event.target
    const stickerData = {
      name: formElem.name.value,
      color: formElem.color.value
    }

      stickersService.createSticker(stickerData)
      formElem.reset()
}
removeSticker(id){
  stickersService.removeSticker(id)
}
createTask(sId){

  window.event.preventDefault()
  const formElem = window.event.target
  let tasksData ={
    task: formElem.task.value,
    stickerId: sId,

  }
  tasksService.createTask(tasksData)
  formElem.reset()
}
  removeTask(id){

    tasksService.removeTask(id)
  }


}
