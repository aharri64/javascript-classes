class artist {
    constructor(name, age, genre, label) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.label = label;
        this.albums = [];
        this.songs = [];
        this.image = '';
        this.instagram = null;
    }

    addAlbum(album) {
        this.albums.push(album);
        console.log(`This is another ${album} for ${this.name}`);
    }

    addSong(song) {
        this.songs.push(song);
        console.log(`This is another ${song} for ${this.name}`);
    }

    addImage(imageLink) {
        this.image = imageLink;
    }

    aggIG(username) {
        this.instagram = username;
    }
}

//this is an instance of the Artist class
const devilMakesThree = new artist('Devil Makes Three', '10', 'Folk', 'unknown')


// look up an artist
// find 2 albums and add those albums
// find 2 songs and add those songs
// find an image and copy the image url, add image
// find their IG username and add username

devilMakesThree.addAlbum('Do Wrong Right', 'Chains Are Broken')
devilMakesThree.addSong('Old Number 7', 'wheels')
devilMakesThree.addImage('https://www.rollingstone.com/wp-content/uploads/2018/06/rs-12415-devil-624-1377695279.jpg?resize=1800,1200&w=1800')
devilMakesThree.addImage('@thedevilmakes3')