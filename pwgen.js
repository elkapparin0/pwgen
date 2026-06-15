const pw = [];
let password = ""
const bigLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const smallLetters = bigLetters.map(letter => letter.toLowerCase());
const numbers = [0,1,2,3,4,5,6,7,8,9];
const signs = ["!","#","@","€","$","&","*","+","-","?"]
const wholeSet = bigLetters.concat(smallLetters, numbers, signs);


function generatePw(){
    const guaranteedSmallLetter = smallLetters[Math.floor(Math.random()*smallLetters.length)];
    const guaranteedBigLetter = bigLetters[Math.floor(Math.random()*bigLetters.length)];
    const guaranteedSign = signs[Math.floor(Math.random()*signs.length)];
    const guaranteedNumber = numbers[Math.floor(Math.random()*numbers.length)];
    setValue(guaranteedBigLetter);
    setValue(guaranteedNumber);
    setValue(guaranteedSmallLetter);
    setValue(guaranteedSign);

    for(let i = 0; i < 20; i++){
        if(pw[i] == null){
            pw[i] = wholeSet[Math.floor(Math.random()*wholeSet.length)];
        }
    }
    const valueList = pw.values();
    for(let val of valueList){
        password += val;
    }
    return password;
}

function setValue(guaranteedValue){
    const index = Math.floor(Math.random()*20);
    if(pw[index] == null){
        pw[index] = guaranteedValue;
    } else {
        setValue(guaranteedValue);
    }
}

document.getElementById("pw").innerHTML = generatePw();