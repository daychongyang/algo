# 链表(一叉树)

[力扣链表题集](https://leetcode-cn.com/problemset/all/?topicSlugs=linked-list)

链表是一种物理存储单元上非连续、非顺序的存储结构, 数据元素的逻辑顺序是通过链表中的指针链接次序实现的。

```ts
interface ListNode<T> {
  data: T;
  next?: ListNode<T> | null;
}
```

## 基本操作

### 插入

```
temp = 待插入位置的前驱节点.next
待插入位置的前驱节点.next = 待插入指针
待插入指针.next = temp
```

### 删除

```
待删除位置的前驱节点.next = 待删除位置的前驱节点.next.next
```

### 遍历

#### 迭代

```ts
let current: ListNode<number> | null = head;
while (current) {
  console.log(current);

  current = current.next;
}
```

```ts
for (
  let current: ListNode<number> | null = head;
  current;
  current = current.next
) {
  console.log(current);
}
```

#### 递归

```ts
function travere(current: ListNode) {
  if (!current) return;

  console.log(current);

  traverse(current.next);
}

traverse(head);
```

## 常见问题

### 指针的修改

#### [链表反转](./linked_list_reverse.ts)

##### 迭代

```ts
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
```

##### 递归

```ts
import { ListNode } from "./linked_list.ts";

export function reverse<T>(head: ListNode<T> | null): ListNode<T> | null {
  if (!head || !head.next) return head;

  // 前序遍历
  const next = reverse(head.next);

  // 环
  head.next.next = head;
  head.next = null;

  return next;
}
```

```ts
import { ListNode } from "./linked_list.ts";

export function reverse<T>(
  head: ListNode<T> | null,
  pre: ListNode<T> | null = null
): ListNode<T> {
  if (!head) return pre;

  head.next = pre;

  // 后序遍历
  return reverse(head.next, head);
}
```

### 链表的合并

- [#21 合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists)
