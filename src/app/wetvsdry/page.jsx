import { articles } from "@/pages";
import "@/styles/globals.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function WetVsDry() {
  return (
    <div className="flex flex-col items-center min-h-screen pt-10 px-4 md:px-20 text-customLightGray">
      {/* Header Section */}
      <div className="text-left mb-8 w-full max-w-lg md:max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          {articles[1].name}
        </h1>
        <p className="text-gray-400 text-sm mt-2 font-serif">
          November 10, 2024
        </p>
      </div>

      {/* Article Content */}
      <div className="text-left w-full max-w-lg md:max-w-2xl">
        <div className="text-lg leading-relaxed mb-6">
          <p>
            When it comes to writing tests, you might hear two terms frequently:
            WET (Write Everything Twice) and DRY (Don’t Repeat Yourself).
          </p>

          <p className="mt-2 mb-4">
            Understanding the difference between WET and DRY testing is crucial
            because I've often seen how quickly things can become difficult to
            manage. When tests aren't structured thoughtfully from the start, it
            can be challenging and time-consuming to refactor them later on
          </p>

          <hr className="border-gray-600 w-full max-w-lg md:max-w-2xl my-8" />

          <h2 className="text-3xl font-extrabold mt-6 mb-2">WET Tests</h2>
          <p>
            WET testing refers to a testing style where some code repetition is
            allowed in the test cases. This is often seen as a trade-off for
            readability, especially when the tests are simple.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Pros:</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>Simplicity:</strong> WET tests can be more straightforward
              and easy to understand, especially for beginners.
            </li>
            <li>
              <strong>Isolation:</strong> Each test is independent, meaning you
              don’t need to worry about side effects between tests.
            </li>
            <li>
              <strong>Quick to write:</strong> In smaller codebases, or when
              writing simple tests, you may find WET tests easier and faster to
              implement.
            </li>
          </ul>

          <hr className="border-gray-600 w-full max-w-lg md:max-w-2xl my-8" />

          <h3 className="text-xl font-semibold mt-6">Example:</h3>
          <SyntaxHighlighter
            language="javascript"
            style={oneDark}
            className="mb-6 rounded-md overflow-auto syntax-highlighter"
          >
            {`describe('Login Tests - WET', () => {
  test('should allow user to login with valid credentials', async () => {
    await page.goto('https://example.com/login');
    await page.fill('input[name="username"]', 'user1');
    await page.fill('input[name="password"]', 'password1');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('https://example.com/dashboard');
  });

  test('should show an error with invalid credentials', async () => {
    await page.goto('https://example.com/login');
    await page.fill('input[name="username"]', 'user1');
    await page.fill('input[name="password"]', 'wrongpassword');
    await page.click('button[type="submit"]');
    await expect(page).toHaveText('Invalid username or password');
  });
});`}
          </SyntaxHighlighter>

          <p>
            In this WET test, the code for filling out the login form and
            clicking the submit button is repeated in both test cases.
          </p>

          <h2 className="text-3xl font-extrabold mt-6 mb-2">DRY Tests</h2>
          <p>
            DRY is a principle where you aim to avoid repeating code. In the
            context of tests, this means abstracting shared logic into reusable
            functions or setup steps, reducing duplication.
          </p>

          <h3 className="text-xl font-semibold mt-4">Pros:</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>Less redundancy:</strong> DRY tests are more efficient,
              especially for larger projects where the same logic might be
              needed across multiple tests.
            </li>
            <li>
              <strong>Easier maintenance:</strong> When test logic changes, you
              only need to update it in one place.
            </li>
            <li>
              <strong>Cleaner tests:</strong> DRY tests tend to be more concise
              and focused on testing the behavior rather than setting up the
              same steps over and over.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Example:</h3>
          <SyntaxHighlighter
            language="javascript"
            style={oneDark}
            className="mb-6 rounded-md overflow-auto syntax-highlighter"
          >
            {`describe('Login Tests - DRY', () => {
  const login = async (username, password) => {
    await page.goto('https://example.com/login');
    await page.fill('input[name="username"]', username);
    await page.fill('input[name="password"]', password);
    await page.click('button[type="submit"]');
  };

  test('should allow user to login with valid credentials', async () => {
    await login('user1', 'password1');
    await expect(page).toHaveURL('https://example.com/dashboard');
  });

  test('should show an error with invalid credentials', async () => {
    await login('user1', 'wrongpassword');
    await expect(page).toHaveText('Invalid username or password');
  });
});`}
          </SyntaxHighlighter>

          <p>
            In this DRY test, the common login functionality has been abstracted
            into the login function, avoiding repetition.
          </p>

          <p className="mt-6">
            This example may be simple, but the goal of this blog is to provide
            a clear understanding of the pros and cons of WET and DRY
            approaches, helping you decide which is more suitable for your
            testing needs.
          </p>

          <hr className="border-gray-600 w-full max-w-lg md:max-w-2xl my-8" />

          <h2 className="text-3xl font-extrabold mt-6 mb-2">
            When to Use WET vs. DRY
          </h2>
          <p>
            From my personal experience, I highly recommend having a clear
            understanding of the requirements before you start writing tests. On
            a broader level, if your goal is simply to create a few test cases,
            avoid creating variables for selectors that you only use once or
            twice. However, if you're building a larger suite of tests with
            similar, critical application flows, the DRY principle can be
            invaluable. Using DRY will make your test suite easier to maintain
            in the long run.
          </p>
          <h3 className="text-xl font-semibold mt-4">Use WET when:</h3>
          <ul className="list-disc pl-5">
            <li>Your tests are simple and self-contained.</li>
            <li>
              You're dealing with code that's unlikely to change frequently.
            </li>
            <li>You need clarity and simplicity in your tests.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Use DRY when:</h3>
          <ul className="list-disc pl-5">
            <li>You have repeated logic in multiple tests.</li>
            <li>
              You're working in a larger codebase where duplication could lead
              to maintainability issues.
            </li>
            <li>
              You need to refactor your tests for better clarity and efficiency.
            </li>
          </ul>

          <h2 className="text-3xl font-extrabold mt-7 mb-3">Conclusion</h2>
          <p>
            While the DRY principle is widely encouraged, it’s important to
            strike a balance between readability and maintainability. Sometimes,
            writing slightly repetitive tests (WET) can improve clarity,
            especially when the tests are short and focused. However, for larger
            and more complex test suites, adopting the DRY principle will lead
            to cleaner, more maintainable code.
          </p>

          <p>
            Ultimately, test clarity and maintainability should always be your
            goal, so choose the approach that fits your project’s scale and
            complexity.
          </p>
        </div>
      </div>
    </div>
  );
}
