# Book Finder Project

A responsive web application built with React that helps users search for books by title or author using the Open Library API. The app displays search results as cards with book details like cover image, title, author, publication year, and edition count.

## Features

-Search by Title or Author: Users can filter books based on their desired category.

-Dynamic Data Fetching: Data is fetched in real time from the Open Library API.

-Responsive Design: The layout adjusts for various screen sizes.

-Loader: Displays a spinner in the search button while fetching data.

## Technologies Used

-React: For building the user interface.
-CSS: For styling and responsiveness.
-Open Library API: For fetching book data.

## Installation

- Clone this repository

```bash
git clone https://github.com/Priyanshi2615/BooK_Finder.git
```

### Project Setup

- Node version: v22.11.0
- Npm version: 10.9.0

```bash
cd Book_Finder
```

- Install dependencies:

```bash
npm install
```

- Start Project:

```bash
npm start
```

### Note:

-The application fetches book data from the OpenLibrary API. Ensure you have a stable internet connection to retrieve results.

-Only books matching the entered query will be displayed. If no books are found, an appropriate message will appear.
