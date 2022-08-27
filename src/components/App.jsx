
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import {Container} from 'components/Container/Container';
import ContactsAppBar from 'components/Navigation/Navigation';
import {PrivateRoute} from 'routers/PrivateRoute';
import {PublicRouter} from 'routers/PublicRoute';




const Home = lazy(() => import('components/Home/Home' /* webpackChunkName: "Home" */));
 const ContactsPage = lazy(() => import('components/ContactsPage/ContactsPage' /* webpackChunkName: "ContactsPage" */));
const Register = lazy(() => import('components/Register/Register' /* webpackChunkName: "Register" */));
const Login = lazy(() => import('components/Login/Login' /* webpackChunkName: "Login" */));
const NoPage = lazy(() => import('components/NoPage/NoPage' /* webpackChunkName: "NoPage" */));
// const LoaderComponent = lazy(() => import('components/Loader/Loader' /* webpackChunkName: "LoaderComponent" */));

 



export const App = () => {
//<LoaderComponent/>
  return (
    
    <Container>
    <ContactsAppBar/>
    <Suspense fallback={<p>Loader...</p>}>
    <Routes>
    <Route  path="/" element={
    <PublicRouter>
    <Home/>
    </PublicRouter>}/>
    
    <Route  path="/contacts" element={<PrivateRoute><ContactsPage/></PrivateRoute>}/>
    
    <Route  path="/login" element={<PublicRouter restricted><Login/></PublicRouter>}/>
    <Route  path="/register" element={<PublicRouter restricted><Register/></PublicRouter>}/>
    <Route path="*" element={<NoPage />} />
    </Routes>
    </Suspense>
    </Container>
  );
};


