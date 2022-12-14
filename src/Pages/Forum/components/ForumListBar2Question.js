import axios from 'axios';
import CollectLikeBar from './CollectLikeBar';
import { GET_ALL_ARTICLE } from '../my-config';
import { useEffect, useState } from 'react';
import './ForumListBar.css';
import { useNavigate } from 'react-router';

function ForumListBar2Question({ talkListData }) {
  const [articles, setArticles] = useState([
    {
      article_sid: 0,
      category: '',
      content: '',
      create_at: '',
      img: '',
      m_sid: 0,
      title: '',
      tag: [],
    },
  ]);
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  const getArticles = async () => {
    const res = await axios.get(`${GET_ALL_ARTICLE}`);

    const article = res.data.rows;

    const A = article.filter((e, i) => {
      const { category } = e;
      return category === 'B';
    });

    console.log(A);
    setArticles(A);
  };

  console.log(articles);

  useEffect(() => {
    getArticles();
  }, []);
  return (
    <>
      {articles.map((e, i) => {
        const { title, category } = e;
        return (
          <div
            className="forumBar"
            key={e.article_sid}
            style={{ cursor: 'pointer' }}
          >
            <div
              className="forumIconBar"
              onClick={() => {
                navigate(`/forum/detail?sid=${e.article_sid}`);
              }}
            >
              <i
                className="fa-light fa-message-question text_main_dark_color2"
                id="forum_big_Icon"
              ></i>
            </div>
            <div className="forumTitleBar">
              <p
                className="forumTitle"
                onClick={() => {
                  navigate(`/forum/detail?sid=${e.article_sid}`);
                }}
              >
                {e.title}
              </p>
              <p className="forumTag">
                {!!e.tag ? (
                  e.tag.map((e2, i2) => {
                    return e2.tag_name;
                  })
                ) : (
                  <></>
                )}
              </p>
            </div>
            {/* ??????????????? */}
            <div className="forum_list_like_bar">
              <CollectLikeBar />
            </div>
            <div className="forumUserBar">{e.user}</div>
          </div>
        );
      })}
    </>
  );
}

export default ForumListBar2Question;
