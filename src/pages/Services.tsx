import React from 'react'
import { useTranslation } from 'react-i18next';

function Services() {
    const { t } = useTranslation();

    return (
        <>
            <section className="section">
                <div className="container">
                    <h1 className="text-center mb-lg">{t('nav.services')}</h1>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2xl)' }}>

                        {/* Service 1 */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xl)' }}>
                            <div style={{ flex: 1 }}>
                                <div style={{ width: '100%', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                                    <img src="/images/dashboard-preview.png" alt="Dashboard" style={{ width: '100%', height: 'auto', display: 'block' }} />
                                </div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <h2 style={{ marginBottom: 'var(--spacing-md)', color: 'var(--color-primary)' }}>{t('features.dashboard')}</h2>
                                <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                                    {t('features.dashboard_desc')}
                                </p>
                                <ul style={{ marginTop: 'var(--spacing-md)', listStyle: 'disc', paddingLeft: 'var(--spacing-lg)' }}>
                                    <li>{t('services_page.dashboard.item1')}</li>
                                    <li>{t('services_page.dashboard.item2')}</li>
                                    <li>{t('services_page.dashboard.item3')}</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xl)', flexDirection: 'row-reverse' }}>
                            <div style={{ flex: 1 }}>
                                <div style={{ width: '100%', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                                    <img src="/images/report-preview.png" alt="Report" style={{ width: '100%', height: 'auto', display: 'block' }} />
                                </div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <h2 style={{ marginBottom: 'var(--spacing-md)', color: 'var(--color-primary)' }}>{t('features.report')}</h2>
                                <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                                    {t('features.report_desc')}
                                </p>
                                <ul style={{ marginTop: 'var(--spacing-md)', listStyle: 'disc', paddingLeft: 'var(--spacing-lg)' }}>
                                    <li>{t('services_page.report.item1')}</li>
                                    <li>{t('services_page.report.item2')}</li>
                                    <li>{t('services_page.report.item3')}</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xl)' }}>
                            <div style={{ flex: 1 }}>
                                <div style={{ width: '100%', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                                    <img src="/images/hero-bg.png" alt="Landing Page" style={{ width: '100%', height: 'auto', display: 'block' }} />
                                </div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <h2 style={{ marginBottom: 'var(--spacing-md)', color: 'var(--color-primary)' }}>{t('features.landing')}</h2>
                                <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                                    {t('features.landing_desc')}
                                </p>
                                <ul style={{ marginTop: 'var(--spacing-md)', listStyle: 'disc', paddingLeft: 'var(--spacing-lg)' }}>
                                    <li>{t('services_page.landing.item1')}</li>
                                    <li>{t('services_page.landing.item2')}</li>
                                    <li>{t('services_page.landing.item3')}</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
