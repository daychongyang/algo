export class ListNode<T> {
  constructor(public data: T, public next: ListNode<T> | null) {}
}

export function array2SinglyLinkedList<T>(numbers: T[]): ListNode<T> {
  return numbers.reduce<ListNode<T> | null>(
    (next, data) => new ListNode(data, next),
    null
  ) as ListNode<T>;
}
