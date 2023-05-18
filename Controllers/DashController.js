const DashModal = require("../Modals/dashModal")


exports.GetAll = async(req,res)=>{
    try {
        const data = await DashModal.find()
        console.log(data.length)
        return res.status(200).json({Success:true, data: data })
    } catch (error) {
        return res.json(404).json({message:error})
    }
}

exports.GetData= async(req,res)=>{
    const {value} = req.query
        console.log(value);
    try {
        const data =await DashModal.find({sector:value})
        return res.status(200).json({data:data})
    } catch (error) {
        res.status(500).json({message: error})
    }
}