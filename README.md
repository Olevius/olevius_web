# Olevius Web

**Official Olevius Website**

A modern, responsive, and performant website for the Olevius platform. Built with a React frontend and a Node.js/Express backend to deliver an engaging user experience and robust API services.

---

## 🚀 Features

-   **Responsive Design**: Mobile-first layout that adapts to all screen sizes.
-   **SEO Optimized**: Server-side rendering (SSR) or static site generation (SSG) for fast load times and improved search rankings.
-   **Accessibility**: WCAG 2.1 AA compliant components and ARIA support.
-   **Theming**: Dark and light mode toggle with persistent user preference.
-   **Internationalization (i18n)**: Localization support for multiple languages.
-   **Real-time Updates**: WebSocket integration for live data feeds.

---

## 📦 Technologies

-   **Frontend**: React, Vite, TypeScript, GSAP
-   **Backend**: Node.js, Express, TypeScript
-   **Database**: PostgreSQL (via Prisma ORM)
-   **Testing**: Vitest, Testing Library
-   **CI/CD**: GitHub Actions, Docker

---

## 💾 Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/your-org/olevius_web.git
    cd olevius_web
    ```

2. **Install dependencies**

    ```bash
    pnpm install
    ```

3. **Environment Variables**
   Copy `.env.example` to `.env` and fill in your configuration:

    ```ini
    DATABASE_URL=postgresql://user:password@localhost:5432/olevius
    NEXT_PUBLIC_BASE_URL=http://localhost:3000
    ```

---

## 🏃‍♂️ Running Locally

1. **Start the database** (if using Docker compose):

    ```bash
    docker-compose up -d
    ```

2. **Run the backend**

    ```bash
    pnpm --filter backend dev
    ```

3. **Run the frontend**

    ```bash
    pnpm --filter frontend dev
    ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🔧 Development

-   **Linting & Formatting**

    ```bash
    pnpm lint       # runs ESLint
    pnpm format     # runs Prettier
    ```

-   **Testing**

    ```bash
    pnpm --filter frontend test   # frontend tests
    pnpm --filter backend test    # backend tests
    ```

-   **Building for Production**

    ```bash
    pnpm --filter frontend build  # builds static assets
    pnpm --filter backend build   # compiles TypeScript
    ```

---

## 🚢 Deployment

-   **Docker**

    ```bash
    docker build -t olevius_web_frontend ./frontend
    docker build -t olevius_web_backend  ./backend
    docker-compose up -d
    ```

-   **GitHub Pages** (for frontend)

    -   Configure `homepage` in `frontend/package.json`.
    -   Run `pnpm --filter frontend build && pnpm --filter frontend deploy`.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes (`git commit -m 'feat: add awesome feature'`)
4. Push to the branch (`git push origin feature/awesome-feature`)
5. Open a Pull Request

Please read the [CONTRIBUTING.md](CONTRIBUTING.md) for more details on our code of conduct, and the process for submitting pull requests.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

-   **Website**: [https://olevius.io](https://olevius.io](https://olevius-web.vercel.app/))
-   **GitHub**: [https://github.com/your-org/olevius_web](https://github.com/your-org/olevius_web)
-   **Email**: [support@olevius.io](mailto:support@olevius.io)
