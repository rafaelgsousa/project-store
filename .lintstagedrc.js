module.exports = {
  '*.{js,jsx,tsx}': (filenames) => [
    `yarn lint --fix . ${filenames.join('--file')}`,
    `prettier --write ${filenames.join(' ')}`,
    `yarn test -- --findRelatedTests ${filenames.join(' ')}`
  ]
}
