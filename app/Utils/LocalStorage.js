import { ProxyState } from "../AppState.js";
import { Stickers } from "../Models/Stickers.js";
import { Tasks } from "../Models/Tasks.js";




export function saveState(){
  
  localStorage.setItem('Stickers', JSON.stringify({
    stickers: ProxyState.sticker,
    tasks: ProxyState.tasks
  }))
}

export function loadState(){

  let data = JSON.parse(localStorage.getItem('Stickers'))
  console.log('loaded data', data)
  if(data != null){
    ProxyState.sticker = data.stickers.map(s => new Stickers(s))
    ProxyState.tasks = data.tasks.map(t => new Tasks(t))
  }
}