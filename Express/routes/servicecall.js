var http = require('http');
var axios = require('axios');

function onResult(output){
    if(typeof output === 'string'){
        return JSON.parse(output)
    }
    return output;
}

function getInorderData(){
    var output = '';
    var x = axios.get("http://172.19.101.133:3000/get_data_in_inorder_form");
    x.then(r => r);
    

       
    // });
}

console.log(getInorderData())
module.exports = getInorderData;
