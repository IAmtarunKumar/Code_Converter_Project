const express = require("express")
const axios = require("axios")
const cors = require("cors")
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors())

app.get("/" , (req,res)=>{
    res.send("done")
})

//convert
app.post("/convert" , async(req,res)=>{
    try {
        const {code , language} = req.body
        const response = await axios.post("https://api.openai.com/v1/engines/text-davinci-003/completions" , {
            prompt : `[act as a web developer] convert this ${code} into ${language} language. show in a html div tag to print help to html tags dont use script i want print code as it is and print line by line not in one line` ,
            max_tokens : 1000,
            temperature : 0.7,
            n:1
        },{
            headers : {'Authorization' : `Bearer ${process.env.openai_key}`},
            'Content-Type' : 'application/json'
        });

        res.send({msg : response.data.choices[0].text })
       
        
    } catch (error) {
        console.error(error)
        res.send(error)
    }
    // res.send("convert")
})


app.post("/debug" , async(req,res)=>{
    
    try {
        const {code , language } = req.body
        const response = await axios.post("https://api.openai.com/v1/engines/text-davinci-003/completions" , {
            prompt : `[Act As a Web Developer] debug this ${code} in this ${language}. and give me detail explaination in built points with correct In html formate. ` ,
            max_tokens : 1000,
            temperature : 0.7,
            n:1
        },{
            headers : {'Authorization' : `Bearer ${process.env.openai_key}`},
            'Content-Type' : 'application/json'
        });

        res.send({msg : response.data.choices[0].text })
        
    } catch (error) {
        console.error(error)
        res.send(error)
    }
    

})


app.post("/quality" , async(req,res)=>{
   

    try {
        const {code , language} = req.body
        const response = await axios.post("https://api.openai.com/v1/engines/text-davinci-003/completions" , {
            prompt : `quality check this ${code} . take 6 parameter of good code and check my code on this parameter. output give me in html formate i want to display in my web page give me code` ,
            max_tokens : 1000,
            temperature : 0.7,
            n:1
        },{
            headers : {'Authorization' : `Bearer ${process.env.openai_key}`},
            'Content-Type' : 'application/json'
        });

        res.send({msg : response.data.choices[0].text })
        
    } catch (error) {
        console.error(error)
        res.send(error)
    }

})

app.listen(process.env.port || 8080 , ()=>{
    console.log(`${process.env.port} port is working`)
})