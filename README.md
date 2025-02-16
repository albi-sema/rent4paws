# Rent4Paws

Rent4Paws is a car rental application that combines a Django backend with a Next.js frontend. The project is designed using TailwindCSS, and the user interface features updated branding using `icon.png` as the website logo throughout the navigation components.

## Project Structure

- **backend/**  
  Contains the Django backend server.

- **frontend/**  
  Contains the Next.js frontend application.

## Setup Instructions

### Backend (Django)

1. **Navigate to the backend folder:**
   ```bash
   cd backend
   ```

2. **Create and activate a virtual environment:**
   ```bash
   python -m venv env
   source env/bin/activate   # On Windows: env\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Apply migrations and run the server:**
   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

### Frontend (Next.js)

1. **Navigate to the frontend folder:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Environment Configuration:**  
   Create a `.env` file in the frontend folder and add:
   ```env
   NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

## Design and Branding

- **Logo Updates:**  
  The navigation components have been updated to use `icon.png` (or `icon.webp` if configured) as the logo image. This update applies to all header components such as:
  - `Header`
  - `SearchHeader`
  - `LandingHeader`

- **UI Overview:**  
  - The pages use a gradient background with white card containers for primary content.
  - The car detail page features a horizontally scrollable carousel for photos alongside car details and a booking form positioned below.
  - The search page displays available cars in a grid, with highlighted pricing in blue and informative TailwindCSS alerts for pickup details.

## Version Control

An updated **.gitignore** file is provided in the repository root to exclude:

- **Python/Django Artifacts:**  
  Cache folders (`__pycache__/`), virtual environments (`env/`, `venv/`), database files (`*.sqlite3`), log files, and build artifacts.

- **Node.js/Next.js Artifacts:**  
  `node_modules/`, Next.js build folders (`.next/`, `out/`), and other temporary files.

- **OS Files:**  
  Files like `.DS_Store` and `Thumbs.db`.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests for bug fixes or improvements.

## License

This project is licensed under the [MIT License](LICENSE).
