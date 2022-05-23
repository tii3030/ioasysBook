import styled from "styled-components/native"

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #E5E5E5;
    padding-top: 42px;
    padding-left: 16px;
    padding-right: 16px
`;

export const Logo = styled.Image`
    height: 36px;
    width: 104.4px;
    margin-right: 16.6px;
`;

export const Header = styled.View`
    flex-direction: row;
    margin-bottom: 36px;
`;

export const Books = styled.Text`
    font-size: 28px;
    font-family: Heebo-Light;
    flex: 1;
    color: #333333
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

export const Container_Search = styled.View`
    flex-direction: row;
    margin-bottom: 32px;
`;

export const Input_Search = styled.TextInput`
    width: 246px;
    height: 48px;
    padding-left: 13px;
    background-color: #E5E5E5;
    border: 1px solid rgba(51, 51, 51, 0.2);
    border-radius: 2px;
    color: #FFF;
    font-size: 16px;
    font-weight: 400;
    font-family: Heebo-Regular;
    color: rgba(99, 99, 99, 0.70)
`;

export const Button_Search = styled.TouchableOpacity`
    justify-content: center;
    position: absolute;
    right: 20px;
    top: 0;
    bottom: 0;
`;

export const Img_Search = styled.Image`
    align-self: center;
    height: 16px;
    width: 16px;
`;

export const Button_Preferences = styled.TouchableOpacity`
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0
`;

export const Img_Preferences = styled.Image`
    align-self: center;
    height: 20px;
    width: 20px;
`;