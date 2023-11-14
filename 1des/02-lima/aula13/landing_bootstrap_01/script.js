var objs = [
	{
		"id": "1",
		"produto": "Camiseta",
		"tipo": "vestuário",
		"custo": "30.00",
		"preco": "60.00",
		"valor": "50.00",
		"img": "https://raw.githubusercontent.com/wellifabio/senai2023/main/1des/02-lima/aula13/assets/camiseta.webp"
	},
	{
		"id": "2",
		"produto": "Calça",
		"tipo": "vestuário",
		"custo": "50.00",
		"preco": "100.00",
		"valor": "80.00",
		"img": "https://raw.githubusercontent.com/wellifabio/senai2023/main/1des/02-lima/aula13/assets/calsa.jpg"
	},
	{
		"id": "3",
		"produto": "Boné",
		"tipo": "vestuário",
		"custo": "15.00",
		"preco": "40.00",
		"valor": "25.00",
		"img": "https://raw.githubusercontent.com/wellifabio/senai2023/main/1des/02-lima/aula13/assets/bone.jpg"
	},
	{
		"id": "4",
		"produto": "Meia",
		"tipo": "vestuário",
		"custo": "5.00",
		"preco": "10.00",
		"valor": "8.00",
		"img": "https://raw.githubusercontent.com/wellifabio/senai2023/main/1des/02-lima/aula13/assets/meia.png"
	},
	{
		"id": "5",
		"produto": "Cueca",
		"tipo": "vestuário",
		"custo": "5.00",
		"preco": "10.00",
		"valor": "8.00",
		"img": "https://raw.githubusercontent.com/wellifabio/senai2023/main/1des/02-lima/aula13/assets/cueca.webp"
	},
	{
		"id": "6",
		"produto": "Mini fusca",
		"tipo": "decoração",
		"custo": "100.00",
		"preco": "200.00",
		"valor": "150.00",
		"img": "https://raw.githubusercontent.com/wellifabio/senai2023/main/1des/02-lima/aula13/assets/fusca.jpg"
	},
	{
		"id": "7",
		"produto": "Mini moto",
		"tipo": "decoração",
		"custo": "120.00",
		"preco": "240.00",
		"valor": "200.00",
		"img": "https://raw.githubusercontent.com/wellifabio/senai2023/main/1des/02-lima/aula13/assets/moto.webp"
	},
	{
		"id": "8",
		"produto": "Mini caminhão",
		"tipo": "decoração",
		"custo": "150.00",
		"preco": "300.00",
		"valor": "250.00",
		"img": "https://raw.githubusercontent.com/wellifabio/senai2023/main/1des/02-lima/aula13/assets/caminhao.webp"
	},
	{
		"id": "9",
		"produto": "Mini bicicleta",
		"tipo": "decoração",
		"custo": "80.00",
		"preco": "160.00",
		"valor": "120.00",
		"img": "https://raw.githubusercontent.com/wellifabio/senai2023/main/1des/02-lima/aula13/assets/bicicleta.webp"
	},
	{
		"id": "10",
		"produto": "Miniatura Thor",
		"tipo": "colecionáveis",
		"custo": "200.00",
		"preco": "400.00",
		"valor": "350.00",
		"img": "https://raw.githubusercontent.com/wellifabio/senai2023/main/1des/02-lima/aula13/assets/thor.webp"
	},
	{
		"id": "11",
		"produto": "Miniatura Hulk",
		"tipo": "colecionáveis",
		"custo": "200.00",
		"preco": "400.00",
		"valor": "350.00",
		"img": "https://raw.githubusercontent.com/wellifabio/senai2023/main/1des/02-lima/aula13/assets/hulk.webp"
	},
	{
		"id": "12",
		"produto": "Miniatura Homem de Ferro",
		"tipo": "colecionáveis",
		"custo": "200.00",
		"preco": "400.00",
		"valor": "350.00",
		"img": "https://raw.githubusercontent.com/wellifabio/senai2023/main/1des/02-lima/aula13/assets/homemferro.JPEG"
	}
];
console.table(objs);
const container = document.getElementById('container');
objs.forEach(p =>{
    const model = document.getElementById('model0').cloneNode(true);
    model.setAttribute('id', 'model'+p.id);
    model.querySelector('.card-title').innerHTML = p.tipo;
    model.querySelector('.card-text').innerHTML = p.produto;
    model.querySelector('.img').src = p.img;
    model.querySelector('.card-footer').innerHTML = `R$ ${parseFloat(p.preco).toFixed(2)}`;
    container.appendChild(model);
});
document.getElementById('model0').remove();