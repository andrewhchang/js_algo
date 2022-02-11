var twoSum = function(nums, target) {
    const complement = {};
    let result
    
    nums.forEach((number, index) => {
        if(complement[target-number] !== undefined) {
            result = [index, complement[target-number]]
        }
        
        complement[number] = index
    })
    
    return result;
}

/*
Stumbling blocks

1. Did not correctly execute if statement condition. Was reversed we tried to 'seen' the wrong way.

2. Tried to return from a forEach. Can't do that, will return undefined.

3. Did not take into account falsy 0 value. Resulted in hash calls evaluated as false when the value in the hash was 0.
*/
