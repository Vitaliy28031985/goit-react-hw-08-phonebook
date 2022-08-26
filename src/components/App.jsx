
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import {Container} from 'components/Container/Container';
import ContactsAppBar from 'components/Navigation/Navigation';




const Home = lazy(() => import('components/Home/Home' /* webpackChunkName: "Home" */));
 const ContactsPage = lazy(() => import('components/ContactsPage/ContactsPage' /* webpackChunkName: "ContactsPage" */));
const Register = lazy(() => import('components/Register/Register' /* webpackChunkName: "Register" */));
const Login = lazy(() => import('components/Login/Login' /* webpackChunkName: "Login" */));
const NoPage = lazy(() => import('components/NoPage/NoPage' /* webpackChunkName: "NoPage" */));

 



export const App = () => {


  return (
    
    <Container>
    <ContactsAppBar/>
    <Suspense fallback={<p>Loding...</p>}>
    <Routes>
    <Route  path="/" element={<Home/>}/>
    <Route  path="/contacts" element={<ContactsPage/>}/>
    <Route  path="//login" element={<Login/>}/>
    <Route  path="/register" element={<Register/>}/>
    <Route path="*" element={<NoPage />} />
    </Routes>
    </Suspense>
    </Container>
  );
};


