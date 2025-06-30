import { useMemo, ReactNode } from "react"
import { isNotEmptyString } from "../../../utils"
import { ComboBoxValidation } from "../types"

/**
 * Custom hook for managing validation state.
 * Determines if a component is in valid or invalid state based on props.
 *
 * @param errortext - Error message text to display when invalid
 * @param successtext - Success message text to display when valid
 * @param invalid - Boolean flag to force invalid state
 * @param valid - Boolean flag to force valid state
 *
 * @returns An object containing:
 * - isInvalid: Computed boolean indicating invalid state (based on invalid prop or errortext)
 * - isValid: Computed boolean indicating valid state (based on valid prop or successtext)
 */
function useComboBoxValidation(
  errortext: ReactNode,
  successtext: ReactNode,
  invalid: boolean,
  valid: boolean
): ComboBoxValidation {
  const isInvalid = useMemo(() => invalid || Boolean(errortext && isNotEmptyString(errortext)), [invalid, errortext])
  const isValid = useMemo(() => valid || Boolean(successtext && isNotEmptyString(successtext)), [valid, successtext])

  return {
    isInvalid,
    isValid,
  }
}

export default useComboBoxValidation
