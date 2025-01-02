import React from "react";
import GitHubCalendar from "react-github-calendar";

export const Github = ({year}:{year:number}) => {
  const gitHubContainerStyle = {
    margin: "auto",
    color: "red blue",
  };

  return (
    <>
      <h4>{year}</h4>
      <GitHubCalendar
        username="hoomanhajrian"
        blockRadius={50}
        year={year}
        colorScheme="light"
        hideColorLegend
        hideMonthLabels
        hideTotalCount
        style={gitHubContainerStyle}
      />
    </>
  );
};