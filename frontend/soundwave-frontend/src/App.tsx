import React from "react";
import GenrePage from "./components/GenrePage";

const App: React.FC = () => {
  const genres = [
    "pop",
    "rock",
    "hip-hop",
    "jazz",
    "electronic",
    "folk",
    "classical",
    "country",
  ];

  return (
    <div>
      <GenrePage genres={genres} />
    </div>
  );
};

export default App;
