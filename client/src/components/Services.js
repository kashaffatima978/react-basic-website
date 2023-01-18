import React,{useState} from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const Services = ()=>{
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    // const data = [{name:'kas', class:'12' }, {name:'fam', class:'12' }, {name:'hah', class:'12' }];
    if(count ===0){
        axios.get('http://localhost:5000/services/')
        .then((res)=> { 
            setData(res.data);
        })
        .catch((err)=>console.log(err));
        setCount(1);
    }

    return(
        <>
        <h1>VIEW Services</h1>
        
        {data.map((elem)=>{
            return(
                <div  className="d-flex flex-row justify-content-start align-items-center flex-md-wrap grid gap-5">
                <Card  class="p-2" style={{ width: '100%', backgroundColor: '#252525', color: 'white', margin: '20px'}}>
                <Card.Body>
                    <Card.Title >{elem.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{color: 'white'}}>{elem.category}</Card.Subtitle>
                    <Card.Text style={{color: 'white'}}>
                    {elem.features}
                    </Card.Text>
                    <Button variant="outline-dark" variant='light'><Card.Link href={`/services/${elem._id}`} style={{color: 'black'}}>View</Card.Link></Button>
                </Card.Body>
                </Card>
                </div>
            )
        })}
        </>
    )
}

export default Services;