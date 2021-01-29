import React ,{ useState }from 'react'
import Styled from 'styled-components'
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Page from '../Page';
import {Helmet} from "react-helmet";


function Top() {
    const [isClick,setClick] = useState(false);
    
    const handleTick = () => {
        setClick(!isClick)
    }
    return (
        <>
            <Helmet>
                <title>login</title>
            </Helmet>
            <DivOne>
            <Div>
                <Span ><Image src={require('../../assets/images/lock.png').default} alt="Image"/></Span>
            </Div>
            <Heading>Sign in</Heading>
            <Div>
                <Form>
                    <Input type="email" placeholder="Email Address *" required/>
                    <Input type="password" placeholder="Password *" required/>
                    <Division>
                        <SpanBoxPlan onClick={()=> handleTick()} >{isClick && <ImageSpan src={require('../../assets/images/tick.png').default }/>}
                        </SpanBoxPlan>
                        <label>Remember me</label>
                    </Division>
                    <InputButton>sign in</InputButton>
                    <ForgetDiv>
                        <Router>
                            <ForgetPath to='/forget'>
                                <Path>Forget passsword?</Path>
                            </ForgetPath>
                            {/* <Switch>
                                <Route exact path='/forget' component={Forget} />
                            </Switch> */}
                        </Router>
                        <Path >Don't have an account? Sign Up</Path>
                        <Path></Path>
                    </ForgetDiv>
                </Form>
            </Div>
            <Last>
                <P>Copyright &copy; Your Website 2021.</P>
            </Last>
            <LengthAll>
                <Length />
            </LengthAll>
            <Page name='login'/> 
            </DivOne>
        </>
    )
}
export default Top

const DivOne = Styled.div`
    width: 30%;
    margin: 80px auto 0;
`;
const Div = Styled.div`
    display: flex;
    justify-content: center;
`
const Span = Styled.span`
    background: #dc004e;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-bottom: -15px;
`
const Image = Styled.img`
    filter: invert(1);
    width: 70%;
`
const Heading = Styled.h3`
    text-align: center;
    font-size: 24px;
    font-weight: 400;
`
const Form = Styled.form`
    display:flex;
    flex-direction: column;
    width: 70%;
`
const Input = Styled.input`
    display:flex;
    flex-direction: column;
    margin-bottom: 25px;
    width: 90%;
    padding: 20px;
    font-size: 16px;
    border: 1px solid rgba(196, 196, 196, 0.8);
    border-radius: 4px;
    &:hover {
        border: 1px solid #000;
    }
    &:focus {
        border:2px solid #0075ce;
    }
`
const Division = Styled.div`
    display: flex;
    align-items: center;
`
const SpanBoxPlan = Styled.span`
    height: 20px;
    width: 20px;
    border: 1px solid #c1c1c1;
    margin-right: 15px;
    border-radius: 4px;
`
const ImageSpan = Styled.img`
    height: 100%;
    width: 100%;  
    background: #000;  
`
const InputButton = Styled.button`
    background: #0075ce;
    border: 1px solid #0075ce;
    border-radius: 4px;
    margin-top: 30px;
    height: 40px;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
`
const ForgetDiv = Styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
const ForgetPath = Styled(Link)`
    font-size: 14px;
    color: #1893e7;
    text-decoration: none;
`
const Path = Styled.a`
    font-size: 14px;
    color: #1893e7;
    text-decoration: none;
`
const Last = Styled.div`
    margin-top: 60px
`
const P = Styled.p`
    color: rgba(0, 0, 0, 0.54);
    text-align: center;
    font-size: 14px
`
const LengthAll = Styled.div`
`;
const Length = Styled.div`
    background: #d89d32;
    width: 30%;
    height: 5px;
    border-radius: 10px;
    transition: 3s;
    &:hover {
        width: 100%;
    }
`