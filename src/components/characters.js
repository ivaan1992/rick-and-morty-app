import { useEffect, useState } from 'react';
import { getCharacters } from '../api/apiCalls';

export default function Characters() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    getCharacters().then(({ results }) => {
      setChars(results);
    });
  }, []);

  return (
    <div className="characters-container">
      {chars.map(({ name }) => <p key={`${33 + Math.random()}`}>{name}</p>)}
    </div>
  );
}
