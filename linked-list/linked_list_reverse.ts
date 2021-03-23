import { ListNode } from "./linked_list.ts";

export function reverse<T>(head: ListNode<T>): ListNode<T> {
  let next = head; // 下一个节点

  let current: ListNode<T> | null = head.next; // 当前处理的节点

  while (current) {
    const temp: ListNode<T> | null = current.next;

    current.next = next;

    next = current;
    current = temp;
  }

  head.next = null; // 处理尾结点

  return next;
}

export function reverseArray(array: number[]) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const temp = array[left];
    array[left++] = array[right];
    array[right--] = temp;
  }

  return array;
}
