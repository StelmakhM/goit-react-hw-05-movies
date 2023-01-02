import MoviesList from "./components/MoviesList/MoviesList"
import { useState, useEffect } from "react"
import { API } from "./services/Api/Api"
import { setToLocalStorage, getFromLocalStorage } from "./utils/LocalStorage"

export default function App() {
	const [movies, setMovies] = useState([])
	const [genresList] = useState(() => getFromLocalStorage("genres") ?? [])

	useEffect(() => {
		const getTrendingMovies = async () => {
			const moviesList = await API.getTrendingMovies()
			setMovies(moviesList)
		}
		getTrendingMovies()

		if (genresList.length > 0) {
			return
		}

		const getMovieGenres = async () => {
			const genresList = await API.getMovieGenres()
			setToLocalStorage("genres", genresList.genres)
		}
		getMovieGenres()
	}, [])

	return (
		<>
			<MoviesList movies={movies} genresList={genresList} />
		</>
	)
}
