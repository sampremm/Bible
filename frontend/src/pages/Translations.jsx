import { useEffect, useState } from "react";
import { getTranslations } from "../api/bibleApi";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

const Translations = () => {
  const [translations, setTranslations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTranslations().then((res) => {
      setTranslations(res.data.translations);
    });
  }, [setTranslations]);

  return (
    <Card>
      <h2 className="text-lg font-semibold mb-4">
        Available Translations
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {translations.map((t) => (
          <button
            key={t.identifier}
            className="border rounded-lg p-4 hover:bg-gray-50 text-left"
            onClick={() => navigate(`/books/${t.identifier}`)}
          >
            {t.name}
          </button>
        ))}
      </div>
    </Card>
  );
};

export default Translations;
