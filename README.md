# Travel Frontend App

This is a frontend application built with React for a travel booking platform.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js (version 14 or later)
- npm (version 6 or later)

## Setup

1. Clone the repository:

```
git clone https://github.com/Bharat-Travel-Company/travel-app.git
```

2. Navigate to the project directory:

```
cd travel-frontend-app
```

3. Install the dependencies:

```
npm i
```

4. Start the development server:

```
npm run dev
```

This will start the application at `http://localhost:5173`

## Creating a New Branch

To create a new branch with your name, run:

```
git checkout -b your-name
```

Replace `your-name` with your actual name.

_Project Structure_

The project structure is as follows:

```
src/
├── components/
│ ├── Header/
│ │ ├── Header.js
│ │ └── Header.styled.js
│ ├── Footer/
│ │ ├── Footer.js
│ │ └── Footer.styled.js
│ └── ...
├── pages/
│ ├── Home/
│ │ ├── Home.js
│ │ └── Home.styled.js
│ ├── Search/
│ │ ├── Search.js
│ │ └── Search.styled.js
│ └── ...
├── utils/
│ ├── api.js
│ └── ...
├── App.js
├── index.js
└── ...
```

- `components/`: Contains reusable React components.
- `pages/`: Contains the main pages of the application.
- `utils/`: Contains utility functions and helpers.
- `App.js`: The root component of the application.
- `index.js`: The entry point of the application.
