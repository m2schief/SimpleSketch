const container = document.querySelector("#sketch-container")
let pixels;
let size;

function fill(dimension) {
    for (var i=0; i < dimension**2; i++) {
        var newDiv = document.createElement('div');
        newDiv.className = "grid-pixel";
        newDiv.style.width = (600/dimension).toString() + "px";
        newDiv.style.height = (600/dimension).toString() + "px";
        container.appendChild(newDiv)
    }
    pixels = document.querySelectorAll('.grid-pixel')
}
fill(16);
activate();

function empty() {
    pixels.forEach(pxl => {
        container.removeChild(pxl);
    });
};

function activate() {
    pixels.forEach(pxl => {
        pxl.addEventListener("mouseenter", function(e) {
            e.target.style.background = 'rgb(212, 212, 212)';
        });
    });
};
const button = document.querySelector('button');

button.addEventListener('click', () => {
    empty();
    size = prompt("Enter desired dimension of drawing (Maximum 65): ");
    fill(Math.min(size, 65));
    activate();
});
