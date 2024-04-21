"use client";
import React from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import app from "@/firebase/firebaseapp";
import fetchUserData from "@/utils/fetchUserData";

const auth = getAuth(app);

export const UserContext = React.createContext({});

export const useUserContext = () => React.useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async(user) => {
      if (user) {
        const extraData = await fetchUserData(user.uid);
        // console.log('Extra data:', user)
        // console.log('Extra dataaaaaaaaa:', extraData.isPremium)
        if(extraData && extraData.isPremium) {
          setUser({...user, isPremium: extraData?.isPremium, username: extraData?.username});
        } else {
          setUser({...user, isPremium: false})
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {loading ? (
        <div
          className="w-full flex justify-center items-center"
          style={{ height: "100vh" }}
        >
          <div class="loading">
            <svg width="64px" height="48px">
              <polyline
                points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
                id="back"
              ></polyline>
              <polyline
                points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
                id="front"
              ></polyline>
            </svg>
          </div>
        </div>
      ) : (
        children
      )}
    </UserContext.Provider>
  );
};
