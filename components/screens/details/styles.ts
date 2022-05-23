import styled from "styled-components/native"

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #E5E5E5;
    padding-top: 44px;
    padding-left: 16px;
    padding-right: 16px
`;

export const Header = styled.View`
    flex-direction: row;
    margin-bottom: 36px;
`;

export const Logout = styled.View`
    height: 32px;
    width: 32px;
    borderColor: rgba(51, 51, 51, 0.30);
    border-width: 1px;
    border-radius: 1000px;
    align-itens: center;
    align-self: center;
    justify-content: center
`;

export const Img_Book = styled.Image`
    height: 351px;
    width: 240px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px
`;

export const Title = styled.Text`
    font-size: 28px;
    font-family: Heebo-Medium;
    color: #333333;
    text-align: center;
`;

export const Author = styled.Text`
    font-size: 12px;
    font-family: Heebo-Medium;
    color: #AB2680;
    text-align: center;
    margin-bottom: 32px
`;

export const Info = styled.Text`
    font-size: 12px;
    font-family: Heebo-Medium;
    color: #333333;
    text-align: left;
`;


