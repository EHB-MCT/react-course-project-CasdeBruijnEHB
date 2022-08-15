import React,{Component} from 'react';
import {artikelService} from '../../services/artikelService';
import arrowLeft from '../../assets/icons/arrowLeft.png'
import arrowRight from '../../assets/icons/arrowRight.png'
import bolletje from '../../assets/icons/BolletjeIcon.png'
import { ARTIKELEN } from '../../mock-artikelen.ts';

export default class Artikelen extends Component{
    

    state={ 
        html:"",
        data:""
       }
    render(){
        return (
        <main>
        <div id="topNews">
            <div id="hoofdArtikel">
            <img id="hoofdAfbeelding" src="https://static.forum.nl/cache/10011.10011/10011-s1920x1920-q60.jpg"></img>
            <p className='artikelDatum'>{ARTIKELEN[0].artikelDate}</p>
            <h2 className="artikelTitel">{ARTIKELEN[0].artikelHeadline}</h2>
            <p className="artikelIntro">{ARTIKELEN[0].artikelIntro}</p>
            </div>
            <div id="sidebars">
            <div id="sectieNetBinnen">
                <h2 className="sectieTitel"><img class="sidebarBolletje" src={bolletje}></img>NET BINNEN</h2>
                <div className="artikelSectie">
                <p className="sectieartikelTijdstip">14:25</p>
                <p className="sectieartikelTitel">{ARTIKELEN[1].artikelHeadline}</p>
                </div>
                <div className="artikelSectie">
                <p className="sectieartikelTijdstip">14:30</p>
                <p className="sectieartikelTitel">{ARTIKELEN[2].artikelHeadline}</p>
                </div>
                <div className="artikelSectie">
                <p className="sectieartikelTijdstip">14:45</p>
                <p className="sectieartikelTitel">{ARTIKELEN[3].artikelHeadline}</p>
                </div>
                <div className="artikelSectie">
                <p className="sectieartikelTijdstip">14:50</p>
                <p className="sectieartikelTitel">{ARTIKELEN[4].artikelHeadline}</p>
                </div>
                <div className="artikelSectie">
                <p className="sectieartikelTijdstip">14:55</p>
                <p className="sectieartikelTitel">{ARTIKELEN[5].artikelHeadline}</p>
                </div>
            </div>
                <div id="sectieHLNplus">
                    <h2 className="sectieTitel"><img class="sidebarBolletje" src={bolletje}></img>HLN+</h2>
                    <div className="artikelSectie">
                    <p className="sectieartikelTijdstip">15:16</p>
                    <p className="sectieartikelTitel">{ARTIKELEN[6].artikelHeadline}</p>
                    </div>
                    <div className="artikelSectie">
                    <p className="sectieartikelTijdstip">15:26</p>
                    <p className="sectieartikelTitel">{ARTIKELEN[7].artikelHeadline}</p>
                    </div>
                    <div className="artikelSectie">
                    <p className="sectieartikelTijdstip">15:46</p>
                    <p className="sectieartikelTitel">{ARTIKELEN[8].artikelHeadline}</p>
                    </div>
                    <div className="artikelSectie">
                    <p className="sectieartikelTijdstip">15:56</p>
                    <p className="sectieartikelTitel">{ARTIKELEN[9].artikelHeadline}</p>
                    </div>
                </div>
            </div>
        </div>
        

        <h2 className="subtitels">Nieuws voor jou</h2>
        <div id="nieuwsVoorJou">
            <div className="nieuwsVoorJou_box">
            <img className="nieuwsVoorJou_boxImage" src={ARTIKELEN[2].artikelFoto} ></img>
            <p className="nieuwsVoorJou_boxDate">{ARTIKELEN[2].artikelDate}</p>
            <p className="nieuwsVoorJou_boxTitle">{ARTIKELEN[2].artikelHeadline}</p>
            </div>  
            <div className="nieuwsVoorJou_box">
            <img className="nieuwsVoorJou_boxImage" src={ARTIKELEN[5].artikelFoto} ></img>
            <p className="nieuwsVoorJou_boxDate">{ARTIKELEN[5].artikelDate}</p>
            <p className="nieuwsVoorJou_boxTitle">{ARTIKELEN[5].artikelHeadline}</p>
            </div>  
            <div className="nieuwsVoorJou_box">
            <img className="nieuwsVoorJou_boxImage" src={ARTIKELEN[6].artikelFoto}></img>
            <p className="nieuwsVoorJou_boxDate">{ARTIKELEN[6].artikelDate}</p>
            <p className="nieuwsVoorJou_boxTitle">{ARTIKELEN[6].artikelHeadline}</p>
            </div>  
        </div>
        <div id="nieuwsVoorJou_buttons">
            <img class="navigatiePijltje" src={arrowLeft}></img>
            <img class="navigatieBolletje" src={bolletje}></img>
            <img class="navigatieBolletje" src={bolletje}></img>
            <img class="navigatieBolletje" src={bolletje}></img>
            <img class="navigatiePijltje" src={arrowRight}></img>
        </div>
        <div id="inDeKijker_buttons">
            <p class="buttonMeerZien">MEER ZIEN</p>
        </div>


        <h2 className="subtitels">In de kijker</h2>
        <div id="inDeKijker">
            <div className="inDeKijker_boxesRij">
            <div className="inDeKijker_box">
                <img className="inDeKijker_box_boxImage" src={ARTIKELEN[7].artikelFoto} ></img>
                <p className="inDeKijker_date">{ARTIKELEN[7].artikelDate}</p>
                <p className="inDeKijker_title">{ARTIKELEN[7].artikelHeadline}</p>
            </div>  
            <div className="inDeKijker_box">
                <img className="inDeKijker_box_boxImage" src={ARTIKELEN[8].artikelFoto} ></img>
                <p className="inDeKijker_date">{ARTIKELEN[8].artikelDate}</p>
                <p className="inDeKijker_title">{ARTIKELEN[8].artikelHeadline}</p>
            </div> 
            <div className="inDeKijker_box">
                <img className="inDeKijker_box_boxImage" src={ARTIKELEN[9].artikelFoto} ></img>
                <p className="inDeKijker_date">{ARTIKELEN[9].artikelDate}</p>
                <p className="inDeKijker_title">{ARTIKELEN[9].artikelHeadline}</p>
            </div> 
            </div>
            <div className="inDeKijker_boxesRij">
            <div className="inDeKijker_box">
            <img className="inDeKijker_box_boxImage" src={ARTIKELEN[10].artikelFoto} ></img>
                <p className="inDeKijker_date">{ARTIKELEN[10].artikelDate}</p>
                <p className="inDeKijker_title">{ARTIKELEN[10].artikelHeadline}</p>
            </div>  
            <div className="inDeKijker_box">
            <img className="inDeKijker_box_boxImage" src={ARTIKELEN[11].artikelFoto} ></img>
                <p className="inDeKijker_date">{ARTIKELEN[11].artikelDate}</p>
                <p className="inDeKijker_title">{ARTIKELEN[11].artikelHeadline}</p>
            </div> 
            <div className="inDeKijker_box">
            <img className="inDeKijker_box_boxImage" src={ARTIKELEN[5].artikelFoto} ></img>
                <p className="inDeKijker_date">{ARTIKELEN[5].artikelDate}</p>
                <p className="inDeKijker_title">{ARTIKELEN[5].artikelHeadline}</p>
            </div> 
            </div>
        </div>
        <div id="inDeKijker_buttons">
            <p class="buttonMeerZien">MEER ZIEN</p>
        </div>


        <h2 className="subtitels">exclusief voor abbonnees</h2>
        <div id="exclusiefVoorAbbos">
            <div id="extradivMain">
            <div className="exclusiefVoorAbbos_mainbox">
                <img className="exclusiefVoorAbbos_mainboxImage" src="https://i.imgur.com/sFRT1iZ.png" ></img>
                <p className="exclusiefVoorAbbos_mainboxDate">{ARTIKELEN[15].artikelDate}</p>
                <p className="exclusiefVoorAbbos_mainboxTitle">{ARTIKELEN[15].artikelHeadline}</p>
            </div> 
            </div>
            <div className="exclusiefVoorAbbos_boxRij">
            <div className="exclusiefVoorAbbos_box">
                <img className="exclusiefVoorAbbos_boxImage" src={ARTIKELEN[14].artikelFoto} ></img>
                <p className="exclusiefVoorAbbos_boxDate">{ARTIKELEN[14].artikelDate}</p>
                <p className="exclusiefVoorAbbos_boxTitle">{ARTIKELEN[14].artikelHeadline}</p>
            </div> 
            <div className="exclusiefVoorAbbos_box">
            <img className="exclusiefVoorAbbos_boxImage" src={ARTIKELEN[16].artikelFoto} ></img>
                <p className="exclusiefVoorAbbos_boxDate">{ARTIKELEN[16].artikelDate}</p>
                <p className="exclusiefVoorAbbos_boxTitle">{ARTIKELEN[16].artikelHeadline}</p>
            </div> 
            <div className="exclusiefVoorAbbos_box">
            <img className="exclusiefVoorAbbos_boxImage" src={ARTIKELEN[17].artikelFoto} ></img>
                <p className="exclusiefVoorAbbos_boxDate">{ARTIKELEN[17].artikelDate}</p>
                <p className="exclusiefVoorAbbos_boxTitle">{ARTIKELEN[17].artikelHeadline}</p>
            </div> 
            </div>
        </div>
        <div id="inDeKijker_buttons">
            <p class="buttonMeerZien">MEER ZIEN</p>
        </div>


        <h2 className="subtitels">sport</h2>
        <div id="nieuwsVoorJou">
            <div className="nieuwsVoorJou_box">
            <img className="nieuwsVoorJou_boxImage" src={ARTIKELEN[28].artikelFoto} ></img>
            <p className="nieuwsVoorJou_boxDate">{ARTIKELEN[28].artikelDate}</p>
            <p className="nieuwsVoorJou_boxTitle">{ARTIKELEN[2].artikelHeadline}</p>
            </div>  
            <div className="nieuwsVoorJou_box">
            <img className="nieuwsVoorJou_boxImage" src={ARTIKELEN[14].artikelFoto} ></img>
            <p className="nieuwsVoorJou_boxDate">{ARTIKELEN[14].artikelDate}</p>
            <p className="nieuwsVoorJou_boxTitle">{ARTIKELEN[14].artikelHeadline}</p>
            </div>  
            <div className="nieuwsVoorJou_box">
            <img className="nieuwsVoorJou_boxImage" src={ARTIKELEN[15].artikelFoto} ></img>
            <p className="nieuwsVoorJou_boxDate">{ARTIKELEN[29].artikelDate}</p>
            <p className="nieuwsVoorJou_boxTitle">{ARTIKELEN[15].artikelHeadline}</p>
            </div>  
        </div>
        <div id="nieuwsVoorJou_buttons">
        <img class="navigatiePijltje" src={arrowLeft}></img>
            <img class="navigatieBolletje" src={bolletje}></img>
            <img class="navigatieBolletje" src={bolletje}></img>
            <img class="navigatieBolletje" src={bolletje}></img>
            <img class="navigatiePijltje" src={arrowRight}></img>
        </div>
        <div id="inDeKijker_buttons">
            <p class="buttonMeerZien">MEER ZIEN</p>
        </div>


        <h2 className="subtitels">showbizz</h2>
        <div id="showbizz">
            <div className="showbizz_box">
            <img className="showbizz_boxImage" src={ARTIKELEN[18].artikelFoto} ></img>
            <p className="showbizz_boxDate">{ARTIKELEN[18].artikelDate}</p>
            <p className="showbizz_boxTitle">{ARTIKELEN[18].artikelHeadline}</p>
            </div> 
            <div className="showbizz_box">
            <img className="showbizz_boxImage" src={ARTIKELEN[11].artikelFoto} ></img>
            <p className="showbizz_boxDate">{ARTIKELEN[11].artikelDate}</p>
            <p className="showbizz_boxTitle">{ARTIKELEN[11].artikelHeadline}</p>
            </div> 
            <div className="showbizz_box">
            <img className="showbizz_boxImage" src={ARTIKELEN[14].artikelFoto} ></img>
            <p className="showbizz_boxDate">{ARTIKELEN[14].artikelDate}</p>
            <p className="showbizz_boxTitle">{ARTIKELEN[14].artikelHeadline}</p>
            </div> 
            <div className="showbizz_box">
            <img className="showbizz_boxImage" src={ARTIKELEN[15].artikelFoto} ></img>
            <p className="showbizz_boxDate">{ARTIKELEN[15].artikelDate}</p>
            <p className="showbizz_boxTitle">{ARTIKELEN[15].artikelHeadline}</p>
            </div> 
            <div className="showbizz_box">
            <img className="showbizz_boxImage" src={ARTIKELEN[16].artikelFoto} ></img>
            <p className="showbizz_boxDate">{ARTIKELEN[16].artikelDate}</p>
            <p className="showbizz_boxTitle">{ARTIKELEN[16].artikelHeadline}</p>
            </div> 
            <div className="showbizz_box">
            <img className="showbizz_boxImage" src={ARTIKELEN[17].artikelFoto} ></img>
            <p className="showbizz_boxDate">{ARTIKELEN[17].artikelDate}</p>
            <p className="showbizz_boxTitle">{ARTIKELEN[17].artikelHeadline}</p>
            </div> 
        </div>
        <div id="inDeKijker_buttons">
            <p class="buttonMeerZien">MEER ZIEN</p>
        </div>


        <h2 className="subtitels">nina</h2>
        <div id="nina">
            <div className="nina_mainbox">
            <img className="nina_boxImage" src={ARTIKELEN[18].artikelFoto} ></img>
            <p className="nina_mainboxDate">{ARTIKELEN[18].artikelDate}</p>
            <p className="nina_mainboxTitle">{ARTIKELEN[18].artikelHeadline}</p>
            </div> 
            <div id="ninaRechterkant">
            <div className="nina_box">
                <img className="nina_boxImageRechterkant" src={ARTIKELEN[19].artikelFoto} ></img>
                <p className="nina_boxDate">{ARTIKELEN[19].artikelDate}</p>
                <p className="nina_boxTitle">{ARTIKELEN[19].artikelHeadline}</p>
            </div> 
            <div className="nina_box">
            <img className="nina_boxImageRechterkant" src={ARTIKELEN[20].artikelFoto} ></img>
                <p className="nina_boxDate">{ARTIKELEN[20].artikelDate}</p>
                <p className="nina_boxTitle">{ARTIKELEN[20].artikelHeadline}</p>
            </div> 
            </div>
        </div>
        <div id="inDeKijker_buttons">
            <p class="buttonMeerZien">MEER ZIEN</p>
        </div>


        <h2 className="subtitels">In de buurt</h2>
        <div id="nieuwsVoorJou">
            <div className="nieuwsVoorJou_box">
            <img className="nieuwsVoorJou_boxImage" src={ARTIKELEN[6].artikelFoto}></img>
            <p className="nieuwsVoorJou_boxDate">{ARTIKELEN[6].artikelDate}</p>
            <p className="nieuwsVoorJou_boxTitle">{ARTIKELEN[6].artikelHeadline}</p>
            </div>  
            <div className="nieuwsVoorJou_box">
            <img className="nieuwsVoorJou_boxImage" src={ARTIKELEN[1].artikelFoto}></img>
            <p className="nieuwsVoorJou_boxDate">{ARTIKELEN[1].artikelDate}</p>
            <p className="nieuwsVoorJou_boxTitle">{ARTIKELEN[1].artikelHeadline}</p>
            </div>  
            <div className="nieuwsVoorJou_box">
            <img className="nieuwsVoorJou_boxImage" src={ARTIKELEN[4].artikelFoto}></img>
            <p className="nieuwsVoorJou_boxDate">{ARTIKELEN[4].artikelDate}</p>
            <p className="nieuwsVoorJou_boxTitle">{ARTIKELEN[4].artikelHeadline}</p>
            </div>  
        </div>
        <div id="inDeKijker_buttons">
            <p class="buttonMeerZien">MEER ZIEN</p>
        </div>
     </main>
        )
    }

