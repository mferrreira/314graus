import React from "react"
import './Galeria.css'

export default function Galeria() {

    const images = [
        "https://picsum.photos/400/600",
        "https://picsum.photos/400/601",
        "https://picsum.photos/400/602",
        "https://picsum.photos/400/603",
        "https://picsum.photos/400/604",
        "https://picsum.photos/400/605",
        "https://picsum.photos/400/606",
        "https://picsum.photos/400/607",
        "https://picsum.photos/400/608",
        "https://picsum.photos/400/609",
        "https://picsum.photos/400/610",
        "https://picsum.photos/400/611",
      ];

    return (

        <div id="wrapper" className="p-10">
            <h1 className="text-center text-6xl mb-14">Experiências</h1>
            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <img src={image} alt="gallery-item" className="w-full" />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300">
                    <p className="text-white text-center absolute inset-0 flex items-center justify-center">
                      Image {index + 1}
                    </p>
                  </div>
                </div>
              ))}
            </div>
        </div>
          );
    };
    
