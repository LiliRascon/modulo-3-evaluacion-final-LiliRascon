![Adalab](https://firebasestorage.googleapis.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LZZ7_HREMZMUMXiWrCj%2F-LZZ7xHB1bnkIxUrw_Yx%2F-LZZ83Upae8RuHPxHpB8%2Fadalab_brand.png?generation=1551089555419087&alt=media)

![di](https://ibb.co/0XGhRgF)

## modulo-3-evaluación-final-LiliRascón    
## Página web de Rick and Morty  💻 !!



> => Evaluación final. ✨ 

	
<h3 text-align="center">LILIANA RASCÓN ESTRADA  <a href="" target="_blank"> Evaluación Final React</a>.</h3>

Mi nombre es Liliana Rascón Estrada, alumna de Adalab promo Idelisa, nerviosa con este proyecto pero ilusionada por poder realizarlo con éxito.

=>En este repositorio encontrarás mi evaluación final, es el modulo 3 y ha sido creado con React.

El enunciado consiste en lo siguiente:

El ejercicio consiste en desarrollar una página web con un listado de personajes de Rick and Morty, que podemos filtrar por el nombre del personaje. Vamos a usar React para realizarlo.
Vamos de definir las distintas partes del ejercicio: 

 1. Listado de personajes

En primer lugar, vamos a realizar una web con el listado de personajes de Rick and Morty.  Para eso, vamos a utilizar el servicio de [https://rickandmortyapi.com/documentation/#get-all-characters] que nos devuelve información sobre los primeros 20 personajes de la serie. Sobre cada uno, vamos a pintar al menos:

 - Foto
 - Nombre
 - Especie

Si este servicio no funcionase (porque nos hubieran baneado) tenemos una url de backup:  
[https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json]

Para esta primera parte del ejercicio es suficiente pintar la información sin maquetar.

2. Filtrado de personajes

Ahora que ya tenemos el listado de personajes en pantalla, la segunda parte consiste en poder buscarlos por nombre. Para eso, añadimos un input a la interfaz, de forma que al ir escribiendo un nombre queden en la interfaz sólo los personajes cuyo nombre contiene las letras escritas.  En la imagen que aparece al principio, al escribir 'Ric' aparecen personajes cuyo nombre completo contiene esas letras en ese orden.


3. Componentes del listado de personajes  

El listado debe tener los siguientes componentes como mínimo:
 - Componente para filtros
 - Componente para listado
 - Componente para la tarjeta de cada personaje del listado
 - Componente para el detalle de cada personaje

Como en el ejemplo:

```
/
`- _Filters
`- _CharacterList
   |   `CharacterCard
`- _CharacterDetail

```


4. Detalle de personajes

Vamos a implementar una nueva funcionalidad: al hacer clic sobre la tarjeta de un personaje, su información aparecerá a pantalla completa. Para hacer esto usaremos rutas y React router. En la pantalla de detalle aparecerá además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está vivo o muerto.


5. Detallitos de calidad

 - Como nos gusta cuidar la semántica, el campo de texto debe estar recubierto por una etiqueta <form />.  
 - Si estando en el campo de filtrado pulsamos intro debéis impedir que el navegador navegue o cambie la ruta sin querer.
 - Si se busca por un texto por ejemplo "XXX" y no hay ningún personaje que coincida con dicho texto se debe mostrar un mensaje del tipo "No hay ningún personaje que coincida con la palabra XXX". 
 - El filtro debe filtrar independientemente de que la usuaria introduzca el texto en mayúsuclas o minúsculas.
 - Al entrar en el detalle de un personaje y a continuación pulsar atrás, el campo de texto debe mostrar el texto que tenía anteriormente.

 6. BONUS: Mejoras visuales

 Para terminar, podéis realizar algunas mejoras visuales del ejercicio. Por ejemplo:
 - Mostrar la especie y si un personajes está muerto con un icono.
 - Usar algún sistema de grid para pintar el listado de personajes.
 - Usar algún sistema de grid para pintar el listado de personajes.


7. BONUS: URL compartible

 - Como ejercicio extra os proponemos que la URL del detalle de personaje sea compartible, es decir, que si visitamos esa URL directamente en el navegador se vea el detalle del personaje.
 - Y en el caso de que el usuario navegue a una URL inexistente como por ejemplo http://localhost:3000/#/detail/12345 (el id 12345 no existe) debemos mostrar un mensaje del tipo "El personaje que buscas no existe".


8. BONUS: Ordenación

Un extra interesante sería que ordenáseis el listado de personajes alfabéticamente por nombre.


Recursos

Puedes descargar el logo desde [https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png]


Criterios de evaluación

Vamos a listar los criterios de evaluación de este ejercicio. Si no superas al menos el 80% de estos criterios o
no has superado algún criterio clave (marcados con *) te pediremos que realices una re-evaluación con el fin de que termines el curso mejor preparada y enfrentes tu primera experiencia profesional con más seguridad. En caso contrario, estás aprendiendo al ritmo que hemos pautado para poder afrontar los conocimientos del siguiente módulo.

React básico

 - Crea componentes con sintaxis correcta .
 - Crea una estructura adecuada de componentes .
 - Usa las props para pasar datos a componentes hijos .
 - Sabe pintar listados .
 - Sabe usar métodos funcionales de array (map, filter, etc.) .
 - Usa el estado para gestionar información de la interfaz .
 - El componente principal App.js maneja el estado de la aplicación .
 - Usa eventos en React para atender a interacciones del usuario .
 - Usa métodos / hooks del ciclo de vida para las peticiones al servidor.
 - Escribe un código sólido, sin errores en la consola .
 - Usa propTypes para evitar errores de tipado.
 - Tiene soltura a la hora de realizar cambios en el ejercicio presencial.


React router

- Crea rutas navegables dentro de una aplicación


Issues
- Haber resuelto las issues de la evaluación intermedia

Otros criterios a tener en cuenta

- Usar inglés para nombres de variables, funciones, clases, mensajes de commit, nombres de ficheros. 
- El repositorio de GitHub debe tener README.



## Autora ✒️  

🛡 🔮 🛡 | Liliana Rascón |  [GitHub](https://github.com/LiliRascon)   | 🛡 🔮 🛡


 
## Contenido

- [Autora](#autora)
- [Objetivos del curso](#objetivos)
- [Instalación](#instalación)
- [Especificaciones](#especificaciones)
- [Metodología](#metodología-de-trabajo)
    - [Remoto](#remoto)
    - [GitHub](#github)
- [Estructura del proyecto](#estructura)
- [Contribuye](#contribuye)
- [Agradecimientos](#agradecimientos)
- [Recursos](#recursos)
- [Creado](#creado) 

## Objetivos

Hacer uso de React con las siguientes funcionalidades:

1.  Pintar elementos. :thumbsup:
    
2.  Comprender cómo manipular una página a través de componentes. :thumbsup:
    
3.  Manejo de estados y uso de datos por medio de props. :thumbsup:
    
4.  Realizar peticiones al servidor y almacenar datos en local. :thumbsup:
    
5.  Uso de React Router :thumbsup:
    
6.  Utilización Git :octocat: 
    

## Instalación 🔧

Necesitarás instalar  📋 [Node.js](https://nodejs.org/) para trabajar con este repositorio, luego:

1. Descarga o clona el repositorio. ⚙️
```sh
$ git clone https://github.com/Adalab/project-promo-i-module-3-team-2-afternoon
```
2. Abre el proyecto en tu editor de codigo (Visual Sudio Code, Atom, Brackets...)

3. Instala las dependencias locales
```sh
$ npm install
```
4. Arranca el proyecto:
```sh
$ npm start
```

## Especificaciones  

- Uso avanzado de HTML5

- Maquetación usando SASS, incluyendo flex :sparkles:

- Uso de mediaqueries para que el diseño sea adaptable al dispositivo usando la estrategia mobile first

- Acceso y envío de datos a un servidor :sparkles:

- Almacenamiento en local usando LocalStorage :sparkles:

- Uso de git para el control de versiones del proyecto :octocat:

- Publicación del resultado en Internet usando GitHub Pages :sparkles:

## Metodología de trabajo  🛠️
### Remoto
- Para la realización de este proyecto trabajamos en Remoto.

- Entrega:

Se han pautado 12 horas de dedicación al ejercicio, por lo que el límite de entrega es
Turno de tarde: 25/04/2020 a las 23:59:59:999 horas

### GitHub
Control de versiones :bookmark:
- Trabajaremos sobre la rama master y continuamente se irá subiendo trabajo avanzado para que los profesores tengan acceso al examen.


## Estructura
:octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  
 La estructura de carpetas es la siguiente:

```
/
`- _public
   |   `favicon.ico
   |   `index.html
   |   `manifest.json
   |   `robots.txt
   |   `rickyMorty.png
`- _src
   |- components
   |  |    `App.js
   |  |    `CharacterCard.js
   |  |    `CharacterDetail.js
   |  |    `CharacterList.js
   |  |    `Filters.js 
   |- Services
   |  |    `Fetch.js
   |- stylesheets 
   |  |    `- _reset
   |  |    `- App.scss 
   |  |    |
   |`- index.js
`- .gitignore
`- package-lock.json
`- package.json
`- README.md

   
```
:octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:  :octocat:
:octocat:  :octocat:

## Contribuye 🖇️
1.  Haz un Fork ([https://github.com/yourname/yourproject/fork](https://github.com/yourname/yourproject/fork))
2.  Crea una nueva rama (`git checkout -b feature/fooBar`)
3.  Haz commit con los cambios (`git commit -m 'Add some fooBar'`)
4.  Haz push en tu rama (`git push origin feature/fooBar`)
5.  Crea un nuevo Pull Request

## Agradecimientos 🏅 

 - Por todo, por todo por todo por todo........    Muchas gracias Marìa (mi profe)!!


## Recursos
* [Adalab](https://adalab.es/)
* [Modulo React](https://books.adalab.es/materiales-front-end-i/modulo-3.-react/3_2_intro_react)
* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [CodePen](https://codepen.io/)
* [Git commit emojis](https://gist.github.com/parmentf/035de27d6ed1dce0b36a)


## Creado 
⌨️ con ❤️ por Lili Rascón. 😊
