const express = require('express');

const router = express.Router();

// Sample data 
let blogPosts =     [
  { id: 1,  title:  'Man must explore, and this is exploration at its greatest', content: 'Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals.'
   }
]; 

// Display all blog posts
router.get('/', (req, res) => {
  res.render('index', { blogPosts });
});

 router.get('/index.html', (req,res) => {
  res.render('index.ejs', { blogPosts});
 });

// Display form to add a new blog post
router.get('/new', (req, res) => {
  res.render('new');
});


// Create a new blog post
router.post('/new', (req, res) => {
  const { title, content } = req.body;
  const newPost = { id: blogPosts.length + 1, title, content };
  blogPosts.push(newPost);
  res.redirect('/');
});

// Display form to edit a blog post
router.get('/edit/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = blogPosts.find(post => post.id === id);
  res.render('edit', { post });
});

// Update a blog post
router.post('/edit/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  const postIndex = blogPosts.findIndex(post => post.id === id);
  blogPosts[postIndex] = { id, title, content };
  res.redirect('/');
});

// Delete a blog post
router.post('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);
  blogPosts = blogPosts.filter(post => post.id !== id);
  res.redirect('/');
});

module.exports = router;
