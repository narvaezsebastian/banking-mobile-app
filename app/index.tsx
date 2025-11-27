import { useState } from "react";
import Splash from "./src/screens/Splash";
import Register from "./src/screens/Register";
import Login from "./src/screens/Login";

export default function App(){
  const [showSplash, setShowSplash] = useState(true);
  const [currentScreen, setCurrentScreen] = useState("login");

  if(showSplash){
    return <Splash onFinish={() => setShowSplash(false)}/>
  }

  if (currentScreen === "login") {
    return <Login onNavigateToRegister={() => setCurrentScreen("register")} />;
  } else {
    return <Register onNavigateToLogin={() => setCurrentScreen("login")} />;
  }
}