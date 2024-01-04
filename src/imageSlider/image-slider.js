import { useState, useEffect } from 'react';
import './image-slider.css';

const image = [{
    name: "An Picture Of Coconut Tree",
    url: "https://images.unsplash.com/photo-1498081959737-f3ba1af08103?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    name: "An Beautiful Scenery",
    url: "https://picsum.photos/536/354"
},
{
    name: "An Beautiful Picture Of a Waterfall",
    url: "https://images.unsplash.com/photo-1609109238958-eb5130c99873?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    name: "An MindBlowing Picture  From The Top Of a City",
    url: "https://images.unsplash.com/photo-1502899576159-f224dc2349fa?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    name: "An Image Displaying An Scenery Of a Bridge",
    url: "https://images.unsplash.com/photo-1530075288903-69b220251c3e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}];

const Slider = () => {

    const [index, setIndex] = useState(0);
    const [CurrentState, setCurrentState] = useState(image[0]);


    const onclickSlider = (name) => {
        if (name === "left") {
            if (index !== 0) {
                setIndex(index - 1)
            } else {
                setIndex(0)
            }
        }
        else {
            if (index !== image.length - 1) {
                setIndex(index + 1)
            } else {
                setIndex(image.length - 1)
            }
        }
    }

    useEffect(() => {
        setCurrentState(image[index])
    }, [index])

    return (
        <div className="main">
            <div className="slider ">
                <div className='left-arrow'>
                    <button onClick={() => onclickSlider("left")}>{"Previous"}</button>
                </div>
                <div className='images'>
                    <h2 className='main_text'> Images Gallery </h2>
                    <img src={CurrentState.url} className="image" alt={CurrentState.name} />
                    <h3>{CurrentState.name}</h3>
                </div>
                <div className='right-arrow'>
                    <button onClick={() => onclickSlider('right')}>{"Next"}</button>
                </div>
            </div>
        </div>
    );
}

export default Slider;
