import { useState } from "react";
import GifGrid from "./components/GifGrid";
import AddCategories from "./components/AddCategories";

function App() {

  const [categories, setCategories] = useState(['One Piece'])



  return (
    <>
      <h2>App Gif</h2>
      <AddCategories setCategories={setCategories} />
      <div>
          {
            categories.map( i => (
              <GifGrid 
                key={i}
                category={i}
              />
            ))
          }

      </div>
    </>
  );
}

export default App;
