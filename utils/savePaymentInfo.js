import { getDatabase, ref, push, set } from "firebase/database";
import app from "@/firebase/firebaseapp";

const savePaymentInfo = async (
    userId, userEmail, displayName, response
) => {
  try {
    const db = getDatabase(app);
    const bookingsRef = ref(db, "payments");
    const newBookingRef = push(bookingsRef); 
    const data = {
     userId, userEmail, displayName, response,
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

export default savePaymentInfo;
