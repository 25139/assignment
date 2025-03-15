import { useState } from "react";
import Voting from "./Voting";
import Results from "../components/Results";

const Home = () => {
  const [candidates, setCandidates] = useState([
    { id: 1, name: "Alice", votes: 0 },
    { id: 2, name: "Bob", votes: 0 },
    { id: 3, name: "Charlie", votes: 0 },
  ]);

  const handleVote = (id) => {
    setCandidates((prevCandidates) =>
      prevCandidates.map((candidate) =>
        candidate.id === id ? { ...candidate, votes: candidate.votes + 1 } : candidate
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <Voting candidates={candidates} onVote={handleVote} />
      <Results candidates={candidates} />
    </div>
  );
};

export default Home;
