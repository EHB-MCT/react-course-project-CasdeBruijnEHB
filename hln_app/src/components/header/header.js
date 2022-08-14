import React,{Component} from 'react';

export default class Header extends Component{
    state={    }
    render(){
        return (
            <div>
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
            </div>
        )
    }
}
