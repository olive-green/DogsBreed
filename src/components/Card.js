import React from "react"
import classes from  "./Card.module.css"
import {Link} from "react-router-dom"


function Card(props){

    
    return <div className={classes.main}>
            <ul className={classes.list}>
                {
                    props.breeds.map(data=>{
                      return  <li className={classes.item} key={data.id}>
                            <div className={classes.card}>
                                <div className={classes.image}>
                                    <img src={data.image.url} alt={data.name}></img>
                                </div>
                                <div className={classes.content}>
                                    <h3 className={classes.title}>{data.name}</h3>
                                    <p>{data.bred_for}</p>
                                </div>
                                <div className={classes.actions}>
                                    <button><Link to={`/showBreed/`+data.name}>Read More</Link></button>
                                </div>
                            </div>
                        </li>
                    })
                }
            </ul>
    </div>
}

export default Card;