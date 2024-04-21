import { getDatabase, ref, get } from "firebase/database";
import app from "@/firebase/firebaseapp";

const fetchUserData = async(uid)=> {
  const db = getDatabase(app);
  const userRef = ref(db, 'users/' + uid);
  const snapshot = await get(userRef);
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    // console.log('No user data available');
    return null;
  }
}

export default fetchUserData;