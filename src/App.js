import React,{useEffect,useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID = "087d32f8";
  const APP_KEY = "9795f7e20454bce8709d1a5c54470258";

  

  useEffect( () =>{
    console.log('effect has been running');
  },[]);

  const getRecipes = async() =>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json()
    console.log(data)
  }



  return (
    <div className = "App">
      
      <form className="search-form">
        <input className="search-bar" type="text"></input>
        <button  className="search-button" type="submit">Search</button>
      </form>
      
    </div>

  );
};

export default App;
