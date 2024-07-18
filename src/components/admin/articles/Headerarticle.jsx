import React from 'react'
import "./article.css"
import {  Form, FormControl } from 'react-bootstrap';

import { Link } from 'react-router-dom'
const Headerarticle = ({searchText,handleSearchChange}) => {
  return (
    
    <div className="table-container-header">
    <div className="toolbar">
      
      
      <Form className="d-flex search-form">
     
        <FormControl
          type="search"
          placeholder="Rechercher des articles..."
          value={searchText}
          onChange={handleSearchChange}
          className="me-2"
          aria-label="Search"
        />
       
      </Form>
    </div>
  </div>
  )
}

export default Headerarticle
