import React from 'react'
import { Link } from 'react-router-dom'
import './moviecard.css'

export const MovieCard = ({ id, poster_path, title, release_date }) => {
  return (
    <Link to={`/movies/${id}`}>
      <article className="movie-card">
        <img className="movie-poster" src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={title} />
        <div className="movie-card-details">
          <h3 className="movie-card-title">{title}</h3>
          <p className="movie-card-release">Released {release_date}</p>
        </div>
      </article>
    </Link>
  )
}