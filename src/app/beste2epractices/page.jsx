import { articles } from "@/pages";
import "@/styles/globals.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaBook, FaLightbulb, FaCheckCircle } from "react-icons/fa";

export default function E2EPractices() {
  return (
    <div className="flex leading-relaxed flex-col items-center min-h-screen pt-10 px-4 md:px-20 text-customLightGray">
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
          testing. I began my journey with limited knowledge in this area, but
          as I gained experience, I recognized the importance of building
          robust, reliable tests. The challenges of flakiness and instability
          taught me valuable lessons that I’m sharing here. Instead of covering
          the basics, which are available in official documentation, this guide
          will focus on strategies to reduce test maintenance, improve
          stability, and enhance readability in complex projects.
        </p>

        {/* Learn More Links */}
        <div className="flex items-center text-lg font-semibold mb-4">
          <FaBook className="text-blue-400 mr-2" />
          <span>
            If you're interested in learning more, explore these guides:
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <a
            href="https://docs.cypress.io/app/core-concepts/best-practices"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            <h3 className="text-xl font-bold text-blue-400 mb-2">
              Cypress Docs
            </h3>
            <p className="text-gray-300">
              Official Cypress best practices guide
            </p>
          </a>
          <a
            href="https://playwright.dev/docs/best-practices"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            <h3 className="text-xl font-bold text-blue-400 mb-2">
              Playwright Docs
            </h3>
            <p className="text-gray-300">
              Official Playwright best practices guide
            </p>
          </a>
        </div>

        <hr className="border-gray-600 w-full max-w-lg md:max-w-2xl my-8" />

        <div className="text-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            When you start writing a test, it’s essential to have a clear
            purpose. Identify:
          </h2>

          <ul className="list-disc pl-8 mb-6 space-y-3">
            <li>
              <strong>What functionality you are testing</strong> — define the
              specific behavior or workflow.
            </li>
            <li>
              <strong>Your expectations</strong> — know what the desired outcome
              should be.
            </li>
            <li>
              <strong>The test boundaries</strong> — determine the scope of the
              test to avoid unnecessary interactions.
            </li>
          </ul>

          <div
            className="flex items-start bg-slate-700 border border-slate-600 p-5 rounded-lg shadow-lg mt-6"
            style={{
              boxShadow: "3px 6px 8px rgba(15, 23, 42, 0.5)",
            }}
          >
            <FaCheckCircle className="text-blue-400 mt-1 mr-3" size={22} />
            <p className="text-slate-300 leading-relaxed">
              <strong>Example:</strong> Let’s say you want to verify the
              checkout flow of an e-commerce application. Ask yourself: Are you
              testing only the ability to complete a purchase, or are you also
              verifying inventory updates and order confirmation emails?
              Defining scope is key.
            </p>
          </div>
        </div>

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
          Framework-Specific Syntax
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

        <h3 className="text-xl font-semibold mb-3 text-red-400">
          ❌ Avoid Complex Logic
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

        <h3 className="text-xl font-semibold mb-3 mt-6 text-green-400">
          ✅ Use Framework Features
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
          The second example uses Cypress’s <code>.contains()</code> method,
          which makes the intent clear and the code simpler to maintain. This
          approach leverages the framework’s functionality, making tests more
          robust and less prone to breaking due to minor UI changes.
        </p>

        <hr className="border-gray-600 w-full max-w-lg md:max-w-2xl my-8" />

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Integrating E2E Tests with GitHub Actions
        </h2>
        <p className="text-lg mb-6">
          Using GitHub Actions for your CI/CD pipeline allows you to automate
          the testing process seamlessly. By setting up a workflow, you can
          ensure that your E2E tests run every time code is pushed or a pull
          request is created. This helps catch issues early and maintain high
          software quality.
        </p>
        <p className="text-lg mb-6">
          Here’s an example of a simple GitHub Actions workflow that runs E2E
          tests using Cypress. Create a file named{" "}
          <code>.github/workflows/ci.yml</code> in your repository:
        </p>
        <SyntaxHighlighter
          language="yaml"
          style={oneDark}
          className="mb-6 rounded-md text-sm shadow-md overflow-auto syntax-highlighter"
        >
          {`name: CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  e2e:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'

      - name: Install dependencies
        run: npm install

      - name: Run E2E Tests
        run: npm run test:e2e`}
        </SyntaxHighlighter>
        <p className="text-lg mb-6">
          In this example, the workflow is triggered on pushes and pull requests
          to the <code>main</code> branch. The steps include checking out the
          code, setting up Node.js, installing dependencies, and finally running
          the E2E tests defined in your package.json script.
        </p>
        <p className="text-lg mb-6">
          By integrating E2E tests into your GitHub Actions workflow, you create
          a robust system that ensures any changes made to your codebase are
          validated against your test suite before merging. This practice not
          only enhances code quality but also fosters a culture of continuous
          improvement within your team.
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
            <strong>Avoid Overlapping Tests:</strong> Ensure that tests do not
            interfere with each other by isolating their execution context. Use
            before and after hooks to set up and tear down test data or states.
          </li>
          <li>
            <strong>Keep Tests Small and Focused:</strong> Write tests that
            focus on a single functionality or user interaction. This makes it
            easier to identify the cause of failures and reduces the complexity
            of each test case.
          </li>
          <li>
            <strong>Regularly Review and Refactor Tests:</strong> As your
            application evolves, so should your tests. Regularly review your
            test suite for flakiness and refactor tests that frequently fail or
            require excessive maintenance.
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
