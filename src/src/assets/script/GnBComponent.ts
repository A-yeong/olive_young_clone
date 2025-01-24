export function setupEventListeners() {
    const btnGnbOpen = document.getElementById('btnGnbOpen');
    const layerAllMenu = document.getElementById('gnbAllMenu');
    const btnGnbClose = document.getElementById('btnGnbClose');

    if (btnGnbOpen && layerAllMenu) {
        btnGnbOpen.addEventListener('click', () => {
            layerAllMenu.classList.toggle('active'); // 메뉴 표시/숨김
        });
        if (btnGnbClose) {
            btnGnbClose.addEventListener('click', () => {
                layerAllMenu.classList.remove('active');
            });
        }
    } else {
        console.warn('Required elements are missing.');
    }
}
