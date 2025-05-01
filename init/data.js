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
            username: "debug_diva",
            profilePic: "https://randomuser.me/api/portraits/women/33.jpg"
        },
        createdAt: Date.now()
    },
]


module.exports = { data: postData };