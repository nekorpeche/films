import React from 'react';
import App from './App';
import {Component} from 'react';
import './recherche.css';


//class de la barre de recherche
class Recherche extends Component{
    
    constructor(props){
        
        super(props);
        this.state= { }
        this.handleChange = this.handleChange.bind(this);
       
    }
    /*
     * Méthode qui écoute la barre de recherche et permet une recherche dynamique
     */
    handleChange(event){
        
     console.log(event.target.value);
     const term = event.target.value;
     new App().performSearch(term);
    }
    
    render(){
            return <div className="searchBar">
                <form action="" onSubmit={this.props.handleSubmit}>
                <div className="input-container">
                    <input className ="input-field searchBar" placeholder="Chercher un film" type="text" onChange={this.handleChange} />
                    </div>
                </form>
              </div>
        }
}
export default Recherche;