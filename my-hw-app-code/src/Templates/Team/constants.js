import avatar_1 from "./img/man-1.jpg";
import avatar_2 from "./img/man-2.jpg";
import avatar_3 from "./img/man-3.jpg";
import fb from "./img/fb.svg";
import chat from "./img/chat.svg";
import dribble from "./img/dribble.svg";
import twitter from "./img/twitter.svg";

export const TEAM_DATA = {
  sectionTitle: {
    title: "Our Team Member",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    titleClass: "section-title",
  },
  url: "https://fakestoreapi.com/users",
  photos: [avatar_1, avatar_2, avatar_3],
  icons: [
    {
      link: "https://facebook.com/",
      icon: fb,
    },
    {
      link: "mailto:",
      icon: chat,
    },
    {
      link: "tel:",
      icon: dribble,
    },
    {
      link: "https://twitter.com/",
      icon: twitter,
    },
  ],
};
