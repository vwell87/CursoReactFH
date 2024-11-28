

export const getImagen = async() => {

    try {

        //const apiKey = 'GkAYsEPBjV2eHTGmA7Yy9h7xj1Q6ar71';
        const resp   = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        // console.error(error)
        return 'No se encontró la imagen'
    }
    
    
    
}

 getImagen();



