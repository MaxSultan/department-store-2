import React, {useState, useEffect} from 'react';
import Axios from 'axios';


export default function Departments(){
    const [departments, setDepartments] = useState([])

    useEffect(() => {
        Axios.get('/api/departments').then(res => setDepartments(res.data)).catch(err => console.log(err))
    },[])
    return(
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h1>Departments</h1>
        {departments.map(d => <div><h3>{d.name}</h3></div>)}
    </div>
    )
}