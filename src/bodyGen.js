const defaultConfigs = {
  size: 1,
  min: 0,
  max: 99999
}

const createMap = (config = defaultConfigs) => {
  return Array(config.size).fill(0).map((el,idx)=>generatePoint(config))
}

const generatePoint = (config) => {
  return {
    x: randomInt(config),
    y: randomInt(config),
    z: randomInt(config)
  }
}

const randomInt = ({min, max}) => {
  return Math.floor(Math.random()*(max -min) + min)
}

module.exports = {
  createMap
}