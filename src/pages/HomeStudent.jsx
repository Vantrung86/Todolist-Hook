import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Table from "react-bootstrap/Table";
import ListStudent from "./ListStudent";
import FormStudent from "./FormStudent";
import Search from "./Search";
import abc from '../images/1.jpg'

export default function HomeStudent() {
  const [students,setStudents] = useState([
    {
      id:1,
      name:'trung',
      age: 10,
      address:'NB',
      phone:123455,
      email: 'adafd@'
    },
    {
      id:2,
      name:'thuan',
      age: 20,
      address:'HN',
      phone:435667,
      email: '1234@'
    },
    {
      id:3,
      name:'tung',
      age: 8,
      address:'ND',
      phone:999999,
      email: '888888@'
    },
    {
      id:4,
      name:'tu',
      age: 13,
      address:'QN',
      phone:111111,
      email: '33333@'
    },
  ]);
  //Xoa
  const handleDelete=(id)=>{
    let isConfirm=confirm('Bạn có chắc chắn muốn xoá');
    if(isConfirm){
      let result=students.filter((e)=>{
        return e.id != id
      })
      setStudents(result)
    }
  }
  //them sv
  const handleAddStudent = (obj)=>{
    if (obj.name && obj.age && obj.address && obj.phone && obj.email) {
        let result = [...students,obj];
        setStudents(result)          
    }else{
      alert("Vui lòng nhập đủ thông tin")
    }     
  }

  //search
  const handleSearch=(search)=>{
    let result=students.filter((e)=>{
        return e.name.indexOf(search) != -1
    })
    setStudents(result)
  }

  //Edit
  const [item,setItem] = useState({})
  const handleEdit = (element)=>{
    setItem(element)
  }
 
  //update
  const handleUpdate=(text)=>{
    let index = students.findIndex((student) => student.id == text.id)
    let result = [...students]
    result[index] = text;
    setStudents(result)
  }

// sap xep
const handleSortUp=()=>{
 let arr = students.sort((a,b)=>{
        return a.age - b.age
  })
  setStudents(arr)
}
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary color">
        <Container>
          <Navbar.Brand href="#home" className="text" style={{fontSize:'30px', fontWeight:'800px'}}>Student Management</Navbar.Brand>
        </Container>
      </Navbar>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>

         <FormStudent handleAddStudent={handleAddStudent} item={item} handleUpdate={handleUpdate}></FormStudent>
            
        </div>
        <div>
              <Search handleSearch={handleSearch}></Search>
        </div>
      </div>
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Age </th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

              <ListStudent data={students} handleDelete={handleDelete} handleEdit={handleEdit} ></ListStudent>      

          </tbody>
        </Table>
      </div>
      
      <div style={{textAlign:'center'}}><img src={abc} alt="" /></div>

    </>
  );
}
