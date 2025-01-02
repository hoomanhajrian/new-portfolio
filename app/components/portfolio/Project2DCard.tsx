"use client";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { Card, CardContent, CardMedia } from "@material-ui/core";
import { ProjectDataType } from '@/types';

export const Project2DCard = ({ data }: { data: ProjectDataType }) => {

  const { id,
    name,
    position,
    year,
    href,
    description,
    imgUrl,
    gitHub } = data;

  return (
    <Card className={`project-card card${id}`}>
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
          className="project-card-description"
          component="p"
        >
          {description}
        </Typography>
        <div className="projects-card-links">
          <Typography
            variant="body2"
            color="textSecondary"
            component={"a"}
            href={gitHub}
            target="_blank"
            rel="noreferrer"
            className="project-card-link"
          >
            <GitHubIcon  sx={{fontSize:'2rem'}}/>
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component={"a"}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="project-card-link"
          >
            <LanguageIcon sx={{fontSize:'2rem'}} />
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

