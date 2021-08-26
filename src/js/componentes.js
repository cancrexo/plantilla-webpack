import '../css/componentes.css';
// import metallicalogo from '../assets/img/logometallica.png';

export const saludar = (miNombre) => {
    //console.log('Creando etiqueta h1!!!');
    const h1 = document.createElement('h1');
    h1.innerText = `Esto es un h1, ${miNombre}`;
    document.body.append(h1);

	// Imaxe
	// console.log(metallicalogo);
	// const myImg = document.createElement('img');
	// myImg.src = metallicalogo;
	// document.body.append(myImg);
}