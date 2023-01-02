const getGenreById = (genreIds, genresList) => {
	return genreIds.map((id) => genresList.find((genre) => genre.id === id).name)
}

export default getGenreById
