window.addEventListener('load', () => {
    document.addEventListener('mousemove', function (e) {
        MoveBackground(e);
    });
    function MoveBackground(e) {
        document.querySelectorAll('.parallax-first').forEach((elemennt, i) => {
            var ind = i + 1
            var offsetX = (e.clientX / window.innerWidth * 10 * ind * 2.21) - 5 * ind * 2.21;
            var offsetY = (e.clientY / window.innerHeight * 5 * ind * 2.21) - 2 * ind * 3.21;
            elemennt.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px)';
        }
        )
    }
    ;
}
)