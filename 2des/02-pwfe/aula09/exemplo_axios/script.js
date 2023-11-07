// axios.post("http://localhost:3000/imovel", {
//     "corretor_id":1,
// 	"codigo":"APT8877",
// 	"endereco":"Rua do Novo Prédio, 1",
// 	"valor_aluga":5000,
// 	"status_id":1
// })
// .then(resp => {
//     console.log(resp);
// })

// axios.get("http://localhost:3000/imoveis")
// .then(resp => {
//     console.log(resp.data);
// })
// .catch(err => {
//     console.log(err);
// })

api.get("/imoveis")
.then(resp => {
    console.log(resp.data);
})

let imovel = {
        "corretor_id":1,
    	"codigo":"APT9988",
    	"endereco":"Rua do Novo Prédio, 1",
    	"valor_aluga":5000,
    	"status_id":1
}

api.post("/imovel", imovel)
.then(resp => {
    console.log(resp);
})