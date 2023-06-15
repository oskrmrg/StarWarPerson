const consumoStarWars=(contador, x)=>{
    //Se incrementa de uno a uno el personaje desde la API
    let suma = contador + 1
    let endpoint = 'https://swapi.dev/api/people/' + suma ;
    fetch(endpoint)
    .then (respuesta =>respuesta.json())
    .then (personaje=>{
        //Se crean las variables para la vinculación de los datos del Json y extraer la información
        let datoNombre = personaje.name
        let datoAltura = personaje.height
        let datoPeso  = personaje.mass
        let color = 'color' + x

        //Se crean dinámicamente los Div's que contienen las cartas y se crea el contenedor padre, que llama a la clase del Dom
        let contenedor = document.getElementsByClassName('contenedor')[x]

        //Se crea la variable para que coloque un Div, cuando se ejecute el evento MouseEnter, y se crean los Div's con la información solicitada, por el contenedor Hijo
        let carta = document.createElement('div')
        carta.setAttribute('class','card m-3 ancho')
        contenedor.appendChild(carta)

        //Se crea la variable para que coloque un Div, cuando se ejecute el evento MouseEnter, y se crean los Div's con clase "Row"
        let row = document.createElement('div')
        row.setAttribute('class','row g-0')
        carta.appendChild(row)

        //Se crea la variable para que coloque un Div, cuando se ejecute el evento MouseEnter, y se crean los Div's con clase "Col1"
        let col1 = document.createElement('div')
        col1.setAttribute('class','col-md-2 d-flex justify-content-center align-items-center')
        row.appendChild (col1)

        //Contenedor padre ==> Contenedor Carta Hijo ==> Contenedor Row Hijo ==> Contenedor Col1 Hijo ==> Contenedor Circulo Hijo
        let circulo = document.createElement('div')
        circulo.setAttribute('class', `circulo ${color}`)
        col1.appendChild(circulo)

        //Se crea la variable para que coloque un Div, cuando se ejecute el evento MouseEnter, y se crean los Div's con clase "Col2" 
        let col2 = document.createElement('div')
        col2.setAttribute('class','col-md-10')
        row.appendChild(col2)

        //Se crea la variable para que cuando se ejecute el evento MouseEnter se creen los Div's de clase "CardTwo", Hijo de Col2
        let cardTwo = document.createElement('div')
        cardTwo.setAttribute('class','card-body')
        col2.appendChild(cardTwo)

        //Se crea el elemento "Nombre" en el Dom para colocarlo de titulo en las card's
        let nombre = document.createElement('h5')
        nombre.setAttribute('class','card-title')
        nombre.innerHTML = datoNombre
        cardTwo.appendChild(nombre)

        //Se crea el elemento "parrafo" en el Dom para agregar contenido al parrafo de las card's
        let parrafo = document.createElement('p')
        parrafo.setAttribute('class','card-text"')
        parrafo.innerHTML = `<b>Altura</b>: ${datoAltura} <br><b>Peso:</b> ${datoPeso}`
        cardTwo.appendChild(parrafo)

    })
}


//Se crea un array para contabilizar 5 elementos, partiendo de 0 a 4
let array1 = [0,1,2,3,4]

//Se recorre el array, colocandole un tiempo de espera
function* recorrerArray1() {
    let i = 0
    yield array1[i]
    i++
    yield array1[i]
    i++
    yield array1[i]
    i++
    yield array1[i]
    i++
    yield array1[i]
    i++
    }


let numeroDeTurno = recorrerArray1()

//La variable se incremente en el primer rango
let a = 0

$('#rango1').mouseenter (() => {
    
    if (array1.includes(a)) {
        let contador = numeroDeTurno.next().value 
        consumoStarWars(contador,0)
        a++
    }
})

let array2 = [5,6,7,8,9]//Segundo rango
    function* recorrerArray2() {
    let i = 0
    yield array2[i]
    i++
    yield array2[i]
    i++
    yield array2[i]
    i++
    yield array2[i]
    i++
    yield array2[i]
    i++
    }

let numeroDeTurno2 = recorrerArray2()
let b = 5

$('#rango2').mouseenter (() => {
    
    if (array2.includes(b)) {
        let contador = numeroDeTurno2.next().value 
        consumoStarWars(contador,1)
        b++
    } 
})


let array3 = [10,11,12,13,14]
function* recorrerArray3() {
    let i = 0
    yield array3[i]
    i++
    yield array3[i]
    i++
    yield array3[i]
    i++
    yield array3[i]
    i++
    yield array3[i]
    i++
    }

let numeroDeTurno3 = recorrerArray3()
let c = 10

$('#rango3').mouseenter (() => {

    if (array3.includes(c)) {//Se empieza en el rango 3
        let contador = numeroDeTurno3.next().value 
        consumoStarWars(contador,2)
        c++
    } 
})