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
          When I started in test automation, Cypress was the only tool I used.
          At first I wrote very simple tests without knowing the best
          practices, and over time I moved on to more complex test cases. At the
          same time I was learning JavaScript. Once I had the basics of JS, I
          started asking more questions about Cypress: what you can test with
          it, how it works, and so on. Cypress is known for its easy syntax and
          it works well for end-to-end testing. Playwright feels similar, but
          for someone new to testing, I think Cypress is easier to start with.
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
              <strong>Cypress</strong> works with Chrome, Edge, Electron, and
              Firefox. WebKit (Safari) support is still experimental. Cypress
              runs tests in the browsers that are already installed on your
              machine. Playwright works differently here: it downloads its own
              browsers with <code>npx playwright install</code>, so every
              machine runs the tests on the same browser versions.
            </p>
          </li>

          <li>
            <strong className="text-lg">Supported Platforms:</strong>
            <p>
              <strong>Playwright</strong> can emulate mobile browsers for
              Android and iOS, and it runs on Windows, macOS, and Linux. It has
              ready device profiles, for example{" "}
              <code>devices['iPhone 13']</code>, that set the screen size, user
              agent, and touch support.{" "}
              <strong>Cypress</strong> also has ready device names, for example{" "}
              <code>cy.viewport('iphone-x')</code>, but they only change the
              screen size.
            </p>
          </li>

          <li>
            <strong className="text-lg">
              Performance and Parallelization:
            </strong>
            <p>
              <strong>Playwright</strong> runs tests in parallel by default,
              using several workers on one machine. This makes big test suites
              much faster. <strong>Cypress</strong> can run tests in parallel
              across several CI machines with Cypress Cloud. To run tests in
              parallel on one machine, you need a third-party plugin.
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
              enables redirecting requests to mock services. For most cases,
              both tools can do the same things here. The main difference is
              the code style: Playwright uses async/await, and Cypress uses its
              own command chain.
            </p>

            <div className="max-w-[23rem] lg:max-w-full 2xl:max-w-full md:max-w-full sm:max-w-full">
              <SyntaxHighlighter
                language="javascript"
                style={oneDark}
                className="mb-6 rounded-md overflow-auto syntax-highlighter"
              >
                {`// Playwright, example 1: change the request before it reaches the server
await page.route('**/api/v1/users', (route) => {
  route.continue({
    headers: {
      ...route.request().headers(),
      'x-custom-header': 'PlaywrightIntercept',
    },
  });
});

// Playwright, example 2: return a mocked response
await page.route('**/api/v1/users', (route) => {
  route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify({ success: true, message: 'Mocked Response' }),
  });
});

// Cypress, example 1: change the request before it reaches the server
cy.intercept('GET', '**/api/v1/users', (req) => {
  req.headers['x-custom-header'] = 'CypressIntercept';
});

// Cypress, example 2: return a mocked response and check it
cy.intercept('GET', '**/api/v1/users', {
  statusCode: 200,
  body: { success: true, message: 'Mocked Response' },
}).as('getUsers');

cy.visit('/users');
cy.wait('@getUsers').then((interception) => {
  expect(interception.response.statusCode).to.equal(200);
  expect(interception.response.body.message).to.equal('Mocked Response');
});
`}
              </SyntaxHighlighter>
            </div>
          </li>

          <li>
            <strong className="text-lg">
              Changing Requests Based on Conditions:
            </strong>
            <p>
              Sometimes you want to change a request or a response only in some
              cases, for example based on the URL, a query parameter, or the
              request body. Both tools can do this. In Playwright you check the
              request inside <code>page.route()</code>. In Cypress you do the
              same inside the <code>cy.intercept()</code> handler, which gets
              the full request. The result is the same. It mostly comes down to
              which code style your team prefers.
            </p>

            <div className="max-w-[23rem] lg:max-w-full 2xl:max-w-full md:max-w-full sm:max-w-full">
              <SyntaxHighlighter
                language="javascript"
                style={oneDark}
                className="mb-6 rounded-md overflow-auto syntax-highlighter"
              >
                {`// Playwright: change the request only for one user
await page.route('**/api/v1/users/**', (route, request) => {
  if (request.url().includes('specificUserId')) {
    route.continue({
      headers: { ...request.headers(), 'x-user-id': 'specialUser123' },
    });
  } else {
    route.continue();
  }
});

// Cypress: the same thing
cy.intercept('GET', '**/api/v1/users/**', (req) => {
  if (req.url.includes('specificUserId')) {
    req.headers['x-user-id'] = 'specialUser123';
  }
  // Other requests go to the server without changes
});

// Playwright: return a different mock based on the URL
await page.route('**/api/v1/users/**', (route) => {
  const isSpecial = route.request().url().includes('special');
  route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify({ message: isSpecial ? 'Special User Mock' : 'Generic Mock' }),
  });
});

// Cypress: the same thing
cy.intercept('GET', '**/api/v1/users/**', (req) => {
  const isSpecial = req.url.includes('special');
  req.reply({
    statusCode: 200,
    body: { message: isSpecial ? 'Special User Mock' : 'Generic Mock' },
  });
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
await newPage.fill('#input', 'Playwright multi-tab test');
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
          Debugging in Cypress and Playwright works in different ways. In
          Cypress, the main tools are <code className="">.pause()</code>,{" "}
          <code>.debug()</code>, and the time-travel snapshots in the Test
          Runner. When you use
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
          Another option is to use a third-party library that turns Cypress
          commands into Promises. This allows you
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
          <strong>Playwright</strong> has built-in support for CSS, XPath, text,
          and ARIA role selectors. <strong>Cypress</strong> has CSS selectors
          and text search with <code>cy.contains()</code> built in. For role and
          label selectors, you can add the open-source{" "}
          <a
            href="https://www.npmjs.com/package/@testing-library/cypress"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Testing Library
          </a>{" "}
          plugin. It needs a little setup, but then it works in a similar way.
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

// Built-in Cypress text search (no plugin needed)
cy.contains('button', 'Submit').click();

// Basic Cypress CSS Selector
cy.get('button.submit-btn').click();`}
          </SyntaxHighlighter>
        </div>

        <p className="mb-2">
          In short, <strong>Playwright</strong> has CSS, text, XPath, and ARIA
          role selectors built in. <strong>Cypress</strong> has CSS and text
          built in, and needs Testing Library for role and label selectors.
          After that setup, both work in a similar way.
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
