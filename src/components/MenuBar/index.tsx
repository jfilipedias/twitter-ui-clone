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
  StyledButton,
  BottomSide,
  Avatar,
  ProfileData,
  OptionsIcon,
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

        <MenuButton className="active">
          <ProfileIcon />
          <span>Profile</span>
        </MenuButton>

        <MenuButton>
          <DotsIcon />
          <span>More</span>
        </MenuButton>

        <StyledButton>
          <span>Tweet</span>
        </StyledButton>
      </TopSide>

      <BottomSide>
        <Avatar />

        <ProfileData>
          <strong>Filipe Dias</strong>
          <span>@filipe_dias</span>
        </ProfileData>

        <OptionsIcon />
      </BottomSide>
    </Container>
  );
};

export default MenuBar;
