import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Airbnb from './components/airbnb/Airbnb';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>{/* <Route index element={<Header />}></Route> */}</Routes>
      </BrowserRouter>
      <Airbnb />
    </>
  );
}

export default App;
