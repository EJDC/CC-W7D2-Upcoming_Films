import Film from "./Film";
import './FilmList.css'

const FilmList = ({allFilms, releaseDate}) => {

    const filmNodes = allFilms.map((film) => {
        return <Film key ={film.id} filmObj = {film} />
    })

    // const formattedDate = releaseDate.getFullYear()

    return (
        <>
        <h3 className="release_date">{releaseDate}</h3>
        <ul className="node">{filmNodes}</ul>
        </>
    )
}

export default FilmList