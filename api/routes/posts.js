const express = require('express');
const router = express.Router();
const PostController = require('../controllers/posts');
const check2Auth = require('../middleware/check-2auth');

router.post('/postPosts', check2Auth, PostController.posts_post);

router.get('/getPosts', PostController.posts_get);

router.post("/postComment", PostController.posts_comment);

router.post("/postvote", check2Auth, PostController.posts_vote);

router.get('/postByID/:id', PostController.posts_getByID);

module.exports = router;
