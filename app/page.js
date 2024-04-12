"use client"
import {useState} from 'react';
import {React} from "react";
import Header from './header.js';
import Movie_row from './movie_row.js';
import Movie_footer from './footer.js';
import Add_movie from './add_movie';

const Movie_List = [{
    id: 0,
    movie: 'Dear Zindagi',
    year: '2016 • 2h 31m | Drama, Romance',
    description: 'Kaira is a budding cinematographer in search of a perfect life. Her encounter with Jug, an unconventional thinker, helps her gain a new perspective on life.',
    movie_image:'dear_zindagi.png',
    vote:0
   
}, {
    id: 1,
    movie: 'Brave',
    year: '1012 • 1h 33m | Adventurous, Comedy',
    description: 'Determined to make her own path in life, Princess Merida defies a custom that brings chaos to her kingdom. Granted one wish.', 
    movie_image:'brave.png',
    vote:0 
}, {
    id: 2,
    movie: 'Moana',
    year: '1016 • 1h 47m | Adventurous, Comedy',
    description: 'In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moanas island, she answers the Oceans call to seek out the Demigod to set things right.',
    movie_image:'moana.png',
    vote:0
}, {
    id: 3,
    movie: 'Mulan',
    year: '1998 • 1h 27m | Adventurous, Comedy',
    description: 'To save her father from death in the army, a young maiden secretly goes in his place and becomes one of Chinas greatest heroines in the process.',
    movie_image:'mulan.png',
    vote:0
}, {
    id: 4,
    movie: 'He Named Me Malala',
    year: '2015 • 1h 28m | Biography, Documentary',
    description: 'A look at the events leading up to the Talibans attack on Pakistani schoolgirl Malala Yousafzai for speaking out on girls education.',
    movie_image:'malala.png',
    vote:0
}, {
    id: 5,
    movie: 'Soul surfer',
    year: '2011 • 1h 52m | Drama, Biography, Familyy',
    description: 'Teenage surfer Bethany Hamilton overcomes the odds and her own fears of returning to the water after losing her left arm in a shark attack.',
    movie_image:'soul-surfer.png',
    vote:0
}, {
    id: 6,
    movie: 'Bend it like beckham',
    year: '2002 • 1h 52m | Comedy, Drama & Romance ',
    description: 'Two ambitious girls, despite their parents wishes, have their hearts set on careers in professional football.',
    movie_image:'beckham.png',
    vote:0
}, {
    id: 7,
    movie: 'Into the wild',
    year: '2007 • 1h 28m | Adventure, Biography, Drama',
    description:'After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity.',
    movie_image:'into-the-wild.png',
    vote:0  
}, {
    id: 8,
    movie: 'The Pursuit of Happyness',
    year: '2006 • 1h 52m | Drama, Biography',
    description:'A struggling salesman takes custody of his son as hes poised to begin a life-changing professional career.',
    movie_image:'the-pursuit-of-happyNess.png',
    vote:0
    
}, {
    id: 9,
    movie: 'The Intouchables',
    year: '2011 • 1h 52m | Drama, Biography, Drama  ',
    description: 'After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.',
    movie_image:'the-Intouchables.png',
    vote:0
}]


const Random = () => {
    const [movies_data,setMovies_data]=useState(Movie_List);
    function handleDelete(movie_name){
        const movie_data=movies_data.filter((item)=>movie_name !==item.movie);
        setMovies_data(movie_data);
    }
    
    function like_count(movie_row_data){
        movie_row_data.vote+=1
        const newArray=[...movies_data]
        newArray.sort((a,b) => b.vote-a.vote)
        setMovies_data(newArray);
    }
    
    function dislike_count(movie_row_data){
        movie_row_data.vote-=1
        const newArray=[...movies_data]
        newArray.sort((a,b) => b.vote-a.vote)
        setMovies_data(newArray);
    }
    
    return (
       <>
           <Header />
           {movies_data.map((item)=>
               <Movie_row
                   data={item}
                   onDelete={()=>handleDelete(item.movie)}
                   like_count={like_count}
                   dislike_count={dislike_count}
               />
           )}
           <Add_movie />
           <Movie_footer />
       </>
    );
}
export default Random;

