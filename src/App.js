import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import HomePageLoading from './Pages/Shared/HomePageLoading/HomePageLoading';
import router from './Routes/Routes/Routes';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }, [])

  return (
    <div className='max-w-[1440px] mx-auto'>
      {
        loading ? <HomePageLoading /> : <>
          <RouterProvider router={router}></RouterProvider>
        </>
      }
    </div>
  );
}

export default App;
