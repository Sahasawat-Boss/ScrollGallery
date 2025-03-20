import Nav from "./Components/Nav";
import AppTitle from "./Components/AppTitle";
import ImageGal from "./Components/ImageGal";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/Scrolltotop";

export default function Home() {
  return (
    <div>
      <Nav />
      <AppTitle />
      <main className="bg-grid-pattern animate-fade-in-up flex flex-grow">
        <ImageGal />
      </main>
      <ScrollToTop/>
      <Footer />
    </div>
  );
}
