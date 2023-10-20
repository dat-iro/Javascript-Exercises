async function newPost() {
  const post = {
    title: "My post",
    body: "Body of the post",
    userId: 1,
  };

  const postRequest = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  };

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", postRequest);

    if(!response.ok) {
      throw new Error ("Error!");
    }

    const responseData = await response.json();
    console.log("New post created:", responseData);
  } catch (error) {
    console.error("Error while posting:", error);
  }
}

newPost();