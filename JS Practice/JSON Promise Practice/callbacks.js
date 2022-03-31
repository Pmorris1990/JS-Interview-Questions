const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPost() {
    setTimeout(() => {
        let output = '';
        posts.forEach((posts, index) => { // this forEach takes a callback...
            output += `<li>${posts.title}</li>`; // the ${} is used when putting a variable in
        });
        document.body.innerHTML = output;
    }, 3000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 4000);
}

createPost({title: 'Post Three', body : 'This is post three'}, getPost);