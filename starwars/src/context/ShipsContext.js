import { createContext,useContext,useEffect,useState } from "react";
import axios from 'axios';
const ShipsContext=createContext();

export const ShipsProvider=({children})=>{
    const [starships,setStarships]=useState([]);
    const [name_model,setName_Model]=useState('');
    const [loa,setLoa]=useState(true);

  useEffect(()=>{
        axios(`https://swapi.dev/api/starships/?search=${name_model}
       `).then((res)=>setStarships(res.data.results))
       .catch((e)=>console.log(e))
       .finally(()=>setLoa(false));
     },[name_model]);
    
    const values={
        starships,
        setStarships,
        name_model,
        setName_Model,
        loa,
        setLoa,
    }

    return <ShipsContext.Provider value={values}>{children}</ShipsContext.Provider>
}
const useListShips=()=>useContext(ShipsContext);
export default useListShips;
