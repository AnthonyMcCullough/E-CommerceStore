const express = require("express");
const app = express()
const upload = require("express-fileupload")
const fs = require("fs")
const cors = require('cors');

app.use(upload({
  limits: { fileSize: 50 * 1024 * 1024 },
  createParentPath: true
}));

app.use(express.json(), express.urlencoded({ extended: true }));

app.use(cors())

app.get("/pull/:product/:description/:name", (req, res) => {

  let requested = process.cwd() + `/images/${req.params.product}/${req.params.description}/${req.params.name}`;
  if (fs.existsSync(requested)) {
    res.sendFile(requested)
  } else {
    res.send({ error: "No such file exists" })
    console.log(fs.existsSync(requested, (err) => console.log(err)))
  }

})

app.post("/upload", (req, res) => {

  console.log('upload test', req.files)
  console.log('body', req.body.productID)

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  let sampleFile = req.files.image;
  let dir = process.cwd() + `/images/${req.body.productID}/${req.body.description}`
  // check if file(images) already exist
  let exist = fs.existsSync(process.cwd() + `/images/${req.body.productID}/${req.body.description}`)
  console.log("does file exist: ",exist)
  if (exist) {
    console.log('this file already has a picture')
    // fs.rmdirSync(`./images/${req.body.productID}/${req.body.description}`)

    fs.readdir(dir, (err, files)=> {
        for (const file of files) {
          fs.unlinkSync(dir+ "/" + file)
        }
    })

    // fs.writeFile(`./images/${req.body.productID}/${req.body.description}/${sampleFile.name}`, sampleFile.data, (err)=>{
    //   if (err){
    //     console.log(err)
    //   } else {
    //     console.log('pictire uploaded')
    //   }
    // })
  }
  
    sampleFile.mv(process.cwd() + `/images/${req.body.productID}/${req.body.description}/${sampleFile.name}`, (err) => {
      if (err) {
        return res.status(400).send(err)
      }
      res.send({
        product: req.body.productID,
        path: `http://localhost:7000/pull/${req.body.productID}/${req.body.description}/${sampleFile.name}`,
        description: req.body.description
      })
    })

})

app.post('/delete', (req, res)=> {
  console.log(req.body)
  fs.rmdirSync(`./images/${req.body.productID}`, {recursive: true})
  
})




app.listen(7000, () => {
  console.log("runnning")
})