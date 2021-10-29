var InitDemo = function (){
    var canvas = document.getElementById('game-surface')
    var gl = canvas.getContext('webgl')

    if(!gl){
        console.log("O browser não suporta webgl sem experiemntal")
        gl = canvas.getContext("experimental-webgl")
    }
    if(!gl){
        alert("You browser does not support WebGL")
    }


    //Ajuste da viewport em relação ao ajuste da janela
    /*
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0,0,window.innerWidth, window.innerHeight);
    */

    //seta a cor do buffer
    gl.clearColor(0.75,0.85,0.8,1.0)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);//COLOR_BUFFER ou DEPTH BUFFER(usado para representar profundidade)
}