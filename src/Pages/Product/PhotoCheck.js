import { useContext } from 'react';
import styled from 'styled-components';
import { Link, useOutletContext, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import CartInfoContext from './contexts/CartInfoContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const CheckForm = styled.div`
  font-family: art;
  .reserve_form {
    .dayTime {
      display: flex;
      align-items: center;
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #dcdddd;
      }
      h3 {
        font-family: art;
        color: #727171;
        margin-right: 30px;
        font-weight: 500;
      }
    }
    .reserve-time {
      h2 {
        font-size: 18px;
        font-family: art;
        font-weight: bold;
        margin: 50px 30px;
      }
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #dcdddd;
      }
    }
  }
  .member-data {
    div {
      margin: 30px 0;
    }
    h2 {
      font-size: 18px;
      font-family: art;
      font-weight: bold;
      margin: 50px 30px;
    }
    .name {
      display: flex;
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #dcdddd;
      }
      h3 {
        margin-left: 30px;
        font-weight: 500;
        color: #727171;
      }
    }
    .email {
      display: flex;
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #dcdddd;
      }
      h3 {
        margin-left: 30px;
        font-weight: 500;
        color: #727171;
      }
    }
    .mobile {
      display: flex;
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #dcdddd;
      }
      h3 {
        margin-left: 30px;
        font-weight: 500;
        color: #727171;
      }
    }
    .address {
      display: flex;
      align-items: center;
      justify-content: start;
      height: 30px;
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #dcdddd;
      }
      h3 {
        margin-left: 30px;
        font-weight: 500;
        color: #727171;
      }
    }
  }
  .pet-data {
    div {
      margin: 30px 0;
    }
    h2 {
      font-size: 18px;
      font-family: art;
      font-weight: bold;
      margin: 50px 30px;
    }
    .pet-variety {
      display: flex;
      align-items: center;
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #dcdddd;
      }
      h3 {
        margin-left: 30px;
        font-weight: 500;
        color: #727171;
      }
    }
    .pet-name {
      display: flex;
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #dcdddd;
      }
      h3 {
        margin-left: 30px;
        font-weight: 500;
        color: #727171;
      }
    }
    .pet-age {
      display: flex;
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #dcdddd;
      }
      h3 {
        margin-left: 30px;
        font-weight: 500;
        color: #727171;
      }
    }
    .pet-gender {
      display: flex;
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #dcdddd;
      }
      h3 {
        margin-left: 30px;
        font-weight: 500;
        color: #727171;
      }
    }
    .pet-control {
      display: flex;
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #dcdddd;
      }
      h3 {
        font-weight: 500;
        color: #727171;
      }
    }
    .pet-pid {
      display: flex;
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #dcdddd;
      }
      h3 {
        font-weight: 500;
        color: #727171;
      }
    }
    .pet-symptom {
      display: flex;
      align-items: center;
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #dcdddd;
      }
      h3 {
        font-weight: 500;
        color: #727171;
      }
    }
    .pet-image {
      display: flex;
      align-items: center;
      label {
        font-weight: bold;
        margin: 0 80px 0 30px;
        font-family: art;
        color: #dcdddd;
      }
      .img-file-wrap {
        width: 150px;
        height: 120px;
        border: 1px dashed #dcdddd;
        margin: 0 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        overflow: hidden;
        p,
        i {
          color: #dcdddd;
          margin-bottom: 10px;
        }

        p {
          font-weight: bold;
        }
      }
    }
  }
