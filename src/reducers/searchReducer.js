import { search } from "../services/spotify";

const updateLater = { tracks: { items: null } };

const reducer = (state = initialData, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return action.data;
    default:
      return state;
  }
};

export const setSearchCreator = (searchType, keyword, market) => {
  return async (dispatch) => {
    const data = await search(searchType, keyword, market);
    //change this code later
    if (data) {
      dispatch({
        type: "SET_SEARCH",
        data,
      });
    }
  };
};

export default reducer;

const initialData = {
  tracks: {
    href:
      "https://api.spotify.com/v1/search?query=sno&type=track&market=TH&offset=0&limit=50",
    items: [
      {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/2sd5k8N8cAOm6Q8OCcePw4",
              },
              href: "https://api.spotify.com/v1/artists/2sd5k8N8cAOm6Q8OCcePw4",
              id: "2sd5k8N8cAOm6Q8OCcePw4",
              name: "Rin音",
              type: "artist",
              uri: "spotify:artist:2sd5k8N8cAOm6Q8OCcePw4",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/4Y4AzIh3Djk3PgrFqDwz2C",
          },
          href: "https://api.spotify.com/v1/albums/4Y4AzIh3Djk3PgrFqDwz2C",
          id: "4Y4AzIh3Djk3PgrFqDwz2C",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b27384a10a7a1566be7f5ad2a0f6",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e0284a10a7a1566be7f5ad2a0f6",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d0000485184a10a7a1566be7f5ad2a0f6",
              width: 64,
            },
          ],
          name: "snow jam",
          release_date: "2020-02-19",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:4Y4AzIh3Djk3PgrFqDwz2C",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/2sd5k8N8cAOm6Q8OCcePw4",
            },
            href: "https://api.spotify.com/v1/artists/2sd5k8N8cAOm6Q8OCcePw4",
            id: "2sd5k8N8cAOm6Q8OCcePw4",
            name: "Rin音",
            type: "artist",
            uri: "spotify:artist:2sd5k8N8cAOm6Q8OCcePw4",
          },
        ],
        disc_number: 1,
        duration_ms: 184184,
        explicit: false,
        external_ids: {
          isrc: "JPS801854339",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/1SbEt51pN80q1cphFOqIPL",
        },
        href: "https://api.spotify.com/v1/tracks/1SbEt51pN80q1cphFOqIPL",
        id: "1SbEt51pN80q1cphFOqIPL",
        is_local: false,
        is_playable: true,
        name: "snow jam",
        popularity: 68,
        preview_url:
          "https://p.scdn.co/mp3-preview/2c7ed3235ff3e40d558b4f7526fc127c235e0bff?cid=b154195200be41338cce8394cd67c97a",
        track_number: 1,
        type: "track",
        uri: "spotify:track:1SbEt51pN80q1cphFOqIPL",
      },
      {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6l3HvQ5sa6mXTsMTB19rO5",
              },
              href: "https://api.spotify.com/v1/artists/6l3HvQ5sa6mXTsMTB19rO5",
              id: "6l3HvQ5sa6mXTsMTB19rO5",
              name: "J. Cole",
              type: "artist",
              uri: "spotify:artist:6l3HvQ5sa6mXTsMTB19rO5",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/0MXpE6m0mEK0r3TuERb9Yd",
          },
          href: "https://api.spotify.com/v1/albums/0MXpE6m0mEK0r3TuERb9Yd",
          id: "0MXpE6m0mEK0r3TuERb9Yd",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b273e9111b8b529532aa62b14bdc",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e02e9111b8b529532aa62b14bdc",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d00004851e9111b8b529532aa62b14bdc",
              width: 64,
            },
          ],
          name: "Snow On Tha Bluff",
          release_date: "2020-06-16",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:0MXpE6m0mEK0r3TuERb9Yd",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/6l3HvQ5sa6mXTsMTB19rO5",
            },
            href: "https://api.spotify.com/v1/artists/6l3HvQ5sa6mXTsMTB19rO5",
            id: "6l3HvQ5sa6mXTsMTB19rO5",
            name: "J. Cole",
            type: "artist",
            uri: "spotify:artist:6l3HvQ5sa6mXTsMTB19rO5",
          },
        ],
        disc_number: 1,
        duration_ms: 235480,
        explicit: true,
        external_ids: {
          isrc: "QMJMT2003024",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/1oOEkBNp4zWnkD7nWjJdog",
        },
        href: "https://api.spotify.com/v1/tracks/1oOEkBNp4zWnkD7nWjJdog",
        id: "1oOEkBNp4zWnkD7nWjJdog",
        is_local: false,
        is_playable: true,
        name: "Snow On Tha Bluff",
        popularity: 80,
        preview_url: null,
        track_number: 1,
        type: "track",
        uri: "spotify:track:1oOEkBNp4zWnkD7nWjJdog",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0L8ExT028jH3ddEcZwqJJ5",
              },
              href: "https://api.spotify.com/v1/artists/0L8ExT028jH3ddEcZwqJJ5",
              id: "0L8ExT028jH3ddEcZwqJJ5",
              name: "Red Hot Chili Peppers",
              type: "artist",
              uri: "spotify:artist:0L8ExT028jH3ddEcZwqJJ5",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/7xl50xr9NDkd3i2kBbzsNZ",
          },
          href: "https://api.spotify.com/v1/albums/7xl50xr9NDkd3i2kBbzsNZ",
          id: "7xl50xr9NDkd3i2kBbzsNZ",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b27309fd83d32aee93dceba78517",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e0209fd83d32aee93dceba78517",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d0000485109fd83d32aee93dceba78517",
              width: 64,
            },
          ],
          name: "Stadium Arcadium",
          release_date: "2006-05-09",
          release_date_precision: "day",
          total_tracks: 29,
          type: "album",
          uri: "spotify:album:7xl50xr9NDkd3i2kBbzsNZ",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/0L8ExT028jH3ddEcZwqJJ5",
            },
            href: "https://api.spotify.com/v1/artists/0L8ExT028jH3ddEcZwqJJ5",
            id: "0L8ExT028jH3ddEcZwqJJ5",
            name: "Red Hot Chili Peppers",
            type: "artist",
            uri: "spotify:artist:0L8ExT028jH3ddEcZwqJJ5",
          },
        ],
        disc_number: 1,
        duration_ms: 334666,
        explicit: false,
        external_ids: {
          isrc: "USWB10601591",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/2aibwv5hGXSgw7Yru8IYTO",
        },
        href: "https://api.spotify.com/v1/tracks/2aibwv5hGXSgw7Yru8IYTO",
        id: "2aibwv5hGXSgw7Yru8IYTO",
        is_local: false,
        is_playable: true,
        name: "Snow (Hey Oh)",
        popularity: 78,
        preview_url:
          "https://p.scdn.co/mp3-preview/bc8d37532bace773a946ed1ab59f4181e632d93a?cid=b154195200be41338cce8394cd67c97a",
        track_number: 2,
        type: "track",
        uri: "spotify:track:2aibwv5hGXSgw7Yru8IYTO",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
              },
              href: "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              id: "0LyfQWJT6nXafLPZqxe9Of",
              name: "Various Artists",
              type: "artist",
              uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/6XyaVDkZeCWf14x0eESZdl",
          },
          href: "https://api.spotify.com/v1/albums/6XyaVDkZeCWf14x0eESZdl",
          id: "6XyaVDkZeCWf14x0eESZdl",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b27380db5f1340bc1170a22d8e2c",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e0280db5f1340bc1170a22d8e2c",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d0000485180db5f1340bc1170a22d8e2c",
              width: 64,
            },
          ],
          name: "1 Am. Study Session",
          release_date: "2019-12-08",
          release_date_precision: "day",
          total_tracks: 27,
          type: "album",
          uri: "spotify:album:6XyaVDkZeCWf14x0eESZdl",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/2CiO7xWdwPMDlVwlt9qa1f",
            },
            href: "https://api.spotify.com/v1/artists/2CiO7xWdwPMDlVwlt9qa1f",
            id: "2CiO7xWdwPMDlVwlt9qa1f",
            name: "WYS",
            type: "artist",
            uri: "spotify:artist:2CiO7xWdwPMDlVwlt9qa1f",
          },
        ],
        disc_number: 1,
        duration_ms: 195136,
        explicit: false,
        external_ids: {
          isrc: "TCAEN1970702",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/5ehVOwEZ1Q7Ckkdtq0dY1W",
        },
        href: "https://api.spotify.com/v1/tracks/5ehVOwEZ1Q7Ckkdtq0dY1W",
        id: "5ehVOwEZ1Q7Ckkdtq0dY1W",
        is_local: false,
        is_playable: true,
        name: "Snowman",
        popularity: 74,
        preview_url:
          "https://p.scdn.co/mp3-preview/b4762770e66b668fc303bee8c6155721d563df10?cid=b154195200be41338cce8394cd67c97a",
        track_number: 1,
        type: "track",
        uri: "spotify:track:5ehVOwEZ1Q7Ckkdtq0dY1W",
      },
      {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1ymRpNPlxJRVT00kmJk8AZ",
              },
              href: "https://api.spotify.com/v1/artists/1ymRpNPlxJRVT00kmJk8AZ",
              id: "1ymRpNPlxJRVT00kmJk8AZ",
              name: "2T FLOW",
              type: "artist",
              uri: "spotify:artist:1ymRpNPlxJRVT00kmJk8AZ",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0HVSM2BqVhQqxDa8L8in6t",
              },
              href: "https://api.spotify.com/v1/artists/0HVSM2BqVhQqxDa8L8in6t",
              id: "0HVSM2BqVhQqxDa8L8in6t",
              name: "SNOOPO",
              type: "artist",
              uri: "spotify:artist:0HVSM2BqVhQqxDa8L8in6t",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0iFwRo7pOWhCYtFjGglmfa",
              },
              href: "https://api.spotify.com/v1/artists/0iFwRo7pOWhCYtFjGglmfa",
              id: "0iFwRo7pOWhCYtFjGglmfa",
              name: "HANXPOND",
              type: "artist",
              uri: "spotify:artist:0iFwRo7pOWhCYtFjGglmfa",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/3EkAXC1DI7Sc2wyWp9eBZ9",
          },
          href: "https://api.spotify.com/v1/albums/3EkAXC1DI7Sc2wyWp9eBZ9",
          id: "3EkAXC1DI7Sc2wyWp9eBZ9",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b273dfb063aa136cab7238a363e9",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e02dfb063aa136cab7238a363e9",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d00004851dfb063aa136cab7238a363e9",
              width: 64,
            },
          ],
          name: "เมื่อคืนฉันฝันว่า",
          release_date: "2019-05-15",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:3EkAXC1DI7Sc2wyWp9eBZ9",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1ymRpNPlxJRVT00kmJk8AZ",
            },
            href: "https://api.spotify.com/v1/artists/1ymRpNPlxJRVT00kmJk8AZ",
            id: "1ymRpNPlxJRVT00kmJk8AZ",
            name: "2T FLOW",
            type: "artist",
            uri: "spotify:artist:1ymRpNPlxJRVT00kmJk8AZ",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/0HVSM2BqVhQqxDa8L8in6t",
            },
            href: "https://api.spotify.com/v1/artists/0HVSM2BqVhQqxDa8L8in6t",
            id: "0HVSM2BqVhQqxDa8L8in6t",
            name: "SNOOPO",
            type: "artist",
            uri: "spotify:artist:0HVSM2BqVhQqxDa8L8in6t",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/0iFwRo7pOWhCYtFjGglmfa",
            },
            href: "https://api.spotify.com/v1/artists/0iFwRo7pOWhCYtFjGglmfa",
            id: "0iFwRo7pOWhCYtFjGglmfa",
            name: "HANXPOND",
            type: "artist",
            uri: "spotify:artist:0iFwRo7pOWhCYtFjGglmfa",
          },
        ],
        disc_number: 1,
        duration_ms: 156791,
        explicit: false,
        external_ids: {
          isrc: "THSOH1904456",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/7gFhyOlGIO4d9yNxIS5ijn",
        },
        href: "https://api.spotify.com/v1/tracks/7gFhyOlGIO4d9yNxIS5ijn",
        id: "7gFhyOlGIO4d9yNxIS5ijn",
        is_local: false,
        is_playable: true,
        name: "เมื่อคืนฉันฝันว่า",
        popularity: 47,
        preview_url:
          "https://p.scdn.co/mp3-preview/9750e455df9a004b1e9c11cad2553a80c007ac45?cid=b154195200be41338cce8394cd67c97a",
        track_number: 1,
        type: "track",
        uri: "spotify:track:7gFhyOlGIO4d9yNxIS5ijn",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
              },
              href: "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              id: "0LyfQWJT6nXafLPZqxe9Of",
              name: "Various Artists",
              type: "artist",
              uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/2J4CYQKXBkjWYn25G9w5Nh",
          },
          href: "https://api.spotify.com/v1/albums/2J4CYQKXBkjWYn25G9w5Nh",
          id: "2J4CYQKXBkjWYn25G9w5Nh",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b27304125706c5960a04016e020b",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e0204125706c5960a04016e020b",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d0000485104125706c5960a04016e020b",
              width: 64,
            },
          ],
          name: "Summer Party Hits",
          release_date: "2020-07-03",
          release_date_precision: "day",
          total_tracks: 32,
          type: "album",
          uri: "spotify:album:2J4CYQKXBkjWYn25G9w5Nh",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/7hJcb9fa4alzcOq3EaNPoG",
            },
            href: "https://api.spotify.com/v1/artists/7hJcb9fa4alzcOq3EaNPoG",
            id: "7hJcb9fa4alzcOq3EaNPoG",
            name: "Snoop Dogg",
            type: "artist",
            uri: "spotify:artist:7hJcb9fa4alzcOq3EaNPoG",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/2RdwBSPQiwcmiDo9kixcl8",
            },
            href: "https://api.spotify.com/v1/artists/2RdwBSPQiwcmiDo9kixcl8",
            id: "2RdwBSPQiwcmiDo9kixcl8",
            name: "Pharrell Williams",
            type: "artist",
            uri: "spotify:artist:2RdwBSPQiwcmiDo9kixcl8",
          },
        ],
        disc_number: 1,
        duration_ms: 266706,
        explicit: true,
        external_ids: {
          isrc: "USMC10400640",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/4RJVHxjysYnES7QBArX1rN",
        },
        href: "https://api.spotify.com/v1/tracks/4RJVHxjysYnES7QBArX1rN",
        id: "4RJVHxjysYnES7QBArX1rN",
        is_local: false,
        is_playable: true,
        name: "Drop It Like It's Hot",
        popularity: 5,
        preview_url: null,
        track_number: 5,
        type: "track",
        uri: "spotify:track:4RJVHxjysYnES7QBArX1rN",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
              },
              href: "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              id: "0LyfQWJT6nXafLPZqxe9Of",
              name: "Various Artists",
              type: "artist",
              uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/5fk3AT6ptuuQXVcb7p43a4",
          },
          href: "https://api.spotify.com/v1/albums/5fk3AT6ptuuQXVcb7p43a4",
          id: "5fk3AT6ptuuQXVcb7p43a4",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b27369127f5a9c5d3913a28b1c8d",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e0269127f5a9c5d3913a28b1c8d",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d0000485169127f5a9c5d3913a28b1c8d",
              width: 64,
            },
          ],
          name: "Boombox Rap",
          release_date: "2020-06-26",
          release_date_precision: "day",
          total_tracks: 27,
          type: "album",
          uri: "spotify:album:5fk3AT6ptuuQXVcb7p43a4",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/7hJcb9fa4alzcOq3EaNPoG",
            },
            href: "https://api.spotify.com/v1/artists/7hJcb9fa4alzcOq3EaNPoG",
            id: "7hJcb9fa4alzcOq3EaNPoG",
            name: "Snoop Dogg",
            type: "artist",
            uri: "spotify:artist:7hJcb9fa4alzcOq3EaNPoG",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/137W8MRPWKqSmrBGDBFSop",
            },
            href: "https://api.spotify.com/v1/artists/137W8MRPWKqSmrBGDBFSop",
            id: "137W8MRPWKqSmrBGDBFSop",
            name: "Wiz Khalifa",
            type: "artist",
            uri: "spotify:artist:137W8MRPWKqSmrBGDBFSop",
          },
        ],
        disc_number: 1,
        duration_ms: 292626,
        explicit: false,
        external_ids: {
          isrc: "USAT21103660",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/0tXyzhTQcftXLhBq14CpLy",
        },
        href: "https://api.spotify.com/v1/tracks/0tXyzhTQcftXLhBq14CpLy",
        id: "0tXyzhTQcftXLhBq14CpLy",
        is_local: false,
        is_playable: true,
        name: "I Get Lifted",
        popularity: 3,
        preview_url:
          "https://p.scdn.co/mp3-preview/5dde2ff1393d7736736277bb30bf9b55c095fcbf?cid=b154195200be41338cce8394cd67c97a",
        track_number: 24,
        type: "track",
        uri: "spotify:track:0tXyzhTQcftXLhBq14CpLy",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
              },
              href: "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              id: "0LyfQWJT6nXafLPZqxe9Of",
              name: "Various Artists",
              type: "artist",
              uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/4OwkypHZE3OM8I6JU10TCr",
          },
          href: "https://api.spotify.com/v1/albums/4OwkypHZE3OM8I6JU10TCr",
          id: "4OwkypHZE3OM8I6JU10TCr",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b27334903ec5681e4f918817d958",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e0234903ec5681e4f918817d958",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d0000485134903ec5681e4f918817d958",
              width: 64,
            },
          ],
          name: "2000's Hip hop",
          release_date: "2020-07-03",
          release_date_precision: "day",
          total_tracks: 30,
          type: "album",
          uri: "spotify:album:4OwkypHZE3OM8I6JU10TCr",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/7hJcb9fa4alzcOq3EaNPoG",
            },
            href: "https://api.spotify.com/v1/artists/7hJcb9fa4alzcOq3EaNPoG",
            id: "7hJcb9fa4alzcOq3EaNPoG",
            name: "Snoop Dogg",
            type: "artist",
            uri: "spotify:artist:7hJcb9fa4alzcOq3EaNPoG",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/2RdwBSPQiwcmiDo9kixcl8",
            },
            href: "https://api.spotify.com/v1/artists/2RdwBSPQiwcmiDo9kixcl8",
            id: "2RdwBSPQiwcmiDo9kixcl8",
            name: "Pharrell Williams",
            type: "artist",
            uri: "spotify:artist:2RdwBSPQiwcmiDo9kixcl8",
          },
        ],
        disc_number: 1,
        duration_ms: 266653,
        explicit: false,
        external_ids: {
          isrc: "USMC10400902",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/7Em0HAB92i2QmvJbYE04Qd",
        },
        href: "https://api.spotify.com/v1/tracks/7Em0HAB92i2QmvJbYE04Qd",
        id: "7Em0HAB92i2QmvJbYE04Qd",
        is_local: false,
        is_playable: true,
        name: "Drop It Like It's Hot",
        popularity: 4,
        preview_url: null,
        track_number: 2,
        type: "track",
        uri: "spotify:track:7Em0HAB92i2QmvJbYE04Qd",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
              },
              href: "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              id: "0LyfQWJT6nXafLPZqxe9Of",
              name: "Various Artists",
              type: "artist",
              uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/1F93BXPeAqp6Z5SMvJTUwY",
          },
          href: "https://api.spotify.com/v1/albums/1F93BXPeAqp6Z5SMvJTUwY",
          id: "1F93BXPeAqp6Z5SMvJTUwY",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b27305cb0d772f3baebf04079d56",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e0205cb0d772f3baebf04079d56",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d0000485105cb0d772f3baebf04079d56",
              width: 64,
            },
          ],
          name: "Party Bangers 2020",
          release_date: "2020-07-03",
          release_date_precision: "day",
          total_tracks: 24,
          type: "album",
          uri: "spotify:album:1F93BXPeAqp6Z5SMvJTUwY",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/7hJcb9fa4alzcOq3EaNPoG",
            },
            href: "https://api.spotify.com/v1/artists/7hJcb9fa4alzcOq3EaNPoG",
            id: "7hJcb9fa4alzcOq3EaNPoG",
            name: "Snoop Dogg",
            type: "artist",
            uri: "spotify:artist:7hJcb9fa4alzcOq3EaNPoG",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1Cs0zKBU1kc0i8ypK3B9ai",
            },
            href: "https://api.spotify.com/v1/artists/1Cs0zKBU1kc0i8ypK3B9ai",
            id: "1Cs0zKBU1kc0i8ypK3B9ai",
            name: "David Guetta",
            type: "artist",
            uri: "spotify:artist:1Cs0zKBU1kc0i8ypK3B9ai",
          },
        ],
        disc_number: 1,
        duration_ms: 202306,
        explicit: false,
        external_ids: {
          isrc: "USCA21100463",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/369zIdqI5hxenWpwbJ5HoO",
        },
        href: "https://api.spotify.com/v1/tracks/369zIdqI5hxenWpwbJ5HoO",
        id: "369zIdqI5hxenWpwbJ5HoO",
        is_local: false,
        is_playable: true,
        name: "Sweat - Remix",
        popularity: 4,
        preview_url: null,
        track_number: 12,
        type: "track",
        uri: "spotify:track:369zIdqI5hxenWpwbJ5HoO",
      },
      {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/117FwIxp2OWDSWYr9X4j7o",
              },
              href: "https://api.spotify.com/v1/artists/117FwIxp2OWDSWYr9X4j7o",
              id: "117FwIxp2OWDSWYr9X4j7o",
              name: "Leah Day",
              type: "artist",
              uri: "spotify:artist:117FwIxp2OWDSWYr9X4j7o",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/6OyZMyAiAtD2MJjAI91Irc",
          },
          href: "https://api.spotify.com/v1/albums/6OyZMyAiAtD2MJjAI91Irc",
          id: "6OyZMyAiAtD2MJjAI91Irc",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b273f6899a5b2a260ac550270e76",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e02f6899a5b2a260ac550270e76",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d00004851f6899a5b2a260ac550270e76",
              width: 64,
            },
          ],
          name: "Snowdonia",
          release_date: "2019-10-18",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:6OyZMyAiAtD2MJjAI91Irc",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/117FwIxp2OWDSWYr9X4j7o",
            },
            href: "https://api.spotify.com/v1/artists/117FwIxp2OWDSWYr9X4j7o",
            id: "117FwIxp2OWDSWYr9X4j7o",
            name: "Leah Day",
            type: "artist",
            uri: "spotify:artist:117FwIxp2OWDSWYr9X4j7o",
          },
        ],
        disc_number: 1,
        duration_ms: 178000,
        explicit: false,
        external_ids: {
          isrc: "SE5W31933601",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/6JMuZsTQprhBrbywStSwer",
        },
        href: "https://api.spotify.com/v1/tracks/6JMuZsTQprhBrbywStSwer",
        id: "6JMuZsTQprhBrbywStSwer",
        is_local: false,
        is_playable: true,
        name: "Snowdonia",
        popularity: 66,
        preview_url:
          "https://p.scdn.co/mp3-preview/6298d6b6a580830038d9282866ba5ea7ec19ebed?cid=b154195200be41338cce8394cd67c97a",
        track_number: 1,
        type: "track",
        uri: "spotify:track:6JMuZsTQprhBrbywStSwer",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ",
              },
              href: "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
              id: "1Xyo4u8uXC1ZmMpatF05PJ",
              name: "The Weeknd",
              type: "artist",
              uri: "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/4yP0hdKOZPNshxUOjY0cZj",
          },
          href: "https://api.spotify.com/v1/albums/4yP0hdKOZPNshxUOjY0cZj",
          id: "4yP0hdKOZPNshxUOjY0cZj",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d000048518863bc11d2aa12b54f5aeb36",
              width: 64,
            },
          ],
          name: "After Hours",
          release_date: "2020-03-20",
          release_date_precision: "day",
          total_tracks: 14,
          type: "album",
          uri: "spotify:album:4yP0hdKOZPNshxUOjY0cZj",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ",
            },
            href: "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
            id: "1Xyo4u8uXC1ZmMpatF05PJ",
            name: "The Weeknd",
            type: "artist",
            uri: "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ",
          },
        ],
        disc_number: 1,
        duration_ms: 247186,
        explicit: true,
        external_ids: {
          isrc: "USUG12000654",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/3WlbeuhfRSqU7ylK2Ui5U7",
        },
        href: "https://api.spotify.com/v1/tracks/3WlbeuhfRSqU7ylK2Ui5U7",
        id: "3WlbeuhfRSqU7ylK2Ui5U7",
        is_local: false,
        is_playable: true,
        name: "Snowchild",
        popularity: 73,
        preview_url: null,
        track_number: 5,
        type: "track",
        uri: "spotify:track:3WlbeuhfRSqU7ylK2Ui5U7",
      },
      {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/4qIVPF0s71ZYW3qzhu5GkF",
              },
              href: "https://api.spotify.com/v1/artists/4qIVPF0s71ZYW3qzhu5GkF",
              id: "4qIVPF0s71ZYW3qzhu5GkF",
              name: "Kina",
              type: "artist",
              uri: "spotify:artist:4qIVPF0s71ZYW3qzhu5GkF",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/5LZSpPoBVBsh6kRSEKfPQ8",
          },
          href: "https://api.spotify.com/v1/albums/5LZSpPoBVBsh6kRSEKfPQ8",
          id: "5LZSpPoBVBsh6kRSEKfPQ8",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b2730a64e2680bbc44107022e326",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e020a64e2680bbc44107022e326",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d000048510a64e2680bbc44107022e326",
              width: 64,
            },
          ],
          name: "Get You The Moon (feat. Snøw)",
          release_date: "2018-10-08",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:5LZSpPoBVBsh6kRSEKfPQ8",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/4qIVPF0s71ZYW3qzhu5GkF",
            },
            href: "https://api.spotify.com/v1/artists/4qIVPF0s71ZYW3qzhu5GkF",
            id: "4qIVPF0s71ZYW3qzhu5GkF",
            name: "Kina",
            type: "artist",
            uri: "spotify:artist:4qIVPF0s71ZYW3qzhu5GkF",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5fSVkkuijRIpxuvSqysYiP",
            },
            href: "https://api.spotify.com/v1/artists/5fSVkkuijRIpxuvSqysYiP",
            id: "5fSVkkuijRIpxuvSqysYiP",
            name: "Snøw",
            type: "artist",
            uri: "spotify:artist:5fSVkkuijRIpxuvSqysYiP",
          },
        ],
        disc_number: 1,
        duration_ms: 179080,
        explicit: false,
        external_ids: {
          isrc: "USSM11808093",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/4ZLzoOkj0MPWrTLvooIuaa",
        },
        href: "https://api.spotify.com/v1/tracks/4ZLzoOkj0MPWrTLvooIuaa",
        id: "4ZLzoOkj0MPWrTLvooIuaa",
        is_local: false,
        is_playable: true,
        name: "Get You The Moon (feat. Snøw)",
        popularity: 85,
        preview_url:
          "https://p.scdn.co/mp3-preview/d5c74a622751ac0537d769bf795cb728b33ff285?cid=b154195200be41338cce8394cd67c97a",
        track_number: 1,
        type: "track",
        uri: "spotify:track:4ZLzoOkj0MPWrTLvooIuaa",
      },
      {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/4FuRHFtCeoYaeeVDKyyvbS",
              },
              href: "https://api.spotify.com/v1/artists/4FuRHFtCeoYaeeVDKyyvbS",
              id: "4FuRHFtCeoYaeeVDKyyvbS",
              name: "OVAN",
              type: "artist",
              uri: "spotify:artist:4FuRHFtCeoYaeeVDKyyvbS",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/4T6xiCykTP9rCNaEPU7D4q",
              },
              href: "https://api.spotify.com/v1/artists/4T6xiCykTP9rCNaEPU7D4q",
              id: "4T6xiCykTP9rCNaEPU7D4q",
              name: "VINXEN",
              type: "artist",
              uri: "spotify:artist:4T6xiCykTP9rCNaEPU7D4q",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/5zKyL00osBKjChWdhEEgzf",
          },
          href: "https://api.spotify.com/v1/albums/5zKyL00osBKjChWdhEEgzf",
          id: "5zKyL00osBKjChWdhEEgzf",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b2732651c201ba514e08a47cabe2",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e022651c201ba514e08a47cabe2",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d000048512651c201ba514e08a47cabe2",
              width: 64,
            },
          ],
          name: "Snowflake",
          release_date: "2019-01-23",
          release_date_precision: "day",
          total_tracks: 2,
          type: "album",
          uri: "spotify:album:5zKyL00osBKjChWdhEEgzf",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/4FuRHFtCeoYaeeVDKyyvbS",
            },
            href: "https://api.spotify.com/v1/artists/4FuRHFtCeoYaeeVDKyyvbS",
            id: "4FuRHFtCeoYaeeVDKyyvbS",
            name: "OVAN",
            type: "artist",
            uri: "spotify:artist:4FuRHFtCeoYaeeVDKyyvbS",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/4T6xiCykTP9rCNaEPU7D4q",
            },
            href: "https://api.spotify.com/v1/artists/4T6xiCykTP9rCNaEPU7D4q",
            id: "4T6xiCykTP9rCNaEPU7D4q",
            name: "VINXEN",
            type: "artist",
            uri: "spotify:artist:4T6xiCykTP9rCNaEPU7D4q",
          },
        ],
        disc_number: 1,
        duration_ms: 201623,
        explicit: false,
        external_ids: {
          isrc: "KRA251900148",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/5EQjiY74P2KPjWbuTjTnkx",
        },
        href: "https://api.spotify.com/v1/tracks/5EQjiY74P2KPjWbuTjTnkx",
        id: "5EQjiY74P2KPjWbuTjTnkx",
        is_local: false,
        is_playable: true,
        name: "Snowflake",
        popularity: 42,
        preview_url:
          "https://p.scdn.co/mp3-preview/4b950a9a111865a7d66aa5b4e4f0a2c9da4c2a5d?cid=b154195200be41338cce8394cd67c97a",
        track_number: 1,
        type: "track",
        uri: "spotify:track:5EQjiY74P2KPjWbuTjTnkx",
      },
      {
        album: {
          album_type: "compilation",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
              },
              href: "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              id: "0LyfQWJT6nXafLPZqxe9Of",
              name: "Various Artists",
              type: "artist",
              uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/4lgdDGPZzQTQh33ebczu4Q",
          },
          href: "https://api.spotify.com/v1/albums/4lgdDGPZzQTQh33ebczu4Q",
          id: "4lgdDGPZzQTQh33ebczu4Q",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b2730d0b57487e4c9b506906203d",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e020d0b57487e4c9b506906203d",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d000048510d0b57487e4c9b506906203d",
              width: 64,
            },
          ],
          name: 'Tv Anime "Fairy Tail" Op & Ed Theme Songs Vol. 1',
          release_date: "2011-08-17",
          release_date_precision: "day",
          total_tracks: 10,
          type: "album",
          uri: "spotify:album:4lgdDGPZzQTQh33ebczu4Q",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5bsH582oaAKCAcPMkOP2Vu",
            },
            href: "https://api.spotify.com/v1/artists/5bsH582oaAKCAcPMkOP2Vu",
            id: "5bsH582oaAKCAcPMkOP2Vu",
            name: "FUNKIST",
            type: "artist",
            uri: "spotify:artist:5bsH582oaAKCAcPMkOP2Vu",
          },
        ],
        disc_number: 1,
        duration_ms: 216626,
        explicit: false,
        external_ids: {
          isrc: "JPPC00902935",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/2rYiDn8FjwBnBPtZDP8to3",
        },
        href: "https://api.spotify.com/v1/tracks/2rYiDn8FjwBnBPtZDP8to3",
        id: "2rYiDn8FjwBnBPtZDP8to3",
        is_local: false,
        is_playable: true,
        name: "Snow Fairy",
        popularity: 60,
        preview_url:
          "https://p.scdn.co/mp3-preview/14f906c2b6565f4bb5647121daa1d501ecb6fb97?cid=b154195200be41338cce8394cd67c97a",
        track_number: 1,
        type: "track",
        uri: "spotify:track:2rYiDn8FjwBnBPtZDP8to3",
      },
      {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7owveHzN1hmQuw6Ojg4sI3",
              },
              href: "https://api.spotify.com/v1/artists/7owveHzN1hmQuw6Ojg4sI3",
              id: "7owveHzN1hmQuw6Ojg4sI3",
              name: "SURL",
              type: "artist",
              uri: "spotify:artist:7owveHzN1hmQuw6Ojg4sI3",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/2m10h5CrPLn9h6gn7tAF9R",
          },
          href: "https://api.spotify.com/v1/albums/2m10h5CrPLn9h6gn7tAF9R",
          id: "2m10h5CrPLn9h6gn7tAF9R",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b273cd841a42f2c6c603861202ec",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e02cd841a42f2c6c603861202ec",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d00004851cd841a42f2c6c603861202ec",
              width: 64,
            },
          ],
          name: "Aren't You?",
          release_date: "2018-12-06",
          release_date_precision: "day",
          total_tracks: 5,
          type: "album",
          uri: "spotify:album:2m10h5CrPLn9h6gn7tAF9R",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/7owveHzN1hmQuw6Ojg4sI3",
            },
            href: "https://api.spotify.com/v1/artists/7owveHzN1hmQuw6Ojg4sI3",
            id: "7owveHzN1hmQuw6Ojg4sI3",
            name: "SURL",
            type: "artist",
            uri: "spotify:artist:7owveHzN1hmQuw6Ojg4sI3",
          },
        ],
        disc_number: 1,
        duration_ms: 274013,
        explicit: false,
        external_ids: {
          isrc: "KRE891800104",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/4MqKVsoZXhl4b2EiEFCkty",
        },
        href: "https://api.spotify.com/v1/tracks/4MqKVsoZXhl4b2EiEFCkty",
        id: "4MqKVsoZXhl4b2EiEFCkty",
        is_local: false,
        is_playable: true,
        name: "Snow 눈",
        popularity: 43,
        preview_url:
          "https://p.scdn.co/mp3-preview/70fd9f3e87477dc2f93e7b5fa0ecfe5b3ba7522d?cid=b154195200be41338cce8394cd67c97a",
        track_number: 3,
        type: "track",
        uri: "spotify:track:4MqKVsoZXhl4b2EiEFCkty",
      },
      {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7EyQn2KSLStE6tXcdpDOXm",
              },
              href: "https://api.spotify.com/v1/artists/7EyQn2KSLStE6tXcdpDOXm",
              id: "7EyQn2KSLStE6tXcdpDOXm",
              name: "Ronald & the Fairies",
              type: "artist",
              uri: "spotify:artist:7EyQn2KSLStE6tXcdpDOXm",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/1rKjHI0aRqFSIP6mUDAW38",
          },
          href: "https://api.spotify.com/v1/albums/1rKjHI0aRqFSIP6mUDAW38",
          id: "1rKjHI0aRqFSIP6mUDAW38",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b273abb20b38a94dc5a7fb295772",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e02abb20b38a94dc5a7fb295772",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d00004851abb20b38a94dc5a7fb295772",
              width: 64,
            },
          ],
          name: "Snow Keeps Falling",
          release_date: "2019-12-02",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:1rKjHI0aRqFSIP6mUDAW38",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/7EyQn2KSLStE6tXcdpDOXm",
            },
            href: "https://api.spotify.com/v1/artists/7EyQn2KSLStE6tXcdpDOXm",
            id: "7EyQn2KSLStE6tXcdpDOXm",
            name: "Ronald & the Fairies",
            type: "artist",
            uri: "spotify:artist:7EyQn2KSLStE6tXcdpDOXm",
          },
        ],
        disc_number: 1,
        duration_ms: 151097,
        explicit: false,
        external_ids: {
          isrc: "SE5IB1901533",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/2bNYgVK6yXzAuFD6uMWKsv",
        },
        href: "https://api.spotify.com/v1/tracks/2bNYgVK6yXzAuFD6uMWKsv",
        id: "2bNYgVK6yXzAuFD6uMWKsv",
        is_local: false,
        is_playable: true,
        name: "Snow Keeps Falling",
        popularity: 58,
        preview_url:
          "https://p.scdn.co/mp3-preview/8a2bcf2ec6e14507738d3436601cbee3027dc1f3?cid=b154195200be41338cce8394cd67c97a",
        track_number: 1,
        type: "track",
        uri: "spotify:track:2bNYgVK6yXzAuFD6uMWKsv",
      },
      {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/4uU7KfTjcjyKUGWSaTzLu7",
              },
              href: "https://api.spotify.com/v1/artists/4uU7KfTjcjyKUGWSaTzLu7",
              id: "4uU7KfTjcjyKUGWSaTzLu7",
              name: "015B",
              type: "artist",
              uri: "spotify:artist:4uU7KfTjcjyKUGWSaTzLu7",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6fPdf4FwoX5IZQa0keqBXY",
              },
              href: "https://api.spotify.com/v1/artists/6fPdf4FwoX5IZQa0keqBXY",
              id: "6fPdf4FwoX5IZQa0keqBXY",
              name: "Benaddict",
              type: "artist",
              uri: "spotify:artist:6fPdf4FwoX5IZQa0keqBXY",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/1XbTgdcRQ4ss531LtZdXX7",
          },
          href: "https://api.spotify.com/v1/albums/1XbTgdcRQ4ss531LtZdXX7",
          id: "1XbTgdcRQ4ss531LtZdXX7",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b273a9ae63c74a4d63b56b7748b4",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e02a9ae63c74a4d63b56b7748b4",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d00004851a9ae63c74a4d63b56b7748b4",
              width: 64,
            },
          ],
          name: "Snow in Seoul",
          release_date: "2018-12-18",
          release_date_precision: "day",
          total_tracks: 2,
          type: "album",
          uri: "spotify:album:1XbTgdcRQ4ss531LtZdXX7",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/4uU7KfTjcjyKUGWSaTzLu7",
            },
            href: "https://api.spotify.com/v1/artists/4uU7KfTjcjyKUGWSaTzLu7",
            id: "4uU7KfTjcjyKUGWSaTzLu7",
            name: "015B",
            type: "artist",
            uri: "spotify:artist:4uU7KfTjcjyKUGWSaTzLu7",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/6fPdf4FwoX5IZQa0keqBXY",
            },
            href: "https://api.spotify.com/v1/artists/6fPdf4FwoX5IZQa0keqBXY",
            id: "6fPdf4FwoX5IZQa0keqBXY",
            name: "Benaddict",
            type: "artist",
            uri: "spotify:artist:6fPdf4FwoX5IZQa0keqBXY",
          },
        ],
        disc_number: 1,
        duration_ms: 269722,
        explicit: false,
        external_ids: {
          isrc: "KRB471801935",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/2k9Jahbon5h8gVHHgoetNI",
        },
        href: "https://api.spotify.com/v1/tracks/2k9Jahbon5h8gVHHgoetNI",
        id: "2k9Jahbon5h8gVHHgoetNI",
        is_local: false,
        is_playable: true,
        name: "Snow in Seoul",
        popularity: 43,
        preview_url:
          "https://p.scdn.co/mp3-preview/46ada31008bb64cd54094e49b8cc585651815abd?cid=b154195200be41338cce8394cd67c97a",
        track_number: 1,
        type: "track",
        uri: "spotify:track:2k9Jahbon5h8gVHHgoetNI",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
              },
              href: "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              id: "0LyfQWJT6nXafLPZqxe9Of",
              name: "Various Artists",
              type: "artist",
              uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/6XyaVDkZeCWf14x0eESZdl",
          },
          href: "https://api.spotify.com/v1/albums/6XyaVDkZeCWf14x0eESZdl",
          id: "6XyaVDkZeCWf14x0eESZdl",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b27380db5f1340bc1170a22d8e2c",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e0280db5f1340bc1170a22d8e2c",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d0000485180db5f1340bc1170a22d8e2c",
              width: 64,
            },
          ],
          name: "1 Am. Study Session",
          release_date: "2019-12-08",
          release_date_precision: "day",
          total_tracks: 27,
          type: "album",
          uri: "spotify:album:6XyaVDkZeCWf14x0eESZdl",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5iMUho98faEp2w6j5p44PH",
            },
            href: "https://api.spotify.com/v1/artists/5iMUho98faEp2w6j5p44PH",
            id: "5iMUho98faEp2w6j5p44PH",
            name: "j'san",
            type: "artist",
            uri: "spotify:artist:5iMUho98faEp2w6j5p44PH",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/31jYTsfmnHqcK7ahdqlqmo",
            },
            href: "https://api.spotify.com/v1/artists/31jYTsfmnHqcK7ahdqlqmo",
            id: "31jYTsfmnHqcK7ahdqlqmo",
            name: "Epektase",
            type: "artist",
            uri: "spotify:artist:31jYTsfmnHqcK7ahdqlqmo",
          },
        ],
        disc_number: 1,
        duration_ms: 165000,
        explicit: false,
        external_ids: {
          isrc: "TCAEN1970748",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/55qrhJbNJBwtCRagmXK9lI",
        },
        href: "https://api.spotify.com/v1/tracks/55qrhJbNJBwtCRagmXK9lI",
        id: "55qrhJbNJBwtCRagmXK9lI",
        is_local: false,
        is_playable: true,
        name: "Snow & Sand",
        popularity: 62,
        preview_url:
          "https://p.scdn.co/mp3-preview/27f47e78bd8b4b0beca2ec805dc0ba96d2722c8b?cid=b154195200be41338cce8394cd67c97a",
        track_number: 8,
        type: "track",
        uri: "spotify:track:55qrhJbNJBwtCRagmXK9lI",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0SfsnGyD8FpIN4U4WCkBZ5",
              },
              href: "https://api.spotify.com/v1/artists/0SfsnGyD8FpIN4U4WCkBZ5",
              id: "0SfsnGyD8FpIN4U4WCkBZ5",
              name: "Armin van Buuren",
              type: "artist",
              uri: "spotify:artist:0SfsnGyD8FpIN4U4WCkBZ5",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/25mFVpuABa9GkGcj9eOPce",
              },
              href: "https://api.spotify.com/v1/artists/25mFVpuABa9GkGcj9eOPce",
              id: "25mFVpuABa9GkGcj9eOPce",
              name: "Armin van Buuren ASOT Radio",
              type: "artist",
              uri: "spotify:artist:25mFVpuABa9GkGcj9eOPce",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/2ohlvFf9PBsDELdRstPtlP",
              },
              href: "https://api.spotify.com/v1/artists/2ohlvFf9PBsDELdRstPtlP",
              id: "2ohlvFf9PBsDELdRstPtlP",
              name: "Ferry Corsten",
              type: "artist",
              uri: "spotify:artist:2ohlvFf9PBsDELdRstPtlP",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/3VOuNkFHLiVsXamQLZtAhz",
          },
          href: "https://api.spotify.com/v1/albums/3VOuNkFHLiVsXamQLZtAhz",
          id: "3VOuNkFHLiVsXamQLZtAhz",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b273b402f741303aaf34b27ded9c",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e02b402f741303aaf34b27ded9c",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d00004851b402f741303aaf34b27ded9c",
              width: 64,
            },
          ],
          name:
            "ASOT 970 - A State Of Trance Episode 970 (Including A State Of Trance Showcase Mix 006: Richard Durand)",
          release_date: "2020-06-25",
          release_date_precision: "day",
          total_tracks: 57,
          type: "album",
          uri: "spotify:album:3VOuNkFHLiVsXamQLZtAhz",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/3dAnWbqTzCOK1jdiK2v3gI",
            },
            href: "https://api.spotify.com/v1/artists/3dAnWbqTzCOK1jdiK2v3gI",
            id: "3dAnWbqTzCOK1jdiK2v3gI",
            name: "Roger Shah",
            type: "artist",
            uri: "spotify:artist:3dAnWbqTzCOK1jdiK2v3gI",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/3rQipwBNDjlb5v8wpG7Nhl",
            },
            href: "https://api.spotify.com/v1/artists/3rQipwBNDjlb5v8wpG7Nhl",
            id: "3rQipwBNDjlb5v8wpG7Nhl",
            name: "Symphony In Deep Minor",
            type: "artist",
            uri: "spotify:artist:3rQipwBNDjlb5v8wpG7Nhl",
          },
        ],
        disc_number: 1,
        duration_ms: 252820,
        explicit: false,
        external_ids: {
          isrc: "NLF712007361",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/6j3Q6GJQk2n1M3YuWDC11O",
        },
        href: "https://api.spotify.com/v1/tracks/6j3Q6GJQk2n1M3YuWDC11O",
        id: "6j3Q6GJQk2n1M3YuWDC11O",
        is_local: false,
        is_playable: true,
        name: "Snowflakes On A New Year's Day (ASOT 970)",
        popularity: 38,
        preview_url:
          "https://p.scdn.co/mp3-preview/c8e1d36872a74a1c430d6043bc08670064562e32?cid=b154195200be41338cce8394cd67c97a",
        track_number: 33,
        type: "track",
        uri: "spotify:track:6j3Q6GJQk2n1M3YuWDC11O",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/2sd5k8N8cAOm6Q8OCcePw4",
              },
              href: "https://api.spotify.com/v1/artists/2sd5k8N8cAOm6Q8OCcePw4",
              id: "2sd5k8N8cAOm6Q8OCcePw4",
              name: "Rin音",
              type: "artist",
              uri: "spotify:artist:2sd5k8N8cAOm6Q8OCcePw4",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/3jtrdWKt4Uo5iUU6VCc0do",
          },
          href: "https://api.spotify.com/v1/albums/3jtrdWKt4Uo5iUU6VCc0do",
          id: "3jtrdWKt4Uo5iUU6VCc0do",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b27396155eb1a14e34e0c5731a57",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e0296155eb1a14e34e0c5731a57",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d0000485196155eb1a14e34e0c5731a57",
              width: 64,
            },
          ],
          name: "swipe sheep",
          release_date: "2020-06-10",
          release_date_precision: "day",
          total_tracks: 13,
          type: "album",
          uri: "spotify:album:3jtrdWKt4Uo5iUU6VCc0do",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/2sd5k8N8cAOm6Q8OCcePw4",
            },
            href: "https://api.spotify.com/v1/artists/2sd5k8N8cAOm6Q8OCcePw4",
            id: "2sd5k8N8cAOm6Q8OCcePw4",
            name: "Rin音",
            type: "artist",
            uri: "spotify:artist:2sd5k8N8cAOm6Q8OCcePw4",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/31iJDnqpS43YIG18nTFx14",
            },
            href: "https://api.spotify.com/v1/artists/31iJDnqpS43YIG18nTFx14",
            id: "31iJDnqpS43YIG18nTFx14",
            name: "RhymeTube",
            type: "artist",
            uri: "spotify:artist:31iJDnqpS43YIG18nTFx14",
          },
        ],
        disc_number: 1,
        duration_ms: 185378,
        explicit: false,
        external_ids: {
          isrc: "JPS801854339",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/6uUtmCz8XXep7n1QmC1jJG",
        },
        href: "https://api.spotify.com/v1/tracks/6uUtmCz8XXep7n1QmC1jJG",
        id: "6uUtmCz8XXep7n1QmC1jJG",
        is_local: false,
        is_playable: true,
        name: "snow jam",
        popularity: 64,
        preview_url:
          "https://p.scdn.co/mp3-preview/b11857c07b84382dc716d071f38b87ad6151c8e2?cid=b154195200be41338cce8394cd67c97a",
        track_number: 1,
        type: "track",
        uri: "spotify:track:6uUtmCz8XXep7n1QmC1jJG",
      },
      {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/3uGFTJ7JMllvhgGpumieHF",
              },
              href: "https://api.spotify.com/v1/artists/3uGFTJ7JMllvhgGpumieHF",
              id: "3uGFTJ7JMllvhgGpumieHF",
              name: "Ailee",
              type: "artist",
              uri: "spotify:artist:3uGFTJ7JMllvhgGpumieHF",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/20SAUNThmiFFm2txSQOKH0",
          },
          href: "https://api.spotify.com/v1/albums/20SAUNThmiFFm2txSQOKH0",
          id: "20SAUNThmiFFm2txSQOKH0",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b27391c9a6f853f440e7d7821792",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e0291c9a6f853f440e7d7821792",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d0000485191c9a6f853f440e7d7821792",
              width: 64,
            },
          ],
          name: "Guardian (Original Television Soundtrack), Pt. 9",
          release_date: "2017-01-07",
          release_date_precision: "day",
          total_tracks: 2,
          type: "album",
          uri: "spotify:album:20SAUNThmiFFm2txSQOKH0",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/3uGFTJ7JMllvhgGpumieHF",
            },
            href: "https://api.spotify.com/v1/artists/3uGFTJ7JMllvhgGpumieHF",
            id: "3uGFTJ7JMllvhgGpumieHF",
            name: "Ailee",
            type: "artist",
            uri: "spotify:artist:3uGFTJ7JMllvhgGpumieHF",
          },
        ],
        disc_number: 1,
        duration_ms: 229678,
        explicit: false,
        external_ids: {
          isrc: "KRA491600937",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/55pN3kkk9Zor8mlZhyxHwp",
        },
        href: "https://api.spotify.com/v1/tracks/55pN3kkk9Zor8mlZhyxHwp",
        id: "55pN3kkk9Zor8mlZhyxHwp",
        is_local: false,
        is_playable: true,
        name: "I Will Go To You Like the First Snow",
        popularity: 65,
        preview_url:
          "https://p.scdn.co/mp3-preview/a65354a83720f0c027b29507ee73ad6c8886cb8c?cid=b154195200be41338cce8394cd67c97a",
        track_number: 1,
        type: "track",
        uri: "spotify:track:55pN3kkk9Zor8mlZhyxHwp",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX",
              },
              href: "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
              id: "3Nrfpe0tUJi4K4DXYWgMUX",
              name: "BTS",
              type: "artist",
              uri: "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/66J1OXSaS3hBZASOV3el8t",
          },
          href: "https://api.spotify.com/v1/albums/66J1OXSaS3hBZASOV3el8t",
          id: "66J1OXSaS3hBZASOV3el8t",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b2737df155730d4d753560ec28a5",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e027df155730d4d753560ec28a5",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d000048517df155730d4d753560ec28a5",
              width: 64,
            },
          ],
          name: "FACE YOURSELF",
          release_date: "2018-04-04",
          release_date_precision: "day",
          total_tracks: 12,
          type: "album",
          uri: "spotify:album:66J1OXSaS3hBZASOV3el8t",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX",
            },
            href: "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
            id: "3Nrfpe0tUJi4K4DXYWgMUX",
            name: "BTS",
            type: "artist",
            uri: "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX",
          },
        ],
        disc_number: 1,
        duration_ms: 323360,
        explicit: false,
        external_ids: {
          isrc: "JPPO01706371",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/6NbfFVZ01Ttvvqmcok8DxL",
        },
        href: "https://api.spotify.com/v1/tracks/6NbfFVZ01Ttvvqmcok8DxL",
        id: "6NbfFVZ01Ttvvqmcok8DxL",
        is_local: false,
        is_playable: true,
        name: "Crystal Snow",
        popularity: 64,
        preview_url: null,
        track_number: 9,
        type: "track",
        uri: "spotify:track:6NbfFVZ01Ttvvqmcok8DxL",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/3rIZMv9rysU7JkLzEaC5Jp",
              },
              href: "https://api.spotify.com/v1/artists/3rIZMv9rysU7JkLzEaC5Jp",
              id: "3rIZMv9rysU7JkLzEaC5Jp",
              name: "Snow Patrol",
              type: "artist",
              uri: "spotify:artist:3rIZMv9rysU7JkLzEaC5Jp",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/6fb7z9rBdrjzpBTg1R1Bwp",
          },
          href: "https://api.spotify.com/v1/albums/6fb7z9rBdrjzpBTg1R1Bwp",
          id: "6fb7z9rBdrjzpBTg1R1Bwp",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b27315a6fad25bd729dc98799b90",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e0215a6fad25bd729dc98799b90",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d0000485115a6fad25bd729dc98799b90",
              width: 64,
            },
          ],
          name: "Eyes Open",
          release_date: "2006-01-01",
          release_date_precision: "day",
          total_tracks: 11,
          type: "album",
          uri: "spotify:album:6fb7z9rBdrjzpBTg1R1Bwp",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/3rIZMv9rysU7JkLzEaC5Jp",
            },
            href: "https://api.spotify.com/v1/artists/3rIZMv9rysU7JkLzEaC5Jp",
            id: "3rIZMv9rysU7JkLzEaC5Jp",
            name: "Snow Patrol",
            type: "artist",
            uri: "spotify:artist:3rIZMv9rysU7JkLzEaC5Jp",
          },
        ],
        disc_number: 1,
        duration_ms: 267933,
        explicit: false,
        external_ids: {
          isrc: "GBUM70600345",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/11bD1JtSjlIgKgZG2134DZ",
        },
        href: "https://api.spotify.com/v1/tracks/11bD1JtSjlIgKgZG2134DZ",
        id: "11bD1JtSjlIgKgZG2134DZ",
        is_local: false,
        is_playable: true,
        name: "Chasing Cars",
        popularity: 78,
        preview_url: null,
        track_number: 3,
        type: "track",
        uri: "spotify:track:11bD1JtSjlIgKgZG2134DZ",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1z7b1Pr1rSlvWRzsW3HOrS",
              },
              href: "https://api.spotify.com/v1/artists/1z7b1Pr1rSlvWRzsW3HOrS",
              id: "1z7b1Pr1rSlvWRzsW3HOrS",
              name: "Russ",
              type: "artist",
              uri: "spotify:artist:1z7b1Pr1rSlvWRzsW3HOrS",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/2ZzatxW5gv1XZ0uai8TKxk",
          },
          href: "https://api.spotify.com/v1/albums/2ZzatxW5gv1XZ0uai8TKxk",
          id: "2ZzatxW5gv1XZ0uai8TKxk",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b273675fc8cf82a0c1024862a9dc",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e02675fc8cf82a0c1024862a9dc",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d00004851675fc8cf82a0c1024862a9dc",
              width: 64,
            },
          ],
          name: "SHAKE THE SNOW GLOBE",
          release_date: "2020-01-31",
          release_date_precision: "day",
          total_tracks: 14,
          type: "album",
          uri: "spotify:album:2ZzatxW5gv1XZ0uai8TKxk",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1z7b1Pr1rSlvWRzsW3HOrS",
            },
            href: "https://api.spotify.com/v1/artists/1z7b1Pr1rSlvWRzsW3HOrS",
            id: "1z7b1Pr1rSlvWRzsW3HOrS",
            name: "Russ",
            type: "artist",
            uri: "spotify:artist:1z7b1Pr1rSlvWRzsW3HOrS",
          },
        ],
        disc_number: 2,
        duration_ms: 144506,
        explicit: true,
        external_ids: {
          isrc: "USSM11902648",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/0IUgswE9wJaY4QIQZEDTKe",
        },
        href: "https://api.spotify.com/v1/tracks/0IUgswE9wJaY4QIQZEDTKe",
        id: "0IUgswE9wJaY4QIQZEDTKe",
        is_local: false,
        is_playable: true,
        name: "CIVIL WAR - Bonus",
        popularity: 76,
        preview_url:
          "https://p.scdn.co/mp3-preview/62a76143bfe036def03c62d04a9e36dc91ab8fe5?cid=b154195200be41338cce8394cd67c97a",
        track_number: 1,
        type: "track",
        uri: "spotify:track:0IUgswE9wJaY4QIQZEDTKe",
      },
      {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/4wosq6YlkjU4UdKRWpsmcy",
              },
              href: "https://api.spotify.com/v1/artists/4wosq6YlkjU4UdKRWpsmcy",
              id: "4wosq6YlkjU4UdKRWpsmcy",
              name: "Jung Joon Il",
              type: "artist",
              uri: "spotify:artist:4wosq6YlkjU4UdKRWpsmcy",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/0emSYWuCujswuwO3Ih3E0i",
          },
          href: "https://api.spotify.com/v1/albums/0emSYWuCujswuwO3Ih3E0i",
          id: "0emSYWuCujswuwO3Ih3E0i",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b2739fea1236eea623ec115bf333",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e029fea1236eea623ec115bf333",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d000048519fea1236eea623ec115bf333",
              width: 64,
            },
          ],
          name: "Guardian (Original Television Soundtrack), Pt. 8",
          release_date: "2017-01-01",
          release_date_precision: "day",
          total_tracks: 2,
          type: "album",
          uri: "spotify:album:0emSYWuCujswuwO3Ih3E0i",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/4wosq6YlkjU4UdKRWpsmcy",
            },
            href: "https://api.spotify.com/v1/artists/4wosq6YlkjU4UdKRWpsmcy",
            id: "4wosq6YlkjU4UdKRWpsmcy",
            name: "Jung Joon Il",
            type: "artist",
            uri: "spotify:artist:4wosq6YlkjU4UdKRWpsmcy",
          },
        ],
        disc_number: 1,
        duration_ms: 296134,
        explicit: false,
        external_ids: {
          isrc: "KRA491600918",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/0SgzxJEowCV5EE9AxgQ8lg",
        },
        href: "https://api.spotify.com/v1/tracks/0SgzxJEowCV5EE9AxgQ8lg",
        id: "0SgzxJEowCV5EE9AxgQ8lg",
        is_local: false,
        is_playable: true,
        name: "The First Snow",
        popularity: 52,
        preview_url:
          "https://p.scdn.co/mp3-preview/94cdb8611ac919a86a9f3559ea8f921a71f12a7e?cid=b154195200be41338cce8394cd67c97a",
        track_number: 1,
        type: "track",
        uri: "spotify:track:0SgzxJEowCV5EE9AxgQ8lg",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
              },
              href: "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              id: "0LyfQWJT6nXafLPZqxe9Of",
              name: "Various Artists",
              type: "artist",
              uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/2BiQ4B6Q5SvDGi9SjCRh8Y",
          },
          href: "https://api.spotify.com/v1/albums/2BiQ4B6Q5SvDGi9SjCRh8Y",
          id: "2BiQ4B6Q5SvDGi9SjCRh8Y",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b2736d3abc895571a2d2fa4acc06",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e026d3abc895571a2d2fa4acc06",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d000048516d3abc895571a2d2fa4acc06",
              width: 64,
            },
          ],
          name: "Cycling Power",
          release_date: "2020-07-03",
          release_date_precision: "day",
          total_tracks: 21,
          type: "album",
          uri: "spotify:album:2BiQ4B6Q5SvDGi9SjCRh8Y",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/4D75GcNG95ebPtNvoNVXhz",
            },
            href: "https://api.spotify.com/v1/artists/4D75GcNG95ebPtNvoNVXhz",
            id: "4D75GcNG95ebPtNvoNVXhz",
            name: "Afrojack",
            type: "artist",
            uri: "spotify:artist:4D75GcNG95ebPtNvoNVXhz",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/7hJcb9fa4alzcOq3EaNPoG",
            },
            href: "https://api.spotify.com/v1/artists/7hJcb9fa4alzcOq3EaNPoG",
            id: "7hJcb9fa4alzcOq3EaNPoG",
            name: "Snoop Dogg",
            type: "artist",
            uri: "spotify:artist:7hJcb9fa4alzcOq3EaNPoG",
          },
        ],
        disc_number: 1,
        duration_ms: 227893,
        explicit: true,
        external_ids: {
          isrc: "CYA221400023",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/67Y6v3TDgDpurCGdhXnrQV",
        },
        href: "https://api.spotify.com/v1/tracks/67Y6v3TDgDpurCGdhXnrQV",
        id: "67Y6v3TDgDpurCGdhXnrQV",
        is_local: false,
        is_playable: true,
        name: "Dynamite",
        popularity: 2,
        preview_url: null,
        track_number: 4,
        type: "track",
        uri: "spotify:track:67Y6v3TDgDpurCGdhXnrQV",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0qlWcS66ohOIi0M8JZwPft",
              },
              href: "https://api.spotify.com/v1/artists/0qlWcS66ohOIi0M8JZwPft",
              id: "0qlWcS66ohOIi0M8JZwPft",
              name: "GFRIEND",
              type: "artist",
              uri: "spotify:artist:0qlWcS66ohOIi0M8JZwPft",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/0COnSwFb5qOhABUyWNw6Kp",
          },
          href: "https://api.spotify.com/v1/albums/0COnSwFb5qOhABUyWNw6Kp",
          id: "0COnSwFb5qOhABUyWNw6Kp",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b273fc5b3a4f6c07140daa455a61",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e02fc5b3a4f6c07140daa455a61",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d00004851fc5b3a4f6c07140daa455a61",
              width: 64,
            },
          ],
          name: "SNOWFLAKE",
          release_date: "2016-01-25",
          release_date_precision: "day",
          total_tracks: 7,
          type: "album",
          uri: "spotify:album:0COnSwFb5qOhABUyWNw6Kp",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/0qlWcS66ohOIi0M8JZwPft",
            },
            href: "https://api.spotify.com/v1/artists/0qlWcS66ohOIi0M8JZwPft",
            id: "0qlWcS66ohOIi0M8JZwPft",
            name: "GFRIEND",
            type: "artist",
            uri: "spotify:artist:0qlWcS66ohOIi0M8JZwPft",
          },
        ],
        disc_number: 1,
        duration_ms: 209104,
        explicit: false,
        external_ids: {
          isrc: "KRA381600122",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/3CVeGXpoPKJQ9JuhPp3mpL",
        },
        href: "https://api.spotify.com/v1/tracks/3CVeGXpoPKJQ9JuhPp3mpL",
        id: "3CVeGXpoPKJQ9JuhPp3mpL",
        is_local: false,
        is_playable: true,
        name: "Rough",
        popularity: 58,
        preview_url:
          "https://p.scdn.co/mp3-preview/c6a5e921f072619698ecbdad09a1326226cb03fa?cid=b154195200be41338cce8394cd67c97a",
        track_number: 2,
        type: "track",
        uri: "spotify:track:3CVeGXpoPKJQ9JuhPp3mpL",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
              },
              href: "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              id: "0LyfQWJT6nXafLPZqxe9Of",
              name: "Various Artists",
              type: "artist",
              uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/3ZCAtK6Qn2WSSaMjANmeRo",
          },
          href: "https://api.spotify.com/v1/albums/3ZCAtK6Qn2WSSaMjANmeRo",
          id: "3ZCAtK6Qn2WSSaMjANmeRo",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b2730e8b29bc8e77494d4cddf5b3",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e020e8b29bc8e77494d4cddf5b3",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d000048510e8b29bc8e77494d4cddf5b3",
              width: 64,
            },
          ],
          name: "Xmas in July",
          release_date: "2020-07-01",
          release_date_precision: "day",
          total_tracks: 41,
          type: "album",
          uri: "spotify:album:3ZCAtK6Qn2WSSaMjANmeRo",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/49e4v89VmlDcFCMyDv9wQ9",
            },
            href: "https://api.spotify.com/v1/artists/49e4v89VmlDcFCMyDv9wQ9",
            id: "49e4v89VmlDcFCMyDv9wQ9",
            name: "Dean Martin",
            type: "artist",
            uri: "spotify:artist:49e4v89VmlDcFCMyDv9wQ9",
          },
        ],
        disc_number: 1,
        duration_ms: 117466,
        explicit: false,
        external_ids: {
          isrc: "USCA20200910",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/60litHyqtCOe62Sh0Be3sq",
        },
        href: "https://api.spotify.com/v1/tracks/60litHyqtCOe62Sh0Be3sq",
        id: "60litHyqtCOe62Sh0Be3sq",
        is_local: false,
        is_playable: true,
        name: "Let It Snow! Let It Snow! Let It Snow! - Remastered 2002",
        popularity: 1,
        preview_url: null,
        track_number: 27,
        type: "track",
        uri: "spotify:track:60litHyqtCOe62Sh0Be3sq",
      },
      {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7hJcb9fa4alzcOq3EaNPoG",
              },
              href: "https://api.spotify.com/v1/artists/7hJcb9fa4alzcOq3EaNPoG",
              id: "7hJcb9fa4alzcOq3EaNPoG",
              name: "Snoop Dogg",
              type: "artist",
              uri: "spotify:artist:7hJcb9fa4alzcOq3EaNPoG",
            },
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/137W8MRPWKqSmrBGDBFSop",
              },
              href: "https://api.spotify.com/v1/artists/137W8MRPWKqSmrBGDBFSop",
              id: "137W8MRPWKqSmrBGDBFSop",
              name: "Wiz Khalifa",
              type: "artist",
              uri: "spotify:artist:137W8MRPWKqSmrBGDBFSop",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/11Bkx3E99vf0IlYPND61LJ",
          },
          href: "https://api.spotify.com/v1/albums/11Bkx3E99vf0IlYPND61LJ",
          id: "11Bkx3E99vf0IlYPND61LJ",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b2738596df2f2646ab9aba464c30",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e028596df2f2646ab9aba464c30",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d000048518596df2f2646ab9aba464c30",
              width: 64,
            },
          ],
          name: "Young, Wild & Free (feat. Bruno Mars)",
          release_date: "2011-10-11",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:11Bkx3E99vf0IlYPND61LJ",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/7hJcb9fa4alzcOq3EaNPoG",
            },
            href: "https://api.spotify.com/v1/artists/7hJcb9fa4alzcOq3EaNPoG",
            id: "7hJcb9fa4alzcOq3EaNPoG",
            name: "Snoop Dogg",
            type: "artist",
            uri: "spotify:artist:7hJcb9fa4alzcOq3EaNPoG",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/137W8MRPWKqSmrBGDBFSop",
            },
            href: "https://api.spotify.com/v1/artists/137W8MRPWKqSmrBGDBFSop",
            id: "137W8MRPWKqSmrBGDBFSop",
            name: "Wiz Khalifa",
            type: "artist",
            uri: "spotify:artist:137W8MRPWKqSmrBGDBFSop",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/0du5cEVh5yTK9QJze8zA0C",
            },
            href: "https://api.spotify.com/v1/artists/0du5cEVh5yTK9QJze8zA0C",
            id: "0du5cEVh5yTK9QJze8zA0C",
            name: "Bruno Mars",
            type: "artist",
            uri: "spotify:artist:0du5cEVh5yTK9QJze8zA0C",
          },
        ],
        disc_number: 1,
        duration_ms: 207333,
        explicit: true,
        external_ids: {
          isrc: "USAT21102232",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/5HQVUIKwCEXpe7JIHyY734",
        },
        href: "https://api.spotify.com/v1/tracks/5HQVUIKwCEXpe7JIHyY734",
        id: "5HQVUIKwCEXpe7JIHyY734",
        is_local: false,
        is_playable: true,
        name: "Young, Wild & Free (feat. Bruno Mars)",
        popularity: 78,
        preview_url:
          "https://p.scdn.co/mp3-preview/07aa6b278601d4f50c382fd750000f0f88020f7f?cid=b154195200be41338cce8394cd67c97a",
        track_number: 1,
        type: "track",
        uri: "spotify:track:5HQVUIKwCEXpe7JIHyY734",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1z7b1Pr1rSlvWRzsW3HOrS",
              },
              href: "https://api.spotify.com/v1/artists/1z7b1Pr1rSlvWRzsW3HOrS",
              id: "1z7b1Pr1rSlvWRzsW3HOrS",
              name: "Russ",
              type: "artist",
              uri: "spotify:artist:1z7b1Pr1rSlvWRzsW3HOrS",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/5Vmz3pIxG7Dsx7fzHgtyJB",
          },
          href: "https://api.spotify.com/v1/albums/5Vmz3pIxG7Dsx7fzHgtyJB",
          id: "5Vmz3pIxG7Dsx7fzHgtyJB",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b273039f0bcf97bf66ca8e1f736d",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e02039f0bcf97bf66ca8e1f736d",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d00004851039f0bcf97bf66ca8e1f736d",
              width: 64,
            },
          ],
          name: "SHAKE THE SNOW GLOBE (DELUXE)",
          release_date: "2020-05-19",
          release_date_precision: "day",
          total_tracks: 21,
          type: "album",
          uri: "spotify:album:5Vmz3pIxG7Dsx7fzHgtyJB",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1z7b1Pr1rSlvWRzsW3HOrS",
            },
            href: "https://api.spotify.com/v1/artists/1z7b1Pr1rSlvWRzsW3HOrS",
            id: "1z7b1Pr1rSlvWRzsW3HOrS",
            name: "Russ",
            type: "artist",
            uri: "spotify:artist:1z7b1Pr1rSlvWRzsW3HOrS",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/7c0XG5cIJTrrAgEC3ULPiq",
            },
            href: "https://api.spotify.com/v1/artists/7c0XG5cIJTrrAgEC3ULPiq",
            id: "7c0XG5cIJTrrAgEC3ULPiq",
            name: "Ty Dolla $ign",
            type: "artist",
            uri: "spotify:artist:7c0XG5cIJTrrAgEC3ULPiq",
          },
        ],
        disc_number: 1,
        duration_ms: 200547,
        explicit: true,
        external_ids: {
          isrc: "USSM12002536",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/6xRNqXP3baPR9buXr8vreM",
        },
        href: "https://api.spotify.com/v1/tracks/6xRNqXP3baPR9buXr8vreM",
        id: "6xRNqXP3baPR9buXr8vreM",
        is_local: false,
        is_playable: true,
        name: "3AM",
        popularity: 76,
        preview_url:
          "https://p.scdn.co/mp3-preview/dbca1f60919d80d2e076d300aeb693b13bbc9a88?cid=b154195200be41338cce8394cd67c97a",
        track_number: 1,
        type: "track",
        uri: "spotify:track:6xRNqXP3baPR9buXr8vreM",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
              },
              href: "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              id: "0LyfQWJT6nXafLPZqxe9Of",
              name: "Various Artists",
              type: "artist",
              uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/3mSGO3CHiF9QxyDFL48Q0m",
          },
          href: "https://api.spotify.com/v1/albums/3mSGO3CHiF9QxyDFL48Q0m",
          id: "3mSGO3CHiF9QxyDFL48Q0m",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b273b5894b0af28517e8141b3fa7",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e02b5894b0af28517e8141b3fa7",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d00004851b5894b0af28517e8141b3fa7",
              width: 64,
            },
          ],
          name: "Perreo y Licor",
          release_date: "2020-07-03",
          release_date_precision: "day",
          total_tracks: 25,
          type: "album",
          uri: "spotify:album:3mSGO3CHiF9QxyDFL48Q0m",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1ackd5XprZEkH3McKbQD51",
            },
            href: "https://api.spotify.com/v1/artists/1ackd5XprZEkH3McKbQD51",
            id: "1ackd5XprZEkH3McKbQD51",
            name: "Juan Magán",
            type: "artist",
            uri: "spotify:artist:1ackd5XprZEkH3McKbQD51",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5LeiVcEnsZcwc133TUhJNW",
            },
            href: "https://api.spotify.com/v1/artists/5LeiVcEnsZcwc133TUhJNW",
            id: "5LeiVcEnsZcwc133TUhJNW",
            name: "Belinda",
            type: "artist",
            uri: "spotify:artist:5LeiVcEnsZcwc133TUhJNW",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/0tmwSHipWxN12fsoLcFU3B",
            },
            href: "https://api.spotify.com/v1/artists/0tmwSHipWxN12fsoLcFU3B",
            id: "0tmwSHipWxN12fsoLcFU3B",
            name: "Manuel Turizo",
            type: "artist",
            uri: "spotify:artist:0tmwSHipWxN12fsoLcFU3B",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5oOyEfGd8NxAKA41zGQhoj",
            },
            href: "https://api.spotify.com/v1/artists/5oOyEfGd8NxAKA41zGQhoj",
            id: "5oOyEfGd8NxAKA41zGQhoj",
            name: "Snova",
            type: "artist",
            uri: "spotify:artist:5oOyEfGd8NxAKA41zGQhoj",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1o9x7ez0NvhDb7gBqrYnUj",
            },
            href: "https://api.spotify.com/v1/artists/1o9x7ez0NvhDb7gBqrYnUj",
            id: "1o9x7ez0NvhDb7gBqrYnUj",
            name: "B-Case",
            type: "artist",
            uri: "spotify:artist:1o9x7ez0NvhDb7gBqrYnUj",
          },
        ],
        disc_number: 1,
        duration_ms: 233146,
        explicit: false,
        external_ids: {
          isrc: "ES5701700901",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/4oGKKT6yNoJcjIVS9YD0fC",
        },
        href: "https://api.spotify.com/v1/tracks/4oGKKT6yNoJcjIVS9YD0fC",
        id: "4oGKKT6yNoJcjIVS9YD0fC",
        is_local: false,
        is_playable: true,
        name: "Déjate Llevar",
        popularity: 0,
        preview_url: null,
        track_number: 23,
        type: "track",
        uri: "spotify:track:4oGKKT6yNoJcjIVS9YD0fC",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
              },
              href: "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              id: "0LyfQWJT6nXafLPZqxe9Of",
              name: "Various Artists",
              type: "artist",
              uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/5FLoJNTXOQd04utFXmmuN4",
          },
          href: "https://api.spotify.com/v1/albums/5FLoJNTXOQd04utFXmmuN4",
          id: "5FLoJNTXOQd04utFXmmuN4",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b27338ef77d500b0a43cca2b0548",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e0238ef77d500b0a43cca2b0548",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d0000485138ef77d500b0a43cca2b0548",
              width: 64,
            },
          ],
          name: "Simplemente Latineo",
          release_date: "2020-07-03",
          release_date_precision: "day",
          total_tracks: 47,
          type: "album",
          uri: "spotify:album:5FLoJNTXOQd04utFXmmuN4",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1ackd5XprZEkH3McKbQD51",
            },
            href: "https://api.spotify.com/v1/artists/1ackd5XprZEkH3McKbQD51",
            id: "1ackd5XprZEkH3McKbQD51",
            name: "Juan Magán",
            type: "artist",
            uri: "spotify:artist:1ackd5XprZEkH3McKbQD51",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5LeiVcEnsZcwc133TUhJNW",
            },
            href: "https://api.spotify.com/v1/artists/5LeiVcEnsZcwc133TUhJNW",
            id: "5LeiVcEnsZcwc133TUhJNW",
            name: "Belinda",
            type: "artist",
            uri: "spotify:artist:5LeiVcEnsZcwc133TUhJNW",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/0tmwSHipWxN12fsoLcFU3B",
            },
            href: "https://api.spotify.com/v1/artists/0tmwSHipWxN12fsoLcFU3B",
            id: "0tmwSHipWxN12fsoLcFU3B",
            name: "Manuel Turizo",
            type: "artist",
            uri: "spotify:artist:0tmwSHipWxN12fsoLcFU3B",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5oOyEfGd8NxAKA41zGQhoj",
            },
            href: "https://api.spotify.com/v1/artists/5oOyEfGd8NxAKA41zGQhoj",
            id: "5oOyEfGd8NxAKA41zGQhoj",
            name: "Snova",
            type: "artist",
            uri: "spotify:artist:5oOyEfGd8NxAKA41zGQhoj",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1o9x7ez0NvhDb7gBqrYnUj",
            },
            href: "https://api.spotify.com/v1/artists/1o9x7ez0NvhDb7gBqrYnUj",
            id: "1o9x7ez0NvhDb7gBqrYnUj",
            name: "B-Case",
            type: "artist",
            uri: "spotify:artist:1o9x7ez0NvhDb7gBqrYnUj",
          },
        ],
        disc_number: 1,
        duration_ms: 233146,
        explicit: false,
        external_ids: {
          isrc: "ES5701700901",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/1TcETxUyrZjgZEFm2zJCZZ",
        },
        href: "https://api.spotify.com/v1/tracks/1TcETxUyrZjgZEFm2zJCZZ",
        id: "1TcETxUyrZjgZEFm2zJCZZ",
        is_local: false,
        is_playable: true,
        name: "Déjate Llevar",
        popularity: 0,
        preview_url: null,
        track_number: 6,
        type: "track",
        uri: "spotify:track:1TcETxUyrZjgZEFm2zJCZZ",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
              },
              href: "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              id: "0LyfQWJT6nXafLPZqxe9Of",
              name: "Various Artists",
              type: "artist",
              uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/21AgmXWpjTN0IxrlfQcPBg",
          },
          href: "https://api.spotify.com/v1/albums/21AgmXWpjTN0IxrlfQcPBg",
          id: "21AgmXWpjTN0IxrlfQcPBg",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b273e6e41149d213d1288bd03391",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e02e6e41149d213d1288bd03391",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d00004851e6e41149d213d1288bd03391",
              width: 64,
            },
          ],
          name: "Vibras Latinas",
          release_date: "2020-07-03",
          release_date_precision: "day",
          total_tracks: 25,
          type: "album",
          uri: "spotify:album:21AgmXWpjTN0IxrlfQcPBg",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1ackd5XprZEkH3McKbQD51",
            },
            href: "https://api.spotify.com/v1/artists/1ackd5XprZEkH3McKbQD51",
            id: "1ackd5XprZEkH3McKbQD51",
            name: "Juan Magán",
            type: "artist",
            uri: "spotify:artist:1ackd5XprZEkH3McKbQD51",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5LeiVcEnsZcwc133TUhJNW",
            },
            href: "https://api.spotify.com/v1/artists/5LeiVcEnsZcwc133TUhJNW",
            id: "5LeiVcEnsZcwc133TUhJNW",
            name: "Belinda",
            type: "artist",
            uri: "spotify:artist:5LeiVcEnsZcwc133TUhJNW",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/0tmwSHipWxN12fsoLcFU3B",
            },
            href: "https://api.spotify.com/v1/artists/0tmwSHipWxN12fsoLcFU3B",
            id: "0tmwSHipWxN12fsoLcFU3B",
            name: "Manuel Turizo",
            type: "artist",
            uri: "spotify:artist:0tmwSHipWxN12fsoLcFU3B",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5oOyEfGd8NxAKA41zGQhoj",
            },
            href: "https://api.spotify.com/v1/artists/5oOyEfGd8NxAKA41zGQhoj",
            id: "5oOyEfGd8NxAKA41zGQhoj",
            name: "Snova",
            type: "artist",
            uri: "spotify:artist:5oOyEfGd8NxAKA41zGQhoj",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1o9x7ez0NvhDb7gBqrYnUj",
            },
            href: "https://api.spotify.com/v1/artists/1o9x7ez0NvhDb7gBqrYnUj",
            id: "1o9x7ez0NvhDb7gBqrYnUj",
            name: "B-Case",
            type: "artist",
            uri: "spotify:artist:1o9x7ez0NvhDb7gBqrYnUj",
          },
        ],
        disc_number: 1,
        duration_ms: 233146,
        explicit: false,
        external_ids: {
          isrc: "ES5701700901",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/51Uxrqqp1eduGKF9COhhwa",
        },
        href: "https://api.spotify.com/v1/tracks/51Uxrqqp1eduGKF9COhhwa",
        id: "51Uxrqqp1eduGKF9COhhwa",
        is_local: false,
        is_playable: true,
        name: "Déjate Llevar",
        popularity: 0,
        preview_url: null,
        track_number: 6,
        type: "track",
        uri: "spotify:track:51Uxrqqp1eduGKF9COhhwa",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
              },
              href: "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              id: "0LyfQWJT6nXafLPZqxe9Of",
              name: "Various Artists",
              type: "artist",
              uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/2AE7DBDPK01WNJYkq83kJP",
          },
          href: "https://api.spotify.com/v1/albums/2AE7DBDPK01WNJYkq83kJP",
          id: "2AE7DBDPK01WNJYkq83kJP",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b273668c8e5c3d1d5b0de184216d",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e02668c8e5c3d1d5b0de184216d",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d00004851668c8e5c3d1d5b0de184216d",
              width: 64,
            },
          ],
          name: "Latineo Intenso",
          release_date: "2020-07-03",
          release_date_precision: "day",
          total_tracks: 19,
          type: "album",
          uri: "spotify:album:2AE7DBDPK01WNJYkq83kJP",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1ackd5XprZEkH3McKbQD51",
            },
            href: "https://api.spotify.com/v1/artists/1ackd5XprZEkH3McKbQD51",
            id: "1ackd5XprZEkH3McKbQD51",
            name: "Juan Magán",
            type: "artist",
            uri: "spotify:artist:1ackd5XprZEkH3McKbQD51",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5LeiVcEnsZcwc133TUhJNW",
            },
            href: "https://api.spotify.com/v1/artists/5LeiVcEnsZcwc133TUhJNW",
            id: "5LeiVcEnsZcwc133TUhJNW",
            name: "Belinda",
            type: "artist",
            uri: "spotify:artist:5LeiVcEnsZcwc133TUhJNW",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/0tmwSHipWxN12fsoLcFU3B",
            },
            href: "https://api.spotify.com/v1/artists/0tmwSHipWxN12fsoLcFU3B",
            id: "0tmwSHipWxN12fsoLcFU3B",
            name: "Manuel Turizo",
            type: "artist",
            uri: "spotify:artist:0tmwSHipWxN12fsoLcFU3B",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5oOyEfGd8NxAKA41zGQhoj",
            },
            href: "https://api.spotify.com/v1/artists/5oOyEfGd8NxAKA41zGQhoj",
            id: "5oOyEfGd8NxAKA41zGQhoj",
            name: "Snova",
            type: "artist",
            uri: "spotify:artist:5oOyEfGd8NxAKA41zGQhoj",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1o9x7ez0NvhDb7gBqrYnUj",
            },
            href: "https://api.spotify.com/v1/artists/1o9x7ez0NvhDb7gBqrYnUj",
            id: "1o9x7ez0NvhDb7gBqrYnUj",
            name: "B-Case",
            type: "artist",
            uri: "spotify:artist:1o9x7ez0NvhDb7gBqrYnUj",
          },
        ],
        disc_number: 1,
        duration_ms: 233146,
        explicit: false,
        external_ids: {
          isrc: "ES5701700901",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/7IN4RIb6nCC0XXFZIzJLfl",
        },
        href: "https://api.spotify.com/v1/tracks/7IN4RIb6nCC0XXFZIzJLfl",
        id: "7IN4RIb6nCC0XXFZIzJLfl",
        is_local: false,
        is_playable: true,
        name: "Déjate Llevar",
        popularity: 0,
        preview_url: null,
        track_number: 7,
        type: "track",
        uri: "spotify:track:7IN4RIb6nCC0XXFZIzJLfl",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
              },
              href: "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              id: "0LyfQWJT6nXafLPZqxe9Of",
              name: "Various Artists",
              type: "artist",
              uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/0jgfvOreUqh0gQVTE0DADA",
          },
          href: "https://api.spotify.com/v1/albums/0jgfvOreUqh0gQVTE0DADA",
          id: "0jgfvOreUqh0gQVTE0DADA",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b273c3541cc7186dca1c8fb156f8",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e02c3541cc7186dca1c8fb156f8",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d00004851c3541cc7186dca1c8fb156f8",
              width: 64,
            },
          ],
          name: "Corre con Ritmo",
          release_date: "2020-06-26",
          release_date_precision: "day",
          total_tracks: 19,
          type: "album",
          uri: "spotify:album:0jgfvOreUqh0gQVTE0DADA",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1ackd5XprZEkH3McKbQD51",
            },
            href: "https://api.spotify.com/v1/artists/1ackd5XprZEkH3McKbQD51",
            id: "1ackd5XprZEkH3McKbQD51",
            name: "Juan Magán",
            type: "artist",
            uri: "spotify:artist:1ackd5XprZEkH3McKbQD51",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5LeiVcEnsZcwc133TUhJNW",
            },
            href: "https://api.spotify.com/v1/artists/5LeiVcEnsZcwc133TUhJNW",
            id: "5LeiVcEnsZcwc133TUhJNW",
            name: "Belinda",
            type: "artist",
            uri: "spotify:artist:5LeiVcEnsZcwc133TUhJNW",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/0tmwSHipWxN12fsoLcFU3B",
            },
            href: "https://api.spotify.com/v1/artists/0tmwSHipWxN12fsoLcFU3B",
            id: "0tmwSHipWxN12fsoLcFU3B",
            name: "Manuel Turizo",
            type: "artist",
            uri: "spotify:artist:0tmwSHipWxN12fsoLcFU3B",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5oOyEfGd8NxAKA41zGQhoj",
            },
            href: "https://api.spotify.com/v1/artists/5oOyEfGd8NxAKA41zGQhoj",
            id: "5oOyEfGd8NxAKA41zGQhoj",
            name: "Snova",
            type: "artist",
            uri: "spotify:artist:5oOyEfGd8NxAKA41zGQhoj",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1o9x7ez0NvhDb7gBqrYnUj",
            },
            href: "https://api.spotify.com/v1/artists/1o9x7ez0NvhDb7gBqrYnUj",
            id: "1o9x7ez0NvhDb7gBqrYnUj",
            name: "B-Case",
            type: "artist",
            uri: "spotify:artist:1o9x7ez0NvhDb7gBqrYnUj",
          },
        ],
        disc_number: 1,
        duration_ms: 233146,
        explicit: false,
        external_ids: {
          isrc: "ES5701700901",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/40JN1VHBewl6YDxryAakoE",
        },
        href: "https://api.spotify.com/v1/tracks/40JN1VHBewl6YDxryAakoE",
        id: "40JN1VHBewl6YDxryAakoE",
        is_local: false,
        is_playable: true,
        name: "Déjate Llevar",
        popularity: 4,
        preview_url: null,
        track_number: 7,
        type: "track",
        uri: "spotify:track:40JN1VHBewl6YDxryAakoE",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
              },
              href: "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              id: "0LyfQWJT6nXafLPZqxe9Of",
              name: "Various Artists",
              type: "artist",
              uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/63U4uSd5pI1fETaIzmOryK",
          },
          href: "https://api.spotify.com/v1/albums/63U4uSd5pI1fETaIzmOryK",
          id: "63U4uSd5pI1fETaIzmOryK",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b2730f84103e00e1970039082e21",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e020f84103e00e1970039082e21",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d000048510f84103e00e1970039082e21",
              width: 64,
            },
          ],
          name: "Simplemente Verano",
          release_date: "2020-07-03",
          release_date_precision: "day",
          total_tracks: 40,
          type: "album",
          uri: "spotify:album:63U4uSd5pI1fETaIzmOryK",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1ackd5XprZEkH3McKbQD51",
            },
            href: "https://api.spotify.com/v1/artists/1ackd5XprZEkH3McKbQD51",
            id: "1ackd5XprZEkH3McKbQD51",
            name: "Juan Magán",
            type: "artist",
            uri: "spotify:artist:1ackd5XprZEkH3McKbQD51",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5LeiVcEnsZcwc133TUhJNW",
            },
            href: "https://api.spotify.com/v1/artists/5LeiVcEnsZcwc133TUhJNW",
            id: "5LeiVcEnsZcwc133TUhJNW",
            name: "Belinda",
            type: "artist",
            uri: "spotify:artist:5LeiVcEnsZcwc133TUhJNW",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/0tmwSHipWxN12fsoLcFU3B",
            },
            href: "https://api.spotify.com/v1/artists/0tmwSHipWxN12fsoLcFU3B",
            id: "0tmwSHipWxN12fsoLcFU3B",
            name: "Manuel Turizo",
            type: "artist",
            uri: "spotify:artist:0tmwSHipWxN12fsoLcFU3B",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5oOyEfGd8NxAKA41zGQhoj",
            },
            href: "https://api.spotify.com/v1/artists/5oOyEfGd8NxAKA41zGQhoj",
            id: "5oOyEfGd8NxAKA41zGQhoj",
            name: "Snova",
            type: "artist",
            uri: "spotify:artist:5oOyEfGd8NxAKA41zGQhoj",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1o9x7ez0NvhDb7gBqrYnUj",
            },
            href: "https://api.spotify.com/v1/artists/1o9x7ez0NvhDb7gBqrYnUj",
            id: "1o9x7ez0NvhDb7gBqrYnUj",
            name: "B-Case",
            type: "artist",
            uri: "spotify:artist:1o9x7ez0NvhDb7gBqrYnUj",
          },
        ],
        disc_number: 1,
        duration_ms: 233146,
        explicit: false,
        external_ids: {
          isrc: "ES5701700901",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/0430WnWz623NiIza3irUmK",
        },
        href: "https://api.spotify.com/v1/tracks/0430WnWz623NiIza3irUmK",
        id: "0430WnWz623NiIza3irUmK",
        is_local: false,
        is_playable: true,
        name: "Déjate Llevar",
        popularity: 0,
        preview_url: null,
        track_number: 33,
        type: "track",
        uri: "spotify:track:0430WnWz623NiIza3irUmK",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
              },
              href: "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              id: "0LyfQWJT6nXafLPZqxe9Of",
              name: "Various Artists",
              type: "artist",
              uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/07RqnTyuDW9L71nt15lKy7",
          },
          href: "https://api.spotify.com/v1/albums/07RqnTyuDW9L71nt15lKy7",
          id: "07RqnTyuDW9L71nt15lKy7",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b2734ba577821f5a1961daa1e592",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e024ba577821f5a1961daa1e592",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d000048514ba577821f5a1961daa1e592",
              width: 64,
            },
          ],
          name: "Verano Tropical",
          release_date: "2020-07-03",
          release_date_precision: "day",
          total_tracks: 19,
          type: "album",
          uri: "spotify:album:07RqnTyuDW9L71nt15lKy7",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1ackd5XprZEkH3McKbQD51",
            },
            href: "https://api.spotify.com/v1/artists/1ackd5XprZEkH3McKbQD51",
            id: "1ackd5XprZEkH3McKbQD51",
            name: "Juan Magán",
            type: "artist",
            uri: "spotify:artist:1ackd5XprZEkH3McKbQD51",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5LeiVcEnsZcwc133TUhJNW",
            },
            href: "https://api.spotify.com/v1/artists/5LeiVcEnsZcwc133TUhJNW",
            id: "5LeiVcEnsZcwc133TUhJNW",
            name: "Belinda",
            type: "artist",
            uri: "spotify:artist:5LeiVcEnsZcwc133TUhJNW",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/0tmwSHipWxN12fsoLcFU3B",
            },
            href: "https://api.spotify.com/v1/artists/0tmwSHipWxN12fsoLcFU3B",
            id: "0tmwSHipWxN12fsoLcFU3B",
            name: "Manuel Turizo",
            type: "artist",
            uri: "spotify:artist:0tmwSHipWxN12fsoLcFU3B",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5oOyEfGd8NxAKA41zGQhoj",
            },
            href: "https://api.spotify.com/v1/artists/5oOyEfGd8NxAKA41zGQhoj",
            id: "5oOyEfGd8NxAKA41zGQhoj",
            name: "Snova",
            type: "artist",
            uri: "spotify:artist:5oOyEfGd8NxAKA41zGQhoj",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1o9x7ez0NvhDb7gBqrYnUj",
            },
            href: "https://api.spotify.com/v1/artists/1o9x7ez0NvhDb7gBqrYnUj",
            id: "1o9x7ez0NvhDb7gBqrYnUj",
            name: "B-Case",
            type: "artist",
            uri: "spotify:artist:1o9x7ez0NvhDb7gBqrYnUj",
          },
        ],
        disc_number: 1,
        duration_ms: 233146,
        explicit: false,
        external_ids: {
          isrc: "ES5701700901",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/09WgcTKwUEDAcwnMrgDN8m",
        },
        href: "https://api.spotify.com/v1/tracks/09WgcTKwUEDAcwnMrgDN8m",
        id: "09WgcTKwUEDAcwnMrgDN8m",
        is_local: false,
        is_playable: true,
        name: "Déjate Llevar",
        popularity: 0,
        preview_url: null,
        track_number: 12,
        type: "track",
        uri: "spotify:track:09WgcTKwUEDAcwnMrgDN8m",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
              },
              href: "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              id: "0LyfQWJT6nXafLPZqxe9Of",
              name: "Various Artists",
              type: "artist",
              uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/47mrHCufSMShVcWOflA19i",
          },
          href: "https://api.spotify.com/v1/albums/47mrHCufSMShVcWOflA19i",
          id: "47mrHCufSMShVcWOflA19i",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b273ff85186688948779f6ad384c",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e02ff85186688948779f6ad384c",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d00004851ff85186688948779f6ad384c",
              width: 64,
            },
          ],
          name: "Fiesta y más Fiesta",
          release_date: "2020-07-03",
          release_date_precision: "day",
          total_tracks: 25,
          type: "album",
          uri: "spotify:album:47mrHCufSMShVcWOflA19i",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1ackd5XprZEkH3McKbQD51",
            },
            href: "https://api.spotify.com/v1/artists/1ackd5XprZEkH3McKbQD51",
            id: "1ackd5XprZEkH3McKbQD51",
            name: "Juan Magán",
            type: "artist",
            uri: "spotify:artist:1ackd5XprZEkH3McKbQD51",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5LeiVcEnsZcwc133TUhJNW",
            },
            href: "https://api.spotify.com/v1/artists/5LeiVcEnsZcwc133TUhJNW",
            id: "5LeiVcEnsZcwc133TUhJNW",
            name: "Belinda",
            type: "artist",
            uri: "spotify:artist:5LeiVcEnsZcwc133TUhJNW",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/0tmwSHipWxN12fsoLcFU3B",
            },
            href: "https://api.spotify.com/v1/artists/0tmwSHipWxN12fsoLcFU3B",
            id: "0tmwSHipWxN12fsoLcFU3B",
            name: "Manuel Turizo",
            type: "artist",
            uri: "spotify:artist:0tmwSHipWxN12fsoLcFU3B",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5oOyEfGd8NxAKA41zGQhoj",
            },
            href: "https://api.spotify.com/v1/artists/5oOyEfGd8NxAKA41zGQhoj",
            id: "5oOyEfGd8NxAKA41zGQhoj",
            name: "Snova",
            type: "artist",
            uri: "spotify:artist:5oOyEfGd8NxAKA41zGQhoj",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1o9x7ez0NvhDb7gBqrYnUj",
            },
            href: "https://api.spotify.com/v1/artists/1o9x7ez0NvhDb7gBqrYnUj",
            id: "1o9x7ez0NvhDb7gBqrYnUj",
            name: "B-Case",
            type: "artist",
            uri: "spotify:artist:1o9x7ez0NvhDb7gBqrYnUj",
          },
        ],
        disc_number: 1,
        duration_ms: 233146,
        explicit: false,
        external_ids: {
          isrc: "ES5701700901",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/5GcqYt9Z4eUDhUVzdWAtOL",
        },
        href: "https://api.spotify.com/v1/tracks/5GcqYt9Z4eUDhUVzdWAtOL",
        id: "5GcqYt9Z4eUDhUVzdWAtOL",
        is_local: false,
        is_playable: true,
        name: "Déjate Llevar",
        popularity: 0,
        preview_url: null,
        track_number: 5,
        type: "track",
        uri: "spotify:track:5GcqYt9Z4eUDhUVzdWAtOL",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
              },
              href: "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              id: "0LyfQWJT6nXafLPZqxe9Of",
              name: "Various Artists",
              type: "artist",
              uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/76o7frrYErqGNEv2aMts3q",
          },
          href: "https://api.spotify.com/v1/albums/76o7frrYErqGNEv2aMts3q",
          id: "76o7frrYErqGNEv2aMts3q",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b273753cb13c6a6cf648e6fb7f1f",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e02753cb13c6a6cf648e6fb7f1f",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d00004851753cb13c6a6cf648e6fb7f1f",
              width: 64,
            },
          ],
          name: "Summer Crossover",
          release_date: "2020-07-03",
          release_date_precision: "day",
          total_tracks: 19,
          type: "album",
          uri: "spotify:album:76o7frrYErqGNEv2aMts3q",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1ackd5XprZEkH3McKbQD51",
            },
            href: "https://api.spotify.com/v1/artists/1ackd5XprZEkH3McKbQD51",
            id: "1ackd5XprZEkH3McKbQD51",
            name: "Juan Magán",
            type: "artist",
            uri: "spotify:artist:1ackd5XprZEkH3McKbQD51",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5LeiVcEnsZcwc133TUhJNW",
            },
            href: "https://api.spotify.com/v1/artists/5LeiVcEnsZcwc133TUhJNW",
            id: "5LeiVcEnsZcwc133TUhJNW",
            name: "Belinda",
            type: "artist",
            uri: "spotify:artist:5LeiVcEnsZcwc133TUhJNW",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/0tmwSHipWxN12fsoLcFU3B",
            },
            href: "https://api.spotify.com/v1/artists/0tmwSHipWxN12fsoLcFU3B",
            id: "0tmwSHipWxN12fsoLcFU3B",
            name: "Manuel Turizo",
            type: "artist",
            uri: "spotify:artist:0tmwSHipWxN12fsoLcFU3B",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5oOyEfGd8NxAKA41zGQhoj",
            },
            href: "https://api.spotify.com/v1/artists/5oOyEfGd8NxAKA41zGQhoj",
            id: "5oOyEfGd8NxAKA41zGQhoj",
            name: "Snova",
            type: "artist",
            uri: "spotify:artist:5oOyEfGd8NxAKA41zGQhoj",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1o9x7ez0NvhDb7gBqrYnUj",
            },
            href: "https://api.spotify.com/v1/artists/1o9x7ez0NvhDb7gBqrYnUj",
            id: "1o9x7ez0NvhDb7gBqrYnUj",
            name: "B-Case",
            type: "artist",
            uri: "spotify:artist:1o9x7ez0NvhDb7gBqrYnUj",
          },
        ],
        disc_number: 1,
        duration_ms: 233146,
        explicit: false,
        external_ids: {
          isrc: "ES5701700901",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/6jcPyqnoc6f5wo89El9XuI",
        },
        href: "https://api.spotify.com/v1/tracks/6jcPyqnoc6f5wo89El9XuI",
        id: "6jcPyqnoc6f5wo89El9XuI",
        is_local: false,
        is_playable: true,
        name: "Déjate Llevar",
        popularity: 0,
        preview_url: null,
        track_number: 7,
        type: "track",
        uri: "spotify:track:6jcPyqnoc6f5wo89El9XuI",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
              },
              href: "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              id: "0LyfQWJT6nXafLPZqxe9Of",
              name: "Various Artists",
              type: "artist",
              uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/2H3Eroa7kY40ATLvCYnAvr",
          },
          href: "https://api.spotify.com/v1/albums/2H3Eroa7kY40ATLvCYnAvr",
          id: "2H3Eroa7kY40ATLvCYnAvr",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b273c511db04da033fe21e897875",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e02c511db04da033fe21e897875",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d00004851c511db04da033fe21e897875",
              width: 64,
            },
          ],
          name: "Simplemente Éxitos",
          release_date: "2020-07-03",
          release_date_precision: "day",
          total_tracks: 30,
          type: "album",
          uri: "spotify:album:2H3Eroa7kY40ATLvCYnAvr",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1ackd5XprZEkH3McKbQD51",
            },
            href: "https://api.spotify.com/v1/artists/1ackd5XprZEkH3McKbQD51",
            id: "1ackd5XprZEkH3McKbQD51",
            name: "Juan Magán",
            type: "artist",
            uri: "spotify:artist:1ackd5XprZEkH3McKbQD51",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5LeiVcEnsZcwc133TUhJNW",
            },
            href: "https://api.spotify.com/v1/artists/5LeiVcEnsZcwc133TUhJNW",
            id: "5LeiVcEnsZcwc133TUhJNW",
            name: "Belinda",
            type: "artist",
            uri: "spotify:artist:5LeiVcEnsZcwc133TUhJNW",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/0tmwSHipWxN12fsoLcFU3B",
            },
            href: "https://api.spotify.com/v1/artists/0tmwSHipWxN12fsoLcFU3B",
            id: "0tmwSHipWxN12fsoLcFU3B",
            name: "Manuel Turizo",
            type: "artist",
            uri: "spotify:artist:0tmwSHipWxN12fsoLcFU3B",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5oOyEfGd8NxAKA41zGQhoj",
            },
            href: "https://api.spotify.com/v1/artists/5oOyEfGd8NxAKA41zGQhoj",
            id: "5oOyEfGd8NxAKA41zGQhoj",
            name: "Snova",
            type: "artist",
            uri: "spotify:artist:5oOyEfGd8NxAKA41zGQhoj",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1o9x7ez0NvhDb7gBqrYnUj",
            },
            href: "https://api.spotify.com/v1/artists/1o9x7ez0NvhDb7gBqrYnUj",
            id: "1o9x7ez0NvhDb7gBqrYnUj",
            name: "B-Case",
            type: "artist",
            uri: "spotify:artist:1o9x7ez0NvhDb7gBqrYnUj",
          },
        ],
        disc_number: 1,
        duration_ms: 233146,
        explicit: false,
        external_ids: {
          isrc: "ES5701700901",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/7zxrWQu7W0pTPccpJb6uzG",
        },
        href: "https://api.spotify.com/v1/tracks/7zxrWQu7W0pTPccpJb6uzG",
        id: "7zxrWQu7W0pTPccpJb6uzG",
        is_local: false,
        is_playable: true,
        name: "Déjate Llevar",
        popularity: 0,
        preview_url: null,
        track_number: 25,
        type: "track",
        uri: "spotify:track:7zxrWQu7W0pTPccpJb6uzG",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
              },
              href: "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              id: "0LyfQWJT6nXafLPZqxe9Of",
              name: "Various Artists",
              type: "artist",
              uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/2iE84nKC7UzrBtF2FIgqoy",
          },
          href: "https://api.spotify.com/v1/albums/2iE84nKC7UzrBtF2FIgqoy",
          id: "2iE84nKC7UzrBtF2FIgqoy",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b2730b80988b84fe6b648c608ba6",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e020b80988b84fe6b648c608ba6",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d000048510b80988b84fe6b648c608ba6",
              width: 64,
            },
          ],
          name: "Simplemente Reggaeton",
          release_date: "2020-07-03",
          release_date_precision: "day",
          total_tracks: 65,
          type: "album",
          uri: "spotify:album:2iE84nKC7UzrBtF2FIgqoy",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1ackd5XprZEkH3McKbQD51",
            },
            href: "https://api.spotify.com/v1/artists/1ackd5XprZEkH3McKbQD51",
            id: "1ackd5XprZEkH3McKbQD51",
            name: "Juan Magán",
            type: "artist",
            uri: "spotify:artist:1ackd5XprZEkH3McKbQD51",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5LeiVcEnsZcwc133TUhJNW",
            },
            href: "https://api.spotify.com/v1/artists/5LeiVcEnsZcwc133TUhJNW",
            id: "5LeiVcEnsZcwc133TUhJNW",
            name: "Belinda",
            type: "artist",
            uri: "spotify:artist:5LeiVcEnsZcwc133TUhJNW",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/0tmwSHipWxN12fsoLcFU3B",
            },
            href: "https://api.spotify.com/v1/artists/0tmwSHipWxN12fsoLcFU3B",
            id: "0tmwSHipWxN12fsoLcFU3B",
            name: "Manuel Turizo",
            type: "artist",
            uri: "spotify:artist:0tmwSHipWxN12fsoLcFU3B",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5oOyEfGd8NxAKA41zGQhoj",
            },
            href: "https://api.spotify.com/v1/artists/5oOyEfGd8NxAKA41zGQhoj",
            id: "5oOyEfGd8NxAKA41zGQhoj",
            name: "Snova",
            type: "artist",
            uri: "spotify:artist:5oOyEfGd8NxAKA41zGQhoj",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1o9x7ez0NvhDb7gBqrYnUj",
            },
            href: "https://api.spotify.com/v1/artists/1o9x7ez0NvhDb7gBqrYnUj",
            id: "1o9x7ez0NvhDb7gBqrYnUj",
            name: "B-Case",
            type: "artist",
            uri: "spotify:artist:1o9x7ez0NvhDb7gBqrYnUj",
          },
        ],
        disc_number: 1,
        duration_ms: 233146,
        explicit: false,
        external_ids: {
          isrc: "ES5701700901",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/1BaVD1NQsI2Bd3t9a0VSDt",
        },
        href: "https://api.spotify.com/v1/tracks/1BaVD1NQsI2Bd3t9a0VSDt",
        id: "1BaVD1NQsI2Bd3t9a0VSDt",
        is_local: false,
        is_playable: true,
        name: "Déjate Llevar",
        popularity: 0,
        preview_url: null,
        track_number: 47,
        type: "track",
        uri: "spotify:track:1BaVD1NQsI2Bd3t9a0VSDt",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
              },
              href: "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              id: "0LyfQWJT6nXafLPZqxe9Of",
              name: "Various Artists",
              type: "artist",
              uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/00SkcXVFNHlQkddKRzKUa6",
          },
          href: "https://api.spotify.com/v1/albums/00SkcXVFNHlQkddKRzKUa6",
          id: "00SkcXVFNHlQkddKRzKUa6",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b273ef3ee4404987a904c7771b62",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e02ef3ee4404987a904c7771b62",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d00004851ef3ee4404987a904c7771b62",
              width: 64,
            },
          ],
          name: "Fiesta Crossover",
          release_date: "2020-07-03",
          release_date_precision: "day",
          total_tracks: 19,
          type: "album",
          uri: "spotify:album:00SkcXVFNHlQkddKRzKUa6",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1ackd5XprZEkH3McKbQD51",
            },
            href: "https://api.spotify.com/v1/artists/1ackd5XprZEkH3McKbQD51",
            id: "1ackd5XprZEkH3McKbQD51",
            name: "Juan Magán",
            type: "artist",
            uri: "spotify:artist:1ackd5XprZEkH3McKbQD51",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5LeiVcEnsZcwc133TUhJNW",
            },
            href: "https://api.spotify.com/v1/artists/5LeiVcEnsZcwc133TUhJNW",
            id: "5LeiVcEnsZcwc133TUhJNW",
            name: "Belinda",
            type: "artist",
            uri: "spotify:artist:5LeiVcEnsZcwc133TUhJNW",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/0tmwSHipWxN12fsoLcFU3B",
            },
            href: "https://api.spotify.com/v1/artists/0tmwSHipWxN12fsoLcFU3B",
            id: "0tmwSHipWxN12fsoLcFU3B",
            name: "Manuel Turizo",
            type: "artist",
            uri: "spotify:artist:0tmwSHipWxN12fsoLcFU3B",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5oOyEfGd8NxAKA41zGQhoj",
            },
            href: "https://api.spotify.com/v1/artists/5oOyEfGd8NxAKA41zGQhoj",
            id: "5oOyEfGd8NxAKA41zGQhoj",
            name: "Snova",
            type: "artist",
            uri: "spotify:artist:5oOyEfGd8NxAKA41zGQhoj",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1o9x7ez0NvhDb7gBqrYnUj",
            },
            href: "https://api.spotify.com/v1/artists/1o9x7ez0NvhDb7gBqrYnUj",
            id: "1o9x7ez0NvhDb7gBqrYnUj",
            name: "B-Case",
            type: "artist",
            uri: "spotify:artist:1o9x7ez0NvhDb7gBqrYnUj",
          },
        ],
        disc_number: 1,
        duration_ms: 233146,
        explicit: false,
        external_ids: {
          isrc: "ES5701700901",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/3sCWjlooc32jUjEZKdfL59",
        },
        href: "https://api.spotify.com/v1/tracks/3sCWjlooc32jUjEZKdfL59",
        id: "3sCWjlooc32jUjEZKdfL59",
        is_local: false,
        is_playable: true,
        name: "Déjate Llevar",
        popularity: 0,
        preview_url: null,
        track_number: 7,
        type: "track",
        uri: "spotify:track:3sCWjlooc32jUjEZKdfL59",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
              },
              href: "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              id: "0LyfQWJT6nXafLPZqxe9Of",
              name: "Various Artists",
              type: "artist",
              uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/7CVI8Tk0cGdnv5u2yvmP0I",
          },
          href: "https://api.spotify.com/v1/albums/7CVI8Tk0cGdnv5u2yvmP0I",
          id: "7CVI8Tk0cGdnv5u2yvmP0I",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b273c97f8ebef611740cc58de681",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e02c97f8ebef611740cc58de681",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d00004851c97f8ebef611740cc58de681",
              width: 64,
            },
          ],
          name: "Clásicos para entrenar",
          release_date: "2020-07-03",
          release_date_precision: "day",
          total_tracks: 19,
          type: "album",
          uri: "spotify:album:7CVI8Tk0cGdnv5u2yvmP0I",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1ackd5XprZEkH3McKbQD51",
            },
            href: "https://api.spotify.com/v1/artists/1ackd5XprZEkH3McKbQD51",
            id: "1ackd5XprZEkH3McKbQD51",
            name: "Juan Magán",
            type: "artist",
            uri: "spotify:artist:1ackd5XprZEkH3McKbQD51",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5LeiVcEnsZcwc133TUhJNW",
            },
            href: "https://api.spotify.com/v1/artists/5LeiVcEnsZcwc133TUhJNW",
            id: "5LeiVcEnsZcwc133TUhJNW",
            name: "Belinda",
            type: "artist",
            uri: "spotify:artist:5LeiVcEnsZcwc133TUhJNW",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/0tmwSHipWxN12fsoLcFU3B",
            },
            href: "https://api.spotify.com/v1/artists/0tmwSHipWxN12fsoLcFU3B",
            id: "0tmwSHipWxN12fsoLcFU3B",
            name: "Manuel Turizo",
            type: "artist",
            uri: "spotify:artist:0tmwSHipWxN12fsoLcFU3B",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5oOyEfGd8NxAKA41zGQhoj",
            },
            href: "https://api.spotify.com/v1/artists/5oOyEfGd8NxAKA41zGQhoj",
            id: "5oOyEfGd8NxAKA41zGQhoj",
            name: "Snova",
            type: "artist",
            uri: "spotify:artist:5oOyEfGd8NxAKA41zGQhoj",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1o9x7ez0NvhDb7gBqrYnUj",
            },
            href: "https://api.spotify.com/v1/artists/1o9x7ez0NvhDb7gBqrYnUj",
            id: "1o9x7ez0NvhDb7gBqrYnUj",
            name: "B-Case",
            type: "artist",
            uri: "spotify:artist:1o9x7ez0NvhDb7gBqrYnUj",
          },
        ],
        disc_number: 1,
        duration_ms: 233146,
        explicit: false,
        external_ids: {
          isrc: "ES5701700901",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/0ErBrZai2R8rJeUUPiwDgt",
        },
        href: "https://api.spotify.com/v1/tracks/0ErBrZai2R8rJeUUPiwDgt",
        id: "0ErBrZai2R8rJeUUPiwDgt",
        is_local: false,
        is_playable: true,
        name: "Déjate Llevar",
        popularity: 0,
        preview_url: null,
        track_number: 14,
        type: "track",
        uri: "spotify:track:0ErBrZai2R8rJeUUPiwDgt",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/1A9o3Ljt67pFZ89YtPPL5X",
              },
              href: "https://api.spotify.com/v1/artists/1A9o3Ljt67pFZ89YtPPL5X",
              id: "1A9o3Ljt67pFZ89YtPPL5X",
              name: "Snoh Aalegra",
              type: "artist",
              uri: "spotify:artist:1A9o3Ljt67pFZ89YtPPL5X",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/7CqQYYERGNSq5xSgTuALLd",
          },
          href: "https://api.spotify.com/v1/albums/7CqQYYERGNSq5xSgTuALLd",
          id: "7CqQYYERGNSq5xSgTuALLd",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b2734fd546baade2ca3e56dab768",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e024fd546baade2ca3e56dab768",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d000048514fd546baade2ca3e56dab768",
              width: 64,
            },
          ],
          name: "FEELS",
          release_date: "2017-10-20",
          release_date_precision: "day",
          total_tracks: 13,
          type: "album",
          uri: "spotify:album:7CqQYYERGNSq5xSgTuALLd",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1A9o3Ljt67pFZ89YtPPL5X",
            },
            href: "https://api.spotify.com/v1/artists/1A9o3Ljt67pFZ89YtPPL5X",
            id: "1A9o3Ljt67pFZ89YtPPL5X",
            name: "Snoh Aalegra",
            type: "artist",
            uri: "spotify:artist:1A9o3Ljt67pFZ89YtPPL5X",
          },
        ],
        disc_number: 1,
        duration_ms: 194303,
        explicit: false,
        external_ids: {
          isrc: "QMEU31702691",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/3pEGNvJWWAfDSuUrQjEpEV",
        },
        href: "https://api.spotify.com/v1/tracks/3pEGNvJWWAfDSuUrQjEpEV",
        id: "3pEGNvJWWAfDSuUrQjEpEV",
        is_local: false,
        is_playable: true,
        name: "Fool For You",
        popularity: 66,
        preview_url:
          "https://p.scdn.co/mp3-preview/d6551ed7cfa19744a775bca1079918d060b22b64?cid=b154195200be41338cce8394cd67c97a",
        track_number: 7,
        type: "track",
        uri: "spotify:track:3pEGNvJWWAfDSuUrQjEpEV",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
              },
              href: "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              id: "0LyfQWJT6nXafLPZqxe9Of",
              name: "Various Artists",
              type: "artist",
              uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/3IJHjrdzV1lZJAVoivKJCr",
          },
          href: "https://api.spotify.com/v1/albums/3IJHjrdzV1lZJAVoivKJCr",
          id: "3IJHjrdzV1lZJAVoivKJCr",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b273f74c738a1e91a6e0a93750c7",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e02f74c738a1e91a6e0a93750c7",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d00004851f74c738a1e91a6e0a93750c7",
              width: 64,
            },
          ],
          name: "1990s Throwback",
          release_date: "2020-06-26",
          release_date_precision: "day",
          total_tracks: 49,
          type: "album",
          uri: "spotify:album:3IJHjrdzV1lZJAVoivKJCr",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/3uZFBSsMiooimnprFL9jD1",
            },
            href: "https://api.spotify.com/v1/artists/3uZFBSsMiooimnprFL9jD1",
            id: "3uZFBSsMiooimnprFL9jD1",
            name: "Snow",
            type: "artist",
            uri: "spotify:artist:3uZFBSsMiooimnprFL9jD1",
          },
        ],
        disc_number: 1,
        duration_ms: 268910,
        explicit: false,
        external_ids: {
          isrc: "USEW19300006",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/6AnfzVG71bkinAH3wJhtav",
        },
        href: "https://api.spotify.com/v1/tracks/6AnfzVG71bkinAH3wJhtav",
        id: "6AnfzVG71bkinAH3wJhtav",
        is_local: false,
        is_playable: true,
        name: "Informer",
        popularity: 8,
        preview_url:
          "https://p.scdn.co/mp3-preview/c73e8909247b95c5ce8ffa5fc5ce1a94d845665b?cid=b154195200be41338cce8394cd67c97a",
        track_number: 22,
        type: "track",
        uri: "spotify:track:6AnfzVG71bkinAH3wJhtav",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
              },
              href: "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              id: "0LyfQWJT6nXafLPZqxe9Of",
              name: "Various Artists",
              type: "artist",
              uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/3FixMylPeEE77gYpQtiEZs",
          },
          href: "https://api.spotify.com/v1/albums/3FixMylPeEE77gYpQtiEZs",
          id: "3FixMylPeEE77gYpQtiEZs",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b273a577a82feb97ff2714b25071",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e02a577a82feb97ff2714b25071",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d00004851a577a82feb97ff2714b25071",
              width: 64,
            },
          ],
          name: "90's Hip Hop",
          release_date: "2020-06-26",
          release_date_precision: "day",
          total_tracks: 31,
          type: "album",
          uri: "spotify:album:3FixMylPeEE77gYpQtiEZs",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/3uZFBSsMiooimnprFL9jD1",
            },
            href: "https://api.spotify.com/v1/artists/3uZFBSsMiooimnprFL9jD1",
            id: "3uZFBSsMiooimnprFL9jD1",
            name: "Snow",
            type: "artist",
            uri: "spotify:artist:3uZFBSsMiooimnprFL9jD1",
          },
        ],
        disc_number: 1,
        duration_ms: 253266,
        explicit: false,
        external_ids: {
          isrc: "USEE11900026",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/6H6ag6mKTqgv41cpnpEjjq",
        },
        href: "https://api.spotify.com/v1/tracks/6H6ag6mKTqgv41cpnpEjjq",
        id: "6H6ag6mKTqgv41cpnpEjjq",
        is_local: false,
        is_playable: true,
        name: "Informer - Drum Mix",
        popularity: 7,
        preview_url:
          "https://p.scdn.co/mp3-preview/ed7d0c74ffa9bce9ff289232ec31ee973c85edc2?cid=b154195200be41338cce8394cd67c97a",
        track_number: 29,
        type: "track",
        uri: "spotify:track:6H6ag6mKTqgv41cpnpEjjq",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
              },
              href: "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              id: "0LyfQWJT6nXafLPZqxe9Of",
              name: "Various Artists",
              type: "artist",
              uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/3SiItwHFovxWdd88yuIjcV",
          },
          href: "https://api.spotify.com/v1/albums/3SiItwHFovxWdd88yuIjcV",
          id: "3SiItwHFovxWdd88yuIjcV",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b2730bc1580a86f11bcd616d4f65",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e020bc1580a86f11bcd616d4f65",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d000048510bc1580a86f11bcd616d4f65",
              width: 64,
            },
          ],
          name: "100 Greatest 90s: Ultimate Nineties Throwback Anthems",
          release_date: "2020-06-26",
          release_date_precision: "day",
          total_tracks: 100,
          type: "album",
          uri: "spotify:album:3SiItwHFovxWdd88yuIjcV",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/3uZFBSsMiooimnprFL9jD1",
            },
            href: "https://api.spotify.com/v1/artists/3uZFBSsMiooimnprFL9jD1",
            id: "3uZFBSsMiooimnprFL9jD1",
            name: "Snow",
            type: "artist",
            uri: "spotify:artist:3uZFBSsMiooimnprFL9jD1",
          },
        ],
        disc_number: 1,
        duration_ms: 268910,
        explicit: false,
        external_ids: {
          isrc: "USEW19300006",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/0yaB6kwnPgal7GsJkNfjkW",
        },
        href: "https://api.spotify.com/v1/tracks/0yaB6kwnPgal7GsJkNfjkW",
        id: "0yaB6kwnPgal7GsJkNfjkW",
        is_local: false,
        is_playable: true,
        name: "Informer",
        popularity: 12,
        preview_url:
          "https://p.scdn.co/mp3-preview/c73e8909247b95c5ce8ffa5fc5ce1a94d845665b?cid=b154195200be41338cce8394cd67c97a",
        track_number: 16,
        type: "track",
        uri: "spotify:track:0yaB6kwnPgal7GsJkNfjkW",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
              },
              href: "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              id: "0LyfQWJT6nXafLPZqxe9Of",
              name: "Various Artists",
              type: "artist",
              uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/3FixMylPeEE77gYpQtiEZs",
          },
          href: "https://api.spotify.com/v1/albums/3FixMylPeEE77gYpQtiEZs",
          id: "3FixMylPeEE77gYpQtiEZs",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b273a577a82feb97ff2714b25071",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e02a577a82feb97ff2714b25071",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d00004851a577a82feb97ff2714b25071",
              width: 64,
            },
          ],
          name: "90's Hip Hop",
          release_date: "2020-06-26",
          release_date_precision: "day",
          total_tracks: 31,
          type: "album",
          uri: "spotify:album:3FixMylPeEE77gYpQtiEZs",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/3uZFBSsMiooimnprFL9jD1",
            },
            href: "https://api.spotify.com/v1/artists/3uZFBSsMiooimnprFL9jD1",
            id: "3uZFBSsMiooimnprFL9jD1",
            name: "Snow",
            type: "artist",
            uri: "spotify:artist:3uZFBSsMiooimnprFL9jD1",
          },
        ],
        disc_number: 1,
        duration_ms: 268746,
        explicit: false,
        external_ids: {
          isrc: "USEE11200807",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/7mspKJC5KBIml03dhYJBzJ",
        },
        href: "https://api.spotify.com/v1/tracks/7mspKJC5KBIml03dhYJBzJ",
        id: "7mspKJC5KBIml03dhYJBzJ",
        is_local: false,
        is_playable: true,
        name: "Informer",
        popularity: 13,
        preview_url:
          "https://p.scdn.co/mp3-preview/2f9f8f0c0ff51a9b5cbe43558acff72834b399ab?cid=b154195200be41338cce8394cd67c97a",
        track_number: 16,
        type: "track",
        uri: "spotify:track:7mspKJC5KBIml03dhYJBzJ",
      },
      {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/3l0CmX0FuQjFxr8SK7Vqag",
              },
              href: "https://api.spotify.com/v1/artists/3l0CmX0FuQjFxr8SK7Vqag",
              id: "3l0CmX0FuQjFxr8SK7Vqag",
              name: "Clairo",
              type: "artist",
              uri: "spotify:artist:3l0CmX0FuQjFxr8SK7Vqag",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/3NEDQmYF1roygFssVEwkwv",
          },
          href: "https://api.spotify.com/v1/albums/3NEDQmYF1roygFssVEwkwv",
          id: "3NEDQmYF1roygFssVEwkwv",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b273bf94e27360806b5aa5025f93",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e02bf94e27360806b5aa5025f93",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d00004851bf94e27360806b5aa5025f93",
              width: 64,
            },
          ],
          name: "diary 001",
          release_date: "2018-05-25",
          release_date_precision: "day",
          total_tracks: 6,
          type: "album",
          uri: "spotify:album:3NEDQmYF1roygFssVEwkwv",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/3l0CmX0FuQjFxr8SK7Vqag",
            },
            href: "https://api.spotify.com/v1/artists/3l0CmX0FuQjFxr8SK7Vqag",
            id: "3l0CmX0FuQjFxr8SK7Vqag",
            name: "Clairo",
            type: "artist",
            uri: "spotify:artist:3l0CmX0FuQjFxr8SK7Vqag",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/3lLHpTOJ11tWiUNGYN14gt",
            },
            href: "https://api.spotify.com/v1/artists/3lLHpTOJ11tWiUNGYN14gt",
            id: "3lLHpTOJ11tWiUNGYN14gt",
            name: "Rejjie Snow",
            type: "artist",
            uri: "spotify:artist:3lLHpTOJ11tWiUNGYN14gt",
          },
        ],
        disc_number: 1,
        duration_ms: 135016,
        explicit: false,
        external_ids: {
          isrc: "US4HB1800005",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/7qwt4xUIqQWCu1DJf96g2k",
        },
        href: "https://api.spotify.com/v1/tracks/7qwt4xUIqQWCu1DJf96g2k",
        id: "7qwt4xUIqQWCu1DJf96g2k",
        is_local: false,
        is_playable: true,
        name: "Hello?",
        popularity: 74,
        preview_url: null,
        track_number: 1,
        type: "track",
        uri: "spotify:track:7qwt4xUIqQWCu1DJf96g2k",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/0CmvFWTX9zmMNCUi6fHtAx",
              },
              href: "https://api.spotify.com/v1/artists/0CmvFWTX9zmMNCUi6fHtAx",
              id: "0CmvFWTX9zmMNCUi6fHtAx",
              name: "THE BOYZ",
              type: "artist",
              uri: "spotify:artist:0CmvFWTX9zmMNCUi6fHtAx",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/0mCPYdhQPWUQtQSp4CSxNh",
          },
          href: "https://api.spotify.com/v1/albums/0mCPYdhQPWUQtQSp4CSxNh",
          id: "0mCPYdhQPWUQtQSp4CSxNh",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/ab67616d0000b273895b93b4df47275d4c290613",
              width: 640,
            },
            {
              height: 300,
              url:
                "https://i.scdn.co/image/ab67616d00001e02895b93b4df47275d4c290613",
              width: 300,
            },
            {
              height: 64,
              url:
                "https://i.scdn.co/image/ab67616d00004851895b93b4df47275d4c290613",
              width: 64,
            },
          ],
          name: "THE BOYZ 1ST ALBUM [REVEAL]",
          release_date: "2020-02-10",
          release_date_precision: "day",
          total_tracks: 9,
          type: "album",
          uri: "spotify:album:0mCPYdhQPWUQtQSp4CSxNh",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/0CmvFWTX9zmMNCUi6fHtAx",
            },
            href: "https://api.spotify.com/v1/artists/0CmvFWTX9zmMNCUi6fHtAx",
            id: "0CmvFWTX9zmMNCUi6fHtAx",
            name: "THE BOYZ",
            type: "artist",
            uri: "spotify:artist:0CmvFWTX9zmMNCUi6fHtAx",
          },
        ],
        disc_number: 1,
        duration_ms: 244720,
        explicit: false,
        external_ids: {
          isrc: "KRA382000179",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/3mcFhufGPQWi4VXlMJ9Hm4",
        },
        href: "https://api.spotify.com/v1/tracks/3mcFhufGPQWi4VXlMJ9Hm4",
        id: "3mcFhufGPQWi4VXlMJ9Hm4",
        is_local: false,
        is_playable: true,
        name: "Spring Snow",
        popularity: 45,
        preview_url:
          "https://p.scdn.co/mp3-preview/72229d301bfc547e9b89f619d4be9bedd0c7c48f?cid=b154195200be41338cce8394cd67c97a",
        track_number: 9,
        type: "track",
        uri: "spotify:track:3mcFhufGPQWi4VXlMJ9Hm4",
      },
    ],
    limit: 50,
    next:
      "https://api.spotify.com/v1/search?query=sno&type=track&market=TH&offset=50&limit=50",
    offset: 0,
    previous: null,
    total: 104624,
  },
};
