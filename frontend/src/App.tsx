import { Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'sonner'
import LoginPage from '@/features/Auth/pages/LoginPage'
import RegisterPage from '@/features/Auth/pages/RegisterPage'
import DashboardPlaceholder from '@/features/Auth/pages/DashboardPlaceholder.tsx'


// import { Button } from '@/shared/components/ui/button'
// import { ThemeToggle } from '@/shared/components/ui/ThemeToggle'
// import { Modal } from '@/shared/components/ui/Modal'
// import { MainLayout } from './layout/MainLayout'



// ─── App ─────────────

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPlaceholder />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>

      


      {/* ── Sonner Toaster ─────────────────────────────────────── */}
      <Toaster
        position="top-right"
        richColors
        toastOptions={{
          style: {
            fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
          },
        }}
      /> 
      {/* // <MainLayout /> */}
    </>
  )
}

export default App
