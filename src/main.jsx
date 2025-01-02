import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/about.jsx';
import Contact from './components/Contact.jsx';
import User from './components/User.jsx';
import Github, { githubInfoLoader } from './components/GitHub.jsx';
import Projects from './components/Project.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimatedCards from './components/Cards.jsx';
import NewFun from './components/NewFun.jsx';
import ProgressBar from './components/ProgressBar.jsx'
import Skills from './components/Skills.jsx'


// Define routes with data loader and error handling
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<><NewFun /> <About />  </>} />
      <Route path='contact' element={<> <Contact /></>} />
      <Route path='user/:userid' element={<User />} />
      <Route path='projects' element={<><ProgressBar /> <AnimatedCards /> <Skills /> <Projects />  </>} />
      <Route
        path='github'
        element={<><Github /></>}
        loader={githubInfoLoader} // Added loader for GitHub data
      />
    </Route>
  )
);

// Render the app with RouterProvider to use the route configuration
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
