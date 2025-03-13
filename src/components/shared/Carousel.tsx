import React from 'react';

const CarouselList = () => {
    return (
        <div className="w-full">
        <div className="carousel centered-slide-carousel">
        <div className="carousel-body">
         <div className="carousel-slide">
           <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
             <span className="text-3xl font-semibold text-indigo-600">Slide 1 </span>
           </div>
         </div>
         <div className="carousel-slide">
           <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
             <span className="text-3xl font-semibold text-indigo-600">Slide 2 </span>
           </div>
         </div>
         <div className="carousel-slide">
           <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
             <span className="text-3xl font-semibold text-indigo-600">Slide 3 </span>
           </div>
         </div>
         <div className="carousel-slide">
           <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
             <span className="text-3xl font-semibold text-indigo-600">Slide 4 </span>
           </div>
         </div>
         <div className="carousel-slide">
           <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
             <span className="text-3xl font-semibold text-indigo-600">Slide 5 </span>
           </div>
         </div>
         <div className="carousel-slide">
           <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
             <span className="text-3xl font-semibold text-indigo-600">Slide 6 </span>
           </div>
         </div>
        </div>
        <div className="swiper-pagination "></div>
        </div>
        </div>
    );
}

export default CarouselList;