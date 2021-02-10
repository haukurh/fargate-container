
const timestamp = () => (new Date()).toISOString();

module.exports = {
    log: (message, context) => console.log(`${timestamp()}: ${message}`, { ...context }),
    info: (message, context) => console.info(`${timestamp()}: ${message}`, { ...context }),
    warn: (message, context) => console.warn(`${timestamp()}: ${message}`, { ...context }),
    error: (message, context) => console.error(`${timestamp()}: ${message}`, { ...context }),
};

