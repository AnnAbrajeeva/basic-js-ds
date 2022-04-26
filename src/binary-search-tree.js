const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.roots = null;
  }

  root() {
    if (!this.roots) {
      return null;
    } else {
      return this.roots;
    }
  }

  add(data) {
    this.roots = addItems(this.roots, data);

    function addItems(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        node.left = addItems(node.left, value);
      } else {
        node.right = addItems(node.right, value);
      }

      return node;
    }
  }

  has(data) {
    return hasItem(this.roots, data);

    function hasItem(node, value) {
      if (!node) {
        return false;
      }

      if (node.data === value) {
        return true;
      }

      return value < node.data
        ? hasItem(node.left, value)
        : hasItem(node.right, value);
    }
  }

  find(data) {
    return getItem(this.roots, data);

    function getItem(node, value) {
      if (!node) {
        return null;
      }

      if (node.data === value) {
        return node;
      }

      return value < node.data
        ? getItem(node.left, value)
        : getItem(node.right, value);
    }
  }

  remove(data) {
    this.roots = delNode(this.roots, data);

    function delNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.left = delNode(node.left, value);
        return node;
      } else if (value > node.data) {
        node.right = delNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right
          return node
        }

        if (!node.right) {
          node = node.left
          return node
        }

        let minValue = node.right
        while(minValue.left) {
          minValue = minValue.left
        }

        node.data = minValue.data

        node.right = delNode(node.right, minValue.data)

        return node
      }
    }
  }

  min() {
    if (!this.roots) {
      return;
    }

    let node = this.roots;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.roots) {
      return;
    }

    let node = this.roots;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
