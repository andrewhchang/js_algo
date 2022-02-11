// Solution 1 - Hash
var singleNumber = function(nums) {
    seen = {}
    nums.forEach(num => {
        if (seen[num]) {
            delete seen[num];
        } else {
            seen[num] = true;
        }
    })
    
    return Object.keys(seen)[0];
};

// Solution 2 - Stack
const singleNumber = (nums) => {
    let numbers = [];
    
    nums.sort().forEach(number => {
        if (!numbers.length) {
            numbers.push(number);
            return;
        } else if (numbers[numbers.length - 1] === number) {
            numbers.pop();
        } else {
            numbers.push(number);
        }
    });
    
    return numbers[0];
}
