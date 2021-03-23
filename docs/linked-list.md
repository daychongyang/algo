# 链表(一叉树)

[题目集合](https://leetcode-cn.com/problemset/all/?topicSlugs=linked-list)

链表是一种物理存储单元上非连续、非顺序的存储结构, 数据元素的逻辑顺序是通过链表中的指针链接次序实现的。

```ts
interface ListNode<T> {
  data: T;
  next?: ListNode<T> | null;
}
```

## 操作

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
let current =  head
while current {
  console.log(current)

  current = head.next
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

## 注意点

### 指针的修改

#### [链表反转](../linked-list/linked_list_reverse.ts)

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

### 链表的拼接
