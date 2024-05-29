import { Prose } from "./index.js"

export default {
  title: "Prose",
  component: Prose,
  argTypes: {
    children: {
      control: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A layout element for styling text content. By default, all texts are displayed with predefined sizes and spacing.",
      },
    },
  },
}

const Template = (args) => (
  <Prose {...args}>
    <h1>Headline 1</h1>
    <h2>Headline 2</h2>
    <h3>Headline 3</h3>
    <h4>Headline 4</h4>
    <h5>Headline 5</h5>
    <article>
      <p>
        Supernova is an alternative UI for Prometheus Alertmanager with some quality of life
        improvements:
      </p>
      <ul>
        <li>
          Micro frontend design based on
          <a href="https://ui.juno.global.cloud.sap" rel="nofollow">
            Juno UI components
          </a>
        </li>
        <li>Predefined filter categories</li>
        <li>Easy filtering</li>
        <li>Autodiscover of the support group and added automatically as filter</li>
        <li>Aggregation and counting of alerts by region and severity</li>
        <li>Automatic URL linking for URLs in descriptions</li>
        <li>Parsing of alert labels for included external links</li>
        <li>Display of active and expired silences for a given alert</li>
        <li>
          Warning of an existing silence displaying the exact expiration time when creating new
          silences
        </li>
      </ul>
      <div>
        <h2>Concepts</h2>
      </div>
      <div>
        <h3>Alerts</h3>
      </div>
      <p>
        Alerting rules offer the capability to define alert conditions using expressions in the
        Prometheus expression language. These rules enable you to specify conditions that trigger
        alerts, and subsequently send notifications regarding the firing alerts to an external
        service. Whenever the alert expression results in one or more vector elements at a given
        point in time, the alert counts as active for these elements <code>label sets</code>.
      </p>
      <div>
        <h4>Labels</h4>
      </div>
      <p>
        The labels clause allows specifying a set of additional labels to be attached to the alert.
        Following is a live example of a set of labels from an alert of the{" "}
        <code>support group:containers</code> with
        <code>severity:info</code> in the <code>region:eu-de-2</code>.
      </p>
    </article>
    <article>
      <h2>Extract functionality out of the Component</h2>
      <p>
        Transferring functions from a component to a helper file or to the store preserves the
        cleanliness of the component by extracting its functionalities to a separate file. This
        approach facilitates the subsequent creation of unit tests without directly impacting the
        component itself.
      </p>
      <p>
        Consider the following example: the component is tasked with performing diverse filter
        calculations. Based on these calculations, it determines which items should be filtered.
        Ultimately, the filtered results are then stored within the application's data store and not
        use in the return statement.
      </p>
      <ol>
        <li>
          <p>
            Modularity and Reusability: Dividing components into individual files allows you to
            create smaller, self-contained modules that can be reused across different parts of your
            application. This modular approach enhances reusability and reduces redundancy, as
            components can be easily imported and integrated into various parts of the application.
          </p>
        </li>
        <li>
          <p>
            Testing: Isolating components in separate files simplifies testing. You can focus on
            testing individual components with specific inputs and expected outputs, which leads to
            more thorough and targeted test coverage.
          </p>
        </li>
        <li>
          <p>
            Readability and Maintainability: Smaller, focused files are easier to read and
            understand. Each file is dedicated to a specific component, making it simpler to grasp
            the purpose and functionality of that component. This clarity contributes to better code
            maintenance and reduces the likelihood of errors when modifying or debugging.
          </p>
        </li>
        <li>
          <p>
            Easier Navigation: As your project grows, a modular structure makes it easier to
            navigate through code. With distinct files for each component, locating and managing
            code becomes more efficient. IDEs and code editors also offer better navigation features
            for modular projects.
          </p>
        </li>
      </ol>
    </article>
  </Prose>
)

export const Basic = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "A basic prose component with various text elements.",
      },
    },
  },

  args: {},
}
