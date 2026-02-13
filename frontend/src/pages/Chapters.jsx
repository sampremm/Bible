import { useEffect, useState } from "react";
import { getChapters } from "../api/bibleApi";
import { useParams, useNavigate } from "react-router-dom";

const Chapters = () => {
  const { translation, book } = useParams();
  const [chapters, setChapters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getChapters(translation, book).then((res) =>
      setChapters(res.data)
    );
  }, [translation, book]);

  return (
    <div>
      <h1 className="text-3xl text-center mb-6">
        {book} Chapters
      </h1>

      <div className="grid grid-cols-5 gap-3">
        {chapters.map((ch) => (
          <button
            key={ch}
            className="bg-parchment border border-yellow-800 p-2 rounded"
            onClick={() =>
              navigate(`/verses/${translation}/${book}/${ch}`)
            }
          >
            {ch}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Chapters;
