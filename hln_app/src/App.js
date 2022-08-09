import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <div className="header">
       <div className="header_kleineNav">
        <p>Abonneren</p>
        <p>Login</p>
       </div>
       <img id="logo" src="https://www.zwembad-bouwers.be/wp-content/uploads/2022/05/1200px-Logo-HLN.svg.png"></img>
       <p>Search</p>
     </div>
     <nav>
       <p>Nieuws</p>
       <p>Sport</p>
       <p>Showbizz</p>
       <p>Nina</p>
       <p>In de buurt</p>
     </nav>

     <main>
       <div id="topNews">
        <div id="hoofdArtikel">
          <img id="hoofdAfbeelding" src="https://static.forum.nl/cache/10011.10011/10011-s1920x1920-q60.jpg"></img>
          <h2 className="artikelTitel">Putin rukt door in Europa</h2>
          <p className="artikelIntro">Putin zet zijn oorlog verder in Oekraïne.</p>
        </div>
        <div id="sidebars">
          <div id="sectieNetBinnen">
            <h2 className="sectieTitel">NET BINNEN</h2>
            <div className="artikelSectie">
              <p className="sectieartikelTijdstip">14:15</p>
              <p className="sectieartikelTitel">Biden wilt niet meer meewerken aan NATO</p>
            </div>
            <div className="artikelSectie">
              <p className="sectieartikelTijdstip">14:15</p>
              <p className="sectieartikelTitel">Biden wilt niet meer meewerken aan NATO</p>
            </div>
            <div className="artikelSectie">
              <p className="sectieartikelTijdstip">14:15</p>
              <p className="sectieartikelTitel">Biden wilt niet meer meewerken aan NATO</p>
            </div>
            <div className="artikelSectie">
              <p className="sectieartikelTijdstip">14:15</p>
              <p className="sectieartikelTitel">Biden wilt niet meer meewerken aan NATO</p>
            </div>
            <div className="artikelSectie">
              <p className="sectieartikelTijdstip">14:15</p>
              <p className="sectieartikelTitel">Biden wilt niet meer meewerken aan NATO</p>
            </div>
          </div>
          <div id="sectieHLN+">
          <h2 className="sectieTitel">HLN+</h2>
            <div className="artikelSectie">
              <p className="sectieartikelTijdstip">15:16</p>
              <p className="sectieartikelTitel">Tom Boonen herpakt zijn carrière</p>
            </div>
            <div className="artikelSectie">
              <p className="sectieartikelTijdstip">15:16</p>
              <p className="sectieartikelTitel">Tom Boonen herpakt zijn carrière</p>
            </div>
            <div className="artikelSectie">
              <p className="sectieartikelTijdstip">15:16</p>
              <p className="sectieartikelTitel">Tom Boonen herpakt zijn carrière</p>
            </div>
            <div className="artikelSectie">
              <p className="sectieartikelTijdstip">15:16</p>
              <p className="sectieartikelTitel">Tom Boonen herpakt zijn carrière</p>
            </div>
          </div>
        </div>
       </div>
      

      <h2 className="subtitels">Nieuws voor jou</h2>
       <div id="nieuwsVoorJou">
        <div className="nieuwsVoorJou_box">
          <img className="nieuwsVoorJou_boxImage" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" ></img>
          <p className="nieuwsVoorJou_boxDate">16/05/22</p>
          <p className="nieuwsVoorJou_boxTitle">Putin rukt door in Europa</p>
        </div>  
        <div className="nieuwsVoorJou_box">
          <img className="nieuwsVoorJou_boxImage" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" ></img>
          <p className="nieuwsVoorJou_boxDate">16/05/22</p>
          <p className="nieuwsVoorJou_boxTitle">Putin rukt door in Europa</p>
        </div>  
        <div className="nieuwsVoorJou_box">
          <img className="nieuwsVoorJou_boxImage" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" ></img>
          <p className="nieuwsVoorJou_boxDate">16/05/22</p>
          <p className="nieuwsVoorJou_boxTitle">Putin rukt door in Europa</p>
        </div>  
       </div>
       <div id="nieuwsVoorJou_buttons">
         <p>LINKS</p>
         <p>BOLELTJE</p>
         <p>BOLELTJE</p>
         <p>BOLELTJE</p>
         <p>RECHTS</p>
         <p>MEER ZIEN</p>
       </div>


       <h2 className="subtitels">In de kijker</h2>
      <div id="inDeKijker">
        <div className="inDeKijker_boxesRij">
          <div className="inDeKijker_box">
            <img className="inDeKijker_box_boxImage" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" ></img>
            <p className="inDeKijker_box">16/05/22</p>
            <p className="inDeKijker_box">Putin rukt door in Europa</p>
          </div>  
          <div className="inDeKijker_box">
            <img className="inDeKijker_box_boxImage" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" ></img>
            <p className="inDeKijker_box">16/05/22</p>
            <p className="inDeKijker_box">Putin rukt door in Europa</p>
          </div> 
          <div className="inDeKijker_box">
            <img className="inDeKijker_box_boxImage" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" ></img>
            <p className="inDeKijker_box">16/05/22</p>
            <p className="inDeKijker_box">Putin rukt door in Europa</p>
          </div> 
        </div>
        <div className="inDeKijker_boxesRij">
          <div className="inDeKijker_box">
            <img className="inDeKijker_box_boxImage" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" ></img>
            <p className="inDeKijker_box">16/05/22</p>
            <p className="inDeKijker_box">Putin rukt door in Europa</p>
          </div>  
          <div className="inDeKijker_box">
            <img className="inDeKijker_box_boxImage" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" ></img>
            <p className="inDeKijker_box">16/05/22</p>
            <p className="inDeKijker_box">Putin rukt door in Europa</p>
          </div> 
          <div className="inDeKijker_box">
            <img className="inDeKijker_box_boxImage" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" ></img>
            <p className="inDeKijker_box">16/05/22</p>
            <p className="inDeKijker_box">Putin rukt door in Europa</p>
          </div> 
        </div>
      </div>
      <div id="inDeKijker_buttons">
        <p>MEER ZIEN</p>
      </div>


      <h2 className="subtitels">exclusief voor abbonnees</h2>
      <div id="exclusiefVoorAbbos">
        <div id="extradivMain">
          <div className="exclusiefVoorAbbos_mainbox">
               <img className="exclusiefVoorAbbos_mainboxImage" src="https://i.imgur.com/sFRT1iZ.png" ></img>
               <p className="exclusiefVoorAbbos_mainboxDate">16/05/22</p>
               <p className="exclusiefVoorAbbos_mainboxTitle">Putin rukt door in Europa</p>
          </div> 
        </div>
        <div className="exclusiefVoorAbbos_boxRij">
          <div className="exclusiefVoorAbbos_box">
            <img className="exclusiefVoorAbbos_boxImage" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" ></img>
            <p className="exclusiefVoorAbbos_boxDate">16/05/22</p>
            <p className="exclusiefVoorAbbos_boxTitle">Putin rukt door in Europa</p>
          </div> 
          <div className="exclusiefVoorAbbos_box">
            <img className="exclusiefVoorAbbos_boxImage" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" ></img>
            <p className="exclusiefVoorAbbos_boxDate">16/05/22</p>
            <p className="exclusiefVoorAbbos_boxTitle">Putin rukt door in Europa</p>
          </div> 
          <div className="exclusiefVoorAbbos_box">
            <img className="exclusiefVoorAbbos_boxImage" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" ></img>
            <p className="exclusiefVoorAbbos_boxDate">16/05/22</p>
            <p className="exclusiefVoorAbbos_boxTitle">Putin rukt door in Europa</p>
          </div> 
        </div>
      </div>


      <h2 className="subtitels">sport</h2>
       <div id="nieuwsVoorJou">
        <div className="nieuwsVoorJou_box">
          <img className="nieuwsVoorJou_boxImage" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" ></img>
          <p className="nieuwsVoorJou_boxDate">16/05/22</p>
          <p className="nieuwsVoorJou_boxTitle">Putin rukt door in Europa</p>
        </div>  
        <div className="nieuwsVoorJou_box">
          <img className="nieuwsVoorJou_boxImage" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" ></img>
          <p className="nieuwsVoorJou_boxDate">16/05/22</p>
          <p className="nieuwsVoorJou_boxTitle">Putin rukt door in Europa</p>
        </div>  
        <div className="nieuwsVoorJou_box">
          <img className="nieuwsVoorJou_boxImage" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" ></img>
          <p className="nieuwsVoorJou_boxDate">16/05/22</p>
          <p className="nieuwsVoorJou_boxTitle">Putin rukt door in Europa</p>
        </div>  
       </div>
       <div id="nieuwsVoorJou_buttons">
         <p>LINKS</p>
         <p>BOLELTJE</p>
         <p>BOLELTJE</p>
         <p>BOLELTJE</p>
         <p>RECHTS</p>
         <p>MEER ZIEN</p>
       </div>


       <h2 className="subtitels">showbizz</h2>
      <div id="showbizz">
        <div className="showbizz_box">
          <img className="showbizz_boxImage" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" ></img>
          <p className="showbizz_boxDate">16/05/22</p>
          <p className="showbizz_boxTitle">Putin rukt door in Europa</p>
        </div> 
        <div className="showbizz_box">
          <img className="showbizz_boxImage" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" ></img>
          <p className="showbizz_boxDate">16/05/22</p>
          <p className="showbizz_boxTitle">Putin rukt door in Europa</p>
        </div> 
        <div className="showbizz_box">
          <img className="showbizz_boxImage" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" ></img>
          <p className="showbizz_boxDate">16/05/22</p>
          <p className="showbizz_boxTitle">Putin rukt door in Europa</p>
        </div> 
        <div className="showbizz_box">
          <img className="showbizz_boxImage" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" ></img>
          <p className="showbizz_boxDate">16/05/22</p>
          <p className="showbizz_boxTitle">Putin rukt door in Europa</p>
        </div> 
        <div className="showbizz_box">
          <img className="showbizz_boxImage" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" ></img>
          <p className="showbizz_boxDate">16/05/22</p>
          <p className="showbizz_boxTitle">Putin rukt door in Europa</p>
        </div> 
        <div className="showbizz_box">
          <img className="showbizz_boxImage" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" ></img>
          <p className="showbizz_boxDate">16/05/22</p>
          <p className="showbizz_boxTitle">Putin rukt door in Europa</p>
        </div> 
      </div>


      <h2 className="subtitels">nina</h2>
      <div id="nina">
        <div className="nina_box">
          <img className="nina_boxImage" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" ></img>
          <p className="nina_boxDate">16/05/22</p>
          <p className="nina_boxTitle">Putin rukt door in Europa</p>
        </div> 
        <div id="ninaRechterkant">
          <div className="nina_box">
            <img className="nina_boxImageRechterkant" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" ></img>
            <p className="nina_boxDate">16/05/22</p>
            <p className="nina_boxTitle">Putin rukt door in Europa</p>
          </div> 
          <div className="nina_box">
            <img className="nina_boxImageRechterkant" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" ></img>
            <p className="nina_boxDate">16/05/22</p>
            <p className="nina_boxTitle">Putin rukt door in Europa</p>
          </div> 
        </div>
      </div>


      <h2 className="subtitels">In de buurt</h2>
       <div id="nieuwsVoorJou">
        <div className="nieuwsVoorJou_box">
          <img className="nieuwsVoorJou_boxImage" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" ></img>
          <p className="nieuwsVoorJou_boxDate">16/05/22</p>
          <p className="nieuwsVoorJou_boxTitle">Putin rukt door in Europa</p>
        </div>  
        <div className="nieuwsVoorJou_box">
          <img className="nieuwsVoorJou_boxImage" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" ></img>
          <p className="nieuwsVoorJou_boxDate">16/05/22</p>
          <p className="nieuwsVoorJou_boxTitle">Putin rukt door in Europa</p>
        </div>  
        <div className="nieuwsVoorJou_box">
          <img className="nieuwsVoorJou_boxImage" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" ></img>
          <p className="nieuwsVoorJou_boxDate">16/05/22</p>
          <p className="nieuwsVoorJou_boxTitle">Putin rukt door in Europa</p>
        </div>  
       </div>

    
      <div id="abonneerDiv">
        <p>Abonneer op HLN voor nog meer</p>
        <p>Mis nooit meer de belangrijkste nieuwtjes op HLN en word nu lid!</p>
        <div id="footerKnoppen">
          <p>Abonneren</p>
          <p>Meer info</p>
        </div>
      </div>
     </main>
     <footer>
      <div id="footer_tekstAanhalingsteken">
        <p><span id="aanhalingsteken"> " </span> </p>
          <div>
            <p>Wij zijn altijd op zoek naar het laatste nieuws</p>
            <p>Tip van de redactie</p>
          </div>
      </div>
      <div id="footer_links">
        <div>
          <p className="footer_subtitel">Algemeen</p>
          <p>Vragen over abonnement</p>
          <p>Gebruiksvoorwaarden</p>
          <p>Privacybeleid</p>
          <p>Wedstrijdreglement</p>
          <p>Cookiebeleid</p>
          <p>Vacatures</p>
          <p>Wilt u reageren?</p>
          <p>Adverteren</p>
          <p>Partners</p>
          <p>Cookie instellingen</p>
        </div>
        <div>
          <p className="footer_subtitel">Krant</p>
          <p>Neem een abonnement</p>
          <p>Klantenservice</p>
          <p>Vakantieservice</p>
          <p>Audiokrant</p>
        </div>
        <div>
          <p className="footer_subtitel">Meer HLN</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Nieuwsbrieven</p>
        </div>
        <div>
          <p className="footer_subtitel">Apps</p>
          <p>Google play</p>
          <p>App store</p>
        </div>
      </div>
      <p id="footer_dpgLogo">Logo dpg media</p>
     </footer>
    </div>
  );
}

export default App;
