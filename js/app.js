/*
 * Archivo principal de funcionalidad de JS
 */
var body = document.body;
var figura = document.getElementById('boxxx-services');
var seccc = document.getElementById('work');
var cont = 1;
var num = 1;

function agregaImagen (picture){  
    picture = ['assets/images/img-1.jpg','assets/images/img-2.jpg','assets/images/img-3.jpg','assets/images/img-4.jpg','assets/images/img-5.jpg','assets/images/img-6.jpg','assets/images/img-7.jpg','assets/images/img-8.jpg','assets/images/img-9.jpg'];
    for(var i = 0; i<picture.length; i++){
        var divim = document.createElement('div');
        divim.setAttribute('class','box');
        divim.setAttribute('id',cont++);
        divim.setAttribute('onclick','prueba(this)');
       
        var imasov = document.createElement('img');
        imasov.setAttribute('src',picture[i]);
        imasov.setAttribute('id','foto'+num++);
        imasov.setAttribute('class','zoom');
        
        var conText = document.createElement('h5');
        conText.innerHTML = 'NOMBRE DEL PROYECTO';
        
        divim.appendChild(imasov);
        divim.appendChild(conText);
        figura.appendChild(divim);;
        seccc.appendChild(figura);
    }
    
}

agregaImagen();

//funcion que hace la funcionalidad de ampliar la imagen
var love = 1;
var legg = 1;
function prueba (e){
    var edpp = e.id;
    
    var divmax = document.createElement('div');
    divmax.setAttribute('class','bigbox');

    var closeX = document.createElement("div");
    closeX.setAttribute('class','delete');
    closeX.innerHTML = "X";
    
    var spanX = document.createElement("span");
    spanX.setAttribute('class','tooltiptext');
    spanX.innerHTML = "Cerrar";
    
    var siguiente = document.createElement('input');
    siguiente.setAttribute('type','button');
    siguiente.setAttribute('class','sigte');
    siguiente.setAttribute('value','>');
    siguiente.setAttribute('id','in-'+legg++);
    siguiente.addEventListener('onclick','next(this)');
    
    var creaIma = document.createElement('img');
    creaIma.setAttribute('src','assets/images/'+'img-'+e.id+'.jpg');
    creaIma.setAttribute('class','row');
    creaIma.setAttribute('id','git-'+love++);
    
    closeX.appendChild(spanX);
    divmax.appendChild(creaIma);  
    divmax.appendChild(closeX);
    divmax.appendChild(siguiente);
    body.appendChild(divmax);
    
    
    divmax.addEventListener("click", function(event){
        if (event.target && event.target.className == "delete") {
            event.target.parentNode.remove();
        }
    });
}
 
function next(even){
    var img_actual= document.getElementById('git-'+even.id);
    console.log(img_actual);
    img_actual.parentNode.removeChild(img_actual);
}






