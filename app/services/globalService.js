 
import { stringify } from 'qs';

function findDictList(params){
    console.log("a")
    return fetch(`http://localhost:3000/api/dict?${stringify(params)}`,{
        method:'GET',
    });
}

export default {
    findDictList
}