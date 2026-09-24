import { useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('');

  return (
    <div className={`box ${theme}`}>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('light')}>Light</button>
    </div>
  );
}

export default App;
