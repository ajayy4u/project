
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import Layouts from './component/Layout/Layouts';
import Homes from './component/Pages/Homes';
import SignIn from './component/Pages/SignIn';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts />} >
            <Route index element={<Homes />} />
            <Route path="/SignIn" element={<SignIn />} />
            
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
