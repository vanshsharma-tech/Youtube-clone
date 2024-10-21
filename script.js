let likeBtn = document.querySelector(".like-btn");

likeBtn.addEventListener("click", () => {
  console.log(likeBtn.firstChild);
});

// Function to change the video and its details
function changeVideo(videoSrc, videoTitle, viewsCount) {
  const videoPlayer = document.getElementById("main-video");
  const titleElement = document.getElementById("video-title");
  const viewsElement = document.getElementById("views-count");

  videoPlayer.src = videoSrc;
  titleElement.textContent = videoTitle;
  viewsElement.textContent = viewsCount;
}

// Comment functionality
const commentBox = document.getElementById("comment-box");
const submitComment = document.getElementById("submit-comment");
const commentsList = document.getElementById("comments-list");

submitComment.addEventListener("click", () => {
  const commentText = commentBox.value.trim();
  if (commentText) {
    const comment = document.createElement("div");
    comment.className = "comment";
    comment.textContent = commentText;
    commentsList.appendChild(comment);
    commentBox.value = ""; // Clear comment box
  }
});
