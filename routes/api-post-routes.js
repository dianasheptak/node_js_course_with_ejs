const express = require("express");
const router = express.Router();
const { getPost, deletePost, getPosts, editPost, addPost} = require("../controllers/api-post-controller");

// get all posts
router.get('/api/posts', getPosts);

// add new post
router.post('/api/post', addPost);

// get post by id
router.get('/api/post/:id', getPost);

// delete post by id
router.delete('/api/post/:id', deletePost);

// update post by id
router.put('/api/edit/:id', editPost);




module.exports = router;