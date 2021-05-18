import React from 'react';

import './styles/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import './App.css';

import AppLoading from './components/AppLoading';
// import AppAlert from 'components/AppAlert';

const AppRouter = React.lazy(() => import("./routes/app-router"));

function App() {
  return (
    <React.Suspense fallback={<AppLoading />}>
      {/* <AppAlert /> */}
      <AppRouter />
    </React.Suspense>
  )
}

export default App