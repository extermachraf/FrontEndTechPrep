import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './imageSlider.css';


const ImageSlider = ({ url, limit = 5, page = 1 }) => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMessages, setErrorMessages] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages() {
        try {
            setLoading(true);
            const response = await fetch(`${url}?page=${page}&limit=${limit}`);
            const data = await response.json();
            if (data) {
                setImages(data);
                setLoading(false);
            }
        }
        catch (e) {
            setErrorMessages(e.message);
            setLoading(false);
        }
    }

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }
    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }

    useEffect(() => { if (url !== '') fetchImages(url, limit); }, [url])

    console.log(images);
    if (loading) return <div className='loding'>Loading...</div>

    if (errorMessages) return <div>{errorMessages}</div>
    return (
        <div className='cont'>
            <div className='wrraper'>
                <BsArrowLeftCircleFill onClick={handlePrevious} className='arrow arrow-left' />
                {
                    images && images.length
                        ? images.map((image, index) => {
                            return (
                                <img key={image.id} alt={image.download_url} src={image.download_url} className={currentSlide === index ? "current-image" : "hidden-current-image"} />
                            )
                        })
                        : null
                }
                <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right' />
                <span className='circle-indicators'>
                    {
                        images && images.length ? images.map((_, index) => {
                            return (
                                <button
                                    onClick={() => setCurrentSlide(index)}
                                    key={index}
                                    className='current-indicator'></button>
                            )
                        }) : null
                    }
                </span>
            </div>
        </div>
    )
}

export default ImageSlider
