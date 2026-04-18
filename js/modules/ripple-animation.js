const rippleContainer = document.getElementById('rippleContainer');

// 每2秒生成一个新波纹
function createRipple() {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    rippleContainer.appendChild(ripple);

    // 动画结束后移除元素，防止内存泄漏
    setTimeout(() => {
        ripple.remove();
    }, 4000);
}

// 立即创建第一个波纹
createRipple();

// 周期性创建波纹
setInterval(createRipple, 4000);