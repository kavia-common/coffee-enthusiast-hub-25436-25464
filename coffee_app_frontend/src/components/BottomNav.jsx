import { NavLink } from 'react-router-dom';
import '../styles/BottomNav.css';

// PUBLIC_INTERFACE
const BottomNav = () => {
    return (
        <nav className="bottom-nav" role="navigation" aria-label="Bottom Navigation">
            <div className="bottom-nav-container">
                <NavLink to="/home" className="nav-item" aria-current="page">
                    <img src="/assets/figma_image_205_154.png" alt="" className="nav-icon" draggable="false" />
                    <span className="nav-label">Home</span>
                </NavLink>
                <NavLink to="/favorites" className="nav-item">
                    <img src="/assets/figma_image_205_162.png" alt="" className="nav-icon" draggable="false" />
                    <span className="nav-label">Favorites</span>
                </NavLink>
                <NavLink to="/bookmarks" className="nav-item">
                    <img src="/assets/figma_image_205_157.png" alt="" className="nav-icon" draggable="false" />
                    <span className="nav-label">Bookmarks</span>
                </NavLink>
                <NavLink to="/profile" className="nav-item">
                    <img src="/assets/figma_image_205_160.png" alt="" className="nav-icon" draggable="false" />
                    <span className="nav-label">Profile</span>
                </NavLink>
            </div>
        </nav>
    );
};

export default BottomNav;
