/**
 * 节流
 * 一段时间只执行一次事件，如果有新事件触发需要等到下一个时间节点
 * @param { function } fn 执行函数
 * @param { number } delay 等待时间
 */
function throttle(fn, delay) {
    let timer = null;
    return function() {
        let context = this;
        let args = arguments;
        if(!timer) {
            timer = setTimeout(function() {
                fn.apply(context, args);
                timer = null;
            }, delay);
        }
    }
}