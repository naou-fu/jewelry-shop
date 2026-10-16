# Jewelry Shop — Database School Project

Welcome! This is a simple jewelry store project created as a school assignment. This README explains what the project does, how the website looks and works for a user, and how the site stores information. No programming knowledge is required to read this.

---

## What this project is (short)
This is a small online jewelry store that lets people browse and buy items like rings, bracelets, necklaces, earrings, and piercings. It keeps a record of what users buy and when they buy it.

---

## Who this README is for
- Students and teachers reviewing the project
- Non-programmers who want to understand how the website behaves
- Anyone who needs a clear explanation of the website interface and how data is organized

---

## How the website looks and how to use it (Interface)
The main page is designed to be simple. Here’s what a user sees and what each part does.

Top header / menu:
- Left side: Website name or logo.
- Middle: Links for "Top Offers", "Limited Edition", and "About".
- Right side: Search bar (to find products by name).

Search bar:
- Type a product name or part of it and press Enter (or click the search icon).
- The page shows matching products.

Filters (usually near the top or on the left):
- Jewelry Type: choose from Rings, Bracelets, Necklaces, Earrings, Piercings, etc.
- Material: choose material like Gold, Silver, Platinum, or Steel.
- These make it easier to find exactly what you want.

Product list:
- The main area shows product cards in a grid or list.
- Each product card includes:
  - Product name (e.g., "Silver Heart Necklace")
  - Price (e.g., "$45.00")
  - A short description or tags (optional)
  - Two buttons:
    - Add to Cart / Buy — puts the product in your shopping cart
    - Cancel / Remove — removes the product from the cart or cancels an action

Shopping Cart:
- Shows products you added, their individual prices, and the total price.
- Buttons:
  - Confirm Order — finishes the purchase and records the order time and items
  - Cancel Order — clears the cart without recording anything

Order confirmation:
- After clicking Confirm Order, the system:
  - Records the exact time of the order
  - Records which products were bought
  - Optionally shows an order confirmation message (like "Thank you — your order was placed at 2026-10-16 14:21")

Top products / Highlights:
- A small section shows top-selling or featured items so users can spot great deals quickly.

About page:
- A short description of the store and contact information (optional).

User accounts (optional, if implemented):
- Users can sign up or log in.
- After logging in the website can show past orders (order history).

---

## Typical user flows (step-by-step)
1. Open the website (desktop or mobile).
2. Use search or filters to find jewelry.
3. Click "Add to Cart" on items you want.
4. Open the cart to review selected items and see the total price.
5. Click "Confirm Order" to finish:
   - The order time and the list of items are stored.
6. If you make a mistake, click "Cancel Order" to clear the cart.

---

## The data the site keeps and why (Plain-language data structure)
The website stores information in a few simple groups. Think of each group as a table in a spreadsheet. Each table holds a set of related information.

1. Users (people who use the website)
- Why we store it: to remember who made orders and to allow order history.
- Fields (columns) and what they mean:
  - User_ID: A unique number that identifies each user.
  - Username: The name the user chooses.
  - Password: The user's secret phrase (in a real site this should be stored safely).
  - Email: Contact email for the user.
  - Phone_Number: Contact phone number.
  - Order_history: A list or reference to the user's past orders.
  - Permission: What the user is allowed to do (see below).

2. Products (items for sale)
- Why we store it: so the website can show products, prices, and let people buy them.
- Fields:
  - Product_ID: Unique number for the product.
  - Product_name: Name like "Gold Hoop Earrings".
  - Product_price: The price shown to customers.

3. Orders (what people buy and when)
- Why we store it: to record purchases and the time they happened.
- Fields:
  - Order_time: The exact date and time when the order was confirmed.
  - Product: Which product(s) were purchased (usually a list of Product_IDs).
  - Delivery_time: When the order is expected to be delivered (optional).

4. User_history (quick recent info)
- Why we store it: to let users see recent products and orders easily.
- Fields:
  - recent_products: Products the user recently looked at.
  - Recent_orders: The user's most recent orders (quick view).

5. Permission (who can do what)
- Why we store it: to separate regular customers from people who manage the site.
- Types:
  - customer: Regular shopper
  - Admin: Can manage products and view all orders
  - Dev: Developer-level access (for updates or debugging)

---

## Example records (very small, human-friendly)
- User: { User_ID: 1, Username: "anna", Email: "anna@example.com", Order_history: [order1] }
- Product: { Product_ID: 101, Product_name: "Silver Ring", Product_price: 30.00 }
- Order: { Order_time: "2026-10-16 14:21", Product: [101], Delivery_time: "2026-10-20" }

---

## Safety and privacy (simple notes)
- Passwords should not be stored as plain text in a real application — they should be protected (this is a school project; if you keep working on it, learn about safe password storage).
- Do not share user emails or phone numbers publicly.
- Only give Admin or Dev permissions to people you trust.

---

## How to open and try the website (non-programmer friendly)
- If the project is just HTML/CSS/JS (no special server):
  1. Download the project folder to your computer.
  2. Open the file named `index.html` by double-clicking it — it should open in your web browser.
- If the project needs to be hosted:
  - The teacher or developer can upload the files to a simple web host (GitHub Pages is a common free option).
  - Ask the developer or teacher for a link if one is already hosted.

---

## Troubleshooting (quick)
- Nothing shows on the page:
  - Make sure you opened `index.html` in a browser.
- Buttons do not work:
  - The site may expect a small local server or JavaScript may be disabled. Try a different browser or ask the developer.
- You can't find a product:
  - Try removing filters or checking spelling in the search box.

---

## Next steps / Suggestions (for teachers or students)
- Add user sign-up and login pages so order history works for each person.
- Add images for each product so shoppers can see what they're buying.
- Add a simple admin page where an Admin can add or remove products.
- Improve security if the site will be used outside class (especially password storage).

---

If you want, I can:
- Turn this into the repository's actual README file and commit it for you, or
- Simplify or expand any section for a printed handout for non-technical reviewers.
