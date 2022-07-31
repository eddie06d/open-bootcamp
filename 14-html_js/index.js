const btn = document.querySelector(".btn");

btn.addEventListener('click', () => {
    alert("click en el botón");
});

$("#btn-jquery").click(() => console.log("Hola, estoy utilizando jQuery"));