import { generateId } from "../Utils/generateId.js"




export class Stickers {

  constructor(data){
    this.id = generateId()
    this.name = data.name
    this.color = data.color
  }
  
  get Template() {
    return `
    <div class="col-md-3">
          <div class="card m-3 text-dark border-top-0 bg-light">
            <div class="bg-info p-1 rounded-top"></div>
            <div class="card-body">
              <h5 class="card-title">Task</h5>
            </div>
          </div>
        </div>
`
  }
  
  
  
  
  
  }