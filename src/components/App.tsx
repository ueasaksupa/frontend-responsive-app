import { useEffect } from "react";

import Athletes from "./Atheletes/Athletes.tsx";
import Players from "./Players/Players";

// fetch data from mockupData.json
import "./App.css";
import data from "./mockupData.json";

function App() {
   useEffect(() => {
      document.title = "Frontend Responsive App";
   }, []);

   return (
      <>
         {/* athletes */}
         <Athletes data={data.athletes} />
         {/* players */}
         <Players data={data.players} />
      </>
   );
}

export default App;
