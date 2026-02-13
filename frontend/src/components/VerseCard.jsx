const VerseCard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-gray-100 p-4 rounded shadow">
      <h3 className="font-bold mb-2">{data.reference}</h3>

      {data.verses.map((verse, index) => (
        <p key={index}>
          <span className="font-semibold">{verse.verse}.</span>{" "}
          {verse.text}
        </p>
      ))}
    </div>
  );
};

export default VerseCard;
