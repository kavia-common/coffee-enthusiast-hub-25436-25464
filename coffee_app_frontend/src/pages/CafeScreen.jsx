import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CafeScreen.css';

// PUBLIC_INTERFACE
const CafeScreen = () => {
    const navigate = useNavigate();

    const handleImageError = (e) => {
        console.log(`Failed to load image: ${e.target.src}`);
        e.target.onerror = null; // Prevent infinite loop if fallback also fails
    };

    useEffect(() => {
        const categoryBtns = document.querySelectorAll('.category-btn');
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                categoryBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // Add to cart button interactions
        const addBtns = document.querySelectorAll('.add-btn');
        addBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                // Add visual feedback
                btn.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    btn.style.transform = 'scale(1)';
                }, 100);
                
                // Get item details for future cart integration
                const item = btn.closest('.menu-item');
                const name = item.querySelector('h2').textContent;
                const price = item.querySelector('.price').textContent;
                
                console.log(`Added to cart: ${name} - ${price}`);
            });
        });

        // Enhance accessibility
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.getAttribute('alt')) {
                img.setAttribute('alt', ''); // Decorative images
            }
            img.setAttribute('draggable', 'false');
        });
    }, []);

    return (
        <div className="cafe-screen" role="main">
            {/* Header Section */}
            <header className="header">
                <img 
                    src="/assets/figma_image_205_198.png" 
                    alt="Cafe header image" 
                    className="header-image"
                    onError={handleImageError} 
                />
                <button className="back-button" aria-label="Go back" onClick={() => navigate('/')}>
                    <svg width="6" height="12" viewBox="0 0 6 12" fill="none">
                        <path d="M5 1L1 6L5 11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>
                <div className="dots">
                    <span className="dot dot-active"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </header>

            {/* Cafe Info Section */}
            <section className="cafe-info">
                <h1>Haus Coffee</h1>
                <div className="rating">
                    <img 
                        src="/assets/figma_image_207_60.png" 
                        alt="Star rating" 
                        className="star-icon"
                        onError={handleImageError} 
                    />
                    <span>4.4 429 reviews</span>
                </div>
                <p className="location">San Francisco, CA</p>
            </section>

            {/* Category Navigation */}
            <nav className="categories">
                <button className="category-btn active">
                    <img 
                        src="/assets/figma_image_207_36.png" 
                        alt="Coffee icon" 
                        className="category-icon"
                        onError={handleImageError} 
                    />
                    <span>Coffee</span>
                </button>
                <button className="category-btn">
                    <img 
                        src="/assets/figma_image_207_20.png" 
                        alt="Drinks icon" 
                        className="category-icon"
                        onError={handleImageError} 
                    />
                    <span>Drinks</span>
                </button>
                <button className="category-btn">
                    <img 
                        src="/assets/figma_image_207_18.png" 
                        alt="Food icon" 
                        className="category-icon"
                        onError={handleImageError} 
                    />
                    <span>Food</span>
                </button>
            </nav>

            {/* Menu Items */}
            <section className="menu-items">
                <div className="menu-item">
                    <img 
                        src="/assets/figma_image_207_65.png" 
                        alt="Café mocha" 
                        className="item-image"
                        onError={handleImageError} 
                    />
                    <div className="item-details">
                        <h2>Café mocha</h2>
                        <p>A chocolate-flavored warm beverage that is a variant of a café latte</p>
                        <span className="price">$3.00</span>
                    </div>
                    <button className="add-btn" aria-label="Add Café mocha to cart">
                        <svg width="14" height="14" viewBox="0 0 14 14">
                            <line x1="7" y1="0" x2="7" y2="14" stroke="white" strokeWidth="2"/>
                            <line x1="0" y1="7" x2="14" y2="7" stroke="white" strokeWidth="2"/>
                        </svg>
                    </button>
                </div>

                <div className="menu-item">
                    <img 
                        src="/assets/figma_image_207_65.png" 
                        alt="Caramel machiatto" 
                        className="item-image"
                        onError={handleImageError} 
                    />
                    <div className="item-details">
                        <h2>Caramel machiatto</h2>
                        <p>Steamed milk marked with an espresso and caramel topping</p>
                        <span className="price">$3.50</span>
                    </div>
                    <button className="add-btn" aria-label="Add Caramel machiatto to cart">
                        <svg width="14" height="14" viewBox="0 0 14 14">
                            <line x1="7" y1="0" x2="7" y2="14" stroke="white" strokeWidth="2"/>
                            <line x1="0" y1="7" x2="14" y2="7" stroke="white" strokeWidth="2"/>
                        </svg>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default CafeScreen;
