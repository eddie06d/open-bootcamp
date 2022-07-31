function initMap() {
    const posicion = [
        {
            lat: -25.363,
            lng: 131.044
        },
        {
            lat: 37.8095,
            lgn: -122.4101
        }, 
        {
            lat: 48.85341,
            lng: 2.3488
        }
    ]

    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion[0]
    })

    let marker0 = new google.maps.Marker({
        position: posicion[0],
        map,
        title: "Posición Inicial 1"
    })
    
    let marker1 = new google.maps.Marker({
        position: posicion[1],
        map,
        title: "Posición Inicial 2"
    })

    let marker2 = new google.maps.Marker({
        position: posicion[2],
        map,
        title: "Posición Inicial 3"
    })
}