const kickHighlighter = code => {
  return code
}

const highlighter = code => {
  return code
    .split('\n')
    .map(line => {
      const lineparts = line.split('-')
      if(lineparts.length === 10 || lineparts.length === 4) {
        return lineparts.map(x => `<font color="LightGreen">${x}</font>`).join('<font color="yellow">-</font>')
      } else {
        return `<font color="tomato">${line}</font>`
      }
    })
    .join('\n')

}


export default highlighter
