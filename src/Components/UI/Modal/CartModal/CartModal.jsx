import React from "react";
import Navbar from "../../../HeaderContent/Nav/Navbar";

const CartModal = ({ children, content, className, id, disabled }) => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        disabled={disabled}
        className={`btn  ${className}`}
        onClick={() => document.getElementById(id).showModal()}
      >
        {children}
      </button>
      <dialog id={id} className="modal">
        <div className="modal-box flex flex-wrap justify-center items-center gap-5">
          {content}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default CartModal;
