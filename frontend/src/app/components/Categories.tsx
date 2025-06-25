import React from 'react'
import styled from 'styled-components'

const Categories = () => {
  return (
    <Container>
    <div className='flex flex-col gap-3'>
      <p className='text-3xl'>Categories</p>
      <div className='categories pl-5'>
      <p>Fruits And Vegetables</p>
      <p>Dairy And Eggs</p>
      <p>Meat And Poultry</p>
      <p>Seafood</p>
      <p>Bakery And Bread</p>
      <p>Canned Good</p>
      <p>Fronzen Foods</p>
      <p>Pasta And Rice</p>
      <p>Breakfast Foods</p>
      <p>Snacks And Chips</p>
      <p>Beverages</p>
      <p>Condiments And Sauces</p>
      <p>Spices And Seasonings</p>
      <p>Baking Supplies</p>
      <p>Baby Food And Formula</p>
      <p>Health And Wellness</p>
      <p>Household Supplies</p>
      <p>Personal Care</p>
      <p>Pet Foods</p>
      </div>
    </div>
    </Container>
  )
}

const Container = styled.div`
  .categories p{
    display: flex;
    flex-direction: column;
    border-bottom: 2px dashed white;
    padding:15px;
  }
`;

export default Categories
