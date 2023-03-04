import { FirebaseBase } from "../base";
import { COLLECTIONS } from "../config";

class Projects extends FirebaseBase {

  async getGames(): Promise<Array<any>>{
    try{
      return await this.getDocuments(COLLECTIONS.GAMES);
    } catch(error){
      throw error;
    }
  }

}

export default new Projects();
