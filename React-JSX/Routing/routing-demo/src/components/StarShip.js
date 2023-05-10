import { useEffect, useState } from 'react'
import { Link, useParams, Route, Routes } from 'react-router-dom'

export const StarShip = () => {
   const params = useParams()
   const [shipId, fullFilmId] = Object.values(params)
   const filmId = fullFilmId.split('/')[1]

   const [starShip, setStarShip] = useState({})
   useEffect(() => {
      fetch(`https://swapi.dev/api/starships/${shipId}`)
         .then(res => res.json())
         .then(result => {
            setStarShip(result)

         })
   }, [shipId])

   const [film, setFilm] = useState({})
   useEffect(() => {
      if (filmId) {
         fetch(`https://swapi.dev/api/films/${filmId}`)
            .then(res => res.json())
            .then(result => {
               setFilm(result)

            })
      }

   }, [filmId])

   return (
      <div>
         <h1>Star Ship</h1>
         {!starShip.length && <h3>...load</h3>}
         {starShip.detail === 'Not found' ? 'Not found' :
            <ul>
               <li>{starShip.name}</li>
               <li>{starShip.model}</li>
               <li>{starShip.length}</li>
            </ul>
         }
         <h3>Movies</h3>
         <ul>
            {starShip.films
               && starShip.films.map((x, i) => {
                  const xArray = x.split('/')
                  const xId = xArray[xArray.length - 2]
                  return (
                     <li key={i}><Link to={`films/${xId}`}>Film {i + 1} {x} </Link></li>
                  )
               })}
         </ul>
         <section>
            <Routes>
               <Route path={`films/:filmId`} element={ <h3>Film: {film.title}</h3>}/>
            </Routes>
         </section>

      </div>

   )
}