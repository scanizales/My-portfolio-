import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Router from "./components/routes/Router";

import { initCursor } from "./js/cursor.js";

import '../src/css/home.css';
import '../src/css/tailwind.css';
import '../src/css/general.css';


createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <Router />
  </StrictMode>
)

initCursor();