# FoodExpress Full-Stack Application Setup Guide

## Project Structure

```
foodapp/
├── src/                    # React frontend
│   ├── App.jsx            # Main app component (updated with backend integration)
│   ├── api/               # API integration layer
│   │   └── apiClient.js   # API calls and client setup
│   ├── context/           # Context providers
│   │   ├── AuthContext.jsx
│   │   └── CartContext.jsx
│   ├── Components/
│   │   ├── Navbar.jsx
│   │   ├── LoginRegister.jsx
│   │   └── OrderHistory.jsx
│   └── styles/            # CSS styles
│       ├── Auth.css
│       └── OrderHistory.css
│
└── server/                # Node.js/Express backend
    ├── config/            # Database and config
    │   └── database.js
    ├── models/            # MongoDB schemas
    │   ├── MenuItem.js
    │   ├── User.js
    │   └── Order.js
    ├── controllers/       # Business logic
    │   ├── menuController.js
    │   ├── authController.js
    │   └── orderController.js
    ├── routes/            # API endpoints
    │   ├── menuRoutes.js
    │   ├── authRoutes.js
    │   └── orderRoutes.js
    ├── middleware/        # Auth & error handling
    │   ├── auth.js
    │   └── errorHandler.js
    ├── server.js          # Express server entry point
    ├── package.json       # Backend dependencies
    └── .env              # Environment variables
```

## Prerequisites

- Node.js (v14+)
- MongoDB (running locally or MongoDB Atlas)
- npm or yarn

## Installation Steps

### Step 1: Install Frontend Dependencies

```bash
# In the main folder (foodapp)
npm install
```

### Step 2: Install Backend Dependencies

```bash
cd server
npm install
cd ..
```

### Step 3: Setup MongoDB

**Option A: Local MongoDB**

- Make sure MongoDB is running on your machine
- Default connection: `mongodb://localhost:27017/foodexpress`

**Option B: MongoDB Atlas (Cloud)**

- Create a free account at https://www.mongodb.com/cloud/atlas
- Create a cluster and get your connection string
- Update the `.env` file in the `server` folder

### Step 4: Configure Environment Variables

Create/Update `server/.env`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/foodexpress
JWT_SECRET=your_secret_key_here_change_in_production
NODE_ENV=development
```

### Step 5: Seed Initial Menu Data (Optional)

You'll need to add menu items to the database. You can:

1. Use MongoDB Compass to manually insert items
2. Create a seed script in the server folder

Create `server/seed.js`:

```javascript
import mongoose from "mongoose";
import MenuItem from "./models/MenuItem.js";
import connectDB from "./config/database.js";
import "dotenv/config";

const menuItems = [
  {
    name: "Margherita Pizza",
    category: "Pizza",
    price: 120.99,
    description: "Classic pizza with tomato, mozzarella, basil",
    image:
      "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=400&fit=crop",
    rating: 4.8,
    vegetarian: true,
  },
  // Add more items...
];

async function seed() {
  try {
    await connectDB();
    await MenuItem.deleteMany({});
    await MenuItem.insertMany(menuItems);
    console.log("Database seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seed();
```

Then run: `node server/seed.js`

## Running the Application

### Terminal 1: Start the Backend Server

```bash
cd server
npm run dev
# OR
npm start
```

Expected output:

```
Server running on port 5000
http://localhost:5000
MongoDB Connected: localhost
```

### Terminal 2: Start the Frontend (Vite)

```bash
npm run dev
```

Expected output:

```
VITE v5.0.0  ready in xxx ms
➜  Local:   http://localhost:5174/
```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)
- `PUT /api/auth/profile` - Update user profile (protected)

### Menu

- `GET /api/menu` - Get all menu items
- `GET /api/menu?category=Pizza` - Get items by category
- `GET /api/menu/categories` - Get all categories
- `GET /api/menu/:id` - Get single item
- `POST /api/menu` - Create item (admin only)
- `PUT /api/menu/:id` - Update item (admin only)
- `DELETE /api/menu/:id` - Delete item (admin only)

### Orders

- `POST /api/orders` - Create order (protected)
- `GET /api/orders` - Get user's orders (protected)
- `GET /api/orders/:id` - Get order details (protected)
- `PUT /api/orders/:id/cancel` - Cancel order (protected)
- `PUT /api/orders/:id/status` - Update status (admin only)

## Features Implemented

✅ **Frontend:**

- React with Vite
- Context API for state management (Auth, Cart)
- API integration with backend
- User authentication
- Order placement and tracking
- Shopping cart with localStorage persistence
- Responsive design with Bootstrap 5

✅ **Backend:**

- Express.js server
- MongoDB database with Mongoose schemas
- RESTful API endpoints
- JWT authentication
- Error handling middleware
- User, Menu, and Order management

## Testing

### Test User Registration

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Test Get Menu

```bash
curl http://localhost:5000/api/menu
```

### Test Get Categories

```bash
curl http://localhost:5000/api/menu/categories
```

## Next Steps

1. **Seed Database with Menu Items** - Add initial menu data
2. **Deploy Backend** - Use Heroku, Railway, or Render
3. **Add Payment Integration** - Stripe or Razorpay
4. **Implement Notifications** - Email or SMS for orders
5. **Add Admin Dashboard** - Manage menu and orders
6. **Mobile App** - React Native version

## Troubleshooting

### Backend won't connect to MongoDB

- Ensure MongoDB is running: `mongod`
- Check connection string in `.env`
- MongoDB Atlas: Whitelist your IP address

### Frontend can't connect to backend

- Ensure backend is running on port 5000
- Check CORS is enabled in `server.js`
- Browser console for error messages

### Port already in use

```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9    # Mac/Linux
netstat -ano | findstr :5000      # Windows
```

## Useful Commands

```bash
# Frontend
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build

# Backend
npm run dev       # Start with nodemon
npm start        # Start server
```

## Project Files Created

- ✅ `server/server.js` - Express entry point
- ✅ `server/config/database.js` - MongoDB connection
- ✅ `server/models/MenuItem.js`, `User.js`, `Order.js`
- ✅ `server/controllers/*` - Business logic
- ✅ `server/routes/*` - API endpoints
- ✅ `server/middleware/*` - Auth & error handling
- ✅ `src/api/apiClient.js` - Frontend API client
- ✅ `src/context/Auth context.jsx`, `CartContext.jsx`
- ✅ `src/Components/LoginRegister.jsx`, `OrderHistory.jsx`
- ✅ `src/styles/Auth.css`, `OrderHistory.css`

## Notes

- Default theme color: rgb(209, 10, 43) - Red/Pink
- JWT tokens valid for 30 days
- Cart persists in localStorage
- Orders stored in MongoDB with full tracking

Happy coding! 🚀
