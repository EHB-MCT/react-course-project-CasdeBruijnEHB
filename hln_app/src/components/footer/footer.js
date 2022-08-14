import React,{Component} from 'react';

export default class Footer extends Component{
    state={    }
    render(){
        return (
            <footer>
            <div id="abonneerDiv">
               <h1>ABONNEER OP HLN VOOR NOG MEER</h1>
               <p>Mis nooit meer de belangrijkste nieuwtjes op HLN en word nu lid!</p>
               <div id="footerKnoppen">
                 <p>Abonneren</p>
                 <p>Meer info</p>
               </div>
             </div>
             <div id="footerPart2">
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
              <img id="logoDPG" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Dpg-media-Logo.svg/1200px-Dpg-media-Logo.svg.png"></img>
             </div>
            </footer>
        )
    }
}
