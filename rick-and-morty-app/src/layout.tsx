import React, { useState, useEffect } from 'react'
import Navbar from './shared/components/Navbar/Navbar'
import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useDarkMode } from 'usehooks-ts'

type LayoutProps  = {
    children: any
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [queryClient] = useState(() => new QueryClient())
    const { isDarkMode } = useDarkMode()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const body = <>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={{ mode: isDarkMode ? 'dark' : 'light' }}>
                <Navbar />
                <main>{children}</main>
            </ThemeProvider>
        </QueryClientProvider>
    </>

    // prevents ssr flash for mismatched dark mode
    if (!mounted) {
        return <div style={{ visibility: 'hidden' }}>{body}</div>
    }

    return body
}

export default Layout