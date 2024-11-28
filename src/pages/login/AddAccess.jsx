import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import'./style/AddAccess.css'


function AddAccess(){
    const navigate = useNavigate();
   
    const[userInfo, setUserInfo] = useState({
        user:'',
        email:'',
        password:'',
        role:'',
    });
    const [setError] = useState(null);

    const onUserChange = (event)=> {
        setUserInfo({
            ...userInfo,
            user:event.target.value 
        });
    };

    const onEmailChange = (event)=> {
        setUserInfo({
            ...userInfo,
            email:event.target.value 
        });
    };

    const onPasswordChange = (event)=> {
        setUserInfo({
            ...userInfo,
            password:event.target.value 
        });
    };

    const onRoleChange = (event)=> {
        setUserInfo({
            ...userInfo,
            role:event.target.value 
        });
    };

    const Enviar = async() =>{
    try {
        const rest = await axios.post('http://localhost:8080/logins/create',{
           usuario: userInfo.user,
           email: userInfo.email,
           senha: userInfo.password,
           acesso: userInfo.role,

    });
    if(rest.data.success){
        navigate('/ListAccess')
    }
    } catch (error) {
        setError('Ocorreu um erro ao enviar o formulário.');
    
    }
};
    return(
        <div className="edit-container">
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
              <label className="font-weight-bold">Usuário <span className="required"> * </span></label>
              <input
              type="text"
              name="user"
              value={userInfo.user}
              onChange={onUserChange}
              className="form-control input-smaller"
              placeholder="Usuário"
              required
              />

             <label className="font-weight-bold">Email <span className="required"> * </span></label>            
             <input
              type="text"
              name="email"
              value={userInfo.email}
              onChange={onEmailChange}
              className="form-control"
              placeholder="Email"
              required
             />

             <label className="font-weight-bold">Senha <span className="required"> * </span></label>            
             <input
              type="text"
              name="password"
              value={userInfo.password}
              onChange={onPasswordChange}
              className="form-control"
              placeholder="Senha"
              required
             />
            <label className="font-weight-bold mt-2">Permissão <span className="required">*</span> </label> 
                <select className="form-control" value={userInfo.role} onChange={onRoleChange}>
                <option value="">Selecione uma permissão</option>
                  <option value="admin">Administrador</option>
                  <option value="user">Usuario</option>
                </select>                          
            </div>
         
            </form>
            </div>
           </div>
        </div>
    )
}
export default AddAccess;