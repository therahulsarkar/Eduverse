'use client'
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { UserContext } from "@/context/userContext";

export default function AuthComponent(Component) {
  return function ProtectedRoute(props) {
    const { user } = useContext(UserContext);
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.push('/auth/signin');
      }
    }, [user, router]);

    return user ? <Component {...props} /> : null;
  };
}