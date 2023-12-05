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
function diceRandom (diceSix){
	const dices = Math.floor(Math.random() * 7);
    return dices;
}
    const result = diceRandom();
    document.getElementById("diceRandom").innerHTML = result 


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
        alert(point);
        return point;
    }
    
    








