const usersData = [
    {
        username: "john_doe",
        fullName: "John Doe",
        email: "john@example.com",
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4XmIRgL6jGmn4R8ltzJdYQePOtyBpnkFYaw&s",
        bio: "Traveler | Photographer",
        followers: [],
        following: []
    },
    {
        username: "jane_smith",
        fullName: "Jane Smith",
        email: "jane@example.com",
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy0IIuRllTYxsx04lWlrip1RhiLLLCNfIHdQ&s",
        bio: "Coffee lover ☕ | Writer",
        followers: [],
        following: []
    }
];

const postsData = [
    {
        image: "https://media.istockphoto.com/id/1369111396/vector/freedom-concept-bird-escaping-from-the-cage.jpg?s=612x612&w=0&k=20&c=Z0hcA6Q_zOxZUcIpkxJ80EFz9rmW_JYTTEXQYVKdlFY=",
        caption: "Beautiful sunset at the beach 🌅",
        likes: 120,
        comments: ["Wow, amazing shot!", "Love the vibe!", "wonderfull"]
    },
    {
        image: "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=",
        caption: "Morning vibes with a hot cup of coffee ☕",
        likes: 87,
        comments: ["Need this every morning!"]
    }
];

module.exports = { postsData, usersData };