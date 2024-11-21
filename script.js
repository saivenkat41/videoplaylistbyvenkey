const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');
let data = [
    {
        'id': 'a1',
        'title': 'anaganaga ee buvilo song',
        'name': 'ayyappa1.mp4',
        'duration': '5:49',
    },
    {
        'id': 'a2',
        'title': 'Ayyappa Swamy songs',
        'name': 'ayyappa2.mp4',
        'duration': '0:09',
    },
    {
        'id': 'a3',
        'title': 'ayyappa swamy 🙏',
        'name': 'ayyappa3.mp4',
        'duration': '0:28',
    },

    {
        'id': 'a4',
        'title': 'Om Sri Swamy AA Aye Saranam Ayyappa',
        'name': 'ayyappa4.mp4',
        'duration': '0:49',
    },
    {
        'id': 'a5',
        'title': 'Ayyappa Githalu',
        'name': 'ayyappa5.mp4',
        'duration': '0:14',
    },
    {
        'id': 'a6',
        'title': 'Ayyappa',
        'name': 'ayyappa6.mp4',
        'duration': '0:11',
    },
    {
        'id': 'a7',
        'title': 'Swamy Ayyappa',
        'name': 'ayyappa7.mp4',
        'duration': '0:14',
    },

    {
        'id': 'a8',
        'title': 'Ayyappa Swamy 🤲',
        'name': 'ayyappa8.mp4',
        'duration': '0:21',
    },
    {
        'id': 'a9',
        'title': 'Ayyappa 🙏.',
        'name': 'ayyappa9.mp4',
        'duration': '12:03',
    },
    {
        'id': 'a10',
        'title': 'Harivarasanam song',
        'name': 'ayyappa10.mp4',
        'duration': '0:10',
    },
];
data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})
let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';
videos.forEach(selected_video => {
    selected_video.onclick = () => {
        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }
        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';
        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
