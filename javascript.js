 
  document.addEventListener("keydown",(e)=>{
            if(e.key == "Enter"){
                myFunction();
                document.getElementById('input1').value = "";
                  document.getElementById('input2').value = "";
            }
        })
 

        function myFunction(){
            var result;
        var input1 = Number(document.getElementById("input1").value);
        var input2 = Number(document.getElementById("input2").value);
        if (input1 == input2) {
            result = "Both Number are same";
            document.getElementById("output").style.background = "green"
        }
        else {
            result = "Both Number are distinguished";
            document.getElementById("output").style.background = "red"
        }
        document.getElementById("output").style.display = 'flex'
        document.getElementById("output").innerHTML = result;
        }
   