import React, {useState} from 'react'
import ItemView from './ItemView'
import { Button } from 'semantic-ui-react'

export default function Item({ name, price, description, id, department_id, deleteItem }) {
    const [itemView, setItemView] = useState(false)
    return (
        <div>
            <h1>{name}</h1>
            <h3>{price}</h3>
            <h4>{description}</h4>
            <Button color='green'onClick={() => setItemView(!itemView)}>Show Item</Button>
            <Button color='red' onClick={()=> deleteItem(department_id,id)}>Delete Item</Button>
            {itemView && <ItemView id={id} name={name} price={price} description={description} itemView={itemView} setItemView={setItemView}/>}
        </div>
    )
}
