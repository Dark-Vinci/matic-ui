import { JSX } from 'react';
import style from './App.module.scss';
import { HomePage } from './HomePage';

function App(): JSX.Element {
  return (
    <div className={style.App}>
      <HomePage />
    </div>
  );
}

export default App;
