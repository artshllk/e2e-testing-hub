import { articles } from "@/pages";
import "@/styles/globals.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CypressVsPlaywright() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-10 px-4 md:px-20 text-white">
      <div className="text-left mb-8 w-full max-w-lg md:max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          {articles[0].name}
        </h1>
        <p className="text-gray-300 text-sm mt-2">{articles[0].date}</p>
      </div>

      {/* Article Content */}
      <div className="max-w-lg md:max-w-2xl font-normal text-[1rem] md:text-[1.1rem] leading-[26px] md:leading-[28px] text-white-88">
        <p className="mb-6 ">
          When I first started my journey in test automation, my toolset
          primarily was only Cypress. I started by writing very basic simple
          tests without knowing best practices to writing really complex test
          cases. During that time I was curious also about JavaScript and was
          learning on that part. After creating fundamental skills in JS, I had
          questions about Cypress like what you can test, how it works, and
          other questions. Cypress is known for its easy-to-use syntax and ideal
          for end-to-end testing. While Playwright feels similar, for a newcomer
          in this world, from my perspective, Cypress is easier than Playwright.
        </p>

        <p className="mb-6">
          The idea of this article is not to explore which of these is better
          because it depends on the project needs.
        </p>

        <h2 className="text-3xl md:text-3xl font-bold mb-4">Cypress</h2>
        <p className="mb-6">
          Cypress is an end-to-end testing framework designed to make testing
          modern web applications easier and more reliable. It allows developers
          and testers to write tests that interact with a web application just
          like a user would—by clicking buttons, entering text, navigating
          pages, and more. Cypress is popular for testing SPAs and supports
          testing front-end behavior, but it is limited to the browser
          environment (we will talk more about that later).
        </p>

        <h2 className="text-3xl font-bold mb-4">Playwright</h2>
        <p className="mb-6">
          Playwright is an open-source testing framework developed by Microsoft
          that allows automated testing of web applications across multiple
          browsers. Playwright supports all modern engines including Chromium,
          WebKit, and Firefox. It's super easy to install.
        </p>

        <p className="mb-6">
          Now in both companies I've worked at, I had the luck to explore and
          learn good skills in both Cypress and Playwright. In one company,
          Cypress was already integrated with a few tests. As a beginner, it was
          pretty easy to use. Later, in the company I joined after, Cypress was
          integrated with around 2000 tests. Playwright was not fully
          integrated, so I started learning and playing around with it because I
          didn't have much experience working with it. After reading
          documentation and writing many tests in both, I decided to write this
          article to cover key differences between them. I like both tools :)
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Cypress vs Playwright: Key Differences
        </h2>
        <p className="mb-6">
          They are both popular tools for end-to-end testing, but they differ in
          terms of functionality, flexibility, and the use cases they support.
          Here are the key differences between the two:
        </p>

        <ol className="list-decimal ml-6 space-y-4 mb-6">
          <li>
            <strong>Cross-Browser Support:</strong> Cypress primarily focuses on
            testing within Chromium-based browsers (e.g., Chrome, Edge) but
            supports Firefox and experimental WebKit. Playwright offers full
            cross-browser support, including Chromium, Firefox, and WebKit
            (Safari).
          </li>

          <li>
            <strong>Supported Platforms:</strong> Cypress mainly focuses on
            desktop web apps, while Playwright provides broader platform support
            including mobile browser emulation (Android, iOS) and different
            operating systems.
          </li>

          <li>
            <strong>Speed and Performance:</strong> Playwright is optimized for
            parallelization and performance across multiple browsers, while
            Cypress may face performance limitations in larger test suites or
            different browser environments.
          </li>

          <li>
            <strong>Network Interception and Control:</strong> Playwright
            provides deeper access to the network layer, making it more powerful
            for advanced use cases compared to Cypress.
          </li>

          <li>
            <strong>Multi-Page and Frame Support:</strong> Playwright supports
            multi-page and iframe testing, while Cypress struggles with complex
            page interactions.
          </li>

          <li>
            <strong>Debugging and Test Writing:</strong> Cypress allows you to
            view snapshots at each step, making debugging easier. Playwright
            provides better debugging for complex cases.
          </li>

          <li>
            <strong>Community:</strong> Cypress has a larger community, making
            it easier to find solutions. Playwright's community is growing but
            newer in comparison.
          </li>

          <li>
            <strong>Test Isolation:</strong> Playwright provides better test
            isolation while Cypress requires more effort to manage shared state
            between tests.
          </li>

          <li>
            <strong>CI/CD Integration:</strong> Both tools integrate well into
            CI/CD pipelines but Playwright's cross-browser support makes it more
            flexible for larger test suites.
          </li>
        </ol>

        {/* Performance Comparison Section */}
        <h2 className="text-3xl font-bold mb-4">Performance Comparison</h2>
        <p className="mb-6">
          Here’s a brief comparison of performance metrics between Cypress and
          Playwright:
        </p>

        <table className="min-w-full bg-gray-900 mb-5 rounded-md overflow-hidden">
          <thead>
            <tr>
              <th className="py-2 px-4 text-left">Metric</th>
              <th className="py-2 px-4 text-left">Cypress</th>
              <th className="py-2 px-4 text-left">Playwright</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4">Installation Speed</td>
              <td className="py-2 px-4">Slower due to bundled browsers</td>
              <td className="py-2 px-4">
                Faster; allows selective installation
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4">Run Time for UI Tests</td>
              <td className="py-2 px-4">Generally slower in larger suites</td>
              <td className="py-2 px-4">
                Faster; optimized for parallel execution
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4">API Testing Speed</td>
              <td className="py-2 px-4">Requires browser context</td>
              <td className="py-2 px-4">
                Direct API calls without browser overhead
              </td>
            </tr>
          </tbody>
        </table>

        {/* Sample Test Case Section */}
        <h2 className="text-3xl font-bold mb-4">Sample Test Case</h2>
        <p className="mb-4">
          Below are examples of a simple login test case written in both Cypress
          and Playwright to illustrate syntax differences:
        </p>

        {/* Cypress Example */}
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          Cypress Example:
        </h3>
        <SyntaxHighlighter
          language="javascript"
          style={oneDark}
          className="mb-6 rounded-md overflow-auto syntax-highlighter"
        >
          {`describe('Login Test', () => {
  it('should log in with valid credentials', () => {
    cy.visit('https://example.com/login');
    cy.get('input[name="username"]').type('user');
    cy.get('input[name="password"]').type('pass');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});`}
        </SyntaxHighlighter>

        {/* Playwright Example */}
        <h3 className="text-xl font-semibold mb-2">Playwright Example:</h3>
        <SyntaxHighlighter
          language="javascript"
          style={oneDark}
          className="mb-6 rounded-md overflow-auto syntax-highlighter"
        >
          {`const { test, expect } = require('@playwright/test');

test('Login Test', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.fill('input[name="username"]', 'user');
  await page.fill('input[name="password"]', 'pass');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/.*\\/dashboard/);
});`}
        </SyntaxHighlighter>

        {/* Conclusion Section */}
        <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
        <p className="mb-6">
          Both tools are powerful, and the choice often depends on specific
          project needs. Cypress is ideal for simple to moderately complex web
          apps with a focus on ease of use and a strong developer experience.
          Playwright is better suited for more complex scenarios, especially if
          cross-browser testing, multi-page interactions, or deep network
          control are required.
        </p>
      </div>
    </div>
  );
}
