document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get(null, (data) => {
        const cookieListDiv = document.querySelector('.cookie-list');
        cookieListDiv.innerHTML = '';

        for (const url in data) {
            const cookies = data[url];
            const urlDiv = document.createElement('div');
            urlDiv.innerHTML = `<h3>${url}</h3>`;
            
            cookies.forEach(cookie => {
                const cookieItem = document.createElement('div');
                cookieItem.textContent = `${cookie.name}: ${cookie.value}`;
                urlDiv.appendChild(cookieItem);
            });

            cookieListDiv.appendChild(urlDiv);
        }
    });
});