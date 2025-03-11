/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, ChangeEvent } from "react"
import {
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

interface AlertsPageState {
  alertsEnabled: boolean
  alertTypes: string[]
  safetyAlertLevels: string[]
  preferredMethod: string
  alertFrequency: string
  customMessage: string
  oneTimeAlert: Date | null
  loading: boolean
  errorMessage: string | null
}

const switchContainerStyle: React.CSSProperties = {
  position: "absolute",
  right: "5rem",
}

// Needs refactoring

const AlertsPage: React.FC = () => {
  const [state, setState] = useState<AlertsPageState>({
    alertsEnabled: true,
    alertTypes: ["weather", "safety"],
    safetyAlertLevels: ["warning", "unsafe"],
    preferredMethod: "email",
    alertFrequency: "daily",
    customMessage: "",
    oneTimeAlert: null,
    loading: false,
    errorMessage: null,
  })

  const toggleSelection = (key: keyof AlertsPageState, value: string) => {
    setState((prevState) => ({
      ...prevState,
      [key]:
        Array.isArray(prevState[key]) && prevState[key].includes(value)
          ? (prevState[key] as string[]).filter((item) => item !== value)
          : [...(prevState[key] as string[]), value],
    }))
  }

  const isSaveDisabled =
    state.alertTypes.length === 0 || state.safetyAlertLevels.length === 0 || !state.alertsEnabled || state.loading

  const handleSubmit = () => {
    setState((prevState) => ({ ...prevState, loading: true, errorMessage: null }))

    // Simulate a save delay with error
    setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        loading: false,
        errorMessage: "Failed to save due to a server error. Check your connection and try again later.",
      }))
    }, 2000)
  }

  const handleAlertFrequencyChange = (value?: string | number | string[]) => {
    if (typeof value === "string") {
      setState((prevState) => ({ ...prevState, alertFrequency: value }))
    }
  }

  return (
    <Stack direction="vertical" gap="5">
      <ContentHeading>Alert Management</ContentHeading>
      <Tabs>
        <TabList>
          <Tab>Preferences</Tab>
          <Tab>Access Key</Tab>
        </TabList>
        <Container px={false} py>
          <TabPanel>
            {state.errorMessage && (
              <Message
                text={state.errorMessage}
                variant="error"
                className="mb-5"
                dismissible
                onDismiss={() => setState((prevState) => ({ ...prevState, errorMessage: null }))}
              />
            )}
            {/* Alert Form Panel */}
            <div style={switchContainerStyle}>
              <Switch
                id="alerts-toggle"
                label={state.alertsEnabled ? "Alerts ON" : "Alerts OFF"}
                on={state.alertsEnabled}
                onChange={() => setState((prevState) => ({ ...prevState, alertsEnabled: !prevState.alertsEnabled }))}
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
                        disabled={!state.alertsEnabled || state.loading}
                        errortext={
                          state.alertTypes.length === 0 ? "At least one alert type must be selected." : undefined
                        }
                      >
                        <Checkbox
                          label="Weather Alerts"
                          value="weather"
                          checked={state.alertTypes.includes("weather")}
                          onChange={() => toggleSelection("alertTypes", "weather")}
                        />
                        <Checkbox
                          label="Height Alerts"
                          value="height"
                          checked={state.alertTypes.includes("height")}
                          onChange={() => toggleSelection("alertTypes", "height")}
                        />
                        <Checkbox
                          label="Safety Alerts"
                          value="safety"
                          checked={state.alertTypes.includes("safety")}
                          onChange={() => toggleSelection("alertTypes", "safety")}
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
                        disabled={!state.alertsEnabled || state.loading}
                        errortext={
                          state.safetyAlertLevels.length === 0
                            ? "At least one safety alert level must be selected."
                            : undefined
                        }
                      >
                        <Checkbox
                          label="Warning"
                          value="warning"
                          checked={state.safetyAlertLevels.includes("warning")}
                          onChange={() => toggleSelection("safetyAlertLevels", "warning")}
                        />
                        <Checkbox
                          label="Unsafe"
                          value="unsafe"
                          checked={state.safetyAlertLevels.includes("unsafe")}
                          onChange={() => toggleSelection("safetyAlertLevels", "unsafe")}
                        />
                        <Checkbox
                          label="Safe"
                          value="safe"
                          checked={state.safetyAlertLevels.includes("safe")}
                          onChange={() => toggleSelection("safetyAlertLevels", "safe")}
                        />
                      </CheckboxGroup>
                    </FormRow>
                  </FormSection>

                  {/* Preferred Alert Method */}
                  <FormSection title="Preferred Alert Method">
                    <FormRow>
                      <RadioGroup
                        onChange={(value?: string) =>
                          setState((prevState) => ({ ...prevState, preferredMethod: value || "email" }))
                        }
                        selected={state.preferredMethod}
                        disabled={!state.alertsEnabled || state.loading}
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
                        onValueChange={handleAlertFrequencyChange}
                        value={state.alertFrequency}
                        disabled={!state.alertsEnabled || state.loading}
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
                        value={state.oneTimeAlert ?? undefined}
                        onChange={(date: Date | Date[] | undefined) =>
                          setState((prevState) => ({
                            ...prevState,
                            oneTimeAlert: Array.isArray(date) ? date[0] : (date ?? null),
                          }))
                        }
                        disabled={!state.alertsEnabled || state.loading}
                      />
                    </FormRow>
                  </FormSection>

                  {/* Custom Alert Message */}
                  <FormSection title="Custom Alert Message">
                    <FormRow>
                      <Textarea
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                          setState((prevState) => ({ ...prevState, customMessage: e.target.value }))
                        }
                        value={state.customMessage}
                        placeholder="Enter a custom message for your alerts..."
                        disabled={!state.alertsEnabled || state.loading}
                      />
                    </FormRow>
                  </FormSection>

                  <ButtonRow>
                    <Button
                      onClick={() =>
                        setState({
                          alertsEnabled: true,
                          alertTypes: [],
                          safetyAlertLevels: [],
                          preferredMethod: "email",
                          alertFrequency: "daily",
                          customMessage: "",
                          oneTimeAlert: null,
                          loading: false,
                          errorMessage: null,
                        })
                      }
                    >
                      Clear
                    </Button>
                    <Button variant="primary" onClick={handleSubmit} progress={state.loading} disabled={isSaveDisabled}>
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
              <Stack direction="horizontal" gap="2" alignment="center">
                <Icon color="jn-text-theme-warning" icon="warning" />
                <span>This access key is sensitive information. Keep it secure.</span>
              </Stack>

              <div>
                Tip: You can set the alert access key as an environment variable with:{" "}
                <Code content={`export ALERT_ACCESS_KEY='your-access-key'`} /> and use it for custom alert automations.
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
  )
}

export default AlertsPage
