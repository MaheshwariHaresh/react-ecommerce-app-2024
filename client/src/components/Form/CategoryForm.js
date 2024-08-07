import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue, btnName }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter New Category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {btnName}
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
