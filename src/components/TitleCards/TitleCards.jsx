import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { useRef, useState } from 'react'
import { useEffect } from 'react';




const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjhlYWRmOTIwZGY5OWU4ZjhhNDRkYjc3ZTRlZWI4ZCIsIm5iZiI6MTczMDkzMjk5MC4wMDMyMzg0LCJzdWIiOiI2NzJiYzQ0M2ViMGZkZDljZDg0YjRlYjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.n96V9K0Tm6FRkY_hh1keyhvL9MBNvT_1860gAoilIXo'
    }
  };
  
  

  const handlewheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY
  }
  
  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handlewheel)
  },[])

  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
          return <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt={card.backdrop_path} />
            <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards