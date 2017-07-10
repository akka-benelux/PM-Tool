import {Injectable} from "@angular/core";
import {Link} from "../models/link";

@Injectable()
export class LinkService {
  //this is the file that stores the task links
  private link_json = require('../../assets/projects/link.json');
  //get all the task links
  get(): Promise<Link[]> {
      return Promise.resolve(this.link_json.link);
  }
}
