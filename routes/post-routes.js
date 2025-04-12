const express = require("express");
const router = express.Router();
const { getPost, deletePost, getPosts, getEditPost, editPost, getAddPost, addPost} = require("../controllers/post-controller");

router.get('/posts/:id', getPost);
router.delete('/posts/:id', deletePost)
router.get('/posts', getPosts);
router.get('/edit/:id', getEditPost);
router.put('/edit/:id', editPost);
router.post('/add-post', getAddPost);
router.get('/add-post', addPost);

module.exports = router;