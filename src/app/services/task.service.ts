import {Injectable} from "@angular/core";
import {Task} from "../models/task";

@Injectable()
export class TaskService {
  //this is the file that stores the projects
  private prj_json = require('../../assets/projects/task.json');
  //get all projects in the json file
  get(): Promise<Task[]> {
      return Promise.resolve(this.prj_json.project);
  }
    //
    // get() {
    //     console.log('message');
    //     var json = require('../../assets/projects/task.json');
    //     return json.project;
    // }
}
