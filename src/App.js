
import DetailCars from './Pages/DetailCars';
import Home from './Pages/Home';
import Cars from './Pages/Cars';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/carimobil" element={<Cars />} />
        <Route path="/detailmobil/:id" element={<DetailCars/>} />
      </Routes>

      {/* <HomePage/>
      <PageCars/>
      <DetailCars/> */}

    </div>
  );
}

export default App;
