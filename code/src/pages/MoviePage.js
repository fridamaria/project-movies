import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './moviepage.css'
import { NotFound } from 'components/NotFound'
import { MovieDetails } from 'components/MovieDetails'
import { LoadingSpinner } from 'components/LoadingSpinner'

export const MoviePage = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState([])
  const [notFound, setNotFound] = useState(false)
  const [loading, setLoading] = useState(true)
  const apiKey = '85c8192ada23df0631c9cf9ca0b5729d'
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
  const posterUrl = `https://image.tmdb.org/t/p/w342${movie.poster_path}`
  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        if (json.status_code === 34 || json.status_code === 404) {
          setNotFound(true)
        } else {
          setMovie(json)
        }
        setLoading(false)
        console.log(json)
      })
  }, [movieId])

  return (
    <>
      {loading && <LoadingSpinner />}
      {notFound && <NotFound />}
      <MovieDetails
        backdropUrl={backdropUrl}
        posterUrl={posterUrl}
        title={movie.title}
        vote_average={movie.vote_average}
        overview={movie.overview} />
    </>
  )
}