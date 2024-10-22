document.getElementById("verCookie").addEventListener("click", function () {
    // Limpar a lista anterior
    const cookieList = document.getElementById("lista");
    cookieList.innerHTML = "";
  
    // Obter cookies para o site ativo
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentTab = tabs[0];
  
      chrome.cookies.getAll({ url: currentTab.url }, function (cookies) {
        cookies.forEach((cookie) => {
          // Criar o item da lista
          const listItem = document.createElement("li");
          listItem.textContent = `${cookie.name}: ${cookie.value}`;
  
          // Botão para deletar o cookie
          const deleteBtn = document.createElement("button");
          deleteBtn.textContent = "Excluir";
          deleteBtn.addEventListener("click", function () {
            chrome.cookies.remove({
              url: currentTab.url,
              name: cookie.name,
            });
            listItem.remove(); // Remover da lista
          });
  
          // Adicionar à lista
          listItem.appendChild(deleteBtn);
          cookieList.appendChild(listItem);
        });
      });
    });
  });
  