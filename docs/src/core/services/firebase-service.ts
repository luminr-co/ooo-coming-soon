import { FirebaseApp, initializeApp } from "firebase/app";
import {
  Firestore,
  addDoc,
  collection,
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDh2VQPUs_UmfuTN6vtLSwJ_oILSP5-UlM",
  authDomain: "only-one-outlier.firebaseapp.com",
  projectId: "only-one-outlier",
  storageBucket: "only-one-outlier.appspot.com",
  messagingSenderId: "110200336120",
  appId: "1:110200336120:web:9f11bd4382b3ff961a950d",
  measurementId: "G-N6C4PEGP3P",
};

class Firebase {
  private app: FirebaseApp;
  private db: Firestore;

  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);
  }

  async storeEmail(email: string): Promise<boolean> {
    const emailsCollection = collection(this.db, "emails");
    await addDoc(emailsCollection, { email });

    return true;
  }
}

export default Firebase;
