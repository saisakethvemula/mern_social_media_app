const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const Post = mongoose.model("Post")

const authuser = require("../middleware/authentication")

router.get("/myposts", authuser, (req, res) => {
    Post.find({postedby: req.user._id})
    .populate("postedby", "_id name")
    .then((mypost) => {
        res.json(mypost)
    })
    .catch((err) => {
        console.log(err)
    })
})

router.get("/allposts", authuser, (req, res) => {
    Post.find()
    .populate("postedby", "_id name")
    .then((posts) => {
        res.json(posts)
    })
    .catch((err) => {
        console.log(err)
    })
})

router.post("/createpost", authuser, (req, res) => {
    const {title, body} = req.body
    if (!title || !body){
        return res.status(422).json({"err":"missing body or title"})
    }
    // console.log(req.user)
    // res.send("ok")
    //removing password so as to not store password for every post
    req.user.password = undefined
    const post = new Post({
        title: title,
        body: body,
        postedby: req.user
    })
    post.save()
    .then((result) => {
        res.json({"message":result})
    })
    .catch((err) => {
        console.log(err)
    })
})

module.exports = router