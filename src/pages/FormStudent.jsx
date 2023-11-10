import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default function FormStudent({ handleAddStudent,item,handleUpdate}) {
  const [lgShow, setLgShow] = useState(false);
  const [check,setCheck] = useState(false)
  const [student, setStudent] = useState({
    id: Date.now(),
    name: "",
    age: "",
    address: "",
    phone: "",  
    email: "",
  });
  useEffect(() => {
    if (Object.keys(item).length != 0) {
      setStudent(item);
      setCheck(true);
      setLgShow(true)
    }
  }, [item]);

  const { name, age, address, phone, email } = student;
  const handleChangeInput = (e) => {
    let nameInput = e.target.name;
    let valueInput = e.target.value;
    setStudent({ ...student, [nameInput]: valueInput });
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleAddStudent(student);
    setStudent({
      id: Date.now(),
      name: "",
      age: "",
      address: "",
      phone: "",
      email: "",
    });
  };

  //update
  const handleUpdateItem=()=>{
    handleUpdate(student), setStudent({
      id: Date.now(),
      name: "",
      age: "",
      address: "",
      phone: "",
      email: "",
    })
    setCheck(false)
  }
  return (
    <>
      <Button onClick={() => setLgShow(true)}>Add Student</Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Form Student
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Nhập tên"
            name="name"
            value={name}
            onChange={handleChangeInput}
          />
          <Form.Control
            type="text"
            placeholder="Nhập tuổi"
            name="age"
            value={age}
            onChange={handleChangeInput}
          />
          <Form.Control
            type="text"
            placeholder="Nhập Address"
            name="address"
            value={address}
            onChange={handleChangeInput}
          />
          <Form.Control
            type="text"
            placeholder="Nhập Phone"
            name="phone"
            value={phone}
            onChange={handleChangeInput}
          />
          <Form.Control
            type="text"
            placeholder="Nhập Email"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
          <Button variant="success" onClick={check ? handleUpdateItem : handleSubmitForm}>
            Submit
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
