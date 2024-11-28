# To Run
`npm run dev`
# **Routes**
## 1. **POST /host**
   - **What it does**: Creates a new host.
   - **What it requires**: `name` and `email` in the request body.
   - **What it returns**: The created host object with a 201 status code.

## 2. **GET /host**
   - **What it does**: Fetches a host by email.
   - **What it requires**: `email` in the request body.
   - **What it returns**: Host object if found, 200 status code.

## 3. **POST /user**
   - **What it does**: Creates a new user.
   - **What it requires**: `name` and `email` in the request body.
   - **What it returns**: The created user object with a 201 status code.

## 4. **GET /user**
   - **What it does**: Fetches a user by email.
   - **What it requires**: `email` in the request body.
   - **What it returns**: User object if found, 200 status code.

## 5. **POST /listing**
   - **What it does**: Creates a new listing.
   - **What it requires**: `title`, `hostId`, `location`, `price`, and `image` in the request body.
   - **What it returns**: The created listing object with a 201 status code.

## 6. **GET /listing/host/:hostId**
   - **What it does**: Fetches all listings by a specific host.
   - **What it requires**: `hostId` as a URL parameter.
   - **What it returns**: Array of listings if found, 200 status code.

## 7. **GET /listing**
   - **What it does**: Fetches listings by category.
   - **What it requires**: `category` in the request body.
   - **What it returns**: Array of listings matching the category, 200 status code.

## 8. **GET /listing/:id**
   - **What it does**: Fetches a listing by its ID.
   - **What it requires**: `id` as a URL parameter.
   - **What it returns**: The listing object if found, 200 status code.

## 9. **POST /booking**
   - **What it does**: Creates a new booking.
   - **What it requires**: `listingId`, `userId`, `checkIn`, and `checkOut` in the request body.
   - **What it returns**: The created booking object with a 201 status code.

## 10. **GET /booking/host/:hostId**
   - **What it does**: Fetches all bookings for a host's listings.
   - **What it requires**: `hostId` as a URL parameter.
   - **What it returns**: Array of bookings related to the host's listings, 200 status code.

## 11. **GET /booking/user/:userId**
   - **What it does**: Fetches all bookings for a user.
   - **What it requires**: `userId` as a URL parameter.
   - **What it returns**: Array of bookings made by the user, 200 status code.