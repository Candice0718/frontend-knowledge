/**
 * 防抖
 * 在一个事件的结束时间之前，遇到新的事件，
 * 旧的事件结束事件失效以新的事件结束事件为准
 * @param { function } fn 执行函数
 * @param { number } delay 等待时间
 * @param { boolean } immediate 是否立即执行函数
 */
function debounce(fn, delay, immediate) {
  let timer = null;
  return function() {
      const context = this;
      const args = arguments;
      // 立即执行函数，先执行一次函数
      if(!timer && immediate) {
        fn.apply(context, args);
    }
      // 清空上一次事件
      clearTimeout(timer);
      // 以新事件的结束时间作为有效的失效时间
      timer = setTimeout(function(){
        fn.apply(context, args);
      }, delay)
  }
}