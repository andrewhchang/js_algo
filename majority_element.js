/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const sorted = nums.sort()
    return sorted[Math.ceil((nums.length/2)) - 1]
};

// You should think about the property of what the majority elem is here.
// Since it by this problem's definition appears >=  nums.length/2 times,
// it will always be in the middle of a sorted array.
