import f from 'node:fs'
let O = process.env.MAKEFUN_OUTPUT_DIR || '/output'
let T = "The armchair has kept your shape from this afternoon. The blanket is still warm where you left it. The house goes on with its small sounds, and the evening, like an old dog, settles its head on your knee."
let n = [...T].length
if (n < 1 || n > 280) throw new Error(`entry.txt must be 1-280 code points, got ${n}`)
f.mkdirSync(O, { recursive: true })
f.writeFileSync(O + '/entry.txt', T)
