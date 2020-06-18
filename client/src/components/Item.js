import React from 'react'

export default function Item({ name, price, description }) {
    return (
        <div>
            <h1>{name}</h1>
            <h3>${price}</h3>
            <h4>{description}</h4>
        </div>
    )
}
