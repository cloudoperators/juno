/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactElement } from "react"
import { DescriptionTermProps } from "../DescriptionTerm"
import { DescriptionDefinitionProps } from "../DescriptionDefinition"
import "./description-list.css"

export interface DescriptionListProps {
  /**
   * Child components must be either DescriptionTerm or DescriptionDefinition to maintain semantic structure.
   * Supports multiple instances to create a detailed list of terms and definitions.
   */
  children:
    | ReactElement<DescriptionTermProps | DescriptionDefinitionProps>
    | Array<ReactElement<DescriptionTermProps | DescriptionDefinitionProps>>
    | ReactElement<"div">
  /**
   * Determines the alignment of terms within the list. Align terms to the left or right based on preference for display style.
   */
  alignTerms?: "left" | "right"
  /**
   * Additional custom class names to apply styles to the <dl> element or to extend styling from the design system.
   */
  className?: string
}

/**
 * A wrapper component that semantically represents a list of terms and their corresponding descriptions using HTML <dl> elements.
 * This component enforces structure by expecting child elements of DescriptionTerm or DescriptionDefinition,
 * aligning them according to the specified terms alignment.
 */
export const DescriptionList: React.FC<DescriptionListProps> = ({ children, alignTerms = "right", className = "" }) => (
  <dl
    className={`dl ${className}`}
    data-testid="description-list"
    style={{ justifyContent: alignTerms === "right" ? "flex-end" : "flex-start" }}
  >
    {children}
  </dl>
)

export const DL = DescriptionList
