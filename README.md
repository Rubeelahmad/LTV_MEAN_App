
# MEAN Admin Dashboard - Temporary Phone Number Management

A comprehensive admin dashboard for managing temporary phone numbers, built using the MEAN stack (MongoDB, Express.js, Angular, Node.js). This dashboard allows admins to view, filter, and manage phone numbers effectively.

---

## Key Features

- **Get Phone Numbers List**: Display a list of phone numbers with their statuses and message counts.
- **Filter Numbers by Status**: Easily filter phone numbers by "Active" or "Inactive" status.
- **Toggle Status**: Activate or deactivate phone numbers directly from the dashboard.
- **Message Count Display**: Monitor message usage for each number.
- **Authentication**: Login and Signup functionality with MongoDB for user data storage.

---

## Project Structure

### **Frontend**: Angular (with Tailwind CSS) - Latest version and StandAlone Components
- Components:
  - **Number List**: Displays numbers, their statuses, and message counts.
  - **Filter**: Dropdown menu to filter numbers by status.
  - **Action Buttons**: Button to toggle a number's status.
- **Responsive UI**: Fully responsive design for desktop and mobile.
- **Commands**:
  - `npm install`: install node modules in clientside.
  - `ng serve`: Starts the Angular development server.

### **Backend**: Node.js and Express
- Endpoints:
  - **GET /PholeList**: Fetches phone numbers from a mock API (`https://mocki.io/v1/635ce436-44ea-4137-b1dc-188e782cce2a`).
  - **POST /auth/signup**: Handles user registration.
  - **POST /auth/login**: Handles user login.
- Database:
  - MongoDB for user authentication and data storage.
- **Commands**:
  - `npm install`: install node modules in server folder.
  - `npm run dev`: Starts the Node.js development server.

---

## Setup Instructions

### **1. Clone the Repository**
```bash
git clone https://github.com/Rubeelahmad/LTV_MEAN_App.git
cd <repository_folder>
```

### **2. Setup Frontend**
```bash
cd frontend
npm install
ng serve
```
- Access the frontend at [http://localhost:4200](http://localhost:4200).

### **3. Setup Backend**
```bash
cd server
npm install
npm run dev
```
- Backend runs on [http://localhost:3000](http://localhost:3000).

---

## Usage

### **1. Login or Sign Up**
- Use your own credentials or the default:
  - **Email**: `root@gmail.com`
  - **Password**: `root1234`

### **2. Dashboard Functionality**
- View the list of phone numbers, their statuses, and message counts.
- Filter numbers by their statuses using the dropdown menu.
- Toggle a number’s status between "Active" and "Inactive" by clicking the toggle button.

---

## API Documentation

### **Endpoints**

#### **GET /numbers**
- Fetches the list of phone numbers.
- Response Example:
  ```json
  [
    {
      "id": 1,
      "number": "+123456789",
      "status": "active",
      "messages": 15
    },
    ...
  ]
  ```

#### **POST /auth/signup**
- Registers a new user.
- Request Body:
  ```json
  {
  
  "username": "admin",
  "email": "admin@example.com",
  "phone": "+1234567891",
  "password": "password123"

  }
  ```

#### **POST /auth/login**
- Logs in a user.
- Request Body:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

---

## Design Decisions

### **Why MEAN Stack?**
- **MongoDB**: NoSQL database that scales well and integrates easily with Node.js.
- **Express.js**: Simplifies backend API creation.
- **Angular**: Component-based architecture for clean and reusable UI development.
- **Node.js**: Event-driven and highly performant server environment.

### **Styling with Tailwind CSS**
- Tailwind CSS was chosen for its utility-first approach and ease of customization.

### **Mock API for Numbers**
- The mock API (`https://mocki.io/v1/635ce436-44ea-4137-b1dc-188e782cce2a`) simulates real-world data for development and testing purposes.

---

## Additional Features
- BPagination (By default I'm getting first 2 rows as data was minimu) for better data navigation (optional).
- Authentication ensures only authorized users access the dashboard.
- Mobile-responsive UI for seamless use on various devices.

---

## Future Enhancements
- **Real-time Updates**: Integrate WebSockets for real-time updates to the number list.
- **Sorting**: Add functionality to sort numbers by status or message count.
- **Notifications**: Show success/error notifications for actions like toggling status or filtering.

---

## Author

- **Rubeel Ahmed**
- Email: [dev.rubeel@gmail.com](mailto:dev.rubeel@gmail.com)
- Location: Burjman (Dubai), UAE

---

## Demo Credentials

- **Email**: `root@gmail.com`
- **Password**: `root1234`

---

### **Happy Coding! 🚀**


### Environment Configuration

Ensure that you create a `.env` file in the root folder of the server and add the following environment variables:

```
MONGODB_URI=mongodb+srv://admin:Tkxel4446!@rubeel.w7oc6.mongodb.net/
JWT_SECRET=long_term_venture_test
JWT_EXPIRES_IN=24h
PORT=3000
API_URI=http://localhost:3000
```

These variables are essential for connecting to the MongoDB database, handling JWT authentication, and running the server on the specified port.
