import styled from "styled-components/native"

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Background = styled.ImageBackground`
    flex: 1;
    justify-content: center;
    align-items: center;
    resize-mode: cover;
    align-self: stretch;
`;

export const Card = styled.View`
    width: 288px;
`;

export const Logo = styled.Image`
    height: 36px;
    width: 104.4px;
    margin-right: 16.6px;
`;

export const Header = styled.View`
    flex-direction: row;
    margin-bottom: 50px;
`;

export const Books = styled.Text`
    font-size: 28px;
    font-family: Heebo-Light;
    flex: 1;
`;

export const Input = styled.TextInput`
    width: 288px;
    height: 60px;
    border-radius: 4px;
    align-self: center;
    padding-left: 13px;
    background-color: rgba(0, 0, 0, 0.32);
    padding-top: 28px;
    color: #FFF;
    font-size: 16px;
    font-weight: 400;
    font-family: Heebo-Regular;
`;

export const Label = styled.Text`
    position: absolute;
    left: 13px;
    top: 8px;
    fontSize: 12px;
    color: #c2c2c2;
    font-weight: 400;
    font-family: Heebo-Regular;
`;

export const Button = styled.TouchableOpacity`
    position: absolute;
    right: 16px;
    top: 12px;
    width: 85px;
    height: 36px;
    border-radius: 44px;
    background-color: #FFF;
    justify-content: center;
`;

export const Text = styled.Text`
    font-size: 16px;
    color: #B22E6F;
    font-family: Heebo-Medium;
    text-align: center;
`;