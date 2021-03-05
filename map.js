if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {

        let currentLng = position.coords.longitude;
        let currentLat = position.coords.latitude;
        console.log(currentLng, currentLat)
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


        addMarker(map,currentLng,currentLat);
    });

}

function addMarker(map,lng, lat) {
    var marker = new mapboxgl.Marker({
        color: "#FF1234",
        draggable: true
    }).setLngLat([lng, lat])
        .addTo(map);

    map.flyTo({
        center: [lng, lat],
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });

}

