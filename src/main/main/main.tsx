import './main.css'

import App from '../app/App.tsx'
import store from "../../redux/store/store.ts";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {Provider} from "react-redux";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <StrictMode>
            <App />
        </StrictMode>
    </Provider>
)
