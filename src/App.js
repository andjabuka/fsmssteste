import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import AddUser from './pages/blog/usuario/AddUser';
import PostListUser from './pages/blog/usuario/PostListUser';
import AllPost from './pages/blog/AllPost';
import Login from './pages/login/Login';
import AddAccess from './pages/login/AddAccess';
import ListAccess from './pages/login/ListAccess';
import Dashboard from './pages/login/Dashboard';
import Add from './pages/blog/administrador/Add';
import FullPost from './pages/blog/FullPost';
import Edit from './pages/blog/administrador/Edit';
import EditUser from './pages/blog/usuario/EditUser';
import Category from './pages/blog/Category';
import PostList from './pages/blog/administrador/PostList';
import ProtectedRoute from './context/ProtectedRoute'; 
import Calendar from './pages/calendar/Calendar';
import ErrorPage from './context/ErrorPage';
import ListActor from './pages/actor/ListActor';
import AllActor from './pages/actor/AllActor';
import AddActor from './pages/actor/AddActor';
import Home from './pages/Home';
import Plataforma from './pages/Plataforma';
import Equipe from './pages/Equipe'
import Calendario from './pages/Calendario';
import Laboratorio from './pages/Laboratorio';
import Observa from './pages/Observa';
import Rbce from './pages/Rbce';
import Somos from './pages/Somos'
import Historia from './pages/Historia';
import Todos from './pages/Todos'
import Curadoria from './pages/Curadoria'
import Opniao from './pages/Opniao'
import Conversando from './pages/Conversando'
import Nota from './pages/Nota'
import Contato from './pages/Contato'
import Campanha from './pages/Campanha';
import './styles/Main.css';



function App() {
  return (
    
    <AuthProvider>
      <Router basename="/">
        <Routes>
        <Route path="/" element={<Home />} />

                <Route path="/plataforma" element={<Plataforma />} />
                <Route path="/equipe" element={<Equipe />} />
                <Route path="/calendario" element={<Calendario />} />
                <Route path="/laboratorio" element={<Laboratorio />} />
                <Route path="/observa" element={<Observa />} />
                <Route path="/rbce" element={<Rbce />} />
                <Route path="/somos" element={<Somos />} />
                <Route path="/historia" element={<Historia />} />
                <Route path="/todos" element={<Todos />} />
                <Route path="/curadoria" element={<Curadoria />} />
                <Route path="/opniao" element={<Opniao />} />
                <Route path="/conversando" element={<Conversando />} />
                <Route path="/nota" element={<Nota />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/campanha" element={<Campanha />} />
                <Route path="/login" element={<Login />} />

          <Route path="/" element={<AllPost />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/FullPost/:id" element={<FullPost />} />
          <Route path="/Calendar" element={<Calendar />} />
         
          <Route path="/AllActor" element={<AllActor />} />
          
          <Route path="/ListActor" element={<ListActor/>} />

          <Route 
          path="/AddActor" 
          element={<ProtectedRoute element={<AddActor/>} requiredAccess={['admin']} />} 
          />

          <Route
           path="/ListActor" 
           element={<ProtectedRoute element={<ListActor />} requiredAccess={['admin']} />}
          />
          <Route 
            path="/PostListUser" 
            element={<ProtectedRoute element={<PostListUser />} requiredAccess={['user']} />} 
          />
          <Route 
            path="/AddUser" 
            element={<ProtectedRoute element={<AddUser />} requiredAccess={['user']} />} 
          />        

          <Route 
            path="/Dashboard" 
            element={<ProtectedRoute element={<Dashboard />} requiredAccess={['admin']} />} 
          />
          
          <Route path="/Login" element={<Login />} />
          <Route 
            path="/AddAccess" 
            element={<ProtectedRoute element={<AddAccess />} requiredAccess={['admin']} />} 
          />
          <Route 
            path="/ListAccess" 
            element={<ProtectedRoute element={<ListAccess />} requiredAccess={['admin']} />} 
          />
          <Route 
            path="/Add" 
            element={<ProtectedRoute element={<Add />} requiredAccess={['admin']} />} 
          />
          <Route 
            path="/Edit/:id" 
            element={<ProtectedRoute element={<Edit />} requiredAccess={['admin']} />} 
          />
          <Route 
            path="/EditUser/:id" 
            element={<ProtectedRoute element={<EditUser />} requiredAccess={['user']} />} 
          />
          <Route 
            path="/PostList" 
            element={<ProtectedRoute element={<PostList />} requiredAccess={['admin']} />} 
          />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </Router>
    </AuthProvider>
    
    
  );
}

export default App;
