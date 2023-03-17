const key = 'MQHxqYQXPheoCCut4bGHNRj0gOnEcVzmp771VgFKxiiGvgO4orjA0ooy'
let nature = 'nature'
const api = 'https://api.pexels.com/v1/search?query=' + nature
const authorization = {
    headers: {
        "Authorization": "MQHxqYQXPheoCCut4bGHNRj0gOnEcVzmp771VgFKxiiGvgO4orjA0ooy"
        }
    }

const btn = document.getElementById('load');
btn.onclick = () => {
    fetch(api,authorization)
    .then(r => r.json())
    .then(obj =>{

        const card = document.querySelectorAll('.card')

        for(let i = 0; i<card.length;i++){
            const element = card[i]
            const photo = obj.photos[i]
            element.firstElementChild.remove()

            const img = document.createElement('img')
            img.src = photo.src.small
            img.className += 'card-img-top'
            img.setAttribute('height','225px')
            img.addEventListener('click',()=>{
                location.assign('./details.html?id=' + photo.id)
            })
            
            element.prepend(img)

            element.querySelector('.card-title').innerText = photo.photographer
            element.querySelector('.card-text').innerText = photo.alt
            element.querySelector('.text-muted').innerText = photo.id
            
            const btns = element.querySelector('.btn-group')
            btns.lastElementChild.textContent = 'Hide'
            btns.lastElementChild.addEventListener('click',(e)=>{
                e.target.closest('.card').remove()
            })
        }
        
    })
}


// const card = document.querySelectorAll('.card')[0]
//         const p = document.createElement ('p')
//         p.innerText = 'mannaggia tutt cos'
//         card.append(p)