"use strict";
// const bodyElement = document.querySelector('body');
// if (bodyElement) {
//   bodyElement.innerText = 'Hello';
// }
function func(arg) {
    if (arg) {
        return arg.toLowerCase();
    }
}
func("hello");
func(null);
