// HeaderInnerComponent.ts
export function setupEventListeners() {
    const todayDeliveryContainer = document.getElementById('todayDeliveryContainer');
    const todayDeliveryTooltip = document.getElementById('todayDeliveryTooltip');
    const store = document.getElementById('store');
    const alimBox = document.getElementById('store_alim_box');
    const recentPrdBox = document.querySelector('.recent_prd_box') as HTMLElement;
    const recent = document.getElementById('recent');

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

    if (recent && recentPrdBox) {
        recent.addEventListener('click', () => {
            recentPrdBox.style.display = 'block';
        });
    }

    if (recent) {
        recent.addEventListener('mouseleave', () => {
            recentPrdBox.style.display = 'none';
        });
    }
}
