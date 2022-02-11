/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let lastIndex = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[i];
            nums.splice(i , 1);
            lastIndex += 1
            nums.splice(lastIndex, 0, temp);
        }
    }
};

// splice() modifies in place
// slice() does not
// there is no insert() - use splice instead
