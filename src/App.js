import PrimarySearchAppBar from "./Component/AppBar/PrimarySearchAppBar";
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import BoardBar from "./Component/BoardBar/BoardBar";
import { Container, Box, CssBaseline } from "@mui/material";

function App() {
  const [themeMode, setThemeMode] = useState(false)
  const darkTheme = createTheme({
    palette: {
      mode: themeMode === true ? 'dark' : 'light',
      primary: {
        main: '#1976d2',
      },
    },
  });

  const ChangeThemeMode = (mode) => {
    setThemeMode(mode)
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Box sx={{ display: 'flex' }}>
          <Container sx={{ pt: '20px' }}>
            <PrimarySearchAppBar ChangeThemeMode={ChangeThemeMode} themeMode={themeMode} />
            
            <CssBaseline />
            <BoardBar />
          </Container>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
