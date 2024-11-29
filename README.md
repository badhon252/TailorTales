# **TailorTales**

TailorTales is an AI-powered storytelling platform designed to help small businesses and niche brands craft personalized, emotionally resonant content effortlessly. This project is an MVP built with a modern tech stack to demonstrate intuitive user experience and advanced content generation capabilities.

---

## **Features**

- **Dashboard:** Centralized access to user activity, content generation history, and account settings.
- **AI Content Generator:** Automatically generate personalized and engaging content tailored to your audience.
- **Templates Library:** Access pre-designed templates for different content types (social media, blogs, email campaigns).
- **Dynamic Demo Generator:** Real-time AI-generated content previews based on user inputs.
- **Multi-Channel Distribution:** Export content in formats optimized for social media, blogs, and newsletters.
- **Analytics Integration:** Monitor user engagement with Google Analytics.

---

## **Tech Stack**

- **Frontend:**

  - **Next.js**: Server-side rendering for performance and SEO.
  - **React**: For building a dynamic and interactive UI.
  - **Tailwind CSS**: For responsive and modern styling.

- **Backend:**

  - **PHP (Laravel)**: API for content generation and user management.
  - **MySQL**: Database for storing user data, content, and preferences.

- **AI Integration:**

  - **OpenAI API**: To generate creative and personalized content.

- **Other Tools:**
  - **Google Analytics**: For tracking user behavior and interaction.
  - **Docker**: For containerized deployment.

---

## **Getting Started**

### **Prerequisites**

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or later)
- **PHP** (v8.1 or later)
- **Composer**
- **MySQL**
- **Docker** (optional for deployment)

### **Installation**

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/tailortales.git
   cd tailortales
   ```

2. **Frontend Setup**  
   Navigate to the `frontend` directory:

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

   The frontend will start at `http://localhost:3000`.

3. **Backend Setup**  
   Navigate to the `backend` directory:
   ```bash
   cd backend
   composer install
   cp .env.example .env
   php artisan key:generate
   ```
   Update the `.env` file with your database and OpenAI API key configurations. Then, run the migrations:
   ```bash
   php artisan migrate
   php artisan serve
   ```
   The backend will start at `http://localhost:8000`.

---

## **Usage**

1. **Visit the Dashboard**  
   Access the app via `http://localhost:3000`.

2. **Generate Content**  
   Input keywords, select a template, and preview your AI-generated content.

3. **Customize Templates**  
   Modify templates to suit your brand’s tone and style.

4. **Export Content**  
   Download or share the generated content directly from the app.

---

## **Folder Structure**

```
TailorTales/
├── backend/        # Laravel backend for API and database management
├── frontend/       # Next.js frontend for the user interface
├── .gitignore      # Files and directories to ignore in version control
├── README.md       # Documentation
```

---

## **Contributing**

We welcome contributions! Here’s how you can help:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to your branch (`git push origin feature-name`).
5. Open a pull request for review.

---

## **License**

This project is licensed under the [MIT License](LICENSE).

---

## **Contact**

For questions or feedback, feel free to contact us at **dev.khalidhossain@gmail.com**.

---
