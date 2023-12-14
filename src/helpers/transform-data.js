export function convertTreeData(items, treeColumn, treeTo = 'children') {
  if (!items && !items?.length) {
    return []
  }
  return items.map((i, indexI) => ({
    ...i,
    key: indexI + 1,
    [treeTo]: i[treeColumn]?.map((ii, indexII) => ({
      ...ii,
      key: (indexI + 1) * 10 + indexII + 1,
      [treeTo]: ii[treeColumn]?.map((iii, indexIII) => ({
        ...iii,
        key: (indexI + 1) * 100 + (indexII + 1) * 10 + indexIII + 1,
        [treeTo]: iii[treeColumn]?.map((iiii, indexIIII) => ({
          ...iiii,
          key:
            (indexI + 1) * 1000 +
            (indexII + 1) * 100 +
            (indexIII + 1) * 10 +
            indexIIII +
            1,
          [treeTo]: iiii[treeColumn],
        })),
      })),
    })),
  }))
}
