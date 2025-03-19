import Nav from "./Components/Nav";
import AppTitle from "./Components/AppTitle";
import ImageGal from "./Components/ImageGal";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <AppTitle />
      <div className="bg-grid-pattern animate-fade-in-up">
        <ImageGal />
      </div>
      <Footer />
    </div>
  );
}
