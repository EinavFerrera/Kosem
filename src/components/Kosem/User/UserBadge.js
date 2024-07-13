import React from "react";
import { Badge, Button, Popover, OverlayTrigger } from "react-bootstrap";

function UserBadge({ users, removeUser }) {
  function renderPopover(userShifts) {
    <Popover id="popover-basic">
      <Popover.Body>
        <div className="table-view">
          {["Su", "M", "Tu", "W", "Th", "F", "Sa"].map((day, dayIndex) => (
            <div key={day} className="grid-col">
              {day}
              {[0, 1, 2].map((shiftIndex) => (
                <div
                  key={shiftIndex}
                  className={`grid-cell ${
                    userShifts[dayIndex * 3 + shiftIndex] === 1 ? "pick" : ""
                  }`}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </Popover.Body>
    </Popover>;
  }

  return (
    <section className="signed-users">
      <div
        id="signed-user-container"
        className="d-flex flex-wrap gap-2 justify-content-center py-5"
      >
        {users.map((user, index) => (
          <OverlayTrigger
            key={index}
            trigger="hover"
            placement="top"
            overlay={renderPopover(user.userShifts)}
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
                onClick={() => removeUser(user.userName)}
              />
            </Badge>
          </OverlayTrigger>
        ))}
      </div>
    </section>
  );
}

export default UserBadge;
