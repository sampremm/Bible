import { useState } from "react";
import { searchVerse } from "../api/bibleApi";
import Card from "../components/Card";
import Button from "../components/Button";

const Home = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);

  const handleSearch = async () => {
    if (!query) return;
    const res = await searchVerse(query);
    setData(res.data);
  };

  return (
    <div className="space-y-6">

      <Card>
        <h2 className="text-lg font-semibold mb-4">
          Search Scripture
        </h2>

        <div className="flex gap-3">
          <input
            className="border rounded-lg p-2 flex-1"
            placeholder="John 3:16"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Button onClick={handleSearch}>
            Search
          </Button>
        </div>
      </Card>

      {data && (
        <Card>
          <h3 className="font-semibold text-lg">
            {data.reference}
          </h3>
          <p className="mt-2 text-gray-700 leading-relaxed">
            {data.text}
          </p>
        </Card>
      )}
    </div>
  );
};

export default Home;
