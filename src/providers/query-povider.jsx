// app/providers.js
'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function QueryPovider({ children }) {
    // أنشئ نسخة واحدة فقط من العميل لكل طلب
    const [queryClient] = React.useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}