function nextWord() {
  var wordArray = ['fe','fi','fo','fum'];
  var count = -1;
  return  (
    wordArray[++count % wordArray.length]
  )
};




export default nextWord