import styled from "styled-components";

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
min-height: 89.40vh;
> img{
width: 440px;
}
`

export const FormContainer = styled.form`
background: white;
border-radius: 16px;
width:500px;
padding: 3rem;
margin: 3rem 0;
>div{
  display:flex;
  flex-direction: column;
  align-items: flex-start;
}
>a{
  text-decoration: none;
  color:#929294;
  font-size: 14px;
}
>*{
  margin-bottom: 40px;
  &:last-child{
    margin-bottom:0;
  }
}

`

export const Label = styled.label`
font-size: 20px;
margin-bottom: 10px;
>b{
  font-weight: normal;
  color:#109655;
}
`

export const Input = styled.input`
padding: 5px;
outline: 3.5px solid rgba(16, 150, 85, 0.3);
border: none;
border-radius: 16px;
height: 60px;
width:100%;
font-size:18px;
&:focus{
  outline: 3.5px solid rgba(16, 150, 85);
}
`

export const SubmitButton = styled.button`
  width: 100%;
  background: #109655;
  color: white;
  font-size: 20px;
  border-radius: 16px;
  border:none;
  height: 60px;
  margin: 10px 0;
  cursor: pointer;
  `

export const CreateAccountButton = styled.button`
  width: 100%;
  background: white ;
  color: #109655;
  font-size: 20px;
  border-radius: 16px;
  border-color:#109655;
  border-width: 3.5px;
  border-style: solid ;
  height: 60px;
  margin: 10px 0;
  cursor: pointer;
  `