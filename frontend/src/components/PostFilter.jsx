import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../store/postsSlice";

function PostFilter() {
  const dispatch = useDispatch();
  const filterText = useSelector((state) => state.posts.filterText);

  const handleFilter = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filtro de Nombre"
        value={filterText}
        onChange={handleFilter}
      />
    </div>
  );
}

export default PostFilter;