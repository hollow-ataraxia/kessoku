import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import App from './App.tsx'
import {store} from './redux-store/store.ts'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root') ?? document.body).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)
