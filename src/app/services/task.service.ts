import {Injectable} from "@angular/core";
import {Task} from "../models/task";

@Injectable()
export class TaskService {
  //this is the file that stores the projects
  private task_json = require('../../assets/projects/task.json');
  //get all projects in the json file
  get(): Promise<Task[]> {
      return Promise.resolve(this.task_json.task);
  }
    //
    // get() {
    //     console.log('message');
    //     var json = require('../../assets/projects/task.json');
    //     return json.project;
    // }
}
