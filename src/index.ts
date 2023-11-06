import Universe from './universe'

(async () => {
  const universe = new Universe()
  while (true) {
    console.clear()
    for (let row = 0; row < universe.height; row++) {
      let rowStr = ''
      for (let col = 0; col < universe.width; col++) {
        const cell: boolean = universe.getCell(row, col)
        rowStr += cell ? '🟦' : '⬛️'
      }
      console.log(rowStr)
    }
    universe.tick()
    await new Promise(resolve => setTimeout(resolve, 100))
  }
})().then(() => {}).catch(() => {})
