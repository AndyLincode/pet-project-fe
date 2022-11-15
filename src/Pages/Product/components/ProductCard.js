import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import styled from 'styled-components';
import ProductDataContext from '../../../contexts/ProductDataContext';
import SwitchButtonContext from '../../../contexts/SwitchButtonContext';

const LIST = styled.div`
  &::before {
    background-color: ${(props) =>
      props.$mode === 'dog' ? '#fff5de' : '#a4ced0'};
    border: 1px solid
      ${(props) => (props.$mode === 'dog' ? '#fff5de' : '#a4ced0')};
  }
`;

function ProductCard() {
  const { totalPages, page, rowProducts, usp } = useContext(ProductDataContext);
  const { mode } = useContext(SwitchButtonContext);
  const navigate = useNavigate();

  return (
    <>
      {rowProducts.map((e, i) => {
        return (
          <LIST $mode={mode} className="list-row" key={i}>
            {e.map((e2, i2) => {
              return (
                <div
                  className="pro-card"
                  key={e2.sid}
                  onClick={() => {
                    // console.log(e2.sid);
                    navigate(`product/detail/${e2.sid}`);
                  }}
                >
                  <Link to="">
                    <div className="img-wrap bg_bright_color">
                      <img src={`/images/test/${e2.img}`} alt="" />
                    </div>
                    <div className="pro-title">
                      <p>{e2.name}</p>
                      <p>
                        <s>${e2.price}</s> <span>${e2.member_price}</span>
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </LIST>
        );
      })}
      <Pagination totalPages={totalPages} page={page} usp={usp} />
    </>
  );
}

export default ProductCard;
