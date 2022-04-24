import React from "react";
import { useEffect, useState } from "react";
import PageHeader from "../../utils/PageHeader";
import { Wrapper } from "./styles";
import Card from "../../utils/Card";
import * as service from "../../../service";

const Achievement = () => {
  const [achievements, setAchievements] = useState([]);
  useEffect(() => {
    const getAchievements = async () => {
      try {
        const achievementData = await service.getAchievements();
        setAchievements(achievementData);
      } catch (err) {
        console.error(err.message);
      }
    };
    getAchievements();
  }, []);
  return (
    <>
      <PageHeader route="/app/achievement/add" />
      <Wrapper>
        {achievements &&
          achievements.map((achievement) => <Card data={achievement} />)}
      </Wrapper>
    </>
  );
};

export default Achievement;
