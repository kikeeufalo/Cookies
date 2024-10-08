const verCookie = window.document.getElementById('verCookie')
const delCookie = window.document.getElementById('deconstarCookie')
const lista = window.document.getElementById('lista')
const cookies = window.document.cookie

verCookie.addEventListener('mousedown', function() {listar()})

function listar() {
    console.log(obtendoCookies())
}

function obtendoCookies() {
    const cookieArray = cookies.split('; ')// separar os cookies em pares nome=valor
    const cookieObj = {} // converte o array em um objeto mais legivel
    cookieArray.forEach(cookies => {
        const [name, value] = cookies.split('=')
        cookieObj[decodeURIComponent(name)] = decodeURIComponent(value)
    })
    return cookieObj
}