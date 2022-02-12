import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function Details() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const auxCharacters = useSelector((state) => state.CharsReducer);

  useEffect(() => {
    setCharacter(auxCharacters.find((character) => character.id === parseInt(id, 10)));
  }, []);

  return (
    <div className="container">
      {
            character != null ? (
              <div className="character-page-container">
                <p>{character.name}</p>
                <p>{id}</p>
              </div>
            )
              : (<h1>Not Found</h1>)
        }
    </div>
  );
}
