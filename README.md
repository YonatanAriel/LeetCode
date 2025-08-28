# LeetCode Solutions

A comprehensive collection of LeetCode problem solutions implemented in JavaScript, with an interactive React web application for easy browsing and visualization.

## 🚀 Features

- **Organized Solutions**: Problems categorized by topic (Array, Sliding Window, String, etc.)
- **Interactive Viewer**: React-based web app to browse and view solutions
- **File Viewer**: Support for multiple file formats including PDF documents
- **Modern Tech Stack**: Built with React, Vite, and modern JavaScript

## 📁 Project Structure

```
src/
├── solutions/          # LeetCode problem solutions
│   ├── array/         # Array-related problems
│   ├── sliding-window/# Sliding window problems
│   ├── string/        # String manipulation problems
│   └── *.js           # Individual problem solutions
└── viewer/            # React components for file viewing
    ├── react-pdf.jsx  # PDF viewer component
    └── ...            # Other viewer components
```

## 🛠️ Technologies Used

- **Frontend**: React 18, Vite
- **PDF Handling**: react-pdf, pdfjs
- **Styling**: CSS modules
- **Build Tool**: Vite with Hot Module Replacement

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/YonatanAriel/LeetCode.git
   cd LeetCode
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start the development server**

   ```bash
   npm run start
   # or
   pnpm start
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 📖 Usage

- Browse solutions by category in the `src/solutions/` directory
- Use the web interface to view and interact with solutions
- Each solution file contains the problem implementation with comments

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-solution`)
3. Add your solution following the existing naming convention
4. Commit your changes (`git commit -am 'Add solution for problem X'`)
5. Push to the branch (`git push origin feature/new-solution`)
6. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
