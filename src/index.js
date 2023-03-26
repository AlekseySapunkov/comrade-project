ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
        center: [42.088403, -88.004589],
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    });

myMap.geoObjects
    .add(new ymaps.Placemark([42.09, -88.005], {
        balloonContent: 'цвет <strong>голубой</strong>',
        iconCaption: ''
    }, {
        preset: 'islands#blueCircleDotIconWithCaption',
        iconCaptionMaxWidth: '50'
    }));
}
