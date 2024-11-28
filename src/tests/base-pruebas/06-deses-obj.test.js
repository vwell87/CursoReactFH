import { usContext } from "../../base-pruebas/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj.js', () => {
    
    test('usContext debe retornar un objeto', () => {

        const clave = 'ABC123';
        const nombre = 'Victor';
        const edad = 27;

        // Llamada correcta a la funcion usContext

        const getUsContext = usContext({clave, nombre, edad});

        expect(getUsContext).toStrictEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })

    })

})
        

        