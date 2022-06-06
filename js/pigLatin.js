exports.translate = function(word) {

    splitWord = word.split(" ")
    finalWord = [];
    vowelArray = ["A","E","I","O","U"]
    

    splitWord.forEach(element => {
        if (element.charAt(0).match(/[aeiou]/) || element.charAt(0).match(/[AEIOU]/)){
            console.log("correct")
            element += "ay"
            finalWord.push(element)
        }else{
            finalWord.push(element)
        }
        console.log(typeof element)
    });
    console.log(finalWord)
    

};
exports.translate("apple pie")
