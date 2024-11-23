//import dependencies
const bodyParser = require("body-parser")
const express = require("express")


//define server
server = express()


//middleParser

    server.use(bodyParser.json())

//db
let bankDb = {

}

//models

function BankModel({name,location,branch,phone,address,accountNumber}){
    const bank = {
        name,
        location,
        branch,
        phone,
        address,
        accountNumber,

        save: function (){
            bankDb.push(this)
            return this
        }
    }

return bank

}


//create controllers
//for creating banks
const createBanks = (req,res) =>{

    const {name,location,branch,phone,address,accountNumber} = req.body
    const bank = BankModel({name,location,branch,phone,address,accountNumber})
    bank.save()

    res.json({message:'user Created',data:bank})

}
//for retrieving bank data
const retrieveBanks = (req,res) => {

}
//for editing banks
const editBanks = (req,res) =>{

}
//for deleting banks
const deleteBanks = (req,res) =>{

}









//create servers

server.use(express.static(path.join(__dirname,"public")))
server.use(bodyParser.urlencoded({extended: false}))


server.post('/login',handleLogin)

//server for creating
server.post('/banks',createBanks)
//server for retrieving data
server.get('/banks',retrieveBanks)
//server for updating
server.put('/banks',editBanks)
//server for deleting
server.delete('/banks',deleteBanks)





server.listen(5000, 'localhost', () =>console.log("Server is live on port 5000")
)