import { useState } from 'react';
import Splash from "./src/screens/splash";
export default function App( ) {
  const[showSplah, setShowSplah] = useState(true);
  if (showSplah){
    return <Splash onFinish={() => setShowSplah(false)}/>
  
  }}
