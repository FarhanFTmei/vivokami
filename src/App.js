import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Navbar = lazy(() => import('./Navbar'));
const Produk = lazy(() => import('./Produk'));
const Tseri = lazy(() => import('./Tseri'));
const Xseri = lazy(() => import('./Xseri'));
const Vseri = lazy(() => import('./Vseri'));
const Login = lazy(() => import('./Login'));
const Login2 = lazy(() => import('./Login2'));
const Tentangvivo = lazy(() => import('./Tentangvivo'));
const Api = lazy(() => import('./Api'));
const Api2 = lazy(() => import('./Api2'));

const App = () => (
<div>
  <Navbar/>
<Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Produk" element={<Produk />} />
        <Route path="/Tseri" element={<Tseri />} />
        <Route path="/Xseri" element={<Xseri />} />
        <Route path="/Vseri" element={<Vseri />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Login2" element={<Login2 />} />
        <Route path="/Tentangvivo" element={<Tentangvivo />} />
        <Route path="/Api" element={<Api />} />
        <Route path="/Api2" element={<Api2 />} />
      </Routes>
    </Suspense>
  </Router>
</div>
);
export default App;
