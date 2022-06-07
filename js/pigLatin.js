exports.translate = function(word) {

    splitWord = word.split(" ")
    finalWord = [];
    
    for (let i = 0; i < splitWord.length; i++){
        if (splitWord[i].charAt(0).match(/[aeiou]/) || splitWord[i].charAt(0).match(/[AEIOU]/)){
            splitWord[i] += "ay"
        }else{
            rearrangedWord = [];
            vowelDetected = false;
            for (let c = 0; c < splitWord[i][c].length; c++){
                if (splitWord[i].charAt(c).match(/[^aeiou]/) || splitWord[i].charAt(c).match(/[^AEIOU]/) && vowelDetected == false){
                    rearrangedWord.push(splitWord[i][c])
                }else{
                    rearrangedWord.splice(0, 0, splitWord[i][c])
                    vowelDetected = true
                }
            }
            rearrangedWord.push("ay")
            console.log(rearrangedWord)
            createdWord = rearrangedWord.join("")
        }
    }
    console.log(splitWord)
    console.log(createdWord)
  
  
  
  
  
    // splitWord.forEach(element => {
    //     if (element.charAt(0).match(/[aeiou]/) || element.charAt(0).match(/[AEIOU]/)){
    //         console.log("correct")
    //         element += "ay"
    //         finalWord.push(element)
    //     }else{
    //         finalWord.push(element)
    //     }
    //     console.log(typeof element)
    // });
    // console.log(finalWord)
    

};
exports.translate("apple school")
