
import { useState, useEffect } from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Gallery from './Gallery';
import config from "./config.json"
const dataHostName = config.dataHostName
function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`${dataHostName}/monkeys_records.json`)
      .then(r => r.json())
      .then(res => {
        console.log(res)
        setData(res)
      })
  }, [])
  return (
    <div className="App">
      <Header />
      <div className="container-fluid">
        <h1>Monkeys</h1>

        <Gallery data={data} />
      </div>
    </div>
  );
}

export default App;
