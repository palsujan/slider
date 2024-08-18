import React from 'react'

const SliderContent = ({currentIndex, images}) => {
    return(
        <div className='slider-content' style={{transform:`translateX(-${currentIndex*100}%)`}}>
            {images.map((image,index) => (
                <img key={index} src={image.url} alt={`Slide ${index}`} className='slide'/>
            ))}
        </div>
    )
}

export default SliderContent;