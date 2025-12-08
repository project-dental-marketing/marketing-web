
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();

    return (
        <>
            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <h1 className="text-center mb-lg">{t('contact.title')}</h1>
                        <p className="text-center" style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-xl)', whiteSpace: 'pre-line' }}>
                            {t('contact.desc')}
                        </p>

                        <div style={{ background: 'white', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
                            <form action="mailto:contact@dentaltech.co.kr" method="post" encType="text/plain" onSubmit={() => { }}>
                                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                                    <label htmlFor="name" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 500 }}>{t('contact.name')}</label>
                                    <input type="text" id="name" name="name" required style={{ width: '100%', padding: 'var(--spacing-sm)', border: '1px solid #CBD5E1', borderRadius: 'var(--radius-sm)' }} />
                                </div>

                                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                                    <label htmlFor="email" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 500 }}>{t('contact.email')}</label>
                                    <input type="email" id="email" name="email" required style={{ width: '100%', padding: 'var(--spacing-sm)', border: '1px solid #CBD5E1', borderRadius: 'var(--radius-sm)' }} />
                                </div>

                                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                                    <label htmlFor="phone" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 500 }}>{t('contact.phone')}</label>
                                    <input type="tel" id="phone" name="phone" style={{ width: '100%', padding: 'var(--spacing-sm)', border: '1px solid #CBD5E1', borderRadius: 'var(--radius-sm)' }} />
                                </div>

                                <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                                    <label htmlFor="message" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 500 }}>{t('contact.message')}</label>
                                    <textarea id="message" name="message" rows={5} required style={{ width: '100%', padding: 'var(--spacing-sm)', border: '1px solid #CBD5E1', borderRadius: 'var(--radius-sm)' }}></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>{t('contact.submit')}</button>
                            </form>
                        </div>

                        <div className="text-center" style={{ marginTop: 'var(--spacing-xl)' }}>
                            <p style={{ fontWeight: 600 }}>{t('contact.direct')}</p>
                            <p style={{ color: 'var(--color-primary)', fontSize: '1.25rem' }}>contact@dentaltech.co.kr</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
