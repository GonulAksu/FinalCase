import React from 'react'
import useListShips from '../../context/ShipsContext'

const SearchList = () => {
    const {searchApi}=useListShips();
    console.log(searchApi);
  return (
    <div>
      <hr />
      {
        searchApi.map((Sship,index)=>(
            <p key={index}>{Sship.name}</p>
        ))
      }
    </div>
  )
}

export default SearchList
