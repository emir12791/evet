import React from 'react';
import { Form, FormControl, Button, Container } from 'react-bootstrap';
import "./searchbar.scss";
import { FaSearch } from "react-icons/fa"

const Searchbar = () => {
  return (
    <Form className="searchbar">
      <FormControl className="bar"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <Button className='buton' variant="outline-success"><FaSearch/></Button>

    </Form>
  );
}

export default Searchbar;
