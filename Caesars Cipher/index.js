function rot13(str) {
  const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const strToArr = str.split('');
  const newStrArr = [];

  let newStr;
  let index;
  let maxIndex = 25;

  for (let el of strToArr) {
    index = alphabet.indexOf(el);
    
    if (index != -1) {
      
    	let newIndex = index += 13;

      if (newIndex >= 0 && newIndex <= 25) {
        newStrArr.push(alphabet[newIndex]);
      } else {
        let circleNewIndex = newIndex - maxIndex - 1;
        newStrArr.push(alphabet[circleNewIndex]);
      }
      
    } else {
      newStrArr.push(el);
    }
  }
  
  newStr = newStrArr.join('');
  return newStr;
}

rot13("SERR PBQR PNZC");
