import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import './App.css'
import Companies from './components/Companies/Companies';
import Residencies from './components/Residencies.jsx/Residencies';
import Value from './Value/Value';
function App() {
  return (
    <>
    <div className='App'>
      <div>
        <div className='white-gradient'/>
          <Header/>
          <Hero/>
        </div>
        <Companies/>
        <Residencies/>
        <Value/>
    </div>
    </>
  );
}

export default App;
