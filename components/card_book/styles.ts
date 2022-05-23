import styled from "styled-components/native"

export const Card = styled.View`
    height: 160px;
    background: #FFF;
    border-radius: 4px;
    padding: 21px 16px;
    box-shadow: 10px 16px 24px #000;
    margin-bottom: 16px;
    flex-direction: row;
`;

export const Img_Book = styled.Image`
    height: 122px;
    width: 81px;
`;

export const Descr = styled.View`
    flex-direction: column;
    margin-left: 16px;
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-size: 14px;
    font-family: Heebo-Medium;
    color: #333333
`;

export const Author = styled.Text`
    font-size: 12px;
    font-family: Heebo-Medium;
    color: #AB2680
`;

export const Info = styled.Text`
    font-size: 12px;
    font-family: Heebo-Medium;
    color: #999999
`;