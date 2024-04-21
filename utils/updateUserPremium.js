import { getDatabase, ref, set, get } from "firebase/database";
import app from "@/firebase/firebaseapp";


const updateUserPremium = async (userId, userEmail) => {
  const db = getDatabase(app);
  const userRef = ref(db, 'users/' + userId);

  // Get the current user data
  const snapshot = await get(userRef);
  const userData = snapshot.val();

  // Check if the user exists and the emails match
  if (userData && userData.email === userEmail) {
    // Update the isPremium field
    await set(userRef, {
      ...userData,
      isPremium: true,
    });
  } else {
    throw new Error('User not found or email does not match');
  }
};

export default updateUserPremium;