import React from 'react';
import useListShips from '../../context/ShipsContext';
import Form from '../Form';

const Starships = () => {
    const {starships}=useListShips();
    console.log(starships);
  return (
    <div>
      <h1>Startships</h1>
      <Form></Form>
      <br />
      {starships.map((ship,index)=>(
        <p key={index}>{ship.name}</p>
      ))}
    </div>
  )
}

export default Starships
