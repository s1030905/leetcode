var canCompleteCircuit = function (gas, cost) {
  let [sum, curSum] = [0, 0];
  let start = 0;
  for (let i = 0; i < gas.length; i++) {
    curSum += gas[i] - cost[i];

    sum += gas[i] - cost[i];
    // gas[i] - cost[i] 為正才能往下一站走，若為負代表該站不是start
    if (curSum < 0) {
      start = i + 1;
      curSum = 0;
    }
  }
  // 總行成走完是否還有油
  if (sum >= 0) return start;
  else return -1;
};

console.log(canCompleteCircuit([3, 1, 1], [1, 2, 2])); // 2,-1,-1 => 2,1,0
// Input: (gas = [1, 2, 3, 4, 5]), (cost = [3, 4, 5, 1, 2]); Output: 3; -2,-2,-2,3,3 => -2,-4,-6,-3,0
// Input: (gas = [2, 3, 4]), (cost = [3, 4, 3]); Output: -1; -1,-1,1 => -1,-2,-1 =>
// Input: (gas = [5,1,2,3,4]), (cost = [4,4,1,5,1]); Output: 4; => 1,-3,1,-2,3 => 1,-2,-1,-3,0
// Input: (gas = [3, 1, 1]), (cost = [1, 2, 2]); Output: 0; => 2,-1,-1 => 2,1,0
