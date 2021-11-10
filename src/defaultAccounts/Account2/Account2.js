import avatar from "./assets/images/avatar2.jpg";
import coverPhoto from "./assets/images/coverPhoto7.jpg";
import post1 from "./assets/images/post1.jpg";
import post2 from "./assets/images/post2.jpg";
import post3 from "./assets/images/post3.jpg";
import { ac3PostsId } from "../Account3/Account3";

export const ac2PostsId = {
	id1: "2FBgSbLhh94B",
	id2: "2vSgbLhLn21",
	id3: "2vegVLhAslP",
};

export const account2 = {
	id: 2,
	profile: {
		name: "Marie",
		surname: "Bennett",
		phone_or_email: "MarieBennett@gmail.com",
		password: "12345678",
		coverPhoto: coverPhoto,
		avatar: avatar,
		status: "Do not confuse laziness with rest!",
		aboutMe: "Currently living in Colorado. Lover of art, languages and travelling.",
		following: [{ id: 1 }, { id: 3 }],
		posts: [
			{
				comments: [],
				dateCreated: "01.01.01",
				description: `We need to be able to rest, especially from your thoughts.`,
				id: ac2PostsId.id1,
				likes: [],
				photo: post1,
			},
			{
				comments: [],
				dateCreated: "01.01.01",
				description: `A friend is the best you can have and the best you can be.`,
				id: ac2PostsId.id2,
				likes: [],
				photo: post2,
			},
			{
				comments: [],
				dateCreated: "01.01.01",
				description: `Don't want to go to work in the morning? Open Forbes magazine and find your last name there. Didn't find it? Then go to work!`,
				id: ac2PostsId.id3,
				likes: [],
				photo: post3,
			},
		],
		savedPosts: [ac3PostsId.id3],
	},
};
