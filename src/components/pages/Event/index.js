import React from "react";
import { useEffect, useState } from "react";
import PageHeader from "../../utils/PageHeader";
import { Wrapper } from "./styles";
import Card from "../../utils/Card";
import * as service from "../../../service";

const Event = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const getEvents = async () => {
      try {
        const eventData = await service.getEvents();
        setEvents(eventData);
      } catch (err) {
        console.error(err.message);
      }
    };
    getEvents();
  }, []);
  return (
    <>
      <PageHeader route="/app/event/add" />
      <Wrapper>
        {events &&
          events.map((event) => <Card data={event} />)}
      </Wrapper>
    </>
  );
};

export default Event;
