const express = require('express');
const axios = require('axios');
const { ChatGPT } = require('openai');

const app = express();
const chatGPT = new ChatGPT('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');

app.use(express.json());

app.post('/convertToBlog', async (req, res) => {
    const { youtubeUrl } = req.body;

    // Call YouTube Data API to get video details
    const videoData = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${youtubeUrl}&key=YOUR_YOUTUBE_API_KEY&part=snippet,contentDetails`);
    const { title, description } = videoData.data.items[0].snippet;

    // Extract transcript from the video
    const transcript = await extractTranscript(youtubeUrl);

    // Generate blog content using ChatGPT
    const blogContent = await chatGPT.complete({
        prompt: transcript,
        maxTokens: 500,
        temperature: 0.7,
    });

    res.json({ title, description, blogContent });
});

async function extractTranscript(youtubeUrl) {
    // Logic to extract transcript from YouTube video using appropriate methods
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
const { YouTubeTranscriptApi } = require('AIzaSyAKYfsna0czImm_8XKQbKx7i7pAqZ6kBmE');

// Inside the /convertToBlog route
async function extractTranscript(youtubeUrl) {
    try {
        const videoId = extractVideoId(youtubeUrl);
        const transcript = await YouTubeTranscriptApi.getTranscript(videoId);
        return transcript.map(entry => entry.text).join(' ');
    } catch (error) {
        console.error('Error extracting transcript:', error);
        return '';
    }
}

function extractVideoId(url) {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : null;
}
