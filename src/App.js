import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { ethers } from "ethers";
import Footer from './components/Footer/Footer';

const connectWallet = async  () => {
  await window.ethereum.enable()
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();


};


function App() {


  return (

    <div className="App">
       <Header />





        <div class = "bodyc">

        <div class="split2">

            </div>

            <button className = "fixedbutton" onClick = {connectWallet} >

            </button>



                   <div class = "glass">
                             <div class="split2">
                                 <div>
                                       <button className = "button-18">
                                         MINT NFT
                                       </button>
                                 </div>
                                 <div>
                                     <button className = "button-18">
                                       WHITELIST
                                     </button>
                                 </div>
                                 <div class="clearer"> </div>


                       </div>


                  </div>


        </div>

        <div>
         <Footer/>
        </div>


    </div>
  );
}

export default App;
