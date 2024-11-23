"use client";
import { articles } from "@/pages";
import "@/styles/globals.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { DownloadsChart } from "../../components/Chart";

export default function CypressVsPlaywright() {
  return (
    <div className="flex flex-col items-center min-h-screen pt-10 px-4 md:px-20 text-customLightGray">
      <div className="text-left mb-8 w-full max-w-lg md:max-w-2xl sm:m-3">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          {articles[0].name}
        </h1>
        <p className="text-gray-400 text-sm mt-2 font-serif">
          {articles[0].date}
        </p>
      </div>

      {/* Article Content */}
      <div className="max-w-lg md:max-w-2xl font-medium text-[1rem] md:text-[1.1rem] leading-[26px] md:leading-[28px] text-gray-300">
        <p className="mb-6">
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
          In this article, we'll compare Cypress and Playwright, two popular
          tools in e2e testing, by examining their key features, use cases, and
          performance. This comparison will help you decide which tool is the
          best fit for your testing needs.
        </p>

        <hr className="border-gray-600 w-full max-w-lg md:max-w-2xl my-8" />

        <h2 className="text-3xl md:text-3xl font-extrabold mb-4 text-gray-200">
          Cypress
        </h2>
        <p className="mb-6">
          Cypress is an end-to-end testing framework designed to make testing
          modern web applications easier and more reliable. It allows developers
          and testers to write tests that interact with a web application just
          like a user would, entering text, navigating pages, and more. Cypress
          is popular for testing SPAs and supports testing front-end behavior,
          but it is limited to the browser environment (we will talk more about
          that later).
        </p>
        <h2 className="text-3xl font-extrabold mb-4 mt-10 text-gray-200">
          Playwright
        </h2>
        <p className="mb-6">
          Playwright is an open-source testing framework developed by Microsoft
          that allows automated testing of web applications across multiple
          browsers. Playwright supports all modern engines including Chromium,
          WebKit, and Firefox. It's super easy to install.
        </p>
        <p className="mb-6 p-6 bg-slate-700/50 border-l-4 border-blue-500 rounded-lg shadow-lg text-lg font-medium text-gray-200">
          During my time at my previous roles, I had the chance to develop
          strong skills in both Cypress and Playwright. In my first role,
          Cypress was already integrated with a few tests, and as a beginner, I
          found it easy to get started. Later, at my next company, Cypress had
          around 2000 tests integrated. Although Playwright wasn’t fully
          integrated at that point, I took the initiative to learn and
          experiment with it, despite having limited prior experience.
        </p>

        <hr className="border-gray-600 w-full max-w-lg md:max-w-2xl my-8" />

        <div className="relative w-full max-w-full h-auto sm:h-[300px] md:h-[400px] lg:h-[500px]">
          <DownloadsChart />
        </div>

        <hr className="border-gray-600 w-full max-w-lg md:max-w-2xl my-8" />
        <h2 className="text-3xl font-extrabold mb-4 text-gray-200">
          Comparing Playwright and Cypress
        </h2>
        <p className="mb-6">
          Playwright and Cypress are both powerful tools for end-to-end testing,
          but their features and use cases differ significantly. Here's a
          detailed comparison of these two frameworks based on key aspects:
        </p>
        <ol className="list-decimal ml-6 space-y-8 mb-6">
          <li>
            <strong className="text-xl">Cross-Browser Support:</strong>
            <p>
              <strong>Playwright</strong> supports Chromium, Firefox, and WebKit
              (Safari), offering extensive cross-browser testing capabilities.
            </p>
            <p className="mt-1">
              <strong>Cypress</strong>, while strong in Chromium-based browsers
              like Chrome and Edge, fully supports Firefox. However, WebKit
              support remains experimental. Cross-browser compatibility in
              Cypress requires the browsers to be installed locally, a condition
              that applies to Playwright as well.
            </p>
          </li>

          <li>
            <strong className="text-lg">Supported Platforms:</strong>
            <p>
              <strong>Playwright</strong> supports mobile browser emulation for
              Android and iOS, alongside cross-operating system compatibility.{" "}
              <strong>Cypress</strong> also supports mobile emulation but
              requires manual configuration of viewport sizes rather than using
              predefined device names.
            </p>
          </li>

          <li>
            <strong className="text-lg">
              Performance and Parallelization:
            </strong>
            <p>
              <strong>Playwright</strong> excels in parallel test execution
              across multiple browsers, reducing test suite runtimes
              effectively. <strong>Cypress</strong> offers parallelization
              through cloud-based CI/CD pipelines. Local parallelization is
              supported via plugins.
            </p>
          </li>

          <li>
            <strong className="text-lg">
              Network Interception and Control:
            </strong>
            <p>
              <strong>Playwright</strong>: Offers advanced network interception
              capabilities using <code>page.route()</code>. You can modify
              requests before they are sent to the server, such as changing HTTP
              methods, headers, or redirecting requests to mock services.
              Playwright also provides seamless mocking of responses directly in
              the request flow.
              <br />
              <strong>Cypress</strong>: Allows request interception with{" "}
              <code>cy.intercept()</code> and supports pre-request modifications
              like altering headers, methods, or mocking responses. Cypress also
              enables redirecting requests to mock services. However, Playwright
              may offer slightly more granular control in some cases, especially
              for advanced scenarios involving dynamic routing. I will discuss
              this advanced control and dynamic routing in more detail in the
              next section.
            </p>

            <div className="max-w-[23rem] lg:max-w-full 2xl:max-w-full md:max-w-full sm:max-w-full">
              <SyntaxHighlighter
                language="javascript"
                style={oneDark}
                className="mb-6 rounded-md overflow-auto syntax-highlighter"
              >
                {`// Playwright: Network Interception
await page.route('**/api/v1/users', (route) => {
  // Modify the request before it reaches the server
  route.continue({
    method: 'POST',
    headers: {
      ...route.request().headers(),
      'x-custom-header': 'PlaywrightIntercept',
    },
  });
});

// Mocking a response directly
await page.route('**/api/v1/users', (route) => {
  route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify({ success: true, message: 'Mocked Response' }),
  });
});

// Cypress: Network Interception
cy.intercept(
  {
    method: 'GET', // Match specific method
    url: '**/api/v1/users', // Match the request URL
  },
  (req) => {
    // Modify the request before sending
    req.headers['x-custom-header'] = 'CypressIntercept';
    req.method = 'POST';

    // Mock response
    req.reply({
      statusCode: 200,
      body: { success: true, message: 'Mocked Response' },
    });
  }
);

// Verify interception
cy.intercept('POST', '**/api/v1/users').as('createUser');
cy.visit('/users');
cy.wait('@createUser').then((interception) => {
  expect(interception.response.statusCode).to.equal(200);
  expect(interception.response.body.message).to.equal('Mocked Response');
});
`}
              </SyntaxHighlighter>
            </div>
          </li>

          <li>
            <strong className="text-lg">
              Dynamic Request Routing and Granular Control:
            </strong>
            <p>
              In some cases, Playwright offers more granular control, especially
              when dealing with advanced scenarios such as dynamic routing. You
              can conditionally modify requests and responses based on runtime
              data, URL parameters, or other dynamic factors. This flexibility
              is especially useful for testing complex APIs with multiple
              endpoints and variable parameters.
            </p>

            <div className="max-w-[23rem] lg:max-w-full 2xl:max-w-full md:max-w-full sm:max-w-full">
              <SyntaxHighlighter
                language="javascript"
                style={oneDark}
                className="mb-6 rounded-md overflow-auto syntax-highlighter"
              >
                {`// Playwright: Dynamic Request Routing and Advanced Interception
await page.route('**/api/v1/users/**', (route, request) => {
  // Conditionally modify request based on dynamic URL parameters
  if (request.url().includes('specificUserId')) {
    route.continue({
      method: 'GET',
      headers: {
        ...request.headers(),
        'x-user-id': 'specialUser123'
      }
    });
  } else {
    // Handle generic requests
    route.continue();
  }
});

// Mocking a response dynamically
await page.route('**/api/v1/users/**', (route) => {
  route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify({
      success: true,
      message: route.request().url().includes('special') ? 'Special User Mock' : 'Generic Mock'
    }),
  });
});

// Cypress: Network Interception (with static routing)
cy.intercept(
  {
    method: 'GET',
    url: '**/api/v1/users',
  },
  (req) => {
    // Modify request headers and mock response
    req.headers['x-custom-header'] = 'CypressIntercept';
    req.method = 'POST';
    req.reply({
      statusCode: 200,
      body: { success: true, message: 'Mocked Response' },
    });
  }
);

// Cypress allows basic conditional interception, but lacks the same dynamic routing flexibility as Playwright
cy.intercept('POST', '**/api/v1/users').as('createUser');
cy.visit('/users');
cy.wait('@createUser').then((interception) => {
  expect(interception.response.statusCode).to.equal(200);
  expect(interception.response.body.message).to.equal('Mocked Response');
});
`}
              </SyntaxHighlighter>
            </div>
          </li>

          <li>
            <strong className="text-lg">Multi-Tab Handling:</strong>
            <p>
              <strong>Playwright</strong> offers native support for handling
              multiple tabs or windows, making it ideal for complex navigation
              flows. <strong>Cypress</strong>, however, lacks native multi-tab
              support and relies on workarounds, such as forcing new tabs to
              open in the same window.
            </p>

            <div className="max-w-[23rem] lg:max-w-full 2xl:max-w-full md:max-w-full sm:max-w-full">
              <SyntaxHighlighter
                language="javascript"
                style={oneDark}
                className="mb-6 rounded-md overflow-auto syntax-highlighter"
              >
                {`// Playwright: Native Multi-Tab Handling

// Open a new tab
const [newPage] = await Promise.all([
  context.waitForEvent('page'),
  page.click('a[target="_blank"]') // Click link opening a new tab
]);

// Interact with the new tab
await newPage.waitForLoadState();
await newPage.type('#input', 'Playwright multi-tab test');
await newPage.click('button.submit');

// Switch back to the original tab
await page.bringToFront();

// Cypress: Workaround for Multi-Tab Handling

// Force links to open in the same tab by removing 'target="_blank"'
cy.get('a[target="_blank"]').invoke('removeAttr', 'target').click();

// Interact with the newly loaded page
cy.url().should('include', '/new-tab');
cy.get('#input').type('Cypress single-tab workaround');
cy.get('button.submit').click();
`}
              </SyntaxHighlighter>
            </div>
          </li>

          <li>
            <strong className="text-lg">Test Isolation:</strong>
            <p>
              Both frameworks support test isolation by default. The perception
              of weaker isolation in <strong>Cypress</strong> often stems from
              tester practices rather than the tool itself.
            </p>
          </li>

          <li>
            <strong className="text-lg">Programming Language Support:</strong>
            <p>
              <strong>Cypress</strong> supports JavaScript and TypeScript, while{" "}
              <strong>Playwright</strong> extends its capabilities to additional
              languages, including Python, Java, and C#, making it a better
              choice for teams working in diverse language environments.
            </p>
          </li>

          <li>
            <strong className="text-lg">Debugging Tools:</strong>
            <p>
              <strong>Cypress</strong> simplifies debugging with its interactive
              Test Runner and time-travel snapshots. The <code>.debug()</code>{" "}
              command is particularly useful for inspecting the state during
              test execution.
            </p>
            <p>
              <strong>Playwright</strong>, on the other hand, integrates deeply
              with tools like VS Code, providing powerful debugging options such
              as breakpoints and a trace viewer.
            </p>
          </li>
        </ol>

        <hr className="border-gray-600 w-full max-w-lg md:max-w-2xl my-8" />

        {/* Debugging  */}

        <h2 className="text-3xl font-extrabold mb-4 text-gray-200">
          Debugging
        </h2>
        <p className="mb-6">
          Debugging in Cypress and Playwright offers different approaches. In
          Cypress, you’re limited to using <code className="">.pause()</code> or
          <code>.debug()</code> on selected elements. When you use
          <code>.debug()</code>, Cypress will freeze the test and print the
          selector results in the Chrome console. You can then hover over the
          HTML element in Chrome to check if your selector is working.
        </p>

        <p className="mb-6">
          However, the issue is that you can only see the value for that
          particular line. You don’t get access to any other states created by
          the test code. Adding breakpoints or using the{" "}
          <code className="">debugger</code> statement doesn’t help much because
          Cypress runs all code first and handles the rest asynchronously. If
          you want to inspect async code, you’d need to place the debugger
          inside a resolve function to make sure the code has finished. But even
          then, you can only see the value for that line, and you can't check
          the rest of the test state.
        </p>

        <p className="mb-6">
          Another option is to use a third-party library like Promisify, which
          converts Cypress’s async functionality into Promises. This allows you
          to add debugger statements after await to inspect variables that have
          been awaited. The problem with this approach is that Cypress wasn’t
          designed to work with async/await, so you may run into issues. I tried
          this and faced several problems, so I switched back to using Cypress's
          built-in <code>.debug()</code> function.
        </p>

        <p className="mb-6">
          Playwright, on the other hand, integrates well with Visual Studio Code
          and fully supports promises and async/await. You can debug your tests
          directly in VSCode, stop at any point, and check the state of any
          variable. It even highlights DOM elements in Chromium when you hover
          over a selector expression in VSCode (it works with multi-dot
          selectors too!).
        </p>

        <p className="mb-6">
          Playwright also has its own inspector where you can run tests step by
          step while watching them in Chromium. This allows you to evaluate
          selectors in real-time while the test is paused.
        </p>

        <hr className="border-gray-600 w-full max-w-lg md:max-w-2xl my-8" />

        {/* Nested selectors comparison */}

        <h2 className="text-3xl font-extrabold mb-4 text-gray-200">
          Powerful Selectors & Nested Selectors
        </h2>
        <p className="mb-2">
          Both <strong>Cypress</strong> and <strong>Playwright</strong> support
          powerful ways to select elements on a page. While they share many
          similarities, the key difference lies in how selectors are managed and
          how each framework approaches deeply nested structures.
          <strong>Playwright</strong> provides native support for various
          selectors such as CSS, XPath, ARIA roles, and text-based queries,
          which offers developers more flexibility and power. On the other hand,{" "}
          <strong>Cypress</strong> can achieve similar results using the
          open-source{" "}
          <a
            href="https://www.npmjs.com/package/@testing-library/cypress"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Testing Library
          </a>{" "}
          plugin, requiring additional setup but providing comparable
          functionality.
        </p>

        <h3 className="text-xl font-semibold mb-2">Powerful Selectors</h3>
        <div className="max-w-[23rem] lg:max-w-full 2xl:max-w-full md:max-w-full sm:max-w-full">
          <SyntaxHighlighter
            language="javascript"
            style={oneDark}
            className="mb-6 rounded-md overflow-auto syntax-highlighter"
          >
            {`// Playwright Selector Examples

// CSS Selector
await page.click('button.submit-btn');

// Text Selector
await page.click('text="Submit"');

// XPath Selector
await page.locator('//button[text()="Submit"]').click();

// ARIA Role Selector
await page.getByRole('button', { name: 'Submit' }).click();
    
// Cypress with Testing Library Selector Example

// Using Testing Library's findByRole
cy.findByRole('button', { name: /submit/i }).click();
    
// Using Testing Library's findByText
cy.findByText('Submit').click();

// Basic Cypress CSS Selector
cy.get('button.submit-btn').click();`}
          </SyntaxHighlighter>
        </div>

        <p className="mb-2">
          <strong>Playwright</strong> natively supports a variety of selectors,
          including CSS, text, XPath, and ARIA roles. In contrast,{" "}
          <strong>Cypress</strong> requires the use of the Testing Library for
          role, label, and text-based selectors, but once set up, the
          functionality is comparable.
        </p>

        <hr className="border-gray-600 w-full max-w-lg md:max-w-2xl my-8" />

        {/* Conclusion Section */}
        <h2 className="text-3xl font-extrabold mb-4 text-gray-200">
          Conclusion
        </h2>
        <p className="mb-6">
          Both tools are powerful, and the choice often depends on specific
          project needs. Cypress is ideal for simple to moderately complex web
          apps with a focus on ease of use and a strong developer experience.
          Playwright is better suited for more complex scenarios, especially if
          cross-browser testing, multi-page interactions, or deep network
          control are required.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href="https://github.com/artshllk/e2e-testing-hub/fork"
          className="flex items-center bg-gray-800 text-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-300 transform hover:bg-gray-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            stroke="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M15.621 4.379a3 3 0 010 4.242l-8 8a3 3 0 01-4.242-4.242L10.414 7H3a1 1 0 110-2h7.414L3.379 1.379a3 3 0 114.242-4.242l8 8z"
              clipRule="evenodd"
            />
          </svg>
          Edit on GitHub
        </a>
      </div>
    </div>
  );
}
