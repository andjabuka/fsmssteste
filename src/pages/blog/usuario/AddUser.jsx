import React, { useState } from 'react'; 
import ReactQuill from "react-quill";
 
import EditorToolbar, { modules, formats } from "../EditorToolbar";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../style/Add.css';  

function AddUser({ setRefreshKey }) {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    title: '',
    description: '',
    image: '',  
    imageSource: '',
    documentpdf: '',
    category: '',   
    information: '',
    actor:'',
  });

  const [isError, setError] = useState(null);

  const handleChange = (field) => (event) => {
    setUserInfo({
      ...userInfo,
      [field]: event.target.value
    });
  };

  const onDescriptionChange = (value) => {
    setUserInfo({ ...userInfo, description: value });
  };

  const handleSubmit = async () => {
    setError(null);
    const plainDescription = stripTags(userInfo.description);
    if (plainDescription.length < 50) {
      setError('A descrição precisa ter pelo menos 50 caracteres.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:8080/blog/create', userInfo);
      if (res.data.success) {
        navigate('/PostList');
      }
    } catch (error) {
      setError('Ocorreu um erro ao enviar o formulário.');
    }
  };

  const stripTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  return (
    <div className="add-container">
      <div className="form-container">
        <form onSubmit={(e) => e.preventDefault()} className="add-form">
                    
          <div className="form-group">
            <button type="button" onClick={handleSubmit} className="btn btn-primary">Publicar</button>
          </div>

          <div className="form-group">
            <label>Título <span className="required">*</span></label>
            <input
              type="text"
              value={userInfo.title}
              onChange={handleChange('title')}
              className="form-control"
              placeholder="Título"
              required
            />
          </div>

          <div className="form-group">
            <label>Escritor <span className="required">*</span></label>
            <input
              type="text"
              value={userInfo.actor}
              onChange={handleChange('actor')}
              className="form-control"
              placeholder="Escritor"
              required
            />
          </div>

          <div className="form-group">
            <label>Imagem <span className="required">*</span></label>
            <input
              type="text"
              value={userInfo.image}
              onChange={handleChange('image')}
              className="form-control"
              placeholder="URL da Imagem"
              required
            />
          </div>

          <div className="form-group">
            <label>Fonte da Imagem <span className="required">*</span></label>
            <input
              type="text"
              value={userInfo.imageSource}
              onChange={handleChange('imageSource')}
              className="form-control"
              placeholder="Fonte da Imagem"
              required
            />
          </div>

          <div className="form-group">
            <label>Documento</label>
            <input
              type="text"
              value={userInfo.documentpdf}
              onChange={handleChange('documentpdf')}
              className="form-control"
              placeholder="Documento PDF"
            />
          </div>

          <div className="form-group">
            <label>Categoria <span className="required">*</span></label>
            <select className="form-control" value={userInfo.category} onChange={handleChange('category')} required>
              <option value="">Selecione uma categoria</option>
              <option value="co">Coluna de Opinião</option>
              <option value="ccs">Conversando com Seguridade</option>
              <option value="curadoria">Curadoria</option>
              <option value="nota">Nota</option>
              <option value="observativa">ObservActiva</option>
            </select>
          </div>

          <div className="form-group">
            <label>Descrição <span className="required">*</span></label>
            <EditorToolbar toolbarId={'t1'} />
            <ReactQuill
              theme="snow"
              value={userInfo.description}
              onChange={onDescriptionChange}
              placeholder={"Escreva algo incrível..."}
              modules={modules('t1')}
              formats={formats}
            />
          </div>

          {isError && <div className="error-message">{isError}</div>}
        </form>
      </div>
    </div>
  );
}

export default AddUser;
