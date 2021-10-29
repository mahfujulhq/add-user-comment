document.getElementById('post-button').addEventListener('click', function(){
            
    const commentBox = document.getElementById('comment-box');

    const newComment = document.createElement('p');
    newComment.innerText = commentBox.value;
    newComment.style.backgroundColor = 'lightblue';
    newComment.style.padding = '10px';

    const commentSection = document.getElementById('comment-section');
    commentSection.appendChild(newComment);

    commentBox.value = '';
    });