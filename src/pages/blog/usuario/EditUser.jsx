import React, { useState, useEffect } from 'react'; 
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "../EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "../EditorToolbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import './style/EditUser.css';  
  
function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams(); // Pega o ID da URL

  const [userInfo, setUserInfo] = useState({
    title: '',
    description: '',
    image: '',  
    imageSource: '',   
    information: '',
    documentpdf: '',
    actor:'',
  });

  const [isError, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/blog/post/${id}`);
        setUserInfo({
          title: res.data.title,
          actor: res.data.actor,
          image: res.data.image,
          imageSource: res.data.imageSource,
          description: res.data.description,
          information: res.data.information,
          documentpdf: res.data.documentpdf,
        });
      } catch (error) {
        setError('Erro ao carregar os dados do post.');
      }
    };
    fetchData();
  }, [id]);

  const onDescriptionChange = (value) => {
    setUserInfo({
      ...userInfo,
      description: value
    });
  };

  const onChangeValue = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value
    });
  };
  const onDocumentPdf = (event) => {
    setUserInfo({
      ...userInfo,
      documentpdf: event.target.value
    });
  };

  const Enviar = async () => {
    // Evitar envio duplo
    setError(null);
    const plainDescription = stripTags(userInfo.description);
    if (plainDescription.length < 50) {
      setError('A descrição precisa ter pelo menos 50 caracteres.');
      return;
    }

    try {
      const res = await axios.put(`http://localhost:8080/blog/update/${id}`, {
        title: userInfo.title,
        actor: userInfo.actor,
        image: userInfo.image,
        imageSource: userInfo.imageSource,  
        description: userInfo.description,
        information: userInfo.information,
        documentpdf: userInfo.documentpdf,
      });

      if (res.data.success) {
        navigate('/');
      }
    } catch (error) {
      setError('Ocorreu um erro ao atualizar o post.');
    }
  };

  const stripTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  return (
    <div className="edit-container">
      <div className="container">
        <div className="row">
          <form onSubmit={(e) => e.preventDefault()} className="update-forms">
            <div className="form-group col-sm-12 text-right">
              <button
                type="button"
                onClick={Enviar}
                className="btn btn-primary"
              >
                Atualizar Post
              </button>
            </div>
          
            <div className="form-row">
              <div className="form-group col-md-12 editor">
                <label className="font-weight-bold">Título <span className="required"> * </span></label>
                <input
                  type="text"
                  name="title"
                  value={userInfo.title}
                  onChange={onChangeValue}
                  className="form-control"
                  placeholder="Título"
                  required
                />

                <label className="font-weight-bold">Escritor <span className="required"> * </span></label>
                <input
                  type="text"
                  name="actor"
                  value={userInfo.actor}
                  onChange={onChangeValue}
                  className="form-control"
                  placeholder="Escritor"
                  required
                />

                <label className="font-weight-bold">Imagem <span className="required"> * </span></label>
                <input
                  type="text"
                  name="image"
                  value={userInfo.image}
                  onChange={onChangeValue}
                  className="form-control"
                  placeholder="URL da Imagem"
                  required
                />
                <label className="font-weight-bold">Fonte da Imagem <span className="required"> * </span></label>
                <input
                  type="text"
                  name="imageSource"
                  value={userInfo.imageSource}
                  onChange={onChangeValue}
                  className="form-control"
                  placeholder="Fonte da Imagem"
                  required
                />
                <label className="font-weight-bold">Documento </label>
                <input
                  type="text"
                  name="documentPdf"
                  value={userInfo.documentpdf}
                  onChange={onDocumentPdf}
                  className="form-control"
                  placeholder="Documento PDF"
                  required
                />

                <label className="font-weight-bold">Descrição <span className="required"> * </span></label>
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
              <br />
              <br />
              {isError && <div className="errors"> {isError} </div>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
