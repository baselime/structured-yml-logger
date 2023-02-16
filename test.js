const logger = require('./index');


logger.info('Welcome h4h4h4h');


logger.info('Logging object', {
    customerId: 'beep boop',
    serviceName: 'We have more microservices than you can even imagine',
    timestamp: Date.now(),
    payload: {
        data: {
            oops: {
                plsStop: {
                    thisWasATeribleJoke: {
                        okay: 'I stop now'
                    }
                }
            }
        }
    }
})

logger.error('beep boop')