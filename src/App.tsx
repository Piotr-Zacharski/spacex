import React, { useState } from 'react'
import axios from 'axios'
import { v4 as uuid4 } from 'uuid'
import './App.css'

import Header from './components/Header'
import { Button, Paper } from '@mui/material'

const App:React.FC =() => {

  const [ships, setShips] = useState<any[]>([]);
  const [areShips, setAreShips] = useState(false);

const fetchShips = () => {
  axios
    .get(`https://api.spacexdata.com/v3/ships`)
    .then((res) => {
      console.log(res);
      setShips(res.data.slice(0,4));
    })
    .catch((err) => {
      console.log(err);
    });
};

const hideShips = () => {
  setShips([]);
  setAreShips(false);
}


  return (
    <div className="App">
      <Header />
      {!areShips && <Button style={{color: 'white'}} onClick={() => fetchShips()}>Fetch</Button>}
      {areShips && <Button onClick={() => hideShips()}>Hide</Button>}
      {ships.map((ship) => {
      return(
          <Paper key={uuid4()} elevation={24} style={{width: 400, textAlign: 'center', margin: '0 auto', objectFit: 'cover'}}>
            <h4>Nazwa: {ship.ship_name}</h4>
            <h5>Typ: {ship.ship_type}</h5>
            <h5>Rola: {ship.roles}</h5>
            <img style={{ width: 300, height: 200}} src={ship.image} alt={ship.ship_name} />
          </Paper>
        )})}
    </div>
  )
}

export default App
