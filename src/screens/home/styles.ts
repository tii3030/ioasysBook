import styled from "styled-components/native"
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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

export const Container_Modals = styled.View`
    width: ${windowWidth}px;
    flex: 1;
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
    border-radius: 4px;
    background-color: 'rgba(0,0,0,0.5)';
`;

export const Modals = styled.View`
    width: 288px;
    height: 436px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    border-radius: 4px;
    background: #FFF;
    padding: 16px;
    z-index: 100000
`;

export const Header_Modal = styled.View`
    margin-bottom: 10px;
`;

export const Close = styled.View`
    height: 32px;
    width: 32px;
    borderColor: rgba(51, 51, 51, 0.30);
    border-width: 1px;
    border-radius: 1000px;
    align-itens: center;
    align-self: center;
    justify-content: center;
    margin-left: auto
`;

export const Img_Close = styled.Image`
    align-self: center;
    height: 12px;
    width: 12px;
`;

export const Button_Category = styled.View<{ selected?: boolean }>`
    height: 32px;
    border: 1px solid rgba(51, 51, 51, 0.3);
    border-radius: 44px;
    align-itens: center;
    align-self: center;
    justify-content: center;
    margin-bottom: 8px;
    margin-right: 8px;
    background: ${(props) => props.selected ? "#333333" : "#FFFFFF"};
`;

export const Text_Category = styled.Text<{ selected?: boolean }>`
    font-family: Heebo-Regular;
    font-style: normal;
    font-size: 12px;
    color: ${(props) => props.selected ? "#FFFFFF" : "#333333"};
    margin-left: 10px;
    margin-right: 10px;
`;

export const Filtrar = styled.TouchableOpacity`
    width: 91px;
    height: 36px;
    border-radius: 44px;
    justify-content: center;
    background: #FFFFFF;
    border: 1px solid #B22E6F;
    margin-left: auto;
    margin-right: auto
`;

export const Button_Container= styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 10px; 
    margin-bottom: 25px;
`;

export const Text_Select = styled.Text`
    font-family: Heebo-Bold;
    color: #333333;
    font-size: 12px
`;

export const Text_Filter = styled.Text`
    font-size: 16px;
    color: #B22E6F;
    font-family: 'Heebo-Bold';
    text-align: center;
`;