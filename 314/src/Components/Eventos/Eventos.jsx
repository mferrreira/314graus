import { React, useState, useRef, useEffect } from "react";
import './Eventos.css';
import axios from 'axios';

export default function Eventos() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);

  useEffect(()=> {
    axios.get('http://localhost:4000/eventos')
    .then(res => {
        console.log(res)
        setEventos(res.data)
        setLoading(false);
    })
    .catch(e => console.log(e))
  }, [])

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

  if (loading) {
    return <div className="text-center text-lg">carregando...</div>;
  }

  return (
      <div id="wrapper" className="text-black">
          <h1 className="text-center text-7xl">Compre agora</h1>
          <div className="relative pt-10" ref={ref}>
              <div className="flex justify-center">
                  {eventos.map((item, index) => (
                      <div key={item.id} className="w-52 h-52 rounded-full bg-gray-300 cursor-pointer mx-2 my-8" onClick={() => handleClick(index)}>
                          <div className="flex justify-center items-center h-full">
                              <p>{item.name}</p>
                          </div>       
                      </div>
                  ))}
              </div>
              {selectedItem !== null && (
                  <div className="flex justify-center content-center mt-10">
                      <div
                          className=" w-[50vw] h-96 bg-white shadow-lg rounded-lg p-4 ">
                          <h2 className="font-bold text-lg text-center">{eventos[selectedItem].name}</h2>
                          <p className="text-gray-600">{eventos[selectedItem].description}</p>
                      </div>
                  </div>
              )}
          </div>
      </div>
  );
};
