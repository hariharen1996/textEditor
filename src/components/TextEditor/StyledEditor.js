import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #25262c;
  gap: 20px;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 25px;
`
export const ImageContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100vh;
  margin-left: 20px;
`
export const Image = styled.img`
  width: 450px;
`
export const EditorContainer = styled.ul`
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 12px;
  margin-top: 20px;
  margin-right: 20px;
`
export const IconsContainer = styled.li`
  list-style: none;
`
export const Button = styled.button`
  border: none;
  background: none;
  outline: none;
  color: ${props => props.color};
`

export const Input = styled.textarea`
  background: #1b1c22;
  color: #f8fafc;
  width: 80%;
  height: 90%;
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
`
