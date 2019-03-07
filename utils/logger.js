/**
 * Custom log utility
 */

const logger = {
    logInfo,
    logError
};

module.exports = logger;

/**
 * Logs to standard output stream
 * @param {...any} message
 * @return {Object} logger instance
 */
function logInfo(...message) {
    log('log', ...message);
    return logger;
}

/**
 * Logs to error stream
 * @param {...any} message
 * @return {Object} logger instance
 */
function logError(...message) {
    log('error', ...message);
    return logger;
}

/** @private */
function log(type = 'log', ...message) {
    console[type](...message);
}
