const verCookie = window.document.getElementById('verCookie')
const delCookie = window.document.getElementById('deconstarCookie')
const lista = window.document.getElementById('lista')
const cookies = window.document.cookie

let controle = true

verCookie.addEventListener('mousedown', function() {listar()})
delCookie.addEventListener('mousedown', function() {deletar()})

function deletar() {
    // criar uma funcao para deletar o cookies
}

function listar() {
    if (!cookies) {
        lista.innerHTML = `<p><strong>Nenhum cookie encontrado</strong></p>`
    }else if (controle == false) {
        alert('Cookies sobre a mesa')
    }else {
        lista.innerHTML += `${obtendoCookies()}`
    }
    controle = false
}

function obtendoCookies() {
    const cookieArray = cookies.split('; ')// separar os cookies em pares nome=valor
    let cookieStr = '<ul>' // converte o array em um objeto mais legivel
    cookieArray.forEach(cookies => {
        const [name, value] = cookies.split('=')
        cookieStr += `<li><strong>${decodeURIComponent(name)}:</strong>${decodeURIComponent(value)}</li>`
    })
    return cookieStr
}