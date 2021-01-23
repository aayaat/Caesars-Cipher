function rot13(str) {

    let newStr = "";

    for (let index = 0; index < str.length; index++) {
        
        let letter = str.charCodeAt(index); // convert the English character to ASCII.

        // if the letter ASCII code is from 65 to 90 (ie within capital A - Z), add 13 to the ASCII code of that letter
        if (!(letter < 65 || letter > 90)) {
            letter += 13; 

            // and if the code is bigger than 90, substract 90 from it and add 64 to it.
            // this will make the letter code to always be within 65 - 90;
            if (letter > 90) {
                letter = (letter - 90) + 64;
            }
        } else { // the letter is not within range return it like that
            letter = letter;
        }

        newStr += String.fromCharCode(letter) // convert ASCII to English character
        
    }

    console.log(newStr);
    return newStr;
  }
  
  rot13("SERR PBQR PNZC");
  rot13("SERR CVMMN!");
  rot13("SERR YBIR?");
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");