import { createRoot } from 'react-dom/client'

import App from './components/app/app.jsx'

const todoApp = document.querySelector('.todoapp')
createRoot(todoApp).render(<App />)
