import Header from '../header/Header';
import './App.css';

function App(props) {
  let {title, artist, year, label, img} = props;
  return (
    <div className="App">

      <Header title = {title} artist = {artist} year = {year} label = {label} img = {img}/>
      
    </div>
  );
}

export default App;
