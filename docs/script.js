document.addEventListener('DOMContentLoaded', () => {
    const modelOverview = document.getElementById('model-overview');
    const liveInteraction = document.getElementById('live-interaction');

    modelOverview.innerHTML = '<p>Model overview visualization will be here.</p>';
    liveInteraction.innerHTML = '<p>Live interaction demo will be here.</p>';

    // Example of initializing WebGL context (placeholder)
    function initWebGL(container) {
        const canvas = document.createElement('canvas');
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        container.appendChild(canvas);

        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) {
            alert('Unable to initialize WebGL. Your browser may not support it.');
            return;
        }

        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        // Placeholder for actual WebGL content
    }

    // Initialize WebGL contexts for each demo section
    initWebGL(modelOverview);
    initWebGL(liveInteraction);
});
