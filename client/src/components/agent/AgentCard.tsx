import React from "react";
import { AgentCardProp, InfoBarProps } from "interfaces/agent";
import { useGetIdentity } from "@pankod/refine-core";
import { Box, padding, Stack, Typography } from "@pankod/refine-mui";
import { Link } from "@pankod/refine-react-router-v6";

import {
  AttachEmailOutlined,
  EmailOutlined,
  LocationCity,
  Phone,
  Place,
} from "@mui/icons-material";

const InfoBar = ({ icon, name }: InfoBarProps) => (
  <Stack flex={1} gap={1.5} direction="row" minWidth={{ xs: "100%", sm: 300 }}>
    {icon}
    <Typography fontSize={14} color="#808191">
      {name}
    </Typography>
  </Stack>
);

const AgentCard = ({
  id,
  name,
  email,
  avatar,
  noOfProperties,
}: AgentCardProp) => {
  const { data: currentUser } = useGetIdentity();

  const generateLink = () => {
    if (currentUser.email === email) return "/my-profile";
    return `/agents/show/${id}`;
  };

  return (
    <Box
      component={Link}
      to={generateLink()}
      width="100%"
      sx={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        flexDirection: { xs: "column", sm: "row" },
        border: "2px solid rbg(176 176 176 / 10%)",
        "&:hover": { boxShadow: "0 22px 45px 2px rgba(176,176,176,0.1)" },
      }}
    >
      <img
        src={
          avatar
            ? avatar
            : "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
        }
        alt="user"
        width={90}
        height={90}
        style={{ borderRadius: 8, objectFit: "cover" }}
      />
      <Stack
        direction="column"
        justifyContent="space-between"
        flex={1}
        gap={{ xs: 4, sm: 2 }}
      >
        <Stack gap={2} direction="row" flexWrap="wrap" alignItems="center">
          <Typography fontSize={22} fontWeight={600} color="#11142d">
            {name}
          </Typography>
          <Typography fontSize={14} color="808091">
            Real-Estate Agent
          </Typography>
        </Stack>
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <InfoBar
            name={email}
            icon={<EmailOutlined sx={{ color: "#809191" }} />}
          ></InfoBar>
          <InfoBar
            name="London"
            icon={<Place sx={{ color: "#809191" }} />}
          ></InfoBar>
          <InfoBar
            name="619 834 5684"
            icon={<Phone sx={{ color: "#809191" }} />}
          ></InfoBar>
          <InfoBar
            name={`${noOfProperties} Properties`}
            icon={<LocationCity sx={{ color: "#809191" }} />}
          ></InfoBar>
        </Stack>
      </Stack>
    </Box>
  );
};

export default AgentCard;
