export default function getDNSStats(domains) {
  const DNS = {}
  for (let dom of domains) {
    let arr = dom.split('.').reverse()
    for (let i = 0; i < arr.length; i++) {
      let s = '.' + arr.slice(0,i+1).join('.')
      if (DNS[s])
        DNS[s]++
      else
        DNS[s]= 1
    }
  }
  return DNS
}
