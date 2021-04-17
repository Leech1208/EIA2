"use strict";
var Events;
(function (Events) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        let x = _event.pageX;
        let y = _event.pageY;
        var span = document.querySelector("span");
        let position = span;
        position.style.left = x + "px";
        position.style.top = y + "px";
        position.textContent = "X: " + x + "px | " + "Y: " + y + "px ";
    }
    function logInfo(_event) {
        console.log(_event);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event.type);
    }
})(Events || (Events = {}));
//# sourceMappingURL=events.js.map