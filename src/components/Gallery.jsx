import cat1 from '../assets/img/cat1.jpeg'
import cat2 from '../assets/img/cat2.jpeg'
import cat3 from '../assets/img/cat3.jpeg'
import cat4 from '../assets/img/cat4.jpeg'
import cat5 from '../assets/img/cat5.jpeg'
import Bordered from './Bordered'

import { useState } from 'react'

import './gallery.css'

const Gallery = () => {

    const [columns, setColumns] = useState(2);
    let imageClass = 'images';

    switch(columns) {
        case 1:
            imageClass += ' one-column';
            break;
        case 2:
            imageClass += ' two-column';
            break;
        case 3:
            imageClass += ' three-column';
            break;
        default:
            imageClass += ' two-column';
    }


    return (

        <div className="gallery">
         <Bordered>
            <section>
               
                <button onClick={() => setColumns(1)}>One column</button>
                <button onClick={() => setColumns(2)}>Two column</button>
                <button onClick={() => setColumns(3)}>Three column</button>
               
            </section>
        </Bordered>

            <section className={imageClass}>
                <img src={cat1}/>
                <img src={cat2}/>
                <img src={cat3}/>
                <img src={cat4}/>
                <img src={cat5}/>
            </section>
        </div>

    )
}

export default Gallery