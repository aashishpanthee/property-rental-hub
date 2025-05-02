# Property Rental Hub

A modern, full-stack property rental platform built with Next.js, MongoDB, and Tailwind CSS. This application allows users to browse, search, and manage property listings with a beautiful and responsive user interface.

## Features

- 🔍 Advanced property search and filtering
- 📱 Responsive design for all devices
- 🔐 User authentication and authorization
- 📸 Image gallery with PhotoSwipe integration
- 💬 Messaging system between users
- 👤 User profiles and property management
- 🌐 Social sharing capabilities
- 🔔 Real-time notifications
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- **Frontend:**

  - Next.js 15.3.0
  - React 19.0.0
  - Tailwind CSS
  - React Icons
  - React Toastify
  - React Spinners
  - PhotoSwipe Gallery

- **Backend:**

  - Next.js API Routes
  - MongoDB with Mongoose
  - NextAuth.js for authentication

- **Storage:**
  - Cloudinary for image storage

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- MongoDB database
- Cloudinary account

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/property-rental-hub.git
   cd property-rental-hub
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_DOMAIN=http://localhost:3000
   NEXT_PUBLIC_API_DOMAIN=http://localhost:3000/api
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_URL_INTERNAL=http://localhost:3000
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   GOOGLE_CLIENT_ID=your_goole_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret

   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
property-rental-hub/
├── app/                 # Next.js app directory
│   ├── actions/        # Server actions
│   ├── api/           # API routes
│   ├── messages/      # Messaging system
│   ├── properties/    # Property listings
│   └── profile/       # User profiles
├── components/         # Reusable components
├── config/            # Configuration files
├── context/           # React context providers
├── models/            # MongoDB models
├── public/            # Static assets
└── utils/             # Utility functions
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- MongoDB for the database
- Cloudinary for image storage
- All contributors who have helped shape this project
