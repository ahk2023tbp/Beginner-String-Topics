

    // Quenstion-1
     function jodoConcat(){
            
        let fstSentence = document.getElementById("fstSen").value;
        let scndSentence = document.getElementById("scndSen").value;
        let res = fstSentence+" "+ scndSentence;
        document.getElementById("output_1").innerHTML = res;
 }

 // Question-2

   function findLength(){
      
    let lenthHai = document.getElementById("sentLen").value;
    let x = lenthHai.length;
    document.getElementById("lengthOutput").innerHTML = "Length of your sentence is: "+ x;
}


function findWSLength(){
    let lengthWoSpace = document.getElementById("sentLen").value;
    let noSpaceValue = lengthWoSpace.replace(/\s/g, "");
    document.getElementById("lengthOutput").innerHTML ="Length of your sentence is: "+ noSpaceValue.length;

}

//   question 3 ------------->

function findYourChar(){
  let inputText = document.getElementById("textLikho").value;
  let indexInput = document.getElementById("indexLikho").value;
  let output = (inputText[indexInput]);
  alert(output);
}

//   QUESTION  4------->


function karoLowerCase(){
    let lowerC =document.getElementById("txtINP").value;
    let p = lowerC.toLowerCase();
    document.getElementById("output_dedo").innerHTML=p;
}
function karoUpperCase(){
    let lowerC =document.getElementById("txtINP").value;
    let q = lowerC.toUpperCase();
    document.getElementById("output_dedo").innerHTML=q;
}
function findChar() {
    let lowerC = document.getElementById("txtINP").value;
    let indexInp = document.getElementById("indexInput").value;
    let r = lowerC.charAt(indexInp);
    document.getElementById("output_dedo").innerHTML = r;
}
function subStringer() {
    let lowerC = document.getElementById("txtINP").value;
    let indexInp = document.getElementById("indexInput").value;
    let r = lowerC.substring(indexInp);
    document.getElementById("output_dedo").innerHTML = r;
}