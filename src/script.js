document.querySelector('[data-js="mark-all"]').addEventListener('click', () => {
    [...document.querySelectorAll('[data-js="notification-block"]')].forEach(notificationBlock => {
        notificationBlock.classList.remove('notification-block--read')
    });

    [...document.querySelectorAll('[data-js="not-read"]')].forEach(notReadEl => {
        notReadEl.remove();
    })
})