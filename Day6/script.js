// let a = () => {
//     console.log("Arrow function");
// }
// a();
// let b = () => console.log("Arrow function 2");
// b();

// let c = (a, b) => {
//     return a + b;
// }
// console.log(c(2, 3));

let para = document.getElementById("para");
const display = function () {
    para.innerText = "Hello";
    para.style.backgroundColor = "beige";
    para.textContent = "New Heading" ;
}

let change = () => {
    document.getElementById('link');
    link.setAttribute("href", "www.google.com");
    link.textContent = "Google";
}