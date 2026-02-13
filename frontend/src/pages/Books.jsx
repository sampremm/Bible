import { useEffect, useState } from "react";
import { getBooks } from "../api/bibleApi";
import { useParams, useNavigate } from "react-router-dom";

const Books = () => {
  const { translation } = useParams();
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getBooks(translation).then((res) => setBooks(res.data));
  }, [translation]);

  return (
    <div>
      <h1 className="text-3xl text-center mb-6">
        Books ({translation})
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {books.map((book) => (
          <button
            key={book.id}
            className="bg-parchment border border-yellow-800 p-3 rounded"
            onClick={() =>
              navigate(`/chapters/${translation}/${book.id}`)
            }
          >
            {book.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Books;
