import React, { useState } from 'react';
import './MemberSing.css';
import axios from 'axios';
import styled from 'styled-components';
import Breadcrumb from '../../Components/breadcrumb/Breadcrumb';
import BreadcrumbRightArrowIcon from '../../Components/breadcrumb/BreadcrumbRightArrowIcon';
import { useNavigate } from 'react-router';
import { imgUrl } from '../../config';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const JoinPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BreadcrumbBox = styled.div`
  width: 1200px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 50px;
`;

const Memberroutes = [
  {
    to: '/',
    label: '首頁',
  },
  {
    to: '/member/memberShipAdd',
    label: '會員註冊',
  },
];

function MemberSing() {
  const navigate = useNavigate();
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const addUser = async () => {
    const fd = new FormData();

    fd.append('mail', mail);
    fd.append('password', checkPassword);

    console.log(fd);
    const { data } = await axios.post('http://localhost:6001/member/add', fd);
    console.log(data);
    if (data.success) {
      MySwal.fire({
        title: <strong>註冊成功</strong>,
        icon: 'success',
      });
      navigate('/member/memberLogIn');
    }
  };

  const addLine =async()=>{
    const {data} = await axios.get('')
  }
  const addgoogle = async () => {
    const { data } = await axios.get('http://localhost:6001/member/login');
    console.log(data);
    window.open(data);
  };

  return (
    <JoinPage>
      <BreadcrumbBox>
        <Breadcrumb
          routes={Memberroutes}
          separator={<BreadcrumbRightArrowIcon />}
        />
      </BreadcrumbBox>
      <div className="loginpage">
        <div className="logInenterA">
          <h2 className="text_main_dark_color2">使用者信箱</h2>
          <div className="logInenterC">
            <div className="logIninput">
              <input
                type="text"
                name="mail"
                style={{
                  border: 'none',
                  outline: 'none',
                  backgroundColor: 'transparent',
                }}
                value={mail}
                onChange={(e) => {
                  setMail(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="logInenterA">
          <h2 className="text_main_dark_color2">輸入密碼</h2>
          <div className="logInenterB">
            <div style={{ marginLeft: '15px' }}>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                style={{
                  border: 'none',
                  outline: 'none',
                  backgroundColor: 'transparent',
                }}
              />
            </div>
          </div>
        </div>
        <div className="logInenterA">
          <h2 className="text_main_dark_color2">確認密碼</h2>
          <div className="logInenterB" style={{ marginLeft: '15px' }}>
            <div style={{ marginLeft: '15px' }}>
              <input
                type="password"
                name="password"
                value={checkPassword}
                onChange={(e) => {
                  setCheckPassword(e.target.value);
                }}
                style={{
                  border: 'none',
                  outline: 'none',
                  backgroundColor: 'transparent',
                }}
              />
            </div>
          </div>
        </div>
        <button
          className="buttonLogIn"
          style={{
            backgroundColor: mail && password && checkPassword && '#f8b62d',
            color: mail && password && checkPassword && '#fff',
            fontWeight: '700',
          }}
          onClick={addUser}
        >
          註冊
        </button>
        <div
          style={{
            width: '50%',
            borderBottom: '1px solid #c9caca',
            margin: '30px 0px',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#fff',
              width: '40px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            OR
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '50%',
          }}
        >
          <div
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #727171',
              borderRadius: '10px',
              padding: '5px 10px',
              width: '48%',
            }}
            onClick={addgoogle}
          >
            <div
              style={{
                width: '25%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src={`${imgUrl}/images/google-icon.png`}
                alt=""
                style={{ width: '100%' }}
              />
            </div>
            <div
              style={{
                width: '75%',
                display: 'flex',
                justifyContent: 'center',
                fontSize: '12px',
              }}
            >
              Register With Google
            </div>
          </div>
          <div
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #727171',
              borderRadius: '10px',
              padding: '5px 10px',
              width: '48%',
            }}
          >
            <div
              style={{
                width: '25%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src={`${imgUrl}/images/line-icon.png`}
                alt=""
                style={{ width: '100%' }}
              />
            </div>
            <div
              style={{
                width: '75%',
                display: 'flex',
                justifyContent: 'center',
                fontSize: '12px',
              }}
            >
              Register With Line
            </div>
          </div>
        </div>
      </div>
    </JoinPage>
  );
}

export default MemberSing;
