import { Container, CssBaseline, Typography } from "@mui/material";
import PostList from "./PostList";

function Home() {
  const posts = [
    { id: 1, title: "Post 1", text: "Lorem ipsum...", author: "Author 1" },
    { id: 2, title: "Post 2", text: "Lorem ipsum...", author: "Author 2" },
  ];

  return (
    <Container component="main" sx={{ mt: 8 }}>
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h3" align="center" gutterBottom>
          Welcome to the Blog!
        </Typography>
        <PostList posts={posts} />
      </div>
    </Container>
  );
}

export default Home;
