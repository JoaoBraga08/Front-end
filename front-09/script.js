const cars = [
    {
        brand: "Toyota",
        model: "corolla gr",
        year: 2021
    },
    {
        brand: "Honda",
        model: "integra type r",
        year: 1995
    },   
    {
        brand: "Ford",
        model: "gt500",
        year: 2010
    },
    {
        brand: "Ferrari",
        model: "f430",
        year: 2011
    },
    {
        brand: "AlfaRomeu",
        model: "Giulia",
        year: 2019
    }
];

/* Criando uma Função */
function displayCars() {
// Variavel
const cardList = document.querySelector("#card-list");

cars.forEach((car) =>{
    console.log(car);
    // Criar um elemento div pelo JavaScript
    const cardDiv = document.createElement("div");
     // Criando uma classe css car
     cardDiv.classList.add("car");

     // Criando o modelo
     const cardModel = document.createElement("h2");
     cardModel.textContent = `${car.brand} ${car.model}`;

     // Criando o Ano 
     const cardYear = document.createElement("p");
     cardYear.textContent= `Ano: ${car.year}`;

     cardDiv.appendChild(cardModel);
     cardDiv.appendChild(cardYear);

     cardList.appendChild(cardDiv);

});

}

// Chamar função 
displayCars();