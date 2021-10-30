import { lazy, Suspense } from 'react';
import { Loader } from './components/Loader';

const Header = lazy(() => import('./components/Header'));
const Layer = lazy(() => import('./components/Layer'));
const MainContent = lazy(() => import('./components/MainContent'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => (
      <div className="container">
        <Suspense fallback={<Loader />}>
            <Layer />
            <Header />
            <MainContent />
            <Footer />
        </Suspense>
      </div>
  );

export default  App;