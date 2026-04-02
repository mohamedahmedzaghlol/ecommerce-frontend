🛒 E-Commerce Full Stack Project (MERN)
This is a dynamic E-commerce application built using the MERN stack. The project features a robust backend, a responsive frontend, and seamless data integration.

🚀 Recent Updates
Backend Integration: Successfully connected the React frontend with the Node.js/Express API.

Dynamic Data: Products are now fetched dynamically from MongoDB and displayed using advanced React hooks (useState, useEffect).

Image Fallback: Implemented a smart error-handling system for product images to ensure a consistent UI.

🛠️ Tech Stack
Frontend: React.js, Tailwind CSS, Axios, React Router Dom.

Backend: Node.js, Express.js.

Database: MongoDB & Mongoose.

Tooling: Vite, generate-react-cli, Postman.

🏗️ Project Structure
This project follows a modular structure for scalability, managed by generate-react-cli.

Key Directories:
src/Components/: Contains all reusable UI components and pages.

src/Context/: (Upcoming) For global state management (Cart, User Auth).

Styling: Every component is paired with a CSS Module for scoped, conflict-free styles.

Core Components:
Navigation & Layout: Navbar, Footer, Layout, Notfound.

Product Management: Home, RecentProducts, Categories, Brands.

User Authentication: Login, Register.

Shopping Experience: Cart.

💻 Technical Workflow (Step-by-Step)
Client Request: React triggers an API call via Axios on component mount.

Server Logic: The Express server listens for the request and communicates with MongoDB.

Data Response: The server sends back product data in JSON format.

UI Rendering: React updates the state and maps through the data to render product cards dynamically.

🔧 Installation & Setup
Clone the repo: git clone <your-repo-link>

Install Frontend dependencies: npm install

Run Frontend: npm run dev

Ensure Backend is running on http://localhost:3000.

🔜 Roadmap
[ ] Implement JWT Authentication.

[ ] Add Shopping Cart functionality.

[ ] Integrate a payment gateway.

[ ] Advanced Product Search & Filtering.