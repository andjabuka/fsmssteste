import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

 


function AddActor(){
    const navigate = useNavigate();
   
    const[userInfo, setUserInfo] = useState({
        nome:'',
        perfil:'',
        biografia:''
    });
    const [setError] = useState(null);

    const onNomeChange = (event)=> {
        setUserInfo({
            ...userInfo,
            nome:event.target.value 
        });
    };

    const onPerfilChange = (event)=> {
        setUserInfo({
            ...userInfo,
            perfil:event.target.value 
        });
    };

    const onBiografiaChange = (event)=> {
        setUserInfo({
            ...userInfo,
            biografia:event.target.value 
        });
    };
    const Enviar = async() =>{
    try {
        const rest = await axios.post('http://localhost:8080/equipe/create',{
           nome: userInfo.nome,
           perfil: userInfo.perfil,
           biografia: userInfo.biografia,

    });
    if(rest.data.success){
        navigate('/ListActor')
    }
    } catch (error) {
        setError('Ocorreu um erro ao enviar o formulário.');
    
    }
};
    return(
        <div className="edit-container">
            <button 
                    className="btn3"
                    onClick={() => navigate('/ListActor')}
                >
                    Voltar
                </button>
            <div className="container-ADD">
             <div className="row">
              <form onSubmit={(e) => e.preventDefault()} className="update-forms">
              <div className="form-group col-sm-12 text-right">
              <button
                type="button"
                onClick={Enviar}
                className="btn btn-primary custom-btn">
                ADD
              </button>
              </div>
              <div className="form-row">
              <div className="form-group col-md-12 editor">
              
              </div>
              <label className="font-weight-bold">Escritor <span className="required"> * </span></label>
              <input
              type="text"
              name="nome"
              value={userInfo.nome}
              onChange={onNomeChange}
              className="form-control input-smaller"
              placeholder="Escritor"
              required
              />

             <label className="font-weight-bold">Foto <span className="required"> * </span></label>            
             <input
              type="text"
              name="foto"
              value={userInfo.email}
              onChange={onPerfilChange}
              className="form-control"
              placeholder="Foto"
              required
             />

             <label className="font-weight-bold">Biografia <span className="required"> * </span></label>            
             <input
              type="text"
              name="biografia"
              value={userInfo.biografia}
              onChange={onBiografiaChange}
              className="form-control"
              placeholder="Biografia"
              required
             />
                                    
            </div>
         
            </form>
            </div>
           </div>
        </div>
    )
}
export default AddActor;