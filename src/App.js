import './App.css';
import HelloReact from './components/HelloReact';

function App() {
  
  const name = 'React'
  

  const newName = name.toLocaleUpperCase()

  return (
    <div className="App">
      <h1> Olá, React!</h1>
      <h2> Alterando o JSX</h2>
      <h3>E aí, John,codando em {newName}?</h3>
      
      <HelloReact />
    </div>
  );
}

export default App;
