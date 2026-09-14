import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import {
  initializeFirestore, persistentLocalCache, persistentMultipleTabManager
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-storage.js";
import { getFunctions } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-functions.js";
import { firebaseConfig, functionsRegion } from "./firebase-config.js";

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = initializeFirestore(firebaseApp, {
  localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() })
});
export const storage = getStorage(firebaseApp);
export const functions = getFunctions(firebaseApp, functionsRegion);
