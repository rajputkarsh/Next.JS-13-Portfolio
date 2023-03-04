
import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore, collection, getDocs, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import { FIREBASE_CONFIG } from "./config";

export class FirebaseBase {
  #app: FirebaseApp;
  #db: Firestore;

  constructor(){
    this.#app = initializeApp(FIREBASE_CONFIG);
    this.#db  = getFirestore(this.#app);
  }

  async getDocuments(name: string): Promise<Array<any>>{
    try{
      const documents = await getDocs(collection(this.#db, name));
      const documentArray: Array<any> = [];
      documents.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
        documentArray.push(
          {...doc.data(),id: doc.id } 
        )
      });
      return documentArray;
    } catch(error){
      throw error;
    }
  }

}