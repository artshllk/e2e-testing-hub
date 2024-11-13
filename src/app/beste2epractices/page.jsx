import { articles } from "@/pages";
import "@/styles/globals.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  cb,
  duotoneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

export default function E2EPractices() {
  return (
    <div className="flex flex-col items-center min-h-screen pt-10 px-4 md:px-20 text-customLightGray">
      <div className="text-left mb-8 w-full max-w-lg md:max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          {articles[2].name}
        </h1>
        <p className="text-gray-400 text-sm mt-2 font-serif">
          {articles[2].date}
        </p>
      </div>

      <div className="text-left w-full max-w-2xl">
        <p className="text-lg mb-6">
          This article delves into advanced best practices for end-to-end (E2E)
          testing. I started my journey in E2E testing with limited knowledge of
          best practices, but as I gained experience, I learned the importance
          of robust, reliable tests. Facing issues like flakiness and
          instability taught me valuable lessons, and I decided to share them
          here. This isn’t about basic practices—you can find those in
          documentation, such as the Cypress Best Practices or Playwright Best
          Practices. Instead, I'll focus on strategies that reduce test
          maintenance, increase stability, and enhance readability in complex
          projects.
        </p>

        <hr className="border-gray-600 w-full max-w-lg md:max-w-2xl my-8" />

        <p className="text-lg mb-6">
          When you start writing a test, it’s essential to have a clear purpose.
          Identify:
        </p>

        <ul className="list-disc pl-8 mb-6">
          <li>
            <strong>What functionality you are testing</strong>—define the
            specific behavior or workflow.
          </li>
          <li>
            <strong>Your expectations</strong>—know what the desired outcome
            should be.
          </li>
          <li>
            <strong>The test boundaries</strong>—determine the scope of the test
            to avoid unnecessary interactions.
          </li>
        </ul>

        <p className="text-lg mb-6">
          For example, let’s say you want to verify the checkout flow of an
          e-commerce application. Ask yourself: Are you testing only the ability
          to complete a purchase, or are you also verifying inventory updates
          and order confirmation emails? Defining scope is key.
        </p>

        <hr className="border-gray-600 w-full max-w-lg md:max-w-2xl my-8" />

        <h2 className="text-2xl font-extrabold mt-8 mb-4">Examples:</h2>
        <p className="text-lg mb-6">
          <strong>Well-defined Test Purpose:</strong> Test the login
          functionality with valid credentials and verify successful
          redirection.
        </p>
        <p className="text-lg mb-6">
          <strong>Scope Control:</strong> Avoid unnecessary database checks if
          the goal is purely UI validation.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Using TypeScript for Stronger Tests
        </h2>
        <p className="text-lg mb-6">
          In codebases I've worked on, I've tested with both JavaScript and
          TypeScript. From experience, using TypeScript significantly improves
          test maintainability by providing type safety and better IDE support.
          This helps catch bugs early, reduces runtime errors, and enhances code
          readability.
        </p>

        <p className="text-lg mb-6">
          For instance, TypeScript enables you to define specific data
          structures for test inputs, making it clear what parameters are
          expected in each test function:
        </p>

        <SyntaxHighlighter
          language="typescript"
          style={oneDark}
          className="mb-6 rounded-md text-sm shadow-md overflow-auto syntax-highlighter"
        >
          {`interface UserCredentials {
  username: string;
  password: string;
}

const login = ({ username, password }: UserCredentials) => {
  cy.get('[data-testid="username"]').type(username);
  cy.get('[data-testid="password"]').type(password);
  cy.get('[data-testid="login-button"]').click();
};`}
        </SyntaxHighlighter>

        <p className="text-lg mb-6">
          Using TypeScript also helps when testing complex flows, as it ensures
          consistent data types across tests, which is particularly helpful when
          working with API responses.
        </p>

        <hr className="border-gray-600 w-full max-w-lg md:max-w-2xl my-8" />

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Framework-Specific Syntax: Write Tests for Testers
        </h2>
        <p className="text-lg mb-6">
          Tests should be familiar to anyone with a testing background rather
          than deeply embedded with developer-specific logic. I’ve seen
          developers writing tests using complex JavaScript syntax that, while
          powerful, doesn’t align well with E2E testing best practices. The goal
          is to write clean, readable tests that anyone on the testing team can
          understand.
        </p>

        <p className="text-lg mb-6">
          For instance, instead of embedding complicated logic in your test, aim
          for clear, framework-native syntax:
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">
          Developer-Centric Approach:
        </h3>
        <SyntaxHighlighter
          language="javascript"
          style={oneDark}
          className="mb-6 rounded-md text-sm shadow-md overflow-auto syntax-highlighter"
        >
          {`cy.get('.items').then(($items) => {
  Array.from($items).forEach(item => {
    if (item.innerText.includes('Special')) {
      cy.wrap(item).click();
    }
  });
});`}
        </SyntaxHighlighter>

        <h3 className="text-xl font-semibold mt-8 mb-4">
          Testing-Focused Approach:
        </h3>
        <SyntaxHighlighter
          language="javascript"
          style={oneDark}
          className="mb-6 rounded-md text-sm shadow-md overflow-auto syntax-highlighter"
        >
          {`cy.get('.items')
  .contains('Special')
  .click();`}
        </SyntaxHighlighter>

        <p className="text-lg mb-6">
          The second example uses Cypress’s .contains() method, which makes the
          intent clear and the code simpler to maintain. This approach leverages
          the framework’s functionality, making tests more robust and less prone
          to breaking due to minor UI changes.
        </p>

        <hr className="border-gray-600 w-full max-w-lg md:max-w-2xl my-8" />

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Reducing Flakiness with Reliable Test Patterns
        </h2>
        <p className="text-lg mb-6">
          Flaky tests can make CI/CD pipelines unreliable. Here are some
          strategies to reduce flakiness:
        </p>

        <ul className="list-disc pl-8 mb-6">
          <li>
            Use consistent selectors—data-testid attributes are often preferable
            because they’re less likely to change.
          </li>
          <li>
            Minimize waits—instead of hard-coded delays, wait for elements to
            reach expected states, like cy.get().should('be.visible').
          </li>
          <li>
            Leverage network stubbing—mock API responses to control test data
            precisely and avoid dependence on external data.
          </li>
        </ul>

        <p className="text-lg mb-6">
          Example of Network Stubbing in{" "}
          <span className="font-semibold">Cypress</span>
        </p>

        <SyntaxHighlighter
          language="javascript"
          style={oneDark}
          className="mb-6 rounded-md text-sm shadow-md overflow-auto syntax-highlighter"
        >
          {`cy.intercept('POST', '/api/checkout', { statusCode: 200, body: { order: '12345' } });
cy.get('[data-testid="checkout-button"]').click();
cy.get('[data-testid="order-confirmation"]').should('contain', 'Order 12345');`}
        </SyntaxHighlighter>

        <p className="text-lg mb-6">
          In this example, we ensure that the order confirmation is controlled,
          reducing dependency on backend changes or network latency.
        </p>

        <hr className="border-gray-600 w-full max-w-lg md:max-w-2xl my-8" />

        <p className="text-lg mb-6">
          By following these practices, you’ll not only write more reliable
          tests but also improve the readability and maintainability of your
          test suite. Advanced testing is about balancing between simulating
          real-world interactions and creating tests that are stable and easy to
          maintain.
        </p>
      </div>
    </div>
  );
}
