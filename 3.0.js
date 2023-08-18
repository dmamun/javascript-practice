function sortMaker(arr) {
    let [item1,item2] = arr;
  
    if (item1 > 0 && item2 > 0) {
      return [Math.max(item1, item2),Math.min(item1,item2)];
    } else if (item1 === item2) {
      return "equal";
    } else if (item1 < 0 || item2 < 0) {
      return "invalid input";
    }
  }
  
  const inputArray1 = [7, 50];
  const inputArray2 = [0, 0];
  const inputArray3 = [4, 4];
  const inputArray4 = [2, -3];
  const inputArray5 = [9, 6];
  
  const result1 = sortMaker(inputArray1);
  const result2 = sortMaker(inputArray2);
  const result3 = sortMaker(inputArray3);
  const result4 = sortMaker(inputArray4);
  const result5 = sortMaker(inputArray5);
  
  console.log(result1); // This will output [3, 2]
  console.log(result2); // This will output "equal"
  console.log(result3); // This will output "equal"
  console.log(result4); // This will output "invalid input"
  console.log(result5); // This will output [9, 6]
  