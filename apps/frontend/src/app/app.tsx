import { ToastContainer } from 'react-toastify';
import { GlobalProviders } from './GlobalProviders';
import { Routes } from './Routes';

export const App = () => {
  return (
    <GlobalProviders>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="colored"
        hideProgressBar
        closeOnClick
      />
      <Routes />
    </GlobalProviders>
  );
};

export default App;
