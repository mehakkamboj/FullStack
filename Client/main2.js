// url_for_token="https://id.twitch.tv/oauth2/token?client_id=wxcizc5kndyng22j25b87gjlmnpzqx&client_secret=9bglnihhn5x3gc2xgmc4wz75k5xzs1&grant_type=client_credentials"
// xhr2 = new XMLHttpRequest()

// xhr2.open('GET', url_for_token)
// 
// 	xhr2.onreadystatechange = () => {
// 		if (xhr2.readyState == 4 && xhr2.status == 200) {
// 			response = JSON.parse(xhr2.responseText)
// 			console.log(response.access_token);
// 		token = response.access_token

			
// 		}
// 	}
// 	xhr2.send()




// =================== isko exrecise wale js mein sabse upar daaal ==============================
// v=window.localStorage.getItem('myemail')
// console.log("===",v);
// document.getElementById('my-email').innerHTML=v
// //===========================================





let term = '';
const songContainer = document.getElementById('songs');

const updateTerm = () => {
    term = document.getElementById('searchInput').value;
    if (!term || term === '') {
        alert ('Please enter a search term');
    } else {

        while(songContainer.firstChild) {
            songContainer.removeChild(songContainer.firstChild);
        }

        const url = `https://itunes.apple.com/search?country=US&term=${term}&media=music&limit=50`
        fetch(url)
        .then((response)=> response.json() )
        .then((data) => {
            // console.log(data);
            const artists = data.results;
            return artists.map(result => {
                const article = document.createElement('article'),
                artist = document.createElement('p'),
                song = document.createElement('p'),
                img = document.createElement('img'),
                audio = document.createElement('audio'),
                audioSource = document.createElement('source')

                artist.innerHTML = result.artistName;
                song.innerHTML = result.trackName;
                img.src = result.artworkUrl100;
                audioSource.src = result.previewUrl;
                audio.setAttribute('controls','');

                article.appendChild(img)
                article.appendChild(artist)
                article.appendChild(song)
                article.appendChild(audio)
                audio.appendChild(audioSource)
                songContainer.appendChild(article);

         

         
    })
})
    }
}

const searchBtn = document.querySelector('button');
searchBtn.addEventListener('click', updateTerm);

document.addEventListener('play', event => {
    const audio = document.getElementsByTagName('audio');
    for(let i = 0; i < audio.length; i++) {
        if(audio[i] != event.target) {
            audio[i].pause();
        }
    }
}, true)



// .catch(error => console.log('Request Failed: ', error))
