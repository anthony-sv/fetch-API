const cont =document.querySelector('#contenedor')
const llamarAPI = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character/?page=1")
    const data = await res.json()
    const personajes = data.results

    const resultado = personajes
    .map(generarTarjeta)//(personaje) => generarTarjeta(personaje)
    .join(' ')

    cont.innerHTML = resultado
}
const generarTarjeta = ({image, name, species}) => {
    return `
    <section class="card" id="contenedor">
        <img src="${image}" alt="${name}">
        <h3>${name}</h3>
        <h4>${species}</h4>
    </section>
    `
}
llamarAPI()