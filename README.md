# Evergreen Ecommerce

A responsive college-project storefront built with HTML, CSS, vanilla JavaScript, Express and local JSON files. It demonstrates customer shopping and admin reporting. Authentication is a simplified college/demo implementation, not production-grade.

## Features
- Product browsing, category filtering, search, sorting, product details and related items
- Registration/login, logout, profile and password reset with bcryptjs password hashing
- Wishlist, cart, coupons, simulated checkout, order history and tracking
- Admin dashboard with summary metrics and order status updates
- Responsive pages, online product imagery and image fallback handling

## Structure
- `server/`: Express server and atomic JSON helper
- `public/`: storefront, admin login/dashboard, CSS and browser JavaScript
- `data/`: JSON databases and sample catalog/coupons
- `tests/`: Node test runner checks

## Run locally
Install Node.js 18+, then run `npm install`, followed by `npm run dev` or `npm start`. Open **http://localhost:3000**. Copy `.env.example` to `.env` to configure `PORT` (default 3000).

Demo admin credentials: `admin@ecommerce.com` / `Admin@123`. The server seeds this account on first startup. Customers can register from the storefront. Change demo credentials before sharing the project.

## API overview
`/api/auth` supports register/login/forgot-password; `/api/products` and `/api/categories` expose catalog data; `/api/cart` and `/api/wishlist` handle items; `/api/coupons/validate` checks coupons; `/api/orders` handles orders and tracking; `/api/reviews` stores reviews; `/api/admin/dashboard` and `/api/admin/:type` supply dashboard and demo management endpoints. API responses use `{success,message,data}`.

## JSON storage
The app uses `data/users.json`, `products.json`, `categories.json`, `carts.json`, `wishlists.json`, `orders.json`, `reviews.json`, and `coupons.json`. The JSON helper writes a temporary file before replacing the destination. This is suitable for local demos, not concurrent production workloads.

## Testing
Run `npm test` for included smoke tests. `/api/health` returns a quick server status.

## Limitations and future work
Customer identity and the quick cart are stored in browser localStorage; password data is never stored there. Although passwords are hashed, this demo does not implement server sessions or enforce robust role-based authorization on every admin route. Password recovery has no email/OTP. Payment is simulated; card details are not collected. Add sessions, stronger authorization, route-level integration tests, and deployment hardening before any real use.
