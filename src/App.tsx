import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { LoginPage } from './pages/LoginPage';
import { DashboardLayout } from './layouts/DashboardLayout';
import { ContentDiscovery } from './pages/dashboard/ContentDiscovery';
import { ContentAnalysis } from './pages/dashboard/ContentAnalysis';
import { ContentGeneration } from './pages/dashboard/ContentGeneration';
import { Templates } from './pages/dashboard/Templates';
import { ContentLibrary } from './pages/dashboard/ContentLibrary';
import { Analytics } from './pages/dashboard/Analytics';
import { BrandVoice } from './pages/dashboard/BrandVoice';

export const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<ContentDiscovery />} />
            <Route path="analysis" element={<ContentAnalysis />} />
            <Route path="generation" element={<ContentGeneration />} />
            <Route path="templates" element={<Templates />} />
            <Route path="library" element={<ContentLibrary />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="brand-voice" element={<BrandVoice />} />
          </Route>
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};