import Breadcrumb from '../../Components/breadcrumb/Breadcrumb';
import BreadcrumbRightArrowIcon from '../../Components/breadcrumb/BreadcrumbRightArrowIcon';
import styled from 'styled-components';
import './Member.css';
import { imgUrl } from '../../config';

function MemberLevel() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '80%',
          marginTop: '80px',
          fontSize: '20px',
        }}
      >
        <h2 className="text_main_dark_color2" style={{ marginBottom: '20px' }}>
          會員等級介紹
        </h2>
        <div className="card-degree">
          <div className="degreeC">
            <div className="degreeWrap">
              <div className="degree d1">
                <div className="degreeImg">
                  <img src={`${imgUrl}/images/MemberCard_1.png`} alt="" />
                </div>
                <div className="degree-card">
                  <h2 className="text_main_dark_color2">初階學士</h2>
                  <p style={{ color: '#727171', fontWeight: '500' }}>會員卡</p>
                </div>
              </div>
              <div className="degree d2">
                <div className="degreeImg">
                  <img src={`${imgUrl}/images/MemberCard_2.png`} alt="" />
                </div>
                <div className="degree-card">
                  <h2 className="text_main_dark_color2">中階碩士</h2>
                  <p style={{ color: '#727171' }}>會員卡</p>
                </div>
              </div>
              <div className="degree d3">
                <div className="degreeImg">
                  <img src={`${imgUrl}/images/MemberCard_3.png`} alt="" />
                </div>
                <div className="degree-card">
                  <h2 className="text_main_dark_color2">高階博士</h2>
                  <p style={{ color: '#727171' }}>會員卡</p>
                </div>
              </div>
            </div>
            <div className="degree-txt">
              <div className="degreeIcon">
                <i
                  className="fa-solid fa-caret-right right text_main_dark_color2"
                  style={{ marginRight: '5px' }}
                ></i>
                <span className="text_main_dark_color2">
                  每月第一筆訂單，不限金額，即可享免運優惠。
                </span>
              </div>
              <div className="degreeIcon">
                <i
                  className="fa-solid fa-caret-right text_main_dark_color2"
                  style={{ marginRight: '5px' }}
                ></i>
                <span className="text_main_dark_color2">
                  單筆凡超過2,500元可享5%折扣
                </span>
              </div>
            </div>
          </div>
          <div className="ship-bottom">
            <div className="ship">
              <div>
                <i className="fa-solid fa-hyphen text_main_dark_color2"></i>
                <h2 style={{ fontSize: '24px' }} className='text_main_dark_color2'>解鎖進階等級</h2>
                <i className="fa-solid fa-hyphen text_main_dark_color2"></i>
              </div>

              <p style={{ fontSize: '16px' }} className='text_main_dark_color1'>目前級別：初階學士</p>
            </div>
            <div style={{width:'80%',display:'flex',justifyContent:'space-between'}}>
              <div className="inputRange">
                <div className="input-text">
                  <p style={{fontSize:'18px',marginRight:'20px'}}>累積訂單</p>
                  <span style={{color:'#f00',fontSize:'24px',lineHeight:'24px'}}>4</span>
                  <span style={{fontSize:'18px'}}>/10</span>
                </div>
                <div className="range">
                  <div></div>
                </div>
              </div>
              <div className="inputRange">
                <div className="input-text">
                  <p style={{fontSize:'18px',marginRight:'20px'}}>累積消費</p>
                  <span style={{color:'#f00',fontSize:'24px'}}>＄5,080</span>
                  <span style={{fontSize:'18px'}}>/8,000</span>
                </div>

                <div className="range">
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberLevel;