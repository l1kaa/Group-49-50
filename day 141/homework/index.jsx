// import React from 'react';
// import { createRoot } from 'react-dom/client';

const myList = (
    <ul>
        <li>Hey</li>
        <li>Hey</li>
        <li>Hey</li>
    </ul>
);

const p = <p>Hello world</p>;

const myDiv = (
    <div className="box-1">
        Hello
    </div>
);

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

root.render(
    <>
        {myList}
        {p}
        {myDiv}
        <h1>{2 + 3}</h1>
    </>
);




// const myList = (
//     <ul>
//         <li>Hey</li>
//         <li>Hey</li>
//         <li>Hey</li>
//     </ul>
// );

// const p = <p>Hello world</p>; // p is a jsx element. this whole line is a jsx expression.

// const container = document.getElementById('app');
// const root = createRoot(container);
// // root.render(myList);

// const myDiv = 
//     <div className="box-1">
//         Hello
//     </div>

// // root.render(myDiv);

// // root.render(<h1>{2 + 3}</h1>);

// root.render(
//     <div>
//         {myList}
//         {myDiv}
//         <h1>{2 + 3}</h1>
//     </div>
// );
