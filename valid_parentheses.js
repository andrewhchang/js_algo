var isValid = function(s) {
    parentheses = [];
    complement = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    
    s.split('').forEach(parens => {
        if (parentheses[parentheses.length - 1] !== undefined && parentheses[parentheses.length - 1] === complement[parens]) {
            parentheses.pop();
        } else {
            parentheses.push(parens);
        }
    })
    
    return !parentheses.length;
};

/*
 * Stumbling blocks
 *
 * 1. Again, did not properly read the question. First put all the complements, but you didn't need to. Then put all the wrong/opposite complements. You only need to know which brackets close, not open.
 *
 * 2. Some confusion around array.pop() - it returns the last element of the array and modifies the array in-place.
 *
 * 3. You cannot access the last element of a js array with -1 or last(). You must use (length - 1).
 *
 * 4. Undefinedness got you again. Check for undefinedness in your conditions.
 */
