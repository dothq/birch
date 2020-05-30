const c = require("colors");

const getType = () => {
    const isR = (process && process.type === 'renderer');

    return c.bold.blue(`⯅  ${isR ? "Renderer" : "Main"}`)
}

const log = (payload) => {
    let isR = (process && process.type === 'renderer');

    console.log(getType(), payload)
}

log("Loading application")
