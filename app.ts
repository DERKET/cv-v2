let fontSize: number = 14;

function FontSizePlus() {

    let aboutMyParagraph = document.getElementById(`AboutMe`) as HTMLElement;
    fontSize = fontSize + 2;
    aboutMyParagraph.style.fontSize = `${fontSize}px`;
}
function FontSizeMinus() {

    let aboutMyParagraph = document.getElementById(`AboutMe`) as HTMLElement;
    fontSize = fontSize - 2;
    aboutMyParagraph.style.fontSize = `${fontSize}px`;
}
