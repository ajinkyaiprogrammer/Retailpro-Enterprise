# RetailPro Enterprise

This project is a React + Vite enterprise retail application built with Redux Toolkit and Material UI. It demonstrates a product catalog, cart management, order summary, and navigation workflow for a retail storefront.

## What was built

- A **product catalog page** that fetches products from `https://fakestoreapi.com/products` and displays them in responsive cards.
- An **interactive shopping cart** with add, remove, increment, decrement, and delete functionality.
- A **navigation header** that switches between views using Redux state.
- An **order summary panel** that calculates subtotal, discount, tax, and total.
- A **marketing landing section** with hero copy, promotional CTA buttons, and a newsletter subscription UI.
- A **desktop-friendly footer** and promotional footer section.

## Main functionality

### Product browsing

- Fetches live product data from the Fake Store API.
- Displays each product with image, category, price, title, and action controls.
- Adds products to cart using an `Add to Cart` button.
- Shows quantity controls on products already in the cart.
- Handles loading and error states for product data.

### Cart operations

- Adds new products to the cart and tracks quantity.
- Increments and decrements cart item quantities.
- Automatically removes items when quantity reaches zero.
- Deletes items manually with a remove control.
- Displays an empty cart message when no items are selected.

### Order summary

- Computes the cart subtotal dynamically.
- Applies a **5% enterprise discount**.
- Includes **free shipping** and **estimated tax at 6%**.
- Shows the final total after discount and tax.
- Includes checkout and quote request call-to-action buttons.

### Navigation workflow

- Uses Redux to manage `currentView`: `Dashboard`, `Inventory`, `Cart`, `Analytics`.
- Renders either the `Products` page or the `Cart` page depending on navigation state.
- Header buttons and cart icon update the current view.
- The cart badge displays the total number of items in the cart.

## UI & components

### Primary pages

- `src/components/product-page/Products.jsx`
  - Integrates `Header`, `AdvertiseCard`, `PriorityCard`, `ProductCard`, `ViewAllProducts`, `FooterAdvertise`, and `Footer`.
- `src/components/cart-page/CartPage.jsx`
  - Shows `Header`, `CartItems`, and `Footer`.

### Product catalog

- `src/components/product-page/products-items/ProductCard.jsx`
  - Fetches data from Redux thunks.
  - Uses Material UI cards, grid layout, and responsive styling.
  - Shows add/increment/decrement controls for cart quantities.

### Cart details

- `src/components/cart-page/cart-items/CartItems.jsx`
  - Renders cart item cards with image, title, description, SKU, stock status, and quantity controls.
- `src/components/cart-page/orders/Orders.jsx`
  - Displays order breakdown and pricing summary.

### Marketing and layout

- `src/components/product-page/advertiseCard/AdvertiseCard.jsx`
  - Hero section with promotional copy, buttons, and large product imagery.
- `src/components/product-page/priority-card/PriorityCard.jsx`
  - Category navigation buttons, sort dropdown, and filter button.
- `src/components/product-page/view-all-products/ViewAllProducts.jsx`
  - A call-to-action button section to view more products.
- `src/components/product-page/footer-advertise/FooterAdvertise.jsx`
  - Email subscription marketing CTA.
- `src/components/product-page/footer/Footer.jsx`
  - Enterprise footer with links and copyright.

## State management

Redux Toolkit is used for application state.

### Store setup

- `src/store/store.js`
  - Combines `products`, `cart`, and `navigation` reducers.

### Product slice

- `src/features/products-slice/ProductsSlice.jsx`
  - Contains async thunk `getProducts()`.
  - Handles `fetchPending`, `fetchSuccess`, and `fetchError` states.
  - Stores product list, loading flag, and error message.

### Cart slice

- `src/features/cart-slice/CartSlice.jsx`
  - Stores cart items with `quantity`.
  - Actions: `addToCart`, `incrementItems`, `decrementItems`, `removeItems`.

### Navigation slice

- `src/features/navigation/NavigationSlice.jsx`
  - Stores `currentView`.
  - Action: `setView`.

## App workflow

1. `src/main.jsx` wraps the app with Redux `Provider`.
2. `src/App.jsx` reads `currentView` from Redux.
3. If `currentView === "Cart"`, renders the cart page. Otherwise, renders the products page.
4. `Header` dispatches `setView(...)` when navigation buttons or cart icon are clicked.
5. `ProductCard` dispatches `getProducts()` on mount to load product data.
6. Cart controls dispatch cart slice actions to update quantities and items.
7. `Orders` reads cart state and computes pricing metrics.

## Technology stack

- React 19
- Vite
- Redux Toolkit
- React Redux
- Material UI
- @mui/icons-material
- ESLint

## Available commands

- `npm install` — install dependencies.
- `npm run dev` — start the development server.
- `npm run build` — build the production bundle.
- `npm run lint` — run ESLint.
- `npm run preview` — preview the production build.

## Notes

- The app uses a public Fake Store API for product data.
- Navigation state includes views for Dashboard and Analytics, but only `Inventory`/product listing and `Cart` are fully rendered.
- Styling is implemented with a mix of CSS modules and inline Material UI SX styles.

## File structure overview

- `src/App.jsx` — entry component that chooses page view.
- `src/main.jsx` — app bootstrap.
- `src/store/store.js` — Redux store configuration.
- `src/features/` — Redux slices.
- `src/components/product-page/` — product landing page and marketing UI.
- `src/components/cart-page/` — cart and order summary UI.
- `src/components/product-page/*/*.css` and `src/components/cart-page/*/*.css` — component styles.

---

This README now reflects the complete RetailPro Enterprise application scope, user-facing features, and internal data flow.
