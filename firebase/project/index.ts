import { FirebaseBase } from "../base";
import { COLLECTIONS } from "../config";

class Projects extends FirebaseBase {

  async getProjects(): Promise<Array<any>>{
    try{
      return await this.getDocuments(COLLECTIONS.PROJECTS);
    } catch(error){
      throw error;
    }
  }

}

export default new Projects();
