const express =require('express')
const router =express.Router()

// Initial Index Route
router.get('/',(req,res)=> {
    res.render('index')
})


module.exports = router