import React from "react"
import MovieItem from "../MovieItem/MovieItem"

export default function MoviesList({ movies, genresList }) {
	return (
		<ul>
			{movies.map(({ id, original_title, overview, genre_ids, vote_average, poster_path }) => (
				<MovieItem key={id} title={original_title} overview={overview} genreIds={genre_ids} score={vote_average} poster_path={poster_path} genresList={genresList} />
			))}
		</ul>
	)
}
