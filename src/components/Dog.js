import React, {useState, useEffect } from "react"
// import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import "./Dog.css";

function Dog(props) {

    const [dog,setDog]=useState([]);

    useEffect(() => {

        async function name() {
            const res = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${props.match.params.name}`)
            const data = await res.json();
            console.log(data);
            setDog(data[0]);
        }
        name();
    }, [])
    console.log(props)

    return <section>
        <article className="article">
            <header className="header">
                <h1 className="headline">
                    {dog.name}   </h1>
                <div>
                  
                    <h2>Breed</h2>
                    <span>{dog.bred_for}</span>
                    <br />
                  
                    <h2>Origin</h2>
                    <span>{dog.origin}</span>
                    
                </div>
            </header>


            <h2>Qualities</h2>
            <p>{dog.temperament}</p>

            
            
            <h3>Life Span</h3>
            <p>{dog.life_span}</p>
            
        </article>
    </section>
}

export default Dog;