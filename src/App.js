import logo from "./imagens/logo.svg";
import "./App.css";
import cameraIM3 from "./imagens/camera-im3.svg";
import cameraDS from "./imagens/camera-DS.svg";
import cameraIM4 from "./imagens/camera-im4.svg";
import { Button } from 'antd';



function App() {
  return (
    <div>
      <div class="">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>Produtos</h1> 
        <Button 
        type="text"
        danger
      >
          ➕ Adicionar Produto
          </Button>
      
      </div>


      <body>
        <div class="grid">
          <div class="coluna">
            <img src={cameraIM3} className="foto-viptech" alt="viptech" />
            
          </div>
          
          <div class="coluna">
            
            <code>
              {" "}
              <strong>Câmera interna inteligente Wi-Fi Full HD iM3</strong>{" "}
              
              <p>
              Intelbras
              </p>
              <p1 className="valor">
              R$ 300,00
              </p1>
              <p>
              Cor: Branco
              </p>
            </code>
           

          </div>
        </div>
        
        <div class="grid">
          <div class="coluna">
            <img src={cameraDS} className="foto-viptech" alt="viptech" />
            
          </div>
          
          <div class="coluna">
            
            <code>
              {" "}
              <strong>Câmera DS-2CD 2583G2-I</strong>{" "}
              
              <p>
              Hikvision
              </p>
              <p1 className="valor">
              R$ 645,00
              </p1>
              <p>
              Cor: Branco
              </p>
            </code>
           

          </div>
        </div>

        <div class="grid">
          <div class="coluna">
            <img src={cameraIM4} className="foto-viptech" alt="viptech" />
            
          </div>
          
          <div class="coluna">
            
            <code>
              {" "}
              <strong>Câmera interna inteligente Wi-Fi Full HD iM4</strong>{" "}
              
              <p>
              Intelbras
              </p>
              <p1 className="valor">
              R$ 349,00
              </p1>
              <p>
              Cor: Branco
              </p>
            </code>
           

          </div>
        </div>
        <a
          className="App-link"
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link canal youtube
        </a>
      </body>
    </div>
  );
}

export default App;
