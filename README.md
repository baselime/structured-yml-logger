# structured-yml-logger

Please don't try use this


```javascript
const logger = require('@baselime/structured-yml-logger')
logger.info('Welcome h4h4h4h');
// message: Welcome h4h4h4h
// level: info

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
// message: Logging object
// level: info
// customerId: beep boop
// serviceName: We have more microservices than you can even imagine
// timestamp: 1676552330084
// payload:
//   data:
//     oops:
//       plsStop:
//         thisWasATeribleJoke:
//           okay: I stop now

logger.error('beep boop')
// message: beep boop
// level: warn

```