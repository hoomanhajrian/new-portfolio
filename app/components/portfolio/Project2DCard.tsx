"use client";
import { useEffect } from 'react';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { Card, CardContent, CardMedia } from "@material-ui/core";
import { ProjectDataType } from '@/types';

const Project2DCard = ({ data }: { data: ProjectDataType }) => {

  const { id,
    name,
    position,
    year,
    href,
    description,
    imgUrl,
    gitHub,
    position3D } = data;

  useEffect(() => {
    document.body.style.cursor = 'default';
  }, [])
  return (
    <Card key={id} className={`project-card card${id}`}>
      <CardContent className="project-card-content">
        <Typography className="project-card-text" gutterBottom variant="h4">
          {name}
        </Typography>
        <Typography className="project-card-text" gutterBottom variant="h6">
          {position}
        </Typography>
        <Typography className="project-card-text" gutterBottom variant="h6">
          {year}
        </Typography>
        <CardMedia component="img" image={imgUrl} />
        <Typography
          variant="body1"
          color="textSecondary"
          className="project-card-description"
          component="p"
        >
          {description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            variant="body2"
            color="textSecondary"
            component="a"
            href={gitHub}
            target="_blank"
            rel="noreferrer"
            className="project-card-link"
          >
            <GitHubIcon />
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="a"
            href={href}
            target="_blank"
            rel="noreferrer"
            className="project-card-link"
          >
            <LanguageIcon />
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Project2DCard;
