
import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation();

    return (
        <>
            {/* Hero Section */}
            <section className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container text-center">
                    <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>{t('nav.about')}</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
                        Dental Tech는 데이터와 기술로 치과 경영의 새로운 기준을 만듭니다.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-primary)' }}>{t('about_page.mission_title')}</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-text-main)', whiteSpace: 'pre-line' }}>
                            {t('about_page.mission_desc')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg-body)' }}>
                <div className="container">
                    <h2 className="text-center mb-lg">{t('about_page.team_title')}</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-xl)', justifyContent: 'center' }}>

                        {/* CEO Card */}
                        <div style={{ background: 'white', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}>
                            <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto var(--spacing-md) auto', border: '4px solid var(--color-bg-body)' }}>
                                <img src="/images/avatar-ceo.png" alt="CEO Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={{ marginBottom: 'var(--spacing-xs)', fontSize: '1.25rem' }}>CEO</h3>
                            <p style={{ color: 'var(--color-primary)', fontWeight: 600, marginBottom: 'var(--spacing-md)' }}>{t('about_page.ceo_role')}</p>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                                {t('about_page.ceo_desc')}
                            </p>
                        </div>

                        {/* CTO Card */}
                        <div style={{ background: 'white', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}>
                            <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto var(--spacing-md) auto', border: '4px solid var(--color-bg-body)' }}>
                                <img src="/images/avatar-cto.png" alt="CTO Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={{ marginBottom: 'var(--spacing-xs)', fontSize: '1.25rem' }}>CTO</h3>
                            <p style={{ color: 'var(--color-primary)', fontWeight: 600, marginBottom: 'var(--spacing-md)' }}>{t('about_page.cto_role')}</p>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                                {t('about_page.cto_desc')}
                            </p>
                        </div>

                        {/* Marketing Card */}
                        <div style={{ background: 'white', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}>
                            <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto var(--spacing-md) auto', border: '4px solid var(--color-bg-body)' }}>
                                <img src="/images/avatar-marketing.png" alt="Marketing Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={{ marginBottom: 'var(--spacing-xs)', fontSize: '1.25rem' }}>Marketing</h3>
                            <p style={{ color: 'var(--color-primary)', fontWeight: 600, marginBottom: 'var(--spacing-md)' }}>{t('about_page.marketing_role')}</p>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                                {t('about_page.marketing_desc')}
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default About
