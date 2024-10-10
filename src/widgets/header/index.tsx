// import { SyntheticEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import { Routes, Breakpoints } from '../../shared/config';
import { useMediaQuery } from '../../shared/hooks';
import { Logo } from '../../ui';

import styles from './styles.module.css';

export const Header = () => {
  const isMobile = useMediaQuery(Breakpoints.L);

  const headerStyles = cn(styles.header, { [styles.header_mobile]: isMobile });
  const headerLogoStyles = cn(styles.header__logo, {
    [styles.header__logo_mobile]: isMobile,
  });

  return (
    <header className={headerStyles}>
      <div className={styles.header__container}>
        <NavLink className={headerLogoStyles} to={Routes.ROOT}>
          <Logo />
        </NavLink>
        <NavLink className={headerLogoStyles} to={Routes.ROOT}>
          Главная
        </NavLink>
        <NavLink className={headerLogoStyles} to={Routes.MAP}>
          Карта
        </NavLink>
        {/*{isAdmin*/}
        {/*  ? !isMobile && (*/}
        {/*      <SideBar position={positionConfigTop} links={linksTopAuthAdmin} />*/}
        {/*    )*/}
        {/*  : !isMobile && (*/}
        {/*      <SideBar position={positionConfigTop} links={linksTop} />*/}
        {/*    )}*/}

        {/*<div className={headerMenuStyles}>*/}
        {/*  {Boolean(user) && (*/}
        {/*    <MenuButton onClick={handleClick} isMobile={isMobile} />*/}
        {/*  )}*/}

        {/*{menuActive && (*/}
        {/*  <DropDownMenu*/}
        {/*    role={user?.role}*/}
        {/*    setMenuActive={setMenuActive}*/}
        {/*    menuActive={menuActive}*/}
        {/*    setIsOpenChat={handleOpen}*/}
        {/*  />*/}
        {/*)}*/}
      </div>

      {/*{isOpen && (*/}
      {/*  <PopupChat*/}
      {/*    isOpen={isOpen}*/}
      {/*    onClick={isOpen ? handleClose : handleOpen}*/}
      {/*    messages={[]}*/}
      {/*    chatmateInfo={infoAdmin}*/}
      {/*    onAttachFileClick={() => {}}*/}
      {/*  />*/}
      {/*)}*/}

      {/*{isMobile && <div className={styles['header__gradient-divider']}></div>}*/}
    </header>
  );
};
