import styled from "styled-components"

export const Container = styled.section`
display:flex;
padding:0 40px;
align-items: center;
justify-content: space-between;
width: 100%;
background: white;
height: 5rem;
position: fixed;
`

export const BodyGap = styled.div`
height: 5rem;
width: 100%;
`

export const NavBar = styled.div`
display: flex;
align-items: center;
height: 100%;
>a{
  text-decoration: none;
  font-size:24px;
  color: #929294;
  margin-right: 80px;
  &:last-child{
    margin-right: 0;
  }
  &:hover{
    color:#109655;
    transition: 1 all;
  }
}

.active{
  color: #109655
}
`
