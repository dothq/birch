const c = require("colors");

const getType = () => {
    const isR = (process && process.type === 'renderer');

    return c.bold.blue(`${isR ? "Renderer" : "Main"}`)
}

export const log = (payload) => {
    console.log(getType(), payload)
}