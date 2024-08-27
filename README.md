# Sweet Treats Bakery Website

Welcome to the Sweet Treats Bakery website repository. This site allows customers to browse our menu, place orders, and learn more about our bakery.

---

## Website Structure

### 1. Home Page
- **Features:** Introduction to the bakery, featured items, and daily specials.

### 2. About Us Page
- **Content:** Bakery's story, team information, and core values.

### 3. Order Online Page

- **Order Process:** Select items, add to cart, and proceed to checkout.

### 4. Contact Page
- **Information:** Contact details, business hours, and a contact form.

---

## How to Run the Website

### 1. Prerequisites
- **XAMPP:** Ensure XAMPP is installed on your local machine.

### 2. Setting Up the Database
1. Open XAMPP and start the **Apache** and **MySQL** modules.
2. Go to [http://localhost/phpmyadmin/](http://localhost/phpmyadmin/).
3. Create a new database named `sweet_treats_db`.
4. Import the `sweet_treats_db.sql` file into the database.

### 3. Running the Website
1. Place the website files in the `htdocs` folder of your XAMPP installation directory.
2. Open a web browser and navigate to [http://localhost/sweettreats](http://localhost/sweettreats) to view the website.

### 4. Database Connection
- Ensure the database connection details (host, username, password, database name) in the `config.php` file match your local setup.

---

## Notes
- Make sure to restart the Apache and MySQL modules after making any changes to the configuration.
- If you encounter any issues, check the `error_log` in the XAMPP control panel for troubleshooting.

