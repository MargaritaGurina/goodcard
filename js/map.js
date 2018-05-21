ymaps.ready(function () {

          var myMap = new ymaps.Map('map', {
                  center: [54.753056, 56.002223
      ],
                  zoom: 17
              }, {
                  searchControlProvider: 'yandex#search'
              }),

              // Создаём макет содержимого.
              MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                  '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
              ),

              myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                  hintContent: 'Заезжайте к нам на чай)',
                  balloonContent: 'Адрес офиса: г.Уфа, Проспект октября 46'
              }, {
                  // Опции.
                  // Необходимо указать данный тип макета.
                  iconLayout: 'default#image',
                  // Своё изображение иконки метки.
                  iconImageHref: 'img/icon-metka.png',
                  // Размеры метки.
                  iconImageSize: [55, 60],
                  // Смещение левого верхнего угла иконки относительно
                  // её "ножки" (точки привязки).
                  // iconImageOffset: [80, -90]
                  iconImageOffset: [-27, -30]
              })



          myMap.behaviors.disable('scrollZoom')

          myMap.geoObjects
              .add(myPlacemark)


            
      });