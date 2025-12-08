import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();

    return (
        <>
            {/* Hero Section */}
            <section className="section hero" style={{ backgroundImage: "url('/images/hero-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255, 255, 255, 0.9)', zIndex: 1 }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="hero-content text-center">
                        <h1 style={{ fontSize: '3.5rem', marginBottom: 'var(--spacing-md)', lineHeight: 1.2 }}>
                            {t('hero.title')}<br />
                            <span className="text-primary">{t('hero.subtitle')}</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-xl)', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
                            {t('hero.desc')}
                        </p>
                        <div className="hero-cta">
                            <Link to="/contact" className="btn btn-primary">{t('hero.cta_primary')}</Link>
                            <Link to="/services" className="btn btn-outline" style={{ marginLeft: 'var(--spacing-md)' }}>{t('hero.cta_secondary')}</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Preview */}
            <section className="section" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <h2 className="text-center mb-lg">{t('features.title')}</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>

                        <div className="card" style={{ padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)', background: 'var(--color-bg-body)' }}>
                            <h3 style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--color-primary)' }}>{t('features.dashboard')}</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>{t('features.dashboard_desc')}</p>
                        </div>

                        <div className="card" style={{ padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)', background: 'var(--color-bg-body)' }}>
                            <h3 style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--color-primary)' }}>{t('features.report')}</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>{t('features.report_desc')}</p>
                        </div>

                        <div className="card" style={{ padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)', background: 'var(--color-bg-body)' }}>
                            <h3 style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--color-primary)' }}>{t('features.landing')}</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>{t('features.landing_desc')}</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Why Us / Unfair Advantage */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2xl)' }}>
                        <div style={{ flex: 1 }}>
                            <h2 style={{ marginBottom: 'var(--spacing-md)' }}>{t('whyus.title')}</h2>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                                <li style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', marginRight: 'var(--spacing-sm)' }}>✓</span>
                                    <span>{t('whyus.item1')}</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', marginRight: 'var(--spacing-sm)' }}>✓</span>
                                    <span>{t('whyus.item2')}</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', marginRight: 'var(--spacing-sm)' }}>✓</span>
                                    <span>{t('whyus.item3')}</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', marginRight: 'var(--spacing-sm)' }}>✓</span>
                                    <span>{t('whyus.item4')}</span>
                                </li>
                            </ul>
                        </div>
                        <div style={{ flex: 1, borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                            <img src="/images/dashboard-preview.png" alt="Dashboard Preview" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
