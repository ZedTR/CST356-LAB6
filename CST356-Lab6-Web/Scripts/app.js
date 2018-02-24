function CollectData() {
    
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var age =  document.getElementById("age").value;
  

    if (fname == "" || lname == "" || age == "") {
      document.getElementById("unSReg").innerText = "unSuccessful Registeration";
    }
    else {
        document.getElementById("Pfname").innerText = fname;
        document.getElementById("Plname").innerText = lname;
        document.getElementById("Page").innerText = age;
      
}
    } 
 