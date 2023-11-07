const origem = document.querySelector(".origem");
const destino = document.querySelector(".destino");

const defaultZoom = 15;

var map;

function inicializarMapa() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -23.5329, lng: -46.3554 },
        zoom: defaultZoom,
    });

    carregarLocalizacao();
}

function carregarLocalizacao() {
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;

        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat, lng },
            zoom: defaultZoom
        });

        map.addListener('click', (e) => {
            adicionarMarcador(map, e.latLng.lat(), e.latLng.lng());
        })
    });
}

function adicionarMarcador(map, lat, lng) {
    var myLatlng = new google.maps.LatLng(lat, lng);

    const icon = {
        url: "https://cdn-icons-png.flaticon.com/512/3975/3975047.png",
        scaledSize: new google.maps.Size(30, 30),
    };

    var marker = new google.maps.Marker({
        position: myLatlng,
        icon,
        title: "Meu Marcador"
    });

    const infoWindow = new google.maps.InfoWindow();

    marker.addListener('click', (e) => {
        infoWindow.close();
        infoWindow.setContent(
            `
            <h3>${marker.getTitle()}</h3>
            <p>Latitude: ${marker.getPosition().lat()}</p>
            <p>Longitude: ${marker.getPosition().lng()}</p>
            `
        );
        infoWindow.open(marker.getMap(), marker);
    });

    marker.setMap(map);
}

function desenharRota() {
    if (origem.value != "" || destino.value != "") {
        const directionService = new google.maps.DirectionsService();
        const directionRenderer = new google.maps.DirectionsRenderer({
            draggable: true
        });

        directionRenderer.setMap(map);

        directionService.route({
            origin: origem.value,
            destination: destino.value,
            travelMode: google.maps.TravelMode.DRIVING
        }).then(resp => {
            directionRenderer.setDirections(resp)
        }).catch(err => {
            console.log(`${err}`);
        })
    }
}
