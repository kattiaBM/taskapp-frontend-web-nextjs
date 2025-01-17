import { Inter } from "next/font/google";
import Link from "next/link";

import "./globals.css";
import styles from "./rootStyle.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: 'TaskApp Universidad Nacional de Costa Rica',
    description: 'Aplicación de Guía de Tareas para la Universidad Nacional de Costa Rica',
}

export default function RootLayout({children}) {
    return (
        <html lang="en" className={inter.className}>
        <head>
            <title>Task App | Universidad Nacional de Costa Rica</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
        </head>
        <body>
        <header>
            <h1 className={styles.h1}>Task App | Universidad Nacional de Costa Rica</h1>
            <div>
                <Link className={styles.menuBarLinks} href="/">
                    Home
                </Link>
            </div>
            <div>
                <Link className={styles.menuBarLinks} href="/tasks">
                    Tasks
                </Link>
            </div>
            <div>
                <Link className={styles.menuBarLinks} href="/settings">
                    Settings
                </Link>
            </div>
        </header>
        <div className={styles.container}>
            {children}
        </div>
        <footer className={styles.footer}>
            <p>Task App | Universidad Nacional de Costa Rica</p>
        </footer>
        </body>
        </html>
    );
}
