import React from "react";

function Card({ name, price, color, img, className }) {
    return (
        <div className={`${className} flex-col items-center text-center`}>
        <img src={img} alt={name} className="w-50 h-50 object-cover rounded-md mb-2" />
        <h1 className="text-lg font-semibold">{name}</h1>
        <h2 className="text-gray-700">Color: {color}</h2>
        <h2 className="text-gray-900 font-bold">${price}</h2>
        </div>
    );
}

export default Card;
