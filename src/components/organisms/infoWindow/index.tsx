import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { bubbleImg, copyIcon } from "src/assets";
import { restaurantTypes } from "src/types";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Star } from "src/components/atoms";

interface InfoWindowProps extends HTMLAttributes<HTMLDivElement> {
  restaurantInfo: restaurantTypes.restaurantProps;
}
const InfoWindow = ({
  id,
  className,
  style,
  restaurantInfo,
}: InfoWindowProps) => {
  return (
    <InfoWindowWrap id={id} className={className} style={style}>
      <TitleWrap>
        <p className="title">{restaurantInfo.name}</p>
        <Link href={`/map/${restaurantInfo.id}`}>
          <p className="show_more">더보기</p>
        </Link>
      </TitleWrap>
      <DetailWrap>
        <Image
          alt="restaurant_img"
          className="restaurant_img"
          src={restaurantInfo.imageUrl}
          width={86}
          height={86}
          style={{
            borderRadius: "43px",
            border: "4px solid var(--red_2)",
          }}
        />
        <div className="text_wrap">
          <span className="score">
            <p>별점:&nbsp;</p>
            <Star defaultValue={restaurantInfo.stars} readOnly />
          </span>
          <span className="price">
            가격: <b>{restaurantInfo.lunchPrice}원</b>
          </span>
        </div>
      </DetailWrap>
      <AddressWrap>
        <p className="address">{restaurantInfo.addr1 + restaurantInfo.addr2}</p>
        <CopyToClipboard
          text={`${restaurantInfo.addr1} ${restaurantInfo.addr2}`}
          // onCopy={}
        >
          <button className="copy" type="button">
            <img src={copyIcon} alt="copy_icon" />
            <p>복사하기</p>
          </button>
        </CopyToClipboard>
      </AddressWrap>
    </InfoWindowWrap>
  );
};

export default InfoWindow;

const InfoWindowWrap = styled.section`
  width: 100%;
  height: 100%;
  padding: 10px 11px;
  background: url(${bubbleImg}) center center / cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const TitleWrap = styled.div`
  height: 27px;
  position: relative;
  left: 18px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  .title {
    max-width: 150px;
    font-size: 20px;
    font-weight: 700;
    color: var(--white);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .show_more {
    margin-left: 11px;
    font-size: 8px;
    color: var(--white);
  }
`;

const DetailWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  .text_wrap {
    margin-left: 14px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 7px;
    .score {
      height: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      p {
        font-size: 15px;
        line-height: 15px;
        color: var(--white);
      }
    }
    .price {
      height: 20px;
      font-size: 15px;
      color: var(--white);
      b {
        font-weight: 700;
      }
    }
  }
`;

const AddressWrap = styled.div`
  margin-top: 10px;
  position: relative;
  left: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  .address {
    width: 176px;
    height: 16px;
    line-height: 16px;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    color: var(--white);
    letter-spacing: -1.3px;
  }

  .copy {
    all: unset;
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      width: 6px;
      height: 6px;
    }
    p {
      width: 30px;
      height: 11px;
      margin-left: 1px;
      line-height: 11px;
      font-size: 8px;
      color: var(--white);
      letter-spacing: -1.3px;
    }
  }
`;
