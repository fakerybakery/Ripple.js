window.addEventListener('load', function () {
    document.querySelectorAll('[ripple]').forEach(element => {
        element.addEventListener('pointerdown', (event) => {
            ripplet(event, { clearing: false });
        });

        element.addEventListener('pointerup', () => {
            ripplet.clear(element);
        });

        element.addEventListener('pointerleave', () => {
            ripplet.clear(element);
        });
    });
})
