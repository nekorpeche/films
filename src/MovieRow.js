import React, { Component } from 'react';
import './MovieRow.css';

//classe qui correspond au rendu d'un film
class MovieRow extends Component{
    /*
     * permet de voir le détail du film selectionné
     */
    viewMovie(id){
        console.log("Film selectionné");
    }

   render(){
       
     return <div className="movies-card card-image waves-effect waves-light" >
                <a href="#" onClick={this.viewMovie}>
                    <table key={this.props.movie.id}>
                        <tbody>
                            <tr>
                                <th>
                                {
                                    this.props.movie.poster_path == null ? <img src="./film.png" alt="poster par défault" height="180px" width="120px"/> : <img width="120" alt="poster" src={`https://image.tmdb.org/t/p/w200${this.props.movie.poster_path}`} />
                                }
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <h6 className="black-text">{this.props.movie.title}</h6>
                                </th>   
                            </tr>
                         </tbody>
                    </table>
                </a>
            </div>
}
   
}

export default MovieRow;