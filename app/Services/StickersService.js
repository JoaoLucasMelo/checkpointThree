import { ProxyState } from "../AppState.js"
import { Stickers } from "../Models/Stickers.js"




class StickersService {

createSticker(stickerData){
  const stickers = new Stickers(stickerData)
  ProxyState.sticker = [...ProxyState.sticker, stickers]
}
removeSticker(id) {
  ProxyState.sticker = ProxyState.sticker.filter(s => s.id != id)
  ProxyState.tasks = ProxyState.tasks.filter(t => t.stickerId != id)

}



}


export const stickersService = new StickersService()