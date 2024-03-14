const wholeBiscuit = document.querySelector('#whole-biscuit')
const initialSection = document.querySelector('.initial-section')
const endSection = document.querySelector('.end-section')
const message = document.querySelector('#message')
const returnBtn = document.querySelector('#return-btn')
let randomNumber = Math.round(Math.random() * 8)

const luckyPhrases = [
  'A vida trará coisas boas se tiver paciência.',
  'Não compense na ira o que lhe falta na razão.',
  'A maior de todas as torres começa no solo.',
  'Siga os bons e aprenda com eles.',
  'Uma bela flor é incompleta sem as suas folhas.',
  'Espere pelo mais sábio dos conselhos: o tempo.',
  'Realize o óbvio, pense no improvável e conquiste o impossível.',
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.'
]

wholeBiscuit.addEventListener('click', revealsLuckyPhrase)
returnBtn.addEventListener('click', newLuckyPhrase)

function newLuckyPhrase(e){
  e.preventDefault()
  togleeSection()
  randomNumber = Math.round(Math.random() * 8)
}

function revealsLuckyPhrase(){
  message.textContent = luckyPhrases[randomNumber]
  togleeSection()
  console.log(randomNumber)
}

function togleeSection(){
  initialSection.classList.toggle('hide')
  endSection.classList.toggle('hide')
  message.classList.toggle('message')
}




