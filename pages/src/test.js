async function callApi() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    const users = await res.json();
    console.log(users);
  };
callApi();