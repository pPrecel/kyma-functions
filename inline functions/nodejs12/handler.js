module.exports = {
    main: function (event, context) {
        const logger = require('loggy');
        logger.info('Hello', 'loggy');


        return 'Hello nodejs12, dziala '
    }
}