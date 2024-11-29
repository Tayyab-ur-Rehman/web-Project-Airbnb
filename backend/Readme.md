# To Run
`npm run dev`
# Routes Documentation

## Host Routes

### `POST /host`
1. **Purpose**: Create a new host.
2. **Inputs**: `name`, `email` (in request body).
3. **Returns**: Saved host object (`201` status).

### `GET /host`
1. **Purpose**: Retrieve a host by email.
2. **Inputs**: `email` (in request body).
3. **Returns**: Host object (`200` status) or error.

---

## User Routes

### `POST /user`
1. **Purpose**: Create a new user.
2. **Inputs**: `name`, `email` (in request body).
3. **Returns**: Saved user object (`201` status).

### `GET /user`
1. **Purpose**: Retrieve a user by email.
2. **Inputs**: `email` (in request body).
3. **Returns**: User object (`200` status) or error.

---

## Listing Routes

### `POST /listing/host`
1. **Purpose**: Add a listing for a host.
2. **Inputs**: `title`, `hostId`, `location`, `price`, `image` (in request body).
3. **Returns**: Saved listing object (`201` status).

### `DELETE /listings/host/:listingid`
1. **Purpose**: Delete a listing by ID.
2. **Inputs**: `listingid` (as URL parameter).
3. **Returns**: Success message (`200` status).

### `GET /listing/host/:hostId`
1. **Purpose**: Get all listings of a host.
2. **Inputs**: `hostId` (as URL parameter).
3. **Returns**: Array of listings (`200` status).

### `GET /listing`
1. **Purpose**: Get all listings by category.
2. **Inputs**: `category` (in request body).
3. **Returns**: Array of listings (`200` status).

### `GET /listing/:id`
1. **Purpose**: Get a listing by ID.
2. **Inputs**: `id` (as URL parameter).
3. **Returns**: Listing object (`200` status).

---

## Booking Routes

### `POST /booking`
1. **Purpose**: Create a booking for a listing.
2. **Inputs**: `listingid`, `userid`, `checkIn`, `checkOut` (in request body).
3. **Returns**: Booking ID (`201` status).

### `GET /booking/host/:hostId`
1. **Purpose**: Get bookings of a host.
2. **Inputs**: `hostId` (as URL parameter).
3. **Returns**: Array of bookings (`200` status).

### `GET /booking/user/:userId`
1. **Purpose**: Get bookings of a user.
2. **Inputs**: `userId` (as URL parameter).
3. **Returns**: Array of bookings (`200` status).

---

## Admin Routes

### `GET /api/admin/listings`
1. **Purpose**: Fetch all listings.
2. **Inputs**: None.
3. **Returns**: Array of all listings (`200` status).

### `GET /api/admin/mylistings`
1. **Purpose**: Fetch all admin listings.
2. **Inputs**: None.
3. **Returns**: Array of admin listings (`200` status).

### `POST /admin/listings`
1. **Purpose**: Add a listing as an admin.
2. **Inputs**: `title`, `location`, `price`, `image`, `category` (in request body).
3. **Returns**: Saved listing object (`201` status).

### `DELETE /admin/listings/:id`
1. **Purpose**: Delete an admin listing by ID.
2. **Inputs**: `id` (as URL parameter).
3. **Returns**: Success message (`200` status).

### `GET /admin/bookings/:bookingid`
1. **Purpose**: Fetch all bookings.
2. **Inputs**: None.
3. **Returns**: Array of all bookings (`200` status).
