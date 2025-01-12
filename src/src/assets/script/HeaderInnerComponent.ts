// HeaderInnerComponent.ts
export function setupEventListeners() {
    const todayDeliveryContainer = document.getElementById('todayDeliveryContainer');
    const todayDeliveryTooltip = document.getElementById('todayDeliveryTooltip');
    const store = document.getElementById('store');
    const alimBox = document.getElementById('store_alim_box');

    if (todayDeliveryContainer && todayDeliveryTooltip) {
        todayDeliveryContainer.addEventListener('mouseenter', () => {
            todayDeliveryTooltip.style.display = 'block';
        });
        todayDeliveryContainer.addEventListener('mouseleave', () => {
            todayDeliveryTooltip.style.display = 'none';
        });
    }

    if (store && alimBox) {
        store.addEventListener('mouseenter', () => {
            alimBox.style.display = 'block';
        });
        store.addEventListener('mouseleave', () => {
            alimBox.style.display = 'none';
        });
    }
}
