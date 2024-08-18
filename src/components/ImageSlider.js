import React, { useEffect } from 'react';


const ImageSlider = ({apiEndpoit}) => {
    const [images, setImage] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(()=>{
        const fetchImages = async() =>{
            try{
                const response = await fetch(apiEndpoit);
                const data = await response.json();
                setImage(data)
            }catch(error){
                console.error('Error fetching images:', error)
            }
        };
        fetchImages();
    },[apiEndpoit])

    const nextSlide = ()=>{
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
    const prevSlide = () =>{
        setCurrentIndex(()=>
            prevIndex === 0 ? images.length - 1:prevIndex - 1
        );
    };
    const goToSlide = (index) =>{
        setCurrentIndex(index);
    }
    if(images.length === 0 ){
        return <div>Loading...</div>;
    }
  return (
    <div>SliderContent</div>
  )
  return (
    <div>ImageSlider</div>
  )
}

export default ImageSlider;