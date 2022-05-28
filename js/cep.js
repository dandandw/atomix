document.addEventListener('DOMContentLoaded', (e) => {

    const cepBtn = document.getElementById('cepBtn')
    const gmap = document.getElementById('gmap')
    const cep = document.querySelector('[name="cep"]')
    const logradouro = document.querySelector('[name="logradouro"]')
    const numero = document.querySelector('[name="numero"]')
    const bairro = document.querySelector('[name="bairro"]')
    const cidade = document.querySelector('[name="cidade"]')
    const estado = document.querySelector('[name="estado"]')

    const fetchAndShow = async (cepStr) => {
        const resp = await fetch('https://brasilapi.com.br/api/cep/v1/'+cepStr)

        const json = await resp.json()
        logradouro.value = json.street
        numero.value = cepStr
        bairro.value = json.neighborhood
        cidade.value = json.city
        estado.value = json.state
    }
        
    cepBtn.addEventListener('click', () => {
        fetchAndShow(cep.value)
    })

    numero.addEventListener('keyup', e => {
        console.log(e.which)
        if (e.which == '13') {
            let map = document.createElement('iframe')
            map.width = '100%'
            map.height = '400'
            map.style = 'border:0;'
            map.loading = 'lazy'
            map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14554.680607033793!2d-61.525891775859264!3d-11.197719472582593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93c9c4ca47113369%3A0xe2814b8a5ef7ea1e!2sMin.%20Cacoal%2C%20RO%2C%2076967-239!5e1!3m2!1spt-BR!2sbr!4v1653456890544!5m2!1spt-BR!2sbr'
            gmap.appendChild(map)

        }
    })

})
