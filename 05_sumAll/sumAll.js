const sumAll = function(first, last) {
    // 5 Passed
    // if(isNaN(first) || isNaN(last)) return "ERROR";
    // if(first < 0 || last < 0) return "ERROR";
    
    // let min = Math.min(first, last);
    // let max = Math.max(first, last);
    // let finalSum = 0;

    // for(let j = min; j <= max; j++){
    //     finalSum = finalSum + j;
    // }
    // return finalSum;
    
 if (!Number.isInteger(first) || !Number.isInteger(last)) return "ERROR";
  if (first < 0 || last < 0) return "ERROR";
  if (first > last) {
    const temp = first;
    first = last;
    last = temp;
  }
  let finalSum = 0;
  for (let i = first; i < last + 1; i++) {
    finalSum += i;
  }
  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
