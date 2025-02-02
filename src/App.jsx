import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() =>{
    const timer = setInterval(() => {
      setCurrentTime(new Date)
    }, 1000);
    return () => clearInterval(timer)
  },[])
  return (
<>
    <div className="digital-clock">
      <h1>Digital Clock</h1>
      <div className="time"> 00:00:00 PM</div>
      <div className="date"> Wednesday, Septemper 25,2024</div>
    </div>
</>

  )
}
  
export default App;
