import React,{useState} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Card from 'react-bootstrap/Card';

const OneService=()=>{
    const [count, setCount] = useState(0);
    const [service, setService] = useState({});
    const {id} = useParams();
    if(count==0){
        axios.get(`http://localhost:5000/services/${id}`)
        .then((res)=> { 
            setService(res.data);
        })
        .catch((err)=>console.log(err));
        setCount(1);
    }

    return(
        <>
            <div style={{width: '70%', backgroundColor: '#252525', color:'white', margin: 'auto', marginTop: '50px', padding: '10px'}}>
            <Card style={{ width: '90%', margin: 'auto', padding: '25px' }}>
            <Card.Body>
                <h1 style={{color: 'black', marginBottom:'10%'}}>{service.name}</h1>
                {/* <Card.Title style={{color: 'black'}}>Name: {service.name}</Card.Title> */}
                <Card.Subtitle className="mb-2 text-muted">Category: {service.category}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Features: {service.features}</Card.Subtitle>
                <Card.Text style={{color: 'black'}}>Description: {service.description}</Card.Text>
            </Card.Body>
            </Card>
            </div>
        </>
    )

}

export default OneService;