let array = [1, 2, 3, [4, 5, [6, 7, 8, [9, 10,[11,12]]]]];

const customFlatten = (array) => {
  let newArray = [];
  // if it's an array
  // else it's an interger
  newArray = array.reduce((prevNum, currentNum) => {
    if (Array.isArray(currentNum)) {
      prevNum = prevNum.concat(customFlatten(currentNum));
    } else {
      prevNum.push(currentNum);
      // prevNum = [...prevNum, currentNum]
    }
    return prevNum;
  }, []);
  return newArray;
};
console.log(customFlatten(array));
