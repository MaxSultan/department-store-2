import React,{useState} from 'react'
import { Form, Icon } from 'semantic-ui-react'
import styled from 'styled-components'


export default function ItemForm({ add, setToggleItemForm, toggleItemForm, departmentId }) {
    const [name, setName]= useState('')
    const [price, setPrice] = useState(null)
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newItem = {name: name, price: price, description: description}
        add(departmentId, newItem)
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
        <FormDiv>
        <FormStyle onSubmit={() => handleSubmit()}>
        <Icon name={'window close'} onClick={() => setToggleItemForm(false)} size={'large'} style={{alignSelf:'flex-end'}}/>
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
            <Form.Input
            label="Item Description"
            name="description"
            placeholder="Enter a description of the item"
            value={description}
            onChange={handleChange}
            required
            />
            <Form.Button>Submit</Form.Button>
        </FormStyle>
        </FormDiv>
    )
}



    const FormDiv = styled.div`
      width: 100vw;
      height: 100vh;
      background-color: #ECE9E9;
      display: flex;
      flex-direction:column;
      justify-content:center;
      align-items: center;
      opacity:0.95;
      position: fixed;
      top: 0px;
      left:0px;
      z-index:3;
      `
   
    const FormStyle = styled.form`
      width: auto;
      height: auto;
      padding: 30px;
      background-color:white;
      display: flex;
      flex-direction:column;
      justify-content:center;
      align-items: center;
      align-self: center;
      opacity:1;
      z-Index:3;
    `
  