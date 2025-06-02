# 📁 My Portfolio

A modern, full-stack developer portfolio built with a professional UI, dynamic admin features, interactive charts, and a robust backend.

## 🧩 Features

- 🎨 Responsive design with **Material UI** (Light & Dark Mode)
- 👤 Admin panel built with **React-Admin**
- 📊 Data visualization using **Nivo Charts**
- 📨 Contact form integrated with **EmailJS**
- ✅ Form validation using **Formik** and **Yup**
- ⚡ Alerts and confirmations via **SweetAlert2**
- 🔗 API communication using **Axios**
- 📦 Backend built with **Node.js** and **MongoDB**
- 🐳 Docker + Docker Compose for containerized development
- 🔁 **CI/CD pipeline using GitHub Actions**
- 🚀 Deployed on [Render](https://render.com)

---

## 🧰 Tech Stack

### Frontend:
- React.js
- Material UI
- React-Admin
- Nivo Charts
- Formik & Yup
- Axios
- SweetAlert2
- EmailJS

### Backend:
- Node.js (Express)
- MongoDB with Mongoose

### DevOps:
- Docker & Docker Compose
- GitHub Actions for CI/CD
- Hosted on Render

---

## 📸 Screenshots

> (Add screenshots or screencasts of key sections of your app here)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/maazabdulbasith/My-Portfolio.git
cd My-Portfolio


Create a .env file inside the backend/ folder with the following:

MONGO_URI=your_mongodb_connection_string
EMAILJS_USER_ID=your_emailjs_user_id
EMAILJS_SERVICE_ID=your_emailjs_service_id
EMAILJS_TEMPLATE_ID=your_emailjs_template_id
PORT=5000

3. Running the App via Docker Method (Recommended)
docker-compose up --build

Backend :
cd backend
npm install
npm start

Frontend :
cd frontend
npm install
npm start

4. CI/CD with GitHub Actions
This project includes a .github/workflows/deploy.yml GitHub Actions workflow for continuous integration and deployment.
The pipeline:
Runs lint and test checks
Builds the project
Auto-deploys to Render when changes are pushed to the master branch

Theme Support
A toggle switch allows users to switch between Light and Dark themes powered by Material UI’s theme provider.

Contact
Reach out for collaboration, questions, or freelance opportunities:

📧 Email: [maazabdulbasith@gmail.com]

🌐 LinkedIn: [https://linkedin.com/in/abdul-basith-maaz]

🌍 Live Site: [https://my-portfolio-f.onrender.com]

