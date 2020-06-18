import React,{useState} from 'react'
import { Form } from 'semantic-ui-react'

export default function ItemForm({ add }) {
    const [name, setName]= useState('')
    const [price, setPrice] = useState(null)
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        const newItem = {name: name, price: price, description: description}
        add(newItem)
        setName('')
        setPrice('')
        setDescription('')
    }


    const handleChange = (e) => {
        if(e.target.name ==='name'){
            setName(e.target.value)
        } else if(e.target.name === 'price'){
            setPrice(e.target.value)
        } else if(e.target.name === 'description'){
            setDescription(e.target.value)
        }else{
            return
        }
    }
    return (
        <Form onSubmit={() => handleSubmit()}>
            <h1>Create new Item</h1>
            <Form.Input
            label="Name"
            name="name"
            placeholder="Enter and Item Name"
            value={name}
            onChange={handleChange}
            required
            />
            <Form.Input
            label="Price"
            name="price"
            placeholder="Enter Price"
            value={price}
            onChange={handleChange}
            required
            />
            <Form.TextArea
            label="Item Description"
            name="description"
            placeholder="Enter a description of the item"
            value={description}
            onChange={handleChange}
            required
            />
            <Form.Button>Submit</Form.Button>
        </Form>
    )
}
