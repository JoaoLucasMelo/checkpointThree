import { StickersController } from "./Controllers/StickersController.js";
import { TasksController } from "./Controllers/TasksController.js";
// import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  tasksController = new TasksController()
  stickersController = new StickersController()
}

window["app"] = new App();
