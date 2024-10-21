// Função para coletar todos os cookies de todos os sites
function getAllCookies() {
    chrome.cookies.getAll({}, function(cookies) {
        console.log("Total de cookies coletados: " + cookies.length);
    });
}
  
// Ao instalar ou atualizar a extensão, colete todos os cookies
chrome.runtime.onInstalled.addListener(() => {
    console.log("Extensão instalada. Coletando cookies...");
    getAllCookies();
});

// Escuta eventos de mudança de cookies (criação, alteração, remoção)
chrome.cookies.onChanged.addListener(function(changeInfo) {
    console.log('Mudança de Cookie detectada:');
    console.log(changeInfo);
});
