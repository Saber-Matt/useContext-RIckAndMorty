import React from 'react';
//import { Route, Switch, useParams } from '';
import CharacterList from '../characters/CharacterList';
//import themeToggle from '';
import Header from '../Header/Header.jsx';




export default function App() {
  return (
    <>
      <Header />
      {/* <CharacterToggle /> */}
      <CharacterList />
    </>
  );
}
