function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -27.451383713341833, lng: -58.98692200668488};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 13,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Resistencia, Chaco' // Title Location
    });
}
