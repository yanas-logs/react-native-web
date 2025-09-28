import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './screens/App';
import './styles/globals.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
