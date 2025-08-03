import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx'; // Landing page component
import Form from './form.jsx'; // Form component
import CongratsPage from './congrats'; 
import { ToastContainer } from 'react-toastify'; // Import toast container
import 'react-toastify/dist/ReactToastify.css'; // Import styles for toast notifications
import Preloader from './preloader.jsx'; // Import the Preloader component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router> {/* Wrapping your app with Router for navigation */}
      <Routes> {/* Routes component to define the available paths */}
        {/* Route for Preloader */}
        <Route path="/" element={<Preloader />} /> {/* Preloader route */}
        <Route path="/landingpage" element={<App />} /> {/* Landing page route */}
        <Route path="/form" element={<Form />} /> {/* Form page route */}
        <Route path="/congrats" element={<CongratsPage />} /> {/* Congrats page route */}
      </Routes>
      <ToastContainer /> {/* Toast container for showing notifications */}
    </Router>
  </StrictMode>
);
