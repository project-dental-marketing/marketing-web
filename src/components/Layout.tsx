import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function Layout() {
    const location = useLocation();
    const { t, i18n } = useTranslation();

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <Link to="/" className="logo">Dental Tech</Link>
                    <ul className="nav-links">
                        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>{t('nav.home')}</Link></li>
                        <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>{t('nav.services')}</Link></li>
                        <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>{t('nav.about')}</Link></li>
                        <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>{t('nav.contact')}</Link></li>
                    </ul>
                    <div style={{ marginLeft: 'var(--spacing-lg)' }}>
                        <button onClick={() => i18n.changeLanguage('ko')} style={{ marginRight: '8px', border: 'none', background: 'none', cursor: 'pointer', fontWeight: i18n.language === 'ko' ? 'bold' : 'normal' }}>KO</button>
                        <span style={{ color: '#ccc' }}>|</span>
                        <button onClick={() => i18n.changeLanguage('en')} style={{ marginLeft: '8px', border: 'none', background: 'none', cursor: 'pointer', fontWeight: i18n.language === 'en' ? 'bold' : 'normal' }}>EN</button>
                    </div>
                </div>
            </nav>

            <main>
                <Outlet />
            </main>

            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div>
                            <h3>Dental Tech</h3>
                            <p style={{ color: '#94A3B8', marginBottom: 'var(--spacing-md)', whiteSpace: 'pre-line' }}>
                                {t('footer.desc')}
                            </p>
                        </div>
                        <div>
                            <h4>Contact</h4>
                            <p>contact@dentaltech.co.kr</p>
                            <p>서울시 강남구 테헤란로 123</p>
                        </div>
                        <div>
                            <h4>Menu</h4>
                            <Link to="/services">{t('nav.services')}</Link>
                            <Link to="/about">{t('nav.about')}</Link>
                            <Link to="/contact">{t('nav.contact')}</Link>
                        </div>
                    </div>
                    <div style={{ borderTop: '1px solid #334155', marginTop: 'var(--spacing-xl)', paddingTop: 'var(--spacing-md)', textAlign: 'center', color: '#64748B', fontSize: '0.875rem' }}>
                        {t('footer.rights')}
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Layout
