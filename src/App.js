import './CSS/App.css';
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'

function App() {
  const title = "Let's play Tic Tac Toe Game!!!"


  return (
    <div className="app">
      <Header title={title} />
      <Body />
      <Footer />
    </div >
  );
}

export default App;
