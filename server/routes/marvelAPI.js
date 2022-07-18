const publicKey = 'd23a3c145ca844c51d69d5a15460eae1';
const privateKey = '5952fd6c5f8fe910bd830ecddb6ede3bf19e9088';
const basicURL = 'https://gateway.marvel.com/';
const md5Hash = '543f7af98b39edffc81d1063d3db8d70';
import axios from "axios";


const marvelAPI = {
    getCharacters: (limit = 20, page = 1, nameStartsWith = '') => {
        let offset;
        let sort = '';
        if (page > 1) offset = limit * page - 1;
        if (nameStartsWith.length) {
            sort = '&nameStartsWith=' + nameStartsWith;
        }
        let address = `${basicURL}v1/public/characters?ts=1&offset=${offset}&limit=${limit}&apikey=${publicKey}&hash=${md5Hash}${sort}`;

        return axios.get(address).then(
            result => result
        ).catch(err => console.log(err));
    }
};

export default marvelAPI;