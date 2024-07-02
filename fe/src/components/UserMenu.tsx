import { Avatar, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import theme from '../theme';

interface UserMenuProps {
  name: string;
}

const MenuContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  backgroundColor: '#fbf8f5',
}));

const UserInfo = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const UserName = styled('div')(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));

const FeelingsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: theme.spacing(1),
}));

const FeelingIcon = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

const RightContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
}));

const IconButtonWrapper = styled(IconButton)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

export default function UserMenu(props: UserMenuProps) {
  return (
    <MenuContainer className="rounded-rectangle">
      <UserInfo>
        <Avatar alt="User Photo" src="src/assets/profile.webp" />
        <UserName>
          <Typography
            variant="h6"
            style={{ color: theme.palette.primary.main }}
          >
            Hey {props.name}!
          </Typography>
          <Typography
            variant="body1"
            style={{ color: theme.palette.primary.main }}
          >
            How are you feeling today?
          </Typography>
          <FeelingsContainer>
            <FeelingIcon>
              <SentimentVerySatisfiedIcon />
            </FeelingIcon>
            <FeelingIcon>
              <SentimentSatisfiedIcon />
            </FeelingIcon>
            <FeelingIcon>
              <SentimentDissatisfiedIcon />
            </FeelingIcon>
            <FeelingIcon>
              <EmojiEmotionsIcon />
            </FeelingIcon>
          </FeelingsContainer>
        </UserName>
      </UserInfo>
      <RightContainer>
        <IconButtonWrapper>
          <ExitToAppIcon />
        </IconButtonWrapper>
        <IconButton>
          <PersonAddIcon />
        </IconButton>
      </RightContainer>
    </MenuContainer>
  );
}
