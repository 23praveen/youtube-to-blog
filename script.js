document.getElementById('convertForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const youtubeUrl = document.getElementById('youtubeUrl').value;
    const response = await fetch('/convertToBlog', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ youtubeUrl })
    });

    const data = await response.json();
    document.getElementById('blogContent').innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.description}</p>
        <p>${data.blogContent}</p>
    `;
});
document.getElementById('convertForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const youtubeUrl = document.getElementById('youtubeUrl').value;
    const response = await fetch('/convertToBlog', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ youtubeUrl })
    });

    const data = await response.json();
    document.getElementById('blogContent').innerHTML = `
        <h2>${data.title}</h2>
        <p><strong>Description:</strong> ${data.description}</p>
        <p><strong>Blog Content:</strong></p>
        <div>${data.blogContent}</div>
    `;
});
