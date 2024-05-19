import '@styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import App from './App.tsx'
import {store} from './redux-store/store.ts'

ReactDOM.createRoot(document.getElementById('root') ?? document.body).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)
