document.addEventListener('DOMContentLoaded', (e) => {

    const table = document.getElementById('table')
    const tbody = table.getElementsByTagName('tbody')[0]

    const fetchAndShow = async () => {
        const resp = await fetch('https://brasilapi.com.br/api/banks/v1')

        const json = await resp.json()
        tbody.innerHTML = ''
        json.sort((a,b) => {
            return a.name.localeCompare(b.name)
        })
        json.forEach(bank => {
            let tr = document.createElement('tr')

            let td1 = document.createElement('td')
            td1.innerText = bank.code
            let td2 = document.createElement('td')
            td2.innerText = bank.name
            let td3 = document.createElement('td')
            td3.innerText = bank.fullName
            
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)

            tbody.appendChild(tr)
        })
    }
        
    fetchAndShow()

})
