import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import React from "react";

const CustomDialog = ({ data, visible, actions }) => {
  const footerContent = (
    <div>
      <h4>C'est ce à quoi tu penses ?</h4>
      <Button
        label="Non"
        icon="pi pi-times"
        onClick={rejectButton}
        className="p-button-text"
      />
      <Button label="OuI" icon="pi pi-check" onClick={acceptButton} autoFocus />
    </div>
  );

  function rejectButton() {
    actions.update_positionCard(data, "down");
    actions.hide();
    actions.show("Niveau abaisser", "error");
  }
  function acceptButton() {
    actions.update_positionCard(data, "up");
    actions.hide();
    actions.show("Niveau augmenté", "success");
  }

  return (
    <>
      <Dialog
        header={data?.title}
        visible={visible}
        onHide={() => actions.hide()}
        footer={footerContent}
        style={{ width: "70vw" }}
      >
        <p> Réponse : {data?.response}</p>
      </Dialog>
    </>
  );
};

export default CustomDialog;
