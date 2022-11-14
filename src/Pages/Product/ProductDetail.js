import ProductSidebar from './components/ProductSidebar';

function ProductDetail() {
  return (
    <>
      <main>
        <ProductSidebar />

        <section className="right">
          {/* <!-- search-bar & pro-loved --> */}
          <div className="filter-s-p">
            <div className="search-bar">
              <input type="search" name="search" id="search" />
              <i
                className="fa-solid fa-magnifying-glass bg_main_light_color1"
                id="pro-search"
              ></i>
            </div>
            <div className="pro-loved-list">
              <a href="#">
                <i className="fa-regular fa-heart"></i>
                <p>我的最愛</p>
              </a>
            </div>
          </div>

          {/* <!-- products info --> */}
          <div className="product-info-div">
            <div className="img-wrap">
              <img src="/images/test/can1.jpg" alt="" />
            </div>
            <div className="product-info-text">
              {/* <!-- breadcrumb --> */}
              <nav className="nav-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">狗勾</a>
                  </li>
                  <li className="breadcrumb-item">飼料</li>
                </ol>
              </nav>

              <div className="product-title-wrap">
                <h2>濃郁雞白罐頭</h2>
              </div>

              <div className="product-price-wrap">
                <p>
                  <span>$980</span>
                  <s>$1,280</s>{' '}
                </p>
              </div>

              <div className="product-info-introduce">
                <p className="text_main_light_color2">
                  如果別人做得到，那我也可以做到。透過逆向歸納，得以用最佳的策略去分析罐頭。儘管如此，別人往往卻不這麼想。李大釗說過一句富有哲理的話，人類的生活，必須時時刻刻拿最大的努力，向最高的理想擴張傳衍，流轉無窮，把那陳舊的組織、腐滯的機能一一的掃蕩摧清，別開一種新局面。這段話讓我的心境提高了一個層次。面對如此難題，我們必須設想周全。我們要從本質思考，從根本解決問題。
                </p>
              </div>

              <div className="product-q-loved">
                <div className="product-quanity">
                  <p>數量</p>
                  <i className="fa-solid fa-minus q-reduce bg_main_light_color2"></i>
                  <p className="q-num">1</p>
                  <i className="fa-solid fa-plus q-add bg_main_light_color2"></i>
                </div>
                <div className="add-loved">
                  <p>加入收藏</p>{' '}
                  <i className="fa-regular fa-heart add-love-icon"></i>
                  <i className="fa-solid fa-heart add-love-icon hide"></i>
                </div>
              </div>

              <div className="sales-info">
                <ul>
                  <li>
                    <p>全店，消費滿$2000即享「宅配」免運費</p>
                  </li>
                  <li>
                    <p>全店，消費滿$2000即享「超取」免運費</p>
                  </li>
                </ul>
              </div>

              <div className="buy-button-group">
                <button className="cart-btn bg_main_light_color1 ">
                  加入購物車
                </button>
                <button className="buy-btn border_main_light_color1">
                  立即購買
                </button>
              </div>
            </div>
          </div>

          {/* <!-- score div --> */}
          <div className="score-div">
            <div className="score-title-wrap">
              <h2>綜合分數</h2>
              <h2>買家評論</h2>
            </div>
            <div className="score-content">
              <div className="star-score-total">
                <div className="score">
                  <h1>4.8</h1>
                </div>
                <div className="stars">
                  <i className="fa-solid fa-star "></i>
                  <i className="fa-solid fa-star "></i>
                  <i className="fa-solid fa-star "></i>
                  <i className="fa-solid fa-star "></i>
                  <i className="fa-solid fa-star-half-stroke "></i>
                  <div className="write-reply">
                    <i className="fa-light fa-message-pen"></i>
                    <p>
                      {/* <!-- 彈跳視窗 --> */}
                      撰寫評論
                    </p>
                  </div>
                </div>
                <div className="stars-progress">
                  <div className="progress-item">
                    <label htmlFor="stars">5</label>
                    <progress id="stars" value="95" max="100"></progress>
                  </div>
                  <div className="progress-item">
                    <label htmlFor="stars">4</label>
                    <progress id="stars" value="85" max="100"></progress>
                  </div>
                  <div className="progress-item">
                    <label htmlFor="stars">3</label>
                    <progress id="stars" value="40" max="100"></progress>
                  </div>
                  <div className="progress-item">
                    <label htmlFor="stars">2</label>
                    <progress id="stars" value="5" max="100"></progress>
                  </div>
                  <div className="progress-item">
                    <label htmlFor="stars">1</label>
                    <progress id="stars" value="0" max="100"></progress>
                  </div>
                </div>
              </div>
              <div className="score-reply">
                <div className="reply-card">
                  <div className="user-img-wrap">
                    <img src="./images/person_2.jpeg" alt="" />
                  </div>
                  {/* <!-- 星星數 + 文字內容 --> */}
                  <div className="star-reply">
                    <div className="star-score">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="reply-text">
                      <p>
                        聽朋友說才來購買，雖然還沒給我家貓咪吃過，但我想我家貓主應該會很喜歡！
                      </p>
                    </div>
                  </div>
                </div>
                <div className="reply-card">
                  <div className="user-img-wrap">
                    <img src="./images/person_6.jpeg" alt="" />
                  </div>
                  {/* <!-- 星星數 + 文字內容 --> */}
                  <div className="star-reply">
                    <div className="star-score">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="reply-text">
                      <p>
                        被包裝吸引決定買買看，沒想到價格實惠，我家Ｑ醬超愛吃！從沒見過Ｑ醬把盤子舔這麼乾淨過。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="reply-card">
                  <div className="user-img-wrap">
                    <img src="./images/person_3.jpeg" alt="" />
                  </div>
                  {/* <!-- 星星數 + 文字內容 --> */}
                  <div className="star-reply">
                    <div className="star-score">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <div className="reply-text">
                      <p>
                        這次是第三次回購，可惜特價的機會不多，每次要都趁著特價時買齊半年的份量，希望特價的檔次可以頻繁一點。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <!-- history sec --> */}
      <section className="history">
        <div className="history-side-div">
          <div className="div-title-seen">
            <h2>最近看過</h2>
          </div>
          <div className="div-product-seen">
            <div className="product-img-wrap">
              <a href="">
                <img src="/images/test/can1.jpg" alt="" />
              </a>
            </div>
            <div className="product-img-wrap">
              <a href="">
                <img src="/images/test/can1.jpg" alt="" />
              </a>
            </div>
            <div className="product-img-wrap">
              <a href="">
                <img src="/images/test/can1.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bottom-pro-list">
        <div className="bottom-list-pro-title">
          <h2>相關商品</h2>
        </div>
        <div className="bottom-pro-ls-row">
          <div className="arrow arrow-left">
            <i className="fa-light fa-angle-left"></i>
          </div>
          <div className="bottom-pro-line-card">
            <div className="pro-line-ls-img-wrap">
              <img src="/images/test/can1.jpg" alt="" />
            </div>
            <div className="pro-line-ls-name">
              <p>寵物商品</p>
            </div>
          </div>
          <div className="bottom-pro-line-card">
            <div className="pro-line-ls-img-wrap">
              <img src="/images/test/can3.jpg" alt="" />
            </div>
            <div className="pro-line-ls-name">
              <p>寵物商品</p>
            </div>
          </div>
          <div className="bottom-pro-line-card">
            <div className="pro-line-ls-img-wrap">
              <img src="/images/test/can1.jpg" alt="" />
            </div>
            <div className="pro-line-ls-name">
              <p>寵物商品</p>
            </div>
          </div>
          <div className="bottom-pro-line-card">
            <div className="pro-line-ls-img-wrap">
              <img src="/images/test/can4.jpg" alt="" />
            </div>
            <div className="pro-line-ls-name">
              <p>寵物商品</p>
            </div>
          </div>
          <div className="bottom-pro-line-card">
            <div className="pro-line-ls-img-wrap">
              <img src="/images/test/cat1-can7.jpg" alt="" />
            </div>
            <div className="pro-line-ls-name">
              <p>寵物商品</p>
            </div>
          </div>
          <div className="arrow arrow-right">
            <i className="fa-light fa-angle-right"></i>
          </div>
        </div>
      </section>

      <div className="go-to-top">
        <svg
          width="333"
          height="460"
          viewBox="0 0 333 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 64H300.5C318.2 64 332.5 49.7 332.5 32C332.5 14.3 318.2 0 300.5 0H32C14.3 0 0 14.3 0 32C0 49.7 14.3 64 32 64ZM48.7 212.5C36.2 225 36.2 245.3 48.7 257.8C61.2 270.3 81.5 270.3 94 257.8L135.3 216.4V321.75V427.1C135.3 444.8 149.6 459.1 167.3 459.1C185 459.1 199.3 444.8 199.3 427.1V216.4L240.7 257.8C253.2 270.3 273.5 270.3 286 257.8C298.5 245.3 298.5 225 286 212.5L190 116.5C177.5 104 157.2 104 144.7 116.5L48.7 212.5Z"
            fill="#fff"
          />
        </svg>
      </div>
    </>
  );
}

export default ProductDetail;