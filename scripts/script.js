const API_KEY = "AIzaSyDCHVkm-uPe-B8harIWYai4jrsVQXfnTw4";
const CHANNEL_ID = "UC4uah11r-24uQbmM8finn4g";
const URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`;

fetch(URL)
    .then(res => res.json())
    .then(data => {
        const videos = data.items;
        console.log(data)
        const container = document.querySelector("#video-section");
        container.innerHTML = videos.map(v => `
        <div class="video">
            <iframe 
            src="https://www.youtube.com/embed/${v.id.videoId}"
            frameborder="0" allowfullscreen></iframe>
            <p>${v.snippet.title}</p>
        </div>
    `).join('');
});
