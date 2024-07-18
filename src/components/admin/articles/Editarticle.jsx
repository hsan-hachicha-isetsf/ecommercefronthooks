
import React, { useEffect, useState } from 'react'
import {fetchscategories} from "../../../services/scategorieservice"
import { Modal } from 'react-bootstrap'
import "./insertarticle.css"
import axios from "axios"
import { FilePond,registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)
const Editarticle = ({showe,art}) => {
  const[article,setArticle]=useState(art)
  const[scategories,setScategories]=useState([])
  const [files, setFiles] = useState([]);
  const loadscategories=async()=>{
    
    try {
      const res = await fetchscategories()
     
      setScategories(res.data);
     
   
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    
    loadscategories()  
  }, [])
  return (
    <div className="form-container">
    <Modal show={showe} >
    <form  className="article-form">
    <Modal.Header closeButton>
<h2>Ajouter Article</h2>
</Modal.Header>
<Modal.Body>

      <div className="form-grid">
      
        <div className="form-group">
          <label htmlFor="title">Référence</label>
          <input
            type="text"
            id="reference"
            value={article.reference}
            onChange={(e) => setArticle({...article,reference:e.target.value})}
            className="form-input"
            placeholder="Entrez référence article"
          />
        
        </div>
        <div className="form-group">
          <label htmlFor="description">Désignation</label>
          <input
          type="text"
            id="designation"
            value={article.designation}
            onChange={(e) => setArticle({...article,designation:e.target.value})}
            className="form-input"
            placeholder="Entrez la désignation article"
          />
        </div>
        <div className="form-group">
          <label htmlFor="marque">Marque</label>
          <input
            type="text"
            id="marque"
            value={article.marque}
            onChange={(e) => setArticle({...article,marque:e.target.value})}
            className="form-input"
            placeholder="Entrez marque"
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantite">Quantité</label>
          <input
            type="number"
            id="qtestock"
            value={article.qtestock}
            onChange={(e) => setArticle({...article,qtestock:e.target.value})}
            className="form-input"
            placeholder="Entrez quantité stock"
          />
        </div>
        <div className="form-group">
          <label htmlFor="prix">Prix</label>
          <input
            type="number"
            required
            id="prix"
            value={article.prix}
            onChange={(e) => setArticle({...article,prix:e.target.value})}
            className="form-input"
            placeholder="Entrez Quantité stock"
          />
        </div>

        <div className="form-group">
          <label htmlFor="prix">Catégorie</label>
          <select
              id="category"
              className="form-control"
              value={article.scategorieID}
              onChange={(e) => setArticle({...article,scategorieID:e.target.value})}
            >
              {scategories.map((scat,index)=>
              <option key={index} value={scat._id}>{scat.nomscategorie}  </option>
            )}
             </select>
          
        </div>
        <div className="form-group">
          <label htmlFor="prix">Image</label>
          <div style={{ width: "80%", margin: "auto", padding: "1%" }}>
     <FilePond
                   files={files}
                   acceptedFileTypes="image/*"
                   onupdatefiles={setFiles}
                   allowMultiple={true}
                 
                   name="file"
                      
          />
    </div> 
    </div>   

      </div>
      
      </Modal.Body>
      <Modal.Footer>
      <button type="button" className="form-submit-button" onClick={(e)=>handleSubmit(e)}>Enregistrer</button>
        <button type="reset" className="form-reset-button" onClick={()=>handleclose()}>Annuler</button>

      </Modal.Footer>
    </form>
    </Modal>
  </div>
  )
}

export default Editarticle
