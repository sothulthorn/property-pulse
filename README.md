# Property Pulse

![](/assets/screenshots/home.png)

Property Pulse is a comprehensive web application meticulously crafted to revolutionize property management and streamline property search processes. It offers an intuitive and user-friendly platform tailored to meet the diverse needs of property owners, real estate agents, and prospective buyers alike.

## Features

- [x] User authentication with Google & Next Auth
- [x] User authorization
- [x] Route protection
- [x] User profile with user listings
- [x] Property Listing CRUD
- [x] Property image upload (multiple)
- [x] Property Search
- [x] Internal messages with 'unread' notification
- [x] Photoswipe image gallery
- [x] Toast notification
- [x] Property bookmarking / saved properties
- [x] Property sharing to social media
- [x] Loading spinner
- [x] Responsive design (Tailwind CSS)
- [x] Custom 404 page

## Technologies Used

## Technologies Used

- **Next.js**: Next.js is a React framework for building server-side rendered and statically generated web applications.
- **Tailwind CSS**: Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.
- **MongoDB**: MongoDB is a general-purpose, document-based, distributed database built for modern application developers and for the cloud era.
- **Mongoose**: Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
- **NextAuth.js**: NextAuth.js is a complete authentication solution for Next.js applications, providing robust authentication features with various providers.
- **React Icon**: React Icon is a library providing a collection of customizable SVG icons for use in React applications, enhancing the visual appeal and user experience.
- **Photoswipe**: Photoswipe is a JavaScript image gallery library for mobile and desktop, offering a smooth and intuitive experience for viewing images in a lightbox format.
- **Cloudinary**: Cloudinary is a cloud-based image and video management service offering powerful features such as image optimization, manipulation, and storage.
- **React Spinners**: React Spinners is a library providing customizable loading spinners for React applications, improving user experience during data fetching or processing.
- **React Toastify**: React Toastify is a notification library for React applications, offering customizable toast notifications to provide users with feedback and alerts.
- **React Share**: React Share is a library for easily adding social media sharing functionality to React applications, enabling users to share content across various platforms seamlessly.

</details>

## Getting Started

Follow these steps to set up the project locally on your machine:

### Prerequisites

Make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/)
- [NPM](https://docs.npmjs.com/getting-started)
- [Git](https://git-scm.com/downloads)

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/sothulthorn/nextjs-dev-overflow
```

2. Create a `.env` file:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY={YOUR_NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
CLERK_SECRET_KEY={YOUR_CLERK_SECRET_KEY}

NEXT_PUBLIC_DOMAIN={YOUR_NEXT_PUBLIC_DOMAIN}
NEXT_PUBLIC_API_DOMAIN={YOUR_NEXT_PUBLIC_API_DOMAIN}

MONGODB_URI={YOUR_MONGODB_URI}

GOOGLE_CLIENT_ID={YOUR_GOOGLE_CLIENT_ID}
GOOGLE_CLIENT_SECRET={YOUR_GOOGLE_CLIENT_SECRET}

NEXTAUTH_URL={YOUR_NEXTAUTH_URL}
NEXTAUTH_URL_INTERNAL={YOUR_NEXTAUTH_URL_INTERNAL}
NEXTAUTH_SECRET={YOUR_NEXTAUTH_SECRET}

CLOUDINARY_CLOUD_NAME={YOUR_CLOUDINARY_CLOUD_NAME}
CLOUDINARY_API_KEY={YOUR_CLOUDINARY_API_KEY}
CLOUDINARY_API_SECRET={YOUR_CLOUDINARY_API_SECRET}
```

4. Install dependencies:

```bash
npm install
```

5. Start the development server:

```bash
npm run dev
```

### Usage

Visit `http://localhost:3000/` in your browser to access the full application.

## Project Preview

### Home

![](/assets/screenshots/home.png)

### Properties

![](/assets/screenshots/property.png)

### Property Details

![](/assets/screenshots/property-details.png)

### Add Property

![](/assets/screenshots/add-property.png)

### Message

![](/assets/screenshots/message.png)
