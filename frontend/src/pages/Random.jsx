import { useState } from "react";
import { getRandomVerse } from "../api/bibleApi";

const Random = () => {
  const [data, setData] = useState(null);

  const handleRandom = async () => {
    const res = await getRandomVerse();
    setData(res.data);
  };

  return (
    <div className="space-y-6 text-center">
      <h1 className="text-3xl">Random Scripture</h1>

      <button
        onClick={handleRandom}
        className="bg-gold text-white px-6 py-2 rounded hover:bg-[#5c3b1e]"
      >
        Reveal Verse
      </button>

      {data && (
        <div className="bg-[#fff8dc] border border-yellow-800 rounded-lg p-6 shadow text-left">
          <h2 className="text-xl font-bold mb-2">{data.reference}</h2>
          <p>{data.text}</p>
        </div>
      )}
    </div>
  );
};

export default Random;
