import '../css/componentes.css';


export const saludar = (miNombre) => {
    console.log('Creando etiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `Esto es un h1, ${miNombre}`;
    document.body.append(h1);
}