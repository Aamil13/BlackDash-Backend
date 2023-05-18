const router = require("express").Router()

const {GetAll,GetData} = require("../Controllers/DashController")

router.get("/",GetAll)
router.get("/sector",GetData)


module.exports = router