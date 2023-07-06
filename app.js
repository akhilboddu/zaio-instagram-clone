var feed = []; // global property
console.log("feed", feed);

// CRUD - Create, Read, Update, Delete
// CREATING A POST
const createPost = (imageLink, caption, username) => {
  const newPost = {
    id: feed.length,
    username: username,
    imageLink: imageLink,
    caption: caption,
    likes: 0,
    comments: [],
    shares: 0,
    isPublic: true,
    createdAt: new Date(),
  };
  feed.push(newPost);
  // outputFeed(feed);
};

// READING ALL POSTS
// array + anonyomous function: map
const outputFeed = (feed) => {
  // return statuses of the posts
  // map function returns a new array of just the statuses
  const output = feed.map((p) => {
    console.log(outputPostStatus(p));
    return p;
    // return outputPostStatus(p);
  });
  console.log("NEW MAPPED ARRAY: ", output);
};

// UPDATE POST
const updatePost = (id, newImageLink, newCaption) => {
  // update the post with the specific id

  const updatedFeed = feed.map((post) => {
    if (post.id === id) {
      post.imageLink = newImageLink;
      post.caption = newCaption;
    }
    return post;
  });
  feed = updatedFeed;
};

// DELETE POST
const deletePost = (id) => {
  // delete the post with the specific id
  const updatedFeed = feed.filter((post) => {
    if (post.id !== id) {
      return post;
    }
  });
  feed = updatedFeed;
  outputFeed(feed);
};

const outputPostStatus = (post) => {
  const output = `
  POST INFO:
  ID: ${post.id}
  Username: ${post.username}
  Image Link: ${post.imageLink}
  Caption: ${post.caption}
  `;
  return output;
};

// IMPLEMENTATION

// outputFeed(feed);
// demo of creating a post
createPost(
  "https://frabjous-pavlova-ebea4c.netlify.app/assets/post.png",
  "Sky diving was fun...",
  "akhilboddu"
);
createPost(
  "https://frabjous-pavlova-ebea4c.netlify.app/assets/post.png",
  "iX is awesome",
  "unam"
);
createPost(
  "https://frabjous-pavlova-ebea4c.netlify.app/assets/post.png",
  "Elon musk owns twitter now...",
  "elonmusk"
);
createPost(
  "https://frabjous-pavlova-ebea4c.netlify.app/assets/post.png",
  "Demo object",
  "demoperson"
);
createPost(
  "https://frabjous-pavlova-ebea4c.netlify.app/assets/post.png",
  "fruits are delicious",
  "healthyperson"
);

updatePost(2, "www.imagelink.com/imagelink", "SpaceX next launch soon!");
deletePost(4);
deletePost(0);
