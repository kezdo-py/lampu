function saklar(action ,lamp) {
    let toggle = document.getElementById("default-toggle");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
    
    let lampu = document.getElementById("lampu");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");

    if(toggle.checked){
     lampu.src = "assets/images/on.gif"
    }else{
     lampu.src = "assets/images/off.gif"
    }

    if(toggle2.checked){
     lampu2.src = "assets/images/on.gif"
    }else{
     lampu2.src = "assets/images/off.gif"
    }

    if(toggle3.checked){
     lampu3.src = "assets/images/on.gif"
    }else{
     lampu3.src = "assets/images/off.gif"
    }
  
}   
   


