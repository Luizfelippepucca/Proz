import "./styles.css";
import Image from "next/image";
import PerfilImage from "../../assets/Avatar.png";
import MenuIcon from "../../assets/Menu.svg";
import LogoIcon from "../../assets/logo.svg";
import NotificationIcon from "../../assets/CircleNotifications.svg";

const Header = () => {
  return (
    <div className="headercontainer">
      <header className="header">
        <div className="headerLef">
          <Image width={30} height={30} src={MenuIcon} alt="menu" />
          <Image
            width={108}
            height={32}
            src={LogoIcon}
            alt="logo-proz"
            style={{ marginLeft: 18 }}
          />
        </div>
        <div className="headerRight">
          <div className="notification"></div>
          <Image
            width={24}
            height={24}
            src={NotificationIcon}
            alt="notificações"
          />
          <div className="wrapperPerfilImage">
            <Image
              width={40}
              height={40}
              src={PerfilImage}
              alt="perfil"
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
          </div>
          <div className="wrapperPerfinInfos">
            <span className="perfilName">Joao da silva</span>
            <div className="perfilProfession">Professor</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
