# Dashboard Project

This project is a simple Next.js web application that displays website visit statistics and customer data from a CRM system using the Mockaroo API. It provides a landing page with aggregated data, detailed visit analysis with a graph, and a CRM customer data list with pagination and search functionality.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/layout.tsx`: The main layout component used across all pages.
- `app/page.tsx`: The landing page with an overview of aggregated data.
- `app/visits/page.tsx`: The detailed visit analysis page with a graph.
- `app/visitors/page.tsx`: The CRM data list page with pagination and search functionality.
- `app/api/visits/route.ts`: API route for fetching visit data.
- `app/api/customers/route.ts`: API route for fetching customer data.

## API

This project uses the Mockaroo API to simulate the website visit statistics and customer data. The API returns the following:

Website Visits Data:

Page views
Unique visitors
Bounce rate
Average session duration
CRM Customer Data:

Customer name
Email
Signup date
Last activityThis project uses the Mockaroo API to simulate the website visit statistics and customer data. The API returns the following:

Website Visits Data:

Page views
Unique visitors
Bounce rate
Average session duration
CRM Customer Data:

Customer name
Email
Signup date
Last activity

## Features

# Landing Page

Displays an overview of aggregated metrics:
Total visitors
Bounce rate
Average session duration

# Detailed Visit Analysis

A graph that shows the trends in website visits over the past 30 days.
Implemented using Chart.js.

# CRM Data List

A table showing customer details such as name, email, signup date, and last activity.
Supports:
Pagination: Displays 10 customers per page.
Search: Filters customers by name or email.

## Technologies Used

- Next.js
- React
- Tailwind CSS
- shadcn/ui
- chartjs

## Deployment

This project can be easily deployed on Vercel or any other platform that supports Next.js applications.

```

This README provides instructions on how to run the project locally and gives an overview of the project structure.
```
