const key = 'MQHxqYQXPheoCCut4bGHNRj0gOnEcVzmp771VgFKxiiGvgO4orjA0ooy'
let nature = 'nature'
const api = 'https://api.pexels.com/v1/search?query=' + nature
const authorization = {
    headers: {
        "Authorization": "MQHxqYQXPheoCCut4bGHNRj0gOnEcVzmp771VgFKxiiGvgO4orjA0ooy"
        }
    }

const urlParams = new URLSearchParams(window.location.search)
const btn = document.getElementById('load');
btn.onclick = () => {
    fetch(api,authorization)
    .then(r => r.json())
    .then(obj =>{

        let arr = []
        
        for(let i = 0; i<9;i++){
            const card = document.querySelectorAll('.card')[i]
            card.firstElementChild.remove()
            const img = document.createElement('img')
            img.src = obj.photos[i].src.small
            img.className += 'bd-placeholder-img card-img-top'
            card.append(img)
            arr.push(card)
        }
        
    })
}


// const card = document.querySelectorAll('.card')[0]
//         const p = document.createElement ('p')
//         p.innerText = 'mannaggia tutt cos'
//         card.append(p)