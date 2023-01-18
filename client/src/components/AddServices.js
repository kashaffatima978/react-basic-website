import React,{useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import './add.css';

const AddServices = ()=>{
    const [name, setName]  = useState('');
    const [category, setCategory]  = useState('');
    const [feature, setFeature]  = useState('');
    const [description, setDescription]  = useState('');

    const[err, setErr]= useState('');

    const submitService =()=>{
        if(name.length>0 && category.length>0 && feature.length>0 && description.length>0){
            setErr('');
            axios
        .post('http://localhost:5000/services/', {name: name, category: category, feature: feature, description: description})
        .then(response => {
            if(response.status == '200'){
                alert('service posted!');
            }
        })
        .catch(function (error) {
            console.error(error);
        });
        }
        else{
            setErr('Information not completed');
        }

    }
    
    return(
        <>
        <div className='main'>
        <h1>Add Services</h1>
            <label>Name</label>
            <input placeholder='enter service name' aria-multiline='true' value={name} onChange={event => setName( event.target.value)}></input>
            <br/>
            <label>Category</label>
            <input placeholder='enter service category' aria-multiline='true' value={category} onChange={event => setCategory( event.target.value)}></input>
            <br/>
            <label>Features</label>
            <input placeholder='enter service features' aria-multiline='true' value={feature} onChange={event => setFeature( event.target.value)}></input>
            <br/>
            <label>Desciption</label>
            <textarea placeholder='enter service description' aria-multiline='true' value={description} onChange={event => setDescription( event.target.value)}></textarea>
            <br/>
            <br/>
            <p>{err}</p>
            <Button variant="outline-dark" variant='light' onClick={submitService}>Submit</Button>
            
        </div>
        </>
    )
}

export default AddServices;