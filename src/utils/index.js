
/**
 * extract content
 * @param {string} markdown
 * @returns {string}
 */
function extractMarkdownContent (markdown) {
  const linkPattern = /!?\[(.*)\]\(.*\)/
  const emphasizePattern = /\*?(.*)\*?/
  if (linkPattern.test(markdown)) {
    const matches = markdown.match(linkPattern)
    markdown = matches[1]
  }
  if (emphasizePattern.test(markdown)) {
    const matches = markdown.match(emphasizePattern)
    markdown = matches[1]
  }
  return markdown
}

class Node {
  constructor (item) {
    const {
      parent,
      lvl,
      content,
      key
    } = item
    this.parent = parent
    this.lvl = lvl
    this.label = extractMarkdownContent(content || '').replace(/#*\s?/, '')
    this.key = key
    // this.handler = (v) => {
    //   bus.$emit(events.SCROLL_TO_HEADER, v.key)
    // }
    this.children = []
  }

  // Add child node.
  addChild (node) {
    this.children.push(node)
  }
}

const findParent = (item, lastNode, rootNode) => {
  if (!lastNode) {
    return rootNode
  }
  const { lvl: lastLvl } = lastNode
  const { lvl } = item

  if (lvl < lastLvl) {
    return findParent(item, lastNode.parent, rootNode)
  } else if (lvl === lastLvl) {
    return lastNode.parent
  } else {
    return lastNode
  }
}

const updateContentsList = list => {
  list = list.map(i => {
    i.key = i.slug
    delete i.slug
    return i
  })
  const rootNode = new Node({
    parent: null,
    lvl: null,
    content: null,
    key: null
  })
  let lastNode = null

  for (const item of list) {
    const parent = findParent(item, lastNode, rootNode)

    const node = new Node({ parent, ...item })
    parent.addChild(node)
    lastNode = node
  }

  return rootNode.children
}
export default{
  updateContentsList
}