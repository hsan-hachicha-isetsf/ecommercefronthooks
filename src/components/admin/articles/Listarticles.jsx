import React, { useEffect, useState } from 'react'
import { fetcharticlesPagination } from '../../../services/articleservice'

const Listarticles = () => {
  const[articles,setArticles]=useState([])
  const [currentPage,setCurrectPage]=useState(1)
  const[limit,setLimit]=useState(5)
  const [totalPages, setTotalPages] = useState(0);

  const fetchProducts=async(page,limit)=>{
    try {
      const res=await fetcharticlesPagination(page,limit)
      setArticles(res.data.products)
      setTotalPages(res.data.totalPages)
      console.log(res.data.products)
      console.log(res.data.totalPages)
    } catch (error) {
      alert("erreur de connexion au serveur")
    }
  }

useEffect(()=>{
  fetchProducts(currentPage,limit)
},[currentPage,limit])

  return (


    <div>
      Liste des articles
    </div>
  )
}

export default Listarticles
