const albums = [
    { title: "Kill 'Em All", artist: "Metallica", year: "1983" },
    { title: "Ride the Lightning", artist: "Metallica", year: "1984" },
    { title: "Master of Puppets", artist: "Metallica", year: "1986" },
    { title: "...And Justice for All", artist: "Metallica", year: "1988" },
    { title: "Metallica (The Black Album)", artist: "Metallica", year: "1991" },
    { title: "Load", artist: "Metallica", year: "1996" },
    { title: "Reload", artist: "Metallica", year: "1997" },
    { title: "St. Anger", artist: "Metallica", year: "2003" },
    { title: "Death Magnetic", artist: "Metallica", year: "2008" },
    { title: "Hardwired... to Self-Destruct", artist: "Metallica", year: "2016" }
];
const musicCollection = {
    albums,

    [Symbol.iterator]: function() {
        let index = 0;
        const albums = this.albums;

        return {
            next() {
                if (index < albums.length) {
                    return { value: albums[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};