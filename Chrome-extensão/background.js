const verCookie = window.document.getElementById('verCookie')
const delCookie = window.document.getElementById('deconstarCookie')
const lista = window.document.getElementById('lista')
const cookies = window.document.cookie

let controle = true

verCookie.addEventListener('mousedown', listar)
delCookie.addEventListener('mousedown', deletar)

function deletar() {
    // criar uma funcao para deletar o cookies
}

function listar() { // mostra todos os cookies salvos na pagina
    obtendoCookies()
}

function obtendoCookies() {
    const cookieArray = cookies.split('; ')//constante para separar os cookies em pares nome=valor

    let cookieStr = '<ul>' // converte o array em um objeto mais legivel
    cookieArray.forEach(cookies => {
        const [name, value] = cookies.split('=')
        cookieStr += `<li><strong>${decodeURIComponent(name)}:</strong>${decodeURIComponent(value)}</li>`
    })
    return cookieStr
}

// incrementar uma API para coletar todos os cookies do navegador não só o site atual
//mudar os arquivos pois para criar uma extenção tem um modo padrao de se colocar os arquivos e pastas

// 0, ...