import styled, { css } from 'styled-components';

const title1Style = css`
  ${({ theme: { getFont, size } }) => ({
    fontFamily: getFont(1),
    fontSize: size.title1,
  })}
`;

const title2Style = css`
  ${({ theme: { getFont, size } }) => ({
    fontFamily: getFont(1),
    fontSize: size.title2,
  })}
`;

const caption1Style = css`
  ${({ theme: { getFont, size } }) => ({
    fontFamily: getFont(1),
    fontSize: size.s1,
  })}
`;

const caption2Style = css`
  ${({ bold, theme: { getFont, size } }) => ({
    fontFamily: bold ? getFont(1) : getFont(2),
    fontSize: size.s2,
  })}
`;

const body1Style = css`
  ${({ theme: { getFont, size } }) => ({
    fontFamily: getFont(2),
    fontSize: size.m1,
  })}
`;

const body2Style = css`
  ${({ theme: { getFont, size } }) => ({
    fontFamily: getFont(2),
    fontSize: size.m2,
  })}
`;

const buttonStyle = css`
  text-transform: uppercase;

  ${({ color, theme: { getFont, size } }) => ({
    fontFamily: getFont(1),
    fontSize: size.l2,
    color,
  })}
`;

const dangerStyle = css`
  ${({ theme: { colors, getFont, size, space } }) => ({
    color: colors.danger,
    fontFamily: getFont(1),
    fontSize: size.s1,
    marginLeft: space.m2,
  })}
`;

const subTitle1Style = css`
  ${({ theme: { getFont, size } }) => ({
    fontFamily: getFont(1),
    fontSize: size.l1,
  })}
`;

const subTitle2Style = css`
  ${({ theme: { getFont, size } }) => ({
    fontFamily: getFont(1),
    fontSize: size.l2,
  })}
`;

const Text = styled.Text`
  ${({ white, dark, upper, marginTop, opacity, theme: { colors } }) => ({
    color: white ? colors.white : dark ? colors.darkBlue : colors.grey,
    textTransform: upper ? 'uppercase' : 'none',
    opacity,
    marginTop,
  })}

  ${({ body1 }) => body1 && body1Style}
  ${({ body2 }) => body2 && body2Style}
  ${({ button }) => button && buttonStyle}
  ${({ caption1 }) => caption1 && caption1Style}
  ${({ caption2 }) => caption2 && caption2Style}
  ${({ danger }) => danger && dangerStyle}
  ${({ title1 }) => title1 && title1Style}
  ${({ title2 }) => title2 && title2Style}
  ${({ subTitle1 }) => subTitle1 && subTitle1Style}
  ${({ subTitle2 }) => subTitle2 && subTitle2Style}
`;

export default Text;
