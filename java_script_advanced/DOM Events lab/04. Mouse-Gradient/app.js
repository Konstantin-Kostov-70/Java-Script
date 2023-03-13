function attachGradientEvents() {
    const result = document.getElementById('result');
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradMove);
    gradient.addEventListener('mouseout', gradOut);

    function gradMove(ev) {
        let percentages = Math.trunc((ev.offsetX / ev.target.clientWidth) * 100);
        result.textContent = `${percentages}%`;
    }

    function gradOut(ev) {
       result.textContent = '';
    }
}