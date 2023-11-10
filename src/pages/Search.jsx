import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Search({handleSearch}) {
  const [search,setSearch] = useState("");
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e)=>setSearch(e.target.value)}
          value={search}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={()=>handleSearch(search,setSearch(""))}>
          Search
        </Button>
      </InputGroup>
    </>
  );
}
