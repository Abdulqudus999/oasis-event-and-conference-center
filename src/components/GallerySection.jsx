import React from 'react'
import galleryImage1 from '../assets/oasis-image7.jpg'
import galleryImage2 from '../assets/oasis-image8.jpg'
import galleryImage3 from '../assets/oasis-image9.jpg'
import galleryImage4 from '../assets/oasis-image10.jpg'
import galleryImage5 from '../assets/oasis-image11.jpg'
import galleryImage6 from '../assets/oasis-image12.jpg'


const GallerySection = () => {
    const images = [
    {
      id: 1,
      src: galleryImage1,
      alt: "image 1",
    },
    {
      id: 2,
      src: galleryImage2,
      alt: "image 2",
    },
    {
      id: 3,
      src: galleryImage3,
      alt: "image 3",
    },
    {
      id: 4,
      src: galleryImage4,
      alt: "image 4",
    },
    {
      id: 5,
      src: galleryImage5,
      alt: "image 5",
    },
    {
      id: 6,
      src: galleryImage6,
      alt: "image 6",
    }
  ];

  return (
    <section className='mt-14' id='gallery'>
      <div className='mb-6'>
        <h2  className='font-bold text-2xl md:text-4xl tracking-wider mb-2 text-center relative'>Event Gallery
          <span className='h-0.5 w-1/4 left-[50%] -bottom-0.5 absolute transform -translate-x-[50%] -translate-y-[50%] bg-gradient-to-r from-blue-800 via-green-500 to-orange-500'></span>
        </h2>
        <p className='text-neutral-800 tracking-wider text-center'>Discover the beauty and elegance of our venues</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="aspect-[3/2] overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 group-hover:ring-white/20 transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GallerySection
