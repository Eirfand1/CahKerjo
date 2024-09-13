import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

export const GlobalContext = createContext()

export const GlobalProvider = (props) =>{
   const [data, setData] = useState([])
   const [loading, setLoading] = useState(true)
   const [filteredData, setFilteredData] = useState([])

   const url = "https://job-vacancy-api.vercel.app/api/jobs";

   useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(url);
                const resData = res.data;
                setData(resData);
                setFilteredData(resData);
            } catch (err) {
                console.error(`Error: ${err}`);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    

   return(
      <GlobalContext.Provider value={
         {
            data,
            loading,
            filteredData,
            setFilteredData
         }
      }>
         {props.children}
      </GlobalContext.Provider>
   )
}
