import './App.css';
import Header from './Header/Header';
import SwipeButtons from './SwipeButtons/SwipeButtons';
import TinderCards from './TinderCards/TinderCards';

function App() {
  return (

    //BEM Naming Convention //
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
