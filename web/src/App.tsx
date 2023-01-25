import { useEffect } from "react";
import { io } from "socket.io-client";

function App() {
  useEffect(() => {
    const socket = io("ws://localhost:3000", { transports : ['websocket'] });
    socket.on("hello", (arg) => {
      console.log(arg); // world
    });
    socket.emit('hello', (a: string) => console.log(a))
  }, [])
  return (
    <div className="App">    
    </div>
  )
}

export default App
