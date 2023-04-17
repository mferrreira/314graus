import { React, useState, useRef, useEffect } from "react"
import './Eventos.css'
import axios from 'axios'

const data = [
    {
        id: 1,
        name: "Item 1",
        description: "Description of item 1",
    },
    {
        id: 2,
        name: "Item 2",
        description: "Description of item 2",
    },
    {
        id: 3,
        name: "Item 3",
        description: "Description of item 3",
    },
];


export default function Eventos() {
    const [selectedItem, setSelectedItem] = useState(null);
    const ref = useRef(null);

    const handleClick = (index) => {
        setSelectedItem(index);
    };

    const handleOutsideClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setSelectedItem(null);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <div id="wrapper" className="text-black">
            <h1 className="text-center text-7xl">Garanta já seu ingresso</h1>
            <div className="relative pt-10" ref={ref}>
                <div className="flex justify-center">
                    {data.map((item, index) => (
                        <div
                            key={item.id}
                            className="w-52 h-52 rounded-full bg-gray-300 cursor-pointer mx-2 my-8"
                            onClick={() => handleClick(index)}
                        ></div>
                    ))}
                </div>
                {selectedItem !== null && (
                    <div className="flex justify-center content-center mt-10">
                        <div
                            className=" w-72 h-72 bg-white shadow-lg rounded-lg p-4 ">
                            <h2 className="font-bold text-lg">{data[selectedItem].name}</h2>
                            <p className="text-gray-600">{data[selectedItem].description}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};





