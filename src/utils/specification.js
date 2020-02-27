const versions = {
  box: 'box',
  key: 'digital',
}


export const getVersion = (version) => versions[version];

export const getCategory = (categories) => {
  return categories.join(', ');
}