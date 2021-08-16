import React, { createContext, useContext, useState } from 'react';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [rickAndMortyApi, setRickAndMortyApi] = useState('rickAndMorty');
  console.log('this is fist log', CharacterProvider);

  //put useEffect here for lightTheme dark theme
  useEffect(() => {
    apiMap[rickAndMortyApi]().then(setCharacters);
  }, [rickAndMortyApi]);
  console.log('this is fist log', CharacterProvider);
  
  return (
    <CharacterContext.Provider value={{ characters, rickAndMortyApi }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacters = () => {
  const { characters } = useContext(CharacterContext);
  return characters;
};

export const rickAndMortyApi = () => {
  const { setRickAndMortyApi } = useContext(CharacterContext);
  return setRickAndMortyApi;
};

