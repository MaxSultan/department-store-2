import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import DepartmentForm from './DepartmentForm'


export default function Departments(){
    const [departments, setDepartments] = useState([])
    const [toggle, setToggle] = useState(false)

    const addDepartment = (depObj) => {
        
        Axios.post(`api/departments`, depObj)
        .then( res => {
            setDepartments([...departments, res.data])
        })
        .catch(err => console.log(err))
    }

    const deleteDepartment = (id) => {
        Axios.delete(`/api/departments/${id}`)
        .then((res) => {
           const filtered =  departments.filter(d => d.id !== res.data.id)
           setDepartments([...filtered])
        })
        .catch(err => console.log(err))        
    }

    const editDepartment = (departmentObj, id) => {
        //toggle my form to show
        setToggle(!toggle)
        //populate the name field with data

        //use handle submit in my form
        //update the state
        
        // update the api
        Axios.put(`api/departments/${id}`, departmentObj)
    .then(res =>{
        setDepartments([res.data, ...departments])
    })
    .catch(err => console.log(err))
    }

    useEffect(() => {
        Axios.get('/api/departments').then(res => setDepartments(res.data)).catch(err => console.log(err))
    },[])
    return(
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h1>Departments</h1>
        {departments.map(d => {
        return (
        <div style={{display:'flex', width:'70vw', justifyContent:'space-between'}}>
            <h3>{d.name}</h3>
            <Button as={Link} to={`/departments/${d.id}`} color='green'>View</Button>
            <Button onClick={() => deleteDepartment(d.id)}color='red'>Delete</Button>
        </div>)
        })}
        <Button onClick={() => setToggle(!toggle)}>Create New Department</Button>
       {toggle && <DepartmentForm add={addDepartment} edit={editDepartment} toggle={toggle} setToggle={setToggle} />}
    </div>
    )
}