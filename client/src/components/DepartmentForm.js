import React, {useState} from 'react';
import { Form, Header, Icon, } from "semantic-ui-react";
import axios from 'axios';

const DepartmentForm = ({ add, toggle, setToggle, id, edit, initName }) => {
  const [name, setName] = useState(initName ? initName : "")
  
  const handleSubmit = (e) => {
    id ? (
      edit({name}, id)
    ) : (
      add({name})
    )
    setName('');
    setToggle(false)
    
  }

  const handleChange = (e) => {
    
    setName(e.target.value);
  }

    return (
      <div style={styles.formdiv}>
        
        <Form style={styles.formstyle} onSubmit={() => handleSubmit(id)}>
          <Icon name={'window close'} onClick={() => setToggle(false)} size={'large'} style={{alignSelf:'flex-end'}}/>
        <Header as="h1">{id ? 'Edit Department' : 'New Department'}</Header>
          <Form.Group widths="70%">
            <Form.Input
              label="Name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleChange}
              required
              
            />
          </Form.Group>
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </div>
    )
  
}

const styles = {
  formdiv: {
    width: '100vw',
    height: '100vh',
    backgroundColor:'#ECE9E9',
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center',
    opacity:'0.95',
    position: 'fixed',
    top: '0px',
    left:'0px',
    zIndex:'3',
  },
  formstyle: {
    width: 'auto',
    height: 'auto',
    padding: '30px',
    backgroundColor:'white',
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center',
    alignSelf: 'center',
    opacity:'1',
    zIndex:'3',
  }
}

export default DepartmentForm;