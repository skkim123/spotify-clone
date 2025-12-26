import { Box } from "@mui/material";
import LoginButton from "../../common/components/LoginButton";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "64px",
        justifyContent: "flex-end",
      }}
    >
      <LoginButton />
    </Box>
  );
};

export default Navbar;
