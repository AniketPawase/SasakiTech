import Link from 'next/link';
import styles from '../styles/Navbar.module.css'; 
const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/settings">Settings</Link>
      <Link href="/">Home</Link>
    </nav>
  );
};

export default Navbar;
