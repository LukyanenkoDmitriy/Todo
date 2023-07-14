import React from 'react';
import { createRoot } from 'react-dom/client';

// import "./main.css"
// import './additional.css';

import App from './components/app/app.jsx';


const todoApp = document.querySelector('.todoapp')
createRoot(todoApp).render(<App />);