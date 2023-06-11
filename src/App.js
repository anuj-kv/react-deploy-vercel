import Header from './components/Header.js';
import Form from './components/Form.jsx';
import './App.css';

function App() {
  const anuj ={
    name: "Namee",
    email: "Email",
    channel: "Channel"
  }
  return (
    <div className="App">
      {/* <Header/> */}
      <Form {...anuj}/>
    </div>
  );
}

export default App;
