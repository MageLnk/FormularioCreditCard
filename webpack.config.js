const path=require('path');

module.exports={
    entry:"./Formulario.js",
    output:{
        path:path.resolve(__dirname,'PrimerWebpack'),
        filename:'FinalProbando.js'
    }
}