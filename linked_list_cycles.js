// O(n) space
// O(n) time
// Use a set because hashes don't take arrays as keys
// Sets also don't allow duplicate values

var hasCycle = function(head) {
    const seen = new Set(); 
    let new_head = head;
    
    while (true) {
        if (!new_head) {
            return false;
        }
        
        if(seen.has(new_head)) {
            return true;
        }
        
        seen.add(new_head);
        new_head = new_head.next;
    }
};

// O(n) time
// O(1) space
// Two pointers
const hasCycle = (head) => {
    // initial with fast and slow pointers with head
    let slow = head
    let fast = head
    //traverse linked list
    while(fast && fast.next){
        // fast moves by two
        fast = fast.next.next
        // slow moves by one
        slow = slow.next
        // two pointers meet, cycle
        if(fast === slow){
            return true
        }
    }
    
    return false
}
