import React, { useState } from "react";
import "sanitize.css";
import {
  Wrapper,
  GlobalCSS,
  PrintableArea,
  MessageWrapper,
  ButtonWrapper,
  Header,
  TextWrapper,
  LogoAltoros,
  Paragraph,
  Configuration,
  RowWrapper,
  Label,
  Textfield,
  Select,
  LayoutGrid,
  Button,
  LogoProtofire
} from "./StyledComponents";
import { printComponent } from "./Utils";

const App = () => {
  const defaultMonth = "January";
  const defaultDay = "1st";
  const [holidayName, setHolidayName] = useState("");
  const [currentLogo, setCurrentLogo] = useState("altoros");
  const [holidayMonth, setHolidayMonthName] = useState(defaultMonth);
  const [backToWorkMonth, setBackToWorkMonthName] = useState(defaultMonth);
  const [holidayDays, setHolidayDayName] = useState(defaultDay);
  const [backOnDay, setBackOnDayName] = useState(defaultDay);
  const months = [
    defaultMonth,
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return (
    <>
      <GlobalCSS />
      <Wrapper>
        <LayoutGrid>
          <PrintableArea id="printableArea">
            <MessageWrapper>
              <Header />
              <TextWrapper>
                {currentLogo === "altoros" ? (
                  <LogoAltoros />
                ) : (
                  <LogoProtofire />
                )}
                <Paragraph>Hello everyone,</Paragraph>
                <Paragraph>
                  due to a national holiday
                  {holidayName ? ` (${holidayName})` : ","} our offices in
                  Argentina will remain closed on{" "}
                  <strong>
                    {holidayMonth} {holidayDays}
                  </strong>
                  .
                </Paragraph>
                <Paragraph>
                  We will resume our activities on{" "}
                  <strong>
                    {backToWorkMonth} {backOnDay}
                  </strong>
                  .
                </Paragraph>
                <Paragraph>Let us know if you have any concerns.</Paragraph>
                <Paragraph>Thanks and regards.</Paragraph>
              </TextWrapper>
            </MessageWrapper>
          </PrintableArea>
          <Configuration>
            <RowWrapper>
              <Label>Logo</Label>
              <Select
                value={currentLogo}
                onChange={e => setCurrentLogo(e.currentTarget.value)}
              >
                <option value="altoros">Altoros</option>
                <option value="protofire">Protofire</option>
              </Select>
            </RowWrapper>
            <RowWrapper>
              <Label>Holiday Name</Label>
              <Textfield
                value={holidayName}
                onChange={e => setHolidayName(e.currentTarget.value)}
                placeholder="Optional holiday name..."
              />
            </RowWrapper>
            <RowWrapper>
              <Label>Holiday Month</Label>
              <Select
                value={holidayMonth}
                onChange={e => setHolidayMonthName(e.currentTarget.value)}
              >
                {months.map((item, index) => {
                  const selected =
                    item.toLowerCase() === defaultMonth.toLowerCase()
                      ? "selected"
                      : "";
                  return (
                    <option key={index} selected={selected}>
                      {item}
                    </option>
                  );
                })}
              </Select>
            </RowWrapper>
            <RowWrapper>
              <Label>Holiday Day(s)</Label>
              <Textfield
                value={holidayDays}
                onChange={e => setHolidayDayName(e.currentTarget.value)}
                required
              />
            </RowWrapper>
            <RowWrapper>
              <Label>"Back on" Month</Label>
              <Select
                value={backToWorkMonth}
                onChange={e => setBackToWorkMonthName(e.currentTarget.value)}
              >
                {months.map((item, index) => {
                  const selected =
                    item.toLowerCase() === defaultMonth.toLowerCase()
                      ? "selected"
                      : "";
                  return (
                    <option key={index} selected={selected}>
                      {item}
                    </option>
                  );
                })}
              </Select>
            </RowWrapper>
            <RowWrapper>
              <Label>"Back on" Day</Label>
              <Textfield
                value={backOnDay}
                onChange={e => setBackOnDayName(e.currentTarget.value)}
                required
              />
            </RowWrapper>
            <ButtonWrapper>
              <Button
                onClick={() =>
                  printComponent(
                    "printableArea",
                    `${holidayDays} - ${holidayMonth}.png`
                  )
                }
              >
                Save
              </Button>
            </ButtonWrapper>
          </Configuration>
        </LayoutGrid>
      </Wrapper>
    </>
  );
};

export default App;
