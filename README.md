# Introduction

The Job Portal project is a full-stack web application that allows users to browse and search for job listings. It provides a platform for employers to post job openings and for job seekers to find relevant job opportunities. This project is built using React for the frontend, Node.js and Express for the backend, and MongoDB for the database.


# Features:-

User Authentication:

Provides secure login functionality with password hashing and JWT (JSON Web Tokens) for authentication.

Distinguishes between regular users and administrators during the authentication process.

Administrators have special privileges and can perform administrative tasks upon login.

User authentication is implemented securely with role-based access control.

Regular users have limited access compared to administrators.

Admin Panel:

Administrators have access to a dedicated admin panel.

Admins can manage user accounts, including adding,updating and deleting user's accounts.

Password Recovery:

Allows admin to reset their password or user's password in case they forget it.

User :

User can log in and have access to Data.

User can manage data including the adding the data manually or by uploading a .csv or .xlsv file,editing the data and deleting the data.

# Technologies Used

# Frontend:

React

Axios (for making API requests)

React Router (for navigation)

Bootstrap 5 (for UI components)

# Backend:

Node.js

Express.js (for building APIs)

JWT (for authentication)

# Database:

MongoDB (using Mongoose)
