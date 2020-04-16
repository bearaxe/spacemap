const createMap = (minimumPoints = 1) => {
  return Array(minimumPoints).fill(0).map((el,idx)=>generatePoint(idx))
}

const generatePoint = (modifier) => {
  return {
    x: 1*modifier,
    y: 2,
    z: 3
  }
}

module.exports = {
  createMap
}