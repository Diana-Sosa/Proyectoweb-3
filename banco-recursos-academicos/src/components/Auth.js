import React from "react";
import { auth, googleProvider, facebookProvider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";

const Auth = ({ setUser }) => {
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      alert("Inicio de sesión exitoso");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  const loginWithFacebook = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      setUser(result.user);
      alert("Inicio de sesión exitoso");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      alert("Cierre de sesión exitoso");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div>
      <button onClick={loginWithGoogle}>Iniciar sesión con Google</button>
      <button onClick={loginWithFacebook}>Iniciar sesión con Facebook</button>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default Auth;
