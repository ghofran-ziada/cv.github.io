(function() {
    const modeBtn = document.getElementById('moon');

    const image = document.getElementById('moon');


    const darkmodecolor ={
   '--color-header-bg': '#573901',

   '--color-main-bg': '#f8f5eb',
   
   '--color-taxt-main': '#201902',
   '--color-text-light': '#f8f5eb',

    };

    const ligtmodecolor ={
   '--color-header-bg': '#928264ff',

   '--color-main-bg': '#573901',
   
   '--color-taxt-main': '#f8f5eb',
   '--color-text-light': '#201902',
    }

    const root = document.documentElement;

    function applyMode() {
        const darkModeActive = localStorage.getItem('darkMode') === 'true';
        const colors = darkModeActive ? darkmodecolor : ligtmodecolor;
        for (const [varName, value] of Object.entries(colors)) {
            root.style.setProperty(varName, value);
        }

        if(image){
            image.src =darkModeActive ?
            'moon2.png' : 'sun.png';
        }
    }

    // تطبيق الوضع المخزن عند تحميل الصفحة أو العودة إليها
    window.addEventListener('pageshow', applyMode);

    // تفعيل الزر إذا موجود
    if (modeBtn) {
        modeBtn.addEventListener('click', () => {
            const currentMode = localStorage.getItem('darkMode') === 'true';
            localStorage.setItem('darkMode', !currentMode);
            applyMode(); // إعادة تطبيق الوضع بعد التغيير
        });
    }
})();