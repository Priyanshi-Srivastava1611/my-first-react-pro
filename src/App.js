//import logo from "./logo.svg";
import "./App.css";
import Namelist from "./componenst/Namelist";
import Navbar from "./componenst/navbar";
//import { Product } from "./componenst/Product";
import Usergreeting from "./componenst/Usergreeting";
import Stylesheet from "./componenst/Stylesheet";
import Form from "./componenst/form";
import { Product } from "./componenst/Product";
//import Productlist from "./componenst/ProductList";
function App() {
  return (
    <>
      <Navbar/>
      <Usergreeting/>
      <Namelist/>
      <Stylesheet primary={true}/>
      <Form/>
      <Product/>
      <main 
        className="container mt-5">
      </main>
    </>
  );
}

export default App;
