// add button click if there is any text in input
document.getElementById('add').addEventListener('click', function(){
    var value = document.getElementById('item').value;
    var placeHolder = document.getElementById('item');
    if(value){
        
    }else{
        placeHolder.placeholder = "No ha ingresado ningun producto..";
    }
});