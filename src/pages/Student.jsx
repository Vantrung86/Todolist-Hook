import React from 'react'
import Button from "react-bootstrap/Button";

export default function Student({index,item,handleDelete,handleEdit}) {
  return (
    <>
        <tr>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.address}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>
                <Button onClick={()=>handleEdit({...item})}>Edit</Button>
                <Button onClick={()=>handleDelete(item.id)}>Delete</Button>
            </td>
        </tr>
    </>
  )
}
