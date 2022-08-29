const fetchData = async()=>{
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    document.getElementById('id').innerHTML = data.slip.id
    document.getElementById('advice').innerHTML = data.slip.advice
    colors =['#472D2D','#2C3333','#2C3639','#4C3A51','#1B2430','#774360','#4C3575','#371B58','#2E0249','#16003B']
    document.body.style.background = `${colors[Math.floor(Math.random() * 10)]}`

}
fetchData()
