namespace Events {


    window.addEventListener("load", handleLoad);

    function handleLoad (_event: Event): void {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
    }

    function setInfoBox (_event: MouseEvent): void {
        let x: number = _event.pageX;
        let y: number = _event.pageY;

        var span: HTMLElement = <HTMLElement> document.querySelector("span");

        let position: HTMLElement = span;

        position.style.left = x + "px";
        position.style.top = y + "px";

        position.textContent = "X: " + x + "px | " + "Y: " + y + "px ";
    }

    function logInfo (_event: Event): void {
        console.log(_event);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event.type); 
        }

}



