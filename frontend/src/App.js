import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
import sofa_banner from './components/assets/banner_sofa.png'
import bed_banner from './components/assets/banner_bed.png'
import wardrobe_banner from './components/assets/banner_wardrobe.png'
import armchair_banner from './components/assets/banner_armchair.png'
import table_banner from './components/assets/banner_table.png'
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import FrequentlyAskedQ from './components/FrequentlyAskedQ/FrequentlyAskedQ';


function App() {
  return (
    <div style={{backgroundColor:"rgb(255, 251, 251)"}}>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/sofas' element={<ShopCategory banner={sofa_banner} category="sofa"/>}/>
        <Route path='/beds' element={<ShopCategory banner={bed_banner} category="bed"/>}/>
        <Route path='/wardrobes' element={<ShopCategory banner={wardrobe_banner} category="wardrobe"/>}/>
        <Route path='/armchairs' element={<ShopCategory banner={armchair_banner} category="armchair"/>}/>
        <Route path='/tables' element={<ShopCategory banner={table_banner} category="table"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/faq' element={<FrequentlyAskedQ/>}/>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
