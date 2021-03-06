import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';


export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number): void {
    setSelectedGenreId(id);
  }

  let objectGenre = {
    id: selectedGenreId,
    handleClickButton
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar genderSelected={objectGenre} />
      <Content genderSelected={objectGenre} />
    </div>
  )
}