const frame = document.getElementById('frame');
// const arr = [`<img src="./images/Dairy.png" alt="" id="photo">`,
//     ` 

//     <img src="./images/Juice (1).png" alt="" id="photo">
//     `,
//     `<img src="./images/Desserts.png" alt="" id="photo">`,
// ]
const arre = [

    `
<div id="photo">
    <h3>DAIRY PRODUCTS</h3>
    <img src="./images/Dairy.png" alt="">
</div>`,
    `<div id="photo">
    <h3>JUICE PRODUCTS</h3>
    <img src="./images/Juice (1).png" alt="">
</div>`,
    `<div id="photo">
    <h3>DESSERT PRODUCTS</h3>
    <img src="./images/Desserts.png"  alt="">
</div>`
]
let m = 0;

setInterval(() => {
    frame.innerHTML = arre[m]
    m++;
    if (m === arre.length) {
        m = 0;
    }
}, 5000);
