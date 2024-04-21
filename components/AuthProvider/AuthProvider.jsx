import { UserContextProvider } from "@/context/userContext";


const AuthProvider = ({ children }) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};

export default AuthProvider;