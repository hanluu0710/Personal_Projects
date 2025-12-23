// Salespeople enter delivery request
import axios from 'axios'; 
import { useState } from 'react';

function DeliveryForm(){
    const [form,setform] = useState({address: '', date: '', size: ''});

    const handleSubmit = async () => {
        await axios.post('http://localhost:3001/api/deliveries', form);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Address"/>
            <input type="date" />
            <input type='number' placeholder='Size(kg)'/>
            <button type='submit'>Submit</button>
        </form>
    );
}

export default DeliveryForm; 