import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import "./App.css";

function App() {
  const pages = ["Home", "About", "Newsletter", "Archive"];
  const [page, setPage] = useState("Home");

  for (let i = 0; i < pages.length; i++) {
    if (page === pages[i]) {
    }
  }
  return (
    <>
      <NavigationBar
        pages={pages}
        onSelectPage={(selectPage: string) => setPage(selectPage)}
      ></NavigationBar>
    </>
  );
}

export default App;
