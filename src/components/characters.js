import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCharacters } from '../redux/charactersSlice';
import Character from './char';

export default function Characters() {
  const [page, setPage] = useState(1);

  const chars = useSelector((state) => state.CharsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    setCharacters(page, dispatch);
  }, [page]);

  return (
    <div className="characters-container">
      {page > 1
        ? <button type="button" onClick={() => setPage(page - 1)}>Previous page</button>
        : ''}
      <button type="button" onClick={() => setPage(page + 1)}>Next page</button>

      { chars.map(({
        name, gender, status, image, id,
      }) => <Character key={id} name={name} gender={gender} status={status} img={image} />) }

    </div>
  );
}
