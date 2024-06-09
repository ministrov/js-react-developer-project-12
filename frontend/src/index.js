/* eslint-disable functional/no-expression-statement */
import ReactDOM from 'react-dom/client';
import App from './components/App';
// import init from './init.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(await init());
root.render(<App />);
