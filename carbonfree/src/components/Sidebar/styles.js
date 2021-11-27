import styled from 'styled-components';

export const Sidebar = styled.div`
  width:30%;
  display:flex;
  flex-direction:column;
`
export const Link = styled.a`
  background: transparent;
  border:none;
  font-size:24px;
  color: #929294;
  margin-bottom:34px;
  &:hover{
    color:#109655;
  }
  `
export const Container = styled.div`
  margin-top:2rem;
  margin-left:2rem;
  display:flex;
  flex-direction:column;
`