const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/character?page=${page}`);
  const data = response.json();
  return data;
};

export default 'getCharacters';
