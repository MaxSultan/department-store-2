import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { Button } from 'semantic-ui-react'
import DepartmentForm from './DepartmentForm'
import Items from './Items'


export default function Departments(){
    const [departments, setDepartments] = useState([])
    const [toggle, setToggle] = useState(false)
    const [items, setItems] = useState([]) 

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

        setToggle(!toggle)
        Axios.put(`api/departments/${id}`, departmentObj)
        .then(res =>{
            setDepartments([res.data, ...departments])
        })
        .catch(err => console.log(err))
    }

    async function getItems(departmentId){
        const res = await Axios.get(`/api/departments/${departmentId}/items`)
        setItems(res.data)
    }

    async function addItem(departmentId, itemObj){
       const res =  Axios.post(`/api/departments/${departmentId}/items`, {...itemObj})
            setItems([...items, res.data])
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
                    <Button onClick={()=> getItems(d.id)} color='green'>View</Button>
                    <Button onClick={() => addItem} color='blue'>Add Item</Button>
                    <Button onClick={() => deleteDepartment(d.id)}color='red'>Delete</Button>
                </div>)
            })}

            {items.length > 0 ?  
            <Items 
            items={[...items]} 
            setItems={setItems}
            addItem={addItem}
            toggle={toggle}
            setToggle={setToggle}
            /> : <div><h4>no items</h4><Button onClick={() => addItem()}>Add Item</Button></div> }
            
            <Button onClick={() => setToggle(!toggle)}>Create New Department</Button>
            {toggle && <DepartmentForm add={addDepartment} edit={editDepartment} toggle={toggle} setToggle={setToggle} />}
        </div>
    )
}