export default function renameFiles(names) {
  const storage = []
  for (let name of names) {
    const regex = new RegExp(`${name.replace(/([()])/g, x => '\\' + x)}(\\(\\d+\\))?$`)
    const countRepeat = storage.filter(x => regex.test(x)).length
    if (countRepeat != 0)
      storage.push(name + `(${countRepeat})`)
    else
      storage.push(name)
  }
  return storage
}
