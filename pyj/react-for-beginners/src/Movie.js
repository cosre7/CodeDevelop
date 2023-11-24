function Movie({coverImg, title, summary, genres}) {
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <h1>{title}</h1>
            <p>{summary}</p>
            <ul>
                {genres && genres.map((g) => (<li key={g}>{g}</li>))}
            </ul>
        </div>
    );
}
export default Movie;