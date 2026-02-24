import { Link } from "react-router"
import { adminPage, auctionPage, depositesPage, loginPage, mainPage, regPage, userAuctionsPage, userPage } from "../../shared/consts/routes"
import { useUsers } from "../../store/users.store"
import styles from "./header.module.css"


export const Header = () => {

    const {isAdmin} = useUsers((state) => state)

    return (
        <>
            <header className={styles.header}>
        <Link to={mainPage} className={styles.logo}>
          <span className={styles.logoMark}>AU</span>
          <span className={styles.logoText}>Auction Hub</span>
        </Link>

        <nav className={styles.nav}>
          <Link to={auctionPage} className={styles.navLink}>
            Аукционы
          </Link>
          <Link to={userPage} className={styles.navLink}>
            Профиль
          </Link>
          <Link to={userAuctionsPage} className={styles.navLink}>
            Мои аукционы
          </Link>
          <Link to={depositesPage} className={styles.navLink}>
            Депозиты
          </Link>
          {
            isAdmin ?
              <Link to={adminPage} className={styles.navLink}>
            Админ
          </Link> : ''
          }
        
        </nav>

        <div className={styles.headerActions}>
          <Link to={loginPage} className={styles.linkGhost}>
            Войти
          </Link>
          <Link to={regPage} className={styles.linkPrimary}>
            Регистрация
          </Link>
        </div>
      </header>
        </>
    )
}