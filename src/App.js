import React from 'react';

import './styles/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import './App.css';

import AppLoading from './components/AppLoading';

const AppRouter = React.lazy(() => import("./routes/app-router"));

function App() {
  return (
    <React.Suspense fallback={<AppLoading />}>
      <AppRouter />
    </React.Suspense>
  )
}

export default App