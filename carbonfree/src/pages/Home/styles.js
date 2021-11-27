import styled from "styled-components"

export const Container = styled.section`
display:flex;
flex-direction: column;
min-height: 100vh;
width: 100%;
background:#002344;
`

export const ContentContainer = styled.div`
display:flex;
align-items:center;
justify-content:space-evenly;
width: 100%;
height: 89.5vh;
> img{
width: 440px;
}
`

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content:space-evenly;
height: 400px;
width: 400px;
`

export const Title = styled.h2`
font-size: 48px;
color: white;
>strong {
  color: #109655
}
`

export const Paragraph = styled.p`
font-size: 18px;
color: white;
>strong {
  color: #109655
}
`