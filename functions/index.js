const functions = require('firebase-functions');

exports.recomienda = functions.https.onRequest(
  /** Código para la función recomienda.
   * @param {{query:Object}} request solicitud que recibe el servidor.
   * Corresponde a la librería Express.
   * @param {{send:(texto:string)=>void}} response respuesta que devuelve el
   * servidor. Corresponde a la librería Express. */
  (request, response) => {
    try {
      if (!request.query.edad) {
        throw new Error("Ingresa tu edad");
      } else if (!request.query.cat) {
        throw new Error("Ingresa una categoria");
      }
      let aux;
      const edad = request.query.edad;
      const cat = request.query.cat;

                if(request.query.edad >= 15){
					switch(request.query.cat){
						case 1:
						aux = `Las recomendaciones son: \nEl resplandor\nLa bruja de blair\nIT`;
						break;
						case 2: 
						aux = `Las recomendaciones son: \nLa masacre en Texas\nFreddy Krueger vs Jason\nScream`;
						break;
						case 3: 
						aux = `Las recomendaciones son: \nKill Bill\nRambo\nTerminator`;
						break;
						default:
						aux = `Genero equivocado`;
					}
				}
				else if(request.query.edad < 15){
					switch(request.query.cat){
						case 1:
						aux = `No se recomienda ver peliculas de terror`;
						break;
						case 2: 
						aux = `No se recomienda ver peliculas slasher`;
						break;
						case 3: 
						aux = `Las recomendaciones son: \nAvengers\nBlack Panther\nSpiderman`;
						break;
						default:
						aux = `Genero equivocado`;
					}
        }
                const respuesta = `${aux}`;
      
      response.send(
        `${respuesta}`);
    } catch (e) {
      response.send(e.message);
    }
  });