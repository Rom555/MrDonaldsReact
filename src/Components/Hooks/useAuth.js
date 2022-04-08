import { useEffect, useState } from 'react';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

export const useAuth = () => {
  const [authentication, setAuthentication] = useState(null);

  const provider = new GoogleAuthProvider();

  const auth = getAuth();

  const logIn = () => signInWithPopup(auth, provider).catch((err) => console.error(err));
  const logOut = () => signOut(auth).catch((err) => console.error(err));

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? setAuthentication(user) : setAuthentication(null);
    });
  }, [authentication]);

  return { authentication, logIn, logOut };
};
