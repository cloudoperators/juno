import React from "react"

import {
  Modal,
  Form,
  FormRow,
  FormSection,
  DateTimePicker,
  TextInput,
  Textarea,
  Stack,
} from "@cloudoperators/juno-ui-components"
import { useGlobalsActions } from "./StoreProvider"

const TestModalDateTimePicker = () => {
  const { setCurrentModal } = useGlobalsActions()

  const onConfirm = () => {
    setCurrentModal(null)
  }

  return (
    <Modal
      title="Modal w/ double DateTimePicker (issue 68)"
      size="large"
      open
      onCancel={() => setCurrentModal(null)}
      onConfirm={onConfirm}
      confirmButtonLabel="Save"
    >
      <style>
        {`
          .grid {
            display: grid;
          }  
          .grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .gap-2 {
            gap: 0.5rem;
          }
        `}
      </style>
      <Form>
        <FormSection>
          <FormRow>
            <TextInput required label="Silenced by" disabled />
          </FormRow>
          <FormRow>
            <div className="grid grid-cols-2 gap-2">
              <DateTimePicker />
              <DateTimePicker />
            </div>
          </FormRow>
          <FormRow>
            <Textarea label="Comment" />
          </FormRow>
        </FormSection>
        <FormSection>
          <FormRow>
            <p>Editable Labels are labels that are editable. You can use regular expressions.</p>
          </FormRow>
          <FormRow>
            <div className="grid grid-cols-2 gap-2">
              <TextInput required label="region" />
            </div>
          </FormRow>
        </FormSection>
        <FormSection>
          <FormRow>
            <p>Fixed Labels are labels that are not editable.</p>
          </FormRow>
          <FormRow>
            <Stack gap="2" alignment="start" wrap={true}></Stack>
          </FormRow>
        </FormSection>
      </Form>
    </Modal>
  )
}

export default TestModalDateTimePicker
