
function Movies({ movies }) {
    const hasMovies = movies?.lenght > 0;

    return (
        <>
            {!hasMovies ? (
                <ul className="grid grid-cols-4 gap-4">
                    {movies.map(({ title, year, id, poster }) => (
                        <li key={id} className="flex flex-col justify-center items-center gap-2">
                            <h2 className="flex justify-center items-center font-bold text-lg w-10/12 mx-auto h-10">
                                {title}
                            </h2>
                            <p className="text-base">{year}</p>
                            <img className="w-10/12 md:w-full aspect-[2/3]" src={poster} alt={title} />
                        </li>
                    ))}</ul>) : (<p>No hay Peliculas</p>)
            }
        </>
    )
}

export default Movies