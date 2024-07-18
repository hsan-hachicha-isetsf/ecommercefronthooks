import React, { useEffect, useState } from 'react'
import { deletearticle, fetcharticlesPagination } from '../../../services/articleservice'
import Affichearticle from './Affichearticle'
import Pagination from './Pagination'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import Headerarticle from './Headerarticle'
import Insertarticle from './Insertarticle';


const Listarticles = () => {
  const[articles,setArticles]=useState([])
  const [currentPage,setCurrentPage]=useState(1)
  const[limit,setLimit]=useState(5)
  const [totalPages, setTotalPages] = useState(0);
  const [searchText, setSearchText] = useState('');
const[show,setShow]=useState(false)

  const fetchProducts=async(page,limit,searchText)=>{
    try {
      const res=await fetcharticlesPagination(page,limit,searchText)
      setArticles(res.data.products)
      setTotalPages(res.data.totalPages)
  
    } catch (error) {
      alert("erreur de connexion au serveur")
    }
  }

useEffect(()=>{
  fetchProducts(currentPage,limit,searchText)
},[currentPage,limit,searchText])

const handlePrevPage = () => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
};
const handleNextPage = () => {
  if (currentPage < totalPages) {
    setCurrentPage(currentPage + 1);
  }
};
const handlePageChange = (page) => {
  setCurrentPage(page);
};
const handleLimitChange = (e) => {
  setLimit(parseInt(e.target.value, 10));
  setCurrentPage(1);  
};

const handleSearchChange = (event) => {
  setSearchText(event.target.value);
 
};

const handleDeletearticle = async (id,ref) => {
    
  confirmAlert({
    title: "Confirm delete...",
    message: " supprimer l' article: " + ref,
    buttons: [
    {
    label: 'Oui',
    onClick: () => deletearticle(id)
     .then(res=>fetchProducts(currentPage,limit,''))
    
    .catch(error=>console.log(error))
    },
    {
    label: 'Non',
    }
    ]
    });

  }
const handleshow=()=>{
  setShow(true)
}
const handleclose=()=>{
  setShow(false)
}

  return (


    <div>
      <button className='new' onClick={handleshow}>
      
      <i className="fa-solid fa-plus-square"></i> Nouveau
   
    </button>
     {show &&  <Insertarticle
     show={show}
     handleclose={handleclose}
     fetchProducts={fetchProducts}
     limit={limit}
     setArticles={setArticles}
     articles={articles}
     />
}
     <Headerarticle
    searchText={searchText}
    handleSearchChange={handleSearchChange}
    />



      <Affichearticle articles={articles}
      handleLimitChange={handleLimitChange}
      limit={limit}
      handleDeletearticle={handleDeletearticle}
   
      />
      <Pagination handlePrevPage={handlePrevPage}
      handleNextPage={handleNextPage}
      handlePageChange={handlePageChange}
      totalPages={totalPages}
      currentPage ={currentPage }
      />



    </div>
  )
}

export default Listarticles
