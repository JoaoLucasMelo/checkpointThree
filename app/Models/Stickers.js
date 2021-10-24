import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"


export class Stickers {

  constructor(data){
    this.id = data.id || generateId()
    this.name = data.name
    this.color = data.color
  }
  
  get Template() {
    
    let number = 0
    for ( let i = 0; i < ProxyState.tasks.length; i++){
    number = i+1 }
//  console.log(taskscount)

    return `
    <div class="col-md-4">
    <div class="card m-3 text-dark minheight shadow border-top-0 bg-light">
      <div class="a${this.id}e p-1 rounded-top"></div>
        <style>
        .a${this.id}e {
          background-color: ${this.color};
          }
        </style>
      <div class="card-body">
      <div class="d-flex justify-content-between">
        <h5 class="card-title text-center">${this.name}</h5>
        <a title="Delete Sticky Note" class="button bs-danger"
        onclick="app.stickersController.removeSticker('${this.id}')"><i class=" fa-2x fas fa-times"></i></a>
      </div>
      <div class="text-end">
      <p id="checks" class="taskcount" > Tasks 0/${number} </p>
      </div>  
      <div id="tasks" class="row flex-direction-column">
          ${this.getTasks()}
        </div>
      </div>
      <form onsubmit="app.tasksController.createTask('${this.id}')"
        class="form-floating d-flex m-2 justify-content-between align-items-center">
         <input type="text" class="form-control" minlength="3" maxlength="50" required id="task" placeholder="..." value="" >
          <label class="fst-italic"   for="floatingInputValue">Add New Task</label>
       </form>
    </div>
  </div>
`
  }
  
  getTasks(){
    let template = ''
    const tasks = ProxyState.tasks.filter(t => this.id == t.stickerId)
    tasks.forEach(t => { template += t.Templatetask })
    return template

  }


  
  
  }