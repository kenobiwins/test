import { TextH2 } from "kit/Text";
import { styled } from "styled-components";

export const HomePage = () => {
    return (
      <div>
        <TextH2>
          My name is Max, nice to meet you,
          <Link href="https://www.linkedin.com/in/maxim-sidorenko/" target="_blank">
            click
          </Link>
        </TextH2>
      </div>
    );
}

const Link = styled.a(({ theme }) => ({
  color: theme.color.accent,
  
  "&:hover": {
    color:theme.color.mainText,
  },
}))