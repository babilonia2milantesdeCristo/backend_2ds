
// setTimeout(0ms) - executa 1 vez

setTimeout(function(){
          console.log('Executou timeout...')
}, 3000)

// setInterval(ms) - executa 'x' vezes

let n = 0
setInterval(function(){
      console.log(`Executou FPS ${n}`)
      n = n+1
}, 1)