import styled, { createGlobalStyle } from 'styled-components'

import HeaderImage from './header.png'

// const primary = '#320E3B'
const secondary = '#E56399'
const secondaryDark = '#b54e79'
const borderColor = '#ccc'
const textColor = '#320E3B'
const borderRadius = '6px'

export const GlobalCSS = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: Roboto, Helvetica, Arial, sans-serif;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const PrintableArea = styled.div`
  min-width: fit-content;
  padding: 10px;
`

export const Header = styled.div`
  background-color: #fafafa;
  background-image: url(${HeaderImage});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${borderRadius};
  height: 140px;
  margin: 10px 10px 0;
`

export const MessageWrapper = styled.div`
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid ${borderColor};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 570px;
`

export const TextWrapper = styled.div`
  color: ${textColor};
  font-size: 17px;
  font-weight: 400;
  line-height: 1.6;
  padding: 35px 20px 120px;
`

export const Paragraph = styled.p`
  margin: 0 0 25px;
  padding: 0;

  &:last-child {
    margin-bottom: 0;
  }
`

export const ParagraphBig = styled(Paragraph)`
  font-size: 19px;
  margin: 0 0 30px;
`

export const Note = styled.p`
  color: #999;
  font-size: 12px;
  margin: -10px 0 0 0;
  padding: 0;
`

export const Configuration = styled.div`
  border-radius: ${borderRadius};
  border: 1px solid ${borderColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 10px 10px 10px 0;
  padding: 20px;
`

export const LayoutGrid = styled.div`
  column-gap: 15px;
  display: grid;
  grid-template-columns: 625px 250px;
  margin: 0 auto;
`

export const FormGrid = styled.div`
  column-gap: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const RowWrapper = styled.div`
  margin: 0 0 15px;
`

export const FormTitle = styled.h2`
  font-family: Nunito, Roboto, Helvetica, Arial, sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.4;
  margin: 0 0 10px;
  padding: 10px 0 0 0;

  &:first-child {
    padding-top: 0;
  }
`

export const Label = styled.label`
  display: block;
  font-family: Nunito, Roboto, Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  margin: 0 0 5px;
`

export const Textfield = styled.input`
  border-radius: ${borderRadius};
  border: 1px solid ${borderColor};
  color: #666;
  font-size: 13px;
  font-weight: 400;
  margin: 0;
  max-width: 500px;
  outline: none;
  padding: 5px 10px;
  transition: border-color 0.15s linear;
  width: 100%;

  &:focus {
    border-color: ${secondary};
  }
`

export const Select = styled.select`
  background: #fff;
  border-radius: ${borderRadius};
  border: 1px solid ${borderColor};
  color: #666;
  font-size: 13px;
  font-weight: 400;
  margin: 0;
  max-width: 500px;
  outline: none;
  padding: 5px 10px;
  transition: border-color 0.15s linear;
  width: 100%;

  &:focus {
    border-color: #568eb5;
  }
`

export const Button = styled.button`
  background-color: ${secondary};
  border-radius: ${borderRadius};
  border: none;
  color: #fff;
  cursor: pointer;
  flex-grow: 1;
  font-size: 14px;
  font-weight: 500;
  height: 32px;
  outline: none;
  padding: 0 25px;
  text-align: center;
  transition: background-color 0.15s linear;

  &:hover {
    background-color: ${secondaryDark};
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
`
