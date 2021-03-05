if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {

        let currentLng = position.coords.longitude;
        let currentLat = position.coords.latitude;
        mapboxgl.accessToken = 'pk.eyJ1IjoiZGthbDAwMDciLCJhIjoiY2thOWI5NTVoMDZtYzJ3bWdtbDlud29iZCJ9.rjFCx-CDthjvyMJWe5KjsQ';
        var map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [145.0449, -37.8771], // starting position [lng, lat]
            zoom: 9 // starting zoom
        });

        map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                trackUserLocation: true
            })
        );


        console.log(currentLng, currentLat);
    })
}

function addMarker(lng, lat) {
    // Set options
    var marker = new mapboxgl.Marker({
    color: "#FF1234",
    draggable: true
    }).setLngLat([30.5, 50.5])
    .addTo(map);

    map.flyTo({
        center: [lng, lat],
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });

}


addMarker(20,100);
//removeMarker(markerName);