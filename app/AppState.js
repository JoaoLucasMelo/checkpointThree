import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Tasks } from "./Models/Tasks.js"
import { Stickers } from "./Models/Stickers.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Tasks').Tasks[]} */
  tasks = []
  /** @type {import('./Models/Stickers').Stickers[]} */
  sticker = []

}






























export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
