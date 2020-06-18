import React from 'react'
import Item from './Item'
import { Button, Card } from 'semantic-ui-react'
import styled from 'styled-components';
import Axios from 'axios';

export default function Items({ addItem, items, setItems }) {

    async function deleteItem(departmentId, id){
        const res = await Axios.delete(`/api/departments/${departmentId}/items/${id}`)
            setItems(items.filter(i => i.id !== res.data.id))
    }

    return (
        <GridDiv>
            {/* add a way to show the department name */}
       {items.map(i => (
             <Card>
                <Item {...i}></Item>
                <Button color='blue'>Edit Item</Button>
                <Button color='red' onClick={()=> deleteItem(i.department_id,i.id)}>Delete Item</Button>
            </Card>
        ))}
         <Button onClick={() => addItem()}>Add Item</Button>
        </GridDiv>
        //if there are no items make it so the add items button still appears
        )}

        const GridDiv = styled.div`
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        margin-top: 50px;
        `