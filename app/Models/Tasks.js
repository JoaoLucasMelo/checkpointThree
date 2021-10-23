import { generateId } from "../Utils/generateId.js"






export class Tasks {

constructor(data){
  this.id = data.id || generateId()
  this.task = data.task
  this.check = data.check
  this.stickerId = data.stickerId
}

get Templatetask(){
return `
<div class="col-1">
            <div class="form-check">
              <input class="form-check-input" type="checkbox"  value="yes" id="check" name="yes" >
              <label class="form-check-label" for="flexCheckDefault"></label>
            </div>
          </div>
          <div class="col-10 pe-0">
            <p class="m-0 ">${this.task}</p>
          </div>
          <div class="col-1 p-0 text-center">
          <a id="remove" title="Delete Task" class="button bs-danger "  onclick="app.stickersController.removeTask('${this.id}')"><i class="fas fa-minus-circle"></i></a>
          </div>
 
`
}





}