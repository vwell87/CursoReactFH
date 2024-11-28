import { getUser, getUsuarioActivo } from "../../base-pruebas/base-pruebas/05-funciones";


describe('Pruebas en 05-funciones.js', () => {
    
    test('getUser debe retornar un objeto', () => {
    
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        
        const user = getUser();
        
        expect( testUser ).toStrictEqual( user )

    })

    test('getUsuarioActivo debe retornar un objeto', () => {
    
        const name = 'Victor';

        const user = getUsuarioActivo(name);
        

        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: name
        })
            
       
        });
        
    }) 
        
      

