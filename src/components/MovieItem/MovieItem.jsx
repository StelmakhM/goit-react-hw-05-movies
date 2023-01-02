import React from "react"
import getGenreById from "../../utils/GenreById"

export default function MovieItem({ title, overview, genreIds, genresList, score, poster_path }) {
	const IMG_BASE_URL = "https://image.tmdb.org/t/p/w300"
	const newGenres = getGenreById(genreIds, genresList).join(", ")
	return (
		<li>
			<h2>{title}</h2>
			<p>User Score: {score}</p>
			<img src={`${IMG_BASE_URL}${poster_path}`} alt={`${title} poster`} />
			<p>{overview}</p>
			<p>Genres: {newGenres}</p>
		</li>
	)
}
