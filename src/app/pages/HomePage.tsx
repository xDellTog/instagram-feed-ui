import { styled } from "../../theme/stitches.config";
import { MaterialIcons } from "../components/material-icons/MaterialIcons";
import logo from './instagram-logo.png';

function getUrl(): string {
  return `https://picsum.photos/1024?v=${Math.floor(Math.random() * (100000 * 999999) + 100000)}`;
}

const AppBar = styled('div', {
  display: 'flex',
  position: 'fixed',
  top: 0,
  width: '100%',
  background: '$white',
  height: 44,
  zIndex: 1,
});
const AppBarWrapper = styled('div', {
  py: '$2',
  px: '$1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});
const AppBarActionGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
});
const AppBarActionButton = styled('div', {
  px: '$1'
});
const Title = styled('img', {
  height: 38,
});
const StoryBar = styled('div', {
  mt: 44,
  display: 'flex',
  alignItems: 'center',
  overflow: 'auto',
  px: 2,
  pb: 8,
  borderBottom: '1px $gray6 solid',
});
const Story = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});
const StoryUsername = styled('p', {
  fontSize: 10,
  textAlign: 'center',
});
const StoryImageBorder = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 54,
  height: 54,
  borderRadius: 100,
  p: 4,
  mx: 6,
  background: 'linear-gradient(45deg, yellow, orange, purple)',
});
const StoryImageBorderInset = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 54,
  p: 2,
  height: 54,
  borderRadius: 100,
  background: '$white',
});
const StoryImage = styled('img', {
  width: 54,
  height: 54,
  borderRadius: 100,
});
const PostList = styled('div', {
  mb: 44,
});
const PostInternal = styled('div');
const PostHeaderInternal = styled('div', {
  height: 44,
  display: 'flex',
  width: '100%',
  borderBottom: '1px $gray6 solid',
});
const PostHeaderWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  p: '$1',
  width: '100%',
});
const PostHeaderGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
});
const UserImage = styled('img', {
  width: 24,
  height: 24,
  borderRadius: 100,
});
const UserName = styled('p', {
  fontSize: 12,
  px: '$1'
});
const PostImage = styled('img', {
  width: '100%',
});
const PostActions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 44,
});
const PostActionGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
});
const PostActionButton = styled('div', {
  px: '$1',
});
const PostDescription = styled('div', {
  fontSize: 12,
  p: '$1',
});
const NavigationBar = styled('div', {
  position: 'fixed',
  bottom: 0,
  background: '$white',
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  borderTop: '1px $gray6 solid',
  height: 44,
  marginBottom: -1,
  zIndex: 1,
});
const NavigationButton = styled('div', {
  p: '$1',
});

function PostHeader() {
  return (
    <PostHeaderInternal>
      <PostHeaderWrapper>
        <PostHeaderGroup>
          <UserImage src={getUrl()} />
          <UserName>username</UserName>
        </PostHeaderGroup>

        <PostActionButton>
          <MaterialIcons icon="more_horiz" />
        </PostActionButton>
      </PostHeaderWrapper>
    </PostHeaderInternal>
  )
}

function Post() {
  return (
    <PostInternal>
      <PostHeader />
      <PostImage src={getUrl()} />
      <PostActions>
        <PostActionGroup>
          <PostActionButton>
            <MaterialIcons icon="favorite_outlined" />
          </PostActionButton>
          <PostActionButton>
            <MaterialIcons icon="comment" />
          </PostActionButton>
          <PostActionButton>
            <MaterialIcons icon="send" css={{
              transform: 'rotate(-45deg)',
              transformOrigin: 'center',
              marginTop: -8,
              marginLeft: 2,
            }} />
          </PostActionButton>
        </PostActionGroup>
        <PostActionButton>
          <MaterialIcons icon="bookmark_outlined" />
        </PostActionButton>
      </PostActions>
      <PostDescription>
        Liked by <b>username1</b> and <b>username2</b> <br />
        <b>username</b> Lorem ipsum dolor sit amet consectetur
        adipisicing elit!
      </PostDescription>
    </PostInternal>
  )
}

