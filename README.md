## Overview

This project was developed as a coding challenge for Bitpin, a cryptocurrency exchange platform. It is designed to be efficient, scalable, and easy to extend. The project uses several modern libraries and tools to ensure responsive and performant handling of API data, UI updates, and calculations.

## Libraries and Utilities

### 1. **@tanstack/react-query**

- **Usage**: Manages server state and data fetching throughout the application.
- **Benefits**: Simplifies server data synchronization, caching, and background refetching, ensuring data consistency and improving performance.
- **Key Functions**: `useQuery`, `useMutation`, `useQueryClient`

### 2. **@tanstack/react-router**

- **Usage**: Handles routing within the application with a focus on client-side navigation.
- **Benefits**: Offers type-safe, modular, and data-driven routing with built-in support for code splitting.
- **Key Functions**: `createReactRouter`, `useNavigate`, `useParams`

### 3. **@tanstack/react-virtual**

- **Usage**: Implements virtualization for efficient rendering of long lists.
- **Benefits**: Reduces rendering overhead for large datasets, optimizing the DOM and improving user experience.
- **Key Functions**: `useVirtual`

### 4. **axios**

- **Usage**: API requests and error handling.
- **Benefits**: Simplifies HTTP requests and response management, with support for interceptors and custom headers.
- **Key Functions**: `axios.create`, `axios.get`, `axios.post`

### 5. **decimal.js**

- **Usage**: Handles precise decimal and financial calculations.
- **Benefits**: Eliminates floating-point errors and ensures accuracy in financial computations.
- **Key Functions**: `Decimal.add`, `Decimal.div`, `Decimal.times`

### 6. **es-toolkit**

- **Usage**: Provides utility functions for managing, transforming, and validating data.
- **Benefits**: Helps maintain clean and reusable code through standardized utilities.
- **Key Functions**: Various utility functions as per requirements.

### 7. **react-intersection-observer**

- **Usage**: Implements infinite scroll functionality.
- **Benefits**: Enhances UX by loading more data only when the user reaches the bottom, conserving resources.
- **Key Functions**: `useInView`

---

## Pros and Cons

### Pros

- **Efficient Data Management**: With `@tanstack/react-query`, data is cached, reducing redundant requests and ensuring a fast user experience.
- **Optimized Rendering**: Virtualization with `@tanstack/react-virtual` decreases the rendering load, improving performance with large datasets.
- **Accurate Calculations**: `decimal.js` handles precise decimal arithmetic, ensuring accuracy in currency values.
- **Clean and Modular Routing**: `@tanstack/react-router` offers a flexible routing solution, making the app structure intuitive and maintainable.
- **Scalability**: The stack and modular structure make it easy to expand functionality or add more features in the future.

### Cons

- **Learning Curve**: `@tanstack` libraries have a learning curve for developers unfamiliar with advanced React and TypeScript features.
- **Bundle Size**: Each library adds to the bundle size, which can impact performance if not managed properly.
- **Additional Configuration**: Tools like `axios` and `decimal.js` require setup and customization for efficient usage, which could lead to increased development time.

---

## Additional Notes

- **Testing**: Consider adding unit and integration tests for critical utilities and components.
- **Future Improvements**: As the app grows, consider lazy loading or code splitting to further optimize performance.

---