   test(){
    artikelService.getArtikelen().then(data=>{
        //console.log("de data " + data[1].artikelHeadline);
       this.data=data;
    })
    }


    renderTopNewsBar(){
        /****Dit is de HTML var waar alle code aan toegevoegd wordt. */
        let html="";

        let dataArtikelen;
        let arrayALLartikelen=[];
        let arrayArtikelenHeadliners=[];
        let arrayArtikelenHLNPlus=[];
        artikelService.getArtikelen().then(data=>{
            dataArtikelen=data;
            for(let nr in dataArtikelen){
                //Alle artikelen worden eerst toegevoegd aan een array
                arrayALLartikelen.push(dataArtikelen[nr]);
                //Vervolgens de Headliners:  Check the level of importance; if 1 it's a headliner.
                if(dataArtikelen[nr].levelOfImportance===1){
                    arrayArtikelenHeadliners.push(dataArtikelen[nr]);
                }
                //Vervolgens een array voor alle HLN PLUS artikelen
                if(dataArtikelen[nr].hln=='true'){
                    arrayArtikelenHLNPlus.push(dataArtikelen[nr]);
                }
            }
        
            /**********************
             Render html
             *********************/
            /****Headliners*****/
            /*****Hier moet een random artikel geselecteerd worden uit de headliner**/
            let maxNumber=arrayArtikelenHeadliners.length;
            let randomNumber= Math.floor(Math.random()*maxNumber);
            html+=`
            <div id="hoofdArtikel">
            <img id="hoofdAfbeelding" src="${arrayArtikelenHeadliners[randomNumber].artikelFoto}"></img>
            <h2 className="artikelTitel">${arrayArtikelenHeadliners[randomNumber].artikelHeadline}</h2>
            <p className="artikelIntro">${arrayArtikelenHeadliners[randomNumber].artikelIntro}</p>
            </div>
            `
            /*********Nu voor de sideline artikels********* */

            html+=`<div id="sidebars">
            <div id="sectieNetBinnen">
                <h2 className="sectieTitel">NET BINNEN</h2>
                <div className="artikelSectie">
                <p className="sectieartikelTijdstip">${arrayALLartikelen[0].artikelDate}</p>
                <p className="sectieartikelTitel">${arrayALLartikelen[0].artikelHeadline}</p>
                </div>
                <div className="artikelSectie">
                <p className="sectieartikelTijdstip">${arrayALLartikelen[1].artikelDate}</p>
                <p className="sectieartikelTitel">${arrayALLartikelen[1].artikelHeadline}</p>
                </div>
                <div className="artikelSectie">
                <p className="sectieartikelTijdstip">${arrayALLartikelen[2].artikelDate}</p>
                <p className="sectieartikelTitel">${arrayALLartikelen[2].artikelHeadline}</p>
                </div>
                <div className="artikelSectie">
                <p className="sectieartikelTijdstip">${arrayALLartikelen[3].artikelDate}</p>
                <p className="sectieartikelTitel">${arrayALLartikelen[3].artikelHeadline}</p>
                </div>
                <div className="artikelSectie">
                <p className="sectieartikelTijdstip">${arrayALLartikelen[4].artikelDate}</p>
                <p className="sectieartikelTitel">${arrayALLartikelen[4].artikelHeadline}</p>
                </div>
            </div>`

            /**********Voor HLNplus */
            html+=`<div id="sectieHLN+">
            <h2 className="sectieTitel">HLN+</h2>
                <div className="artikelSectie">
                <p className="sectieartikelTijdstip">${arrayArtikelenHLNPlus[0].artikelDate}</p>
                <p className="sectieartikelTitel">${arrayArtikelenHLNPlus[0].artikelHeadline}</p>
                </div>
                <div className="artikelSectie">
                <p className="sectieartikelTijdstip">${arrayArtikelenHLNPlus[0].artikelDate}</p>
                <p className="sectieartikelTitel">${arrayArtikelenHLNPlus[0].artikelHeadline}</p>
                </div>
                <div className="artikelSectie">
                <p className="sectieartikelTijdstip">${arrayArtikelenHLNPlus[0].artikelDate}</p>
                <p className="sectieartikelTitel">${arrayArtikelenHLNPlus[0].artikelHeadline}</p>
                </div>
                <div className="artikelSectie">
                <p className="sectieartikelTijdstip">${arrayArtikelenHLNPlus[0].artikelDate}</p>
                <p className="sectieartikelTitel">${arrayArtikelenHLNPlus[0].artikelHeadline}</p>
                </div>
            </div>
            </div>`
            
        })
        console.log(html);

        /*
        <div id="topNews">
            
            
            
        </div>
        */
    }
}
