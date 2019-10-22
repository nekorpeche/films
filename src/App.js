import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import MovieRow from './MovieRow';
import InfiniteScroll from 'react-infinite-scroller';
import Nav from './Nav';
import Recherche from './Recherche';
import Header from './header';


//classe principale qui fait appel à l'API 
class App extends Component{

    constructor(props){
        super(props);

        this.state= {
            
            currentMovie: null, //verifie si un film est selectionnée si oui il prend l'id du film sinon null
            movieRows: [] //tableau de movieRow
       } 
       this.performSearch();
    }
/*
 * performSearch est une méthode qui fait appel l'API elle prend en paramètre searchTerm qui correspond au terme recherché dans la barre de recherche
 */
    performSearch(searchTerm){
           
        //La condition est présente pour vérifier si un terme a été recherché dans ce cas la il effectuera la recherche du terme sinon affiche les films selon leur date de sortie
        if(searchTerm == null){
            
            var urlString ="http://api.themoviedb.org/3/discover/movie?api_key=e46ffe1578cde7f863d52df68c7ad4d5&certification_country=US&certification.lte=PG-13&sort_by=release_date.desc" 
        }
        else{
            
            urlString ="https://api.themoviedb.org/3/search/movie?api_key=e46ffe1578cde7f863d52df68c7ad4d5&language=en-US&page=1&include_adult=false&query="+searchTerm ;
        }
        //Utilisation de jQuery
        $.ajax({
            
            url: urlString,
            //en cas de succès on stocke le résultat dans la variable rows
            success: (searchResults) => {
                
                console.log(searchResults);
                const results = searchResults.results;
                
                results.forEach((movie) => {
                    
                     const movieRow = <MovieRow key={movie.id} movie={movie}/>;
                     this.state.movieRows.push(movieRow);
                 });
                 
                 this.setState({
                     
                     rows: this.state.movieRows
                 });
                 
            },
            //en cas d'échec on affiche un message d'erreur dans la console
            error: (xhr,status,err)=>{
                
                 console.error("Erreur lors de la récupération des films");
            }
         });  
       }
       
    /*méthode permettant le changement de currentMovie
     * prend en paramètre le nouvel id du film selectionné
     */
    handleCurrentMovieChange = (id) => {
        
        this.setState({id})
    }
       
    render(){
        return (
         
          <div className="App"  ref="myscroll">
                <div className="bandeau" >
                
                    <Nav />
                    <Recherche />

                </div>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.performSearch.bind(this)}
                    hasMore={true || false}
                    loader={
                    <div className="loader" key={0}> Loading ...</div>} >
                    
                        <div key="i" className="movie"> 
                            {this.state.rows}
                        </div>
               </InfiniteScroll>
               
          </div>
        );
    }
}
export default App;
