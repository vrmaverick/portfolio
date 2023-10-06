import React ,{useState,useEffect} from 'react'
import './style.css'

function Header(){
    const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const handleDropdown = (event)=>{
    toggleDropdown();
  }
  const handleOutside = (event) => {
    if (!event.target.matches('.dropbtn')) {
      setDropdownVisible(false);
    }
  };
  useEffect(()=>{
    const dropbtn = document.querySelector('.dropbtn');
    dropbtn.addEventListener('click',handleDropdown);
    window.addEventListener('click',handleOutside);
    return () => {
        window.removeEventListener('click', handleOutside);
        dropbtn.removeEventListener('click',handleDropdown);
      };
    }, []);


    return (
    <header>
        <nav>
            <div class="menu-toggle">
            <i className={`fas fa-bars dropbtn ${isDropdownVisible ? 'show' : ''}`} onClick={handleDropdown}>
            <div id="myDropdown" className={`dropdown-content ${isDropdownVisible ? 'show' : ''}`}>
                      <a class="d_link" href="#">Home</a>
                      <a class="d_link"href="#">Projects</a>
                      <a class="d_link"href="#">Contact</a>
                    </div>
                  </i>
            </div>
            <ul class="route">
                <li class="tab home-tab">Home</li>
                <li class="tab projects-tab">Projects</li>
                <li class="tab contact-tab">Contact</li>
            </ul>
            <ul class="icons">
                <li class="social-icon"><a href="#"><i class="fab fa-instagram"></i></a></li>
                <li class="social-icon"><a href="#"><i class="fab fa-linkedin"></i></a></li>
                <li class="social-icon"><a href="#"><i class="fab fa-github"></i></a></li>
                <li class="social-icon"><a href="#"><i class="fab fa-hackerrank"></i></a></li>
            </ul>
        </nav>
    </header>
    );
}
export default Header;