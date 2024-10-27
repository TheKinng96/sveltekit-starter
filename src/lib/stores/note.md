# SvelteKit App Store Folder Notes

## Store Availability

Store instances are now kept exclusively on the client side to maintain user-specific data and prevent data sharing across users. This ensures that each user has a private instance of the store.

## Setting Store Data

Stores should be populated only on the client side. For any data needed from the server, fetch it in server.ts files and pass it down to the client via load functions or props, allowing you to populate client-side stores as necessary.

## Sources of Truth

The app has two primary sources of truth:

- Database

- Client-Side Store Instances

## Data Design Considerations

When designing the client UI, use #await blocks thoughtfully and distinguish between data types based on real-time needs:

#### Real-Time Data

For data that changes frequently or in real-time, access it directly from the database to ensure the latest information.

#### Static User-Controlled Data

For data that a user controls or data that won’t be modified by others, load it once and keep it in a client-side store. This reduces redundant API calls and optimizes performance.
