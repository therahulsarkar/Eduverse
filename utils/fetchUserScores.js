import { getDatabase, ref, query, equalTo, get } from "firebase/database";
import app from "@/firebase/firebaseapp";

const extractUserData = async (userId) => {
  try {
    const db = getDatabase(app);
    const dataRef = ref(db, "tests");
    
    // Query to retrieve data where userId matches the passed userId
    const userQuery = query(dataRef, equalTo('userId', userId));
    
    const snapshot = await get(userQuery);
    const userData = [];
    
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        userData.push(childSnapshot.val());
      });
    } else {
      console.log("No data found for the given userId");
    }
    
    return userData;
    
  } catch (error) {
    console.error("Error extracting user data:", error);
    throw error;
  }
};

export default extractUserData;
