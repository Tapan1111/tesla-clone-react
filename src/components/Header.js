import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';


function Header() {
    const [BurgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);
    
  return (
    <Container>
        <a href='/www.google.com maps'>
            <img src="teslaImages/images/logo.svg" alt=""></img>
        </a>

        <Menu>
            {cars && cars.map((car,index) =>(
                <p><a key={index} href='/#'>{car}</a></p>
            ))}
        </Menu>
        <RightMenu>
            <p><a href='/#'>Shop</a></p>
            <p><a href='/#'>Tesla Account</a></p>
          <CustomMenu onClick={()=>setBurgerStatus(true)}/>
        </RightMenu>
            <BurgerNav show={ BurgerStatus }>
                <CloseWrapper>
                    <CustomClose onClick={()=>setBurgerStatus(false)}/>
                </CloseWrapper>
                {cars && cars.map((car,index) =>(
                <li key={index}><a href="/#">{car}</a></li>
                ))}
                <li><a href="/#">Existing Inventory</a></li>
                <li><a href="/#">Used Inventory</a></li>
                <li><a href="/#">Trade-in</a></li>
                <li><a href="/#">CyberTruck</a></li>
                <li><a href="/#">Roadster</a></li>

            </BurgerNav>     
    </Container>

  )
}

export default Header

const Container = styled.div`
    min-height:60px;
    position:fixed;
    padding: 0 20px;
    display: flex;
    align-items:center;
    justify-content: space-betwee
    top:0;
    left:0;
    right:0;
    z-index:1;

`

const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    flex: 1;
    
    p{
        font-weight:550;
        text-transform:uppercase;
        padding:0 10px;
        flex-wrap: no wrap;
    }

    @media(max-width: 768px){
        display:none;
    }
`
const RightMenu = styled.div`
    display:flex;
    margin-right:10px;
    align-items:center;

    p{
        font-weight:550;
        text-transform:uppercase;
        padding:0 10px;
        flex-wrap: no wrap;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor:pointer;
`
const BurgerNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    padding:20px;
    background:white;
    width:250px;
    z-index:16;
    list-style:none;
    display:flex;
    flex-direction: column;
    text-align:start;
    transform: ${props => props.show ? 'translateX(0%)':'translateX(100%)'};
    transition: transform 0.3s;

    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0, .2);

        a{
            font-weight:600;
        }
    }  
`
const CustomClose = styled(CloseIcon)`
    cursor:pointer;
`
const CloseWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
`