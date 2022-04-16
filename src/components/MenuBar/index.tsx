import React from "react";

import {
  Container,
  TopSide,
  StyledLogo,
  MenuButton,
  HomeIcon,
  SharpIcon,
  BellIcon,
  MailIcon,
  BookmarkIcon,
  ProfileIcon,
  DotsIcon,
  Button,
} from "./styles";

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <StyledLogo />

        <MenuButton>
          <HomeIcon />
          <span>Home</span>
        </MenuButton>

        <MenuButton>
          <SharpIcon />
          <span>Explore</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notifications</span>
        </MenuButton>

        <MenuButton>
          <MailIcon />
          <span>Messages</span>
        </MenuButton>

        <MenuButton>
          <BookmarkIcon />
          <span>Bookmarks</span>
        </MenuButton>

        <MenuButton>
          <ProfileIcon />
          <span>Profile</span>
        </MenuButton>

        <MenuButton>
          <DotsIcon />
          <span>More</span>
        </MenuButton>

        <Button>
          <span>Tweet</span>
        </Button>
      </TopSide>
    </Container>
  );
};

export default MenuBar;
