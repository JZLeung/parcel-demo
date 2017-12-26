// require('./common')
import '../styles/index.scss'

import common from './common'

console.log(common)

console.log('hello, parcel.')

const arr = [1,2,3,4,5]
arr.map(value => {
    console.log(value)
})

!function() {
   const root = document.getElementById('root')
   let newLine = document.createElement('p')
   newLine.innerText = 'This text is from js.'
   root.appendChild(newLine) 
}