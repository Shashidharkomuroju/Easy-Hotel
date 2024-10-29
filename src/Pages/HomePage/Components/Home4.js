import React from 'react';
import Image from "../../../assets/Picture.png";
import Image1 from "../../../assets/Picture1.png";
import Image2 from "../../../assets/Picture2.png";
import Image3 from "../../../assets/Picture3.png";
import Image4 from "../../../assets/Picture4.png";
import Image5 from "../../../assets/Picture5.png";
import Image6 from "../../../assets/Picture6.png";
import Image7 from "../../../assets/Picture7.png";
import Image8 from "../../../assets/Picture8.png";
import Image9 from "../../../assets/Picture9.png";
import Image10 from "../../../assets/Picture10.png";
import Image11 from "../../../assets/Picture11.png";

const Home4 = () => {
    const item = [
        {
            id:1,
            Name : "Berlin",
            Side : "SIDE",
            Paragraph : "A tour of the city and its surroundings led by a professional guide ...",
            HotelImage : Image,
        },
        {
            id:2,
            Name : "Paris",
            Side : "SIDE",
            Paragraph : "A tour of the city and its surroundings led by a professional guide ...",
            HotelImage : Image1,
        },
        {
            id:3,
            Name : "Madrid",
            Side : "SIDE",
            Paragraph : "A tour of the city and its surroundings led by a professional guide ...",
            HotelImage : Image2,
        },
        {
            id:4,
            Name : "Barcelona",
            Side : "SIDE",
            Paragraph : "A tour of the city and its surroundings led by a professional guide ...",
            HotelImage : Image3,
        },
        {
            id:5,
            Name : "Rom",
            Side : "SIDE",
            Paragraph : "A tour of the city and its surroundings led by a professional guide ...",
            HotelImage : Image4,
        },
        {
            id:6,
            Name : "Milan",
            Side : "SIDE",
            Paragraph : "A tour of the city and its surroundings led by a professional guide ...",
            HotelImage : Image5,
        },
        {
            id:7,
            Name : "Istanbul",
            Side : "SIDE",
            Paragraph : "A tour of the city and its surroundings led by a professional guide ...",
            HotelImage : Image6,
        },
        {
            id:8,
            Name : "Dubai",
            Side : "SIDE",
            Paragraph : "A tour of the city and its surroundings led by a professional guide ...",
            HotelImage : Image7,
        },
        {
            id:9,
            Name : "Amesterdam",
            Side : "SIDE",
            Paragraph : "A tour of the city and its surroundings led by a professional guide ...",
            HotelImage : Image8,
        },
        {
            id:10,
            Name : "New York",
            Side : "SIDE",
            Paragraph : "A tour of the city and its surroundings led by a professional guide ...",
            HotelImage : Image9,
        },
        {
            id:11,
            Name : "Marollca",
            Side : "SIDE",
            Paragraph : "A tour of the city and its surroundings led by a professional guide ...",
            HotelImage : Image10,
        },
        {
            id:12,
            Name : "Teneriffa",
            Side : "SIDE",
            Paragraph : "A tour of the city and its surroundings led by a professional guide ...",
            HotelImage : Image11,
        },
    ]
  return (
    <div className='home3'>
        <div className="home3-heading">
            <h2>Explore Stays In Trending Destinations</h2>
            <h4>Find Hot Stays!</h4>
        </div>
        <div className="cards">
            {
                item.map((item)=>{
                    return(
                        <div className="box" key={item.id}>
                            <img src={item.HotelImage} alt="" />
                            <h3>{item.Name}</h3>
                            <h4>{item.Side}</h4>
                            <p>{item.Paragraph}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Home4