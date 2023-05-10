import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SidebarProvider from './contexts/SidebarContext';
import ModalProvider from './contexts/ModalContext';
import CreateLinkAccountProvider from './contexts/CreateLinkAccountContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <SidebarProvider>
        <ModalProvider>
            <CreateLinkAccountProvider>
                <App />
            </CreateLinkAccountProvider>
        </ModalProvider>
    </SidebarProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
