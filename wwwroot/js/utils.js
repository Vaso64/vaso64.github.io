window.hasElementFocusWithin = (element) => {
    return element && element.contains(document.activeElement);
};

window.preventDefault = (element, event) => {
    if (element){
        element.addEventListener(event, (e) => {
            e.preventDefault();
        });
    }
}