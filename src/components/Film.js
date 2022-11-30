const Film = ({filmObj}) => {

    return (
        <>
        <div className="film">
        <a href={filmObj.filmURL}><h4 className="title">{filmObj.title}</h4></a>
        <ul className="genre_list">
        <li className="genre">{filmObj.genre}</li>
        </ul>
        <ul className="star_list">
        <li className="star">{filmObj.stars[0]}</li>
        <li className="star">{filmObj.stars[1]}</li>
        <li className="star">{filmObj.stars[2]}</li>
        <li className="star">{filmObj.stars[3]}</li>
        </ul>
        </div>
        </>
    )
}

export default Film