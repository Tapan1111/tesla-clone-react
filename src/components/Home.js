import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundImg="teslaImages/images/model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing inventory"
        
        />
        <Section
            title="Model Y"
            description="Order Online for Touchless Delivery"
            backgroundImg="teslaImages/images/model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing inventory"
        
        />
        <Section
            title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundImg="teslaImages/images/model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing inventory"
        />
        <Section
            title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundImg="teslaImages/images/model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing inventory"
        />
        <Section
            title="Lowest Cost Solar Panel In America"
            description="Money-back guarantee"
            backgroundImg="teslaImages/images/solar-panel.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"
        />
         <Section
            title="Solar for New Roof"
            description="Solar Roof Costs Less Than a New Roof"
            backgroundImg="teslaImages/images/solar-roof.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"
        />
        <Section
            title="Accessories"
            description=""
            backgroundImg="teslaImages/images/accessories.jpg"
            leftBtnText="Shop now"
            // rightBtnText="Learn more"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height:100vh;
`