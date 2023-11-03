

const NavBar = () => {
  return (
    <div className="container">
      <nav>
<div className='logo'>
  <img src='/Images/Nike.png' alt='Nike Logo' height={'45px'} width={'90px'} />
</div>

<ul>
  <li className="list1" href='#'>Menu</li>
  <li className="list2" href='#'>Location</li>
  <li className="list3"  href='#'>About</li>
  <li className="list4" href='#'>Contactus</li>
</ul>
<button>Login</button>
  </nav>
    </div>
  )
}

export default NavBar
