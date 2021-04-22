import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components';

import Image from '../styles/Image';
import Text from '../styles/Text';

const Card = ({ image, heading, logo, title, caption, onPress }) => {
  return (
    <Touchable {...{ onPress }}>
      <Container>
        <Cover>
          <Image source={image} />
          <Heading white title2>
            {heading}
          </Heading>
        </Cover>
        <Info>
          <Image logo2 source={logo} resizeMode="contain" />
          <InfoBox>
            <Text title1 dark>
              {title}
            </Text>
            <Text body2>{caption}</Text>
          </InfoBox>
        </Info>
      </Container>
    </Touchable>
  );
};

const Touchable = styled(RectButton)`
  ${({ theme: { radii, space } }) => ({
    borderRadius: radii.m1,
    marginRight: space.m3,
    marginBottom: space.m2,
  })}
`;

const Container = styled.View`
  width: 315px;
  height: 280px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);

  ${({ theme: { colors, radii } }) => ({
    backgroundColor: colors.white,
    borderRadius: radii.m1,
  })}
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  overflow: hidden;

  ${({ theme: { radii } }) => ({
    borderTopLeftRadius: radii.m1,
    borderTopRightRadius: radii.m1,
  })}
`;

const Heading = styled(Text)`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 170px;
`;

const Info = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;

  ${({ theme: { space } }) => ({
    paddingLeft: space.m2,
  })}
`;

const InfoBox = styled.View`
  ${({ theme: { space } }) => ({
    marginLeft: space.s3,
  })}
`;

export default Card;
