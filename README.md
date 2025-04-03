# 🛋️ CozyCorner - Furniture E-commerce Website

CozyCorner is a modern and responsive e-commerce platform for the furniture industry, developed as part of the CEN440 - E-Commerce course at Çukurova University. This project demonstrates full-stack development skills using the **MERN** stack (MongoDB, Express, React, Node.js), with a focus on performance, design, and user experience.

📹 [Project Demo Video](https://youtu.be/i9dMqFQPkOA)

---

## 📷 Screenshots

### 🏠 Home Page
Landing page with hero image, categories, newsletter, and product sections
<img width="1274" alt="Ekran Resmi 2025-04-03 21 09 06" src="https://github.com/user-attachments/assets/1033c44a-d5a2-4233-b1c4-42880e9ec02e" />
<img width="1284" alt="Ekran Resmi 2025-04-03 21 09 21" src="https://github.com/user-attachments/assets/27f473e6-336a-403a-9be2-c2537c848300" />

### 🛍️ Category Page
Displays 12 products by type with explore more button
<img width="1056" alt="Ekran Resmi 2025-04-03 21 09 51" src="https://github.com/user-attachments/assets/91e476b9-f369-4fb0-815c-e500e647a076" />
<img width="1035" alt="Ekran Resmi 2025-04-03 21 10 07" src="https://github.com/user-attachments/assets/134991ea-be28-4aea-ace7-23c8e7c4890a" />
<img width="1052" alt="Ekran Resmi 2025-04-03 21 10 24" src="https://github.com/user-attachments/assets/85555fde-d1a8-424a-9611-e95be90f85fd" />

### 📦 Product Page
Product image gallery, description, rating, price, add-to-cart button
<img width="1122" alt="Ekran Resmi 2025-04-03 21 10 38" src="https://github.com/user-attachments/assets/416c92e4-2740-4576-ae7e-a9be06bf450f" />

### 🛒 Cart Page
Interactive cart with total calculation and promo code option
<img width="622" alt="Ekran Resmi 2025-04-03 21 11 00" src="https://github.com/user-attachments/assets/264dbf04-675b-4f06-b650-4d589da486b5" />
<img width="601" alt="Ekran Resmi 2025-04-03 21 11 09" src="https://github.com/user-attachments/assets/96a15f0a-bd1a-4f40-97ce-717d8723d8b8" />

### 🧑‍💼 Admin Panel
Add/remove products directly to MongoDB Atlas

<img width="580" alt="Ekran Resmi 2025-04-03 21 11 54" src="https://github.com/user-attachments/assets/7d4ac2b7-3da5-4fa1-82c0-2af3f0d1c271" />
<img width="535" alt="Ekran Resmi 2025-04-03 21 12 09" src="https://github.com/user-attachments/assets/b2571278-7559-4679-b355-cd0d959c3ddb" />

---

## 🧾 Documentation

[📄 Full Project Report (PDF)](https://drive.google.com/file/d/1ukm1uBRy0Lp4XXnYOI-mzUtOW-YegBls/view?usp=sharing)

---

## 🌟 Features

- 🛒 Browse 56 unique furniture products across categories like sofas, beds, tables, wardrobes, and armchairs
- 🔐 User authentication with JWT (signup/login)
- 🧾 Admin panel for product management (add/remove products)
- 💬 Cart system synced with MongoDB per user
- 📷 Images stored and served from MongoDB Atlas
- 📱 Fully responsive design for all screen sizes
- ✨ Breadcrumb navigation, product pages, and FQs

---
## 🧰 Tech Stack

**Frontend:**
- React.js
- HTML/CSS/JavaScript
- Google Fonts (Lato)
- Responsive design via media queries

**Backend:**
- Node.js + Express.js
- MongoDB Atlas (cloud database)
- Mongoose ODM
- Multer for image upload
- JWT for authentication

---

## 🗂️ Project Structure

HomePilotApp/
├── AppDelegate.swift               # App lifecycle & Firebase init
├── SceneDelegate.swift            # Scene management
├── Main.storyboard                # Visual UI structure (6 screens)
├── Assets.xcassets                # Image and asset catalog
├── GoogleService-Info.plist       # Firebase configuration file
├── Models/
│   ├── Device.swift               # Device logic & metrics
│   ├── DeviceMetric.swift         # Struct for dynamic metrics
│   ├── DeviceUsageResult.swift    # Struct for usage results
│   └── User.swift                 # Core Data User entity
├── Views/
│   ├── SourceCardCell.swift       # UI for electricity/water/gas summaries
│   ├── DeviceCardCell.swift       # UI for device items
│   ├── DynamicMetricView.swift    # Custom reusable metric input view
│   └── MarkerView.swift           # Custom marker for charts
├── Controllers/
│   ├── HomeViewController.swift   # Main screen logic
│   ├── DeviceViewController.swift # Device metrics entry and logic
│   ├── ChartsViewController.swift # Chart visualization with Swift Charts
│   ├── LoginViewController.swift  # Email + Google Sign-In logic
│   ├── SignUpViewController.swift # New user registration
│   └── TabBarController.swift     # Navigation and tab handling
├── CoreData/
│   ├── HomePilotApp.xcdatamodeld  # Core Data schema (User, DeviceUsage)
│   └── CoreDataManager.swift      # Singleton for Core Data CRUD ops
└── Extensions/
    └── Notification.Name+Ext.swift # For custom NotificationCenter updates

---

## 🛠️ Installation & Run Instructions

> **Note:** The `node_modules` folders are ignored in GitHub. After cloning the project, run the following commands in each directory.

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/cozycorner-furniture.git

#Install dependencies
cd frontend
npm install
cd ../admin
npm install
cd ../backend
npm install

# Start frontend
cd frontend
npm start

# In a separate terminal tab, start backend
cd backend
node index.js

# In a separate terminal tab, start admin panel
cd admin
npm run dev
```
⚠️ Running only the frontend will cause errors, as image data comes from the backend (connected to MongoDB Atlas).

---

## 👩🏻‍💻 Developer

Helin Güler
- [LinkedIn](https://www.linkedin.com/in/helin-guler)  
- [GitHub](https://github.com/helinguler)
