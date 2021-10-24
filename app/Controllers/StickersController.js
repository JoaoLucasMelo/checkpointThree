import { stickersService } from "../Services/StickersService.js";
import { ProxyState } from "../AppState.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";



function _drawSticker(){
  const sticker = ProxyState.sticker
  let template = ''
  sticker.forEach( s => template += s.Template)
  document.getElementById('stickers').innerHTML = template
}
function removebtn(){}
//   // if( ProxyState.tasks.length >= 1){
// let num = ProxyState.tasks.find(n => n.checked)
//   if ( num.checked == true ){ 
//   document.getElementById('remove').classList.remove('visually-hidden')
//   } else if ( num.checked == false ) {
//     document.getElementById('remove').classList.add('visually-hidden')
    
//   } console.log(num.checked) }



  

export class StickersController {
constructor(){
  ProxyState.on('sticker', _drawSticker)
  ProxyState.on('tasks', _drawSticker)
  ProxyState.on('sticker', saveState)
  ProxyState.on('tasks', saveState)
  ProxyState.on('tasks', removebtn )
 _drawSticker

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
  if (confirm("Are you sure? Press OK to Delete")){
  stickersService.removeSticker(id)
}
}
// indiv(){
// let one = ProxyState.tasks.find(o => o.stickerId)
// let two = ProxyState.tasks.find(o => o.id)
// if ( one !== two){
// var number = 0
// for ( let i = 0; i < ProxyState.tasks.length; i++){
// number = i+1 }}
// console.log(number)
// }










}
