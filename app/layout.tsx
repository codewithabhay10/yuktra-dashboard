"use client";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ClientRootLayout from "./clientLayout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <DndProvider backend={HTML5Backend}>
          <ClientRootLayout>{children}</ClientRootLayout>
        </DndProvider>
      </body>
    </html>
  );
}


import './globals.css'
