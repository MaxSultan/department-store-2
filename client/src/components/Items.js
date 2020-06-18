import React, {useState} from 'react'
import Item from './Item'
import { Button, Card } from 'semantic-ui-react'
import styled from 'styled-components';
import Axios from 'axios';
import ItemForm from './ItemForm'

export default function Items({ addItem, items, setItems, }) {
    const [toggleItemForm, setToggleItemForm] = useState(false)
    

    async function deleteItem(departmentId, id){
        const res = await Axios.delete(`/api/departments/${departmentId}/items/${id}`)
            setItems(items.filter(i => i.id !== res.data.id))
    }

    return (
        <>
        <GridDiv>
            {/* add a way to show the department name */}
            {items.map(i => (
             <Card>
                <Item id={i.id} name={i.name} price={i.price} description={i.description} departmentId={i.department_id} deleteItem={deleteItem}></Item>
                
                <Button color='blue'>Edit Item</Button>
                
                
            </Card>
            ))}
         <Button onClick={() => setToggleItemForm(!toggleItemForm)} >Add Item</Button>
        </GridDiv>
        {toggleItemForm && <ItemForm departmentId={items[0].department_id} toggleItemForm={toggleItemForm} setToggleItemForm={setToggleItemForm} add={addItem}/>}
        </>
        //if there are no items make it so the add items button still appears
        )}

        const GridDiv = styled.div`
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        margin-top: 50px;
        `