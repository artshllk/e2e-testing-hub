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
          Key Differences
        </h2>
        <p className="mb-6">
          They are both popular tools for end-to-end testing, but they differ in
          terms of functionality, flexibility, and the use cases they support.
          Here are the key differences between the two:
        </p>
        <ol className="list-decimal ml-6 space-y-8 mb-6">
          <li>
            <strong className="text-lg">Cross-Browser Support:</strong>
            <p>
              <strong>Playwright</strong> offers full support for Chromium,
              Firefox, and WebKit (Safari), allowing tests to run seamlessly
              across these browsers. This makes it highly suitable for
              applications that need to function correctly in various
              environments.
              <br />
            </p>
            <p className="mt-1">
              <strong>Cypress</strong> primarily focuses on Chromium-based
              browsers (like Chrome and Edge) and has limited support for
              Firefox and experimental WebKit. While it can handle some
              cross-browser testing, its capabilities are not as extensive as
              Playwright's.
            </p>
          </li>

          <li>
            <strong className="text-lg">Supported Platforms:</strong>
            <p>
              While <strong>Cypress</strong> mainly targets desktop web
              applications, <strong>Playwright</strong> supports a broader range
              of platforms, including mobile browser emulation for Android and
              iOS, along with cross-operating system compatibility.
            </p>
          </li>

          <li>
            <strong className="text-lg">Speed and Performance:</strong>
            <p>
              <strong>Playwright</strong> is optimized for parallelization and
              high performance across multiple browsers, significantly reducing
              test suite execution times. <strong>Cypress</strong>, on the other
              hand, may encounter limitations with larger test suites or diverse
              browser environments.
            </p>
          </li>

          <li>
            <strong className="text-lg">
              Network Interception and Control:
            </strong>
            <p>
              <strong>Playwright</strong> offers advanced network interception
              capabilities, giving you granular control over API requests and
              responses. This allows you to simulate complex network conditions,
              mock responses, or even modify headers dynamically. Its deeper
              integration with the browser enables actions like intercepting
              requests before they reach the network stack. This makes
              Playwright more suitable for testing intricate network scenarios.
              <br />
              On the other hand, while <strong>Cypress</strong> does provide
              network control through <code>cy.intercept()</code>, its
              capabilities are more limited. <strong>Cypress</strong> is
              constrained by its browser-centric design, which restricts
              fine-grained control over network traffic. Its intercepting
              feature is useful for simpler use cases but doesn’t offer the same
              flexibility as <strong>Playwright</strong>.
            </p>
            <p className="text-xltext-gray-200 font-semibold mt-4">
              Playwright Example:
            </p>
            <p className="">
              In this example, we intercept an API request and modify its
              headers and method before it is sent to the server. Additionally,
              if the request is not the target URL, we let it continue as
              normal.
            </p>
            <div className="max-w-80 lg:max-w-full 2xl:max-w-full md:max-w-full sm:max-w-full">
              <SyntaxHighlighter
                language="javascript"
                style={oneDark}
                className="mb-6 rounded-md overflow-auto syntax-highlighter"
              >
                {`// Intercept and modify a request in Playwright
page.on('route', route => {
  // Check if the request URL matches the target pattern
  if (route.request().url().includes('example.com')) {
    route.continue({
      method: 'GET', // Modify the HTTP method (e.g., from POST to GET)
      headers: { 
        ...route.request().headers(), // Retain existing headers
        'X-Custom-Header': 'value' // Add a custom header
      },
    });
  } else {
    // Continue without modification for other requests
    route.continue();
  }
});

// Trigger the page load to initiate network requests
await page.goto('https://your-website.com');`}
              </SyntaxHighlighter>
            </div>
            <p className="">
              Here, <strong>Playwright</strong> gives you control to modify
              headers dynamically and change HTTP methods based on the request
              URL. This approach is highly useful for simulating real-world
              network failures, such as altering the request before it hits the
              server.
            </p>
            <p className="text-xl text-gray-200 font-semibold mt-2">
              Cypress Example:
            </p>
            <p className="">
              In this simpler example, we modify the headers of a request using
              <code>cy.intercept()</code>. While this is functional, it's
              limited because Cypress can only modify the request after it has
              been initiated.
            </p>
            <div className="max-w-80 lg:max-w-full 2xl:max-w-full md:max-w-full sm:max-w-full">
              <SyntaxHighlighter
                language="javascript"
                style={oneDark}
                className="mb-6 rounded-md overflow-auto syntax-highlighter"
              >
                {`// Intercept and modify a request in Cypress
cy.intercept('GET', '**/example.com', (req) => {
  req.headers['X-Custom-Header'] = 'value'; // Modify request headers
  req.continue(); // Proceed with the request
});

// Visit the website that will trigger the network request
cy.visit('https://your-website.com');`}
              </SyntaxHighlighter>
            </div>
            <p className="">
              <strong>Cypress</strong> intercepts the request after it has been
              sent, which means you can't modify the request's method or block
              it before it reaches the server. Although this is fine for many
              cases, it lacks the flexibility Playwright offers for more
              advanced use cases.
            </p>
          </li>

          <li>
            <strong className="text-lg">Multi-Tab Handling</strong>
            <p>
              Cypress does not natively support handling multiple tabs due to
              its architectural design. However, workarounds exist for scenarios
              where applications open links in new tabs. For example, you can
              modify the behavior to open links in the same tab:
            </p>

            <div className="max-w-80 lg:max-w-full 2xl:max-w-full md:max-w-full sm:max-w-full">
              <SyntaxHighlighter
                language="javascript"
                style={oneDark}
                className="mb-6 rounded-md overflow-auto syntax-highlighter"
              >
                {`it('Handling new tab', () => {
  cy.get('#contact-us')
    .invoke("removeAttr", "target")
    .click(); // This will open the contact page in the same tab
  cy.get("h1").should("have.text", "Contact");
});`}
              </SyntaxHighlighter>
            </div>
            <p>
              In contrast, Playwright provides native support for handling
              multiple pages and tabs, making it more efficient for testing
              applications with complex navigation flows:
            </p>

            <div className="max-w-80 lg:max-w-full 2xl:max-w-full md:max-w-full sm:max-w-full">
              <SyntaxHighlighter
                language="javascript"
                style={oneDark}
                className="mb-6 rounded-md overflow-auto syntax-highlighter"
              >
                {`test('Handling new tab', async ({ page, context }) => {
  await page.goto('https://example.com');
  
  // Click the link that opens a new tab
  const [newTab] = await Promise.all([
    context.waitForEvent('page'), // Wait for the new tab to open
    page.click('#open-new-tab') // Trigger the new tab opening
  ]);

  await newTab.waitForLoadState(); // Ensure the new tab is loaded
  await expect(newTab).toHaveTitle('Expected New Tab Title'); // Verify the title
});`}
              </SyntaxHighlighter>
            </div>
          </li>

          <li>
            <strong className="text-lg">Debugging and Test Writing:</strong>
            <p>
              <strong>Cypress</strong> makes debugging easier with its
              interactive Test Runner. You can hover over each step in your test
              to see exactly what happened, thanks to features like time-travel
              snapshots. The <code>.debug()</code> command is also handy for
              pausing tests and inspecting the current state.
            </p>
            <p className="mt-1">
              {" "}
              <strong>Playwright</strong>, though, really shines when you’re
              dealing with more complex debugging. It supports async/await for
              better control over your test flow and integrates seamlessly with
              tools like Visual Studio Code, where you can set breakpoints and
              inspect the DOM directly. Features like the Playwright Inspector
              and trace viewer give you even more ways to troubleshoot tricky
              scenarios.
            </p>
          </li>

          <li>
            <strong className="text-lg">Community:</strong>
            <p>
              Cypress has a well-established and larger community, making it
              easier to find resources, plugins, and troubleshooting help.
              Playwright’s community, while smaller, is growing rapidly with
              robust support from its development team.
            </p>
          </li>

          <li>
            <strong className="text-lg">Test Isolation:</strong>
            <p>
              Playwright offers excellent test isolation by design, allowing
              tests to run independently without shared state. Cypress requires
              additional effort to manage shared state between tests, which can
              complicate test suites.
            </p>
          </li>

          <li>
            <strong className="text-lg">CI/CD Integration:</strong>
            <p>
              Both tools integrate seamlessly into CI/CD pipelines. However,
              Playwright’s superior cross-browser support makes it a better
              choice for diverse and large-scale test suites in continuous
              integration environments.
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
          Powerful Nested Selectors
        </h2>
        <p className="mb-2">
          One area where <strong>Cypress</strong> excels is handling deeply
          nested selectors. Using
          <code>cy.within()</code>, <strong>Cypress</strong> lets you easily
          scope commands to a specific element, making it easier to interact
          with complex layouts:
        </p>

        <div className="max-w-80 lg:max-w-full 2xl:max-w-full md:max-w-full sm:max-w-full">
          <SyntaxHighlighter
            language="javascript"
            style={oneDark}
            className="mb-6 rounded-md overflow-auto syntax-highlighter"
          >
            {`cy.get('.first-div').within(() => {
    cy.get('.second-div').within(() => {
      cy.get('.target-element').should('be.visible');
    });
  });`}
          </SyntaxHighlighter>
        </div>

        <p className="mb-2">
          Cypress’s <code>cy.within()</code> method allows you to scope commands
          to a specific container, creating more readable, maintainable tests.
          Playwright, however, requires separate <code>locator</code> calls,
          which can make deeply nested selections more verbose and harder to
          follow:
        </p>

        <div className="max-w-80 lg:max-w-full 2xl:max-w-full md:max-w-full sm:max-w-full">
          <SyntaxHighlighter
            language="javascript"
            style={oneDark}
            className="mb-6 rounded-md overflow-auto syntax-highlighter"
          >
            {`const container = await page.locator('.first-div');
  const nestedContainer = await container.locator('.second-div');
  await nestedContainer.locator('.target-element').isVisible();`}
          </SyntaxHighlighter>
        </div>

        <p className="mb-6">
          While Playwright's syntax is powerful, the lack of a direct equivalent
          to <code>cy.within()</code> means handling complex structures may feel
          more cumbersome, especially in applications with deeply nested
          elements. In such cases, Cypress’s nested selectors provide a smoother
          experience by keeping everything neatly scoped within a single chain.
        </p>

        <hr className="border-gray-600 w-full max-w-lg md:max-w-2xl my-8" />

        {/* Performance Comparison Section */}
        <h2 className="text-3xl font-extrabold mb-4 text-gray-200">
          Performance Comparison
        </h2>
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
