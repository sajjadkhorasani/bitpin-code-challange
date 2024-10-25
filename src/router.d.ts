/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './pages/__root'
import { Route as homeIndexImport } from './pages/(home)/index'
import { Route as OrdersMarketIdIndexImport } from './pages/orders/$marketId/index'

// Create/Update Routes

const homeIndexRoute = homeIndexImport.update({
  id: '/(home)/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const OrdersMarketIdIndexRoute = OrdersMarketIdIndexImport.update({
  id: '/orders/$marketId/',
  path: '/orders/$marketId/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/(home)/': {
      id: '/(home)/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof homeIndexImport
      parentRoute: typeof rootRoute
    }
    '/orders/$marketId/': {
      id: '/orders/$marketId/'
      path: '/orders/$marketId'
      fullPath: '/orders/$marketId'
      preLoaderRoute: typeof OrdersMarketIdIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof homeIndexRoute
  '/orders/$marketId': typeof OrdersMarketIdIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof homeIndexRoute
  '/orders/$marketId': typeof OrdersMarketIdIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/(home)/': typeof homeIndexRoute
  '/orders/$marketId/': typeof OrdersMarketIdIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/orders/$marketId'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/orders/$marketId'
  id: '__root__' | '/(home)/' | '/orders/$marketId/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  homeIndexRoute: typeof homeIndexRoute
  OrdersMarketIdIndexRoute: typeof OrdersMarketIdIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  homeIndexRoute: homeIndexRoute,
  OrdersMarketIdIndexRoute: OrdersMarketIdIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/(home)/",
        "/orders/$marketId/"
      ]
    },
    "/(home)/": {
      "filePath": "(home)/index.tsx"
    },
    "/orders/$marketId/": {
      "filePath": "orders/$marketId/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
