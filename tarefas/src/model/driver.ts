import { firestoreDriver } from "@hoda5/h5doc"
import * as firebase from "firebase"
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBuSScTgruaiQa_7GY8ZHdV8YEGYIvHSpY",
    authDomain: "gerenciador-5c963.firebaseapp.com",
    databaseURL: "https://gerenciador-5c963.firebaseio.com",
    messagingSenderId: "120490411135",
    projectId: "gerenciador-5c963",
    storageBucket: "gerenciador-5c963.appspot.com",
   
  };
firebase.initializeApp(config);



const fbstore = firebase.firestore();

export const driver = firestoreDriver({
    // rootDoc() {
    //     return "testH5Doc/" + caso
    // },
    disableCache: true,
    firestore: fbstore,
    useFunctionsToSOA: false,
    async getReplicaInfo() {
        return {
            masterReplicaId: "exemploReplica".toGuid(),
            thisReplicaId: "exemploReplica".toGuid(),
        }
    },
})

export const auth = firebase.auth()

