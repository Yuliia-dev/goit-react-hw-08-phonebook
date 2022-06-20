import React from 'react';
import { ContainerHome, TextHome } from './HomeView.styled';
import { BiBookHeart } from 'react-icons/bi';
import { IconContext } from 'react-icons';

export default function HomeView() {
  return (
    <ContainerHome>
      <IconContext.Provider value={{ color: 'blue', size: '30em' }}>
        <TextHome>
          Hi, we are glad see you again. We created an application for easy
          storage of your contacts. Enjoy!
        </TextHome>
        <BiBookHeart height={500} />
      </IconContext.Provider>
    </ContainerHome>
  );
}
