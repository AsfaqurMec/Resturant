/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './Gallery.css';

const GalleryCard = ({gallery, overlayContent}) => {
    const {image, name, description}=gallery;
    return (
        <>
        <div className="cart h-60  bg-black shadow-xl ">
  <figure><img className='h-72 w-full' src={image} alt="Shoes" /></figure>
  
  <div className="overlay">
        {overlayContent}
      </div>
  </div>

        
        </>       
    );
};

export default GalleryCard;