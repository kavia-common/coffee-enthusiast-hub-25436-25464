import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomeScreen.css';

// PUBLIC_INTERFACE
const HomeScreen = () => {
    const navigate = useNavigate();

    const handleCardClick = (shopName) => {
        console.log(`Selected shop: ${shopName}`);
        navigate('/cafe');
    };

    const handleFavorite = (e, shopName) => {
        e.stopPropagation();
        console.log(`Favorited: ${shopName}`);
    };

    const handleSearch = () => {
        console.log('Search clicked - would expand to full search interface');
    };

    const handleFilter = () => {
        console.log('Filter clicked - would show filter options');
    };

    return (
        <div className="home-screen" role="main">
            {/* Search Section */}
            <section className="search-section">
                <div className="search-bar">
                    <div className="search-input" onClick={handleSearch}>
                        <img src="/assets/figma_image_205_205.png" alt="Search icon" className="search-icon" />
                        <span className="search-placeholder">Search</span>
                    </div>
                    <button className="filter-btn" aria-label="Filter options" onClick={handleFilter}>
                        <div className="filter-icon">
                            <span className="line line-1"></span>
                            <span className="line line-2"></span>
                            <span className="dot dot-1"></span>
                            <span className="dot dot-2"></span>
                        </div>
                    </button>
                </div>
            </section>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="profile-circle">
                    <img src="/assets/figma_image_203_66.png" alt="Profile" className="profile-img" draggable="false" />
                </div>
                <h1>Find a coffee shop<br />anywhere</h1>
            </section>

            {/* Featured Section */}
            <section className="featured-section">
                <h2>Featured coffee shops</h2>
                <div className="coffee-shops">
                    {/* Coffee Shop Card 1 */}
                    <div className="coffee-shop-card" onClick={() => handleCardClick('Home Coffee Roasters')}>
                        <div className="card-image-container">
                            <img 
                                src="/assets/figma_image_203_72.png" 
                                alt="Home Coffee Roasters" 
                                className="shop-image" 
                                draggable="false" 
                            />
                            <button 
                                className="favorite-btn" 
                                aria-label="Add to favorites"
                                onClick={(e) => handleFavorite(e, 'Home Coffee Roasters')}
                            >
                                <img 
                                    src="/assets/figma_image_205_91.png" 
                                    alt="Heart icon" 
                                    className="heart-icon" 
                                    draggable="false" 
                                />
                            </button>
                        </div>
                        <div className="card-content">
                            <h3>Home Coffee Roasters</h3>
                            <div className="rating">
                                <img 
                                    src="/assets/figma_image_205_98.png" 
                                    alt="Star" 
                                    className="star-icon" 
                                    draggable="false" 
                                />
                                <span>4.5 1,200 reviews</span>
                            </div>
                            <p className="distance">3.8 miles</p>
                        </div>
                    </div>

                    {/* Coffee Shop Card 2 */}
                    <div className="coffee-shop-card" onClick={() => handleCardClick('Haus Coffee')}>
                        <div className="card-image-container">
                            <img 
                                src="/assets/figma_image_203_73.png" 
                                alt="Haus Coffee" 
                                className="shop-image" 
                                draggable="false" 
                            />
                            <button 
                                className="favorite-btn" 
                                aria-label="Add to favorites"
                                onClick={(e) => handleFavorite(e, 'Haus Coffee')}
                            >
                                <img 
                                    src="/assets/figma_image_205_91.png" 
                                    alt="Heart icon" 
                                    className="heart-icon" 
                                    draggable="false" 
                                />
                            </button>
                        </div>
                        <div className="card-content">
                            <h3>Haus Coffee</h3>
                            <div className="rating">
                                <img 
                                    src="/assets/figma_image_205_98.png" 
                                    alt="Star" 
                                    className="star-icon" 
                                    draggable="false" 
                                />
                                <span>4.4 429 reviews</span>
                            </div>
                            <p className="distance">2.5 miles</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation Bar */}
            <nav className="nav-bar">
                <div className="nav-item active">
                    <div className="nav-highlight"></div>
                    <img src="/assets/figma_image_205_154.png" alt="Home" className="nav-icon" draggable="false" />
                </div>
                <div className="nav-item">
                    <img src="/assets/figma_image_205_162.png" alt="Favorites" className="nav-icon" draggable="false" />
                </div>
                <div className="nav-item">
                    <img src="/assets/figma_image_205_157.png" alt="Bookmarks" className="nav-icon" draggable="false" />
                </div>
                <div className="nav-item">
                    <img src="/assets/figma_image_205_160.png" alt="Profile" className="nav-icon" draggable="false" />
                </div>
            </nav>
        </div>
    );
};

export default HomeScreen;
