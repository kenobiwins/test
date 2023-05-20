import { FC } from "react";
import { styled } from "styled-components";

import image from "assets/image.png";
import retinaImage from "assets/2x-image.png";
import { ICON_NAMES, Icon } from "kit/Icon";
import { IUser } from "types/users";
import { TextH2, TextH3, CustomButton } from "kit";
import { formatField } from "utils/index";
import { useToggleFollowMutation } from "store/users/usersApi";
import { AnimateWrapper } from ".";

type TweetCardProps = {
  user: IUser;
};

export const TweetCard: FC<TweetCardProps> = ({ user }) => {
  const { avatar, follow, followers, id, tweets, user: userName } = user;
  const [updateFollow, { isLoading }] = useToggleFollowMutation();

  const handleFollow = (id: string) => {
    const handleFollowers = !follow ? followers + 1 : followers - 1;

    updateFollow({
      id,
      follow: !follow,
      followers: handleFollowers,
    });
  };

  return (
    <AnimateWrapper>
      <Card>
        <IconWrapper>
          <Icon name={ICON_NAMES.logo} width="76px" height="22px" />
        </IconWrapper>
        <picture>
          <source srcSet={retinaImage} media="(min-resolution: 192dpi), (min-resolution: 2dppx)" />
          <CardImage src={image} alt="picture" />
        </picture>
        <InfoGroupWrapper>
          <AvatarGroup>
            <AvatarWrapper>
              <img src={avatar} alt={`avtar ${userName} profile`} />
            </AvatarWrapper>
            <Chip />
          </AvatarGroup>
          <InfoGroup>
            <TextH2>{formatField(tweets, 'tweets')}</TextH2>
            <TextH3>{formatField(followers, 'followers')}</TextH3>
            {/* <TextH3>{formatField(userName, "userName")}</TextH3> */}
          </InfoGroup>
          <CustomButton
            isLoading={isLoading}
            isActive={follow}
            title={follow ? 'Following' : 'Follow'}
            onClick={() => handleFollow(id)}
          />
        </InfoGroupWrapper>
      </Card>
    </AnimateWrapper>
  )
};

const Card = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  overflow:'hidden',
  width: "380px",
  height: "460px",
  position: "relative",
  background: theme.color.cardBg,
  borderRadius: theme.px.x5,
  padding: theme.px.x9,
  paddingTop: theme.px.x7,
  boxShadow: "-2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px #0000003B",
}));

const IconWrapper = styled.div(({ theme }) => ({
  position: "absolute",
  top: theme.px.x5,
  left: theme.px.x5,
}));

const CardImage = styled.img({
  margin: "auto",
});

const AvatarGroup = styled.div({
  position: "relative",
});

const AvatarWrapper = styled.div(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  overflow: "hidden",
  border: `8px solid ${theme.color.mainColor}`,
  boxShadow:
    "0px 3.4369285106658936px 2.5776965618133545px 0px #FBF8FF inset, 0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.15), 0px -1.7184642553329468px 3.4369285106658936px 0px #AE7BE3 inset",
}));

const InfoGroupWrapper = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: theme.px.x6,
}));

const InfoGroup = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.px.x4,
}));

const Chip = styled.div(({ theme }) => ({
  position: "absolute",
  width: "380px",
  height: "8px",
  top: "50%",
  left: 0,
  transform: "translateX(-39.5%)",
  backgroundColor: theme.color.mainColor,
  boxShadow:
    "0px 3.4369285106658936px 2.5776965618133545px 0px #FBF8FF inset, 0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.15), 0px -1.7184642553329468px 3.4369285106658936px 0px #AE7BE3 inset;",
}));
