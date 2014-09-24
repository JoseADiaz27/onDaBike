<script>

var arr=[1000];
var index =0;


function setPSI(){
    var x, text;
	
    //get the input of the PSI
    x = document.getElementById("psi").value;

    //If x is does not equal a number
    if (!isNaN(x)||x >= 0){
        text = "Input ok";
	$('#psi');
	$('#psi').val();
	arr.push($('#psi').val());
        index++;	
    }
    else{
        text = "Invalid input";
    }
    document.getElementById("demo").innerHTML = text;
}

function getPSI(){
    return PSI;
}

function setWeight(){
    var weight, text;
    weight = document.getElementById("weight").value;

    if(!isNaN(weight) || weight > 0){
       text = "Input ok";
       $('#weight');
       $('#weight').val();
       arr.push($('#weight').val());
    }
    else{
        text = "Invalid input";
    }
    document.getElementById("weight").innerHTML = text;
}

function getWeight(){
    return weight;
}

function setAge(){
    var age, text;
    age = document.getElementById("age").value;
    if(!isNaN(age) || age > 0){
	text = "Valid input";
        arr[index] = age;
        $('#age');
        $('#age').val();
        arr.push($('#age').val());
    }
    else{
        text = "Invalid input";
    }
    document.getElementById("age").innerHTML = text;    
}

function getAge(){
    return age;
}

function setHeight(){
    var height, text;
    height = document.getElementById("height").value;
    if (!isNaN(height) || height > 0){
	text = "Valid input"; 
   	arr[index] = height;
    	$('#height');
    	$('#height').val();
    	arr.push($('#height').val());
    }
    else{
	text= "Invalid input";
    }
    document.getElementById("height").innerHTML = text;
}

function getHeight(){
    return height;
}

function setGender(){
    var myGender = document.getElementById("myGender");
    document.getElementById("myGender").value;
    arr[index] = myGender;
    $('#myGender');
    $('#myGender').val();
    arr.push($('#myGender').val());
    
}

</script>
