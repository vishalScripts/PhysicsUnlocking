const API_KEY = "AIzaSyDCHVkm-uPe-B8harIWYai4jrsVQXfnTw4";
const CHANNEL_ID = "UC4uah11r-24uQbmM8finn4g";
const BASE_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=50`; 
// maxResults max = 50

const container = document.querySelector("#video-section");

// Recursive function to fetch *all* videos using nextPageToken
async function fetchAllVideos(pageToken = "") {
  let url = BASE_URL;
  if (pageToken) url += `&pageToken=${pageToken}`;

  const res = await fetch(url);
  const data = await res.json();

  // Display videos
  const videos = data.items;
  container.innerHTML += videos.map(v => {
    // sometimes API returns playlists too — skip those
    if (!v.id.videoId) return "";
    return `
      <div class="video">
        <iframe 
          src="https://www.youtube.com/embed/${v.id.videoId}"
          frameborder="0" allowfullscreen>
        </iframe>
        <p>${v.snippet.title}</p>
      </div>
    `;
  }).join('');

  // If there's another page, fetch it recursively
  if (data.nextPageToken) {
    await fetchAllVideos(data.nextPageToken);
  }
}

// fetchAllVideos();


