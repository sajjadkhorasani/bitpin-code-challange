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

## Summary

These libraries and tools work together to create a high-performance, responsive, and scalable application. Here’s a quick summary of each utility’s role:

| Library              | Purpose                                   | Key Benefits                                           |
| -------------------- | ----------------------------------------- | ------------------------------------------------------ |
| **React Query**      | Data fetching and caching                 | Caches data, reduces API calls, keeps UI in sync       |
| **Axios**            | HTTP requests                             | Efficient API requests with structured error handling  |
| **Tanstack Router**  | Client-side routing                       | Type-safe, modular routing; file-based for ease of use |
| **es-toolkit**       | Utility functions (alternative to Lodash) | Lightweight, tree-shakable functions                   |
| **Tanstack Virtual** | Virtualized list rendering                | Optimized performance for large lists                  |
| **react-swipeable**  | Swipeable tab functionality               | Mobile-friendly, touch-based tab navigation            |

By leveraging these utilities, the application achieves efficient data handling, smooth navigation, and a streamlined user experience optimized for both desktop and mobile users.

---

This documentation provides a foundational understanding of the utilities used and can be expanded as the project grows or evolves.
