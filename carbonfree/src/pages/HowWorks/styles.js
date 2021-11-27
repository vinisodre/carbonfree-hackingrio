import styled from "styled-components"

export const Container = styled.section`
display:flex;
flex-direction: column;
min-height: 100vh;
width: 100%;
background:#002344;
`

export const ContentContainer = styled.div`
padding:2rem 0 4rem 0;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
width: 100%;
min-height: 89.5vh;
`

export const SectionContainer = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width: 70%;
margin-bottom: 2rem;
> img{
width: 400px;
}
&:last-child{
  margin-bottom:0;
}

`
export const TextContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content:space-evenly;
height: 400px;
width: 500px;
`

export const Title = styled.h2`
font-size: 48px;
color: white;
>strong {
  color: #109655
}
`

export const Paragraph = styled.p`
margin: 0 auto;
font-size: 18px;
color: white;
margin-right: 2rem;
>strong {
  color: #109655
}
&:last-child{
  margin-right:0;
}
`