import React from "react";
import Section from "./Section";
import styled from "styled-components";

function Home() {
  return (
    <ContainerDiv>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        backgroundImg="model-s.jpg"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        backgroundImg="model-y.jpg"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        backgroundImg="model-3.jpg"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        backgroundImg="model-x.jpg"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        backgroundImg="solar-panel.jpg"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        backgroundImg="solar-roof.jpg"
      />
      <Section
        title="Accessories"
        leftButton="Custom Order"
        backgroundImg="accessories.jpg"
      />
    </ContainerDiv>
  );
}
export default Home;
const ContainerDiv = styled.div`
  height: 100vh;
`;

// Model 3
// Order Online for Touchless Delivery
// Custom Order
// Existing Inventory
