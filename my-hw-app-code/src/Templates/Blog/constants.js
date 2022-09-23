import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import calendar from "./img/calendar.svg";
import doc from "./img/doc.svg";

export const BLOG_DATA = {
  sectionTitle: {
    title: "Blog",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    titleClass: "section-title",
  },
  icons: {
    calendar,
    doc,
  },
  posts: [
    {
      img: img1,
      title: "SEO Quis Vestibulum",
      date: "14.07.2017",
      author: "Development",
      paragraph:
        "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    },
    {
      img: img2,
      title: "SEO Quis Vestibulum",
      date: "14.07.2017",
      author: "Development",
      paragraph:
        "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    },
    {
      img: img3,
      title: "SEO Quis Vestibulum",
      date: "14.07.2017",
      author: "Development",
      paragraph:
        "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    },
  ],
  btn: {
    btnLabel: "MORE VIEW",
    btnClass: "section-btn_l",
  },
};
