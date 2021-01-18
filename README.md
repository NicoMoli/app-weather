# Aplicación de test App-Weather

Aplicación construida en React Native.

## Estructura de carpetas utilizada:

* app/screens -> contiene las vistas UI (screens) que se renderizan en pantalla.
* app/componentes -> contiene los distintos componentes construidos para armar la app.
* app/shared -> contiene configuraciones usadas a través de toda la aplicación, en este caso, la lista de ciudades y una lista de íconos del clima.
* app/redux -> contiene la configuración del store y de los slices-reducers para poder utilizar redux-toolkit.
* app/routes -> configuración del ruteo a las distintas pantallas.
* app/customsHooks -> contiene hooks hechos a medida, según sea necesario.

## Librerías utilizadas:

* Redux-toolkit (versión simplificada de redux.js) https://redux-toolkit.js.org/
* Expo https://expo.io/ . Es una plataforma que sirve de gran ayuda al momento de crear el proyecto, debuggear, testear y deployar en plataformas nativas.
* React navigation https://reactnavigation.org/ . Para realizar la navegación entre pantallas.
* Axios, utilizada para realizar las peticiones http a servicios externos. https://www.npmjs.com/package/axios

## Funcionamiento de la aplicación:

* Al iniciar, se mostrará el clima según la ubicación actual (en este caso, según la ubicación retornada por la api construida). Podremos ver, temperatura
  actual, mínima, máxima y la hora de la última actualización. Luego debajo, se verá un listado con el prónostico del tiempo a 5 días en dicha ubicación.
  En la parte superior derecha de la pantalla, veremos un ícono de búsqueda que al presionarlo abrirá la pantalla con las lista de ciudades para consultar el clima.
  También, en la parte superior izquierda de la pantalla principal, tenemos un ícono de ubicación, que al presionarlo, mostrará los datos según la ubicación actual.
  


