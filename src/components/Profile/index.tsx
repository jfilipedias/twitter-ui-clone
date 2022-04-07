import React from "react";

import {
  Avatar,
  Container,
  Banner,
  EditButton,
  Followage,
  LocationIcon,
  LinkIcon,
  CalendarIcon,
  ProfileData,
} from "./styles";

const Profile: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Edit Profile</EditButton>

        <h1>Filipe Dias</h1>
        <h2>@filipe_dias</h2>

        <p>Software Engennier</p>

        <ul>
          <li>
            <LocationIcon />
            Fortaleza, Brasil
          </li>
          <li>
            <LinkIcon />
            <a href="filipedias.dev">filipedias.dev</a>
          </li>
          <li>
            <CalendarIcon />
            Joined February 2018
          </li>
        </ul>

        <Followage>
          <span>
            <strong>1,955</strong> followers
          </span>
          <span>
            <strong>1,955</strong> following
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default Profile;
