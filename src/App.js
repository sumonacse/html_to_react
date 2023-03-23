import Navbar from "./components/navbar/Navbar"
import "./components/navbar/style.css"; //common css er jonno
import Banner from "./components/banner/Banner";
import Service from "./components/service/Service";
import Digital from "./components/digital/Digital";
import Work from "./components/work/Work";
import Counting from "./components/counting/Counting";
import Global from "./components/global/Global";
import Customer from "./components/customer/Customer";


function App() {
  return (
    <>
        <Navbar/>
        <Banner/>
        <Service/>
        <Digital/>
        <Work/>
        <Counting/>
        <Global/>
        <Customer/>
    </>
  );
}

export default App;




