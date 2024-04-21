        import { getDatabase, ref, push, set } from "firebase/database";
import app from "@/firebase/firebaseapp";

const saveScoreInfo = async (
    userId, score, testId, 
) => {
  try {
    const db = getDatabase(app);
    const bookingsRef = ref(db, "tests");
    const newBookingRef = push(bookingsRef); 

    
    const data = {
     userId, testId, score, 
      date: new Date().toLocaleDateString("en-IN", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
      time: new Date().toLocaleTimeString(),
    };

    await set(newBookingRef, data); // Storing the data

  } catch (error) {
    alert("Error saving booking data");
  }
};

export default saveScoreInfo;
