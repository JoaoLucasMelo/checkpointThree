import { generateId } from "../Utils/generateId.js"






export class Tasks {

constructor(data){
  this.id = data.id || generateId()
  this.task = data.task
  this.checked =  data.checked
  this.stickerId = data.stickerId
}

get Templatetask(){
return `
<div class="col-1">
<div class="form-check">
  <input class="form-check-input" autocomplete="off" type="checkbox" onclick="app.tasksController.boxCheck('${this.id}')" value="${this.id}"  name="${this.id}" id="${this.id}" ${this.checked ? 'checked' : ''}>
  <label class="form-check-label" for="defaultCheck1"></label>
</div>
</div>
<div class="col-9 pe-0">
 <p class="m-0 ">${this.task}</p>
</div>
<div class="col-2 p-0 text-center">
<a id="remove" title="Delete Task" class="button bs-danger "  onclick="app.tasksController.removeTask('${this.id}')"><i class="fas fa-minus"></i></a>
</div>
`
console.log()

}
/* <div class="form-check">
<input onclick="app.tasksController.boxCheck('${this.id}')" type="checkbox" id="${this.id}" name="${this.id}" ${this.check ? 'check' : ''}>
<label for="${this.id}">${this.title}</label>
</div> */




}