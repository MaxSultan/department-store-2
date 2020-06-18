import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import styled from 'styled-components'

export default function ItemView({ itemView, setItemView, name, price, description, id}) {

    return (
        <FormDiv>
              <Card>
                <Icon name={'window close'} onClick={() => setItemView(!itemView)} size={'large'} style={{alignSelf:'flex-end'}}/>
                <Card.Content >{id}</Card.Content>
                    <Card.Content header={name}>{name}</Card.Content>
                    <Card.Content >{description}</Card.Content>
                    <Card.Content extra>
                    <Icon name='dollar'/>{price}
                    </Card.Content>
            </Card>
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