import { generateId } from "../Utils/generateId.js"






export class Tasks {

constructor(data){
  this.id = generateId()
  this.task = data.task
  this.check = data.check
}

get Template(){
return `
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    <label class="form-check-label" for="flexCheckDefault">
      Task Defined
    </label>
  </div>
`
}





}