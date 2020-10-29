import "./App.css";
import ImagePreview from "./components/ImagePreview";
import { useState } from "react";
import { getRandomImage } from "./api/getRandomImage";
import FavoriteImageList from "./components/FavoriteImageList";
import { getFavorites } from "./api/storage";

function App() {
  let favorites = getFavorites();
  const [randomImage, setRandomImage] = useState(null);
  async function handleClick() {
    const randomImageResponse = await getRandomImage();
    setRandomImage(randomImageResponse);
  }

  return (
    <main>
      <h1 className="heading">Wallpaper Api</h1>
      <button className="button" onClick={() => handleClick()}>
        Get Random Image
      </button>
      {randomImage && (
        <ImagePreview
          src={randomImage.urls.regular}
          alt={randomImage.alt_description}
          author={randomImage.user.name}
          id={randomImage.id}
        />
      )}
      <FavoriteImageList photoIds={favorites} />
    </main>
  );
}

export default App;
