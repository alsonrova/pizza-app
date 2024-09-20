import floraldecoration from '../public/assets/floraldecoration.png'
import Logo from './components/logo'
import Navigation from './navigation/navigation'

function Header() {
  return (
    <header className="fixed top-0 flex w-full h-40 flex-col">
      <Logo />
      <Navigation />   
    </header>
  )
}
export default Header