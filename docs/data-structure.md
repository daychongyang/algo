# 数据结构

## 数据结构的存储方式

    1. 数组 (顺序存储)
    2. 链表 (链式存储)

![数组和链表的物理储存图](./images/数组和链表的物理储存图.jpeg)

    1. 数组内存空间是连续的, 通常每一个单位的大小也是固定的, 可以通过下标随机访问
    2. 链表内存空间不一定是连续的, 只能依赖别的方式进行查找 (eg. `next` 指针)

## 数据结构的基本操作

    1. 增
    2. 删
    3. 改
    4. 查

### 线性数据结构 (数据元素之间存在着“一对一”的线性关系)

    1. 数组
    2. 队列
    3. 栈
    4. 链表

```ts
function traverse(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    // 迭代 arr[i]
  }
}
```

### 非线性数据结构 (一个结点元素可能有多个直接前驱和多个直接后继)

    1. 树
    2. 二叉树
    3. 二叉平衡树
    4. 字典树(前缀树)

```ts
interface ListNode {
  data: number;
  next: ListNode;
}

function traverse(head: ListNode) {
  while (head) {
    // 迭代访问 head.data
    head = head.next;
  }
}
```

```ts
interface ListNode {
  data: number;
  next: ListNode;
}

function traverse(head: ListNode) {
  // 递归访问 head.data
  traverse(head.next);
}
```
