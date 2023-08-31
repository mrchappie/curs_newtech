function getNodeTypeAsString(node) {
  for (let prop in Node) {
    if (node.nodeType === Node[prop]) return prop;
  }
}

function getNodeTypes(node = document) {
  return {
    nodeType: getNodeTypeAsString(node),
    node: node,
    children: Array.from(node.childNodes).map(getNodeTypes),
  };
}

console.log(getNodeTypes());
