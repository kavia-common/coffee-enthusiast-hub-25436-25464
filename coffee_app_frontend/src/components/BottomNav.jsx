import { NavLink } from 'react-router-dom';
import '../styles/BottomNav.css';

// PUBLIC_INTERFACE
const BottomNav = () => {
    return (
        <nav className="bottom-nav" role="navigation" aria-label="Main Navigation">
            <div className="bottom-nav-container">
                <NavLink 
                    to="/home" 
                    className={({ isActive }) => `nav-item ${isActive ? 'is-active' : ''}`}
                    aria-label="Home"
                >
                    <div className="nav-item-content">
                        <img src="/assets/figma_image_205_154.png" alt="" className="nav-icon" draggable="false" />
                        <span className="nav-label">Home</span>
                    </div>
                </NavLink>
                
                <NavLink 
                    to="/favorites" 
                    className={({ isActive }) => `nav-item ${isActive ? 'is-active' : ''}`}
                    aria-label="Favorites"
                >
                    <div className="nav-item-content">
                        <img src="/assets/figma_image_205_162.png" alt="" className="nav-icon" draggable="false" />
                        <span className="nav-label">Favorites</span>
                    </div>
                </NavLink>
                
                <NavLink 
                    to="/bookmarks" 
                    className={({ isActive }) => `nav-item ${isActive ? 'is-active' : ''}`}
                    aria-label="Bookmarks"
                >
                    <div className="nav-item-content">
                        <img src="/assets/figma_image_205_157.png" alt="" className="nav-icon" draggable="false" />
                        <span className="nav-label">Bookmarks</span>
                    </div>
                </NavLink>
                
                <NavLink 
                    to="/profile" 
                    className={({ isActive }) => `nav-item ${isActive ? 'is-active' : ''}`}
                    aria-label="Profile"
                >
                    <div className="nav-item-content">
                        <img src="/assets/figma_image_205_160.png" alt="" className="nav-icon" draggable="false" />
                        <span className="nav-label">Profile</span>
                    </div>
                </NavLink>
            </div>
        </nav>
    );
};

export default BottomNav;