`;

function PhotoCheck() {
  const navigate = useNavigate();
  const [
    memberId,
    setMemberId,
    petId,
    setPetId,
    photographerDetail,
    setPhotographerDetail,
    startDate,
    setStartDate,
    time,
    setTime,
    memberName,
    setMemberName,
    memberEmail,
    setMemberEmail,
    memberMobile,
    setMemberMobile,
    city,
    setCity,
    area,
    setArea,
    address,
    setAddress,
    variety,
    setVariety,
    petName,
    setPetName,
    petAge,
    setPetAge,
    gender,
    setGender,
    control,
    setControl,
    petPid,
    setPetPid,
    textArea,
    setTextArea,
    preview,
    setPreview,
  ] = useOutletContext();
  const { cartItem, setCartItem } = useContext(CartInfoContext);
  const final = { ...photographerDetail };
  // console.log(final);
  const photographerId = final[0].sid;
  const photographerName = final[0].name;
  const photographerImg = final[0].image;
  const photographerPrice = +final[0].price;
  const date = dayjs(startDate).format('YYYY/MM/DD');

  console.log({ memberId, petId, textArea, date, time, photographerId });

  let datatime = '';

  if (time === 1) {
    datatime = '??????';
  } else if (time === 2) {
    datatime = '??????';
  }

  const photoCart = { sid: 0, name: '', img: '', date: '', time: '', price: 0 };
  // //????????????
  const handleSubmission = async (e) => {
    e.preventDefault();
    const newPhotoCart = {
      ...photoCart,
      sid: photographerId,
      name: photographerName,
      img: photographerImg,
      date: date,
      time: time,
      price: +photographerPrice,
    };
    // console.log(newPhotoCart);
    if (cartItem.photoCart.length) {
      const photoItem = await {
        ...cartItem,
        photoCart: [[{ ...newPhotoCart }]],
        totalItem: cartItem.totalItem,
        photo_totalPrice: 0 + photographerPrice,
        totalAmount: cartItem.totalAmount,
      };
      localStorage.setItem('cartItem', JSON.stringify({ ...photoItem }));
      setCartItem(photoItem);
    } else {
      const photoItem = await {
        ...cartItem,
        photoCart: [{ ...newPhotoCart }],
        totalItem: cartItem.totalItem + 1,
        photo_totalPrice: 0 + photographerPrice,
        totalAmount: cartItem.totalAmount + 1,
      };
      localStorage.setItem('cartItem', JSON.stringify({ ...photoItem }));
      setCartItem(photoItem);
    }
    MySwal.fire({
      title: <strong>??????????????????</strong>,
      text: '????????????PetBan!',
      icon: 'success',
    });
    navigate('/product');
    // setCartItem();
    // localStorage.setItem('cartItem', JSON.stringify({}));
    // await fd.append('name', photographerName);
    // await fd.append('image', photographerImg);
    // await fd.append('date', date);
    // await fd.append('time', time);
    // await fd.append('price', photographerPrice);
    // await console.log(fd);

    // const addPhotoCart = localStorage.setItem('cartItem');
  };

  return (
    <CheckForm>
      <form
        id="reservation"
        name="reservation"
        action=""
        className="reserve_form"
      >
        {/* <!-- ???????????? --> */}
        <div className="reserve-time">
          <h2 className="text_main_dark_color2">????????????</h2>
          <div className="dayTime">
            <label>????????????</label>
            <h3>{date}</h3>
            <h3>{datatime}</h3>
          </div>
        </div>

        {/* <!-- ???????????? --> */}
        <div className="member-data">
          <h2 className="text_main_dark_color2">????????????</h2>
          <div className="name">
            <label htmlFor="name">??????</label>
            <h3>{memberName}</h3>
          </div>
          <div className="email">
            <label htmlFor="email">??????</label>
            <h3>{memberEmail}</h3>
          </div>
          <div className="mobile">
            <label htmlFor="mobile">??????</label>
            <h3>{memberMobile}</h3>
          </div>
        </div>

        {/* <!-- ???????????? --> */}
        <div className="pet-data">
          <h2 className="text_main_dark_color2">????????????</h2>
          <div className="pet-variety">
            {/* <!-- ???????????? --> */}
            <label htmlFor="variety">??????</label>
            <h3>{variety}</h3>
          </div>
          {/* <!-- ???????????? --> */}
          <div className="pet-name">
            <label htmlFor="pet-name">??????</label>
            <h3>{petName}</h3>
          </div>
          {/* <!-- ???????????? --> */}
          <div className="pet-age">
            <label htmlFor="pet-age">??????</label>
            <h3>{petAge}???</h3>
          </div>
          {/* <!-- ???????????? --> */}
          <div className="pet-gender">
            <label htmlFor="gender">??????</label>
            <h3>{gender}</h3>
          </div>
          <div className="pet-image">
            <label htmlFor="pet-image">????????????</label>
            <div className="img-file-wrap">
              <div>
                <img src={preview} alt="" style={{ width: '100%' }} />
              </div>
            </div>
          </div>
        </div>
        <Link
          to={`/product/photographers/reserve?sid=${photographerId}`}
          style={{ marginLeft: '200px' }}
        >
          <button
            className=""
            style={{
              borderRadius: '20px',
              padding: '10px 20px',
              border: 'none',
              fontFamily: 'art',
              color: '#000000',
              fontSize: '16px',
              backgroundColor: 'transparent',
            }}
          >
            <i
              className="fa-light fa-arrow-rotate-left"
              style={{
                fontSize: '20px',
                textAlign: 'center',
                lineHeight: '20px',
                marginRight: '5px',
              }}
            ></i>
            ????????????
          </button>
        </Link>
        <Link to="/clinic/check" style={{ marginLeft: '200px' }}>
          <button
            className="bg_main_light_color1"
            style={{
              borderRadius: '20px',
              padding: '10px 20px',
              border: 'none',
              fontFamily: 'art',
              color: '#fff',
              fontSize: '16px',
              width: '150px',
            }}
            onClick={handleSubmission}
          >
            ????????????
          </button>
        </Link>
      </form>
    </CheckForm>
  );
}

export default PhotoCheck;
