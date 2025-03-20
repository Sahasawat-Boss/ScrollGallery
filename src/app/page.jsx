import AppTitle from "./Components/AppTitle";
import ImageGal from "./Components/ImageGal";

export default function Home() {
  return (
    <div>
      <AppTitle />
      <main className="bg-grid-pattern animate-fade-in-up flex flex-grow">
        <ImageGal />
      </main>
    </div>
  );
}
