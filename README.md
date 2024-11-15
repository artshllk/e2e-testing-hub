# Articles Website

A simple **Next.js** website showcasing three articles about **end-to-end (E2E) testing**, with a modern, responsive design using **Tailwind CSS**.

## Features

- **Dynamic Articles List**: Displays a list of articles with titles, dates, descriptions, and links to full content.
- **Responsive Design**: Fully optimized for both desktop and mobile devices using Tailwind CSS.
- **Interactive Hover Effects**: Engaging hover effects on articles for better user interaction.
- **Article Pages**: Each article has its own dedicated page for detailed reading.
- **Syntax Highlighting**: Code snippets are rendered using `react-syntax-highlighter` with the **One Dark** theme.
- **Icons**: Enhanced visuals with **React Icons** for better illustrations.

## Articles Included

1. **[Cypress vs Playwright](https://artshllk.github.io/e2e-testing-hub/cypressvsplaywright)**  
   _Date:_ October 1, 2024  
   _Description:_ A comparison of the leading E2E testing frameworks.

2. **[Should Tests Be WET or DRY?](https://artshllk.github.io/e2e-testing-hub/wetvsdry)**  
   _Date:_ October 23, 2024  
   _Description:_ Finding the right balance in writing automated tests.

3. **[Best E2E Automation Testing Practices](https://artshllk.github.io/e2e-testing-hub/beste2epractices)**  
   _Date:_ November 2, 2024  
   _Description:_ Advanced strategies to improve test stability and reduce flakiness.

## Technologies Used

- **[Next.js](https://nextjs.org/)**: Framework for server-rendered React applications.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for styling.
- **[React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)**: Library for rendering code snippets.
- **[React Icons](https://react-icons.github.io/react-icons/)**: For adding scalable vector icons to the website.

## Installation and Setup

1. **Clone this repository**:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Open the website**: Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

├── .github
│ └── workflows
│ └── nextjs.yml
├── dist
├── node_modules
├── public
├── src
│ ├── app
│ │ ├── beste2epractices
│ │ │ └── page.jsx
│ │ ├── cypressvsplaywright
│ │ │ └── page.jsx
│ │ ├── wetvsdry
│ │ │ └── layout.js
│ │ └── components
│ │ ├── Footer.jsx
│ │ └── Header.jsx
│ │ └── pages
│ │ ├── app.js
│ │ ├── document.js
│ │ └── index.js
│ └── styles
│ └── globals.css
├── .gitignore
└── jsconfig.json

## Future Enhancements

- Add more articles with **pagination support**.
- Implement a **search functionality** for articles.
- Add a **dark mode toggle** for improved user experience.

## Contact

Feel free to reach out if you have any questions or feedback:

- **Art Shllaku**  
  [GitHub](https://github.com/artshllk) | [LinkedIn](https://www.linkedin.com/in/art-shllaku/)
