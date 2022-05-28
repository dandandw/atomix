document.addEventListener('DOMContentLoaded', (e) => {

    const ddd = document.querySelector('[name="ddd"]')
    const dddBtn = document.getElementById('dddBtn')
    const table = document.getElementById('table')

    const cleanTable = () => {
        let tr = document.createElement('tr')
        let th1 = document.createElement('th')
        th1.innerText = 'Cidade'
        let th2 = document.createElement('th')
        th2.innerText = 'Estado'

        tr.appendChild(th1)
        tr.appendChild(th2)
        table.innerHTML = ''
        table.appendChild(tr)

    }

    const fetchAndShow = async (dddStr) => {
        const resp = await fetch('https://brasilapi.com.br/api/ddd/v1/'+dddStr)

        const json = await resp.json()

        cleanTable()

        json.cities.forEach(city => {
            
            let tr = document.createElement('tr')

            let td1 = document.createElement('td')
            td1.innerText = city
            let td2 = document.createElement('td')
            td2.innerText = json.state
            
            tr.appendChild(td1)
            tr.appendChild(td2)

            table.appendChild(tr)
        })
    }
        
    dddBtn.addEventListener('click', () => {
        fetchAndShow(ddd.value)
    })
})
