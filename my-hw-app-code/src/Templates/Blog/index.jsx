import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonComponent from "../../Components/ButtonComponent";
import SectionTitle from "../../Components/SectionTitle";
import { fetchBlogsMiddleWare } from "../../Store/MiddleWare";

import { BLOG_DATA } from "./constants";

import "./styles.scss";

const Blog = () => {
  const fetchBlogs = fetchBlogsMiddleWare();
  const dispatch = useDispatch();

  const blogs = useSelector((state) => state.fetchBlogsReducer.blogs);

  return (
    <section className="blog-section pt-5">
      <div className="blog-section__container">
        <SectionTitle
          title={BLOG_DATA.sectionTitle.title}
          subtitle={BLOG_DATA.sectionTitle.subtitle}
          titleClass={BLOG_DATA.sectionTitle.titleClass}
        />
        <div className="row pt-5 pb-5">
          {BLOG_DATA.posts &&
            BLOG_DATA.posts.map(
              ({ img, title, date, author, paragraph }, i) => (
                <div
                  key={i}
                  className={
                    i % 2 === 0
                      ? "col-12 row d-flex flex-row"
                      : "col-12 row d-flex flex-row-reverse"
                  }
                >
                  <img src={img} alt="img" className="col-12 col-sm-6 p-0" />
                  <div className="col-12 col-sm-6 p-5 d-flex flex-column justify-content-center blog-section__post">
                    <h4 className="col-12">{title}</h4>
                    <div className="col-12 row pt-5 pb-5">
                      <div className="col-6">
                        <img
                          src={BLOG_DATA.icons.calendar}
                          alt="calendar"
                          className="col-1"
                        />
                        <span className="col-8 ps-3">{date}</span>
                      </div>
                      <div className="col-6">
                        <img
                          src={BLOG_DATA.icons.doc}
                          alt="doc"
                          className="col-1"
                        />
                        <span className="col-8 ps-3">{author}</span>
                      </div>
                    </div>
                    <p className="col-12">{paragraph}</p>
                  </div>
                </div>
              )
            )}
          {!!blogs.length &&
            blogs.map(({ id, image, title, description }) => (
              <div
                key={id}
                className={
                  id % 2 === 0
                    ? "col-12 row d-flex flex-row"
                    : "col-12 row d-flex flex-row-reverse"
                }
              >
                <img src={image} alt="img" className="col-12 col-sm-6 p-0" />
                <div className="col-12 col-sm-6 p-5 d-flex flex-column justify-content-center blog-section__post">
                  <h4 className="col-12">{title}</h4>
                  <div className="col-12 row pt-5 pb-5">
                    <div className="col-6">
                      <img
                        src={BLOG_DATA.icons.calendar}
                        alt="calendar"
                        className="col-1"
                      />
                      <span className="col-8 ps-3">14.07.2017</span>
                    </div>
                    <div className="col-6">
                      <img
                        src={BLOG_DATA.icons.doc}
                        alt="doc"
                        className="col-1"
                      />
                      <span className="col-8 ps-3">Development</span>
                    </div>
                  </div>
                  <p className="col-12">{description}</p>
                </div>
              </div>
            ))}
        </div>
        {!blogs.length && (
          <ButtonComponent
            btnLabel={BLOG_DATA.btn.btnLabel}
            btnClass={BLOG_DATA.btn.btnClass}
            onClickFunc={() => {
              fetchBlogs(dispatch);
            }}
          />
        )}
      </div>
    </section>
  );
};

export default Blog;
