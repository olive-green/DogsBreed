import React,{useState,useEffect} from "react"
import Card from "./Card";


function Breed(props)
{

    const [breeds,setBreeds]=useState([])
    const [isLoading,setLoading]=useState(true)

    useEffect( ()=>{
        async function fetchdata(){
            const response= await fetch("https://api.thedogapi.com/v1/breeds?limit=20");
            const data=await response.json();
            setBreeds(data);
            setLoading(false)
            console.log(data);
         }
         fetchdata();
    },[])
    // console.log(props)

    if(isLoading){
        return <section>
            <h1>Loading.....</h1>
        </section>
    }

    return  <main>
        <Card breeds={breeds}/>
    </main>
}
export default Breed;
