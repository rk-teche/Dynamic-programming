/**
 * https://leetcode.com/problems/promise-time-limit/
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) { 

    return async function(...args) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t)  // resolve in 100ms

            // resolve in 150ms
            fn(...args).then(resolve).catch(reject).finally(() => clearTimeout(timer))
        })
        
        
    }
};

var timeLimit = function(fn, t) {
    return async function(...args) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            fn(...args)
                .then((res) => {
                    clearTimeout(timer);
                    resolve(res);
                })
                .catch((err) => {
                    clearTimeout(timer);
                    reject(err);
                });
        });
    };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

function cancelablePromise(timer)
{
    let cancel, timeoOut;

    
    const promise = new Promise((resolve, reject) => {
        cancel = () => {
            clearTimeout(timeoOut);
            reject()
        }

        timeoOut = setTimeout(resolve, timer)
    })

    return { promise, cancel }
}

 const { promise, cancel } = cancelablePromise(1000)

 promise.then()