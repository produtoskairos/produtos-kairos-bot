const fs = require('fs')
const crypto = require('crypto')

const uang = JSON.parse(fs.readFileSync('./database/user/dinheiro.json'))

const addATM = (sender) => {
    const obj = {id: sender, uang : 0}
    uang.push(obj)
    fs.writeFileSync('./database/user/dinheiro.json', JSON.stringify(uang))
}

const addCoinUser = (sender, amount) => {
    let position = false
    Object.keys(uang).forEach((i) => {
        if (uang[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        uang[position].uang += amount
        fs.writeFileSync('./database/user/dinheiro.json', JSON.stringify(uang))
    }
}

const checkATMuser = (sender) => {
    let position = false
    Object.keys(uang).forEach((i) => {
        if (uang[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return uang[position].uang
    }
}

const confirmATM = (sender, amount) => {
    let position = false
    Object.keys(uang).forEach((i) => {
        if (uang[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        uang[position].uang -= amount
        fs.writeFileSync('./database/user/dinheiro.json', JSON.stringify(uang))
    }
}

module.exports
addATM, addCoinUser, checkATMuser, confirmATM