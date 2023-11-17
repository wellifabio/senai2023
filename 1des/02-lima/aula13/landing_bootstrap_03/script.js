//Objetos do DOM
const container = document.getElementById('container');
const form = document.getElementById('formDisabled');

//Lista de objetos
var objs = [
	{
		"id": "1",
		"produto": "Camiseta",
		"tipo": "Vestuário",
		"custo": "30.00",
		"preco": "60.00",
		"valor": "50.00",
		"img": "https://raw.githubusercontent.com/wellifabio/senai2023/main/1des/02-lima/aula13/assets/camiseta.webp"
	},
	{
		"id": "2",
		"produto": "Calça",
		"tipo": "Vestuário",
		"custo": "50.00",
		"preco": "100.00",
		"valor": "80.00",
		"img": "https://raw.githubusercontent.com/wellifabio/senai2023/main/1des/02-lima/aula13/assets/calsa.jpg"
	},
	{
		"id": "3",
		"produto": "Boné",
		"tipo": "Vestuário",
		"custo": "15.00",
		"preco": "40.00",
		"valor": "25.00",
		"img": "https://raw.githubusercontent.com/wellifabio/senai2023/main/1des/02-lima/aula13/assets/bone.jpg"
	},
	{
		"id": "4",
		"produto": "Meia",
		"tipo": "Vestuário",
		"custo": "5.00",
		"preco": "10.00",
		"valor": "8.00",
		"img": "https://raw.githubusercontent.com/wellifabio/senai2023/main/1des/02-lima/aula13/assets/meia.png"
	},
	{
		"id": "5",
		"produto": "Cueca",
		"tipo": "Vestuário",
		"custo": "5.00",
		"preco": "10.00",
		"valor": "8.00",
		"img": "https://raw.githubusercontent.com/wellifabio/senai2023/main/1des/02-lima/aula13/assets/cueca.webp"
	},
	{
		"id": "6",
		"produto": "Mini fusca",
		"tipo": "Decoração",
		"custo": "100.00",
		"preco": "200.00",
		"valor": "150.00",
		"img": "https://raw.githubusercontent.com/wellifabio/senai2023/main/1des/02-lima/aula13/assets/fusca.jpg"
	},
	{
		"id": "7",
		"produto": "Mini moto",
		"tipo": "Decoração",
		"custo": "120.00",
		"preco": "240.00",
		"valor": "200.00",
		"img": "https://raw.githubusercontent.com/wellifabio/senai2023/main/1des/02-lima/aula13/assets/moto.webp"
	},
	{
		"id": "8",
		"produto": "Mini caminhão",
		"tipo": "Decoração",
		"custo": "150.00",
		"preco": "300.00",
		"valor": "250.00",
		"img": "https://raw.githubusercontent.com/wellifabio/senai2023/main/1des/02-lima/aula13/assets/caminhao.webp"
	},
	{
		"id": "9",
		"produto": "Mini bicicleta",
		"tipo": "Decoração",
		"custo": "80.00",
		"preco": "160.00",
		"valor": "120.00",
		"img": "https://raw.githubusercontent.com/wellifabio/senai2023/main/1des/02-lima/aula13/assets/bicicleta.webp"
	},
	{
		"id": "10",
		"produto": "Miniatura Thor",
		"tipo": "Colecionáveis",
		"custo": "200.00",
		"preco": "400.00",
		"valor": "350.00",
		"img": "https://raw.githubusercontent.com/wellifabio/senai2023/main/1des/02-lima/aula13/assets/thor.webp"
	},
	{
		"id": "11",
		"produto": "Miniatura Hulk",
		"tipo": "Colecionáveis",
		"custo": "200.00",
		"preco": "400.00",
		"valor": "350.00",
		"img": "https://raw.githubusercontent.com/wellifabio/senai2023/main/1des/02-lima/aula13/assets/hulk.webp"
	},
	{
		"id": "12",
		"produto": "Miniatura Homem de Ferro",
		"tipo": "Colecionáveis",
		"custo": "200.00",
		"preco": "400.00",
		"valor": "350.00",
		"img": "https://raw.githubusercontent.com/wellifabio/senai2023/main/1des/02-lima/aula13/assets/homemferro.JPEG"
	}
];

function preencherModais() {
	container.innerHTML = `
			<div id="model0" class="card col-lg-3 m-2 justify-content-between">
				<h2 class="card-title text-center">Tipo</h2>
				<p class="card-text">Produto</p>
				<img alt="Imagem Padrão" class="img">
					<button class="btn btn-secondary" data-toggle="modal" data-target="#detalhes">Detalhes</button>
					<p class="card-footer">Preço</p>
			</div>`;
	objs.forEach((p, i) => {
		const model = document.getElementById('model0').cloneNode(true);
		model.setAttribute('id', 'model' + p.id);
		model.querySelector('.card-title').innerHTML = p.tipo;
		model.querySelector('.card-text').innerHTML = p.produto;
		model.querySelector('.img').src = p.img;
		model.querySelector('.card-footer').innerHTML = `R$ ${parseFloat(p.preco).toFixed(2)}`;
		model.querySelector('.btn').setAttribute("onclick", `preencherDetalhes(${i})`);
		container.appendChild(model);
	});
	document.getElementById('model0').remove();
}

function preencherDetalhes(indice) {
	form.indice.value = indice;
	form.produto.value = objs[indice].produto;
	form.tipo.value = objs[indice].tipo;
	form.custo.value = objs[indice].custo;
	form.preco.value = objs[indice].preco;
	form.valor.value = objs[indice].valor;
	form.img.src = objs[indice].img;
}

function comprar(indice){
	objs.splice(indice,1);
	preencherModais();
	$('#detalhes').modal('hide');
}