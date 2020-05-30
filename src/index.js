export const log = (payload) => {
    const isR = (process && process.type === 'renderer');
    console.log(`${isR ? "Renderer" : "Main"}`, payload)
}