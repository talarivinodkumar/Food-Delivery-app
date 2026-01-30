# FoodExpress Full-Stack Application - Quick Start Guide

## What's Been Created

Your FoodExpress app has been fully converted into a **professional full-stack application** with:

### Backend (Node.js + Express + MongoDB)

✅ **Server Setup**

- Express.js REST API server
- MongoDB database integration
- Mongoose ORM for data models
- JWT authentication system

✅ **Database Models**

- `MenuItem` - Food items with categories, prices, ratings
- `User` - Customer accounts with authentication
- `Order` - Order tracking with status and payment

✅ **API Endpoints**

- **Authentication**: Register, Login, Profile management
- **Menu**: Get items, filter by category, admin CRUD operations
- **Orders**: Create, track, cancel orders

✅ **Middleware**

- JWT authentication for protected routes
- Error handling
- CORS for frontend communication

### Frontend (React + Vite)

✅ **Context API State Management**

- `AuthContext` - User login/register, token management
- `CartContext` - Shopping cart with localStorage persistence

✅ **New Components**

- `LoginRegister` - User authentication modal
- `OrderHistory` - View and track orders
- Updated `Navbar` - User profile, orders, login buttons

✅ **API Integration**

- `apiClient.js` - Centralized API client with JWT auth
- All menu items fetched from backend
- Live order creation and tracking

## Quick Start (5 Minutes)

### 1️⃣ Install Dependencies

```bash
# Frontend dependencies (if not already installed)
npm install

# Backend dependencies
cd server
npm install
cd ..
```

### 2️⃣ Start MongoDB

**Option A: Local MongoDB (if installed)**

```bash
mongod
```

**Option B: Skip MongoDB Setup**

- Use MongoDB Atlas (cloud) instead
- Update `server/.env` with your MongoDB connection string

### 3️⃣ Start Backend Server

Open a terminal and run:

```bash
cd server
npm run dev
```

Expected output:

```
Server running on port 5000
http://localhost:5000
MongoDB Connected: localhost
```

### 4️⃣ Start Frontend

Open another terminal:

```bash
npm run dev
```

Expected output:

```
VITE v5.0.0  ready in 234 ms
➜  Local:   http://localhost:5174/
```

### 5️⃣ Test the Application

1. Open http://localhost:5174
2. Click "🔐 Login" button
3. Register a new account
4. Browse menu items
5. Add items to cart
6. Place an order
7. View order history

---

## File Structure

```
foodapp/
├── server/                          # Backend
│   ├── server.js                   # Entry point
│   ├── package.json                # Dependencies
│   ├── .env                        # Environment config
│   ├── config/database.js          # MongoDB connection
│   ├── models/                     # Database schemas
│   │   ├── MenuItem.js
│   │   ├── User.js
│   │   └── Order.js
│   ├── controllers/                # Business logic
│   │   ├── menuController.js
│   │   ├── authController.js
│   │   └── orderController.js
│   ├── routes/                     # API endpoints
│   │   ├── menuRoutes.js
│   │   ├── authRoutes.js
│   │   └── orderRoutes.js
│   └── middleware/                 # Auth, error handling
│       ├── auth.js
│       └── errorHandler.js
│
├── src/                            # Frontend
│   ├── App.jsx                    # Main app (updated)
│   ├── api/
│   │   └── apiClient.js           # API client
│   ├── context/
│   │   ├── AuthContext.jsx        # Auth state
│   │   └── CartContext.jsx        # Cart state
│   ├── Components/
│   │   ├── Navbar.jsx             # Updated with auth
│   │   ├── LoginRegister.jsx      # New auth modal
│   │   ├── OrderHistory.jsx       # New order tracking
│   │   └── ... (other components)
│   └── styles/
│       ├── Auth.css               # Auth modal styles
│       └── OrderHistory.css       # Order history styles
│
├── FULL_STACK_SETUP.md            # Detailed setup guide
└── package.json
```

---

## Backend API Documentation

### Authentication

```
POST   /api/auth/register         Register user
POST   /api/auth/login            Login user
GET    /api/auth/profile          Get profile (protected)
PUT    /api/auth/profile          Update profile (protected)
```

### Menu

```
GET    /api/menu                  Get all items
GET    /api/menu?category=Pizza   Filter by category
GET    /api/menu/categories       Get all categories
GET    /api/menu/:id              Get single item
POST   /api/menu                  Create item (admin)
PUT    /api/menu/:id              Update item (admin)
DELETE /api/menu/:id              Delete item (admin)
```

### Orders

```
POST   /api/orders                Create order (protected)
GET    /api/orders                Get user orders (protected)
GET    /api/orders/:id            Get order details (protected)
PUT    /api/orders/:id/cancel     Cancel order (protected)
PUT    /api/orders/:id/status     Update status (admin)
```

---

## Key Features

### Authentication System

- JWT tokens (valid for 30 days)
- Password hashing with bcryptjs
- Role-based access (customer/admin)
- Secure token storage in localStorage

### Shopping Cart

- Add/remove items
- Update quantities
- Persist to localStorage
- Calculate total with tax and delivery fee

### Order Management

- Create orders with menu items
- Track order status (pending → delivered)
- Cancel orders
- View order history
- Admin dashboard ready

### Database-Backed

- All menu items in MongoDB
- User accounts and authentication
- Order history and tracking
- Data persistence

---

## Environment Variables

File: `server/.env`

```env
# Server port
PORT=5000

# MongoDB connection
MONGODB_URI=mongodb://localhost:27017/foodexpress

# JWT secret for token signing
JWT_SECRET=your_super_secret_key_change_in_production

# Environment
NODE_ENV=development
```

---

## Common Issues & Solutions

### ❌ "Cannot find module" errors

```bash
# Reinstall dependencies
cd server && npm install
```

### ❌ MongoDB connection failed

- Ensure MongoDB is running: `mongod`
- Or update `MONGODB_URI` in `.env` with Atlas URL

### ❌ Port 5000 already in use

```bash
# Kill the process
lsof -ti:5000 | xargs kill -9  # Mac/Linux
# Or change PORT in server/.env
```

### ❌ Frontend can't connect to backend

- Ensure backend is running on http://localhost:5000
- Check network in browser DevTools

---

## Next Steps

### Immediate

1. ✅ Test user registration
2. ✅ Add menu items to database
3. ✅ Create an order

### Short Term

- [ ] Deploy backend (Heroku, Railway, Render)
- [ ] Deploy frontend (Vercel, Netlify)
- [ ] Setup email notifications
- [ ] Add payment processing (Stripe/Razorpay)

### Long Term

- [ ] Admin dashboard
- [ ] Real-time order tracking
- [ ] User reviews and ratings
- [ ] Mobile app (React Native)

---

## Useful Commands

```bash
# Development
npm run dev              # Frontend dev server
cd server && npm run dev # Backend dev server

# Production
npm run build           # Build frontend
npm start              # Start backend

# Database
# Seed menu items
node server/seed.js    # (after creating seed.js)
```

---

## Contact & Support

For detailed setup instructions, see: `FULL_STACK_SETUP.md`

Your application is now a professional full-stack application ready for:

- User authentication
- Real-world database operations
- API-based architecture
- Cloud deployment
- Scaling and growth

Happy coding! 🚀
