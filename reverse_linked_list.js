const reverseLinkedList = (head) => {
    let node = head;
    let reversed = null;

    while (node) {
        let savedNext = node.next;
        node.next = reversed;
        reversed = node;
        node = savedNext;
    }

    return reversed;
}

