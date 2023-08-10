import React, {useState} from "react";

function Circulo ({color, selected, onClick}) {
    let light = "";
    if (selected) light = "lightOn";

    return (
        <div className={`circle ${color} ${light} ${selected}`} onClick={onClick} ></div>
        );
};

export default Circulo;