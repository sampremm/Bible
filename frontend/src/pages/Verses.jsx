import { useEffect, useState } from "react";
import { getVerses } from "../api/bibleApi";
import { useParams } from "react-router-dom";

const Verses = () => {
  const { translation, book, chapter } = useParams();
  const [verses, setVerses] = useState([]);

  useEffect(() => {
    getVerses(translation, book, chapter).then((res) =>
      setVerses(res.data.verses)
    );
  }, [translation, book, chapter]);

  return (
    <div>
      <h1 className="text-3xl text-center mb-6">
        {book} {chapter}
      </h1>

      <div className="bg-parchment border border-yellow-800 p-6 rounded shadow space-y-2">
        {verses.map((v) => (
          <p key={v.verse}>
            <span className="font-bold">{v.verse}.</span> {v.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Verses;
