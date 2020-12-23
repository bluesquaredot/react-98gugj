import React, { useState } from "react";
import "./styles.css";
import Message from "./Message";

export default function App() {
  const [toast, setToast] = useState(false);
  
  return (
    <div className="App">
      
      <button onClick={() =>{
          setToast(!toast)
      }}>Make me a toast!</button>
      {toast ? <Message className='message'/> : null}
    </div>
  );
}
