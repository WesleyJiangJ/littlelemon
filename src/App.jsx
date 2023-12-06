import './App.css';
import { Route, Routes } from 'react-router-dom';
import ReserveTable from './components/ReserveTable';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div className="grid-container">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/reservation" element={<ReserveTable />}></Route>
      </Routes>
      {/* <Main /> */}
      <Footer />
    </div>
  );
}

export default App;
