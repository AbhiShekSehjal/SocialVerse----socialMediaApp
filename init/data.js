const postData = [
    {
        image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg",
        caption: "Code. Coffee. Repeat.",
        likes: 871,
        comments: [
            {
                user: "abhi",
                text: "Wow!"
            },
            {
                user: "komal",
                text: "nice!"
            },
            {
                user: "harsh",
                text: "great!"
            },
            {
                user: "love",
                text: "wonderful!"
            },
        ],
        user: {
            username: "Abhishek",
            profilePic: "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg",
            bio: "Living my best life 🚀, Adventure seeker, Music enthusiast 🎶, or Dream big, work hard, stay humble.",
            followers: 540,
            following: 12,
            userAllPost: [
                {
                    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg",
                    caption: "Hello friends",
                    likes: 454,
                },
                {
                    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg",
                    caption: "Hello friends",
                    likes: 454,
                },
                {
                    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg",
                    caption: "Hello friends",
                    likes: 454,
                },
                {
                    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg",
                    caption: "Hello friends",
                    likes: 454,
                },
            ]
        },
    },
]


module.exports = { data: postData };