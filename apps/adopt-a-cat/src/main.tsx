import { StrictMode } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import './styles.css';
import { SingleCatPage } from './pages/single-cat/single-cat-page';
import { BrowseCatsPage } from './pages/browse-cats/browse-cats.page';
import { AdminPage } from './pages/admin/admin.page';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
        <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg overflow-hidden min-h-[600px] flex flex-col">
          <header className="bg-indigo-600 text-white p-4 flex items-center gap-4 h-24 shadow-md z-10">
            <img
              src="https://i.ibb.co/gF3vY7jb/adopt-a-cat.png"
              width="90"
              height="90"
              alt="App Logo"
              className="p-1"
            />
            <div className="flex-1"></div>
            <nav className="flex gap-2">
              <Link
                to="/"
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors uppercase tracking-wider text-sm font-medium"
              >
                <span className="material-icons">pets</span>
                Browse
              </Link>
              <Link
                to="/admin"
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors uppercase tracking-wider text-sm font-medium"
              >
                <span className="material-icons">settings</span>
                Admin
              </Link>
            </nav>
          </header>
          <main className="flex-1 p-6 bg-gray-50/50">
            <Routes>
              <Route path="/" element={<BrowseCatsPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/cats/:id" element={<SingleCatPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  </StrictMode>,
);
