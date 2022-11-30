import React from "react";

const ChampPrix = ({ ...props }) => {
  return (
    <div className="input-field col s12">
      <input id="amount" type="text" {...props} />
      <span
        className="helper-text validate"
        data-error="Erreur"
        data-success="Valide"
      ></span>
      <label htmlFor="amount">Montant</label>
    </div>
  );
};

export default ChampPrix;
