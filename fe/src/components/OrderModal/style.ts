import styled from 'styled-components';


export const Overlay = styled.div`
  left: 0px;
  top: 0px;
  background: rgba(0,0,0, 0.8);
  backdrop-filter: blur(4.5px) ;
  width: 100%;
  height: 100%;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

`;


export const ModalBody = styled.div`
  background: #fff;
  width: 480px;
  border-radius: 8px;
  padding: 32px;

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong{
      font-size: 24px;
    }

    button{
     background: transparent;
      border: 0;
      line-height: 0;
    }
  }

  .status-container{
    margin-top: 32px;
    small{
      font-size: 14px;
      opacity: 0.8;
    }

    div{
      display: flex;
      margin-top: 8px;
      align-items: center;
      gap: 8px;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong{
    font-weight: 500;
    opacity: 0.8;
    font-size:  14px;
  }

  .order-items{
    margin-top: 16px;

    .item{
      display: flex;

      & + .item{
        margin-top: 16px;
      }
      img{
        border-radius: 6px;
      }

      .quantity{
        font-size: 14px;
        color: #666;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details{
        margin-left: 4px;
        strong{
          display: block;
          margin-bottom: 4px;
        }

        span{
          color: #666;
          font-size: 14px;
        }
      }
    }
  }

  .total{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
    span{
      font-weight: 500;
      font-size: 14px;
      opacity: 0.8;
    }
  }
`;


export const Actions = styled.footer`

  button:disabled{
    opacity: 0.5;
    cursor: not-allowed;
  }
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  .primary{
    background: #333333;
    border-radius: 48px;
    border: 0;
    color: #fff;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px
  }

  .secondary{
    background: transparent;
    border: 0;
    padding: 14px 24px;
    color: #d73035;
    font-weight: bold;
    margin-top: 12px;
  }

`;
