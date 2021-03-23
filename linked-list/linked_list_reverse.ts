import { ListNode } from "./linked_list.ts";

// 前序遍历
export function reversedByPreOrder<T>(
  head: ListNode<T> | null
): ListNode<T> | null {
  if (!head || !head.next) return head;

  const next = reversedByPreOrder(head.next);

  // 环
  head.next.next = head;
  head.next = null;

  return next;
}

// 后序遍历
export function reversedByPostOrder<T>(
  head: ListNode<T> | null,
  pre: ListNode<T> | null = null
): ListNode<T> | null {
  if (!head) return pre;

  const temp = head.next;

  head.next = pre;

  return reversedByPostOrder(temp, head);
}

// 迭代
export function reversedByIteration<T>(head: ListNode<T>): ListNode<T> {
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

// 数组反转
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
