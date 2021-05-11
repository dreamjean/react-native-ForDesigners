import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components';

import { calendar, colors } from '../../config';
import Text from '../styles/Text';

const { width, LEFT_ACTION_WIDTH } = calendar;

const LeftAction = ({ onPress }) => {
  return (
    <Container>
      <LinearGradient
        style={StyleSheet.absoluteFill}
        colors={[colors.danger, colors.danger]}
        start={[0.7, 0.5]}
        end={[1, 0.5]}
      />
      <RemoveButton onPress={onPress}>
        <Text subTitle1 white>
          Remove
        </Text>
      </RemoveButton>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding-left: ${width - LEFT_ACTION_WIDTH}px;
`;

const RemoveButton = styled(RectButton)`
  height: 100%;
  width: ${LEFT_ACTION_WIDTH}px;
  justify-content: center;
  align-items: center;
`;

export default LeftAction;
