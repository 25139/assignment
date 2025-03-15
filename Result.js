const Results = ({ candidates }) => {
    return (
      <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-lg mt-6">
        <h2 className="text-xl font-bold mb-4 text-center">Results</h2>
        <ul>
          {candidates.map((candidate) => (
            <li key={candidate.id} className="flex justify-between p-2 border-b">
              <span>{candidate.name}</span>
              <span className="font-bold">{candidate.votes} votes</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Results;
  