import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../../App.css';
import '../Cards.css';
import CardItem from '../CardItem';
import img3 from '../../images/fish_and_water.png';
import img4 from '../../images/fish_and_water.png';


export default function Records() {
  return (
    <div className='cards'>
      <h1>Records:</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text={'Messenger:\nLaura Takai'}
              label='2024-10-13'
              path='/records/0'
            />
            <CardItem
              src={img4}
              text={'Messenger:\nMajima Magoto'}
              label='2024-10-19'
              path='/records/1'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}