import styles from '/styles/PrivacyPolicy.module.css';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faShield } from '@fortawesome/free-solid-svg-icons';

const CONTACT_EMAIL = 'miusoft.games@gmail.com';
const COMPANY_NAME = 'Miusoft';
const OWNER_NAME = 'Kasun Miuranga';
const EFFECTIVE_DATE = 'April 26, 2025';

const sections = [
    {
        id: 'overview',
        title: 'Overview',
        content: `${COMPANY_NAME} ("we", "our", or "us"), operated by ${OWNER_NAME}, develops and publishes mobile games for audiences of all ages, including children. We are committed to protecting the privacy of all our users. This Privacy Policy explains how we handle information when you use any of our games or visit our website.`,
    },
    {
        id: 'data-collection',
        title: 'Data We Collect',
        content: `Most of our games require no account and collect no data whatsoever. However, some games may include optional features such as leaderboards or login functionality. In these cases, we may ask for a display name or username solely to identify you on a leaderboard. We do not collect email addresses, passwords, real names, or any other personal identifiers beyond what you voluntarily provide for these features. Any data collected is used only to enable the specific in-game feature and is never shared with or sold to third parties.`,
    },
    {
        id: 'children',
        title: "Children's Privacy (COPPA)",
        content: `Our games are designed to be safe for users of all ages, including children under 13. Where optional features such as leaderboards collect a display name, we collect only the minimum information necessary to enable that feature. Any ads shown in our games are configured to comply with Google AdMob's family and children's ad policies, ensuring no behavioural tracking is used for users in children-directed experiences. Parents or guardians who believe their child has submitted personal information may contact us at miusoft.games@gmail.com to request its deletion.`,
    },
    {
        id: 'third-parties',
        title: 'Third-Party Services',
        content: `Some of our games may include advertisements served by Google AdMob or sponsored content from brand partners we have carefully selected. These services may collect certain device information such as advertising identifiers to serve relevant ads. We only work with ad partners and sponsors whose content we consider appropriate and non-harmful for our audience. We do not display ads that are misleading, adult-oriented, or inappropriate for children. You can review Google's privacy practices at policies.google.com/privacy. Outside of advertising, our games do not integrate analytics tools, social SDKs, or any other third-party services that collect personal data.`,
    },
    {
        id: 'permissions',
        title: 'Device Permissions',
        content: `Our games do not request access to sensitive device permissions such as camera, microphone, location, contacts, or storage beyond what is strictly necessary for basic gameplay. Any permissions requested are solely to enable core game functionality and are never used to collect personal information.`,
    },
    {
        id: 'data-sharing',
        title: 'Data Sharing & Disclosure',
        content: `Since we collect no personal data, we have nothing to share, sell, or disclose to any third parties, whether for commercial, legal, or any other purposes.`,
    },
    {
        id: 'security',
        title: 'Security',
        content: `While we do not collect or store personal data, we are committed to maintaining the security and integrity of our games and this website. We regularly review our applications to ensure they remain free of data collection mechanisms.`,
    },
    {
        id: 'changes',
        title: 'Changes to This Policy',
        content: `We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. Any updates will be posted on this page with a revised effective date. We encourage you to review this page periodically.`,
    },
    {
        id: 'contact',
        title: 'Contact Us',
        content: `If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out to us at:`,
        isContact: true,
    },
];

export default function PrivacyPolicyPage() {
    return (
        <Layout>
            <Head><title>Privacy Policy</title></Head>
            <main className={styles.page}>

                {/* Page header — same pattern as games page */}
                <div className={styles.pageHeader}>
                    <div>
                        <span className={styles.label}>Legal</span>
                        <h1 className={styles.title}>Privacy Policy</h1>
                    </div>
                    <Link href="/" className={styles.backLink}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        Back to home
                    </Link>
                </div>
                <div className={styles.accentLine} />

                {/* Meta row */}
                <div className={styles.metaRow}>
                    <FontAwesomeIcon icon={faShield} className={styles.metaIcon} />
                    <span>Effective date: {EFFECTIVE_DATE}</span>
                    <span className={styles.metaDivider} />
                    <span>Applies to all {COMPANY_NAME} games</span>
                </div>

                {/* Sections */}
                <div className={styles.sections}>
                    {sections.map((section, i) => (
                        <section key={section.id} id={section.id} className={styles.section}>
                            <div className={styles.sectionNum}>0{i + 1}</div>
                            <div className={styles.sectionBody}>
                                <h2 className={styles.sectionTitle}>{section.title}</h2>
                                <p className={styles.sectionText}>{section.content}</p>
                                {section.isContact && (
                                    <address className={styles.contactBlock}>
                                        <strong>{COMPANY_NAME}</strong> : operated by {OWNER_NAME}
                                        <br />
                                        <a href={`mailto:${CONTACT_EMAIL}`} className={styles.emailLink}>
                                            {CONTACT_EMAIL}
                                        </a>
                                    </address>
                                )}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Bottom note */}
                <p className={styles.footerNote}>
                    This policy applies to all games and applications published by {COMPANY_NAME} on the Google Play Store, Apple App Store, and any other platform.
                </p>

            </main>
        </Layout>
    );
}