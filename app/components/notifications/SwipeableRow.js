import React from 'react';
import { Alert } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { snapPoint } from 'react-native-redash';
import styled from 'styled-components';

import { calendar, theme } from '../../config';
import LeftAction from './LeftAction';

const { width, LEFT_ACTION_WIDTH } = calendar;
const { colors, space } = theme;

const snapPoints = [0, LEFT_ACTION_WIDTH];

const springConfig = (velocity) => {
  'worklet';

  return {
    stiffness: 100,
    damping: 10,
    mass: 1,
    overshootClamping: true,
    restDisplacementThreshold: 0.4,
    restSpeedThreshold: 1.7,
    velocity,
  };
};

const timingConfig = {
  duration: 400,
  easing: Easing.bezier(0.25, 0.1, 0.25, 1),
};

const SwipeableRow = ({ children, onRemove }) => {
  const isRemoving = useSharedValue(false);
  const translateX = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
    },
    onActive: ({ translationX }, ctx) => {
      translateX.value = ctx.x + translationX;
    },
    onEnd: ({ velocityX }) => {
      const dest = snapPoint(translateX.value, velocityX, snapPoints);

      translateX.value = withSpring(dest, springConfig);
    },
  });

  const handleRemovePress = () => {
    Alert.alert('Remove Item', 'Are you share you want to remove this item?', [
      {
        text: 'Cancel',
        style: 'cancel',
        onPress: () => (translateX.value = withTiming(0, timingConfig)),
      },
      {
        text: 'Yes',
        onPress: () => (isRemoving.value = true),
      },
    ]);
  };

  const styles = useAnimatedStyle(() => {
    if (isRemoving.value) {
      return {
        height: withTiming(0, timingConfig, onRemove),
        transform: [
          {
            translateX: withTiming(width, timingConfig),
          },
        ],
      };
    }

    return {
      marginvertical: space.m1,
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  return (
    <Wrapper>
      <PanGestureHandler activeOffsetX={[-10, 10]} onGestureEvent={gestureHandler}>
        <Animated.View style={[{ backgroundColor: colors.grey }, styles]}>
          <LeftBox>
            <LeftAction onPress={handleRemovePress} />
          </LeftBox>

          {children}
        </Animated.View>
      </PanGestureHandler>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  overflow: hidden;
`;

const LeftBox = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${width}px;
  width: ${width}px;
`;

export default SwipeableRow;
