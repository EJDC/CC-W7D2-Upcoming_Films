import { useState } from "react";
import FilmList from "../components/FilmList";
import './FilmContainer.css'

const FilmContainer = () => {

    const[films] = useState([
        {id: 1, releaseDate: "2nd December 2022", title: "Violent Night", genre: "Action", stars: ["David Harbour", "Beverly D'Angelo", "John Leguizamo", "Cam Gigandet"], filmURL: 'https://www.imdb.com/title/tt12003946/'},
        {id: 2, releaseDate: "2nd December 2022", title: "The Infernal Machine", genre: "Thriller", stars: ["Guy Pearce", "Alice Eve", "Alex Pettyfer", "Jeremy Davies"], filmURL: 'https://www.imdb.com/title/tt15275256/'},
        {id: 3, releaseDate: "2nd December 2022", title: "India Sweets and Spices", genre: "Comedy", stars: ["Sophia Ali", "Rish Shah", "Manisha Koirala", "Ashritha Kancharla"], filmURL: 'https://www.imdb.com/title/tt9896876/'},
        {id: 4, releaseDate: "9th December 2022", title: "The Silent Twins", genre: "Drama", stars: ["Letitia Wright", "Tamara Lawrance", "Leah Mondesir-Simmonds", "Eva-Arianna Baxter"], filmURL: 'https://www.imdb.com/title/tt11052678/'},
        {id: 5, releaseDate: "16th December 2022", title: "Avatar: The Way of the Water", genre: "Fantasy", stars: ["Zoe Saldana","Kate Winslet","Sam Worthington","Sigourney Weaver"], filmURL: 'https://www.imdb.com/title/tt1630029/'},
        {id: 6, releaseDate: "22nd December 2022", title: "I Wanna Dance with Somebody", genre: "Biography", stars: ["Stanley Tucci", "Naomi Ackie", "Tamara Tunie", "Clarke Peters"], filmURL: 'https://www.imdb.com/title/tt12193804/'},
    ])

    // Get an object with the Release Dates as keys.
    // Reducer where accumulator = groups, and film = current_value
    const groups = films.reduce((groups, film) => {
        // Release date = the films release date in the array.
        const releaseDate = film.releaseDate
        // If the film doesn't have a release date, create empty array.
        if (!groups[releaseDate]) {
            groups[releaseDate] = [];
        }
        // Otherwise add the film to the groups object.
        groups[releaseDate].push(film)
        // Return the groups object.
        return groups;
    }, {});

    console.log(groups)

    // Use Object.keys to create an array from the groups object.
    const groupArrays = Object.keys(groups).map((releaseDate) => {
        return {
          releaseDate,
          films: groups[releaseDate]
        };
      });

      console.log(groupArrays);


    // Map the groupArrays to a filmList object
    const filmListNodes = groupArrays.map((group, index) => {
        return <FilmList key={index} allFilms={group.films} releaseDate={group.releaseDate}/>
    })

    return(
        <>
        <h1 className="pageTitle">Upcoming Films</h1>
        {filmListNodes}
        </>
    )
}

export default FilmContainer