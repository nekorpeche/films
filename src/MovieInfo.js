import React from 'react';

/*
 * MovieInfo : film en détail
 */
const MovieInfo = (props) => {
    return (
        <div className = "container">

            <div className="row" onClick={props.closeMovieinfo}>
            
                <i className="fas fa-arrow-left"></i>
                <span>Retour</span>
            </div>
        
            <div className="row">
                {
                //vérifie si l'attribut d'image d'un film est null dans ce cas l'image par défaut sera affiché dans le cas contraire le poster sera affiché
                 this.props.movie.poster_path == null ? <img src="./film.png" height="180px" width="120px"/> : <img width="120" src={`https://image.tmdb.org/t/p/w200${this.props.currentMovie.poster_path}`} />
                }
            </div>
            <div className="info-container">
            
                <p>{props.currentMovie.title}</p>
                <p>{props.currentMovie.release_date}</p>
                <p>{props.currentMovie.overview}</p>
            </div>
        </div>
    )
}
export default MovieInfo;