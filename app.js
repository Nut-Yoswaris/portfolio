// แปลงอุณหภูมิ
function toCelsius(fahrenheit)
{
    let value = (fahrenheit -32)* 5 / 9 
    return value.toFixed(2) + "  Celsius" ;

}
function display(elementId , value)
{
    document.getElementById(elementId).innerHTML = "<b>"+ value +"</b>"
}
function toFahrenheit(celsius)
{
    let value2 = (celsius * 9/5) + 32
    return value2.toFixed(2) + " Fahrenheit " ;
}

function toCelsiusProgram(value)
{
    alert(toCelsius(value))
}
function toFahrenheitProgram(value)
{
    alert(toFahrenheit(value))
}

// สุ่มลูกเต๋า
document.getElementById("diceRandom").addEventListener("click" , diceRandom);
function diceRandom (diceSix){
    // console.log("Button clicked")
	 const dices = Math.floor(Math.random() * 7);
    //  const result = dices();
    document.getElementById("result02").innerText = dices ;
     return dices;
}

// นับ A-Z
    function printAlphabet() {
        let letter = 'A';
      
        function printNextLetter() {
          document.getElementById("letterAz").innerHTML = letter
      
          letter = String.fromCharCode(letter.charCodeAt(0) + 1);
      
          if (letter <= 'Z') {
            setTimeout(printNextLetter, 1000);
          }
        }
        printNextLetter();
      }
      printAlphabet();

    // ตรวจเช็คคะแนน Point ของท่าน 

    function numberToPoint (numberToatal){
        const point = Math.floor(numberToatal / 100) ;
        document.getElementById("inputPoint").innerHTML = numberToatal
        document.getElementById("result04").innerText = "คุณมีอยู่ " + point + "  คะแนน"
        return point;
    }
    
    function zeroCheck (){
        const inputZero = document.getElementById('inputZero').value;
        const zeroValue = parseInt(inputZero);
        if(zeroValue > 0 ){
            // console.log("Positive number")
            document.getElementById('result05').innerText = "Positive number" 
            // alert("Positive number");
        }else if(zeroValue == 0){
            // console.log("Zero")
            document.getElementById('result05').innerText = "Zero" 
            // alert("Zero");
        }else if(zeroValue <0){
            // console.log("Negative number")
            document.getElementById('result05').innerText = "Negative number" 
            // alert("Negative number");
        }else {
            // console.log("Invalid number");
            document.getElementById('result05').innerText = "Invalid number"    
            // alert( "Invalid number");     
        }
    }
    
    function calculateCircumference() {
        const radius = document.getElementById('inputRadius').value;
        const circle = Math.PI * 2 * radius ; 
        document.getElementById("result06").innerText = (circle);
        return circle
    }
    
    // const radius = prompt("ระบุจำนวน Radius ที่ใช้หาพื้นที่วงกลม");


    



    
    






