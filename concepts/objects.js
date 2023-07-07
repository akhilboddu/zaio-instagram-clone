console.log("OBJECTS");

const post = {
  username: "akhilboddu",
  imageLink:
    "https://images.unsplash.com/photo-1581093458791-3b1c7e0c9d7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  caption: "This is a post",
  likes: 0,
  comments: [],
  shares: 0,
  isPublic: true,
  createdAt: "2020-02-07T17:00:00.000Z",
};

// Update values in object
post.likes = 10;

// delete values in object
delete post.createdAt;

// Access values in object
console.log(
  `${post.username} posted "${post.caption}" and got ${post.likes} likes`
);

console.log("Post", post);