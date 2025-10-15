# UI Elements for Non-Authorized Users

For users that are not authorized to use a certain element on the UI, do we

1. Render it disabled?
2. Not render it all?
3. Render it functional, but throw a "not authorized"-error?

This decision depends on the context of the specific application, the sensitivity and criticality of the data or action, and the technical availability of information of user permissions:

## 1. Render Disabled Elements

Assuming we **_do know_** whether the current user is authorized to use a specific element / functionality on the UI, there are certain factors that determine whether we render it or not, and if yes, in what state.

If the feature is generally available to all, most or many users, with the current one just not (yet) meeting some requirmeents to use them, we should render but disable it.

When using this option consider communicating the fact they are not authorized for this specific action or feature using appropriate means, such as a tooltip on the button, a message or info block in close proximity to the disabled element(s).

## 2. Don't Render Specific Elements at All

If a feature is generally only accessible for a few, privileged users, or it deals with very sensitive and business-critical data, we should not render it at all, as the probability the current user will ever be able to use them is very low.

## 3. Render Fully Functional Elements, Show Error

If we **_can not know_** whether the current user is authorized for a certain functionality, feature, or action, there is no other option than render the element fully functional, and rely on the API/system response once a user uses this element, and show an error message informing them they are not authorized for the action/feature. From a UX perspective this is the least desirable option, and we should only ever build it in cases where it is impossible to get enough information as to what a user is authorized beforehand.
