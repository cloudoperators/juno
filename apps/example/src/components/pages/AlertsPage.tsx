/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import {
  MainTabs,
  TabList,
  Tab,
  TabPanel,
  ContentHeading,
  Box,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio,
  Textarea,
  Switch,
  Button,
  Stack,
  Form,
  FormSection,
  FormRow,
  ButtonRow,
  DateTimePicker,
  Message,
  SecretText,
  Icon,
  Code,
  Container,
  Tabs,
  SelectOption,
  Select,
} from "@cloudoperators/juno-ui-components"

const switchContainerStyle: React.CSSProperties = {
  position: "absolute",
  right: "5rem",
}

const AlertsPage = () => {
  const [alertsEnabled, setAlertsEnabled] = useState(true)
  const [alertTypes, setAlertTypes] = useState<string[]>(["weather", "safety"])
  const [safetyAlertLevels, setSafetyAlertLevels] = useState<string[]>(["warning", "unsafe"])
  const [preferredMethod, setPreferredMethod] = useState("email")
  const [alertFrequency, setAlertFrequency] = useState("daily")
  const [customMessage, setCustomMessage] = useState("")
  const [oneTimeAlert, setOneTimeAlert] = useState<Date | null>(null)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const toggleSelection = (setState: React.Dispatch<React.SetStateAction<string[]>>) => (value: string) => {
    setState((prevState) => {
      const updatedSelection = prevState.includes(value)
        ? prevState.filter((item) => item !== value)
        : [...prevState, value]
      return updatedSelection
    })
  }

  const isSaveDisabled = alertTypes.length === 0 || safetyAlertLevels.length === 0 || !alertsEnabled || loading

  const handleSubmit = () => {
    setLoading(true)
    setErrorMessage(null)

    // Simulate a save delay with error
    setTimeout(() => {
      setLoading(false)
      setErrorMessage("Failed to save due to a server error. Check your connection and try again later.")
    }, 2000)
  }

  return (
    <>
      <Stack direction="vertical" gap="5">
        <ContentHeading>Alert Management</ContentHeading>
        <Tabs>
          <TabList>
            <Tab>Preferences</Tab>
            <Tab>Access Key</Tab>
          </TabList>
          <Container px={false} py>
            <TabPanel>
              {/* <Container px={false} py> */}
              {errorMessage && (
                <Message
                  text={errorMessage}
                  variant="error"
                  className="mb-5"
                  dismissible
                  onDismiss={() => setErrorMessage(null)}
                />
              )}
              {/* Alert Form Panel */}
              <div style={switchContainerStyle}>
                <Switch
                  id="alerts-toggle"
                  label={alertsEnabled ? "Alerts ON" : "Alerts OFF"}
                  on={alertsEnabled}
                  onChange={() => setAlertsEnabled((prev) => !prev)}
                  size="large"
                />
              </div>

              <Stack direction="vertical" gap="5">
                <p>Customize how you receive alerts and notifications based on your preferences.</p>
                <Box>
                  <Form>
                    {/* Alert Types Section */}
                    <FormSection title="Alert Types">
                      <FormRow>
                        <CheckboxGroup
                          name="checkbox-group-alert-types"
                          label="Select Alert Types"
                          disabled={!alertsEnabled || loading}
                          errortext={alertTypes.length === 0 ? "At least one alert type must be selected." : undefined}
                        >
                          <Checkbox
                            label="Weather Alerts"
                            value="weather"
                            checked={alertTypes.includes("weather")}
                            onChange={() => toggleSelection(setAlertTypes)("weather")}
                          />
                          <Checkbox
                            label="Height Alerts"
                            value="height"
                            checked={alertTypes.includes("height")}
                            onChange={() => toggleSelection(setAlertTypes)("height")}
                          />
                          <Checkbox
                            label="Safety Alerts"
                            value="safety"
                            checked={alertTypes.includes("safety")}
                            onChange={() => toggleSelection(setAlertTypes)("safety")}
                          />
                        </CheckboxGroup>
                      </FormRow>
                    </FormSection>

                    {/* Safety Alerts Section */}
                    <FormSection title="Safety Alerts">
                      <FormRow>
                        <CheckboxGroup
                          name="checkbox-group-safety-alerts"
                          label="Select Safety Alert Levels"
                          disabled={!alertsEnabled || loading}
                          errortext={
                            safetyAlertLevels.length === 0
                              ? "At least one safety alert level must be selected."
                              : undefined
                          }
                        >
                          <Checkbox
                            label="Warning"
                            value="warning"
                            checked={safetyAlertLevels.includes("warning")}
                            onChange={() => toggleSelection(setSafetyAlertLevels)("warning")}
                          />
                          <Checkbox
                            label="Unsafe"
                            value="unsafe"
                            checked={safetyAlertLevels.includes("unsafe")}
                            onChange={() => toggleSelection(setSafetyAlertLevels)("unsafe")}
                          />
                          <Checkbox
                            label="Safe"
                            value="safe"
                            checked={safetyAlertLevels.includes("safe")}
                            onChange={() => toggleSelection(setSafetyAlertLevels)("safe")}
                          />
                        </CheckboxGroup>
                      </FormRow>
                    </FormSection>

                    {/* Preferred Alert Method */}
                    <FormSection title="Preferred Alert Method">
                      <FormRow>
                        <RadioGroup
                          onChange={setPreferredMethod}
                          selected={preferredMethod}
                          disabled={!alertsEnabled || loading}
                        >
                          <Radio label="Email" value="email" />
                          <Radio label="SMS" value="sms" />
                          <Radio label="Push Notification" value="push" />
                        </RadioGroup>
                      </FormRow>
                    </FormSection>

                    {/* Alert Frequency */}
                    <FormSection title="Alert Frequency">
                      <FormRow>
                        <Select
                          onValueChange={setAlertFrequency}
                          value={alertFrequency}
                          disabled={!alertsEnabled || loading}
                        >
                          <SelectOption value="real-time">Real-Time</SelectOption>
                          <SelectOption value="hourly">Hourly</SelectOption>
                          <SelectOption value="daily">Daily</SelectOption>
                          <SelectOption value="weekly">Weekly</SelectOption>
                        </Select>
                      </FormRow>
                    </FormSection>

                    {/* One-Time Alert Setup */}
                    <FormSection title="One-Time Alert Setup">
                      <FormRow>
                        <DateTimePicker
                          label="Schedule One-Time Alert"
                          disable={[]}
                          value={oneTimeAlert}
                          onChange={setOneTimeAlert}
                          disabled={!alertsEnabled || loading}
                        />
                      </FormRow>
                    </FormSection>

                    {/* Custom Alert Message */}
                    <FormSection title="Custom Alert Message">
                      <FormRow>
                        <Textarea
                          onChange={(e) => setCustomMessage(e.target.value)}
                          value={customMessage}
                          placeholder="Enter a custom message for your alerts..."
                          disabled={!alertsEnabled || loading}
                        />
                      </FormRow>
                    </FormSection>

                    <ButtonRow>
                      <Button>Clear</Button>
                      <Button variant="primary" onClick={handleSubmit} progress={loading} disabled={isSaveDisabled}>
                        Save
                      </Button>
                    </ButtonRow>
                  </Form>
                </Box>
              </Stack>
            </TabPanel>

            <TabPanel>
              {/* Alert Access Key Panel */}
              <Stack direction="vertical" gap="5">
                <Stack direction="horizontal" gap="2" align="center">
                  <Icon color="jn-text-theme-warning" icon="warning" />
                  <span>This access key is sensitive information. Keep it secure.</span>
                </Stack>

                <div>
                  Tip: You can set the alert access key as an environment variable with:{" "}
                  <Code content={`export ALERT_ACCESS_KEY='your-access-key'`} /> and use it for custom alert
                  automations.
                </div>

                <SecretText
                  readOnly
                  disablePaste
                  helptext="This secret text cannot be edited."
                  value="ssh-rsa 123456789"
                />
              </Stack>
            </TabPanel>
          </Container>
        </Tabs>
      </Stack>
    </>
  )
}

export default AlertsPage
