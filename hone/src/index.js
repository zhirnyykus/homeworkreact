import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let title1 = "Abbey Road";
let artist1 = "The Beatles";
let year1 = "1969";
let label1 = "Apple Records";
let img1 = "https://www.1c-interes.ru/images/2019/05/28604114_beatles_abbey_road_50th.jpg";

let title2 = "Lemonade";
let artist2 = "Beyoncé";
let year2 = "2016";
let label2 = "Parkwood Entertainment / Columbia Records";
let img2 = "https://n.cdn.cdek.shopping/images/shopping/7eb58fffeb0b440e997f25a5ba2cb89a.jpg?v=1"

root.render(
  <React.StrictMode>
    <App title = {title1} artist = {artist1} year = {year1} label = {label1} img = {img1}/>

    <App title={title2} artist={artist2} year={year2} label={label2} img={img2} />
  
  </React.StrictMode>
);
