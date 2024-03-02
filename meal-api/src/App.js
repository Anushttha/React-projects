import {useEffect, useState} from "react";
import axios from 'axios';
import "./style.css"
export const App = () => {

  const [item, setItem] = useState([]);
  
  useEffect(()=>{

    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
       .then((res)=>{
        setItem(res.data.meals)
       })
       .catch((err)=>{
        console.log("error")
       })

  },[])
  



  const itemList= item.map(({strMeal,strMealThumb,idMeal})=>{
    return(
      <section className="card">
      <img src={strMealThumb}/>
      <section className="content">
        <p>{strMeal}</p>
        <p>#{idMeal}</p>
      </section>
      </section>
    )
  })
 
  return <div className="items-container">{itemList}</div>
}

export default App;
