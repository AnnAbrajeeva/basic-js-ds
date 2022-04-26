const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let list = l;
  let nextNode = list.next;


  if(l.value === k) {
    return removeKFromList(list.next, k) 
  }

  while(nextNode.next !== null) {
    if(nextNode.value === k) { 
      if(nextNode.next.value !== k) {
        list.next = nextNode.next
      } else {
        list.next = nextNode.next.next
      }
    }

    if(nextNode === null) {
      break
    }

    list = list.next
    nextNode = list.next
  }

  if(nextNode.next === null && nextNode.value === k) {
    list.next = null
  }

  return l
}

module.exports = {
  removeKFromList,
};
