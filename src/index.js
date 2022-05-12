import React from 'react';
// import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';
import App from './components/App/App';
import { theme } from './styles/themes';

import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook/">
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
      {/* </PersistGate> */}
    </BrowserRouter>
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       {/* <PersistGate loading={null} persistor={persistor}> */}
//       <ThemeProvider theme={theme}>
//         <App />
//       </ThemeProvider>
//       {/* </PersistGate> */}
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
