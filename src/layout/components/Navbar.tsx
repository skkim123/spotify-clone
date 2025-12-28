import { Box } from "@mui/material";
import LoginButton from "../../common/components/LoginButton";
import { useGetCurrentUserProfile } from "../../hooks/useGetCurrentUserProfile";
import PersonIcon from "@mui/icons-material/Person";
import { styled } from "@mui/material";

const DefaultProfileImage = styled(PersonIcon)(() => ({
  fontSize: 60,
  borderRadius: "50%",
  border: "1px solid #ccc",
}));

const Navbar = () => {
  const { data: userProfile } = useGetCurrentUserProfile();

  const userProfileImage =
    userProfile?.images && userProfile.images.length > 0 ? (
      <img
        src={userProfile.images[0].url}
        style={{
          borderRadius: "50%",
          width: 60,
          height: 60,
          border: "1px solid #ccc",
        }}
      />
    ) : (
      <DefaultProfileImage />
    );

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "64px",
        justifyContent: "flex-end",
      }}
    >
      {userProfile ? userProfileImage : <LoginButton />}
    </Box>
  );
};

export default Navbar;
