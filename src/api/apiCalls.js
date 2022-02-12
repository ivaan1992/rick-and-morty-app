import baseUrl from './base';

export const getCharacters = async () => {
  const response = await fetch(`${baseUrl}/character`);
  const data = response.json();

  return data;
};

export default '';
