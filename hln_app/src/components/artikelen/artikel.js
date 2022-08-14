import React,{Component} from 'react';
import {artikelService} from '../../services/artikelService';

export default class Artikelen extends Component{
    

    state={ 
        html:"",
        data:""
       }
    render(){
        return (
        <main>
            {this.renderTopNewsBar()}
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
