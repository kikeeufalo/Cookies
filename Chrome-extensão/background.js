// Função para coletar todos os cookies de todos os sites
function getAllCookies() {
    chrome.cookies.getAll({}, function(cookies) {
        console.log("Total de cookies coletados: " + cookies.length);
      
      // Iterando sobre todos os cookies e exibindo suas informações
        cookies.forEach(cookie => {
            console.log(Nome: ${cookie.name});
            console.log(Valor: ${cookie.value});
            console.log(Domínio: ${cookie.domain});
            console.log(Caminho: ${cookie.path});
            console.log(Data de Expiração: ${cookie.expirationDate});
            console.log(------------);
        });
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
