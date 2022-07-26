
import DetailCar from './Pages/DetailCar';
import Home from './Pages/Home';
import Cars from './Pages/Cars';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/carimobil" element={<Cars />} />
        <Route path="/detailmobil" element={<DetailCar />} />
      </Routes>

      {/* <HomePage/>
      <PageCars/>
      <DetailCars/> */}

    </div>
  );
}

export default App;
