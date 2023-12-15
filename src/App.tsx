import { ReactNode, useState } from "react";
import NavigationBar from "./components/NavigationBar";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import NewsletterPage from "./components/NewsletterPage";
import ArchivePage from "./components/ArchivePage";
import "./App.css";
import Footer from "./components/Footer";
import Title from "./components/Title";
import ResourcesPage from "./components/ResourcesPage";

function App() {
  const pages = ["Home", "About", "Newsletter", "Resources", "Archive"];
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
    <ResourcesPage></ResourcesPage>,
    <ArchivePage />,
  ];

  return (
    <>
      <NavigationBar
        pages={pages}
        onSelectPage={(selectPage: string) => setPage(selectPage)}
      ></NavigationBar>
      <Title onHome={page === "Home"}></Title>
      <div id="page-container">{pagesNode[pages.indexOf(page)]}</div>
      <Footer
        pages={pages}
        onSelectPage={(selectPage: string) => setPage(selectPage)}
      ></Footer>
      Image by
      <a href="https://www.freepik.com/free-vector/hand-drawn-collection-different-profile-icons_17786264.htm#query=person&position=15&from_view=search&track=sph&uuid=c84a5048-5227-4bbc-bd39-0519a21e3fe2">
        Freepik
      </a>
      <img src="../components/newsletterback1.png" />
    </>
  );
}

export default App;
