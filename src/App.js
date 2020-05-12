import React, { useState } from "react";
import "sanitize.css";
import {
  Button,
  ButtonWrapper,
  Configuration,
  GlobalCSS,
  Header,
  Label,
  LayoutGrid,
  LogoAltoros,
  LogoProtofire,
  MessageWrapper,
  Paragraph,
  PrintableArea,
  RowWrapper,
  Select,
  TextWrapper,
  Textfield,
  Wrapper,
  FormTitle,
  FormGrid,
  Note,
} from "./StyledComponents";
import { printComponent } from "./Utils";

const App = () => {
  const defaultMonth = "January";
  const defaultDayNumber = "1st";
  const defaultDayName = "Optional...";
  const [holidayName, setHolidayName] = useState("");
  const [currentLogo, setCurrentLogo] = useState("altoros");
  const [holidayMonth, setHolidayMonth] = useState(defaultMonth);
  const [backToWorkMonth, setBackToWorkMonth] = useState(defaultMonth);
  const [holidayDayName, setHolidayDayName] = useState(defaultDayName);
  const [backToWorkDayName, setBackToWorkDayName] = useState(defaultDayName);
  const [holidayDaysNumbers, setHolidayDaysNumbers] = useState(
    defaultDayNumber
  );
  const [backOnDayNumber, setBackOnDayNumber] = useState(defaultDayNumber);
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
    "December",
  ];
  const days = [
    defaultDayName,
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

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
                  {currentLogo === "altoros" ? (
                    <LogoAltoros />
                  ) : (
                    <LogoProtofire />
                  )}
                  <Paragraph contentEditable>Hello everyone,</Paragraph>
                  <Paragraph contentEditable>
                    Due to a national holiday
                    {holidayName ? ` (${holidayName})` : ","} our offices in
                    Argentina will remain closed on{" "}
                    <strong>
                      {holidayDayName.toLowerCase() ===
                      defaultDayName.toLowerCase()
                        ? ""
                        : `${holidayDayName}, `}
                      {holidayMonth} {holidayDaysNumbers}
                    </strong>
                    .
                  </Paragraph>
                  <Paragraph contentEditable>
                    We will resume our activities on{" "}
                    <strong>
                      {backToWorkDayName.toLowerCase() ===
                      defaultDayName.toLowerCase()
                        ? ""
                        : `${backToWorkDayName}, `}
                      {backToWorkMonth} {backOnDayNumber}
                    </strong>
                    .
                  </Paragraph>
                  <Paragraph contentEditable>
                    Let us know if you have any concerns.
                  </Paragraph>
                  <Paragraph contentEditable>Thanks and regards.</Paragraph>
                </TextWrapper>
              </MessageWrapper>
            </PrintableArea>
          </div>
          <div>
            <Configuration>
              <RowWrapper>
                <Label>Logo</Label>
                <Select
                  value={currentLogo}
                  onChange={(e) => setCurrentLogo(e.currentTarget.value)}
                >
                  <option value="altoros">Altoros</option>
                  <option value="protofire">Protofire</option>
                </Select>
              </RowWrapper>
              <FormTitle>Holiday Settings</FormTitle>
              <RowWrapper>
                <Label>Name</Label>
                <Textfield
                  value={holidayName}
                  onChange={(e) => setHolidayName(e.currentTarget.value)}
                  placeholder="Optional holiday name..."
                />
              </RowWrapper>
              <FormGrid>
                <RowWrapper>
                  <Label>Month</Label>
                  <Select
                    value={holidayMonth}
                    onChange={(e) => setHolidayMonth(e.currentTarget.value)}
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
                  <Label>Day</Label>
                  <Select
                    value={holidayDayName}
                    onChange={(e) => setHolidayDayName(e.currentTarget.value)}
                  >
                    {days.map((item, index) => {
                      const selected =
                        item.toLowerCase() === defaultDayName.toLowerCase()
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
                  <Select
                    value={backToWorkMonth}
                    onChange={(e) => setBackToWorkMonth(e.currentTarget.value)}
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
                  <Label>Day</Label>
                  <Select
                    value={backToWorkDayName}
                    onChange={(e) =>
                      setBackToWorkDayName(e.currentTarget.value)
                    }
                  >
                    {days.map((item, index) => {
                      const selected =
                        item.toLowerCase() === defaultDayName.toLowerCase()
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
              </FormGrid>
              <RowWrapper>
                <Label>Day Number</Label>
                <Textfield
                  value={backOnDayNumber}
                  onChange={(e) => setBackOnDayNumber(e.currentTarget.value)}
                  required
                />
              </RowWrapper>
              <Note>
                <strong>Note:</strong> Click on text to edit it.
              </Note>
              <ButtonWrapper>
                <Button
                  onClick={() =>
                    printComponent(
                      "printableArea",
                      `${holidayDaysNumbers} - ${holidayMonth}.png`
                    )
                  }
                >
                  Save PNG File
                </Button>
              </ButtonWrapper>
            </Configuration>
          </div>
        </LayoutGrid>
      </Wrapper>
    </>
  );
};

export default App;
