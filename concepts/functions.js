console.log("FUNCTIONS");

const instaPost = {
  username: "akhilboddu",
  imageLink:
    "https://images.unsplash.com/photo-1581093458791-3b1c7e0c9d7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  caption: "This is a post",
  likes: 0,
  comments: [1, 2],
  shares: 0,
  isPublic: true,
  createdAt: "2020-02-07T17:00:00.000Z",
};

// Write a function to output the status of the post
// This post is public, posted by username, and currently has 0 likes and 0 comments.

// take an input, do some processing in the block, optional to return an output
// DRY = Don't Repeat Yourself
// function outputPostStatus(post) {
//   const output = `This post is ${
//     post.isPublic ? "public" : "private"
//   }, posted by ${post.username}, and currently has ${post.likes} likes and ${
//     post.comments.length
//   } comments.`;
//   return output;
// }

const outputPostStatus = (post) => {
  const output = `This post is ${
    post.isPublic ? "public" : "private"
  }, posted by ${post.username}, and currently has ${post.likes} likes and ${
    post.comments.length
  } comments.`;
  return output;
};

console.log(outputPostStatus(instaPost));
