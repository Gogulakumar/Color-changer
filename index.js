import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dropdown from './Dropdown';
import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Dropdown />
);
