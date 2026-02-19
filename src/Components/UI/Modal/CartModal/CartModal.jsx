import React from "react";
import Navbar from "../../../HeaderContent/Nav/Navbar";

const CartModal = ({ children, content, className }) => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className={`btn  ${className}`}
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        {children}
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">{content}</div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default CartModal;
