const Voting = ({ candidates, onVote }) => {
    return (
      <div className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Vote for a Candidate</h2>
        <ul>
          {candidates.map((candidate) => (
            <li key={candidate.id} className="flex justify-between items-center p-2 border-b">
              <span>{candidate.name}</span>
              <button
                onClick={() => onVote(candidate.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Vote
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Voting;
  