export default function HomePage() {
  return (
    <>
      <AppBar>
        <AppBarWrapper>
          <AppBarActionGroup>
            <Title src={logo} />
            <MaterialIcons icon="expand_more" size={'sm'} />
          </AppBarActionGroup>

          <AppBarActionGroup>
            <AppBarActionButton>
              <MaterialIcons icon="add" />
            </AppBarActionButton>
            <AppBarActionButton>
              <MaterialIcons icon="favorite_outlined" />
            </AppBarActionButton>
            <AppBarActionButton>
              <MaterialIcons icon="send" css={{
                transform: 'rotate(-45deg)',
                transformOrigin: 'center',
                marginTop: -8,
                marginLeft: 2,
              }} />
            </AppBarActionButton>
          </AppBarActionGroup>
        </AppBarWrapper>
      </AppBar>

      <StoryBar>
        <Story>
          <StoryImageBorder css={{ background: '$green9' }}>
            <StoryImageBorderInset>
              <StoryImage src={getUrl()} />
            </StoryImageBorderInset>
          </StoryImageBorder>
          <StoryUsername>Your story</StoryUsername>
        </Story>
        <Story>
          <StoryImageBorder>
            <StoryImageBorderInset>
              <StoryImage src={getUrl()} />
            </StoryImageBorderInset>
          </StoryImageBorder>
          <StoryUsername>username</StoryUsername>
        </Story>
        <Story>
          <StoryImageBorder>
            <StoryImageBorderInset>
              <StoryImage src={getUrl()} />
            </StoryImageBorderInset>
          </StoryImageBorder>
          <StoryUsername>username</StoryUsername>
        </Story>
        <Story>
          <StoryImageBorder>
            <StoryImageBorderInset>
              <StoryImage src={getUrl()} />
            </StoryImageBorderInset>
          </StoryImageBorder>
          <StoryUsername>username</StoryUsername>
        </Story>
        <Story>
          <StoryImageBorder>
            <StoryImageBorderInset>
              <StoryImage src={getUrl()} />
            </StoryImageBorderInset>
          </StoryImageBorder>
          <StoryUsername>username</StoryUsername>
        </Story>
        <Story>
          <StoryImageBorder>
            <StoryImageBorderInset>
              <StoryImage src={getUrl()} />
            </StoryImageBorderInset>
          </StoryImageBorder>
          <StoryUsername>username</StoryUsername>
        </Story>
        <Story>
          <StoryImageBorder>
            <StoryImageBorderInset>
              <StoryImage src={getUrl()} />
            </StoryImageBorderInset>
          </StoryImageBorder>
          <StoryUsername>username</StoryUsername>
        </Story>
        <Story>
          <StoryImageBorder>
            <StoryImageBorderInset>
              <StoryImage src={getUrl()} />
            </StoryImageBorderInset>
          </StoryImageBorder>
          <StoryUsername>username</StoryUsername>
        </Story>
        <Story>
          <StoryImageBorder>
            <StoryImageBorderInset>
              <StoryImage src={getUrl()} />
            </StoryImageBorderInset>
          </StoryImageBorder>
          <StoryUsername>username</StoryUsername>
        </Story>
      </StoryBar>

      <PostList>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostList>

      <NavigationBar>
        <NavigationButton>
          <MaterialIcons icon="home" />
        </NavigationButton>
        <NavigationButton>
          <MaterialIcons icon="search_outlined" />
        </NavigationButton>
        <NavigationButton>
          <MaterialIcons icon="video_library_outlined" />
        </NavigationButton>
        <NavigationButton>
          <MaterialIcons icon="shopping_bag_outlined" />
        </NavigationButton>
        <NavigationButton>
          <MaterialIcons icon="account_circle_outlined" />
        </NavigationButton>
      </NavigationBar>
    </>
  )
}