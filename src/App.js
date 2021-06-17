import React, { useState } from 'react'
import 'sanitize.css'
import {
  Button,
  ButtonWrapper,
  Configuration,
  FormGrid,
  FormTitle,
  GlobalCSS,
  Header,
  Label,
  LayoutGrid,
  MessageWrapper,
  Note,
  Paragraph,
  ParagraphBig,
  PrintableArea,
  RowWrapper,
  Select,
  TextWrapper,
  Textfield,
  Wrapper,
} from './StyledComponents'
import { printComponent } from './Utils'

const App = () => {
  const defaultMonth = 'January'
  const defaultDayNumber = '1st'
  const defaultDayName = 'Optional...'
  const [holidayName, setHolidayName] = useState('')
  const [holidayMonth, setHolidayMonth] = useState(defaultMonth)
  const [backToWorkMonth, setBackToWorkMonth] = useState(defaultMonth)
  const [holidayDayName, setHolidayDayName] = useState(defaultDayName)
  const [backToWorkDayName, setBackToWorkDayName] = useState(defaultDayName)
  const [holidayDaysNumbers, setHolidayDaysNumbers] = useState(defaultDayNumber)
  const [backOnDayNumber, setBackOnDayNumber] = useState('2nd')
  const months = [
    defaultMonth,
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const days = [defaultDayName, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

  return (
    <>
      <GlobalCSS />
      <Wrapper>
        <LayoutGrid>
          <div>
            <PrintableArea id="printableArea">
              <MessageWrapper>
                <Header />
                <TextWrapper>
                  <ParagraphBig contentEditable suppressContentEditableWarning={true}>
                    Hello everyone,
                  </ParagraphBig>
                  <Paragraph contentEditable suppressContentEditableWarning={true}>
                    Due to a national holiday
                    {holidayName ? ` (${holidayName})` : ','} our offices in Argentina will remain closed on{' '}
                    <strong>
                      {holidayDayName.toLowerCase() === defaultDayName.toLowerCase() ? '' : `${holidayDayName}, `}
                      {holidayMonth} {holidayDaysNumbers}
                    </strong>
                    .
                  </Paragraph>
                  <Paragraph contentEditable suppressContentEditableWarning={true}>
                    We will resume our activities on{' '}
                    <strong>
                      {backToWorkDayName.toLowerCase() === defaultDayName.toLowerCase() ? '' : `${backToWorkDayName}, `}
                      {backToWorkMonth} {backOnDayNumber}
                    </strong>
                    .
                  </Paragraph>
                  <Paragraph contentEditable suppressContentEditableWarning={true}>
                    Let us know if you have any concerns.
                  </Paragraph>
                  <Paragraph contentEditable suppressContentEditableWarning={true}>
                    Thanks and regards.
                  </Paragraph>
                </TextWrapper>
              </MessageWrapper>
            </PrintableArea>
          </div>
          <Configuration>
            <FormTitle>Holiday Settings</FormTitle>
            <RowWrapper>
              <Label>Name</Label>
              <Textfield
                onChange={(e) => setHolidayName(e.currentTarget.value)}
                placeholder="Optional holiday name..."
                value={holidayName}
              />
            </RowWrapper>
            <FormGrid>
              <RowWrapper>
                <Label>Month</Label>
                <Select value={holidayMonth} onChange={(e) => setHolidayMonth(e.currentTarget.value)}>
                  {months.map((item, index) => {
                    return <option key={index}>{item}</option>
                  })}
                </Select>
              </RowWrapper>
              <RowWrapper>
                <Label>Day</Label>
                <Select value={holidayDayName} onChange={(e) => setHolidayDayName(e.currentTarget.value)}>
                  {days.map((item, index) => {
                    return <option key={index}>{item}</option>
                  })}
                </Select>
              </RowWrapper>
            </FormGrid>
            <RowWrapper>
              <Label>Day(s) Number(s)</Label>
              <Textfield
                value={holidayDaysNumbers}
                onChange={(e) => setHolidayDaysNumbers(e.currentTarget.value)}
                required
              />
            </RowWrapper>
            <FormTitle>"Back to work" Settings</FormTitle>
            <FormGrid>
              <RowWrapper>
                <Label>Month</Label>
                <Select value={backToWorkMonth} onChange={(e) => setBackToWorkMonth(e.currentTarget.value)}>
                  {months.map((item, index) => {
                    return <option key={index}>{item}</option>
                  })}
                </Select>
              </RowWrapper>
              <RowWrapper>
                <Label>Day</Label>
                <Select value={backToWorkDayName} onChange={(e) => setBackToWorkDayName(e.currentTarget.value)}>
                  {days.map((item, index) => {
                    return <option key={index}>{item}</option>
                  })}
                </Select>
              </RowWrapper>
            </FormGrid>
            <RowWrapper>
              <Label>Day Number</Label>
              <Textfield value={backOnDayNumber} onChange={(e) => setBackOnDayNumber(e.currentTarget.value)} required />
            </RowWrapper>
            <Note>
              <strong>Note:</strong> You can click on text to edit it manually.
            </Note>
            <ButtonWrapper>
              <Button onClick={() => printComponent('printableArea', `${holidayDaysNumbers} - ${holidayMonth}.png`)}>
                Save PNG File
              </Button>
            </ButtonWrapper>
          </Configuration>
        </LayoutGrid>
      </Wrapper>
    </>
  )
}

export default App
