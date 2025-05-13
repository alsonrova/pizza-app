"use client"

import Logo from './components/logo'
import Navigation from './navigation/navigation'
import { useEffect,useState } from 'react'

function Header() {
  const [bgColor, setBgColor] = useState('bg-transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBgColor('bg-black/80'); // Change le bg quand on a scrollé de plus de 50px
      } else {
        setBgColor('bg-transparent'); // Reviens au bg initial si on remonte
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, [])
  return (
    <header className={`fixed top-0 flex w-full h-44 flex-col ${bgColor} z-50 p-4 transition-colors`}>
      <Logo />
      <Navigation />   
    </header>
  )
}
export default Header