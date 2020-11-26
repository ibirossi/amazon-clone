import './App.css';
import Header from  './components/Header';
import Home from './components/Home'

function App() {
  return (
    //BEM covention
    <div className="app">
      {/*Header */}
      <Header />
      <Home />

    </div>
  );
}

export default App;
