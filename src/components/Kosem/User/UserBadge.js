import React, { useEffect, useState } from "react";
import { Badge, Button, Popover, OverlayTrigger } from "react-bootstrap";

function UserBadge(props) {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  let daysShortenNames = ["Su", "M", "Tu", "W", "Th", "F", "Sa"];
  function renderPopover(days) {
    return (
      <Popover id="popover-basic">
        <Popover.Body
          onClick={() => {
            console.log("soon will be able to edit");
          }}
        >
          <div className="table-view">
            {[
              "sunday",
              "monday",
              "tuesday",
              "wednesday",
              "thursday",
              "friday",
              "saturday",
            ].map((day, dayIndex) => (
              <div key={day} className="grid-col">
                {daysShortenNames[dayIndex]}
                {[0, 1, 2].map((shiftIndex) => (
                  <div
                    key={shiftIndex}
                    className={`grid-cell ${
                      days[day][shiftIndex] === true ? "pick" : ""
                    }`}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </Popover.Body>
      </Popover>
    );
  }

  return (
    <section className="signed-users">
      <div
        id="signed-user-container"
        className="d-flex flex-wrap gap-2 justify-content-center py-5"
      >
        {props.usersArr.map((user, index) => (
          <OverlayTrigger
            key={index}
            placement="top"
            overlay={renderPopover(user.days)}
            delay={isMobile ? null : { show: 0, hide: 800 }}
          >
            <Badge
              pill
              bg="primary-subtle"
              className="my-badge text-primary-emphasis"
            >
              <span className="px-1 userName">{user.userName}</span>
              <Button
                variant="close"
                aria-label="Close"
                onClick={() => console.log("i will be deleted soon")}
              />
            </Badge>
          </OverlayTrigger>
        ))}
      </div>
    </section>
  );
}

export default UserBadge;
