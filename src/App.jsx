// import { useContext, useEffect, useState } from 'react'
import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';
import { CitiesProvider } from './Context/CitiesContext';
import { AuthProvider } from './Context/FakeAuthContext';
import ProtectedRoute from './Pages/ProtectedRoute';
import SpinnerFullPage from './components/SpinnerFullPage';

const Product = lazy(() =>  import ("./Pages/Product"))
const Pricing = lazy(() =>  import ("./Pages/Pricing"))
const HomePage = lazy(() =>  import ("./Pages/Homepage"))
const AppLayout = lazy(() =>  import ("./Pages/AppLayout"))
const CityList = lazy(() =>  import ("./components/CityList"))
const PageNotFound = lazy(() =>  import ("./Pages/PageNotFound"))
const Login = lazy(() =>  import ('./Pages/Login'))

function App() {

  return (
    <AuthProvider>
    <CitiesProvider>
<BrowserRouter>
<Suspense fallback={<SpinnerFullPage />}>
<Routes>
  <Route index element={<HomePage />} />
  <Route path="product" element={<Product />} />
  <Route path="pricing" element={<Pricing />} />
  <Route path="login" element={<Login />} />
  <Route path="app" element={
    <ProtectedRoute><AppLayout /></ProtectedRoute>} >
    <Route index element={<Navigate to='cities' replace/>} />
    <Route path='cities' element={<CityList />} />
    {/* <Route path='cities' element={<CityList cities={cities} isLoading={isLoading} />} /> */}
    <Route path='cities/:id' element={<City />}/>
    <Route path='countries' element={<CountryList />} />
    {/* <Route path='countries' element={<CountryList cities={cities} isLoading={isLoading} />} /> */}
    <Route path='form' element={<Form />} />
    </Route>
  <Route path="*" element={<PageNotFound />} />
</Routes>
</Suspense>
</BrowserRouter>
    </CitiesProvider>
    </AuthProvider>
  )
}

export default App
