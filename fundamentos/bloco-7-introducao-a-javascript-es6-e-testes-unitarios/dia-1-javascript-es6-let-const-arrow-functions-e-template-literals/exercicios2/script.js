const fatorial = (n) => {
  result = 1
  for (let index = 2; index <= n; index++) {
    
    result *= index
    
  }
  return result
}

console.log(fatorial(5))