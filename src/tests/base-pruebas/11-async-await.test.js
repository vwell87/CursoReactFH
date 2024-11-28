import { getImagen } from "../../base-pruebas/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await.js', () => {


    test('getImagen debe retornar un error si no tenemos apiKey', async() => {

        // const url = await getImagen();
        // console.log(url);
        
        // expect(typeof url).toBe('string');

        const resp = await getImagen();

        expect(resp).toBe('No se encontró la imagen');

    })
})