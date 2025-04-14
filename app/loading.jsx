"use client";

import ClipLoader from "react-spinners/ClipLoader";

function Loading() {
  const override = {
    display: "block",
    margin: "100px auto",
  };
  return <ClipLoader color='#3b8256' cssOverride={override} size={150} aria-label='Loading Spinner' />;
}

export default Loading;
