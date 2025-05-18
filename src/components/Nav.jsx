
import { Home, User, Book, Heart, FileText } from "lucide-react";
import styles from "./Nav.module.css";

export default function Nav({ onNavigate }) {
  const navItems = [
    { id: "home", icon: <Home size={20} /> },
    { id: "about", icon: <User size={20} /> },
    { id: "Experience", icon: <Book size={20} /> },
    { id: "Services", icon: <Heart size={20} /> },
    { id: "Contact", icon: <FileText size={20} /> },
  ];

  return (
    <div className={styles.navContainer}>
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={styles.navItem}
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
}




