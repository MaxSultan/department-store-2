import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { Segment, Header, Button, Card } from 'semantic-ui-react';
import DepartmentForm from './DepartmentForm';
import ItemForm from './ItemForm';

export default function ProductView(props){
    const [department, setDepartment] = useState({})
    const [items, setItems] = useState([])
    const [toggle, setToggle] = useState(false)
    const [toggleItemForm, setToggleItemForm] = useState(false)

    async function addItem(itemObj){
        console.log(itemObj)
        Axios.post(`/api/departments/${props.match.params.id}/items`, {...itemObj}).then(res => { 
            setItems([...items, res.data])
        }).catch(err => console.log(err))
    }

    const editDepartment = (departmentObj, id) => {
        setToggle(!toggle)
        Axios.put(`/api/departments/${id}`, departmentObj)
        .then(res =>{
            setDepartment(res.data)
        })
        .catch(err => console.log(err))
    }

    const deleteItem = (id) => {
        Axios.delete(`/api/departments/${props.match.params.id}/items/${id}`)
        .then(res => {
            setItems(items.map(i => i.id !== res.data.id))
        })
    } 

    useEffect(()=> {
        Axios.get(`/api/departments/${props.match.params.id}`)
        .then(res => {
            setDepartment(res.data.department)
            setItems(res.data.items)

        })
        .catch(err => console.log(err))
    },[])
    return(
        <div>
            <Segment>
                <Header as='h1' style={{textAlign:'center'}}>{department.name}</Header>
                <Button onClick={() => setToggle(!toggle)}>Edit Department Name</Button>
                {toggle &&< DepartmentForm edit={editDepartment}id={props.match.params.id} initName={department.name} toggle={toggle} setToggle={setToggle}/>}
                <Button onClick={() => setToggleItemForm(!toggleItemForm)}>Add New Item</Button>
                {toggleItemForm && <ItemForm add={addItem} />}
                <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gridRowGap:'50px'}}>
                {items.map(i => {
                return( 
                    <Card style={{textAlign:'center'}}>
                        <h2>{i.name}</h2>
                        <h4>${i.price}</h4>
                        <h4>{i.description}</h4>
                        <Button onClick={() => deleteItem(i.id)}color='red' icon={'trash'}></Button>
                    </Card>
                )})}
                </div>
                <br/>
                <br/>
                <Button color='black' onClick={props.history.goBack}>Back</Button>
            </Segment>

        </div>
    )
}