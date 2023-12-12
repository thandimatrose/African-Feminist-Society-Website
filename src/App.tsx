import { ReactNode, useState } from "react";
import NavigationBar from "./components/NavigationBar";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import NewsletterPage from "./components/NewsletterPage";
import ArchivePage from "./components/ArchivePage";
import "./App.css";

function App() {
  const pages = ["Home", "About", "Newsletter", "Archive"];
  const [page, setPage] = useState("Home");

  //About
  const aboutData = [
    ["Thandi Matrose", "Treasurer", "WHo am I???"],
    ["polly", "lo", "This is a person"],
    ["Frida Caulo,", "painter", "She is person + painter"],
    [
      "Mphatso Nkhoma",
      "Visual Image Developer",
      "Hi, I'm the cutest girl everrr",
    ],
  ];

  //all the pages in array
  const pagesNode: ReactNode[] = [
    <HomePage />,
    <AboutPage data={aboutData} />,
    <NewsletterPage />,
    <ArchivePage />,
  ];

  return (
    <>
      <div>
        <h1 id="title">African Feminist Society</h1>
      </div>
      <NavigationBar
        pages={pages}
        onSelectPage={(selectPage: string) => setPage(selectPage)}
      ></NavigationBar>
      {pagesNode[pages.indexOf(page)]}
    </>
  );
}

export default App;
